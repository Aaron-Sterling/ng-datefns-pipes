# MinDate pipe API

The MinDate pipe selects the earliest date from an array of dates by using the [date-fns ```min``` function](https://date-fns.org/v1.29.0/docs/min).

## Syntax

```arrayOfDateExpressions | minDate```

Here, ```arrayOfDateExpressions``` must be an array. Each element of the array must be a string, number or Date that parses to a valid Date. Optionally, you can specify an inline date format string, as in the following example.

```arrayOfDateExpressions | minDate:'MM/DD/YY'  // this will output dates in the format 10/27/55```

If you do not specify an inline date format, the default date format will be used. See the [Date Pipe API](./api/date-pipe.md) for information about the default date format.
