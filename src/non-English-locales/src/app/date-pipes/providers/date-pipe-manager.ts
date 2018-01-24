import { Injectable, InjectionToken, Inject } from '@angular/core';

// DatePipe Manager by Aaron Sterling
// injection token
export interface AgoPipeOptions {
    refreshRate?: number;
    prefix?: string;
    suffix?: string;
    includeSeconds?: boolean;
}
export interface DatePipeConfiguration {
    defaultDateFormat?: string;
    dateDistanceIncludesSeconds?: boolean;
    agoPipeOptions?: AgoPipeOptions;
}
export const DATE_PIPE_CONFIGURATION_TOKEN = new InjectionToken<DatePipeConfiguration>('date pipe configuration');

// default constants

const INITIAL_DEFAULT_DATE_FORMAT = 'MMMM Do, YYYY';
const DEFAULT_DATE_DISTANCE_INCLUDES_SECONDS = false;
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
    private includeSeconds = DEFAULT_DATE_DISTANCE_INCLUDES_SECONDS;
    private agoPipeOptions = Object.assign({}, DEFAULT_AGO_PIPE_OPTIONS);
    private optionsToRevertTo: AgoPipeOptions;

    // initialization

    constructor(@Inject(DATE_PIPE_CONFIGURATION_TOKEN) userProvidedConfig: DatePipeConfiguration) {
        // set default date string
        if (userProvidedConfig && userProvidedConfig.defaultDateFormat) {
            this.initializeDefaultDateFormat(userProvidedConfig.defaultDateFormat);
        } else {
            this.initializeDefaultDateFormat(INITIAL_DEFAULT_DATE_FORMAT);
        }
        // set default whether distance includes seconds
        if (userProvidedConfig && userProvidedConfig.dateDistanceIncludesSeconds
                               && userProvidedConfig.dateDistanceIncludesSeconds === true) {
            this.includeSeconds = userProvidedConfig.dateDistanceIncludesSeconds;
        } else if (userProvidedConfig && typeof userProvidedConfig.dateDistanceIncludesSeconds === 'boolean'
                                      && userProvidedConfig.dateDistanceIncludesSeconds === false) {
            this.includeSeconds = false;
        }
        // set ago pipe defaults
        if (userProvidedConfig && userProvidedConfig.agoPipeOptions) {
            this.agoPipeOptions = Object.assign({}, this.agoPipeOptions, userProvidedConfig.agoPipeOptions);
            this.optionsToRevertTo = Object.assign({}, this.agoPipeOptions);
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
        this.agoPipeOptions = Object.assign({}, this.optionsToRevertTo);
    }
}
