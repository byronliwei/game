!function(){var t=function(){this.initialize(),this.init()};t.prototype=new createjs.Container,t.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,login_obj.location=22;var t=preload.getResult("location3_2");this.bgGame=new createjs.Bitmap(t),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),t=preload.getResult("location3_2_gr"),this.bgGame2=new createjs.Bitmap(t),this.bgGame2.scaleX=scaleGraphics,this.bgGame2.scaleY=scaleGraphics,this.addChild(this.bgGame2),this.addChild(this.game_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},t.prototype.loadLevel=function(){this.Arrow1=this.addObj("Strelka1",170,460),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),this.Arrow2=this.addObj("Strelka5",500,600),this.Arrow2.name="Arrow2",this.Arrow2._selected=!1,this.game_mc.addChild(this.Arrow2),this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),this.arItems.push(this.Arrow2),this.arButtons.push(this.Arrow2);var t=this.addObj("l3_2_button",570,430);this.game_mc.addChild(t),this.lamp1R=this.addObj("l3_2_lamp1R",875,170),this.game_mc.addChild(this.lamp1R),this.lamp2R=this.addObj("l3_2_lamp2R",875,270),this.game_mc.addChild(this.lamp2R),this.lamp3R=this.addObj("l3_2_lamp3R",875,370),this.game_mc.addChild(this.lamp3R),this.lamp1G=this.addObj("l3_2_lamp1G",875,170),this.game_mc.addChild(this.lamp1G),this.lamp2G=this.addObj("l3_2_lamp2G",875,270),this.game_mc.addChild(this.lamp2G),this.lamp3G=this.addObj("l3_2_lamp3G",875,370),this.game_mc.addChild(this.lamp3G);var e=this.addObj("l3_2_off",570,480);if(this.game_mc.addChild(e),this.start=this.addObj("l3_2_start",570,480),this.game_mc.addChild(this.start),this.start.visible=!1,login_obj.anti_gravity){var i=this.addObj("l3_2_magnet",858,458);this.game_mc.addChild(i),this.lamp3R.visible=!1}else{var s=this.addObj("l3_2_slot",858,458);this.game_mc.addChild(s),this.arItems.push(s),this.lamp3G.visible=!1}login_obj.l3_engine?this.lamp1R.visible=!1:this.lamp1G.visible=!1,login_obj.l3_fuel?this.lamp2R.visible=!1:this.lamp2G.visible=!1,login_obj.l3_engine&&login_obj.l3_fuel&&login_obj.anti_gravity&&(this.arItems.push(t),this.start.visible=!0),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),this.hero.scaleX=1*scaleGraphics,this.hero.x=450*scaleGraphics,this.hero.y=500*scaleGraphics,this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.y=this.hero.y-100*scaleGraphics,this.hero.x<300*scaleGraphics?(this.textHero.oblachko.scaleX=-1,this.textHero.x=this.hero.x+200*scaleGraphics):this.textHero.x=this.hero.x-200*scaleGraphics,this.game_mc.addChild(this.textHero),this.createGravity(),this.showGravity(),this.createCells(),this.loadInvent()},t.prototype.hideDetector=function(){this.face_mc.visible=!0,this.hero.visible=!0,this.Arrow1.visible=!0,this.Arrow2.visible=!0,this.detector&&(this.detector.visible=!1)},t.prototype.showDetector=function(){this.face_mc.visible?(this.face_mc.visible=!1,this.hero.visible=!1,this.Arrow1.visible=!1,this.Arrow2.visible=!1,this.detector?this.detector.visible=!0:(this.detector=new ItemDetector,this.detector._parent=this,this.detector.scaleX=scaleGraphics,this.detector.scaleY=scaleGraphics,this.game_mc.addChild(this.detector),this.detector.x=_W/2,this.detector.y=_H-160*scaleGraphics,this.detector._x=_W/2,this.detector._y=this.detector.y)):this.hideDetector()},t.prototype.createGravity=function(){this.nut1=this.addObj("l3_4_nut",900,315,.7,.7),this.nut1.rotation=-40,this.game_mc.addChild(this.nut1),this.nut2=this.addObj("l3_4_nut",300,415,.6,.6),this.nut2.rotation=0,this.game_mc.addChild(this.nut2),this.nut3=this.addObj("l3_4_nut",700,550),this.nut3.rotation=20,this.game_mc.addChild(this.nut3),this.stool1=this.addObj("l3_4_stool",120,700),this.stool1.rotation=40,this.game_mc.addChild(this.stool1),this.stool2=this.addObj("l3_4_stool",750,400,.7,.7),this.stool2.rotation=-20,this.game_mc.addChild(this.stool2),this.aq1=this.addObj("l3_4_aq",200,300,.6,.6),this.aq1.rotation=30,this.game_mc.addChild(this.aq1),this.aq2=this.addObj("l3_4_aq",600,250,.8,.8),this.aq2.rotation=-25,this.game_mc.addChild(this.aq2),this.book=this.addObj("l3_4_book",300,100),this.book.rotation=-25,this.game_mc.addChild(this.book),createjs.Tween.get(this.nut1).play(createjs.Tween.get(this.nut1,{paused:!0,loop:!0}).to({rotation:140,y:290*scaleGraphics},2e3).to({rotation:320,y:315*scaleGraphics},2e3)),createjs.Tween.get(this.nut2).play(createjs.Tween.get(this.nut2,{paused:!0,loop:!0}).to({rotation:180,y:460*scaleGraphics},2500).to({rotation:360,y:415*scaleGraphics},2500)),createjs.Tween.get(this.nut3).play(createjs.Tween.get(this.nut3,{paused:!0,loop:!0}).to({rotation:200,y:500*scaleGraphics},2200).to({rotation:380,y:550*scaleGraphics},2200)),createjs.Tween.get(this.stool1).play(createjs.Tween.get(this.stool1,{paused:!0,loop:!0}).to({y:640*scaleGraphics},3e3).to({y:700*scaleGraphics},3e3)),createjs.Tween.get(this.stool2).play(createjs.Tween.get(this.stool2,{paused:!0,loop:!0}).to({y:420*scaleGraphics},2500).to({y:400*scaleGraphics},2500)),createjs.Tween.get(this.aq1).play(createjs.Tween.get(this.aq1,{paused:!0,loop:!0}).to({y:270*scaleGraphics},2e3).to({y:300*scaleGraphics},2e3)),createjs.Tween.get(this.aq2).play(createjs.Tween.get(this.aq2,{paused:!0,loop:!0}).to({y:300*scaleGraphics},3e3).to({y:250*scaleGraphics},3e3)),createjs.Tween.get(this.book).play(createjs.Tween.get(this.book,{paused:!0,loop:!0}).to({y:120*scaleGraphics},2300).to({y:100*scaleGraphics},2300))},t.prototype.showGravity=function(){login_obj.anti_gravity?(this.bgGame2.visible=!0,this.nut1.visible=!0,this.nut2.visible=!0,this.nut3.visible=!0,this.stool1.visible=!0,this.stool2.visible=!0,this.aq1.visible=!0,this.aq2.visible=!0,this.book.visible=!0,this.hero.setSoar(),createjs.Tween.get(this.hero).play(createjs.Tween.get(this.hero,{paused:!0,loop:!0}).to({y:470*scaleGraphics},2500).to({y:500*scaleGraphics},2500))):(this.bgGame2.visible=!1,this.nut1.visible=!1,this.nut2.visible=!1,this.nut3.visible=!1,this.stool1.visible=!1,this.stool2.visible=!1,this.aq1.visible=!1,this.aq2.visible=!1,this.book.visible=!1,this.hero&&this.game_mc.removeChild(this.hero),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),this.hero.scaleX=1*scaleGraphics,this.hero.x=450*scaleGraphics,this.hero.y=500*scaleGraphics)},t.prototype.createCells=function(){var t,e=0;for(e=0;8>e;e++){var t=this.addObj("Cell",944-120*e,688);t.alpha=0,t.empty=!0,this.cells_mc.addChild(t),this.arBgInvent.push(t)}},t.prototype.addObj=function(t,e,i,s,h){s||(s=1),h||(h=1);var a=new createjs.Container,r=preload.getResult(t),o=new createjs.Bitmap(r);return o.x=-(o.image.width/2),o.y=-(o.image.height/2),a.addChild(o),a.scaleX=scaleGraphics*s,a.scaleY=scaleGraphics*h,a.x=e*scaleGraphics,a.y=i*scaleGraphics,a.w=o.image.width*a.scaleX,a.h=o.image.height*a.scaleY,a.name=t,a.w<50&&(a.w=50),a.h<50&&(a.h=50),a},t.prototype.pushObj=function(t){if(t){var e,i=0;for(i=0;i<this.arBgInvent.length&&(e=this.arBgInvent[i],!e.empty);i++);e&&(createjs.Tween.get(e).to({alpha:1},200),createjs.Tween.get(t).to({x:e.x,y:e.y},300).call(function(){}))}},t.prototype.clickObj=function(t){var e=t.name,i=this;if(this.curObj){if("l3_2_slot"==e&&"i_l3_7_magnet"==this.curObj.name){reportUsed("l3_7_magnet","Magnet"),this.removeFromArray(invent_obj3,this.curObj.name,!0),this.removeFromArray(this.arItems,e),login_obj.anti_gravity=!0,this.lamp3R.visible=!1,this.lamp3G.visible=!0;var s=this.addObj("l3_2_magnet",858,458);this.game_mc.addChild(s);var h=new createjs.Shape;h.graphics.beginFill("#ffffff").drawRect(0,0,_W,_H),this.addChild(h),createjs.Tween.get(h).wait(100).to({alpha:0},500),this.showGravity(),this.refreshInvent()}}else if("l3_2_button"==e)i.removeAllListener(),showGame(28),saveData();else{if("Arrow1"==e)return this._gameOver=!0,t.visible=!1,createjs.Tween.removeTweens(this.hero),void this.hero.initMove(t,function(){i.removeAllListener(),showGame(21),saveData()});if("Arrow2"==e)return this._gameOver=!0,t.visible=!1,createjs.Tween.removeTweens(this.hero),void this.hero.initMove(t,function(){i.removeAllListener(),showGame(23),saveData()})}this.curObj&&this.refreshInvent()},t.prototype.loadInvent=function(){invent_obj3=[];for(var t=0;t<login_obj.arInvent3.length;t++){var e=login_obj.arInvent3[t];if(e){var i=this.addObj(e,0,0);invent_obj3.push(i)}}this.refreshInvent()},t.prototype.refreshInvent=function(){var t,e,i=0;for(i=0;i<this.arBgInvent.length;i++){if(e=this.arBgInvent[i],e.empty=!0,invent_obj3&&(t=invent_obj3[i])){e.empty=!1;var s=t.name,h=s.indexOf("i_");-1==h&&(this.face_mc.removeChild(t),t=this.addObj("i_"+s,0,0),invent_obj3[i]=t),t.x=e.x,t.y=e.y,this.face_mc.addChild(t)}e.empty&&1==e.alpha&&createjs.Tween.get(e).to({alpha:0},200),0==e.empty&&0==e.alpha&&createjs.Tween.get(e).to({alpha:1},200)}saveData()},t.prototype.removeFromArray=function(t,e,i){var s,h=0;for(h=0;h<t.length;h++)if(s=t[h],s.name==e){i&&this.face_mc.removeChild(s),t.splice(h,1);break}},t.prototype.turnHandler=function(t){return this._gameOver?void t.remove():void 0},t.prototype.checkInvent=function(t){var e=t.stageX,i=t.stageY,s=null;if(0!=this.face_mc.visible){for(var h=0;h<invent_obj3.length;h++){var a=invent_obj3[h];if(hit_test_rec(a,a.w,a.h,e,i)){s=a;break}}return s&&"i_l3_5_detector"==s.name&&this.showDetector(),s}},t.prototype.checkButtons=function(t){for(var e=t.stageX,i=t.stageY,s=0;s<this.arButtons.length;s++){var h=this.arButtons[s];hit_test_rec(h,h.w,h.h,e,i)?h.visible&&0==h._selected&&(h._selected=!0,h.scaleX=1.2*scaleGraphics,h.scaleY=1.2*scaleGraphics):h._selected&&(h.scaleX=scaleGraphics,h.scaleY=scaleGraphics,h._selected=!1)}},t.prototype.touchHandler=function(t){if(this._gameOver)return void t.remove();var e,i,s=t.type,h=t.stageX,a=t.stageY,r=0;if("mousedown"==s)this.curObj=this.checkInvent(t),null==this.curObj&&this.checkButtons(t);else if("pressmove"==s)this.checkButtons(t),this.curObj?(this.curObj.x=h,this.curObj.y=a):this.checkButtons(t);else if("pressup"==s){for(i=getDD(this.hero.x,this.hero.y,h,a),i<hitHero*scaleGraphics&&this.hero.visible?this.hero.say?(login_obj.anti_gravity||this.hero.hideText(),this.textHero.hideText()):(login_obj.anti_gravity||this.hero.showText(),this.textHero.showText()):(login_obj.anti_gravity||this.hero.hideText(),this.textHero.hideText()),r=0;r<this.arItems.length;r++)if(e=this.arItems[r],hit_test_rec(e,e.w,e.h,h,a)&&e.visible)return void this.clickObj(e);this.curObj&&this.refreshInvent()}},t.prototype.removeAllListener=function(){this.hero&&(login_obj.anti_gravity||this.hero.removeAllListener()),this.detector&&this.detector.removeAllListener(),this._gameOver=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation22=t}();