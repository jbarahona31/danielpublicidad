import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

export default function Estampados() {
  return (
    <main>
      <h1>Estampados</h1>
      <ImageGallery category="estampados" title="Nuestros Estampados" />
      <Link to="/contacto" className="button">Cotizar estampados</Link>
    </main>
  );
}
