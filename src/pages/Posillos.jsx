import React from 'react';
import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

const Posillos = () => {
  return (
    <main>
      <h1>Posillos Personalizados</h1>
      <ImageGallery category="posillos" title="Nuestros Posillos" />
      <Link to="/contacto" className="button">Cotizar posillos</Link>
    </main>
  );
};

export default Posillos;
