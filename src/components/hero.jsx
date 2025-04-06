import '../styles/hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Diseñamos tu presencia. Potenciamos tu impacto.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Todo gran proyecto empieza con una idea… y alguien con ganas de romperla.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#nosotros" className="cta">Como trabajamos?</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
