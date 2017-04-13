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

/**
 * Custom styles for the intiial Navigation Toolbar.
 */
Ext.define('conjoon.cn_default.overrides.cn_treenavviewport.view.NavigationToolbar', {

    override : 'conjoon.cn_treenavviewport.view.NavigationToolbar',

    items : [{
        xtype     : 'component',
        reference : 'cn_app_ref_applogo',
        cls       : 'conjoon-logo',
        html      : '<div class="main-logo"><div class="x-fa fa-envelope logo"></div>conjoon</div>',
        width     : 250
    }, {
        xtype     : 'button',
        reference : 'cn_treenavviewport_ref_hidenavbtn',
        iconCls   : 'x-fa fa-navicon'
    }]


});