const fs = require('fs');
const path = require('path');

const categories = ['uniformes', 'gorras', 'vasos', 'estampados'];
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];

const images = {};

categories.forEach(category => {
  const categoryPath = path.join(__dirname, '../public/images', category);
  
  try {
    const files = fs.readdirSync(categoryPath);
    images[category] = files
      .filter(file => imageExtensions.some(ext => file.toLowerCase().endsWith(ext)))
      .map(file => ({
        src: `/images/${category}/${file}`,
        alt: file.replace(/\.[^/.]+$/, ''),
        name: file
      }));
  } catch (error) {
    images[category] = [];
  }
});

fs.writeFileSync(
  path.join(__dirname, '../src/data/images.json'),
  JSON.stringify(images, null, 2)
);

console.log('✅ Lista de imágenes generada correctamente');
