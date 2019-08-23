import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: common_en
      },
      de: {
        translation: common_de
      },
    },
    // lng: "de",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
