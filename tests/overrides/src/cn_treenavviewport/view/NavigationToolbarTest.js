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

describe('conjoon.cn_default.overrides.cn_treenavviewport.view.NavigationToolbarTest', function(t) {

    var toolbar;

    t.afterEach(function() {
        if (toolbar) {
            toolbar.destroy();
            toolbar = null;
        }
    });

    // load override first
    t.requireOk('conjoon.cn_default.overrides.cn_treenavviewport.view.NavigationToolbar', function() {

        t.it("Should properly override the NavigationToolbar", function(t) {

            toolbar = Ext.create('conjoon.cn_treenavviewport.view.NavigationToolbar');

            t.expect(toolbar.down('component').reference).toContain('cn_app_ref_applogo');

            t.expect(toolbar.down('button').reference).toContain('cn_treenavviewport_ref_hidenavbtn');
        });

    });



});
