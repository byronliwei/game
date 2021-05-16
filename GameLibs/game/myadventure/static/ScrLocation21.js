!function(){var e=function(){this.initialize(),this.init()};e.prototype=new createjs.Container,e.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,login_obj.location=21;var e=preload.getResult("location3_1");this.bgGame=new createjs.Bitmap(e),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),e=preload.getResult("location3_1_gr"),this.bgGame2=new createjs.Bitmap(e),this.bgGame2.scaleX=scaleGraphics,this.bgGame2.scaleY=scaleGraphics,this.addChild(this.bgGame2),this.addChild(this.game_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},e.prototype.loadLevel=function(){if(this.Arrow1=this.addObj("Strelka5",170,580),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),this.Arrow2=this.addObj("Strelka1",520,100),this.Arrow2.name="Arrow2",this.Arrow2._selected=!1,this.Arrow2.visible=!1,this.game_mc.addChild(this.Arrow2),this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),this.arItems.push(this.Arrow2),this.arButtons.push(this.Arrow2),login_obj.anti_gravity&&(this.Arrow2.visible=!0),login_obj.puzzle_12||(this.itemPuzzle=new ItemPuzzle(12,60,430,this),this.face_mc.addChild(this.itemPuzzle)),login_obj.l3_1_legoTook);else{var e=null;e=login_obj.anti_gravity?this.addObj("l3_1_lego",950,550):this.addObj("l3_1_lego",970,470),this.game_mc.addChild(e),this.arItems.push(e)}if(login_obj.l3_1_valveTook);else{var t=this.addObj("l3_1_valve",337,157);this.game_mc.addChild(t),this.arItems.push(t)}this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),this.hero.scaleX=1*scaleGraphics,this.hero.x=300*scaleGraphics,this.hero.y=480*scaleGraphics,this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.y=this.hero.y-100*scaleGraphics,this.hero.x<=300*scaleGraphics?(this.textHero.oblachko.scaleX=-1,this.textHero.x=this.hero.x+200*scaleGraphics):this.textHero.x=this.hero.x-200*scaleGraphics,this.game_mc.addChild(this.textHero),login_obj.l3_1_valveTook||(this.hero.showText(),this.textHero.showText("emergence_3_1")),this.createGravity(),this.showGravity(),this.createCells(),this.loadInvent()},e.prototype.hideDetector=function(){this.face_mc.visible=!0,this.hero.visible=!0,this.Arrow1.visible=!0,login_obj.anti_gravity&&(this.Arrow2.visible=!0),this.detector&&(this.detector.visible=!1)},e.prototype.showDetector=function(){this.face_mc.visible?(this.face_mc.visible=!1,this.hero.visible=!1,this.Arrow1.visible=!1,this.Arrow2.visible=!1,this.detector?this.detector.visible=!0:(this.detector=new ItemDetector,this.detector._parent=this,this.detector.scaleX=scaleGraphics,this.detector.scaleY=scaleGraphics,this.game_mc.addChild(this.detector),this.detector.x=_W/2,this.detector.y=_H-160*scaleGraphics,this.detector._x=_W/2,this.detector._y=this.detector.y)):this.hideDetector()},e.prototype.createGravity=function(){this.nut1=this.addObj("l3_4_nut",900,315,.7,.7),this.nut1.rotation=-40,this.game_mc.addChild(this.nut1),this.nut2=this.addObj("l3_4_nut",300,415,.6,.6),this.nut2.rotation=0,this.game_mc.addChild(this.nut2),this.nut3=this.addObj("l3_4_nut",700,550),this.nut3.rotation=20,this.game_mc.addChild(this.nut3),this.stool1=this.addObj("l3_4_stool",820,500),this.stool1.rotation=40,this.game_mc.addChild(this.stool1),this.stool2=this.addObj("l3_4_stool",400,200,.7,.7),this.stool2.rotation=-20,this.game_mc.addChild(this.stool2),this.aq1=this.addObj("l3_4_aq",200,300,.6,.6),this.aq1.rotation=30,this.game_mc.addChild(this.aq1),this.aq2=this.addObj("l3_4_aq",600,250,.8,.8),this.aq2.rotation=-25,this.game_mc.addChild(this.aq2),this.book=this.addObj("l3_4_book",300,100),this.book.rotation=-25,this.game_mc.addChild(this.book),createjs.Tween.get(this.nut1).play(createjs.Tween.get(this.nut1,{paused:!0,loop:!0}).to({rotation:140,y:290*scaleGraphics},2e3).to({rotation:320,y:315*scaleGraphics},2e3)),createjs.Tween.get(this.nut2).play(createjs.Tween.get(this.nut2,{paused:!0,loop:!0}).to({rotation:180,y:460*scaleGraphics},2500).to({rotation:360,y:415*scaleGraphics},2500)),createjs.Tween.get(this.nut3).play(createjs.Tween.get(this.nut3,{paused:!0,loop:!0}).to({rotation:200,y:500*scaleGraphics},2200).to({rotation:380,y:550*scaleGraphics},2200)),createjs.Tween.get(this.stool1).play(createjs.Tween.get(this.stool1,{paused:!0,loop:!0}).to({y:440*scaleGraphics},3e3).to({y:500*scaleGraphics},3e3)),createjs.Tween.get(this.stool2).play(createjs.Tween.get(this.stool2,{paused:!0,loop:!0}).to({y:220*scaleGraphics},2500).to({y:200*scaleGraphics},2500)),createjs.Tween.get(this.aq1).play(createjs.Tween.get(this.aq1,{paused:!0,loop:!0}).to({y:270*scaleGraphics},2e3).to({y:300*scaleGraphics},2e3)),createjs.Tween.get(this.aq2).play(createjs.Tween.get(this.aq2,{paused:!0,loop:!0}).to({y:300*scaleGraphics},3e3).to({y:250*scaleGraphics},3e3)),createjs.Tween.get(this.book).play(createjs.Tween.get(this.book,{paused:!0,loop:!0}).to({y:120*scaleGraphics},2300).to({y:100*scaleGraphics},2300))},e.prototype.showGravity=function(){login_obj.anti_gravity?(this.bgGame2.visible=!0,this.nut1.visible=!0,this.nut2.visible=!0,this.nut3.visible=!0,this.stool1.visible=!0,this.stool2.visible=!0,this.aq1.visible=!0,this.aq2.visible=!0,this.book.visible=!0,this.hero.setSoar(),createjs.Tween.get(this.hero).play(createjs.Tween.get(this.hero,{paused:!0,loop:!0}).to({y:420*scaleGraphics},2500).to({y:480*scaleGraphics},2500))):(this.bgGame2.visible=!1,this.nut1.visible=!1,this.nut2.visible=!1,this.nut3.visible=!1,this.stool1.visible=!1,this.stool2.visible=!1,this.aq1.visible=!1,this.aq2.visible=!1,this.book.visible=!1,this.hero&&this.game_mc.removeChild(this.hero),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),this.hero.scaleX=1*scaleGraphics,this.hero.x=300*scaleGraphics,this.hero.y=500*scaleGraphics)},e.prototype.createCells=function(){var e,t=0;for(t=0;8>t;t++){var e=this.addObj("Cell",944-120*t,688);e.alpha=0,e.empty=!0,this.cells_mc.addChild(e),this.arBgInvent.push(e)}},e.prototype.addObj=function(e,t,i,s,h){s||(s=1),h||(h=1);var a=new createjs.Container,o=preload.getResult(e),r=new createjs.Bitmap(o);return r.x=-(r.image.width/2),r.y=-(r.image.height/2),a.addChild(r),a.scaleX=scaleGraphics*s,a.scaleY=scaleGraphics*h,a.x=t*scaleGraphics,a.y=i*scaleGraphics,a.w=r.image.width*a.scaleX,a.h=r.image.height*a.scaleY,a.name=e,a.w<50&&(a.w=50),a.h<50&&(a.h=50),a},e.prototype.pushObj=function(e){if(e){var t,i=0;for(i=0;i<this.arBgInvent.length&&(t=this.arBgInvent[i],!t.empty);i++);var s=this;t&&(createjs.Tween.get(t).to({alpha:1},200),createjs.Tween.get(e).to({x:t.x,y:t.y},300).call(function(){"l3_1_lego"==e.name?(login_obj.l3_1_legoTook=!0,reportFound(e.name,"Lego Y")):"l3_1_valve"==e.name&&(login_obj.l3_1_valveTook=!0,reportFound(e.name,"Valve")),invent_obj3.push(e),s.removeFromArray(s.arItems,e.name),s.face_mc.addChild(e),s.refreshInvent()}))}},e.prototype.clickObj=function(e){var t=e.name,i=this;if(this.curObj);else if("l3_1_lego"==t)this.pushObj(e);else if("l3_1_valve"==t)this.pushObj(e);else{if("Arrow1"==t)return this._gameOver=!0,e.visible=!1,createjs.Tween.removeTweens(this.hero),void this.hero.initMove(e,function(){i.removeAllListener(),showGame(22),saveData()});if("Arrow2"==t)return this._gameOver=!0,e.visible=!1,createjs.Tween.removeTweens(this.hero),void this.hero.initMove(e,function(){i.removeAllListener(),showGame(24),saveData()})}this.curObj&&this.refreshInvent()},e.prototype.loadInvent=function(){invent_obj3=[];for(var e=0;e<login_obj.arInvent3.length;e++){var t=login_obj.arInvent3[e];if(t){var i=this.addObj(t,0,0);invent_obj3.push(i)}}this.refreshInvent()},e.prototype.refreshInvent=function(){var e,t,i=0;for(i=0;i<this.arBgInvent.length;i++){if(t=this.arBgInvent[i],t.empty=!0,invent_obj3&&(e=invent_obj3[i])){t.empty=!1;var s=e.name,h=s.indexOf("i_");-1==h&&(this.face_mc.removeChild(e),e=this.addObj("i_"+s,0,0),invent_obj3[i]=e),e.x=t.x,e.y=t.y,this.face_mc.addChild(e)}t.empty&&1==t.alpha&&createjs.Tween.get(t).to({alpha:0},200),0==t.empty&&0==t.alpha&&createjs.Tween.get(t).to({alpha:1},200)}saveData()},e.prototype.removeFromArray=function(e,t,i){var s,h=0;for(h=0;h<e.length;h++)if(s=e[h],s.name==t){i&&this.face_mc.removeChild(s),e.splice(h,1);break}},e.prototype.turnHandler=function(e){return this._gameOver?void e.remove():void 0},e.prototype.checkInvent=function(e){var t=e.stageX,i=e.stageY,s=null;if(0!=this.face_mc.visible){for(var h=0;h<invent_obj3.length;h++){var a=invent_obj3[h];if(hit_test_rec(a,a.w,a.h,t,i)){s=a;break}}return s&&"i_l3_5_detector"==s.name&&this.showDetector(),s}},e.prototype.checkButtons=function(e){for(var t=e.stageX,i=e.stageY,s=0;s<this.arButtons.length;s++){var h=this.arButtons[s];hit_test_rec(h,h.w,h.h,t,i)?h.visible&&0==h._selected&&(h._selected=!0,h.scaleX=1.2*scaleGraphics,h.scaleY=1.2*scaleGraphics):h._selected&&(h.scaleX=scaleGraphics,h.scaleY=scaleGraphics,h._selected=!1)}},e.prototype.touchHandler=function(e){if(this._gameOver)return void e.remove();var t,i,s=e.type,h=e.stageX,a=e.stageY,o=0;if("mousedown"==s)this.curObj=this.checkInvent(e),null==this.curObj&&this.checkButtons(e);else if("pressmove"==s)this.checkButtons(e),this.curObj?(this.curObj.x=h,this.curObj.y=a):this.checkButtons(e);else if("pressup"==s){for(i=getDD(this.hero.x,this.hero.y,h,a),i<hitHero*scaleGraphics&&this.hero.visible?this.hero.say?(login_obj.anti_gravity||this.hero.hideText(),this.textHero.hideText()):(login_obj.anti_gravity||this.hero.showText(),this.textHero.showText()):(login_obj.anti_gravity||this.hero.hideText(),this.textHero.hideText()),o=0;o<this.arItems.length;o++)if(t=this.arItems[o],hit_test_rec(t,t.w,t.h,h,a)&&t.visible)return void this.clickObj(t);this.curObj&&this.refreshInvent()}},e.prototype.removeAllListener=function(){this.hero&&(login_obj.anti_gravity||this.hero.removeAllListener()),this.detector&&this.detector.removeAllListener(),this._gameOver=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation21=e}();