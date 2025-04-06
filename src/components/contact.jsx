import { motion } from 'framer-motion';
import '../styles/contact.css';

const Contact = () => {
const handleSubmit = (e) => {
e.preventDefault();
// Aquí puedes añadir la lógica para enviar el formulario
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
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        >
        <div className="form-group">
            <input type="text" placeholder="Nombre" required />
        </div>
        <div className="form-group">
            <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
            <input type="text" placeholder="Asunto" required />
        </div>
        <div className="form-group">
            <textarea placeholder="Mensaje" rows="5" required></textarea>
        </div>
        <motion.button 
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            Enviar Mensaje
        </motion.button>
        </motion.form>
    </div>
    </motion.div>
</section>
);
};

export default Contact;