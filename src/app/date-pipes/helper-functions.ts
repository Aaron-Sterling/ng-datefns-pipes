// helper functions for date pipes
import parse from 'date-fns/parse';
import isValid from 'date-fns/is_valid';

export function isValidInput(input: any): boolean {
    if (!(typeof input === 'number' || typeof input === 'string' || input instanceof Date)) {
        return false;
    } else {
        return isValid(parse(input));
    }
}

// export function outputIfInputsValid(input: any, output: string, optionalInput?: any): string {
//     if (optionalInput && !isValidInput(optionalInput)) {
//         return '';
//     }
//     else if (isValidInput(input) && isValidInput(output)) {
//         return output;
//     }
//     else {
//         return '';
//     }
// }

export function parsedOutput(outputToParse: string): string {
    if (isValid(parse(outputToParse))) {
        return outputToParse;
    }
    else {
        return '';
    }
}