    import { motion } from 'framer-motion';
    import '../styles/floatingButton.css';

    const FloatingButton = ({ icon, text, onClick }) => {
    return (
    <motion.button
        className="floating-button"
        whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 25px rgba(34, 211, 238, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={onClick}
    >
        <span className="button-icon">{icon}</span>
        <span className="button-text">{text}</span>
    </motion.button>
    );
    };

    export default FloatingButton;