!function(){var t=function(){this.initialize(),this.init()};t.prototype=new createjs.Container,t.prototype.init=function(){this.face_mc=new createjs.Container,this.game_mc=new createjs.Container,this.back_mc=new createjs.Container,this.fon_mc=new createjs.Container,this.clouds_mc=new createjs.Container,this.enemies=new createjs.Container,this.fires_mc=new createjs.Container,this.starGroup=new createjs.Container,this.moonGroup=new createjs.Container,this.game_mc.addChild(this.back_mc),this.game_mc.addChild(this.starGroup),this.game_mc.addChild(this.clouds_mc),this.game_mc.addChild(this.moonGroup),this.game_mc.addChild(this.fires_mc),this.game_mc.addChild(this.enemies),this.addChild(this.fon_mc),this.addChild(this.game_mc),this.addChild(this.face_mc),this._gameOver,this.arButtons=[],this.arItems=[],this.arHeart=[],this._arHolderEnemy=[],this._arHolderFire=[],this._arHolderCloud=[],this._arHolderStar=[],this.startTime=getTimer(),this.timeHit=0,this.vAlpha=1,login_obj.location=28,com.funtomic.GameOps.reportEvent("minigame_started",{story_id:lvlNumber,location_id:locNumber,minigame_id:6,minigame_name:"Fly to moon"});var t=preload.getResult("location3_8");this.bgSpace=new createjs.Bitmap(t),this.bgSpace.scaleX=scaleGraphics,this.bgSpace.scaleY=scaleGraphics,this.fon_mc.addChild(this.bgSpace),this.bgDay=new createjs.Shape,this.bgDay.graphics.beginFill("#C5E8EC").drawRect(0,0,_W,_H),this.fon_mc.addChild(this.bgDay),this.loadLevel(),this.initData(),this.touchHandler=this.touchHandler.bind(this),this.addEventListener("mousedown",this.touchHandler),this.addEventListener("pressmove",this.touchHandler),this.addEventListener("pressup",this.touchHandler),createjs.Ticker.on("tick",this.turnHandler,this),createjs.Ticker.setInterval(25),createjs.Ticker.setFPS(40)},t.prototype.loadLevel=function(){this.stepGround=1040,this.gameGround=this.addObj("earth",512,_HO-217),this.gameGroundL=this.addObj("earth",512-this.stepGround,_HO-217),this.gameGroundR=this.addObj("earth",512+this.stepGround,_HO-217),this.back_mc.addChild(this.gameGroundL),this.back_mc.addChild(this.gameGround),this.back_mc.addChild(this.gameGroundR),this.moon=this.addObj("moon",512,-350),this.fon_mc.addChild(this.moon);for(var t=0;3>t;t++){var i=this.addObj("heartEmptyR",67*t+40,50);this.face_mc.addChild(i);var e=this.addObj("heartFullR",67*t+40,50);this.face_mc.addChild(e),this.arHeart.push(e)}this.wayRun=this.addObj("wayFly",_WO-40,_HO/2),this.face_mc.addChild(this.wayRun),this.arrowRed=this.addObj("arrowGreen",-10,0),this.arrowRed.y=this.wayRun.h/2,this.wayRun.addChild(this.arrowRed),this.timeWay=0,this.wRun=this.wayRun.h/scaleGraphics,this.rocket=this.addObj("rocket",_WO/2,_HO-110),this.game_mc.addChild(this.rocket),this.lineGround=new createjs.Shape,this.lineGround.graphics.beginFill("#ff0000").drawRect(0,0,_W,20*scaleGraphics),options_debug?this.lineGround.alpha=.3:this.lineGround.visible=!1,this.lineGround.x=0,this.lineGround.y=_H-40*scaleGraphics,this.back_mc.addChild(this.lineGround)},t.prototype.initData=function(){this._dead=!1,this.finish=!1,this._gameOver=!1,this.cam_lock=!1,this.rocketW=80,this.rocketH=140,this.gameState=0,this.timeStart=0,this.math_torad=Math.PI/180,this.enemiesNextDist=100,this.enemiesNextDist_max=100,this.gravitation=6*_H/1e3,this.rocketImpulse=3*-this.gravitation,this.rocketImpulseMax=this.rocketImpulse,this.vx=0,this.vy=0,this.cam_x=0,this.cam_y=0,this.reloadEnemyMax=500,this.reloadEnemy=this.reloadEnemyMax,this.reloadCloudMax=1500,this.reloadCloud=this.reloadCloudMax,this.reloadStarMax=300,this.reloadStar=this.reloadStarMax,this.distance=0,this.distance_old=0,this.distanceChange=12e3,this.distanceAll=2e4,this.needCloud=0,this.needStar=0,this.rocketTarA=0,this.rocketTarABol=!1,this.game_dx=0,this.game_dy=0,this.game_mc.y_old=this.game_mc.y,this.game_mc.x_old=this.game_mc.x,this.game_mc.y_old=this.game_mc.y},t.prototype.addObj=function(t,i,e,a,s){a||(a=1),s||(s=1);var h=new createjs.Container,r=preload.getResult(t),o=new createjs.Bitmap(r);return o.x=-(o.image.width/2),o.y=-(o.image.height/2),h.addChild(o),h.scaleX=scaleGraphics*a,h.scaleY=scaleGraphics*s,h.x=i*scaleGraphics,h.y=e*scaleGraphics,h.w=o.image.width*h.scaleX,h.h=o.image.height*h.scaleY,h.name=t,h.w<50&&(h.w=50),h.h<50&&(h.h=50),h},t.prototype.removeFromArray=function(t,i,e){var a,s=0;for(s=0;s<t.length;s++)if(a=t[s],a.name==i){e&&this.face_mc.removeChild(a),t.splice(s,1);break}},t.prototype.resetTimer=function(){this.startTime=getTimer()},t.prototype.startRocket=function(){this.startTime=getTimer(),this.enemiesNextDist=this.enemiesNextDist_max},t.prototype.addStar=function(t,i){for(var e,a=!0,s=0;s<this._arHolderStar.length;s++){e=this._arHolderStar[s],e.visible=!0,this._arHolderStar.splice(s,1),a=!1;break}var h=.5*Math.random()+.5;a&&(e=this.addObj("star",t/scaleGraphics,i/scaleGraphics,h,h),this.starGroup.addChild(e)),e.fx=0,e.fy=0,e.dead=!1},t.prototype.addCloud=function(t,i){for(var e,a=Math.ceil(2*Math.random()),s=.5*Math.random()+.5,h=!0,r=0;r<this._arHolderCloud.length;r++)if(e=this._arHolderCloud[r],e.scin_id==a){e.visible=!0,this._arHolderCloud.splice(r,1),h=!1;break}h&&(e=this.addObj("cloud"+a,0,0,s,s),e.scin_id=a,this.clouds_mc.addChild(e));var o,d;Math.abs(this.game_dx)>10?(d=this.rocket.y-Math.random()*_H,o=1==this.vx?this.rocket.x+_W-e.h/2:this.rocket.x-_W-e.w/2,e.x=o,e.y=d):(e.x=t,e.y=i),e.fx=0,e.fy=0,e.dead=!1},t.prototype.addFireRocket=function(){var t=(this.rocket.rotation+90)*this.math_torad,i=Math.cos(t),e=Math.sin(t),a=(this.rocketH/2-20)*scaleGraphics;this.addFire(this.rocket.x+i*a,this.rocket.y+e*a,i/2,e/2,scaleGraphics)},t.prototype.addFire=function(t,i,e,a,s){if(0==this._dead){for(var h,r=!0,o=0;o<this._arHolderFire.length;o++){h=this._arHolderFire[o],h.visible=!0,this._arHolderFire.splice(o,1),r=!1;break}if(r){h=new createjs.Container,this.fires_mc.addChild(h);var d=preload.getResult("fire"),n=new createjs.Bitmap(d);n.x=-25,n.y=-25,h.addChild(n)}h.scaleX=s,h.scaleY=s,h.x=t+2*(Math.random()-.5),h.y=i+2*(Math.random()-.5),h.alpha=1,h.fx=e,h.fy=a}},t.prototype.changeFuel=function(){if(!(this._dead||this.finish||options_pause)){var t=this.gravitation,i=this.rocket.rotation+90,e=Math.cos(i*this.math_torad),a=Math.sin(i*this.math_torad);this.rocketImpulse>this.rocketImpulseMax?this.rocketImpulse-=.02:this.rocketImpulse=this.rocketImpulseMax,this.rocket.y+=t,this.rocket.x+=e*this.rocketImpulse,this.rocket.y+=a*this.rocketImpulse,this.addFireRocket()}},t.prototype.dAngleDegree=function(t,i){var e=t-i;return e>180?e=-360+e:-180>e&&(e=360+e),e},t.prototype.createMoon=function(){this.moon.y<this.moon.h/2?this.moon.y=this.moon.y+1*scaleGraphics:(this.finish=!0,this.gameOver())},t.prototype.addEnemyType=function(){this.addEnemy(this.distance>=this.distanceChange?2:1)},t.prototype.addEnemy=function(t,e){if(!this._dead){var a,s=!0,h=this.getScin(t);for(i=0;i<this._arHolderEnemy.length;i++)if(a=this._arHolderEnemy[i],a.scin_id==h){a.visible=!0,this._arHolderEnemy.splice(i,1),s=!1;break}var r=this.rocket.x+(-.5+Math.random())*_W,e=this.rocket.y-_H;if(1==t&&(r=this.rocket.x+(-.2+Math.random())*_W),Math.abs(this.game_dx)>10?(e=this.rocket.y-Math.random()*_H,r=1==this.vx?this.rocket.x+_W:this.rocket.x-_W):Math.abs(this.game_dx)>5&&(e=this.rocket.y-_H/2-Math.random()*_H,r=1==this.vx?this.rocket.x+1.5*_W:this.rocket.x-1.5*_W),s&&(a=this.addObj(h,0,0),a.scin_id=h,this.enemies.addChild(a)),a.id=t,a.gx=r,a.gy=e,a.fx=0,a.fy=0,a.dead=!1,a.x=a.gx+this.cam_x,a.y=a.gy+this.cam_y,1==t){var o=new ItemAnima("vent");o.x=-a.w/2-4,o.y=12,o.sprite.gotoAndPlay("one"),a.addChild(o),a.step=(3+Math.floor(3*Math.random()))*scaleGraphics}else 2==t&&(Math.random()>.5?(a.rot=1+2*Math.random(),a.step=(1+Math.floor(3*Math.random()))*scaleGraphics):(a.rot=-(1+2*Math.random()),a.step=-(1+Math.floor(3*Math.random()))*scaleGraphics))}},t.prototype.getScin=function(t){return 2==t?"asteroid"+Math.ceil(6*Math.random()):"plane"+Math.ceil(3*Math.random())},t.prototype.addHolderFire=function(t){t.visible=!1,t.x=150,t.y=50,this._arHolderFire.push(t)},t.prototype.addHolderEnemy=function(t){t.visible=!1,t.dead=!0,t.x=150,t.y=50,this._arHolderEnemy.push(t)},t.prototype.addHolderCloud=function(t){t.visible=!1,t.dead=!0,t.x=150,t.y=50,this._arHolderCloud.push(t)},t.prototype.addHolderStar=function(t){t.visible=!1,t.dead=!0,t.x=150,t.y=50,this._arHolderStar.push(t)},t.prototype.collisionEnemy=function(){if(this.timeHit<1)if(this.arHeart.length>1){var t=this.arHeart.length-1,i=this.arHeart[t];this.face_mc.removeChild(i),this.arHeart.splice(t,1),this.timeHit=2e3}else this.gameOver();this.rocketImpulse=.75*this.rocketImpulseMax,this.rocket.rotation+=9*(Math.random()-.5)},t.prototype.turnHandler=function(t){if(!options_pause){if(this._gameOver)return void t.remove();var i=getTimer()-this.startTime;if(0==this._dead){if(0==this.cam_lock&&(this.game_mc.x=-this.rocket.x+_W/2,this.game_mc.y=Math.max(-this.rocket.y+.75*_H-20*scaleGraphics,0)),0==this.gameState?(this.startRocket(),this.gameState=this.gameState+1):this.gameState>0&&this.changeFuel(),this.rocketTarABol){var e=this.dAngleDegree(this.rocketTarA,this.rocket.rotation),a=10;Math.abs(e)>a&&(e=e/Math.abs(e)*a),this.rocket.rotation=this.rocket.rotation+e/5,Math.abs(this.rocketTarA-this.rocket.rotation)<.5&&(this.rocketTarABol=!1)}this.lineGround.x=this.rocket.x-_W/2;var s=this.gameGroundL.localToGlobal(0,0);s.x<0-this.stepGround*scaleGraphics&&(this.gameGround.x+=this.stepGround*scaleGraphics,this.gameGroundL.x=this.gameGround.x-this.stepGround*scaleGraphics,this.gameGroundR.x=this.gameGround.x+this.stepGround*scaleGraphics),s.x>0&&(this.gameGround.x-=this.stepGround*scaleGraphics,this.gameGroundL.x=this.gameGround.x-Math.floor(this.stepGround*scaleGraphics),this.gameGroundR.x=this.gameGround.x+Math.floor(this.stepGround*scaleGraphics)),this.rocket.y>_H-80*scaleGraphics&&(this._gameOver=!0,this._dead=!0,this.gameOver());for(var h=0;h<this.fires_mc.children.length;h++){var r=this.fires_mc.children[h];r.x=r.x+r.fx,r.y=r.y+r.fy,r.alpha=r.alpha-.02,r.scaleX=.8*r.scaleX,r.scaleY=.8*r.scaleY,r.scaleX<.1&&this.addHolderFire(r)}for(var h=0;h<this.enemies.children.length;h++){var o=this.enemies.children[h];o&&0==o.dead&&(1==o.id?o.x-=o.step:2==o.id&&(o.x-=o.step,o.rotation+=o.rot),hit_test_rec(o,o.w,o.h,this.rocket.x,this.rocket.y)&&this.collisionEnemy(o),o.y>this.rocket.y+o.h+_H&&this.vy<0&&this.addHolderEnemy(o),o.y<this.rocket.y-o.h-_H&&this.vy>0&&this.addHolderEnemy(o))}if(this.timeHit>0)if(this.timeHit-=i,this.timeHit>50){this.rocket.alpha>.9?this.vAlpha=-1:this.rocket.alpha<.1&&(this.vAlpha=1);var d=this.rocket.alpha+.1*this.vAlpha;this.rocket.alpha=Math.min(d,1),this.rocket.alpha=Math.max(d,0)}else this.rocket.alpha=1;if(this.distance<=this.distanceChange){for(var h=0;h<this.clouds_mc.children.length;h++){var n=this.clouds_mc.children[h];0==n.dead&&(n.y>this.rocket.y+n.h+_H&&this.vy<0&&this.addHolderCloud(n),n.y<this.rocket.y-n.h-_H&&this.vy>0&&this.addHolderCloud(n))}this.reloadCloud-=i,this.reloadCloud<0&&(this.reloadCloud=this.reloadCloudMax,this.vy<0?this.addCloud(this.rocket.x+(Math.random()-.5)*_WO,this.rocket.y-_HO-200*Math.random()):this.vy>0&&this.addCloud(this.rocket.x+(Math.random()-.5)*_WO,this.rocket.y+_HO+200*Math.random()))}else{for(var h=0;h<this.starGroup.children.length;h++){var c=this.starGroup.children[h];0==c.dead&&(c.y>this.rocket.y+100*scaleGraphics&&this.vy<0&&this.addHolderStar(c),c.y<this.rocket.y-100*scaleGraphics-c.h-_H&&this.vy>0&&this.addHolderStar(c))}this.reloadStar-=i,this.reloadStar<0&&(this.reloadStar=this.reloadStarMax,this.vy<0?this.addStar(this.rocket.x+(Math.random()-.5)*_WO,this.rocket.y-_HO-200*Math.random()):this.vy>0&&this.addStar(this.rocket.x+(Math.random()-.5)*_WO,this.rocket.y+_HO+200*Math.random()))}if(this.distance_old=this.distance,this.distance=this.lineGround.y-this.rocket.y,this.gameState>0&&(this.reloadEnemy-=i,this.reloadEnemy<0&&(this.reloadEnemy=this.reloadEnemyMax,this.addEnemyType())),this.distance/this.distanceAll<1){if(this.bgDay.alpha>0&&this.distance>this.distanceChange){var d=this.bgDay.alpha-.005;this.bgDay.alpha=Math.max(d,0)}}else this.createMoon();var l=this.distance/this.distanceAll;this.arrowRed.y<this.wRun/2+10&&this.arrowRed.y>-this.wRun/2+10&&(this.arrowRed.y=this.wRun/2-10-l*this.wRun)}this.game_dx=this.game_mc.x-this.game_mc.x_old,this.game_dy=this.game_mc.y-this.game_mc.y_old,this.game_dx<0?this.vx=1:this.game_dx>0&&(this.vx=-1),this.game_dy<0?this.vy=1:this.game_dy&&(this.vy=-1),this.game_mc.x_old=this.game_mc.x,this.game_mc.y_old=this.game_mc.y,this.startTime=getTimer()}},t.prototype.touchHandler=function(t){if(this._gameOver)return void t.remove();if(this.gameState>0){var i=t.stageX-this.rocket.x-this.game_mc.x,e=t.stageY-this.rocket.y-this.game_mc.y;if(this.rocketTarA=180*Math.atan2(e,i)/Math.PI+90,"pressup"==t.type)return void(this.rocketTarABol=!1);this.rocketTarABol=!0}},t.prototype.gameOver=function(){this.removeAllListener(),this.finish?(com.funtomic.GameOps.reportEvent("minigame_ended",{story_id:lvlNumber,location_id:locNumber,minigame_id:6,minigame_name:"Fly to moon"}),showGame(29)):showGame(22)},t.prototype.removeAllListener=function(){this.hero&&this.hero.removeAllListener(),this._gameOver=!0,this.removeEventListener("mousedown",this.touchHandler),this.removeEventListener("pressmove",this.touchHandler),this.removeEventListener("pressup",this.touchHandler)},window.ScrLocation28=t}();