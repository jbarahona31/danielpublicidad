import React, { useState } from 'react';
import { useImages } from '../hooks/useImages';
import ImageModal from './ImageModal';
import './ImageGallery.css';

const ImageGallery = ({ category, title }) => {
  const { images, loading } = useImages(category);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const whatsappNumber = '573008013669'; // Colombia +57 300 801 3669

  const openWhatsApp = (imageName) => {
    const message = `Hola! Me interesa el diseño: ${imageName}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openModal = (image, index) => {
    setSelectedImage({ ...image, index });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ ...images[newIndex], index: newIndex });
  };

  if (loading) {
    return (
      <div className="gallery-loading">
        <div className="spinner"></div>
        <p>Cargando diseños...</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="gallery-empty">
        <div className="empty-icon">📸</div>
        <p className="empty-title">No hay diseños en esta categoría todavía</p>
        <p className="empty-subtitle">¡Pronto agregaremos nuevos diseños increíbles!</p>
      </div>
    );
  }

  return (
    <>
      <div className="image-gallery">
        {title && <h2 className="gallery-title">{title}</h2>}
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={image.src} className="gallery-card">
              <div 
                className="card-image-wrapper"
                onClick={() => openModal(image, index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                  className="card-image"
                />
                <div className="card-overlay">
                  <span className="zoom-icon">🔍</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{image.alt || image.name}</h3>
                {image.description && (
                  <p className="card-description">{image.description}</p>
                )}
              </div>
              
              <button 
                className="card-whatsapp-btn"
                onClick={() => openWhatsApp(image.alt || image.name)}
              >
                <span className="whatsapp-icon">📱</span>
                Consultar por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
          onNext={() => navigateImage('next')}
          onPrev={() => navigateImage('prev')}
          onWhatsApp={() => openWhatsApp(selectedImage.alt || selectedImage.name)}
          hasMultiple={images.length > 1}
        />
      )}
    </>
  );
};

export default ImageGallery;
