Ext.define('Infernales.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype: 'forumList'
			},
			{
				xtype: 'frmSettingsPanel'
			}
        ]
    }
});