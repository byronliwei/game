function CEndPanel(a) {
    var b, c, e, f, d, g;
    this._init = function(a) {
        b = new createjs.Bitmap(a);
        b.x = 0;
        b.y = 0;
        d = new createjs.Text("", "bold 56px comic_sans_msregular", "#000");
        d.x = CANVAS_WIDTH / 2 + 2;
        d.y = CANVAS_HEIGHT / 2 - 76;
        d.textAlign = "center";
        f = new createjs.Text("", "bold 56px comic_sans_msregular", "#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 80;
        f.textAlign = "center";
        c = new createjs.Text("", "bold 40px comic_sans_msregular", "#000");
        c.x = CANVAS_WIDTH / 2 + 1;
        c.y = CANVAS_HEIGHT / 2 + 34;
        c.textAlign = "center";
        e = new createjs.Text("", "bold 40px comic_sans_msregular", "#ffffff");
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 + 30;
        e.textAlign = "center";
        g = new createjs.Container;
        g.alpha = 0;
        g.visible = !1;
        g.addChild(b, c, e, d, f);
        s_oStage.addChild(g)
    };
    this.unload = function() {
        g.off("mousedown", this._onExit);
        s_oStage.removeChild(g)
    };
    this._initListener = function() {
        g.on("mousedown", this._onExit)
    };
    this.show = function(a, b) {
        b ? (d.text = TEXT_CONGRATS, f.text = TEXT_CONGRATS) : (d.text = TEXT_GAMEOVER, f.text = TEXT_GAMEOVER);
        c.text = TEXT_SCORE + ": " + a;
        e.text = TEXT_SCORE + ": " + a;
        g.visible = !0;
        var h = this;
        createjs.Tween.get(g).to({
            alpha: 1
        },
        500).call(function() {
            h._initListener()
        });
        $(s_oMain).trigger("save_score", a)
    };
    this._onExit = function() {
        g.off("mousedown");
        s_oGame.onExit()
    };
    this._init(a);
    return this
}
function CBall(a, b, c, e, f, d) {
    var g, l, k, h;
    this._init = function(a, b, c, d, e, f) {
        g = a;
        l = b;
        k = new createjs.Sprite(d, "ball_0");
        k.stop();
        k.x = a;
        k.y = b;
        f.addChild(k);
        h = new createjs.Sprite(e, "invisible");
        h.stop();
        h.x = a;
        h.y = b;
        f.addChild(h)
    };
    this.setInfo = function(a) {
        this.stopTremble();
        k.y = l;
        h.y = l;
        this.setColor(a)
    };
    this.setColor = function(a) {
        k.gotoAndStop("ball_" + (a - 1));
        k.alpha = 1
    };
    this.increaseY = function(a) {
        k.y += a;
        h.y += a
    };
    this.destroy = function() {
        this.stopTremble();
        createjs.Tween.get(k).to({
            alpha: 0
        },
        300, createjs.Ease.cubicOut);
        h.gotoAndPlay("explosion")
    };
    this.stopTremble = function() {
        createjs.Tween.removeTweens(k);
        k.x = g
    };
    this.tremble = function(a, b) {
        var c = this;
        createjs.Tween.get(k).to({
            x: k.x + a
        },
        b).call(function() {
            c.tremble( - 1 * a, b)
        })
    };
    this.getY = function() {
        return l
    };
    this._init(a, b, c, e, f, d)
}
function CSpriteLibrary() {
    var a, b, c, e, f, d;
    this.init = function(g, l, k) {
        c = b = 0;
        e = g;
        f = l;
        d = k;
        a = {}
    };
    this.addSprite = function(c, d) {
        a.hasOwnProperty(c) || (a[c] = {
            szPath: d,
            oSprite: new Image
        },
        b++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite: null
    };
    this._onSpritesLoaded = function() {
        f.call(d)
    };
    this._onSpriteLoaded = function() {
        e.call(d); ++c == b && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this,
        a[b].oSprite.onload = function() {
            this.oSpriteLibrary._onSpriteLoaded()
        },
        a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return b
    }
}
var CANVAS_WIDTH = 768,
CANVAS_HEIGHT = 1024,
FPS_TIME = 1E3 / 24,
DISABLE_SOUND_MOBILE = !0,
STATE_LOADING = 0,
STATE_MENU = 1,
STATE_HELP = 1,
STATE_GAME = 3,
ON_MOUSE_DOWN = 0,
ON_MOUSE_UP = 1,
ON_MOUSE_OVER = 2,
ON_MOUSE_OUT = 3,
ON_DRAG_START = 4,
ON_DRAG_END = 5,
NUM_LEVELS, BOARD_OFFSET_X, BOARD_OFFSET_Y, BOARD_ROWS = 16,
BOARD_COLS = 12,
BALL_SPEED, NUM_BALL_COLORS, MAX_BALL_ADJACENCY = 40,
TIME_FOR_UPDATING_PHYSICS = 8,
NUM_LAUNCH_FOR_EARTHQUAKE, EARTHQUAKE_TIME = 200,
OFFSET_Y_GAME_OVER, SCORE_EXPLOSION_BALL, SCORE_FALLEN_BALL, CODE_EXPLODING_BALL = 11,
CODE_EXPLODING_ISLE = 44,
CODE_EXPLODING_BOMB = 66,
CODE_BOMB_BALL = 11,
CODE_RAINBOW_BALL = 12;
function CVector2() {
    var a, b;
    this._init = function() {
        b = a = 0
    };
    this.add = function(c) {
        a += c.getX();
        b += c.getY()
    };
    this.scalarDivision = function(c) {
        a /= c;
        b /= c
    };
    this.subtract = function(c) {
        a -= c.getX();
        b -= c.getY()
    };
    this.scalarProduct = function(c) {
        a *= c;
        b *= c
    };
    this.invert = function() {
        a *= -1;
        b *= -1
    };
    this.dotProduct = function(c) {
        return a * c.getX() + b * c.getY()
    };
    this.set = function(c, e) {
        a = c;
        b = e
    };
    this.setV = function(c) {
        a = c.getX();
        b = c.getY()
    };
    this.setY = function(a) {
        b = a
    };
    this.length = function() {
        return Math.sqrt(a * a + b * b)
    };
    this.length2 = function() {
        return a * a + b * b
    };
    this.normalize = function() {
        var c = this.length();
        0 < c && (a /= c, b /= c)
    };
    this.getNormalize = function(c) {
        this.length();
        c.set(a, b);
        c.normalize()
    };
    this.rot90CCW = function() {
        var c = a;
        a = -b;
        b = c
    };
    this.rot90CW = function() {
        var c = a;
        a = b;
        b = -c
    };
    this.getRotCCW = function(c) {
        c.set(a, b);
        c.rot90CCW()
    };
    this.getRotCW = function(c) {
        c.set(a, b);
        c.rot90CW()
    };
    this.ceil = function() {
        a = Math.ceil(a);
        b = Math.ceil(b)
    };
    this.round = function() {
        a = Math.round(a);
        b = Math.round(b)
    };
    this.getX = function() {
        return a
    };
    this.getY = function() {
        return b
    };
    this._init()
}
function CToggle(a, b, c) {
    var e, f, d;
    this._init = function(a, b, c) {
        e = [];
        f = [];
        c = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                on: [0, 1],
                off: [1, 2]
            }
        });
        d = s_bAudioActive ? new createjs.Sprite(c, "on") : new createjs.Sprite(c, "off");
        d.x = a;
        d.y = b;
        d.stop();
        s_oStage.addChild(d);
        this._initListener()
    };
    this.unload = function() {
        d.off("mousedown", this.buttonDown);
        d.off("pressup", this.buttonRelease);
        s_oStage.removeChild(d)
    };
    this._initListener = function() {
        d.on("mousedown", this.buttonDown);
        d.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        e[a] = b;
        f[a] = c
    };
    this.buttonRelease = function() {
        d.scaleX = 1;
        d.scaleY = 1; (s_bAudioActive = !s_bAudioActive) ? d.gotoAndStop("on") : d.gotoAndStop("off");
        e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(f[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        d.scaleX = .9;
        d.scaleY = .9;
        e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
    };
    this._init(a, b, c)
} (function(a) { (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});
function trace(a) {
    console.log(a)
}
$(window).ready(function() {
    sizeHandler()
});
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = CANVAS_WIDTH,
        b = CANVAS_HEIGHT,
        c, d; ! 0 === inIframe() && "ios" == getMobileOperatingSystem() ? top.location.href = document.location.href: (c = window.innerWidth, d = window.innerHeight, multiplier = s_iScaleFactor = Math.min(d / b, c / a), a *= multiplier, b *= multiplier, $("#canvas").css("width", a + "px"), $("#canvas").css("height", b + "px"), $("#canvas").css("left", c / 2 - a / 2 + "px"))
    }
}
function getMobileOperatingSystem() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return a.match(/iPad/i) || a.match(/iPhone/i) || a.match(/iPod/i) ? "ios": a.match(/Android/i) ? "android": "unknown"
}
function inIframe() {
    try {
        return window.self !== window.top
    } catch(a) {
        return ! 0
    }
};

