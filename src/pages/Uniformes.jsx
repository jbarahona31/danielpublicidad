import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function Uniformes() {
  const images = [
    "/images/uniformes/1.jpg",
    "/images/uniformes/2.jpg",
    "/images/uniformes/3.jpg",
  ];

  return (
    <main>
      <h1>Uniformes Personalizados</h1>
      <Gallery images={images} />
      <Link to="/contacto" className="button">Cotizar uniformes</Link>
    </main>
  );
}
