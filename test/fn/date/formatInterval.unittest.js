"use strict";

import { formatInterval } from "../../../dist/fn/date/formatInterval";
import { i18n } from "../../../dist/i18n";

describe('fn/date/formatInterval', function() {
    describe('#formatInterval()', function() {
        it('test format DateInterval', function() {
            let i = {
                y: 1,
                m: 5,
                d: 3,
                h: 4,
                i: 22,
                s: 6,
                f: 0,
                invert: false,
                days: false
            };

            i18n.setLocale("ru-ru");

            let res = formatInterval(i);
            expect(res).to.equal("1 год 5 месяцев 3 дня 4 часа 22 минуты 6 секунд");

            res = formatInterval(i, 2);
            expect(res).to.equal("1 год 5 месяцев");
        });
    });
});