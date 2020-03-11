"use strict";

import { pushif } from "../../../dist/fn/array/Pushif";

describe('fn/array/Pushif', function() {
    describe('#pushif()', function() {
        it('test add value when the condition is false', function() {
            const a = [1, 2, 3];
            pushif(a, false, 4);
            expect(a).to.deep.contain(3);
            expect(a).to.not.deep.contain(4);
        });

        it('test add value when the condition is true', function() {
            const a = [1, 2, 3];
            pushif(a, true, 4);
            expect(a).to.deep.contain(3);
            expect(a).to.deep.contain(4);
        });
    });
});