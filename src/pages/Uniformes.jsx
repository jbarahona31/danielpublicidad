import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

export default function Uniformes() {
  return (
    <main>
      <h1>Uniformes Personalizados</h1>
      <ImageGallery category="uniformes" title="Nuestros Uniformes" />
      <Link to="/contacto" className="button">Cotizar uniformes</Link>
    </main>
  );
}
