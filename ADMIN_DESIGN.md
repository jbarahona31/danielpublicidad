# 🎨 Diseño del Panel de Administración

## Logo

El logo de Daniel Publicidad se muestra en el header del panel de administración.

**Ubicación:** `public/logo.png`

**Requisitos del logo:**
- Formato: PNG con fondo transparente (recomendado)
- Dimensiones recomendadas: 200x50px o similar
- Peso: Menor a 100KB

## Colores de Marca

El panel usa los colores oficiales de Daniel Publicidad:

- **Amarillo Principal:** `#fbbf24`
- **Amarillo Hover:** `#f59e0b`
- **Negro Principal:** `#1f2937`
- **Gris Oscuro:** `#374151`

## Iconos de Categorías

Cada categoría tiene su propio icono:

- 👕 **Uniformes** - Uniformes deportivos y corporativos
- 🧢 **Gorras** - Gorras personalizadas
- ☕ **Posillos** - Tazas y mugs personalizados
- 🎨 **Estampados** - Diseños de estampados

## Personalización

El diseño se personaliza mediante:

1. **CSS:** `public/admin/custom.css`
2. **JavaScript:** Configuración en `public/admin/index.html`
3. **Logo:** Insertado dinámicamente por JavaScript

### Modificar el logo

Si necesitas cambiar el logo, reemplaza el archivo `public/logo.png` y limpia el caché del navegador.

### Modificar colores

Edita las variables CSS en `public/admin/custom.css`:

```css
:root {
  --amarillo-principal: #fbbf24;
  --negro-principal: #1f2937;
}
```

## Características del Diseño

✅ Logo de la empresa en el header  
✅ Colores de marca consistentes  
✅ Iconos grandes para cada categoría  
✅ Animaciones suaves  
✅ Efectos hover profesionales  
✅ Diseño responsive  
✅ Scrollbar personalizado  
✅ Botones con estilo de marca  

## Troubleshooting

### El logo no aparece

1. Verifica que existe `public/logo.png`
2. Limpia el caché del navegador (Ctrl+Shift+Delete)
3. Recarga el panel con Ctrl+F5

### Los colores no cambian

1. Verifica que `custom.css` está linkeado en `index.html`
2. Limpia el caché del navegador
3. Verifica que no hay errores en la consola del navegador

### Los iconos no aparecen

1. Verifica que el JavaScript en `index.html` se está ejecutando
2. Abre la consola del navegador (F12) y busca errores
3. Espera unos segundos, los iconos se agregan dinámicamente
