var UI = {
    curBot: 1,
    setCurBot: function() {
        this.curBot = Math.floor(Math.random() * 3) + 1;
        if (this.curBot == 4) this.curBot = 3;
        console.log("this.curBot :" + this.curBot);
    },
    start: function() {
        var self = this;
        var size = cc.director.getVisibleSize();
        this.startLayer = cc.LayerColor.create(cc.color(0, 0, 0, 30), cc.winSize.width, cc.winSize.height);
        this.scene.addChild(this.startLayer);
        var logo = cc.Sprite.create('static/logo.png');
        logo.setAnchorPoint(cc.p(0, 0));
        logo.setScale(size.width * 0.5 / 300);
        logo.setPosition(cc.p(size.width * 0.25, 30));
        this.startLayer.addChild(logo);
        var name = cc.Sprite.create('static/name.png');
        name.setPosition(cc.p(size.width * 0.5, size.height * 0.65));
        name.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, cc.p(0, 10)), cc.moveBy(0.5, cc.p(0, -10)))));
        this.startLayer.addChild(name);
        var rank = cc.Sprite.create('static/rank.png');
        rank.setPosition(cc.p(size.width * 0.75, -20));
        rank.runAction(cc.moveTo(0.5, cc.p(size.width * 0.75, size.height * 0.25)).easing(cc.easeIn(0.5)));
        this.startLayer.addChild(rank);
        var resume = cc.Sprite.create('static/resume.png');
        resume.setPosition(cc.p(size.width * 0.25, -20));
        resume.runAction(cc.moveTo(0.5, cc.p(size.width * 0.25, size.height * 0.25)).easing(cc.easeIn(0.5)));
        this.startLayer.addChild(resume);
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function(t, e) {
                return true;
            },
            onTouchEnded: function(t, e) {
                var pos = t.getLocation();
                if (cc.rectContainsPoint(cc.rect(rank.x - rank.width / 2, rank.y - rank.height / 2, rank.width, rank.height), pos)) {
                    window.location.href = mobConfig.mainpage;
                } else if (cc.rectContainsPoint(cc.rect(resume.x - resume.width / 2, resume.y - resume.height / 2, resume.width, resume.height), pos)) {
                    self.startLayer.removeFromParent();
                    Logic.intro();
                }
            },
            onTouchMoved: function(t, e) {}
        },
        resume);
    },
    init: function(scene) {
        this.setCurBot();
        this.scene = scene;
        var size = cc.director.getVisibleSize();
        this.botLayer = cc.Layer.create();
        scene.addChild(this.botLayer);
        var ground = cc.Sprite.create("static/ground.png");
        ground.setScaleX(size.width / 288);
        ground.anchorX = 0;
        ground.anchorY = 0;
        ground.x = 0;
        ground.y = -20;
        this.botLayer.addChild(ground, 110);
        this.totalRail = 0;
        for (var i = 0; i < 5; i++) {
            var bot = new BotSprite(93 + i * 512);
            this.botLayer.addChild(bot);
        }
        for (var i = 0; i < (size.width / 288 + 2); i++) {
            var guan = cc.Sprite.create("static/guan.png");
            guan.attr({
                x: 288 * i,
                y: 0,
                anchorX: 0,
                anchorY: 0
            });
            this.botLayer.addChild(guan);
        }
        for (var i = 0; i < 6; i++) {
            this.addRail();
        }
        this.role = new Roles(size.width / 2, 133);
        scene.addChild(this.role, 10);
        this.scoreLabel = new cc.LabelTTF("0", "微软雅黑", 60, cc.size(150, 80), cc.TEXT_ALIGNMENT_CENTER);
        scene.addChild(this.scoreLabel);
        this.scoreLabel.attr({
            x: cc.director.getVisibleSize().width / 2,
            y: cc.director.getVisibleSize().height * 0.75,
            strokeStyle: cc.color(0, 0, 0),
            lineWidth: 2,
            color: cc.color(255, 255, 255),
            anchorX: 0.5
        });
        this.scoreLabel.runAction(cc.fadeOut(0.2));
    },
    addRail: function() {
        var size = cc.director.getVisibleSize();
        var posx = Math.floor(Math.random() * (size.width - 150 - 30 * 2)) + 30;
        var posy = 410 + this.totalRail * 200;
        var leftp = new leftRail(posx, posy);
        this.botLayer.addChild(leftp);
        var rightp = new rightRail(posx + 150, posy);
        this.botLayer.addChild(rightp);
        Logic.RailList.push([leftp, rightp]);
        this.totalRail++;
    },
    intro: function(scene) {
        var size = cc.director.getVisibleSize();
        this.intros = cc.LayerColor.create(cc.color(0, 0, 0, 30), cc.winSize.width, cc.winSize.height);
        scene.addChild(this.intros, 100);
        this.introSprite = cc.Sprite.create("static/intro.png");
        this.introSprite.x = size.width / 2;
        this.introSprite.y = size.height * 0.55;
        this.introSprite.setScale(0.7);
        this.intros.addChild(this.introSprite, 11);
        var ground = cc.Sprite.create("static/start.png");
        ground.x = size.width / 2;
        ground.y = size.height * 0.87;
        this.intros.addChild(ground, 11);
    },
    introEnd: function() {
        var self = this;
        var size = cc.director.getVisibleSize();
        this.introSprite.runAction(cc.sequence(cc.moveBy(0.3, cc.p(size.width * 0.7, 0)).easing(cc.easeIn(0.3)), cc.CallFunc.create(function() {
            self.intros.removeFromParent();
        })));
        this.role.start();
        this.scoreLabel.runAction(cc.fadeIn(0.8));
    },
    move: function() {
        this.botLayer.y -= 2;
        this.role.move();
    },
    roleTurn: function() {
        this.role.roleTurn();
    },
    getRole: function() {
        return this.role;
    },
    convertPos: function(pos) {
        return this.botLayer.convertToNodeSpace(pos);
    },
    again: function() {
        this.scoreLabel.runAction(cc.fadeIn(0.8));
        this.setCurBot();
        for (var i = 0; i < Logic.RailList.length; i++) {
            var rail = Logic.RailList[i][0];
            rail.removeFromParent();
            rail = Logic.RailList[i][1];
            rail.removeFromParent();
        }
        this.role.removeFromParent();
        var size = cc.director.getVisibleSize();
        Logic.again();
        this.totalRail = 0;
        for (var i = 0; i < 6; i++) {
            this.addRail();
        }
        this.role = new Roles(size.width / 2, 143);
        this.scene.addChild(this.role, 10);
        this.role.start();
        Logic.restart();
    },
    refreshWeixinApi: function() {
        if (Logic.curRail == 0) {}
    },
    shareLayer: function() {
        window.location.href=mobConfig.sharepage;
    },
    end: function(scene) {
    	var insertAds=setTimeout("mobConfig.stop()",1500);
        this.scoreLabel.runAction(cc.fadeOut(0.8));
        var self = this;
        self.refreshWeixinApi();
        var backfun = function() {
            self.endLayer = cc.LayerColor.create(cc.color(0, 0, 0, 30), cc.winSize.width, cc.winSize.height);
            var size = cc.director.getVisibleSize();
            scene.addChild(self.endLayer, 100);
            var close = cc.Sprite.create('static/close.png');
            close.setPosition(cc.p(size.width / 2, size.height / 2));
            close.runAction(cc.FadeIn.create(1));
            self.endLayer.addChild(close);
            var end = cc.Sprite.create('static/end.png');
            end.setPosition(cc.p(size.width / 2, size.height + 30));
            end.runAction(cc.moveTo(0.5, cc.p(size.width / 2, size.height - 60)).easing(cc.easeIn(0.5)));
            self.endLayer.addChild(end);
            var rank = cc.Sprite.create('static/rank.png');
            rank.setPosition(cc.p(size.width * 0.5, -20));
            rank.runAction(cc.moveTo(0.5, cc.p(size.width * 0.5, size.height * 0.10)).easing(cc.easeIn(0.5)));
            self.endLayer.addChild(rank);
            var resume = cc.Sprite.create('static/resume.png');
            resume.setPosition(cc.p(size.width * 0.25, -20));
            resume.runAction(cc.moveTo(0.5, cc.p(size.width * 0.25, size.height * 0.25)).easing(cc.easeIn(0.5)));
            self.endLayer.addChild(resume);
            var share = cc.Sprite.create('static/fengx.png');
            share.setPosition(cc.p(size.width * 0.75, -20));
            try {
                gameAs.show();
            } catch(e) {};
            share.runAction(cc.moveTo(0.5, cc.p(size.width * 0.75, size.height * 0.25)).easing(cc.easeIn(0.5)));
            self.endLayer.addChild(share);
            if (Logic.curRail > 0) {
                var coin = cc.Sprite.create('static/medal.png');
                coin.setPosition(cc.p(50, 50));
                coin.setScale(0.7);
                close.addChild(coin);
            }
            var curScore = new cc.LabelTTF("0", "微软雅黑", 24, cc.size(100, 50), cc.TEXT_ALIGNMENT_CENTER);
            close.addChild(curScore);
            curScore.attr({
                x: 150,
                y: 60,
                strokeStyle: cc.color(0, 0, 0),
                lineWidth: 2,
                color: cc.color(255, 255, 255),
                anchorX: 0.1
            });
            var maxscore = parseInt(cc.sys.localStorage.getItem("maxs", 0)) || 0;
            if (Logic.curRail > maxscore) {
                cc.sys.localStorage.setItem("maxs", Logic.curRail);
                maxscore = Logic.curRail;
            }
            curScore.setString('' + Logic.curRail);
            var bestScore = new cc.LabelTTF("0", "微软雅黑", 24, cc.size(100, 50), cc.TEXT_ALIGNMENT_CENTER);
            close.addChild(bestScore);
            bestScore.attr({
                x: 150,
                y: 18,
                strokeStyle: cc.color(0, 0, 0),
                lineWidth: 2,
                color: cc.color(255, 255, 255),
                anchorX: 0.1
            });
            bestScore.setString('' + maxscore);
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchBegan: function(t, e) {
                    return true;
                },
                onTouchEnded: function(t, e) {
                    var pos = t.getLocation();
                    if (cc.rectContainsPoint(cc.rect(rank.x - rank.width / 2, rank.y - rank.height / 2, rank.width, rank.height), pos)) {
                        window.location.href = mobConfig.mainpage;
                    } else if (cc.rectContainsPoint(cc.rect(resume.x - resume.width / 2, resume.y - resume.height / 2, resume.width, resume.height), pos)) {
                        self.endLayer.removeFromParent();
                        self.again();
                    } else if (cc.rectContainsPoint(cc.rect(share.x - share.width / 2, share.y - share.height / 2, share.width, share.height), pos)) {
                        self.shareLayer();
                    }
                },
                onTouchMoved: function(t, e) {}
            },
            resume);
        };
        var size = cc.director.getVisibleSize();
        this.botLayer.runAction(cc.moveTo(1, cc.p(0, 0)));
        this.role.die();
        this.role.setAnchorPoint(0.5, 0.5);
        this.role.y += 20;
        this.role.runAction(cc.Sequence.create(cc.rotateBy(0.25, 360), cc.rotateBy(0.25, 360), cc.rotateBy(0.25, 360), cc.rotateBy(0.25, 180), cc.CallFunc.create(function() {
            backfun();
        })));
    }
};
var BotSprite = cc.Sprite.extend({
    speedX: 0.5,
    speedY: 0.5,
    ctor: function(posy) {
        this._super("static/bot" + UI.curBot + ".png");
        var size = cc.director.getVisibleSize();
        this.setScaleX(size.width / 288);
        this.attr({
            x: 0,
            y: posy,
            anchorX: 0,
            anchorY: 0
        });
    }
});
var Time = {
    getTime: function(left) {
        if (left) {
            this.time = Math.floor(Math.random() * 100) / 100 + 0.8;
        }
        return this.time;
    }
};
var rightRail = cc.Sprite.extend({
    ctor: function(posx, posy) {
        this._super("static/rightp.png");
        this.attr({
            x: posx,
            y: posy,
            anchorX: 0,
            anchorY: 0.5
        });
        var time = Time.getTime(false);
        this.hammer = new hammerSprite(17, 0, time);
        this.addChild(this.hammer);
    },
    getRect: function() {
        var size = cc.director.getVisibleSize();
        var roleRect = cc.rect(this.x, this.y - 11, size.width - this.x, 22);
        return roleRect;
    },
    getHammerRect: function() {
        return this.hammer.getRect(false);
    }
});
var leftRail = cc.Sprite.extend({
    ctor: function(posx, posy) {
        this._super("static/leftp.png");
        this.attr({
            x: posx,
            y: posy,
            anchorX: 1,
            anchorY: 0.5
        });
        var time = Time.getTime(true);
        this.hammer = new hammerSprite(1007, 0, time);
        this.addChild(this.hammer);
        if (!this.Leftrole2s) {
            this.Leftrole2s = cc.Sprite.create("static/point.png");
        }
        this.Leftrole2s.setPosition(this.x - 17, this.y);
    },
    getRect: function() {
        var roleRect = cc.rect(0, this.y - 11, this.x, 22);
        return roleRect;
    },
    getHammerRect: function() {
        return this.hammer.getRect(true);
    }
});
var hammerSprite = cc.Sprite.extend({
    ctor: function(posx, posy, time) {
        this._super("static/hammer.png");
        this.attr({
            x: posx,
            y: posy,
            anchorX: 0.5,
            anchorY: 1,
            rotation: 45
        });
        this.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.rotateBy(time, -90), cc.rotateBy(time, 90))));
    },
    getRect: function(left) {
        var angle = -this.getRotation();
        var posx = this.getParent().x + (left ? -17 : 17);
        var posy = this.getParent().y;
        var sinNum = Math.sin(angle * Math.PI / 180);
        var cosNum = Math.cos(angle * Math.PI / 180);
        var rect = {};
        rect.x1 = posx - cosNum * 21.5;
        rect.y1 = posy - sinNum * 21.5;
        rect.x2 = rect.x1 + sinNum * 66;
        rect.y2 = rect.y1 - cosNum * 66;
        rect.x3 = posx + cosNum * 21.5;
        rect.y3 = posy + sinNum * 21.5;
        rect.x4 = rect.x3 + sinNum * 66;
        rect.y4 = rect.y3 - cosNum * 66;
        return rect;
    },
    debugLeft: function(rect) {
        if (!this.Leftrole1) {
            this.Leftrole1 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.Leftrole1, 1555);
        }
        this.Leftrole1.setPosition(rect.x1, rect.y1);
        if (!this.Leftrole2) {
            this.Leftrole2 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.Leftrole2);
        }
        this.Leftrole2.setPosition(rect.x2, rect.y2, 1555);
        if (!this.Leftrole3) {
            this.Leftrole3 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.Leftrole3);
        }
        this.Leftrole3.setPosition(rect.x3, rect.y3, 1555);
        if (!this.Leftrole4) {
            this.Leftrole4 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.Leftrole4);
        }
        this.Leftrole4.setPosition(rect.x4, rect.y4, 1555);
    }
});
var Roles = cc.Sprite.extend({
    speedX: 0,
    trunTime: 0,
    ctor: function(posx, posy) {
        this._super("static/role1.png");
        this.attr({
            x: posx,
            y: posy,
            anchorX: 0.5,
            anchorY: 0
        });
        this.wing = cc.Sprite.create("static/lxj1.png");
        this.wing.x = 20;
        this.wing.y = 62;
        this.addChild(this.wing);
        this.setScale(0.7);
        this.wing.setScale(0.8);
        var dir = Math.floor(Math.random() * 100);
        if (dir <= 50) {
            this.speedX = 5;
        } else {
            this.speedX = -5;
            this.setScaleX( - this.getScale());
        }
    },
    start: function() {
        var animation = cc.Animation.create();
        for (var i = 0; i < 3; i++) {
            animation.addSpriteFrameWithFile("static/role" + (i + 1) + ".png");
        }
        animation.setDelayPerUnit(0.2);
        animation.setRestoreOriginalFrame(true);
        var action = cc.Animate.create(animation);
        this.runAction(action);
        var animation = cc.Animation.create();
        for (var i = 0; i < 3; i++) {
            animation.addSpriteFrameWithFile("static/lxj" + (i + 1) + ".png");
        }
        animation.setDelayPerUnit(0.1);
        animation.setRestoreOriginalFrame(true);
        var action = cc.Animate.create(animation);
        this.wing.runAction(cc.RepeatForever.create(action));
    },
    move: function() {
        this.x += this.speedX;
        if (this.trunTime > 0) {
            this.trunTime--;
            if (this.trunTime == 0) {
                this.speedX = -this.speedX;
                this.setScaleX( - this.getScaleX());
            }
        }
    },
    roleTurn: function() {
        this.speedX = 0 - this.speedX;
        this.setScaleX( - this.getScaleX());
    },
    getRect: function() {
        var space = 10;
        var pos = UI.convertPos(this.getPosition());
        return cc.rect(pos.x - 23.5 + space, pos.y + space, 47 - 2 * +space, 53 - 2 * +space);
    },
    die: function() {
        this.wing.removeFromParent();
        this.setTexture(cc.Sprite.create('static/role3.png').getTexture());
        var wings = cc.Sprite.create('static/lxj5.png');
        this.getParent().addChild(wings, 1100);
        wings.runAction(cc.Sequence.create(cc.Spawn.create(cc.MoveBy.create(1, {
            x: 30,
            y: -300
        }), cc.repeatForever(cc.rotateBy(0.2, 360)), cc.fadeOut(0.5)), cc.CallFunc.create(function() {})));
    }
});
var Logic = {
    state: 'start',
    RailList: [],
    curRail: 0,
    init: function(scene) {
        this.scene = scene;
        UI.init(scene);
    },
    intro: function() {
        UI.intro(this.scene);
    },
    end: function() {
        this.scene.pause();
        UI.end(this.scene);
        audio.stop('sfx_wing');
        audio.play('sfx_hit');
    },
    debugLeft: function(rect) {
        if (!this.Leftrole1) {
            this.Leftrole1 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.Leftrole1);
        }
        this.Leftrole1.setPosition(rect.x, rect.y);
        if (!this.Leftrole2) {
            this.Leftrole2 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.Leftrole2);
        }
        this.Leftrole2.setPosition(rect.x + rect.width, rect.y);
        if (!this.Leftrole3) {
            this.Leftrole3 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.Leftrole3);
        }
        this.Leftrole3.setPosition(rect.x, rect.y + rect.height);
        if (!this.Leftrole4) {
            this.Leftrole4 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.Leftrole4);
        }
        this.Leftrole4.setPosition(rect.x + rect.width, rect.y + rect.height);
    },
    debugRole: function(rect) {
        if (!this.role1) {
            this.role1 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.role1);
        }
        this.role1.setPosition(rect.x, rect.y);
        if (!this.role2) {
            this.role2 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.role2);
        }
        this.role2.setPosition(rect.x + rect.width, rect.y);
        if (!this.role3) {
            this.role3 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.role3);
        }
        this.role3.setPosition(rect.x, rect.y + rect.height);
        if (!this.role4) {
            this.role4 = cc.Sprite.create("static/point.png");
            UI.botLayer.addChild(this.role4);
        }
        this.role4.setPosition(rect.x + rect.width, rect.y + rect.height);
    },
    update: function(dt) {
        UI.move();
        var size = cc.director.getVisibleSize();
        var leftRail = this.RailList[this.curRail][0];
        var rightRail = this.RailList[this.curRail][1];
        var roleRect = UI.getRole().getRect();
        if (roleRect.x < 0 || (roleRect.x + roleRect.width) > size.width) {
            this.end();
        }
        if (cc.rectContainsPoint(leftRail.getRect(), cc.p(roleRect.x, roleRect.y + roleRect.height / 2))) {
            this.end();
        }
        if (cc.rectContainsPoint(rightRail.getRect(), cc.p(roleRect.x + roleRect.width / 2, roleRect.y + roleRect.height))) {
            this.end();
        }
        if (this.isIntersect(leftRail.getHammerRect(), roleRect)) {
            console.log("XXXXXXXXXXXXXXXXXroleRect:" + roleRect.x + " " + roleRect.y + " " + roleRect.width + " " + roleRect.height + " ");
            this.end();
        }
        if (this.isIntersect(rightRail.getHammerRect(), roleRect)) {
            this.end();
        }
        if (roleRect.y > leftRail.getRect().y) {
            this.curRail++;
            UI.scoreLabel.setString(' ' + this.curRail);
            UI.addRail();
            audio.play('fcoin');
        }
    },
    touch: function() {
        if (this.state == 'start') {
            UI.introEnd();
            this.state = 'running';
            this.scene.scheduleUpdate();
            audio.play('sfx_wing', true);
        } else {
            UI.roleTurn();
        }
    },
    again: function() {
        this.RailList.length = 0;
        this.curRail = 0;
        this.state = 'start';
    },
    restart: function() {
        this.state = 'running';
        UI.scoreLabel.setString('0');
        this.scene.resume();
        audio.play('sfx_wing', true);
    },
    isIntersect: function(r1, r2) {
        if (cc.rectContainsPoint(r2, cc.p(r1.x1, r1.y1))) {
            return true;
        }
        if (cc.rectContainsPoint(r2, cc.p(r1.x2, r1.y2))) {
            return true;
        }
        if (cc.rectContainsPoint(r2, cc.p(r1.x3, r1.y3))) {
            return true;
        }
        if (cc.rectContainsPoint(r2, cc.p(r1.x4, r1.y4))) {
            return true;
        }
        return false;
    }
};
var MyScene = cc.Scene.extend({
    cat: null,
    touchbeginpos: null,
    onEnter: function() {
        this._super();
        Logic.init(this);
        UI.start();
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function(touch, event) {
                return true;
            },
            onTouchMoved: function(touch, event) {},
            onTouchEnded: function(touch, event) {
                Logic.touch();
            }
        },
        this);
    },
    update: function(dt) {
        Logic.update(dt);
    }
});
window.onload = function() {
    cc.game.onStart = function() {
        cc.view.setDesignResolutionSize(320, 500, cc.ResolutionPolicy.FIXED_WIDTH);
        cc._renderContext.webkitImageSmoothingEnabled = false;
        cc._renderContext.mozImageSmoothingEnabled = false;
        cc._renderContext.imageSmoothingEnabled = false;
        cc._renderContext.fillStyle = "#afdc4b";
        cc.LoaderScene.preload(["static/bot1.png", "static/bot2.png", "static/bot3.png", "static/ground.png", "static/guan.png", "static//leftp.png", "static/rightp.png", "static/hammer.png", "static/intro.png", "static/role1.png", "static/role2.png", "static/role3.png", "static/role4.png", "static/lxj1.png", "static/lxj2.png", "static/lxj3.png", "static/lxj5.png", "static/close.png", "static/end.png", "static/rank.png", "static/name.png", "static/resume.png", "static/point.png", "static/start.png", "static/fengx.png", "static/share_tip.png", "static/medal.png"],
        function() {
            cc.director.runScene(new MyScene());
        },
        this);
    };
    cc.game.run("gameCanvas");
};
var audio = {
    sounds: {},
    play: function(name, loop) {
        var s = this._get(name);
        if (s) {
            s.play();
        }
    },
    stop: function(name) {
        var s = this._get(name);
        s && s.pause();
    },
    _get: function(name) {
        var s = document.getElementById('audio_' + name);
        return s;
    }
};