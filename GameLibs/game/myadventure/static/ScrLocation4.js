!function(){var e=function(){this.initialize(),this.init()};e.prototype=new createjs.Container,e.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,login_obj.location=4,this.bgDay=new ItemAnima("location1_4_daynight"),this.bgDay.scaleX=scaleGraphics,this.bgDay.scaleY=scaleGraphics,this.bgDay.x=660*scaleGraphics,this.bgDay.y=240*scaleGraphics,this.bgDay.sprite.gotoAndStop(login_obj["1_night"]?1:0),this.addChild(this.bgDay);var e=preload.getResult("location1_4");this.bgGame=new createjs.Bitmap(e),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),this.addChild(this.game_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},e.prototype.loadLevel=function(){var e=new ItemAnima("animFire");e.scaleX=scaleGraphics,e.scaleY=scaleGraphics,e.x=110*scaleGraphics,e.y=120*scaleGraphics,e.sprite.gotoAndPlay("one"),this.game_mc.addChild(e),this.tfGuard=this.addObj("l1_4_text",440,250),this.body=this.addObj("l1_4_body",280,305),this.game_mc.addChild(this.body),this.arItems.push(this.body),this.head=new ItemAnima("l1_4_head"),this.head.scaleX=scaleGraphics,this.head.scaleY=scaleGraphics,this.head.x=280*scaleGraphics,this.head.y=310*scaleGraphics,login_obj["1_night"]?(this.tfGuard.visible=!1,this.head.sprite.gotoAndStop(1),createjs.Tween.get(this.head,{loop:!0}).to({y:314*scaleGraphics},1e3).to({y:310*scaleGraphics},1e3)):(this.head.sprite.gotoAndStop(0),createjs.Tween.get(this.head,{loop:!0}).to({x:285*scaleGraphics,rotation:5},600).to({x:280*scaleGraphics,rotation:0},600).wait(1e3)),this.game_mc.addChild(this.head),this.game_mc.addChild(this.tfGuard),this.Arrow1=this.addObj("Strelka3",950,450),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),this.Arrow2=this.addObj("Strelka8",100,450),this.Arrow2.name="Arrow2",this.Arrow2._selected=!1,this.game_mc.addChild(this.Arrow2),login_obj.puzzle_3||(this.itemPuzzle=new ItemPuzzle(3,260,150,this),this.face_mc.addChild(this.itemPuzzle)),login_obj["1_4_doorOpen"]||(this.Arrow2.visible=!1,this.door=this.addObj("l1_4_door",95,395),this.game_mc.addChild(this.door),this.arItems.push(this.door)),this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),this.arItems.push(this.Arrow2),this.arButtons.push(this.Arrow2),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleX=-1*scaleGraphics,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),7==login_obj.prevLoc?(this.hero.scaleX=1*scaleGraphics,this.hero.x=200*scaleGraphics,this.hero.y=450*scaleGraphics):(this.hero.scaleX=-1*scaleGraphics,this.hero.x=800*scaleGraphics,this.hero.y=450*scaleGraphics),this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.y=this.hero.y-100*scaleGraphics,this.hero.x<300*scaleGraphics?(this.textHero.oblachko.scaleX=-1,this.textHero.x=this.hero.x+200*scaleGraphics):this.textHero.x=this.hero.x-200*scaleGraphics,this.game_mc.addChild(this.textHero),login_obj["1_night"]||(this.hero.showText(),this.textHero.showText("emergence_1_4")),this.createCells(),this.loadInvent()},e.prototype.createCells=function(){var e,t=0;for(t=0;8>t;t++){var e=this.addObj("Cell",944-120*t,688);e.alpha=0,e.empty=!0,this.cells_mc.addChild(e),this.arBgInvent.push(e)}},e.prototype.addObj=function(e,t,s,i,h){i||(i=1),h||(h=1);var r=new createjs.Container,a=preload.getResult(e),o=new createjs.Bitmap(a);return o.x=-(o.image.width/2),o.y=-(o.image.height/2),r.addChild(o),r.scaleX=scaleGraphics*i,r.scaleY=scaleGraphics*h,r.x=t*scaleGraphics,r.y=s*scaleGraphics,r.w=o.image.width*scaleGraphics,r.h=o.image.height*scaleGraphics,r.name=e,r.w<50&&(r.w=50),r.h<50&&(r.h=50),r},e.prototype.pushObj=function(e){if(e){var t,s=0;for(s=0;s<this.arBgInvent.length&&(t=this.arBgInvent[s],!t.empty);s++);t&&(createjs.Tween.get(t).to({alpha:1},200),createjs.Tween.get(e).to({x:t.x,y:t.y},300).call(function(){}))}},e.prototype.clickObj=function(e){var t=e.name;if(this.curObj)"l1_4_door"==t&&"i_l1_5_key"==this.curObj.name&&(com.funtomic.GameOps.reportEvent("item_used",{story_id:lvlNumber,location_id:locNumber,item_id:"l1_5_key",item_name:"Blue key"}),createjs.Tween.get(this.door).to({alpha:0},300),this.removeFromArray(this.arItems,t),this.removeFromArray(invent_obj,"i_l1_5_key"),this.face_mc.removeChild(this.curObj),this.refreshInvent(),login_obj["1_4_doorOpen"]=!0,this.Arrow2.visible=!0,saveData());else if("l1_4_door"==t)this.textHero.showText("location_1_4_door");else if("l1_4_body"==t)login_obj["1_night"]||this.textHero.showText("location_1_4_guard");else{if("Arrow1"==t){this._gameOver=!0,e.visible=!1;var s=this;return void this.hero.initMove(e,function(){s.removeAllListener(),showGame(2),saveData()})}if("Arrow2"==t&&login_obj["1_night"]){this._gameOver=!0,e.visible=!1;var s=this;return void this.hero.initMove(e,function(){s.removeAllListener(),showGame(7),saveData()})}}this.curObj&&this.refreshInvent()},e.prototype.loadInvent=function(){invent_obj=[];for(var e=0;e<login_obj.arInvent.length;e++){var t=login_obj.arInvent[e];if(t){var s=this.addObj(t,0,0);invent_obj.push(s)}}this.refreshInvent()},e.prototype.refreshInvent=function(){var e,t,s=0;for(s=0;s<this.arBgInvent.length;s++){if(t=this.arBgInvent[s],t.empty=!0,invent_obj&&(e=invent_obj[s])){t.empty=!1;var i=e.name,h=i.indexOf("i_");-1==h&&(this.face_mc.removeChild(e),e=this.addObj("i_"+i,0,0),invent_obj[s]=e),e.x=t.x,e.y=t.y,this.face_mc.addChild(e)}t.empty&&1==t.alpha&&createjs.Tween.get(t).to({alpha:0},200),0==t.empty&&0==t.alpha&&createjs.Tween.get(t).to({alpha:1},200)}},e.prototype.removeFromArray=function(e,t,s){var i,h=0;for(h=0;h<e.length;h++)if(i=e[h],i.name==t){s&&this.face_mc.removeChild(i),e.splice(h,1);break}},e.prototype.turnHandler=function(e){return this._gameOver?void e.remove():void 0},e.prototype.checkInvent=function(e){for(var t=e.stageX,s=e.stageY,i=null,h=0;h<invent_obj.length;h++){var r=invent_obj[h];if(hit_test_rec(r,r.w,r.h,t,s)){i=r;break}}return i},e.prototype.checkButtons=function(e){for(var t=e.stageX,s=e.stageY,i=0;i<this.arButtons.length;i++){var h=this.arButtons[i];hit_test_rec(h,h.w,h.h,t,s)?h.visible&&0==h._selected&&(h._selected=!0,h.scaleX=1.2*scaleGraphics,h.scaleY=1.2*scaleGraphics):h._selected&&(h.scaleX=scaleGraphics,h.scaleY=scaleGraphics,h._selected=!1)}},e.prototype.touchHandler=function(e){if(this._gameOver)return void e.remove();var t,s,i=e.type,h=e.stageX,r=e.stageY,a=0;if("mousedown"==i)this.curObj=this.checkInvent(e),null==this.curObj&&this.checkButtons(e);else if("pressmove"==i)this.checkButtons(e),this.curObj?(this.curObj.x=h,this.curObj.y=r):this.checkButtons(e);else if("pressup"==i){for(s=getDD(this.hero.x,this.hero.y,h,r),s<hitHero*scaleGraphics?this.hero.say?(this.hero.hideText(),this.textHero.hideText()):(this.hero.showText(),this.textHero.showText()):(this.hero.hideText(),this.textHero.hideText(),this.stars&&this.stars.removeAll()),a=0;a<this.arItems.length;a++)if(t=this.arItems[a],hit_test_rec(t,t.w,t.h,h,r)&&t.visible)return void this.clickObj(t);this.curObj&&this.refreshInvent()}},e.prototype.removeAllListener=function(){this.hero&&this.hero.removeAllListener(),this.itemPuzzle&&this.itemPuzzle.removeAllListener(),this._resultGame=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation4=e}();