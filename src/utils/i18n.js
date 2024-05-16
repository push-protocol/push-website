// External Components
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// Load Languages
import english from '/static/locales/en/translation.json';
import spanish from '/static/locales/es/translation.json';
import hindi from '/static/locales/hi/translation.json';

export default function i18nInitialize() {
  i18n
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: english },
        es: { translation: spanish },
        hi: { translation: hindi },
      },
      lng: 'en', // language to use
      fallbackLng: 'en',
      debug: false,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },

      react: {
        useSuspense: false, // Set to false to disable suspense
      },
    });
}
