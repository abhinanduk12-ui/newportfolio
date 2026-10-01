import { useScroll, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Learning from './components/Learning';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Learning />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
