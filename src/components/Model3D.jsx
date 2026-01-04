import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[1.5, 1, 0.3]} />
      <meshStandardMaterial color="#facc15" />
    </mesh>
  );
}

export default function Model3D() {
  return (
    <div style={{ height: "400px" }}>
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Box />
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  );
}
