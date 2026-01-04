import Gallery from "../components/Gallery";
import Model3D from "../components/Model3D";

export default function Uniformes() {
  const images = [
    "/images/uniformes/1.jpg",
    "/images/uniformes/2.jpg",
    "/images/uniformes/3.jpg",
  ];

  return (
    <main>
      <h1>Uniformes Personalizados</h1>
      <Model3D />
      <Gallery images={images} />
      <a href="/contacto" className="button">Cotizar uniformes</a>
    </main>
  );
}
