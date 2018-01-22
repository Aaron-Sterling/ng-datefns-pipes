import { Pipe, PipeTransform } from '@angular/core';
import max from 'date-fns/max';
import format from 'date-fns/format';
import { parsedOutput } from '../helper-functions';
import { DatePipeManager } from '../providers/date-pipe-manager';

@Pipe({
  name: 'maxDate',
})
export class MaxDatePipe implements PipeTransform {
  /**
   * Returns the max date from an array of dates
   */

  constructor(private manager: DatePipeManager) {}

  transform(range: Array<string | number | Date>, dateFormat?: string) {
    const formatToUse = this.manager.getDefaultFormat(dateFormat);
    return format(max(...range), formatToUse);
  }
}
