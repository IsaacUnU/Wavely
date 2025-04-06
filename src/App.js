import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';  
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Divider from './components/Divider';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
