import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose, onNext, onPrev, onWhatsApp, hasMultiple }) => {
  useEffect(() => {
    // Cerrar con tecla ESC
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasMultiple) onNext();
      if (e.key === 'ArrowLeft' && hasMultiple) onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevenir scroll

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev, hasMultiple]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="modal-image-wrapper">
          <img 
            src={image.src} 
            alt={image.alt}
            className="modal-image"
          />
        </div>

        <div className="modal-info">
          <h2 className="modal-title">{image.alt || image.name}</h2>
          {image.description && (
            <p className="modal-description">{image.description}</p>
          )}
        </div>

        <button className="modal-whatsapp-btn" onClick={onWhatsApp}>
          <span className="whatsapp-icon">📱</span>
          Pedir este diseño por WhatsApp
        </button>

        {hasMultiple && (
          <div className="modal-navigation">
            <button 
              className="modal-nav-btn modal-prev"
              onClick={onPrev}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button 
              className="modal-nav-btn modal-next"
              onClick={onNext}
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
