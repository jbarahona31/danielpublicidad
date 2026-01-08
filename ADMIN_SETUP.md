# 📸 Cómo Subir Imágenes

## Paso a paso:

1. **Accede al panel**
   - Ve a: `https://tu-sitio.netlify.app/admin`
   - Inicia sesión con tu email y contraseña

2. **Selecciona una categoría**
   - Click en: Uniformes, Gorras, Posillos o Estampados

3. **Crea una nueva entrada**
   - Click en el botón "New [Categoría]" (ej: "New Uniforme")

4. **Sube tu imagen**
   - Verás un campo grande que dice "Imagen del Producto"
   - Arrastra la imagen desde tu computadora
   - O haz click para seleccionarla desde tus archivos

5. **Agrega información (opcional)**
   - Nombre del Producto: Dale un nombre descriptivo
   - Descripción: Agrega detalles si quieres

6. **Publica**
   - Click en "Publish" en la esquina superior derecha
   - ¡Tu imagen aparecerá automáticamente en la web!

## ✅ Formatos de imagen soportados:
- JPG / JPEG
- PNG
- WEBP
- GIF

## 💡 Consejos:
- Usa imágenes de buena calidad
- Tamaño recomendado: 800x800px o mayor
- Peso recomendado: menos de 2MB por imagen

---

## 🔧 Solución de Problemas

### Error: "Failed to execute 'removeChild'"

Si ves este error al subir imágenes:

1. **Cierra sesión** en el panel `/admin`
2. **Borra el caché** del navegador (Ctrl+Shift+Delete)
3. **Abre ventana de incógnito**
4. **Vuelve a entrar** a `/admin`
5. **Intenta subir de nuevo**

### Si el problema persiste:

1. Ve a la consola del navegador (F12)
2. Ve a "Application" → "Local Storage"
3. Elimina todas las entradas que contengan "netlify-cms" o "decap-cms"
4. Recarga la página

### Formato recomendado de imágenes:

- **Formato:** JPG o PNG
- **Tamaño:** Máximo 2MB
- **Dimensiones:** 800x800px o mayor
- **Nombres de archivo:** Sin espacios ni caracteres especiales

---

## 📦 Categorías de Productos

- 👕 **Uniformes** - Uniformes deportivos y corporativos
- 🧢 **Gorras** - Gorras personalizadas
- ☕ **Posillos** - Tazas y mugs personalizados
- 🎨 **Estampados** - Diseños de estampados

## 🎨 Panel de Administración

El panel de administración está personalizado con los colores de Daniel Publicidad:
- Amarillo dorado (#fbbf24)
- Negro/Gris oscuro (#1f2937)
- Gradientes modernos
- Iconos intuitivos para cada categoría

---

## Configuración del Panel de Administración

### Pasos para activar el login de administrador:

1. Ir al panel de Netlify → **Site settings**
2. **Identity** → Click en "Enable Identity"
3. **Identity** → **Registration** → Seleccionar "Invite only"
4. **Identity** → **Services** → Activar "Git Gateway"
5. **Identity** → **Invite users** → Agregar tu email
6. Revisar tu correo y aceptar la invitación
7. Acceder a: `https://tu-sitio.netlify.app/admin`

