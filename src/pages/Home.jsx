import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Daniel Publicidad</h1>

        <p className="subtitle">
          Diseños personalizados que hacen visible tu marca
        </p>

        <p className="hero-text">
          Creamos uniformes deportivos, gorras, estampados y vasos personalizados
          con acabados de alta calidad. Trabajamos con empresas, emprendimientos
          y eventos que buscan productos que representen su identidad y destaquen.
        </p>

        <ul className="features">
          <li>✔ Diseños a medida</li>
          <li>✔ Materiales de calidad</li>
          <li>✔ Atención personalizada</li>
        </ul>

        <Link to="/contacto" className="button primary">
          Solicitar cotización
        </Link>
      </section>
    </main>
  );
}
