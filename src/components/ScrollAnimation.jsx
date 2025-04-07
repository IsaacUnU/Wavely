import { motion } from 'framer-motion';

const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }}
      viewport={{ 
        once: true,
        margin: "-100px"
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;