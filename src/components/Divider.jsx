import { motion } from 'framer-motion';
import '../styles/divider.css';

const Divider = ({ color = "light" }) => {
const waveVariants = {
animate: {
    x: [0, -1000],
    transition: {
    x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
    }
    }
}
};

return (
<div className="divider-container">
    <div className="wave-wrapper">
    <motion.div 
        className="wave wave1"
        variants={waveVariants}
        animate="animate"
    />
    <motion.div 
        className="wave wave2"
        variants={{
        animate: {
            x: [0, -1000],
            transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
            }
            }
        }
        }}
        animate="animate"
    />
    <motion.div 
        className="wave wave3"
        variants={{
        animate: {
            x: [0, -1000],
            transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
            }
            }
        }
        }}
        animate="animate"
    />
    </div>
</div>
);
};

export default Divider;