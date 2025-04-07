import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';  
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Divider from './components/Divider';
import FloatingActionButton from './components/FloatingActionButton';
import ScrollAnimation from './components/ScrollAnimation';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollAnimation>
        <Divider />
      </ScrollAnimation>
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Divider />
      </ScrollAnimation>
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation>
        <Divider />
      </ScrollAnimation>
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>
      <FloatingActionButton />
    </>
  );
}

export default App;
