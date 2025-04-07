import { motion } from 'framer-motion';
import useScrollDirection from '../hooks/useScrollDirection';

const ScrollAnimation = ({ children, className }) => {
  const scrollDirection = useScrollDirection();
  
  const variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === "down" ? 50 : -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;