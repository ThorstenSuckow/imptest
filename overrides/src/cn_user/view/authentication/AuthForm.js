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
 * Custom styles for the AuthForm.
 */
Ext.define('conjoon.cn_default.overrides.cn_user.view.authentication.AuthForm', {

    override: 'conjoon.cn_user.view.authentication.AuthForm',


    initComponent : function() {

        var me = this;

        Ext.apply(me.items[1], {
            height    : 55,
            hideLabel : true,
            triggers  : {
                glyphed  : {
                    cls : 'trigger-glyph-noop auth-email-trigger'
                }
            }
        });

        Ext.apply(me.items[2], {
            height    : 55,
            hideLabel : true,
            triggers  : {
                glyphed  : {
                    cls : 'trigger-glyph-noop auth-password-trigger'
                }
            }
        });

        Ext.apply(me.items[3], {
            ui        : 'cn-btn-xl-soft-green',
            scale     : 'large',
            iconAlign : 'right'
        });

        me.callParent(arguments);
    }

});


