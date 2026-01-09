# Daniel Publicidad

Sitio web corporativo para Daniel Publicidad, especialistas en uniformes deportivos personalizados, estampados, gorras y posillos publicitarios.

## 🚀 Stack Tecnológico

- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **React Router** - Navegación entre páginas
- **Decap CMS** - Sistema de gestión de contenido
- **Netlify Identity** - Sistema de autenticación

## 📦 Estructura del Proyecto

```
danielpublicidad/
├── public/
│   ├── admin/              # Panel de administración
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/             # Imágenes gestionadas por CMS
│   │   ├── uniformes/
│   │   ├── estampados/
│   │   ├── gorras/
│   │   └── posillos/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Uniformes.jsx
│   │   ├── Estampados.jsx
│   │   ├── Gorras.jsx
│   │   ├── Posillos.jsx
│   │   └── Contacto.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── ADMIN_SETUP.md          # Instrucciones de configuración del admin
└── package.json
```

## 🎨 Diseño

- **Tema oscuro**: Fondo negro (#0f0f0f)
- **Color principal**: Amarillo (#facc15)
- **Color de acento**: Rojo (#e10600)
- **Tipografía**: Segoe UI, Arial, sans-serif

## 🛠️ Comandos

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Linter
npm run lint
```

## 📄 Páginas

- **Inicio** - Presentación de la empresa
- **Uniformes** - Uniformes deportivos personalizados
- **Estampados** - Servicios de estampado
- **Gorras** - Gorras personalizadas
- **Posillos** - Tazas y mugs personalizados
- **Contacto** - Información de contacto

## 🔐 Panel de Administración

El sitio incluye un panel de administración en `/admin` para gestionar imágenes de productos. Ver [ADMIN_SETUP.md](./ADMIN_SETUP.md) para instrucciones de configuración.

## 📸 Sistema de Imágenes

### Cómo funciona:

1. **Subir imágenes**: Usa el panel `/admin` para subir imágenes a cada categoría
2. **Netlify CMS**: Crea archivos `.md` con metadata en `public/images/[categoria]/`
3. **Build automático**: Netlify detecta los cambios y hace rebuild
4. **Script**: `generate-image-list.cjs` lee todos los `.md` y genera `src/data/images.json`
5. **La página**: Lee el JSON y muestra las imágenes en las galerías

### Desarrollo local:

Para probar localmente después de agregar imágenes:

```bash
npm run generate-images
npm run dev
```

### Categorías disponibles:

- 👕 **Uniformes**: `public/images/uniformes/`
- 🧢 **Gorras**: `public/images/gorras/`
- ☕ **Posillos**: `public/images/posillos/`
- 🎨 **Estampados**: `public/images/estampados/`

### Flujo completo:

```
Usuario sube imagen en /admin
↓
Netlify CMS crea archivo .md con metadata
↓
Git detecta cambio → Push al repositorio
↓
Netlify detecta cambio → Inicia build
↓
Ejecuta: npm run build (incluye prebuild script)
↓
Script lee todos los .md y extrae rutas de imágenes
↓
Genera src/data/images.json actualizado
↓
Vite hace build de React
↓
useImages lee images.json
↓
ImageGallery muestra las imágenes
↓
✅ ¡La imagen aparece en la página!
```

