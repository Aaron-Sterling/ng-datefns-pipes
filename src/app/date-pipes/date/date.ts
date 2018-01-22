import { Pipe, PipeTransform } from '@angular/core';
import format from 'date-fns/format';
import { parsedOutput } from '../helper-functions';
import { DatePipeManager } from '../providers/date-pipe-manager';

// Date Pipe by Aaron Sterling

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  /**
   * Input can be a string, number or Date
   * Pipe returns the output of the date-fns format function
   */

  constructor(private manager: DatePipeManager) {}

  transform(value: string | number | Date, dateFormat?: string) {
    const formatToUse = this.manager.getDefaultFormat(dateFormat);
    // const options = { locale: this.manager.getDefaultLocale() };
    return format(value, formatToUse);
  }
}
