import { pad } from './Pad';

export const justify = (value: string, prefix: string, leftJustify: boolean, minWidth: number, zeroPad: boolean) => {
    var diff = minWidth - value.length;
    if (diff > 0) {
        if (leftJustify || !zeroPad) {
            value = pad(value, minWidth, ' ', leftJustify);
        } else {
            value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
        }
    }
    return value;
}