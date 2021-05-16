(function (){
	
	var ItemAnima = function(nameSet) {
		this.initialize();
		this.init(nameSet);
	}
	
	ItemAnima.prototype = new createjs.Container();
	
	ItemAnima.prototype.init = function(nameSet) {
		var data = dataAnima[nameSet];
		this.sprite = new createjs.Sprite(data, nameSet);
		
		if(this.sprite){
			this.width = this.sprite.getBounds().width;
			this.height = this.sprite.getBounds().height;
			this.sprite.x = -this.width/2;
			this.sprite.y = -this.height/2;
			this.w = this.width*scaleGraphics;
			this.h = this.height*scaleGraphics;
			this.addChild(this.sprite);
		}
	}
	
    window.ItemAnima = ItemAnima;
}());