var menuViewLayer;
var gameView;
var gameViewBackground;
var zy_bar;
var zygoUrl;
function ua() {
    var USER_AGENT = navigator.userAgent;
    if (USER_AGENT.indexOf('iPhone') > -1 || USER_AGENT.indexOf('iPad') > -1 || USER_AGENT.indexOf('iPod') > -1) {
        return true;
    } else {
        return false;
    }
}
var MenuView = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        var StartBtn = new cc.MenuItemSprite(new cc.Sprite(res.Btnn_png), new cc.Sprite(res.Btns_png), this.onPlay, this);
        var Btn = new cc.Menu(StartBtn);
        Btn.setPosition(size.width / 2, size.height / 2);
        this.addChild(Btn);
        return true;
    },
    onPlay: function() {
        this.removeFromParent(true);
        gameViewBackground.scoreBg();
        gameViewBackground.drawGuidtext();
        gameView.startGame();
    }
});
var MenuViewScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        gameViewBackground = new GameViewBackground();
        this.addChild(gameViewBackground, -1, 0);
        gameView = new GameView();
        this.addChild(gameView, -1, 0);
        menuViewLayer = new MenuView();
        this.addChild(menuViewLayer);
        var bbb = ua();
        if (ua()) {
            var zylogo_type = res.zylogo_ios;
            zygoUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.chaozh.iReaderFree";
        } else {
            var zylogo_type = res.zylogo;
            zygoUrl = "http://ah2.zhangyue.com/zybook3/app/app.php?ca=Represent.GameShare&a0=nggzgzhangyue";
        }
        var zyLogo = new cc.MenuItemSprite(new cc.Sprite(zylogo_type), new cc.Sprite(zylogo_type), this.zyUrl, this);
    },
    zyUrl: function() {
        goUrl(zygoUrl);
    },
});