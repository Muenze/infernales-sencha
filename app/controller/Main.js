Ext.define('Infernales.controller.Main', {
	extend: 'Ext.app.Controller',
	
	config: {
		views: ['Settings', 'Forum'],
		refs: {
			settingsForm: '#frmSettings',
			forumList: '#listForum'
		}
	},
	
	
	
	init: function() {
		this.control({
			'button[action=settingsConfirm]': {
				tap: 'submitSettingsForm'
			},
			'forumList': {
				disclose: 'tapForumList'
			}	
		});
	},
	
	submitSettingsForm: function () {
		var user = Ext.data.StoreManager.lookup('UserSession').first();
		var values = this.getSettingsForm().getValues();
		user.set('login', values.login);
		user.set('password', values.password);
		user.save();
		Ext.data.StoreManager.lookup('UserSession').sync();
	},
	
	tapForumList: function () {
		console.log('Fired');
	}
	
	
})