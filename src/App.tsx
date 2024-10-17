import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-full">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="professional-experience">
          <ProfessionalExperience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </LanguageProvider>
  );
}

export default App;
