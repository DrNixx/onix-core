"use strict";

import { formatTimer } from "../../../dist/fn/date/formatTimer";
import { Intl } from "../../../dist/Intl";

describe('fn/date/formatTimer', function() {
    describe('#formatTimer()', function() {
        it('test format timer value', function() {
            const sec = 1000;
            const min = 60 * sec;
            const hour = 60 * min;
            const day = 24 * hour;

            Intl.setLocale("ru-ru");
            
            let res = formatTimer(5 * day + 2 * min);
            expect(res).to.equal("5 дн.");

            res = formatTimer(5 * day + 2 * hour);
            expect(res).to.equal("5 дн. 2 ч.");

            res = formatTimer(2 * hour + 37 * min + 42 * sec);
            expect(res).to.equal("02:37:42");

            res = formatTimer(37 * min + 42 * sec);
            expect(res).to.equal("00:37:42");

            res = formatTimer(2 * sec + 50);
            expect(res).to.equal("00:00:02.050");
        });
    });
});