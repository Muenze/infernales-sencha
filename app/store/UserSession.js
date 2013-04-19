Ext.define('Infernales.store.UserSession', {
	extend: 'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage', 'Infernales.model.User'],
	config: {
		model: 'Infernales.model.User',
		proxy: {
			type: 'localstorage',
			id: 'session_user'
		},
		autoLoad: true
	}
});