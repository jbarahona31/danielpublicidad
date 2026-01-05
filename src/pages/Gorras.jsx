import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import Product3DViewer from "../components/Product3DViewer";

export default function Gorras() {
  return (
    <main>
      <h1>Gorras Personalizadas</h1>
      <Product3DViewer 
        modelPath="/models/gorras/gorra.glb"
        height={500}
        cameraPosition={[0, 0, 5]}
      />
      <Gallery images={[
        "/images/gorras/1.jpg",
        "/images/gorras/2.jpg"
      ]} />
      <Link to="/contacto" className="button">Cotizar gorras</Link>
    </main>
  );
}
