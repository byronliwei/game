(function (){
	
	var ItemAchievment = function() {
		this.initialize();
		this.init();
	}
	
	ItemAchievment.prototype = new createjs.Container();
	
	ItemAchievment.prototype.init = function() {		
		this._name;
		this._countAchiv = 0;
		this.bgAchImg = null;
		
		this._show = true;
		this._hide = false;
		
		this._arValue = [];
		this._arImg = [];
		this._unlockAchievments = [];
		
		this.x = _W / 2;
		this.y = _H - 60*scaleGraphics;
		
		this.alpha = 0;
	}
	
	ItemAchievment.prototype.addItemGCID = function(item_id) {
		this._unlockAchievments[item_id] = 0;
	}
	
	ItemAchievment.prototype.createAchievement = function(value) {
		if (!this._unlockAchievments[value]) {
			this._unlockAchievments.push(0);
		}
		if(this._unlockAchievments[value] == 1){
			return;
		}
		
		this._unlockAchievments[value] = 1;
		this._countAchiv ++;
		this._arValue.push(value);
		
		this.alpha = 0;
		
		this.show(this._arValue[0]);
		
		allAchievments();
	}
	
	ItemAchievment.prototype.show = function(value) {
		if (this._show == true && this._countAchiv > 0) {
			this._show = false;
			
			if(this.bgAchImg){
				this.removeChild(this.bgAchImg);
			}
			var img = preload.getResult("Achieve" + String(value));
			this.bgAchImg = new createjs.Bitmap(img);
			this.bgAchImg.x = - this.bgAchImg.image.width/2;
			this.bgAchImg.y = - this.bgAchImg.image.height/2;
			this.addChild(this.bgAchImg);
			this.addChild(this.tfAchievS);
			this.addChild(this.tfAchiev);
			
			this.showAchievement();
		}
	}
	
	ItemAchievment.prototype.showAchievement = function() {
		this._hide = false;
		
		createjs.Tween.get(this).to({alpha:1},1000).call(
			function(){
				this.hideAchievement();
			});
	}
	
	ItemAchievment.prototype.hideAchievement = function() {
		this._hide = true;
		
		this._countAchiv = this._countAchiv - 1;
		this._show = true;
		this._arValue.shift();
		
		createjs.Tween.get(this).to({alpha:0},1000).call(
			function(){
				this.nextAchievement();
			});
	}
	
	ItemAchievment.prototype.nextAchievement = function() {		
		this.show(this._arValue[0]);
	}
	
	ItemAchievment.prototype.getUnlockAchievments = function() {	
		return this._unlockAchievments;
	}
	
	ItemAchievment.prototype.setUnlockAchievments = function(value) {	
		this._unlockAchievments = value;
	}
	
    window.ItemAchievment = ItemAchievment;
}());