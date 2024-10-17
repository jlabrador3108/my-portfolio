import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Education = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;
  const object = {
    title: {
      es: "Educación",
      en: "Education",
    },
    grade: {
      es: "Ingeniero informático",
      en: "Informatic Engineer",
    },
    place: {
      es: "Universidad tecnológica de La Habana José Antonio Echeverría",
      en: "Technical university of havana José Antonio Echeverría",
    },
    period: {
      en: "09/2017 – 01/2022 | Havana, Cuba",
      es: "09/2017 – 01/2022 | La Habana, Cuba",
    },
  };
  return (
    <main className="flex justify-center">
      <section
        id="about"
        className="py-16 bg-white dark:bg-gray-900 text-center w-11/12 shadow-md rounded-md"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            👨‍🎓 {object.title[language]}
          </h2>
          <h3 className="mb-4 text-xl font-bold dark:text-white ">
            👷‍♂️ {object.grade[language]}
          </h3>
          <h3 className="mb-4 font-bold dark:text-white ">
            📚 {object.place[language]}
          </h3>
          <h2 className="text-blue-400 mb-4">📅 {object.period[language]}</h2>
        </div>
      </section>
    </main>
  );
};

export default Education;
