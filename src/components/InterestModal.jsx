    import { motion, AnimatePresence } from 'framer-motion';
    import '../styles/interestModal.css';

    const InterestModal = ({ isOpen, onClose, service }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío
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
            />
            <motion.div
                className="modal"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                <button className="close-button" onClick={onClose}>×</button>
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
            </>
        )}
        </AnimatePresence>
    );
    };

    export default InterestModal;