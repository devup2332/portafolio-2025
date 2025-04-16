import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/translations/en/index.json";
import es from "@/translations/es/index.json";

type Props = {
  children: React.ReactNode;
};

const debugMode = process.env.NODE_ENV === "development";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: debugMode,
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

const TranslationProvider: React.FC<Props> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
