import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import '../styles/interestModal.css';

const InterestModal = ({ isOpen, onClose, service }) => {
// Añadir clase al body cuando el modal está abierto
React.useEffect(() => {
if (isOpen) {
    document.body.classList.add('modal-open');
} else {
    document.body.classList.remove('modal-open');
}

return () => {
    document.body.classList.remove('modal-open');
};
}, [isOpen]);

const handleSubmit = (e) => {
e.preventDefault();
onClose();
};

return (
<AnimatePresence>
    {isOpen && (
    <>
        <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        >
        <motion.div
            className="modal"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            onClick={e => e.stopPropagation()} // Prevenir cierre al hacer clic en el modal
        >
            <motion.button 
            className="close-button" 
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            ×
            </motion.button>
            <h3>¿Interesado en {service}?</h3>
            <form onSubmit={handleSubmit}>
            <motion.div
                className="form-group"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <input type="text" placeholder="Nombre" required />
            </motion.div>
            <motion.div
                className="form-group"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <input type="email" placeholder="Email" required />
            </motion.div>
            <motion.div
                className="form-group"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <textarea placeholder="¿Qué te gustaría saber?" required></textarea>
            </motion.div>
            <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Enviar consulta
            </motion.button>
            </form>
        </motion.div>
        </motion.div>
    </>
    )}
</AnimatePresence>
);
};

export default InterestModal;