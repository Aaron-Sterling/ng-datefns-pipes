# ng-datefns-pipes
Angular pipes based on date-fns. Date pipe, time-ago pipe, minDate pipe, maxDate pipe, distanceBetweenDates pipe. I initially built these for Ionic projects, because the Angular date pipe was not performing well on all mobile devices, and the date-fns functions were not exhibiting problems. However, no use of Ionic is required. This npm library should work with any Angular 5 project, and any Ionic 3 project.

1. [Installation](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/README.md#installation)
2. [Sample usage](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/README.md#sample-usage)
3. [Basic setup](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/README.md#basic-setup)
4. [Advanced setup](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/README.md#advanced-setup)
5. [API](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/README.md#api)

Next page: [Non-English locales](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/src/non-English-locales/README.md)

## Installation

English locale:

```npm install ng-datefns-pipes --save```

Support for all date-fns locales:

```npm install ng-datefns-pipes-all-locales --save```

## Sample usage
Date pipe:
```
napoleon = new Date(1804, 11, 2);                           // in ts file
Napoleon crowned himself emperor on {{ napoleon | date }}.  // in template
Napoleon crowned himself emperor on December 2nd, 1804.     // output
```
Time ago pipe:
```
aquinas = new Date(1274, 2, 7);          // in ts file
Aquinas died {{ aquinas | ago }}.<br>    // in template
Aquinas died almost 744 years ago.       // output
```
Time ago pipe second example:
```
now = new Date();                              // in ts file
You entered this page {{ now | ago }}.         // in template
You entered this page less than 5 seconds ago. // output (updates every 15 seconds)
```
Distance between dates:
```
datePair = [ this.aquinas, this.napoleon ];                                                // in ts file
Aquinas's and Napoleon's actions were separated by {{ datePair | distanceBetweenDates }}.  // in template
Aquinas's and Napoleon's actions were separated by almost 531 years.                       // output
```
Min date:
```
dateArray = [ this.aquinas, this.napoleon, this.now ];    // in ts file
The earliest of those dates is {{ dateArray | minDate }}. // in template
The earliest of those dates is March 7th, 1274.           // output 
```
Max date:
```
The most recent of those dates is {{ dateArray | maxDate }}. // in template (ts file same as before)
The most recent of those dates is ___.    // <-- output, blank contains today's date
```

## Basic setup
In ```app.module.ts```:
```
import { DatePipesModule } from 'ng-datefns-pipes';

@NgModule({
  declarations: [],
  imports: [
    DatePipesModule.forRoot() // < -- add this line
  ],
  bootstrap: [],
  entryComponents: [],
  providers: []
})
export class AppModule {}
```
This gives you access to all the (English language) date pipes, with the default configuration. For details, see the API below.
## Advanced Setup
You can specify a default date format; whether date distance functions include seconds; and the prefix, suffix, refresh rate and use of seconds of the timeAgo pipe. (For more detail about these settings, see the API below. You can also set and reset each setting during the program by injecting the DatePipeManager.)

In ```app.module.ts```:
```
import { DatePipesModule, DatePipeConfiguration } from 'ng-datefns-pipes';

const DATE_PIPE_CONFIG: DatePipeConfiguration = {
   defaultDateFormat: 'your date format string',    // default: 'MMMM Do, YYYY'
   dateDistanceIncludesSeconds: your boolean here,  // default: false
   agoPipeOptions: {
     refreshRate: your milliseconds here,           // default: 15000
     prefix: 'your prefix string',                  // default: ''
     suffix: 'your suffix string',                  // default: ' ago' <-- note the space
     includeSeconds: your boolean here              // default: false
   }
}

@NgModule({
  declarations: [],
  imports: [
    DatePipesModule.forRoot(DATE_PIPE_CONFIG) // < -- add this line
  ],
  bootstrap: [],
  entryComponents: [],
  providers: []
})
export class AppModule {}
```

## API

1. [Date pipe](docs/api/date-pipe.md)
2. [Time ago pipe](docs/api/time-ago-pipe.md)
3. [Distance between dates pipe](docs/api/distance-between-dates-pipe.md)
4. [MaxDate pipe](docs/api/max-date-pipe.md)
5. [MinDate pipe](docs/api/min-date-pipe.md)

Next page: [Non-English locales](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/src/non-English-locales/README.md)
