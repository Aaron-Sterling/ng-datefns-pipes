# MaxDate pipe API

The MaxDate pipe selects the most recent date from an array of dates by using the [date-fns ```min``` function](https://date-fns.org/v1.29.0/docs/min).

## Syntax

```arrayOfDateExpressions | maxDate```

Here, ```arrayOfDateExpressions``` must be an array. Each element of the array must be a string, number or Date that parses to a valid date. Optionally, you can specify an inline date format string, as in the following example.

```arrayOfDateExpressions | maxDate:'MM/DD/YY'  // this will output dates in the format 10/27/55```

See the [Date Pipe API](./api/date-pipe.md) for information about the default date format.
