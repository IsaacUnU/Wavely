import { motion } from 'framer-motion';
import '../styles/services.css';

const staggerChildren = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const Services = () => {
  const services = [
    {
      title: "Gestión de Redes Sociales",
      description: "Te ayudamos a crear y gestionar contenido atractivo para aumentar tu visibilidad, mejorar la interacción con tu audiencia y generar resultados tangibles.",
      features: [
        "Estrategia de contenido personalizada",
        "Gestión diaria de perfiles",
        "Análisis de métricas y resultados",
        "Interacción constante con tu audiencia"
      ],
      icon: "📱"
    },
    {
      title: "Desarrollo Web",
      description: "Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados para mejorar la experiencia del usuario y aumentar las conversiones de tu negocio.",
      features: [
        "Diseño web responsive y atractivo",
        "Optimización SEO para mejor visibilidad",
        "Experiencia de usuario intuitiva y accesible",
        "Integración fluida con redes sociales y otros sistemas"
      ],
      icon: "💻"
    },
    {
      title: "Marketing Digital",
      description: "Creamos campañas de marketing digital adaptadas a tu negocio, con un enfoque en la captación de clientes y el aumento de la conversión mediante anuncios y estrategias efectivas.",
      features: [
        "Publicidad en redes sociales (Facebook, Instagram, etc.)",
        "Optimización de campañas publicitarias",
        "Estrategias de email marketing",
        "Análisis continuo de métricas y resultados"
      ],
      icon: "📈"
    },
    {
      title: "Diseño Gráfico",
      description: "Creamos diseños visuales únicos y coherentes con la identidad de tu marca, desde logotipos hasta material publicitario, para destacar en tu industria.",
      features: [
        "Creación de logotipos y branding",
        "Diseño de material publicitario (flyers, banners, posters)",
        "Diseño para redes sociales y páginas web",
        "Asesoría en identidad visual de marca"
      ],
      icon: "🎨"
    },
    {
      title: "Consultoría Digital",
      description: "Asesoramos a tu empresa en la creación de una estrategia digital efectiva para potenciar su presencia online y optimizar tus recursos.",
      features: [
        "Análisis de competencia y tendencias de mercado",
        "Desarrollo de estrategias digitales personalizadas",
        "Recomendaciones prácticas para mejorar el rendimiento online",
        "Implementación de mejores prácticas de marketing digital"
      ],
      icon: "🧠"
    }
  ];

  return (
    <section id="servicios" className="services">
      <motion.div 
        className="services-container"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.h2 
          className="section-title"
          variants={scaleIn}
        >
          Nuestros Servicios
        </motion.h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 8px 30px rgba(34, 211, 238, 0.2)'
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
