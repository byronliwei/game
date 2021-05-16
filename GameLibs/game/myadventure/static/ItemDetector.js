(function (){
	
	var ItemDetector = function() {
		this.initialize();
		this.init();
	}
	
	ItemDetector.prototype = new createjs.Container();
	
	ItemDetector.prototype.init = function() {
		this._pause = options_pause;
		this._remove = false;
		this._x = 0;
		this._y = 0;
		
		this.sprite = this.addObj("l3_detector", 0, 190);
		this.sprite.rotation = -3;
		this.addChild(this.sprite);
		this.ind1 = this.addObj("ind1", 0, -110);
		this.sprite.addChild(this.ind1);
		this.ind2 = this.addObj("ind2", 0, -84);
		this.sprite.addChild(this.ind2);
		this.ind3 = this.addObj("ind3", 0, -61);
		this.sprite.addChild(this.ind3);
		
		this.circle = new createjs.Shape();
		this.circle.graphics.beginFill("red").drawCircle(0, 0, 40);
		this.circle.y = -320;
		this.circle.visible = false;
		this.sprite.addChild(this.circle);
		
		this.ind1.visible = false;
		this.ind2.visible = false;
		this.ind3.visible = false;
		
		createjs.Tween.get(this.sprite).play(
			createjs.Tween.get(this.sprite,{paused:true, loop:true})
			.to({rotation:3},1500)
			.to({rotation:-3},1500)
		  );
		
		// createjs.Ticker.on("tick", this.turnHandler, this);
		// these are equivalent, 1000ms / 40fps = 25ms
		// createjs.Ticker.setInterval(25);
		// createjs.Ticker.setFPS(40);
		
		this.touchHandler = this.touchHandler.bind(this);
		this.addEventListener("mousedown", this.touchHandler);
		this.addEventListener("pressmove", this.touchHandler);
		this.addEventListener("pressup", this.touchHandler);
	}
	
	ItemDetector.prototype.addObj = function(name, _x, _y) {
		var obj = new createjs.Container();
		var img = preload.getResult(name);
		var objImg = new createjs.Bitmap(img);
		objImg.x = - (objImg.image.width/2);
		objImg.y = - (objImg.image.height/2);
		obj.addChild(objImg);
		obj.x = _x;
		obj.y = _y;
		obj.w = objImg.image.width;
		obj.h = objImg.image.height;
		obj.name = name;
		
		return obj;
	}
	
	ItemDetector.prototype.turnHandler = function(evt){
		if(this._pause != options_pause){
			this._pause = options_pause;
		}
		if(this._pause){
			return;
		}
		if(this._remove){
			evt.remove();
			return;
		}
		
	}
	
	ItemDetector.prototype.touchHandler = function(evt){	
		if(this._remove){
			evt.remove();
			return;
		}
		var phase = evt.type; // mousedown , pressup , pressmove
		var mouseX = evt.stageX;
		var mouseY = evt.stageY;
		var item_mc; //MovieClip
		var i = 0;
		
		if(phase=='mousedown'){
			
		} else if (phase == 'pressmove') {
			this.x = mouseX;
			this.y = mouseY;
		} else if (phase == 'pressup') {
			this.x = this._x;
			this.y = this._y;
			this._parent.hideDetector();
		}
	}
	
	ItemDetector.prototype.removeAllListener = function(){
		this._remove = true;
		this.removeEventListener("mousedown", this.touchHandler);
		this.removeEventListener("pressmove", this.touchHandler);
		this.removeEventListener("pressup", this.touchHandler);
	}
	
    window.ItemDetector = ItemDetector;
}());