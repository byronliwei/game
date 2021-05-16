!function(){var e=function(){this.initialize(),this.init()};e.prototype=new createjs.Container,e.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,login_obj.location=25;var e=preload.getResult("location3_5");this.bgGame=new createjs.Bitmap(e),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),this.addChild(this.game_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},e.prototype.loadLevel=function(){if(this.Arrow1=this.addObj("Strelka3",850,500),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),login_obj.l3_5_detectorTook);else{var e=this.addObj("l3_5_detector",130,250);e.rotation=-20,this.game_mc.addChild(e),this.arItems.push(e)}var t=this.addObj("l3_5_mainValve",130,455);if(this.game_mc.addChild(t),login_obj.puzzle_14||(this.itemPuzzle=new ItemPuzzle(14,780,630,this),this.face_mc.addChild(this.itemPuzzle)),login_obj.l3_5_valveSet){var i=this.addObj("l3_5_valve",133,430);this.game_mc.addChild(i)}else this.arItems.push(t),this.pool=this.addObj("l3_5_pool",378,462),this.game_mc.addChild(this.pool);login_obj.l3_5_legoTook||(this.lego=this.addObj("l3_5_lego",330,430),this.lego.visible=!1,this.game_mc.addChild(this.lego),this.arItems.push(this.lego)),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),this.hero.scaleX=-1*scaleGraphics,this.hero.x=650*scaleGraphics,this.hero.y=450*scaleGraphics,this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.y=this.hero.y-100*scaleGraphics,this.hero.x<300*scaleGraphics?(this.textHero.oblachko.scaleX=-1,this.textHero.x=this.hero.x+200*scaleGraphics):this.textHero.x=this.hero.x-200*scaleGraphics,this.game_mc.addChild(this.textHero),login_obj.l3_5_valveSet||(this.hero.showText(),this.textHero.showText("emergence_3_5")),this.createCells(),this.loadInvent()},e.prototype.hideDetector=function(){this.face_mc.visible=!0,this.hero.visible=!0,this.Arrow1.visible=!0,this.detector&&(this.detector.visible=!1)},e.prototype.showDetector=function(){this.face_mc.visible?(this.face_mc.visible=!1,this.hero.visible=!1,this.Arrow1.visible=!1,this.detector?this.detector.visible=!0:(this.detector=new ItemDetector,this.detector._parent=this,this.detector.scaleX=scaleGraphics,this.detector.scaleY=scaleGraphics,this.game_mc.addChild(this.detector),this.detector.x=_W/2,this.detector.y=_H-160*scaleGraphics,this.detector._x=_W/2,this.detector._y=this.detector.y)):this.hideDetector()},e.prototype.createCells=function(){var e,t=0;for(t=0;8>t;t++){var e=this.addObj("Cell",944-120*t,688);e.alpha=0,e.empty=!0,this.cells_mc.addChild(e),this.arBgInvent.push(e)}},e.prototype.addObj=function(e,t,i,s,h){s||(s=1),h||(h=1);var r=new createjs.Container,o=preload.getResult(e),a=new createjs.Bitmap(o);return a.x=-(a.image.width/2),a.y=-(a.image.height/2),r.addChild(a),r.scaleX=scaleGraphics*s,r.scaleY=scaleGraphics*h,r.x=t*scaleGraphics,r.y=i*scaleGraphics,r.w=a.image.width*r.scaleX,r.h=a.image.height*r.scaleY,r.name=e,r.w<50&&(r.w=50),r.h<50&&(r.h=50),r},e.prototype.pushObj=function(e){if(e){var t,i=0;for(i=0;i<this.arBgInvent.length&&(t=this.arBgInvent[i],!t.empty);i++);var s=this;t&&(createjs.Tween.get(t).to({alpha:1},200),createjs.Tween.get(e).to({x:t.x,y:t.y},300).call(function(){"l3_5_detector"==e.name?(login_obj.l3_5_detectorTook=!0,reportFound(e.name,"Detector")):"l3_5_lego"==e.name&&(login_obj.l3_5_legoTook=!0,reportFound(e.name,"Lego R")),invent_obj3.push(e),s.removeFromArray(s.arItems,e.name),s.face_mc.addChild(e),s.refreshInvent()}))}},e.prototype.clickObj=function(e){var t=e.name,i=this;if(this.curObj){if("l3_5_mainValve"==t&&"i_l3_1_valve"==this.curObj.name){reportUsed("l3_1_valve","Valve"),this.removeFromArray(invent_obj3,this.curObj.name,!0),this.removeFromArray(this.arItems,t),login_obj.l3_5_valveSet=!0,this.lego.visible=!0;var s=this.addObj("l3_5_valve",133,430);this.game_mc.addChild(s),this.pool&&createjs.Tween.get(this.pool).to({alpha:0},2e3),this.refreshInvent()}}else if("l3_5_detector"==t)this.pushObj(e);else if("l3_5_lego"==t&&login_obj.l3_5_valveSet)this.pushObj(e);else if("Arrow1"==t)return this._gameOver=!0,e.visible=!1,void this.hero.initMove(e,function(){i.removeAllListener(),showGame(23),saveData()});this.curObj&&this.refreshInvent()},e.prototype.loadInvent=function(){invent_obj3=[];for(var e=0;e<login_obj.arInvent3.length;e++){var t=login_obj.arInvent3[e];if(t){var i=this.addObj(t,0,0);invent_obj3.push(i)}}this.refreshInvent()},e.prototype.refreshInvent=function(){var e,t,i=0;for(i=0;i<this.arBgInvent.length;i++){if(t=this.arBgInvent[i],t.empty=!0,invent_obj3&&(e=invent_obj3[i])){t.empty=!1;var s=e.name,h=s.indexOf("i_");-1==h&&(this.face_mc.removeChild(e),e=this.addObj("i_"+s,0,0),invent_obj3[i]=e),e.x=t.x,e.y=t.y,this.face_mc.addChild(e)}t.empty&&1==t.alpha&&createjs.Tween.get(t).to({alpha:0},200),0==t.empty&&0==t.alpha&&createjs.Tween.get(t).to({alpha:1},200)}saveData()},e.prototype.removeFromArray=function(e,t,i){var s,h=0;for(h=0;h<e.length;h++)if(s=e[h],s.name==t){i&&this.face_mc.removeChild(s),e.splice(h,1);break}},e.prototype.turnHandler=function(e){return this._gameOver?void e.remove():void 0},e.prototype.checkInvent=function(e){var t=e.stageX,i=e.stageY,s=null;if(0!=this.face_mc.visible){for(var h=0;h<invent_obj3.length;h++){var r=invent_obj3[h];if(hit_test_rec(r,r.w,r.h,t,i)){s=r;break}}return s&&"i_l3_5_detector"==s.name&&this.showDetector(),s}},e.prototype.checkButtons=function(e){for(var t=e.stageX,i=e.stageY,s=0;s<this.arButtons.length;s++){var h=this.arButtons[s];hit_test_rec(h,h.w,h.h,t,i)?h.visible&&0==h._selected&&(h._selected=!0,h.scaleX=1.2*scaleGraphics,h.scaleY=1.2*scaleGraphics):h._selected&&(h.scaleX=scaleGraphics,h.scaleY=scaleGraphics,h._selected=!1)}},e.prototype.touchHandler=function(e){if(this._gameOver)return void e.remove();var t,i,s=e.type,h=e.stageX,r=e.stageY,o=0;if("mousedown"==s)this.curObj=this.checkInvent(e),null==this.curObj&&this.checkButtons(e);else if("pressmove"==s)this.checkButtons(e),this.curObj?(this.curObj.x=h,this.curObj.y=r):this.checkButtons(e);else if("pressup"==s){for(i=getDD(this.hero.x,this.hero.y,h,r),i<hitHero*scaleGraphics?this.hero.say?(this.hero.hideText(),this.textHero.hideText()):(this.hero.showText(),this.textHero.showText()):(this.hero.hideText(),this.textHero.hideText()),o=0;o<this.arItems.length;o++)if(t=this.arItems[o],hit_test_rec(t,t.w,t.h,h,r)&&t.visible)return void this.clickObj(t);this.curObj&&this.refreshInvent()}},e.prototype.removeAllListener=function(){this.hero&&this.hero.removeAllListener(),this.detector&&this.detector.removeAllListener(),this._resultGame=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation25=e}();