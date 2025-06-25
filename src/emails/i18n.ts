import i18next from 'i18next';
import en from '../messages/en/translation.json';
import nl from '../messages/nl/translation.json';
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .init({
        lng: 'nl',
        fallbackLng: 'en',
        resources: {
            en: { translation: en },
            nl: { translation: nl },
        },
    }
);

export default i18next;