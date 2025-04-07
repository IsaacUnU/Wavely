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

        const formData = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            subject: form.current.subject.value,
            message: form.current.message.value
        };

        try {
            // Enviar notificación al administrador
            const adminNotification = await emailjs.send(
                'service_aofqxqm',
                'template_uf02dpa', // Template para ti
                {
                    to_email: 'iaproto25@gmail.com',
                    from_name: formData.user_name,
                    from_email: formData.user_email,
                    subject: formData.subject,
                    message: formData.message
                },
                'ooShNV6NhDBv8_hCh'
            );

            // Enviar confirmación automática al cliente
            const autoReply = await emailjs.send(
                'service_aofqxqm',
                'template_9n4jvkk', // Template para el cliente
                {
                    to_email: formData.user_email,
                    user_name: formData.user_name,
                    subject: formData.subject,
                    message: formData.message
                },
                'ooShNV6NhDBv8_hCh'
            );

            console.log('Admin notification:', adminNotification);
            console.log('Auto reply:', autoReply);

            if (adminNotification.text === 'OK' && autoReply.text === 'OK') {
                setStatus({
                    submitting: false,
                    submitted: true,
                    error: null
                });
                form.current.reset();
                
                setTimeout(() => {
                    setStatus(prev => ({
                        ...prev,
                        submitted: false
                    }));
                }, 5000);
            }
        } catch (error) {
            console.error('Error:', error);
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
                
                <div className="contact-content">
                    <motion.div 
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>¿Listo para impulsar tu presencia digital?</h3>
                        <p>Cuéntanos sobre tu proyecto y te ayudaremos a alcanzar tus objetivos.</p>
                        
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>info@wavely.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+34 123 456 789</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-location-dot"></i>
                                <span>Madrid, España</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form 
                        ref={form}
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="user_name"
                                placeholder="Nombre" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="user_email"
                                placeholder="Email" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject"
                                placeholder="Asunto" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message"
                                placeholder="Mensaje" 
                                rows="5" 
                                required
                            ></textarea>
                        </div>
                        <motion.button 
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status.submitting}
                        >
                            {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </motion.button>

                        {status.submitted && (
                            <div className="success-message">
                                ¡Mensaje enviado con éxito! Te contactaremos pronto.
                            </div>
                        )}

                        {status.error && (
                            <div className="error-message">
                                {status.error}
                            </div>
                        )}
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;