import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';
import logo from '../images/logo-sin-fondo.png';

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
    const targetId = e.target.getAttribute('href');
    const element = document.querySelector(targetId);
    
    if (element) {
      // Cerrar el menú antes de hacer scroll
      setIsOpen(false);
      
      // Calcular la posición correcta considerando el navbar
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Controlar el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
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

        <div 
          className={`menu-button ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <AnimatePresence>
          {(isOpen || window.innerWidth > 768) && (
            <>
              <motion.div
                className={`nav-overlay ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.ul 
                className={`nav-links ${isOpen ? 'active' : ''}`}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <motion.li 
                  whileHover={{ scale: 1.1 }}
                  onClick={handleClick}
                >
                  <a href="#inicio">Inicio</a>
                </motion.li>
                <motion.li 
                  whileHover={{ scale: 1.1 }}
                  onClick={handleClick}
                >
                  <a href="#nosotros">Nosotros</a>
                </motion.li>
                <motion.li 
                  whileHover={{ scale: 1.1 }}
                  onClick={handleClick}
                >
                  <a href="#servicios">Servicios</a>
                </motion.li>
                <motion.li 
                  whileHover={{ scale: 1.1 }}
                  onClick={handleClick}
                >
                  <a href="#contacto">Contacto</a>
                </motion.li>
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
