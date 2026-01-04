import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Daniel Publicidad</h1>

      <p>
        Somos especialistas en uniformes deportivos personalizados,
        estampados, gorras y vasos publicitarios.
      </p>

      <p>
        Creamos productos llamativos y duraderos para empresas,
        eventos y marcas.
      </p>

      <Link to="/contacto" className="button">
        Solicitar cotización
      </Link>
    </main>
  );
}
