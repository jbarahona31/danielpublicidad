import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Daniel Publicidad</h1>
      <p>
        Especialistas en uniformes, estampados, gorras y vasos personalizados.
      </p>
      <Link to="/contacto" className="button">Solicitar cotización</Link>
    </main>
  );
}
