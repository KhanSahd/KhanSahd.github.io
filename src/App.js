import logo from './assets/logo.png';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
