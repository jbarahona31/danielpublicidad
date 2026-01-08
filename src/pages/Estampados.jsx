import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function Estampados() {
  return (
    <main>
      <h1>Estampados</h1>
      <Gallery images={[
        "/images/estampados/1.jpg",
        "/images/estampados/2.jpg"
      ]} />
      <Link to="/contacto" className="button">Cotizar estampados</Link>
    </main>
  );
}
