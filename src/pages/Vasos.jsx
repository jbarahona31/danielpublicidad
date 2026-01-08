import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function Vasos() {
  return (
    <main>
      <h1>Vasos Personalizados</h1>
      <Gallery images={[
        "/images/vasos/1.jpg",
        "/images/vasos/2.jpg"
      ]} />
      <Link to="/contacto" className="button">Cotizar vasos</Link>
    </main>
  );
}
