import { _ } from '../../Intl';
import { DateInterval, normalize } from './DateInterval';

export const formatInterval = (interval: DateInterval, parts: number = 0): string => {
    interval = normalize(interval);

    const format = [];
    if (interval.y !== 0) {
        format.push(
            _("datetime", "years", { y: interval.y })
        );
    }

    if (interval.m !== 0) {
        format.push(
            _("datetime", "months", { m: interval.m })
        );
    }

    if (interval.d !== 0) {
        format.push(
            _("datetime", "days", { d: interval.d })
        );
    }

    if (interval.h !== 0) {
        format.push(
            _("datetime", "hours", { h: interval.h })
        );
    }

    if (interval.i !== 0) {
        format.push(
            _("datetime", "minutes", { i: interval.i })
        );
    }

    if (interval.s !== 0) {
        format.push(
            _("datetime", "seconds", { s: interval.s })
        );
    }

    if (format.length === 0) {
        return "";
    }

    let values: string[];
    if ((parts > 0) && (format.length > 1)) {
        values = [];
        while ((values.length < parts) && (format.length > 0)) {
            
            values.push(format.shift()!);
        }
    } else {
        values = format;
    }

    return values.join(" ");
}