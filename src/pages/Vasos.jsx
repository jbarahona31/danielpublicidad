import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import Product3DViewer from "../components/Product3DViewer";

export default function Vasos() {
  return (
    <main>
      <h1>Vasos Personalizados</h1>
      <Product3DViewer 
        modelPath="/models/vasos/vaso.glb"
        height={500}
        cameraPosition={[0, 0, 5]}
      />
      <Gallery images={[
        "/images/vasos/1.jpg",
        "/images/vasos/2.jpg"
      ]} />
      <Link to="/contacto" className="button">Cotizar vasos</Link>
    </main>
  );
}
