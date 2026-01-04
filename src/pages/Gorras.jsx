import Gallery from "../components/Gallery";

export default function Gorras() {
  return (
    <main>
      <h1>Gorras Personalizadas</h1>
      <Gallery images={[
        "/images/gorras/1.jpg",
        "/images/gorras/2.jpg"
      ]} />
      <a href="/contacto" className="button">Cotizar gorras</a>
    </main>
  );
}
