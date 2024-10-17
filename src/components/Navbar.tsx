import { useContext, useEffect, useState } from "react";
import { EnumLanguages, LanguageContext } from "../context/LanguageContext";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleLanguageChange = (lang: EnumLanguages) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 p-2 shadow-md fixed top-0 left-0 w-full max-w-full z-50">
      <div className="w-full md:max-w-7xl mx-auto sm:px-6 lg:px-4 flex justify-between items-center h-16">
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="md:flex items-center space-x-2 hidden">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme === "dark" ? "white" : ""}
          >
            <g id="layer1">
              <path d="M 0 2 L 0 18 L 20 18 L 20 2 L 0 2 z M 1 3 L 19 3 L 19 5 L 1 5 L 1 3 z M 1 6 L 19 6 L 19 17 L 1 17 L 1 6 z M 5.9296875 7.0996094 L 4.9902344 7.4414062 L 8.0683594 15.900391 L 9.0078125 15.556641 L 5.9296875 7.0996094 z M 3 9 L 3 10 L 4 10 L 4 9 L 3 9 z M 3 13 L 3 14 L 4 14 L 4 13 L 3 13 z M 11 14 L 11 15 L 17 15 L 17 14 L 11 14 z " />
            </g>
          </svg>
          <h1 className="text-xl font-bold dark:text-white">Jorge Labrador</h1>
        </div>
        <div className="flex items-center space-x-6 ">
          <div
            className={`w-full md:block ${isMenuOpen ? "block" : "hidden "}`}
          >
            <ul className="mr-8 flex flex-col bg-black text-white fixed top-20 left-0 px-6 py-2 md:bg-transparent md:static md:flex-row md:space-x-6 items-start justify-between text-gray-900 md:dark:text-white text-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                {language === "es" ? "Inicio" : "Home"}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                {language === "es" ? "Sobre Mí" : "About"}
              </button>
              <button
                onClick={() => scrollToSection("professional-experience")}
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                {language === "es" ? "Experiencia" : "Experience"}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                {language === "es" ? "Proyectos" : "Projects"}
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                {language === "es" ? "Educación" : "Education"}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                {language === "es" ? "Contacto" : "Contact"}
              </button>
            </ul>
          </div>

          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-10 h-10 px-2 bg-transparent text-gray-900 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent text-gray-900 dark:text-gray-200 py-2 pl-6 pr-6 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out flex items-center"
            >
              {language === "es" ? (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
                  alt="Español"
                  className="w-6 h-4 mr-2"
                />
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="English"
                  className="w-6 h-4 mr-2"
                />
              )}
              {language === "es" ? "Español" : "English"}
              <svg
                className="h-5 w-10 md:h-5 md:w-10  text-gray-500 dark:text-gray-400 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-60 overflow-auto">
                <li
                  onClick={() => handleLanguageChange("es")}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
                    alt="Español"
                    className="w-6 h-4 mr-2"
                  />
                  {language === "es" ? "Español" : "Spanish"}
                </li>
                <li
                  onClick={() => handleLanguageChange("en")}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    alt="English"
                    className="w-6 h-4 mr-2"
                  />
                  {language === "es" ? "Inglés" : "English"}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
