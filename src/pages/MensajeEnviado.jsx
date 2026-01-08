import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MensajeEnviado() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main style={{ 
      minHeight: 'calc(100vh - var(--navbar-height) - var(--footer-height))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div style={{
        background: 'rgba(250, 204, 21, 0.05)',
        borderRadius: '20px',
        padding: '60px 40px',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        border: '2px solid rgba(250, 204, 21, 0.3)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        animation: 'fadeInUp 0.5s ease'
      }}>
        <div style={{ 
          fontSize: '80px', 
          marginBottom: '20px',
          animation: 'scaleIn 0.5s ease 0.2s both'
        }}>
          ✅
        </div>
        
        <h1 style={{ 
          fontSize: '36px', 
          color: '#27ae60', 
          marginBottom: '20px',
          fontWeight: '700'
        }}>
          ¡Mensaje Enviado!
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#e5e5e5', 
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <button 
            onClick={() => navigate('/')} 
            className="button primary"
            style={{ margin: 0 }}
          >
            Volver al Inicio
          </button>
          <button 
            onClick={() => navigate('/contacto')} 
            style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#facc15',
              border: '2px solid #facc15',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#facc15';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#facc15';
            }}
          >
            Enviar Otro Mensaje
          </button>
        </div>
        
        <p style={{ 
          color: '#999', 
          fontSize: '14px',
          fontStyle: 'italic'
        }}>
          Serás redirigido automáticamente en 5 segundos...
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}
