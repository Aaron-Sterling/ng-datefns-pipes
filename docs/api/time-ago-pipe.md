# TimeAgoPipe API

The TimeAgoPipe takes a Date as input and outputs a string based on the [date-fns ```distanceInWordsToNow``` function](https://date-fns.org/v1.29.0/docs/distanceInWordsToNow).

## Syntax

```dateExpression | ago```

Here, ```dateExpression``` must be a string, number or Date that parses to a valid Date. There are no inline commands available for this pipe, but you can modify several options though the DatePipeManager.

## DatePipeManager methods for TimeAgoPipe

New options for this pipe can be defined with the following interface.
```
interface AgoPipeOptions {
    refreshRate?: number;
    prefix?: string;
    suffix?: string;
    includeSeconds?: boolean;
}
```
* ```refreshRate``` is the number of milliseconds the TimeAgo pipe waits before refreshing its output string.  The default value for ```refreshRate``` is 15000 (15 seconds).
* ```prefix``` is a string that is prepended to the distance function string. The default value is the empty string.
* ```suffix``` is a string that is appended to the end of the distance function string. The default value is ```' ago'```. Note the leading space.
* ```includeSeconds``` is a boolean flag similar to the includeSeconds flag of the [DistanceBetweenDatesPipe](doc/api/distance-between-dates-pipe.md).

### Sample code

```
import { DatePipeManager, AgoPipeOptions } from 'ng2-datefns-pipes';

export class ExampleClass {
  // inject the DatePipeManager
  constructor(manager: DatePipeManager) {
    const exampleSpanishOptions: AgoPipeOptions = {
      refreshRate: 20000,
      prefix: 'hace ',   // note trailing space
      suffix: '',
      includeSeconds: false
    };
  
    manager.setAgoPipeOptions(exampleSpanishOptions);  // sets new options
    let currentOptions = manager.getAgoPipeOptions();  // gets current options
    manager.resetAgoPipeOptions()                      // resets to original pipe options
  }
}
```

### Methods

```setAgoPipeOptions(options: AgoPipeOptions)```

Sets the TimeAgoPipe options.

```getAgoPipeOptions(): AgoPipeOptions```

Gets the current TimeAgoPipe options.

```resetAgoPipeOptions()```

Resets the TimeAgoPipe options to the starting default values. These are either the values you specified in the forRoot function in ```app.module.ts```; or, if you did not specify default options at startup, they are the original default values.
