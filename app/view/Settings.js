Ext.define('Infernales.view.Settings', {
	extend: 'Ext.form.Panel',
	xtype: 'frmSettingsPanel',
	id: 'frmSettings',
	require: ['Infernales.model.User', 'Ext.form.FieldSet', 'Ext.form.Password'],
	
	config: {
		title: 'Settings',
		iconCls: 'settings',
		layout: {
			type: 'vbox'
		},
		listeners: {
			show: function(me,eOpts) {
				if(Ext.data.StoreManager.lookup('UserSession')) {
					var user = Ext.data.StoreManager.lookup('UserSession').first();
					if(!user) {
						user = Ext.create('Infernales.model.User', {
							login: '',
							password: ''
						});
						user.save();
						Ext.data.StoreManager.lookup('UserSession').sync();
					}
					me.setRecord(user);
				}
			}
		},
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Settings'
			},
			{
				xtype: 'fieldset',
				title: 'Benutzerdaten',
				defaults: {
					labelWidth: '40%'
				},
				items: [
					{
						xtype: 'textfield',
						label: 'Forenname',
						name: 'login'
					}, {
						xtype: 'passwordfield',
						label: 'Passwort',
						name: 'password'
					}
				]
			},
			{
				xtype: 'button',
				ui: 'confirm',
				action: 'settingsConfirm',
				text: 'abspeichern'
			}
		]
		
	}

});
