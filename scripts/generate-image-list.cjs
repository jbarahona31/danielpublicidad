#!/usr/bin/env node

/**
 * Script para generar images.json desde archivos .md de Netlify CMS
 * Lee todos los archivos .md en public/images y extrae las rutas de imágenes
 */

const fs = require('fs');
const path = require('path');

// Función para extraer frontmatter de un archivo .md
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  lines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      frontmatter[key.trim()] = value;
    }
  });
  
  return frontmatter;
}

// Función para leer archivos .md de una carpeta
function readCategoryImages(categoryPath, categoryName) {
  const images = [];
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
  const seenImages = new Set(); // Track unique image paths
  
  if (!fs.existsSync(categoryPath)) {
    console.log(`⚠️  Carpeta no existe: ${categoryPath}`);
    return images;
  }
  
  const files = fs.readdirSync(categoryPath);
  
  files.forEach(file => {
    const filePath = path.join(categoryPath, file);
    
    // Procesar archivos .md (creados por Netlify CMS)
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const frontmatter = extractFrontmatter(content);
      
      if (frontmatter && frontmatter.image && !seenImages.has(frontmatter.image)) {
        seenImages.add(frontmatter.image);
        images.push({
          src: frontmatter.image,
          alt: frontmatter.title || frontmatter.image.split('/').pop().replace(/\.[^/.]+$/, ''),
          name: frontmatter.title || file.replace('.md', ''),
          description: frontmatter.description || ''
        });
      }
    }
    // También procesar archivos de imagen directos (fallback)
    else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
      // Solo agregar si no es una imagen ya referenciada por un .md
      const imagePath = `/images/${categoryName}/${file}`;
      
      if (!seenImages.has(imagePath)) {
        seenImages.add(imagePath);
        images.push({
          src: imagePath,
          alt: file.replace(/\.[^/.]+$/, ''),
          name: file,
          description: ''
        });
      }
    }
  });
  
  console.log(`✅ ${categoryName}: ${images.length} imágenes encontradas`);
  return images;
}

// Función principal
function generateImagesJson() {
  console.log('🔍 Generando images.json desde archivos .md...\n');
  
  const publicPath = path.join(__dirname, '../public');
  const imagesPath = path.join(publicPath, 'images');
  
  // Verificar que existe la carpeta
  if (!fs.existsSync(imagesPath)) {
    console.error('❌ Error: No existe la carpeta public/images');
    process.exit(1);
  }
  
  // Categorías a procesar
  const categories = ['uniformes', 'gorras', 'posillos', 'estampados'];
  
  const imagesData = {};
  
  categories.forEach(category => {
    const categoryPath = path.join(imagesPath, category);
    imagesData[category] = readCategoryImages(categoryPath, category);
  });
  
  // Generar el JSON
  const outputPath = path.join(__dirname, '../src/data/images.json');
  const outputDir = path.dirname(outputPath);
  
  // Crear carpeta src/data si no existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Creada carpeta: ${outputDir}/`);
  }
  
  // Escribir el archivo
  fs.writeFileSync(outputPath, JSON.stringify(imagesData, null, 2));
  
  console.log(`\n✅ Archivo generado: ${outputPath}`);
  console.log(`📊 Total de imágenes: ${Object.values(imagesData).flat().length}`);
  
  // Mostrar resumen
  console.log('\n📋 Resumen por categoría:');
  categories.forEach(category => {
    console.log(`   👉 ${category}: ${imagesData[category].length} imágenes`);
  });
}

// Ejecutar
try {
  generateImagesJson();
  console.log('\n🎉 ¡Proceso completado exitosamente!');
} catch (error) {
  console.error('\n❌ Error al generar images.json:', error.message);
  process.exit(1);
}
