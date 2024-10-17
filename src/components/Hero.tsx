import { useContext } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

const Hero = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;
  const object = {
    title: {
      es: "¡Hola! Soy Jorge Labrador",
      en: "Hello! I’m Jorge Labrador",
    },
    content: {
      es: "Desarrollador de software web full stack con casi 3 años de experiencia en el diseño, desarrollo e implementación de aplicaciones web robustas. Experto en Node.js, NestJS y React.js, con una pasión por resolver problemas y ofrecer soluciones escalables.",
      en:
        "Full stack web software developer with nearly 3 years of experience in designing, developing, and implementing robust web applications." +
        "Proficient in Node.js, NestJS, React.js, with a passion for" +
        "problemsolving and delivering scalable solutions.",
    },
    download: {
      es: "Descargar CV",
      en: "Download CV",
    },
  };
  return (
    <section className="h-screen w-full max-w-full bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center text-center">
      <div className="flex flex-col md:flex-row items-center justify-center content-center">
        <img
          src="https://avatars.githubusercontent.com/u/84150509?s=400&u=50de07a33162c409cbea6a0dcfcfdbc853c9c982&v=4"
          alt="Perfil photo"
          className="w-2/4 h-2/4 md:w-56 mt-28 md:mt-0 md:h-56 rounded-full shadow-lg object-cover mb-6 md:mb-0 transition-transform duration-800 ease-in-out transform hover:scale-110 hover:rotate-3 hover:opacity-90"
        />
        <div className="md:ml-0  md:w-2/4 p-6 ml-6">
          <h1 className="text-5xl font-bold mb-4 dark:text-white">
            {object.title[language]}
          </h1>
          <p className="text-lg font-serif text-gray-700 dark:text-gray-300 px-8">
            {object.content[language]}
          </p>

          {/* Sección de Contacto */}
          <div className="mt-8 flex flex-col items-center space-y-6">
            {/* Vías de Contacto */}
            <div className="flex space-x-8">
              <a
                href="/public/CV Jorge Labrador.pdf"
                download
                className="mr-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                {object.download[language]}
              </a>
              <a
                href="https://github.com/jlabrador3108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 flex flex-col items-center"
              >
                <FaGithub className="h-8 w-8" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jorge-labrador-perez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 flex flex-col items-center"
              >
                <FaLinkedin className="h-8 w-8" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:jorgelabrador3108@gmail.com"
                className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 flex flex-col items-center"
              >
                <FaEnvelope className="h-8 w-8" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
