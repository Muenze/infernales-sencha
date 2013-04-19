Ext.define('Infernales.model.Forum', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
			{ id:'forum_id', type: 'integer'},
			'forum_name', 
			'order',
			'user',
			'cat_name',
			'cat_order',
			{ id: 'lastpost', type: 'integer'},
			{ id:'hasnew', type: 'integer'},
			'description'
		],
		idProperty: 'forum_id'
	}
});