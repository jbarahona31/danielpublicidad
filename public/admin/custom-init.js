// ============================================
// CONFIGURACIÓN PERSONALIZADA DEL CMS
// Daniel Publicidad
// ============================================
/* global CMS */

console.log('🎨 Daniel Publicidad - Panel de Administración');

// Esperar a que el CMS cargue
if (window.CMS) {
  // Registrar estilos de preview
  CMS.registerPreviewStyle('/admin/custom.css');
  console.log('✅ Panel personalizado cargado');
}

// Mejorar mensajes después de que todo cargue
window.addEventListener('load', function() {
  setTimeout(function() {
    // Agregar confirmación a botones de eliminar
    document.addEventListener('click', function(e) {
      const target = e.target;
      
      // Detectar botones de eliminar
      if (
        target.tagName === 'BUTTON' &&
        (target.textContent.includes('Eliminar') ||
         target.textContent.includes('Delete') ||
         target.classList.contains('danger') ||
         target.getAttribute('title')?.includes('Delete'))
      ) {
        const confirmed = confirm(
          '¿Estás seguro de que quieres eliminar esta imagen?\n\n' +
          'Esta acción no se puede deshacer.'
        );
        
        if (!confirmed) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }, true);
    
    console.log('✅ Confirmaciones configuradas');
  }, 2000);
});
