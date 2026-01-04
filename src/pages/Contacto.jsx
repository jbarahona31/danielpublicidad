export default function Contacto() {
  return (
    <main>
      <h1>Contacto</h1>

      <form name="contacto" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contacto" />

        <input name="nombre" placeholder="Nombre" required />
        <input name="telefono" placeholder="Teléfono / WhatsApp" required />
        <textarea name="mensaje" placeholder="Mensaje" required />

        <button type="submit" className="button">Enviar</button>
      </form>
    </main>
  );
}
