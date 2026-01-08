import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contacto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Ingresa un teléfono válido de 10 dígitos';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Submit form using fetch API to avoid POST in browser history
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      // Navigate with replace: true to avoid POST in history
      navigate('/mensaje-enviado', { replace: true });
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <h1>Contáctanos</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px', color: '#e5e5e5' }}>
        Envíanos un mensaje y te responderemos pronto
      </p>

      <form 
        name="contacto" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/mensaje-enviado"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contacto" />
        
        {/* Honeypot field for spam prevention */}
        <div style={{ display: 'none' }}>
          <label>
            No llenes esto si eres humano: 
            <input name="bot-field" />
          </label>
        </div>

        <div>
          <input 
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre *"
            required
            style={{
              borderColor: errors.nombre ? '#e74c3c' : undefined,
              backgroundColor: errors.nombre ? 'rgba(231, 76, 60, 0.1)' : undefined
            }}
          />
          {errors.nombre && (
            <span style={{ 
              color: '#e74c3c', 
              fontSize: '14px', 
              display: 'block', 
              marginTop: '-15px', 
              marginBottom: '15px' 
            }}>
              {errors.nombre}
            </span>
          )}
        </div>

        <div>
          <input 
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono / WhatsApp *"
            required
            style={{
              borderColor: errors.telefono ? '#e74c3c' : undefined,
              backgroundColor: errors.telefono ? 'rgba(231, 76, 60, 0.1)' : undefined
            }}
          />
          {errors.telefono && (
            <span style={{ 
              color: '#e74c3c', 
              fontSize: '14px', 
              display: 'block', 
              marginTop: '-15px', 
              marginBottom: '15px' 
            }}>
              {errors.telefono}
            </span>
          )}
        </div>

        <div>
          <textarea 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje *"
            required
            style={{
              borderColor: errors.mensaje ? '#e74c3c' : undefined,
              backgroundColor: errors.mensaje ? 'rgba(231, 76, 60, 0.1)' : undefined
            }}
          />
          {errors.mensaje && (
            <span style={{ 
              color: '#e74c3c', 
              fontSize: '14px', 
              display: 'block', 
              marginTop: '-15px', 
              marginBottom: '15px' 
            }}>
              {errors.mensaje}
            </span>
          )}
        </div>

        <button 
          type="submit" 
          className="button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px', 
        paddingTop: '40px', 
        borderTop: '2px solid rgba(250, 204, 21, 0.2)' 
      }}>
        <p style={{ color: '#e5e5e5', marginBottom: '20px' }}>O contáctanos directamente:</p>
        <a 
          href="https://wa.me/573008013669" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#25D366',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            border: '2px solid #25D366'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#20BA5A';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#25D366';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span style={{ fontSize: '20px' }}>📱</span> WhatsApp
        </a>
      </div>
    </main>
  );
}
