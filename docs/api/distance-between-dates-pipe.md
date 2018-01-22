# DistanceBetweenDatesPipe API

The DistanceBetweenDatesPipe accepts a pair of date expressions, and returns a string generated from the [date-fns ```distanceInWords``` function](https://date-fns.org/v1.29.0/docs/distanceInWords).

# Syntax

```datePair | distanceBetweenDates```

Here, ```datePair``` must be an array of length 2. Each element of the array must be a string, number or Date that parses to a valid Date. There are no inline options for this pipe, but you can use the DatePipeManager to set whether the distance string contains seconds.

# DatePipeManager methods for DistanceBetweenDatesPipe

You can programmatically set whether the distance function shows seconds. The default value for this flag is ```false```.

### Sample code
```
import { DatePipeManager } from 'ng2-datefns-pipes';

export class ExampleClass {
  // inject the DatePipeManager
  constructor(manager: DatePipeManager) {
    manager.includeSecondsInDistance(); // sets flag to always include seconds in distance
    manager.doNotIncludeSecondsInDistance() // sets flag so seconds will never be included in distance
    let areSecondsIncluded = manager.secondsIncludedInDistance() // returns true or false
  }
}
```

### Methods

```includeSecondsInDistance()```

Sets as default to include seconds in distance.

```doNotIncludeSecondsInDistance()```

Set as default to NOT include seconds in distance.

```secondsIncludedInDistance(): boolean```

Returns the current value of the includeSeconds flag.
