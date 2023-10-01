import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './en/en.json';
import translationsHE from './he/he.json';
import { Language } from './consts';

const resources = {
  [Language.En]: {
    translation: translationsEN,
  },
  [Language.He]: {
    translation: translationsHE,
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: Language.En,
    interpolation: {
      escapeValue: false,
    },
  });
  
  export default i18n;