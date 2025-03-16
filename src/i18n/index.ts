import { initReactI18next } from "react-i18next";

import i18n from "i18next";

// import detector from 'i18next-browser-languagedetector';
// import backend from 'i18next-http-backend';
import { resources } from "./resources";

type resourceKeys = keyof typeof resources.pl;

const namespaces: Array<resourceKeys> = ["translation"];
const defaultNamespace: resourceKeys = "translation";

void i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  ns: namespaces,
  resources,
  lng: "pl",
  fallbackLng: "pl",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  defaultNS: defaultNamespace,
  interpolation: {
    escapeValue: false,
  },
  react: {},
});

export default i18n;
