import { NgModule, ModuleWithProviders } from '@angular/core';
import { DatePipe } from './date/date';
import { MaxDatePipe } from './max-date/max-date';
import { MinDatePipe } from './min-date/min-date';
import { DistanceBetweenDatesPipe } from './distance-between-dates/distance-between-dates';
import { TimeAgoPipe } from './time-ago-pipe/time-ago-pipe';
import { DatePipeManager, DATE_PIPE_CONFIGURATION_TOKEN, DatePipeConfiguration } from './providers/date-pipe-manager';
import { LocaleManager, DEFAULT_LOCALE_TOKEN } from './providers/locale-manager/locale-manager';
import { Locale } from './providers/locale-manager/locale';

// date pipe module by Aaron Sterling

@NgModule({
    declarations: [ DatePipe,
                    MaxDatePipe,
                    MinDatePipe,
                    DistanceBetweenDatesPipe,
                    TimeAgoPipe
    ],
    providers: [
                    DatePipeManager,
                    LocaleManager
    ],
    imports: [],
    exports: [
                    DatePipe,
                    MaxDatePipe,
                    MinDatePipe,
                    DistanceBetweenDatesPipe,
                    TimeAgoPipe
    ]
})
export class DatePipesModule {
    static forRoot(config?: DatePipeConfiguration, locale?: Locale): ModuleWithProviders {
        return {
            ngModule: DatePipesModule,
            providers: [
                        {provide: DATE_PIPE_CONFIGURATION_TOKEN, useValue: config},
                        {provide: DEFAULT_LOCALE_TOKEN, useValue: locale}
                       ]
        };
    }
}
