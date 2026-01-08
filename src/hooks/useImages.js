import { useState, useEffect } from 'react';
import imagesData from '../data/images.json';

export const useImages = (category) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Try to use Vite's import.meta.glob for dynamic loading
        // This will be replaced by the static list during build
        const imageModules = import.meta.glob('/public/images/**/*.{png,jpg,jpeg,webp,gif}', { eager: false });
        
        const imagePaths = Object.keys(imageModules)
          .filter(path => path.includes(`/${category}/`))
          .map(path => ({
            src: path.replace('/public', ''),
            alt: path.split('/').pop().replace(/\.[^/.]+$/, ''),
            name: path.split('/').pop()
          }));

        // Fallback to static JSON if dynamic loading doesn't find images
        if (imagePaths.length === 0 && imagesData[category]) {
          setImages(imagesData[category]);
        } else {
          setImages(imagePaths);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        // Fallback to static JSON
        if (imagesData[category]) {
          setImages(imagesData[category]);
        }
        setLoading(false);
      }
    };

    loadImages();
  }, [category]);

  return { images, loading };
};
