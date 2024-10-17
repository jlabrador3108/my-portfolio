import { useContext } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;
  return (
    <footer className="bg-gray-800 text-center py-6 mt-8 dark:bg-gray-900">
      <p className="text-gray-300">© 2024 - {language === "es" ? "Desarrollado por" : "Created by"} Jorge Labrador</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="https://github.com/jlabrador3108"
          className="text-gray-300 mx-2 flex"
        >
          <FaGithub className="h-6 w-6 mr-1" />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/jorge-labrador-perez"
          className="text-gray-300 mx-2 flex"
        >
          <FaLinkedin className="h-6 w-6 mr-1" />
          LinkedIn
        </a>
        <a
          href="mailto:jorgelabrador3108@gmail.com"
          className="text-gray-300 mx-2 flex"
        >
          <FaEnvelope className="h-6 w-6 mr-1" />
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
