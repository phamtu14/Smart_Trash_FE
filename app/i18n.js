import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import vi from './locales/vi/index';
import en from './locales/en/index';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'vi',
  debug: true,
  interpolation: { escapeValue: false },
});

export default i18n;
