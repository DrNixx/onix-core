import { isString, isNumber } from '../Types';
import { indexOf } from '../array/IndexOf';
import { grep } from '../array/Grep';
import { zones as allZones, rules as allRules } from './Timezones';

const months =  { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
const days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function ruleToDate(year, rule) {
    var date;
    var targetDay;
    var ourDay;
    var month = rule[3];
    var on = rule[4];
    var time = rule[5];
    var cache = rule[8];

    if (!cache) {
        rule[8] = cache = {};
    }

    if (cache[year]) {
        return cache[year];
    }

    if (!isNaN(on)) {
        date = new Date(Date.UTC(year, months[month], on, time[0], time[1], time[2], 0));
    } else if (on.indexOf("last") === 0) {
        date = new Date(Date.UTC(year, months[month] + 1, 1, time[0] - 24, time[1], time[2], 0));

        targetDay = days[on.substr(4, 3)];
        ourDay = date.getUTCDay();

        date.setUTCDate(date.getUTCDate() + targetDay - ourDay - (targetDay > ourDay ? 7 : 0));
    } else if (on.indexOf(">=") >= 0) {
        date = new Date(Date.UTC(year, months[month], on.substr(5), time[0], time[1], time[2], 0));

        targetDay = days[on.substr(0, 3)];
        ourDay = date.getUTCDay();

        date.setUTCDate(date.getUTCDate() + targetDay - ourDay + (targetDay < ourDay ? 7 : 0));
    }

    return cache[year] = date;
}

function findRule(utcTime: number, rules, zone) {
    rules = rules[zone];

    if (!rules) {
        var time = zone.split(":");
        var offset = 0;

        if (time.length > 1) {
            offset = time[0] * 60 + Number(time[1]);
        }

        return [-1000000, 'max', '-', 'Jan', 1, [0, 0, 0], offset, '-'];
    }

    var year = new Date(utcTime).getUTCFullYear();

    rules = grep(rules, function(rule) {
        var from = rule[0];
        var to = rule[1];

        return from <= year && (to >= year || (from == year && to == "only") || to == "max");
    });

    rules.push(utcTime);

    rules.sort(function(a, b) {
        if (typeof a != "number") {
            a = Number(ruleToDate(year, a));
        }

        if (typeof b != "number") {
            b = Number(ruleToDate(year, b));
        }

        return a - b;
    });

    var rule = rules[indexOf(utcTime, rules) - 1] || rules[rules.length - 1];

    return isNaN(rule) ? rule : null;
}

function findZone(utcTime: number, zones, timezone) {
    var zoneRules = zones[timezone];

    if (typeof zoneRules === "string") {
        zoneRules = zones[zoneRules];
    }

    if (!zoneRules) {
        throw new Error('Timezone "' + timezone + '" is either incorrect, or kendo.timezones.min.js is not included.');
    }

    for (var idx = zoneRules.length - 1; idx >= 0; idx--) {
        var until = zoneRules[idx][3];

        if (until && utcTime > until) {
            break;
        }
    }

    var zone = zoneRules[idx + 1];

    if (!zone) {
        throw new Error('Timezone "' + timezone + '" not found on ' + utcTime + ".");
    }

    return zone;
}

function zoneAndRule(utcTime: number | Date, zones, rules, timezone) {
    if (!isNumber(utcTime)) {
        utcTime = Date.UTC(utcTime.getFullYear(), utcTime.getMonth(),
            utcTime.getDate(), utcTime.getHours(), utcTime.getMinutes(),
            utcTime.getSeconds(), utcTime.getMilliseconds());
    }

    var zone = findZone(utcTime, zones, timezone);

    return {
        zone: zone,
        rule: findRule(utcTime, rules, zone[1])
    };
}

export class Timezone {
    zones = {};
    rules = {};

    constructor() {
        this.zones = allZones;
        this.rules = allRules;
    }

    offset(utcTime, timezone): number {
        if (timezone == "Etc/UTC" || timezone == "Etc/GMT") {
            return 0;
        }

        var info = zoneAndRule(utcTime, this.zones, this.rules, timezone);
        var zone = info.zone;
        var rule = info.rule;

        return parseFloat(rule ? zone[0] - rule[6] : zone[0]);
    }

    convert(date: Date, fromOffset: string | number, toOffset: string | number): Date {
        if (isString(fromOffset)) {
            fromOffset = this.offset(date, fromOffset);
        }

        if (isString(toOffset)) {
            toOffset = this.offset(date, toOffset);
        }
        
        var fromLocalOffset = date.getTimezoneOffset();

        date = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

        var toLocalOffset = date.getTimezoneOffset();

        return new Date(date.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
    }

    apply(date, timezone) {
        return this.convert(date, date.getTimezoneOffset(), timezone);
    }

    remove(date, timezone) {
        return this.convert(date, timezone, date.getTimezoneOffset());
    }

    toLocalDate(time) {
        return this.apply(new Date(time), "Etc/UTC");
    }
}