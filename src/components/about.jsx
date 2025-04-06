    import { motion } from 'framer-motion';
    import '../styles/about.css';

    const About = () => {
    const processSteps = [
        {
        title: "Análisis inicial de tu negocio",
        description: "Estudiamos tu situación actual y tus objetivos para crear una estrategia totalmente personalizada.",
        icon: "🔍"
        },
        {
        title: "Estudio de tu marca",
        description: "Recogemos información clave sobre tu marca y tu audiencia para encontrar tu ventaja.",
        icon: "📊"
        },
        {
        title: "Diseño de estrategia digital",
        description: "Planificamos cada acción para lograr los objetivos de forma eficiente y medible.",
        icon: "⚡"
        },
        {
        title: "Ejecución y lanzamiento de campañas",
        description: "Creamos contenido, gestionamos redes sociales y activamos campañas en los canales más efectivos.",
        icon: "🚀"
        },
        {
        title: "Seguimiento y análisis de resultados",
        description: "Medimos el impacto, ajustamos lo necesario y te entregamos reportes claros para que veas tu crecimiento.",
        icon: "📈"
        }
,
        {
        title: "Diseño visual de marca",
        description: "Creamos identidades visuales modernas y coherentes para transmitir confianza desde el primer vistazo.",
        icon: "🎨"
        }
    ];

    return (
        <section id="nosotros" className="about">
        <motion.div 
            className="about-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="section-title">Nuestro Proceso</h2>
            
            <div className="process-grid">
            {processSteps.map((step, index) => (
                <motion.div 
                key={index}
                className="process-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                >
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                </motion.div>
            ))}
            </div>

            <motion.div 
            className="stats-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            >
            <div className="stat-item">
                <h4>100+</h4>
                <p>Clientes Satisfechos</p>
            </div>
            <div className="stat-item">
                <h4>95%</h4>
                <p>Tasa de Éxito</p>
            </div>
            <div className="stat-item">
                <h4>5+</h4>
                <p>Años de Experiencia</p>
            </div>
            </motion.div>
        </motion.div>
        </section>
    );
    };

    export default About;