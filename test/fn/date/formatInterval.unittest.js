"use strict";

import { formatInterval } from "../../../dist/fn/date/formatInterval";

describe('fn/date/formatInterval', function() {
    describe('#formatInterval()', function() {
        it('test format DateInterval', function() {
            let i = {
                y: 1,
                m: 2,
                d: 3,
                h: 4,
                i: 5,
                s: 6,
                f: 0,
                invert: false,
                days: false
            };


            let res = formatInterval(i);
            expect(res).to.equal("1 год 2 месяца 3 дня 4 часа 5 минут 6 секунд");

            res = formatInterval(i, 2);
            expect(res).to.equal("1 год 2 месяца");
        });
    });
});