!function(){var e=function(){this.initialize(),this.init()};e.prototype=new createjs.Container,e.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,this.bRot=!1,login_obj.location=20,this.levelObj.minigame=!0;var e=preload.getResult("location2_12");this.bgGame=new createjs.Bitmap(e),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),this.addChild(this.game_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},e.prototype.loadLevel=function(){this.teleport=new ItemAnima("l1_6_teleport"),this.teleport.scaleX=scaleGraphics,this.teleport.scaleY=scaleGraphics,this.teleport.x=500*scaleGraphics,this.teleport.y=650*scaleGraphics,this.teleport.sprite.gotoAndPlay("one"),this.teleport.visible=!1,this.game_mc.addChild(this.teleport),this.Arrow1=this.addObj("Strelka7",100,620),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),this.Arrow2=this.addObj("Strelka5",500,600),this.Arrow2.name="Arrow2",this.Arrow2._selected=!1,this.Arrow2.visible=!1,this.game_mc.addChild(this.Arrow2);var e=new ItemAnima("animFire");e.scaleX=scaleGraphics,e.scaleY=scaleGraphics,e.x=970*scaleGraphics,e.y=320*scaleGraphics,e.sprite.gotoAndPlay("one"),this.game_mc.addChild(e);var e=new ItemAnima("animFire");e.scaleX=scaleGraphics,e.scaleY=scaleGraphics,e.x=82*scaleGraphics,e.y=320*scaleGraphics,e.sprite.gotoAndPlay("one"),this.game_mc.addChild(e);var t=680*scaleGraphics,i=380*scaleGraphics;this.dark=new createjs.Shape,this.dark.x=541*scaleGraphics-t/2,this.dark.y=362*scaleGraphics-i/2,this.dark.graphics.beginFill("#0000000").drawRect(0,0,t,i),this.game_mc.addChild(this.dark),this.door=this.addObj("l2_12_door",535,380),this.game_mc.addChild(this.door);var s=this.addObj("l2_12_border",541,362);this.game_mc.addChild(s);var h=this.addObj("l2_12_mark",535,215);this.game_mc.addChild(h);var a=this.addObj("l2_12_light",250,362);this.game_mc.addChild(a),login_obj.puzzle_11||(this.itemPuzzle=new ItemPuzzle(11,950,430,this),this.face_mc.addChild(this.itemPuzzle));var r=new createjs.Shape;r.x=this.dark.x,r.y=this.dark.y,r.graphics.beginFill("#FFFFFF").drawRect(0,0,t,i),this.door.mask=r,this.wheel1d=this.addObj("l2_4_wheel1d",527,100),this.game_mc.addChild(this.wheel1d),this.wheel1=this.addObj("l2_20_wheel1",537,110),this.game_mc.addChild(this.wheel1),this.wheel2=this.addObj("l2_20_wheel2",537,108),this.game_mc.addChild(this.wheel2),this.btnLeft=this.addObj("l2_4_btnLeft",360,122),this.game_mc.addChild(this.btnLeft),this.btnRight=this.addObj("l2_4_btnRight",700,122),this.game_mc.addChild(this.btnRight),login_obj.l2_20_doorOpen?(this.door.visible=!1,this.dark.visible=!1,this.teleport.visible=!0,this.Arrow2.visible=!0):(this.arItems.push(this.btnLeft),this.arItems.push(this.btnRight),this.wheel1.rotation+=225,this.wheel2.rotation+=90,this.wheel1d.rotation=this.wheel1.rotation),this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),this.arItems.push(this.Arrow2),this.arButtons.push(this.Arrow2),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),this.hero.scaleX=1*scaleGraphics,this.hero.x=250*scaleGraphics,this.hero.y=530*scaleGraphics,this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.y=this.hero.y-100*scaleGraphics,this.hero.x<300*scaleGraphics?(this.textHero.oblachko.scaleX=-1,this.textHero.x=this.hero.x+200*scaleGraphics):this.textHero.x=this.hero.x-200*scaleGraphics,this.game_mc.addChild(this.textHero),login_obj.l2_20_doorOpen||(this.hero.showText(),this.textHero.showText("emergence_2_12")),this.createCells(),this.loadInvent()},e.prototype.createCells=function(){var e,t=0;for(t=0;8>t;t++){var e=this.addObj("Cell",944-120*t,688);e.alpha=0,e.empty=!0,this.cells_mc.addChild(e),this.arBgInvent.push(e)}},e.prototype.addObj=function(e,t,i,s,h){s||(s=1),h||(h=1);var a=new createjs.Container,r=preload.getResult(e),o=new createjs.Bitmap(r);return o.x=-(o.image.width/2),o.y=-(o.image.height/2),a.addChild(o),a.scaleX=scaleGraphics*s,a.scaleY=scaleGraphics*h,a.x=t*scaleGraphics,a.y=i*scaleGraphics,a.w=o.image.width*a.scaleX,a.h=o.image.height*a.scaleY,a.name=e,a.w<50&&(a.w=50),a.h<50&&(a.h=50),a},e.prototype.pushObj=function(e){if(e){var t,i=0;for(i=0;i<this.arBgInvent.length&&(t=this.arBgInvent[i],!t.empty);i++);t&&(createjs.Tween.get(t).to({alpha:1},200),createjs.Tween.get(e).to({x:t.x,y:t.y},300).call(function(){}))}},e.prototype.rotWheels=function(e,t){if(this.levelObj.minigame&&(com.funtomic.GameOps.reportEvent("minigame_started",{story_id:lvlNumber,location_id:locNumber,minigame_id:5,minigame_name:"Wheel puzzle 2"}),this.levelObj.minigame=!1),0==this.bRot){this.bRot=!0;var i=this;createjs.Tween.get(this.wheel1).to({rotation:e},400),createjs.Tween.get(this.wheel1d).to({rotation:e},400),createjs.Tween.get(this.wheel2).to({rotation:t},400).call(function(){if(i.wheel1.rotation=e,i.wheel1d.rotation=e,i.wheel2.rotation=t,0==Math.abs(i.wheel1.rotation%360)&&0==Math.abs(i.wheel2.rotation%360)){login_obj.l2_20_doorOpen=!0,createjs.Tween.get(i.door).to({y:80*scaleGraphics},1e3),createjs.Tween.get(i.dark).wait(1e3).to({alpha:0},500);var s=i.addObj("tfCongrat",512,100);s.alpha=0,i.game_mc.addChild(s),createjs.Tween.get(s).wait(1e3).to({alpha:1},300),com.funtomic.GameOps.reportEvent("minigame_ended",{story_id:lvlNumber,location_id:locNumber,minigame_id:5,minigame_name:"Wheel puzzle 2"}),login_obj.chapter2=!0,i.Arrow2.visible=!0,i.teleport.visible=!0,saveData()}else i.bRot=!1})}},e.prototype.clickObj=function(e){var t=e.name,i=this;if(this.curObj);else if("l2_4_btnLeft"==t){var s=this.wheel1.rotation+45,h=this.wheel2.rotation-180;this.rotWheels(s,h)}else if("l2_4_btnRight"==t){var s=this.wheel1.rotation-90,h=this.wheel2.rotation+90;this.rotWheels(s,h)}else if("Arrow1"==t)this._gameOver=!0,e.visible=!1,this.hero.initMove(e,function(){i.removeAllListener(),showGame(19),saveData()});else if("Arrow2"==t)return this._gameOver=!0,e.visible=!1,void this.hero.initMove(e,function(){i.removeAllListener(),HTML5API_levelEnded(),com.funtomic.GameOps.reportEvent("story_ended ",{story_id:2}),com.funtomic.GameOps.levelEnded(2,!0),showGame(23),HTML5API_levelStarted(),saveData()});this.curObj&&this.refreshInvent()},e.prototype.loadInvent=function(){invent_obj2=[];for(var e=0;e<login_obj.arInvent2.length;e++){var t=login_obj.arInvent2[e];if(t){var i=this.addObj(t,0,0);invent_obj2.push(i)}}this.refreshInvent()},e.prototype.refreshInvent=function(){var e,t,i=0;for(i=0;i<this.arBgInvent.length;i++){if(t=this.arBgInvent[i],t.empty=!0,invent_obj2&&(e=invent_obj2[i])){t.empty=!1;var s=e.name,h=s.indexOf("i_");-1==h&&(this.face_mc.removeChild(e),e=this.addObj("i_"+s,0,0),invent_obj2[i]=e),e.x=t.x,e.y=t.y,this.face_mc.addChild(e)}t.empty&&1==t.alpha&&createjs.Tween.get(t).to({alpha:0},200),0==t.empty&&0==t.alpha&&createjs.Tween.get(t).to({alpha:1},200)}saveData()},e.prototype.removeFromArray=function(e,t,i){var s,h=0;for(h=0;h<e.length;h++)if(s=e[h],s.name==t){i&&this.face_mc.removeChild(s),e.splice(h,1);break}},e.prototype.turnHandler=function(e){return this._gameOver?void e.remove():void 0},e.prototype.checkInvent=function(e){for(var t=e.stageX,i=e.stageY,s=null,h=0;h<invent_obj2.length;h++){var a=invent_obj2[h];if(hit_test_rec(a,a.w,a.h,t,i)){s=a;break}}return s},e.prototype.checkButtons=function(e){for(var t=e.stageX,i=e.stageY,s=0;s<this.arButtons.length;s++){var h=this.arButtons[s];hit_test_rec(h,h.w,h.h,t,i)?h.visible&&0==h._selected&&(h._selected=!0,h.scaleX=1.2*scaleGraphics,h.scaleY=1.2*scaleGraphics):h._selected&&(h.scaleX=scaleGraphics,h.scaleY=scaleGraphics,h._selected=!1)}},e.prototype.touchHandler=function(e){if(this._gameOver)return void e.remove();var t,i,s=e.type,h=e.stageX,a=e.stageY,r=0;if("mousedown"==s)this.curObj=this.checkInvent(e),null==this.curObj&&this.checkButtons(e);else if("pressmove"==s)this.checkButtons(e),this.curObj?(this.curObj.x=h,this.curObj.y=a):this.checkButtons(e);else if("pressup"==s){for(i=getDD(this.hero.x,this.hero.y,h,a),i<hitHero*scaleGraphics?this.hero.say?(this.hero.hideText(),this.textHero.hideText()):(this.hero.showText(),this.textHero.showText()):(this.hero.hideText(),this.textHero.hideText()),r=0;r<this.arItems.length;r++)if(t=this.arItems[r],hit_test_rec(t,t.w,t.h,h,a)&&t.visible)return void this.clickObj(t);this.curObj&&this.refreshInvent()}},e.prototype.removeAllListener=function(){this.hero&&this.hero.removeAllListener(),this._resultGame=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation20=e}();