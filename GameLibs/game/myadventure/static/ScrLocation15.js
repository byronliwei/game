!function(){var e=function(){this.initialize(),this.init()};e.prototype=new createjs.Container,e.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.cells_mc=new createjs.Container,this._gameOver,this.arButtons=[],this.arItems=[],this.arBgInvent=[],this.levelObj={},this.curObj,login_obj.location=15;var e=preload.getResult("location2_7");this.bgGame=new createjs.Bitmap(e),this.bgGame.scaleX=scaleGraphics,this.bgGame.scaleY=scaleGraphics,this.addChild(this.bgGame),this.addChild(this.game_mc),this.addChild(this.face_mc),this.face_mc.addChild(this.cells_mc),this.loadLevel(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler)},e.prototype.loadLevel=function(){if(this.Arrow1=this.addObj("Strelka3",850,500),this.Arrow1.name="Arrow1",this.Arrow1._selected=!1,this.game_mc.addChild(this.Arrow1),login_obj.l2_7_bananaTook);else{var e=this.addObj("l2_4_banana",300,40);this.game_mc.addChild(e),this.arItems.push(e)}if(login_obj.l2_7_ropeTook);else{var t=this.addObj("l2_7_rope",200,110);this.game_mc.addChild(t),this.arItems.push(t)}var s=this.addObj("l2_7_bamboo",210,70);if(this.game_mc.addChild(s),login_obj.puzzle_8||(this.itemPuzzle=new ItemPuzzle(8,680,330,this),this.face_mc.addChild(this.itemPuzzle)),this.arItems.push(this.Arrow1),this.arButtons.push(this.Arrow1),this.hero=new ItemHero,this.hero._parent=this,this.hero.scaleY=scaleGraphics,this.game_mc.addChild(this.hero),16==login_obj.prevLoc)this.hero.scaleX=-1*scaleGraphics,this.hero.x=650*scaleGraphics,this.hero.y=450*scaleGraphics,this.hero.sprite.stop();else{this.hero.setAct("heroRoll"),this.hero.sprite.play(),this.hero.scaleX=1*scaleGraphics,this.hero.x=50*scaleGraphics,this.hero.y=200*scaleGraphics;var i=this;createjs.Tween.get(this.hero).to({x:300*scaleGraphics,y:400*scaleGraphics},1500).wait(300).call(function(){i.hero.setAct("heroMove"),i.hero.sprite.stop()})}this.textHero=new ItemText,this.textHero._parent=this,this.textHero.scaleX=scaleGraphics,this.textHero.scaleY=scaleGraphics,this.textHero.oblachko.scaleX=-1,this.textHero.x=480*scaleGraphics,this.textHero.y=290*scaleGraphics,this.game_mc.addChild(this.textHero),14==login_obj.prevLoc&&(this.hero.showText(),this.textHero.showText("emergence_2_7")),this.createCells(),this.loadInvent()},e.prototype.createCells=function(){var e,t=0;for(t=0;8>t;t++){var e=this.addObj("Cell",944-120*t,688);e.alpha=0,e.empty=!0,this.cells_mc.addChild(e),this.arBgInvent.push(e)}},e.prototype.addObj=function(e,t,s,i,h){i||(i=1),h||(h=1);var r=new createjs.Container,a=preload.getResult(e),o=new createjs.Bitmap(a);return o.x=-(o.image.width/2),o.y=-(o.image.height/2),r.addChild(o),r.scaleX=scaleGraphics*i,r.scaleY=scaleGraphics*h,r.x=t*scaleGraphics,r.y=s*scaleGraphics,r.w=o.image.width*r.scaleX,r.h=o.image.height*r.scaleY,r.name=e,r.w<50&&(r.w=50),r.h<50&&(r.h=50),r},e.prototype.pushObj=function(e){if(e){var t,s=0;for(s=0;s<this.arBgInvent.length&&(t=this.arBgInvent[s],!t.empty);s++);var i=this;t&&(createjs.Tween.get(t).to({alpha:1},200),createjs.Tween.get(e).to({x:t.x,y:t.y},300).call(function(){"l2_4_banana"==e.name?(login_obj.l2_7_bananaTook=!0,reportFound(e.name,"Banana")):"l2_7_rope"==e.name&&(login_obj.l2_7_ropeTook=!0,reportFound(e.name,"Rope")),invent_obj2.push(e),i.removeFromArray(i.arItems,e.name),i.face_mc.addChild(e),i.refreshInvent()}))}},e.prototype.clickObj=function(e){var t=e.name,s=this;if(this.curObj);else if("l2_4_banana"==t)this.pushObj(e);else if("l2_7_rope"==t)this.pushObj(e);else if("Arrow1"==t)return this._gameOver=!0,e.visible=!1,void this.hero.initMove(e,function(){s.removeAllListener(),showGame(16),saveData()});this.curObj&&this.refreshInvent()},e.prototype.loadInvent=function(){invent_obj2=[];for(var e=0;e<login_obj.arInvent2.length;e++){var t=login_obj.arInvent2[e];if(t){var s=this.addObj(t,0,0);invent_obj2.push(s)}}this.refreshInvent()},e.prototype.refreshInvent=function(){var e,t,s=0;for(s=0;s<this.arBgInvent.length;s++){if(t=this.arBgInvent[s],t.empty=!0,invent_obj2&&(e=invent_obj2[s])){t.empty=!1;var i=e.name,h=i.indexOf("i_");-1==h&&(this.face_mc.removeChild(e),e=this.addObj("i_"+i,0,0),invent_obj2[s]=e),e.x=t.x,e.y=t.y,this.face_mc.addChild(e)}t.empty&&1==t.alpha&&createjs.Tween.get(t).to({alpha:0},200),0==t.empty&&0==t.alpha&&createjs.Tween.get(t).to({alpha:1},200)}saveData()},e.prototype.removeFromArray=function(e,t,s){var i,h=0;for(h=0;h<e.length;h++)if(i=e[h],i.name==t){s&&this.face_mc.removeChild(i),e.splice(h,1);break}},e.prototype.turnHandler=function(e){return this._gameOver?void e.remove():void 0},e.prototype.checkInvent=function(e){for(var t=e.stageX,s=e.stageY,i=null,h=0;h<invent_obj2.length;h++){var r=invent_obj2[h];if(hit_test_rec(r,r.w,r.h,t,s)){i=r;break}}return i},e.prototype.checkButtons=function(e){for(var t=e.stageX,s=e.stageY,i=0;i<this.arButtons.length;i++){var h=this.arButtons[i];hit_test_rec(h,h.w,h.h,t,s)?h.visible&&0==h._selected&&(h._selected=!0,h.scaleX=1.2*scaleGraphics,h.scaleY=1.2*scaleGraphics):h._selected&&(h.scaleX=scaleGraphics,h.scaleY=scaleGraphics,h._selected=!1)}},e.prototype.touchHandler=function(e){if(this._gameOver)return void e.remove();var t,s,i=e.type,h=e.stageX,r=e.stageY,a=0;if("mousedown"==i)this.curObj=this.checkInvent(e),null==this.curObj&&this.checkButtons(e);else if("pressmove"==i)this.checkButtons(e),this.curObj?(this.curObj.x=h,this.curObj.y=r):this.checkButtons(e);else if("pressup"==i){for(s=getDD(this.hero.x,this.hero.y,h,r),s<hitHero*scaleGraphics?this.hero.say?(this.hero.hideText(),this.textHero.hideText()):(this.hero.showText(),this.textHero.showText()):(this.hero.hideText(),this.textHero.hideText()),a=0;a<this.arItems.length;a++)if(t=this.arItems[a],hit_test_rec(t,t.w,t.h,h,r)&&t.visible)return void this.clickObj(t);this.curObj&&this.refreshInvent()}},e.prototype.removeAllListener=function(){this.hero&&this.hero.removeAllListener(),this._resultGame=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation15=e}();