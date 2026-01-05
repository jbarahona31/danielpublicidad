# 3D Models Directory

Esta carpeta contiene los modelos 3D base para cada categoría de producto.

## Estructura

```
models/
├── uniformes/
│   └── camiseta.glb (modelo base de camiseta)
├── gorras/
│   └── gorra.glb (modelo base de gorra)
├── vasos/
│   └── vaso.glb (modelo base de vaso/mug)
└── estampados/
    └── camiseta.glb (modelo base de camiseta para estampados)
```

## Formato de Modelos

- **Formato requerido**: `.glb` (GL Transmission Format Binary)
- **Tamaño recomendado**: Menos de 5MB por modelo
- **Optimización**: Modelos low-poly optimizados para web

## Texturas

Las texturas se cargan dinámicamente desde:
- `public/images/uniformes/`
- `public/images/gorras/`
- `public/images/vasos/`
- `public/images/estampados/`

## Cómo agregar un nuevo modelo

1. Exporta tu modelo 3D en formato `.glb` desde Blender, SketchUp o tu herramienta 3D
2. Optimiza el modelo (reduce polígonos si es necesario)
3. Coloca el archivo en la carpeta de categoría correspondiente
4. Actualiza el path en el componente de la página correspondiente

## Herramientas recomendadas

- **Blender** (gratis): https://www.blender.org/
- **Sketchfab** (modelos gratis): https://sketchfab.com/
- **gltf.report**: Optimizador de modelos GLB
- **Three.js Editor**: https://threejs.org/editor/

## Placeholders actuales

Actualmente, cuando no hay un modelo `.glb` disponible, se muestra un cubo 3D amarillo como placeholder.
Para agregar modelos reales, simplemente coloca los archivos `.glb` en las carpetas correspondientes.
