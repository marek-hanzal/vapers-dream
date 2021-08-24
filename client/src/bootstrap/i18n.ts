import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		initImmediate: true,
		resources: {},
		keySeparator: false,
		nsSeparator: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
