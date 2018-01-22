import { Pipe, PipeTransform } from '@angular/core';
import min from 'date-fns/min';
import format from 'date-fns/format';
import { parsedOutput } from '../helper-functions';
import { DatePipeManager } from '../providers/date-pipe-manager';

// min date pipe by Aaron Sterling

@Pipe({
  name: 'minDate',
})
export class MinDatePipe implements PipeTransform {
  /**
   * Returns the min date from a range of dates
   */

  constructor(private manager: DatePipeManager) {}

  transform(range: Array<string | number | Date>, dateFormat?: string) {
    const formatToUse = this.manager.getDefaultFormat(dateFormat);
    return format(min(...range), formatToUse);
  }
}
