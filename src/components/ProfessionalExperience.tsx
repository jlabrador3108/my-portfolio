import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const ProfessionalExperience = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;
  const title = {
    es: "Experiencia profesional",
    en: "Professional experience",
  };

  const pros = [
    {
      place: "Xetid",
      title: {
        es: "Genesig",
        en: "Genesig",
      },
      period: {
        en: "02/2022 – 07/2024 | Havana, Cuba",
        es: "02/2022 – 07/2024 | La Habana, Cuba",
      },
      description: {
        en: "A real-time geographic representation system where I am part of the development team, built with the following tools: JavaScript, Ext.js, PHP, PostgreSQL, GitLab, and OpenLayers. This project enables the efficient visualization and management of geospatial data, providing a scalable and high-performance solution for real-time analysis.",
        es: "Un sistema de representación geográfica en tiempo real en el que formo parte del equipo de desarrollo, construido con las siguientes herramientas: JavaScript, Ext.js, PHP, PostgreSQL, GitLab y OpenLayers. Este proyecto permite visualizar y gestionar información geoespacial de manera eficiente, ofreciendo una solución escalable y de alto rendimiento para análisis en tiempo real.",
      },
      image:
        "https://st2.depositphotos.com/1021974/9025/i/450/depositphotos_90252302-stock-photo-city-maps-with-colorful-targets.jpg",
    },
    {
      place: "Freelance Project",
      title: {
        es: "Sistema de Pagos Local para Aplicaciones de Comercio Electrónico",
        en: "Local Payment System for E-commerce Applications",
      },
      description: {
        es: "Trabajé en el desarrollo de un sistema de pagos local para tiendas de comercio electrónico que permitía a los usuarios acumular puntos para canjear productos. El backend fue diseñado como un microservicio utilizando NestJS, Prisma y PostgreSQL, con comunicación eficiente a través de NATS, y siguiendo una arquitectura hexagonal basada en principios de Domain-Driven Design (DDD). En el frontend, implementé React.js, TailwindCSS y Redux, asegurando una experiencia de usuario intuitiva y de alto rendimiento. Este proyecto proporcionó una solución robusta y escalable para la gestión de pagos mediante puntos, optimizando tanto la interacción del cliente como el manejo de las transacciones en línea.",
        en: "I contributed to the development of a local payment system for e-commerce stores, where users could accumulate points to pay for products. The backend was built as a microservice using NestJS, Prisma, and PostgreSQL, with seamless communication through NATS, following a hexagonal architecture and Domain-Driven Design (DDD) principles. For the frontend, I implemented React.js, TailwindCSS, and Redux, ensuring a smooth and high-performance user experience. This project delivered a robust and scalable solution for managing payments via points, optimizing both customer interactions and online transaction handling.",
      },
      period: {
        en: "08/2024 – 09/2024 | Havana, Cuba",
        es: "08/2024 – 09/2024 | La Habana, Cuba",
      },
      image:
        "https://degerencia.com/wp-content/uploads/2021/02/pasarelas-Colombia-pagos-en-linea-pandemia-bienes-servicios-1024x638-1.jpg",
    },
    {
      place: "Guajiritos SRL",
      title: {
        es: "Guajiritos SRL",
        en: "Guajiritos SRL",
      },
      period: {
        en: "10/2024 – 08/2025 | Havana, Cuba",
        es: "10/2024 – 08/2025 | La Habana, Cuba",
      },
      description: {
        en: "I have worked as a backend developer so far on two applications: Tienda, a marketplace application using technologies such as Node.js, Sequelize, MySQL, Elasticsearch, and GDS Turismo, an application for the tourism industry developed with NestJS, PostgreSQL, TypeORM, Redis, and Elasticsearch.",
        es: "Me he desempeñado como desarrollador backend en dos aplicaciones hasta el momento: Tienda, una aplicación de marketplace que utiliza tecnologías como Node.js, Sequelize, MySQL, Elasticsearch y GDS Turismo, una aplicación orientada al sector turístico desarrollada con NestJS, PostgreSQL, TypeORM, Redis y Elasticsearch.",
      },
      image: "https://www.guajiritos.com/assets/icons/icon-384x384.png",
    },
    {
      place: "Vibez Citizens",
      title: {
        es: "Vibez Citizens",
        en: "Vibez Citizens",
      },
      period: {
        en: "08/2025 – present | Remote",
        es: "08/2025 – presente | Remoto",
      },
      description: {
        en: "Building dynamic, data-driven applications with React and Supabase as part of a collaborative remote team.",
        es: "Desarrollo de aplicaciones dinámicas basadas en datos con React y Supabase como parte de un equipo remoto colaborativo.",
      },
      image:
        "https://thumbs.dreamstime.com/b/trabajo-independiente-desde-el-hogar-o-en-l%C3%ADnea-digital-lado-de-los-negocios-remoto-trabajando-con-computadora-port%C3%A1til-como-409878727.jpg",
    },
  ];

  return (
    <section className="mt-10 py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
          👨‍💻 {title[language]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pros.map((pro, index) => (
            <main
              key={index}
              className="flex flex-col md:flex-row overflow-hidden bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
            >
              <div className="flex w-full h-1/4 md:h-full md:w-1/3 md:flex-none">
                <img
                  className="w-full h-48 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                  src={pro.image}
                  alt="Experience illustration"
                />
              </div>
              <div className="flex flex-col w-full md:w-2/3 p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {pro.title[language]}
                </h3>
                <h2 className="text-blue-500 font-medium mb-3">{pro.period[language]}</h2>

                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
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

export default ProfessionalExperience;
