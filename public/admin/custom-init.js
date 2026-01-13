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

// ============================================
// INSERTAR LOGO UNA SOLA VEZ
// ============================================

let logoInserted = false;
let checkHeaderInterval = null;

function insertLogo() {
  if (logoInserted) return;
  
  // Limpiar intervalo anterior si existe
  if (checkHeaderInterval) {
    clearInterval(checkHeaderInterval);
  }
  
  // Esperar a que el DOM esté listo
  checkHeaderInterval = setInterval(() => {
    // Buscar el header principal (el primero en el DOM)
    const headers = document.querySelectorAll('[class*="AppHeader"]');
    
    if (headers.length > 0) {
      const mainHeader = headers[0]; // Solo el primero
      
      // Verificar que no tenga ya el logo
      if (!mainHeader.querySelector('.daniel-logo')) {
        // Crear elemento del logo de forma segura
        const logoDiv = document.createElement('div');
        logoDiv.className = 'daniel-logo';
        
        const logoImg = document.createElement('img');
        logoImg.src = '/logo.png';
        logoImg.alt = 'Daniel Publicidad';
        logoImg.style.height = '60px';
        logoImg.style.marginRight = '1rem';
        
        logoDiv.appendChild(logoImg);
        
        // Insertar al inicio del header
        mainHeader.insertBefore(logoDiv, mainHeader.firstChild);
        
        logoInserted = true;
        clearInterval(checkHeaderInterval);
        checkHeaderInterval = null;
        console.log('✅ Logo insertado correctamente');
      }
    }
  }, 100);
  
  // Timeout de seguridad
  setTimeout(() => {
    if (checkHeaderInterval) {
      clearInterval(checkHeaderInterval);
      checkHeaderInterval = null;
    }
  }, 5000);
}

// Ejecutar cuando el CMS cargue
if (window.CMS) {
  CMS.registerEventListener({
    name: 'mounted',
    handler: insertLogo
  });
}

// Aplicar ajustes después de la carga
window.addEventListener('load', function() {
  // Ejecutar inserción de logo
  setTimeout(insertLogo, 1000);
  
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
