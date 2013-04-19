Ext.define('Infernales.store.ForumStore', {
	extend: 'Ext.data.Store',
	requires:['Infernales.model.Forum', 'Ext.data.proxy.Ajax', 'Ext.data.reader.Json'],
	config: {
		model: 'Infernales.model.Forum',
		grouper: {
		 	property: 'cat_name',
		 	sortProperty: 'cat_order'
		},
		proxy: {
			type: 'ajax',
			url: 'http://www.infernales.de/portal/forum/index.json.php',
			extraParams: {
				username: 'Muenze',
				password: 'coolness',
				sencha: 'sencha'
			},
			reader: {
				type: 'json'				
			}
		},
		autoLoad: true
	}
});