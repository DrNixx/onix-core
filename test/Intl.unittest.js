"use strict";

import { Intl } from "../dist/Intl";

describe('Intl', function() {
    describe('#t()', function() {
        it('test function with default locale', function() {
            Intl.register();
            const s = Intl.t("app", "time_lessone");
            expect(s).to.equal("менее 1");
        });

        it('test function with change locale', function() {
            Intl.register();
            Intl.setLocale('en-us');
            const s = Intl.t("app", "time_lessone");
            expect(s).to.equal("less 1");
        });
    });
});