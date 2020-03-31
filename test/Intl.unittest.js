"use strict";

import { Intl, _ } from "../dist/Intl";

describe('Intl', function() {
    describe('#t()', function() {
        it('test function with default locale', function() {
            Intl.setLocale('en-us');
            const s = _("timer", "lessone");
            expect(s).to.equal("less 1");
        });

        it('test function with change locale', function() {
            Intl.setLocale('en-us');
            let s = _("timer", "lessone");
            expect(s).to.equal("less 1");

            Intl.setLocale('ru-ru');
            s = _("timer", "lessone");
            expect(s).to.equal("менее 1");

            Intl.setLocale('ru');
            s = _("timer", "lessone");
            expect(s).to.equal("менее 1");
        });

        it('test function with nonexistent locale', function() {
            Intl.setLocale('fr-fr');
            const s = _("timer", "lessone");
            expect(s).to.equal("less 1");
        });

        it('test function with custom strings', function() {
            Intl.register({core: { lessone: "my string"}});
            const s = _("core", "lessone");
            expect(s).to.equal("my string");
        });
    });
});