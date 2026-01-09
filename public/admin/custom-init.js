// ============================================
// CONFIGURACIÓN PERSONALIZADA DEL CMS
// Daniel Publicidad
// ============================================

// Esperar a que el CMS cargue
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('🎨 Inicializando personalización del CMS...');
  
  // Aplicar estilos después de que el CMS cargue
  setTimeout(() => {
    customizeCMS();
  }, 1000);
  
  // Observar cambios en el DOM para mantener la personalización
  const observer = new MutationObserver((mutations) => {
    customizeCMS();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

function customizeCMS() {
  // Agregar título personalizado al header
  const header = document.querySelector('[class*="AppHeader"]');
  if (header && !header.dataset.customized) {
    header.dataset.customized = 'true';
    
    // Buscar el título
    const title = header.querySelector('h1, a');
    if (title && !title.textContent.includes('Daniel Publicidad')) {
      title.textContent = 'Daniel Publicidad';
    }
  }
  
  // Mejorar mensaje de "No Entries"
  const noEntries = document.querySelector('[class*="NoEntries"], [class*="EmptyMessage"]');
  if (noEntries && !noEntries.dataset.customized) {
    noEntries.dataset.customized = 'true';
    noEntries.innerHTML = `
      <div style="text-align: center; padding: 3rem;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">📸</div>
        <h3 style="color: #1f2937; font-size: 1.5rem; margin-bottom: 0.5rem;">
          No hay imágenes aún
        </h3>
        <p style="color: #6b7280; font-size: 1.1rem;">
          Agrega tu primera imagen usando el botón amarillo de arriba
        </p>
      </div>
    `;
  }
  
  // Confirmar antes de eliminar
  const deleteButtons = document.querySelectorAll('button[class*="danger"], button[class*="Delete"], button[title*="Delete"]');
  deleteButtons.forEach(btn => {
    if (!btn.dataset.confirmAdded) {
      btn.dataset.confirmAdded = 'true';
      const originalClick = btn.onclick;
      btn.onclick = function(e) {
        const confirmed = confirm('¿Estás seguro de que quieres eliminar esta imagen?\n\nEsta acción no se puede deshacer.');
        if (confirmed) {
          if (originalClick) {
            originalClick.call(this, e);
          }
          return true;
        } else {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };
    }
  });
  
  console.log('✅ CMS personalizado aplicado');
}

// Registrar estilos en el preview si CMS está disponible
if (window.CMS) {
  window.CMS.registerPreviewStyle('/admin/custom.css');
  console.log('✅ Estilos de preview registrados');
}
