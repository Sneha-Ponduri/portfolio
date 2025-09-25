import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="font-sans">
      
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <ContactForm />
    </div>
  );
}

export default App;
