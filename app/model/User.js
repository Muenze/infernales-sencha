Ext.define('Infernales.model.User', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: ['id', 'login', 'password'],
		proxy: {
			type: 'localstorage',
			id: 'session_user'
		}
	}
});