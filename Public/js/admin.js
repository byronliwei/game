function gameEdit(obj){
	var _this=$(obj),id=_this.closest('tr').attr('dataid');

	art.dialog.open(
		'/admin.php/Index/gameEdit/id/'+id,
		{
			id:'pop_gameEdit',
			title: '游戏编辑',
			width:840,
			height:580,
			lock: true,
			resize:true,
			close: function() {
				var win = art.dialog.open.origin;win.location.reload();
			}
		}
	);		
}
