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

describe('conjoon.cn_default.overrides.cn_treenavviewport.view.NavigationTreeTest', function(t) {

    var tree;

    t.afterEach(function() {
        if (tree) {
            tree.destroy();
            tree = null;
        }
    });

    // load override first
    t.requireOk('conjoon.cn_default.overrides.cn_treenavviewport.view.NavigationTree', function() {

        t.it("Should properly override the NavigationTree", function(t) {

            tree = Ext.create('conjoon.cn_treenavviewport.view.NavigationTree');

            t.expect(tree.getUi()).toBe('cn_treenavviewport-navtree');
        });

    });



});
