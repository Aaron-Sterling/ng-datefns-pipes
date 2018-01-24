import { Pipe, PipeTransform } from '@angular/core';
import max from 'date-fns/max';
import format from 'date-fns/format';
import { DatePipeManager } from '../providers/date-pipe-manager';
import { LocaleManager } from '../providers/locale-manager/locale-manager';

// max date pipe by Aaron Sterling

@Pipe({
  name: 'maxDate',
})
export class MaxDatePipe implements PipeTransform {
  /**
   * Returns the max date from an array of dates
   */

  constructor(private manager: DatePipeManager, private localeManager: LocaleManager) {}

  transform(range: Array<string | number | Date>, dateFormat?: string) {
    const formatToUse = this.manager.getDefaultFormat(dateFormat);
    const localeToUse = this.localeManager.getFullLocale();
    return format(max(...range), formatToUse, {locale: localeToUse});
  }
}
