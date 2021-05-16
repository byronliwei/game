(function (){
	
	var ItemText = function() {
		this.initialize();
		this.init();
	}
	
	ItemText.prototype = new createjs.Container();
	
	ItemText.prototype.init = function() {
		this.oblachko = this.addObj("Oblachko1", 0, 0);
		this.oblachko.visible = false;
		this.addChild(this.oblachko);
		// this.tf = new createjs.Text("", "bold " + 30 + "px Open Sans","#303030");
		// this.tf = new createjs.Text("", "bold " + 30 + "px a_FuturaRoundDemi","#303030");
		// this.tf = new createjs.Text("","bold "+ 36+"px Showcard Gothic","#303030");
		this.tf = new createjs.Text("", "" + 26 + "px segoepr","#303030");
		this.tf.lineWidth = 230;
		this.tf.textAlign = "center";
		this.tf.x = 146 - this.oblachko.w/2;
		this.tf.y = -50 + options_txt_offset;
		this.addChild(this.tf);
	}
	
	ItemText.prototype.addObj = function(name, _x, _y) {
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
	
	ItemText.prototype.showText = function(txt) {
		this.oblachko.visible = true;
		
		if(txt){
			this.tf.text = get_txt(txt);
		} else {
			var str = "hm_" + String(Math.ceil(Math.random()*5));
			this.tf.text = get_txt(str);
			if(login_obj["location"]){
				if(login_obj["location"] == 1){
					if(login_obj["1_1_doorOpen"]){
					} else {
						this.tf.text = get_txt("location_1_1_hero");
					}
				} else if(login_obj["location"] == 2){
					if(login_obj["1_2_stoolPut"]){
					} else {
						this.tf.text = get_txt("location_1_2_hero");
					}
				} else if(login_obj["location"] == 3){
					this.tf.text = get_txt("location_1_3_hero");
				} else if(login_obj["location"] == 4){
					if(login_obj["1_night"]){
					} else {
						this.tf.text = get_txt("location_1_4_hero");
					}
				} else if(login_obj["location"] == 5){
					if(login_obj["1_5_keyTook"]){
					} else {
						this.tf.text = get_txt("location_1_5_hero");
					}
				} else if(login_obj["location"] == 6){
					this.tf.text = get_txt("location_1_6_hero");
				} else if(login_obj["location"] == 7){
					if(login_obj["l1_7_lozaFire"]){
					} else {
						this.tf.text = get_txt("location_1_7_hero");
					}
				} else if(login_obj["location"] == 8){
					if(login_obj["l1_8_gateOpen"]){
					} else {
						this.tf.text = get_txt("location_1_8_hero");
					}
				} else if(login_obj["location"] == 9){
					if(login_obj["l2_1_fireTook"]){
					} else {
						this.tf.text = get_txt("location_2_1_fire");
					}
				} else if(login_obj["location"] == 10){
					if(login_obj["2_2_columnOpen"]){
					} else {
						this.tf.text = get_txt("location_2_2_column");
					}
				} else if(login_obj["location"] == 11){
					if(login_obj["l2_3_waterTook"]){
					} else {
						this.tf.text = get_txt("location_2_3_water");
					}
				} else if(login_obj["location"] == 12){
					if(login_obj["l2_4_doorOpen"]){
					} else {
						this.tf.text = get_txt("location_2_4_door");
					}
				} else if(login_obj["location"] == 13){
					if(login_obj["l2_5_stellaFire"]){
					} else {
						this.tf.text = get_txt("location_2_5_stella");
					}
				} else if(login_obj["location"] == 15){
					this.tf.text = get_txt("location_2_7_symbol");
				} else if(login_obj["location"] == 16){
					this.tf.text = get_txt("location_2_8_balance");
				} else if(login_obj["location"] == 17){
					if(login_obj["l2_9_setRope"]){
					} else {
						this.tf.text = get_txt("location_2_9_rope");
					}
				} else if(login_obj["location"] == 18){
					if(login_obj["l2_10_openDoor"]){
					} else {
						this.tf.text = get_txt("location_2_10_door");
					}
				} else if(login_obj["location"] == 19){
					if(login_obj["l2_19_doorOpen"]){
					} else {
						this.tf.text = get_txt("location_2_11_door");
					}
				} else if(login_obj["location"] == 20){
					if(login_obj["l2_20_doorOpen"]){
					} else {
						this.tf.text = get_txt("location_2_4_door");
					}
				} else if(login_obj["location"] == 21){
					if(login_obj["l3_1_valveTook"]){
					} else {
						this.tf.text = get_txt("location_3_1_valve");
					}
				} else if(login_obj["location"] == 22){
					if(login_obj["anti_gravity"]){
						if(login_obj["l3_engine"]){
							if(login_obj["l3_fuel"]){
							} else {
								this.tf.text = get_txt("location_3_2_fuel");
							}
						} else {
							this.tf.text = get_txt("location_3_2_engine");
						}
					} else {
						this.tf.text = get_txt("location_3_2_gravity");
					}
				} else if(login_obj["location"] == 24){
					if(login_obj["l3_engine"]){
					} else {
						this.tf.text = get_txt("location_3_4_engine");
					}
				} else if(login_obj["location"] == 25){
					if(login_obj["l3_5_valveSet"]){
					} else {
						this.tf.text = get_txt("location_3_5_valve");
					}
				} else if(login_obj["location"] == 26){
					if(login_obj["l3_6_doorOpen"]){
					} else {
						this.tf.text = get_txt("location_3_6_door");
					}
				} else if(login_obj["location"] == 27){
					if(login_obj["l3_7_magnetTook"]){
					} else {
						this.tf.text = get_txt("location_3_7_magnet");
					}
				}
			}
		}
	}
	
	ItemText.prototype.hideText = function() {
		this.oblachko.visible = false;
		this.tf.text = "";
	}
	
    window.ItemText = ItemText;
}());