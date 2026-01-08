import React from 'react';
import { useImages } from '../hooks/useImages';
import './ImageGallery.css';

const ImageGallery = ({ category, title }) => {
  const { images, loading } = useImages(category);

  if (loading) {
    return (
      <div className="gallery-loading">
        <p>Cargando imágenes...</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="gallery-empty">
        <p>No hay imágenes en esta categoría todavía.</p>
        <p>¡Sube algunas desde el panel de administración!</p>
      </div>
    );
  }

  return (
    <div className="image-gallery">
      {title && <h2 className="gallery-title">{title}</h2>}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.alt}
              loading="lazy"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-image-name">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
