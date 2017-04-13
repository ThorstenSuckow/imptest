/**
 * conjoon
 * (c) 2007-2017 conjoon.org
 * licensing@conjoon.org
 *
 * theme-cn_default
 * Copyright (C) 2017 Thorsten Suckow-Homberg/conjoon.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

describe('conjoon.cn_default.overrides.cn_user.view.authentication.AuthForm', function(t) {

    var form;

    t.afterEach(function() {
        if (form) {
            form.destroy();
            form = null;
        }
    });

    // load override first
    t.requireOk('conjoon.cn_default.overrides.cn_user.view.authentication.AuthForm', function() {

        t.it("Should properly override the AuthForm", function(t) {

            var form = Ext.create('conjoon.cn_user.view.authentication.AuthForm', {renderTo : document.body});

            t.expect(form.items.getAt(1).getHeight()).toBe(55);
            t.expect(form.items.getAt(1).hideLabel).toBe(true);
            t.expect(form.items.getAt(1).getTriggers().glyphed.cls).toBe('trigger-glyph-noop auth-email-trigger');

            t.expect(form.items.getAt(2).getHeight()).toBe(55);
            t.expect(form.items.getAt(2).hideLabel).toBe(true);
            t.expect(form.items.getAt(2).getTriggers().glyphed.cls).toBe('trigger-glyph-noop auth-password-trigger');

            t.expect(form.items.getAt(3).scale).toBe('large');
            t.expect(form.items.getAt(3).ui).toBe('cn-btn-xl-soft-green-' + form.items.getAt(3).scale);
            t.expect(form.items.getAt(3).iconAlign).toBe('right');

        });

    });



});
