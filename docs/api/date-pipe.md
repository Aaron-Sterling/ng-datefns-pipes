# Date pipe API

The Date pipe formats a date by using the [date-fns ```format``` function](https://date-fns.org/v1.29.0/docs/format).

## Syntax
```
dateExpression | date
```
Here, ```dateExpression``` must be a string, number or Date that parses to a valid Date.
Optionally, you can specify an inline date format string, as in the following example.
```
dateExpression | date:'MM/DD/YY' // this will output dates in the format 10/27/55
```
The default date format string is ```'MMMM Do, YYYY'```. A full list of acceptable tokens for the date format string is [here](https://date-fns.org/v1.29.0/docs/format#description).

## DatePipeManager methods for DatePipe

You can set a new default date string during initial setup as shown in the [Advanced Setup](https://github.com/Aaron-Sterling/ng-datefns-pipes/blob/master/README.md#advanced-setup) section. You can also programmatically set a new default date format string, get the value of the current date format string, or reset the date format string to the original default value. Methods to perform these tasks are available in the DatePipeManager.

### Sample code
```
import { DatePipeManager } from 'ng2-datefns-pipes';

export class ExampleClass {
  // inject the DatePipeManager
  constructor(manager: DatePipeManager) {
    manager.setDefaultFormat('MM/DD/YY');  // sets default date format
    let currentFormat = manager.getDefaultFormat();  // gets the current default date format
    manager.resetDefaultFormat(); // resets the default date format to its original value
  }
}
```
### Methods
```setDefaultFormat(newFormat: string)```

Sets new default date format.

```getDefaultFormat(overrideFormat?: string): string```

Returns the current default date format if overrideFormat is falsy. Otherwise returns overrideFormat. Does not change the default date format.

```resetDefaultFormat()```

Resets the default date format to its original value. The original value is the one you specified during setup, or ```'MMMM Do, YYYY'``` if you did not specify a date format during setup.
