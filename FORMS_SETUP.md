# 📧 Configuración de Formularios

## Cómo funciona

El formulario de contacto usa **Netlify Forms**, un servicio gratuito incluido en tu hosting de Netlify.

## Ver mensajes recibidos

1. Ve a tu panel de Netlify: https://app.netlify.com
2. Selecciona tu sitio "danielpublicidad"
3. Ve a **Forms** en el menú lateral
4. Verás todos los mensajes recibidos con:
   - Nombre del remitente
   - Teléfono
   - Mensaje completo
   - Fecha y hora de envío

## Configurar notificaciones por email

Para recibir emails automáticamente cuando alguien te contacte:

1. En Netlify → **Site settings**
2. **Forms** → **Form notifications**
3. Click en **Add notification** → **Email notification**
4. Ingresa tu email (ej: daniel@example.com)
5. Selecciona el formulario "contacto"
6. Click en **Save**

¡Listo! Ahora recibirás un email cada vez que alguien envíe el formulario.

## Prevención de spam

El formulario incluye protección contra spam:

- **Campo honeypot**: Campo invisible que solo los bots llenan
- **Validación en frontend**: Verifica datos antes de enviar
- **Netlify reCAPTCHA**: Opcional, se puede activar en settings

Para activar reCAPTCHA:
1. Ve a **Site settings** → **Forms**
2. Activa **reCAPTCHA protection**
3. Netlify lo configurará automáticamente

## Campos del formulario

El formulario valida:

- **Nombre**: Requerido, no puede estar vacío
- **Teléfono**: Requerido, debe tener 10 dígitos
- **Mensaje**: Requerido, mínimo 10 caracteres

## Características implementadas

✅ Formulario funcional sin error 404  
✅ Validaciones en tiempo real  
✅ Mensajes de error claros  
✅ Página de confirmación profesional  
✅ Redirección automática al inicio (5 segundos)  
✅ Mensajes guardados en Netlify  
✅ Notificaciones por email configurables  
✅ Protección contra spam  
✅ Enlace directo a WhatsApp como alternativa

## Troubleshooting

### El formulario no aparece en Netlify

Asegúrate de que:
1. El sitio esté desplegado en Netlify
2. El formulario tenga `data-netlify="true"`
3. El campo `<input type="hidden" name="form-name" value="contacto" />` esté presente

### No recibo notificaciones por email

1. Verifica que hayas configurado las notificaciones en Netlify
2. Revisa tu carpeta de spam
3. Confirma que el email configurado sea correcto

## Soporte

Para más información sobre Netlify Forms, visita:
https://docs.netlify.com/forms/setup/
