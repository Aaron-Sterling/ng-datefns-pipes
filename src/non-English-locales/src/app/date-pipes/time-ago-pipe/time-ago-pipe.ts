// time ago pipe

import { Pipe, PipeTransform, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import { DatePipeManager, AgoPipeOptions } from '../providers/date-pipe-manager';
import { LocaleManager } from '../providers/locale-manager/locale-manager';

@Pipe({name: 'ago', pure: false})
export class TimeAgoPipe implements PipeTransform, OnDestroy {

    private refresher: Subscription = new Subscription();
    private refreshNow = false;
    private previousAgoExpression = '';
    private options: AgoPipeOptions;

    constructor(manager: DatePipeManager, private localeManager: LocaleManager) {
        this.options = manager.getAgoPipeOptions();
        this.refresher = Observable.interval(this.options.refreshRate).startWith(0).subscribe(_ => this.refreshNow = true);
    }

    ngOnDestroy() {
        this.refresher.unsubscribe();
    }

    transform(inputTime: string | number | Date) {
        if (this.refreshNow) {
            this.refreshNow = false;
            const newAgoExpression = this.agoExpression(inputTime);
            this.previousAgoExpression = newAgoExpression;
            return newAgoExpression;
        } else {
            return this.previousAgoExpression;
        }
    }

    private agoExpression(inputTime: string | number | Date): string {
        const localeToUse = this.localeManager.getFullLocale();
        const timeText = distanceInWordsToNow(inputTime, {includeSeconds: this.options.includeSeconds, locale: localeToUse});
        const expression = this.options.prefix + timeText + this.options.suffix;
        return expression;
    }
}
