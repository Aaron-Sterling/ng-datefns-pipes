import { Locale } from './locale';

import * as en from 'date-fns/locale/en';
import * as ru from 'date-fns/locale/ru';
import * as eo from 'date-fns/locale/eo';
import * as zh_cn from 'date-fns/locale/zh_cn';
import * as de from 'date-fns/locale/de';
import * as ja from 'date-fns/locale/ja';
import * as es from 'date-fns/locale/es';
import * as nl from 'date-fns/locale/nl';
import * as zh_tw from 'date-fns/locale/zh_tw';
import * as nb from 'date-fns/locale/nb';
import * as ca from 'date-fns/locale/ca';
import * as id from 'date-fns/locale/id';
import * as it from 'date-fns/locale/it';
import * as pl from 'date-fns/locale/pl';
import * as pt from 'date-fns/locale/pt';
import * as sv from 'date-fns/locale/sv';
import * as fr from 'date-fns/locale/fr';
import * as tr from 'date-fns/locale/tr';
import * as ko from 'date-fns/locale/ko';
import * as el from 'date-fns/locale/el';
import * as sk from 'date-fns/locale/sk';
import * as fil from 'date-fns/locale/fil';
import * as da from 'date-fns/locale/da';
import * as is from 'date-fns/locale/is';
import * as fi from 'date-fns/locale/fi';
import * as th from 'date-fns/locale/th';
import * as hr from 'date-fns/locale/hr';
import * as ar from 'date-fns/locale/ar';
import * as bg from 'date-fns/locale/bg';
import * as cs from 'date-fns/locale/cs';
import * as mk from 'date-fns/locale/mk';
import * as ro from 'date-fns/locale/ro';

const localeArray: Array<[Locale, any]> = [
  [ Locale.ARABIC, ar ],
  [ Locale.BULGARIAN, bg ],
  [ Locale.CATALAN, ca],
  [ Locale.CHINESE_SIMPLIFIED, zh_cn ],
  [ Locale.CHINESE_TRADITIONAL, zh_cn ],
  [ Locale.CROATIAN, hr ],
  [ Locale.CZECH, cs ],
  [ Locale.DANISH, da ],
  [ Locale.DUTCH, nl ],
  [ Locale.ENGLISH, en ],
  [ Locale.ESPERANTO, eo ],
  [ Locale.FILIPINO, fil ],
  [ Locale.FINNISH, fi ],
  [ Locale.FRENCH, fr ],
  [ Locale.GERMAN, de ],
  [ Locale.GREEK, el ],
  [ Locale.ICELANDIC, is ],
  [ Locale.INDONESIAN, id ],
  [ Locale.ITALIAN, it ],
  [ Locale.JAPANESE, ja ],
  [ Locale.KOREAN, ko ],
  [ Locale.MACEDONIAN, mk ],
  [ Locale.NORWEIGAN_BOKMAL, nb ],
  [ Locale.POLISH, pl ],
  [ Locale.PORTUGUESE, pt ],
  [ Locale.ROMANIAN, ro ],
  [ Locale.RUSSIAN, ru],
  [ Locale.SLOVAK, sk ],
  [ Locale.SPANISH, es ],
  [ Locale.SWEDISH, sv ],
  [ Locale.THAI, th ],
  [ Locale.TURKISH, tr]
];

const localeMap = new Map<Locale, any>(localeArray);

export function getLocale(locale: Locale) {
    return localeMap.get(locale);
}
