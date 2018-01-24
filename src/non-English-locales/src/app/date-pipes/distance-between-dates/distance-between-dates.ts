import { Pipe, PipeTransform } from '@angular/core';
import distanceInWords from 'date-fns/distance_in_words';
import { DatePipeManager } from '../providers/date-pipe-manager';
import { LocaleManager } from '../providers/locale-manager/locale-manager';

/**
 * distance in words pipe by Aaron Sterling
 * takes as input an array of two dates
 * outputs the value of the date-fns DistanceInWords function
 */
@Pipe({
  name: 'distanceBetweenDates',
})
export class DistanceBetweenDatesPipe implements PipeTransform {

  constructor (private manager: DatePipeManager, private localeManager: LocaleManager) {}

  transform(dates: Array<string | number | Date>) {
    const localeToUse = this.localeManager.getFullLocale();
    if (this.manager.secondsIncludedInDistance()) {
      return distanceInWords(dates[0], dates[1], {includeSeconds: true, locale: localeToUse});
    } else {
      return distanceInWords(dates[0], dates[1], {includeSeconds: false, locale: localeToUse});
    }
  }
}
