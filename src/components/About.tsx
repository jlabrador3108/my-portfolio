import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;
  const object = {
    title: {
      es: "Sobre Mí",
      en: "About me",
    },
    tecnologies: {
      es: "Lenguajes y herramientas",
      en: "Languages and tools",
    },
    content: {
      es: [
        "👉🏻 Soy un desarrollador full stack apasionado por crear experiencias digitales atractivas y eficientes. Con experiencia en desarrollo tanto del lado del cliente como del servidor, utilizo tecnologías modernas como Node.js, Python y Reactjs para construir aplicaciones web dinámicas y escalables.",
        "🚀 Me encanta resolver problemas complejos, optimizar el rendimiento y asegurarme de que cada proyecto en el que trabajo tenga un impacto positivo en los usuarios. Mi objetivo es transformar ideas en soluciones innovadoras y eficientes, siempre manteniendo un enfoque centrado en la experiencia del usuario y el diseño limpio.",
        "📚 Cuando no estoy codificando, me gusta aprender nuevas tecnologías, colaborar en proyectos de código abierto y seguir mejorando mis habilidades en este apasionante mundo del desarrollo web.",
      ],
      en: [
        "👉🏻 I’m a full stack developer passionate about building engaging and efficient digital experiences. With expertise in both frontend and backend development, I use modern technologies like Node.js, Python and Reactjs to create dynamic and scalable web applications.",
        "🚀 I thrive on solving complex problems, optimizing performance, and ensuring that every project I work on has a positive impact on users. My goal is to turn ideas into innovative and efficient solutions, always focusing on user experience and clean design.",
        "📚 When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, and continuously improving my skills in this exciting world of web development.",
      ],
    },
  };
  return (
    <main className="flex justify-center mt-28">
      <section
        id="about"
        className="py-16 bg-white dark:bg-gray-900 text-center w-11/12 shadow-md rounded-md"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            🙋‍♂️ {object.title[language]}
          </h2>
          {object.content[language].map((con: string, index) => {
            return (
              <p
                key={index}
                className="text-gray-800 dark:text-gray-300 text-left mt-4 px-8"
              >
                {con}
              </p>
            );
          })}

          <h3 className="mt-10 text-3xl font-bold mb-6 dark:text-white">
            🔨 {object.tecnologies[language]}
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 md:flex justify-center gap-8">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg"
                height="60"
                width="60"
              />

              <img
                src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg"
                height="60"
                width="60"
              />
              
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nestjs/nestjs-original-wordmark.svg"
                height="60"
                width="60"
              />

              <img
                src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original.svg"
                height="60"
                width="60"
              />

              <img
                src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/python/python-original.svg"
                height="60"
                width="60"
              /> 
              
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/django/django-plain-wordmark.svg"
                height="60"
                width="60"
              /> 

              <img
                src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg"
                height="60"
                width="60"
              />                         

              <img
                src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original-wordmark.svg"
                height="60"
                width="60"
              />

              <img
                src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/css3/css3-original-wordmark.svg"
                height="60"
                width="60"
              />

              <img
                src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/php/php-original.svg"
                height="60"
                width="60"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
