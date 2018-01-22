# ng-datefns-pipes
Angular pipes based on date-fns. Date pipe, time-ago pipe, minDate pipe, maxDate pipe, distanceBetweenDates pipe.

Installation
Sample usage
Basic setup
Advanced setup
API

## Installation
TODO

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

const DATE_PIPE_CONFIG = {
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
Date pipe
Time ago pipe
Distance between dates pipe
MaxDate pipe
MinDate pipe
DatePipeManager
