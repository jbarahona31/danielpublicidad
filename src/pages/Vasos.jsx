import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

export default function Vasos() {
  return (
    <main>
      <h1>Vasos Personalizados</h1>
      <ImageGallery category="vasos" title="Nuestros Vasos" />
      <Link to="/contacto" className="button">Cotizar vasos</Link>
    </main>
  );
}
