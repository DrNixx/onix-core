import { isDate } from '../Types';
import { intVal } from '../number/IntVal';
import { Timezone } from './Timezone';

const valueToTwoDigits = function (value) {
    return ((value < 10) ? '0' : '') + value;
};

// ===================== Date ========================
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dateRegExp = /^\/Date\((.*?)\)\/$/;
const offsetRegExp = /[+-]\d*/;

export const dateToUTCString = (date) => {
    const time = valueToTwoDigits(date.getUTCHours()) + ':' + valueToTwoDigits(date.getUTCMinutes()) + ':' + valueToTwoDigits(date.getUTCSeconds());
    return days[date.getUTCDay()] + ', ' + valueToTwoDigits(date.getUTCDate()) + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCFullYear() + ' ' + time + ' GMT';
};

const parseMicrosoftFormatOffset = (offset: string) => {
    var sign = offset.substr(0, 1) === "-" ? -1 : 1;

    offset = offset.substring(1);
    const result = (intVal(offset.substr(0, 2)) * 60) + intVal(offset.substring(2));

    return sign * result;
}

export const parseDate = (value) => {
    if (isDate(value)) {
        return value;
    }

    if (value && value.indexOf("/D") === 0) {
        const rDate = dateRegExp.exec(value);
        if (rDate) {
            const str = rDate[1];
            let rTz = offsetRegExp.exec(str.substring(1));

            let date = new Date(intVal(str));

            if (rTz) {
                let tzoffset = parseMicrosoftFormatOffset(rTz[0]);
                const timezone = new Timezone();
                date = timezone.apply(date, 0);
                date = timezone.convert(date, 0, -1 * tzoffset);
            }

            return date;
        }
    }

    return value;
}

export { formatTimestamp } from './formatTimestamp';