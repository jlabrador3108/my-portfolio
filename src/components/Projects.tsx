import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Projects = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;
  const title = {
    es: "Proyectos",
    en: "Projects",
  };

  const pros = [
    {
      title: {
        es: "Comercio electrónico",
        en: "E-Commerce",
      },
      description: {
        en: "I am developing a personal e-commerce project using React.js, Zustand, TailwindCSS, and MaterialUI for the frontend. At this stage, I have a significant portion of the frontend completed, and I am planning to build the backend using NestJS and other technologies yet to be determined.",
        es: "En la actualidad me encuentro desarrollando un proyecto personal de comercio electrónico utilizando React.js, Zustand, TailwindCSS y MaterialUI para el frontend. En esta etapa, tengo una parte significativa del frontend completada, y planeo construir el backend utilizando NestJS y otras tecnologías aún por determinar.",
      },
      image:
        "https://wallpapers.com/images/hd/e-commerce-pictures-ybm2y9yd0mjsgx7h.jpg",
    },
  ];

  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
          💻 {title[language]}
        </h2>
        <div className="flex justify-center">
          {pros.map((pro, index) => (
            <main
              key={index}
              className="flex flex-col md:w-3/5 md:flex-row p-6 bg-white dark:bg-gray-900 shadow-md rounded-md md:transition-transform md:duration-800 md:ease-in-out md:transform md:hover:scale-110 md:hover:opacity-90"
            >
              <div className="flex w-full h-1/4 md:h-full md:w-1/3 md:flex-none">
                <img
                  className="w-full md:h-full object-cover"
                  src={pro.image}
                  alt="Image experience"
                />
              </div>
              <div className="flex flex-col w-full md:w-2/3 p-6">
                <h3 className="mb-4 text-xl font-bold dark:text-white">
                  {pro.title[language]}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {pro.description[language]}
                </p>
              </div>
            </main>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
