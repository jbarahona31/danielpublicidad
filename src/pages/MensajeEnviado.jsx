import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MensajeEnviado.css';

const MensajeEnviado = () => {
  const navigate = useNavigate();

  // Opcional: Redirección automática después de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mensaje-enviado-container">
      <div className="mensaje-enviado-content">
        <div className="success-animation">
          <div className="success-circle">
            <div className="success-checkmark">
              <svg viewBox="0 0 52 52" className="checkmark">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="mensaje-titulo">¡Mensaje Enviado!</h1>
        
        <p className="mensaje-texto">
          Gracias por contactarnos. Hemos recibido tu mensaje correctamente.
        </p>
        
        <p className="mensaje-subtexto">
          Nuestro equipo te responderá lo más pronto posible.
        </p>

        <div className="mensaje-acciones">
          <Link to="/" className="btn-primary">
            <span className="btn-icon">🏠</span>
            Volver al Inicio
          </Link>
          
          <Link to="/uniformes" className="btn-secondary">
            <span className="btn-icon">👕</span>
            Ver Productos
          </Link>
        </div>

        <div className="mensaje-footer">
          <p>Serás redirigido al inicio en unos segundos...</p>
        </div>
      </div>
    </div>
  );
};

export default MensajeEnviado;
