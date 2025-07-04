import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Homework Helper for Busy Parents",
      "login": "Login",
      "signup": "Sign Up",
      "ask_question": "Ask a Question",
      "logout": "Logout"
    }
  },
  sw: {
    translation: {
      "welcome": "Karibu kwenye Msaidizi wa Kazi ya Nyumbani kwa Wazazi",
      "login": "Ingia",
      "signup": "Jisajili",
      "ask_question": "Uliza Swali",
      "logout": "Toka"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 