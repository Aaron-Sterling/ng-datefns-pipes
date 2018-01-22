import { Injectable, InjectionToken, Inject } from '@angular/core';
import * as DefaultLocale from 'date-fns/locale/en';

// DatePipe Manager
// injection token
export interface AgoPipeOptions {
    refreshRate?: number;
    prefix?: string;
    suffix?: string;
    includeSeconds?: boolean;
}
export interface DatePipeConfiguration {
    defaultDateFormat?: string;
    agoPipeOptions?: AgoPipeOptions;
}
export const DATE_PIPE_CONFIGURATION_TOKEN = new InjectionToken<DatePipeConfiguration>('date pipe configuration');

// default constants

const INITIAL_DEFAULT_DATE_FORMAT = 'MMMM Do, YYYY';
const DEFAULT_AGO_PIPE_OPTIONS: AgoPipeOptions = {
    refreshRate: 15000,
    prefix: '',
    suffix: ' ago',
    includeSeconds: false
};

@Injectable()
export class DatePipeManager {

    private dateFormat: string;
    private formatToRevertTo: string;
    private includeSeconds = false;
    private agoPipeOptions = Object.assign({}, DEFAULT_AGO_PIPE_OPTIONS);

    // initialization

    constructor(@Inject(DATE_PIPE_CONFIGURATION_TOKEN) userProvidedConfig: DatePipeConfiguration) {
        if (userProvidedConfig && userProvidedConfig.defaultDateFormat) {
            this.initializeDefaultDateFormat(userProvidedConfig.defaultDateFormat);
        } else {
            this.initializeDefaultDateFormat(INITIAL_DEFAULT_DATE_FORMAT);
        }
        if (userProvidedConfig && userProvidedConfig.agoPipeOptions) {
            this.agoPipeOptions = Object.assign({}, this.agoPipeOptions, userProvidedConfig.agoPipeOptions);
        }
    }

    private initializeDefaultDateFormat(defaultFormat: string) {
        this.setDefaultFormat(defaultFormat);
        this.formatToRevertTo = defaultFormat;
    }

    // date format

    getDefaultFormat(overrideFormat?: string): string {
        if (overrideFormat) {
            return overrideFormat;
        } else {
            return this.dateFormat;
        }
    }

    setDefaultFormat(newFormat: string) {
        this.dateFormat = newFormat;
    }

    resetDefaultFormat() {
        this.dateFormat = this.formatToRevertTo;
    }

    // distance function format

    includeSecondsInDistance() {
        this.includeSeconds = true;
    }

    doNotIncludeSecondsInDistance() {
        this.includeSeconds = false;
    }

    secondsIncludedInDistance(): boolean {
        return this.includeSeconds;
    }

    // ago pipe options

    setAgoPipeOptions(options: AgoPipeOptions) {
        this.agoPipeOptions = Object.assign({}, this.agoPipeOptions, options);
    }

    getAgoPipeOptions(): AgoPipeOptions {
        return this.agoPipeOptions;
    }

    resetAgoPipeOptions() {
        this.agoPipeOptions = Object.assign({}, DEFAULT_AGO_PIPE_OPTIONS);
    }
}
