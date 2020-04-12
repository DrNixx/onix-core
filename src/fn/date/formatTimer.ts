import padStart from 'lodash-es/padStart';
import { _ } from '../../i18n';
import { timestampToInterval  } from './timestampToInterval';

export const formatTimer = (timestamp: number, short = true, isend?: string): string => {
    if (isNaN(timestamp)) {
        return _("timer", "empty");
    }

    const category = short ? "timer" : "datetime";

    const interval = timestampToInterval(timestamp);
    const result: string[] = [];
    if (interval.invert || ((interval.d === 0) && (interval.h === 0) && (interval.i === 0) && (interval.s === 0) && (interval.f === 0))) {
        result.push(
            isend ?? _("timer", "isend")
        );
    } else {
        if (interval.d > 0) {
            result.push(
                _(category, "days", { d: interval.d })
            );
            
            if (interval.h > 0) {
                result.push(
                    _(category, "hours", { h: interval.h })
                );
            }
        } else {
            const f = (interval.h === 0) && (interval.i === 0) && (interval.s < 10) && (interval.f > 0) ? "." + padStart(interval.f.toString(), 3, "0") : "";
            result.push(
                padStart(interval.h.toString(), 2, "0") + ":" + 
                padStart(interval.i.toString(), 2, "0") + ":" + 
                padStart(interval.s.toString(), 2, "0") + f
            );

        }
    }

    return result.join(" ");
}