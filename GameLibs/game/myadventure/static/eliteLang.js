(function (){
	
	var eliteLang = function() {
		this.initialize();
		this.init();
	}
	
	eliteLang.prototype = new createjs.Container();
	
	eliteLang.prototype.init = function() {
		this.eliteLangObj = null;
		this.current_id = null;
		this._open = false;
		this._item_rr = 26*26;
		
		this.langs_list = [];
		this.langs_obj = [];
		
		this.eliteLang_names = {};
		this.eliteLang_names.en="English";
		this.eliteLang_names.es="Espanol";
		this.eliteLang_names.ru="Russian";
		this.eliteLang_names.jp="Japanese";
		
		this.en_xml = getXMLDocument("static/lang_en.xml");
		this.eliteLangObjEn = this.en_xml.childNodes[0];
	}
	
	eliteLang.prototype.update = function(evt){
		if(this._open == false){
			event.remove();
			return;
		}
		stage.update();
	}
	
	eliteLang.prototype.saveSettings = function(){
		var settings = {};
		settings.current_id = this.current_id;
		// saveFile("lang.settings", Json.Encode(settings));
	}
	
	eliteLang.prototype.loadSettings = function(){
		/* var tdata = loadFile("lang.settings");
		if(tdata){
			var settings = Json.Decode(tdata);
			if(settings){
				this.setLanguage(settings.current_id);
				return;
			}
		}*/
		this.setLanguage('en');
		return;
	}
	
	eliteLang.prototype.add_lang_xml = function(id, fontName){
		var lang_obj = {};
		lang_obj.id = id;
		lang_obj.font=fontName;
		this.langs_list.push(lang_obj);
		this.langs_obj[id] = lang_obj;
	}
	
	eliteLang.prototype.getList = function (){
		return this.langs_list;
	}
	
	eliteLang.prototype.closeList = function (){
		this._open = false;
		if(this.list_mc){
			this.list_mc.removeEventListener("mousedown", this.touchHandler.bind(this));
			this.list_mc.removeEventListener("pressmove", this.touchHandler.bind(this));
			this.list_mc.removeEventListener("pressup", this.touchHandler.bind(this));
			// if(this.list_mc.removeSelf){
				// this.list_mc:removeSelf();
				// this.list_mc = nil;
			// }
		}
	}
	
	eliteLang.prototype.showList = function (sx, sy, dx, dy, scale){
		this.closeList();
		this._open = true;
		var list_mc = new createjs.Container();
		this.list_mc = list_mc;
		
		var bg_w = 100;
		var bg_h = -(dy*(this.langs_list.length+0.5)+sy);
		
		var items_mc = new createjs.Container();
		list_mc.addChild(items_mc);
		this.items_mc = items_mc;
		
		for (var i = 0; i < this.langs_list.length; i++) {
			var item_obj = this.langs_list[i];
			var item_mc = new createjs.Container();
			item_mc._selected = false;
			item_mc.width = 48*scale;
			item_mc.height = 48*scale;
			var item_bg_w = 80;
			var item_bg_h = 50;
			
			var img = preload.getResult("lang_" + item_obj.id);
			var body_mc = new createjs.Bitmap(img);
			if(body_mc){
				body_mc.scaleX = scale;
				body_mc.scaleY = scale;
				body_mc.x = 0;
				body_mc.y = 0;
				item_mc.addChild(body_mc);
				
				item_mc._over = new createjs.Shape();
				item_mc._over.graphics.beginFill("rgba(255,255,255,1)")
				item_mc._over.graphics.drawRect(0, 0, body_mc.image.width, body_mc.image.height);
				item_mc._over.x = 0;
				item_mc._over.y = 0;
				item_mc._over.blendMode = "add";
				item_mc._over.alpha = 0;
				item_mc._over.scaleX = scale;
				item_mc._over.scaleY = scale;
				item_mc.addChild(item_mc._over);
			}
			
			item_obj.mc = item_mc;
			item_mc.obj = item_obj;
			item_mc.x = sx+dx*(i-1);
			item_mc.y = sy+dy*(i-1);
			items_mc.addChild(item_mc);
			
			item_mc.alpha = 0;
			createjs.Tween.get(item_mc).to({alpha:1},200);
		}
		
		// createjs.Ticker.removeEventListener("tick", update);
		this.list_mc.removeEventListener("mousedown", this.touchHandler.bind(this));
		this.list_mc.removeEventListener("pressmove", this.touchHandler.bind(this));
		this.list_mc.removeEventListener("pressup", this.touchHandler.bind(this));
		
		createjs.Ticker.on("tick", this.update, this);
		createjs.Ticker.setInterval(25);
		createjs.Ticker.setFPS(40);
		this.list_mc.addEventListener("mousedown", this.touchHandler.bind(this));
		this.list_mc.addEventListener("pressmove", this.touchHandler.bind(this));
		this.list_mc.addEventListener("pressup", this.touchHandler.bind(this));
		
		return list_mc;
	}
	
	eliteLang.prototype.touchHandler = function(evt){
		var phase = evt.type;
		var mouse_xy = {x:evt.stageX - this.list_mc.x, y:evt.stageX - this.list_mc.y};
		if(phase=='mousedown' || phase=='pressmove'){
			for (var i = 0; i < this.items_mc.children.length; i++) {
				var item_mc = this.items_mc.children[i];
				var w = item_mc.width;
				var h = item_mc.height;
				var dx = evt.stageX - item_mc.x - w/2;
				var dy = evt.stageY - item_mc.y - h/2;
				if(Math.abs(dx)<w/2 && Math.abs(dy)<h/2){
					if(this.eliteLang_names[item_mc.obj.id]){
						addHint(this.eliteLang_names[item_mc.obj.id]);
					}else{
						addHint(item_mc.obj.id);
					}
					if(item_mc._selected == false){
						item_mc._selected = true;
						createjs.Tween.get(item_mc._over).to({alpha:0.3},180);
					}
				} else {
					if(item_mc._selected == true){
						removeHint();
						item_mc._selected = false;
						createjs.Tween.get(item_mc._over).to({alpha:0},280);
					}
				}
			}
		} else {
			for (var i = 0; i < this.items_mc.children.length; i++) {
				var item_mc = this.items_mc.children[i];
				if(item_mc._selected == true){
					this.setLanguage(item_mc.obj.id);
					item_mc._selected = false;
					createjs.Tween.get(item_mc._over).to({alpha:0},280);
				}
			}
		}
	}
	
	eliteLang.prototype.setLanguage = function (id){
		var obj=this.langs_obj[id];
		if(obj.font){
			if(setMainFont){
				setMainFont(obj.font);
			}
		}
		var xml = getXMLDocument("static/lang_"+id+".xml");
		this.eliteLangObj = xml.childNodes[0];
		this.current_id = id;
		
		this.saveSettings();
	}
    
	eliteLang.prototype.get_txt = function (txt){
		if(this.eliteLangObj.getAttribute(txt) == null){
			if(this.eliteLangObjEn.getAttribute(txt) == null){
				return txt;
			} else {
				return this.eliteLangObjEn.getAttribute(txt);
			}
		} else {
			return this.eliteLangObj.getAttribute(txt);
		}
	}
	
	eliteLang.prototype.get_bol = function (txt){
		return (this.eliteLangObj.getAttribute(txt) != null)
	}
	
	window.eliteLang = eliteLang;
}());