Ext.define('Infernales.view.Forum', {
	extend: 'Ext.dataview.List',
	require: ['Infernales.store.ForumStore'],
	xtype: 'forumList',
	id: 'listForum',
	fullscreen: true,
	config: {
		title: 'Forum',
		grouped: true,
		iconCls: 'home',
		itemTpl: '<div class="forum">{forum_name}</div>',
		store: 'ForumStore',
		onItemDisclosure: true
	},
	// ,
	
	
	// config: {
	// 	title: 'Forum',
	// 	iconCls: 'home',
	// 	// items: [
	// 	// 	{
	// 	// 		xtype: 'titlebar',
	// 	// 		docked: 'top',
	// 	// 		title: 'Forum'
	// 	// 	},
	// 	// ],
	// 	
	// 	store: 'ForumStore',
	// 	listeners: {
	// 		select: function (me, record, eOpts) {
	// 			console.log('selected');
	// 			console.log(record);
	// 		}
	// 	},
	// 	grouped: true
	// 	
	// }

});
