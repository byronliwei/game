!function(){var e=function(){this.initialize(),this.init()};e.prototype=new createjs.Container,e.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this.lock_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,this.showLock,login_obj.location=24;var e=preload.getResult("location3_4");this.bgGame=new createjs.Bitmap(e),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),this.addChild(this.game_mc),this.addChild(this.lock_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},e.prototype.loadLevel=function(){if(this.Arrow1=this.addObj("Strelka5",500,600),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),login_obj.l3_4_colaTook||(this.cola=this.addObj("l3_4_cola",600,50,.6,.6),this.cola.rotation=-70,this.arItems.push(this.cola),this.game_mc.addChild(this.cola)),this.displayOn=this.addObj("l3_4_displayOn",508,215),this.game_mc.addChild(this.displayOn),this.displayOff=this.addObj("l3_4_displayOff",508,215),this.game_mc.addChild(this.displayOff),login_obj.l3_engine?this.displayOff.visible=!1:this.displayOn.visible=!1,login_obj.l3_engine){var e=this.addObj("l3_4_solved",510,345);this.game_mc.addChild(e)}else this.door=this.addObj("l3_4_unsolved",510,345),this.door.name="door",this.game_mc.addChild(this.door),this.arItems.push(this.door);login_obj.puzzle_13||(this.itemPuzzle=new ItemPuzzle(13,980,430,this),this.face_mc.addChild(this.itemPuzzle)),this.nut1=this.addObj("l3_4_nut",900,315,.7,.7),this.nut1.rotation=-40,this.game_mc.addChild(this.nut1),this.nut2=this.addObj("l3_4_nut",300,415,.6,.6),this.nut2.rotation=0,this.game_mc.addChild(this.nut2),this.nut3=this.addObj("l3_4_nut",700,550),this.nut3.rotation=20,this.game_mc.addChild(this.nut3),this.stool1=this.addObj("l3_4_stool",150,600),this.stool1.rotation=40,this.game_mc.addChild(this.stool1),this.stool2=this.addObj("l3_4_stool",750,400,.7,.7),this.stool2.rotation=-20,this.game_mc.addChild(this.stool2),this.aq1=this.addObj("l3_4_aq",200,300,.6,.6),this.aq1.rotation=30,this.game_mc.addChild(this.aq1),this.aq2=this.addObj("l3_4_aq",900,450,.8,.8),this.aq2.rotation=-25,this.game_mc.addChild(this.aq2),this.book=this.addObj("l3_4_book",300,100),this.book.rotation=-25,this.game_mc.addChild(this.book),this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleX=1*scaleGraphics,this.hero.scaleY=scaleGraphics,this.hero.x=400*scaleGraphics,this.hero.y=450*scaleGraphics,this.game_mc.addChild(this.hero),this.hero.setSoar(),this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.y=this.hero.y-100*scaleGraphics,this.hero.x<300*scaleGraphics?(this.textHero.oblachko.scaleX=-1,this.textHero.x=this.hero.x+200*scaleGraphics):this.textHero.x=this.hero.x-200*scaleGraphics,this.game_mc.addChild(this.textHero),login_obj.l3_engine||this.textHero.showText("emergence_3_4"),this.createGravity(),this.createEngine(),this.createCells(),this.loadInvent()},e.prototype.hideDetector=function(){this.face_mc.visible=!0,this.hero.visible=!0,this.Arrow1.visible=!0,this.detector&&(this.detector.visible=!1)},e.prototype.showDetector=function(){this.face_mc.visible?(this.face_mc.visible=!1,this.hero.visible=!1,this.Arrow1.visible=!1,this.detector?this.detector.visible=!0:(this.detector=new ItemDetector,this.detector._parent=this,this.detector.scaleX=scaleGraphics,this.detector.scaleY=scaleGraphics,this.game_mc.addChild(this.detector),this.detector.x=_W/2,this.detector.y=_H-160*scaleGraphics,this.detector._x=_W/2,this.detector._y=this.detector.y)):this.hideDetector()},e.prototype.createEngine=function(){this.showLock=!1;var e=new createjs.Shape;e.graphics.beginFill("rgba(0,0,0,0.8)").drawRect(0,0,_W,_H),this.lock_mc.addChild(e);var t=this.addObj("location3_4_engine",_WO/2,_HO/2);this.lock_mc.addChild(t);var s=this.add_button("close",835*scaleGraphics,135*scaleGraphics,"btnExit");this.lock_mc.addChild(s),this.arItems.push(s);var i=this.addObj("l3_4_legoB",610,387);i.name="legoB",this.lock_mc.addChild(i);var o=this.addObj("l3_4_legoG",502,282);o.name="legoG",this.lock_mc.addChild(o);var a=this.addObj("l3_4_legoR",398,387);a.name="legoR",this.lock_mc.addChild(a);var h=this.addObj("l3_4_legoY",502,494);h.name="legoY",this.lock_mc.addChild(h),i.alpha=0,o.alpha=0,a.alpha=0,h.alpha=0,login_obj.l3_engine||(this.arItems.push(i),this.arItems.push(o),this.arItems.push(a),this.arItems.push(h));var l=login_obj.set_l3_7_lego,r=login_obj.set_l3_3_lego,c=login_obj.set_l3_5_lego,n=login_obj.set_l3_1_lego,_=[];if(_.legoB=i,_.legoG=o,_.legoR=a,_.legoY=h,l){var d=this.addObj("l3_4_legoB",l.x,l.y);d.mc=_[l.type],d.name="l3_7_lego",this.removeFromArray(this.arItems,l.type),this.lock_mc.addChild(d),login_obj.l3_engine||this.arItems.push(d)}if(r){var d=this.addObj("l3_4_legoG",r.x,r.y);d.mc=_[r.type],d.name="l3_3_lego",this.removeFromArray(this.arItems,r.type),this.lock_mc.addChild(d),login_obj.l3_engine||this.arItems.push(d)}if(c){var d=this.addObj("l3_4_legoR",c.x,c.y);d.mc=_[c.type],d.name="l3_5_lego",this.removeFromArray(this.arItems,c.type),this.lock_mc.addChild(d),login_obj.l3_engine||this.arItems.push(d)}if(n){var d=this.addObj("l3_4_legoY",n.x,n.y);d.mc=_[n.type],d.name="l3_1_lego",this.removeFromArray(this.arItems,n.type),this.lock_mc.addChild(d),login_obj.l3_engine||this.arItems.push(d)}this.lock_mc.visible=!1},e.prototype.createGravity=function(){createjs.Tween.get(this.nut1).play(createjs.Tween.get(this.nut1,{paused:!0,loop:!0}).to({rotation:140,y:290*scaleGraphics},2e3).to({rotation:320,y:315*scaleGraphics},2e3)),createjs.Tween.get(this.nut2).play(createjs.Tween.get(this.nut2,{paused:!0,loop:!0}).to({rotation:180,y:460*scaleGraphics},2500).to({rotation:360,y:415*scaleGraphics},2500)),createjs.Tween.get(this.nut3).play(createjs.Tween.get(this.nut3,{paused:!0,loop:!0}).to({rotation:200,y:500*scaleGraphics},2200).to({rotation:380,y:550*scaleGraphics},2200)),createjs.Tween.get(this.stool1).play(createjs.Tween.get(this.stool1,{paused:!0,loop:!0}).to({y:540*scaleGraphics},3e3).to({y:600*scaleGraphics},3e3)),createjs.Tween.get(this.stool2).play(createjs.Tween.get(this.stool2,{paused:!0,loop:!0}).to({y:420*scaleGraphics},2500).to({y:400*scaleGraphics},2500)),createjs.Tween.get(this.aq1).play(createjs.Tween.get(this.aq1,{paused:!0,loop:!0}).to({y:270*scaleGraphics},2e3).to({y:300*scaleGraphics},2e3)),createjs.Tween.get(this.aq2).play(createjs.Tween.get(this.aq2,{paused:!0,loop:!0}).to({y:500*scaleGraphics},3e3).to({y:450*scaleGraphics},3e3)),createjs.Tween.get(this.hero).play(createjs.Tween.get(this.hero,{paused:!0,loop:!0}).to({y:420*scaleGraphics},2500).to({y:450*scaleGraphics},2500)),createjs.Tween.get(this.book).play(createjs.Tween.get(this.book,{paused:!0,loop:!0}).to({y:120*scaleGraphics},2300).to({y:100*scaleGraphics},2300)),this.cola&&createjs.Tween.get(this.cola).play(createjs.Tween.get(this.cola,{paused:!0,loop:!0}).to({y:70*scaleGraphics},2e3).to({y:50*scaleGraphics},2e3))},e.prototype.createCells=function(){var e,t=0;for(t=0;8>t;t++){var e=this.addObj("Cell",944-120*t,688);e.alpha=0,e.empty=!0,this.cells_mc.addChild(e),this.arBgInvent.push(e)}},e.prototype.addObj=function(e,t,s,i,o){i||(i=1),o||(o=1);var a=new createjs.Container,h=preload.getResult(e),l=new createjs.Bitmap(h);return l.x=-(l.image.width/2),l.y=-(l.image.height/2),a.addChild(l),a.scaleX=scaleGraphics*i,a.scaleY=scaleGraphics*o,a.x=t*scaleGraphics,a.y=s*scaleGraphics,a.w=l.image.width*a.scaleX,a.h=l.image.height*a.scaleY,a.name=e,a.w<50&&(a.w=50),a.h<50&&(a.h=50),a},e.prototype.add_button=function(e,t,s,i){var o=new createjs.Container;o.title=e,o.x=t,o.y=s,o.name=i;var a=preload.getResult(i),h=new createjs.Bitmap(a);return h.scaleX=scaleGraphics,h.scaleY=scaleGraphics,h.x=-h.image.width/2*h.scaleX,h.y=-h.image.height/2*h.scaleY,o.addChild(h),a=preload.getResult(i+"Activ"),o.over=new createjs.Bitmap(a),o.over.image&&(o.over.scaleX=scaleGraphics,o.over.scaleY=scaleGraphics,o.over.x=-o.over.image.width/2*o.over.scaleX,o.over.y=-o.over.image.height/2*o.over.scaleY,o.over.visible=!1,o.addChild(o.over)),o.w=h.image.width*h.scaleX,o.h=h.image.height*h.scaleX,o.r=h.image.width*h.scaleX/2,o.rr=o.r*o.r,o._selected=!1,o.width=h.image.width,o.height=h.image.height,this.arButtons.push(o),o},e.prototype.pushObj=function(e){if(e){var t,s=0;for(s=0;s<this.arBgInvent.length&&(t=this.arBgInvent[s],!t.empty);s++);var i=this;t&&(createjs.Tween.get(t).to({alpha:1},200),createjs.Tween.get(e).to({x:t.x,y:t.y},300).call(function(){"l3_4_cola"==e.name&&(login_obj.l3_4_colaTook=!0,reportFound(e.name,"Cola")),invent_obj3.push(e),i.removeFromArray(i.arItems,e.name),i.face_mc.addChild(e),i.refreshInvent()}))}},e.prototype.clickObj=function(e){var t=e.name,s=this;if(this.curObj){if(this.showLock){var i=this.curObj.name;if(!("legoB"!=t&&"legoG"!=t&&"legoR"!=t&&"legoY"!=t||"i_l3_1_lego"!=i&&"i_l3_3_lego"!=i&&"i_l3_5_lego"!=i&&"i_l3_7_lego"!=i)){var o=[];o.i_l3_1_lego="l3_4_legoY",o.i_l3_3_lego="l3_4_legoG",o.i_l3_5_lego="l3_4_legoR",o.i_l3_7_lego="l3_4_legoB";var a=o[i],h=i.slice(2,i.length),l=this.addObj(a,0,0);l.name=h,l.x=e.x,l.y=e.y,this.lock_mc.addChild(l),this.removeFromArray(this.arItems,t),this.removeFromArray(invent_obj3,this.curObj.name,!0),this.refreshInvent(),this.arItems.push(l),l.mc=e,login_obj["set_"+h]={x:l.x/scaleGraphics,y:l.y/scaleGraphics,type:t}}if("legoB"==t&&"i_l3_7_lego"==i?login_obj.l3_4_setB=!0:"legoG"==t&&"i_l3_3_lego"==i?login_obj.l3_4_setG=!0:"legoR"==t&&"i_l3_5_lego"==i?login_obj.l3_4_setR=!0:"legoY"==t&&"i_l3_1_lego"==i&&(login_obj.l3_4_setY=!0),login_obj.l3_4_setB&&login_obj.l3_4_setG&&login_obj.l3_4_setR&&login_obj.l3_4_setY){this.removeFromArray(this.arItems,"l3_1_lego"),this.removeFromArray(this.arItems,"l3_3_lego"),this.removeFromArray(this.arItems,"l3_5_lego"),this.removeFromArray(this.arItems,"l3_7_lego"),login_obj.l3_engine=!0,this.displayOff.visible=!1,this.displayOn.visible=!0,this.door.visible=!1;var r=this.addObj("l3_4_solved",510,345);this.game_mc.addChild(r),this.showLock=!1,this.lock_mc.visible=!1,this.door&&(this.door.visible=!0),reportUsed("l3_1_lego","Lego Y"),reportUsed("l3_3_lego","Lego G"),reportUsed("l3_5_lego","Lego R"),reportUsed("l3_7_lego","Lego B"),saveData()}}}else if(this.showLock)"btnExit"==t?(this.showLock=!1,this.lock_mc.visible=!1,this.door&&(this.door.visible=!0)):("l3_1_lego"==t||"l3_3_lego"==t||"l3_5_lego"==t||"l3_7_lego"==t)&&(e.mc&&this.arItems.push(e.mc),this.pushObj(e),login_obj["set_"+t]=null,"l3_7_lego"==t?login_obj.l3_4_setB=!1:"l3_3_lego"==t?login_obj.l3_4_setG=!1:"l3_5_lego"==t?login_obj.l3_4_setR=!1:"l3_1_lego"==t&&(login_obj.l3_4_setY=!1));else if("l3_4_cola"==t)this.pushObj(e);else if("door"==t)this.showLock=!0,this.lock_mc.visible=!0,this.door&&(this.door.visible=!1);else if("Arrow1"==t)return this._gameOver=!0,e.visible=!1,createjs.Tween.removeTweens(this.hero),void this.hero.initMove(e,function(){s.removeAllListener(),showGame(21),saveData()});this.curObj&&this.refreshInvent()},e.prototype.loadInvent=function(){invent_obj3=[];for(var e=0;e<login_obj.arInvent3.length;e++){var t=login_obj.arInvent3[e];if(t){var s=this.addObj(t,0,0);invent_obj3.push(s)}}this.refreshInvent()},e.prototype.refreshInvent=function(){var e,t,s=0;for(s=0;s<this.arBgInvent.length;s++){if(t=this.arBgInvent[s],t.empty=!0,invent_obj3&&(e=invent_obj3[s])){t.empty=!1;var i=e.name,o=i.indexOf("i_");-1==o&&(this.face_mc.removeChild(e),e=this.addObj("i_"+i,0,0),invent_obj3[s]=e),e.x=t.x,e.y=t.y,this.face_mc.addChild(e)}t.empty&&1==t.alpha&&createjs.Tween.get(t).to({alpha:0},200),0==t.empty&&0==t.alpha&&createjs.Tween.get(t).to({alpha:1},200)}saveData()},e.prototype.removeFromArray=function(e,t,s){var i,o=0;for(o=0;o<e.length;o++)if(i=e[o],i.name==t){s&&this.face_mc.removeChild(i),e.splice(o,1);break}},e.prototype.turnHandler=function(e){return this._gameOver?void e.remove():void 0},e.prototype.checkInvent=function(e){var t=e.stageX,s=e.stageY,i=null;if(0!=this.face_mc.visible){for(var o=0;o<invent_obj3.length;o++){var a=invent_obj3[o];if(hit_test_rec(a,a.w,a.h,t,s)){i=a;break}}return i&&"i_l3_5_detector"==i.name&&this.showDetector(),i}},e.prototype.checkButtons=function(e){for(var t=e.stageX,s=e.stageY,i=0;i<this.arButtons.length;i++){var o=this.arButtons[i];hit_test_rec(o,o.w,o.h,t,s)?o.visible&&0==o._selected&&(o._selected=!0,o.scaleX=1.2*scaleGraphics,o.scaleY=1.2*scaleGraphics):o._selected&&(o.scaleX=scaleGraphics,o.scaleY=scaleGraphics,o._selected=!1)}},e.prototype.touchHandler=function(e){if(this._gameOver)return void e.remove();var t,s,i=e.type,o=e.stageX,a=e.stageY,h=0;if("mousedown"==i)this.curObj=this.checkInvent(e),null==this.curObj&&this.checkButtons(e);else if("pressmove"==i)this.checkButtons(e),this.curObj?(this.curObj.x=o,this.curObj.y=a):this.checkButtons(e);else if("pressup"==i){for(s=getDD(this.hero.x,this.hero.y,o,a),s<hitHero*scaleGraphics&&this.hero.visible?this.hero.say?this.textHero.hideText():this.textHero.showText():this.textHero.hideText(),h=0;h<this.arItems.length;h++)if(t=this.arItems[h],hit_test_rec(t,t.w,t.h,o,a)&&t.visible)return void this.clickObj(t);this.curObj&&this.refreshInvent()}},e.prototype.removeAllListener=function(){this.detector&&this.detector.removeAllListener(),this._gameOver=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation24=e}();