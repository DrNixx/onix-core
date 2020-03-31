import { IntlMessageFormat } from 'intl-messageformat';
import * as warning from 'warning';
import * as enTranslation from './i18n/en-us.json';
import * as ruTranslation from './i18n/ru-ru.json';

export interface StringsMap {
    [key: string]: string | string[];
}

export interface StringsCategory {
    [module: string]: StringsMap;
}

export interface Strings {
    [lang: string]: StringsCategory;
}

const defaultLocale = "en-us";
let initialized = false;

export class IntlManager {
    private currentLocale: string = defaultLocale;
    private strings: Strings = {};

    public setLocale = (value: string) => {
        const msg = new IntlMessageFormat('', value);
        const locale = msg.resolvedOptions().locale;
        if (locale) {
            this.currentLocale = locale.toLowerCase();
        } else {
            this.currentLocale = defaultLocale;
        }

        
        return this.currentLocale;
    };

    private safeT = (category: string, locale: string, key: string) => {
        let result: string = key;
        if (this.strings[locale] && this.strings[locale][category]) {
            result = <string>this.strings[locale][category][key];
        }
        
        return result;
    };

    public t = (category: string, key: string, args?: any): string => {
        let message = this.safeT(category, this.currentLocale, key);
        if (message === key) {
            message = this.safeT(category, defaultLocale, key);
        }

        warning(message !== key,
            `Empty string for category ${category} and key ${key}.`
        );

        const formatter = new IntlMessageFormat(message, this.currentLocale);
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

    private registerStrings = (lang: string, category: string, strings: StringsMap) => {
        if (this.strings[lang] === undefined) {
            this.strings[lang] = {};
        }

        if (this.strings[lang][category] === undefined) {
            this.strings[lang][category] = {};
        }

        for (const key in strings) {
            this.strings[lang][category][key] = strings[key];
        }
    };

    protected registerCategories = (lang: string, strings: StringsCategory) => {
        for (const category in strings) {
            this.registerStrings(lang, category, strings[category]);    
        }    
    }

    public register = (i18n?: StringsCategory) => {
        if (!initialized) {
            this.registerCategories("en-us", enTranslation);
            this.registerCategories("ru-ru", ruTranslation);

            initialized = true;
        }

        if (i18n !== undefined) {
            this.registerCategories(this.currentLocale, i18n);
        }
    }
}

export const Intl = new IntlManager(); 
export const _ = Intl.t;

if ((window !== undefined) && (window["navigator"])) {
    Intl.setLocale(window.navigator.language);
}

Intl.register();