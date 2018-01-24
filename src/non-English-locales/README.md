# Non-English locales

## Installation
```npm install ng-datefns-pipes-all-locales --save```

## Locale Setup
You can specify a default date format; whether date distance functions include seconds; and the prefix, suffix, refresh rate and use of seconds of the timeAgo pipe. (For more detail about these settings, see the API below. You can also set and reset each setting during the program by injecting the DatePipeManager.) You can aso set as default any locale supported by date-fns. [There are over 30.](https://date-fns.org/v1.29.0/docs/I18n#supported-languages)

In ```app.module.ts```:
```
import { DatePipesModule, DatePipeConfiguration, Locale } from 'ng-datefns-pipes';

const DATE_PIPE_CONFIG: DatePipeConfiguration = {
   defaultDateFormat: 'your date format string',    // default: 'MMMM Do, YYYY'
   dateDistanceIncludesSeconds: your boolean here,  // default: false
   agoPipeOptions: {
     refreshRate: your milliseconds here,           // default: 15000
     prefix: 'your prefix string',                  // default: ''
     suffix: 'your suffix string',                  // default: ' ago' <-- note the space
     includeSeconds: your boolean here              // default: false
   }
}

const DEFAULT_LOCALE: Locale = Locale.FRENCH        // <-- substitute for any other supported locale, e.g., Locale.THAI
                                                    //     Locale is an enum

@NgModule({
  declarations: [],
  imports: [
    DatePipesModule.forRoot(DATE_PIPE_CONFIG, DEFAULT_LOCALE) // < -- add this line
  ],
  bootstrap: [],
  entryComponents: [],
  providers: []
})
export class AppModule {}
```
You MUST include both a DatePipeConfiguration AND a Locale if you want to set the default locale in forRoot(). If for some reason you only want to set the locale, and leave other options as default, import the following:
```DatePipesModule.forRoot({}, DEFAULT_LOCALE); // where DEFAUJLT_LOCALE is your choice for default```

### LocaleManager API

You can also get and set the default locale on a particular page.  (There is no inline support for locales, so you can only use one locale per page.) Inject the service LocaleManager, much as you would inject the service DatePipeManager in the DatePipeManager code examples.

```
setDefaultLocale(newDefaultLocale: Locale)
```
Sets a new default locale.

```
getDefaultLocale(): Locale
```
Returns the current default locale.

```
resetDefaultLocale()
```
Reverts the default locale to whatever was set as the default during startup (i.e., either English or the default you set with the setRoot() method).

### Optional: removing locales

There are over 30 locales supported. You may need this for your application, but you may only need one or two, and want to reduce code bloat. The library is structured so you only have to modify one file to do this.

After installing the library, open your project's node_modules and find the installed copy of ```locale-map.ts```.  It should look [like this](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/src/non-English-locales/src/app/date-pipes/providers/locale-manager/locale-map.ts).

Remove imports and entries to ```localeArray``` until only your desired locales remain. The following code provides support for only the English and Spanish locales.

```
import { Locale } from './locale';

import * as en from 'date-fns/locale/en';
import * as es from 'date-fns/locale/es';

const localeArray: Array<[Locale, any]> = [
  [ Locale.ENGLISH, en ],
  [ Locale.SPANISH, es ]
];

const localeMap = new Map<Locale, any>(localeArray);

export function getLocale(locale: Locale) {
    return localeMap.get(locale);
}
```
