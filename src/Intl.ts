import { IntlMessageFormat } from 'intl-messageformat';
import * as warning from 'warning';
import * as enTranslation from './i18n/en-us.json';
import * as ruTranslation from './i18n/ru-ru.json';

declare type Locales = "ru-ru" | "en-us";
declare type StringsCallback = (key: string) => string;

export interface StringsMap {
    [key: string]: string | string[];
}

export interface StringsCategory {
    [module: string]: StringsMap;
}

export interface Strings {
    [lang: string]: StringsCategory;
}

const defaultLocale: Locales = "ru-ru";

export class Intl {
    private static currentLocale: Locales = defaultLocale;
    private static strings: Strings = {};
    private static intlInitialized = false;

    public static setLocale = (value: string) => {
        if (value=="en" || value=="en-us" || value=="en-uk") {
            Intl.currentLocale = "en-us";
        } else {
            Intl.currentLocale = defaultLocale;
        }

        return Intl.currentLocale;
    };

    private static safeT = (category: string, locale: string, key: string) => {
        let result: string = key;
        if (Intl.strings[locale] && Intl.strings[locale][category]) {
            result = <string>Intl.strings[locale][category][key];
        }
        
        return result;
    };

    private static safeTS = (category: string, locale: string, key: string) => {
        let result: string[] = [];
        if (Intl.strings[locale] && Intl.strings[locale][category]) {
            result = <string[]>Intl.strings[locale][category][key];
        }
        
        return result;
    };

    public static t = (category: string, key: string, args?: any): string => {
        if (!Intl.intlInitialized) {
            Intl.register();
        }

        let message = Intl.safeT(category, Intl.currentLocale, key);
        if (!message) {
            message = Intl.safeT(category, defaultLocale, key);
        }

        warning(message !== key,
            `Empty string for category ${category} and key ${key}.`
        );

        const formatter = new IntlMessageFormat(message, Intl.currentLocale);
        const result = formatter.format(args);
        if (result) {
            if (typeof result === "string") {
                return result;
            } else {
                return result.join(" ");
            }
        }
        return message;
    };

    public static ts = (category: string, key: string) => {
        let result = Intl.safeTS(category, Intl.currentLocale, key);
        if (!result) {
            result = Intl.safeTS(category, defaultLocale, key);
        }

        warning(result !== null,
            `Empty string for category ${category} and key ${key}.`
        );

        return result;
    };

    private static registerStrings = (lang: string, category: string, strings: StringsMap) => {
        if (Intl.strings[lang] === undefined) {
            Intl.strings[lang] = {};
        }

        if (Intl.strings[lang][category] === undefined) {
            Intl.strings[lang][category] = {};
        }

        for (const key in strings) {
            Intl.strings[lang][category][key] = strings[key];
        }
    };

    private static registerCategories = (lang: string, strings: StringsCategory) => {
        for (const category in strings) {
            Intl.registerStrings(lang, category, strings[category]);    
        }    
    }

    public static register = (i18n?: StringsCategory) => {
        if (!Intl.intlInitialized) {
            Intl.registerCategories("en-us", enTranslation);
            Intl.registerCategories("ru-ru", ruTranslation);

            Intl.intlInitialized = true;
        }

        if (i18n !== undefined) {
            Intl.registerCategories(Intl.currentLocale, i18n);
        }
    }
}

if ((window !== undefined) && (window["navigator"])) {
    Intl.setLocale(window.navigator.language);
}

export const _ = Intl.t;