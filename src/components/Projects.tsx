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
        en: "E-Commerce (Personal Project)",
      },
      description: {
        en: "Built core frontend functionality with React.js, Zustand, TailwindCSS, and Material UI. Experimented with state management and component design for scalability. (Project not completed, used primarily for learning and prototyping.).",
        es: "Desarrollé la funcionalidad principal del frontend con React.js, Zustand, TailwindCSS y Material UI. Experimenté con la gestión del estado y el diseño de componentes para la escalabilidad. (Proyecto no terminado, utilizado principalmente para aprendizaje y prototipado).",
      },
      image:
        "https://wallpapers.com/images/hd/e-commerce-pictures-ybm2y9yd0mjsgx7h.jpg",
    },{
      title: {
        es: "Aplicación de menú para negocios (Proyecto personal)",
        en: "Business Menu App (Personal Project)",
      },
      description: {
        en: "Developed a full-stack web application to display menus from different businesses using React for the frontend and NestJS, PostgreSQL, and TypeORM for the backend. Implemented a structured REST API for efficient menu management and data retrieval. Focused on clean architecture, scalability, and intuitive user experience.",
        es: "Desarrollé una aplicación web full-stack para mostrar menús de diferentes negocios, utilizando React para el frontend y NestJS, PostgreSQL y TypeORM para el backend. Implementé una API REST estructurada para una gestión eficiente de menús y la recuperación de datos. Me enfoqué en una arquitectura limpia, escalabilidad y una experiencia de usuario intuitiva.",
      },
      image:
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzslLXUmexO_id9gww2KwXYbCrqOSho99xuA&s",
        "https://img.freepik.com/vector-premium/ilustracion-concepto-pedido-linea-comida-restaurante-personajes-dibujos-animados-cliente-cafe-jefe-cocina-web-idea-creativa-aplicacion-movil-orden-nutricion-saludable_151150-819.jpg"
    },
  ];

  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
          💻 {title[language]}
        </h2>
        <div className="grid grid-cols-1 justify-center gap-8 md:flex md:gap-20 ">
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
