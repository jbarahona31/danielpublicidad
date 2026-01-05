import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";

/**
 * Model3DWithTexture Component - Loads model with texture
 */
function Model3DWithTexture({ modelPath, texturePath }) {
  const meshRef = useRef();
  const { scene } = useGLTF(modelPath);
  const texture = useTexture(texturePath);
  
  // Clone the scene to avoid modifying the cached original
  const clonedScene = scene.clone();
  
  // Apply texture to materials
  if (texture && clonedScene) {
    // Configure texture wrapping
    const configuredTexture = texture.clone();
    configuredTexture.wrapS = THREE.RepeatWrapping;
    configuredTexture.wrapT = THREE.RepeatWrapping;
    
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        // Preserve original material properties
        const originalMaterial = child.material;
        
        // Create new material with texture
        child.material = new THREE.MeshStandardMaterial({
          map: configuredTexture,
          roughness: originalMaterial.roughness || 0.5,
          metalness: originalMaterial.metalness || 0.1,
        });
      }
    });
  }

  // Optional: Add subtle rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={meshRef} object={clonedScene} />;
}

/**
 * Model3DBasic Component - Loads model without texture
 */
function Model3DBasic({ modelPath }) {
  const meshRef = useRef();
  const { scene } = useGLTF(modelPath);
  
  // Clone the scene to avoid modifying the cached original
  const clonedScene = scene.clone();

  // Optional: Add subtle rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={meshRef} object={clonedScene} />;
}

/**
 * Model3D Component - Loads and displays a 3D model with optional texture
 * @param {string} modelPath - Path to the .glb model file
 * @param {string} texturePath - Optional path to texture image
 */
function Model3D({ modelPath, texturePath }) {
  if (texturePath) {
    return <Model3DWithTexture modelPath={modelPath} texturePath={texturePath} />;
  }
  return <Model3DBasic modelPath={modelPath} />;
}

/**
 * Fallback Box for when model is not available
 */
function FallbackModel() {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#facc15" roughness={0.3} metalness={0.6} />
    </mesh>
  );
}

/**
 * Loading Component
 */
function Loader() {
  return (
    <Html center>
      <div style={{
        color: '#facc15',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '20px 30px',
        borderRadius: '12px',
        border: '2px solid #facc15',
      }}>
        Cargando modelo 3D...
      </div>
    </Html>
  );
}

/**
 * ErrorBoundary Component for 3D model loading errors
 */
class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Error loading 3D model:", error);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      return <FallbackModel />;
    }
    return this.props.children;
  }
}

/**
 * Product3DViewer Component - Main 3D viewer with controls and lighting
 * @param {string} modelPath - Path to the .glb model file (e.g., "/models/uniformes/camiseta.glb")
 * @param {string} texturePath - Optional path to texture image
 * @param {number} height - Container height in pixels (default: 500)
 * @param {object} cameraPosition - Camera position [x, y, z] (default: [0, 0, 5])
 */
export default function Product3DViewer({ 
  modelPath, 
  texturePath, 
  height = 500,
  cameraPosition = [0, 0, 5]
}) {
  const [error, setError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  return (
    <div 
      style={{ 
        height: `${height}px`,
        width: '100%',
        maxWidth: '800px',
        margin: '40px auto',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '2px solid #facc15',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        boxShadow: '0 8px 32px rgba(250, 204, 21, 0.15)',
        position: 'relative',
      }}
    >
      <Canvas
        camera={{ 
          position: cameraPosition, 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0f0f0f', 1);
        }}
        onError={(err) => {
          console.error("Canvas error:", err);
          setError(true);
        }}
      >
        {/* Professional Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow
        />
        <directionalLight 
          position={[-5, -5, -5]} 
          intensity={0.3} 
        />
        <spotLight 
          position={[0, 10, 0]} 
          intensity={0.5} 
          angle={0.6} 
          penumbra={1}
        />
        
        {/* 3D Model with Suspense for loading */}
        <Suspense fallback={<Loader />}>
          <ModelErrorBoundary onError={() => setShowFallback(true)}>
            {modelPath && !error && !showFallback ? (
              <Model3D 
                modelPath={modelPath} 
                texturePath={texturePath}
              />
            ) : (
              <FallbackModel />
            )}
          </ModelErrorBoundary>
        </Suspense>

        {/* Orbit Controls for interaction */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.8}
          zoomSpeed={0.8}
          panSpeed={0.5}
        />
      </Canvas>
      
      {/* Instructions overlay */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '12px 24px',
        borderRadius: '20px',
        border: '1px solid rgba(250, 204, 21, 0.3)',
        color: '#facc15',
        fontSize: '14px',
        fontWeight: '500',
        pointerEvents: 'none',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
      }}>
        🖱️ Arrastra para rotar • 🔍 Scroll para zoom
      </div>
      
      {/* Notice for missing models */}
      {(error || showFallback) && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(250, 204, 21, 0.1)',
          padding: '10px 20px',
          borderRadius: '10px',
          border: '1px solid rgba(250, 204, 21, 0.5)',
          color: '#facc15',
          fontSize: '13px',
          fontWeight: '500',
          pointerEvents: 'none',
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
          maxWidth: '80%',
        }}>
          📦 Modelo 3D en preparación - Mostrando vista previa
        </div>
      )}
    </div>
  );
}
