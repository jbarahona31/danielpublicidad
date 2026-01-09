// ============================================
// CONFIGURACIÓN PERSONALIZADA DEL CMS
// Daniel Publicidad
// ============================================

console.log('🎨 Daniel Publicidad - Panel de Administración v2.0');

// Esperar a que el CMS cargue
if (window.CMS) {
  CMS.registerPreviewStyle('/admin/custom.css');
  console.log('✅ Estilos personalizados cargados');
}

// Aplicar ajustes después de la carga
window.addEventListener('load', function() {
  setTimeout(function() {
    // Confirmación para botones de eliminar
    document.addEventListener('click', function(e) {
      const target = e.target.closest('button');
      
      if (target && (
        target.textContent.includes('Eliminar') ||
        target.textContent.includes('Delete') ||
        target.classList.toString().includes('danger')
      )) {
        const confirmed = confirm(
          '¿Estás seguro de que quieres eliminar?\n\n' +
          'Esta acción no se puede deshacer.'
        );
        
        if (!confirmed) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    }, true);
    
    console.log('✅ Panel personalizado completamente cargado');
  }, 1000);
});