function randomFloatBetween(a, b, c) {
    "undefined" === typeof c && (c = 2);
    return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(c))
}
function shuffle(a) {
    for (var b = a.length,
    c, e; 0 !== b;) e = Math.floor(Math.random() * b),
    b -= 1,
    c = a[b],
    a[b] = a[e],
    a[e] = c;
    return a
}
function formatTime(a) {
    a /= 1E3;
    var b = Math.floor(a / 60);
    a = parseFloat(a - 60 * b).toFixed(1);
    var c = "",
    c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
    return c = 10 > a ? c + ("0" + a) : c + a
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
        case "touchstart":
            this.onTouchStart(a);
            break;
        case "touchmove":
            this.onTouchMove(a);
            break;
        case "touchend":
            this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var b = document.createEvent("MouseEvents");
            b.initEvent("click", !0, !0);
            a.dispatchEvent(b)
        }
    }
};
function CTextButton(a, b, c, e, f, d, g) {
    var l, k, h;
    this._init = function(a, b, c, d, e, g, f) {
        l = [];
        k = [];
        var u = new createjs.Bitmap(c),
        A = Math.ceil(f / 20),
        x = new createjs.Text(d, "bold " + f + "px " + e, "#000000");
        x.textAlign = "center";
        x.getBounds();
        x.x = c.width / 2 + A;
        x.y = Math.floor(c.height / 2) + 10 + A;
        x.textBaseline = "alphabetic";
        d = new createjs.Text(d, "bold " + f + "px " + e, g);
        d.textAlign = "center";
        d.getBounds();
        d.x = c.width / 2;
        d.y = Math.floor(c.height / 2) + 10;
        d.textBaseline = "alphabetic";
        h = new createjs.Container;
        h.x = a;
        h.y = b;
        h.regX = c.width / 2;
        h.regY = c.height / 2;
        h.addChild(u, x, d);
        s_oStage.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown");
        h.off("pressup")
    };
    this.setVisible = function(a) {
        h.visible = a
    };
    this._initListener = function() {
        oParent = this;
        h.on("mousedown", this.buttonDown);
        h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        k[a] = c
    };
    this.buttonRelease = function() {
        h.scaleX = 1;
        h.scaleY = 1;
        l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(k[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        h.scaleX = .9;
        h.scaleY = .9;
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.setX = function(a) {
        h.x = a
    };
    this.setY = function(a) {
        h.y = a
    };
    this.getButtonImage = function() {
        return h
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this._init(a, b, c, e, f, d, g);
    return this
}
function CPreloader() {
    var a;
    this._init = function() {
        this._onAllPreloaderImagesLoaded()
    };
    this._onPreloaderImagesLoaded = function() {};
    this._onAllPreloaderImagesLoaded = function() {
        a = new createjs.Text("", "bold 22px Arial center", "#ffffff");
        a.x = CANVAS_WIDTH / 2 - 40;
        a.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(a)
    };
    this.unload = function() {
        s_oStage.removeChild(a)
    };
    this.refreshLoader = function(b) {
        a.text = b + "%"
    };
    this._init()
}
function CNextLevelPanel(a, b) {
    var c;
    this._init = function(a, b) {
        var d = new createjs.Bitmap(s_oSpriteLibrary.getSprite("msg_box")),
        g = new createjs.Text(TEXT_LEVEL + " " + a + " " + TEXT_COMPLETED, "bold 40px comic_sans_msregular", "#000000");
        g.x = CANVAS_WIDTH / 2 + 1;
        g.y = 422;
        g.textAlign = "center";
        var l = new createjs.Text(TEXT_LEVEL + " " + a + " " + TEXT_COMPLETED, "bold 40px comic_sans_msregular", "#ffffff");
        l.x = CANVAS_WIDTH / 2;
        l.y = 420;
        l.textAlign = "center";
        var k = new createjs.Text(TEXT_SCORE + ": " + b, "bold 44px comic_sans_msregular", "#000000");
        k.x = CANVAS_WIDTH / 2 + 1;
        k.y = 522;
        k.textAlign = "center";
        var h = new createjs.Text(TEXT_SCORE + ": " + b, "bold 44px comic_sans_msregular", "#ffffff");
        h.x = CANVAS_WIDTH / 2;
        h.y = 520;
        h.textAlign = "center";
        c = new createjs.Container;
        c.addChild(d, g, l, k, h);
        s_oStage.addChild(c);
        c.on("mousedown", this._onExit)
    };
    this._onExit = function() {
        c.off("mousedown");
        c.removeAllChildren();
        s_oGame.resetLevel()
    };
    this._init(a, b)
}
function CMenu() {
    var a, b, c, e;
    this._init = function() {
        a = new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(a);
        var f = s_oSpriteLibrary.getSprite("but_play");
        b = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 200, f, TEXT_PLAY, "comic_sans_msregular", "#ffffff", 44);
        b.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) c = new CToggle(CANVAS_WIDTH - 60, 60, s_oSpriteLibrary.getSprite("audio_icon")),
        c.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(e);
        createjs.Tween.get(e).to({
            alpha: 0
        },
        1E3).call(function() {
            e.visible = !1
        })
    };
    this.unload = function() {
        b.unload();
        b = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) c.unload(),
        c = null;
        s_oStage.removeChild(a);
        a = null
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame()
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(!s_bAudioActive)
    };
    this._init()
}
function toRadian(a) {
    return Math.PI / 180 * a
}
function toDegree(a) {
    return 180 / Math.PI * a
}
function randRange(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
function angleBetweenVectors(a, b) {
    var c = Math.acos(dotProductV2(a, b) / (a.length() * b.length()));
    return ! 0 === isNaN(c) ? 0 : c
}
function rotateVector2D(a, b) {
    var c = b.getX() * Math.cos(a) + b.getY() * Math.sin(a),
    e = b.getX() * -Math.sin(a) + b.getY() * Math.cos(a);
    b.set(c, e)
}
function reflectVectorV2(a, b) {
    var c = new CVector2,
    e = dotProductV2(a, b);
    c.set(a.getX() - 2 * e * b.getX(), a.getY() - 2 * e * b.getY());
    return c
}
function dotProductV2(a, b) {
    return a.getX() * b.getX() + a.getY() * b.getY()
}
function pointInRect(a, b) {
    return a.getX() > b.x && a.getX() < b.x + b.width && a.getY() > b.y && a.getY() < b.y + b.height
}
function distance2(a, b) {
    return (b.getX() - a.getX()) * (b.getX() - a.getX()) + (b.getY() - a.getY()) * (b.getY() - a.getY())
}
function CMain(a) {
    var b = 0,
    c = 0,
    e = STATE_LOADING,
    f, d, g;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        a = window.hasOwnProperty("ontouchstart");
        navigator.userAgent.match(/Trident/) && !a || createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile; ! 1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this._update);
        s_oSpriteLibrary = new CSpriteLibrary;
        d = new CPreloader; ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        this._loadImages()
    };
    this._initSounds = function() {
        createjs.Sound.initializeDefaultPlugins() && (0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") ? (createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.handleFileLoad, this)), createjs.Sound.registerSound("./static/explosion.ogg", "explosion"), createjs.Sound.registerSound("./static/soundtrack.ogg", "soundtrack"), createjs.Sound.registerSound("./static/game_over.ogg", "game_over"), createjs.Sound.registerSound("./static/launch.ogg", "launch"), createjs.Sound.registerSound("./static/win.ogg", "win")) : (createjs.Sound.alternateExtensions = ["ogg"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.handleFileLoad, this)), createjs.Sound.registerSound("./static/explosion.mp3", "explosion"), createjs.Sound.registerSound("./static/soundtrack.mp3", "soundtrack"), createjs.Sound.registerSound("./static/game_over.mp3", "game_over"), createjs.Sound.registerSound("./static/launch.mp3", "launch"), createjs.Sound.registerSound("./static/win.mp3", "win")), c += 5)
    };
    this.handleFileLoad = function() {
        b++;
        if (b === c) {
            d.unload();
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_oSoundTrackSnd = createjs.Sound.play("soundtrack", {
                interrupt: createjs.Sound.INTERRUPT_ANY,
                loop: -1,
                volume: .2
            });
            this.gotoMenu()
        }
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./static/but_play.png");
        s_oSpriteLibrary.addSprite("but_exit", "./static/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./static/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./static/bg_game.jpg");
        s_oSpriteLibrary.addSprite("msg_box", "./static/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_help", "./static/bg_help.png");
        s_oSpriteLibrary.addSprite("balls", "./static/balls.png");
        s_oSpriteLibrary.addSprite("ball_explosion", "./static/ball_explosion.png");
        s_oSpriteLibrary.addSprite("wall_tile", "./static/wall_tile.jpg");
        s_oSpriteLibrary.addSprite("audio_icon", "./static/audio_icon.png");
        s_oSpriteLibrary.addSprite("hit_area", "./static/hit_area.png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        d.refreshLoader(Math.floor(b / c * 100));
        if (b === c) {
            d.unload();
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_oSoundTrackSnd = createjs.Sound.play("soundtrack", {
                interrupt: createjs.Sound.INTERRUPT_ANY,
                loop: -1,
                volume: .2
            });
            this.gotoMenu()
        }
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        new CMenu;
        e = STATE_MENU
    };
    this.gotoGame = function() {
        g = new CGame(f);
        e = STATE_GAME;
        $(s_oMain).trigger("game_start")
    };
    this.gotoHelp = function() {
        new CHelp;
        e = STATE_HELP
    };
    this._update = function(a) {
        var b = (new Date).getTime();
        s_iTimeElaps = b - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = b;
        1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
        e === STATE_GAME && g.update();
        s_oStage.update(a)
    };
    s_oMain = this;
    f = a;
    this.initContainer()
}
var s_iCntTime = 0,
s_iTimeElaps = 0,
s_iPrevTime = 0,
s_iCntFps = 0,
s_iCurFps = 0,
s_bMobile, s_bAudioActive = !0,
s_oSoundTrackSnd, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary;
TEXT_GAMEOVER = "GAME OVER";
TEXT_CONGRATS = "CONGRATULATIONS";
TEXT_SCORE = "SCORE";
TEXT_LEVEL = "LEVEL";
TEXT_PLAY = "PLAY";
TEXT_NEXT = "NEXT";
TEXT_INCREDIBLE = "INCREDIBILE!!!";
TEXT_EXCELLENT = "EXCELLENT!!";
TEXT_VERYGOOD = "VERY GOOD!";
TEXT_GOOD = "GOOD!";
TEXT_COMPLETED = "COMPLETED";
TEXT_HELP = "DESTROY ALL THE COLORED \n BUBBLES FROM THE LEVEL,\n LAUNCHING A BUBBLE ON \n GROUPS OF THE SAME \nCOLOR.";
function CInterface(a) {
    var b, c, e, f, d, g, l, k, h, n, s, E;
    this._init = function(a) {
        var p = this,
        C = new createjs.Shape;
        C.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(0, 0, CANVAS_WIDTH, 110);
        s_oStage.addChild(C);
        g = new createjs.Text(TEXT_SCORE + ": 0", "bold 40px comic_sans_msregular", "#000000");
        g.x = CANVAS_WIDTH / 2 + 2;
        g.y = CANVAS_HEIGHT - 14;
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        s_oStage.addChild(g);
        l = new createjs.Text(TEXT_SCORE + ": 0", "bold 40px comic_sans_msregular", "#ffffff");
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT - 16;
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        s_oStage.addChild(l);
        d = new createjs.Text(TEXT_NEXT, "bold 34px comic_sans_msregular", "#000000");
        d.x = CANVAS_WIDTH / 2 - 31;
        d.y = 94;
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        s_oStage.addChild(d);
        f = new createjs.Text(TEXT_NEXT, "bold 34px comic_sans_msregular", "#ffffff");
        f.x = CANVAS_WIDTH / 2 - 30;
        f.y = 92;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        s_oStage.addChild(f);
        e = new createjs.Sprite(a, "ball_0");
        e.stop();
        e.x = CANVAS_WIDTH / 2 + 26;
        e.y = 56;
        s_oStage.addChild(e);
        h = new createjs.Text(TEXT_LEVEL + " 1", "bold 34px comic_sans_msregular", "#000000");
        h.x = CANVAS_WIDTH / 2 + 1;
        h.y = 40;
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        s_oStage.addChild(h);
        k = new createjs.Text(TEXT_LEVEL + " 1", "bold 34px comic_sans_msregular", "#ffffff");
        k.x = CANVAS_WIDTH / 2;
        k.y = 38;
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        s_oStage.addChild(k);
        s = new createjs.Text(TEXT_VERYGOOD, "bold 60px comic_sans_msregular", "#000000");
        s.x = CANVAS_WIDTH / 2 + 4;
        s.y = -76;
        s.textAlign = "center";
        s.textBaseline = "alphabetic";
        s_oStage.addChild(s);
        n = new createjs.Text(TEXT_VERYGOOD, "bold 60px comic_sans_msregular", "#ffffff");
        n.x = CANVAS_WIDTH / 2;
        n.y = -80;
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        s_oStage.addChild(n);
        p = this;
        c = new createjs.Bitmap(s_oSpriteLibrary.getSprite("hit_area"));
        s_oStage.addChild(c);
        c.on("pressup",
        function(a) {
            p._onTapScreen(a.stageX, a.stageY)
        });
        a = s_oSpriteLibrary.getSprite("but_exit");
        b = new CGfxButton(CANVAS_WIDTH - a.width / 2 - 20, 60, a, !0);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) E = new CToggle(a.width / 2 + 20, 60, s_oSpriteLibrary.getSprite("audio_icon")),
        E.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this)
    };
    this.unload = function() {
        b.unload();
        b = null;
        s_oStage.removeChild(l);
        s_oStage.removeChild(g);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) E.unload(),
        E = null;
        var a = this;
        c.off("pressup",
        function(b) {
            a._onTapScreen(b.stageX, b.stageY)
        });
        s_oStage.removeChild(c)
    };
    this.refreshScore = function(a) {
        g.text = TEXT_SCORE + ": " + a;
        l.text = TEXT_SCORE + ": " + a
    };
    this.setNextBall = function(a) {
        e.gotoAndStop("ball_" + a)
    };
    this.showCongrats = function(a) {
        n.text = a;
        s.text = a;
        createjs.Tween.get(n).to({
            y: CANVAS_HEIGHT / 2
        },
        500, createjs.Ease.quintOut).call(function() {
            createjs.Tween.get(n).to({
                y: -60
            },
            700, createjs.Ease.quintIn)
        });
        createjs.Tween.get(s).to({
            y: CANVAS_HEIGHT / 2
        },
        500, createjs.Ease.quintOut).call(function() {
            createjs.Tween.get(s).to({
                y: -56
            },
            700, createjs.Ease.quintIn)
        })
    };
    this.showNextLevel = function(a, b) {
        $(s_oMain).trigger("end_level");
        new CNextLevelPanel(a, b)
    };
    this.refreshLevelText = function(a) {
        k.text = TEXT_LEVEL + " " + a;
        h.text = TEXT_LEVEL + " " + a
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._onTapScreen = function(a, b) {
        s_oGame.tapScreen(a, b)
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(!s_bAudioActive)
    };
    this._init(a);
    return this
}
function CHelpPanel(a) {
    var b, c, e, f;
    this._init = function(a) {
        e = new createjs.Bitmap(a);
        c = new createjs.Text(TEXT_HELP, "bold 40px comic_sans_msregular", "#000000");
        c.textAlign = "center";
        c.x = CANVAS_WIDTH / 2 + 2;
        c.y = 370;
        b = new createjs.Text(TEXT_HELP, "bold 40px comic_sans_msregular", "#ffffff");
        b.textAlign = "center";
        b.x = CANVAS_WIDTH / 2;
        b.y = 368;
        f = new createjs.Container;
        f.addChild(e, c, b);
        s_oStage.addChild(f);
        var g = this;
        f.on("pressup",
        function() {
            g._onExitHelp()
        })
    };
    this.unload = function() {
        s_oStage.removeChild(f);
        var a = this;
        f.off("pressup",
        function() {
            a._onExitHelp()
        })
    };
    this._onExitHelp = function() {
        this.unload();
        s_oGame.onStartGame()
    };
    this._init(a)
}
function CGfxButton(a, b, c) {
    var e, f, d;
    this._init = function(a, b, c) {
        e = [];
        f = [];
        d = new createjs.Bitmap(c);
        d.x = a;
        d.y = b;
        d.regX = c.width / 2;
        d.regY = c.height / 2;
        s_oStage.addChild(d);
        this._initListener()
    };
    this.unload = function() {
        d.off("mousedown", this.buttonDown);
        d.off("pressup", this.buttonRelease);
        s_oStage.removeChild(d)
    };
    this.setVisible = function(a) {
        d.visible = a
    };
    this._initListener = function() {
        d.on("mousedown", this.buttonDown);
        d.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        e[a] = b;
        f[a] = c
    };
    this.buttonRelease = function() {
        d.scaleX = 1;
        d.scaleY = 1;
        e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(f[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        d.scaleX = .9;
        d.scaleY = .9;
        e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b
    };
    this.setX = function(a) {
        d.x = a
    };
    this.setY = function(a) {
        d.y = a
    };
    this.getButtonImage = function() {
        return d
    };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.y
    };
    this._init(a, b, c);
    return this
}
function CGame(a) {
    var b = !1,
    c, e, f, d, g, l, k, h, n, s, E, w, p, C, P, u, A, x, J, G, K, y, D, q, I = [],
    m,
    t,
    B,
    F,
    z,
    N,
    O,
    L,
    r,
    M,
    Q,
    v,
    H;
    this._init = function() {
        Q = new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(Q);
        var a = s_oSpriteLibrary.getSprite("balls");
        w = Math.floor(a.width / NUM_BALL_COLORS);
        L = new createjs.SpriteSheet({
            images: [a],
            frames: {
                width: w,
                height: a.height,
                regX: 0,
                regY: 0
            },
            animations: {
                ball_0: [9],
                ball_1: [0],
                ball_2: [1],
                ball_3: [2],
                ball_4: [3],
                ball_5: [4],
                ball_6: [5],
                ball_7: [6],
                ball_8: [7],
                ball_9: [8]
            }
        });
        this._initLevel(a);
        v = new CInterface(L);
        v.setNextBall(G - 1);
        new CHelpPanel(s_oSpriteLibrary.getSprite("bg_help"))
    };
    this.unload = function() {
        b = !1;
        v.unload();
        H && H.unload();
        s_oStage.removeAllChildren()
    };
    this._initLevel = function(a) {
        k = l = 0;
        p = w / 2;
        var b = w - 5;
        BOARD_OFFSET_X = (CANVAS_WIDTH - w * BOARD_COLS) / 2;
        var c = w / 2;
        B = new CVector2;
        F = new CVector2;
        z = new CVector2;
        N = new CVector2;
        P = w * BOARD_COLS + BOARD_OFFSET_X;
        var d, e;
        q = [];
        for (var h = 0; h < BOARD_ROWS; h++) {
            for (var f = [], g = 0; g < BOARD_COLS; g++) d = BOARD_OFFSET_Y + h * b,
            e = BOARD_OFFSET_X + g * w,
            h & 1 && (e += c),
            f.push({
                x: e,
                y: d
            });
            q.push(f)
        }
        OFFSET_Y_GAME_OVER = d;
        d = BOARD_OFFSET_Y + (BOARD_ROWS + 1) * b;
        B.set(CANVAS_WIDTH / 2, d);
        r = new createjs.Sprite(L, "ball_0");
        r.stop();
        r.x = B.getX();
        r.y = B.getY();
        r.regX = Math.floor(a.width / NUM_BALL_COLORS / 2);
        r.regY = a.height / 2;
        s_oStage.addChild(r);
        this._createMatBalls(L);
        this.resetLevel()
    };
    this.resetLevel = function() {
        e = c = !1;
        h = 89;
        n = toRadian(89);
        s = 1;
        C = u = E = 0;
        N.set(1, 0);
        z.set(0, -1);
        f = d = !1;
        A = 0;
        x = s_oSpriteLibrary.getSprite("wall_tile").height;
        y = Array(MAX_BALL_ADJACENCY);
        D = Array(MAX_BALL_ADJACENCY);
        for (var a = 0; a < MAX_BALL_ADJACENCY; a++) y[a] = D[a] = -1;
        this._cleanWall();
        this._loadLevel();
        this._chooseBall();
        r.gotoAndStop("ball_" + (G - 1));
        this._chooseBall();
        I = [];
        v && v.refreshLevelText(k + 1);
        b = !0
    };
    this._createMatBalls = function(a) {
        m = Array(BOARD_ROWS);
        t = Array(BOARD_ROWS);
        for (var b = 0; b < BOARD_ROWS; b++) m[b] = Array(BOARD_COLS),
        t[b] = Array(BOARD_COLS);
        M = new createjs.Container;
        s_oStage.addChild(M);
        b = {
            images: [s_oSpriteLibrary.getSprite("ball_explosion")],
            frames: {
                width: 150,
                height: 150,
                regX: 50,
                regY: 40
            },
            animations: {
                explosion: [0, 14, "invisible"],
                invisible: [15]
            }
        };
        b = new createjs.SpriteSheet(b);
        O = new createjs.Container;
        for (var c = 0; c < BOARD_ROWS; c++) for (var d = 0; d < BOARD_COLS; d++) if (! (c & 1 && d === BOARD_COLS - 1)) {
            m[c][d] = 1;
            var e = new CBall(q[c][d].x, q[c][d].y, 1, a, b, O);
            t[c][d] = e
        }
        s_oStage.addChild(O)
    };
    this._cleanWall = function() {
        for (; 0 < I.length;) {
            var a = I.pop();
            M.removeChild(a)
        }
        I = []
    };
    this._loadLevel = function() {
        var a;
        g = !1;
        a = K[k];
        for (var b = a.split("a"), c = 0; c < BOARD_ROWS; c++) for (var d = 0; d < BOARD_COLS; d++) void 0 !== t[c][d] && (a.charAt(c * BOARD_COLS + d), m[c][d] = Number(b[c * BOARD_COLS + d]), t[c][d].setInfo(Number(b[c * BOARD_COLS + d])))
    };
    this._chooseBall = function() {
        J = G;
        for (var a = [], b = 0; b < BOARD_ROWS; b++) for (var c = 0; c < BOARD_COLS; c++) {
            for (var d = !1,
            e = 0; e < a.length; e++) m[b][c] === a[e] && (d = !0); ! 1 === d && 1 !== m[b][c] && a.push(m[b][c])
        }
        for (b = 0;;) {
            b = randRange(2, NUM_BALL_COLORS + 1);
            d = !1;
            for (e = 0; e < a.length; e++) if (b === a[e]) {
                d = !0;
                break
            }
            if (!0 === d) break
        }
        G = b;
        v && v.setNextBall(G - 1)
    };
    this._gameOver = function() {
        b = !1; ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("game_over");
        H = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        H.show(l, !1);
        try {
            gameAs.show();
        } catch(e) {}
        var insert_ads=setTimeout("mobConfig.stop()",500);
    };
    this._win = function() {
        b = !1;
        H = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        H.show(l, !0)
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("restart")
    };
    this.onStartGame = function() {
        b = !0
    };
    this.tapScreen = function(a, b) {
        var c = new CVector2;
        c.set( - 1, 0);
        var d = new CVector2;
        d.set(a - B.getX(), b - B.getY());
        d.normalize();
        n = angleBetweenVectors(c, d);
        h = toDegree(n);
        5 > h ? h = 5 : 175 < h && (h = 175);
        c.set( - 1, 0);
        n = toRadian(h);
        rotateVector2D(n, c);
        c.setY( - 1 * c.getY()); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("launch");
        g = !0
    };
    this._verifyVictory = function() {
        for (var a = !0,
        b = 0; b < BOARD_ROWS; b++) for (var c = 0; c < BOARD_COLS; c++) 1 < m[b][c] && m[b][c] < CODE_EXPLODING_BALL && (a = !1);
        return a
    };
    this._verifyGameOver = function() {
        for (var a = !1,
        b = 0; b < BOARD_ROWS; b++) for (var c = 0; c < BOARD_COLS; c++) if (1 < m[b][c] && m[b][c] < CODE_EXPLODING_BALL && t[b][c].getY() >= OFFSET_Y_GAME_OVER - u) {
            a = !0;
            break
        }
        return a
    };
    this._removeBalls = function() {
        for (var a = 0,
        b = 0,
        c = !1; a < MAX_BALL_ADJACENCY;) { - 1 !== y[a] && b++;
            if (2 < b) {
                c = !0;
                break
            }
            a++
        }
        if (c) {
            for (a = 0; a < MAX_BALL_ADJACENCY;) - 1 !== y[a] && (m[y[a]][D[a]] = CODE_EXPLODING_BALL, t[y[a]][D[a]].destroy(), f = !0),
            a++;
            for (a = 0; a < MAX_BALL_ADJACENCY; a++) y[a] = D[a] = -1;
            this._checkIsland();
            s++
        } else for (s = 1, a = 0; a < MAX_BALL_ADJACENCY; a++) y[a] = D[a] = -1
    };
    this._checkIsland = function() {
        for (var a = 0,
        b = 0,
        c = Array(BOARD_ROWS), a = 0; a < BOARD_ROWS; a++) for (c[a] = Array(BOARD_COLS), b = 0; b < BOARD_COLS; b++) c[a][b] = 0;
        for (b = 0; b < BOARD_COLS; b++) this._recursiveIsland(0, b, c);
        this._markIsland(c)
    };
    this._markIsland = function(a) {
        for (var b = 0,
        c = 0,
        b = 0; b < BOARD_ROWS; b++) for (c = 0; c < BOARD_COLS; c++) 0 === a[b][c] && 1 < m[b][c] && m[b][c] < CODE_EXPLODING_BALL && (m[b][c] = CODE_EXPLODING_ISLE)
    };
    this._recursiveIsland = function(a, b, c) {
        0 < c[a][b] || 1 === m[a][b] || m[a][b] === CODE_EXPLODING_BALL || (c[a][b] = 1, 0 === (a & 1) ? (b + 1 < BOARD_COLS && this._recursiveIsland(a, b + 1, c), -1 < b - 1 && this._recursiveIsland(a, b - 1, c), -1 < a - 1 && -1 < b - 1 && this._recursiveIsland(a - 1, b - 1, c), -1 < a - 1 && this._recursiveIsland(a - 1, b, c), a + 1 < BOARD_ROWS && -1 < b - 1 && this._recursiveIsland(a + 1, b - 1, c)) : (b + 1 < BOARD_COLS && this._recursiveIsland(a, b + 1, c), -1 < b - 1 && this._recursiveIsland(a, b - 1, c), -1 < a - 1 && b + 1 < BOARD_COLS && this._recursiveIsland(a - 1, b + 1, c), -1 < a - 1 && this._recursiveIsland(a - 1, b, c), a + 1 < BOARD_ROWS && b + 1 < BOARD_COLS && this._recursiveIsland(a + 1, b + 1, c)), a + 1 < BOARD_ROWS && this._recursiveIsland(a + 1, b, c))
    };
    this._checkBallsWithSameColor = function(a, b, c) {
        for (var d = !1,
        e = 0; e < MAX_BALL_ADJACENCY;) {
            if (y[e] === a && D[e] === b) {
                d = !0;
                break
            }
            e++
        }
        if (!d && m[a][b] === c) {
            e = 0;
            for (d = !1; e < MAX_BALL_ADJACENCY;) {
                if ( - 1 === y[e]) {
                    y[e] = a;
                    D[e] = b;
                    d = !0;
                    break
                }
                e++
            } ! 1 !== d && (0 === (a & 1) ? (b + 1 < BOARD_COLS && this._checkBallsWithSameColor(a, b + 1, c), -1 < b - 1 && this._checkBallsWithSameColor(a, b - 1, c), -1 < a - 1 && -1 < b - 1 && this._checkBallsWithSameColor(a - 1, b - 1, c), -1 < a - 1 && this._checkBallsWithSameColor(a - 1, b, c), a + 1 < BOARD_ROWS && -1 < b - 1 && this._checkBallsWithSameColor(a + 1, b - 1, c)) : (b + 1 < BOARD_COLS && this._checkBallsWithSameColor(a, b + 1, c), -1 < b - 1 && this._checkBallsWithSameColor(a, b - 1, c), -1 < a - 1 && b + 1 < BOARD_COLS && this._checkBallsWithSameColor(a - 1, b + 1, c), -1 < a - 1 && this._checkBallsWithSameColor(a - 1, b, c), a + 1 < BOARD_ROWS && b + 1 < BOARD_COLS && this._checkBallsWithSameColor(a + 1, b + 1, c)), a + 1 < BOARD_ROWS && this._checkBallsWithSameColor(a + 1, b, c))
        }
    };
    this._attachBall = function(a, b) {
        m[a][b] = J;
        t[a][b].setColor(J);
        this._checkBallsWithSameColor(a, b, J);
        this._removeBalls()
    };
    this._checkIfBallHooked = function() {
        var a = new createjs.Rectangle,
        b = w * w,
        c = new CVector2,
        d = new CVector2,
        e = new CVector2,
        h = new CVector2;
        a.height = a.width = w;
        for (var f = BOARD_ROWS - 1; - 1 < f; f--) for (var g = 0; g < BOARD_COLS; g++) if (! (f & 1 && g === BOARD_COLS - 1) && (a.x = q[f][g].x, a.y = q[f][g].y + u, !0 === pointInRect(F, a) && 1 === m[f][g])) {
            if (0 === f) return this._attachBall(f, g),
            !0;
            var k = [];
            0 < g && (c.set(q[f][g - 1].x + p, q[f][g - 1].y + p + u), k.push({
                v: c,
                r: f,
                c: g - 1
            }));
            g < BOARD_COLS - 1 && (d.set(q[f][g + 1].x + p, q[f][g + 1].y + p + u), k.push({
                v: d,
                r: f,
                c: g + 1
            }));
            e.set(q[f - 1][g].x + p, q[f - 1][g].y + p + u);
            k.push({
                v: e,
                r: f - 1,
                c: g
            });
            0 === f % 2 && 0 < g ? (h.set(q[f - 1][g - 1].x + p, q[f - 1][g - 1].y + p + u), k.push({
                v: h,
                r: f - 1,
                c: g - 1
            })) : 0 !== f % 2 && g < BOARD_COLS - 1 && (h.set(q[f - 1][g + 1].x + p, q[f - 1][g + 1].y + p + u), k.push({
                v: h,
                r: f - 1,
                c: g + 1
            }));
            for (var l = 0; l < k.length; l++) if (distance2(F, k[l].v) < b - 36 && 1 < m[k[l].r][k[l].c]) return this._attachBall(f, g),
            !0;
            break
        }
        return ! 1
    };
    this._removeExplodedBalls = function() {
        for (var a = 0,
        d = 0; d < BOARD_ROWS; d++) for (var e = 0; e < BOARD_COLS; e++) m[d][e] === CODE_EXPLODING_BALL ? (m[d][e] = 1, t[d][e].destroy(), a += (s - 1) * SCORE_EXPLOSION_BALL) : m[d][e] === CODE_EXPLODING_ISLE ? (m[d][e] = 1, t[d][e].destroy(), a += SCORE_FALLEN_BALL) : m[d][e] === CODE_EXPLODING_BOMB && (m[d][e] = 1, t[d][e].destroy()); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("explosion");
        0 < a && (l += a, 400 < a ? v.showCongrats(TEXT_INCREDIBLE) : 300 < a ? v.showCongrats(TEXT_EXCELLENT) : 200 < a ? v.showCongrats(TEXT_VERYGOOD) : 100 < a && v.showCongrats(TEXT_GOOD));
        v.refreshScore(l);
        if (c = this._verifyVictory()) b = !1,
        k++,
        k < NUM_LEVELS ? (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("win"), v.showNextLevel(k, l)) : this._win()
    };
    this._setEarthquake = function(a) {
        for (var b = EARTHQUAKE_TIME - 50 * a,
        c = 0; c < BOARD_ROWS; c++) for (var d = 0; d < BOARD_COLS; d++) 1 < m[c][d] && m[c][d] < CODE_EXPLODING_BALL && (t[c][d].stopTremble(), 0 < a && t[c][d].tremble(5, b))
    };
    this._updateWallPosition = function() {
        for (var a = s_oSpriteLibrary.getSprite("wall_tile"), b = 0; b < BOARD_COLS; b++) {
            var c = new createjs.Bitmap(a);
            c.x = b * w + BOARD_OFFSET_X;
            c.y = BOARD_OFFSET_Y + u - x;
            M.addChild(c);
            I.push(c)
        }
    };
    this._updateMatch = function() {
        if (!0 !== c) if (!1 === d) z.set( - 1, 0),
        rotateVector2D(n, z),
        z.normalize(),
        !0 === g && (g = !1, d = !0, F.setV(B), z.setY( - 1 * z.getY()), z.scalarProduct(BALL_SPEED));
        else {
            var a = TIME_FOR_UPDATING_PHYSICS,
            b = s_iTimeElaps,
            b = b + s_iTimeElaps,
            a = Math.floor(b / a);
            50 < a && (a = 50);
            for (b = 0; b < a && !0 !== this._updatePhysics(); b++);
        }
    };
    this._updatePhysics = function() {
        F.add(z);
        r.x = F.getX();
        r.y = F.getY();
        if (r.x <= BOARD_OFFSET_X + p || r.x >= P - p - 2) E++,
        z = reflectVectorV2(z, N);
        return this._checkIfBallHooked() ? (d = !1, r.x = B.getX(), r.y = B.getY(), r.gotoAndStop("ball_" + (G - 1)), A++, A < NUM_LAUNCH_FOR_EARTHQUAKE && (A === NUM_LAUNCH_FOR_EARTHQUAKE - 2 ? this._setEarthquake(1) : A === NUM_LAUNCH_FOR_EARTHQUAKE - 1 ? this._setEarthquake(2) : this._setEarthquake(0)), A === NUM_LAUNCH_FOR_EARTHQUAKE && (u += x, A = 0, this._setEarthquake(0), this._updateWallPosition(), this._updateMatPosition()), !1 === this._verifyVictory() && (e = this._verifyGameOver(), !0 === e ? this._gameOver() : this._chooseBall()), !0) : !1
    };
    this._updateMatPosition = function() {
        for (var a = 0; a < BOARD_ROWS; a++) for (var b = 0; b < BOARD_COLS; b++) a & 1 && b === BOARD_COLS - 1 || t[a][b].increaseY(x)
    };
    this.update = function() { ! 1 !== b && (!1 === f ? this._updateMatch() : 50 > C ? C += s_iTimeElaps: (C = 0, f = !1, this._removeExplodedBalls()))
    };
    s_oGame = this;
    BOARD_OFFSET_Y = a.board_y;
    BALL_SPEED = a.ball_speed;
    NUM_BALL_COLORS = a.ball_colors;
    NUM_LAUNCH_FOR_EARTHQUAKE = a.shot_for_ceiling;
    SCORE_EXPLOSION_BALL = a.score_explosion;
    SCORE_FALLEN_BALL = a.score_fall;
    K = [];
    K = a.levels;
    NUM_LEVELS = K.length;
    this._init()
}
var s_oGame;