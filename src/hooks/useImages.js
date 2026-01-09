import { useState, useEffect } from 'react';

export const useImages = (category) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Importar el JSON generado por el script
        const imagesData = await import('../data/images.json');
        
        if (imagesData.default && imagesData.default[category]) {
          setImages(imagesData.default[category]);
        } else {
          console.warn(`No se encontraron imágenes para la categoría: ${category}`);
          setImages([]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar imágenes:', error);
        setImages([]);
        setLoading(false);
      }
    };

    loadImages();
  }, [category]);

  return { images, loading };
};
