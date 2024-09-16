import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation:{
      "Home": "Home",
      "About": "About me",
      "Projects": "Projects",
      "Contact": "Contact"
    }
    
  },
  es: {
    translation:{
      "Home": "Inicio",
      "About": "Sobre mí",
      "Projects": "Proyectos",
      "Contact": "Contacto"
    }
    
  }
};

i18n
  .use(initReactI18next) // Integración de React con i18next
  .init({
    resources,
    lng: 'es',  // Idioma por defecto
    fallbackLng: 'en',  // Idioma de respaldo si falta algo
    interpolation: {
      escapeValue: false // React ya protege de XSS
    }
  });

export default i18n;
