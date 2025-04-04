import '../styles/footer.css';  
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Maximiza Digital. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
