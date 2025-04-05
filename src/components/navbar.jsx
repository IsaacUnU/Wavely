import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';
import logo from '../images/mg-marc-1.webp'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const element = document.querySelector(target);
    setIsOpen(false);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={logo} alt="Maximiza Digital Logo" />
      </motion.div>

      <div className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <AnimatePresence>
        <motion.ul 
          className={`nav-links ${isOpen ? 'active' : ''}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#inicio" onClick={handleClick}>Inicio</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#servicios" onClick={handleClick}>Servicios</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#nosotros" onClick={handleClick}>Nosotros</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#contacto" onClick={handleClick}>Contacto</a>
          </motion.li>
        </motion.ul>
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
