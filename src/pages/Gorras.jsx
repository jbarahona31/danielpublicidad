import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

export default function Gorras() {
  return (
    <main>
      <h1>Gorras Personalizadas</h1>
      <ImageGallery category="gorras" title="Nuestras Gorras" />
      <Link to="/contacto" className="button">Cotizar gorras</Link>
    </main>
  );
}
