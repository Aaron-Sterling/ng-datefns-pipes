import { Pipe, PipeTransform } from '@angular/core';
import format from 'date-fns/format';

import { DatePipeManager } from '../providers/date-pipe-manager';
import { LocaleManager } from '../providers/locale-manager/locale-manager';




// Date Pipe by Aaron Sterling

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  /**
   * Input can be a string, number or Date
   * Pipe returns the output of the date-fns format function
   */

  constructor(private manager: DatePipeManager, private localeManager: LocaleManager) {}

  transform(value: string | number | Date, dateFormat?: string) {
    const formatToUse = this.manager.getDefaultFormat(dateFormat);
    const localeToUse = this.localeManager.getFullLocale();
    return format(value, formatToUse, {locale: localeToUse});
  }
}
