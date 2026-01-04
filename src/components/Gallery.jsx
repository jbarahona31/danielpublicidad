export default function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div className="gallery-item" key={index}>
          <img src={img} alt="Producto Daniel Publicidad" />
        </div>
      ))}
    </div>
  );
}
