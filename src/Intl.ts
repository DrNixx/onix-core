declare type Locales = 'ru-ru' | 'en-us';
declare type StringsCallback = (key: string) => string;

export interface StringsMap {
    [key: string]: string | string[];
}

export interface StringsCategory {
    [lang: string]: StringsMap;
}

export interface Strings {
    [module: string]: StringsCategory;
}

const defaultLocale: Locales = 'ru-ru';
let currentLocale: Locales = defaultLocale;
let categories: Strings = {};

const locale = (value: string) => {
    if (value=="en" || value=="en-us" || value=="en-uk") {
        currentLocale = 'en-us';
    }

    currentLocale = 'ru-ru';

    return currentLocale;
}

const register = (category: string, strings: StringsCategory) => {    
    if (!categories[category]) {
        categories[category] = strings;
    } else {
        for (const lang in strings) {
            categories[category][lang] = strings[lang];
        }
    }
}

const t = (category: string, key: string) => {
    let result = <string>categories[category][currentLocale][key];
    if (!result) {
        result = <string>categories[category][defaultLocale][key];
    }

    return result;
}

const ts = (category: string, key: string) => {
    let result = <string[]>categories[category][currentLocale][key];
    if (!result) {
        result = <string[]>categories[category][defaultLocale][key];
    }

    return result;
}


export class Intl {
    public static setLocale = locale;

    public static t = t;

    public static ts = ts;

    public static registerStrings = register;
}

Intl.setLocale(window.navigator.language);