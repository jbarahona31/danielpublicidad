# 3D Product Visualization - Guía de Usuario

## 🎯 Descripción General

Este sistema permite visualizar productos en 3D interactivo en todas las páginas de productos del sitio web (Uniformes, Gorras, Vasos y Estampados).

## ✨ Características

- **Visualización 3D interactiva**: Rota, amplía y desplaza modelos 3D
- **Modelos reutilizables**: Un modelo base por categoría de producto
- **Texturas dinámicas**: Cambia las texturas sin duplicar modelos
- **Diseño responsivo**: Funciona en desktop y móvil
- **Iluminación profesional**: Configuración de luces para renderizado realista
- **Manejo de errores**: Muestra placeholder cuando los modelos no están disponibles
- **Carga optimizada**: Loading states para mejor UX

## 📁 Estructura de Archivos

```
public/models/
├── uniformes/
│   └── camiseta.glb          # Modelo base de camiseta
├── gorras/
│   └── gorra.glb             # Modelo base de gorra
├── vasos/
│   └── vaso.glb              # Modelo base de vaso/mug
└── estampados/
    └── camiseta.glb          # Modelo base de camiseta para estampados
```

## 🚀 Cómo Agregar Modelos 3D

### Paso 1: Obtener Modelos 3D

Puedes obtener modelos 3D de varias formas:

1. **Crear tus propios modelos** con herramientas como:
   - [Blender](https://www.blender.org/) (gratis y open source)
   - SketchUp
   - 3ds Max
   - Maya

2. **Descargar modelos gratuitos** de:
   - [Sketchfab](https://sketchfab.com/) - Muchos modelos gratis
   - [TurboSquid](https://www.turbosquid.com/)
   - [CGTrader](https://www.cgtrader.com/)
   - [Free3D](https://free3d.com/)

3. **Modelos comerciales** para mayor calidad profesional

### Paso 2: Convertir a Formato GLB

El visor 3D requiere modelos en formato `.glb` (GL Transmission Format Binary).

**Si tu modelo está en otro formato (.fbx, .obj, .stl, etc.):**

1. Abre el modelo en [Blender](https://www.blender.org/)
2. Ve a `File > Export > glTF 2.0 (.glb/.gltf)`
3. Selecciona formato `.glb`
4. Exporta

**Herramientas online para conversión:**
- [gltf.report](https://gltf.report/) - También optimiza modelos
- [Blender Online](https://www.blender.org/)

### Paso 3: Optimizar el Modelo

Para mejor rendimiento web:

1. **Reducir polígonos**: El modelo debe ser "low-poly" (< 50k polígonos)
2. **Optimizar texturas**: Usa texturas de máximo 2048x2048px
3. **Usar herramienta de optimización**: [gltf.report](https://gltf.report/)

### Paso 4: Colocar el Archivo

Coloca tu archivo `.glb` en la carpeta correspondiente:

```bash
# Para uniformes
public/models/uniformes/camiseta.glb

# Para gorras
public/models/gorras/gorra.glb

# Para vasos
public/models/vasos/vaso.glb

# Para estampados
public/models/estampados/camiseta.glb
```

### Paso 5: Verificar

1. Inicia el servidor de desarrollo: `npm run dev`
2. Navega a la página del producto
3. El modelo 3D debería cargarse automáticamente

## 🎨 Agregar Texturas Dinámicas

Para aplicar diferentes diseños al mismo modelo base:

```jsx
<Product3DViewer 
  modelPath="/models/uniformes/camiseta.glb"
  texturePath="/images/uniformes/diseño1.jpg"  // ← Textura dinámica
  height={500}
/>
```

Las texturas deben estar en formato `.jpg` o `.png` y ubicadas en:
- `public/images/uniformes/`
- `public/images/gorras/`
- `public/images/vasos/`
- `public/images/estampados/`

## ⚙️ Configuración Avanzada

### Ajustar Posición de Cámara

```jsx
<Product3DViewer 
  modelPath="/models/uniformes/camiseta.glb"
  cameraPosition={[0, 2, 8]}  // [x, y, z]
/>
```

### Ajustar Altura del Visor

```jsx
<Product3DViewer 
  modelPath="/models/uniformes/camiseta.glb"
  height={600}  // En píxeles
/>
```

## 🔧 Solución de Problemas

### El modelo no se carga

1. **Verifica la ruta del archivo**: Debe estar en `public/models/[categoría]/`
2. **Verifica el formato**: Debe ser `.glb` (no `.gltf`)
3. **Revisa la consola**: Abre DevTools (F12) para ver errores
4. **Tamaño del archivo**: Si es muy grande (>10MB), optimízalo

### El modelo se ve negro

- **Falta de texturas**: El modelo puede necesitar texturas incorporadas
- **Normales invertidas**: Revisa el modelo en Blender

### El modelo está muy grande o muy pequeño

- **Escalar en Blender**: Antes de exportar, escala el modelo
- **Ajustar zoom**: Cambia la posición inicial de la cámara

### Baja performance

- **Reducir polígonos**: Usa decimation en Blender
- **Optimizar texturas**: Reduce resolución de imágenes
- **Usar compresión Draco**: Activa al exportar desde Blender

## 📚 Recursos Útiles

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Blender Tutorials](https://www.blender.org/support/tutorials/)
- [glTF Specification](https://www.khronos.org/gltf/)

## 💡 Mejores Prácticas

1. **Mantén los modelos ligeros**: < 5MB por archivo
2. **Usa un solo modelo base por categoría**: Cambia texturas, no modelos
3. **Prueba en móvil**: Los modelos pesados afectan rendimiento móvil
4. **Versiona tus modelos**: Mantén copias de respaldo
5. **Documenta cambios**: Anota modificaciones importantes

## 🆘 Soporte

Si necesitas ayuda:
1. Revisa esta documentación
2. Consulta los logs de error en la consola del navegador
3. Revisa el código en `src/components/Product3DViewer.jsx`

---

**Nota**: Actualmente, el sistema muestra un cubo dorado como placeholder cuando no hay modelos `.glb` disponibles. Este es el comportamiento esperado hasta que agregues tus modelos reales.
