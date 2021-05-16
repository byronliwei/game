!function(){var t=function(){this.initialize(),this.init()};t.prototype=new createjs.Container,t.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,login_obj.location=2,this.bgDay=new ItemAnima("location1_2_daynight"),this.bgDay.scaleX=scaleGraphics,this.bgDay.scaleY=scaleGraphics,this.bgDay.x=350*scaleGraphics,this.bgDay.y=220*scaleGraphics,this.bgDay.sprite.gotoAndStop(login_obj["1_night"]?0:1),this.addChild(this.bgDay);var t=preload.getResult("location1_2");this.bgGame=new createjs.Bitmap(t),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),this.addChild(this.game_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},t.prototype.loadLevel=function(){var t=new ItemAnima("animFire");if(t.scaleX=scaleGraphics,t.scaleY=scaleGraphics,t.x=905*scaleGraphics,t.y=125*scaleGraphics,t.sprite.gotoAndPlay("one"),this.game_mc.addChild(t),login_obj["1_night"]||(this.tfHelp=this.addObj("l1_2_text",240,100),this.game_mc.addChild(this.tfHelp)),login_obj.puzzle_1||(this.itemPuzzle=new ItemPuzzle(1,655,60,this),this.face_mc.addChild(this.itemPuzzle)),this.Arrow1=this.addObj("Strelka2",930,450),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),this.Arrow2=this.addObj("Strelka1",740,100),this.Arrow2.name="Arrow2",this.Arrow2._selected=!1,this.game_mc.addChild(this.Arrow2),this.Arrow3=this.addObj("Strelka7",100,500),this.Arrow3.name="Arrow3",this.Arrow3._selected=!1,this.game_mc.addChild(this.Arrow3),login_obj["1_2_stoolTook"]||(this.stool=this.addObj("l1_2_stool",180,650),this.game_mc.addChild(this.stool),this.arItems.push(this.stool)),login_obj["1_2_stoolPut"]){var e=this.addObj("l1_2_stool",740,440);this.game_mc.addChild(e)}else this.Arrow2.visible=!1,this.stoolPut=new createjs.Container,this.stoolPut.name="stoolPut",this.stoolPut.scaleX=scaleGraphics,this.stoolPut.scaleY=scaleGraphics,this.stoolPut.x=740*scaleGraphics,this.stoolPut.y=440*scaleGraphics,this.stoolPut.w=97*scaleGraphics,this.stoolPut.h=88*scaleGraphics,this.game_mc.addChild(this.stoolPut),this.arItems.push(this.stoolPut);this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),this.arItems.push(this.Arrow2),this.arButtons.push(this.Arrow2),this.arItems.push(this.Arrow3),this.arButtons.push(this.Arrow3),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),4==login_obj.prevLoc?(this.hero.scaleX=1*scaleGraphics,this.hero.x=200*scaleGraphics,this.hero.y=480*scaleGraphics):(this.hero.scaleX=-1*scaleGraphics,this.hero.x=800*scaleGraphics,this.hero.y=480*scaleGraphics),this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.y=this.hero.y-100*scaleGraphics,this.hero.x<300*scaleGraphics?(this.textHero.oblachko.scaleX=-1,this.textHero.x=this.hero.x+200*scaleGraphics):this.textHero.x=this.hero.x-200*scaleGraphics,this.game_mc.addChild(this.textHero),login_obj.l1_8_gateOpen||login_obj["1_night"]||(this.hero.showText(),this.textHero.showText("emergence_1_2")),this.createCells(),this.loadInvent()},t.prototype.createCells=function(){var t,e=0;for(e=0;8>e;e++){var t=this.addObj("Cell",944-120*e,688);t.alpha=0,t.empty=!0,this.cells_mc.addChild(t),this.arBgInvent.push(t)}},t.prototype.addObj=function(t,e,s,i,h){i||(i=1),h||(h=1);var r=new createjs.Container,a=preload.getResult(t),o=new createjs.Bitmap(a);return o.x=-(o.image.width/2),o.y=-(o.image.height/2),r.addChild(o),r.scaleX=scaleGraphics*i,r.scaleY=scaleGraphics*h,r.x=e*scaleGraphics,r.y=s*scaleGraphics,r.w=o.image.width*scaleGraphics,r.h=o.image.height*scaleGraphics,r.name=t,r.w<50&&(r.w=50),r.h<50&&(r.h=50),r},t.prototype.pushObj=function(t){if(t){var e,s=0;for(s=0;s<this.arBgInvent.length&&(e=this.arBgInvent[s],!e.empty);s++);var i=this;e&&(createjs.Tween.get(e).to({alpha:1},200),createjs.Tween.get(t).to({x:e.x,y:e.y},300).call(function(){"l1_2_stool"==t.name&&(com.funtomic.GameOps.reportEvent("item_found",{story_id:1,location_id:2,item_id:t.name,item_name:"Stool"}),invent_obj.push(t),i.removeFromArray(i.arItems,t.name),i.face_mc.addChild(t),login_obj["1_2_stoolTook"]=!0,i.refreshInvent())}))}},t.prototype.clickObj=function(t){var e=t.name,s=this;if(this.curObj)"stoolPut"==e&&"i_l1_2_stool"==this.curObj.name&&(com.funtomic.GameOps.reportEvent("item_used",{story_id:1,location_id:2,item_id:"l1_2_stool",item_name:"Stool"}),this.removeFromArray(this.arItems,e),this.removeFromArray(invent_obj,this.curObj.name),this.face_mc.removeChild(this.curObj),this.curObj=this.addObj("l1_2_stool",0,0),this.curObj.x=t.x,this.curObj.y=t.y,this.game_mc.addChild(this.curObj),this.game_mc.addChild(this.hero),this.game_mc.addChild(this.textHero),this.refreshInvent(),login_obj["1_2_stoolPut"]=!0,this.Arrow2.visible=!0,saveData());else if("l1_2_stool"==e)this.pushObj(t);else{if("Arrow1"==e)return this._gameOver=!0,t.visible=!1,void this.hero.initMove(t,function(){s.removeAllListener(),showGame(1),saveData()});if("Arrow2"==e){var i={x:t.x,y:480*scaleGraphics};this._gameOver=!0,t.visible=!1;var s=this;return void this.hero.initMove(i,function(){s.removeAllListener(),showGame(3),saveData()})}if("Arrow3"==e)return this._gameOver=!0,t.visible=!1,void this.hero.initMove(t,function(){s.removeAllListener(),showGame(4),saveData()})}this.curObj&&this.refreshInvent()},t.prototype.loadInvent=function(){invent_obj=[];for(var t=0;t<login_obj.arInvent.length;t++){var e=login_obj.arInvent[t];if(e){var s=this.addObj(e,0,0);invent_obj.push(s)}}this.refreshInvent()},t.prototype.refreshInvent=function(){var t,e,s=0;for(s=0;s<this.arBgInvent.length;s++){if(e=this.arBgInvent[s],e.empty=!0,invent_obj&&(t=invent_obj[s])){e.empty=!1;var i=t.name,h=i.indexOf("i_");-1==h&&(this.face_mc.removeChild(t),t=this.addObj("i_"+i,0,0),invent_obj[s]=t),t.x=e.x,t.y=e.y,this.face_mc.addChild(t)}e.empty&&1==e.alpha&&createjs.Tween.get(e).to({alpha:0},200),0==e.empty&&0==e.alpha&&createjs.Tween.get(e).to({alpha:1},200)}},t.prototype.removeFromArray=function(t,e,s){var i,h=0;for(h=0;h<t.length;h++)if(i=t[h],i.name==e){s&&this.face_mc.removeChild(i),t.splice(h,1);break}},t.prototype.turnHandler=function(t){return this._gameOver?void t.remove():void 0},t.prototype.checkInvent=function(t){for(var e=t.stageX,s=t.stageY,i=null,h=0;h<invent_obj.length;h++){var r=invent_obj[h];if(hit_test_rec(r,r.w,r.h,e,s)){i=r;break}}return i},t.prototype.checkButtons=function(t){for(var e=t.stageX,s=t.stageY,i=0;i<this.arButtons.length;i++){var h=this.arButtons[i];hit_test_rec(h,h.w,h.h,e,s)?h.visible&&0==h._selected&&(h._selected=!0,h.scaleX=1.2*scaleGraphics,h.scaleY=1.2*scaleGraphics):h._selected&&(h.scaleX=scaleGraphics,h.scaleY=scaleGraphics,h._selected=!1)}},t.prototype.touchHandler=function(t){if(this._gameOver)return void t.remove();var e,s,i=t.type,h=t.stageX,r=t.stageY,a=0;if("mousedown"==i)this.curObj=this.checkInvent(t),null==this.curObj&&this.checkButtons(t);else if("pressmove"==i)this.checkButtons(t),this.curObj?(this.curObj.x=h,this.curObj.y=r):this.checkButtons(t);else if("pressup"==i){for(s=getDD(this.hero.x,this.hero.y,h,r),this.Hand&&1!=login_obj.tutor_1&&(login_obj.tutor_1=!0,createjs.Tween.get(this.Hand).to({x:480*scaleGraphics,y:320*scaleGraphics},1e3)),s<hitHero*scaleGraphics?this.hero.say?(this.hero.hideText(),this.textHero.hideText()):(this.hero.showText(),this.textHero.showText()):(this.hero.hideText(),this.textHero.hideText(),this.stars&&this.stars.removeAll()),a=0;a<this.arItems.length;a++)if(e=this.arItems[a],hit_test_rec(e,e.w,e.h,h,r)&&e.visible)return void this.clickObj(e);this.curObj&&this.refreshInvent()}},t.prototype.removeAllListener=function(){this.hero&&this.hero.removeAllListener(),this.itemPuzzle&&this.itemPuzzle.removeAllListener(),this._resultGame=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation2=t}();