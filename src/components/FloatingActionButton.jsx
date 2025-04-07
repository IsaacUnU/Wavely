import { motion } from 'framer-motion';
import { useState } from 'react';
import InterestModal from './InterestModal';
import '../styles/floatingActionButton.css';

const FloatingActionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        className="floating-action-button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 25px rgba(34, 211, 238, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
      >
        <span className="button-icon">💬</span>
        <span className="button-text">¿Hablamos?</span>
      </motion.button>

      <InterestModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service="nuestros servicios"
      />
    </>
  );
};

export default FloatingActionButton;