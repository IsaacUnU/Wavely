import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../styles/contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      console.log('Enviando formulario...'); // Debug log
      const result = await emailjs.sendForm(
        'service_aofqxqm',
        'template_9n4jvkk',
        form.current,
        'ooShNV6NhDBv8_hCh'
      );

      console.log('Respuesta:', result); // Debug log

      if (result.text === 'OK') {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        form.current.reset();
      }
    } catch (error) {
      console.error('Error:', error); // Debug log
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      });
    }
  };

  return (
    <section id="contacto" className="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contacta con Nosotros</h2>
        
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Tu nombre"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Tu email"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={status.submitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {status.submitting ? 'Enviando...' : 'Enviar mensaje'}
          </motion.button>

          {status.submitted && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </motion.div>
          )}

          {status.error && (
            <motion.div
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status.error}
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;