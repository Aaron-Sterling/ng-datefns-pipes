import { Inject, Injectable, InjectionToken } from '@angular/core';

import { Locale } from './locale';
import { getLocale } from './locale-map';

// Locale Manager by Aaron Sterling

export const DEFAULT_LOCALE_TOKEN = new InjectionToken<Locale>('default locale');
const DEFAULT_LOCALE: Locale = Locale.ENGLISH;

@Injectable()
export class LocaleManager {

    private defaultLocale = DEFAULT_LOCALE;
    private localeToRevertTo = DEFAULT_LOCALE;

    constructor(@Inject(DEFAULT_LOCALE_TOKEN) userProvidedLocale: Locale) {
        if (userProvidedLocale) {
            this.defaultLocale = userProvidedLocale;
            this.localeToRevertTo = userProvidedLocale;
        }
    }

    setDefaultLocale(newDefaultLocale: Locale) {
        this.defaultLocale = newDefaultLocale;
    }

    getDefaultLocale(): Locale {
        return this.defaultLocale;
    }

    getFullLocale() {
        return getLocale(this.defaultLocale);
    }

    resetDefaultLocale() {
        this.defaultLocale = this.localeToRevertTo;
    }

}
