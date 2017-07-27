import * as warning from 'warning';

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

export class Intl {
    private static currentLocale: Locales = defaultLocale;
    private static categories: Strings = {};

    public static setLocale = (value: string) => {
        if (value=="en" || value=="en-us" || value=="en-uk") {
            Intl.currentLocale = 'en-us';
        }

        Intl.currentLocale = 'ru-ru';

        return Intl.currentLocale;
    };

    private static safeT = (category: string, locale: string, key: string) => {
        let result: string = null;
        if (Intl.categories[category] && Intl.categories[category][locale]) {
            result = <string>Intl.categories[category][locale][key];
        }
        
        return result;
    };

    private static safeTS = (category: string, locale: string, key: string) => {
        let result: string[] = null;
        if (Intl.categories[category] && Intl.categories[category][locale]) {
            result = <string[]>Intl.categories[category][locale][key];
        }
        
        return result;
    };

    public static t = (category: string, key: string) => {
        let result = Intl.safeT(category, Intl.currentLocale, key);
        if (!result) {
            result = Intl.safeT(category, defaultLocale, key);
        }

        warning(result !== null,
            `Empty string for category ${category} and key ${key}.`
        );

        return result;
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

    public static registerStrings = (category: string, strings: StringsCategory) => {    
        if (!Intl.categories[category]) {
            Intl.categories[category] = strings;
        } else {
            for (const lang in strings) {
                if (!Intl.categories[category][lang]) {
                    Intl.categories[category][lang] = {};
                }

                const langCat = strings[lang];
                for (const key in langCat) {
                    Intl.categories[category][lang][key] = langCat[key];
                }
            }
        }
    };
}

Intl.setLocale(window.navigator.language);