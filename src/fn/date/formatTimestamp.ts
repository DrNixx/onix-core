import { Intl } from '../../Intl';

const secondsInDay = 86400;

/**
 * Format timestamp
 * @param timestamp timestamp as millisecinds
 */
export const formatTimestamp = (timestamp) => {
    Intl.register()

    if (isNaN(timestamp)) {
        return Intl.t("app", "time_empty");
    }

    var pad = function (n, c) {
        if ((n = n + "").length < c) {
            return new Array(++c - n.length).join("0") + n;
        } else {
            return n;
        }
    };

    var numWithLabel = function (n: number, label: string[], padlen: number, small: boolean, less: boolean, delimeter: string) {
        if (n > 0) {
            if (small) {
                return "" + pad(n, padlen) + delimeter + label[0];
            }

            if ((n > 10) && (n < 20)) {
                return "" + pad(n, padlen) + delimeter + label[3];
            }

            var d = n % 10;
            if (d == 1) {
                return "" + pad(n, padlen) + delimeter + label[1];
            } else if ((d < 5) && (d != 0)) {
                return "" + pad(n, padlen) + delimeter + label[2];
            } else {
                return "" + pad(n, padlen) + delimeter + label[3];
            }
        } else {
            if (less) {
                return Intl.t("app", "time_lessone") + " " + label[2];
            } else {
                return Intl.t("time", "time_empty");;
            }
        }
    };

    var dayWithLabel = function (d, small, less) {
        return numWithLabel(d, Intl.ts("app", "time_days"), 0, small, less, " ");
    };

    var hourWithLabel = function (d, small, less) {
        return numWithLabel(d, Intl.ts("app", "time_hours"), 0, small, less, " ");
    };

    var minuteWithLabel = function (d, small, less) {
        return numWithLabel(d, Intl.ts("app", "time_minutes"), 0, small, less, " ");
    };

    var secondWithLabel = function (d, small, less) {
        return numWithLabel(d, Intl.ts("app", "time_seconds"), 0, small, less, " ");
    };

    let timeval = Math.round(timestamp / 100);
    if (timeval < 0) timeval = 0;
    var dday = Math.floor(timeval / 86400); timeval -= dday * 86400;
    var dhour = Math.floor(timeval / 3600); timeval -= dhour * 3600;
    var dmin = Math.floor(timeval / 60); timeval -= dmin * 60;
    var dsec = timeval;
    var result = "";
    if ((dday == 0) && (dhour == 0) && (dmin == 0) && (dsec == 0)) {
        result = "-";
    } else {
        if (dday > 0) {
            result = dayWithLabel(dday, false, false);
            if (dhour > 0) {
                result += " " + hourWithLabel(dhour, false, false);
            }
        } else {
            result += pad(dhour, 2) + ":" + pad(dmin, 2) + ":" + pad(dsec, 2);
        }
    }

    return result;
}