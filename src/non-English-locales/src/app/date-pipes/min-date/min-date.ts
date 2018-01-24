import { Pipe, PipeTransform } from '@angular/core';
import min from 'date-fns/min';
import format from 'date-fns/format';
import { DatePipeManager } from '../providers/date-pipe-manager';
import { LocaleManager } from '../providers/locale-manager/locale-manager';

// min date pipe by Aaron Sterling

@Pipe({
  name: 'minDate',
})
export class MinDatePipe implements PipeTransform {
  /**
   * Returns the min date from a range of dates
   */

  constructor(private manager: DatePipeManager, private localeManager: LocaleManager) {}

  transform(range: Array<string | number | Date>, dateFormat?: string) {
    const formatToUse = this.manager.getDefaultFormat(dateFormat);
    const localeToUse = this.localeManager.getFullLocale();
    return format(min(...range), formatToUse, {locale: localeToUse});
  }
}
