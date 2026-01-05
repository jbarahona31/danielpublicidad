import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import Product3DViewer from "../components/Product3DViewer";

export default function Estampados() {
  return (
    <main>
      <h1>Estampados</h1>
      <Product3DViewer 
        modelPath="/models/estampados/camiseta.glb"
        height={500}
        cameraPosition={[0, 0, 5]}
      />
      <Gallery images={[
        "/images/estampados/1.jpg",
        "/images/estampados/2.jpg"
      ]} />
      <Link to="/contacto" className="button">Cotizar estampados</Link>
    </main>
  );
}
