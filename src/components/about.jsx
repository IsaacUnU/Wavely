    import { motion } from 'framer-motion';
    import '../styles/about.css';

    const About = () => {
    const processSteps = [
        {
        title: "Análisis actual de tu negocio",
        description: "Vamos a aplicar una estrategia personalizada para incrementar los resultados de tu negocio",
        icon: "🔍"
        },
        {
        title: "Análisis y estudio de tu marca",
        description: "Obtenemos información de tu marca y competencia para optimizar las mejores opciones",
        icon: "📊"
        },
        {
        title: "Aplicamos estrategias",
        description: "Planificamos para lograr los objetivos de la marca de la mejor forma digital",
        icon: "⚡"
        },
        {
        title: "Lanzamos las campañas",
        description: "Realizamos las campañas en los canales elegidos",
        icon: "🚀"
        },
        {
        title: "Valoración de los resultados",
        description: "Revisión y ajuste de los resultados obtenidos",
        icon: "📈"
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