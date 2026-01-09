// ============================================
// PERSONALIZACIÓN LIGERA DEL CMS
// Daniel Publicidad
// ============================================

// Esperar a que el CMS cargue completamente
if (window.CMS) {
  // Registrar estilos personalizados
  CMS.registerPreviewStyle('/admin/custom.css');
}

// Pequeñas mejoras después de que cargue
window.addEventListener('load', function() {
  console.log('✅ Panel de Administración - Daniel Publicidad');
  
  // Esperar un momento para que el DOM esté listo
  setTimeout(function() {
    // Agregar confirmación a botones de eliminar
    document.addEventListener('click', function(e) {
      const target = e.target;
      if (target.tagName === 'BUTTON' && 
          (target.textContent.includes('Delete') || 
           target.textContent.includes('Eliminar'))) {
        const confirmed = confirm('¿Estás seguro de que quieres eliminar esta imagen?\n\nEsta acción no se puede deshacer.');
        if (!confirmed) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }, true);
  }, 2000);
});
