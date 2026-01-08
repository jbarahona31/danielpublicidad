import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Uniformes from "./pages/Uniformes";
import Estampados from "./pages/Estampados";
import Gorras from "./pages/Gorras";
import Posillos from "./pages/Posillos";
import Contacto from "./pages/Contacto";
import MensajeEnviado from "./pages/MensajeEnviado";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uniformes" element={<Uniformes />} />
        <Route path="/estampados" element={<Estampados />} />
        <Route path="/gorras" element={<Gorras />} />
        <Route path="/posillos" element={<Posillos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/mensaje-enviado" element={<MensajeEnviado />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
