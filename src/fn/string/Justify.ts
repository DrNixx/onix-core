import padStart = require('lodash/padStart');
import padEnd = require('lodash/padEnd');

export const justify = (value: string, prefix: string, leftJustify: boolean, minWidth: number, zeroPad: boolean) => {
    var diff = minWidth - value.length;
    if (diff > 0) {
        if (leftJustify || !zeroPad) {
            value = leftJustify ? padStart(value, minWidth) : padEnd(value, minWidth);
        } else {
            value = value.slice(0, prefix.length) + padStart('', diff, '0') + value.slice(prefix.length);
        }
    }

    return value;
}