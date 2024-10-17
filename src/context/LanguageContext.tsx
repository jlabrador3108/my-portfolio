import React, { useState, createContext, ReactNode } from "react";

export type EnumLanguages = "es" | "en";

export type LanguageContextType = {
  language: EnumLanguages;
  changeLanguage: (lang: EnumLanguages) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<EnumLanguages>("en");

  const changeLanguage = (lang: React.SetStateAction<EnumLanguages>) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
