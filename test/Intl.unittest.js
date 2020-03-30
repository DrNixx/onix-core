"use strict";

import { Intl } from "../dist/Intl";

describe('Intl', function() {
    describe('#t()', function() {
        it('test function with default locale', function() {
            Intl.register();
            const s = Intl.t("timer", "lessone");
            expect(s).to.equal("менее 1");
        });

        it('test function with change locale', function() {
            Intl.register();
            Intl.setLocale('en-us');
            const s = Intl.t("timer", "lessone");
            expect(s).to.equal("less 1");
        });

        it('test function with custom strings', function() {
            Intl.register({core: { lessone: "my string"}});
            const s = Intl.t("core", "lessone");
            expect(s).to.equal("my string");
        });
    });
});