# 📖 Guía del Panel de Administración

## 🎨 Panel Personalizado

Tu panel de administración está completamente personalizado con:
- ✅ Logo de Daniel Publicidad
- ✅ Colores de marca (amarillo y negro)
- ✅ Diseño moderno y profesional
- ✅ Iconos intuitivos por categoría

## 📸 Cómo agregar imágenes

1. Haz login en `/admin`
2. Selecciona una categoría (Uniformes, Gorras, Posillos, Estampados)
3. Click en el botón amarillo **"New [Categoría]"**
4. Arrastra tu imagen o haz click para seleccionar
5. (Opcional) Agrega un nombre y descripción
6. Click en **"Publish"**

## 🗑️ Cómo eliminar imágenes

### Método 1: Desde la lista
1. Ve a la categoría correspondiente
2. Busca la imagen que quieres eliminar
3. Click en la tarjeta de la imagen
4. Click en el botón rojo **"Delete"** en la parte superior
5. Confirma la eliminación

### Método 2: Desde el editor
1. Abre la imagen que quieres eliminar
2. En la barra superior, busca el menú de opciones
3. Selecciona **"Delete entry"**
4. Confirma que quieres eliminar

### ⚠️ Importante sobre eliminación:
- La eliminación es **permanente** y no se puede deshacer
- Se eliminará tanto el archivo de metadata como la imagen
- Los cambios se aplicarán después de que Netlify haga el rebuild (1-2 minutos)
- Recibirás una confirmación antes de eliminar

## 🎯 Categorías disponibles

- 👕 **Uniformes** - Uniformes deportivos y corporativos
- 🧢 **Gorras** - Gorras personalizadas
- ☕ **Posillos** - Tazas y mugs personalizados
- 🎨 **Estampados** - Diseños de estampados

## 🔒 Seguridad

- Solo usuarios autenticados pueden acceder
- Todos los cambios se registran en Git
- Puedes revertir cambios desde el historial
- Confirmación requerida antes de eliminar

## 🆘 Solución de problemas

### No veo el botón "Delete"
- Asegúrate de haber abierto la entrada (no solo verla en la lista)
- Verifica que tengas permisos de administrador
- Recarga el panel (Ctrl + R)

### La imagen no se elimina
- Espera 1-2 minutos para que Netlify procese
- Verifica tu conexión a internet
- Revisa que el deploy se haya completado en Netlify

### Error al eliminar
- Cierra sesión y vuelve a entrar
- Limpia caché del navegador
- Contacta soporte si persiste
