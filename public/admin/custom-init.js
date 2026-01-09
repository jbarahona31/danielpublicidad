// ============================================
// PERSONALIZACIÓN LIGERA DEL CMS
// Daniel Publicidad
// ============================================

// Constantes
const DOM_READY_DELAY = 1000; // Delay en ms para esperar DOM del CMS

// Registrar estilos cuando CMS esté disponible
function registerCMSStyles() {
  if (window.CMS) {
    CMS.registerPreviewStyle('/admin/custom.css');
    console.log('✅ Estilos CMS registrados');
  }
}

// Pequeñas mejoras después de que cargue
window.addEventListener('load', function() {
  console.log('✅ Panel de Administración - Daniel Publicidad');
  
  // Intentar registrar estilos
  registerCMSStyles();
  
  // Esperar un momento para que el DOM del CMS esté listo
  setTimeout(function() {
    // Agregar confirmación a botones de eliminar
    // Usar capture phase para interceptar antes que otros handlers
    document.addEventListener('click', function(e) {
      const target = e.target;
      // Buscar botón delete por clase o atributos más robustos
      const isDeleteButton = target.tagName === 'BUTTON' && (
        target.classList.contains('danger') ||
        target.title?.includes('Delete') ||
        target.title?.includes('delete') ||
        target.textContent?.includes('Delete') ||
        target.textContent?.includes('Eliminar')
      );
      
      if (isDeleteButton) {
        const confirmed = confirm('¿Estás seguro de que quieres eliminar esta imagen?\n\nEsta acción no se puede deshacer.');
        if (!confirmed) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }, true);
  }, DOM_READY_DELAY);
});
