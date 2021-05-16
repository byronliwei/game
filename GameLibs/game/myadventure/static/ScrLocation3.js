!function(){var t=function(){this.initialize(),this.init()};t.prototype=new createjs.Container,t.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,login_obj.location=3,this.bgDay=new ItemAnima("location1_3_day"),this.bgDay.scaleX=scaleGraphics,this.bgDay.scaleY=scaleGraphics,this.bgDay.x=520*scaleGraphics,this.bgDay.y=40*scaleGraphics,login_obj["1_night"]?(this.bgDay.sprite.gotoAndStop(1),this.levelObj.day=!1,this.levelObj.minigame=!1):(this.bgDay.sprite.gotoAndStop(2),this.levelObj.day=!0,this.levelObj.minigame=!1),this.addChild(this.bgDay);var t=preload.getResult("location1_3");this.bgGame=new createjs.Bitmap(t),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),this.addChild(this.game_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},t.prototype.loadLevel=function(){this.Arrow1=this.addObj("Strelka5",500,600),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),this.bottleE1=this.createBottle("l1_3_bottle4",61,451),this.bottleE1.name="bottleE1",this.game_mc.addChild(this.bottleE1),this.arItems.push(this.bottleE1),this.bottleE2=this.createBottle("l1_3_bottle4",121,439),this.bottleE2.name="bottleE2",this.game_mc.addChild(this.bottleE2),this.arItems.push(this.bottleE2),this.bottleE3=this.createBottle("l1_3_bottle4",181,429),this.game_mc.addChild(this.bottleE3),this.clock=new ItemAnima("l1_3_clock"),this.clock.scaleX=scaleGraphics,this.clock.scaleY=scaleGraphics,this.clock.x=518*scaleGraphics,this.clock.y=272*scaleGraphics,this.clock.sprite.gotoAndStop(login_obj["1_night"]?1:2),this.game_mc.addChild(this.clock),login_obj.puzzle_2||(this.itemPuzzle=new ItemPuzzle(2,700,150,this),this.face_mc.addChild(this.itemPuzzle)),login_obj["1_3_knobTook"]||(this.knob=this.addObj("l1_3_knob",195,149),this.game_mc.addChild(this.knob),this.arItems.push(this.knob)),this.bottle1=this.addObj("l1_3_bottle1",176,722),this.game_mc.addChild(this.bottle1),this.arItems.push(this.bottle1),this.bottle2=this.addObj("l1_3_bottle2",944,233),this.game_mc.addChild(this.bottle2),this.arItems.push(this.bottle2),this.bottle3=this.addObj("l1_3_bottle3",917,494),this.game_mc.addChild(this.bottle3),this.arItems.push(this.bottle3),login_obj["1_3_bottle1Took"]=!1,login_obj["1_3_bottle2Took"]=!1,login_obj["1_3_bottle3Took"]=!1,this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleX=-1*scaleGraphics,this.hero.scaleY=scaleGraphics,this.hero.x=750*scaleGraphics,this.hero.y=580*scaleGraphics,this.game_mc.addChild(this.hero),this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.y=this.hero.y-100*scaleGraphics,this.hero.x<300*scaleGraphics?(this.textHero.oblachko.scaleX=-1,this.textHero.x=this.hero.x+200*scaleGraphics):this.textHero.x=this.hero.x-200*scaleGraphics,this.game_mc.addChild(this.textHero),login_obj["1_3_knobTook"]||(this.hero.showText(),this.textHero.showText("emergence_1_3")),this.createCells(),this.loadInvent()},t.prototype.createBottle=function(t,e,i){var o=new ItemAnima(t);return o.scaleX=scaleGraphics,o.scaleY=scaleGraphics,o.x=e*scaleGraphics+o.w/2,o.y=i*scaleGraphics+o.h/2,o.sprite.stop(),o},t.prototype.refreshBottles=function(){var t=[];t[0]="empty",t[1]="blue",t[2]="green",t[3]="purple",t[4]="red",t[5]="yellow",t[6]="brown";var e=t[this.bottleE1.sprite.currentFrame],i=t[this.bottleE2.sprite.currentFrame],o=[];o.push(e),o.push(i);var s=o.indexOf("blue"),h=o.indexOf("green"),r=o.indexOf("red");this.levelObj.day&&(com.funtomic.GameOps.reportEvent("minigame_started",{story_id:lvlNumber,location_id:locNumber,minigame_id:1,minigame_name:"Made night"}),this.levelObj.minigame=!0),-1!=s&&-1!=r?(this.bottleE3.sprite.gotoAndStop(3),this.bottleE1.sprite.gotoAndStop(0),this.bottleE2.sprite.gotoAndStop(0),this.clock.sprite.gotoAndStop(1),this.bgDay.sprite.gotoAndStop(1),login_obj["1_night"]=!0,this.levelObj.minigame&&com.funtomic.GameOps.reportEvent("minigame_ended",{story_id:lvlNumber,location_id:locNumber,minigame_id:1,minigame_name:"Made night"})):-1!=s&&-1!=h?(this.bottleE3.sprite.gotoAndStop(5),this.bottleE1.sprite.gotoAndStop(0),this.bottleE2.sprite.gotoAndStop(0),this.clock.sprite.gotoAndStop(2),this.bgDay.sprite.gotoAndStop(2),login_obj["1_night"]=!1):-1!=r&&-1!=h?(this.bottleE3.sprite.gotoAndStop(6),this.bottleE1.sprite.gotoAndStop(0),this.bottleE2.sprite.gotoAndStop(0)):"red"==e&&"red"==i?this.bottleE3.sprite.gotoAndStop(4):"blue"==e&&"blue"==i?this.bottleE3.sprite.gotoAndStop(1):"green"==e&&"green"==i&&this.bottleE3.sprite.gotoAndStop(2)},t.prototype.refreshBottle=function(t,e){var i=[];i.i_l1_3_bottle3=1,i.i_l1_3_bottle1=2,i.i_l1_3_bottle2=4,t.sprite.gotoAndStop(i[e.name]),"i_l1_3_bottle1"==e.name?login_obj["1_3_bottle1Took"]=!1:"i_l1_3_bottle2"==e.name?login_obj["1_3_bottle2Took"]=!1:"i_l1_3_bottle3"==e.name&&(login_obj["1_3_bottle3Took"]=!1),this.removeFromArray(invent_obj,e.name),this.face_mc.removeChild(e),this.refreshBottles()},t.prototype.createCells=function(){var t,e=0;for(e=0;8>e;e++){var t=this.addObj("Cell",944-120*e,688);t.alpha=0,t.empty=!0,this.cells_mc.addChild(t),this.arBgInvent.push(t)}},t.prototype.addObj=function(t,e,i,o,s){o||(o=1),s||(s=1);var h=new createjs.Container,r=preload.getResult(t),l=new createjs.Bitmap(r);return l.x=-(l.image.width/2),l.y=-(l.image.height/2),h.addChild(l),h.scaleX=scaleGraphics*o,h.scaleY=scaleGraphics*s,h.x=e*scaleGraphics,h.y=i*scaleGraphics,h.w=l.image.width*scaleGraphics,h.h=l.image.height*scaleGraphics,h.name=t,h.w<50&&(h.w=50),h.h<50&&(h.h=50),h},t.prototype.pushObj=function(t){if(t){var e,i=0;for(i=0;i<this.arBgInvent.length&&(e=this.arBgInvent[i],!e.empty);i++);var o=this;e&&(createjs.Tween.get(e).to({alpha:1},200),createjs.Tween.get(t).to({x:e.x,y:e.y},300).call(function(){"l1_3_bottle1"==t.name?login_obj["1_3_bottle1Took"]=!0:"l1_3_bottle2"==t.name?login_obj["1_3_bottle2Took"]=!0:"l1_3_bottle3"==t.name?login_obj["1_3_bottle3Took"]=!0:"l1_3_knob"==t.name&&(com.funtomic.GameOps.reportEvent("item_found",{story_id:lvlNumber,location_id:locNumber,item_id:t.name,item_name:"Knob"}),login_obj["1_3_knobTook"]=!0,o.removeFromArray(o.arItems,t.name)),invent_obj.push(t),o.face_mc.addChild(t),o.refreshInvent()}))}},t.prototype.clickObj=function(t){var e=t.name;if("l1_3_bottle1"==e&&0==login_obj["1_3_bottle1Took"]){var i=this.addObj("l1_3_bottle1",176,722);this.game_mc.addChild(i),this.pushObj(i),login_obj["1_3_bottle1Took"]=!0}else if("l1_3_bottle2"==e&&0==login_obj["1_3_bottle2Took"]){var o=this.addObj("l1_3_bottle2",944,233);this.game_mc.addChild(o),this.pushObj(o),login_obj["1_3_bottle2Took"]=!0}else if("l1_3_bottle3"==e&&0==login_obj["1_3_bottle3Took"]){var s=this.addObj("l1_3_bottle3",917,494);this.game_mc.addChild(s),this.pushObj(s),login_obj["1_3_bottle3Took"]=!0}else if("l1_3_knob"==e)this.pushObj(this.knob);else if(this.curObj)("i_l1_3_bottle1"==this.curObj.name||"i_l1_3_bottle2"==this.curObj.name||"i_l1_3_bottle3"==this.curObj.name)&&("bottleE1"==e||"bottleE2"==e)&&this.refreshBottle(t,this.curObj);else if("Arrow1"==e){this._gameOver=!0,t.visible=!1;var h=this;return void this.hero.initMove(this.Arrow1,function(){h.removeAllListener(),showGame(2),saveData()})}this.curObj&&this.refreshInvent()},t.prototype.loadInvent=function(){invent_obj=[];for(var t=0;t<login_obj.arInvent.length;t++){var e=login_obj.arInvent[t];if(e){var i=this.addObj(e,0,0);invent_obj.push(i)}}this.refreshInvent()},t.prototype.refreshInvent=function(){var t,e,i=0;for(i=0;i<this.arBgInvent.length;i++){if(e=this.arBgInvent[i],e.empty=!0,invent_obj&&(t=invent_obj[i])){e.empty=!1;var o=t.name,s=o.indexOf("i_");-1==s&&(this.face_mc.removeChild(t),t=this.addObj("i_"+o,0,0),invent_obj[i]=t),t.x=e.x,t.y=e.y,this.face_mc.addChild(t)}e.empty&&1==e.alpha&&createjs.Tween.get(e).to({alpha:0},200),0==e.empty&&0==e.alpha&&createjs.Tween.get(e).to({alpha:1},200)}},t.prototype.removeFromArray=function(t,e,i){var o,s=0;for(s=0;s<t.length;s++)if(o=t[s],o.name==e){i&&this.face_mc.removeChild(o),t.splice(s,1);break}},t.prototype.turnHandler=function(t){return this._gameOver?void t.remove():void 0},t.prototype.checkInvent=function(t){for(var e=t.stageX,i=t.stageY,o=null,s=0;s<invent_obj.length;s++){var h=invent_obj[s];if(hit_test_rec(h,h.w,h.h,e,i)){o=h;break}}return o},t.prototype.checkButtons=function(t){for(var e=t.stageX,i=t.stageY,o=0;o<this.arButtons.length;o++){var s=this.arButtons[o];hit_test_rec(s,s.w,s.h,e,i)?s.visible&&0==s._selected&&(s._selected=!0,s.scaleX=1.2*scaleGraphics,s.scaleY=1.2*scaleGraphics):s._selected&&(s.scaleX=scaleGraphics,s.scaleY=scaleGraphics,s._selected=!1)}},t.prototype.touchHandler=function(t){if(this._gameOver)return void t.remove();var e,i,o=t.type,s=t.stageX,h=t.stageY,r=0;if("mousedown"==o)this.curObj=this.checkInvent(t),null==this.curObj&&this.checkButtons(t);else if("pressmove"==o)this.checkButtons(t),this.curObj?(this.curObj.x=s,this.curObj.y=h):this.checkButtons(t);else if("pressup"==o){for(i=getDD(this.hero.x,this.hero.y,s,h),this.Hand&&1!=login_obj.tutor_1&&(login_obj.tutor_1=!0,createjs.Tween.get(this.Hand).to({x:480*scaleGraphics,y:320*scaleGraphics},1e3)),i<hitHero*scaleGraphics?this.hero.say?(this.hero.hideText(),this.textHero.hideText()):(this.hero.showText(),this.textHero.showText()):(this.hero.hideText(),this.textHero.hideText(),this.stars&&this.stars.removeAll()),r=0;r<this.arItems.length;r++)if(e=this.arItems[r],hit_test_rec(e,e.w,e.h,s,h)&&e.visible)return void this.clickObj(e);this.curObj&&this.refreshInvent()}},t.prototype.removeAllListener=function(){login_obj["1_3_bottle1Took"]=!1,login_obj["1_3_bottle2Took"]=!1,login_obj["1_3_bottle3Took"]=!1;for(var t=0;t<invent_obj.length;t++){var e=invent_obj[t],i=e.name;("i_l1_3_bottle1"==i||"i_l1_3_bottle2"==i||"i_l1_3_bottle3"==i)&&this.face_mc.removeChild(e)}this.removeFromArray(invent_obj,"i_l1_3_bottle1"),this.removeFromArray(invent_obj,"i_l1_3_bottle2"),this.removeFromArray(invent_obj,"i_l1_3_bottle3"),this.refreshInvent(),this.hero&&this.hero.removeAllListener(),this.itemPuzzle&&this.itemPuzzle.removeAllListener(),this._resultGame=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation3=t}();