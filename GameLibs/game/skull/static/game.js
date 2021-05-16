var CRENDER_DEBUG = !1;
"undefined" == typeof window.console && (window.console = {
    log: function() {}
});
window.Utils || (window.Utils = {});
Utils.detectMobileBrowser = function() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
};
Utils.getTouchStartEvent = function() {
    return Utils.isWindowsPhone() ? "mspointerdown": "touchstart"
};
Utils.getTouchMoveEvent = function() {
    return Utils.isWindowsPhone() ? "mspointermove": "touchmove"
};
Utils.getTouchEndEvent = function() {
    return Utils.isWindowsPhone() ? "mspointerup": "touchend"
};
Utils.touchScreen = Utils.detectMobileBrowser();
Utils.globalScale = 1;
Utils.globalPixelScale = 1;
Utils.isWindowHidden = !1;
Utils.DOMMainContainerId = "main_container";
Utils.DOMProgressContainerId = "progress_container";
Utils.DOMProgressId = "progress";
Utils.DOMScreenBackgroundContainerId = "screen_background_container";
Utils.DOMScreenBackgroundWrapperId = "screen_background_wrapper";
Utils.DOMScreenBackgroundId = "screen_background";
Utils.DOMScreenContainerId = "screen_container";
Utils.DOMScreenWrapperId = "screen_wrapper";
Utils.DOMScreenId = "screen";
Utils.DOMP2lContainerId = "p2l_container";
Utils.DOMP2lId = "p2l";
Utils.DOMMarkId = "mark";
Utils.setCookie = function(a, c) {
    try {
        window.localStorage.setItem(a, c)
    } catch(d) {
        var e = new Date;
        e.setDate(e.getDate() + 3650);
        document.cookie = a + "=" + c + "; expires=" + e.toUTCString()
    }
};
Utils.getCookie = function(a) {
    var c;
    try {
        c = window.localStorage.getItem(a)
    } catch(d) {
        a += "=";
        c = document.cookie.indexOf(a);
        if ( - 1 == c) return null;
        var e = document.cookie.indexOf(";", c + a.length); - 1 == e && (e = document.cookie.length);
        c = unescape(document.cookie.substring(c + a.length, e))
    }
    return c
};
Utils.bindEvent = function(a, c, d) {
    a.addEventListener ? a.addEventListener(c, d, !1) : a.attachEvent && a.attachEvent("on" + c, d)
};
Utils.getObjectLeft = function(a) {
    var c = a.offsetLeft;
    a.offsetParent && (c += Utils.getObjectLeft(a.offsetParent));
    return c
};
Utils.getObjectTop = function(a) {
    var c = a.offsetTop;
    a.offsetParent && (c += Utils.getObjectTop(a.offsetParent));
    return c
};
Utils.parseGet = function() {
    var a = {},
    c = window.location.toString(),
    d = window.location.toString().indexOf("?");
    if (0 <= d) for (var c = c.substr(d + 1, c.length), d = c.split("&"), e = 0; e < d.length; e++) c = d[e].split("="),
    a[c[0]] = c[1];
    return a
};
Utils.getMouseCoord = function(a, c) {
    var d = a || window.event;
    d.touches && (d = d.touches[0]);
    if (!d) return {
        x: 0,
        y: 0
    };
    var e = 0,
    f = 0,
    g = 0,
    l = 0;
    c && (e = Utils.getObjectLeft(c), f = Utils.getObjectTop(c));
    if (d.pageX || d.pageY) g = d.pageX,
    l = d.pageY;
    else if (d.clientX || d.clientY) g = d.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft,
    l = d.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
    return {
        x: g - e,
        y: l - f
    }
};
Utils.removeFromArray = function(a, c) {
    for (var d = [], e = 0; e < a.length; e++) a[e] != c && d.push(a[e]);
    return d
};
Utils.showLoadProgress = function(a) {
    var c = Utils.globalScale,
    d;
    d = "Loading: " + a + "%<br><br>";
    d += '<div style="display: block; background: #000; width: ' + a * c * 2 + "px; height: " + 10 * c + 'px;">&nbsp;</div>';
    document.getElementById(Utils.DOMProgressId).innerHTML = d
};
Utils.hideAddressBarLock = !1;
Utils.mobileHideAddressBar = function() {
    Utils.hideAddressBarLock || window.scrollTo(0, 1)
};
Utils.mobileCheckIphone4 = function() {
    return Utils.touchScreen && 0 <= navigator.userAgent.indexOf("iPhone") && 2 == window.devicePixelRatio
};
Utils.mobileCheckBrokenAndroid = function() {
    return Utils.touchScreen && Utils.isAndroid() && !Utils.isChrome() && !Utils.isFirefox()
};
Utils.mobileCheckSlowDevice = function() {
    return Utils.mobileCheckBrokenAndroid() && 0 <= navigator.userAgent.toLowerCase().indexOf("sm-t310") || Utils.touchScreen && Utils.isAndroid() && Utils.isFirefox() && 0 <= navigator.userAgent.toLowerCase().indexOf("sm-t310")
};
Utils.isChrome = function() {
    var a = !1;
    0 <= navigator.userAgent.toLowerCase().indexOf("chrome") && (a = !0, Utils.isAndroid() && 22 > (parseInt((/Chrome\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || 0) && (a = !1));
    return a
};
Utils.isAndroid = function() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("android")
};
Utils.isIOS = function() {
    return navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/g) ? !0 : !1
};
Utils.isPlayFreeBrowser = function() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("playfreebrowser")
};
Utils.isFirefox = function() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("firefox")
};
Utils.isWindowsPhone = function() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("windows phone")
};
Utils.checkSpilgamesEnvironment = function() {
    return "undefined" != typeof window.ExternalAPI && "Spilgames" == ExternalAPI.type && ExternalAPI.check()
};
Utils.disableCorrectPixelRatio = !1;
Utils.mobileCorrectPixelRatio = function() {
    for (var a = document.getElementsByTagName("head")[0].getElementsByTagName("meta"), c = !0, d = null, e = "", f = 0; f < a.length; f++) if ("viewport" == a[f].name) {
        d = a[f];
        c = !1;
        break
    }
    c && (d = document.createElement("meta"), d.name = "viewport");
    e += "minimal-ui, target-densitydpi=device-dpi, user-scalable=0";
    Utils.isPlayFreeBrowser() && (e += ", width=device-width, height=device-height");
    a = 1 / (window.devicePixelRatio ? window.devicePixelRatio: 1);
    a = a.toFixed(2);
    Utils.disableCorrectPixelRatio && (a = 1);
    d.content = e + (", initial-scale=" + a + ", maximum-scale=" + a + ", minimum-scale=" + a);
    c && document.getElementsByTagName("head")[0].appendChild(d)
};
Utils.getMobileScreenResolution = function(a) {
    var c = 1,
    d = window.innerWidth,
    e = window.innerHeight;
    d && e || (d = screen.width, e = screen.height);
    c = 1;
    Utils.disableCorrectPixelRatio && (c = window.devicePixelRatio ? window.devicePixelRatio: 1);
    var d = d * c,
    e = e * c,
    f = [{
        scale: 1,
        width: 320,
        height: 480
    },
    {
        scale: 1.5,
        width: 480,
        height: 720
    },
    {
        scale: 2,
        width: 640,
        height: 960
    }],
    g = {
        width: 0,
        height: 0
    },
    l = "";
    Utils.touchScreen ? (g.width = Math.min(d, e), g.height = Math.max(d, e)) : (a && (f = [{
        scale: 1,
        width: 480,
        height: 320
    },
    {
        scale: 1.5,
        width: 720,
        height: 480
    },
    {
        scale: 2,
        width: 960,
        height: 640
    }]), g.width = d, g.height = e);
    l = "height";
    d = Number.MAX_VALUE;
    for (e = 0; e < f.length; e++) {
        var h = Math.abs(g[l] - f[e][l]);
        d > h && (d = h, c = f[e].scale)
    }
    return Utils.getScaleScreenResolution(c, a)
};
Utils.getScaleScreenResolution = function(a, c) {
    var d = Math.round(320 * a),
    e = Math.round(480 * a);
    return {
        width: c ? e: d,
        height: c ? d: e,
        scale: a
    }
};
Utils.imagesRoot = "static";
Utils.initialResolution = {
    width: 320,
    height: 480,
    scale: 1
};
Utils.ignoreMobileHeightCorrection = !1;
Utils.createLayout = function(a, c, d, e) {
    var f = Utils.globalScale;
    Utils.initialResolution = c;
    d = window.innerHeight;
    document.body.style.overflow = "hidden";
    var g;
    g = "" + ('<div id="' + Utils.DOMProgressContainerId + '" align="center" style="width: 100%; height: ' + d + 'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">');
    g += '<table cellspacing="0" cellpadding="0" border="0"><tr><td id="' + Utils.DOMProgressId + '" align="center" valign="middle" style="width: ' + c.width + "px; height: " + c.height + "px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: " + 12 * f + 'px; vertical-align: middle; box-sizing: border-box"></td></tr></table>';
    g = g + "</div>" + ('<div id="' + Utils.DOMScreenBackgroundContainerId + '" style="width: 100%; height: ' + d + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">');
    g += '<div id="' + Utils.DOMScreenBackgroundWrapperId + '" style="width: ' + c.width + "px; height: " + c.height + 'px; position: relative; left: 0px; overflow: hidden;">';
    e || (g += '<canvas id="' + Utils.DOMScreenBackgroundId + '" width="' + c.width + '" height="' + c.height + '"></canvas>');
    g += "</div>";
    g += "</div>";
    g += '<div id="' + Utils.DOMScreenContainerId + '" style="width: 100%; height: ' + d + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';
    g += '<div id="' + Utils.DOMScreenWrapperId + '" width="' + c.width + '" height="' + c.height + '" style="width: ' + c.width + "px; height: " + c.height + 'px; position: relative; left: 0px; overflow: hidden;">';
    e || (g += '<canvas id="' + Utils.DOMScreenId + '" style="position: absolute; left: 0px; top: 0px;" width="' + c.width + '" height="' + c.height + '">You browser does not support this application :(</canvas>');
    g += "</div>";
    g += "</div>";
    a.innerHTML = g;
    a = document.createElement("div");
    a.setAttribute("id", Utils.DOMP2lContainerId);
    a.setAttribute("align", "center");
    a.setAttribute("style", "width: 100%; height: " + d + "px; position: absolute; left: 0px; top: 0px; visibility: hidden; z-index: 1000; background-color: #fff; background-image: url(" + Utils.imagesRoot + "/p2l.jpg); background-repeat: no-repeat; background-position: center center");
    c = document.createElement("img");
    c.setAttribute("id", Utils.DOMP2lId);
    c.width = 1;
    c.height = 1;
    c.style.display = "none";
    a.appendChild(c);
    document.body.appendChild(a);
    a = document.createElement("div");
    a.setAttribute("id", Utils.DOMMarkId);
    a.style.position = "fixed";
    a.style.right = "0px";
    a.style.bottom = "0px";
    a.style.width = "1px";
    a.style.height = "1px";
    a.style.background = "";
    a.style.zIndex = "100000";
    document.body.appendChild(a);
    Utils.fitLayoutToScreen()
};
Utils.showMainLayoutContent = function() {
    document.getElementById(Utils.DOMProgressContainerId).style.display = "none";
    document.getElementById(Utils.DOMScreenContainerId).style.display = "block";
    document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block"
};
Utils.preventEvent = function(a) {
    a.preventDefault();
    a.stopPropagation();
    a.cancelBubble = !0;
    return a.returnValue = !1
};
Utils.addMobileListeners = function(a, c) { ! c && navigator.userAgent.match(/(iPad|iPhone|iPod).*CPU.*OS 7_\d/i) || Utils.bindEvent(document.body, Utils.isWindowsPhone() ? "MSPointerDown": "touchstart", Utils.preventEvent);
    Utils.isPlayFreeBrowser() || Utils.bindEvent(window, "scroll",
    function(a) {
        setTimeout(Utils.mobileHideAddressBar, 300)
    });
    document.addEventListener(Utils.getVisibiltyProps().visibilityChange, Utils.handleVisibilityChange, !1);
    setInterval("Utils.checkOrientation(" + (a ? "true": "false") + ")", 500);
    setTimeout(Utils.mobileHideAddressBar, 500)
};
Utils.handleVisibilityChange = function() {
    Utils.isWindowHidden = document[Utils.getVisibiltyProps().hidden];
    Utils.dispatchEvent(Utils.isWindowHidden ? "hidewindow": "showwindow")
};
Utils.getVisibiltyProps = function() {
    var a, c;
    "undefined" !== typeof document.hidden ? (a = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (a = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (a = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (a = "webkitHidden", c = "webkitvisibilitychange");
    return {
        hidden: a,
        visibilityChange: c
    }
};
Utils.staticWindowRect = null;
Utils.setWindowRect = function(a, c) {
    Utils.staticWindowRect = {
        width: a,
        height: c
    }
};
Utils.getWindowRect = function() {
    var a = document.getElementById(Utils.DOMMarkId);
    return Utils.isAndroid() && a ? {
        width: window.innerWidth,
        height: a.offsetTop + 1
    }: {
        width: window.innerWidth,
        height: window.innerHeight
    }
};
Utils.storeOrient = null;
Utils.noCheckOrient = !1;
Utils.checkOrientation = function(a) {
    if (Utils.touchScreen && document.getElementById(Utils.DOMScreenContainerId) && !Utils.noCheckOrient && 1 != Utils.parseGet().nocheckorient) {
        var c = Utils.getWindowRect(),
        c = c.width > c.height;
        Utils.storeOrient !== c && (Utils.storeOrient = c, c != a ? (Utils.dispatchEvent("lockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "visible", document.getElementById(Utils.DOMProgressContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "none", document.getElementById(Utils.DOMScreenContainerId).style.display = "none") : (Utils.dispatchEvent("unlockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMProgressContainerId).style.visibility = "visible", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block", document.getElementById(Utils.DOMScreenContainerId).style.display = "block"), Utils.checkSpilgamesEnvironment() && (document.getElementById(Utils.DOMP2lContainerId).style.display = "none"), setTimeout(Utils.mobileHideAddressBar, 900), setTimeout(Utils.fitLayoutToScreen, 1E3))
    }
};
Utils.fitLayoutTimer = null;
Utils.addFitLayoutListeners = function() {
    Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500)
};
Utils.removeFitLayoutListeners = function() {
    clearInterval(Utils.fitLayoutTimer)
};
Utils.fitLayoutLock = !1;
Utils.fitLayoutCorrectHeight = 0;
Utils.fitLayoutAlign = "center";
Utils.fitLayoutVerticalAlign = "top";
Utils.layoutMargin = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
Utils.fitLayoutToScreen = function(a) {
    if (!Utils.fitLayoutLock) {
        var c, d, e, f, g;
        g = Utils.getWindowRect();
        "object" == typeof a && a.width || (f = Utils.staticWindowRect ? Utils.staticWindowRect: g, d = f.width, e = f.height, Utils.checkSpilgamesEnvironment() && (e -= 25), e += Utils.fitLayoutCorrectHeight, e -= Utils.layoutMargin.top, e -= Utils.layoutMargin.bottom, d -= Utils.layoutMargin.left, d -= Utils.layoutMargin.right, a = {
            width: d,
            height: e
        });
        if (c = document.getElementById(Utils.DOMScreenWrapperId)) {
            c.initWidth || (c.initWidth = Utils.initialResolution.width, c.initHeight = Utils.initialResolution.height);
            d = c.initWidth;
            e = c.initHeight;
            var l = 1,
            l = a.width / d,
            h = a.height / e,
            l = l < h ? l: h;
            Utils.globalPixelScale = l;
            d = Math.floor(d * l);
            e = Math.floor(e * l);
            if (c.lastWidth != a.width || c.lastHeight != a.height || c.lastRealWidth != g.width || c.lastRealHeight != g.height) c.lastWidth = a.width,
            c.lastHeight = a.height,
            c.lastRealWidth = g.width,
            c.lastRealHeight = g.height,
            Utils.resizeElement(Utils.DOMScreenId, d, e),
            Utils.resizeElement(Utils.DOMScreenBackgroundId, d, e),
            Utils.resizeElement(Utils.DOMProgressContainerId, f.width, f.height),
            Utils.resizeElement(Utils.DOMProgressId, d, e),
            c = Utils.resizeElement(Utils.DOMScreenWrapperId, d, e),
            Utils.alignElement(c, g, d, e),
            c = Utils.resizeElement(Utils.DOMScreenBackgroundWrapperId, d, e),
            Utils.alignElement(c, g, d, e),
            Utils.resizeElement(Utils.DOMP2lContainerId, f.width, f.height),
            Utils.resizeElement(Utils.DOMScreenContainerId, f.width, f.height),
            Utils.resizeElement(Utils.DOMScreenBackgroundContainerId, f.width, f.height),
            Utils.dispatchEvent("fitlayout"),
            Utils.isPlayFreeBrowser() && window.scrollTo(1, 2),
            setTimeout(Utils.mobileHideAddressBar, 10)
        }
    }
};
Utils.alignElement = function(a, c, d, e) {
    a && (a.style.left = "left" == Utils.fitLayoutAlign ? Utils.layoutMargin.left + "px": "right" == Utils.fitLayoutAlign ? Math.floor(c.width - d - Utils.layoutMargin.right) + "px": Math.floor((c.width - d - Utils.layoutMargin.left - Utils.layoutMargin.right) / 2) + "px", a.style.top = "top" == Utils.fitLayoutVerticalAlign ? Utils.layoutMargin.top + "px": "bottom" == Utils.fitLayoutVerticalAlign ? Math.floor(c.height - e - Utils.layoutMargin.bottom) + "px": Math.floor((c.height - e - Utils.layoutMargin.top - Utils.layoutMargin.bottom) / 2) + "px")
};
Utils.resizeElement = function(a, c, d) {
    a = document.getElementById(a);
    if (!a) return null;
    a.style.width = Math.floor(c) + "px";
    a.style.height = Math.floor(d) + "px";
    return a
};
Utils.drawIphoneLimiter = function(a, c) {
    c ? a.drawRectangle(240, 295, 480, 54, "#f00", !0, .5, !0) : a.drawRectangle(160, 448, 320, 64, "#f00", !0, .5, !0)
};
Utils.drawGrid = function(a, c, d) {
    "undefined" == typeof c && (c = !1);
    "undefined" == typeof d && (d = "#FFF");
    var e = c ? 480 : 320;
    c = c ? 320 : 480;
    for (var f = 10; f < e; f += 10) {
        var g = .1 + (f - 10) / 10 % 10 * .1;
        a.drawLine(f, 0, f, c, 1, d, g)
    }
    for (f = 10; f < c; f += 10) g = .1 + (f - 10) / 10 % 10 * .1,
    a.drawLine(0, f, e, f, 1, d, g)
};
Utils.drawScaleFix = function(a, c) {.75 == Utils.globalScale && (c ? a.drawRectangle(507, 160, 54, 320, "#000", !0, 1, !0) : a.drawRectangle(160, 507, 320, 54, "#000", !0, 1, !0));
    1.5 == Utils.globalScale && (c ? a.drawRectangle(510, 160, 60, 320, "#000", !0, 1, !0) : a.drawRectangle(160, 510, 320, 60, "#000", !0, 1, !0))
};
Utils.grad2radian = function(a) {
    return a / (180 / Math.PI)
};
Utils.radian2grad = function(a) {
    return 180 / Math.PI * a
};
Utils.eventsListeners = [];
Utils.onlockscreen = null;
Utils.onunlockscreen = null;
Utils.onhidewindow = null;
Utils.onshowwindow = null;
Utils.onfitlayout = null;
Utils.addEventListener = function(a, c) {
    EventsManager.addEvent(Utils, a, c)
};
Utils.removeEventListener = function(a, c) {
    EventsManager.removeEvent(Utils, a, c)
};
Utils.dispatchEvent = function(a, c) {
    return EventsManager.dispatchEvent(Utils, a, c)
};
Utils.isArray = function(a) {
    return "[object Array]" === Object.prototype.toString.call(a)
};
Utils.isPlainObject = function(a) {
    return a && a.constructor ? a.constructor === Object: !1
};
Utils.getFunctionArguments = function(a, c) {
    "undefined" == typeof c && (c = 0);
    return [].slice.call(a, c)
};
Utils.proxy = function(a, c) {
    var d = Utils.getFunctionArguments(arguments, 2);
    return function() {
        return a.apply(c || this, Utils.getFunctionArguments(arguments, 0).concat(d))
    }
};
Utils.extend = function(a, c) {
    var d = function() {};
    d.prototype = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.superclass = c.prototype
};
Utils.callSuperConstructor = function(a, c) {
    a.superclass.constructor.apply(c, Utils.getFunctionArguments(arguments, 2))
};
Utils.callSuperMethod = function(a, c, d) {
    return a.superclass[d].apply(c, Utils.getFunctionArguments(arguments, 3))
};
Utils.copyObjectProps = function(a, c) {
    for (var d in a) if (a.hasOwnProperty(d)) if (Utils.isArray(a[d])) {
        c[d] = [];
        for (var e = 0; e < a[d].length; e++)"object" == typeof a[d][e] && (c[d][e] = Utils.cloneEmptyObject(a[d][e])),
        Utils.copyObjectProps(a[d][e], c[d][e])
    } else Utils.isPlainObject(a[d]) ? (c[d] = {},
    Utils.copyObjectProps(a[d], c[d])) : c[d] = a[d]
};
Utils.cloneEmptyObject = function(a) {
    return a.constructor ? new a.constructor: {}
};
Utils.clone = function(a) {
    if (!a || "object" != typeof a) return a;
    var c = Utils.cloneEmptyObject(a);
    Utils.copyObjectProps(a, c);
    return c
};
Utils.switchToTimeMode = function(a) {
    Tween.STEP_TYPE = Tween.STEP_BY_TIME;
    StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_TIME;
    Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_TIME;
    Sprite.CHANGE_FRAME_DELAY = a
};
Utils.getGameID = function() {
    if (window.GAME_ID && "my_game" != window.GAME_ID) return window.GAME_ID;
    for (var a = window.location.toString().split("/"), c = ""; ! c;) c = a.pop(),
    1 < c.split(".").length && (c = ""),
    0 == a.length && (c = "my_game");
    return c
};
Utils.ajax = function(a, c, d, e, f, g) {
    var l;
    l = window.XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
    l.onreadystatechange = function() {
        if (4 == l.readyState) if (200 == l.status) {
            var a = l.responseText;
            "json" == e && (a = JSON.parse(a));
            "xml" == e && (a = Utils.parseXMLString(a));
            f && f(a, l)
        } else g && g(l.status, l)
    };
    if (d) {
        var h = [],
        q;
        for (q in d) h.push(encodeURIComponent(q) + "=" + encodeURIComponent(d[q]));
        d = h.join("&")
    } else d = "";
    c || (c = "GET");
    l.open(c, a + ("GET" == c ? "?" + d: ""), !0);
    "POST" == c && l.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    l.send("GET" != c ? d: null)
};
Utils.get = function(a, c, d, e, f) {
    Utils.ajax(a, "GET", c, d, e, f)
};
Utils.post = function(a, c, d, e, f) {
    Utils.ajax(a, "POST", c, d, e, f)
};
Utils.getBezierBasis = function(a, c, d) {
    function e(a) {
        return 1 >= a ? 1 : a * e(a - 1)
    }
    return e(c) / (e(a) * e(c - a)) * Math.pow(d, a) * Math.pow(1 - d, c - a)
};
Utils.getBezierCurve = function(a, c) {
    "undefined" == typeof c && (c = .1);
    var d = [];
    c /= a.length;
    for (var e = 0; e < 1 + c; e += c) {
        1 < e && (e = 1);
        var f = d.length;
        d[f] = {
            x: 0,
            y: 0
        };
        for (var g = 0; g < a.length; g++) {
            var l = Utils.getBezierBasis(g, a.length - 1, e);
            d[f].x += a[g].x * l;
            d[f].y += a[g].y * l
        }
    }
    return d
};
Utils.parseXMLString = function(a) {
    var c = null;
    if ("undefined" != typeof window.DOMParser) c = (new window.DOMParser).parseFromString(a, "text/xml");
    else if ("undefined" != typeof window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM")) c = new window.ActiveXObject("Microsoft.XMLDOM"),
    c.async = "false",
    c.loadXML(a);
    else throw Error("No XML parser found");
    return c
};
function ImagesPreloader() {
    this.curItem = -1;
    this.loadedImages = {};
    this.processCallback = this.endCallback = this.data = null;
    this.minProgressVal = 0;
    this.maxProgressVal = 100;
    this.wait = Utils.proxy(this.wait, this)
}
ImagesPreloader.prototype.load = function(a, c, d) {
    this.data = a;
    this.endCallback = c;
    this.processCallback = d;
    for (a = 0; a < this.data.length; a++) c = this.data[a],
    d = new Image,
    d.src = c.src,
    this.loadedImages[c.name] = d;
    this.wait()
};
ImagesPreloader.prototype.wait = function() {
    var a = 0,
    c = 0,
    d;
    for (d in this.loadedImages) this.loadedImages[d].complete && a++,
    c++;
    a >= c ? this.endCallback && this.endCallback(this.loadedImages) : (this.processCallback && this.processCallback(Math.floor(a / c * this.maxProgressVal + this.minProgressVal)), setTimeout(this.wait, 50))
};
function SoundsPreloader(a, c, d) {
    this.sounds = a;
    this.endCallback = c;
    this.progressCallback = d;
    this.minProgressVal = this.loadedCount = 0;
    this.maxProgressVal = 100
}
SoundsPreloader.prototype.isMp3Support = function() {
    return "" != document.createElement("audio").canPlayType("audio/mpeg")
};
SoundsPreloader.prototype.isWebAudio = function() {
    return Boolean(window.AudioMixer) && AudioMixer.isWebAudioSupport()
};
SoundsPreloader.prototype.load = function(a, c, d) {
    a && (this.sounds = a);
    c && (this.endCallback = c);
    d && (this.progressCallback = d);
    if (!this.sounds || 1 > this.sounds.length || !this.isWebAudio()) this.endCallback && this.endCallback();
    else {
        a = this.isMp3Support() ? "mp3": "ogg";
        var e;
        this.loadedCount = 0;
        var f = this;
        for (d = 0; d < this.sounds.length; d++) c = this.sounds[d] + "." + a,
        this.isWebAudio() ? (e = window.XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP"), e.open("GET", c, !0), e.responseType = "arraybuffer", e.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status) {
                var a = this.soundSrc;
                AudioMixer.waContext || (AudioMixer.waContext = new AudioContext);
                AudioMixer.waContext.decodeAudioData(this.response,
                function(c) {
                    AudioMixer.buffer[a] = c;
                    f.soundIsLoaded(null, f)
                },
                function(a) {
                    f.soundIsLoaded(null, f)
                })
            }
        },
        e.soundSrc = c, e.send()) : (e = document.createElement("audio"), e.src = c, e.type = "mp3" == a ? "audio/mpeg": "audio/ogg", e.preload = "auto", e.load(), e.addEventListener("canplay", Utils.proxy(this.soundIsLoaded, e, this)), e.addEventListener("canplaythrough", Utils.proxy(this.soundIsLoaded, e, this)))
    }
};
SoundsPreloader.prototype.soundIsLoaded = function(a, c) {
    if (this.nodeName && "audio" == this.nodeName.toLowerCase()) {
        if (this.alreadyLoaded) return;
        this.alreadyLoaded = !0
    }
    c.loadedCount++;
    c.progressCallback && c.progressCallback(Math.floor(c.loadedCount / c.sounds.length * c.maxProgressVal + c.minProgressVal));
    c.loadedCount >= c.sounds.length && c.endCallback && c.endCallback()
};
function Asset(a, c, d, e, f, g) {
    this.name = a + "";
    this.src = c + "";
    this.width = d;
    this.height = e;
    this.frames = f;
    this.layers = g;
    this.object = this.bitmap = null;
    this.ready = !(!this.width || !this.height);
    this.spriteClass = null
}
Asset.prototype.detectSize = function() {
    if (!this.bitmap) return ! 1;
    try {
        isNaN(this.width) && (this.width = this.bitmap.width ? parseInt(this.bitmap.width) : 0),
        isNaN(this.height) && (this.height = this.bitmap.height ? parseInt(this.bitmap.height) : 0)
    } catch(a) {
        CRENDER_DEBUG && console.log(a)
    }
    return ! isNaN(this.width) && !isNaN(this.height)
};
Asset.prototype.normalize = function(a) {
    if (!this.ready && this.detectSize()) {
        if (isNaN(this.frames) || 1 > this.frames) this.frames = 1;
        if (isNaN(this.layers) || 1 > this.layers) this.layers = 1;
        this.width = Math.ceil(this.width / this.layers / a);
        this.height = Math.ceil(this.height / this.frames / a);
        this.ready = !0
    }
};
function AssetsLibrary(a, c, d) {
    this.path = "images";
    this.scale = 1;
    this.items = {};
    this.bitmaps = {};
    this.loaded = !1;
    this.onloadprogress = this.onload = null;
    this.spriteClass = Sprite;
    this.onLoadHandler = Utils.proxy(this.onLoadHandler, this);
    this.onLoadProgressHandler = Utils.proxy(this.onLoadProgressHandler, this);
    this.init(a, c);
    this.addAssets(d)
}
AssetsLibrary.prototype.init = function(a, c) {
    "undefined" != typeof a && (this.path = a + "");
    "undefined" != typeof c && (this.scale = parseFloat(c), isNaN(this.scale) && (this.scale = 1))
};
AssetsLibrary.prototype.load = function(a, c, d, e) {
    this.onload = a;
    this.onloadprogress = c;
    a = new ImagesPreloader;
    c = [];
    for (var f in this.items) c.push(this.items[f]);
    "undefined" != typeof d && (a.minProgressVal = d);
    "undefined" != typeof e && (a.maxProgressVal = e);
    a.load(c, this.onLoadHandler, this.onLoadProgressHandler)
};
AssetsLibrary.prototype.onLoadProgressHandler = function(a) {
    if ("function" == typeof this.onloadprogress) this.onloadprogress(a)
};
AssetsLibrary.prototype.onLoadHandler = function(a) {
    this.loaded = !0;
    for (var c in a) {
        var d = this.items[c];
        d.bitmap = a[c];
        d.normalize(this.scale)
    }
    if ("function" == typeof this.onload) this.onload(this.items)
};
AssetsLibrary.prototype.addAssets = function(a) {
    if ("undefined" != typeof a && "object" == typeof a) for (var c = 0; c < a.length; c++) {
        var d = a[c];
        d.noscale = "undefined" == typeof d.noscale ? !1 : d.noscale;
        d.noscale || (d.src = "%SCALE%/" + d.src);
        this.addAsset(d)
    }
};
AssetsLibrary.prototype.addAsset = function(a, c, d, e, f, g) {
    var l = null;
    "object" == typeof a && 1 == arguments.length && (c = a.name, d = a.width || NaN, e = a.height || NaN, f = a.frames || 1, g = a.layers || 1, l = a.spriteClass || null, properties = a.properties || null, a = a.src);
    a = a.replace("%SCALE%", "%PATH%/" + this.scale);
    a = a.replace("%PATH%", this.path);
    if ("undefined" == typeof c) {
        var h = a.split("/"),
        h = h.pop(),
        h = h.split(".");
        c = h = h.shift() + ""
    }
    h = new Asset(c, a, d, e, f, g);
    h.spriteClass = l;
    if (properties) for (var q in properties)"undefined" == typeof h[q] && (h[q] = properties[q]);
    return this.items[c] = h
};
AssetsLibrary.prototype.addObject = function(a) {
    var c = this.addAsset("%SCALE%/" + a.image, a.name, a.width * this.scale, a.height * this.scale, a.frames, a.layers);
    c && (c.object = a);
    return c
};
AssetsLibrary.prototype.getAsset = function(a, c) {
    var d = null;
    "undefined" != typeof this.items[a] && this.items[a].bitmap && (d = "undefined" != typeof c && !c || this.items[a].ready ? this.items[a] : null);
    if (!d) throw Error('Trying to get undefined asset "' + a + '"');
    return d
};
AssetsLibrary.prototype.getSprite = function(a, c, d) {
    var e = null,
    e = null;
    try {
        e = this.getAsset(a, !0)
    } catch(f) {
        e = new Asset
    }
    if ((d = d || e.spriteClass || this.spriteClass || window.Sprite) && "function" == typeof d || "function" == typeof window[d]) d = "function" == typeof d ? d: window[d];
    e = d.create && "function" == typeof d.create ? d.create(e, this) : new d(e.bitmap, e.width, e.height, e.frames, e.layers);
    if (c && "object" == typeof c) for (var g in c) e[g] = c[g];
    return e
};
AssetsLibrary.prototype.getBitmap = function(a) {
    try {
        return this.getAsset(a, !0).bitmap
    } catch(c) {
        return null
    }
};
function Vector(a, c) {
    "undefined" == typeof a && (a = 0);
    this.x = a;
    "undefined" == typeof c && (c = 0);
    this.y = c
}
Vector.prototype.isZero = function() {
    return 0 == this.x && 0 == this.y
};
Vector.prototype.clone = function() {
    return new Vector(this.x, this.y)
};
Vector.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
Vector.prototype.subtract = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
};
Vector.prototype.mult = function(a) {
    this.x *= a;
    this.y *= a;
    return this
};
Vector.prototype.invert = function() {
    this.mult( - 1);
    return this
};
Vector.prototype.rotate = function(a, c) {
    "undefined" == typeof c && (c = new Vector(0, 0));
    var d = this.clone();
    d.subtract(c);
    d.x = this.x * Math.cos(a) + this.y * Math.sin(a);
    d.y = this.x * -Math.sin(a) + this.y * Math.cos(a);
    d.add(c);
    this.x = d.x;
    this.y = d.y;
    return this
};
Vector.prototype.normalize = function(a, c) {
    "undefined" == typeof c && (c = new Vector(0, 0));
    this.subtract(c);
    this.rotate( - a);
    return this
};
Vector.prototype.getLength = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
};
Vector.prototype.distanceTo = function(a) {
    p2 = this.clone();
    p2.subtract(a);
    return p2.getLength()
};
function Rectangle(a, c, d, e, f) {
    this.center = new Vector(a, c);
    this.width = d;
    this.height = e;
    this.angle = f;
    this.vertices = [];
    this.AABB = [];
    this.refreshVertices()
}
Rectangle.prototype.clone = function() {
    return new Rectangle(this.center.x, this.center.y, this.width, this.height, this.angle)
};
Rectangle.prototype.refreshVertices = function() {
    var a = this.width / 2,
    c = this.height / 2;
    this.vertices = [];
    this.vertices.push(new Vector( - a, c));
    this.vertices.push(new Vector(a, c));
    this.vertices.push(new Vector(a, -c));
    this.vertices.push(new Vector( - a, -c));
    this.AABB = [this.center.clone(), this.center.clone()];
    for (a = 0; 4 > a; a++) this.vertices[a].rotate( - this.angle, this.center),
    this.vertices[a].x < this.AABB[0].x && (this.AABB[0].x = this.vertices[a].x),
    this.vertices[a].x > this.AABB[1].x && (this.AABB[1].x = this.vertices[a].x),
    this.vertices[a].y < this.AABB[0].y && (this.AABB[0].y = this.vertices[a].y),
    this.vertices[a].y > this.AABB[1].y && (this.AABB[1].y = this.vertices[a].y)
};
Rectangle.prototype.move = function(a, c) {
    this.center.add(new Vector(a, c));
    this.refreshVertices()
};
Rectangle.prototype.rotate = function(a) {
    this.angle += a;
    this.refreshVertices()
};
Rectangle.prototype.hitTestPoint = function(a) {
    a = a.clone();
    a.normalize( - this.angle, this.center);
    return Math.abs(a.x) <= this.width / 2 && Math.abs(a.y) <= this.height / 2
};
Rectangle.prototype.hitTestRectangle = function(a) {
    var c = this.clone();
    a = a.clone();
    var d, e, f;
    c.move( - this.center.x, -this.center.y);
    a.move( - this.center.x, -this.center.y);
    a.center.rotate(this.angle);
    c.rotate( - this.angle);
    a.rotate( - this.angle);
    d = Math.max(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x) - Math.min(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x);
    e = c.AABB[1].x - c.AABB[0].x;
    f = a.AABB[1].x - a.AABB[0].x;
    if (d > e + f) return ! 1;
    d = Math.max(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y) - Math.min(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y);
    e = c.AABB[1].y - c.AABB[0].y;
    f = a.AABB[1].y - a.AABB[0].y;
    if (d > e + f) return ! 1;
    c.move( - a.center.x, -a.center.y);
    a.move( - a.center.x, -a.center.y);
    c.center.rotate(a.angle);
    c.refreshVertices();
    c.rotate( - a.angle);
    a.rotate( - a.angle);
    d = Math.max(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x) - Math.min(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x);
    e = c.AABB[1].x - c.AABB[0].x;
    f = a.AABB[1].x - a.AABB[0].x;
    if (d > e + f) return ! 1;
    d = Math.max(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y) - Math.min(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y);
    e = c.AABB[1].y - c.AABB[0].y;
    f = a.AABB[1].y - a.AABB[0].y;
    return d > e + f ? !1 : !0
};
var EventsManager = {
    addEvent: function(a, c, d) {
        if (a.eventsListeners) {
            for (var e = 0; e < a.eventsListeners.length; e++) if (a.eventsListeners[e].type === c && a.eventsListeners[e].callback === d) return;
            a.eventsListeners.push({
                type: c,
                callback: d
            })
        }
    },
    removeEvent: function(a, c, d) {
        if (a.eventsListeners) for (var e = 0; e < a.eventsListeners.length; e++) if (a.eventsListeners[e].type === c && a.eventsListeners[e].callback === d) {
            a.eventsListeners = Utils.removeFromArray(a.eventsListeners, a.eventsListeners[e]);
            break
        }
    },
    dispatchEvent: function(a, c, d) {
        if (a.eventsListeners) {
            var e;
            if ("function" == typeof a["on" + c] && (e = a["on" + c](d), !1 === e)) return ! 1;
            for (var f = 0; f < a.eventsListeners.length; f++) if (a.eventsListeners[f].type === c && (e = a.eventsListeners[f].callback(d), !1 === e)) return ! 1
        }
    },
    hasEventListener: function(a, c) {
        if (a.eventsListeners) {
            for (var d = 0; d < a.eventsListeners.length; d++) if (a.eventsListeners[d].type === c) return ! 0;
            return ! 1
        }
    },
    removeAllEventListeners: function(a, c) {
        if (a.eventsListeners) {
            "undefined" == typeof c && (a.eventsListeners = []);
            for (var d = [], e = 0; e < a.eventsListeners.length; e++) a.eventsListeners[e].type !== c && d.push(a.eventsListeners[e]);
            a.eventsListeners = d
        }
    }
};
function EventsProxy() {
    this.eventsListeners = []
}
EventsProxy.prototype.addEventListener = function(a, c) {
    EventsManager.addEvent(this, a, c)
};
EventsProxy.prototype.removeEventListener = function(a, c) {
    EventsManager.removeEvent(this, a, c)
};
EventsProxy.prototype.dispatchEvent = function(a, c) {
    return EventsManager.dispatchEvent(this, a, c)
};
EventsProxy.prototype.hasEventListener = function(a) {
    return EventsManager.hasEventListener(this, a)
};
EventsProxy.prototype.removeAllEventListeners = function(a) {
    EventsManager.removeAllEventListeners(this, a)
};
var Easing = {
    back: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a * (2.70158 * a - 1.70158) + c
        },
        easeOut: function(a, c, d, e) {
            return d * ((a = a / e - 1) * a * (2.70158 * a + 1.70158) + 1) + c
        },
        easeInOut: function(a, c, d, e) {
            var f = 1.70158;
            return 1 > (a /= e / 2) ? d / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c: d / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
        }
    },
    bounce: {
        easeIn: function(a, c, d, e) {
            return d - Easing.bounce.easeOut(e - a, 0, d, e) + c
        },
        easeOut: function(a, c, d, e) {
            return (a /= e) < 1 / 2.75 ? 7.5625 * d * a * a + c: a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c: a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + c: d * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
        },
        easeInOut: function(a, c, d, e) {
            return a < e / 2 ? .5 * Easing.bounce.easeIn(2 * a, 0, d, e) + c: .5 * Easing.bounce.easeOut(2 * a - e, 0, d, e) + .5 * d + c
        }
    },
    circular: {
        easeIn: function(a, c, d, e) {
            return - d * (Math.sqrt(1 - (a /= e) * a) - 1) + c
        },
        easeOut: function(a, c, d, e) {
            return d * Math.sqrt(1 - (a = a / e - 1) * a) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? -d / 2 * (Math.sqrt(1 - a * a) - 1) + c: d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
        }
    },
    cubic: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a * a + c
        },
        easeOut: function(a, c, d, e) {
            return d * ((a = a / e - 1) * a * a + 1) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a + c: d / 2 * ((a -= 2) * a * a + 2) + c
        }
    },
    exponential: {
        easeIn: function(a, c, d, e) {
            return 0 == a ? c: d * Math.pow(2, 10 * (a / e - 1)) + c
        },
        easeOut: function(a, c, d, e) {
            return a == e ? c + d: d * ( - Math.pow(2, -10 * a / e) + 1) + c
        },
        easeInOut: function(a, c, d, e) {
            return 0 == a ? c: a == e ? c + d: 1 > (a /= e / 2) ? d / 2 * Math.pow(2, 10 * (a - 1)) + c: d / 2 * ( - Math.pow(2, -10 * --a) + 2) + c
        }
    },
    linear: {
        easeIn: function(a, c, d, e) {
            return d * a / e + c
        },
        easeOut: function(a, c, d, e) {
            return d * a / e + c
        },
        easeInOut: function(a, c, d, e) {
            return d * a / e + c
        }
    },
    quadratic: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a + c
        },
        easeOut: function(a, c, d, e) {
            return - d * (a /= e) * (a - 2) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a + c: -d / 2 * (--a * (a - 2) - 1) + c
        }
    },
    quartic: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a * a * a + c
        },
        easeOut: function(a, c, d, e) {
            return - d * ((a = a / e - 1) * a * a * a - 1) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a * a + c: -d / 2 * ((a -= 2) * a * a * a - 2) + c
        }
    },
    quintic: {
        easeIn: function(a, c, d, e) {
            return d * (a /= e) * a * a * a * a + c
        },
        easeOut: function(a, c, d, e) {
            return d * ((a = a / e - 1) * a * a * a * a + 1) + c
        },
        easeInOut: function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a * a * a + c: d / 2 * ((a -= 2) * a * a * a * a + 2) + c
        }
    },
    sine: {
        easeIn: function(a, c, d, e) {
            return - d * Math.cos(a / e * (Math.PI / 2)) + d + c
        },
        easeOut: function(a, c, d, e) {
            return d * Math.sin(a / e * (Math.PI / 2)) + c
        },
        easeInOut: function(a, c, d, e) {
            return - d / 2 * (Math.cos(Math.PI * a / e) - 1) + c
        }
    },
    smoothstep: {
        easeIn: function(a, c, d, e) {
            a = a / e / 2;
            return 2 * a * a * (3 - 2 * a) * d + c
        },
        easeOut: function(a, c, d, e) {
            a = (a / e + 1) / 2;
            return (2 * a * a * (3 - 2 * a) - 1) * d + c
        },
        easeInOut: function(a, c, d, e) {
            a /= e;
            return a * a * (3 - 2 * a) * d + c
        }
    }
};
function Tween(a, c, d, e, f, g) {
    Utils.callSuperConstructor(Tween, this);
    "object" != typeof a && (a = null);
    if (a) {
        if ("undefined" == typeof a[c]) throw Error('Trying to tween undefined property "' + c + '"');
        if (isNaN(a[c])) throw Error("Tweened value can not be " + typeof a[c]);
    } else if (isNaN(c)) throw Error("Tweened value can not be " + typeof c);
    "function" != typeof g && (g = Easing.linear.easeIn);
    this.obj = a;
    this.prop = c;
    this.onfinish = this.onchange = null;
    this.start = d;
    this.end = e;
    this.duration = ~~f;
    this.callback = g;
    this.playing = !1;
    this._pos = -1;
    this.newly = !0;
    this.eventsListeners = []
}
Utils.extend(Tween, EventsProxy);
Tween.prototype.play = function() {
    this.playing = !0;
    this.tick(0)
};
Tween.prototype.pause = function() {
    this.playing = !1
};
Tween.prototype.rewind = function() {
    this._pos = -1
};
Tween.prototype.forward = function() {
    this._pos = this.duration
};
Tween.prototype.stop = function() {
    this.pause();
    this.rewind()
};
Tween.prototype.updateValue = function(a) {
    this.obj ? this.obj[this.prop] = a: this.prop = a
};
Tween.prototype.tick = function(a) {
    if (!this.playing) return ! 1;
    a || (a = 0);
    Tween.STEP_TYPE == Tween.STEP_BY_FRAME ? this._pos++:this._pos += a;
    if (0 > this._pos) return ! 1;
    if (this._pos > this.duration) return this.finish();
    a = this.callback;
    a = a(this._pos, this.start, this.end - this.start, this.duration);
    this.updateValue(a);
    this.dispatchEvent("change", {
        target: this,
        value: a
    });
    return ! 1
};
Tween.prototype.finish = function() {
    this.stop();
    this.updateValue(this.end);
    return ! 1 === this.dispatchEvent("finish", {
        target: this,
        value: this.end
    }) ? !1 : !0
};
Tween.STEP_BY_FRAME = 0;
Tween.STEP_BY_TIME = 1;
Tween.STEP_TYPE = Tween.STEP_BY_FRAME;
function DisplayObjectContainer() {
    Utils.callSuperConstructor(DisplayObjectContainer, this);
    this.parent = null;
    this.objectsCounter = 0;
    this.objects = [];
    this.height = this.width = this.y = this.x = 0;
    this.anchor = {
        x: 0,
        y: 0
    };
    this.hitArea = null;
    this.scaleY = this.scaleX = 1;
    this.rotation = this.skewY = this.skewX = 0;
    this.opacity = 1;
    this.fillPattern = this.fillRadialGradient = this.fillLinearGradient = this.fillColor = null
}
Utils.extend(DisplayObjectContainer, EventsProxy);
DisplayObjectContainer.prototype.getAbsoluteRotation = function() {
    return this.rotation + (this.parent ? this.parent.getAbsoluteRotation() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteOpacity = function() {
    return this.opacity * (this.parent ? this.parent.getAbsoluteOpacity() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleX = function() {
    return this.scaleX * (this.parent ? this.parent.getAbsoluteScaleX() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleY = function() {
    return this.scaleY * (this.parent ? this.parent.getAbsoluteScaleY() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteSkewX = function() {
    return this.skewX + (this.parent ? this.parent.getAbsoluteSkewX() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteSkewY = function() {
    return this.skewY + (this.parent ? this.parent.getAbsoluteSkewY() : 0)
};
DisplayObjectContainer.prototype.render = function(a, c, d) {
    for (var e = 0; e < this.objects.length; e++) obj = this.objects[e],
    obj.destroy ? (this.removeChild(obj), e--) : obj.visible && obj.render(a, c, d)
};
DisplayObjectContainer.prototype.getX = function() {
    return Math.round(this.x * Utils.globalScale)
};
DisplayObjectContainer.prototype.getY = function() {
    return Math.round(this.y * Utils.globalScale)
};
DisplayObjectContainer.prototype.getWidth = function() {
    return this.width * Math.abs(this.getAbsoluteScaleX()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getHeight = function() {
    return this.height * Math.abs(this.getAbsoluteScaleY()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getPosition = function() {
    return {
        x: this.x,
        y: this.y
    }
};
DisplayObjectContainer.prototype.setPosition = function(a, c) {
    if ("undefined" == typeof c && "undefined" != typeof a.x && "undefined" != typeof a.y) return this.setPosition(a.x, a.y);
    this.x = parseFloat(a);
    this.y = parseFloat(c)
};
DisplayObjectContainer.prototype.setPropScale = function(a) {
    this.scaleX = this.scaleY = 1 * a
};
DisplayObjectContainer.prototype.getAnchor = function() {
    return this.anchor
};
DisplayObjectContainer.prototype.setAnchor = function(a, c) {
    if ("undefined" == typeof c && "undefined" != typeof a.x && "undefined" != typeof a.y) return this.setAnchor(a.x, a.y);
    this.anchor.x = parseFloat(a);
    this.anchor.y = parseFloat(c)
};
DisplayObjectContainer.prototype.alignAnchor = function(a, c) {
    a = parseInt(a);
    isNaN(a) && (a = DisplayObjectContainer.ANCHOR_ALIGN_CENTER);
    0 > a && (a = DisplayObjectContainer.ANCHOR_ALIGN_LEFT);
    0 < a && (a = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT);
    c = parseInt(c);
    isNaN(c) && (c = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE);
    0 > c && (c = DisplayObjectContainer.ANCHOR_VALIGN_TOP);
    0 < c && (c = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM);
    this.anchor.x = this.width * a / 2;
    this.anchor.y = this.height * c / 2;
    return this.getAnchor()
};
DisplayObjectContainer.prototype.getAbsoluteAnchor = function() {
    return this.getPosition()
};
DisplayObjectContainer.prototype.getRelativeCenter = function() {
    var a = this.getAnchor(),
    c = this.getAbsoluteRotation(),
    a = {
        x: a.x,
        y: a.y
    };
    0 != c ? (a = new Vector( - a.x * this.getAbsoluteScaleX(), -a.y * this.getAbsoluteScaleY()), a.rotate( - c)) : (a.x = -(a.x * this.getAbsoluteScaleX()), a.y = -(a.y * this.getAbsoluteScaleY()));
    return a
};
DisplayObjectContainer.prototype.getAbsolutePosition = function() {
    var a = {
        x: this.x,
        y: this.y
    };
    if (this.parent) {
        var c = this.parent.getAbsolutePosition(),
        d = this.parent.getAbsoluteRotation();
        if (0 != d) {
            var e = new Vector(a.x * this.parent.getAbsoluteScaleX(), a.y * this.parent.getAbsoluteScaleY());
            e.rotate( - d);
            a.x = c.x + e.x;
            a.y = c.y + e.y
        } else a.x = c.x + a.x * this.parent.getAbsoluteScaleX(),
        a.y = c.y + a.y * this.parent.getAbsoluteScaleY()
    }
    return a
};
DisplayObjectContainer.prototype.getAbsoluteCenter = function() {
    var a = this.getAbsolutePosition(),
    c = this.getRelativeCenter();
    a.x += c.x;
    a.y += c.y;
    return a
};
DisplayObjectContainer.prototype.getCenter = function() {
    return this.getAbsoluteCenter()
};
DisplayObjectContainer.prototype.getHitAreaRectangle = function() {
    if (!this.hitArea) return this.getDrawRectangle();
    var a = this.getAbsoluteRotation(),
    c = this.getAbsoluteScaleX(),
    d = this.getAbsoluteScaleY(),
    e = this.getCenter(),
    f = new Rectangle(0, 0, this.hitArea.width * Math.abs(c), this.hitArea.height * Math.abs(d), a);
    0 != a ? (c = new Vector(this.hitArea.x * c, this.hitArea.y * d), c.rotate( - a), f.move(e.x + c.x, e.y + c.y)) : f.move(e.x + this.hitArea.x * c, e.y + this.hitArea.x * d);
    return f
};
DisplayObjectContainer.prototype.getDrawRectangle = function() {
    var a = this.getCenter(),
    c = new Rectangle(0, 0, this.width * Math.abs(this.getAbsoluteScaleX()), this.height * Math.abs(this.getAbsoluteScaleY()), this.getAbsoluteRotation());
    c.move(a.x, a.y);
    return c
};
DisplayObjectContainer.prototype.getAABBRectangle = function() {
    var a = this.getDrawRectangle(),
    c = a.AABB[1].x - a.AABB[0].x,
    d = a.AABB[1].y - a.AABB[0].y;
    return new Rectangle(a.AABB[0].x + c / 2, a.AABB[0].y + d / 2, c, d, 0)
};
DisplayObjectContainer.prototype.localToGlobal = function(a, c) {
    var d = "object" == typeof a && "undefined" != typeof a.x && "undefined" != typeof a.y ? new Vector(a.x + 0, a.y + 0) : new Vector(a, c);
    d.rotate(this.getAbsoluteRotation()).add(this.getAbsolutePosition());
    return d
};
DisplayObjectContainer.prototype.globalToLocal = function(a, c) {
    var d = "object" == typeof a && "undefined" != typeof a.x && "undefined" != typeof a.y ? new Vector(a.x + 0, a.y + 0) : new Vector(a, c);
    d.subtract(this.getAbsolutePosition()).rotate(this.getAbsoluteRotation());
    return d
};
DisplayObjectContainer.prototype.findMaxZIndex = function() {
    for (var a = -1,
    c = !1,
    d = 0; d < this.objects.length; d++) this.objects[d].zIndex > a && (a = this.objects[d].zIndex, c = d);
    return {
        index: c,
        zIndex: a
    }
};
DisplayObjectContainer.prototype.findMinZIndex = function() {
    for (var a = -1,
    c = !1,
    d = 0; d < this.objects.length; d++) 0 == d && (a = this.objects[d].zIndex, c = 0),
    this.objects[d].zIndex < a && (a = this.objects[d].zIndex, c = d);
    return {
        index: c,
        zIndex: a
    }
};
DisplayObjectContainer.prototype.addChild = function(a) {
    var c = this.findMaxZIndex(),
    d = a.zIndex;
    a.zIndex = !1 !== c.index ? c.zIndex + 1 : 0;
    this.objectsCounter++;
    a.uid = this.objectsCounter;
    a.parent = this;
    a.setStage(this.stage);
    this.objects.push(a);
    0 != d && this.setChildZIndex(a, ~~d);
    a.dispatchEvent("add", {
        target: a
    });
    return a
};
DisplayObjectContainer.prototype.setStage = function(a) {
    this.stage = a;
    for (var c = 0; c < this.objects.length; c++) this.objects[c].setStage(a)
};
DisplayObjectContainer.prototype.removeChild = function(a) {
    a && 0 <= this.objects.indexOf(a) && (a.clear(), a.removeAllEventListeners(), a.dispatchEvent("remove", {
        target: a
    }), a.parent = null, this.objects = Utils.removeFromArray(this.objects, a))
};
DisplayObjectContainer.prototype.setChildZIndex = function(a, c) {
    a.zIndex = c;
    this.objects = this.objects.sort(function(a, c) {
        return a.zIndex == c.zIndex ? a.uid > c.uid ? 1 : -1 : a.zIndex > c.zIndex ? 1 : -1
    })
};
DisplayObjectContainer.prototype.getHitArea = function() {
    return this.hitArea ? this.hitArea: {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
    }
};
DisplayObjectContainer.prototype.hitTestPointObject = function(a, c, d, e, f) {
    var g, l, h, q, z, v, t;
    "boolean" == typeof a.pixelCheck && (e = a.pixelCheck);
    t = a.getHitArea();
    h = t.width * Math.abs(a.getAbsoluteScaleX());
    q = t.height * Math.abs(a.getAbsoluteScaleY());
    z = a.getAbsoluteCenter();
    g = z.x + t.x - h / 2;
    l = z.y + t.y - q / 2;
    z = c;
    v = d;
    a.ignoreViewport || (z += this.stage.viewport.x, v += this.stage.viewport.y);
    t = !1;
    0 == a.getAbsoluteRotation() ? g <= z && l <= v && g + h >= z && l + q >= v && (t = !0) : (g = a.getHitAreaRectangle(), g.hitTestPoint(new Vector(z, v)) && (t = !0));
    t && e && (this.stage.buffer.width = this.stage.canvas.width, this.stage.buffer.height = this.stage.canvas.height, this.stage.clearScreen(this.stage.buffer), a.render(this.stage.buffer, a.static, 0), c = this.stage.buffer.ctx.getImageData(Math.floor(c * Utils.globalScale), Math.floor(d * Utils.globalScale), 1, 1), 0 == c.data[3] && (t = !1)); ! t && f && a.dragged && (t = !0);
    return t
};
DisplayObjectContainer.prototype.getObjectsStackByCoord = function(a, c, d, e) {
    for (var f, g = [], l = this.objects.length - 1; 0 <= l; l--) this.objects[l].visible && (f = this.objects[l], f.objects && f.objects.length && (g = g.concat(f.getObjectsStackByCoord(a, c, d, e))), this.hitTestPointObject(f, a, c, d, e) && g.push(f));
    return g
};
DisplayObjectContainer.prototype.doDrag = function(a, c) {
    for (var d = 0; d < this.objects.length; d++) this.objects[d].doDrag(a, c);
    if (this.dragged) {
        var d = a,
        e = c;
        this.ignoreViewport || (d += this.stage.viewport.x, e += this.stage.viewport.y);
        this.x = d - this.dragX;
        this.y = e - this.dragY
    }
};
DisplayObjectContainer.prototype.checkMouseOut = function(a, c) {
    for (var d = this.objects.length - 1; 0 <= d; d--) if (!1 === this.objects[d].checkMouseOut(a, c)) return;
    if (this.mouseOn && 0 > a.indexOf(this)) return this.mouseOn = !1,
    d = this.stage.finalizeMouseCoords(this, c),
    this.dispatchEvent("mouseout", {
        target: this,
        x: d.x,
        y: d.y
    })
};
DisplayObjectContainer.prototype.getMaxZIndexInStack = function(a) {
    for (var c = -1,
    d = 0,
    e = 0; e < a.length; e++) a[e].zIndex > c && (c = a[e].zIndex, d = e);
    return d
};
DisplayObjectContainer.prototype.sortStack = function(a, c) {
    return a.sort(function(a, e) {
        a.zIndex == e.zIndex ? c ? a.uid < e.uid ? 1 : -1 : a.uid > e.uid ? 1 : -1 : c ? a.zIndex < e.zIndex ? 1 : -1 : a.zIndex > e.zIndex ? 1 : -1
    })
};
DisplayObjectContainer.prototype.clear = function() {
    for (; this.objects.length;) this.removeChild(this.objects[0])
};
DisplayObjectContainer.prototype.getFillStyle = function(a) {
    var c = null;
    if (this.fillLinearGradient) {
        a = a.ctx.createLinearGradient(this.fillLinearGradient.x0 * Utils.globalScale, this.fillLinearGradient.y0 * Utils.globalScale, this.fillLinearGradient.x1 * Utils.globalScale, this.fillLinearGradient.y1 * Utils.globalScale);
        for (c = 0; c < this.fillLinearGradient.points.length; c++) a.addColorStop(this.fillLinearGradient.points[c].point, this.fillLinearGradient.points[c].color);
        c = a
    } else if (this.fillRadialGradient) {
        a = a.ctx.createRadialGradient(this.fillRadialGradient.x0 * Utils.globalScale, this.fillRadialGradient.y0 * Utils.globalScale, this.fillRadialGradient.r0 * Utils.globalScale, this.fillRadialGradient.x1 * Utils.globalScale, this.fillRadialGradient.y1 * Utils.globalScale, this.fillRadialGradient.r1 * Utils.globalScale);
        for (c = 0; c < this.fillRadialGradient.points.length; c++) a.addColorStop(this.fillRadialGradient.points[c].point, this.fillRadialGradient.points[c].color);
        c = a
    } else c = this.fillPattern ? a.ctx.createPattern(this.fillPattern.img, this.fillPattern.repeat) : this.fillColor;
    return c
};
DisplayObjectContainer.ANCHOR_ALIGN_LEFT = -1;
DisplayObjectContainer.ANCHOR_ALIGN_CENTER = 0;
DisplayObjectContainer.ANCHOR_ALIGN_RIGHT = 1;
DisplayObjectContainer.ANCHOR_VALIGN_TOP = -1;
DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE = 0;
DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM = 1;
var ANCHOR_ALIGN_LEFT = DisplayObjectContainer.ANCHOR_ALIGN_LEFT,
ANCHOR_ALIGN_CENTER = DisplayObjectContainer.ANCHOR_ALIGN_CENTER,
ANCHOR_ALIGN_RIGHT = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT,
ANCHOR_VALIGN_TOP = DisplayObjectContainer.ANCHOR_VALIGN_TOP,
ANCHOR_VALIGN_MIDDLE = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE,
ANCHOR_VALIGN_BOTTOM = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM;
function DisplayObject() {
    Utils.callSuperConstructor(DisplayObject, this);
    this.uid = 0;
    this.shadowColor = this.stage = null;
    this.zIndex = this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
    this.visible = !0;
    this.dragged = this.destroy = this.ignoreViewport = this.static = !1;
    this.dragY = this.dragX = 0;
    this.mouseOn = !1;
    this.allowDebugDrawing = !0;
    this.onbox2dsync = this.onremove = this.onadd = this.onrender = this.onenterframe = this.onprerender = this.onmousemove = this.oncontextmenu = this.onclick = this.onmouseup = this.onmousedown = this.onmouseout = this.onmouseover = this.pixelCheck = null
}
Utils.extend(DisplayObject, DisplayObjectContainer);
DisplayObject.prototype.setStatic = function(a, c) {
    a = Boolean(a);
    if (!c) for (var d = 0; d < this.objects.length; d++) this.objects[d].setStatic(a);
    return this.static != a ? (this.static = a, this.stage && this.stage.refreshBackground(), !0) : !1
};
DisplayObject.prototype.startDrag = function(a, c) {
    this.dragged = !0;
    this.dragX = a;
    this.dragY = c
};
DisplayObject.prototype.stopDrag = function() {
    this.dragged = !1;
    this.dragY = this.dragX = 0
};
DisplayObject.prototype.removeTweens = function() {
    this.stage && this.stage.clearObjectTweens(this)
};
DisplayObject.prototype.addTween = function(a, c, d, e, f, g) {
    if (this.stage) {
        var l = this[a];
        if (!isNaN(l)) return a = this.stage.createTween(this, a, l, c, d, e),
        a.onchange = g,
        a.onfinish = f,
        a
    }
};
DisplayObject.prototype.moveTo = function(a, c, d, e, f, g) {
    d = ~~d;
    0 >= d ? this.setPosition(a, c) : ((a = this.addTween("x", a, d, e)) && a.play(), (c = this.addTween("y", c, d, e, f, g)) && c.play());
    return this
};
DisplayObject.prototype.moveBy = function(a, c, d, e, f, g) {
    return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
DisplayObject.prototype.fadeTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.opacity = a: (a = this.addTween("opacity", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.fadeBy = function(a, c, d, e, f) {
    a = Math.max(0, Math.min(1, this.opacity + a));
    return this.fadeTo(a, c, d, e, f)
};
DisplayObject.prototype.rotateTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.rotation = a: (a = this.addTween("rotation", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.rotateBy = function(a, c, d, e, f) {
    return this.rotateTo(this.rotation + a, c, d, e, f)
};
DisplayObject.prototype.skewXTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.skewX = a: (a = this.addTween("skewX", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.skewXBy = function(a, c, d, e, f) {
    return this.skewXTo(this.skewX + a, c, d, e, f)
};
DisplayObject.prototype.skewYTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.skewY = a: (a = this.addTween("skewY", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.skewYBy = function(a, c, d, e, f) {
    return this.skewYTo(this.skewY + a, c, d, e, f)
};
DisplayObject.prototype.scaleTo = function(a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.scaleX = this.scaleY = a;
    else {
        var g = this.addTween("scaleX", a, c, d, e, f);
        g && g.play(); (a = this.addTween("scaleY", a, c, d, g ? null: e, g ? null: f)) && a.play()
    }
    return this
};
DisplayObject.prototype.setZIndex = function(a) {
    this.zIndex = ~~a;
    this.parent && this.parent.setChildZIndex(this, this.zIndex)
};
DisplayObject.prototype.hitTestPoint = function(a, c, d, e, f) {
    return this.stage ? this.stage.hitTestPointObject(this, a, c, d, e, f) : !1
};
DisplayObject.prototype.setRelativePosition = function(a, c, d, e) {
    switch (d) {
    case "right":
        a = this.stage.screenWidth - a;
        break;
    case "left":
        break;
    default:
        a = this.stage.screenWidth / 2 + a
    }
    switch (e) {
    case "bottom":
        c = this.stage.screenHeight - c;
        break;
    case "top":
        break;
    default:
        c = this.stage.screenHeight / 2 + c
    }
    this.setPosition(a, c)
};
DisplayObject.prototype.debugDraw = function() {
    if (this.visible && this.allowDebugDrawing) {
        var a = this.getAbsolutePosition(),
        c = this.getCenter(),
        d = this.getDrawRectangle(),
        e = this.getAABBRectangle();
        stage.drawCircle(a.x, a.y, 1, 1, "rgba(255,0,0,0.9)");
        stage.drawCircle(c.x, c.y, 1, 1, "rgba(0,255,0,0.9)");
        stage.drawLine(a.x, a.y, c.x, c.y, 1, "rgba(255,255,255,0.5)");
        stage.drawPolygon(d.vertices, .5, "rgba(255,0,255,0.5)", 1);
        stage.drawLine(e.vertices[0].x, e.vertices[0].y, e.vertices[2].x, e.vertices[2].y, 1, "rgba(255,255,255,0.5)");
        stage.drawLine(e.vertices[2].x, e.vertices[0].y, e.vertices[0].x, e.vertices[2].y, 1, "rgba(255,255,255,0.5)");
        stage.drawPolygon(e.vertices, .5, "rgba(255,255,255,0.5)")
    }
};
DisplayObject.prototype.fixChildrenParent = function(a) {
    for (a = 0; a < this.objects.length; a++) this.objects[a].parent = this,
    this.objects[a].fixChildrenParent()
};
DisplayObject.prototype.clone = function() {
    var a = Utils.clone(this);
    a.fixChildrenParent();
    return a
};
function Graphics() {
    Utils.callSuperConstructor(Graphics, this);
    this.y = this.x = 0;
    this.color = "#000";
    this.lineWidth = 1
}
Utils.extend(Graphics, DisplayObject);
Graphics.prototype.render = function(a, c, d) { !! this.static == !!c && this.dispatchEvent("render", {
        target: this,
        canvas: a,
        delta: d
    });
    Utils.callSuperMethod(Graphics, this, "render", a, c, d)
};
Graphics.prototype.prepareCanvas = function(a, c) {
    c.ctx.save();
    this.ignoreViewport || (a.x -= this.stage.viewport.x, a.y -= this.stage.viewport.y);
    a.x *= Utils.globalScale;
    a.y *= Utils.globalScale;
    c.ctx.translate(a.x, a.y);
    var d = this.getAbsoluteRotation();
    c.ctx.rotate(d);
    c.ctx.scale(this.getAbsoluteScaleX(), this.getAbsoluteScaleY());
    var e = this.getAbsoluteSkewX(),
    f = this.getAbsoluteSkewY();
    0 == e && 0 == f || c.ctx.transform(1, e, f, 1, 0, 0);
    this.shadowColor && (c.ctx.shadowColor = this.shadowColor, 0 != d ? (e = new Vector(this.shadowOffsetX * Utils.globalScale, this.shadowOffsetY * Utils.globalScale), e.rotate( - d), c.ctx.shadowOffsetX = e.x, c.ctx.shadowOffsetY = e.y) : (c.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, c.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale), c.ctx.shadowBlur = this.shadowBlur * Utils.globalScale)
};
Graphics.prototype.preparePath = function(a) {
    a.ctx.beginPath();
    a.ctx.strokeStyle = 0 < this.lineWidth ? this.color: "transparent";
    a.ctx.lineWidth = this.lineWidth * Utils.globalScale;
    a.ctx.globalAlpha = this.getAbsoluteOpacity();
    a.ctx.fillStyle = this.getFillStyle(a)
};
Graphics.prototype.finalizeCanvas = function(a) { (this.fillColor || this.fillLinearGradient || this.fillRadialGradient || this.fillPattern) && a.ctx.fill();
    a.ctx.stroke()
};
Graphics.prototype.restoreCanvas = function(a) {
    a.ctx.restore()
};
Graphics.circle = function(a, c, d) {
    Utils.callSuperConstructor(Graphics.circle, this);
    this.x = a;
    this.y = c;
    this.radius = d;
    this.width = 2 * d;
    this.height = 2 * d
};
Utils.extend(Graphics.circle, Graphics);
Graphics.circle.prototype.render = function(a, c, d) { !! this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.arc(0, 0, this.radius * Utils.globalScale, 0, 2 * Math.PI), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.circle, this, "render", a, c, d)
};
Graphics.line = function(a, c, d, e) {
    Utils.callSuperConstructor(Graphics.line, this);
    this.x1 = a;
    this.x2 = d;
    this.y1 = c;
    this.y2 = e
};
Utils.extend(Graphics.line, Graphics);
Graphics.line.prototype.render = function(a, c, d) { !! this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.moveTo(this.x1 * Utils.globalScale, this.y1 * Utils.globalScale), a.ctx.lineTo(this.x2 * Utils.globalScale, this.y2 * Utils.globalScale), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.line, this, "render", a, c, d)
};
Graphics.rectangle = function(a, c, d, e) {
    Utils.callSuperConstructor(Graphics.rectangle, this);
    this.x = a;
    this.y = c;
    this.width = d;
    this.height = e
};
Utils.extend(Graphics.rectangle, Graphics);
Graphics.rectangle.prototype.render = function(a, c, d) { !! this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.rect( - this.width / 2 * Utils.globalScale, -this.height / 2 * Utils.globalScale, this.width * Utils.globalScale, this.height * Utils.globalScale), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.rectangle, this, "render", a, c, d)
};
Graphics.arc = function(a, c, d, e, f, g) {
    Utils.callSuperConstructor(Graphics.arc, this);
    this.x = a;
    this.y = c;
    this.radius = d;
    this.startAngle = e;
    this.endAngle = f;
    this.antiClockWise = g;
    this.width = 2 * d;
    this.height = 2 * d
};
Utils.extend(Graphics.arc, Graphics);
Graphics.arc.prototype.render = function(a, c, d) { !! this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.arc(0, 0, this.radius * Utils.globalScale, this.startAngle, this.endAngle, this.antiClockWise), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.arc, this, "render", a, c, d)
};
Graphics.polygon = function(a) {
    if (!a || 2 > a.length) throw Error("Invalid parameters");
    Utils.callSuperConstructor(Graphics.polygon, this);
    this.points = a;
    for (var c = Number.MAX_VALUE,
    d = Number.MAX_VALUE,
    e = Number.MIN_VALUE,
    f = Number.MIN_VALUE,
    g = 0; g < a.length; g++) a[g].x < c && (c = a[g].x),
    a[g].y < d && (d = a[g].y),
    a[g].x > e && (e = a[g].x),
    a[g].y > f && (f = a[g].y);
    this.width = e - c;
    this.height = f - d
};
Utils.extend(Graphics.polygon, Graphics);
Graphics.polygon.prototype.render = function(a, c, d) {
    if ( !! this.static == !!c) {
        this.prepareCanvas(this.getAbsoluteCenter(), a);
        this.preparePath(a);
        a.ctx.moveTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        for (var e = 1; e < this.points.length; e++) a.ctx.lineTo(this.points[e].x * Utils.globalScale, this.points[e].y * Utils.globalScale);
        a.ctx.lineTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        this.finalizeCanvas(a);
        this.restoreCanvas(a)
    }
    Utils.callSuperMethod(Graphics.polygon, this, "render", a, c, d)
};
Graphics.text = function(a, c, d) {
    Utils.callSuperConstructor(Graphics.text, this);
    this.x = a;
    this.y = c;
    this.text = d;
    this.align = Graphics.text.ALIGN_LEFT;
    this.valign = Graphics.text.VALIGN_MIDDLE;
    this.style = "normal";
    this.size = 10;
    this.font = "sans-serif"
};
Utils.extend(Graphics.text, Graphics);
Graphics.text.ALIGN_LEFT = "left";
Graphics.text.ALIGN_CENTER = "center";
Graphics.text.ALIGN_RIGHT = "right";
Graphics.text.VALIGN_TOP = "top";
Graphics.text.VALIGN_MIDDLE = "middle";
Graphics.text.VALIGN_BOTTOM = "bottom";
Graphics.text.prototype.getRect = function(a) {
    return a.ctx.measureText(this.text)
};
Graphics.text.prototype.render = function(a, c, d) { !! this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.font = this.style + " " + Math.floor(this.size * Utils.globalScale) + "px " + this.font, a.ctx.textAlign = this.align, a.ctx.textBaseline = this.valign, this.fillColor && a.ctx.fillText(this.text, 0, 0), a.ctx.strokeText(this.text, 0, 0), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.text, this, "render", a, c, d)
};
Graphics.free = function() {
    this.commands = [];
    Utils.callSuperConstructor(Graphics.free, this)
};
Utils.extend(Graphics.free, Graphics);
Graphics.free.prototype.clear = function() {
    this.commands = []
};
Graphics.free.prototype.beginPath = function() {
    this.commands.push({
        command: "beginPath"
    });
    return this
};
Graphics.free.prototype.stroke = function() {
    this.commands.push({
        command: "stroke"
    });
    return this
};
Graphics.free.prototype.setStrokeStyle = function(a) {
    this.commands.push({
        command: "setStrokeStyle",
        style: a
    });
    return this
};
Graphics.free.prototype.setFillStyle = function(a) {
    this.commands.push({
        command: "setFillStyle",
        style: a
    });
    return this
};
Graphics.free.prototype.fill = function() {
    this.commands.push({
        command: "fill"
    });
    return this
};
Graphics.free.prototype.moveTo = function(a, c) {
    this.commands.push({
        command: "moveTo",
        x: a,
        y: c
    });
    return this
};
Graphics.free.prototype.lineTo = function(a, c) {
    this.commands.push({
        command: "lineTo",
        x: a,
        y: c
    });
    return this
};
Graphics.free.prototype.arc = function(a, c, d, e, f, g) {
    this.commands.push({
        command: "arc",
        x: a,
        y: c,
        radius: d,
        startAngle: e,
        endAngle: f,
        antiClockWise: g
    });
    return this
};
Graphics.free.prototype.circle = function(a, c, d) {
    this.commands.push({
        command: "circle",
        x: a,
        y: c,
        radius: d
    });
    return this
};
Graphics.free.prototype.rect = function(a, c, d, e) {
    this.commands.push({
        command: "circle",
        x: a,
        y: c,
        width: d,
        height: e
    });
    return this
};
Graphics.free.prototype.polygon = function(a) {
    this.commands.push({
        command: "polygon",
        points: a
    });
    return this
};
Graphics.free.prototype.executeCommand = function(a, c) {
    switch (c.command) {
    case "beginPath":
        a.ctx.beginPath();
        break;
    case "stroke":
        a.ctx.stroke();
        break;
    case "fill":
        a.ctx.fill();
        break;
    case "setStrokeStyle":
        a.ctx.strokeStyle = 0 < this.lineWidth ? c.style: "transparent";
        break;
    case "setFillStyle":
        a.ctx.fillStyle = c.style;
        break;
    case "moveTo":
        a.ctx.moveTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
        break;
    case "lineTo":
        a.ctx.lineTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
        break;
    case "arc":
        a.ctx.arc(c.x * Utils.globalScale, c.y * Utils.globalScale, c.radius * Utils.globalScale, c.startAngle, c.endAngle, c.antiClockWise);
        break;
    case "circle":
        a.ctx.arc(c.x * Utils.globalScale, c.y * Utils.globalScale, c.radius * Utils.globalScale, 0, 2 * Math.PI);
        break;
    case "rect":
        a.ctx.rect((c.x - c.width / 2) * Utils.globalScale, (c.y - c.height / 2) * Utils.globalScale, c.width * Utils.globalScale, \u0441.height * Utils.globalScale);
        break;
    case "polygon":
        a.ctx.moveTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale);
        for (var d = 1; d < c.points.length; d++) a.ctx.lineTo(c.points[d].x * Utils.globalScale, c.points[d].y * Utils.globalScale);
        a.ctx.lineTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale)
    }
};
Graphics.free.prototype.executeCommands = function(a) {
    for (var c = 0; c < this.commands.length; c++) this.executeCommand(a, this.commands[c])
};
Graphics.free.prototype.render = function(a, c, d) { !! this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), this.executeCommands(a), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.free, this, "render", a, c, d)
};
var BitmapsCache = {
    bitmaps: {},
    cache: function(a) {
        if (! (a && a instanceof Image)) return a;
        if (BitmapsCache.bitmaps[a.src]) return BitmapsCache.bitmaps[a.src];
        cns = document.createElement("canvas");
        cns.width = a.width;
        cns.height = a.height;
        ctx = cns.getContext("2d");
        ctx.drawImage(a, 0, 0, a.width, a.height, 0, 0, a.width, a.height);
        return BitmapsCache.bitmaps[a.src] = cns
    }
};
function Sprite(a, c, d, e, f) {
    Utils.callSuperConstructor(Sprite, this);
    this.width = c;
    this.height = d;
    this.offset = {
        left: 0,
        top: 0
    };
    this.animated = !0;
    this.animDirection = 1;
    this.currentFrame = 0;
    this.totalFrames = Math.max(1, ~~e);
    1 >= this.totalFrames && (this.animated = !1);
    this.currentLayer = 0;
    this.totalLayers = Math.max(1, ~~f);
    this.bitmap = a;
    this.mask = null;
    this.isMask = !1;
    this.maskParent = null;
    this.maskInvert = !1;
    this.animStep = 0;
    this.animDelay = 1;
    this.changeFrameDelay = Sprite.CHANGE_FRAME_DELAY;
    this.changeFrameTime = 0;
    this.onchangeframe = null;
    this.cacheBitmap = Sprite.CACHE_BITMAPS
}
Utils.extend(Sprite, DisplayObject);
Sprite.create = function(a, c) {
    if ("string" == typeof a) {
        c = c || window.library;
        if (!c) throw Error("Could not create sprite from asset '%s'. Library not found.", a);
        a = c.getAsset(a)
    }
    return new Sprite(a.bitmap, a.width || 1, a.height || 1, a.frames || 1, a.layers || 1)
};
Sprite.prototype.play = function() {
    this.animated = !0
};
Sprite.prototype.stop = function() {
    this.animated = !1
};
Sprite.prototype.gotoAndStop = function(a) {
    this.currentFrame = a;
    this.stop()
};
Sprite.prototype.gotoAndPlay = function(a) {
    this.currentFrame = a;
    this.play()
};
Sprite.prototype.nextFrame = function(a) {
    this.dispatchEvent("enterframe", {
        target: this,
        delta: a
    });
    var c = 1;
    if (Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) if (this.changeFrameTime += a, this.changeFrameTime >= this.changeFrameDelay * this.animDelay) c = Math.floor(this.changeFrameTime / (this.changeFrameDelay * this.animDelay)),
    this.changeFrameTime -= Math.abs(c) * this.changeFrameDelay * this.animDelay;
    else return;
    else this.animStep++;
    if (this.animStep >= this.animDelay || Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) {
        for (var d = 0; d < c; d++) this.animated && (this.currentFrame += this.animDirection),
        0 < this.animDirection && this.currentFrame >= this.totalFrames && (this.currentFrame = 0),
        0 > this.animDirection && 0 > this.currentFrame && (this.currentFrame = this.totalFrames - 1),
        this.dispatchEvent("changeframe", {
            target: this,
            delta: a
        });
        this.animStep = 0
    }
};
Sprite.prototype.setMask = function(a) {
    this.mask = a;
    this.mask.isMask = !0;
    this.mask.stage = this.stage;
    this.mask.maskParent = this
};
Sprite.prototype.renderBack = function(a, c, d, e, f, g) {
    c && (a.ctx.fillStyle = c, a.ctx.strokeStyle = c, a.ctx.fillRect(d, e, f, g))
};
Sprite.prototype.renderBitmap = function(a, c, d, e, f) {
    var g = {
        x: 0,
        y: 0,
        width: e,
        height: f
    };
    if (this.bitmap) {
        var l = this.bitmap.width,
        h = this.bitmap.height,
        q = this.currentLayer * e + this.offset.left * Utils.globalScale,
        z = this.currentFrame * f + this.offset.top * Utils.globalScale;
        if (q < l && z < h) {
            var v = e,
            t = f;
            q + v > l && (v = l - q);
            z + t > h && (t = h - z);
            Sprite.FLOOR_VALUES_ON_RENDER && (q = ~~q, z = ~~z, v = ~~v, t = ~~t, c = ~~c, d = ~~d, e = ~~e, f = ~~f);
            0 < v && 0 < t && 0 < e && 0 < f && a.ctx.drawImage(this.cacheBitmap ? BitmapsCache.cache(this.bitmap) : this.bitmap, q, z, v, t, c, d, e, f);
            g.x = q;
            g.y = z;
            g.width = v;
            g.height = t
        }
    }
    return g
};
Sprite.prototype.render = function(a, c, d, e) {
    if (!this.isMask || e) {
        if ( !! this.static == !!c) {
            d || (d = 0);
            this.nextFrame(d);
            if (!1 === this.dispatchEvent("prerender", {
                target: this,
                canvas: a,
                delta: d
            }) || !this.stage) return;
            var f = this.getAbsoluteCenter();
            if (e) {
                var f = {
                    x: this.x - this.getAnchor().x,
                    y: this.y - this.getAnchor().y
                },
                g = this.parent ? this.parent: this.maskParent;
                g && (f.x += g.getAnchor().x + g.width / 2, f.y += g.getAnchor().y + g.height / 2)
            }
            e = this.width * Utils.globalScale;
            var l = this.height * Utils.globalScale,
            h = f.x * Utils.globalScale - e / 2,
            f = f.y * Utils.globalScale - l / 2,
            q = this.getAbsoluteRotation(),
            g = this.getAbsoluteScaleX(),
            z = this.getAbsoluteScaleY(),
            v = this.getAbsoluteSkewX(),
            t = this.getAbsoluteSkewY(),
            y = this.getFillStyle(a),
            w = Boolean(0 != q || 1 != g || 1 != z || this.shadowColor || y || 0 != v || 0 != t);
            this.ignoreViewport || (h -= this.stage.viewport.x * Utils.globalScale, f -= this.stage.viewport.y * Utils.globalScale);
            w && (a.ctx.save(), a.ctx.translate(h + e / 2, f + l / 2), a.ctx.rotate(q), a.ctx.scale(g, z), 0 == v && 0 == t || a.ctx.transform(1, v, t, 1, 0, 0), h = -(e / 2), f = -(l / 2), this.shadowColor && (0 != q ? (g = new Vector(this.shadowOffsetX * Utils.globalScale, this.shadowOffsetY * Utils.globalScale), g.rotate( - q), a.ctx.shadowOffsetX = g.x, a.ctx.shadowOffsetY = g.y) : (a.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, a.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale), a.ctx.shadowColor = this.shadowColor, a.ctx.shadowBlur = this.shadowBlur * Utils.globalScale));
            a.ctx.globalAlpha = this.getAbsoluteOpacity();
            this.ceilSizes && (e = Math.ceil(e), l = Math.ceil(l));
            this.mask ? (this.stage.buffer.ctx.save(), this.stage.buffer.ctx.clearRect(0, 0, e, l), this.renderBack(this.stage.buffer, y, 0, 0, e, l), q = this.renderBitmap(this.stage.buffer, 0, 0, e, l), this.stage.buffer.ctx.globalCompositeOperation = this.maskInvert ? "destination-out": "destination-in", this.mask.render ? this.mask.render(this.stage.buffer, c, d, !0) : this.stage.buffer.ctx.drawImage(this.mask, this.mask.x ? this.mask.x: 0, this.mask.y ? this.mask.y: 0), Sprite.FLOOR_VALUES_ON_RENDER ? a.ctx.drawImage(this.stage.buffer, 0, 0, q.width, q.height, ~~h, ~~f, ~~e, ~~l) : a.ctx.drawImage(this.stage.buffer, 0, 0, q.width, q.height, h, f, e, l), this.stage.buffer.ctx.restore()) : (this.renderBack(a, y, h, f, e, l), this.renderBitmap(a, h, f, e, l));
            w && a.ctx.restore();
            this.stage.allowDebugDrawing && this.allowDebugDrawing && (!this.stage.allowStaticDebugDrawing && this.static || this.debugDraw());
            this.dispatchEvent("render", {
                target: this,
                canvas: a,
                delta: d
            })
        }
        Utils.callSuperMethod(Sprite, this, "render", a, c, d)
    }
};
Sprite.CHANGE_FRAME_BY_FRAME = 0;
Sprite.CHANGE_FRAME_BY_TIME = 1;
Sprite.CHANGE_FRAME_DELAY = 1E3 / 24;
Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_FRAME;
Sprite.FLOOR_VALUES_ON_RENDER = !0;
Sprite.CACHE_BITMAPS = Utils.isIOS();
function StageTimer(a, c, d) {
    Utils.callSuperConstructor(StageTimer, this);
    this.repeat = d;
    this.timeout = this.initialTimeout = c;
    this.onend = a;
    this.ontick = null;
    this.newly = !0;
    this.paused = !1
}
Utils.extend(StageTimer, EventsProxy);
StageTimer.prototype.update = function(a) {
    if (!this.paused) {
        StageTimer.TIMEOUT_TYPE == StageTimer.TIMEOUT_BY_FRAME ? this.timeout--:this.timeout -= a;
        if (0 >= this.timeout) if ("string" == typeof this.onend ? eval(this.onend) : this.dispatchEvent("end", {
            target: this
        }), this.repeat) this.timeout = this.initialTimeout;
        else return ! 0;
        this.dispatchEvent("tick", {
            target: this,
            delta: a
        });
        return ! 1
    }
};
StageTimer.prototype.resume = function() {
    this.paused = !1
};
StageTimer.prototype.pause = function() {
    this.paused = !0
};
StageTimer.TIMEOUT_BY_FRAME = 0;
StageTimer.TIMEOUT_BY_TIME = 1;
StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_FRAME;
function Stage(a, c, d) {
    Utils.callSuperConstructor(Stage, this);
    this.canvas = null;
    a && (this.canvas = document.getElementById(a), this.canvas.ctx = this.canvas.getContext("2d"));
    this.backgroundCanvas = null;
    this.needToRebuildBack = !1;
    this.screenWidth = c;
    this.screenHeight = d;
    this.viewport = {
        x: 0,
        y: 0
    };
    this.buffer = null;
    try {
        this.buffer = document.createElement("canvas"),
        this.buffer.width = c * Utils.globalScale,
        this.buffer.height = d * Utils.globalScale,
        this.buffer.ctx = this.buffer.getContext("2d")
    } catch(e) {
        this.buffer = this.canvas
    }
    this.delay = 40;
    this.started = !1;
    this.lastFPS = this.fps = 0;
    this.ceilSizes = this.pixelMouseMoveEvent = this.pixelMouseDownEvent = this.pixelMouseUpEvent = this.pixelClickEvent = this.showFPS = !1;
    this.tmFPS = this.tmMain = null;
    this.allowStaticDebugDrawing = this.allowDebugDrawing = this.clearLock = !1;
    this.drawBackAlways = Utils.mobileCheckBrokenAndroid();
    this.tweens = [];
    this.timers = [];
    this.eventsListeners = [];
    this.lastTick = 0;
    this.onmousemove = this.oncontextmenu = this.onclick = this.onmouseup = this.onmousedown = this.onposttick = this.prerender = this.onpretick = this.inputController = null;
    this.canvas && this.addInputListeners(this.canvas);
    this.tick = Utils.proxy(this.tick, this);
    this.clearFPS = Utils.proxy(this.clearFPS, this);
    this.stage = this;
    this.drawScene = this.render
}
Utils.extend(Stage, DisplayObjectContainer);
Stage.prototype.refreshBackground = function() {
    this.needToRebuildBack = !0
};
Stage.prototype.setBackgroundCanvas = function(a) {
    a && (this.backgroundCanvas = document.getElementById(a), this.backgroundCanvas.ctx = this.backgroundCanvas.getContext("2d"))
};
Stage.prototype.destroy = function() {
    clearTimeout(this.tmMain);
    clearTimeout(this.tmFPS);
    this.stop();
    this.clear();
    this.clearScreen(this.canvas);
    this.backgroundCanvas && this.clearScreen(this.backgroundCanvas);
    this.removeInputListeners(this.stage)
};
Stage.prototype.clearScreen = function(a) {
    this.clearLock || a.ctx.clearRect(0, 0, Math.floor(a.width), Math.floor(a.height))
};
Stage.prototype.addChild = function(a) {
    a.stage = this;
    return Utils.callSuperMethod(Stage, this, "addChild", a)
};
Stage.prototype.setZIndex = function(a, c) {
    this.setChildZIndex(a, c)
};
Stage.prototype.removeChild = function(a) {
    a && 0 <= this.objects.indexOf(a) && (this.clearObjectTweens(a), a.stage = null, Utils.callSuperMethod(Stage, this, "removeChild", a))
};
Stage.prototype.finalizeMouseCoords = function(a, c) {
    if (!a) return c;
    var d = this.prepareMouseCoord(c.x),
    e = this.prepareMouseCoord(c.y);
    a.ignoreViewport || (d += this.viewport.x, e += this.viewport.y);
    d -= a.x;
    e -= a.y;
    return {
        x: d,
        y: e
    }
};
Stage.prototype.prepareMouseCoord = function(a) {
    return a / Utils.globalScale / Utils.globalPixelScale
};
Stage.prototype.processMouseEvent = function(a, c, d) {
    a = Utils.getMouseCoord(a, this.inputController);
    d = this.getObjectsStackByCoord(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y), d, !1);
    for (var e, f = 0; f < d.length; f++) if (e = this.finalizeMouseCoords(d[f], a), e = d[f].dispatchEvent(c, {
        target: d[f],
        x: e.x,
        y: e.y
    }), !1 === e) return;
    this.dispatchEvent(c, {
        target: this,
        x: Math.floor(this.prepareMouseCoord(a.x)),
        y: Math.floor(this.prepareMouseCoord(a.y))
    })
};
Stage.prototype.checkClick = function(a) {
    this.processMouseEvent(a, "click", this.pixelClickEvent)
};
Stage.prototype.checkContextMenu = function(a) {
    this.processMouseEvent(a, "contextmenu", this.pixelClickEvent)
};
Stage.prototype.checkMouseMove = function(a) {
    a = Utils.getMouseCoord(a, this.inputController);
    this.doDrag(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y));
    var c = this.getObjectsStackByCoord(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y), this.pixelMouseMoveEvent),
    d,
    e,
    f,
    g = [];
    if (0 < c.length) {
        for (d = 0; d < c.length && (g.push(c[d]), f = this.finalizeMouseCoords(c[d], a), c[d].mouseOn || (e = c[d].dispatchEvent("mouseover", {
            target: c[d],
            x: f.x,
            y: f.y
        })), c[d].mouseOn = !0, !1 !== e); d++);
        e = !0;
        for (d = 0; d < c.length && (f = this.finalizeMouseCoords(c[d], a), e = c[d].dispatchEvent("mousemove", {
            target: c[d],
            x: f.x,
            y: f.y
        }), !1 !== e); d++); ! 1 !== e && this.dispatchEvent("mousemove", {
            target: this,
            x: Math.floor(this.prepareMouseCoord(a.x)),
            y: Math.floor(this.prepareMouseCoord(a.y))
        })
    }
    this.checkMouseOut(g, a)
};
Stage.prototype.checkMouseDown = function(a) {
    this.processMouseEvent(a, "mousedown", this.pixelMouseDownEvent)
};
Stage.prototype.checkMouseUp = function(a) {
    this.processMouseEvent(a, "mouseup", this.pixelMouseUpEvent)
};
Stage.prototype.clear = function() {
    this.tweens = [];
    this.timers = [];
    this.eventsListeners = [];
    this.objectsCounter = 0;
    Utils.callSuperMethod(Stage, this, "clear")
};
Stage.prototype.hitTest = function(a, c) {
    if (0 == a.getAbsoluteRotation() && 0 == c.getAbsoluteRotation()) {
        var d = a.getX() - a.getWidth() / 2,
        e = a.getY() - a.getHeight() / 2,
        f = c.getX() - c.getWidth() / 2,
        g = c.getY() - c.getHeight() / 2,
        l = Math.max(e, g),
        h = Math.max(d, f),
        d = Math.min(d + a.getWidth(), f + c.getWidth()),
        e = Math.min(e + a.getHeight(), g + c.getHeight()) - l;
        return 0 < d - h && 0 < e ? !0 : !1
    }
    h = a.getDrawRectangle();
    e = c.getDrawRectangle();
    return h.hitTestRectangle(e)
};
Stage.prototype.getCenter = function() {
    return {
        x: this.screenWidth / 2,
        y: this.screenHeight / 2
    }
};
Stage.prototype.drawRectangle = function(a, c, d, e, f, g, l, h) {
    var q = this.canvas;
    q.ctx.globalAlpha = "undefined" != typeof l ? l: 1;
    q.ctx.fillStyle = f;
    q.ctx.strokeStyle = f;
    h || (a -= this.viewport.x, c -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    e *= Utils.globalScale;
    g ? q.ctx.fillRect(a - d / 2, c - e / 2, d, e) : q.ctx.strokeRect(a - d / 2, c - e / 2, d, e)
};
Stage.prototype.drawCircle = function(a, c, d, e, f, g, l) {
    this.drawArc(a, c, d, 0, 2 * Math.PI, !1, e, f, g, l)
};
Stage.prototype.drawArc = function(a, c, d, e, f, g, l, h, q, z) {
    var v = this.canvas,
    t = v.ctx.lineWidth;
    "undefined" == typeof h && (h = "#000");
    v.ctx.strokeStyle = h;
    "undefined" == typeof l && (l = 1);
    v.ctx.lineWidth = l * Utils.globalScale;
    "undefined" == typeof q && (q = 1);
    v.ctx.globalAlpha = q;
    z || (a -= this.viewport.x, c -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    v.ctx.beginPath();
    v.ctx.arc(a, c, d, e, f, g);
    v.ctx.stroke();
    v.ctx.lineWidth = t
};
Stage.prototype.drawPolygon = function(a, c, d, e, f) {
    if ("object" == typeof a && a instanceof Array && !(2 > a.length)) {
        for (var g = 0; g < a.length - 1; g++) this.drawLine(a[g].x, a[g].y, a[g + 1].x, a[g + 1].y, c, d, e, f);
        this.drawLine(a[g].x, a[g].y, a[0].x, a[0].y, c, d, e, f)
    }
};
Stage.prototype.drawLine = function(a, c, d, e, f, g, l, h) {
    var q = this.canvas,
    z = q.ctx.lineWidth;
    q.ctx.strokeStyle = g ? g: "#000";
    q.ctx.lineWidth = f ? f * Utils.globalScale: 1 * Utils.globalScale;
    q.ctx.globalAlpha = l ? l: 1;
    h || (a -= this.viewport.x, c -= this.viewport.y, d -= this.viewport.x, e -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    e *= Utils.globalScale;
    q.ctx.beginPath();
    q.ctx.moveTo(a, c);
    q.ctx.lineTo(d, e);
    q.ctx.stroke();
    q.ctx.lineWidth = z
};
Stage.prototype.start = function() {
    this.started || (this.started = !0, this.clearFPS(), this.tick())
};
Stage.prototype.forceRender = function() {
    this.started && this.tick()
};
Stage.prototype.stop = function() {
    this.started = !1
};
Stage.prototype.clearFPS = function() {
    this.lastFPS = this.fps;
    this.fps = 0;
    this.started && (this.tmFPS = setTimeout(this.clearFPS, 1E3))
};
Stage.prototype.setTextStyle = function(a, c, d, e, f, g) {
    g = g ? g: this.canvas;
    g.ctx.fillStyle = e;
    g.ctx.strokeStyle = f;
    e = "";
    d && (e += d + " ");
    c && (e += Math.floor(c * Utils.globalScale) + "px ");
    a && (e += a);
    g.ctx.font = e
};
Stage.prototype.drawText = function(a, c, d, e, f, g, l) {
    l = l ? l: this.canvas;
    l.ctx.globalAlpha = "undefined" == typeof e ? 1 : e;
    f || (c -= this.viewport.x, d -= this.viewport.y);
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    g && (c -= this.getTextWidth(a) / 2);
    l.ctx.fillText(a, c, d)
};
Stage.prototype.strokeText = function(a, c, d, e, f, g, l) {
    l = l ? l: this.canvas;
    l.ctx.globalAlpha = "undefined" == typeof e ? 1 : e;
    f || (c -= this.viewport.x, d -= this.viewport.y);
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    g && (c -= this.getTextWidth(a) / 2);
    l.ctx.strokeText(a, c, d)
};
Stage.prototype.getTextWidth = function(a, c) {
    return (c ? c: this.canvas).ctx.measureText(a).width
};
Stage.prototype.render = function(a, c, d, e) {
    a && (e || (e = 0), a && !a.ctx && (a.ctx = a.getContext("2d")), d || ((d = this.getFillStyle(a)) ? (a.ctx.fillStyle = d, a.ctx.fillRect(0, 0, a.width, a.height)) : this.clearLock || this.clearScreen(a)), Utils.callSuperMethod(Stage, this, "render", a, c, e))
};
Stage.prototype.createTween = function(a, c, d, e, f, g) {
    a = new Tween(a, c, d, e, f, g);
    this.tweens.push(a);
    return a
};
Stage.prototype.removeTween = function(a) {
    var c = null;
    if (isNaN(a)) for (var d = 0; d < this.tweens.length; d++) {
        if (this.tweens[d] === a) {
            c = d;
            break
        }
    } else c = a;
    isNaN(c) || (this.tweens[c] && this.tweens[c].pause(), this.tweens.splice(c, 1));
    return c
};
Stage.prototype.clearObjectTweens = function(a) {
    for (var c = 0; c < this.tweens.length; c++) this.tweens[c].obj === a && (this.tweens[c].destroy = !0)
};
Stage.prototype.updateTweens = function(a) {
    for (var c, d = 0; d < this.tweens.length; d++) c = this.tweens[d],
    c.destroy && (d = this.removeTween(d), d--);
    for (d = 0; d < this.tweens.length; d++) c = this.tweens[d],
    !c.newly && c.tick(a) && (c.destroy = !0),
    c.newly = !1
};
Stage.prototype.setTimeout = function(a, c) {
    var d = new StageTimer(a, c);
    this.timers.push(d);
    return d
};
Stage.prototype.clearTimeout = function(a) {
    a && (a.destroy = !0)
};
Stage.prototype.setInterval = function(a, c) {
    var d = new StageTimer(a, c, !0);
    this.timers.push(d);
    return d
};
Stage.prototype.clearInterval = function(a) {
    this.clearTimeout(a)
};
Stage.prototype.removeTimer = function(a) {
    this.timers = Utils.removeFromArray(this.timers, a)
};
Stage.prototype.updateTimers = function(a) {
    for (var c, d = 0; d < this.timers.length; d++) c = this.timers[d],
    c.destroy && (this.removeTimer(c), d--);
    for (d = 0; d < this.timers.length; d++) c = this.timers[d],
    !c.newly && c.update(a) && (c.destroy = !0),
    c.newly = !1
};
Stage.prototype.tick = function() {
    clearTimeout(this.tmMain);
    var a;
    if (Utils.isWindowHidden) this.lastTick = 0,
    a = this.delay;
    else {
        a = (new Date).getTime();
        var c = Math.min(Stage.MIN_DELTA, a - this.lastTick);
        this.lastTick = a;
        this.dispatchEvent("pretick", {
            target: this,
            delta: c
        });
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.updateTweens(c);
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.updateTimers(c);
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.dispatchEvent("prerender", {
            target: this,
            delta: c
        });
        var d = !1;
        this.drawBackAlways ? (this.render(this.canvas, !0, !1, c), d = !0) : this.needToRebuildBack && (this.needToRebuildBack = !1, this.backgroundCanvas && this.render(this.backgroundCanvas, !0));
        this.render(this.canvas, !1, d, c);
        this.showFPS && (this.setTextStyle("sans-serif", 10, "bold", "#fff", "#000"), this.drawText("FPS: " + this.lastFPS, 2, 10, 1, !0));
        this.dispatchEvent("posttick", {
            target: this,
            delta: c
        });
        a = (new Date).getTime() - a;
        a = this.delay - a;
        1 > a && (a = 1);
        this.fps++
    }
    this.started ? this.tmMain = setTimeout(this.tick, a) : this.lastTick = 0
};
Stage.prototype.box2dSync = function(a) {
    for (b = a.m_bodyList; b; b = b.m_next) b.sprite && (b.sprite.rotation = b.GetRotation(), a = b.GetPosition(), b.sprite.x = a.x, b.sprite.y = a.y, b.sprite.dispatchEvent("box2dsync", {
        target: b.sprite
    }))
};
Stage.prototype.processTouchEvent = function(a, c) {
    for (var d = 0; d < a.length; d++) this[c]({
        clientX: a[d].clientX,
        clientY: a[d].clientY
    })
};
Stage.prototype.prepareEventTouches = function(a, c) {
    a[c] || (a[c] = [{
        clientX: a.clientX,
        clientY: a.clientY
    }]);
    return a[c]
};
Stage.prototype.addInputListeners = function(a) {
    this.inputController = a;
    Utils.touchScreen ? (a["on" + Utils.getTouchStartEvent()] = Utils.proxy(function(a) {
        this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkMouseDown");
        this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkClick");
        a.preventDefault()
    },
    this), a["on" + Utils.getTouchMoveEvent()] = Utils.proxy(function(a) {
        this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkMouseMove");
        a.preventDefault()
    },
    this), a["on" + Utils.getTouchEndEvent()] = Utils.proxy(function(a) {
        this.processTouchEvent(this.prepareEventTouches(a, "changedTouches"), "checkMouseUp");
        a.preventDefault()
    },
    this)) : (a.onclick = Utils.proxy(function(a) {
        this.checkClick(a)
    },
    this), a.onmousemove = Utils.proxy(function(a) {
        this.checkMouseMove(a)
    },
    this), a.onmousedown = Utils.proxy(function(a) {
        0 == a.button && this.checkMouseDown(a)
    },
    this), a.onmouseup = Utils.proxy(function(a) {
        0 == a.button && this.checkMouseUp(a)
    },
    this), a.oncontextmenu = Utils.proxy(function(a) {
        this.checkContextMenu(a)
    },
    this))
};
Stage.prototype.removeInputListeners = function(a) {
    a.ontouchstart = null;
    a.ontouchmove = null;
    a.ontouchend = null;
    a.onmspointerdown = null;
    a.onmspointermove = null;
    a.onmspointerup = null;
    a.onclick = null;
    a.onmousemove = null;
    a.onmousedown = null;
    a.onmouseup = null;
    a.oncontextmenu = null
};
Stage.MIN_DELTA = 500;
function SpritesGroup(a) {
    this.stage = a;
    this.rotation = this.y = this.x = 0;
    this.opacity = this.scaleY = this.scaleX = 1;
    this.sprites = [];
    a.addEventListener("pretick", Utils.proxy(this.update, this))
}
SpritesGroup.prototype.addChild = function(a, c) {
    "undefined" == typeof a.gscaleX && (a.gscaleX = 1);
    "undefined" == typeof a.gscaleY && (a.gscaleY = 1);
    "undefined" == typeof a.grotation && (a.grotation = 0);
    "undefined" == typeof a.gopacity && (a.gopacity = 1);
    this.sprites.push(a);
    c && this.stage.addChild(a);
    this.update()
};
SpritesGroup.prototype.removeChild = function(a, c) {
    this.sprites = Utils.removeFromArray(this.sprites, a);
    c && (a.destroy = !0)
};
SpritesGroup.prototype.remove = function() {
    for (var a = 0; a < this.sprites.length; a++) this.sprites[a].destroy = !0;
    this.sprites = []
};
SpritesGroup.prototype.update = function() {
    for (var a, c = 0; c < this.sprites.length; c++) {
        a = this.sprites[c];
        var d = a.gx,
        e = a.gy,
        f = new Vector(d, e);
        f.rotate( - this.rotation);
        d += f.x;
        e += f.y;
        d *= this.scaleX;
        e *= this.scaleY;
        d += this.x;
        e += this.y;
        a.x = d;
        a.y = e;
        a.scaleX = a.gscaleX * this.scaleX;
        a.scaleY = a.gscaleY * this.scaleY;
        a.rotation = a.grotation + this.rotation;
        a.opacity = a.gopacity * this.opacity
    }
};
var TEXT_ALIGN_LEFT = 0,
TEXT_ALIGN_CENTER = 1,
TEXT_ALIGN_RIGHT = 2,
TEXT_VALIGN_TOP = 0,
TEXT_VALIGN_MIDDLE = 1,
TEXT_VALIGN_BOTTOM = 2,
TEXT_SPRITE_FONT_DEFAULT = "sans-serif";
function TextSprite(a, c, d, e, f) {
    var g = this;
    TextSprite.superclass.constructor.call(this, a, c, d, e, f);
    this.text = "";
    this.style = {
        font: TEXT_SPRITE_FONT_DEFAULT,
        size: 10,
        color: "#fff",
        borderColor: "#000",
        borderWidth: 0,
        bold: !1,
        italic: !1,
        lineHeight: 10
    };
    this.padding = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    this.align = TEXT_ALIGN_LEFT;
    this.valign = TEXT_VALIGN_TOP;
    this.wordWrap = !0;
    this.showTextAlways = !1;
    this.prepareLine = function(a, c, d) {
        var e = this.width - this.padding.left - this.padding.right,
        f = this.height - this.padding.top - this.padding.bottom;
        c += this.style.lineHeight;
        if (c >= f) return {
            ret: d,
            y: 0,
            next: !1
        };
        a = a.split(" ");
        for (var g = f = "",
        y = !1,
        w = 0; w < a.length; w++) if (g += (0 < w ? " ": "") + a[w], this.stage.getTextWidth(g, this.canvas) / Utils.globalScale > e) {
            this.wordWrap && (y = !0);
            break
        } else f = g;
        g = this.x - this.width / 2 + this.padding.left;
        if (this.align != TEXT_ALIGN_LEFT) {
            var B = this.stage.getTextWidth(f, this.canvas) / Utils.globalScale;
            this.align == TEXT_ALIGN_CENTER && (g = this.x - B / 2, g += (this.padding.left - this.padding.right) / 2);
            this.align == TEXT_ALIGN_RIGHT && (g = this.x + e / 2 - B - this.padding.right)
        }
        d.push({
            text: f,
            x: g
        });
        if (y) {
            f = "";
            for (e = w; e < a.length; e++) f += (e > w ? " ": "") + a[e];
            g = this.prepareLine(f, c, d);
            d = g.ret;
            c = g.y
        }
        return {
            ret: d,
            y: c,
            next: !0
        }
    };
    this.prepareText = function() {
        for (var a = [], c = 0, d, e = (this.text + "").split("\n"), f = 0; f < e.length && (d = this.prepareLine(e[f], c, a), a = d.ret, c = d.y, !1 !== d.next); f++);
        return a
    };
    this.renderText = function(a) {
        g.canvas = a.canvas;
        a = g.canvas.ctx.lineWidth;
        var c = "";
        g.style.bold && (c += "bold ");
        g.style.italic && (c += "italic ");
        g.stage.setTextStyle(g.style.font, g.style.size, c, g.style.color, g.style.borderColor, g.canvas);
        g.canvas.ctx.lineWidth = g.style.borderWidth * Utils.globalScale;
        var c = g.prepareText(),
        d = 0;
        g.valign == TEXT_VALIGN_TOP && (d = g.y - g.height / 2 + g.padding.top);
        g.valign == TEXT_VALIGN_MIDDLE && (d = g.y, d += (g.padding.top - g.padding.bottom) / 2, d -= c.length * g.style.lineHeight / 2);
        g.valign == TEXT_VALIGN_BOTTOM && (d = g.y + g.height / 2 - g.padding.bottom - c.length * g.style.lineHeight);
        for (var d = d + g.style.lineHeight,
        e, f, t, y, w, B, K = 0; K < c.length; K++) {
            f = d + K * g.style.lineHeight;
            e = c[K].x;
            t = e - g.x;
            y = f - g.y;
            B = !1;
            w = g.ignoreViewport;
            if (0 != g.rotation || 1 != g.scaleX || 1 != g.scaleY) {
                B = !0;
                w = g.width * Utils.globalScale;
                var n = g.height * Utils.globalScale;
                e = g.getX() - Math.floor(w / 2);
                f = g.getY() - Math.floor(n / 2);
                g.ignoreViewport || (e -= g.stage.viewport.x * Utils.globalScale, f -= g.stage.viewport.y * Utils.globalScale);
                g.canvas.ctx.save();
                g.canvas.ctx.translate(e + Math.floor(w / 2), f + Math.floor(n / 2));
                g.canvas.ctx.rotate(g.rotation);
                g.canvas.ctx.scale(g.scaleX, g.scaleY);
                e = t;
                f = y;
                w = !0
            }
            0 < g.style.borderWidth && g.stage.strokeText(c[K].text, e, f, g.showTextAlways ? 1 : g.opacity, w, !1, g.canvas);
            g.stage.drawText(c[K].text, e, f, g.showTextAlways ? 1 : g.opacity, w, !1, g.canvas);
            B && g.canvas.ctx.restore()
        }
        g.canvas.ctx.lineWidth = a
    };
    this.addEventListener("render", this.renderText)
}
Utils.extend(TextSprite, Sprite);
var FontsManager = {
    fonts: [],
    embed: function(a, c) {
        for (var d = 0; d < FontsManager.fonts.length; d++) if (FontsManager.fonts[d].url == c && FontsManager.fonts[d].name == a) return;
        d = document.createElement("style");
        d.type = "text/css";
        d.innerHTML = '@font-face {font-family: "' + a + '"; src: url("' + c + '");}';
        document.getElementsByTagName("head")[0].appendChild(d)
    }
};
function SimpleText(a, c, d, e) {
    this.font = a;
    this.y = this.x = 0;
    this.width = c;
    this.height = d;
    this.align = SimpleText.ALIGN_LEFT;
    this.charSpacing = this.rotation = 0;
    this.opacity = this.scale = 1;
    this.static = !1;
    this.charMap = "0123456789".split("");
    this.charWidth = [];
    this.sprites = [];
    this.text = "";
    this.parent = this.stage = window.stage;
    this.ALIGN_LEFT = SimpleText.ALIGN_LEFT;
    this.ALIGN_RIGHT = SimpleText.ALIGN_RIGHT;
    this.ALIGN_CENTER = SimpleText.ALIGN_CENTER;
    this.ignoreViewport = e
}
SimpleText.prototype.manageSprites = function(a) {
    var c, d = a.length,
    e = this.sprites.length;
    if (e < d) for (a = 0; a < d - e; a++) c = new window[SimpleText.spriteClass](this.font, this.width, this.height, this.charMap.length),
    this.sprites.push(c),
    this.parent.addChild(c);
    if (e > d) {
        for (a = 0; a < e - d; a++) this.parent.removeChild(this.sprites[a]);
        this.sprites.splice(0, e - d)
    }
};
SimpleText.prototype.getCharIx = function(a) {
    for (var c = 0; c < this.charMap.length; c++) if (this.charMap[c] == a) return c;
    return - 1
};
SimpleText.prototype.getCharWidth = function(a) {
    a = this.getCharIx(a);
    return 0 <= a ? this.charWidth[a] ? this.charWidth[a] : this.width: this.width
};
SimpleText.prototype.getWidth = function() {
    for (var a = 0,
    c = 0; c < this.text.length; c++) a += this.getCharWidth(this.text.substr(c, 1)) + this.charSpacing;
    return a
};
SimpleText.prototype.write = function(a) {
    var c, d, e, f;
    this.text = a += "";
    this.manageSprites(a);
    c = this.x;
    this.align == SimpleText.ALIGN_CENTER && (c = this.x - this.getWidth() / 2 * this.scale + this.getCharWidth(this.text.substr(0, 1)) / 2 * this.scale);
    this.align == SimpleText.ALIGN_RIGHT && (c = this.x - this.getWidth() * this.scale);
    e = new Vector(c - this.x, 0);
    e.rotate( - this.rotation);
    c = e.x + this.x;
    d = e.y + this.y;
    e = new Vector(0, 0);
    for (var g = 0; g < a.length; g++) if (this.sprites[g].visible = !0, f = this.charMap.indexOf(a.substr(g, 1)), 0 > f) this.sprites[g].visible = !1;
    else {
        var l = this.getCharWidth(this.text.substr(g, 1));
        this.sprites[g].scaleX = this.sprites[g].scaleY = this.scale;
        this.sprites[g].gotoAndStop(f);
        f = e.clone();
        f.x *= this.scale;
        f.rotate( - this.rotation);
        this.sprites[g].x = f.x + ("," == this.text.substr(g, 1) ? c - l / 2 : c);
        this.sprites[g].y = f.y + d;
        this.sprites[g].rotation = this.rotation;
        this.sprites[g].static = this.static;
        this.sprites[g].opacity = this.opacity;
        this.sprites[g].ignoreViewport = this.ignoreViewport;
        this.sprites[g].gx = this.sprites[g].x;
        this.sprites[g].gy = this.sprites[g].y;
        this.sprites[g].gscaleX = this.sprites[g].scaleX;
        this.sprites[g].gscaleY = this.sprites[g].scaleY;
        this.sprites[g].grotation = this.sprites[g].rotation;
        this.sprites[g].gopacity = this.sprites[g].opacity;
        e.x += l + this.charSpacing
    }
};
SimpleText.prototype.refresh = function() {
    this.write(this.text)
};
SimpleText.prototype.addToGroup = function(a) {
    for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x / 2,
    this.sprites[c].gy = this.sprites[c].y,
    a.addChild(this.sprites[c], !1)
};
SimpleText.prototype.putToGroup = function(a) {
    for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x,
    this.sprites[c].gy = this.sprites[c].y,
    a.addChild(this.sprites[c], !1)
};
SimpleText.prototype.refreshOnTween = function(a) {
    a.target.obj.refresh()
};
SimpleText.prototype.setPosition = function(a, c) {
    this.x = a;
    this.y = c;
    this.refresh()
};
SimpleText.prototype.removeTweens = function() {
    this.stage && this.stage.clearObjectTweens(this)
};
SimpleText.prototype.addTween = function(a, c, d, e, f, g) {
    if (this.stage) {
        var l = this[a];
        if (!isNaN(l)) return a = this.stage.createTween(this, a, l, c, d, e),
        a.onchange = g,
        a.onfinish = f,
        a
    }
};
SimpleText.prototype.moveTo = function(a, c, d, e, f, g) {
    d = ~~d;
    if (0 >= d) this.setPosition(a, c);
    else {
        if (a = this.addTween("x", a, d, e, f, g)) a.play(),
        a.addEventListener("change", this.refreshOnTween); (c = this.addTween("y", c, d, e, a ? null: f, a ? null: g)) && c.play();
        c && !a && c.addEventListener("change", this.refreshOnTween)
    }
    return this
};
SimpleText.prototype.moveBy = function(a, c, d, e, f, g) {
    return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
SimpleText.prototype.fadeTo = function(a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.opacity = a;
    else if (a = this.addTween("opacity", a, c, d, e, f)) a.play(),
    a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.prototype.fadeBy = function(a, c, d, e, f) {
    a = Math.max(0, Math.min(1, this.opacity + a));
    return this.fadeTo(a, c, d, e, f)
};
SimpleText.prototype.rotateTo = function(a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.rotation = a;
    else if (a = this.addTween("rotation", a, c, d, e, f)) a.play(),
    a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.prototype.rotateBy = function(a, c, d, e, f) {
    return this.rotateTo(this.rotation + a, c, d, e, f)
};
SimpleText.prototype.scaleTo = function(a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.scale = a;
    else if (a = this.addTween("scale", a, c, d, e, f)) a.play(),
    a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.spriteClass = "Sprite";
SimpleText.ALIGN_LEFT = 0;
SimpleText.ALIGN_RIGHT = 1;
SimpleText.ALIGN_CENTER = 2;
function AudioPlayer() {
    this.disabled = !1;
    this.basePath = "";
    this.mp3Support = !0;
    this.delayPlay = !1;
    this.audioWrapper = null;
    this.busy = this.locked = !1;
    this.startPlayTime = 0;
    this.onend = null;
    this.controlPlay = Utils.proxy(this.controlPlay, this)
}
AudioPlayer.prototype.createNewAudio = function() {
    if (AudioMixer.isWebAudioSupport()) {
        var a = AudioMixer.waContext.createBufferSource();
        a.connect(AudioMixer.waContext.destination);
        return a
    }
    return document.createElement("audio")
};
AudioPlayer.prototype.init = function(a) {
    this.basePath = a ? a: "";
    this.delayPlay = "ontouchstart" in window;
    this.audioWrapper = this.createNewAudio();
    a = document.createElement("audio");
    a.canPlayType ? this.mp3Support = "" != a.canPlayType("audio/mpeg") : this.disabled = !0;
    return ! this.disabled
};
AudioPlayer.prototype.play = function(a, c) {
    if (this.disabled) return ! 1;
    var d = this.basePath + "/" + a + (this.mp3Support ? ".mp3": ".ogg");
    this.stop();
    this.audioWrapper = this.createNewAudio();
    this.audioWrapper.doLoop = c ? !0 : !1;
    this.audioWrapper.fileName = a;
    if (AudioMixer.isWebAudioSupport()) {
        var e = this;
        this.loadSound(d,
        function(a) {
            e.audioWrapper.buffer = a;
            e.audioWrapper.noteOn ? e.audioWrapper.noteOn(0) : e.audioWrapper.start(0);
            e.startPlayTime = (new Date).getTime();
            e.audioWrapper.loop = c;
            "undefined" != typeof e.audioWrapper.playbackState ? e.waCheckInterval = setInterval(function() {
                e.audioWrapper ? e.audioWrapper.playbackState == e.audioWrapper.FINISHED_STATE && e.controlPlay() : clearInterval(e.waCheckInterval)
            },
            100) : e.audioWrapper.onended = e.controlPlay
        })
    } else this.audioWrapper.src = d,
    this.audioWrapper.type = this.mp3Support ? "audio/mpeg": "audio/ogg",
    this.audioWrapper.loop = !1,
    this.audioWrapper.preload = "auto",
    this.audioWrapper.load(),
    this.delayPlay ? (this.audioWrapper.addEventListener("canplay", this.readyToPlay), this.audioWrapper.addEventListener("canplaythrough", this.readyToPlay)) : this.audioWrapper.play(),
    this.audioWrapper.addEventListener("ended", this.controlPlay, !1);
    this.busy = !0;
    this.startPlayTime = (new Date).getTime()
};
AudioPlayer.prototype.loadSound = function(a, c) {
    if (AudioMixer.buffer[a]) c && c(AudioMixer.buffer[a]);
    else {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function() {
            AudioMixer.waContext.decodeAudioData(this.response,
            function(d) {
                AudioMixer.buffer[a] = d;
                c && c(d)
            })
        };
        d.send()
    }
};
AudioPlayer.prototype.readyToPlay = function(a) {
    a.currentTarget.alreadyLoaded || (a.currentTarget.alreadyLoaded = !0, a.currentTarget.play())
};
AudioPlayer.prototype.stop = function() {
    this.busy = !1;
    try {
        AudioMixer.isWebAudioSupport() ? this.audioWrapper.noteOff ? this.audioWrapper.noteOff(0) : this.audioWrapper.stop(0) : (this.audioWrapper.removeEventListener("canplay", this.readyToPlay), this.audioWrapper.removeEventListener("canplaythrough", this.readyToPlay), this.audioWrapper.pause(), this.audioWrapper.currentTime = 0),
        this.audioWrapper = null
    } catch(a) {}
};
AudioPlayer.prototype.pause = function() {
    AudioMixer.isWebAudioSupport() ? this.audioWrapper && this.audioWrapper.disconnect() : this.audioWrapper.pause()
};
AudioPlayer.prototype.resume = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (this.audioWrapper) try {
            this.audioWrapper.connect(AudioMixer.waContext.destination)
        } catch(a) {}
    } else this.audioWrapper.play()
};
AudioPlayer.prototype.controlPlay = function() {
    if (this.audioWrapper) if (this.audioWrapper.doLoop) AudioMixer.isWebAudioSupport() || (Utils.isFirefox() ? this.play(this.audioWrapper.fileName, !0) : (this.audioWrapper.currentTime = 0, this.audioWrapper.play()));
    else {
        this.busy = !1;
        if ("function" == typeof this.onend) this.onend();
        this.waCheckInterval && clearInterval(this.waCheckInterval)
    }
};
AudioPlayer.prototype.getPosition = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (!this.startPlayTime) return 0;
        var a = this.getDuration();
        if (!a) return 0;
        var c = ((new Date).getTime() - this.startPlayTime) / 1E3;
        return c <= a ? c: this.audioWrapper.doLoop ? c - Math.floor(c / a) * a: a
    }
    return this.audioWrapper.currentTime ? this.audioWrapper.currentTime: 0
};
AudioPlayer.prototype.getDuration = function() {
    return AudioMixer.isWebAudioSupport() ? this.audioWrapper.buffer ? this.audioWrapper.buffer.duration: 0 : this.audioWrapper.duration ? this.audioWrapper.duration: 0
};
function AudioMixer(a, c) {
    this.singleChannelMode = !1;
    this.channels = [];
    this.init(a, c)
}
AudioMixer.prototype.init = function(a, c) {
    if (AudioMixer.isWebAudioSupport()) {
        AudioMixer.waContext = new window.AudioContext;
        var d = AudioMixer.waContext.createBuffer(1, 1, 22050),
        e = AudioMixer.waContext.createBufferSource();
        e.buffer = d;
        e.connect(AudioMixer.waContext.destination);
        e.noteOn ? e.noteOn(0) : e.start(0)
    }
    AudioMixer.isWebAudioSupport() || -1 == navigator.userAgent.toLowerCase().indexOf("mac") || (this.singleChannelMode = !0, c = 1);
    this.path = a;
    this.channels = [];
    for (d = 0; d < c; d++) this.channels[d] = new AudioPlayer,
    this.channels[d].init(a);
    Utils.addEventListener("hidewindow", Utils.proxy(this.pauseOnHide, this));
    Utils.addEventListener("showwindow", Utils.proxy(this.resumeOnShow, this))
};
AudioMixer.prototype.pauseOnHide = function() {
    for (var a = 0; a < this.channels.length; a++) this.channels[a].pause()
};
AudioMixer.prototype.resumeOnShow = function() {
    for (var a = 0; a < this.channels.length; a++) this.channels[a].resume()
};
AudioMixer.prototype.play = function(a, c, d, e) {
    var f = -1,
    f = "number" == typeof e ? e: this.getFreeChannel(d);
    0 <= f && f < this.channels.length && (this.channels[f].stop(), this.channels[f].play(a, c));
    return this.channels[f]
};
AudioMixer.prototype.stop = function(a) {
    0 <= a && a < this.channels.length && this.channels[a].stop()
};
AudioMixer.prototype.getFreeChannel = function(a) {
    for (var c = -1,
    d = [], e = -1, f = -1, g = 0, l = 0; l < this.channels.length; l++) this.channels[l].locked || (this.channels[l].busy ? (g = (new Date).getTime(), g -= this.channels[l].startPlayTime, g > f && (f = g, e = l)) : d.push(l));
    0 == d.length ? !a && 0 <= e && (c = e) : c = d[0];
    return c
};
AudioMixer.isWebAudioSupport = function() {
    return Boolean(window.AudioContext)
};
window.AudioContext = window.AudioContext || window.webkitAudioContext;
AudioMixer.buffer = {};
AudioMixer.waContext = null;
var TTLoader = {
    endCallback: null,
    loadedData: null,
    landscapeMode: !1,
    skipPlayButton: !1,
    create: function(a, c, d, e) {
        TTLoader.endCallback = a;
        TTLoader.landscapeMode = c;
        TTLoader.skipPlayButton = d;
        document.getElementById("progress_container").style.background = "#fff";
        document.getElementById("progress_container").style.zIndex = "1000";
        a = document.getElementById("progress");
        a.setAttribute("valign", "top");
        a.style.verticalAlign = "top";
        a.style.background = "#fff";
        c = document.createElement("div");
        d = document.createElement("a");
        d.setAttribute("id", "tt_load_logo_c");
        var f = window.ExternalAPI ? ExternalAPI.exec("getPreloaderURL") : "http://h.7k7k.com/",
        g = "_blank";
        if (e || !f) f = "javascript:void(0)",
        g = "";
        d.setAttribute("href", f);
        d.setAttribute("target", g);
        e = new Image;
        e.setAttribute("id", "tt_load_logo");
        e.setAttribute("border", "");
        e.src = TTLoader.logoSrc;
        e.style.cursor = "pointer";
        d.appendChild(e);
        c.appendChild(d);
        a.appendChild(c);
        c = document.createElement("div");
        c.setAttribute("id", "tt_load_progress_cont");
        c.setAttribute("align", "left");
        c.setAttribute("style", "padding: 1px; border: 2px solid #e44d26; background: #fff");
        e = document.createElement("div");
        e.setAttribute("id", "tt_load_progress");
        e.setAttribute("style", "width: 0px; background: #e44d26;");
        e.innerHTML = "&nbsp;";
        c.appendChild(e);
        a.appendChild(c);
        c = document.createElement("div");
        c.setAttribute("id", "tt_load_play");
        e = new Image;
        e.setAttribute("id", "tt_load_button");
        e.src = TTLoader.buttonDisabledSrc;
        e.style.visibility = TTLoader.skipPlayButton ? "hidden": "visible";
        c.appendChild(e);
        a.appendChild(c);
        Utils.addEventListener("fitlayout", TTLoader.setSizes);
        TTLoader.setSizes()
    },
    setSizes: function() {
        var a = Utils.getWindowRect();
        document.getElementById("progress_container").style.width = a.width + "px";
        document.getElementById("progress_container").style.height = a.height + "px";
        a = Utils.globalScale * Utils.globalPixelScale;
        TTLoader.landscapeMode || (document.getElementById("progress").style.paddingTop = Math.floor(80 * a) + "px");
        document.getElementById("tt_load_progress_cont").style.width = Math.floor(200 * a) + "px";
        document.getElementById("tt_load_progress").style.height = Math.floor(12 * a) + "px";
        document.getElementById("tt_load_progress").style.width = a * TTLoader.progressVal * 2 + "px";
        document.getElementById("tt_load_logo").style.marginTop = Math.floor(80 * a) + "px";
        document.getElementById("tt_load_logo").setAttribute("width", Math.floor(300 * a) + "px");
        document.getElementById("tt_load_logo").setAttribute("height", Math.floor(65 * a) + "px");
        document.getElementById("tt_load_button").setAttribute("width", Math.floor(65 * a) + "px");
        document.getElementById("tt_load_button").setAttribute("height", Math.floor(29 * a) + "px");
        document.getElementById("tt_load_button").style.marginTop = Math.floor(30 * a) + "px"
    },
    progressVal: 0,
    showLoadProgress: function(a) {
        0 > a && (a = 0);
        100 < a && (a = 100);
        TTLoader.progressVal = a;
        TTLoader.setSizes()
    },
    loadComplete: function(a) {
        TTLoader.showLoadProgress(100);
        TTLoader.loadedData = a;
        a = document.getElementById("tt_load_button");
        Utils.touchScreen ? a.addEventListener(Utils.isWindowsPhone() ? "MSPointerDown": "touchstart", TTLoader.close, !1) : a.onclick = TTLoader.close;
        a.style.cursor = "pointer";
        a.src = TTLoader.buttonSrc;
        a = document.getElementById("tt_load_progress");
        a.style.background = "transparent";
        a = document.getElementById("tt_load_progress_cont");
        a.style.border = "2px solid transparent";
        a.style.background = "transparent";
        document.getElementById("tt_load_button").style.display = "block";
        TTLoader.skipPlayButton && TTLoader.close()
    },
    close: function(a) {
        clearTimeout(TTLoader.animateTimeout);
        TTLoader.endCallback(TTLoader.loadedData)
    },
    logoSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGMEE3ODFBRDlFQTExRTNCQzlFRkU2NDEyNEFGQjIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGMEE3ODFCRDlFQTExRTNCQzlFRkU2NDEyNEFGQjIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkYwQTc4MThEOUVBMTFFM0JDOUVGRTY0MTI0QUZCMjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkYwQTc4MTlEOUVBMTFFM0JDOUVGRTY0MTI0QUZCMjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",
    buttonDisabledSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRGOTNDRkRBRDlFQjExRTNCODI2OTVDQ0I1QjQ3QTUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRGOTNDRkRCRDlFQjExRTNCODI2OTVDQ0I1QjQ3QTUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEY5M0NGRDhEOUVCMTFFM0I4MjY5NUNDQjVCNDdBNTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEY5M0NGRDlEOUVCMTFFM0I4MjY5NUNDQjVCNDdBNTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",
    buttonSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0MkY2NjRBRDlFQjExRTNBNzU1REY3NjZERUJEODBBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0MkY2NjRCRDlFQjExRTNBNzU1REY3NjZERUJEODBBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQyRjY2NDhEOUVCMTFFM0E3NTVERjc2NkRFQkQ4MEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQyRjY2NDlEOUVCMTFFM0E3NTVERjc2NkRFQkQ4MEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"
};
function TilesSprite(a, c, d, e, f, g) {
    TilesSprite.superclass.constructor.call(this, a, c, d, f, g);
    this.framesCount = e;
    this.animated = 1 < e;
    this.currentFrameX = 0;
    this.addEventListener("changeframe", TilesSprite.changeStep);
    this.addEventListener("prerender", TilesSprite.sync)
}
Utils.extend(TilesSprite, Sprite);
TilesSprite.create = function(a, c) {
    if ("string" == typeof a) {
        c = c || window.library;
        if (!c) throw Error("Could not create sprite from asset '%s'. Library not found.", a);
        a = c.getAsset(a)
    }
    return new TilesSprite(a.bitmap, a.width || 1, a.height || 1, a.framesCount || (a.frames || 1) * (a.layers || 1), a.frames || 1, a.layers || 1)
};
TilesSprite.prototype.gotoAndStop = function(a) {
    this.currentFrameX = a;
    this.stop()
};
TilesSprite.prototype.gotoAndPlay = function(a) {
    this.currentFrameX = a;
    this.play()
};
TilesSprite.changeStep = function(a) {
    a = a.target;
    a.animated && (a.currentFrameX += a.animDirection, 0 < a.animDirection && a.currentFrameX >= a.framesCount && (a.currentFrameX = 0), 0 > a.animDirection && 0 > this.currentFrame && (this.currentFrameX = this.totalFrames - 1))
};
TilesSprite.sync = function(a) {
    a = a.target;
    a.currentLayer = Math.floor(a.currentFrameX / a.totalFrames);
    a.currentFrame = a.currentFrameX - a.currentLayer * a.totalFrames
};
var Box2D = {}; (function(a, c) {
    function d() {} ! (Object.prototype.defineProperty instanceof Function) && Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function && (Object.defineProperty = function(a, c, d) {
        d.get instanceof Function && a.__defineGetter__(c, d.get);
        d.set instanceof Function && a.__defineSetter__(c, d.set)
    });
    a.inherit = function(a, c) {
        d.prototype = c.prototype;
        a.prototype = new d;
        a.prototype.constructor = a
    };
    a.generateCallback = function(a, c) {
        return function() {
            c.apply(a, arguments)
        }
    };
    a.NVector = function(a) {
        a === c && (a = 0);
        for (var d = Array(a || 0), g = 0; g < a; ++g) d[g] = 0;
        return d
    };
    a.is = function(a, d) {
        return null === a ? !1 : d instanceof Function && a instanceof d || a.constructor.__implements != c && a.constructor.__implements[d] ? !0 : !1
    };
    a.parseUInt = function(a) {
        return Math.abs(parseInt(a))
    }
})(Box2D);
var Vector2 = Array,
Vector_a2j_Number = Box2D.NVector;
"undefined" === typeof Box2D && (Box2D = {});
"undefined" === typeof Box2D.Collision && (Box2D.Collision = {});
"undefined" === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
"undefined" === typeof Box2D.Common && (Box2D.Common = {});
"undefined" === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
"undefined" === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
"undefined" === typeof Box2D.Dynamics.Contacts && (Box2D.Dynamics.Contacts = {});
"undefined" === typeof Box2D.Dynamics.Controllers && (Box2D.Dynamics.Controllers = {});
"undefined" === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {}); (function() {
    function a() {
        a.b2AABB.apply(this, arguments)
    }
    function c() {
        c.b2Bound.apply(this, arguments)
    }
    function d() {
        d.b2BoundValues.apply(this, arguments);
        this.constructor === d && this.b2BoundValues.apply(this, arguments)
    }
    function e() {
        e.b2Collision.apply(this, arguments)
    }
    function f() {
        f.b2ContactID.apply(this, arguments);
        this.constructor === f && this.b2ContactID.apply(this, arguments)
    }
    function g() {
        g.b2ContactPoint.apply(this, arguments)
    }
    function l() {
        l.b2Distance.apply(this, arguments)
    }
    function h() {
        h.b2DistanceInput.apply(this, arguments)
    }
    function q() {
        q.b2DistanceOutput.apply(this, arguments)
    }
    function z() {
        z.b2DistanceProxy.apply(this, arguments)
    }
    function v() {
        v.b2DynamicTree.apply(this, arguments);
        this.constructor === v && this.b2DynamicTree.apply(this, arguments)
    }
    function t() {
        t.b2DynamicTreeBroadPhase.apply(this, arguments)
    }
    function y() {
        y.b2DynamicTreeNode.apply(this, arguments)
    }
    function w() {
        w.b2DynamicTreePair.apply(this, arguments)
    }
    function B() {
        B.b2Manifold.apply(this, arguments);
        this.constructor === B && this.b2Manifold.apply(this, arguments)
    }
    function K() {
        K.b2ManifoldPoint.apply(this, arguments);
        this.constructor === K && this.b2ManifoldPoint.apply(this, arguments)
    }
    function n() {
        n.b2Point.apply(this, arguments)
    }
    function F() {
        F.b2RayCastInput.apply(this, arguments);
        this.constructor === F && this.b2RayCastInput.apply(this, arguments)
    }
    function G() {
        G.b2RayCastOutput.apply(this, arguments)
    }
    function I() {
        I.b2Segment.apply(this, arguments)
    }
    function J() {
        J.b2SeparationFunction.apply(this, arguments)
    }
    function M() {
        M.b2Simplex.apply(this, arguments);
        this.constructor === M && this.b2Simplex.apply(this, arguments)
    }
    function D() {
        D.b2SimplexCache.apply(this, arguments)
    }
    function P() {
        P.b2SimplexVertex.apply(this, arguments)
    }
    function H() {
        H.b2TimeOfImpact.apply(this, arguments)
    }
    function L() {
        L.b2TOIInput.apply(this, arguments)
    }
    function Q() {
        Q.b2WorldManifold.apply(this, arguments);
        this.constructor === Q && this.b2WorldManifold.apply(this, arguments)
    }
    function N() {
        N.ClipVertex.apply(this, arguments)
    }
    function m() {
        m.Features.apply(this, arguments)
    }
    function k() {
        k.b2CircleShape.apply(this, arguments);
        this.constructor === k && this.b2CircleShape.apply(this, arguments)
    }
    function x() {
        x.b2EdgeChainDef.apply(this, arguments);
        this.constructor === x && this.b2EdgeChainDef.apply(this, arguments)
    }
    function u() {
        u.b2EdgeShape.apply(this, arguments);
        this.constructor === u && this.b2EdgeShape.apply(this, arguments)
    }
    function E() {
        E.b2MassData.apply(this, arguments)
    }
    function O() {
        O.b2PolygonShape.apply(this, arguments);
        this.constructor === O && this.b2PolygonShape.apply(this, arguments)
    }
    function C() {
        C.b2Shape.apply(this, arguments);
        this.constructor === C && this.b2Shape.apply(this, arguments)
    }
    function p() {
        p.b2Color.apply(this, arguments);
        this.constructor === p && this.b2Color.apply(this, arguments)
    }
    function r() {
        r.b2Settings.apply(this, arguments)
    }
    function A() {
        A.b2Mat22.apply(this, arguments);
        this.constructor === A && this.b2Mat22.apply(this, arguments)
    }
    function R() {
        R.b2Mat33.apply(this, arguments);
        this.constructor === R && this.b2Mat33.apply(this, arguments)
    }
    function Da() {
        Da.b2Math.apply(this, arguments)
    }
    function Ea() {
        Ea.b2Sweep.apply(this, arguments)
    }
    function S() {
        S.b2Transform.apply(this, arguments);
        this.constructor === S && this.b2Transform.apply(this, arguments)
    }
    function T() {
        T.b2Vec2.apply(this, arguments);
        this.constructor === T && this.b2Vec2.apply(this, arguments)
    }
    function U() {
        U.b2Vec3.apply(this, arguments);
        this.constructor === U && this.b2Vec3.apply(this, arguments)
    }
    function V() {
        V.b2Body.apply(this, arguments);
        this.constructor === V && this.b2Body.apply(this, arguments)
    }
    function W() {
        W.b2BodyDef.apply(this, arguments);
        this.constructor === W && this.b2BodyDef.apply(this, arguments)
    }
    function Fa() {
        Fa.b2ContactFilter.apply(this, arguments)
    }
    function Ga() {
        Ga.b2ContactImpulse.apply(this, arguments)
    }
    function Ha() {
        Ha.b2ContactListener.apply(this, arguments)
    }
    function X() {
        X.b2ContactManager.apply(this, arguments);
        this.constructor === X && this.b2ContactManager.apply(this, arguments)
    }
    function Y() {
        Y.b2DebugDraw.apply(this, arguments);
        this.constructor === Y && this.b2DebugDraw.apply(this, arguments)
    }
    function Ia() {
        Ia.b2DestructionListener.apply(this, arguments)
    }
    function Ja() {
        Ja.b2FilterData.apply(this, arguments)
    }
    function Z() {
        Z.b2Fixture.apply(this, arguments);
        this.constructor === Z && this.b2Fixture.apply(this, arguments)
    }
    function aa() {
        aa.b2FixtureDef.apply(this, arguments);
        this.constructor === aa && this.b2FixtureDef.apply(this, arguments)
    }
    function ba() {
        ba.b2Island.apply(this, arguments);
        this.constructor === ba && this.b2Island.apply(this, arguments)
    }
    function Ka() {
        Ka.b2TimeStep.apply(this, arguments)
    }
    function ca() {
        ca.b2World.apply(this, arguments);
        this.constructor === ca && this.b2World.apply(this, arguments)
    }
    function La() {
        La.b2CircleContact.apply(this, arguments)
    }
    function da() {
        da.b2Contact.apply(this, arguments);
        this.constructor === da && this.b2Contact.apply(this, arguments)
    }
    function ea() {
        ea.b2ContactConstraint.apply(this, arguments);
        this.constructor === ea && this.b2ContactConstraint.apply(this, arguments)
    }
    function Ma() {
        Ma.b2ContactConstraintPoint.apply(this, arguments)
    }
    function Na() {
        Na.b2ContactEdge.apply(this, arguments)
    }
    function fa() {
        fa.b2ContactFactory.apply(this, arguments);
        this.constructor === fa && this.b2ContactFactory.apply(this, arguments)
    }
    function Oa() {
        Oa.b2ContactRegister.apply(this, arguments)
    }
    function Pa() {
        Pa.b2ContactResult.apply(this, arguments)
    }
    function ga() {
        ga.b2ContactSolver.apply(this, arguments);
        this.constructor === ga && this.b2ContactSolver.apply(this, arguments)
    }
    function Qa() {
        Qa.b2EdgeAndCircleContact.apply(this, arguments)
    }
    function ha() {
        ha.b2NullContact.apply(this, arguments);
        this.constructor === ha && this.b2NullContact.apply(this, arguments)
    }
    function Ra() {
        Ra.b2PolyAndCircleContact.apply(this, arguments)
    }
    function Sa() {
        Sa.b2PolyAndEdgeContact.apply(this, arguments)
    }
    function Ta() {
        Ta.b2PolygonContact.apply(this, arguments)
    }
    function ia() {
        ia.b2PositionSolverManifold.apply(this, arguments);
        this.constructor === ia && this.b2PositionSolverManifold.apply(this, arguments)
    }
    function Ua() {
        Ua.b2BuoyancyController.apply(this, arguments)
    }
    function Va() {
        Va.b2ConstantAccelController.apply(this, arguments)
    }
    function Wa() {
        Wa.b2ConstantForceController.apply(this, arguments)
    }
    function Xa() {
        Xa.b2Controller.apply(this, arguments)
    }
    function Ya() {
        Ya.b2ControllerEdge.apply(this, arguments)
    }
    function Za() {
        Za.b2GravityController.apply(this, arguments)
    }
    function $a() {
        $a.b2TensorDampingController.apply(this, arguments)
    }
    function ja() {
        ja.b2DistanceJoint.apply(this, arguments);
        this.constructor === ja && this.b2DistanceJoint.apply(this, arguments)
    }
    function ka() {
        ka.b2DistanceJointDef.apply(this, arguments);
        this.constructor === ka && this.b2DistanceJointDef.apply(this, arguments)
    }
    function la() {
        la.b2FrictionJoint.apply(this, arguments);
        this.constructor === la && this.b2FrictionJoint.apply(this, arguments)
    }
    function ma() {
        ma.b2FrictionJointDef.apply(this, arguments);
        this.constructor === ma && this.b2FrictionJointDef.apply(this, arguments)
    }
    function na() {
        na.b2GearJoint.apply(this, arguments);
        this.constructor === na && this.b2GearJoint.apply(this, arguments)
    }
    function oa() {
        oa.b2GearJointDef.apply(this, arguments);
        this.constructor === oa && this.b2GearJointDef.apply(this, arguments)
    }
    function ab() {
        ab.b2Jacobian.apply(this, arguments)
    }
    function pa() {
        pa.b2Joint.apply(this, arguments);
        this.constructor === pa && this.b2Joint.apply(this, arguments)
    }
    function qa() {
        qa.b2JointDef.apply(this, arguments);
        this.constructor === qa && this.b2JointDef.apply(this, arguments)
    }
    function bb() {
        bb.b2JointEdge.apply(this, arguments)
    }
    function ra() {
        ra.b2LineJoint.apply(this, arguments);
        this.constructor === ra && this.b2LineJoint.apply(this, arguments)
    }
    function sa() {
        sa.b2LineJointDef.apply(this, arguments);
        this.constructor === sa && this.b2LineJointDef.apply(this, arguments)
    }
    function ta() {
        ta.b2MouseJoint.apply(this, arguments);
        this.constructor === ta && this.b2MouseJoint.apply(this, arguments)
    }
    function ua() {
        ua.b2MouseJointDef.apply(this, arguments);
        this.constructor === ua && this.b2MouseJointDef.apply(this, arguments)
    }
    function va() {
        va.b2PrismaticJoint.apply(this, arguments);
        this.constructor === va && this.b2PrismaticJoint.apply(this, arguments)
    }
    function wa() {
        wa.b2PrismaticJointDef.apply(this, arguments);
        this.constructor === wa && this.b2PrismaticJointDef.apply(this, arguments)
    }
    function xa() {
        xa.b2PulleyJoint.apply(this, arguments);
        this.constructor === xa && this.b2PulleyJoint.apply(this, arguments)
    }
    function ya() {
        ya.b2PulleyJointDef.apply(this, arguments);
        this.constructor === ya && this.b2PulleyJointDef.apply(this, arguments)
    }
    function za() {
        za.b2RevoluteJoint.apply(this, arguments);
        this.constructor === za && this.b2RevoluteJoint.apply(this, arguments)
    }
    function Aa() {
        Aa.b2RevoluteJointDef.apply(this, arguments);
        this.constructor === Aa && this.b2RevoluteJointDef.apply(this, arguments)
    }
    function Ba() {
        Ba.b2WeldJoint.apply(this, arguments);
        this.constructor === Ba && this.b2WeldJoint.apply(this, arguments)
    }
    function Ca() {
        Ca.b2WeldJointDef.apply(this, arguments);
        this.constructor === Ca && this.b2WeldJointDef.apply(this, arguments)
    }
    Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
    Box2D.Collision.b2AABB = a;
    Box2D.Collision.b2Bound = c;
    Box2D.Collision.b2BoundValues = d;
    Box2D.Collision.b2Collision = e;
    Box2D.Collision.b2ContactID = f;
    Box2D.Collision.b2ContactPoint = g;
    Box2D.Collision.b2Distance = l;
    Box2D.Collision.b2DistanceInput = h;
    Box2D.Collision.b2DistanceOutput = q;
    Box2D.Collision.b2DistanceProxy = z;
    Box2D.Collision.b2DynamicTree = v;
    Box2D.Collision.b2DynamicTreeBroadPhase = t;
    Box2D.Collision.b2DynamicTreeNode = y;
    Box2D.Collision.b2DynamicTreePair = w;
    Box2D.Collision.b2Manifold = B;
    Box2D.Collision.b2ManifoldPoint = K;
    Box2D.Collision.b2Point = n;
    Box2D.Collision.b2RayCastInput = F;
    Box2D.Collision.b2RayCastOutput = G;
    Box2D.Collision.b2Segment = I;
    Box2D.Collision.b2SeparationFunction = J;
    Box2D.Collision.b2Simplex = M;
    Box2D.Collision.b2SimplexCache = D;
    Box2D.Collision.b2SimplexVertex = P;
    Box2D.Collision.b2TimeOfImpact = H;
    Box2D.Collision.b2TOIInput = L;
    Box2D.Collision.b2WorldManifold = Q;
    Box2D.Collision.ClipVertex = N;
    Box2D.Collision.Features = m;
    Box2D.Collision.Shapes.b2CircleShape = k;
    Box2D.Collision.Shapes.b2EdgeChainDef = x;
    Box2D.Collision.Shapes.b2EdgeShape = u;
    Box2D.Collision.Shapes.b2MassData = E;
    Box2D.Collision.Shapes.b2PolygonShape = O;
    Box2D.Collision.Shapes.b2Shape = C;
    Box2D.Common.b2internal = "Box2D.Common.b2internal";
    Box2D.Common.b2Color = p;
    Box2D.Common.b2Settings = r;
    Box2D.Common.Math.b2Mat22 = A;
    Box2D.Common.Math.b2Mat33 = R;
    Box2D.Common.Math.b2Math = Da;
    Box2D.Common.Math.b2Sweep = Ea;
    Box2D.Common.Math.b2Transform = S;
    Box2D.Common.Math.b2Vec2 = T;
    Box2D.Common.Math.b2Vec3 = U;
    Box2D.Dynamics.b2Body = V;
    Box2D.Dynamics.b2BodyDef = W;
    Box2D.Dynamics.b2ContactFilter = Fa;
    Box2D.Dynamics.b2ContactImpulse = Ga;
    Box2D.Dynamics.b2ContactListener = Ha;
    Box2D.Dynamics.b2ContactManager = X;
    Box2D.Dynamics.b2DebugDraw = Y;
    Box2D.Dynamics.b2DestructionListener = Ia;
    Box2D.Dynamics.b2FilterData = Ja;
    Box2D.Dynamics.b2Fixture = Z;
    Box2D.Dynamics.b2FixtureDef = aa;
    Box2D.Dynamics.b2Island = ba;
    Box2D.Dynamics.b2TimeStep = Ka;
    Box2D.Dynamics.b2World = ca;
    Box2D.Dynamics.Contacts.b2CircleContact = La;
    Box2D.Dynamics.Contacts.b2Contact = da;
    Box2D.Dynamics.Contacts.b2ContactConstraint = ea;
    Box2D.Dynamics.Contacts.b2ContactConstraintPoint = Ma;
    Box2D.Dynamics.Contacts.b2ContactEdge = Na;
    Box2D.Dynamics.Contacts.b2ContactFactory = fa;
    Box2D.Dynamics.Contacts.b2ContactRegister = Oa;
    Box2D.Dynamics.Contacts.b2ContactResult = Pa;
    Box2D.Dynamics.Contacts.b2ContactSolver = ga;
    Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = Qa;
    Box2D.Dynamics.Contacts.b2NullContact = ha;
    Box2D.Dynamics.Contacts.b2PolyAndCircleContact = Ra;
    Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = Sa;
    Box2D.Dynamics.Contacts.b2PolygonContact = Ta;
    Box2D.Dynamics.Contacts.b2PositionSolverManifold = ia;
    Box2D.Dynamics.Controllers.b2BuoyancyController = Ua;
    Box2D.Dynamics.Controllers.b2ConstantAccelController = Va;
    Box2D.Dynamics.Controllers.b2ConstantForceController = Wa;
    Box2D.Dynamics.Controllers.b2Controller = Xa;
    Box2D.Dynamics.Controllers.b2ControllerEdge = Ya;
    Box2D.Dynamics.Controllers.b2GravityController = Za;
    Box2D.Dynamics.Controllers.b2TensorDampingController = $a;
    Box2D.Dynamics.Joints.b2DistanceJoint = ja;
    Box2D.Dynamics.Joints.b2DistanceJointDef = ka;
    Box2D.Dynamics.Joints.b2FrictionJoint = la;
    Box2D.Dynamics.Joints.b2FrictionJointDef = ma;
    Box2D.Dynamics.Joints.b2GearJoint = na;
    Box2D.Dynamics.Joints.b2GearJointDef = oa;
    Box2D.Dynamics.Joints.b2Jacobian = ab;
    Box2D.Dynamics.Joints.b2Joint = pa;
    Box2D.Dynamics.Joints.b2JointDef = qa;
    Box2D.Dynamics.Joints.b2JointEdge = bb;
    Box2D.Dynamics.Joints.b2LineJoint = ra;
    Box2D.Dynamics.Joints.b2LineJointDef = sa;
    Box2D.Dynamics.Joints.b2MouseJoint = ta;
    Box2D.Dynamics.Joints.b2MouseJointDef = ua;
    Box2D.Dynamics.Joints.b2PrismaticJoint = va;
    Box2D.Dynamics.Joints.b2PrismaticJointDef = wa;
    Box2D.Dynamics.Joints.b2PulleyJoint = xa;
    Box2D.Dynamics.Joints.b2PulleyJointDef = ya;
    Box2D.Dynamics.Joints.b2RevoluteJoint = za;
    Box2D.Dynamics.Joints.b2RevoluteJointDef = Aa;
    Box2D.Dynamics.Joints.b2WeldJoint = Ba;
    Box2D.Dynamics.Joints.b2WeldJointDef = Ca
})();
Box2D.postDefs = []; (function() {
    var a = Box2D.Collision.Shapes.b2CircleShape,
    c = Box2D.Collision.Shapes.b2PolygonShape,
    d = Box2D.Collision.Shapes.b2Shape,
    e = Box2D.Common.b2Settings,
    f = Box2D.Common.Math.b2Math,
    g = Box2D.Common.Math.b2Sweep,
    l = Box2D.Common.Math.b2Transform,
    h = Box2D.Common.Math.b2Vec2,
    q = Box2D.Collision.b2AABB,
    z = Box2D.Collision.b2Bound,
    v = Box2D.Collision.b2BoundValues,
    t = Box2D.Collision.b2Collision,
    y = Box2D.Collision.b2ContactID,
    w = Box2D.Collision.b2ContactPoint,
    B = Box2D.Collision.b2Distance,
    K = Box2D.Collision.b2DistanceInput,
    n = Box2D.Collision.b2DistanceOutput,
    F = Box2D.Collision.b2DistanceProxy,
    G = Box2D.Collision.b2DynamicTree,
    I = Box2D.Collision.b2DynamicTreeBroadPhase,
    J = Box2D.Collision.b2DynamicTreeNode,
    M = Box2D.Collision.b2DynamicTreePair,
    D = Box2D.Collision.b2Manifold,
    P = Box2D.Collision.b2ManifoldPoint,
    H = Box2D.Collision.b2Point,
    L = Box2D.Collision.b2RayCastInput,
    Q = Box2D.Collision.b2RayCastOutput,
    N = Box2D.Collision.b2Segment,
    m = Box2D.Collision.b2SeparationFunction,
    k = Box2D.Collision.b2Simplex,
    x = Box2D.Collision.b2SimplexCache,
    u = Box2D.Collision.b2SimplexVertex,
    E = Box2D.Collision.b2TimeOfImpact,
    O = Box2D.Collision.b2TOIInput,
    C = Box2D.Collision.b2WorldManifold,
    p = Box2D.Collision.ClipVertex,
    r = Box2D.Collision.Features,
    A = Box2D.Collision.IBroadPhase;
    q.b2AABB = function() {
        this.lowerBound = new h;
        this.upperBound = new h
    };
    q.prototype.IsValid = function() {
        var a = this.upperBound.y - this.lowerBound.y;
        return a = (a = 0 <= this.upperBound.x - this.lowerBound.x && 0 <= a) && this.lowerBound.IsValid() && this.upperBound.IsValid()
    };
    q.prototype.GetCenter = function() {
        return new h((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
    };
    q.prototype.GetExtents = function() {
        return new h((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2)
    };
    q.prototype.Contains = function(a) {
        var c;
        return c = (c = (c = (c = this.lowerBound.x <= a.lowerBound.x) && this.lowerBound.y <= a.lowerBound.y) && a.upperBound.x <= this.upperBound.x) && a.upperBound.y <= this.upperBound.y
    };
    q.prototype.RayCast = function(a, c) {
        var d = -Number.MAX_VALUE,
        p = Number.MAX_VALUE,
        e = c.p1.x,
        r = c.p1.y,
        m = c.p2.x - c.p1.x,
        f = c.p2.y - c.p1.y,
        k = Math.abs(m),
        u = Math.abs(f),
        g = a.normal,
        A = 0,
        h = 0,
        x = A = 0,
        x = 0;
        if (k < Number.MIN_VALUE) {
            if (e < this.lowerBound.x || this.upperBound.x < e) return ! 1
        } else if (A = 1 / m, h = (this.lowerBound.x - e) * A, A *= this.upperBound.x - e, x = -1, h > A && (x = h, h = A, A = x, x = 1), h > d && (g.x = x, g.y = 0, d = h), p = Math.min(p, A), d > p) return ! 1;
        if (u < Number.MIN_VALUE) {
            if (r < this.lowerBound.y || this.upperBound.y < r) return ! 1
        } else if (A = 1 / f, h = (this.lowerBound.y - r) * A, A *= this.upperBound.y - r, x = -1, h > A && (x = h, h = A, A = x, x = 1), h > d && (g.y = x, g.x = 0, d = h), p = Math.min(p, A), d > p) return ! 1;
        a.fraction = d;
        return ! 0
    };
    q.prototype.TestOverlap = function(a) {
        var c = a.lowerBound.y - this.upperBound.y,
        d = this.lowerBound.y - a.upperBound.y;
        return 0 < a.lowerBound.x - this.upperBound.x || 0 < c || 0 < this.lowerBound.x - a.upperBound.x || 0 < d ? !1 : !0
    };
    q.Combine = function(a, c) {
        var d = new q;
        d.Combine(a, c);
        return d
    };
    q.prototype.Combine = function(a, c) {
        this.lowerBound.x = Math.min(a.lowerBound.x, c.lowerBound.x);
        this.lowerBound.y = Math.min(a.lowerBound.y, c.lowerBound.y);
        this.upperBound.x = Math.max(a.upperBound.x, c.upperBound.x);
        this.upperBound.y = Math.max(a.upperBound.y, c.upperBound.y)
    };
    z.b2Bound = function() {};
    z.prototype.IsLower = function() {
        return 0 == (this.value & 1)
    };
    z.prototype.IsUpper = function() {
        return 1 == (this.value & 1)
    };
    z.prototype.Swap = function(a) {
        var c = this.value,
        d = this.proxy,
        p = this.stabbingCount;
        this.value = a.value;
        this.proxy = a.proxy;
        this.stabbingCount = a.stabbingCount;
        a.value = c;
        a.proxy = d;
        a.stabbingCount = p
    };
    v.b2BoundValues = function() {};
    v.prototype.b2BoundValues = function() {
        this.lowerValues = new Vector_a2j_Number;
        this.lowerValues[0] = 0;
        this.lowerValues[1] = 0;
        this.upperValues = new Vector_a2j_Number;
        this.upperValues[0] = 0;
        this.upperValues[1] = 0
    };
    t.b2Collision = function() {};
    t.ClipSegmentToLine = function(a, c, d, p) {
        void 0 === p && (p = 0);
        var e, r = 0;
        e = c[0];
        var m = e.v;
        e = c[1];
        var f = e.v,
        k = d.x * m.x + d.y * m.y - p;
        e = d.x * f.x + d.y * f.y - p;
        0 >= k && a[r++].Set(c[0]);
        0 >= e && a[r++].Set(c[1]);
        0 > k * e && (d = k / (k - e), e = a[r], e = e.v, e.x = m.x + d * (f.x - m.x), e.y = m.y + d * (f.y - m.y), e = a[r], e.id = (0 < k ? c[0] : c[1]).id, ++r);
        return r
    };
    t.EdgeSeparation = function(a, c, d, p, e) {
        void 0 === d && (d = 0);
        parseInt(a.m_vertexCount);
        var r = a.m_vertices;
        a = a.m_normals;
        var m = parseInt(p.m_vertexCount),
        f = p.m_vertices,
        k,
        u;
        k = c.R;
        u = a[d];
        a = k.col1.x * u.x + k.col2.x * u.y;
        p = k.col1.y * u.x + k.col2.y * u.y;
        k = e.R;
        var A = k.col1.x * a + k.col1.y * p;
        k = k.col2.x * a + k.col2.y * p;
        for (var g = 0,
        h = Number.MAX_VALUE,
        x = 0; x < m; ++x) u = f[x],
        u = u.x * A + u.y * k,
        u < h && (h = u, g = x);
        u = r[d];
        k = c.R;
        d = c.position.x + (k.col1.x * u.x + k.col2.x * u.y);
        c = c.position.y + (k.col1.y * u.x + k.col2.y * u.y);
        u = f[g];
        k = e.R;
        r = e.position.x + (k.col1.x * u.x + k.col2.x * u.y);
        e = e.position.y + (k.col1.y * u.x + k.col2.y * u.y);
        return (r - d) * a + (e - c) * p
    };
    t.FindMaxSeparation = function(a, c, d, p, e) {
        var r = parseInt(c.m_vertexCount),
        m = c.m_normals,
        f,
        k;
        k = e.R;
        f = p.m_centroid;
        var u = e.position.x + (k.col1.x * f.x + k.col2.x * f.y),
        A = e.position.y + (k.col1.y * f.x + k.col2.y * f.y);
        k = d.R;
        f = c.m_centroid;
        u -= d.position.x + (k.col1.x * f.x + k.col2.x * f.y);
        A -= d.position.y + (k.col1.y * f.x + k.col2.y * f.y);
        k = u * d.R.col1.x + A * d.R.col1.y;
        for (var A = u * d.R.col2.x + A * d.R.col2.y,
        u = 0,
        g = -Number.MAX_VALUE,
        h = 0; h < r; ++h) f = m[h],
        f = f.x * k + f.y * A,
        f > g && (g = f, u = h);
        m = t.EdgeSeparation(c, d, u, p, e);
        f = parseInt(0 <= u - 1 ? u - 1 : r - 1);
        k = t.EdgeSeparation(c, d, f, p, e);
        var A = parseInt(u + 1 < r ? u + 1 : 0),
        g = t.EdgeSeparation(c, d, A, p, e),
        x = h = 0,
        n = 0;
        if (k > m && k > g) n = -1,
        h = f,
        x = k;
        else if (g > m) n = 1,
        h = A,
        x = g;
        else return a[0] = u,
        m;
        for (;;) if (u = -1 == n ? 0 <= h - 1 ? h - 1 : r - 1 : h + 1 < r ? h + 1 : 0, m = t.EdgeSeparation(c, d, u, p, e), m > x) h = u,
        x = m;
        else break;
        a[0] = h;
        return x
    };
    t.FindIncidentEdge = function(a, c, d, p, e, r) {
        void 0 === p && (p = 0);
        parseInt(c.m_vertexCount);
        var m = c.m_normals,
        f = parseInt(e.m_vertexCount);
        c = e.m_vertices;
        e = e.m_normals;
        var k;
        k = d.R;
        d = m[p];
        var m = k.col1.x * d.x + k.col2.x * d.y,
        u = k.col1.y * d.x + k.col2.y * d.y;
        k = r.R;
        d = k.col1.x * m + k.col1.y * u;
        u = k.col2.x * m + k.col2.y * u;
        m = d;
        k = 0;
        for (var A = Number.MAX_VALUE,
        g = 0; g < f; ++g) d = e[g],
        d = m * d.x + u * d.y,
        d < A && (A = d, k = g);
        e = parseInt(k);
        m = parseInt(e + 1 < f ? e + 1 : 0);
        f = a[0];
        d = c[e];
        k = r.R;
        f.v.x = r.position.x + (k.col1.x * d.x + k.col2.x * d.y);
        f.v.y = r.position.y + (k.col1.y * d.x + k.col2.y * d.y);
        f.id.features.referenceEdge = p;
        f.id.features.incidentEdge = e;
        f.id.features.incidentVertex = 0;
        f = a[1];
        d = c[m];
        k = r.R;
        f.v.x = r.position.x + (k.col1.x * d.x + k.col2.x * d.y);
        f.v.y = r.position.y + (k.col1.y * d.x + k.col2.y * d.y);
        f.id.features.referenceEdge = p;
        f.id.features.incidentEdge = m;
        f.id.features.incidentVertex = 1
    };
    t.MakeClipPointVector = function() {
        var a = new Vector2(2);
        a[0] = new p;
        a[1] = new p;
        return a
    };
    t.CollidePolygons = function(a, c, d, p, r) {
        var m;
        a.m_pointCount = 0;
        var f = c.m_radius + p.m_radius;
        t.s_edgeAO[0] = 0;
        var k = t.FindMaxSeparation(t.s_edgeAO, c, d, p, r);
        m = t.s_edgeAO[0];
        if (! (k > f)) {
            var u;
            t.s_edgeBO[0] = 0;
            var A = t.FindMaxSeparation(t.s_edgeBO, p, r, c, d);
            u = t.s_edgeBO[0];
            if (! (A > f)) {
                var g = 0,
                h = 0;
                A > .98 * k + .001 ? (k = p, p = c, c = r, g = u, a.m_type = D.e_faceB, h = 1) : (k = c, c = d, d = r, g = m, a.m_type = D.e_faceA, h = 0);
                m = t.s_incidentEdge;
                t.FindIncidentEdge(m, k, c, g, p, d);
                u = parseInt(k.m_vertexCount);
                r = k.m_vertices;
                var k = r[g],
                x;
                x = g + 1 < u ? r[parseInt(g + 1)] : r[0];
                g = t.s_localTangent;
                g.Set(x.x - k.x, x.y - k.y);
                g.Normalize();
                r = t.s_localNormal;
                r.x = g.y;
                r.y = -g.x;
                p = t.s_planePoint;
                p.Set(.5 * (k.x + x.x), .5 * (k.y + x.y));
                A = t.s_tangent;
                u = c.R;
                A.x = u.col1.x * g.x + u.col2.x * g.y;
                A.y = u.col1.y * g.x + u.col2.y * g.y;
                var n = t.s_tangent2;
                n.x = -A.x;
                n.y = -A.y;
                g = t.s_normal;
                g.x = A.y;
                g.y = -A.x;
                var E = t.s_v11,
                C = t.s_v12;
                E.x = c.position.x + (u.col1.x * k.x + u.col2.x * k.y);
                E.y = c.position.y + (u.col1.y * k.x + u.col2.y * k.y);
                C.x = c.position.x + (u.col1.x * x.x + u.col2.x * x.y);
                C.y = c.position.y + (u.col1.y * x.x + u.col2.y * x.y);
                c = g.x * E.x + g.y * E.y;
                u = A.x * C.x + A.y * C.y + f;
                x = t.s_clipPoints1;
                k = t.s_clipPoints2;
                C = 0;
                C = t.ClipSegmentToLine(x, m, n, -A.x * E.x - A.y * E.y + f);
                if (! (2 > C || (C = t.ClipSegmentToLine(k, x, A, u), 2 > C))) {
                    a.m_localPlaneNormal.SetV(r);
                    a.m_localPoint.SetV(p);
                    for (p = r = 0; p < e.b2_maxManifoldPoints; ++p) m = k[p],
                    g.x * m.v.x + g.y * m.v.y - c <= f && (A = a.m_points[r], u = d.R, n = m.v.x - d.position.x, E = m.v.y - d.position.y, A.m_localPoint.x = n * u.col1.x + E * u.col1.y, A.m_localPoint.y = n * u.col2.x + E * u.col2.y, A.m_id.Set(m.id), A.m_id.features.flip = h, ++r);
                    a.m_pointCount = r
                }
            }
        }
    };
    t.CollideCircles = function(a, c, d, p, e) {
        a.m_pointCount = 0;
        var r, m;
        r = d.R;
        m = c.m_p;
        var k = d.position.x + (r.col1.x * m.x + r.col2.x * m.y);
        d = d.position.y + (r.col1.y * m.x + r.col2.y * m.y);
        r = e.R;
        m = p.m_p;
        k = e.position.x + (r.col1.x * m.x + r.col2.x * m.y) - k;
        e = e.position.y + (r.col1.y * m.x + r.col2.y * m.y) - d;
        r = c.m_radius + p.m_radius;
        k * k + e * e > r * r || (a.m_type = D.e_circles, a.m_localPoint.SetV(c.m_p), a.m_localPlaneNormal.SetZero(), a.m_pointCount = 1, a.m_points[0].m_localPoint.SetV(p.m_p), a.m_points[0].m_id.key = 0)
    };
    t.CollidePolygonAndCircle = function(a, c, d, p, e) {
        var r = a.m_pointCount = 0,
        m = 0,
        k, f;
        f = e.R;
        k = p.m_p;
        var u = e.position.y + (f.col1.y * k.x + f.col2.y * k.y),
        r = e.position.x + (f.col1.x * k.x + f.col2.x * k.y) - d.position.x,
        m = u - d.position.y;
        f = d.R;
        d = r * f.col1.x + m * f.col1.y;
        f = r * f.col2.x + m * f.col2.y;
        var A = 0,
        u = -Number.MAX_VALUE;
        e = c.m_radius + p.m_radius;
        var g = parseInt(c.m_vertexCount),
        x = c.m_vertices;
        c = c.m_normals;
        for (var h = 0; h < g; ++h) {
            k = x[h];
            r = d - k.x;
            m = f - k.y;
            k = c[h];
            r = k.x * r + k.y * m;
            if (r > e) return;
            r > u && (u = r, A = h)
        }
        r = parseInt(A);
        m = parseInt(r + 1 < g ? r + 1 : 0);
        k = x[r];
        x = x[m];
        u < Number.MIN_VALUE ? (a.m_pointCount = 1, a.m_type = D.e_faceA, a.m_localPlaneNormal.SetV(c[A]), a.m_localPoint.x = .5 * (k.x + x.x), a.m_localPoint.y = .5 * (k.y + x.y), a.m_points[0].m_localPoint.SetV(p.m_p), a.m_points[0].m_id.key = 0) : (u = (d - x.x) * (k.x - x.x) + (f - x.y) * (k.y - x.y), 0 >= (d - k.x) * (x.x - k.x) + (f - k.y) * (x.y - k.y) ? (d - k.x) * (d - k.x) + (f - k.y) * (f - k.y) > e * e || (a.m_pointCount = 1, a.m_type = D.e_faceA, a.m_localPlaneNormal.x = d - k.x, a.m_localPlaneNormal.y = f - k.y, a.m_localPlaneNormal.Normalize(), a.m_localPoint.SetV(k), a.m_points[0].m_localPoint.SetV(p.m_p), a.m_points[0].m_id.key = 0) : 0 >= u ? (d - x.x) * (d - x.x) + (f - x.y) * (f - x.y) > e * e || (a.m_pointCount = 1, a.m_type = D.e_faceA, a.m_localPlaneNormal.x = d - x.x, a.m_localPlaneNormal.y = f - x.y, a.m_localPlaneNormal.Normalize(), a.m_localPoint.SetV(x), a.m_points[0].m_localPoint.SetV(p.m_p), a.m_points[0].m_id.key = 0) : (A = .5 * (k.x + x.x), k = .5 * (k.y + x.y), u = (d - A) * c[r].x + (f - k) * c[r].y, u > e || (a.m_pointCount = 1, a.m_type = D.e_faceA, a.m_localPlaneNormal.x = c[r].x, a.m_localPlaneNormal.y = c[r].y, a.m_localPlaneNormal.Normalize(), a.m_localPoint.Set(A, k), a.m_points[0].m_localPoint.SetV(p.m_p), a.m_points[0].m_id.key = 0)))
    };
    t.TestOverlap = function(a, c) {
        var d = c.lowerBound,
        p = a.upperBound,
        e = d.x - p.x,
        r = d.y - p.y,
        d = a.lowerBound,
        p = c.upperBound,
        m = d.y - p.y;
        return 0 < e || 0 < r || 0 < d.x - p.x || 0 < m ? !1 : !0
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Collision.s_incidentEdge = t.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints1 = t.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints2 = t.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_localTangent = new h;
        Box2D.Collision.b2Collision.s_localNormal = new h;
        Box2D.Collision.b2Collision.s_planePoint = new h;
        Box2D.Collision.b2Collision.s_normal = new h;
        Box2D.Collision.b2Collision.s_tangent = new h;
        Box2D.Collision.b2Collision.s_tangent2 = new h;
        Box2D.Collision.b2Collision.s_v11 = new h;
        Box2D.Collision.b2Collision.s_v12 = new h;
        Box2D.Collision.b2Collision.b2CollidePolyTempVec = new h;
        Box2D.Collision.b2Collision.b2_nullFeature = 255
    });
    y.b2ContactID = function() {
        this.features = new r
    };
    y.prototype.b2ContactID = function() {
        this.features._m_id = this
    };
    y.prototype.Set = function(a) {
        this.key = a._key
    };
    y.prototype.Copy = function() {
        var a = new y;
        a.key = this.key;
        return a
    };
    Object.defineProperty(y.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._key
        }
    });
    Object.defineProperty(y.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._key = a;
            this.features._referenceEdge = this._key & 255;
            this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
            this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
            this.features._flip = (this._key & 4278190080) >> 24 & 255
        }
    });
    w.b2ContactPoint = function() {
        this.position = new h;
        this.velocity = new h;
        this.normal = new h;
        this.id = new y
    };
    B.b2Distance = function() {};
    B.Distance = function(a, c, d) {++B.b2_gjkCalls;
        var p = d.proxyA,
        r = d.proxyB,
        m = d.transformA,
        k = d.transformB,
        u = B.s_simplex;
        u.ReadCache(c, p, m, r, k);
        var A = u.m_vertices,
        g = B.s_saveA,
        x = B.s_saveB,
        n = 0;
        u.GetClosestPoint().LengthSquared();
        for (var E = 0,
        C, O = 0; 20 > O;) {
            n = u.m_count;
            for (E = 0; E < n; E++) g[E] = A[E].indexA,
            x[E] = A[E].indexB;
            switch (u.m_count) {
            case 1:
                break;
            case 2:
                u.Solve2();
                break;
            case 3:
                u.Solve3();
                break;
            default:
                e.b2Assert(!1)
            }
            if (3 == u.m_count) break;
            C = u.GetClosestPoint();
            C.LengthSquared();
            E = u.GetSearchDirection();
            if (E.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
            C = A[u.m_count];
            C.indexA = p.GetSupport(f.MulTMV(m.R, E.GetNegative()));
            C.wA = f.MulX(m, p.GetVertex(C.indexA));
            C.indexB = r.GetSupport(f.MulTMV(k.R, E));
            C.wB = f.MulX(k, r.GetVertex(C.indexB));
            C.w = f.SubtractVV(C.wB, C.wA); ++O; ++B.b2_gjkIters;
            for (var q = !1,
            E = 0; E < n; E++) if (C.indexA == g[E] && C.indexB == x[E]) {
                q = !0;
                break
            }
            if (q) break; ++u.m_count
        }
        B.b2_gjkMaxIters = f.Max(B.b2_gjkMaxIters, O);
        u.GetWitnessPoints(a.pointA, a.pointB);
        a.distance = f.SubtractVV(a.pointA, a.pointB).Length();
        a.iterations = O;
        u.WriteCache(c);
        d.useRadii && (c = p.m_radius, r = r.m_radius, a.distance > c + r && a.distance > Number.MIN_VALUE ? (a.distance -= c + r, d = f.SubtractVV(a.pointB, a.pointA), d.Normalize(), a.pointA.x += c * d.x, a.pointA.y += c * d.y, a.pointB.x -= r * d.x, a.pointB.y -= r * d.y) : (C = new h, C.x = .5 * (a.pointA.x + a.pointB.x), C.y = .5 * (a.pointA.y + a.pointB.y), a.pointA.x = a.pointB.x = C.x, a.pointA.y = a.pointB.y = C.y, a.distance = 0))
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Distance.s_simplex = new k;
        Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3)
    });
    K.b2DistanceInput = function() {};
    n.b2DistanceOutput = function() {
        this.pointA = new h;
        this.pointB = new h
    };
    F.b2DistanceProxy = function() {};
    F.prototype.Set = function(p) {
        switch (p.GetType()) {
        case d.e_circleShape:
            p = p instanceof a ? p: null;
            this.m_vertices = new Vector2(1, !0);
            this.m_vertices[0] = p.m_p;
            this.m_count = 1;
            this.m_radius = p.m_radius;
            break;
        case d.e_polygonShape:
            p = p instanceof c ? p: null;
            this.m_vertices = p.m_vertices;
            this.m_count = p.m_vertexCount;
            this.m_radius = p.m_radius;
            break;
        default:
            e.b2Assert(!1)
        }
    };
    F.prototype.GetSupport = function(a) {
        for (var c = 0,
        d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, p = 1; p < this.m_count; ++p) {
            var e = this.m_vertices[p].x * a.x + this.m_vertices[p].y * a.y;
            e > d && (c = p, d = e)
        }
        return c
    };
    F.prototype.GetSupportVertex = function(a) {
        for (var c = 0,
        d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, p = 1; p < this.m_count; ++p) {
            var e = this.m_vertices[p].x * a.x + this.m_vertices[p].y * a.y;
            e > d && (c = p, d = e)
        }
        return this.m_vertices[c]
    };
    F.prototype.GetVertexCount = function() {
        return this.m_count
    };
    F.prototype.GetVertex = function(a) {
        void 0 === a && (a = 0);
        e.b2Assert(0 <= a && a < this.m_count);
        return this.m_vertices[a]
    };
    G.b2DynamicTree = function() {};
    G.prototype.b2DynamicTree = function() {
        this.m_freeList = this.m_root = null;
        this.m_insertionCount = this.m_path = 0
    };
    G.prototype.CreateProxy = function(a, c) {
        var d = this.AllocateNode(),
        p = e.b2_aabbExtension,
        r = e.b2_aabbExtension;
        d.aabb.lowerBound.x = a.lowerBound.x - p;
        d.aabb.lowerBound.y = a.lowerBound.y - r;
        d.aabb.upperBound.x = a.upperBound.x + p;
        d.aabb.upperBound.y = a.upperBound.y + r;
        d.userData = c;
        this.InsertLeaf(d);
        return d
    };
    G.prototype.DestroyProxy = function(a) {
        this.RemoveLeaf(a);
        this.FreeNode(a)
    };
    G.prototype.MoveProxy = function(a, c, d) {
        e.b2Assert(a.IsLeaf());
        if (a.aabb.Contains(c)) return ! 1;
        this.RemoveLeaf(a);
        var p = e.b2_aabbExtension + e.b2_aabbMultiplier * (0 < d.x ? d.x: -d.x);
        d = e.b2_aabbExtension + e.b2_aabbMultiplier * (0 < d.y ? d.y: -d.y);
        a.aabb.lowerBound.x = c.lowerBound.x - p;
        a.aabb.lowerBound.y = c.lowerBound.y - d;
        a.aabb.upperBound.x = c.upperBound.x + p;
        a.aabb.upperBound.y = c.upperBound.y + d;
        this.InsertLeaf(a);
        return ! 0
    };
    G.prototype.Rebalance = function(a) {
        void 0 === a && (a = 0);
        if (null != this.m_root) for (var c = 0; c < a; c++) {
            for (var d = this.m_root,
            p = 0; 0 == d.IsLeaf();) d = this.m_path >> p & 1 ? d.child2: d.child1,
            p = p + 1 & 31; ++this.m_path;
            this.RemoveLeaf(d);
            this.InsertLeaf(d)
        }
    };
    G.prototype.GetFatAABB = function(a) {
        return a.aabb
    };
    G.prototype.GetUserData = function(a) {
        return a.userData
    };
    G.prototype.Query = function(a, c) {
        if (null != this.m_root) {
            var d = new Vector2,
            p = 0;
            for (d[p++] = this.m_root; 0 < p;) {
                var e = d[--p];
                if (e.aabb.TestOverlap(c)) if (e.IsLeaf()) {
                    if (!a(e)) break
                } else d[p++] = e.child1,
                d[p++] = e.child2
            }
        }
    };
    G.prototype.RayCast = function(a, c) {
        if (null != this.m_root) {
            var d = c.p1,
            p = c.p2,
            e = f.SubtractVV(d, p);
            e.Normalize();
            var e = f.CrossFV(1, e),
            r = f.AbsV(e),
            m = c.maxFraction,
            k = new q,
            u = 0,
            A = 0,
            u = d.x + m * (p.x - d.x),
            A = d.y + m * (p.y - d.y);
            k.lowerBound.x = Math.min(d.x, u);
            k.lowerBound.y = Math.min(d.y, A);
            k.upperBound.x = Math.max(d.x, u);
            k.upperBound.y = Math.max(d.y, A);
            var g = new Vector2,
            x = 0;
            for (g[x++] = this.m_root; 0 < x;) if (m = g[--x], 0 != m.aabb.TestOverlap(k) && (u = m.aabb.GetCenter(), A = m.aabb.GetExtents(), !(0 < Math.abs(e.x * (d.x - u.x) + e.y * (d.y - u.y)) - r.x * A.x - r.y * A.y))) if (m.IsLeaf()) {
                u = new L;
                u.p1 = c.p1;
                u.p2 = c.p2;
                u.maxFraction = c.maxFraction;
                m = a(u, m);
                if (0 == m) break;
                0 < m && (u = d.x + m * (p.x - d.x), A = d.y + m * (p.y - d.y), k.lowerBound.x = Math.min(d.x, u), k.lowerBound.y = Math.min(d.y, A), k.upperBound.x = Math.max(d.x, u), k.upperBound.y = Math.max(d.y, A))
            } else g[x++] = m.child1,
            g[x++] = m.child2
        }
    };
    G.prototype.AllocateNode = function() {
        if (this.m_freeList) {
            var a = this.m_freeList;
            this.m_freeList = a.parent;
            a.parent = null;
            a.child1 = null;
            a.child2 = null;
            return a
        }
        return new J
    };
    G.prototype.FreeNode = function(a) {
        a.parent = this.m_freeList;
        this.m_freeList = a
    };
    G.prototype.InsertLeaf = function(a) {++this.m_insertionCount;
        if (null == this.m_root) this.m_root = a,
        this.m_root.parent = null;
        else {
            var c = a.aabb.GetCenter(),
            d = this.m_root;
            if (0 == d.IsLeaf()) {
                do
                var p = d.child1,
                d = d.child2,
                e = Math.abs((p.aabb.lowerBound.x + p.aabb.upperBound.x) / 2 - c.x) + Math.abs((p.aabb.lowerBound.y + p.aabb.upperBound.y) / 2 - c.y),
                r = Math.abs((d.aabb.lowerBound.x + d.aabb.upperBound.x) / 2 - c.x) + Math.abs((d.aabb.lowerBound.y + d.aabb.upperBound.y) / 2 - c.y),
                d = e < r ? p: d;
                while (0 == d.IsLeaf())
            }
            c = d.parent;
            p = this.AllocateNode();
            p.parent = c;
            p.userData = null;
            p.aabb.Combine(a.aabb, d.aabb);
            if (c) {
                d.parent.child1 == d ? c.child1 = p: c.child2 = p;
                p.child1 = d;
                p.child2 = a;
                d.parent = p;
                a.parent = p;
                do {
                    if (c.aabb.Contains(p.aabb)) break;
                    c.aabb.Combine(c.child1.aabb, c.child2.aabb);
                    p = c;
                    c = c.parent
                } while ( c )
            } else p.child1 = d,
            p.child2 = a,
            d.parent = p,
            this.m_root = a.parent = p
        }
    };
    G.prototype.RemoveLeaf = function(a) {
        if (a == this.m_root) this.m_root = null;
        else {
            var c = a.parent,
            d = c.parent;
            a = c.child1 == a ? c.child2: c.child1;
            if (d) for (d.child1 == c ? d.child1 = a: d.child2 = a, a.parent = d, this.FreeNode(c); d;) {
                c = d.aabb;
                d.aabb = q.Combine(d.child1.aabb, d.child2.aabb);
                if (c.Contains(d.aabb)) break;
                d = d.parent
            } else this.m_root = a,
            a.parent = null,
            this.FreeNode(c)
        }
    };
    I.b2DynamicTreeBroadPhase = function() {
        this.m_tree = new G;
        this.m_moveBuffer = new Vector2;
        this.m_pairBuffer = new Vector2;
        this.m_pairCount = 0
    };
    I.prototype.CreateProxy = function(a, c) {
        var d = this.m_tree.CreateProxy(a, c); ++this.m_proxyCount;
        this.BufferMove(d);
        return d
    };
    I.prototype.DestroyProxy = function(a) {
        this.UnBufferMove(a); --this.m_proxyCount;
        this.m_tree.DestroyProxy(a)
    };
    I.prototype.MoveProxy = function(a, c, d) {
        this.m_tree.MoveProxy(a, c, d) && this.BufferMove(a)
    };
    I.prototype.TestOverlap = function(a, c) {
        var d = this.m_tree.GetFatAABB(a),
        p = this.m_tree.GetFatAABB(c);
        return d.TestOverlap(p)
    };
    I.prototype.GetUserData = function(a) {
        return this.m_tree.GetUserData(a)
    };
    I.prototype.GetFatAABB = function(a) {
        return this.m_tree.GetFatAABB(a)
    };
    I.prototype.GetProxyCount = function() {
        return this.m_proxyCount
    };
    I.prototype.UpdatePairs = function(a) {
        for (var c = this,
        d = c.m_pairCount = 0,
        p, d = 0; d < c.m_moveBuffer.length; ++d) {
            p = c.m_moveBuffer[d];
            var e = c.m_tree.GetFatAABB(p);
            c.m_tree.Query(function(a) {
                if (a == p) return ! 0;
                c.m_pairCount == c.m_pairBuffer.length && (c.m_pairBuffer[c.m_pairCount] = new M);
                var d = c.m_pairBuffer[c.m_pairCount];
                d.proxyA = a < p ? a: p;
                d.proxyB = a >= p ? a: p; ++c.m_pairCount;
                return ! 0
            },
            e)
        }
        for (d = c.m_moveBuffer.length = 0; d < c.m_pairCount;) {
            var e = c.m_pairBuffer[d],
            r = c.m_tree.GetUserData(e.proxyA),
            m = c.m_tree.GetUserData(e.proxyB);
            a(r, m);
            for (++d; d < c.m_pairCount;) {
                r = c.m_pairBuffer[d];
                if (r.proxyA != e.proxyA || r.proxyB != e.proxyB) break; ++d
            }
        }
    };
    I.prototype.Query = function(a, c) {
        this.m_tree.Query(a, c)
    };
    I.prototype.RayCast = function(a, c) {
        this.m_tree.RayCast(a, c)
    };
    I.prototype.Validate = function() {};
    I.prototype.Rebalance = function(a) {
        void 0 === a && (a = 0);
        this.m_tree.Rebalance(a)
    };
    I.prototype.BufferMove = function(a) {
        this.m_moveBuffer[this.m_moveBuffer.length] = a
    };
    I.prototype.UnBufferMove = function(a) {
        a = parseInt(this.m_moveBuffer.indexOf(a));
        this.m_moveBuffer.splice(a, 1)
    };
    I.prototype.ComparePairs = function(a, c) {
        return 0
    };
    I.__implements = {};
    I.__implements[A] = !0;
    J.b2DynamicTreeNode = function() {
        this.aabb = new q
    };
    J.prototype.IsLeaf = function() {
        return null == this.child1
    };
    M.b2DynamicTreePair = function() {};
    D.b2Manifold = function() {
        this.m_pointCount = 0
    };
    D.prototype.b2Manifold = function() {
        this.m_points = new Vector2(e.b2_maxManifoldPoints);
        for (var a = 0; a < e.b2_maxManifoldPoints; a++) this.m_points[a] = new P;
        this.m_localPlaneNormal = new h;
        this.m_localPoint = new h
    };
    D.prototype.Reset = function() {
        for (var a = 0; a < e.b2_maxManifoldPoints; a++)(this.m_points[a] instanceof P ? this.m_points[a] : null).Reset();
        this.m_localPlaneNormal.SetZero();
        this.m_localPoint.SetZero();
        this.m_pointCount = this.m_type = 0
    };
    D.prototype.Set = function(a) {
        this.m_pointCount = a.m_pointCount;
        for (var c = 0; c < e.b2_maxManifoldPoints; c++)(this.m_points[c] instanceof P ? this.m_points[c] : null).Set(a.m_points[c]);
        this.m_localPlaneNormal.SetV(a.m_localPlaneNormal);
        this.m_localPoint.SetV(a.m_localPoint);
        this.m_type = a.m_type
    };
    D.prototype.Copy = function() {
        var a = new D;
        a.Set(this);
        return a
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Manifold.e_circles = 1;
        Box2D.Collision.b2Manifold.e_faceA = 2;
        Box2D.Collision.b2Manifold.e_faceB = 4
    });
    P.b2ManifoldPoint = function() {
        this.m_localPoint = new h;
        this.m_id = new y
    };
    P.prototype.b2ManifoldPoint = function() {
        this.Reset()
    };
    P.prototype.Reset = function() {
        this.m_localPoint.SetZero();
        this.m_tangentImpulse = this.m_normalImpulse = 0;
        this.m_id.key = 0
    };
    P.prototype.Set = function(a) {
        this.m_localPoint.SetV(a.m_localPoint);
        this.m_normalImpulse = a.m_normalImpulse;
        this.m_tangentImpulse = a.m_tangentImpulse;
        this.m_id.Set(a.m_id)
    };
    H.b2Point = function() {
        this.p = new h
    };
    H.prototype.Support = function(a, c, d) {
        return this.p
    };
    H.prototype.GetFirstVertex = function(a) {
        return this.p
    };
    L.b2RayCastInput = function() {
        this.p1 = new h;
        this.p2 = new h
    };
    L.prototype.b2RayCastInput = function(a, c, d) {
        void 0 === a && (a = null);
        void 0 === c && (c = null);
        void 0 === d && (d = 1);
        a && this.p1.SetV(a);
        c && this.p2.SetV(c);
        this.maxFraction = d
    };
    Q.b2RayCastOutput = function() {
        this.normal = new h
    };
    N.b2Segment = function() {
        this.p1 = new h;
        this.p2 = new h
    };
    N.prototype.TestSegment = function(a, c, d, p) {
        void 0 === p && (p = 0);
        var e = d.p1,
        r = d.p2.x - e.x,
        m = d.p2.y - e.y;
        d = this.p2.y - this.p1.y;
        var k = -(this.p2.x - this.p1.x),
        f = 100 * Number.MIN_VALUE,
        u = -(r * d + m * k);
        if (u > f) {
            var A = e.x - this.p1.x,
            g = e.y - this.p1.y,
            e = A * d + g * k;
            if (0 <= e && e <= p * u && (p = -r * g + m * A, -f * u <= p && p <= u * (1 + f))) return e /= u,
            p = Math.sqrt(d * d + k * k),
            a[0] = e,
            c.Set(d / p, k / p),
            !0
        }
        return ! 1
    };
    N.prototype.Extend = function(a) {
        this.ExtendForward(a);
        this.ExtendBackward(a)
    };
    N.prototype.ExtendForward = function(a) {
        var c = this.p2.x - this.p1.x,
        d = this.p2.y - this.p1.y;
        a = Math.min(0 < c ? (a.upperBound.x - this.p1.x) / c: 0 > c ? (a.lowerBound.x - this.p1.x) / c: Number.POSITIVE_INFINITY, 0 < d ? (a.upperBound.y - this.p1.y) / d: 0 > d ? (a.lowerBound.y - this.p1.y) / d: Number.POSITIVE_INFINITY);
        this.p2.x = this.p1.x + c * a;
        this.p2.y = this.p1.y + d * a
    };
    N.prototype.ExtendBackward = function(a) {
        var c = -this.p2.x + this.p1.x,
        d = -this.p2.y + this.p1.y;
        a = Math.min(0 < c ? (a.upperBound.x - this.p2.x) / c: 0 > c ? (a.lowerBound.x - this.p2.x) / c: Number.POSITIVE_INFINITY, 0 < d ? (a.upperBound.y - this.p2.y) / d: 0 > d ? (a.lowerBound.y - this.p2.y) / d: Number.POSITIVE_INFINITY);
        this.p1.x = this.p2.x + c * a;
        this.p1.y = this.p2.y + d * a
    };
    m.b2SeparationFunction = function() {
        this.m_localPoint = new h;
        this.m_axis = new h
    };
    m.prototype.Initialize = function(a, c, d, p, r) {
        this.m_proxyA = c;
        this.m_proxyB = p;
        var k = parseInt(a.count);
        e.b2Assert(0 < k && 3 > k);
        var u, A, g, x, n = x = g = p = c = 0,
        C = 0,
        n = 0;
        1 == k ? (this.m_type = m.e_points, u = this.m_proxyA.GetVertex(a.indexA[0]), A = this.m_proxyB.GetVertex(a.indexB[0]), k = u, a = d.R, c = d.position.x + (a.col1.x * k.x + a.col2.x * k.y), p = d.position.y + (a.col1.y * k.x + a.col2.y * k.y), k = A, a = r.R, g = r.position.x + (a.col1.x * k.x + a.col2.x * k.y), x = r.position.y + (a.col1.y * k.x + a.col2.y * k.y), this.m_axis.x = g - c, this.m_axis.y = x - p, this.m_axis.Normalize()) : (a.indexB[0] == a.indexB[1] ? (this.m_type = m.e_faceA, c = this.m_proxyA.GetVertex(a.indexA[0]), p = this.m_proxyA.GetVertex(a.indexA[1]), A = this.m_proxyB.GetVertex(a.indexB[0]), this.m_localPoint.x = .5 * (c.x + p.x), this.m_localPoint.y = .5 * (c.y + p.y), this.m_axis = f.CrossVF(f.SubtractVV(p, c), 1), this.m_axis.Normalize(), k = this.m_axis, a = d.R, n = a.col1.x * k.x + a.col2.x * k.y, C = a.col1.y * k.x + a.col2.y * k.y, k = this.m_localPoint, a = d.R, c = d.position.x + (a.col1.x * k.x + a.col2.x * k.y), p = d.position.y + (a.col1.y * k.x + a.col2.y * k.y), k = A, a = r.R, g = r.position.x + (a.col1.x * k.x + a.col2.x * k.y), x = r.position.y + (a.col1.y * k.x + a.col2.y * k.y), n = (g - c) * n + (x - p) * C) : a.indexA[0] == a.indexA[0] ? (this.m_type = m.e_faceB, g = this.m_proxyB.GetVertex(a.indexB[0]), x = this.m_proxyB.GetVertex(a.indexB[1]), u = this.m_proxyA.GetVertex(a.indexA[0]), this.m_localPoint.x = .5 * (g.x + x.x), this.m_localPoint.y = .5 * (g.y + x.y), this.m_axis = f.CrossVF(f.SubtractVV(x, g), 1), this.m_axis.Normalize(), k = this.m_axis, a = r.R, n = a.col1.x * k.x + a.col2.x * k.y, C = a.col1.y * k.x + a.col2.y * k.y, k = this.m_localPoint, a = r.R, g = r.position.x + (a.col1.x * k.x + a.col2.x * k.y), x = r.position.y + (a.col1.y * k.x + a.col2.y * k.y), k = u, a = d.R, c = d.position.x + (a.col1.x * k.x + a.col2.x * k.y), p = d.position.y + (a.col1.y * k.x + a.col2.y * k.y), n = (c - g) * n + (p - x) * C) : (c = this.m_proxyA.GetVertex(a.indexA[0]), p = this.m_proxyA.GetVertex(a.indexA[1]), g = this.m_proxyB.GetVertex(a.indexB[0]), x = this.m_proxyB.GetVertex(a.indexB[1]), f.MulX(d, u), u = f.MulMV(d.R, f.SubtractVV(p, c)), f.MulX(r, A), n = f.MulMV(r.R, f.SubtractVV(x, g)), r = u.x * u.x + u.y * u.y, A = n.x * n.x + n.y * n.y, a = f.SubtractVV(n, u), d = u.x * a.x + u.y * a.y, a = n.x * a.x + n.y * a.y, u = u.x * n.x + u.y * n.y, C = r * A - u * u, n = 0, 0 != C && (n = f.Clamp((u * a - d * A) / C, 0, 1)), 0 > (u * n + a) / A && (n = f.Clamp((u - d) / r, 0, 1)), u = new h, u.x = c.x + n * (p.x - c.x), u.y = c.y + n * (p.y - c.y), A = new h, A.x = g.x + n * (x.x - g.x), A.y = g.y + n * (x.y - g.y), 0 == n || 1 == n ? (this.m_type = m.e_faceB, this.m_axis = f.CrossVF(f.SubtractVV(x, g), 1), this.m_axis.Normalize(), this.m_localPoint = A) : (this.m_type = m.e_faceA, this.m_axis = f.CrossVF(f.SubtractVV(p, c), 1), this.m_localPoint = u)), 0 > n && this.m_axis.NegativeSelf())
    };
    m.prototype.Evaluate = function(a, c) {
        var d, p, r = 0;
        switch (this.m_type) {
        case m.e_points:
            return d = f.MulTMV(a.R, this.m_axis),
            p = f.MulTMV(c.R, this.m_axis.GetNegative()),
            d = this.m_proxyA.GetSupportVertex(d),
            p = this.m_proxyB.GetSupportVertex(p),
            d = f.MulX(a, d),
            p = f.MulX(c, p),
            r = (p.x - d.x) * this.m_axis.x + (p.y - d.y) * this.m_axis.y;
        case m.e_faceA:
            return r = f.MulMV(a.R, this.m_axis),
            d = f.MulX(a, this.m_localPoint),
            p = f.MulTMV(c.R, r.GetNegative()),
            p = this.m_proxyB.GetSupportVertex(p),
            p = f.MulX(c, p),
            r = (p.x - d.x) * r.x + (p.y - d.y) * r.y;
        case m.e_faceB:
            return r = f.MulMV(c.R, this.m_axis),
            p = f.MulX(c, this.m_localPoint),
            d = f.MulTMV(a.R, r.GetNegative()),
            d = this.m_proxyA.GetSupportVertex(d),
            d = f.MulX(a, d),
            r = (d.x - p.x) * r.x + (d.y - p.y) * r.y;
        default:
            return e.b2Assert(!1),
            0
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2SeparationFunction.e_points = 1;
        Box2D.Collision.b2SeparationFunction.e_faceA = 2;
        Box2D.Collision.b2SeparationFunction.e_faceB = 4
    });
    k.b2Simplex = function() {
        this.m_v1 = new u;
        this.m_v2 = new u;
        this.m_v3 = new u;
        this.m_vertices = new Vector2(3)
    };
    k.prototype.b2Simplex = function() {
        this.m_vertices[0] = this.m_v1;
        this.m_vertices[1] = this.m_v2;
        this.m_vertices[2] = this.m_v3
    };
    k.prototype.ReadCache = function(a, c, d, p, r) {
        e.b2Assert(0 <= a.count && 3 >= a.count);
        var m, k;
        this.m_count = a.count;
        for (var u = this.m_vertices,
        A = 0; A < this.m_count; A++) {
            var g = u[A];
            g.indexA = a.indexA[A];
            g.indexB = a.indexB[A];
            m = c.GetVertex(g.indexA);
            k = p.GetVertex(g.indexB);
            g.wA = f.MulX(d, m);
            g.wB = f.MulX(r, k);
            g.w = f.SubtractVV(g.wB, g.wA);
            g.a = 0
        }
        1 < this.m_count && (a = a.metric, m = this.GetMetric(), m < .5 * a || 2 * a < m || m < Number.MIN_VALUE) && (this.m_count = 0);
        0 == this.m_count && (g = u[0], g.indexA = 0, g.indexB = 0, m = c.GetVertex(0), k = p.GetVertex(0), g.wA = f.MulX(d, m), g.wB = f.MulX(r, k), g.w = f.SubtractVV(g.wB, g.wA), this.m_count = 1)
    };
    k.prototype.WriteCache = function(a) {
        a.metric = this.GetMetric();
        a.count = Box2D.parseUInt(this.m_count);
        for (var c = this.m_vertices,
        d = 0; d < this.m_count; d++) a.indexA[d] = Box2D.parseUInt(c[d].indexA),
        a.indexB[d] = Box2D.parseUInt(c[d].indexB)
    };
    k.prototype.GetSearchDirection = function() {
        switch (this.m_count) {
        case 1:
            return this.m_v1.w.GetNegative();
        case 2:
            var a = f.SubtractVV(this.m_v2.w, this.m_v1.w);
            return 0 < f.CrossVV(a, this.m_v1.w.GetNegative()) ? f.CrossFV(1, a) : f.CrossVF(a, 1);
        default:
            return e.b2Assert(!1),
            new h
        }
    };
    k.prototype.GetClosestPoint = function() {
        switch (this.m_count) {
        case 0:
            return e.b2Assert(!1),
            new h;
        case 1:
            return this.m_v1.w;
        case 2:
            return new h(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
        default:
            return e.b2Assert(!1),
            new h
        }
    };
    k.prototype.GetWitnessPoints = function(a, c) {
        switch (this.m_count) {
        case 0:
            e.b2Assert(!1);
            break;
        case 1:
            a.SetV(this.m_v1.wA);
            c.SetV(this.m_v1.wB);
            break;
        case 2:
            a.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
            a.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
            c.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
            c.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
            break;
        case 3:
            c.x = a.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
            c.y = a.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
            break;
        default:
            e.b2Assert(!1)
        }
    };
    k.prototype.GetMetric = function() {
        switch (this.m_count) {
        case 0:
            return e.b2Assert(!1),
            0;
        case 1:
            return 0;
        case 2:
            return f.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
        case 3:
            return f.CrossVV(f.SubtractVV(this.m_v2.w, this.m_v1.w), f.SubtractVV(this.m_v3.w, this.m_v1.w));
        default:
            return e.b2Assert(!1),
            0
        }
    };
    k.prototype.Solve2 = function() {
        var a = this.m_v1.w,
        c = this.m_v2.w,
        d = f.SubtractVV(c, a),
        a = -(a.x * d.x + a.y * d.y);
        0 >= a ? this.m_count = this.m_v1.a = 1 : (c = c.x * d.x + c.y * d.y, 0 >= c ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : (d = 1 / (c + a), this.m_v1.a = c * d, this.m_v2.a = a * d, this.m_count = 2))
    };
    k.prototype.Solve3 = function() {
        var a = this.m_v1.w,
        c = this.m_v2.w,
        d = this.m_v3.w,
        p = f.SubtractVV(c, a),
        e = f.Dot(a, p),
        r = f.Dot(c, p),
        e = -e,
        m = f.SubtractVV(d, a),
        k = f.Dot(a, m),
        u = f.Dot(d, m),
        k = -k,
        g = f.SubtractVV(d, c),
        A = f.Dot(c, g),
        g = f.Dot(d, g),
        A = -A,
        m = f.CrossVV(p, m),
        p = m * f.CrossVV(c, d),
        d = m * f.CrossVV(d, a),
        a = m * f.CrossVV(a, c);
        0 >= e && 0 >= k ? this.m_count = this.m_v1.a = 1 : 0 < r && 0 < e && 0 >= a ? (u = 1 / (r + e), this.m_v1.a = r * u, this.m_v2.a = e * u, this.m_count = 2) : 0 < u && 0 < k && 0 >= d ? (r = 1 / (u + k), this.m_v1.a = u * r, this.m_v3.a = k * r, this.m_count = 2, this.m_v2.Set(this.m_v3)) : 0 >= r && 0 >= A ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : 0 >= u && 0 >= g ? (this.m_count = this.m_v3.a = 1, this.m_v1.Set(this.m_v3)) : 0 < g && 0 < A && 0 >= p ? (r = 1 / (g + A), this.m_v2.a = g * r, this.m_v3.a = A * r, this.m_count = 2, this.m_v1.Set(this.m_v3)) : (r = 1 / (p + d + a), this.m_v1.a = p * r, this.m_v2.a = d * r, this.m_v3.a = a * r, this.m_count = 3)
    };
    x.b2SimplexCache = function() {
        this.indexA = new Vector_a2j_Number(3);
        this.indexB = new Vector_a2j_Number(3)
    };
    u.b2SimplexVertex = function() {};
    u.prototype.Set = function(a) {
        this.wA.SetV(a.wA);
        this.wB.SetV(a.wB);
        this.w.SetV(a.w);
        this.a = a.a;
        this.indexA = a.indexA;
        this.indexB = a.indexB
    };
    E.b2TimeOfImpact = function() {};
    E.TimeOfImpact = function(a) {++E.b2_toiCalls;
        var c = a.proxyA,
        d = a.proxyB,
        p = a.sweepA,
        r = a.sweepB;
        e.b2Assert(p.t0 == r.t0);
        e.b2Assert(1 - p.t0 > Number.MIN_VALUE);
        var m = c.m_radius + d.m_radius;
        a = a.tolerance;
        var k = 0,
        u = 0,
        g = 0;
        E.s_cache.count = 0;
        for (E.s_distanceInput.useRadii = !1;;) {
            p.GetTransform(E.s_xfA, k);
            r.GetTransform(E.s_xfB, k);
            E.s_distanceInput.proxyA = c;
            E.s_distanceInput.proxyB = d;
            E.s_distanceInput.transformA = E.s_xfA;
            E.s_distanceInput.transformB = E.s_xfB;
            B.Distance(E.s_distanceOutput, E.s_cache, E.s_distanceInput);
            if (0 >= E.s_distanceOutput.distance) {
                k = 1;
                break
            }
            E.s_fcn.Initialize(E.s_cache, c, E.s_xfA, d, E.s_xfB);
            var A = E.s_fcn.Evaluate(E.s_xfA, E.s_xfB);
            if (0 >= A) {
                k = 1;
                break
            }
            0 == u && (g = A > m ? f.Max(m - a, .75 * m) : f.Max(A - a, .02 * m));
            if (A - g < .5 * a) {
                if (0 == u) {
                    k = 1;
                    break
                }
                break
            }
            var x = k,
            h = k,
            n = 1;
            p.GetTransform(E.s_xfA, n);
            r.GetTransform(E.s_xfB, n);
            var C = E.s_fcn.Evaluate(E.s_xfA, E.s_xfB);
            if (C >= g) {
                k = 1;
                break
            }
            for (var O = 0;;) {
                var q = 0,
                q = O & 1 ? h + (g - A) * (n - h) / (C - A) : .5 * (h + n);
                p.GetTransform(E.s_xfA, q);
                r.GetTransform(E.s_xfB, q);
                var G = E.s_fcn.Evaluate(E.s_xfA, E.s_xfB);
                if (f.Abs(G - g) < .025 * a) {
                    x = q;
                    break
                }
                G > g ? (h = q, A = G) : (n = q, C = G); ++O; ++E.b2_toiRootIters;
                if (50 == O) break
            }
            E.b2_toiMaxRootIters = f.Max(E.b2_toiMaxRootIters, O);
            if (x < (1 + 100 * Number.MIN_VALUE) * k) break;
            k = x;
            u++; ++E.b2_toiIters;
            if (1E3 == u) break
        }
        E.b2_toiMaxIters = f.Max(E.b2_toiMaxIters, u);
        return k
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.s_cache = new x;
        Box2D.Collision.b2TimeOfImpact.s_distanceInput = new K;
        Box2D.Collision.b2TimeOfImpact.s_xfA = new l;
        Box2D.Collision.b2TimeOfImpact.s_xfB = new l;
        Box2D.Collision.b2TimeOfImpact.s_fcn = new m;
        Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new n
    });
    O.b2TOIInput = function() {
        this.proxyA = new F;
        this.proxyB = new F;
        this.sweepA = new g;
        this.sweepB = new g
    };
    C.b2WorldManifold = function() {
        this.m_normal = new h
    };
    C.prototype.b2WorldManifold = function() {
        this.m_points = new Vector2(e.b2_maxManifoldPoints);
        for (var a = 0; a < e.b2_maxManifoldPoints; a++) this.m_points[a] = new h
    };
    C.prototype.Initialize = function(a, c, d, p, e) {
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        if (0 != a.m_pointCount) {
            var r = 0,
            m, k, u = 0,
            f = 0,
            g = 0,
            A = 0,
            x = 0;
            m = 0;
            switch (a.m_type) {
            case D.e_circles:
                k = c.R;
                m = a.m_localPoint;
                r = c.position.x + k.col1.x * m.x + k.col2.x * m.y;
                c = c.position.y + k.col1.y * m.x + k.col2.y * m.y;
                k = p.R;
                m = a.m_points[0].m_localPoint;
                a = p.position.x + k.col1.x * m.x + k.col2.x * m.y;
                p = p.position.y + k.col1.y * m.x + k.col2.y * m.y;
                m = a - r;
                k = p - c;
                u = m * m + k * k;
                u > Number.MIN_VALUE * Number.MIN_VALUE ? (u = Math.sqrt(u), this.m_normal.x = m / u, this.m_normal.y = k / u) : (this.m_normal.x = 1, this.m_normal.y = 0);
                m = c + d * this.m_normal.y;
                p -= e * this.m_normal.y;
                this.m_points[0].x = .5 * (r + d * this.m_normal.x + (a - e * this.m_normal.x));
                this.m_points[0].y = .5 * (m + p);
                break;
            case D.e_faceA:
                k = c.R;
                m = a.m_localPlaneNormal;
                u = k.col1.x * m.x + k.col2.x * m.y;
                f = k.col1.y * m.x + k.col2.y * m.y;
                k = c.R;
                m = a.m_localPoint;
                g = c.position.x + k.col1.x * m.x + k.col2.x * m.y;
                A = c.position.y + k.col1.y * m.x + k.col2.y * m.y;
                this.m_normal.x = u;
                this.m_normal.y = f;
                for (r = 0; r < a.m_pointCount; r++) k = p.R,
                m = a.m_points[r].m_localPoint,
                x = p.position.x + k.col1.x * m.x + k.col2.x * m.y,
                m = p.position.y + k.col1.y * m.x + k.col2.y * m.y,
                this.m_points[r].x = x + .5 * (d - (x - g) * u - (m - A) * f - e) * u,
                this.m_points[r].y = m + .5 * (d - (x - g) * u - (m - A) * f - e) * f;
                break;
            case D.e_faceB:
                for (k = p.R, m = a.m_localPlaneNormal, u = k.col1.x * m.x + k.col2.x * m.y, f = k.col1.y * m.x + k.col2.y * m.y, k = p.R, m = a.m_localPoint, g = p.position.x + k.col1.x * m.x + k.col2.x * m.y, A = p.position.y + k.col1.y * m.x + k.col2.y * m.y, this.m_normal.x = -u, this.m_normal.y = -f, r = 0; r < a.m_pointCount; r++) k = c.R,
                m = a.m_points[r].m_localPoint,
                x = c.position.x + k.col1.x * m.x + k.col2.x * m.y,
                m = c.position.y + k.col1.y * m.x + k.col2.y * m.y,
                this.m_points[r].x = x + .5 * (e - (x - g) * u - (m - A) * f - d) * u,
                this.m_points[r].y = m + .5 * (e - (x - g) * u - (m - A) * f - d) * f
            }
        }
    };
    p.ClipVertex = function() {
        this.v = new h;
        this.id = new y
    };
    p.prototype.Set = function(a) {
        this.v.SetV(a.v);
        this.id.Set(a.id)
    };
    r.Features = function() {};
    Object.defineProperty(r.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._referenceEdge
        }
    });
    Object.defineProperty(r.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._referenceEdge = a;
            this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255
        }
    });
    Object.defineProperty(r.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._incidentEdge
        }
    });
    Object.defineProperty(r.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._incidentEdge = a;
            this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280
        }
    });
    Object.defineProperty(r.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._incidentVertex
        }
    });
    Object.defineProperty(r.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._incidentVertex = a;
            this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex << 16 & 16711680
        }
    });
    Object.defineProperty(r.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._flip
        }
    });
    Object.defineProperty(r.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._flip = a;
            this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080
        }
    })
})(); (function() {
    var a = Box2D.Common.b2Settings,
    c = Box2D.Collision.Shapes.b2CircleShape,
    d = Box2D.Collision.Shapes.b2EdgeChainDef,
    e = Box2D.Collision.Shapes.b2EdgeShape,
    f = Box2D.Collision.Shapes.b2MassData,
    g = Box2D.Collision.Shapes.b2PolygonShape,
    l = Box2D.Collision.Shapes.b2Shape,
    h = Box2D.Common.Math.b2Mat22,
    q = Box2D.Common.Math.b2Math,
    z = Box2D.Common.Math.b2Transform,
    v = Box2D.Common.Math.b2Vec2,
    t = Box2D.Collision.b2Distance,
    y = Box2D.Collision.b2DistanceInput,
    w = Box2D.Collision.b2DistanceOutput,
    B = Box2D.Collision.b2DistanceProxy,
    K = Box2D.Collision.b2SimplexCache;
    Box2D.inherit(c, Box2D.Collision.Shapes.b2Shape);
    c.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    c.b2CircleShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.m_p = new v
    };
    c.prototype.Copy = function() {
        var a = new c;
        a.Set(this);
        return a
    };
    c.prototype.Set = function(a) {
        this.__super.Set.call(this, a);
        Box2D.is(a, c) && this.m_p.SetV((a instanceof c ? a: null).m_p)
    };
    c.prototype.TestPoint = function(a, c) {
        var d = a.R,
        e = a.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
        d = a.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y),
        e = c.x - e,
        d = c.y - d;
        return e * e + d * d <= this.m_radius * this.m_radius
    };
    c.prototype.RayCast = function(a, c, d) {
        var e = d.R,
        f = c.p1.x - (d.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y));
        d = c.p1.y - (d.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y));
        var e = c.p2.x - c.p1.x,
        g = c.p2.y - c.p1.y,
        h = f * e + d * g,
        q = e * e + g * g,
        l = h * h - q * (f * f + d * d - this.m_radius * this.m_radius);
        if (0 > l || q < Number.MIN_VALUE) return ! 1;
        h = -(h + Math.sqrt(l));
        return 0 <= h && h <= c.maxFraction * q ? (h /= q, a.fraction = h, a.normal.x = f + h * e, a.normal.y = d + h * g, a.normal.Normalize(), !0) : !1
    };
    c.prototype.ComputeAABB = function(a, c) {
        var d = c.R,
        e = c.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
        d = c.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y);
        a.lowerBound.Set(e - this.m_radius, d - this.m_radius);
        a.upperBound.Set(e + this.m_radius, d + this.m_radius)
    };
    c.prototype.ComputeMass = function(c, d) {
        void 0 === d && (d = 0);
        c.mass = d * a.b2_pi * this.m_radius * this.m_radius;
        c.center.SetV(this.m_p);
        c.I = c.mass * (.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
    };
    c.prototype.ComputeSubmergedArea = function(a, c, d, e) {
        void 0 === c && (c = 0);
        d = q.MulX(d, this.m_p);
        var f = -(q.Dot(a, d) - c);
        if (f < -this.m_radius + Number.MIN_VALUE) return 0;
        if (f > this.m_radius) return e.SetV(d),
        Math.PI * this.m_radius * this.m_radius;
        c = this.m_radius * this.m_radius;
        var g = f * f,
        f = c * (Math.asin(f / this.m_radius) + Math.PI / 2) + f * Math.sqrt(c - g);
        c = -2 / 3 * Math.pow(c - g, 1.5) / f;
        e.x = d.x + a.x * c;
        e.y = d.y + a.y * c;
        return f
    };
    c.prototype.GetLocalPosition = function() {
        return this.m_p
    };
    c.prototype.SetLocalPosition = function(a) {
        this.m_p.SetV(a)
    };
    c.prototype.GetRadius = function() {
        return this.m_radius
    };
    c.prototype.SetRadius = function(a) {
        void 0 === a && (a = 0);
        this.m_radius = a
    };
    c.prototype.b2CircleShape = function(a) {
        void 0 === a && (a = 0);
        this.__super.b2Shape.call(this);
        this.m_type = l.e_circleShape;
        this.m_radius = a
    };
    d.b2EdgeChainDef = function() {};
    d.prototype.b2EdgeChainDef = function() {
        this.vertexCount = 0;
        this.isALoop = !0;
        this.vertices = []
    };
    Box2D.inherit(e, Box2D.Collision.Shapes.b2Shape);
    e.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    e.b2EdgeShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.s_supportVec = new v;
        this.m_v1 = new v;
        this.m_v2 = new v;
        this.m_coreV1 = new v;
        this.m_coreV2 = new v;
        this.m_normal = new v;
        this.m_direction = new v;
        this.m_cornerDir1 = new v;
        this.m_cornerDir2 = new v
    };
    e.prototype.TestPoint = function(a, c) {
        return ! 1
    };
    e.prototype.RayCast = function(a, c, d) {
        var e, f = c.p2.x - c.p1.x,
        g = c.p2.y - c.p1.y;
        e = d.R;
        var h = d.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
        q = d.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
        l = d.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) - q;
        d = -(d.position.x + (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) - h);
        e = 100 * Number.MIN_VALUE;
        var t = -(f * l + g * d);
        if (t > e) {
            var h = c.p1.x - h,
            w = c.p1.y - q,
            q = h * l + w * d;
            if (0 <= q && q <= c.maxFraction * t && (c = -f * w + g * h, -e * t <= c && c <= t * (1 + e))) return a.fraction = q / t,
            c = Math.sqrt(l * l + d * d),
            a.normal.x = l / c,
            a.normal.y = d / c,
            !0
        }
        return ! 1
    };
    e.prototype.ComputeAABB = function(a, c) {
        var d = c.R,
        e = c.position.x + (d.col1.x * this.m_v1.x + d.col2.x * this.m_v1.y),
        f = c.position.y + (d.col1.y * this.m_v1.x + d.col2.y * this.m_v1.y),
        g = c.position.x + (d.col1.x * this.m_v2.x + d.col2.x * this.m_v2.y),
        d = c.position.y + (d.col1.y * this.m_v2.x + d.col2.y * this.m_v2.y);
        e < g ? (a.lowerBound.x = e, a.upperBound.x = g) : (a.lowerBound.x = g, a.upperBound.x = e);
        f < d ? (a.lowerBound.y = f, a.upperBound.y = d) : (a.lowerBound.y = d, a.upperBound.y = f)
    };
    e.prototype.ComputeMass = function(a, c) {
        a.mass = 0;
        a.center.SetV(this.m_v1);
        a.I = 0
    };
    e.prototype.ComputeSubmergedArea = function(a, c, d, e) {
        void 0 === c && (c = 0);
        var f = new v(a.x * c, a.y * c),
        g = q.MulX(d, this.m_v1);
        d = q.MulX(d, this.m_v2);
        var h = q.Dot(a, g) - c;
        a = q.Dot(a, d) - c;
        if (0 < h) {
            if (0 < a) return 0;
            g.x = -a / (h - a) * g.x + h / (h - a) * d.x;
            g.y = -a / (h - a) * g.y + h / (h - a) * d.y
        } else 0 < a && (d.x = -a / (h - a) * g.x + h / (h - a) * d.x, d.y = -a / (h - a) * g.y + h / (h - a) * d.y);
        e.x = (f.x + g.x + d.x) / 3;
        e.y = (f.y + g.y + d.y) / 3;
        return.5 * ((g.x - f.x) * (d.y - f.y) - (g.y - f.y) * (d.x - f.x))
    };
    e.prototype.GetLength = function() {
        return this.m_length
    };
    e.prototype.GetVertex1 = function() {
        return this.m_v1
    };
    e.prototype.GetVertex2 = function() {
        return this.m_v2
    };
    e.prototype.GetCoreVertex1 = function() {
        return this.m_coreV1
    };
    e.prototype.GetCoreVertex2 = function() {
        return this.m_coreV2
    };
    e.prototype.GetNormalVector = function() {
        return this.m_normal
    };
    e.prototype.GetDirectionVector = function() {
        return this.m_direction
    };
    e.prototype.GetCorner1Vector = function() {
        return this.m_cornerDir1
    };
    e.prototype.GetCorner2Vector = function() {
        return this.m_cornerDir2
    };
    e.prototype.Corner1IsConvex = function() {
        return this.m_cornerConvex1
    };
    e.prototype.Corner2IsConvex = function() {
        return this.m_cornerConvex2
    };
    e.prototype.GetFirstVertex = function(a) {
        var c = a.R;
        return new v(a.position.x + (c.col1.x * this.m_coreV1.x + c.col2.x * this.m_coreV1.y), a.position.y + (c.col1.y * this.m_coreV1.x + c.col2.y * this.m_coreV1.y))
    };
    e.prototype.GetNextEdge = function() {
        return this.m_nextEdge
    };
    e.prototype.GetPrevEdge = function() {
        return this.m_prevEdge
    };
    e.prototype.Support = function(a, c, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var e = a.R,
        f = a.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
        g = a.position.y + (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y),
        h = a.position.x + (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y);
        a = a.position.y + (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
        f * c + g * d > h * c + a * d ? (this.s_supportVec.x = f, this.s_supportVec.y = g) : (this.s_supportVec.x = h, this.s_supportVec.y = a);
        return this.s_supportVec
    };
    e.prototype.b2EdgeShape = function(c, d) {
        this.__super.b2Shape.call(this);
        this.m_type = l.e_edgeShape;
        this.m_nextEdge = this.m_prevEdge = null;
        this.m_v1 = c;
        this.m_v2 = d;
        this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
        this.m_length = this.m_direction.Normalize();
        this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
        this.m_coreV1.Set( - a.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -a.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
        this.m_coreV2.Set( - a.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -a.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
        this.m_cornerDir1 = this.m_normal;
        this.m_cornerDir2.Set( - this.m_normal.x, -this.m_normal.y)
    };
    e.prototype.SetPrevEdge = function(a, c, d, e) {
        this.m_prevEdge = a;
        this.m_coreV1 = c;
        this.m_cornerDir1 = d;
        this.m_cornerConvex1 = e
    };
    e.prototype.SetNextEdge = function(a, c, d, e) {
        this.m_nextEdge = a;
        this.m_coreV2 = c;
        this.m_cornerDir2 = d;
        this.m_cornerConvex2 = e
    };
    f.b2MassData = function() {
        this.mass = 0;
        this.center = new v(0, 0);
        this.I = 0
    };
    Box2D.inherit(g, Box2D.Collision.Shapes.b2Shape);
    g.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    g.b2PolygonShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments)
    };
    g.prototype.Copy = function() {
        var a = new g;
        a.Set(this);
        return a
    };
    g.prototype.Set = function(a) {
        this.__super.Set.call(this, a);
        if (Box2D.is(a, g)) {
            a = a instanceof g ? a: null;
            this.m_centroid.SetV(a.m_centroid);
            this.m_vertexCount = a.m_vertexCount;
            this.Reserve(this.m_vertexCount);
            for (var c = 0; c < this.m_vertexCount; c++) this.m_vertices[c].SetV(a.m_vertices[c]),
            this.m_normals[c].SetV(a.m_normals[c])
        }
    };
    g.prototype.SetAsArray = function(a, c) {
        void 0 === c && (c = 0);
        for (var d = new Vector2,
        e = 0,
        f, e = 0; e < a.length; ++e) f = a[e],
        d.push(f);
        this.SetAsVector(d, c)
    };
    g.AsArray = function(a, c) {
        void 0 === c && (c = 0);
        var d = new g;
        d.SetAsArray(a, c);
        return d
    };
    g.prototype.SetAsVector = function(c, d) {
        void 0 === d && (d = 0);
        0 == d && (d = c.length);
        a.b2Assert(2 <= d);
        this.m_vertexCount = d;
        this.Reserve(d);
        for (var e = 0,
        e = 0; e < this.m_vertexCount; e++) this.m_vertices[e].SetV(c[e]);
        for (e = 0; e < this.m_vertexCount; ++e) {
            var f = parseInt(e),
            h = parseInt(e + 1 < this.m_vertexCount ? e + 1 : 0),
            f = q.SubtractVV(this.m_vertices[h], this.m_vertices[f]);
            a.b2Assert(f.LengthSquared() > Number.MIN_VALUE);
            this.m_normals[e].SetV(q.CrossVF(f, 1));
            this.m_normals[e].Normalize()
        }
        this.m_centroid = g.ComputeCentroid(this.m_vertices, this.m_vertexCount)
    };
    g.AsVector = function(a, c) {
        void 0 === c && (c = 0);
        var d = new g;
        d.SetAsVector(a, c);
        return d
    };
    g.prototype.SetAsBox = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set( - a, -c);
        this.m_vertices[1].Set(a, -c);
        this.m_vertices[2].Set(a, c);
        this.m_vertices[3].Set( - a, c);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set( - 1, 0);
        this.m_centroid.SetZero()
    };
    g.AsBox = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        var d = new g;
        d.SetAsBox(a, c);
        return d
    };
    g.prototype.SetAsOrientedBox = function(a, c, d, e) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = null);
        void 0 === e && (e = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set( - a, -c);
        this.m_vertices[1].Set(a, -c);
        this.m_vertices[2].Set(a, c);
        this.m_vertices[3].Set( - a, c);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set( - 1, 0);
        this.m_centroid = d;
        a = new z;
        a.position = d;
        a.R.Set(e);
        for (d = 0; d < this.m_vertexCount; ++d) this.m_vertices[d] = q.MulX(a, this.m_vertices[d]),
        this.m_normals[d] = q.MulMV(a.R, this.m_normals[d])
    };
    g.AsOrientedBox = function(a, c, d, e) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = null);
        void 0 === e && (e = 0);
        var f = new g;
        f.SetAsOrientedBox(a, c, d, e);
        return f
    };
    g.prototype.SetAsEdge = function(a, c) {
        this.m_vertexCount = 2;
        this.Reserve(2);
        this.m_vertices[0].SetV(a);
        this.m_vertices[1].SetV(c);
        this.m_centroid.x = .5 * (a.x + c.x);
        this.m_centroid.y = .5 * (a.y + c.y);
        this.m_normals[0] = q.CrossVF(q.SubtractVV(c, a), 1);
        this.m_normals[0].Normalize();
        this.m_normals[1].x = -this.m_normals[0].x;
        this.m_normals[1].y = -this.m_normals[0].y
    };
    g.AsEdge = function(a, c) {
        var d = new g;
        d.SetAsEdge(a, c);
        return d
    };
    g.prototype.TestPoint = function(a, c) {
        var d;
        d = a.R;
        for (var e = c.x - a.position.x,
        f = c.y - a.position.y,
        g = e * d.col1.x + f * d.col1.y,
        h = e * d.col2.x + f * d.col2.y,
        q = 0; q < this.m_vertexCount; ++q) if (d = this.m_vertices[q], e = g - d.x, f = h - d.y, d = this.m_normals[q], 0 < d.x * e + d.y * f) return ! 1;
        return ! 0
    };
    g.prototype.RayCast = function(a, c, d) {
        var e = 0,
        f = c.maxFraction,
        g = 0,
        h = 0,
        q, l, g = c.p1.x - d.position.x,
        h = c.p1.y - d.position.y;
        q = d.R;
        var t = g * q.col1.x + h * q.col1.y,
        w = g * q.col2.x + h * q.col2.y,
        g = c.p2.x - d.position.x,
        h = c.p2.y - d.position.y;
        q = d.R;
        c = g * q.col1.x + h * q.col1.y - t;
        q = g * q.col2.x + h * q.col2.y - w;
        for (var y = -1,
        m = 0; m < this.m_vertexCount; ++m) {
            l = this.m_vertices[m];
            g = l.x - t;
            h = l.y - w;
            l = this.m_normals[m];
            g = l.x * g + l.y * h;
            h = l.x * c + l.y * q;
            if (0 == h) {
                if (0 > g) return ! 1
            } else 0 > h && g < e * h ? (e = g / h, y = m) : 0 < h && g < f * h && (f = g / h);
            if (f < e - Number.MIN_VALUE) return ! 1
        }
        return 0 <= y ? (a.fraction = e, q = d.R, l = this.m_normals[y], a.normal.x = q.col1.x * l.x + q.col2.x * l.y, a.normal.y = q.col1.y * l.x + q.col2.y * l.y, !0) : !1
    };
    g.prototype.ComputeAABB = function(a, c) {
        for (var d = c.R,
        e = this.m_vertices[0], f = c.position.x + (d.col1.x * e.x + d.col2.x * e.y), g = c.position.y + (d.col1.y * e.x + d.col2.y * e.y), h = f, q = g, l = 1; l < this.m_vertexCount; ++l) var e = this.m_vertices[l],
        t = c.position.x + (d.col1.x * e.x + d.col2.x * e.y),
        e = c.position.y + (d.col1.y * e.x + d.col2.y * e.y),
        f = f < t ? f: t,
        g = g < e ? g: e,
        h = h > t ? h: t,
        q = q > e ? q: e;
        a.lowerBound.x = f - this.m_radius;
        a.lowerBound.y = g - this.m_radius;
        a.upperBound.x = h + this.m_radius;
        a.upperBound.y = q + this.m_radius
    };
    g.prototype.ComputeMass = function(a, c) {
        void 0 === c && (c = 0);
        if (2 == this.m_vertexCount) a.center.x = .5 * (this.m_vertices[0].x + this.m_vertices[1].x),
        a.center.y = .5 * (this.m_vertices[0].y + this.m_vertices[1].y),
        a.mass = 0,
        a.I = 0;
        else {
            for (var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 1 / 3,
            q = 0; q < this.m_vertexCount; ++q) var l = this.m_vertices[q],
            t = q + 1 < this.m_vertexCount ? this.m_vertices[parseInt(q + 1)] : this.m_vertices[0],
            w = l.x - 0,
            y = l.y - 0,
            m = t.x - 0,
            k = t.y - 0,
            x = w * k - y * m,
            u = .5 * x,
            f = f + u,
            d = d + u * h * (0 + l.x + t.x),
            e = e + u * h * (0 + l.y + t.y),
            l = w,
            g = g + x * (h * (.25 * (l * l + m * l + m * m) + (0 * l + 0 * m)) + 0 + (h * (.25 * (y * y + k * y + k * k) + (0 * y + 0 * k)) + 0));
            a.mass = c * f;
            a.center.Set(1 / f * d, 1 / f * e);
            a.I = c * g
        }
    };
    g.prototype.ComputeSubmergedArea = function(a, c, d, e) {
        void 0 === c && (c = 0);
        var g = q.MulTMV(d.R, a),
        h = c - q.Dot(a, d.position),
        l = new Vector_a2j_Number,
        t = 0,
        w = -1;
        c = -1;
        var y = !1;
        for (a = a = 0; a < this.m_vertexCount; ++a) {
            l[a] = q.Dot(g, this.m_vertices[a]) - h;
            var z = l[a] < -Number.MIN_VALUE;
            0 < a && (z ? y || (w = a - 1, t++) : y && (c = a - 1, t++));
            y = z
        }
        switch (t) {
        case 0:
            return y ? (a = new f, this.ComputeMass(a, 1), e.SetV(q.MulX(d, a.center)), a.mass) : 0;
        case 1:
            -1 == w ? w = this.m_vertexCount - 1 : c = this.m_vertexCount - 1
        }
        a = parseInt((w + 1) % this.m_vertexCount);
        g = parseInt((c + 1) % this.m_vertexCount);
        h = (0 - l[w]) / (l[a] - l[w]);
        l = (0 - l[c]) / (l[g] - l[c]);
        w = new v(this.m_vertices[w].x * (1 - h) + this.m_vertices[a].x * h, this.m_vertices[w].y * (1 - h) + this.m_vertices[a].y * h);
        c = new v(this.m_vertices[c].x * (1 - l) + this.m_vertices[g].x * l, this.m_vertices[c].y * (1 - l) + this.m_vertices[g].y * l);
        l = 0;
        h = new v;
        for (t = this.m_vertices[a]; a != g;) a = (a + 1) % this.m_vertexCount,
        y = a == g ? c: this.m_vertices[a],
        z = .5 * ((t.x - w.x) * (y.y - w.y) - (t.y - w.y) * (y.x - w.x)),
        l += z,
        h.x += z * (w.x + t.x + y.x) / 3,
        h.y += z * (w.y + t.y + y.y) / 3,
        t = y;
        h.Multiply(1 / l);
        e.SetV(q.MulX(d, h));
        return l
    };
    g.prototype.GetVertexCount = function() {
        return this.m_vertexCount
    };
    g.prototype.GetVertices = function() {
        return this.m_vertices
    };
    g.prototype.GetNormals = function() {
        return this.m_normals
    };
    g.prototype.GetSupport = function(a) {
        for (var c = 0,
        d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1; e < this.m_vertexCount; ++e) {
            var f = this.m_vertices[e].x * a.x + this.m_vertices[e].y * a.y;
            f > d && (c = e, d = f)
        }
        return c
    };
    g.prototype.GetSupportVertex = function(a) {
        for (var c = 0,
        d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1; e < this.m_vertexCount; ++e) {
            var f = this.m_vertices[e].x * a.x + this.m_vertices[e].y * a.y;
            f > d && (c = e, d = f)
        }
        return this.m_vertices[c]
    };
    g.prototype.Validate = function() {
        return ! 1
    };
    g.prototype.b2PolygonShape = function() {
        this.__super.b2Shape.call(this);
        this.m_type = l.e_polygonShape;
        this.m_centroid = new v;
        this.m_vertices = new Vector2;
        this.m_normals = new Vector2
    };
    g.prototype.Reserve = function(a) {
        void 0 === a && (a = 0);
        for (var c = parseInt(this.m_vertices.length); c < a; c++) this.m_vertices[c] = new v,
        this.m_normals[c] = new v
    };
    g.ComputeCentroid = function(a, c) {
        void 0 === c && (c = 0);
        for (var d = new v,
        e = 0,
        f = 1 / 3,
        g = 0; g < c; ++g) {
            var h = a[g],
            q = g + 1 < c ? a[parseInt(g + 1)] : a[0],
            l = .5 * ((h.x - 0) * (q.y - 0) - (h.y - 0) * (q.x - 0)),
            e = e + l;
            d.x += l * f * (0 + h.x + q.x);
            d.y += l * f * (0 + h.y + q.y)
        }
        d.x *= 1 / e;
        d.y *= 1 / e;
        return d
    };
    g.ComputeOBB = function(a, c, d) {
        void 0 === d && (d = 0);
        for (var e = 0,
        f = new Vector2(d + 1), e = 0; e < d; ++e) f[e] = c[e];
        f[d] = f[0];
        c = Number.MAX_VALUE;
        for (e = 1; e <= d; ++e) {
            for (var g = f[parseInt(e - 1)], h = f[e].x - g.x, q = f[e].y - g.y, l = Math.sqrt(h * h + q * q), h = h / l, q = q / l, t = -q, w = h, y = l = Number.MAX_VALUE, m = -Number.MAX_VALUE, k = -Number.MAX_VALUE, x = 0; x < d; ++x) {
                var u = f[x].x - g.x,
                E = f[x].y - g.y,
                O = h * u + q * E,
                u = t * u + w * E;
                O < l && (l = O);
                u < y && (y = u);
                O > m && (m = O);
                u > k && (k = u)
            }
            x = (m - l) * (k - y);
            x < .95 * c && (c = x, a.R.col1.x = h, a.R.col1.y = q, a.R.col2.x = t, a.R.col2.y = w, h = .5 * (l + m), q = .5 * (y + k), t = a.R, a.center.x = g.x + (t.col1.x * h + t.col2.x * q), a.center.y = g.y + (t.col1.y * h + t.col2.y * q), a.extents.x = .5 * (m - l), a.extents.y = .5 * (k - y))
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.Shapes.b2PolygonShape.s_mat = new h
    });
    l.b2Shape = function() {};
    l.prototype.Copy = function() {
        return null
    };
    l.prototype.Set = function(a) {
        this.m_radius = a.m_radius
    };
    l.prototype.GetType = function() {
        return this.m_type
    };
    l.prototype.TestPoint = function(a, c) {
        return ! 1
    };
    l.prototype.RayCast = function(a, c, d) {
        return ! 1
    };
    l.prototype.ComputeAABB = function(a, c) {};
    l.prototype.ComputeMass = function(a, c) {};
    l.prototype.ComputeSubmergedArea = function(a, c, d, e) {
        return 0
    };
    l.TestOverlap = function(a, c, d, e) {
        var f = new y;
        f.proxyA = new B;
        f.proxyA.Set(a);
        f.proxyB = new B;
        f.proxyB.Set(d);
        f.transformA = c;
        f.transformB = e;
        f.useRadii = !0;
        a = new K;
        a.count = 0;
        c = new w;
        t.Distance(c, a, f);
        return c.distance < 10 * Number.MIN_VALUE
    };
    l.prototype.b2Shape = function() {
        this.m_type = l.e_unknownShape;
        this.m_radius = a.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
        Box2D.Collision.Shapes.b2Shape.e_circleShape = 0;
        Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
        Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
        Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
        Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
        Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
        Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1
    })
})(); (function() {
    var a = Box2D.Common.b2Color,
    c = Box2D.Common.b2Settings,
    d = Box2D.Common.Math.b2Math;
    a.b2Color = function() {
        this._b = this._g = this._r = 0
    };
    a.prototype.b2Color = function(a, c, g) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === g && (g = 0);
        this._r = Box2D.parseUInt(255 * d.Clamp(a, 0, 1));
        this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
        this._b = Box2D.parseUInt(255 * d.Clamp(g, 0, 1))
    };
    a.prototype.Set = function(a, c, g) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === g && (g = 0);
        this._r = Box2D.parseUInt(255 * d.Clamp(a, 0, 1));
        this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
        this._b = Box2D.parseUInt(255 * d.Clamp(g, 0, 1))
    };
    Object.defineProperty(a.prototype, "r", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._r = Box2D.parseUInt(255 * d.Clamp(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "g", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._g = Box2D.parseUInt(255 * d.Clamp(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "b", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._b = Box2D.parseUInt(255 * d.Clamp(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "color", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._r << 16 | this._g << 8 | this._b
        }
    });
    c.b2Settings = function() {};
    c.b2MixFriction = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return Math.sqrt(a * c)
    };
    c.b2MixRestitution = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return a > c ? a: c
    };
    c.b2Assert = function(a) {
        if (!a) throw "Assertion Failed";
    };
    Box2D.postDefs.push(function() {
        Box2D.Common.b2Settings.VERSION = "2.1alpha";
        Box2D.Common.b2Settings.USHRT_MAX = 65535;
        Box2D.Common.b2Settings.b2_pi = Math.PI;
        Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
        Box2D.Common.b2Settings.b2_aabbExtension = .1;
        Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
        Box2D.Common.b2Settings.b2_polygonRadius = 2 * c.b2_linearSlop;
        Box2D.Common.b2Settings.b2_linearSlop = .005;
        Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * c.b2_pi;
        Box2D.Common.b2Settings.b2_toiSlop = 8 * c.b2_linearSlop;
        Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
        Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
        Box2D.Common.b2Settings.b2_velocityThreshold = 1;
        Box2D.Common.b2Settings.b2_maxLinearCorrection = .2;
        Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * c.b2_pi;
        Box2D.Common.b2Settings.b2_maxTranslation = 2;
        Box2D.Common.b2Settings.b2_maxTranslationSquared = c.b2_maxTranslation * c.b2_maxTranslation;
        Box2D.Common.b2Settings.b2_maxRotation = .5 * c.b2_pi;
        Box2D.Common.b2Settings.b2_maxRotationSquared = c.b2_maxRotation * c.b2_maxRotation;
        Box2D.Common.b2Settings.b2_contactBaumgarte = .2;
        Box2D.Common.b2Settings.b2_timeToSleep = .5;
        Box2D.Common.b2Settings.b2_linearSleepTolerance = .01;
        Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * c.b2_pi
    })
})(); (function() {
    var a = Box2D.Common.Math.b2Mat22,
    c = Box2D.Common.Math.b2Mat33,
    d = Box2D.Common.Math.b2Math,
    e = Box2D.Common.Math.b2Sweep,
    f = Box2D.Common.Math.b2Transform,
    g = Box2D.Common.Math.b2Vec2,
    l = Box2D.Common.Math.b2Vec3;
    a.b2Mat22 = function() {
        this.col1 = new g;
        this.col2 = new g
    };
    a.prototype.b2Mat22 = function() {
        this.SetIdentity()
    };
    a.FromAngle = function(c) {
        void 0 === c && (c = 0);
        var d = new a;
        d.Set(c);
        return d
    };
    a.FromVV = function(c, d) {
        var e = new a;
        e.SetVV(c, d);
        return e
    };
    a.prototype.Set = function(a) {
        void 0 === a && (a = 0);
        var c = Math.cos(a);
        a = Math.sin(a);
        this.col1.x = c;
        this.col2.x = -a;
        this.col1.y = a;
        this.col2.y = c
    };
    a.prototype.SetVV = function(a, c) {
        this.col1.SetV(a);
        this.col2.SetV(c)
    };
    a.prototype.Copy = function() {
        var c = new a;
        c.SetM(this);
        return c
    };
    a.prototype.SetM = function(a) {
        this.col1.SetV(a.col1);
        this.col2.SetV(a.col2)
    };
    a.prototype.AddM = function(a) {
        this.col1.x += a.col1.x;
        this.col1.y += a.col1.y;
        this.col2.x += a.col2.x;
        this.col2.y += a.col2.y
    };
    a.prototype.SetIdentity = function() {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 1
    };
    a.prototype.SetZero = function() {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 0
    };
    a.prototype.GetAngle = function() {
        return Math.atan2(this.col1.y, this.col1.x)
    };
    a.prototype.GetInverse = function(a) {
        var c = this.col1.x,
        d = this.col2.x,
        e = this.col1.y,
        f = this.col2.y,
        g = c * f - d * e;
        0 != g && (g = 1 / g);
        a.col1.x = g * f;
        a.col2.x = -g * d;
        a.col1.y = -g * e;
        a.col2.y = g * c;
        return a
    };
    a.prototype.Solve = function(a, c, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var e = this.col1.x,
        f = this.col2.x,
        g = this.col1.y,
        l = this.col2.y,
        B = e * l - f * g;
        0 != B && (B = 1 / B);
        a.x = B * (l * c - f * d);
        a.y = B * (e * d - g * c);
        return a
    };
    a.prototype.Abs = function() {
        this.col1.Abs();
        this.col2.Abs()
    };
    c.b2Mat33 = function() {
        this.col1 = new l;
        this.col2 = new l;
        this.col3 = new l
    };
    c.prototype.b2Mat33 = function(a, c, d) {
        void 0 === a && (a = null);
        void 0 === c && (c = null);
        void 0 === d && (d = null);
        a || c || d ? (this.col1.SetV(a), this.col2.SetV(c), this.col3.SetV(d)) : (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero())
    };
    c.prototype.SetVVV = function(a, c, d) {
        this.col1.SetV(a);
        this.col2.SetV(c);
        this.col3.SetV(d)
    };
    c.prototype.Copy = function() {
        return new c(this.col1, this.col2, this.col3)
    };
    c.prototype.SetM = function(a) {
        this.col1.SetV(a.col1);
        this.col2.SetV(a.col2);
        this.col3.SetV(a.col3)
    };
    c.prototype.AddM = function(a) {
        this.col1.x += a.col1.x;
        this.col1.y += a.col1.y;
        this.col1.z += a.col1.z;
        this.col2.x += a.col2.x;
        this.col2.y += a.col2.y;
        this.col2.z += a.col2.z;
        this.col3.x += a.col3.x;
        this.col3.y += a.col3.y;
        this.col3.z += a.col3.z
    };
    c.prototype.SetIdentity = function() {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 1;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 1
    };
    c.prototype.SetZero = function() {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 0;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 0
    };
    c.prototype.Solve22 = function(a, c, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var e = this.col1.x,
        f = this.col2.x,
        g = this.col1.y,
        l = this.col2.y,
        B = e * l - f * g;
        0 != B && (B = 1 / B);
        a.x = B * (l * c - f * d);
        a.y = B * (e * d - g * c);
        return a
    };
    c.prototype.Solve33 = function(a, c, d, e) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        var f = this.col1.x,
        g = this.col1.y,
        l = this.col1.z,
        B = this.col2.x,
        K = this.col2.y,
        n = this.col2.z,
        F = this.col3.x,
        G = this.col3.y,
        I = this.col3.z,
        J = f * (K * I - n * G) + g * (n * F - B * I) + l * (B * G - K * F);
        0 != J && (J = 1 / J);
        a.x = J * (c * (K * I - n * G) + d * (n * F - B * I) + e * (B * G - K * F));
        a.y = J * (f * (d * I - e * G) + g * (e * F - c * I) + l * (c * G - d * F));
        a.z = J * (f * (K * e - n * d) + g * (n * c - B * e) + l * (B * d - K * c));
        return a
    };
    d.b2Math = function() {};
    d.IsValid = function(a) {
        void 0 === a && (a = 0);
        return isFinite(a)
    };
    d.Dot = function(a, c) {
        return a.x * c.x + a.y * c.y
    };
    d.CrossVV = function(a, c) {
        return a.x * c.y - a.y * c.x
    };
    d.CrossVF = function(a, c) {
        void 0 === c && (c = 0);
        return new g(c * a.y, -c * a.x)
    };
    d.CrossFV = function(a, c) {
        void 0 === a && (a = 0);
        return new g( - a * c.y, a * c.x)
    };
    d.MulMV = function(a, c) {
        return new g(a.col1.x * c.x + a.col2.x * c.y, a.col1.y * c.x + a.col2.y * c.y)
    };
    d.MulTMV = function(a, c) {
        return new g(d.Dot(c, a.col1), d.Dot(c, a.col2))
    };
    d.MulX = function(a, c) {
        var e = d.MulMV(a.R, c);
        e.x += a.position.x;
        e.y += a.position.y;
        return e
    };
    d.MulXT = function(a, c) {
        var e = d.SubtractVV(c, a.position),
        f = e.x * a.R.col1.x + e.y * a.R.col1.y;
        e.y = e.x * a.R.col2.x + e.y * a.R.col2.y;
        e.x = f;
        return e
    };
    d.AddVV = function(a, c) {
        return new g(a.x + c.x, a.y + c.y)
    };
    d.SubtractVV = function(a, c) {
        return new g(a.x - c.x, a.y - c.y)
    };
    d.Distance = function(a, c) {
        var d = a.x - c.x,
        e = a.y - c.y;
        return Math.sqrt(d * d + e * e)
    };
    d.DistanceSquared = function(a, c) {
        var d = a.x - c.x,
        e = a.y - c.y;
        return d * d + e * e
    };
    d.MulFV = function(a, c) {
        void 0 === a && (a = 0);
        return new g(a * c.x, a * c.y)
    };
    d.AddMM = function(c, e) {
        return a.FromVV(d.AddVV(c.col1, e.col1), d.AddVV(c.col2, e.col2))
    };
    d.MulMM = function(c, e) {
        return a.FromVV(d.MulMV(c, e.col1), d.MulMV(c, e.col2))
    };
    d.MulTMM = function(c, e) {
        var f = new g(d.Dot(c.col1, e.col1), d.Dot(c.col2, e.col1)),
        l = new g(d.Dot(c.col1, e.col2), d.Dot(c.col2, e.col2));
        return a.FromVV(f, l)
    };
    d.Abs = function(a) {
        void 0 === a && (a = 0);
        return 0 < a ? a: -a
    };
    d.AbsV = function(a) {
        return new g(d.Abs(a.x), d.Abs(a.y))
    };
    d.AbsM = function(c) {
        return a.FromVV(d.AbsV(c.col1), d.AbsV(c.col2))
    };
    d.Min = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return a < c ? a: c
    };
    d.MinV = function(a, c) {
        return new g(d.Min(a.x, c.x), d.Min(a.y, c.y))
    };
    d.Max = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return a > c ? a: c
    };
    d.MaxV = function(a, c) {
        return new g(d.Max(a.x, c.x), d.Max(a.y, c.y))
    };
    d.Clamp = function(a, c, d) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        return a < c ? c: a > d ? d: a
    };
    d.ClampV = function(a, c, e) {
        return d.MaxV(c, d.MinV(a, e))
    };
    d.Swap = function(a, c) {
        var d = a[0];
        a[0] = c[0];
        c[0] = d
    };
    d.Random = function() {
        return 2 * Math.random() - 1
    };
    d.RandomRange = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        var d = Math.random();
        return (c - a) * d + a
    };
    d.NextPowerOfTwo = function(a) {
        void 0 === a && (a = 0);
        a |= a >> 1 & 2147483647;
        a |= a >> 2 & 1073741823;
        a |= a >> 4 & 268435455;
        a |= a >> 8 & 16777215;
        return (a | a >> 16 & 65535) + 1
    };
    d.IsPowerOfTwo = function(a) {
        void 0 === a && (a = 0);
        return 0 < a && 0 == (a & a - 1)
    };
    Box2D.postDefs.push(function() {
        Box2D.Common.Math.b2Math.b2Vec2_zero = new g(0, 0);
        Box2D.Common.Math.b2Math.b2Mat22_identity = a.FromVV(new g(1, 0), new g(0, 1));
        Box2D.Common.Math.b2Math.b2Transform_identity = new f(d.b2Vec2_zero, d.b2Mat22_identity)
    });
    e.b2Sweep = function() {
        this.localCenter = new g;
        this.c0 = new g;
        this.c = new g
    };
    e.prototype.Set = function(a) {
        this.localCenter.SetV(a.localCenter);
        this.c0.SetV(a.c0);
        this.c.SetV(a.c);
        this.a0 = a.a0;
        this.a = a.a;
        this.t0 = a.t0
    };
    e.prototype.Copy = function() {
        var a = new e;
        a.localCenter.SetV(this.localCenter);
        a.c0.SetV(this.c0);
        a.c.SetV(this.c);
        a.a0 = this.a0;
        a.a = this.a;
        a.t0 = this.t0;
        return a
    };
    e.prototype.GetTransform = function(a, c) {
        void 0 === c && (c = 0);
        a.position.x = (1 - c) * this.c0.x + c * this.c.x;
        a.position.y = (1 - c) * this.c0.y + c * this.c.y;
        a.R.Set((1 - c) * this.a0 + c * this.a);
        var d = a.R;
        a.position.x -= d.col1.x * this.localCenter.x + d.col2.x * this.localCenter.y;
        a.position.y -= d.col1.y * this.localCenter.x + d.col2.y * this.localCenter.y
    };
    e.prototype.Advance = function(a) {
        void 0 === a && (a = 0);
        if (this.t0 < a && 1 - this.t0 > Number.MIN_VALUE) {
            var c = (a - this.t0) / (1 - this.t0);
            this.c0.x = (1 - c) * this.c0.x + c * this.c.x;
            this.c0.y = (1 - c) * this.c0.y + c * this.c.y;
            this.a0 = (1 - c) * this.a0 + c * this.a;
            this.t0 = a
        }
    };
    f.b2Transform = function() {
        this.position = new g;
        this.R = new a
    };
    f.prototype.b2Transform = function(a, c) {
        void 0 === a && (a = null);
        void 0 === c && (c = null);
        a && (this.position.SetV(a), this.R.SetM(c))
    };
    f.prototype.Initialize = function(a, c) {
        this.position.SetV(a);
        this.R.SetM(c)
    };
    f.prototype.SetIdentity = function() {
        this.position.SetZero();
        this.R.SetIdentity()
    };
    f.prototype.Set = function(a) {
        this.position.SetV(a.position);
        this.R.SetM(a.R)
    };
    f.prototype.GetAngle = function() {
        return Math.atan2(this.R.col1.y, this.R.col1.x)
    };
    g.b2Vec2 = function() {};
    g.prototype.b2Vec2 = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.x = a;
        this.y = c
    };
    g.prototype.SetZero = function() {
        this.y = this.x = 0
    };
    g.prototype.Set = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.x = a;
        this.y = c
    };
    g.prototype.SetV = function(a) {
        this.x = a.x;
        this.y = a.y
    };
    g.prototype.GetNegative = function() {
        return new g( - this.x, -this.y)
    };
    g.prototype.NegativeSelf = function() {
        this.x = -this.x;
        this.y = -this.y
    };
    g.Make = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return new g(a, c)
    };
    g.prototype.Copy = function() {
        return new g(this.x, this.y)
    };
    g.prototype.Add = function(a) {
        this.x += a.x;
        this.y += a.y
    };
    g.prototype.Subtract = function(a) {
        this.x -= a.x;
        this.y -= a.y
    };
    g.prototype.Multiply = function(a) {
        void 0 === a && (a = 0);
        this.x *= a;
        this.y *= a
    };
    g.prototype.MulM = function(a) {
        var c = this.x;
        this.x = a.col1.x * c + a.col2.x * this.y;
        this.y = a.col1.y * c + a.col2.y * this.y
    };
    g.prototype.MulTM = function(a) {
        var c = d.Dot(this, a.col1);
        this.y = d.Dot(this, a.col2);
        this.x = c
    };
    g.prototype.CrossVF = function(a) {
        void 0 === a && (a = 0);
        var c = this.x;
        this.x = a * this.y;
        this.y = -a * c
    };
    g.prototype.CrossFV = function(a) {
        void 0 === a && (a = 0);
        var c = this.x;
        this.x = -a * this.y;
        this.y = a * c
    };
    g.prototype.MinV = function(a) {
        this.x = this.x < a.x ? this.x: a.x;
        this.y = this.y < a.y ? this.y: a.y
    };
    g.prototype.MaxV = function(a) {
        this.x = this.x > a.x ? this.x: a.x;
        this.y = this.y > a.y ? this.y: a.y
    };
    g.prototype.Abs = function() {
        0 > this.x && (this.x = -this.x);
        0 > this.y && (this.y = -this.y)
    };
    g.prototype.Length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    };
    g.prototype.LengthSquared = function() {
        return this.x * this.x + this.y * this.y
    };
    g.prototype.Normalize = function() {
        var a = Math.sqrt(this.x * this.x + this.y * this.y);
        if (a < Number.MIN_VALUE) return 0;
        var c = 1 / a;
        this.x *= c;
        this.y *= c;
        return a
    };
    g.prototype.IsValid = function() {
        return d.IsValid(this.x) && d.IsValid(this.y)
    };
    l.b2Vec3 = function() {};
    l.prototype.b2Vec3 = function(a, c, d) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        this.x = a;
        this.y = c;
        this.z = d
    };
    l.prototype.SetZero = function() {
        this.x = this.y = this.z = 0
    };
    l.prototype.Set = function(a, c, d) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        this.x = a;
        this.y = c;
        this.z = d
    };
    l.prototype.SetV = function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z
    };
    l.prototype.GetNegative = function() {
        return new l( - this.x, -this.y, -this.z)
    };
    l.prototype.NegativeSelf = function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z
    };
    l.prototype.Copy = function() {
        return new l(this.x, this.y, this.z)
    };
    l.prototype.Add = function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z
    };
    l.prototype.Subtract = function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z
    };
    l.prototype.Multiply = function(a) {
        void 0 === a && (a = 0);
        this.x *= a;
        this.y *= a;
        this.z *= a
    }
})(); (function() {
    var a = Box2D.Common.Math.b2Math,
    c = Box2D.Common.Math.b2Sweep,
    d = Box2D.Common.Math.b2Transform,
    e = Box2D.Common.Math.b2Vec2,
    f = Box2D.Common.b2Color,
    g = Box2D.Common.b2Settings,
    l = Box2D.Collision.b2AABB,
    h = Box2D.Collision.b2ContactPoint,
    q = Box2D.Collision.b2DynamicTreeBroadPhase,
    z = Box2D.Collision.b2RayCastInput,
    v = Box2D.Collision.b2RayCastOutput,
    t = Box2D.Collision.Shapes.b2CircleShape,
    y = Box2D.Collision.Shapes.b2EdgeShape,
    w = Box2D.Collision.Shapes.b2MassData,
    B = Box2D.Collision.Shapes.b2PolygonShape,
    K = Box2D.Collision.Shapes.b2Shape,
    n = Box2D.Dynamics.b2Body,
    F = Box2D.Dynamics.b2BodyDef,
    G = Box2D.Dynamics.b2ContactFilter,
    I = Box2D.Dynamics.b2ContactImpulse,
    J = Box2D.Dynamics.b2ContactListener,
    M = Box2D.Dynamics.b2ContactManager,
    D = Box2D.Dynamics.b2DebugDraw,
    P = Box2D.Dynamics.b2DestructionListener,
    H = Box2D.Dynamics.b2FilterData,
    L = Box2D.Dynamics.b2Fixture,
    Q = Box2D.Dynamics.b2FixtureDef,
    N = Box2D.Dynamics.b2Island,
    m = Box2D.Dynamics.b2TimeStep,
    k = Box2D.Dynamics.b2World,
    x = Box2D.Dynamics.Contacts.b2Contact,
    u = Box2D.Dynamics.Contacts.b2ContactFactory,
    E = Box2D.Dynamics.Contacts.b2ContactSolver,
    O = Box2D.Dynamics.Joints.b2Joint,
    C = Box2D.Dynamics.Joints.b2PulleyJoint;
    n.b2Body = function() {
        this.m_xf = new d;
        this.m_sweep = new c;
        this.m_linearVelocity = new e;
        this.m_force = new e
    };
    n.prototype.connectEdges = function(c, d, e) {
        void 0 === e && (e = 0);
        var m = Math.atan2(d.GetDirectionVector().y, d.GetDirectionVector().x);
        e = Math.tan(.5 * (m - e));
        e = a.MulFV(e, d.GetDirectionVector());
        e = a.SubtractVV(e, d.GetNormalVector());
        e = a.MulFV(g.b2_toiSlop, e);
        e = a.AddVV(e, d.GetVertex1());
        var k = a.AddVV(c.GetDirectionVector(), d.GetDirectionVector());
        k.Normalize();
        var f = 0 < a.Dot(c.GetDirectionVector(), d.GetNormalVector());
        c.SetNextEdge(d, e, k, f);
        d.SetPrevEdge(c, e, k, f);
        return m
    };
    n.prototype.CreateFixture = function(a) {
        if (1 == this.m_world.IsLocked()) return null;
        var c = new L;
        c.Create(this, this.m_xf, a);
        this.m_flags & n.e_activeFlag && c.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
        c.m_next = this.m_fixtureList;
        this.m_fixtureList = c; ++this.m_fixtureCount;
        c.m_body = this;
        0 < c.m_density && this.ResetMassData();
        this.m_world.m_flags |= k.e_newFixture;
        return c
    };
    n.prototype.CreateFixture2 = function(a, c) {
        void 0 === c && (c = 0);
        var d = new Q;
        d.shape = a;
        d.density = c;
        return this.CreateFixture(d)
    };
    n.prototype.DestroyFixture = function(a) {
        if (1 != this.m_world.IsLocked()) {
            for (var c = this.m_fixtureList,
            d = null; null != c;) {
                if (c == a) {
                    d ? d.m_next = a.m_next: this.m_fixtureList = a.m_next;
                    break
                }
                d = c;
                c = c.m_next
            }
            for (c = this.m_contactList; c;) {
                var d = c.contact,
                c = c.next,
                e = d.GetFixtureA(),
                m = d.GetFixtureB();
                a != e && a != m || this.m_world.m_contactManager.Destroy(d)
            }
            this.m_flags & n.e_activeFlag && a.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
            a.Destroy();
            a.m_body = null;
            a.m_next = null; --this.m_fixtureCount;
            this.ResetMassData()
        }
    };
    n.prototype.SetPositionAndAngle = function(a, c) {
        void 0 === c && (c = 0);
        var d;
        if (1 != this.m_world.IsLocked()) {
            this.m_xf.R.Set(c);
            this.m_xf.position.SetV(a);
            d = this.m_xf.R;
            var e = this.m_sweep.localCenter;
            this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
            this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
            this.m_sweep.c.x += this.m_xf.position.x;
            this.m_sweep.c.y += this.m_xf.position.y;
            this.m_sweep.c0.SetV(this.m_sweep.c);
            this.m_sweep.a0 = this.m_sweep.a = c;
            e = this.m_world.m_contactManager.m_broadPhase;
            for (d = this.m_fixtureList; d; d = d.m_next) d.Synchronize(e, this.m_xf, this.m_xf);
            this.m_world.m_contactManager.FindNewContacts()
        }
    };
    n.prototype.SetTransform = function(a) {
        this.SetPositionAndAngle(a.position, a.GetAngle())
    };
    n.prototype.GetTransform = function() {
        return this.m_xf
    };
    n.prototype.GetPosition = function() {
        return this.m_xf.position
    };
    n.prototype.SetPosition = function(a) {
        this.SetPositionAndAngle(a, this.GetAngle())
    };
    n.prototype.GetAngle = function() {
        return this.m_sweep.a
    };
    n.prototype.SetAngle = function(a) {
        void 0 === a && (a = 0);
        this.SetPositionAndAngle(this.GetPosition(), a)
    };
    n.prototype.GetWorldCenter = function() {
        return this.m_sweep.c
    };
    n.prototype.GetLocalCenter = function() {
        return this.m_sweep.localCenter
    };
    n.prototype.SetLinearVelocity = function(a) {
        this.m_type != n.b2_staticBody && this.m_linearVelocity.SetV(a)
    };
    n.prototype.GetLinearVelocity = function() {
        return this.m_linearVelocity
    };
    n.prototype.SetAngularVelocity = function(a) {
        void 0 === a && (a = 0);
        this.m_type != n.b2_staticBody && (this.m_angularVelocity = a)
    };
    n.prototype.GetAngularVelocity = function() {
        return this.m_angularVelocity
    };
    n.prototype.GetDefinition = function() {
        var a = new F;
        a.type = this.GetType();
        a.allowSleep = (this.m_flags & n.e_allowSleepFlag) == n.e_allowSleepFlag;
        a.angle = this.GetAngle();
        a.angularDamping = this.m_angularDamping;
        a.angularVelocity = this.m_angularVelocity;
        a.fixedRotation = (this.m_flags & n.e_fixedRotationFlag) == n.e_fixedRotationFlag;
        a.bullet = (this.m_flags & n.e_bulletFlag) == n.e_bulletFlag;
        a.awake = (this.m_flags & n.e_awakeFlag) == n.e_awakeFlag;
        a.linearDamping = this.m_linearDamping;
        a.linearVelocity.SetV(this.GetLinearVelocity());
        a.position = this.GetPosition();
        a.userData = this.GetUserData();
        return a
    };
    n.prototype.ApplyForce = function(a, c) {
        this.m_type == n.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_force.x += a.x, this.m_force.y += a.y, this.m_torque += (c.x - this.m_sweep.c.x) * a.y - (c.y - this.m_sweep.c.y) * a.x)
    };
    n.prototype.ApplyTorque = function(a) {
        void 0 === a && (a = 0);
        this.m_type == n.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_torque += a)
    };
    n.prototype.ApplyImpulse = function(a, c) {
        this.m_type == n.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * a.x, this.m_linearVelocity.y += this.m_invMass * a.y, this.m_angularVelocity += this.m_invI * ((c.x - this.m_sweep.c.x) * a.y - (c.y - this.m_sweep.c.y) * a.x))
    };
    n.prototype.Split = function(c) {
        for (var d = this.GetLinearVelocity().Copy(), e = this.GetAngularVelocity(), m = this.GetWorldCenter(), k = this.m_world.CreateBody(this.GetDefinition()), f, g = this.m_fixtureList; g;) if (c(g)) {
            var u = g.m_next;
            f ? f.m_next = u: this.m_fixtureList = u;
            this.m_fixtureCount--;
            g.m_next = k.m_fixtureList;
            k.m_fixtureList = g;
            k.m_fixtureCount++;
            g.m_body = k;
            g = u
        } else f = g,
        g = g.m_next;
        this.ResetMassData();
        k.ResetMassData();
        f = this.GetWorldCenter();
        c = k.GetWorldCenter();
        f = a.AddVV(d, a.CrossFV(e, a.SubtractVV(f, m)));
        d = a.AddVV(d, a.CrossFV(e, a.SubtractVV(c, m)));
        this.SetLinearVelocity(f);
        k.SetLinearVelocity(d);
        this.SetAngularVelocity(e);
        k.SetAngularVelocity(e);
        this.SynchronizeFixtures();
        k.SynchronizeFixtures();
        return k
    };
    n.prototype.Merge = function(a) {
        var c;
        for (c = a.m_fixtureList; c;) {
            var d = c.m_next;
            a.m_fixtureCount--;
            c.m_next = this.m_fixtureList;
            this.m_fixtureList = c;
            this.m_fixtureCount++;
            c.m_body = m;
            c = d
        }
        e.m_fixtureCount = 0;
        var e = this,
        m = a;
        e.GetWorldCenter();
        m.GetWorldCenter();
        e.GetLinearVelocity().Copy();
        m.GetLinearVelocity().Copy();
        e.GetAngularVelocity();
        m.GetAngularVelocity();
        e.ResetMassData();
        this.SynchronizeFixtures()
    };
    n.prototype.GetMass = function() {
        return this.m_mass
    };
    n.prototype.GetInertia = function() {
        return this.m_I
    };
    n.prototype.GetMassData = function(a) {
        a.mass = this.m_mass;
        a.I = this.m_I;
        a.center.SetV(this.m_sweep.localCenter)
    };
    n.prototype.SetMassData = function(c) {
        g.b2Assert(0 == this.m_world.IsLocked());
        if (1 != this.m_world.IsLocked() && this.m_type == n.b2_dynamicBody) {
            this.m_invI = this.m_I = this.m_invMass = 0;
            this.m_mass = c.mass;
            0 >= this.m_mass && (this.m_mass = 1);
            this.m_invMass = 1 / this.m_mass;
            0 < c.I && 0 == (this.m_flags & n.e_fixedRotationFlag) && (this.m_I = c.I - this.m_mass * (c.center.x * c.center.x + c.center.y * c.center.y), this.m_invI = 1 / this.m_I);
            var d = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(c.center);
            this.m_sweep.c0.SetV(a.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
            this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - d.x)
        }
    };
    n.prototype.ResetMassData = function() {
        this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
        this.m_sweep.localCenter.SetZero();
        if (this.m_type != n.b2_staticBody && this.m_type != n.b2_kinematicBody) {
            for (var c = e.Make(0, 0), d = this.m_fixtureList; d; d = d.m_next) if (0 != d.m_density) {
                var m = d.GetMassData();
                this.m_mass += m.mass;
                c.x += m.center.x * m.mass;
                c.y += m.center.y * m.mass;
                this.m_I += m.I
            }
            0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, c.x *= this.m_invMass, c.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
            0 < this.m_I && 0 == (this.m_flags & n.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * (c.x * c.x + c.y * c.y), this.m_I *= this.m_inertiaScale, g.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0;
            d = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(c);
            this.m_sweep.c0.SetV(a.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
            this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - d.x)
        }
    };
    n.prototype.GetWorldPoint = function(a) {
        var c = this.m_xf.R;
        a = new e(c.col1.x * a.x + c.col2.x * a.y, c.col1.y * a.x + c.col2.y * a.y);
        a.x += this.m_xf.position.x;
        a.y += this.m_xf.position.y;
        return a
    };
    n.prototype.GetWorldVector = function(c) {
        return a.MulMV(this.m_xf.R, c)
    };
    n.prototype.GetLocalPoint = function(c) {
        return a.MulXT(this.m_xf, c)
    };
    n.prototype.GetLocalVector = function(c) {
        return a.MulTMV(this.m_xf.R, c)
    };
    n.prototype.GetLinearVelocityFromWorldPoint = function(a) {
        return new e(this.m_linearVelocity.x - this.m_angularVelocity * (a.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (a.x - this.m_sweep.c.x))
    };
    n.prototype.GetLinearVelocityFromLocalPoint = function(a) {
        var c = this.m_xf.R;
        a = new e(c.col1.x * a.x + c.col2.x * a.y, c.col1.y * a.x + c.col2.y * a.y);
        a.x += this.m_xf.position.x;
        a.y += this.m_xf.position.y;
        return new e(this.m_linearVelocity.x - this.m_angularVelocity * (a.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (a.x - this.m_sweep.c.x))
    };
    n.prototype.GetLinearDamping = function() {
        return this.m_linearDamping
    };
    n.prototype.SetLinearDamping = function(a) {
        void 0 === a && (a = 0);
        this.m_linearDamping = a
    };
    n.prototype.GetAngularDamping = function() {
        return this.m_angularDamping
    };
    n.prototype.SetAngularDamping = function(a) {
        void 0 === a && (a = 0);
        this.m_angularDamping = a
    };
    n.prototype.SetType = function(a) {
        void 0 === a && (a = 0);
        if (this.m_type != a) for (this.m_type = a, this.ResetMassData(), this.m_type == n.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0, a = this.m_contactList; a; a = a.next) a.contact.FlagForFiltering()
    };
    n.prototype.GetType = function() {
        return this.m_type
    };
    n.prototype.SetBullet = function(a) {
        this.m_flags = a ? this.m_flags | n.e_bulletFlag: this.m_flags & ~n.e_bulletFlag
    };
    n.prototype.IsBullet = function() {
        return (this.m_flags & n.e_bulletFlag) == n.e_bulletFlag
    };
    n.prototype.SetSleepingAllowed = function(a) {
        a ? this.m_flags |= n.e_allowSleepFlag: (this.m_flags &= ~n.e_allowSleepFlag, this.SetAwake(!0))
    };
    n.prototype.SetAwake = function(a) {
        a ? (this.m_flags |= n.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~n.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0)
    };
    n.prototype.IsAwake = function() {
        return (this.m_flags & n.e_awakeFlag) == n.e_awakeFlag
    };
    n.prototype.SetFixedRotation = function(a) {
        this.m_flags = a ? this.m_flags | n.e_fixedRotationFlag: this.m_flags & ~n.e_fixedRotationFlag;
        this.ResetMassData()
    };
    n.prototype.IsFixedRotation = function() {
        return (this.m_flags & n.e_fixedRotationFlag) == n.e_fixedRotationFlag
    };
    n.prototype.SetActive = function(a) {
        if (a != this.IsActive()) {
            var c;
            if (a) for (this.m_flags |= n.e_activeFlag, a = this.m_world.m_contactManager.m_broadPhase, c = this.m_fixtureList; c; c = c.m_next) c.CreateProxy(a, this.m_xf);
            else {
                this.m_flags &= ~n.e_activeFlag;
                a = this.m_world.m_contactManager.m_broadPhase;
                for (c = this.m_fixtureList; c; c = c.m_next) c.DestroyProxy(a);
                for (a = this.m_contactList; a;) c = a,
                a = a.next,
                this.m_world.m_contactManager.Destroy(c.contact);
                this.m_contactList = null
            }
        }
    };
    n.prototype.IsActive = function() {
        return (this.m_flags & n.e_activeFlag) == n.e_activeFlag
    };
    n.prototype.IsSleepingAllowed = function() {
        return (this.m_flags & n.e_allowSleepFlag) == n.e_allowSleepFlag
    };
    n.prototype.GetFixtureList = function() {
        return this.m_fixtureList
    };
    n.prototype.GetJointList = function() {
        return this.m_jointList
    };
    n.prototype.GetControllerList = function() {
        return this.m_controllerList
    };
    n.prototype.GetContactList = function() {
        return this.m_contactList
    };
    n.prototype.GetNext = function() {
        return this.m_next
    };
    n.prototype.GetUserData = function() {
        return this.m_userData
    };
    n.prototype.SetUserData = function(a) {
        this.m_userData = a
    };
    n.prototype.GetWorld = function() {
        return this.m_world
    };
    n.prototype.b2Body = function(a, c) {
        this.m_flags = 0;
        a.bullet && (this.m_flags |= n.e_bulletFlag);
        a.fixedRotation && (this.m_flags |= n.e_fixedRotationFlag);
        a.allowSleep && (this.m_flags |= n.e_allowSleepFlag);
        a.awake && (this.m_flags |= n.e_awakeFlag);
        a.active && (this.m_flags |= n.e_activeFlag);
        this.m_world = c;
        this.m_xf.position.SetV(a.position);
        this.m_xf.R.Set(a.angle);
        this.m_sweep.localCenter.SetZero();
        this.m_sweep.t0 = 1;
        this.m_sweep.a0 = this.m_sweep.a = a.angle;
        var d = this.m_xf.R,
        e = this.m_sweep.localCenter;
        this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
        this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
        this.m_sweep.c.x += this.m_xf.position.x;
        this.m_sweep.c.y += this.m_xf.position.y;
        this.m_sweep.c0.SetV(this.m_sweep.c);
        this.m_contactList = this.m_controllerList = this.m_jointList = null;
        this.m_controllerCount = 0;
        this.m_next = this.m_prev = null;
        this.m_linearVelocity.SetV(a.linearVelocity);
        this.m_angularVelocity = a.angularVelocity;
        this.m_linearDamping = a.linearDamping;
        this.m_angularDamping = a.angularDamping;
        this.m_force.Set(0, 0);
        this.m_sleepTime = this.m_torque = 0;
        this.m_type = a.type;
        this.m_invMass = this.m_type == n.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
        this.m_invI = this.m_I = 0;
        this.m_inertiaScale = a.inertiaScale;
        this.m_userData = a.userData;
        this.m_fixtureList = null;
        this.m_fixtureCount = 0
    };
    n.prototype.SynchronizeFixtures = function() {
        var a = n.s_xf1;
        a.R.Set(this.m_sweep.a0);
        var c = a.R,
        d = this.m_sweep.localCenter;
        a.position.x = this.m_sweep.c0.x - (c.col1.x * d.x + c.col2.x * d.y);
        a.position.y = this.m_sweep.c0.y - (c.col1.y * d.x + c.col2.y * d.y);
        d = this.m_world.m_contactManager.m_broadPhase;
        for (c = this.m_fixtureList; c; c = c.m_next) c.Synchronize(d, a, this.m_xf)
    };
    n.prototype.SynchronizeTransform = function() {
        this.m_xf.R.Set(this.m_sweep.a);
        var a = this.m_xf.R,
        c = this.m_sweep.localCenter;
        this.m_xf.position.x = this.m_sweep.c.x - (a.col1.x * c.x + a.col2.x * c.y);
        this.m_xf.position.y = this.m_sweep.c.y - (a.col1.y * c.x + a.col2.y * c.y)
    };
    n.prototype.ShouldCollide = function(a) {
        if (this.m_type != n.b2_dynamicBody && a.m_type != n.b2_dynamicBody) return ! 1;
        for (var c = this.m_jointList; c; c = c.next) if (c.other == a && 0 == c.joint.m_collideConnected) return ! 1;
        return ! 0
    };
    n.prototype.Advance = function(a) {
        void 0 === a && (a = 0);
        this.m_sweep.Advance(a);
        this.m_sweep.c.SetV(this.m_sweep.c0);
        this.m_sweep.a = this.m_sweep.a0;
        this.SynchronizeTransform()
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2Body.s_xf1 = new d;
        Box2D.Dynamics.b2Body.e_islandFlag = 1;
        Box2D.Dynamics.b2Body.e_awakeFlag = 2;
        Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
        Box2D.Dynamics.b2Body.e_bulletFlag = 8;
        Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
        Box2D.Dynamics.b2Body.e_activeFlag = 32;
        Box2D.Dynamics.b2Body.b2_staticBody = 0;
        Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
        Box2D.Dynamics.b2Body.b2_dynamicBody = 2
    });
    F.b2BodyDef = function() {
        this.position = new e;
        this.linearVelocity = new e
    };
    F.prototype.b2BodyDef = function() {
        this.userData = null;
        this.position.Set(0, 0);
        this.angle = 0;
        this.linearVelocity.Set(0, 0);
        this.angularDamping = this.linearDamping = this.angularVelocity = 0;
        this.awake = this.allowSleep = !0;
        this.bullet = this.fixedRotation = !1;
        this.type = n.b2_staticBody;
        this.active = !0;
        this.inertiaScale = 1
    };
    G.b2ContactFilter = function() {};
    G.prototype.ShouldCollide = function(a, c) {
        var d = a.GetFilterData(),
        e = c.GetFilterData();
        return d.groupIndex == e.groupIndex && 0 != d.groupIndex ? 0 < d.groupIndex: 0 != (d.maskBits & e.categoryBits) && 0 != (d.categoryBits & e.maskBits)
    };
    G.prototype.RayCollide = function(a, c) {
        return a ? this.ShouldCollide(a instanceof L ? a: null, c) : !0
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new G
    });
    I.b2ContactImpulse = function() {
        this.normalImpulses = new Vector_a2j_Number(g.b2_maxManifoldPoints);
        this.tangentImpulses = new Vector_a2j_Number(g.b2_maxManifoldPoints)
    };
    J.b2ContactListener = function() {};
    J.prototype.BeginContact = function(a) {};
    J.prototype.EndContact = function(a) {};
    J.prototype.PreSolve = function(a, c) {};
    J.prototype.PostSolve = function(a, c) {};
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactListener.b2_defaultListener = new J
    });
    M.b2ContactManager = function() {};
    M.prototype.b2ContactManager = function() {
        this.m_world = null;
        this.m_contactCount = 0;
        this.m_contactFilter = G.b2_defaultFilter;
        this.m_contactListener = J.b2_defaultListener;
        this.m_contactFactory = new u(this.m_allocator);
        this.m_broadPhase = new q
    };
    M.prototype.AddPair = function(a, c) {
        var d = a instanceof L ? a: null,
        e = c instanceof L ? c: null,
        m = d.GetBody(),
        k = e.GetBody();
        if (m != k) {
            for (var f = k.GetContactList(); f;) {
                if (f.other == m) {
                    var g = f.contact.GetFixtureA(),
                    u = f.contact.GetFixtureB();
                    if (g == d && u == e || g == e && u == d) return
                }
                f = f.next
            }
            0 != k.ShouldCollide(m) && 0 != this.m_contactFilter.ShouldCollide(d, e) && (f = this.m_contactFactory.Create(d, e), d = f.GetFixtureA(), e = f.GetFixtureB(), m = d.m_body, k = e.m_body, f.m_prev = null, f.m_next = this.m_world.m_contactList, null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = f), this.m_world.m_contactList = f, f.m_nodeA.contact = f, f.m_nodeA.other = k, f.m_nodeA.prev = null, f.m_nodeA.next = m.m_contactList, null != m.m_contactList && (m.m_contactList.prev = f.m_nodeA), m.m_contactList = f.m_nodeA, f.m_nodeB.contact = f, f.m_nodeB.other = m, f.m_nodeB.prev = null, f.m_nodeB.next = k.m_contactList, null != k.m_contactList && (k.m_contactList.prev = f.m_nodeB), k.m_contactList = f.m_nodeB, ++this.m_world.m_contactCount)
        }
    };
    M.prototype.FindNewContacts = function() {
        this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair))
    };
    M.prototype.Destroy = function(a) {
        var c = a.GetFixtureA(),
        d = a.GetFixtureB(),
        c = c.GetBody(),
        d = d.GetBody();
        a.IsTouching() && this.m_contactListener.EndContact(a);
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a.m_next && (a.m_next.m_prev = a.m_prev);
        a == this.m_world.m_contactList && (this.m_world.m_contactList = a.m_next);
        a.m_nodeA.prev && (a.m_nodeA.prev.next = a.m_nodeA.next);
        a.m_nodeA.next && (a.m_nodeA.next.prev = a.m_nodeA.prev);
        a.m_nodeA == c.m_contactList && (c.m_contactList = a.m_nodeA.next);
        a.m_nodeB.prev && (a.m_nodeB.prev.next = a.m_nodeB.next);
        a.m_nodeB.next && (a.m_nodeB.next.prev = a.m_nodeB.prev);
        a.m_nodeB == d.m_contactList && (d.m_contactList = a.m_nodeB.next);
        this.m_contactFactory.Destroy(a); --this.m_contactCount
    };
    M.prototype.Collide = function() {
        for (var a = this.m_world.m_contactList; a;) {
            var c = a.GetFixtureA(),
            d = a.GetFixtureB(),
            e = c.GetBody(),
            m = d.GetBody();
            if (0 == e.IsAwake() && 0 == m.IsAwake()) a = a.GetNext();
            else {
                if (a.m_flags & x.e_filterFlag) {
                    if (0 == m.ShouldCollide(e)) {
                        c = a;
                        a = c.GetNext();
                        this.Destroy(c);
                        continue
                    }
                    if (0 == this.m_contactFilter.ShouldCollide(c, d)) {
                        c = a;
                        a = c.GetNext();
                        this.Destroy(c);
                        continue
                    }
                    a.m_flags &= ~x.e_filterFlag
                }
                0 == this.m_broadPhase.TestOverlap(c.m_proxy, d.m_proxy) ? (c = a, a = c.GetNext(), this.Destroy(c)) : (a.Update(this.m_contactListener), a = a.GetNext())
            }
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactManager.s_evalCP = new h
    });
    D.b2DebugDraw = function() {};
    D.prototype.b2DebugDraw = function() {};
    D.prototype.SetFlags = function(a) {};
    D.prototype.GetFlags = function() {};
    D.prototype.AppendFlags = function(a) {};
    D.prototype.ClearFlags = function(a) {};
    D.prototype.SetSprite = function(a) {};
    D.prototype.GetSprite = function() {};
    D.prototype.SetDrawScale = function(a) {};
    D.prototype.GetDrawScale = function() {};
    D.prototype.SetLineThickness = function(a) {};
    D.prototype.GetLineThickness = function() {};
    D.prototype.SetAlpha = function(a) {};
    D.prototype.GetAlpha = function() {};
    D.prototype.SetFillAlpha = function(a) {};
    D.prototype.GetFillAlpha = function() {};
    D.prototype.SetXFormScale = function(a) {};
    D.prototype.GetXFormScale = function() {};
    D.prototype.DrawPolygon = function(a, c, d) {};
    D.prototype.DrawSolidPolygon = function(a, c, d) {};
    D.prototype.DrawCircle = function(a, c, d) {};
    D.prototype.DrawSolidCircle = function(a, c, d, e) {};
    D.prototype.DrawSegment = function(a, c, d) {};
    D.prototype.DrawTransform = function(a) {};
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
        Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
        Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
        Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
        Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
        Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32
    });
    P.b2DestructionListener = function() {};
    P.prototype.SayGoodbyeJoint = function(a) {};
    P.prototype.SayGoodbyeFixture = function(a) {};
    H.b2FilterData = function() {
        this.categoryBits = 1;
        this.maskBits = 65535;
        this.groupIndex = 0
    };
    H.prototype.Copy = function() {
        var a = new H;
        a.categoryBits = this.categoryBits;
        a.maskBits = this.maskBits;
        a.groupIndex = this.groupIndex;
        return a
    };
    L.b2Fixture = function() {
        this.m_filter = new H
    };
    L.prototype.GetType = function() {
        return this.m_shape.GetType()
    };
    L.prototype.GetShape = function() {
        return this.m_shape
    };
    L.prototype.SetSensor = function(a) {
        if (this.m_isSensor != a && (this.m_isSensor = a, null != this.m_body)) for (a = this.m_body.GetContactList(); a;) {
            var c = a.contact,
            d = c.GetFixtureA(),
            e = c.GetFixtureB();
            d != this && e != this || c.SetSensor(d.IsSensor() || e.IsSensor());
            a = a.next
        }
    };
    L.prototype.IsSensor = function() {
        return this.m_isSensor
    };
    L.prototype.SetFilterData = function(a) {
        this.m_filter = a.Copy();
        if (!this.m_body) for (a = this.m_body.GetContactList(); a;) {
            var c = a.contact,
            d = c.GetFixtureA(),
            e = c.GetFixtureB();
            d != this && e != this || c.FlagForFiltering();
            a = a.next
        }
    };
    L.prototype.GetFilterData = function() {
        return this.m_filter.Copy()
    };
    L.prototype.GetBody = function() {
        return this.m_body
    };
    L.prototype.GetNext = function() {
        return this.m_next
    };
    L.prototype.GetUserData = function() {
        return this.m_userData
    };
    L.prototype.SetUserData = function(a) {
        this.m_userData = a
    };
    L.prototype.TestPoint = function(a) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), a)
    };
    L.prototype.RayCast = function(a, c) {
        return this.m_shape.RayCast(a, c, this.m_body.GetTransform())
    };
    L.prototype.GetMassData = function(a) {
        void 0 === a && (a = null);
        null == a && (a = new w);
        this.m_shape.ComputeMass(a, this.m_density);
        return a
    };
    L.prototype.SetDensity = function(a) {
        void 0 === a && (a = 0);
        this.m_density = a
    };
    L.prototype.GetDensity = function() {
        return this.m_density
    };
    L.prototype.GetFriction = function() {
        return this.m_friction
    };
    L.prototype.SetFriction = function(a) {
        void 0 === a && (a = 0);
        this.m_friction = a
    };
    L.prototype.GetRestitution = function() {
        return this.m_restitution
    };
    L.prototype.SetRestitution = function(a) {
        void 0 === a && (a = 0);
        this.m_restitution = a
    };
    L.prototype.GetAABB = function() {
        return this.m_aabb
    };
    L.prototype.b2Fixture = function() {
        this.m_aabb = new l;
        this.m_shape = this.m_next = this.m_body = this.m_userData = null;
        this.m_restitution = this.m_friction = this.m_density = 0
    };
    L.prototype.Create = function(a, c, d) {
        this.m_userData = d.userData;
        this.m_friction = d.friction;
        this.m_restitution = d.restitution;
        this.m_body = a;
        this.m_next = null;
        this.m_filter = d.filter.Copy();
        this.m_isSensor = d.isSensor;
        this.m_shape = d.shape.Copy();
        this.m_density = d.density
    };
    L.prototype.Destroy = function() {
        this.m_shape = null
    };
    L.prototype.CreateProxy = function(a, c) {
        this.m_shape.ComputeAABB(this.m_aabb, c);
        this.m_proxy = a.CreateProxy(this.m_aabb, this)
    };
    L.prototype.DestroyProxy = function(a) {
        null != this.m_proxy && (a.DestroyProxy(this.m_proxy), this.m_proxy = null)
    };
    L.prototype.Synchronize = function(c, d, e) {
        if (this.m_proxy) {
            var m = new l,
            k = new l;
            this.m_shape.ComputeAABB(m, d);
            this.m_shape.ComputeAABB(k, e);
            this.m_aabb.Combine(m, k);
            d = a.SubtractVV(e.position, d.position);
            c.MoveProxy(this.m_proxy, this.m_aabb, d)
        }
    };
    Q.b2FixtureDef = function() {
        this.filter = new H
    };
    Q.prototype.b2FixtureDef = function() {
        this.userData = this.shape = null;
        this.friction = .2;
        this.density = this.restitution = 0;
        this.filter.categoryBits = 1;
        this.filter.maskBits = 65535;
        this.filter.groupIndex = 0;
        this.isSensor = !1
    };
    N.b2Island = function() {};
    N.prototype.b2Island = function() {
        this.m_bodies = new Vector2;
        this.m_contacts = new Vector2;
        this.m_joints = new Vector2
    };
    N.prototype.Initialize = function(a, c, d, e, m, k) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var f = 0;
        this.m_bodyCapacity = a;
        this.m_contactCapacity = c;
        this.m_jointCapacity = d;
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        this.m_allocator = e;
        this.m_listener = m;
        this.m_contactSolver = k;
        for (f = this.m_bodies.length; f < a; f++) this.m_bodies[f] = null;
        for (f = this.m_contacts.length; f < c; f++) this.m_contacts[f] = null;
        for (f = this.m_joints.length; f < d; f++) this.m_joints[f] = null
    };
    N.prototype.Clear = function() {
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0
    };
    N.prototype.Solve = function(c, d, e) {
        for (var m = 0,
        k = 0,
        f, m = 0; m < this.m_bodyCount; ++m) k = this.m_bodies[m],
        k.GetType() == n.b2_dynamicBody && (k.m_linearVelocity.x += c.dt * (d.x + k.m_invMass * k.m_force.x), k.m_linearVelocity.y += c.dt * (d.y + k.m_invMass * k.m_force.y), k.m_angularVelocity += c.dt * k.m_invI * k.m_torque, k.m_linearVelocity.Multiply(a.Clamp(1 - c.dt * k.m_linearDamping, 0, 1)), k.m_angularVelocity *= a.Clamp(1 - c.dt * k.m_angularDamping, 0, 1));
        this.m_contactSolver.Initialize(c, this.m_contacts, this.m_contactCount, this.m_allocator);
        d = this.m_contactSolver;
        d.InitVelocityConstraints(c);
        for (m = 0; m < this.m_jointCount; ++m) f = this.m_joints[m],
        f.InitVelocityConstraints(c);
        for (m = 0; m < c.velocityIterations; ++m) {
            for (k = 0; k < this.m_jointCount; ++k) f = this.m_joints[k],
            f.SolveVelocityConstraints(c);
            d.SolveVelocityConstraints()
        }
        for (m = 0; m < this.m_jointCount; ++m) f = this.m_joints[m],
        f.FinalizeVelocityConstraints();
        d.FinalizeVelocityConstraints();
        for (m = 0; m < this.m_bodyCount; ++m) if (k = this.m_bodies[m], k.GetType() != n.b2_staticBody) {
            var u = c.dt * k.m_linearVelocity.x,
            x = c.dt * k.m_linearVelocity.y;
            u * u + x * x > g.b2_maxTranslationSquared && (k.m_linearVelocity.Normalize(), k.m_linearVelocity.x = k.m_linearVelocity.x * g.b2_maxTranslation * c.inv_dt, k.m_linearVelocity.y = k.m_linearVelocity.y * g.b2_maxTranslation * c.inv_dt);
            u = c.dt * k.m_angularVelocity;
            u * u > g.b2_maxRotationSquared && (k.m_angularVelocity = 0 > k.m_angularVelocity ? -g.b2_maxRotation * c.inv_dt: g.b2_maxRotation * c.inv_dt);
            k.m_sweep.c0.SetV(k.m_sweep.c);
            k.m_sweep.a0 = k.m_sweep.a;
            k.m_sweep.c.x += c.dt * k.m_linearVelocity.x;
            k.m_sweep.c.y += c.dt * k.m_linearVelocity.y;
            k.m_sweep.a += c.dt * k.m_angularVelocity;
            k.SynchronizeTransform()
        }
        for (m = 0; m < c.positionIterations; ++m) {
            u = d.SolvePositionConstraints(g.b2_contactBaumgarte);
            x = !0;
            for (k = 0; k < this.m_jointCount; ++k) f = this.m_joints[k],
            f = f.SolvePositionConstraints(g.b2_contactBaumgarte),
            x = x && f;
            if (u && x) break
        }
        this.Report(d.m_constraints);
        if (e) {
            e = Number.MAX_VALUE;
            d = g.b2_linearSleepTolerance * g.b2_linearSleepTolerance;
            u = g.b2_angularSleepTolerance * g.b2_angularSleepTolerance;
            for (m = 0; m < this.m_bodyCount; ++m) k = this.m_bodies[m],
            k.GetType() != n.b2_staticBody && (0 == (k.m_flags & n.e_allowSleepFlag) && (e = k.m_sleepTime = 0), 0 == (k.m_flags & n.e_allowSleepFlag) || k.m_angularVelocity * k.m_angularVelocity > u || a.Dot(k.m_linearVelocity, k.m_linearVelocity) > d ? e = k.m_sleepTime = 0 : (k.m_sleepTime += c.dt, e = a.Min(e, k.m_sleepTime)));
            if (e >= g.b2_timeToSleep) for (m = 0; m < this.m_bodyCount; ++m) k = this.m_bodies[m],
            k.SetAwake(!1)
        }
    };
    N.prototype.SolveTOI = function(a) {
        var c = 0,
        d = 0;
        this.m_contactSolver.Initialize(a, this.m_contacts, this.m_contactCount, this.m_allocator);
        for (var e = this.m_contactSolver,
        c = 0; c < this.m_jointCount; ++c) this.m_joints[c].InitVelocityConstraints(a);
        for (c = 0; c < a.velocityIterations; ++c) for (e.SolveVelocityConstraints(), d = 0; d < this.m_jointCount; ++d) this.m_joints[d].SolveVelocityConstraints(a);
        for (c = 0; c < this.m_bodyCount; ++c) if (d = this.m_bodies[c], d.GetType() != n.b2_staticBody) {
            var m = a.dt * d.m_linearVelocity.x,
            k = a.dt * d.m_linearVelocity.y;
            m * m + k * k > g.b2_maxTranslationSquared && (d.m_linearVelocity.Normalize(), d.m_linearVelocity.x = d.m_linearVelocity.x * g.b2_maxTranslation * a.inv_dt, d.m_linearVelocity.y = d.m_linearVelocity.y * g.b2_maxTranslation * a.inv_dt);
            m = a.dt * d.m_angularVelocity;
            m * m > g.b2_maxRotationSquared && (d.m_angularVelocity = 0 > d.m_angularVelocity ? -g.b2_maxRotation * a.inv_dt: g.b2_maxRotation * a.inv_dt);
            d.m_sweep.c0.SetV(d.m_sweep.c);
            d.m_sweep.a0 = d.m_sweep.a;
            d.m_sweep.c.x += a.dt * d.m_linearVelocity.x;
            d.m_sweep.c.y += a.dt * d.m_linearVelocity.y;
            d.m_sweep.a += a.dt * d.m_angularVelocity;
            d.SynchronizeTransform()
        }
        for (c = 0; c < a.positionIterations; ++c) {
            m = e.SolvePositionConstraints(.75);
            k = !0;
            for (d = 0; d < this.m_jointCount; ++d) var f = this.m_joints[d].SolvePositionConstraints(g.b2_contactBaumgarte),
            k = k && f;
            if (m && k) break
        }
        this.Report(e.m_constraints)
    };
    N.prototype.Report = function(a) {
        if (null != this.m_listener) for (var c = 0; c < this.m_contactCount; ++c) {
            for (var d = this.m_contacts[c], e = a[c], m = 0; m < e.pointCount; ++m) N.s_impulse.normalImpulses[m] = e.points[m].normalImpulse,
            N.s_impulse.tangentImpulses[m] = e.points[m].tangentImpulse;
            this.m_listener.PostSolve(d, N.s_impulse)
        }
    };
    N.prototype.AddBody = function(a) {
        a.m_islandIndex = this.m_bodyCount;
        this.m_bodies[this.m_bodyCount++] = a
    };
    N.prototype.AddContact = function(a) {
        this.m_contacts[this.m_contactCount++] = a
    };
    N.prototype.AddJoint = function(a) {
        this.m_joints[this.m_jointCount++] = a
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2Island.s_impulse = new I
    });
    m.b2TimeStep = function() {};
    m.prototype.Set = function(a) {
        this.dt = a.dt;
        this.inv_dt = a.inv_dt;
        this.positionIterations = a.positionIterations;
        this.velocityIterations = a.velocityIterations;
        this.warmStarting = a.warmStarting
    };
    k.b2World = function() {
        this.s_stack = new Vector2;
        this.m_contactManager = new M;
        this.m_contactSolver = new E;
        this.m_island = new N
    };
    k.prototype.b2World = function(a, c) {
        this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
        this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        k.m_warmStarting = !0;
        k.m_continuousPhysics = !0;
        this.m_allowSleep = c;
        this.m_gravity = a;
        this.m_inv_dt0 = 0;
        this.m_contactManager.m_world = this;
        var d = new F;
        this.m_groundBody = this.CreateBody(d)
    };
    k.prototype.SetDestructionListener = function(a) {
        this.m_destructionListener = a
    };
    k.prototype.SetContactFilter = function(a) {
        this.m_contactManager.m_contactFilter = a
    };
    k.prototype.SetContactListener = function(a) {
        this.m_contactManager.m_contactListener = a
    };
    k.prototype.SetDebugDraw = function(a) {
        this.m_debugDraw = a
    };
    k.prototype.SetBroadPhase = function(a) {
        var c = this.m_contactManager.m_broadPhase;
        this.m_contactManager.m_broadPhase = a;
        for (var d = this.m_bodyList; d; d = d.m_next) for (var e = d.m_fixtureList; e; e = e.m_next) e.m_proxy = a.CreateProxy(c.GetFatAABB(e.m_proxy), e)
    };
    k.prototype.Validate = function() {
        this.m_contactManager.m_broadPhase.Validate()
    };
    k.prototype.GetProxyCount = function() {
        return this.m_contactManager.m_broadPhase.GetProxyCount()
    };
    k.prototype.CreateBody = function(a) {
        if (1 == this.IsLocked()) return null;
        a = new n(a, this);
        a.m_prev = null;
        if (a.m_next = this.m_bodyList) this.m_bodyList.m_prev = a;
        this.m_bodyList = a; ++this.m_bodyCount;
        return a
    };
    k.prototype.DestroyBody = function(a) {
        if (1 != this.IsLocked()) {
            for (var c = a.m_jointList; c;) {
                var d = c,
                c = c.next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(d.joint);
                this.DestroyJoint(d.joint)
            }
            for (c = a.m_controllerList; c;) d = c,
            c = c.nextController,
            d.controller.RemoveBody(a);
            for (c = a.m_contactList; c;) d = c,
            c = c.next,
            this.m_contactManager.Destroy(d.contact);
            a.m_contactList = null;
            for (c = a.m_fixtureList; c;) d = c,
            c = c.m_next,
            this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(d),
            d.DestroyProxy(this.m_contactManager.m_broadPhase),
            d.Destroy();
            a.m_fixtureList = null;
            a.m_fixtureCount = 0;
            a.m_prev && (a.m_prev.m_next = a.m_next);
            a.m_next && (a.m_next.m_prev = a.m_prev);
            a == this.m_bodyList && (this.m_bodyList = a.m_next); --this.m_bodyCount
        }
    };
    k.prototype.CreateJoint = function(a) {
        var c = O.Create(a, null);
        c.m_prev = null;
        if (c.m_next = this.m_jointList) this.m_jointList.m_prev = c;
        this.m_jointList = c; ++this.m_jointCount;
        c.m_edgeA.joint = c;
        c.m_edgeA.other = c.m_bodyB;
        c.m_edgeA.prev = null;
        if (c.m_edgeA.next = c.m_bodyA.m_jointList) c.m_bodyA.m_jointList.prev = c.m_edgeA;
        c.m_bodyA.m_jointList = c.m_edgeA;
        c.m_edgeB.joint = c;
        c.m_edgeB.other = c.m_bodyA;
        c.m_edgeB.prev = null;
        if (c.m_edgeB.next = c.m_bodyB.m_jointList) c.m_bodyB.m_jointList.prev = c.m_edgeB;
        c.m_bodyB.m_jointList = c.m_edgeB;
        var d = a.bodyA,
        e = a.bodyB;
        if (0 == a.collideConnected) for (a = e.GetContactList(); a;) a.other == d && a.contact.FlagForFiltering(),
        a = a.next;
        return c
    };
    k.prototype.DestroyJoint = function(a) {
        var c = a.m_collideConnected;
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a.m_next && (a.m_next.m_prev = a.m_prev);
        a == this.m_jointList && (this.m_jointList = a.m_next);
        var d = a.m_bodyA,
        e = a.m_bodyB;
        d.SetAwake(!0);
        e.SetAwake(!0);
        a.m_edgeA.prev && (a.m_edgeA.prev.next = a.m_edgeA.next);
        a.m_edgeA.next && (a.m_edgeA.next.prev = a.m_edgeA.prev);
        a.m_edgeA == d.m_jointList && (d.m_jointList = a.m_edgeA.next);
        a.m_edgeA.prev = null;
        a.m_edgeA.next = null;
        a.m_edgeB.prev && (a.m_edgeB.prev.next = a.m_edgeB.next);
        a.m_edgeB.next && (a.m_edgeB.next.prev = a.m_edgeB.prev);
        a.m_edgeB == e.m_jointList && (e.m_jointList = a.m_edgeB.next);
        a.m_edgeB.prev = null;
        a.m_edgeB.next = null;
        O.Destroy(a, null); --this.m_jointCount;
        if (0 == c) for (a = e.GetContactList(); a;) a.other == d && a.contact.FlagForFiltering(),
        a = a.next
    };
    k.prototype.AddController = function(a) {
        a.m_next = this.m_controllerList;
        a.m_prev = null;
        this.m_controllerList = a;
        a.m_world = this;
        this.m_controllerCount++;
        return a
    };
    k.prototype.RemoveController = function(a) {
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a.m_next && (a.m_next.m_prev = a.m_prev);
        this.m_controllerList == a && (this.m_controllerList = a.m_next);
        this.m_controllerCount--
    };
    k.prototype.CreateController = function(a) {
        if (a.m_world != this) throw Error("Controller can only be a member of one world");
        a.m_next = this.m_controllerList;
        a.m_prev = null;
        this.m_controllerList && (this.m_controllerList.m_prev = a);
        this.m_controllerList = a; ++this.m_controllerCount;
        a.m_world = this;
        return a
    };
    k.prototype.DestroyController = function(a) {
        a.Clear();
        a.m_next && (a.m_next.m_prev = a.m_prev);
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a == this.m_controllerList && (this.m_controllerList = a.m_next); --this.m_controllerCount
    };
    k.prototype.SetWarmStarting = function(a) {
        k.m_warmStarting = a
    };
    k.prototype.SetContinuousPhysics = function(a) {
        k.m_continuousPhysics = a
    };
    k.prototype.GetBodyCount = function() {
        return this.m_bodyCount
    };
    k.prototype.GetJointCount = function() {
        return this.m_jointCount
    };
    k.prototype.GetContactCount = function() {
        return this.m_contactCount
    };
    k.prototype.SetGravity = function(a) {
        this.m_gravity = a
    };
    k.prototype.GetGravity = function() {
        return this.m_gravity
    };
    k.prototype.GetGroundBody = function() {
        return this.m_groundBody
    };
    k.prototype.Step = function(a, c, d) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        this.m_flags & k.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~k.e_newFixture);
        this.m_flags |= k.e_locked;
        var e = k.s_timestep2;
        e.dt = a;
        e.velocityIterations = c;
        e.positionIterations = d;
        e.inv_dt = 0 < a ? 1 / a: 0;
        e.dtRatio = this.m_inv_dt0 * a;
        e.warmStarting = k.m_warmStarting;
        this.m_contactManager.Collide();
        0 < e.dt && this.Solve(e);
        k.m_continuousPhysics && 0 < e.dt && this.SolveTOI(e);
        0 < e.dt && (this.m_inv_dt0 = e.inv_dt);
        this.m_flags &= ~k.e_locked
    };
    k.prototype.ClearForces = function() {
        for (var a = this.m_bodyList; a; a = a.m_next) a.m_force.SetZero(),
        a.m_torque = 0
    };
    k.prototype.DrawDebugData = function() {
        if (null != this.m_debugDraw) {
            var a = this.m_debugDraw.GetFlags(),
            c,
            d,
            m;
            new e;
            new e;
            new e;
            var g;
            new l;
            new l;
            g = [new e, new e, new e, new e];
            var u = new f(0, 0, 0);
            if (a & D.e_shapeBit) for (c = this.m_bodyList; c; c = c.m_next) for (g = c.m_xf, d = c.GetFixtureList(); d; d = d.m_next) m = d.GetShape(),
            0 == c.IsActive() ? u.Set(.5, .5, .3) : c.GetType() == n.b2_staticBody ? u.Set(.5, .9, .5) : c.GetType() == n.b2_kinematicBody ? u.Set(.5, .5, .9) : 0 == c.IsAwake() ? u.Set(.6, .6, .6) : u.Set(.9, .7, .7),
            this.DrawShape(m, g, u);
            if (a & D.e_jointBit) for (c = this.m_jointList; c; c = c.m_next) this.DrawJoint(c);
            if (a & D.e_controllerBit) for (c = this.m_controllerList; c; c = c.m_next) c.Draw(this.m_debugDraw);
            if (a & D.e_pairBit) for (u.Set(.3, .9, .9), c = this.m_contactManager.m_contactList; c; c = c.GetNext()) m = c.GetFixtureA(),
            d = c.GetFixtureB(),
            m = m.GetAABB().GetCenter(),
            d = d.GetAABB().GetCenter(),
            this.m_debugDraw.DrawSegment(m, d, u);
            if (a & D.e_aabbBit) for (m = this.m_contactManager.m_broadPhase, g = [new e, new e, new e, new e], c = this.m_bodyList; c; c = c.GetNext()) if (0 != c.IsActive()) for (d = c.GetFixtureList(); d; d = d.GetNext()) {
                var x = m.GetFatAABB(d.m_proxy);
                g[0].Set(x.lowerBound.x, x.lowerBound.y);
                g[1].Set(x.upperBound.x, x.lowerBound.y);
                g[2].Set(x.upperBound.x, x.upperBound.y);
                g[3].Set(x.lowerBound.x, x.upperBound.y);
                this.m_debugDraw.DrawPolygon(g, 4, u)
            }
            if (a & D.e_centerOfMassBit) for (c = this.m_bodyList; c; c = c.m_next) g = k.s_xf,
            g.R = c.m_xf.R,
            g.position = c.GetWorldCenter(),
            this.m_debugDraw.DrawTransform(g)
        }
    };
    k.prototype.QueryAABB = function(a, c) {
        var d = this.m_contactManager.m_broadPhase;
        d.Query(function(c) {
            return a(d.GetUserData(c))
        },
        c)
    };
    k.prototype.QueryShape = function(a, c, e) {
        void 0 === e && (e = null);
        null == e && (e = new d, e.SetIdentity());
        var m = this.m_contactManager.m_broadPhase,
        k = new l;
        c.ComputeAABB(k, e);
        m.Query(function(d) {
            d = m.GetUserData(d) instanceof L ? m.GetUserData(d) : null;
            return K.TestOverlap(c, e, d.GetShape(), d.GetBody().GetTransform()) ? a(d) : !0
        },
        k)
    };
    k.prototype.QueryPoint = function(a, c) {
        var d = this.m_contactManager.m_broadPhase,
        e = new l;
        e.lowerBound.Set(c.x - g.b2_linearSlop, c.y - g.b2_linearSlop);
        e.upperBound.Set(c.x + g.b2_linearSlop, c.y + g.b2_linearSlop);
        d.Query(function(e) {
            e = d.GetUserData(e) instanceof L ? d.GetUserData(e) : null;
            return e.TestPoint(c) ? a(e) : !0
        },
        e)
    };
    k.prototype.RayCast = function(a, c, d) {
        var m = this.m_contactManager.m_broadPhase,
        k = new v,
        f = new z(c, d);
        m.RayCast(function(f, g) {
            var u = m.GetUserData(g),
            u = u instanceof L ? u: null;
            if (u.RayCast(k, f)) {
                var x = k.fraction,
                C = new e((1 - x) * c.x + x * d.x, (1 - x) * c.y + x * d.y);
                return a(u, C, k.normal, x)
            }
            return f.maxFraction
        },
        f)
    };
    k.prototype.RayCastOne = function(a, c) {
        var d;
        this.RayCast(function(a, c, e, m) {
            void 0 === m && (m = 0);
            d = a;
            return m
        },
        a, c);
        return d
    };
    k.prototype.RayCastAll = function(a, c) {
        var d = new Vector2;
        this.RayCast(function(a, c, e, m) {
            d[d.length] = a;
            return 1
        },
        a, c);
        return d
    };
    k.prototype.GetBodyList = function() {
        return this.m_bodyList
    };
    k.prototype.GetJointList = function() {
        return this.m_jointList
    };
    k.prototype.GetContactList = function() {
        return this.m_contactList
    };
    k.prototype.IsLocked = function() {
        return 0 < (this.m_flags & k.e_locked)
    };
    k.prototype.Solve = function(a) {
        for (var c, d = this.m_controllerList; d; d = d.m_next) d.Step(a);
        d = this.m_island;
        d.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~n.e_islandFlag;
        for (var e = this.m_contactList; e; e = e.m_next) e.m_flags &= ~x.e_islandFlag;
        for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
        parseInt(this.m_bodyCount);
        for (var e = this.s_stack,
        m = this.m_bodyList; m; m = m.m_next) if (! (m.m_flags & n.e_islandFlag) && 0 != m.IsAwake() && 0 != m.IsActive() && m.GetType() != n.b2_staticBody) {
            d.Clear();
            var k = 0;
            e[k++] = m;
            for (m.m_flags |= n.e_islandFlag; 0 < k;) if (c = e[--k], d.AddBody(c), 0 == c.IsAwake() && c.SetAwake(!0), c.GetType() != n.b2_staticBody) {
                for (var f, g = c.m_contactList; g; g = g.next) g.contact.m_flags & x.e_islandFlag || 1 == g.contact.IsSensor() || 0 == g.contact.IsEnabled() || 0 == g.contact.IsTouching() || (d.AddContact(g.contact), g.contact.m_flags |= x.e_islandFlag, f = g.other, f.m_flags & n.e_islandFlag || (e[k++] = f, f.m_flags |= n.e_islandFlag));
                for (c = c.m_jointList; c; c = c.next) 1 != c.joint.m_islandFlag && (f = c.other, 0 != f.IsActive() && (d.AddJoint(c.joint), c.joint.m_islandFlag = !0, f.m_flags & n.e_islandFlag || (e[k++] = f, f.m_flags |= n.e_islandFlag)))
            }
            d.Solve(a, this.m_gravity, this.m_allowSleep);
            for (k = 0; k < d.m_bodyCount; ++k) c = d.m_bodies[k],
            c.GetType() == n.b2_staticBody && (c.m_flags &= ~n.e_islandFlag)
        }
        for (k = 0; k < e.length && e[k]; ++k) e[k] = null;
        for (c = this.m_bodyList; c; c = c.m_next) 0 != c.IsAwake() && 0 != c.IsActive() && c.GetType() != n.b2_staticBody && c.SynchronizeFixtures();
        this.m_contactManager.FindNewContacts()
    };
    k.prototype.SolveTOI = function(a) {
        var c, d, e, m = this.m_island;
        m.Initialize(this.m_bodyCount, g.b2_maxTOIContactsPerIsland, g.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        var f = k.s_queue;
        for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~n.e_islandFlag,
        c.m_sweep.t0 = 0;
        for (e = this.m_contactList; e; e = e.m_next) e.m_flags &= ~ (x.e_toiFlag | x.e_islandFlag);
        for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
        for (;;) {
            var u = null,
            C = 1;
            for (e = this.m_contactList; e; e = e.m_next) if (1 != e.IsSensor() && 0 != e.IsEnabled() && 0 != e.IsContinuous()) {
                c = 1;
                if (e.m_flags & x.e_toiFlag) c = e.m_toi;
                else {
                    c = e.m_fixtureA;
                    d = e.m_fixtureB;
                    c = c.m_body;
                    d = d.m_body;
                    if (! (c.GetType() == n.b2_dynamicBody && 0 != c.IsAwake() || d.GetType() == n.b2_dynamicBody && 0 != d.IsAwake())) continue;
                    var E = c.m_sweep.t0;
                    c.m_sweep.t0 < d.m_sweep.t0 ? (E = d.m_sweep.t0, c.m_sweep.Advance(E)) : d.m_sweep.t0 < c.m_sweep.t0 && (E = c.m_sweep.t0, d.m_sweep.Advance(E));
                    c = e.ComputeTOI(c.m_sweep, d.m_sweep);
                    g.b2Assert(0 <= c && 1 >= c);
                    0 < c && 1 > c && (c = (1 - c) * E + c, 1 < c && (c = 1));
                    e.m_toi = c;
                    e.m_flags |= x.e_toiFlag
                }
                Number.MIN_VALUE < c && c < C && (u = e, C = c)
            }
            if (null == u || 1 - 100 * Number.MIN_VALUE < C) break;
            c = u.m_fixtureA;
            d = u.m_fixtureB;
            c = c.m_body;
            d = d.m_body;
            k.s_backupA.Set(c.m_sweep);
            k.s_backupB.Set(d.m_sweep);
            c.Advance(C);
            d.Advance(C);
            u.Update(this.m_contactManager.m_contactListener);
            u.m_flags &= ~x.e_toiFlag;
            if (1 == u.IsSensor() || 0 == u.IsEnabled()) c.m_sweep.Set(k.s_backupA),
            d.m_sweep.Set(k.s_backupB),
            c.SynchronizeTransform(),
            d.SynchronizeTransform();
            else if (0 != u.IsTouching()) {
                c.GetType() != n.b2_dynamicBody && (c = d);
                m.Clear();
                u = e = 0;
                f[e + u++] = c;
                for (c.m_flags |= n.e_islandFlag; 0 < u;) if (c = f[e++], --u, m.AddBody(c), 0 == c.IsAwake() && c.SetAwake(!0), c.GetType() == n.b2_dynamicBody) {
                    for (d = c.m_contactList; d && m.m_contactCount != m.m_contactCapacity; d = d.next) d.contact.m_flags & x.e_islandFlag || 1 == d.contact.IsSensor() || 0 == d.contact.IsEnabled() || 0 == d.contact.IsTouching() || (m.AddContact(d.contact), d.contact.m_flags |= x.e_islandFlag, E = d.other, E.m_flags & n.e_islandFlag || (E.GetType() != n.b2_staticBody && (E.Advance(C), E.SetAwake(!0)), f[e + u] = E, ++u, E.m_flags |= n.e_islandFlag));
                    for (c = c.m_jointList; c; c = c.next) m.m_jointCount != m.m_jointCapacity && 1 != c.joint.m_islandFlag && (E = c.other, 0 != E.IsActive() && (m.AddJoint(c.joint), c.joint.m_islandFlag = !0, E.m_flags & n.e_islandFlag || (E.GetType() != n.b2_staticBody && (E.Advance(C), E.SetAwake(!0)), f[e + u] = E, ++u, E.m_flags |= n.e_islandFlag)))
                }
                e = k.s_timestep;
                e.warmStarting = !1;
                e.dt = (1 - C) * a.dt;
                e.inv_dt = 1 / e.dt;
                e.dtRatio = 0;
                e.velocityIterations = a.velocityIterations;
                e.positionIterations = a.positionIterations;
                m.SolveTOI(e);
                for (C = C = 0; C < m.m_bodyCount; ++C) if (c = m.m_bodies[C], c.m_flags &= ~n.e_islandFlag, 0 != c.IsAwake() && c.GetType() == n.b2_dynamicBody) for (c.SynchronizeFixtures(), d = c.m_contactList; d; d = d.next) d.contact.m_flags &= ~x.e_toiFlag;
                for (C = 0; C < m.m_contactCount; ++C) e = m.m_contacts[C],
                e.m_flags &= ~ (x.e_toiFlag | x.e_islandFlag);
                for (C = 0; C < m.m_jointCount; ++C) e = m.m_joints[C],
                e.m_islandFlag = !1;
                this.m_contactManager.FindNewContacts()
            }
        }
    };
    k.prototype.DrawJoint = function(a) {
        var c = a.GetBodyA(),
        d = a.GetBodyB(),
        e = c.m_xf.position,
        m = d.m_xf.position,
        f = a.GetAnchorA(),
        g = a.GetAnchorB(),
        u = k.s_jointColor;
        switch (a.m_type) {
        case O.e_distanceJoint:
            this.m_debugDraw.DrawSegment(f, g, u);
            break;
        case O.e_pulleyJoint:
            c = a instanceof C ? a: null;
            a = c.GetGroundAnchorA();
            c = c.GetGroundAnchorB();
            this.m_debugDraw.DrawSegment(a, f, u);
            this.m_debugDraw.DrawSegment(c, g, u);
            this.m_debugDraw.DrawSegment(a, c, u);
            break;
        case O.e_mouseJoint:
            this.m_debugDraw.DrawSegment(f, g, u);
            break;
        default:
            c != this.m_groundBody && this.m_debugDraw.DrawSegment(e, f, u),
            this.m_debugDraw.DrawSegment(f, g, u),
            d != this.m_groundBody && this.m_debugDraw.DrawSegment(m, g, u)
        }
    };
    k.prototype.DrawShape = function(c, d, e) {
        switch (c.m_type) {
        case K.e_circleShape:
            var m = c instanceof t ? c: null;
            c = a.MulX(d, m.m_p);
            this.m_debugDraw.DrawSolidCircle(c, m.m_radius, d.R.col1, e);
            break;
        case K.e_polygonShape:
            m = 0;
            m = c instanceof B ? c: null;
            c = parseInt(m.GetVertexCount());
            for (var k = m.GetVertices(), f = new Vector2(c), m = 0; m < c; ++m) f[m] = a.MulX(d, k[m]);
            this.m_debugDraw.DrawSolidPolygon(f, c, e);
            break;
        case K.e_edgeShape:
            m = c instanceof y ? c: null,
            this.m_debugDraw.DrawSegment(a.MulX(d, m.GetVertex1()), a.MulX(d, m.GetVertex2()), e)
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2World.s_timestep2 = new m;
        Box2D.Dynamics.b2World.s_xf = new d;
        Box2D.Dynamics.b2World.s_backupA = new c;
        Box2D.Dynamics.b2World.s_backupB = new c;
        Box2D.Dynamics.b2World.s_timestep = new m;
        Box2D.Dynamics.b2World.s_queue = new Vector2;
        Box2D.Dynamics.b2World.s_jointColor = new f(.5, .8, .8);
        Box2D.Dynamics.b2World.e_newFixture = 1;
        Box2D.Dynamics.b2World.e_locked = 2
    })
})(); (function() {
    var a = Box2D.Collision.Shapes.b2CircleShape,
    c = Box2D.Collision.Shapes.b2EdgeShape,
    d = Box2D.Collision.Shapes.b2PolygonShape,
    e = Box2D.Collision.Shapes.b2Shape,
    f = Box2D.Dynamics.Contacts.b2CircleContact,
    g = Box2D.Dynamics.Contacts.b2Contact,
    l = Box2D.Dynamics.Contacts.b2ContactConstraint,
    h = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
    q = Box2D.Dynamics.Contacts.b2ContactEdge,
    z = Box2D.Dynamics.Contacts.b2ContactFactory,
    v = Box2D.Dynamics.Contacts.b2ContactRegister,
    t = Box2D.Dynamics.Contacts.b2ContactResult,
    y = Box2D.Dynamics.Contacts.b2ContactSolver,
    w = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
    B = Box2D.Dynamics.Contacts.b2NullContact,
    K = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
    n = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
    F = Box2D.Dynamics.Contacts.b2PolygonContact,
    G = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
    I = Box2D.Dynamics.b2Body,
    J = Box2D.Dynamics.b2TimeStep,
    M = Box2D.Common.b2Settings,
    D = Box2D.Common.Math.b2Mat22,
    P = Box2D.Common.Math.b2Math,
    H = Box2D.Common.Math.b2Vec2,
    L = Box2D.Collision.b2Collision,
    Q = Box2D.Collision.b2ContactID,
    N = Box2D.Collision.b2Manifold,
    m = Box2D.Collision.b2TimeOfImpact,
    k = Box2D.Collision.b2TOIInput,
    x = Box2D.Collision.b2WorldManifold;
    Box2D.inherit(f, Box2D.Dynamics.Contacts.b2Contact);
    f.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    f.b2CircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    f.Create = function(a) {
        return new f
    };
    f.Destroy = function(a, c) {};
    f.prototype.Reset = function(a, c) {
        this.__super.Reset.call(this, a, c)
    };
    f.prototype.Evaluate = function() {
        var c = this.m_fixtureA.GetBody(),
        d = this.m_fixtureB.GetBody();
        L.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape() instanceof a ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof a ? this.m_fixtureB.GetShape() : null, d.m_xf)
    };
    g.b2Contact = function() {
        this.m_nodeA = new q;
        this.m_nodeB = new q;
        this.m_manifold = new N;
        this.m_oldManifold = new N
    };
    g.prototype.GetManifold = function() {
        return this.m_manifold
    };
    g.prototype.GetWorldManifold = function(a) {
        var c = this.m_fixtureA.GetBody(),
        d = this.m_fixtureB.GetBody(),
        e = this.m_fixtureA.GetShape(),
        m = this.m_fixtureB.GetShape();
        a.Initialize(this.m_manifold, c.GetTransform(), e.m_radius, d.GetTransform(), m.m_radius)
    };
    g.prototype.IsTouching = function() {
        return (this.m_flags & g.e_touchingFlag) == g.e_touchingFlag
    };
    g.prototype.IsContinuous = function() {
        return (this.m_flags & g.e_continuousFlag) == g.e_continuousFlag
    };
    g.prototype.SetSensor = function(a) {
        this.m_flags = a ? this.m_flags | g.e_sensorFlag: this.m_flags & ~g.e_sensorFlag
    };
    g.prototype.IsSensor = function() {
        return (this.m_flags & g.e_sensorFlag) == g.e_sensorFlag
    };
    g.prototype.SetEnabled = function(a) {
        this.m_flags = a ? this.m_flags | g.e_enabledFlag: this.m_flags & ~g.e_enabledFlag
    };
    g.prototype.IsEnabled = function() {
        return (this.m_flags & g.e_enabledFlag) == g.e_enabledFlag
    };
    g.prototype.GetNext = function() {
        return this.m_next
    };
    g.prototype.GetFixtureA = function() {
        return this.m_fixtureA
    };
    g.prototype.GetFixtureB = function() {
        return this.m_fixtureB
    };
    g.prototype.FlagForFiltering = function() {
        this.m_flags |= g.e_filterFlag
    };
    g.prototype.b2Contact = function() {};
    g.prototype.Reset = function(a, c) {
        void 0 === a && (a = null);
        void 0 === c && (c = null);
        this.m_flags = g.e_enabledFlag;
        if (a && c) {
            if (a.IsSensor() || c.IsSensor()) this.m_flags |= g.e_sensorFlag;
            var d = a.GetBody(),
            e = c.GetBody();
            if (d.GetType() != I.b2_dynamicBody || d.IsBullet() || e.GetType() != I.b2_dynamicBody || e.IsBullet()) this.m_flags |= g.e_continuousFlag;
            this.m_fixtureA = a;
            this.m_fixtureB = c;
            this.m_manifold.m_pointCount = 0;
            this.m_next = this.m_prev = null;
            this.m_nodeA.contact = null;
            this.m_nodeA.prev = null;
            this.m_nodeA.next = null;
            this.m_nodeA.other = null;
            this.m_nodeB.contact = null;
            this.m_nodeB.prev = null;
            this.m_nodeB.next = null;
            this.m_nodeB.other = null
        } else this.m_fixtureB = this.m_fixtureA = null
    };
    g.prototype.Update = function(a) {
        var c = this.m_oldManifold;
        this.m_oldManifold = this.m_manifold;
        this.m_manifold = c;
        this.m_flags |= g.e_enabledFlag;
        var d = !1,
        c = (this.m_flags & g.e_touchingFlag) == g.e_touchingFlag,
        m = this.m_fixtureA.m_body,
        k = this.m_fixtureB.m_body,
        f = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
        if (this.m_flags & g.e_sensorFlag) f && (d = this.m_fixtureA.GetShape(), f = this.m_fixtureB.GetShape(), m = m.GetTransform(), k = k.GetTransform(), d = e.TestOverlap(d, m, f, k)),
        this.m_manifold.m_pointCount = 0;
        else {
            m.GetType() != I.b2_dynamicBody || m.IsBullet() || k.GetType() != I.b2_dynamicBody || k.IsBullet() ? this.m_flags |= g.e_continuousFlag: this.m_flags &= ~g.e_continuousFlag;
            if (f) for (this.Evaluate(), d = 0 < this.m_manifold.m_pointCount, f = 0; f < this.m_manifold.m_pointCount; ++f) {
                var x = this.m_manifold.m_points[f];
                x.m_normalImpulse = 0;
                x.m_tangentImpulse = 0;
                for (var l = x.m_id,
                h = 0; h < this.m_oldManifold.m_pointCount; ++h) {
                    var n = this.m_oldManifold.m_points[h];
                    if (n.m_id.key == l.key) {
                        x.m_normalImpulse = n.m_normalImpulse;
                        x.m_tangentImpulse = n.m_tangentImpulse;
                        break
                    }
                }
            } else this.m_manifold.m_pointCount = 0;
            d != c && (m.SetAwake(!0), k.SetAwake(!0))
        }
        this.m_flags = d ? this.m_flags | g.e_touchingFlag: this.m_flags & ~g.e_touchingFlag;
        0 == c && 1 == d && a.BeginContact(this);
        1 == c && 0 == d && a.EndContact(this);
        0 == (this.m_flags & g.e_sensorFlag) && a.PreSolve(this, this.m_oldManifold)
    };
    g.prototype.Evaluate = function() {};
    g.prototype.ComputeTOI = function(a, c) {
        g.s_input.proxyA.Set(this.m_fixtureA.GetShape());
        g.s_input.proxyB.Set(this.m_fixtureB.GetShape());
        g.s_input.sweepA = a;
        g.s_input.sweepB = c;
        g.s_input.tolerance = M.b2_linearSlop;
        return m.TimeOfImpact(g.s_input)
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
        Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
        Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
        Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
        Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
        Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
        Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64;
        Box2D.Dynamics.Contacts.b2Contact.s_input = new k
    });
    l.b2ContactConstraint = function() {
        this.localPlaneNormal = new H;
        this.localPoint = new H;
        this.normal = new H;
        this.normalMass = new D;
        this.K = new D
    };
    l.prototype.b2ContactConstraint = function() {
        this.points = new Vector2(M.b2_maxManifoldPoints);
        for (var a = 0; a < M.b2_maxManifoldPoints; a++) this.points[a] = new h
    };
    h.b2ContactConstraintPoint = function() {
        this.localPoint = new H;
        this.rA = new H;
        this.rB = new H
    };
    q.b2ContactEdge = function() {};
    z.b2ContactFactory = function() {};
    z.prototype.b2ContactFactory = function(a) {
        this.m_allocator = a;
        this.InitializeRegisters()
    };
    z.prototype.AddType = function(a, c, d, e) {
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        this.m_registers[d][e].createFcn = a;
        this.m_registers[d][e].destroyFcn = c;
        this.m_registers[d][e].primary = !0;
        d != e && (this.m_registers[e][d].createFcn = a, this.m_registers[e][d].destroyFcn = c, this.m_registers[e][d].primary = !1)
    };
    z.prototype.InitializeRegisters = function() {
        this.m_registers = new Vector2(e.e_shapeTypeCount);
        for (var a = 0; a < e.e_shapeTypeCount; a++) {
            this.m_registers[a] = new Vector2(e.e_shapeTypeCount);
            for (var c = 0; c < e.e_shapeTypeCount; c++) this.m_registers[a][c] = new v
        }
        this.AddType(f.Create, f.Destroy, e.e_circleShape, e.e_circleShape);
        this.AddType(K.Create, K.Destroy, e.e_polygonShape, e.e_circleShape);
        this.AddType(F.Create, F.Destroy, e.e_polygonShape, e.e_polygonShape);
        this.AddType(w.Create, w.Destroy, e.e_edgeShape, e.e_circleShape);
        this.AddType(n.Create, n.Destroy, e.e_polygonShape, e.e_edgeShape)
    };
    z.prototype.Create = function(a, c) {
        var d = parseInt(a.GetType()),
        e = parseInt(c.GetType()),
        d = this.m_registers[d][e];
        if (d.pool) return e = d.pool,
        d.pool = e.m_next,
        d.poolCount--,
        e.Reset(a, c),
        e;
        e = d.createFcn;
        return null != e ? (d.primary ? (e = e(this.m_allocator), e.Reset(a, c)) : (e = e(this.m_allocator), e.Reset(c, a)), e) : null
    };
    z.prototype.Destroy = function(a) {
        0 < a.m_manifold.m_pointCount && (a.m_fixtureA.m_body.SetAwake(!0), a.m_fixtureB.m_body.SetAwake(!0));
        var c = parseInt(a.m_fixtureA.GetType()),
        d = parseInt(a.m_fixtureB.GetType()),
        c = this.m_registers[c][d];
        c.poolCount++;
        a.m_next = c.pool;
        c.pool = a;
        c = c.destroyFcn;
        c(a, this.m_allocator)
    };
    v.b2ContactRegister = function() {};
    t.b2ContactResult = function() {
        this.position = new H;
        this.normal = new H;
        this.id = new Q
    };
    y.b2ContactSolver = function() {
        this.m_step = new J;
        this.m_constraints = new Vector2
    };
    y.prototype.b2ContactSolver = function() {};
    y.prototype.Initialize = function(a, c, d, e) {
        void 0 === d && (d = 0);
        var m;
        this.m_step.Set(a);
        this.m_allocator = e;
        a = 0;
        for (this.m_constraintCount = d; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new l;
        for (a = 0; a < d; ++a) {
            m = c[a];
            e = m.m_fixtureA;
            var k = m.m_fixtureB,
            f = e.m_shape.m_radius,
            g = k.m_shape.m_radius,
            x = e.m_body,
            h = k.m_body,
            n = m.GetManifold(),
            t = M.b2MixFriction(e.GetFriction(), k.GetFriction()),
            q = M.b2MixRestitution(e.GetRestitution(), k.GetRestitution()),
            w = x.m_linearVelocity.x,
            G = x.m_linearVelocity.y,
            v = h.m_linearVelocity.x,
            B = h.m_linearVelocity.y,
            z = x.m_angularVelocity,
            D = h.m_angularVelocity;
            M.b2Assert(0 < n.m_pointCount);
            y.s_worldManifold.Initialize(n, x.m_xf, f, h.m_xf, g);
            k = y.s_worldManifold.m_normal.x;
            m = y.s_worldManifold.m_normal.y;
            e = this.m_constraints[a];
            e.bodyA = x;
            e.bodyB = h;
            e.manifold = n;
            e.normal.x = k;
            e.normal.y = m;
            e.pointCount = n.m_pointCount;
            e.friction = t;
            e.restitution = q;
            e.localPlaneNormal.x = n.m_localPlaneNormal.x;
            e.localPlaneNormal.y = n.m_localPlaneNormal.y;
            e.localPoint.x = n.m_localPoint.x;
            e.localPoint.y = n.m_localPoint.y;
            e.radius = f + g;
            e.type = n.m_type;
            for (f = 0; f < e.pointCount; ++f) {
                t = n.m_points[f];
                g = e.points[f];
                g.normalImpulse = t.m_normalImpulse;
                g.tangentImpulse = t.m_tangentImpulse;
                g.localPoint.SetV(t.m_localPoint);
                var t = g.rA.x = y.s_worldManifold.m_points[f].x - x.m_sweep.c.x,
                q = g.rA.y = y.s_worldManifold.m_points[f].y - x.m_sweep.c.y,
                K = g.rB.x = y.s_worldManifold.m_points[f].x - h.m_sweep.c.x,
                J = g.rB.y = y.s_worldManifold.m_points[f].y - h.m_sweep.c.y,
                I = t * m - q * k,
                F = K * m - J * k,
                I = I * I,
                F = F * F;
                g.normalMass = 1 / (x.m_invMass + h.m_invMass + x.m_invI * I + h.m_invI * F);
                var H = x.m_mass * x.m_invMass + h.m_mass * h.m_invMass,
                H = H + (x.m_mass * x.m_invI * I + h.m_mass * h.m_invI * F);
                g.equalizedMass = 1 / H;
                F = m;
                H = -k;
                I = t * H - q * F;
                F = K * H - J * F;
                I *= I;
                F *= F;
                g.tangentMass = 1 / (x.m_invMass + h.m_invMass + x.m_invI * I + h.m_invI * F);
                g.velocityBias = 0;
                t = e.normal.x * (v + -D * J - w - -z * q) + e.normal.y * (B + D * K - G - z * t);
                t < -M.b2_velocityThreshold && (g.velocityBias += -e.restitution * t)
            }
            2 == e.pointCount && (B = e.points[0], v = e.points[1], n = x.m_invMass, x = x.m_invI, w = h.m_invMass, h = h.m_invI, G = B.rA.x * m - B.rA.y * k, B = B.rB.x * m - B.rB.y * k, z = v.rA.x * m - v.rA.y * k, v = v.rB.x * m - v.rB.y * k, k = n + w + x * G * G + h * B * B, m = n + w + x * z * z + h * v * v, h = n + w + x * G * z + h * B * v, k * k < 100 * (k * m - h * h) ? (e.K.col1.Set(k, h), e.K.col2.Set(h, m), e.K.GetInverse(e.normalMass)) : e.pointCount = 1)
        }
    };
    y.prototype.InitVelocityConstraints = function(a) {
        for (var c = 0; c < this.m_constraintCount; ++c) {
            var d = this.m_constraints[c],
            e = d.bodyA,
            m = d.bodyB,
            k = e.m_invMass,
            f = e.m_invI,
            g = m.m_invMass,
            x = m.m_invI,
            h = d.normal.x,
            l = d.normal.y,
            n = l,
            t = -h,
            q = 0,
            w = 0;
            if (a.warmStarting) for (w = d.pointCount, q = 0; q < w; ++q) {
                var y = d.points[q];
                y.normalImpulse *= a.dtRatio;
                y.tangentImpulse *= a.dtRatio;
                var v = y.normalImpulse * h + y.tangentImpulse * n,
                B = y.normalImpulse * l + y.tangentImpulse * t;
                e.m_angularVelocity -= f * (y.rA.x * B - y.rA.y * v);
                e.m_linearVelocity.x -= k * v;
                e.m_linearVelocity.y -= k * B;
                m.m_angularVelocity += x * (y.rB.x * B - y.rB.y * v);
                m.m_linearVelocity.x += g * v;
                m.m_linearVelocity.y += g * B
            } else for (w = d.pointCount, q = 0; q < w; ++q) e = d.points[q],
            e.normalImpulse = 0,
            e.tangentImpulse = 0
        }
    };
    y.prototype.SolveVelocityConstraints = function() {
        for (var a = 0,
        c, d = 0,
        e = 0,
        m = 0,
        k = e = e = d = d = 0,
        f = d = d = 0,
        g = d = m = 0,
        x = 0,
        h, l = 0; l < this.m_constraintCount; ++l) {
            var m = this.m_constraints[l],
            n = m.bodyA,
            t = m.bodyB,
            q = n.m_angularVelocity,
            w = t.m_angularVelocity,
            y = n.m_linearVelocity,
            v = t.m_linearVelocity,
            B = n.m_invMass,
            G = n.m_invI,
            z = t.m_invMass,
            D = t.m_invI,
            g = m.normal.x,
            F = x = m.normal.y;
            h = -g;
            f = m.friction;
            for (a = 0; a < m.pointCount; a++) c = m.points[a],
            d = v.x - w * c.rB.y - y.x + q * c.rA.y,
            e = v.y + w * c.rB.x - y.y - q * c.rA.x,
            d = d * F + e * h,
            d = c.tangentMass * -d,
            e = f * c.normalImpulse,
            e = P.Clamp(c.tangentImpulse + d, -e, e),
            d = e - c.tangentImpulse,
            k = d * F,
            d *= h,
            y.x -= B * k,
            y.y -= B * d,
            q -= G * (c.rA.x * d - c.rA.y * k),
            v.x += z * k,
            v.y += z * d,
            w += D * (c.rB.x * d - c.rB.y * k),
            c.tangentImpulse = e;
            parseInt(m.pointCount);
            if (1 == m.pointCount) c = m.points[0],
            d = v.x + -w * c.rB.y - y.x - -q * c.rA.y,
            e = v.y + w * c.rB.x - y.y - q * c.rA.x,
            m = d * g + e * x,
            d = -c.normalMass * (m - c.velocityBias),
            e = c.normalImpulse + d,
            e = 0 < e ? e: 0,
            d = e - c.normalImpulse,
            k = d * g,
            d *= x,
            y.x -= B * k,
            y.y -= B * d,
            q -= G * (c.rA.x * d - c.rA.y * k),
            v.x += z * k,
            v.y += z * d,
            w += D * (c.rB.x * d - c.rB.y * k),
            c.normalImpulse = e;
            else {
                c = m.points[0];
                var a = m.points[1],
                d = c.normalImpulse,
                f = a.normalImpulse,
                K = (v.x - w * c.rB.y - y.x + q * c.rA.y) * g + (v.y + w * c.rB.x - y.y - q * c.rA.x) * x,
                I = (v.x - w * a.rB.y - y.x + q * a.rA.y) * g + (v.y + w * a.rB.x - y.y - q * a.rA.x) * x,
                e = K - c.velocityBias,
                k = I - a.velocityBias;
                h = m.K;
                e -= h.col1.x * d + h.col2.x * f;
                for (k -= h.col1.y * d + h.col2.y * f;;) {
                    h = m.normalMass;
                    F = -(h.col1.x * e + h.col2.x * k);
                    h = -(h.col1.y * e + h.col2.y * k);
                    if (0 <= F && 0 <= h) {
                        d = F - d;
                        f = h - f;
                        m = d * g;
                        d *= x;
                        g *= f;
                        x *= f;
                        y.x -= B * (m + g);
                        y.y -= B * (d + x);
                        q -= G * (c.rA.x * d - c.rA.y * m + a.rA.x * x - a.rA.y * g);
                        v.x += z * (m + g);
                        v.y += z * (d + x);
                        w += D * (c.rB.x * d - c.rB.y * m + a.rB.x * x - a.rB.y * g);
                        c.normalImpulse = F;
                        a.normalImpulse = h;
                        break
                    }
                    F = -c.normalMass * e;
                    h = 0;
                    I = m.K.col1.y * F + k;
                    if (0 <= F && 0 <= I) {
                        d = F - d;
                        f = h - f;
                        m = d * g;
                        d *= x;
                        g *= f;
                        x *= f;
                        y.x -= B * (m + g);
                        y.y -= B * (d + x);
                        q -= G * (c.rA.x * d - c.rA.y * m + a.rA.x * x - a.rA.y * g);
                        v.x += z * (m + g);
                        v.y += z * (d + x);
                        w += D * (c.rB.x * d - c.rB.y * m + a.rB.x * x - a.rB.y * g);
                        c.normalImpulse = F;
                        a.normalImpulse = h;
                        break
                    }
                    F = 0;
                    h = -a.normalMass * k;
                    K = m.K.col2.x * h + e;
                    if (0 <= h && 0 <= K) {
                        d = F - d;
                        f = h - f;
                        m = d * g;
                        d *= x;
                        g *= f;
                        x *= f;
                        y.x -= B * (m + g);
                        y.y -= B * (d + x);
                        q -= G * (c.rA.x * d - c.rA.y * m + a.rA.x * x - a.rA.y * g);
                        v.x += z * (m + g);
                        v.y += z * (d + x);
                        w += D * (c.rB.x * d - c.rB.y * m + a.rB.x * x - a.rB.y * g);
                        c.normalImpulse = F;
                        a.normalImpulse = h;
                        break
                    }
                    h = F = 0;
                    K = e;
                    I = k;
                    if (0 <= K && 0 <= I) {
                        d = F - d;
                        f = h - f;
                        m = d * g;
                        d *= x;
                        g *= f;
                        x *= f;
                        y.x -= B * (m + g);
                        y.y -= B * (d + x);
                        q -= G * (c.rA.x * d - c.rA.y * m + a.rA.x * x - a.rA.y * g);
                        v.x += z * (m + g);
                        v.y += z * (d + x);
                        w += D * (c.rB.x * d - c.rB.y * m + a.rB.x * x - a.rB.y * g);
                        c.normalImpulse = F;
                        a.normalImpulse = h;
                        break
                    }
                    break
                }
            }
            n.m_angularVelocity = q;
            t.m_angularVelocity = w
        }
    };
    y.prototype.FinalizeVelocityConstraints = function() {
        for (var a = 0; a < this.m_constraintCount; ++a) for (var c = this.m_constraints[a], d = c.manifold, e = 0; e < c.pointCount; ++e) {
            var m = d.m_points[e],
            k = c.points[e];
            m.m_normalImpulse = k.normalImpulse;
            m.m_tangentImpulse = k.tangentImpulse
        }
    };
    y.prototype.SolvePositionConstraints = function(a) {
        void 0 === a && (a = 0);
        for (var c = 0,
        d = 0; d < this.m_constraintCount; d++) {
            var e = this.m_constraints[d],
            m = e.bodyA,
            k = e.bodyB,
            f = m.m_mass * m.m_invMass,
            g = m.m_mass * m.m_invI,
            x = k.m_mass * k.m_invMass,
            h = k.m_mass * k.m_invI;
            y.s_psm.Initialize(e);
            for (var l = y.s_psm.m_normal,
            n = 0; n < e.pointCount; n++) {
                var q = e.points[n],
                w = y.s_psm.m_points[n],
                t = y.s_psm.m_separations[n],
                v = w.x - m.m_sweep.c.x,
                B = w.y - m.m_sweep.c.y,
                G = w.x - k.m_sweep.c.x,
                w = w.y - k.m_sweep.c.y,
                c = c < t ? c: t,
                t = P.Clamp(a * (t + M.b2_linearSlop), -M.b2_maxLinearCorrection, 0),
                t = -q.equalizedMass * t,
                q = t * l.x,
                t = t * l.y;
                m.m_sweep.c.x -= f * q;
                m.m_sweep.c.y -= f * t;
                m.m_sweep.a -= g * (v * t - B * q);
                m.SynchronizeTransform();
                k.m_sweep.c.x += x * q;
                k.m_sweep.c.y += x * t;
                k.m_sweep.a += h * (G * t - w * q);
                k.SynchronizeTransform()
            }
        }
        return c > -1.5 * M.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new x;
        Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new G
    });
    Box2D.inherit(w, Box2D.Dynamics.Contacts.b2Contact);
    w.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    w.b2EdgeAndCircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    w.Create = function(a) {
        return new w
    };
    w.Destroy = function(a, c) {};
    w.prototype.Reset = function(a, c) {
        this.__super.Reset.call(this, a, c)
    };
    w.prototype.Evaluate = function() {
        var d = this.m_fixtureA.GetBody(),
        e = this.m_fixtureB.GetBody();
        this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof c ? this.m_fixtureA.GetShape() : null, d.m_xf, this.m_fixtureB.GetShape() instanceof a ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    w.prototype.b2CollideEdgeAndCircle = function(a, c, d, e, m) {};
    Box2D.inherit(B, Box2D.Dynamics.Contacts.b2Contact);
    B.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    B.b2NullContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    B.prototype.b2NullContact = function() {
        this.__super.b2Contact.call(this)
    };
    B.prototype.Evaluate = function() {};
    Box2D.inherit(K, Box2D.Dynamics.Contacts.b2Contact);
    K.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    K.b2PolyAndCircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    K.Create = function(a) {
        return new K
    };
    K.Destroy = function(a, c) {};
    K.prototype.Reset = function(a, c) {
        this.__super.Reset.call(this, a, c);
        M.b2Assert(a.GetType() == e.e_polygonShape);
        M.b2Assert(c.GetType() == e.e_circleShape)
    };
    K.prototype.Evaluate = function() {
        var c = this.m_fixtureA.m_body,
        e = this.m_fixtureB.m_body;
        L.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof a ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    Box2D.inherit(n, Box2D.Dynamics.Contacts.b2Contact);
    n.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    n.b2PolyAndEdgeContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    n.Create = function(a) {
        return new n
    };
    n.Destroy = function(a, c) {};
    n.prototype.Reset = function(a, c) {
        this.__super.Reset.call(this, a, c);
        M.b2Assert(a.GetType() == e.e_polygonShape);
        M.b2Assert(c.GetType() == e.e_edgeShape)
    };
    n.prototype.Evaluate = function() {
        var a = this.m_fixtureA.GetBody(),
        e = this.m_fixtureB.GetBody();
        this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof c ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    n.prototype.b2CollidePolyAndEdge = function(a, c, d, e, m) {};
    Box2D.inherit(F, Box2D.Dynamics.Contacts.b2Contact);
    F.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    F.b2PolygonContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    F.Create = function(a) {
        return new F
    };
    F.Destroy = function(a, c) {};
    F.prototype.Reset = function(a, c) {
        this.__super.Reset.call(this, a, c)
    };
    F.prototype.Evaluate = function() {
        var a = this.m_fixtureA.GetBody(),
        c = this.m_fixtureB.GetBody();
        L.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof d ? this.m_fixtureB.GetShape() : null, c.m_xf)
    };
    G.b2PositionSolverManifold = function() {};
    G.prototype.b2PositionSolverManifold = function() {
        this.m_normal = new H;
        this.m_separations = new Vector_a2j_Number(M.b2_maxManifoldPoints);
        this.m_points = new Vector2(M.b2_maxManifoldPoints);
        for (var a = 0; a < M.b2_maxManifoldPoints; a++) this.m_points[a] = new H
    };
    G.prototype.Initialize = function(a) {
        M.b2Assert(0 < a.pointCount);
        var c = 0,
        d = 0,
        e = 0,
        m, k = 0,
        f = 0;
        switch (a.type) {
        case N.e_circles:
            m = a.bodyA.m_xf.R;
            e = a.localPoint;
            c = a.bodyA.m_xf.position.x + (m.col1.x * e.x + m.col2.x * e.y);
            d = a.bodyA.m_xf.position.y + (m.col1.y * e.x + m.col2.y * e.y);
            m = a.bodyB.m_xf.R;
            e = a.points[0].localPoint;
            k = a.bodyB.m_xf.position.x + (m.col1.x * e.x + m.col2.x * e.y);
            m = a.bodyB.m_xf.position.y + (m.col1.y * e.x + m.col2.y * e.y);
            var e = k - c,
            f = m - d,
            g = e * e + f * f;
            g > Number.MIN_VALUE * Number.MIN_VALUE ? (g = Math.sqrt(g), this.m_normal.x = e / g, this.m_normal.y = f / g) : (this.m_normal.x = 1, this.m_normal.y = 0);
            this.m_points[0].x = .5 * (c + k);
            this.m_points[0].y = .5 * (d + m);
            this.m_separations[0] = e * this.m_normal.x + f * this.m_normal.y - a.radius;
            break;
        case N.e_faceA:
            m = a.bodyA.m_xf.R;
            e = a.localPlaneNormal;
            this.m_normal.x = m.col1.x * e.x + m.col2.x * e.y;
            this.m_normal.y = m.col1.y * e.x + m.col2.y * e.y;
            m = a.bodyA.m_xf.R;
            e = a.localPoint;
            k = a.bodyA.m_xf.position.x + (m.col1.x * e.x + m.col2.x * e.y);
            f = a.bodyA.m_xf.position.y + (m.col1.y * e.x + m.col2.y * e.y);
            m = a.bodyB.m_xf.R;
            for (c = 0; c < a.pointCount; ++c) e = a.points[c].localPoint,
            d = a.bodyB.m_xf.position.x + (m.col1.x * e.x + m.col2.x * e.y),
            e = a.bodyB.m_xf.position.y + (m.col1.y * e.x + m.col2.y * e.y),
            this.m_separations[c] = (d - k) * this.m_normal.x + (e - f) * this.m_normal.y - a.radius,
            this.m_points[c].x = d,
            this.m_points[c].y = e;
            break;
        case N.e_faceB:
            m = a.bodyB.m_xf.R;
            e = a.localPlaneNormal;
            this.m_normal.x = m.col1.x * e.x + m.col2.x * e.y;
            this.m_normal.y = m.col1.y * e.x + m.col2.y * e.y;
            m = a.bodyB.m_xf.R;
            e = a.localPoint;
            k = a.bodyB.m_xf.position.x + (m.col1.x * e.x + m.col2.x * e.y);
            f = a.bodyB.m_xf.position.y + (m.col1.y * e.x + m.col2.y * e.y);
            m = a.bodyA.m_xf.R;
            for (c = 0; c < a.pointCount; ++c) e = a.points[c].localPoint,
            d = a.bodyA.m_xf.position.x + (m.col1.x * e.x + m.col2.x * e.y),
            e = a.bodyA.m_xf.position.y + (m.col1.y * e.x + m.col2.y * e.y),
            this.m_separations[c] = (d - k) * this.m_normal.x + (e - f) * this.m_normal.y - a.radius,
            this.m_points[c].Set(d, e);
            this.m_normal.x *= -1;
            this.m_normal.y *= -1
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new H;
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new H
    })
})(); (function() {
    var a = Box2D.Common.Math.b2Mat22,
    c = Box2D.Common.Math.b2Math,
    d = Box2D.Common.Math.b2Vec2,
    e = Box2D.Common.b2Color,
    f = Box2D.Dynamics.Controllers.b2BuoyancyController,
    g = Box2D.Dynamics.Controllers.b2ConstantAccelController,
    l = Box2D.Dynamics.Controllers.b2ConstantForceController,
    h = Box2D.Dynamics.Controllers.b2Controller,
    q = Box2D.Dynamics.Controllers.b2ControllerEdge,
    z = Box2D.Dynamics.Controllers.b2GravityController,
    v = Box2D.Dynamics.Controllers.b2TensorDampingController;
    Box2D.inherit(f, Box2D.Dynamics.Controllers.b2Controller);
    f.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    f.b2BuoyancyController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.normal = new d(0, -1);
        this.density = this.offset = 0;
        this.velocity = new d(0, 0);
        this.linearDrag = 2;
        this.angularDrag = 1;
        this.useDensity = !1;
        this.useWorldGravity = !0;
        this.gravity = null
    };
    f.prototype.Step = function(a) {
        if (this.m_bodyList) for (this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy()), a = this.m_bodyList; a; a = a.nextBody) {
            var c = a.body;
            if (0 != c.IsAwake()) {
                for (var e = new d,
                f = new d,
                g = 0,
                h = 0,
                l = c.GetFixtureList(); l; l = l.GetNext()) {
                    var q = new d,
                    v = l.GetShape().ComputeSubmergedArea(this.normal, this.offset, c.GetTransform(), q),
                    g = g + v;
                    e.x += v * q.x;
                    e.y += v * q.y;
                    var z = 0,
                    z = 1,
                    h = h + v * z;
                    f.x += v * q.x * z;
                    f.y += v * q.y * z
                }
                e.x /= g;
                e.y /= g;
                f.x /= h;
                f.y /= h;
                g < Number.MIN_VALUE || (h = this.gravity.GetNegative(), h.Multiply(this.density * g), c.ApplyForce(h, f), f = c.GetLinearVelocityFromWorldPoint(e), f.Subtract(this.velocity), f.Multiply( - this.linearDrag * g), c.ApplyForce(f, e), c.ApplyTorque( - c.GetInertia() / c.GetMass() * g * c.GetAngularVelocity() * this.angularDrag))
            }
        }
    };
    f.prototype.Draw = function(a) {
        var c = new d,
        f = new d;
        c.x = this.normal.x * this.offset + 1E3 * this.normal.y;
        c.y = this.normal.y * this.offset - 1E3 * this.normal.x;
        f.x = this.normal.x * this.offset - 1E3 * this.normal.y;
        f.y = this.normal.y * this.offset + 1E3 * this.normal.x;
        var g = new e(0, 0, 1);
        a.DrawSegment(c, f, g)
    };
    Box2D.inherit(g, Box2D.Dynamics.Controllers.b2Controller);
    g.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    g.b2ConstantAccelController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.A = new d(0, 0)
    };
    g.prototype.Step = function(a) {
        a = new d(this.A.x * a.dt, this.A.y * a.dt);
        for (var c = this.m_bodyList; c; c = c.nextBody) {
            var e = c.body;
            e.IsAwake() && e.SetLinearVelocity(new d(e.GetLinearVelocity().x + a.x, e.GetLinearVelocity().y + a.y))
        }
    };
    Box2D.inherit(l, Box2D.Dynamics.Controllers.b2Controller);
    l.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    l.b2ConstantForceController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.F = new d(0, 0)
    };
    l.prototype.Step = function(a) {
        for (a = this.m_bodyList; a; a = a.nextBody) {
            var c = a.body;
            c.IsAwake() && c.ApplyForce(this.F, c.GetWorldCenter())
        }
    };
    h.b2Controller = function() {};
    h.prototype.Step = function(a) {};
    h.prototype.Draw = function(a) {};
    h.prototype.AddBody = function(a) {
        var c = new q;
        c.controller = this;
        c.body = a;
        c.nextBody = this.m_bodyList;
        c.prevBody = null;
        this.m_bodyList = c;
        c.nextBody && (c.nextBody.prevBody = c);
        this.m_bodyCount++;
        c.nextController = a.m_controllerList;
        c.prevController = null;
        a.m_controllerList = c;
        c.nextController && (c.nextController.prevController = c);
        a.m_controllerCount++
    };
    h.prototype.RemoveBody = function(a) {
        for (var c = a.m_controllerList; c && c.controller != this;) c = c.nextController;
        c.prevBody && (c.prevBody.nextBody = c.nextBody);
        c.nextBody && (c.nextBody.prevBody = c.prevBody);
        c.nextController && (c.nextController.prevController = c.prevController);
        c.prevController && (c.prevController.nextController = c.nextController);
        this.m_bodyList == c && (this.m_bodyList = c.nextBody);
        a.m_controllerList == c && (a.m_controllerList = c.nextController);
        a.m_controllerCount--;
        this.m_bodyCount--
    };
    h.prototype.Clear = function() {
        for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body)
    };
    h.prototype.GetNext = function() {
        return this.m_next
    };
    h.prototype.GetWorld = function() {
        return this.m_world
    };
    h.prototype.GetBodyList = function() {
        return this.m_bodyList
    };
    q.b2ControllerEdge = function() {};
    Box2D.inherit(z, Box2D.Dynamics.Controllers.b2Controller);
    z.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    z.b2GravityController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.G = 1;
        this.invSqr = !0
    };
    z.prototype.Step = function(a) {
        var c = a = null,
        e = null,
        f = 0,
        g = null,
        h = null,
        l = null,
        q = 0,
        v = 0,
        z = 0,
        q = null;
        if (this.invSqr) for (a = this.m_bodyList; a; a = a.nextBody) for (c = a.body, e = c.GetWorldCenter(), f = c.GetMass(), g = this.m_bodyList; g != a; g = g.nextBody) h = g.body,
        l = h.GetWorldCenter(),
        q = l.x - e.x,
        v = l.y - e.y,
        z = q * q + v * v,
        z < Number.MIN_VALUE || (q = new d(q, v), q.Multiply(this.G / z / Math.sqrt(z) * f * h.GetMass()), c.IsAwake() && c.ApplyForce(q, e), q.Multiply( - 1), h.IsAwake() && h.ApplyForce(q, l));
        else for (a = this.m_bodyList; a; a = a.nextBody) for (c = a.body, e = c.GetWorldCenter(), f = c.GetMass(), g = this.m_bodyList; g != a; g = g.nextBody) h = g.body,
        l = h.GetWorldCenter(),
        q = l.x - e.x,
        v = l.y - e.y,
        z = q * q + v * v,
        z < Number.MIN_VALUE || (q = new d(q, v), q.Multiply(this.G / z * f * h.GetMass()), c.IsAwake() && c.ApplyForce(q, e), q.Multiply( - 1), h.IsAwake() && h.ApplyForce(q, l))
    };
    Box2D.inherit(v, Box2D.Dynamics.Controllers.b2Controller);
    v.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    v.b2TensorDampingController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.T = new a;
        this.maxTimestep = 0
    };
    v.prototype.SetAxisAligned = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.T.col1.x = -a;
        this.T.col1.y = 0;
        this.T.col2.x = 0;
        this.T.col2.y = -c;
        this.maxTimestep = 0 < a || 0 < c ? 1 / Math.max(a, c) : 0
    };
    v.prototype.Step = function(a) {
        a = a.dt;
        if (! (a <= Number.MIN_VALUE)) {
            a > this.maxTimestep && 0 < this.maxTimestep && (a = this.maxTimestep);
            for (var e = this.m_bodyList; e; e = e.nextBody) {
                var f = e.body;
                if (f.IsAwake()) {
                    var g = f.GetWorldVector(c.MulMV(this.T, f.GetLocalVector(f.GetLinearVelocity())));
                    f.SetLinearVelocity(new d(f.GetLinearVelocity().x + g.x * a, f.GetLinearVelocity().y + g.y * a))
                }
            }
        }
    }
})(); (function() {
    var a = Box2D.Common.b2Settings,
    c = Box2D.Common.Math.b2Mat22,
    d = Box2D.Common.Math.b2Mat33,
    e = Box2D.Common.Math.b2Math,
    f = Box2D.Common.Math.b2Vec2,
    g = Box2D.Common.Math.b2Vec3,
    l = Box2D.Dynamics.Joints.b2DistanceJoint,
    h = Box2D.Dynamics.Joints.b2DistanceJointDef,
    q = Box2D.Dynamics.Joints.b2FrictionJoint,
    z = Box2D.Dynamics.Joints.b2FrictionJointDef,
    v = Box2D.Dynamics.Joints.b2GearJoint,
    t = Box2D.Dynamics.Joints.b2GearJointDef,
    y = Box2D.Dynamics.Joints.b2Jacobian,
    w = Box2D.Dynamics.Joints.b2Joint,
    B = Box2D.Dynamics.Joints.b2JointDef,
    K = Box2D.Dynamics.Joints.b2JointEdge,
    n = Box2D.Dynamics.Joints.b2LineJoint,
    F = Box2D.Dynamics.Joints.b2LineJointDef,
    G = Box2D.Dynamics.Joints.b2MouseJoint,
    I = Box2D.Dynamics.Joints.b2MouseJointDef,
    J = Box2D.Dynamics.Joints.b2PrismaticJoint,
    M = Box2D.Dynamics.Joints.b2PrismaticJointDef,
    D = Box2D.Dynamics.Joints.b2PulleyJoint,
    P = Box2D.Dynamics.Joints.b2PulleyJointDef,
    H = Box2D.Dynamics.Joints.b2RevoluteJoint,
    L = Box2D.Dynamics.Joints.b2RevoluteJointDef,
    Q = Box2D.Dynamics.Joints.b2WeldJoint,
    N = Box2D.Dynamics.Joints.b2WeldJointDef;
    Box2D.inherit(l, Box2D.Dynamics.Joints.b2Joint);
    l.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    l.b2DistanceJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_u = new f
    };
    l.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    l.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    l.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * this.m_impulse * this.m_u.x, a * this.m_impulse * this.m_u.y)
    };
    l.prototype.GetReactionTorque = function(a) {
        return 0
    };
    l.prototype.GetLength = function() {
        return this.m_length
    };
    l.prototype.SetLength = function(a) {
        void 0 === a && (a = 0);
        this.m_length = a
    };
    l.prototype.GetFrequency = function() {
        return this.m_frequencyHz
    };
    l.prototype.SetFrequency = function(a) {
        void 0 === a && (a = 0);
        this.m_frequencyHz = a
    };
    l.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio
    };
    l.prototype.SetDampingRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_dampingRatio = a
    };
    l.prototype.b2DistanceJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_length = a.length;
        this.m_frequencyHz = a.frequencyHz;
        this.m_dampingRatio = a.dampingRatio;
        this.m_bias = this.m_gamma = this.m_impulse = 0
    };
    l.prototype.InitVelocityConstraints = function(c) {
        var d, e = 0,
        f = this.m_bodyA,
        g = this.m_bodyB;
        d = f.m_xf.R;
        var h = this.m_localAnchor1.x - f.m_sweep.localCenter.x,
        C = this.m_localAnchor1.y - f.m_sweep.localCenter.y,
        e = d.col1.x * h + d.col2.x * C,
        C = d.col1.y * h + d.col2.y * C,
        h = e;
        d = g.m_xf.R;
        var p = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
        r = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
        e = d.col1.x * p + d.col2.x * r,
        r = d.col1.y * p + d.col2.y * r,
        p = e;
        this.m_u.x = g.m_sweep.c.x + p - f.m_sweep.c.x - h;
        this.m_u.y = g.m_sweep.c.y + r - f.m_sweep.c.y - C;
        e = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
        e > a.b2_linearSlop ? this.m_u.Multiply(1 / e) : this.m_u.SetZero();
        d = h * this.m_u.y - C * this.m_u.x;
        var l = p * this.m_u.y - r * this.m_u.x;
        d = f.m_invMass + f.m_invI * d * d + g.m_invMass + g.m_invI * l * l;
        this.m_mass = 0 != d ? 1 / d: 0;
        if (0 < this.m_frequencyHz) {
            var e = e - this.m_length,
            l = 2 * Math.PI * this.m_frequencyHz,
            n = this.m_mass * l * l;
            this.m_gamma = c.dt * (2 * this.m_mass * this.m_dampingRatio * l + c.dt * n);
            this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma: 0;
            this.m_bias = e * c.dt * n * this.m_gamma;
            this.m_mass = d + this.m_gamma;
            this.m_mass = 0 != this.m_mass ? 1 / this.m_mass: 0
        }
        c.warmStarting ? (this.m_impulse *= c.dtRatio, c = this.m_impulse * this.m_u.x, d = this.m_impulse * this.m_u.y, f.m_linearVelocity.x -= f.m_invMass * c, f.m_linearVelocity.y -= f.m_invMass * d, f.m_angularVelocity -= f.m_invI * (h * d - C * c), g.m_linearVelocity.x += g.m_invMass * c, g.m_linearVelocity.y += g.m_invMass * d, g.m_angularVelocity += g.m_invI * (p * d - r * c)) : this.m_impulse = 0
    };
    l.prototype.SolveVelocityConstraints = function(a) {
        var c;
        a = this.m_bodyA;
        var d = this.m_bodyB;
        c = a.m_xf.R;
        var e = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
        f = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
        g = c.col1.x * e + c.col2.x * f,
        f = c.col1.y * e + c.col2.y * f,
        e = g;
        c = d.m_xf.R;
        var h = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
        p = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
        g = c.col1.x * h + c.col2.x * p,
        p = c.col1.y * h + c.col2.y * p,
        h = g,
        g = -this.m_mass * (this.m_u.x * (d.m_linearVelocity.x + -d.m_angularVelocity * p - (a.m_linearVelocity.x + -a.m_angularVelocity * f)) + this.m_u.y * (d.m_linearVelocity.y + d.m_angularVelocity * h - (a.m_linearVelocity.y + a.m_angularVelocity * e)) + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse += g;
        c = g * this.m_u.x;
        g *= this.m_u.y;
        a.m_linearVelocity.x -= a.m_invMass * c;
        a.m_linearVelocity.y -= a.m_invMass * g;
        a.m_angularVelocity -= a.m_invI * (e * g - f * c);
        d.m_linearVelocity.x += d.m_invMass * c;
        d.m_linearVelocity.y += d.m_invMass * g;
        d.m_angularVelocity += d.m_invI * (h * g - p * c)
    };
    l.prototype.SolvePositionConstraints = function(c) {
        var d;
        if (0 < this.m_frequencyHz) return ! 0;
        c = this.m_bodyA;
        var f = this.m_bodyB;
        d = c.m_xf.R;
        var g = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
        h = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
        l = d.col1.x * g + d.col2.x * h,
        h = d.col1.y * g + d.col2.y * h,
        g = l;
        d = f.m_xf.R;
        var C = this.m_localAnchor2.x - f.m_sweep.localCenter.x,
        p = this.m_localAnchor2.y - f.m_sweep.localCenter.y,
        l = d.col1.x * C + d.col2.x * p,
        p = d.col1.y * C + d.col2.y * p,
        C = l,
        l = f.m_sweep.c.x + C - c.m_sweep.c.x - g,
        r = f.m_sweep.c.y + p - c.m_sweep.c.y - h;
        d = Math.sqrt(l * l + r * r);
        l /= d;
        r /= d;
        d -= this.m_length;
        d = e.Clamp(d, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection);
        var A = -this.m_mass * d;
        this.m_u.Set(l, r);
        l = A * this.m_u.x;
        r = A * this.m_u.y;
        c.m_sweep.c.x -= c.m_invMass * l;
        c.m_sweep.c.y -= c.m_invMass * r;
        c.m_sweep.a -= c.m_invI * (g * r - h * l);
        f.m_sweep.c.x += f.m_invMass * l;
        f.m_sweep.c.y += f.m_invMass * r;
        f.m_sweep.a += f.m_invI * (C * r - p * l);
        c.SynchronizeTransform();
        f.SynchronizeTransform();
        return e.Abs(d) < a.b2_linearSlop
    };
    Box2D.inherit(h, Box2D.Dynamics.Joints.b2JointDef);
    h.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    h.b2DistanceJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    h.prototype.b2DistanceJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_distanceJoint;
        this.length = 1;
        this.dampingRatio = this.frequencyHz = 0
    };
    h.prototype.Initialize = function(a, c, d, e) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
        a = e.x - d.x;
        d = e.y - d.y;
        this.length = Math.sqrt(a * a + d * d);
        this.dampingRatio = this.frequencyHz = 0
    };
    Box2D.inherit(q, Box2D.Dynamics.Joints.b2Joint);
    q.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    q.b2FrictionJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new f;
        this.m_localAnchorB = new f;
        this.m_linearMass = new c;
        this.m_linearImpulse = new f
    };
    q.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    };
    q.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    };
    q.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * this.m_linearImpulse.x, a * this.m_linearImpulse.y)
    };
    q.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_angularImpulse
    };
    q.prototype.SetMaxForce = function(a) {
        void 0 === a && (a = 0);
        this.m_maxForce = a
    };
    q.prototype.GetMaxForce = function() {
        return this.m_maxForce
    };
    q.prototype.SetMaxTorque = function(a) {
        void 0 === a && (a = 0);
        this.m_maxTorque = a
    };
    q.prototype.GetMaxTorque = function() {
        return this.m_maxTorque
    };
    q.prototype.b2FrictionJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchorA.SetV(a.localAnchorA);
        this.m_localAnchorB.SetV(a.localAnchorB);
        this.m_linearMass.SetZero();
        this.m_angularMass = 0;
        this.m_linearImpulse.SetZero();
        this.m_angularImpulse = 0;
        this.m_maxForce = a.maxForce;
        this.m_maxTorque = a.maxTorque
    };
    q.prototype.InitVelocityConstraints = function(a) {
        var d, e = 0,
        f = this.m_bodyA,
        g = this.m_bodyB;
        d = f.m_xf.R;
        var h = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
        l = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
        e = d.col1.x * h + d.col2.x * l,
        l = d.col1.y * h + d.col2.y * l,
        h = e;
        d = g.m_xf.R;
        var p = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
        r = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
        e = d.col1.x * p + d.col2.x * r,
        r = d.col1.y * p + d.col2.y * r,
        p = e;
        d = f.m_invMass;
        var e = g.m_invMass,
        A = f.m_invI,
        n = g.m_invI,
        q = new c;
        q.col1.x = d + e;
        q.col2.x = 0;
        q.col1.y = 0;
        q.col2.y = d + e;
        q.col1.x += A * l * l;
        q.col2.x += -A * h * l;
        q.col1.y += -A * h * l;
        q.col2.y += A * h * h;
        q.col1.x += n * r * r;
        q.col2.x += -n * p * r;
        q.col1.y += -n * p * r;
        q.col2.y += n * p * p;
        q.GetInverse(this.m_linearMass);
        this.m_angularMass = A + n;
        0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
        a.warmStarting ? (this.m_linearImpulse.x *= a.dtRatio, this.m_linearImpulse.y *= a.dtRatio, this.m_angularImpulse *= a.dtRatio, a = this.m_linearImpulse, f.m_linearVelocity.x -= d * a.x, f.m_linearVelocity.y -= d * a.y, f.m_angularVelocity -= A * (h * a.y - l * a.x + this.m_angularImpulse), g.m_linearVelocity.x += e * a.x, g.m_linearVelocity.y += e * a.y, g.m_angularVelocity += n * (p * a.y - r * a.x + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0)
    };
    q.prototype.SolveVelocityConstraints = function(a) {
        var c, d = 0,
        g = this.m_bodyA,
        h = this.m_bodyB,
        l = g.m_linearVelocity,
        C = g.m_angularVelocity,
        p = h.m_linearVelocity,
        r = h.m_angularVelocity,
        A = g.m_invMass,
        n = h.m_invMass,
        q = g.m_invI,
        w = h.m_invI;
        c = g.m_xf.R;
        var t = this.m_localAnchorA.x - g.m_sweep.localCenter.x,
        v = this.m_localAnchorA.y - g.m_sweep.localCenter.y,
        d = c.col1.x * t + c.col2.x * v,
        v = c.col1.y * t + c.col2.y * v,
        t = d;
        c = h.m_xf.R;
        var y = this.m_localAnchorB.x - h.m_sweep.localCenter.x,
        z = this.m_localAnchorB.y - h.m_sweep.localCenter.y,
        d = c.col1.x * y + c.col2.x * z,
        z = c.col1.y * y + c.col2.y * z,
        y = d;
        c = 0;
        var d = -this.m_angularMass * (r - C),
        B = this.m_angularImpulse;
        c = a.dt * this.m_maxTorque;
        this.m_angularImpulse = e.Clamp(this.m_angularImpulse + d, -c, c);
        d = this.m_angularImpulse - B;
        C -= q * d;
        r += w * d;
        c = e.MulMV(this.m_linearMass, new f( - (p.x - r * z - l.x + C * v), -(p.y + r * y - l.y - C * t)));
        d = this.m_linearImpulse.Copy();
        this.m_linearImpulse.Add(c);
        c = a.dt * this.m_maxForce;
        this.m_linearImpulse.LengthSquared() > c * c && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(c));
        c = e.SubtractVV(this.m_linearImpulse, d);
        l.x -= A * c.x;
        l.y -= A * c.y;
        C -= q * (t * c.y - v * c.x);
        p.x += n * c.x;
        p.y += n * c.y;
        r += w * (y * c.y - z * c.x);
        g.m_angularVelocity = C;
        h.m_angularVelocity = r
    };
    q.prototype.SolvePositionConstraints = function(a) {
        return ! 0
    };
    Box2D.inherit(z, Box2D.Dynamics.Joints.b2JointDef);
    z.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    z.b2FrictionJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    z.prototype.b2FrictionJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_frictionJoint;
        this.maxTorque = this.maxForce = 0
    };
    z.prototype.Initialize = function(a, c, d) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d))
    };
    Box2D.inherit(v, Box2D.Dynamics.Joints.b2Joint);
    v.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    v.b2GearJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_groundAnchor1 = new f;
        this.m_groundAnchor2 = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_J = new y
    };
    v.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    v.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    v.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * this.m_impulse * this.m_J.linearB.x, a * this.m_impulse * this.m_J.linearB.y)
    };
    v.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        var c = this.m_bodyB.m_xf.R,
        d = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
        e = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
        f = c.col1.x * d + c.col2.x * e,
        e = c.col1.y * d + c.col2.y * e;
        return a * (this.m_impulse * this.m_J.angularB - f * this.m_impulse * this.m_J.linearB.y + e * this.m_impulse * this.m_J.linearB.x)
    };
    v.prototype.GetRatio = function() {
        return this.m_ratio
    };
    v.prototype.SetRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_ratio = a
    };
    v.prototype.b2GearJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        var c = parseInt(a.joint1.m_type),
        d = parseInt(a.joint2.m_type);
        this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
        var e = 0,
        f = 0;
        this.m_ground1 = a.joint1.GetBodyA();
        this.m_bodyA = a.joint1.GetBodyB();
        c == w.e_revoluteJoint ? (this.m_revolute1 = a.joint1 instanceof H ? a.joint1: null, this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2), e = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = a.joint1 instanceof J ? a.joint1: null, this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2), e = this.m_prismatic1.GetJointTranslation());
        this.m_ground2 = a.joint2.GetBodyA();
        this.m_bodyB = a.joint2.GetBodyB();
        d == w.e_revoluteJoint ? (this.m_revolute2 = a.joint2 instanceof H ? a.joint2: null, this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2), f = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = a.joint2 instanceof J ? a.joint2: null, this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2), f = this.m_prismatic2.GetJointTranslation());
        this.m_ratio = a.ratio;
        this.m_constant = e + this.m_ratio * f;
        this.m_impulse = 0
    };
    v.prototype.InitVelocityConstraints = function(a) {
        var c = this.m_ground1,
        d = this.m_ground2,
        e = this.m_bodyA,
        f = this.m_bodyB,
        g = 0,
        h = 0,
        p = 0,
        r = 0,
        l = p = 0,
        n = 0;
        this.m_J.SetZero();
        this.m_revolute1 ? (this.m_J.angularA = -1, n += e.m_invI) : (c = c.m_xf.R, h = this.m_prismatic1.m_localXAxis1, g = c.col1.x * h.x + c.col2.x * h.y, h = c.col1.y * h.x + c.col2.y * h.y, c = e.m_xf.R, p = this.m_localAnchor1.x - e.m_sweep.localCenter.x, r = this.m_localAnchor1.y - e.m_sweep.localCenter.y, l = c.col1.x * p + c.col2.x * r, r = c.col1.y * p + c.col2.y * r, p = l * h - r * g, this.m_J.linearA.Set( - g, -h), this.m_J.angularA = -p, n += e.m_invMass + e.m_invI * p * p);
        this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio, n += this.m_ratio * this.m_ratio * f.m_invI) : (c = d.m_xf.R, h = this.m_prismatic2.m_localXAxis1, g = c.col1.x * h.x + c.col2.x * h.y, h = c.col1.y * h.x + c.col2.y * h.y, c = f.m_xf.R, p = this.m_localAnchor2.x - f.m_sweep.localCenter.x, r = this.m_localAnchor2.y - f.m_sweep.localCenter.y, l = c.col1.x * p + c.col2.x * r, r = c.col1.y * p + c.col2.y * r, p = l * h - r * g, this.m_J.linearB.Set( - this.m_ratio * g, -this.m_ratio * h), this.m_J.angularB = -this.m_ratio * p, n += this.m_ratio * this.m_ratio * (f.m_invMass + f.m_invI * p * p));
        this.m_mass = 0 < n ? 1 / n: 0;
        a.warmStarting ? (e.m_linearVelocity.x += e.m_invMass * this.m_impulse * this.m_J.linearA.x, e.m_linearVelocity.y += e.m_invMass * this.m_impulse * this.m_J.linearA.y, e.m_angularVelocity += e.m_invI * this.m_impulse * this.m_J.angularA, f.m_linearVelocity.x += f.m_invMass * this.m_impulse * this.m_J.linearB.x, f.m_linearVelocity.y += f.m_invMass * this.m_impulse * this.m_J.linearB.y, f.m_angularVelocity += f.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0
    };
    v.prototype.SolveVelocityConstraints = function(a) {
        a = this.m_bodyA;
        var c = this.m_bodyB,
        d = this.m_J.Compute(a.m_linearVelocity, a.m_angularVelocity, c.m_linearVelocity, c.m_angularVelocity),
        d = -this.m_mass * d;
        this.m_impulse += d;
        a.m_linearVelocity.x += a.m_invMass * d * this.m_J.linearA.x;
        a.m_linearVelocity.y += a.m_invMass * d * this.m_J.linearA.y;
        a.m_angularVelocity += a.m_invI * d * this.m_J.angularA;
        c.m_linearVelocity.x += c.m_invMass * d * this.m_J.linearB.x;
        c.m_linearVelocity.y += c.m_invMass * d * this.m_J.linearB.y;
        c.m_angularVelocity += c.m_invI * d * this.m_J.angularB
    };
    v.prototype.SolvePositionConstraints = function(c) {
        c = this.m_bodyA;
        var d = this.m_bodyB,
        e = 0,
        f = 0,
        e = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation(),
        f = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation(),
        e = -this.m_mass * (this.m_constant - (e + this.m_ratio * f));
        c.m_sweep.c.x += c.m_invMass * e * this.m_J.linearA.x;
        c.m_sweep.c.y += c.m_invMass * e * this.m_J.linearA.y;
        c.m_sweep.a += c.m_invI * e * this.m_J.angularA;
        d.m_sweep.c.x += d.m_invMass * e * this.m_J.linearB.x;
        d.m_sweep.c.y += d.m_invMass * e * this.m_J.linearB.y;
        d.m_sweep.a += d.m_invI * e * this.m_J.angularB;
        c.SynchronizeTransform();
        d.SynchronizeTransform();
        return 0 < a.b2_linearSlop
    };
    Box2D.inherit(t, Box2D.Dynamics.Joints.b2JointDef);
    t.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    t.b2GearJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments)
    };
    t.prototype.b2GearJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_gearJoint;
        this.joint2 = this.joint1 = null;
        this.ratio = 1
    };
    y.b2Jacobian = function() {
        this.linearA = new f;
        this.linearB = new f
    };
    y.prototype.SetZero = function() {
        this.linearA.SetZero();
        this.angularA = 0;
        this.linearB.SetZero();
        this.angularB = 0
    };
    y.prototype.Set = function(a, c, d, e) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        this.linearA.SetV(a);
        this.angularA = c;
        this.linearB.SetV(d);
        this.angularB = e
    };
    y.prototype.Compute = function(a, c, d, e) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        return this.linearA.x * a.x + this.linearA.y * a.y + this.angularA * c + (this.linearB.x * d.x + this.linearB.y * d.y) + this.angularB * e
    };
    w.b2Joint = function() {
        this.m_edgeA = new K;
        this.m_edgeB = new K;
        this.m_localCenterA = new f;
        this.m_localCenterB = new f
    };
    w.prototype.GetType = function() {
        return this.m_type
    };
    w.prototype.GetAnchorA = function() {
        return null
    };
    w.prototype.GetAnchorB = function() {
        return null
    };
    w.prototype.GetReactionForce = function(a) {
        return null
    };
    w.prototype.GetReactionTorque = function(a) {
        return 0
    };
    w.prototype.GetBodyA = function() {
        return this.m_bodyA
    };
    w.prototype.GetBodyB = function() {
        return this.m_bodyB
    };
    w.prototype.GetNext = function() {
        return this.m_next
    };
    w.prototype.GetUserData = function() {
        return this.m_userData
    };
    w.prototype.SetUserData = function(a) {
        this.m_userData = a
    };
    w.prototype.IsActive = function() {
        return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
    };
    w.Create = function(a, c) {
        var d = null;
        switch (a.type) {
        case w.e_distanceJoint:
            d = new l(a instanceof h ? a: null);
            break;
        case w.e_mouseJoint:
            d = new G(a instanceof I ? a: null);
            break;
        case w.e_prismaticJoint:
            d = new J(a instanceof M ? a: null);
            break;
        case w.e_revoluteJoint:
            d = new H(a instanceof L ? a: null);
            break;
        case w.e_pulleyJoint:
            d = new D(a instanceof P ? a: null);
            break;
        case w.e_gearJoint:
            d = new v(a instanceof t ? a: null);
            break;
        case w.e_lineJoint:
            d = new n(a instanceof F ? a: null);
            break;
        case w.e_weldJoint:
            d = new Q(a instanceof N ? a: null);
            break;
        case w.e_frictionJoint:
            d = new q(a instanceof z ? a: null)
        }
        return d
    };
    w.Destroy = function(a, c) {};
    w.prototype.b2Joint = function(c) {
        a.b2Assert(c.bodyA != c.bodyB);
        this.m_type = c.type;
        this.m_next = this.m_prev = null;
        this.m_bodyA = c.bodyA;
        this.m_bodyB = c.bodyB;
        this.m_collideConnected = c.collideConnected;
        this.m_islandFlag = !1;
        this.m_userData = c.userData
    };
    w.prototype.InitVelocityConstraints = function(a) {};
    w.prototype.SolveVelocityConstraints = function(a) {};
    w.prototype.FinalizeVelocityConstraints = function() {};
    w.prototype.SolvePositionConstraints = function(a) {
        return ! 1
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
        Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
        Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
        Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
        Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
        Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
        Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
        Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
        Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
        Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
        Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
        Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
        Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
        Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3
    });
    B.b2JointDef = function() {};
    B.prototype.b2JointDef = function() {
        this.type = w.e_unknownJoint;
        this.bodyB = this.bodyA = this.userData = null;
        this.collideConnected = !1
    };
    K.b2JointEdge = function() {};
    Box2D.inherit(n, Box2D.Dynamics.Joints.b2Joint);
    n.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    n.b2LineJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_localXAxis1 = new f;
        this.m_localYAxis1 = new f;
        this.m_axis = new f;
        this.m_perp = new f;
        this.m_K = new c;
        this.m_impulse = new f
    };
    n.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    n.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    n.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y))
    };
    n.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.y
    };
    n.prototype.GetJointTranslation = function() {
        var a = this.m_bodyA,
        c = this.m_bodyB,
        d = a.GetWorldPoint(this.m_localAnchor1),
        e = c.GetWorldPoint(this.m_localAnchor2),
        c = e.x - d.x,
        d = e.y - d.y,
        a = a.GetWorldVector(this.m_localXAxis1);
        return a.x * c + a.y * d
    };
    n.prototype.GetJointSpeed = function() {
        var a = this.m_bodyA,
        c = this.m_bodyB,
        d;
        d = a.m_xf.R;
        var e = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
        f = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
        g = d.col1.x * e + d.col2.x * f,
        f = d.col1.y * e + d.col2.y * f,
        e = g;
        d = c.m_xf.R;
        var h = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
        p = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
        g = d.col1.x * h + d.col2.x * p,
        p = d.col1.y * h + d.col2.y * p,
        h = g;
        d = c.m_sweep.c.x + h - (a.m_sweep.c.x + e);
        var g = c.m_sweep.c.y + p - (a.m_sweep.c.y + f),
        r = a.GetWorldVector(this.m_localXAxis1),
        l = a.m_linearVelocity,
        n = c.m_linearVelocity,
        a = a.m_angularVelocity,
        c = c.m_angularVelocity;
        return d * -a * r.y + g * a * r.x + (r.x * (n.x + -c * p - l.x - -a * f) + r.y * (n.y + c * h - l.y - a * e))
    };
    n.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    n.prototype.EnableLimit = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableLimit = a
    };
    n.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation
    };
    n.prototype.GetUpperLimit = function() {
        return this.m_upperTranslation
    };
    n.prototype.SetLimits = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_lowerTranslation = a;
        this.m_upperTranslation = c
    };
    n.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor
    };
    n.prototype.EnableMotor = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableMotor = a
    };
    n.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    };
    n.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    n.prototype.SetMaxMotorForce = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_maxMotorForce = a
    };
    n.prototype.GetMaxMotorForce = function() {
        return this.m_maxMotorForce
    };
    n.prototype.GetMotorForce = function() {
        return this.m_motorImpulse
    };
    n.prototype.b2LineJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_localXAxis1.SetV(a.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = a.lowerTranslation;
        this.m_upperTranslation = a.upperTranslation;
        this.m_maxMotorForce = a.maxMotorForce;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = w.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    };
    n.prototype.InitVelocityConstraints = function(c) {
        var d = this.m_bodyA,
        f = this.m_bodyB,
        g, h = 0;
        this.m_localCenterA.SetV(d.GetLocalCenter());
        this.m_localCenterB.SetV(f.GetLocalCenter());
        var l = d.GetTransform();
        f.GetTransform();
        g = d.m_xf.R;
        var n = this.m_localAnchor1.x - this.m_localCenterA.x,
        p = this.m_localAnchor1.y - this.m_localCenterA.y,
        h = g.col1.x * n + g.col2.x * p,
        p = g.col1.y * n + g.col2.y * p,
        n = h;
        g = f.m_xf.R;
        var r = this.m_localAnchor2.x - this.m_localCenterB.x,
        A = this.m_localAnchor2.y - this.m_localCenterB.y,
        h = g.col1.x * r + g.col2.x * A,
        A = g.col1.y * r + g.col2.y * A,
        r = h;
        g = f.m_sweep.c.x + r - d.m_sweep.c.x - n;
        h = f.m_sweep.c.y + A - d.m_sweep.c.y - p;
        this.m_invMassA = d.m_invMass;
        this.m_invMassB = f.m_invMass;
        this.m_invIA = d.m_invI;
        this.m_invIB = f.m_invI;
        this.m_axis.SetV(e.MulMV(l.R, this.m_localXAxis1));
        this.m_a1 = (g + n) * this.m_axis.y - (h + p) * this.m_axis.x;
        this.m_a2 = r * this.m_axis.y - A * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass: 0;
        this.m_perp.SetV(e.MulMV(l.R, this.m_localYAxis1));
        this.m_s1 = (g + n) * this.m_perp.y - (h + p) * this.m_perp.x;
        this.m_s2 = r * this.m_perp.y - A * this.m_perp.x;
        l = this.m_invMassA;
        n = this.m_invMassB;
        p = this.m_invIA;
        r = this.m_invIB;
        this.m_K.col1.x = l + n + p * this.m_s1 * this.m_s1 + r * this.m_s2 * this.m_s2;
        this.m_K.col1.y = p * this.m_s1 * this.m_a1 + r * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = l + n + p * this.m_a1 * this.m_a1 + r * this.m_a2 * this.m_a2;
        this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * h, e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? this.m_limitState = w.e_equalLimits: g <= this.m_lowerTranslation ? this.m_limitState != w.e_atLowerLimit && (this.m_limitState = w.e_atLowerLimit, this.m_impulse.y = 0) : g >= this.m_upperTranslation ? this.m_limitState != w.e_atUpperLimit && (this.m_limitState = w.e_atUpperLimit, this.m_impulse.y = 0) : (this.m_limitState = w.e_inactiveLimit, this.m_impulse.y = 0)) : this.m_limitState = w.e_inactiveLimit;
        0 == this.m_enableMotor && (this.m_motorImpulse = 0);
        c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y, h = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1, l = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2, d.m_linearVelocity.x -= this.m_invMassA * c, d.m_linearVelocity.y -= this.m_invMassA * g, d.m_angularVelocity -= this.m_invIA * h, f.m_linearVelocity.x += this.m_invMassB * c, f.m_linearVelocity.y += this.m_invMassB * g, f.m_angularVelocity += this.m_invIB * l) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    n.prototype.SolveVelocityConstraints = function(a) {
        var c = this.m_bodyA,
        d = this.m_bodyB,
        g = c.m_linearVelocity,
        h = c.m_angularVelocity,
        l = d.m_linearVelocity,
        n = d.m_angularVelocity,
        p = 0,
        r = 0,
        A = 0,
        q = 0;
        this.m_enableMotor && this.m_limitState != w.e_equalLimits && (q = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (l.x - g.x) + this.m_axis.y * (l.y - g.y) + this.m_a2 * n - this.m_a1 * h)), p = this.m_motorImpulse, r = a.dt * this.m_maxMotorForce, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + q, -r, r), q = this.m_motorImpulse - p, p = q * this.m_axis.x, r = q * this.m_axis.y, A = q * this.m_a1, q *= this.m_a2, g.x -= this.m_invMassA * p, g.y -= this.m_invMassA * r, h -= this.m_invIA * A, l.x += this.m_invMassB * p, l.y += this.m_invMassB * r, n += this.m_invIB * q);
        r = this.m_perp.x * (l.x - g.x) + this.m_perp.y * (l.y - g.y) + this.m_s2 * n - this.m_s1 * h;
        this.m_enableLimit && this.m_limitState != w.e_inactiveLimit ? (A = this.m_axis.x * (l.x - g.x) + this.m_axis.y * (l.y - g.y) + this.m_a2 * n - this.m_a1 * h, p = this.m_impulse.Copy(), a = this.m_K.Solve(new f, -r, -A), this.m_impulse.Add(a), this.m_limitState == w.e_atLowerLimit ? this.m_impulse.y = e.Max(this.m_impulse.y, 0) : this.m_limitState == w.e_atUpperLimit && (this.m_impulse.y = e.Min(this.m_impulse.y, 0)), r = -r - (this.m_impulse.y - p.y) * this.m_K.col2.x, A = 0, A = 0 != this.m_K.col1.x ? r / this.m_K.col1.x + p.x: p.x, this.m_impulse.x = A, a.x = this.m_impulse.x - p.x, a.y = this.m_impulse.y - p.y, p = a.x * this.m_perp.x + a.y * this.m_axis.x, r = a.x * this.m_perp.y + a.y * this.m_axis.y, A = a.x * this.m_s1 + a.y * this.m_a1, q = a.x * this.m_s2 + a.y * this.m_a2) : (a = 0, a = 0 != this.m_K.col1.x ? -r / this.m_K.col1.x: 0, this.m_impulse.x += a, p = a * this.m_perp.x, r = a * this.m_perp.y, A = a * this.m_s1, q = a * this.m_s2);
        g.x -= this.m_invMassA * p;
        g.y -= this.m_invMassA * r;
        h -= this.m_invIA * A;
        l.x += this.m_invMassB * p;
        l.y += this.m_invMassB * r;
        n += this.m_invIB * q;
        c.m_linearVelocity.SetV(g);
        c.m_angularVelocity = h;
        d.m_linearVelocity.SetV(l);
        d.m_angularVelocity = n
    };
    n.prototype.SolvePositionConstraints = function(d) {
        d = this.m_bodyA;
        var g = this.m_bodyB,
        x = d.m_sweep.c,
        u = d.m_sweep.a,
        h = g.m_sweep.c,
        l = g.m_sweep.a,
        n, p = 0,
        r = 0,
        q = 0,
        w = 0,
        t = n = 0,
        v = 0,
        r = !1,
        y = 0,
        z = c.FromAngle(u),
        q = c.FromAngle(l);
        n = z;
        var v = this.m_localAnchor1.x - this.m_localCenterA.x,
        B = this.m_localAnchor1.y - this.m_localCenterA.y,
        p = n.col1.x * v + n.col2.x * B,
        B = n.col1.y * v + n.col2.y * B,
        v = p;
        n = q;
        q = this.m_localAnchor2.x - this.m_localCenterB.x;
        w = this.m_localAnchor2.y - this.m_localCenterB.y;
        p = n.col1.x * q + n.col2.x * w;
        w = n.col1.y * q + n.col2.y * w;
        q = p;
        n = h.x + q - x.x - v;
        p = h.y + w - x.y - B;
        if (this.m_enableLimit) {
            this.m_axis = e.MulMV(z, this.m_localXAxis1);
            this.m_a1 = (n + v) * this.m_axis.y - (p + B) * this.m_axis.x;
            this.m_a2 = q * this.m_axis.y - w * this.m_axis.x;
            var D = this.m_axis.x * n + this.m_axis.y * p;
            e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? (y = e.Clamp(D, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection), t = e.Abs(D), r = !0) : D <= this.m_lowerTranslation ? (y = e.Clamp(D - this.m_lowerTranslation + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), t = this.m_lowerTranslation - D, r = !0) : D >= this.m_upperTranslation && (y = e.Clamp(D - this.m_upperTranslation + a.b2_linearSlop, 0, a.b2_maxLinearCorrection), t = D - this.m_upperTranslation, r = !0)
        }
        this.m_perp = e.MulMV(z, this.m_localYAxis1);
        this.m_s1 = (n + v) * this.m_perp.y - (p + B) * this.m_perp.x;
        this.m_s2 = q * this.m_perp.y - w * this.m_perp.x;
        z = new f;
        B = this.m_perp.x * n + this.m_perp.y * p;
        t = e.Max(t, e.Abs(B));
        v = 0;
        r ? (r = this.m_invMassA, q = this.m_invMassB, w = this.m_invIA, n = this.m_invIB, this.m_K.col1.x = r + q + w * this.m_s1 * this.m_s1 + n * this.m_s2 * this.m_s2, this.m_K.col1.y = w * this.m_s1 * this.m_a1 + n * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = r + q + w * this.m_a1 * this.m_a1 + n * this.m_a2 * this.m_a2, this.m_K.Solve(z, -B, -y)) : (r = this.m_invMassA, q = this.m_invMassB, w = this.m_invIA, n = this.m_invIB, y = r + q + w * this.m_s1 * this.m_s1 + n * this.m_s2 * this.m_s2, z.x = 0 != y ? -B / y: 0, z.y = 0);
        y = z.x * this.m_perp.x + z.y * this.m_axis.x;
        r = z.x * this.m_perp.y + z.y * this.m_axis.y;
        B = z.x * this.m_s1 + z.y * this.m_a1;
        z = z.x * this.m_s2 + z.y * this.m_a2;
        x.x -= this.m_invMassA * y;
        x.y -= this.m_invMassA * r;
        u -= this.m_invIA * B;
        h.x += this.m_invMassB * y;
        h.y += this.m_invMassB * r;
        l += this.m_invIB * z;
        d.m_sweep.a = u;
        g.m_sweep.a = l;
        d.SynchronizeTransform();
        g.SynchronizeTransform();
        return t <= a.b2_linearSlop && v <= a.b2_angularSlop
    };
    Box2D.inherit(F, Box2D.Dynamics.Joints.b2JointDef);
    F.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    F.b2LineJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f;
        this.localAxisA = new f
    };
    F.prototype.b2LineJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_lineJoint;
        this.localAxisA.Set(1, 0);
        this.enableLimit = !1;
        this.upperTranslation = this.lowerTranslation = 0;
        this.enableMotor = !1;
        this.motorSpeed = this.maxMotorForce = 0
    };
    F.prototype.Initialize = function(a, c, d, e) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.localAxisA = this.bodyA.GetLocalVector(e)
    };
    Box2D.inherit(G, Box2D.Dynamics.Joints.b2Joint);
    G.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    G.b2MouseJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new c;
        this.K1 = new c;
        this.K2 = new c;
        this.m_localAnchor = new f;
        this.m_target = new f;
        this.m_impulse = new f;
        this.m_mass = new c;
        this.m_C = new f
    };
    G.prototype.GetAnchorA = function() {
        return this.m_target
    };
    G.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor)
    };
    G.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * this.m_impulse.x, a * this.m_impulse.y)
    };
    G.prototype.GetReactionTorque = function(a) {
        return 0
    };
    G.prototype.GetTarget = function() {
        return this.m_target
    };
    G.prototype.SetTarget = function(a) {
        0 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
        this.m_target = a
    };
    G.prototype.GetMaxForce = function() {
        return this.m_maxForce
    };
    G.prototype.SetMaxForce = function(a) {
        void 0 === a && (a = 0);
        this.m_maxForce = a
    };
    G.prototype.GetFrequency = function() {
        return this.m_frequencyHz
    };
    G.prototype.SetFrequency = function(a) {
        void 0 === a && (a = 0);
        this.m_frequencyHz = a
    };
    G.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio
    };
    G.prototype.SetDampingRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_dampingRatio = a
    };
    G.prototype.b2MouseJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_target.SetV(a.target);
        var c = this.m_target.x - this.m_bodyB.m_xf.position.x,
        d = this.m_target.y - this.m_bodyB.m_xf.position.y,
        e = this.m_bodyB.m_xf.R;
        this.m_localAnchor.x = c * e.col1.x + d * e.col1.y;
        this.m_localAnchor.y = c * e.col2.x + d * e.col2.y;
        this.m_maxForce = a.maxForce;
        this.m_impulse.SetZero();
        this.m_frequencyHz = a.frequencyHz;
        this.m_dampingRatio = a.dampingRatio;
        this.m_gamma = this.m_beta = 0
    };
    G.prototype.InitVelocityConstraints = function(a) {
        var c = this.m_bodyB,
        d = c.GetMass(),
        e = 2 * Math.PI * this.m_frequencyHz,
        f = d * e * e;
        this.m_gamma = a.dt * (2 * d * this.m_dampingRatio * e + a.dt * f);
        this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma: 0;
        this.m_beta = a.dt * f * this.m_gamma;
        var f = c.m_xf.R,
        d = this.m_localAnchor.x - c.m_sweep.localCenter.x,
        e = this.m_localAnchor.y - c.m_sweep.localCenter.y,
        g = f.col1.x * d + f.col2.x * e,
        e = f.col1.y * d + f.col2.y * e,
        d = g,
        f = c.m_invMass,
        g = c.m_invI;
        this.K1.col1.x = f;
        this.K1.col2.x = 0;
        this.K1.col1.y = 0;
        this.K1.col2.y = f;
        this.K2.col1.x = g * e * e;
        this.K2.col2.x = -g * d * e;
        this.K2.col1.y = -g * d * e;
        this.K2.col2.y = g * d * d;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.col1.x += this.m_gamma;
        this.K.col2.y += this.m_gamma;
        this.K.GetInverse(this.m_mass);
        this.m_C.x = c.m_sweep.c.x + d - this.m_target.x;
        this.m_C.y = c.m_sweep.c.y + e - this.m_target.y;
        c.m_angularVelocity *= .98;
        this.m_impulse.x *= a.dtRatio;
        this.m_impulse.y *= a.dtRatio;
        c.m_linearVelocity.x += f * this.m_impulse.x;
        c.m_linearVelocity.y += f * this.m_impulse.y;
        c.m_angularVelocity += g * (d * this.m_impulse.y - e * this.m_impulse.x)
    };
    G.prototype.SolveVelocityConstraints = function(a) {
        var c = this.m_bodyB,
        d, e = 0,
        f = 0;
        d = c.m_xf.R;
        var g = this.m_localAnchor.x - c.m_sweep.localCenter.x,
        h = this.m_localAnchor.y - c.m_sweep.localCenter.y,
        e = d.col1.x * g + d.col2.x * h,
        h = d.col1.y * g + d.col2.y * h,
        g = e,
        e = c.m_linearVelocity.x + -c.m_angularVelocity * h,
        p = c.m_linearVelocity.y + c.m_angularVelocity * g;
        d = this.m_mass;
        e = e + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
        f = p + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
        p = -(d.col1.x * e + d.col2.x * f);
        f = -(d.col1.y * e + d.col2.y * f);
        d = this.m_impulse.x;
        e = this.m_impulse.y;
        this.m_impulse.x += p;
        this.m_impulse.y += f;
        a = a.dt * this.m_maxForce;
        this.m_impulse.LengthSquared() > a * a && this.m_impulse.Multiply(a / this.m_impulse.Length());
        p = this.m_impulse.x - d;
        f = this.m_impulse.y - e;
        c.m_linearVelocity.x += c.m_invMass * p;
        c.m_linearVelocity.y += c.m_invMass * f;
        c.m_angularVelocity += c.m_invI * (g * f - h * p)
    };
    G.prototype.SolvePositionConstraints = function(a) {
        return ! 0
    };
    Box2D.inherit(I, Box2D.Dynamics.Joints.b2JointDef);
    I.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    I.b2MouseJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.target = new f
    };
    I.prototype.b2MouseJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_mouseJoint;
        this.maxForce = 0;
        this.frequencyHz = 5;
        this.dampingRatio = .7
    };
    Box2D.inherit(J, Box2D.Dynamics.Joints.b2Joint);
    J.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    J.b2PrismaticJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_localXAxis1 = new f;
        this.m_localYAxis1 = new f;
        this.m_axis = new f;
        this.m_perp = new f;
        this.m_K = new d;
        this.m_impulse = new g
    };
    J.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    J.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    J.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
    };
    J.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.y
    };
    J.prototype.GetJointTranslation = function() {
        var a = this.m_bodyA,
        c = this.m_bodyB,
        d = a.GetWorldPoint(this.m_localAnchor1),
        e = c.GetWorldPoint(this.m_localAnchor2),
        c = e.x - d.x,
        d = e.y - d.y,
        a = a.GetWorldVector(this.m_localXAxis1);
        return a.x * c + a.y * d
    };
    J.prototype.GetJointSpeed = function() {
        var a = this.m_bodyA,
        c = this.m_bodyB,
        d;
        d = a.m_xf.R;
        var e = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
        f = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
        g = d.col1.x * e + d.col2.x * f,
        f = d.col1.y * e + d.col2.y * f,
        e = g;
        d = c.m_xf.R;
        var h = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
        p = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
        g = d.col1.x * h + d.col2.x * p,
        p = d.col1.y * h + d.col2.y * p,
        h = g;
        d = c.m_sweep.c.x + h - (a.m_sweep.c.x + e);
        var g = c.m_sweep.c.y + p - (a.m_sweep.c.y + f),
        r = a.GetWorldVector(this.m_localXAxis1),
        l = a.m_linearVelocity,
        n = c.m_linearVelocity,
        a = a.m_angularVelocity,
        c = c.m_angularVelocity;
        return d * -a * r.y + g * a * r.x + (r.x * (n.x + -c * p - l.x - -a * f) + r.y * (n.y + c * h - l.y - a * e))
    };
    J.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    J.prototype.EnableLimit = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableLimit = a
    };
    J.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation
    };
    J.prototype.GetUpperLimit = function() {
        return this.m_upperTranslation
    };
    J.prototype.SetLimits = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_lowerTranslation = a;
        this.m_upperTranslation = c
    };
    J.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor
    };
    J.prototype.EnableMotor = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableMotor = a
    };
    J.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    };
    J.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    J.prototype.SetMaxMotorForce = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_maxMotorForce = a
    };
    J.prototype.GetMotorForce = function() {
        return this.m_motorImpulse
    };
    J.prototype.b2PrismaticJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_localXAxis1.SetV(a.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_refAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = a.lowerTranslation;
        this.m_upperTranslation = a.upperTranslation;
        this.m_maxMotorForce = a.maxMotorForce;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = w.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    };
    J.prototype.InitVelocityConstraints = function(c) {
        var d = this.m_bodyA,
        f = this.m_bodyB,
        g, h = 0;
        this.m_localCenterA.SetV(d.GetLocalCenter());
        this.m_localCenterB.SetV(f.GetLocalCenter());
        var l = d.GetTransform();
        f.GetTransform();
        g = d.m_xf.R;
        var n = this.m_localAnchor1.x - this.m_localCenterA.x,
        p = this.m_localAnchor1.y - this.m_localCenterA.y,
        h = g.col1.x * n + g.col2.x * p,
        p = g.col1.y * n + g.col2.y * p,
        n = h;
        g = f.m_xf.R;
        var r = this.m_localAnchor2.x - this.m_localCenterB.x,
        q = this.m_localAnchor2.y - this.m_localCenterB.y,
        h = g.col1.x * r + g.col2.x * q,
        q = g.col1.y * r + g.col2.y * q,
        r = h;
        g = f.m_sweep.c.x + r - d.m_sweep.c.x - n;
        h = f.m_sweep.c.y + q - d.m_sweep.c.y - p;
        this.m_invMassA = d.m_invMass;
        this.m_invMassB = f.m_invMass;
        this.m_invIA = d.m_invI;
        this.m_invIB = f.m_invI;
        this.m_axis.SetV(e.MulMV(l.R, this.m_localXAxis1));
        this.m_a1 = (g + n) * this.m_axis.y - (h + p) * this.m_axis.x;
        this.m_a2 = r * this.m_axis.y - q * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass > Number.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass);
        this.m_perp.SetV(e.MulMV(l.R, this.m_localYAxis1));
        this.m_s1 = (g + n) * this.m_perp.y - (h + p) * this.m_perp.x;
        this.m_s2 = r * this.m_perp.y - q * this.m_perp.x;
        l = this.m_invMassA;
        n = this.m_invMassB;
        p = this.m_invIA;
        r = this.m_invIB;
        this.m_K.col1.x = l + n + p * this.m_s1 * this.m_s1 + r * this.m_s2 * this.m_s2;
        this.m_K.col1.y = p * this.m_s1 + r * this.m_s2;
        this.m_K.col1.z = p * this.m_s1 * this.m_a1 + r * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = p + r;
        this.m_K.col2.z = p * this.m_a1 + r * this.m_a2;
        this.m_K.col3.x = this.m_K.col1.z;
        this.m_K.col3.y = this.m_K.col2.z;
        this.m_K.col3.z = l + n + p * this.m_a1 * this.m_a1 + r * this.m_a2 * this.m_a2;
        this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * h, e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? this.m_limitState = w.e_equalLimits: g <= this.m_lowerTranslation ? this.m_limitState != w.e_atLowerLimit && (this.m_limitState = w.e_atLowerLimit, this.m_impulse.z = 0) : g >= this.m_upperTranslation ? this.m_limitState != w.e_atUpperLimit && (this.m_limitState = w.e_atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = w.e_inactiveLimit, this.m_impulse.z = 0)) : this.m_limitState = w.e_inactiveLimit;
        0 == this.m_enableMotor && (this.m_motorImpulse = 0);
        c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y, h = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, l = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2, d.m_linearVelocity.x -= this.m_invMassA * c, d.m_linearVelocity.y -= this.m_invMassA * g, d.m_angularVelocity -= this.m_invIA * h, f.m_linearVelocity.x += this.m_invMassB * c, f.m_linearVelocity.y += this.m_invMassB * g, f.m_angularVelocity += this.m_invIB * l) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    J.prototype.SolveVelocityConstraints = function(a) {
        var c = this.m_bodyA,
        d = this.m_bodyB,
        h = c.m_linearVelocity,
        l = c.m_angularVelocity,
        n = d.m_linearVelocity,
        q = d.m_angularVelocity,
        p = 0,
        r = 0,
        A = 0,
        t = 0;
        this.m_enableMotor && this.m_limitState != w.e_equalLimits && (t = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (n.x - h.x) + this.m_axis.y * (n.y - h.y) + this.m_a2 * q - this.m_a1 * l)), p = this.m_motorImpulse, a = a.dt * this.m_maxMotorForce, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + t, -a, a), t = this.m_motorImpulse - p, p = t * this.m_axis.x, r = t * this.m_axis.y, A = t * this.m_a1, t *= this.m_a2, h.x -= this.m_invMassA * p, h.y -= this.m_invMassA * r, l -= this.m_invIA * A, n.x += this.m_invMassB * p, n.y += this.m_invMassB * r, q += this.m_invIB * t);
        A = this.m_perp.x * (n.x - h.x) + this.m_perp.y * (n.y - h.y) + this.m_s2 * q - this.m_s1 * l;
        r = q - l;
        this.m_enableLimit && this.m_limitState != w.e_inactiveLimit ? (a = this.m_axis.x * (n.x - h.x) + this.m_axis.y * (n.y - h.y) + this.m_a2 * q - this.m_a1 * l, p = this.m_impulse.Copy(), a = this.m_K.Solve33(new g, -A, -r, -a), this.m_impulse.Add(a), this.m_limitState == w.e_atLowerLimit ? this.m_impulse.z = e.Max(this.m_impulse.z, 0) : this.m_limitState == w.e_atUpperLimit && (this.m_impulse.z = e.Min(this.m_impulse.z, 0)), A = -A - (this.m_impulse.z - p.z) * this.m_K.col3.x, r = -r - (this.m_impulse.z - p.z) * this.m_K.col3.y, r = this.m_K.Solve22(new f, A, r), r.x += p.x, r.y += p.y, this.m_impulse.x = r.x, this.m_impulse.y = r.y, a.x = this.m_impulse.x - p.x, a.y = this.m_impulse.y - p.y, a.z = this.m_impulse.z - p.z, p = a.x * this.m_perp.x + a.z * this.m_axis.x, r = a.x * this.m_perp.y + a.z * this.m_axis.y, A = a.x * this.m_s1 + a.y + a.z * this.m_a1, t = a.x * this.m_s2 + a.y + a.z * this.m_a2) : (a = this.m_K.Solve22(new f, -A, -r), this.m_impulse.x += a.x, this.m_impulse.y += a.y, p = a.x * this.m_perp.x, r = a.x * this.m_perp.y, A = a.x * this.m_s1 + a.y, t = a.x * this.m_s2 + a.y);
        h.x -= this.m_invMassA * p;
        h.y -= this.m_invMassA * r;
        l -= this.m_invIA * A;
        n.x += this.m_invMassB * p;
        n.y += this.m_invMassB * r;
        q += this.m_invIB * t;
        c.m_linearVelocity.SetV(h);
        c.m_angularVelocity = l;
        d.m_linearVelocity.SetV(n);
        d.m_angularVelocity = q
    };
    J.prototype.SolvePositionConstraints = function(d) {
        d = this.m_bodyA;
        var k = this.m_bodyB,
        h = d.m_sweep.c,
        l = d.m_sweep.a,
        n = k.m_sweep.c,
        q = k.m_sweep.a,
        C, p = 0,
        r = 0,
        A = 0,
        w = p = C = 0,
        t = 0,
        r = !1,
        v = 0,
        y = c.FromAngle(l),
        z = c.FromAngle(q);
        C = y;
        var t = this.m_localAnchor1.x - this.m_localCenterA.x,
        B = this.m_localAnchor1.y - this.m_localCenterA.y,
        p = C.col1.x * t + C.col2.x * B,
        B = C.col1.y * t + C.col2.y * B,
        t = p;
        C = z;
        z = this.m_localAnchor2.x - this.m_localCenterB.x;
        A = this.m_localAnchor2.y - this.m_localCenterB.y;
        p = C.col1.x * z + C.col2.x * A;
        A = C.col1.y * z + C.col2.y * A;
        z = p;
        C = n.x + z - h.x - t;
        p = n.y + A - h.y - B;
        if (this.m_enableLimit) {
            this.m_axis = e.MulMV(y, this.m_localXAxis1);
            this.m_a1 = (C + t) * this.m_axis.y - (p + B) * this.m_axis.x;
            this.m_a2 = z * this.m_axis.y - A * this.m_axis.x;
            var D = this.m_axis.x * C + this.m_axis.y * p;
            e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? (v = e.Clamp(D, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection), w = e.Abs(D), r = !0) : D <= this.m_lowerTranslation ? (v = e.Clamp(D - this.m_lowerTranslation + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), w = this.m_lowerTranslation - D, r = !0) : D >= this.m_upperTranslation && (v = e.Clamp(D - this.m_upperTranslation + a.b2_linearSlop, 0, a.b2_maxLinearCorrection), w = D - this.m_upperTranslation, r = !0)
        }
        this.m_perp = e.MulMV(y, this.m_localYAxis1);
        this.m_s1 = (C + t) * this.m_perp.y - (p + B) * this.m_perp.x;
        this.m_s2 = z * this.m_perp.y - A * this.m_perp.x;
        y = new g;
        B = this.m_perp.x * C + this.m_perp.y * p;
        z = q - l - this.m_refAngle;
        w = e.Max(w, e.Abs(B));
        t = e.Abs(z);
        r ? (r = this.m_invMassA, A = this.m_invMassB, C = this.m_invIA, p = this.m_invIB, this.m_K.col1.x = r + A + C * this.m_s1 * this.m_s1 + p * this.m_s2 * this.m_s2, this.m_K.col1.y = C * this.m_s1 + p * this.m_s2, this.m_K.col1.z = C * this.m_s1 * this.m_a1 + p * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = C + p, this.m_K.col2.z = C * this.m_a1 + p * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = r + A + C * this.m_a1 * this.m_a1 + p * this.m_a2 * this.m_a2, this.m_K.Solve33(y, -B, -z, -v)) : (r = this.m_invMassA, A = this.m_invMassB, C = this.m_invIA, p = this.m_invIB, v = C * this.m_s1 + p * this.m_s2, D = C + p, this.m_K.col1.Set(r + A + C * this.m_s1 * this.m_s1 + p * this.m_s2 * this.m_s2, v, 0), this.m_K.col2.Set(v, D, 0), v = this.m_K.Solve22(new f, -B, -z), y.x = v.x, y.y = v.y, y.z = 0);
        v = y.x * this.m_perp.x + y.z * this.m_axis.x;
        r = y.x * this.m_perp.y + y.z * this.m_axis.y;
        B = y.x * this.m_s1 + y.y + y.z * this.m_a1;
        y = y.x * this.m_s2 + y.y + y.z * this.m_a2;
        h.x -= this.m_invMassA * v;
        h.y -= this.m_invMassA * r;
        l -= this.m_invIA * B;
        n.x += this.m_invMassB * v;
        n.y += this.m_invMassB * r;
        q += this.m_invIB * y;
        d.m_sweep.a = l;
        k.m_sweep.a = q;
        d.SynchronizeTransform();
        k.SynchronizeTransform();
        return w <= a.b2_linearSlop && t <= a.b2_angularSlop
    };
    Box2D.inherit(M, Box2D.Dynamics.Joints.b2JointDef);
    M.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    M.b2PrismaticJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f;
        this.localAxisA = new f
    };
    M.prototype.b2PrismaticJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_prismaticJoint;
        this.localAxisA.Set(1, 0);
        this.referenceAngle = 0;
        this.enableLimit = !1;
        this.upperTranslation = this.lowerTranslation = 0;
        this.enableMotor = !1;
        this.motorSpeed = this.maxMotorForce = 0
    };
    M.prototype.Initialize = function(a, c, d, e) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.localAxisA = this.bodyA.GetLocalVector(e);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    };
    Box2D.inherit(D, Box2D.Dynamics.Joints.b2Joint);
    D.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    D.b2PulleyJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_groundAnchor1 = new f;
        this.m_groundAnchor2 = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_u1 = new f;
        this.m_u2 = new f
    };
    D.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    D.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    D.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * this.m_impulse * this.m_u2.x, a * this.m_impulse * this.m_u2.y)
    };
    D.prototype.GetReactionTorque = function(a) {
        return 0
    };
    D.prototype.GetGroundAnchorA = function() {
        var a = this.m_ground.m_xf.position.Copy();
        a.Add(this.m_groundAnchor1);
        return a
    };
    D.prototype.GetGroundAnchorB = function() {
        var a = this.m_ground.m_xf.position.Copy();
        a.Add(this.m_groundAnchor2);
        return a
    };
    D.prototype.GetLength1 = function() {
        var a = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
        c = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
        a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
        return Math.sqrt(c * c + a * a)
    };
    D.prototype.GetLength2 = function() {
        var a = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
        c = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x),
        a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
        return Math.sqrt(c * c + a * a)
    };
    D.prototype.GetRatio = function() {
        return this.m_ratio
    };
    D.prototype.b2PulleyJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_ground = this.m_bodyA.m_world.m_groundBody;
        this.m_groundAnchor1.x = a.groundAnchorA.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor1.y = a.groundAnchorA.y - this.m_ground.m_xf.position.y;
        this.m_groundAnchor2.x = a.groundAnchorB.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor2.y = a.groundAnchorB.y - this.m_ground.m_xf.position.y;
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_ratio = a.ratio;
        this.m_constant = a.lengthA + this.m_ratio * a.lengthB;
        this.m_maxLength1 = e.Min(a.maxLengthA, this.m_constant - this.m_ratio * D.b2_minPulleyLength);
        this.m_maxLength2 = e.Min(a.maxLengthB, (this.m_constant - D.b2_minPulleyLength) / this.m_ratio);
        this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    };
    D.prototype.InitVelocityConstraints = function(c) {
        var d = this.m_bodyA,
        e = this.m_bodyB,
        f;
        f = d.m_xf.R;
        var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
        h = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
        l = f.col1.x * g + f.col2.x * h,
        h = f.col1.y * g + f.col2.y * h,
        g = l;
        f = e.m_xf.R;
        var p = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
        r = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
        l = f.col1.x * p + f.col2.x * r,
        r = f.col1.y * p + f.col2.y * r,
        p = l;
        f = e.m_sweep.c.x + p;
        var l = e.m_sweep.c.y + r,
        n = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
        q = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
        this.m_u1.Set(d.m_sweep.c.x + g - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), d.m_sweep.c.y + h - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
        this.m_u2.Set(f - n, l - q);
        f = this.m_u1.Length();
        l = this.m_u2.Length();
        f > a.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero();
        l > a.b2_linearSlop ? this.m_u2.Multiply(1 / l) : this.m_u2.SetZero();
        0 < this.m_constant - f - this.m_ratio * l ? (this.m_state = w.e_inactiveLimit, this.m_impulse = 0) : this.m_state = w.e_atUpperLimit;
        f < this.m_maxLength1 ? (this.m_limitState1 = w.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = w.e_atUpperLimit;
        l < this.m_maxLength2 ? (this.m_limitState2 = w.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = w.e_atUpperLimit;
        f = g * this.m_u1.y - h * this.m_u1.x;
        l = p * this.m_u2.y - r * this.m_u2.x;
        this.m_limitMass1 = d.m_invMass + d.m_invI * f * f;
        this.m_limitMass2 = e.m_invMass + e.m_invI * l * l;
        this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
        this.m_limitMass1 = 1 / this.m_limitMass1;
        this.m_limitMass2 = 1 / this.m_limitMass2;
        this.m_pulleyMass = 1 / this.m_pulleyMass;
        c.warmStarting ? (this.m_impulse *= c.dtRatio, this.m_limitImpulse1 *= c.dtRatio, this.m_limitImpulse2 *= c.dtRatio, c = ( - this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, f = ( - this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, l = ( - this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, n = ( - this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, d.m_linearVelocity.x += d.m_invMass * c, d.m_linearVelocity.y += d.m_invMass * f, d.m_angularVelocity += d.m_invI * (g * f - h * c), e.m_linearVelocity.x += e.m_invMass * l, e.m_linearVelocity.y += e.m_invMass * n, e.m_angularVelocity += e.m_invI * (p * n - r * l)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    };
    D.prototype.SolveVelocityConstraints = function(a) {
        a = this.m_bodyA;
        var c = this.m_bodyB,
        d;
        d = a.m_xf.R;
        var f = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
        g = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
        h = d.col1.x * f + d.col2.x * g,
        g = d.col1.y * f + d.col2.y * g,
        f = h;
        d = c.m_xf.R;
        var l = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
        p = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
        h = d.col1.x * l + d.col2.x * p,
        p = d.col1.y * l + d.col2.y * p,
        l = h,
        r = h = d = 0,
        n = 0;
        d = n = d = n = r = h = d = 0;
        this.m_state == w.e_atUpperLimit && (d = a.m_linearVelocity.x + -a.m_angularVelocity * g, h = a.m_linearVelocity.y + a.m_angularVelocity * f, r = c.m_linearVelocity.x + -c.m_angularVelocity * p, n = c.m_linearVelocity.y + c.m_angularVelocity * l, d = -(this.m_u1.x * d + this.m_u1.y * h) - this.m_ratio * (this.m_u2.x * r + this.m_u2.y * n), n = this.m_pulleyMass * -d, d = this.m_impulse, this.m_impulse = e.Max(0, this.m_impulse + n), n = this.m_impulse - d, d = -n * this.m_u1.x, h = -n * this.m_u1.y, r = -this.m_ratio * n * this.m_u2.x, n = -this.m_ratio * n * this.m_u2.y, a.m_linearVelocity.x += a.m_invMass * d, a.m_linearVelocity.y += a.m_invMass * h, a.m_angularVelocity += a.m_invI * (f * h - g * d), c.m_linearVelocity.x += c.m_invMass * r, c.m_linearVelocity.y += c.m_invMass * n, c.m_angularVelocity += c.m_invI * (l * n - p * r));
        this.m_limitState1 == w.e_atUpperLimit && (d = a.m_linearVelocity.x + -a.m_angularVelocity * g, h = a.m_linearVelocity.y + a.m_angularVelocity * f, d = -(this.m_u1.x * d + this.m_u1.y * h), n = -this.m_limitMass1 * d, d = this.m_limitImpulse1, this.m_limitImpulse1 = e.Max(0, this.m_limitImpulse1 + n), n = this.m_limitImpulse1 - d, d = -n * this.m_u1.x, h = -n * this.m_u1.y, a.m_linearVelocity.x += a.m_invMass * d, a.m_linearVelocity.y += a.m_invMass * h, a.m_angularVelocity += a.m_invI * (f * h - g * d));
        this.m_limitState2 == w.e_atUpperLimit && (r = c.m_linearVelocity.x + -c.m_angularVelocity * p, n = c.m_linearVelocity.y + c.m_angularVelocity * l, d = -(this.m_u2.x * r + this.m_u2.y * n), n = -this.m_limitMass2 * d, d = this.m_limitImpulse2, this.m_limitImpulse2 = e.Max(0, this.m_limitImpulse2 + n), n = this.m_limitImpulse2 - d, r = -n * this.m_u2.x, n = -n * this.m_u2.y, c.m_linearVelocity.x += c.m_invMass * r, c.m_linearVelocity.y += c.m_invMass * n, c.m_angularVelocity += c.m_invI * (l * n - p * r))
    };
    D.prototype.SolvePositionConstraints = function(c) {
        c = this.m_bodyA;
        var d = this.m_bodyB,
        f, g = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
        h = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
        l = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
        n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
        p = 0,
        r = 0,
        q = 0,
        t = 0,
        v = f = 0,
        y = 0,
        z = 0,
        B = v = z = f = v = f = 0;
        this.m_state == w.e_atUpperLimit && (f = c.m_xf.R, p = this.m_localAnchor1.x - c.m_sweep.localCenter.x, r = this.m_localAnchor1.y - c.m_sweep.localCenter.y, v = f.col1.x * p + f.col2.x * r, r = f.col1.y * p + f.col2.y * r, p = v, f = d.m_xf.R, q = this.m_localAnchor2.x - d.m_sweep.localCenter.x, t = this.m_localAnchor2.y - d.m_sweep.localCenter.y, v = f.col1.x * q + f.col2.x * t, t = f.col1.y * q + f.col2.y * t, q = v, f = c.m_sweep.c.x + p, v = c.m_sweep.c.y + r, y = d.m_sweep.c.x + q, z = d.m_sweep.c.y + t, this.m_u1.Set(f - g, v - h), this.m_u2.Set(y - l, z - n), f = this.m_u1.Length(), v = this.m_u2.Length(), f > a.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero(), v > a.b2_linearSlop ? this.m_u2.Multiply(1 / v) : this.m_u2.SetZero(), f = this.m_constant - f - this.m_ratio * v, B = e.Max(B, -f), f = e.Clamp(f + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), z = -this.m_pulleyMass * f, f = -z * this.m_u1.x, v = -z * this.m_u1.y, y = -this.m_ratio * z * this.m_u2.x, z = -this.m_ratio * z * this.m_u2.y, c.m_sweep.c.x += c.m_invMass * f, c.m_sweep.c.y += c.m_invMass * v, c.m_sweep.a += c.m_invI * (p * v - r * f), d.m_sweep.c.x += d.m_invMass * y, d.m_sweep.c.y += d.m_invMass * z, d.m_sweep.a += d.m_invI * (q * z - t * y), c.SynchronizeTransform(), d.SynchronizeTransform());
        this.m_limitState1 == w.e_atUpperLimit && (f = c.m_xf.R, p = this.m_localAnchor1.x - c.m_sweep.localCenter.x, r = this.m_localAnchor1.y - c.m_sweep.localCenter.y, v = f.col1.x * p + f.col2.x * r, r = f.col1.y * p + f.col2.y * r, p = v, f = c.m_sweep.c.x + p, v = c.m_sweep.c.y + r, this.m_u1.Set(f - g, v - h), f = this.m_u1.Length(), f > a.b2_linearSlop ? (this.m_u1.x *= 1 / f, this.m_u1.y *= 1 / f) : this.m_u1.SetZero(), f = this.m_maxLength1 - f, B = e.Max(B, -f), f = e.Clamp(f + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), z = -this.m_limitMass1 * f, f = -z * this.m_u1.x, v = -z * this.m_u1.y, c.m_sweep.c.x += c.m_invMass * f, c.m_sweep.c.y += c.m_invMass * v, c.m_sweep.a += c.m_invI * (p * v - r * f), c.SynchronizeTransform());
        this.m_limitState2 == w.e_atUpperLimit && (f = d.m_xf.R, q = this.m_localAnchor2.x - d.m_sweep.localCenter.x, t = this.m_localAnchor2.y - d.m_sweep.localCenter.y, v = f.col1.x * q + f.col2.x * t, t = f.col1.y * q + f.col2.y * t, q = v, y = d.m_sweep.c.x + q, z = d.m_sweep.c.y + t, this.m_u2.Set(y - l, z - n), v = this.m_u2.Length(), v > a.b2_linearSlop ? (this.m_u2.x *= 1 / v, this.m_u2.y *= 1 / v) : this.m_u2.SetZero(), f = this.m_maxLength2 - v, B = e.Max(B, -f), f = e.Clamp(f + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), z = -this.m_limitMass2 * f, y = -z * this.m_u2.x, z = -z * this.m_u2.y, d.m_sweep.c.x += d.m_invMass * y, d.m_sweep.c.y += d.m_invMass * z, d.m_sweep.a += d.m_invI * (q * z - t * y), d.SynchronizeTransform());
        return B < a.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2
    });
    Box2D.inherit(P, Box2D.Dynamics.Joints.b2JointDef);
    P.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    P.b2PulleyJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.groundAnchorA = new f;
        this.groundAnchorB = new f;
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    P.prototype.b2PulleyJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_pulleyJoint;
        this.groundAnchorA.Set( - 1, 1);
        this.groundAnchorB.Set(1, 1);
        this.localAnchorA.Set( - 1, 0);
        this.localAnchorB.Set(1, 0);
        this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
        this.ratio = 1;
        this.collideConnected = !0
    };
    P.prototype.Initialize = function(a, c, d, e, f, g, h) {
        void 0 === h && (h = 0);
        this.bodyA = a;
        this.bodyB = c;
        this.groundAnchorA.SetV(d);
        this.groundAnchorB.SetV(e);
        this.localAnchorA = this.bodyA.GetLocalPoint(f);
        this.localAnchorB = this.bodyB.GetLocalPoint(g);
        a = f.x - d.x;
        d = f.y - d.y;
        this.lengthA = Math.sqrt(a * a + d * d);
        d = g.x - e.x;
        e = g.y - e.y;
        this.lengthB = Math.sqrt(d * d + e * e);
        this.ratio = h;
        h = this.lengthA + this.ratio * this.lengthB;
        this.maxLengthA = h - this.ratio * D.b2_minPulleyLength;
        this.maxLengthB = (h - D.b2_minPulleyLength) / this.ratio
    };
    Box2D.inherit(H, Box2D.Dynamics.Joints.b2Joint);
    H.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    H.b2RevoluteJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new c;
        this.K1 = new c;
        this.K2 = new c;
        this.K3 = new c;
        this.impulse3 = new g;
        this.impulse2 = new f;
        this.reduced = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_impulse = new g;
        this.m_mass = new d
    };
    H.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    H.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    H.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * this.m_impulse.x, a * this.m_impulse.y)
    };
    H.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.z
    };
    H.prototype.GetJointAngle = function() {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
    };
    H.prototype.GetJointSpeed = function() {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
    };
    H.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    H.prototype.EnableLimit = function(a) {
        this.m_enableLimit = a
    };
    H.prototype.GetLowerLimit = function() {
        return this.m_lowerAngle
    };
    H.prototype.GetUpperLimit = function() {
        return this.m_upperAngle
    };
    H.prototype.SetLimits = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.m_lowerAngle = a;
        this.m_upperAngle = c
    };
    H.prototype.IsMotorEnabled = function() {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        return this.m_enableMotor
    };
    H.prototype.EnableMotor = function(a) {
        this.m_enableMotor = a
    };
    H.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    };
    H.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    H.prototype.SetMaxMotorTorque = function(a) {
        void 0 === a && (a = 0);
        this.m_maxMotorTorque = a
    };
    H.prototype.GetMotorTorque = function() {
        return this.m_maxMotorTorque
    };
    H.prototype.b2RevoluteJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_referenceAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = 0;
        this.m_lowerAngle = a.lowerAngle;
        this.m_upperAngle = a.upperAngle;
        this.m_maxMotorTorque = a.maxMotorTorque;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = w.e_inactiveLimit
    };
    H.prototype.InitVelocityConstraints = function(c) {
        var d = this.m_bodyA,
        f = this.m_bodyB,
        g, h = 0;
        g = d.m_xf.R;
        var l = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
        n = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
        h = g.col1.x * l + g.col2.x * n,
        n = g.col1.y * l + g.col2.y * n,
        l = h;
        g = f.m_xf.R;
        var p = this.m_localAnchor2.x - f.m_sweep.localCenter.x,
        r = this.m_localAnchor2.y - f.m_sweep.localCenter.y,
        h = g.col1.x * p + g.col2.x * r,
        r = g.col1.y * p + g.col2.y * r,
        p = h;
        g = d.m_invMass;
        var h = f.m_invMass,
        q = d.m_invI,
        t = f.m_invI;
        this.m_mass.col1.x = g + h + n * n * q + r * r * t;
        this.m_mass.col2.x = -n * l * q - r * p * t;
        this.m_mass.col3.x = -n * q - r * t;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = g + h + l * l * q + p * p * t;
        this.m_mass.col3.y = l * q + p * t;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = q + t;
        this.m_motorMass = 1 / (q + t);
        0 == this.m_enableMotor && (this.m_motorImpulse = 0);
        if (this.m_enableLimit) {
            var v = f.m_sweep.a - d.m_sweep.a - this.m_referenceAngle;
            e.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * a.b2_angularSlop ? this.m_limitState = w.e_equalLimits: v <= this.m_lowerAngle ? (this.m_limitState != w.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState = w.e_atLowerLimit) : v >= this.m_upperAngle ? (this.m_limitState != w.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = w.e_atUpperLimit) : (this.m_limitState = w.e_inactiveLimit, this.m_impulse.z = 0)
        } else this.m_limitState = w.e_inactiveLimit;
        c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x, v = this.m_impulse.y, d.m_linearVelocity.x -= g * c, d.m_linearVelocity.y -= g * v, d.m_angularVelocity -= q * (l * v - n * c + this.m_motorImpulse + this.m_impulse.z), f.m_linearVelocity.x += h * c, f.m_linearVelocity.y += h * v, f.m_angularVelocity += t * (p * v - r * c + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    H.prototype.SolveVelocityConstraints = function(a) {
        var c = this.m_bodyA,
        d = this.m_bodyB,
        f = 0,
        g = f = 0,
        h = 0,
        l = 0,
        p = 0,
        n = c.m_linearVelocity,
        q = c.m_angularVelocity,
        t = d.m_linearVelocity,
        v = d.m_angularVelocity,
        y = c.m_invMass,
        z = d.m_invMass,
        B = c.m_invI,
        D = d.m_invI;
        this.m_enableMotor && this.m_limitState != w.e_equalLimits && (g = this.m_motorMass * -(v - q - this.m_motorSpeed), h = this.m_motorImpulse, l = a.dt * this.m_maxMotorTorque, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + g, -l, l), g = this.m_motorImpulse - h, q -= B * g, v += D * g);
        if (this.m_enableLimit && this.m_limitState != w.e_inactiveLimit) {
            a = c.m_xf.R;
            g = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
            h = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
            f = a.col1.x * g + a.col2.x * h;
            h = a.col1.y * g + a.col2.y * h;
            g = f;
            a = d.m_xf.R;
            l = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
            p = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
            f = a.col1.x * l + a.col2.x * p;
            p = a.col1.y * l + a.col2.y * p;
            l = f;
            a = t.x + -v * p - n.x - -q * h;
            var G = t.y + v * l - n.y - q * g;
            this.m_mass.Solve33(this.impulse3, -a, -G, -(v - q));
            this.m_limitState == w.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == w.e_atLowerLimit ? (f = this.m_impulse.z + this.impulse3.z, 0 > f && (this.m_mass.Solve22(this.reduced, -a, -G), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)) : this.m_limitState == w.e_atUpperLimit && (f = this.m_impulse.z + this.impulse3.z, 0 < f && (this.m_mass.Solve22(this.reduced, -a, -G), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0));
            n.x -= y * this.impulse3.x;
            n.y -= y * this.impulse3.y;
            q -= B * (g * this.impulse3.y - h * this.impulse3.x + this.impulse3.z);
            t.x += z * this.impulse3.x;
            t.y += z * this.impulse3.y;
            v += D * (l * this.impulse3.y - p * this.impulse3.x + this.impulse3.z)
        } else a = c.m_xf.R,
        g = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
        h = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
        f = a.col1.x * g + a.col2.x * h,
        h = a.col1.y * g + a.col2.y * h,
        g = f,
        a = d.m_xf.R,
        l = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
        p = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
        f = a.col1.x * l + a.col2.x * p,
        p = a.col1.y * l + a.col2.y * p,
        l = f,
        this.m_mass.Solve22(this.impulse2, -(t.x + -v * p - n.x - -q * h), -(t.y + v * l - n.y - q * g)),
        this.m_impulse.x += this.impulse2.x,
        this.m_impulse.y += this.impulse2.y,
        n.x -= y * this.impulse2.x,
        n.y -= y * this.impulse2.y,
        q -= B * (g * this.impulse2.y - h * this.impulse2.x),
        t.x += z * this.impulse2.x,
        t.y += z * this.impulse2.y,
        v += D * (l * this.impulse2.y - p * this.impulse2.x);
        c.m_linearVelocity.SetV(n);
        c.m_angularVelocity = q;
        d.m_linearVelocity.SetV(t);
        d.m_angularVelocity = v
    };
    H.prototype.SolvePositionConstraints = function(c) {
        var d = 0,
        f;
        c = this.m_bodyA;
        var g = this.m_bodyB,
        h = 0,
        l = f = 0,
        n = 0,
        p = 0;
        if (this.m_enableLimit && this.m_limitState != w.e_inactiveLimit) {
            var d = g.m_sweep.a - c.m_sweep.a - this.m_referenceAngle,
            r = 0;
            this.m_limitState == w.e_equalLimits ? (d = e.Clamp(d - this.m_lowerAngle, -a.b2_maxAngularCorrection, a.b2_maxAngularCorrection), r = -this.m_motorMass * d, h = e.Abs(d)) : this.m_limitState == w.e_atLowerLimit ? (d -= this.m_lowerAngle, h = -d, d = e.Clamp(d + a.b2_angularSlop, -a.b2_maxAngularCorrection, 0), r = -this.m_motorMass * d) : this.m_limitState == w.e_atUpperLimit && (h = d -= this.m_upperAngle, d = e.Clamp(d - a.b2_angularSlop, 0, a.b2_maxAngularCorrection), r = -this.m_motorMass * d);
            c.m_sweep.a -= c.m_invI * r;
            g.m_sweep.a += g.m_invI * r;
            c.SynchronizeTransform();
            g.SynchronizeTransform()
        }
        f = c.m_xf.R;
        r = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
        d = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
        l = f.col1.x * r + f.col2.x * d;
        d = f.col1.y * r + f.col2.y * d;
        r = l;
        f = g.m_xf.R;
        var q = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
        t = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
        l = f.col1.x * q + f.col2.x * t,
        t = f.col1.y * q + f.col2.y * t,
        q = l,
        n = g.m_sweep.c.x + q - c.m_sweep.c.x - r,
        p = g.m_sweep.c.y + t - c.m_sweep.c.y - d,
        v = n * n + p * p;
        f = Math.sqrt(v);
        var l = c.m_invMass,
        y = g.m_invMass,
        z = c.m_invI,
        B = g.m_invI,
        D = 10 * a.b2_linearSlop;
        v > D * D && (v = 1 / (l + y), n = v * -n, p = v * -p, c.m_sweep.c.x -= .5 * l * n, c.m_sweep.c.y -= .5 * l * p, g.m_sweep.c.x += .5 * y * n, g.m_sweep.c.y += .5 * y * p, n = g.m_sweep.c.x + q - c.m_sweep.c.x - r, p = g.m_sweep.c.y + t - c.m_sweep.c.y - d);
        this.K1.col1.x = l + y;
        this.K1.col2.x = 0;
        this.K1.col1.y = 0;
        this.K1.col2.y = l + y;
        this.K2.col1.x = z * d * d;
        this.K2.col2.x = -z * r * d;
        this.K2.col1.y = -z * r * d;
        this.K2.col2.y = z * r * r;
        this.K3.col1.x = B * t * t;
        this.K3.col2.x = -B * q * t;
        this.K3.col1.y = -B * q * t;
        this.K3.col2.y = B * q * q;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.AddM(this.K3);
        this.K.Solve(H.tImpulse, -n, -p);
        n = H.tImpulse.x;
        p = H.tImpulse.y;
        c.m_sweep.c.x -= c.m_invMass * n;
        c.m_sweep.c.y -= c.m_invMass * p;
        c.m_sweep.a -= c.m_invI * (r * p - d * n);
        g.m_sweep.c.x += g.m_invMass * n;
        g.m_sweep.c.y += g.m_invMass * p;
        g.m_sweep.a += g.m_invI * (q * p - t * n);
        c.SynchronizeTransform();
        g.SynchronizeTransform();
        return f <= a.b2_linearSlop && h <= a.b2_angularSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new f
    });
    Box2D.inherit(L, Box2D.Dynamics.Joints.b2JointDef);
    L.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    L.b2RevoluteJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    L.prototype.b2RevoluteJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_revoluteJoint;
        this.localAnchorA.Set(0, 0);
        this.localAnchorB.Set(0, 0);
        this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
        this.enableMotor = this.enableLimit = !1
    };
    L.prototype.Initialize = function(a, c, d) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    };
    Box2D.inherit(Q, Box2D.Dynamics.Joints.b2Joint);
    Q.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    Q.b2WeldJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new f;
        this.m_localAnchorB = new f;
        this.m_impulse = new g;
        this.m_mass = new d
    };
    Q.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    };
    Q.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    };
    Q.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new f(a * this.m_impulse.x, a * this.m_impulse.y)
    };
    Q.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.z
    };
    Q.prototype.b2WeldJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchorA.SetV(a.localAnchorA);
        this.m_localAnchorB.SetV(a.localAnchorB);
        this.m_referenceAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_mass = new d
    };
    Q.prototype.InitVelocityConstraints = function(a) {
        var c, d = 0,
        e = this.m_bodyA,
        f = this.m_bodyB;
        c = e.m_xf.R;
        var g = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
        h = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
        d = c.col1.x * g + c.col2.x * h,
        h = c.col1.y * g + c.col2.y * h,
        g = d;
        c = f.m_xf.R;
        var l = this.m_localAnchorB.x - f.m_sweep.localCenter.x,
        n = this.m_localAnchorB.y - f.m_sweep.localCenter.y,
        d = c.col1.x * l + c.col2.x * n,
        n = c.col1.y * l + c.col2.y * n,
        l = d;
        c = e.m_invMass;
        var d = f.m_invMass,
        q = e.m_invI,
        t = f.m_invI;
        this.m_mass.col1.x = c + d + h * h * q + n * n * t;
        this.m_mass.col2.x = -h * g * q - n * l * t;
        this.m_mass.col3.x = -h * q - n * t;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = c + d + g * g * q + l * l * t;
        this.m_mass.col3.y = g * q + l * t;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = q + t;
        a.warmStarting ? (this.m_impulse.x *= a.dtRatio, this.m_impulse.y *= a.dtRatio, this.m_impulse.z *= a.dtRatio, e.m_linearVelocity.x -= c * this.m_impulse.x, e.m_linearVelocity.y -= c * this.m_impulse.y, e.m_angularVelocity -= q * (g * this.m_impulse.y - h * this.m_impulse.x + this.m_impulse.z), f.m_linearVelocity.x += d * this.m_impulse.x, f.m_linearVelocity.y += d * this.m_impulse.y, f.m_angularVelocity += t * (l * this.m_impulse.y - n * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero()
    };
    Q.prototype.SolveVelocityConstraints = function(a) {
        var c, d = 0;
        a = this.m_bodyA;
        var e = this.m_bodyB,
        f = a.m_linearVelocity,
        h = a.m_angularVelocity,
        l = e.m_linearVelocity,
        n = e.m_angularVelocity,
        q = a.m_invMass,
        t = e.m_invMass,
        v = a.m_invI,
        w = e.m_invI;
        c = a.m_xf.R;
        var y = this.m_localAnchorA.x - a.m_sweep.localCenter.x,
        z = this.m_localAnchorA.y - a.m_sweep.localCenter.y,
        d = c.col1.x * y + c.col2.x * z,
        z = c.col1.y * y + c.col2.y * z,
        y = d;
        c = e.m_xf.R;
        var B = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
        D = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
        d = c.col1.x * B + c.col2.x * D,
        D = c.col1.y * B + c.col2.y * D,
        B = d;
        c = l.x - n * D - f.x + h * z;
        var d = l.y + n * B - f.y - h * y,
        G = n - h,
        F = new g;
        this.m_mass.Solve33(F, -c, -d, -G);
        this.m_impulse.Add(F);
        f.x -= q * F.x;
        f.y -= q * F.y;
        h -= v * (y * F.y - z * F.x + F.z);
        l.x += t * F.x;
        l.y += t * F.y;
        n += w * (B * F.y - D * F.x + F.z);
        a.m_angularVelocity = h;
        e.m_angularVelocity = n
    };
    Q.prototype.SolvePositionConstraints = function(c) {
        var d, f = 0;
        c = this.m_bodyA;
        var h = this.m_bodyB;
        d = c.m_xf.R;
        var l = this.m_localAnchorA.x - c.m_sweep.localCenter.x,
        n = this.m_localAnchorA.y - c.m_sweep.localCenter.y,
        f = d.col1.x * l + d.col2.x * n,
        n = d.col1.y * l + d.col2.y * n,
        l = f;
        d = h.m_xf.R;
        var q = this.m_localAnchorB.x - h.m_sweep.localCenter.x,
        p = this.m_localAnchorB.y - h.m_sweep.localCenter.y,
        f = d.col1.x * q + d.col2.x * p,
        p = d.col1.y * q + d.col2.y * p,
        q = f;
        d = c.m_invMass;
        var f = h.m_invMass,
        r = c.m_invI,
        t = h.m_invI,
        v = h.m_sweep.c.x + q - c.m_sweep.c.x - l,
        w = h.m_sweep.c.y + p - c.m_sweep.c.y - n,
        y = h.m_sweep.a - c.m_sweep.a - this.m_referenceAngle,
        z = 10 * a.b2_linearSlop,
        B = Math.sqrt(v * v + w * w),
        D = e.Abs(y);
        B > z && (r *= 1, t *= 1);
        this.m_mass.col1.x = d + f + n * n * r + p * p * t;
        this.m_mass.col2.x = -n * l * r - p * q * t;
        this.m_mass.col3.x = -n * r - p * t;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = d + f + l * l * r + q * q * t;
        this.m_mass.col3.y = l * r + q * t;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = r + t;
        z = new g;
        this.m_mass.Solve33(z, -v, -w, -y);
        c.m_sweep.c.x -= d * z.x;
        c.m_sweep.c.y -= d * z.y;
        c.m_sweep.a -= r * (l * z.y - n * z.x + z.z);
        h.m_sweep.c.x += f * z.x;
        h.m_sweep.c.y += f * z.y;
        h.m_sweep.a += t * (q * z.y - p * z.x + z.z);
        c.SynchronizeTransform();
        h.SynchronizeTransform();
        return B <= a.b2_linearSlop && D <= a.b2_angularSlop
    };
    Box2D.inherit(N, Box2D.Dynamics.Joints.b2JointDef);
    N.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    N.b2WeldJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    N.prototype.b2WeldJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = w.e_weldJoint;
        this.referenceAngle = 0
    };
    N.prototype.Initialize = function(a, c, d) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    }
})(); (function() {
    var a = Box2D.Dynamics.b2DebugDraw;
    a.b2DebugDraw = function() {
        this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
        var a = this;
        this.m_sprite = {
            graphics: {
                clear: function() {
                    a.m_ctx.clearRect(0, 0, a.m_ctx.canvas.width, a.m_ctx.canvas.height)
                }
            }
        }
    };
    a.prototype._color = function(a, d) {
        return "rgba(" + ((a & 16711680) >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + d + ")"
    };
    a.prototype.b2DebugDraw = function() {
        this.m_drawFlags = 0
    };
    a.prototype.SetFlags = function(a) {
        void 0 === a && (a = 0);
        this.m_drawFlags = a
    };
    a.prototype.GetFlags = function() {
        return this.m_drawFlags
    };
    a.prototype.AppendFlags = function(a) {
        void 0 === a && (a = 0);
        this.m_drawFlags |= a
    };
    a.prototype.ClearFlags = function(a) {
        void 0 === a && (a = 0);
        this.m_drawFlags &= ~a
    };
    a.prototype.SetSprite = function(a) {
        this.m_ctx = a
    };
    a.prototype.GetSprite = function() {
        return this.m_ctx
    };
    a.prototype.SetDrawScale = function(a) {
        void 0 === a && (a = 0);
        this.m_drawScale = a
    };
    a.prototype.GetDrawScale = function() {
        return this.m_drawScale
    };
    a.prototype.SetLineThickness = function(a) {
        void 0 === a && (a = 0);
        this.m_lineThickness = a;
        this.m_ctx.strokeWidth = a
    };
    a.prototype.GetLineThickness = function() {
        return this.m_lineThickness
    };
    a.prototype.SetAlpha = function(a) {
        void 0 === a && (a = 0);
        this.m_alpha = a
    };
    a.prototype.GetAlpha = function() {
        return this.m_alpha
    };
    a.prototype.SetFillAlpha = function(a) {
        void 0 === a && (a = 0);
        this.m_fillAlpha = a
    };
    a.prototype.GetFillAlpha = function() {
        return this.m_fillAlpha
    };
    a.prototype.SetXFormScale = function(a) {
        void 0 === a && (a = 0);
        this.m_xformScale = a
    };
    a.prototype.GetXFormScale = function() {
        return this.m_xformScale
    };
    a.prototype.DrawPolygon = function(a, d, e) {
        if (d) {
            var f = this.m_ctx,
            g = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.moveTo(a[0].x * g, a[0].y * g);
            for (e = 1; e < d; e++) f.lineTo(a[e].x * g, a[e].y * g);
            f.lineTo(a[0].x * g, a[0].y * g);
            f.closePath();
            f.stroke()
        }
    };
    a.prototype.DrawSolidPolygon = function(a, d, e) {
        if (d) {
            var f = this.m_ctx,
            g = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.fillStyle = this._color(e.color, this.m_fillAlpha);
            f.moveTo(a[0].x * g, a[0].y * g);
            for (e = 1; e < d; e++) f.lineTo(a[e].x * g, a[e].y * g);
            f.lineTo(a[0].x * g, a[0].y * g);
            f.closePath();
            f.fill();
            f.stroke()
        }
    };
    a.prototype.DrawCircle = function(a, d, e) {
        if (d) {
            var f = this.m_ctx,
            g = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.arc(a.x * g, a.y * g, d * g, 0, 2 * Math.PI, !0);
            f.closePath();
            f.stroke()
        }
    };
    a.prototype.DrawSolidCircle = function(a, d, e, f) {
        if (d) {
            var g = this.m_ctx,
            l = this.m_drawScale,
            h = a.x * l,
            q = a.y * l;
            g.moveTo(0, 0);
            g.beginPath();
            g.strokeStyle = this._color(f.color, this.m_alpha);
            g.fillStyle = this._color(f.color, this.m_fillAlpha);
            g.arc(h, q, d * l, 0, 2 * Math.PI, !0);
            g.moveTo(h, q);
            g.lineTo((a.x + e.x * d) * l, (a.y + e.y * d) * l);
            g.closePath();
            g.fill();
            g.stroke()
        }
    };
    a.prototype.DrawSegment = function(a, d, e) {
        var f = this.m_ctx,
        g = this.m_drawScale;
        f.strokeStyle = this._color(e.color, this.m_alpha);
        f.beginPath();
        f.moveTo(a.x * g, a.y * g);
        f.lineTo(d.x * g, d.y * g);
        f.closePath();
        f.stroke()
    };
    a.prototype.DrawTransform = function(a) {
        var d = this.m_ctx,
        e = this.m_drawScale;
        d.beginPath();
        d.strokeStyle = this._color(16711680, this.m_alpha);
        d.moveTo(a.position.x * e, a.position.y * e);
        d.lineTo((a.position.x + this.m_xformScale * a.R.col1.x) * e, (a.position.y + this.m_xformScale * a.R.col1.y) * e);
        d.strokeStyle = this._color(65280, this.m_alpha);
        d.moveTo(a.position.x * e, a.position.y * e);
        d.lineTo((a.position.x + this.m_xformScale * a.R.col2.x) * e, (a.position.y + this.m_xformScale * a.R.col2.y) * e);
        d.closePath();
        d.stroke()
    }
})();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;
var mathSin = Math.sin;
Math.sin = function(a) {
    return 0 === a ? 0 : mathSin(a)
};
var mathCos = Math.cos;
Math.cos = function(a) {
    return 0 === a ? 1 : mathCos(a)
};
var b2Vec2 = Box2D.Common.Math.b2Vec2,
b2AABB = Box2D.Collision.b2AABB,
b2BodyDef = Box2D.Dynamics.b2BodyDef,
b2Body = Box2D.Dynamics.b2Body,
b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
b2Fixture = Box2D.Dynamics.b2Fixture,
b2World = Box2D.Dynamics.b2World,
b2MassData = Box2D.Collision.Shapes.b2MassData,
b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
b2DebugDraw = Box2D.Dynamics.b2DebugDraw,
b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef,
b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef,
b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef,
b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef,
b2PulleyJointDef = Box2D.Dynamics.Joints.b2PulleyJointDef,
b2GearJointDef = Box2D.Dynamics.Joints.b2GearJointDef,
b2ContactListener = Box2D.Dynamics.b2ContactListener,
b2ContactFilter = Box2D.Dynamics.b2ContactFilter,
b2DestructionListener = Box2D.Dynamics.b2DestructionListener,
box2d = {
    SCALE: 30,
    DEFAULT_DENSITY: 1,
    DEFAULT_RESTITUTION: .2,
    DEFAULT_FRICTION: .5,
    bodyType: {
        dynamic: b2Body.b2_dynamicBody,
        static: b2Body.b2_staticBody,
        kinematic: b2Body.b2_kinematicBody
    },
    createWorld: function(a, c) {
        "undefined" == typeof a && (a = new b2Vec2(0, 10));
        "undefined" == typeof c && (c = !0);
        return new b2World(a, c)
    },
    setDebugDraw: function(a, c) {
        var d = new b2DebugDraw;
        d.SetSprite(c.getContext("2d"));
        d.SetFillAlpha(.5);
        d.SetLineThickness(1);
        d.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
        a.SetDebugDraw(d);
        box2d.setDebugDrawScale(a)
    },
    setDebugDrawScale: function(a) {
        a && a.m_debugDraw && a.m_debugDraw.SetDrawScale(Utils.globalScale * box2d.SCALE)
    },
    prepareBodyOptions: function(a) {
        "object" != typeof a && (a = {});
        a.x = "undefined" != typeof a.x ? a.x: 0;
        a.y = "undefined" != typeof a.y ? a.y: 0;
        a.rotation = "undefined" != typeof a.rotation ? a.rotation: 0;
        a.bodyType = "undefined" != typeof a.bodyType ? a.bodyType: box2d.bodyType.dynamic;
        a.density = "undefined" != typeof a.density ? a.density: box2d.DEFAULT_DENSITY;
        a.restitution = "undefined" != typeof a.restitution ? a.restitution: box2d.DEFAULT_RESTITUTION;
        a.friction = "undefined" != typeof a.friction ? a.friction: box2d.DEFAULT_FRICTION;
        a.linearDamping = "undefined" != typeof a.linearDamping ? a.linearDamping: 0;
        a.angularDamping = "undefined" != typeof a.angularDamping ? a.angularDamping: 0;
        a.allowSleep = "undefined" != typeof a.allowSleep ? a.allowSleep: !0;
        a.isSleeping = "undefined" != typeof a.isSleeping ? a.isSleeping: !1;
        a.isBullet = "undefined" != typeof a.isBullet ? a.isBullet: !1;
        a.fixedRotation = "undefined" != typeof a.fixedRotation ? a.fixedRotation: !1;
        "undefined" == typeof a.filter && (a.filter = {});
        a.filter.categoryBits = "undefined" != typeof a.filter.categoryBits ? a.filter.categoryBits: 1;
        a.filter.groupIndex = "undefined" != typeof a.filter.groupIndex ? a.filter.groupIndex: 0;
        a.filter.maskBits = "undefined" != typeof a.filter.maskBits ? a.filter.maskBits: 65535;
        a.isSensor = "undefined" != typeof a.isSensor ? a.isSensor: !1;
        return a
    },
    fillFixtureDef: function(a, c) {
        a.density = c.density;
        a.restitution = c.restitution;
        a.friction = c.friction;
        a.filter.categoryBits = c.filter.categoryBits;
        a.filter.groupIndex = c.filter.groupIndex;
        a.filter.maskBits = c.filter.maskBits;
        a.isSensor = c.isSensor;
        return a
    },
    fillBodyDef: function(a, c) {
        a.type = c.bodyType;
        a.angle = c.rotation;
        a.position.Set(c.x / box2d.SCALE, c.y / box2d.SCALE);
        a.linearDamping = c.linearDamping;
        a.angularDamping = c.angularDamping;
        a.allowSleep = c.allowSleep;
        a.isSleeping = c.isSleeping;
        a.isBullet = c.isBullet;
        a.fixedRotation = c.fixedRotation;
        return a
    },
    createCircle: function(a, c) {
        c = box2d.prepareBodyOptions(c);
        c.radius = "undefined" != typeof c.radius ? c.radius: 10;
        var d = box2d.fillFixtureDef(new b2FixtureDef, c),
        e = box2d.fillBodyDef(new b2BodyDef, c);
        d.shape = new b2CircleShape(c.radius / box2d.SCALE);
        e = a.CreateBody(e);
        e.CreateFixture(d);
        e.SetBullet(c.isBullet);
        return e
    },
    createBox: function(a, c) {
        c = box2d.prepareBodyOptions(c);
        c.width = "undefined" != typeof c.width ? c.width: 20;
        c.height = "undefined" != typeof c.height ? c.height: 20;
        var d = box2d.fillFixtureDef(new b2FixtureDef, c),
        e = box2d.fillBodyDef(new b2BodyDef, c);
        d.shape = new b2PolygonShape;
        d.shape.SetAsBox(c.width / box2d.SCALE / 2, c.height / box2d.SCALE / 2);
        e = a.CreateBody(e);
        e.CreateFixture(d);
        e.SetBullet(c.isBullet);
        return e
    },
    createPoly: function(a, c) {
        c = box2d.prepareBodyOptions(c);
        c.points = "undefined" != typeof c.points ? c.points: [];
        for (var d = box2d.fillBodyDef(new b2BodyDef, c), d = a.CreateBody(d), e, f = 0; f < c.points.length; f++) {
            var g = c.points[f];
            e = box2d.fillFixtureDef(new b2FixtureDef, c);
            e.shape = new b2PolygonShape;
            for (var l = [], h = 0; h < g.length; h++) l.push(new b2Vec2(g[h][0] / box2d.SCALE, g[h][1] / box2d.SCALE));
            e.shape.SetAsVector(l, l.length);
            d.CreateFixture(e)
        }
        d.SetBullet(c.isBullet);
        return d
    },
    setBodyPosition: function(a, c, d) {
        var e = a.GetPosition();
        "undefined" == typeof c && (c = e.x * box2d.SCALE);
        "undefined" == typeof d && (d = e.y * box2d.SCALE);
        a.SetPosition(new b2Vec2(c / box2d.SCALE, d / box2d.SCALE))
    },
    setBodyPositionAndRotation: function(a, c, d, e) {
        var f = a.GetPosition();
        "undefined" == typeof c && (c = f.x * box2d.SCALE);
        "undefined" == typeof d && (d = f.y * box2d.SCALE);
        "undefined" == typeof e && (e = a.GetAngle());
        a.SetPositionAndAngle(new b2Vec2(c / box2d.SCALE, d / box2d.SCALE), e)
    },
    createDistanceJoint: function(a, c) {
        "object" != typeof c && (c = {});
        if (c.body1 && c.body2 && c.point1 && c.point2) {
            c.collideConnected = "undefined" != typeof c.collideConnected ? c.collideConnected: !1;
            var d = new b2DistanceJointDef;
            d.Initialize(c.body1, c.body2, new b2Vec2(c.point1.x / box2d.SCALE, c.point1.y / box2d.SCALE), new b2Vec2(c.point2.x / box2d.SCALE, c.point2.y / box2d.SCALE));
            d.collideConnected = c.collideConnected;
            return a.CreateJoint(d)
        }
    },
    createRevoluteJoint: function(a, c) {
        "object" != typeof c && (c = {});
        if (c.body1 && c.body2 && c.point) {
            c.collideConnected = "undefined" != typeof c.collideConnected ? c.collideConnected: !1;
            c.enableMotor = "undefined" != typeof c.enableMotor ? c.enableMotor: !1;
            c.motorSpeed = "undefined" != typeof c.motorSpeed ? c.motorSpeed: 0;
            c.maxMotorTorque = "undefined" != typeof c.maxMotorTorque ? c.maxMotorTorque: 0;
            c.enableLimit = "undefined" != typeof c.enableLimit ? c.enableLimit: !1;
            c.lowerAngle = "undefined" != typeof c.lowerAngle ? c.lowerAngle: 0;
            c.upperAngle = "undefined" != typeof c.upperAngle ? c.upperAngle: 0;
            var d = new b2RevoluteJointDef;
            d.Initialize(c.body1, c.body2, new b2Vec2(c.point.x / box2d.SCALE, c.point.y / box2d.SCALE));
            d.collideConnected = c.collideConnected;
            d.enableMotor = c.enableMotor;
            d.motorSpeed = c.motorSpeed;
            d.maxMotorTorque = c.maxMotorTorque;
            d.enableLimit = c.enableLimit;
            d.lowerAngle = c.lowerAngle;
            d.upperAngle = c.upperAngle;
            return a.CreateJoint(d)
        }
    },
    createPrismaticJoint: function(a, c) {
        "object" != typeof c && (c = {});
        if (c.body1 && c.body2 && c.point && c.axis) {
            c.collideConnected = "undefined" != typeof c.collideConnected ? c.collideConnected: !1;
            c.lowerTranslation = "undefined" != typeof c.lowerTranslation ? c.lowerTranslation: 0;
            c.upperTranslation = "undefined" != typeof c.upperTranslation ? c.upperTranslation: 0;
            c.enableLimit = "undefined" != typeof c.enableLimit ? c.enableLimit: !1;
            c.motorForce = "undefined" != typeof c.motorForce ? c.motorForce: 0;
            c.motorSpeed = "undefined" != typeof c.motorSpeed ? c.motorSpeed: 0;
            c.enableMotor = "undefined" != typeof c.enableMotor ? c.enableMotor: !1;
            var d = new b2PrismaticJointDef;
            d.Initialize(c.body1, c.body2, new b2Vec2(c.point.x / box2d.SCALE, c.point.y / box2d.SCALE), new b2Vec2(c.axis.x / box2d.SCALE, c.axis.y / box2d.SCALE));
            d.collideConnected = c.collideConnected;
            d.lowerTranslation = c.lowerTranslation / box2d.SCALE;
            d.upperTranslation = c.upperTranslation / box2d.SCALE;
            d.enableLimit = c.enableLimit;
            d.motorForce = c.motorForce;
            d.motorSpeed = c.motorSpeed;
            d.enableMotor = c.enableMotor;
            return a.CreateJoint(d)
        }
    },
    createPulleyJoint: function(a, c) {
        "object" != typeof c && (c = {});
        if (c.body1 && c.body2 && c.groundAnchor1 && c.groundAnchor2 && c.anchor1 && c.anchor2) {
            c.collideConnected = "undefined" != typeof c.collideConnected ? c.collideConnected: !1;
            c.ratio = "undefined" != typeof c.ratio ? c.ratio: 1;
            c.maxLength1 = "undefined" != typeof c.maxLength1 ? c.maxLength1: 1;
            c.maxLength2 = "undefined" != typeof c.maxLength2 ? c.maxLength2: 1;
            var d = new b2PulleyJointDef;
            d.Initialize(c.body1, c.body2, new b2Vec2(c.groundAnchor1.x / box2d.SCALE, c.groundAnchor1.y / box2d.SCALE), new b2Vec2(c.groundAnchor2.x / box2d.SCALE, c.groundAnchor2.y / box2d.SCALE), new b2Vec2(c.anchor1.x / box2d.SCALE, c.anchor1.y / box2d.SCALE), new b2Vec2(c.anchor2.x / box2d.SCALE, c.anchor2.y / box2d.SCALE), c.ratio);
            d.collideConnected = c.collideConnected;
            d.maxLength1 = c.maxLength1 / box2d.SCALE;
            d.maxLength2 = c.maxLength2 / box2d.SCALE;
            return a.CreateJoint(d)
        }
    },
    createGearJoint: function(a, c) {
        "object" != typeof c && (c = {});
        if (c.body1 && c.body2 && c.joint1 && c.joint2) {
            c.ratio = "undefined" != typeof c.ratio ? c.ratio: 1;
            c.collideConnected = "undefined" != typeof c.collideConnected ? c.collideConnected: !1;
            var d = new b2GearJointDef;
            d.bodyA = c.body1;
            d.bodyB = c.body2;
            d.joint1 = c.joint1;
            d.joint2 = c.joint2;
            d.ratio = c.ratio;
            d.collideConnected = c.collideConnected;
            return a.CreateJoint(d)
        }
    },
    setContactsListener: function(a, c) {
        c || (c = {});
        var d = new b2ContactListener;
        c.beginContact && (d.BeginContact = c.beginContact);
        c.endContact && (d.EndContact = c.endContact);
        c.preSolve && (d.PreSolve = c.preSolve);
        c.postSolve && (d.PostSolve = c.postSolve);
        a.SetContactListener(d)
    },
    setContactFilter: function(a, c) {
        c || (c = {});
        var d = new b2ContactFilter;
        c.shouldCollide && (d.ShouldCollide = c.shouldCollide);
        a.SetContactFilter(d)
    },
    setDestructionListener: function(a, c) {
        c || (c = {});
        var d = new b2DestructionListener;
        c.sayGoodbyeFixture && (d.SayGoodbyeFixture = c.sayGoodbyeFixture);
        c.sayGoodbyeJoint && (d.SayGoodbyeJoint = c.sayGoodbyeJoint);
        a.SetDestructionListener(d)
    },
    rayCast: function(a, c, d, e) {
        a.RayCast(c, new b2Vec2(d.x / box2d.SCALE, d.y / box2d.SCALE), new b2Vec2(e.x / box2d.SCALE, e.y / box2d.SCALE))
    },
    syncStage: function(a) {
        a = a.GetBodyList();
        for (var c, d; a;) {
            if (c = a.GetUserData() || a.sprite) d = a.GetPosition(),
            c.x = d.x * box2d.SCALE,
            c.y = d.y * box2d.SCALE,
            c.rotation = a.GetAngle(),
            c.dispatchEvent("box2dsync", {
                target: c
            });
            a = a.GetNext()
        }
    },
    hitTest: function(a, c) {
        if (!a || !c) return ! 1;
        for (var d = a.GetContactList(); d;) {
            if (d.contact.IsTouching() && d.other == c) return ! 0;
            d = d.next
        }
        return ! 1
    }
},
ExternalAPI = {
    type: "default",
    init: function() {},
    exec: function() {
        var a = arguments[0];
        if ("exec" != a && "function" == typeof ExternalAPI[a]) return ExternalAPI[a].apply(ExternalAPI, Utils.getFunctionArguments(arguments, 1))
    },
    check: function() {
        return ! 1
    },
    openWidget: function() {},
    closeWidget: function() {},
    getMoreGamesURL: function(a, c) {
        return "http://h.7k7k.com/"
    },
    getPreloaderURL: function() {
        return "http://h.7k7k.com/"
    },
    showCopyright: function() {},
    showAds: function() {
        var a = window.location.href;
        if (0 == a.indexOf("http://h.7k7k.com/") || 0 == a.indexOf("https://h.7k7k.com/")) window.GoogleIMA ? GoogleIMA.show() : window.Leadbolt && Leadbolt.show()
    }
},
NONE = 0,
BOX = 1,
CIRCLE = 2,
POLY = 3,
NORMAL = 0,
DEADHAND = 1,
FIREFLY = 2,
BOMB = 3,
SKULL = 4,
SKELETON = 5,
BACKGROUND = 6,
WATCH = 7,
FAKEHEAD = 8,
RESIZEABLE = 9,
SPIKES = 10,
BUSH = 11,
LEFT = 1,
RIGHT = 2,
DENSITY_PLATFORM = 0,
RESTITUTION_PLATFORM = .2,
FRICTION_PLATFORM = 2;
function spritesSync(a, c, d) {
    c = new Vector( - a.target.syncX, -a.target.syncY);
    c.rotate( - a.target.rotation);
    a.target.x += c.x;
    a.target.y += c.y
}
var objects = [{
    name: "skull",
    image: "/skull.png",
    width: 29,
    height: 28,
    frames: 1,
    bodyWidth: 14,
    bodyHeight: 14,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: -1,
        y: -1
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: SKULL
},
{
    name: "skeleton_left",
    image: "/skeleton_left.png",
    width: 38,
    height: 44,
    frames: 1,
    bodyWidth: 22,
    bodyHeight: 34,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 7,
        y: 8
    },
    fixed: !0,
    density: 0,
    restitution: .2,
    friction: 2,
    custom: null,
    type: SKELETON,
    orient: LEFT
},
{
    name: "skeleton_right",
    image: "/skeleton_right.png",
    width: 38,
    height: 44,
    frames: 1,
    bodyWidth: 22,
    bodyHeight: 34,
    bodyType: BOX,
    bodyPosCorrect: {
        x: -7,
        y: 8
    },
    fixed: !0,
    density: 0,
    restitution: .2,
    friction: 2,
    custom: null,
    type: SKELETON,
    orient: RIGHT
},
{
    name: "block_2",
    image: "/block_2.png",
    width: 77,
    height: 20,
    frames: 1,
    bodyWidth: 77,
    bodyHeight: 20,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "bomb",
    image: "/bomb.png",
    width: 54,
    height: 59,
    frames: 1,
    bodyWidth: 14,
    bodyHeight: 14,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 2
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: BOMB
},
{
    name: "breakable_rect_1",
    image: "/breakable_rect_1.png",
    width: 116,
    height: 14,
    frames: 1,
    bodyWidth: 116,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 1,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "breakable_rect_2",
    image: "/breakable_rect_2.png",
    width: 66,
    height: 14,
    frames: 1,
    bodyWidth: 66,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 1,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "deadhand_right",
    image: "/deadhand_right.png",
    width: 22,
    height: 36,
    frames: 1,
    bodyWidth: 8,
    bodyHeight: 36,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 2,
        y: 0
    },
    fixed: !0,
    density: 0,
    restitution: .2,
    friction: 2,
    custom: null,
    type: DEADHAND,
    orient: RIGHT
},
{
    name: "deadhand_left",
    image: "/deadhand_left.png",
    width: 22,
    height: 36,
    frames: 1,
    bodyWidth: 8,
    bodyHeight: 36,
    bodyType: BOX,
    bodyPosCorrect: {
        x: -2,
        y: 0
    },
    fixed: !0,
    density: 0,
    restitution: .2,
    friction: 2,
    type: DEADHAND,
    orient: LEFT
},
{
    name: "fakehead",
    image: "/fakehead.png",
    width: 16,
    height: 14,
    frames: 1,
    bodyWidth: 14,
    bodyHeight: 14,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: FAKEHEAD
},
{
    name: "grave",
    image: "/grave.png",
    width: 32,
    height: 44,
    frames: 1,
    bodyWidth: 32,
    bodyHeight: 44,
    bodyType: POLY,
    points: [[[8, -22], [15, -12], [13, 21], [ - 8, 22], [ - 15, -10], [ - 9, -21]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_1",
    image: "/ground_1.png",
    width: 405,
    height: 59,
    frames: 1,
    bodyWidth: 405,
    bodyHeight: 59,
    bodyType: POLY,
    points: [[[43, -13], [43, 29], [ - 195, 30], [ - 195, -13]], [[95, 2], [95, 29], [43, 29], [43, -13]], [[148, 2], [148, 29], [95, 29], [95, 2]], [[197, -26], [197, 29], [148, 29], [148, 2]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_2",
    image: "/ground_2.png",
    width: 359,
    height: 60,
    frames: 1,
    bodyWidth: 359,
    bodyHeight: 60,
    bodyType: POLY,
    points: [[[123, -12], [123, 28], [ - 174, 28], [ - 174, -12]], [[123, 28], [123, -12], [173, -26], [173, 28]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_3",
    image: "/ground_3.png",
    width: 130,
    height: 68,
    frames: 1,
    bodyWidth: 130,
    bodyHeight: 68,
    bodyType: POLY,
    points: [[[ - 16, -9], [ - 16, 32], [ - 59, 32], [ - 59, -9]], [[ - 16, -9], [60, -30], [60, 33], [ - 16, 32]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_4",
    image: "/ground_4.png",
    width: 204,
    height: 53,
    frames: 1,
    bodyWidth: 204,
    bodyHeight: 53,
    bodyType: POLY,
    points: [[[21, -22], [21, 22], [ - 97, 23], [ - 96, 3]], [[21, -22], [99, -22], [99, 23], [21, 22]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_5",
    image: "/ground_5.png",
    width: 109,
    height: 88,
    frames: 1,
    bodyWidth: 109,
    bodyHeight: 88,
    bodyType: POLY,
    points: [[[50, -41], [49, 42], [ - 50, 39], [ - 50, -16]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_6",
    image: "/ground_6.png",
    width: 276,
    height: 43,
    frames: 1,
    bodyWidth: 276,
    bodyHeight: 43,
    bodyType: POLY,
    points: [[[ - 131, -1], [80, -1], [80, 16], [ - 131, 15]], [[80, 16], [80, -1], [130, -17], [130, 16]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_7",
    image: "/ground_7.png",
    width: 211,
    height: 98,
    frames: 1,
    bodyWidth: 205,
    bodyHeight: 92,
    bodyType: BOX,
    bodyPosCorrect: {
        x: -4,
        y: 4
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_8",
    image: "/ground_8.png",
    width: 247,
    height: 61,
    frames: 1,
    bodyWidth: 247,
    bodyHeight: 61,
    bodyType: POLY,
    points: [[[ - 86, -3], [ - 86, 29], [ - 117, 29], [ - 117, -1]], [[ - 86, -3], [25, -26], [25, 29], [ - 86, 29]], [[25, 29], [25, -26], [121, -26], [121, 29]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_9",
    image: "/ground_9.png",
    width: 405,
    height: 85,
    frames: 1,
    bodyWidth: 405,
    bodyHeight: 85,
    bodyType: POLY,
    points: [[[ - 198, -38], [ - 36, -38], [ - 36, 40], [ - 198, 40]], [[ - 36, 40], [ - 36, -38], [24, 1], [24, 40]], [[198, 1], [198, 40], [24, 40], [24, 1]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_10",
    image: "/ground_10.png",
    width: 92,
    height: 41,
    frames: 1,
    bodyWidth: 92,
    bodyHeight: 41,
    bodyType: POLY,
    points: [[[0, -18], [41, 18], [ - 41, 18]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_bottom",
    image: "/ground_bottom.png",
    width: 387,
    height: 46,
    frames: 1,
    bodyWidth: 375,
    bodyHeight: 41,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 4
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_platform_half",
    image: "/ground_platform_half.png",
    width: 208,
    height: 39,
    frames: 1,
    bodyWidth: 194,
    bodyHeight: 30,
    bodyType: BOX,
    bodyPosCorrect: {
        x: -2,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_platform_medium",
    image: "/ground_platform_medium.png",
    width: 111,
    height: 43,
    frames: 1,
    bodyWidth: 102,
    bodyHeight: 36,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 2
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_platform_small",
    image: "/ground_platform_small.png",
    width: 62,
    height: 44,
    frames: 1,
    bodyWidth: 52,
    bodyHeight: 35,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_platform_thin_big",
    image: "/ground_platform_thin_big.png",
    width: 208,
    height: 28,
    frames: 1,
    bodyWidth: 195,
    bodyHeight: 20,
    bodyType: BOX,
    bodyPosCorrect: {
        x: -2,
        y: 1
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_platform_thin_bigger",
    image: "/ground_platform_thin_bigger.png",
    width: 261,
    height: 28,
    frames: 1,
    bodyWidth: 249,
    bodyHeight: 20,
    bodyType: BOX,
    bodyPosCorrect: {
        x: -2,
        y: 1
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_platform_thin_bigger_mirror",
    image: "/ground_platform_thin_bigger_mirror.png",
    width: 281,
    height: 28,
    frames: 1,
    bodyWidth: 267,
    bodyHeight: 20,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 1
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_platform_thin_med",
    image: "/ground_platform_thin_med.png",
    width: 111,
    height: 27,
    frames: 1,
    bodyWidth: 102,
    bodyHeight: 20,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 2
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_platform_thin_sm",
    image: "/ground_platform_thin_sm.png",
    width: 62,
    height: 23,
    frames: 1,
    bodyWidth: 51,
    bodyHeight: 17,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 1,
        y: 2
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_triangle",
    image: "/ground_triangle.png",
    width: 110,
    height: 45,
    frames: 1,
    bodyWidth: 110,
    bodyHeight: 45,
    bodyType: POLY,
    points: [[[ - 52, 4], [ - 21, -18], [52, 18], [ - 52, 18]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_vert_big",
    image: "/ground_vert_big.png",
    width: 111,
    height: 119,
    frames: 1,
    bodyWidth: 100,
    bodyHeight: 112,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 2
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_vert_small",
    image: "/ground_vert_small.png",
    width: 39,
    height: 129,
    frames: 1,
    bodyWidth: 25,
    bodyHeight: 120,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: -2
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_vert_small__2",
    image: "/ground_vert_small__2.png",
    width: 38,
    height: 75,
    frames: 1,
    bodyWidth: 25,
    bodyHeight: 70,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 2,
        y: 2
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null
},
{
    name: "ground_bg_half",
    image: "/ground_bg_half.png",
    width: 190,
    height: 80,
    frames: 1,
    bodyWidth: 190,
    bodyHeight: 80,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null,
    type: BACKGROUND
},
{
    name: "ground_bg_half_2",
    image: "/ground_bg_half_2.png",
    width: 190,
    height: 80,
    frames: 1,
    bodyWidth: 190,
    bodyHeight: 80,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null,
    type: BACKGROUND
},
{
    name: "ground_bg_half_3",
    image: "/ground_bg_half_3.png",
    width: 286,
    height: 122,
    frames: 1,
    bodyWidth: 286,
    bodyHeight: 122,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null,
    type: BACKGROUND
},
{
    name: "ground_bg_half_4",
    image: "/ground_bg_half_4.png",
    width: 190,
    height: 106,
    frames: 1,
    bodyWidth: 190,
    bodyHeight: 106,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null,
    type: BACKGROUND
},
{
    name: "ground_bg_medium",
    image: "/ground_bg_medium.png",
    width: 97,
    height: 112,
    frames: 1,
    bodyWidth: 97,
    bodyHeight: 112,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null,
    type: BACKGROUND
},
{
    name: "ground_bg_medium_2",
    image: "/ground_bg_medium_2.png",
    width: 97,
    height: 98,
    frames: 1,
    bodyWidth: 97,
    bodyHeight: 98,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null,
    type: BACKGROUND
},
{
    name: "ground_bg_medium_3",
    image: "/ground_bg_medium_3.png",
    width: 97,
    height: 114,
    frames: 1,
    bodyWidth: 97,
    bodyHeight: 114,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null,
    type: BACKGROUND
},
{
    name: "ground_bg_medium_4",
    image: "/ground_bg_medium_4.png",
    width: 97,
    height: 136,
    frames: 1,
    bodyWidth: 97,
    bodyHeight: 136,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: DENSITY_PLATFORM,
    restitution: RESTITUTION_PLATFORM,
    friction: FRICTION_PLATFORM,
    custom: null,
    type: BACKGROUND
},
{
    name: "pumpkin_ground_blue",
    image: "/pumpkin_ground_blue.png",
    width: 65,
    height: 32,
    frames: 1,
    bodyWidth: 65,
    bodyHeight: 32,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: BACKGROUND
},
{
    name: "nb_rect_2",
    image: "/nb_rect_2.png",
    width: 19,
    height: 39,
    frames: 1,
    bodyWidth: 19,
    bodyHeight: 39,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "nb_triangle",
    image: "/nb_triangle.png",
    width: 39,
    height: 23,
    frames: 1,
    bodyWidth: 39,
    bodyHeight: 23,
    bodyType: POLY,
    points: [[[19, -11], [19, 11], [ - 19, 11]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "nb_triangle__2",
    image: "/nb_triangle__2.png",
    width: 69,
    height: 25,
    frames: 1,
    bodyWidth: 69,
    bodyHeight: 25,
    bodyType: POLY,
    points: [[[ - 25, -12], [33, 8], [ - 32, 8]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "non_breakable_rect_1",
    image: "/non_breakable_rect_1.png",
    width: 19,
    height: 39,
    frames: 1,
    bodyWidth: 19,
    bodyHeight: 39,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "non_breakable_rect_2",
    image: "/non_breakable_rect_2.png",
    width: 19,
    height: 39,
    frames: 1,
    bodyWidth: 19,
    bodyHeight: 39,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "resizeable_circle_1",
    image: "/resizeable_circle_1.png",
    width: 26,
    height: 26,
    frames: 1,
    bodyWidth: 26,
    bodyHeight: 26,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: RESIZEABLE,
    toObject: "resizeable_circle_2"
},
{
    name: "resizeable_circle_2",
    image: "/resizeable_circle_2.png",
    width: 20,
    height: 20,
    frames: 1,
    bodyWidth: 20,
    bodyHeight: 20,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: RESIZEABLE,
    toObject: "resizeable_circle_1"
},
{
    name: "resizeable_rect_1",
    image: "/resizeable_rect_1.png",
    width: 16,
    height: 26,
    frames: 1,
    bodyWidth: 16,
    bodyHeight: 26,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: RESIZEABLE,
    toObject: "resizeable_rect_2"
},
{
    name: "resizeable_rect_2",
    image: "/resizeable_rect_2.png",
    width: 15,
    height: 22,
    frames: 1,
    bodyWidth: 15,
    bodyHeight: 22,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: RESIZEABLE,
    toObject: "resizeable_rect_1"
},
{
    name: "resizeable_rect_3",
    image: "/resizeable_rect_3.png",
    width: 76,
    height: 16,
    frames: 1,
    bodyWidth: 76,
    bodyHeight: 16,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: RESIZEABLE,
    toObject: "resizeable_rect_4"
},
{
    name: "resizeable_rect_4",
    image: "/resizeable_rect_4.png",
    width: 90,
    height: 18,
    frames: 1,
    bodyWidth: 90,
    bodyHeight: 18,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: RESIZEABLE,
    toObject: "resizeable_rect_3"
},
{
    name: "ropeend",
    image: "/ropeend.png",
    width: 4,
    height: 16,
    frames: 1,
    bodyWidth: 4,
    bodyHeight: 16,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "ropepart",
    image: "/ropepart.png",
    width: 4,
    height: 16,
    frames: 1,
    bodyWidth: 4,
    bodyHeight: 16,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "spikes_circle",
    image: "/spikes_circle.png",
    width: 23,
    height: 23,
    frames: 1,
    bodyWidth: 21,
    bodyHeight: 23,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: SPIKES
},
{
    name: "spikes_long",
    image: "/spikes_long.png",
    width: 88,
    height: 10,
    frames: 1,
    bodyWidth: 88,
    bodyHeight: 10,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: SPIKES
},
{
    name: "spikes_long_medium",
    image: "./spikes_long_medium.png",
    width: 73,
    height: 10,
    frames: 1,
    bodyWidth: 73,
    bodyHeight: 10,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: SPIKES
},
{
    name: "spikes_medium",
    image: "/spikes_medium.png",
    width: 45,
    height: 10,
    frames: 1,
    bodyWidth: 45,
    bodyHeight: 10,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: SPIKES
},
{
    name: "spikes_short",
    image: "/spikes_short.png",
    width: 24,
    height: 10,
    frames: 1,
    bodyWidth: 24,
    bodyHeight: 10,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null,
    type: SPIKES
},
{
    name: "stone_platform_1",
    image: "/stone_platform_1.png",
    width: 76,
    height: 14,
    frames: 1,
    bodyWidth: 76,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "stone_platform_2",
    image: "/stone_platform_2.png",
    width: 51,
    height: 14,
    frames: 1,
    bodyWidth: 51,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "stone_platform_4",
    image: "/stone_platform_4.png",
    width: 101,
    height: 14,
    frames: 1,
    bodyWidth: 101,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "stone_platform_catapult",
    image: "/stone_platform_catapult.png",
    width: 116,
    height: 21,
    frames: 1,
    bodyWidth: 116,
    bodyHeight: 41,
    bodyType: POLY,
    points: [[[ - 50, -10], [ - 50, 10], [ - 57, 10], [ - 57, -10]], [[50, -2], [50, 10], [ - 50, 10], [ - 50, -2]], [[57, -10], [57, 10], [50, 10], [50, -10]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "stone_sircle",
    image: "/stone_sircle.png",
    width: 34,
    height: 34,
    frames: 1,
    bodyWidth: 34,
    bodyHeight: 34,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "stone_square",
    image: "/stone_square.png",
    width: 21,
    height: 21,
    frames: 1,
    bodyWidth: 21,
    bodyHeight: 21,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "symbol_2",
    image: "/symbol_2.png",
    width: 39,
    height: 39,
    frames: 1,
    bodyWidth: 39,
    bodyHeight: 39,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "symbol_3",
    image: "/symbol_3.png",
    width: 19,
    height: 19,
    frames: 1,
    bodyWidth: 19,
    bodyHeight: 19,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "symbol_4",
    image: "/symbol_4.png",
    width: 19,
    height: 19,
    frames: 1,
    bodyWidth: 19,
    bodyHeight: 19,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "symbol_5",
    image: "/symbol_5.png",
    width: 19,
    height: 19,
    frames: 1,
    bodyWidth: 19,
    bodyHeight: 19,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "symbol_6",
    image: "/symbol_6.png",
    width: 39,
    height: 39,
    frames: 1,
    bodyWidth: 39,
    bodyHeight: 39,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "symbol_7",
    image: "/symbol_7.png",
    width: 39,
    height: 39,
    frames: 1,
    bodyWidth: 39,
    bodyHeight: 39,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "symbol_8",
    image: "/symbol_8.png",
    width: 66,
    height: 14,
    frames: 1,
    bodyWidth: 66,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "symbol_9",
    image: "/symbol_9.png",
    width: 116,
    height: 14,
    frames: 1,
    bodyWidth: 116,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "triangle_1",
    image: "/triangle_1.png",
    width: 51,
    height: 58,
    frames: 1,
    bodyWidth: 51,
    bodyHeight: 58,
    bodyType: POLY,
    points: [[[ - 25, -28], [23, 0], [ - 25, 28]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wheel",
    image: "/wheel.png",
    width: 21,
    height: 21,
    frames: 1,
    bodyWidth: 21,
    bodyHeight: 21,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_1",
    image: "/wood_platform_1.png",
    width: 66,
    height: 14,
    frames: 1,
    bodyWidth: 66,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_2",
    image: "/wood_platform_2.png",
    width: 66,
    height: 14,
    frames: 1,
    bodyWidth: 66,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_circle_1",
    image: "/wood_platform_circle_1.png",
    width: 26,
    height: 26,
    frames: 1,
    bodyWidth: 26,
    bodyHeight: 26,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_small_1",
    image: "/wood_platform_small_1.png",
    width: 34,
    height: 14,
    frames: 1,
    bodyWidth: 34,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_small_2",
    image: "/wood_platform_small_2.png",
    width: 34,
    height: 14,
    frames: 1,
    bodyWidth: 34,
    bodyHeight: 14,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_square_1",
    image: "/wood_platform_square_1.png",
    width: 26,
    height: 26,
    frames: 1,
    bodyWidth: 26,
    bodyHeight: 26,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_square_2",
    image: "/wood_platform_square_2.png",
    width: 26,
    height: 26,
    frames: 1,
    bodyWidth: 26,
    bodyHeight: 26,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_square_3",
    image: "/wood_platform_square_3.png",
    width: 26,
    height: 26,
    frames: 1,
    bodyWidth: 26,
    bodyHeight: 26,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_square_4",
    image: "/wood_platform_square_4.png",
    width: 26,
    height: 26,
    frames: 1,
    bodyWidth: 26,
    bodyHeight: 26,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "wood_platform_square_5",
    image: "/wood_platform_square_5.png",
    width: 26,
    height: 26,
    frames: 1,
    bodyWidth: 26,
    bodyHeight: 26,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "woodplatform_2",
    image: "/woodplatform_2.png",
    width: 67,
    height: 9,
    frames: 1,
    bodyWidth: 67,
    bodyHeight: 9,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "woodplatform_17",
    image: "/woodplatform_17.png",
    width: 67,
    height: 17,
    frames: 1,
    bodyWidth: 67,
    bodyHeight: 17,
    bodyType: POLY,
    points: [[[ - 24, -8], [ - 24, 8], [ - 33, 8], [ - 33, -8]], [[ - 24, -1], [24, -1], [24, 8], [ - 24, 8]], [[24, -8], [33, -8], [33, 8], [24, 8]]],
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "bush_1",
    image: "/bush_1.png",
    width: 123,
    height: 44,
    frames: 1,
    bodyWidth: 123,
    bodyHeight: 44,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "bush_2",
    image: "/bush_2.png",
    width: 111,
    height: 43,
    frames: 1,
    bodyWidth: 111,
    bodyHeight: 43,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "bush_3",
    image: "/bush_3.png",
    width: 151,
    height: 48,
    frames: 1,
    bodyWidth: 151,
    bodyHeight: 48,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "bush_4",
    image: "/bush_4.png",
    width: 71,
    height: 43,
    frames: 1,
    bodyWidth: 71,
    bodyHeight: 43,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !1,
    density: 3,
    restitution: .2,
    friction: 2,
    custom: null
},
{
    name: "firefly_group",
    image: "/firefly_group.png",
    width: 45,
    height: 18,
    frames: 1,
    bodyWidth: 45,
    bodyHeight: 18,
    bodyType: BOX,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: 0,
    restitution: .2,
    friction: 2,
    custom: null,
    type: FIREFLY
},
{
    name: "watch",
    image: "/watch.png",
    width: 25,
    height: 25,
    frames: 1,
    bodyWidth: 25,
    bodyHeight: 25,
    bodyType: CIRCLE,
    bodyPosCorrect: {
        x: 0,
        y: 0
    },
    fixed: !0,
    density: 0,
    restitution: .2,
    friction: 2,
    custom: 30,
    type: WATCH
}],
levels = [{
    objects: [{
        type: "stone_platform_4",
        x: 252,
        y: 137,
        rotation: 0
    },
    {
        type: "skull",
        x: 38,
        y: 122,
        rotation: 0
    },
    {
        type: "stone_platform_1",
        x: 177,
        y: 306,
        rotation: 0,
        density: 0
    },
    {
        type: "stone_platform_1",
        x: 324,
        y: 306,
        rotation: 0,
        density: 0
    },
    {
        type: "symbol_9",
        x: 254,
        y: 152,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_bottom",
        x: 492,
        y: 302,
        rotation: 0
    },
    {
        type: "ground_triangle",
        x: 22,
        y: 266,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 9,
        y: 302,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 37,
        y: 139,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skeleton_left",
        x: 392,
        y: 263,
        rotation: 0
    },
    {
        type: "watch",
        x: 26,
        y: 18,
        rotation: 0,
        custom: "60"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_bg_half",
        x: 92,
        y: 243,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 91,
        y: 203,
        rotation: 0
    },
    {
        type: "ground_7",
        x: -6,
        y: 326,
        rotation: 0
    },
    {
        type: "skeleton_right",
        x: 135,
        y: 260,
        rotation: 0
    },
    {
        type: "ground_platform_thin_med",
        x: 252,
        y: 274,
        rotation: 0
    },
    {
        type: "ground_3",
        x: 388,
        y: 273,
        rotation: 0
    },
    {
        type: "ground_5",
        x: 493,
        y: 258,
        rotation: 0
    },
    {
        type: "ground_7",
        x: 193,
        y: 326,
        rotation: 0
    },
    {
        type: "ground_7",
        x: 393,
        y: 326,
        rotation: 0
    },
    {
        type: "skull",
        x: 418,
        y: 98,
        rotation: 0
    },
    {
        type: "symbol_3",
        x: 126,
        y: 75,
        rotation: 0,
        density: 0
    },
    {
        type: "breakable_rect_2",
        x: 419,
        y: 111,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "stone_platform_4",
        x: 85,
        y: 60,
        rotation: -2.792526803190927
    },
    {
        type: "symbol_4",
        x: 52,
        y: 65,
        rotation: -2.792526803190927,
        density: 0,
        custom: "1"
    },
    {
        type: "resizeable_circle_2",
        x: 146,
        y: 181,
        rotation: 0
    },
    {
        type: "watch",
        x: 19,
        y: 20,
        rotation: 0,
        custom: "30"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 126,
            y: 75
        }
    }]
},
{
    objects: [{
        type: "ground_7",
        x: -2,
        y: 309,
        rotation: 0
    },
    {
        type: "ground_7",
        x: 307,
        y: 307,
        rotation: 0
    },
    {
        type: "ground_7",
        x: 500,
        y: 307,
        rotation: 0
    },
    {
        type: "ground_vert_big",
        x: 150,
        y: 361,
        rotation: 0
    },
    {
        type: "grave",
        x: 359,
        y: 240,
        rotation: 0
    },
    {
        type: "ground_platform_thin_med",
        x: 294,
        y: 121,
        rotation: .5235987755982988
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 483,
        y: 90,
        rotation: -.5235987755982988
    },
    {
        type: "symbol_4",
        x: 295,
        y: 83,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skeleton_right",
        x: 53,
        y: 244,
        rotation: 0
    },
    {
        type: "breakable_rect_2",
        x: 149,
        y: 175,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "stone_platform_4",
        x: 149,
        y: 162,
        rotation: 0
    },
    {
        type: "skull",
        x: 296,
        y: 65,
        rotation: 0,
        density: 6
    },
    {
        type: "resizeable_circle_1",
        x: 355,
        y: 131,
        rotation: 0
    },
    {
        type: "resizeable_circle_1",
        x: 381,
        y: 117,
        rotation: 0
    },
    {
        type: "resizeable_circle_1",
        x: 410,
        y: 99,
        rotation: 0
    },
    {
        type: "watch",
        x: 20,
        y: 30,
        rotation: 0,
        custom: "45"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_vert_big",
        x: -1,
        y: 271,
        rotation: 0
    },
    {
        type: "ground_2",
        x: 3,
        y: 295,
        rotation: 0
    },
    {
        type: "bomb",
        x: 55,
        y: 276,
        rotation: 0,
        custom: "20"
    },
    {
        type: "bomb",
        x: 243,
        y: 161,
        rotation: 0,
        custom: "70",
        force: 8
    },
    {
        type: "ground_platform_medium",
        x: 240,
        y: 186,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 91,
        y: 118,
        rotation: 0
    },
    {
        type: "stone_platform_4",
        x: 233,
        y: 110,
        rotation: 0,
        density: .7
    },
    {
        type: "grave",
        x: 125,
        y: 84,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 451,
        y: 77,
        rotation: 0
    },
    {
        type: "ground_platform_thin_med",
        x: 432,
        y: 97,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 385,
        y: 119,
        rotation: 0
    },
    {
        type: "skull",
        x: 380,
        y: 48,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 379,
        y: 64,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 241,
        y: 126,
        rotation: 0,
        density: 0
    },
    {
        type: "ground_7",
        x: 428,
        y: 304,
        rotation: 0
    },
    {
        type: "skeleton_left",
        x: 404,
        y: 238,
        rotation: 0
    },
    {
        type: "watch",
        x: 19,
        y: 23,
        rotation: 0,
        custom: "45"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 190,
            y: 109
        }
    }]
},
{
    objects: [{
        type: "ground_7",
        x: 57,
        y: 286,
        rotation: .2617993877991494
    },
    {
        type: "ground_bottom",
        x: 177,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 552,
        y: 298,
        rotation: 0
    },
    {
        type: "skull",
        x: 59,
        y: 78,
        rotation: 0
    },
    {
        type: "breakable_rect_2",
        x: 59,
        y: 93,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_4",
        x: 450,
        y: 135,
        rotation: -.08726646259971647
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 349,
        y: 161,
        rotation: 0
    },
    {
        type: "fakehead",
        x: 412,
        y: 56,
        rotation: 0
    },
    {
        type: "symbol_8",
        x: 411,
        y: 71,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skeleton_left",
        x: 373,
        y: 259,
        rotation: 0
    },
    {
        type: "deadhand_left",
        x: 241,
        y: 264,
        rotation: 0
    },
    {
        type: "watch",
        x: 25,
        y: 28,
        rotation: 0,
        custom: "35"
    }],
    joints: []
},
{
    objects: [{
        type: "grave",
        x: 98,
        y: 260,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 96,
        y: 213,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 43,
        y: 213,
        rotation: 0
    },
    {
        type: "grave",
        x: 54,
        y: 259,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 7,
        y: 212,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 58,
        y: 153,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 475,
        y: 232,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 177,
        y: 298,
        rotation: 0
    },
    {
        type: "grave",
        x: 369,
        y: 176,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 551,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 461,
        y: 197,
        rotation: 0
    },
    {
        type: "skeleton_left",
        x: 450,
        y: 166,
        rotation: 0
    },
    {
        type: "symbol_9",
        x: 263,
        y: 211,
        rotation: 1.5707963267948966,
        density: .1
    },
    {
        type: "skull",
        x: 92,
        y: 132,
        rotation: 0,
        density: 3.5
    },
    {
        type: "bomb",
        x: 65,
        y: 130,
        rotation: 0,
        custom: "30",
        force: 8
    },
    {
        type: "bomb",
        x: 188,
        y: 271,
        rotation: 0,
        custom: "90",
        force: 5
    },
    {
        type: "bomb",
        x: 326,
        y: 273,
        rotation: 0,
        custom: "50",
        force: 5
    },
    {
        type: "watch",
        x: 21,
        y: 22,
        rotation: 0,
        custom: "25"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 263,
            y: 160
        }
    }]
},
{
    objects: [{
        type: "ground_bottom",
        x: 103,
        y: 299,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 513,
        y: 300,
        rotation: 0
    },
    {
        type: "ground_platform_small",
        x: 309,
        y: 331,
        rotation: 0
    },
    {
        type: "skeleton_right",
        x: 195,
        y: 260,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 115,
        y: 111,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 373,
        y: 111,
        rotation: 0
    },
    {
        type: "ground_bg_medium_2",
        x: 240,
        y: 233,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 241,
        y: 194,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 148,
        y: 84,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_5",
        x: 80,
        y: 84,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 416,
        y: 84,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_5",
        x: 333,
        y: 85,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_9",
        x: 113,
        y: 70,
        rotation: 0
    },
    {
        type: "symbol_9",
        x: 374,
        y: 69,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 65,
        y: 272,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_5",
        x: 132,
        y: 272,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_9",
        x: 99,
        y: 258,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 444,
        y: 273,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_5",
        x: 382,
        y: 273,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_9",
        x: 411,
        y: 257,
        rotation: 0
    },
    {
        type: "stone_sircle",
        x: 404,
        y: 46,
        rotation: 0
    },
    {
        type: "skull",
        x: 81,
        y: 56,
        rotation: 0,
        density: 2
    },
    {
        type: "watch",
        x: 23,
        y: 28,
        rotation: 0,
        custom: "20"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_vert_small__2",
        x: 162,
        y: 216,
        rotation: 0
    },
    {
        type: "stone_platform_2",
        x: 75,
        y: 244,
        rotation: 1.5707963267948966,
        density: 0
    },
    {
        type: "ground_6",
        x: 128,
        y: 253,
        rotation: 0
    },
    {
        type: "stone_platform_catapult",
        x: 75,
        y: 221,
        rotation: 0,
        density: .7
    },
    {
        type: "skull",
        x: 40,
        y: 144,
        rotation: 0,
        density: 3
    },
    {
        type: "bomb",
        x: 224,
        y: 134,
        rotation: 0,
        custom: "20",
        force: 10
    },
    {
        type: "ground_bg_half_3",
        x: 513,
        y: 175,
        rotation: 0
    },
    {
        type: "stone_sircle",
        x: 108,
        y: 64,
        rotation: 0,
        density: 15
    },
    {
        type: "wood_platform_small_1",
        x: 223,
        y: 153,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "symbol_8",
        x: 109,
        y: 87,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 40,
        y: 161,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_vert_big",
        x: 397,
        y: 274,
        rotation: 0
    },
    {
        type: "ground_vert_big",
        x: 489,
        y: 274,
        rotation: 0
    },
    {
        type: "skeleton_left",
        x: 423,
        y: 201,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 456,
        y: 150,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 418,
        y: 124,
        rotation: 0
    },
    {
        type: "watch",
        x: 26,
        y: 28,
        rotation: 0,
        custom: "30"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 75,
            y: 225
        }
    }]
},
{
    objects: [{
        type: "ground_7",
        x: 548,
        y: 313,
        rotation: 0
    },
    {
        type: "ground_7",
        x: 1,
        y: 161,
        rotation: .3490658503988659
    },
    {
        type: "ground_bg_half",
        x: 12,
        y: 238,
        rotation: 0
    },
    {
        type: "ground_bg_half_2",
        x: 163,
        y: 238,
        rotation: 0
    },
    {
        type: "grave",
        x: 111,
        y: 261,
        rotation: 0
    },
    {
        type: "ground_1",
        x: 259,
        y: 290,
        rotation: 0
    },
    {
        type: "ground_7",
        x: -35,
        y: 322,
        rotation: 0
    },
    {
        type: "ground_platform_small",
        x: 361,
        y: 208,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 1,
        y: 205,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 180,
        y: 204,
        rotation: 0
    },
    {
        type: "stone_platform_2",
        x: 363,
        y: 185,
        rotation: 0
    },
    {
        type: "resizeable_rect_3",
        x: 162,
        y: 168,
        rotation: 0
    },
    {
        type: "resizeable_rect_3",
        x: 256,
        y: 169,
        rotation: 0
    },
    {
        type: "resizeable_rect_3",
        x: 364,
        y: 170,
        rotation: 0
    },
    {
        type: "skull",
        x: 28,
        y: 56,
        rotation: 0,
        density: 5
    },
    {
        type: "stone_platform_2",
        x: 160,
        y: 182,
        rotation: 0
    },
    {
        type: "skeleton_right",
        x: 191,
        y: 258,
        rotation: 0
    },
    {
        type: "stone_platform_2",
        x: 256,
        y: 182,
        rotation: 0
    },
    {
        type: "ground_5",
        x: 505,
        y: 269,
        rotation: -.25
    },
    {
        type: "symbol_4",
        x: 28,
        y: 72,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "watch",
        x: 20,
        y: 22,
        rotation: 0,
        custom: "20"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_bg_medium_4",
        x: 145,
        y: 235,
        rotation: 0
    },
    {
        type: "triangle_1",
        x: 353,
        y: 108,
        rotation: -1.5707963267948966,
        density: 10,
        restitution: .1
    },
    {
        type: "spikes_medium",
        x: 335,
        y: 105,
        rotation: -1.0471975511965976,
        density: 10,
        restitution: .1
    },
    {
        type: "ground_bg_medium_4",
        x: 54,
        y: 234,
        rotation: 0
    },
    {
        type: "woodplatform_2",
        x: 414,
        y: 279,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 108,
        y: 234,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 8,
        y: 234,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: -17,
        y: 305,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 456,
        y: 300,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 144,
        y: 324,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 514,
        y: 324,
        rotation: 0
    },
    {
        type: "resizeable_rect_3",
        x: 415,
        y: 267,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 171,
        y: 143,
        rotation: 0
    },
    {
        type: "symbol_8",
        x: 353,
        y: 139,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "resizeable_rect_3",
        x: 221,
        y: 296,
        rotation: 0
    },
    {
        type: "symbol_5",
        x: 104,
        y: 147,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 58,
        y: 147,
        rotation: 0,
        custom: "1"
    },
    {
        type: "skull",
        x: 70,
        y: 119,
        rotation: 0,
        density: 1
    },
    {
        type: "skeleton_right",
        x: 101,
        y: 267,
        rotation: 0
    },
    {
        type: "symbol_8",
        x: 82,
        y: 132,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: -71,
        y: 169,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 108,
        y: 169,
        rotation: 0
    },
    {
        type: "watch",
        x: 20,
        y: 23,
        rotation: 0,
        custom: "30"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 345,
            y: 95
        }
    },
    {
        type: 0,
        point1: {
            x: 331,
            y: 119
        }
    }]
},
{
    objects: [{
        type: "ground_10",
        x: 245,
        y: 265,
        rotation: 0
    },
    {
        type: "ground_vert_small",
        x: 129,
        y: 218,
        rotation: 0
    },
    {
        type: "ground_vert_small",
        x: 53,
        y: 219,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 98,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 509,
        y: 272,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 453,
        y: 241,
        rotation: 0
    },
    {
        type: "resizeable_rect_2",
        x: 91,
        y: 270,
        rotation: 0
    },
    {
        type: "resizeable_rect_2",
        x: 91,
        y: 249,
        rotation: 0
    },
    {
        type: "resizeable_rect_2",
        x: 91,
        y: 227,
        rotation: 0
    },
    {
        type: "resizeable_rect_2",
        x: 91,
        y: 186,
        rotation: 0
    },
    {
        type: "resizeable_rect_2",
        x: 91,
        y: 206,
        rotation: 0
    },
    {
        type: "skull",
        x: 92,
        y: 168,
        rotation: 0
    },
    {
        type: "bomb",
        x: 243,
        y: 120,
        rotation: 0,
        density: 5,
        restitution: .01,
        custom: "40",
        force: 10
    },
    {
        type: "symbol_8",
        x: 243,
        y: 136,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "stone_sircle",
        x: 160,
        y: 87,
        rotation: 0
    },
    {
        type: "ropeend",
        x: 135,
        y: 81,
        rotation: -1.2500000000000004
    },
    {
        type: "ropeend",
        x: 121,
        y: 74,
        rotation: -.9500000000000003
    },
    {
        type: "ropeend",
        x: 110,
        y: 65,
        rotation: -.7500000000000001
    },
    {
        type: "ropeend",
        x: 101,
        y: 53,
        rotation: -.49999999999999994
    },
    {
        type: "ropeend",
        x: 94,
        y: 40,
        rotation: -.44999999999999996
    },
    {
        type: "ground_vert_small",
        x: 92,
        y: -29,
        rotation: 3.141592653589793
    },
    {
        type: "symbol_8",
        x: 151,
        y: 108,
        rotation: .39999999999999997,
        density: 0,
        custom: "1"
    },
    {
        type: "skeleton_left",
        x: 453,
        y: 207,
        rotation: 0
    },
    {
        type: "watch",
        x: 33,
        y: 36,
        rotation: 0,
        custom: "35"
    }],
    joints: [{
        type: 1,
        point1: {
            x: 139,
            y: 83
        },
        point2: {
            x: 158,
            y: 86
        }
    },
    {
        type: 1,
        point1: {
            x: 132,
            y: 81
        },
        point2: {
            x: 125,
            y: 77
        }
    },
    {
        type: 1,
        point1: {
            x: 117,
            y: 71
        },
        point2: {
            x: 113,
            y: 67
        }
    },
    {
        type: 1,
        point1: {
            x: 107,
            y: 62
        },
        point2: {
            x: 102,
            y: 56
        }
    },
    {
        type: 1,
        point1: {
            x: 98,
            y: 49
        },
        point2: {
            x: 96,
            y: 43
        }
    },
    {
        type: 1,
        point1: {
            x: 91,
            y: 36
        },
        point2: {
            x: 91,
            y: 20
        }
    }]
},
{
    objects: [{
        type: "ground_bg_medium_3",
        x: 149,
        y: 226,
        rotation: 0
    },
    {
        type: "ground_bg_medium_3",
        x: 191,
        y: 226,
        rotation: 0
    },
    {
        type: "ground_platform_thin_med",
        x: 216,
        y: 271,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 528,
        y: 235,
        rotation: 0
    },
    {
        type: "ground_platform_thin_sm",
        x: 18,
        y: 271,
        rotation: 0
    },
    {
        type: "ground_platform_thin_sm",
        x: 368,
        y: 269,
        rotation: 0
    },
    {
        type: "skeleton_left",
        x: 448,
        y: 117,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 137,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 508,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 171,
        y: 174,
        rotation: 0,
        friction: 1
    },
    {
        type: "ground_bg_half_3",
        x: 504,
        y: 176,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 448,
        y: 147,
        rotation: 0
    },
    {
        type: "skull",
        x: 367,
        y: 130,
        rotation: 0
    },
    {
        type: "stone_square",
        x: 54,
        y: 242,
        rotation: 0,
        density: 0
    },
    {
        type: "bomb",
        x: 55,
        y: 222,
        rotation: 0,
        density: 3,
        custom: "40",
        force: 10
    },
    {
        type: "bomb",
        x: 159,
        y: 208,
        rotation: 0,
        custom: "50",
        force: 5
    },
    {
        type: "stone_sircle",
        x: 86,
        y: 145,
        rotation: 0,
        density: 5
    },
    {
        type: "bomb",
        x: 258,
        y: 153,
        rotation: 0,
        density: 1,
        restitution: .2,
        friction: 1,
        custom: "50",
        force: 5
    },
    {
        type: "stone_square",
        x: 335,
        y: 239,
        rotation: 0,
        density: 0
    },
    {
        type: "bomb",
        x: 336,
        y: 220,
        rotation: 0,
        density: 3,
        custom: "40",
        force: 3
    },
    {
        type: "symbol_8",
        x: 158,
        y: 224,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "watch",
        x: 24,
        y: 22,
        rotation: 0,
        custom: "40"
    }],
    joints: []
},
{
    objects: [{
        type: "grave",
        x: 458,
        y: 258,
        rotation: 0
    },
    {
        type: "ground_bg_half_4",
        x: 88,
        y: 226,
        rotation: 0,
        custom: "Olga"
    },
    {
        type: "ground_bottom",
        x: 459,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 62,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 67,
        y: 315,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 430,
        y: 316,
        rotation: 0
    },
    {
        type: "ground_platform_thin_big",
        x: 90,
        y: 185,
        rotation: .15000000000000002
    },
    {
        type: "skeleton_right",
        x: 68,
        y: 259,
        rotation: 0
    },
    {
        type: "fakehead",
        x: 60,
        y: 87,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 61,
        y: 103,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "watch",
        x: 19,
        y: 16,
        rotation: 0,
        custom: "30"
    },
    {
        type: "ground_platform_medium",
        x: 357,
        y: 130,
        rotation: 0
    },
    {
        type: "resizeable_rect_3",
        x: 359,
        y: 105,
        rotation: 0
    },
    {
        type: "symbol_3",
        x: 313,
        y: 105,
        rotation: 0
    },
    {
        type: "bomb",
        x: 404,
        y: 105,
        rotation: 0
    },
    {
        type: "deadhand_left",
        x: 345,
        y: 266,
        rotation: 0
    },
    {
        type: "symbol_5",
        x: 118,
        y: 115,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skull",
        x: 119,
        y: 98,
        rotation: 0
    }],
    joints: []
},
{
    objects: [{
        type: "ground_bg_medium_4",
        x: 9,
        y: 212,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 56,
        y: 213,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 125,
        y: 142,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: -7,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_5",
        x: 446,
        y: 219,
        rotation: -.15000000000000002
    },
    {
        type: "ground_bg_half_3",
        x: 478,
        y: 251,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 538,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger",
        x: 427,
        y: 222,
        rotation: 0
    },
    {
        type: "grave",
        x: 280,
        y: 114,
        rotation: 0
    },
    {
        type: "skeleton_right",
        x: 82,
        y: 257,
        rotation: 0
    },
    {
        type: "bomb",
        x: 364,
        y: 271,
        rotation: 0,
        custom: "80"
    },
    {
        type: "skull",
        x: 79,
        y: 76,
        rotation: 0
    },
    {
        type: "bomb",
        x: 69,
        y: 122,
        rotation: 0,
        custom: "50",
        force: 5
    },
    {
        type: "bomb",
        x: 179,
        y: 121,
        rotation: 0,
        custom: "60",
        force: 5
    },
    {
        type: "symbol_8",
        x: 68,
        y: 88,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "symbol_8",
        x: 179,
        y: 87,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_platform_thin_sm",
        x: 288,
        y: 140,
        rotation: 0
    }],
    joints: []
},
{
    objects: [{
        type: "grave",
        x: 168,
        y: 121,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 95,
        y: 269,
        rotation: 0
    },
    {
        type: "ground_5",
        x: 434,
        y: 241,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 181,
        y: 215,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 184,
        y: 300,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 555,
        y: 300,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 182,
        y: 156,
        rotation: 0
    },
    {
        type: "stone_platform_4",
        x: 277,
        y: 142,
        rotation: 0,
        density: .5
    },
    {
        type: "ground_4",
        x: 413,
        y: 147,
        rotation: 0
    },
    {
        type: "bomb",
        x: 467,
        y: 198,
        rotation: 0,
        custom: "75",
        force: 8
    },
    {
        type: "symbol_4",
        x: 451,
        y: 199,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skull",
        x: 422,
        y: 72,
        rotation: 0
    },
    {
        type: "breakable_rect_2",
        x: 421,
        y: 86,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "resizeable_rect_3",
        x: 330,
        y: 274,
        rotation: 0
    },
    {
        type: "resizeable_rect_3",
        x: 330,
        y: 259,
        rotation: 0
    },
    {
        type: "resizeable_rect_3",
        x: 330,
        y: 245,
        rotation: 0
    },
    {
        type: "skeleton_right",
        x: 167,
        y: 262,
        rotation: 0
    },
    {
        type: "firefly_group",
        x: 96,
        y: 261,
        rotation: 0
    },
    {
        type: "watch",
        x: 23,
        y: 24,
        rotation: 0,
        custom: "20"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 233,
            y: 141
        }
    }]
},
{
    objects: [{
        type: "pumpkin_ground_blue",
        x: 37,
        y: 269,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 575,
        y: 237,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 32,
        y: 299,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 491,
        y: 299,
        rotation: 0
    },
    {
        type: "ground_vert_small__2",
        x: 243,
        y: 348,
        rotation: 0
    },
    {
        type: "ground_vert_small__2",
        x: 278,
        y: 348,
        rotation: 0
    },
    {
        type: "stone_platform_1",
        x: 264,
        y: 132,
        rotation: 0
    },
    {
        type: "breakable_rect_2",
        x: 264,
        y: 146,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skull",
        x: 115,
        y: 274,
        rotation: 0,
        density: 1
    },
    {
        type: "stone_platform_1",
        x: 101,
        y: 177,
        rotation: 1.5707963267948966
    },
    {
        type: "stone_platform_2",
        x: 116,
        y: 84,
        rotation: 1.5707963267948966
    },
    {
        type: "ground_platform_thin_big",
        x: 14,
        y: 111,
        rotation: 0
    },
    {
        type: "resizeable_rect_3",
        x: 71,
        y: 94,
        rotation: 0
    },
    {
        type: "ground_bg_medium_3",
        x: 455,
        y: 225,
        rotation: 0
    },
    {
        type: "skeleton_left",
        x: 415,
        y: 259,
        rotation: 0
    },
    {
        type: "non_breakable_rect_1",
        x: 84,
        y: 159,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "non_breakable_rect_1",
        x: 394,
        y: 165,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_platform_thin_big",
        x: 484,
        y: 160,
        rotation: -.3
    },
    {
        type: "resizeable_circle_1",
        x: 460,
        y: 144,
        rotation: 0
    },
    {
        type: "resizeable_circle_1",
        x: 437,
        y: 151,
        rotation: 0
    },
    {
        type: "resizeable_circle_1",
        x: 414,
        y: 159,
        rotation: 0
    },
    {
        type: "firefly_group",
        x: 183,
        y: 271,
        rotation: 0
    },
    {
        type: "watch",
        x: 29,
        y: 24,
        rotation: 0,
        custom: "25"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 116,
            y: 104
        }
    },
    {
        type: 0,
        point1: {
            x: 101,
            y: 208
        }
    }]
},
{
    objects: [{
        type: "wood_platform_1",
        x: 110,
        y: 275,
        rotation: 1.5207963267948965,
        density: 0,
        restitution: .01,
        custom: "1"
    },
    {
        type: "ground_bg_half_3",
        x: 449,
        y: 259,
        rotation: 0
    },
    {
        type: "grave",
        x: 416,
        y: 265,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 177,
        y: 302,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 539,
        y: 302,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 182,
        y: 124,
        rotation: 0
    },
    {
        type: "ground_platform_thin_sm",
        x: 181,
        y: 140,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 425,
        y: 182,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 411,
        y: 152,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 177,
        y: 158,
        rotation: 0
    },
    {
        type: "bomb",
        x: 65,
        y: 179,
        rotation: 0,
        restitution: .2,
        custom: "70",
        force: 9
    },
    {
        type: "symbol_8",
        x: 63,
        y: 194,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "stone_platform_2",
        x: 254,
        y: 226,
        rotation: 0,
        density: 0
    },
    {
        type: "resizeable_circle_2",
        x: 254,
        y: 209,
        rotation: 0,
        density: .7,
        custom: "2"
    },
    {
        type: "woodplatform_17",
        x: 64,
        y: 269,
        rotation: 0,
        density: 1
    },
    {
        type: "wheel",
        x: 92,
        y: 272,
        rotation: 0
    },
    {
        type: "wheel",
        x: 35,
        y: 272,
        rotation: 0,
        restitution: .5
    },
    {
        type: "skeleton_left",
        x: 397,
        y: 120,
        rotation: 0
    },
    {
        type: "skull",
        x: 263,
        y: 47,
        rotation: 0
    },
    {
        type: "breakable_rect_2",
        x: 261,
        y: 61,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "watch",
        x: 23,
        y: 22,
        rotation: 0,
        custom: "20"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 92,
            y: 272
        }
    },
    {
        type: 0,
        point1: {
            x: 35,
            y: 272
        },
        custom: "-4"
    }]
},
{
    objects: [{
        type: "ground_bg_half_3",
        x: 460,
        y: 149,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 95,
        y: 84,
        rotation: .2
    },
    {
        type: "ground_platform_half",
        x: 394,
        y: 117,
        rotation: 0
    },
    {
        type: "ground_bg_medium",
        x: 466,
        y: 239,
        rotation: 0
    },
    {
        type: "symbol_8",
        x: 261,
        y: 108,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "deadhand_left",
        x: 412,
        y: 87,
        rotation: 0
    },
    {
        type: "skull",
        x: 50,
        y: 57,
        rotation: 0
    },
    {
        type: "ground_bg_medium",
        x: 7,
        y: 239,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 67,
        y: 60,
        rotation: .2,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_bg_half_4",
        x: 53,
        y: 242,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 344,
        y: 199,
        rotation: -.15000000000000002
    },
    {
        type: "ground_platform_thin_big",
        x: 54,
        y: 195,
        rotation: .25
    },
    {
        type: "symbol_8",
        x: 182,
        y: 216,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_bottom",
        x: 36,
        y: 312,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 526,
        y: 313,
        rotation: 0
    },
    {
        type: "symbol_9",
        x: 281,
        y: 302,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skeleton_left",
        x: 401,
        y: 274,
        rotation: 0
    },
    {
        type: "deadhand_right",
        x: 79,
        y: 177,
        rotation: .25
    },
    {
        type: "fakehead",
        x: 435,
        y: 167,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 416,
        y: 170,
        rotation: -.15000000000000002,
        density: 0,
        custom: "1"
    },
    {
        type: "watch",
        x: 25,
        y: 19,
        rotation: 0,
        custom: "30"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_7",
        x: 9,
        y: 264,
        rotation: .3
    },
    {
        type: "ground_3",
        x: 191,
        y: 260,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 68,
        y: 303,
        rotation: 0
    },
    {
        type: "skeleton_left",
        x: 448,
        y: 234,
        rotation: 0
    },
    {
        type: "ground_vert_big",
        x: 429,
        y: 307,
        rotation: 0
    },
    {
        type: "skull",
        x: 71,
        y: 174,
        rotation: 0
    },
    {
        type: "breakable_rect_2",
        x: 70,
        y: 187,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "bomb",
        x: 187,
        y: 170,
        rotation: 0,
        custom: "20",
        force: 5
    },
    {
        type: "breakable_rect_2",
        x: 186,
        y: 186,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "resizeable_rect_1",
        x: 123,
        y: 273,
        rotation: 0
    },
    {
        type: "watch",
        x: 27,
        y: 31,
        rotation: 0,
        custom: "20"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_7",
        x: -28,
        y: 276,
        rotation: 0
    },
    {
        type: "stone_platform_2",
        x: 221,
        y: 302,
        rotation: 0,
        density: 0
    },
    {
        type: "ground_5",
        x: 103,
        y: 276,
        rotation: .7000000000000001
    },
    {
        type: "ground_bottom",
        x: 48,
        y: 297,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 520,
        y: 309,
        rotation: 0
    },
    {
        type: "stone_platform_4",
        x: 375,
        y: 275,
        rotation: 2.6999999999999984,
        density: .8
    },
    {
        type: "bomb",
        x: 388,
        y: 282,
        rotation: 0,
        custom: "10",
        force: 8
    },
    {
        type: "skeleton_left",
        x: 449,
        y: 270,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 311,
        y: 153,
        rotation: 0
    },
    {
        type: "ground_platform_thin_sm",
        x: 467,
        y: 150,
        rotation: 0
    },
    {
        type: "skull",
        x: 185,
        y: 138,
        rotation: 0,
        density: 1
    },
    {
        type: "resizeable_circle_2",
        x: 305,
        y: 135,
        rotation: 0
    },
    {
        type: "resizeable_circle_2",
        x: 344,
        y: 135,
        rotation: 0
    },
    {
        type: "resizeable_circle_2",
        x: 385,
        y: 135,
        rotation: 0
    },
    {
        type: "stone_platform_4",
        x: 345,
        y: 120,
        rotation: 0,
        density: 5,
        restitution: .2
    },
    {
        type: "pumpkin_ground_blue",
        x: 250,
        y: 132,
        rotation: 0
    },
    {
        type: "watch",
        x: 26,
        y: 22,
        rotation: 0,
        custom: "20"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 334,
            y: 295
        }
    }]
},
{
    objects: [{
        type: "ground_bg_half_3",
        x: 485,
        y: 260,
        rotation: 0
    },
    {
        type: "ground_platform_thin_big",
        x: 415,
        y: 280,
        rotation: 0
    },
    {
        type: "ground_platform_thin_med",
        x: 245,
        y: 280,
        rotation: 0,
        restitution: .1
    },
    {
        type: "ground_bottom",
        x: 312,
        y: 306,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 462,
        y: 182,
        rotation: 0
    },
    {
        type: "ground_bg_medium_2",
        x: 151,
        y: 240,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 153,
        y: 208,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 446,
        y: 112,
        rotation: 0
    },
    {
        type: "skeleton_left",
        x: 426,
        y: 250,
        rotation: 0
    },
    {
        type: "ground_platform_thin_med",
        x: 448,
        y: 131,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 376,
        y: 147,
        rotation: 0
    },
    {
        type: "skull",
        x: 157,
        y: 120,
        rotation: 0
    },
    {
        type: "bomb",
        x: 211,
        y: 76,
        rotation: 0,
        density: 10,
        restitution: .1,
        custom: "10",
        force: 5
    },
    {
        type: "symbol_4",
        x: 210,
        y: 93,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 156,
        y: 136,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "stone_sircle",
        x: 390,
        y: 60,
        rotation: 0
    },
    {
        type: "symbol_8",
        x: 391,
        y: 84,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "watch",
        x: 24,
        y: 26,
        rotation: 0,
        custom: "20"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_10",
        x: 478,
        y: 263,
        rotation: 0
    },
    {
        type: "ground_vert_big",
        x: 141,
        y: 348,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 367,
        y: 299,
        rotation: 0,
        restitution: .1,
        friction: 4
    },
    {
        type: "ground_bottom",
        x: -87,
        y: 298,
        rotation: 0,
        restitution: .01,
        friction: 4
    },
    {
        type: "symbol_4",
        x: 354,
        y: 254,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 354,
        y: 271,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 399,
        y: 254,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 399,
        y: 271,
        rotation: 0,
        custom: "1"
    },
    {
        type: "stone_platform_1",
        x: 377,
        y: 239,
        rotation: 0,
        density: 1,
        restitution: .01,
        friction: 1
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 125,
        y: 131,
        rotation: 0
    },
    {
        type: "skull",
        x: 136,
        y: 114,
        rotation: 0
    },
    {
        type: "bomb",
        x: 112,
        y: 112,
        rotation: 0,
        custom: "20",
        force: 3
    },
    {
        type: "firefly_group",
        x: 234,
        y: 110,
        rotation: 0
    },
    {
        type: "deadhand_right",
        x: 219,
        y: 265,
        rotation: 0
    },
    {
        type: "bomb",
        x: 353,
        y: 171,
        rotation: 0,
        custom: "20",
        force: 23
    },
    {
        type: "fakehead",
        x: 397,
        y: 171,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 353,
        y: 188,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 398,
        y: 188,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skeleton_right",
        x: 47,
        y: 259,
        rotation: 0
    },
    {
        type: "watch",
        x: 24,
        y: 22,
        rotation: 0,
        custom: "30"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_bg_half_3",
        x: 370,
        y: 287,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 347,
        y: 216,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 134,
        y: 298,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 497,
        y: 299,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 274,
        y: 180,
        rotation: 0
    },
    {
        type: "ground_platform_thin_big",
        x: 496,
        y: 151,
        rotation: -.3
    },
    {
        type: "stone_platform_4",
        x: 65,
        y: 256,
        rotation: 0
    },
    {
        type: "symbol_4",
        x: 104,
        y: 271,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_4",
        x: 24,
        y: 271,
        rotation: 0,
        custom: "1"
    },
    {
        type: "bomb",
        x: 167,
        y: 214,
        rotation: 0,
        custom: "45"
    },
    {
        type: "bomb",
        x: 260,
        y: 214,
        rotation: 0,
        custom: "45"
    },
    {
        type: "bomb",
        x: 359,
        y: 212,
        rotation: 0,
        custom: "45"
    },
    {
        type: "stone_platform_2",
        x: 166,
        y: 229,
        rotation: 0,
        density: 0
    },
    {
        type: "stone_platform_2",
        x: 260,
        y: 229,
        rotation: 0,
        density: 0
    },
    {
        type: "stone_platform_2",
        x: 357,
        y: 229,
        rotation: 0,
        density: 0
    },
    {
        type: "stone_sircle",
        x: 168,
        y: 155,
        rotation: 0,
        density: 1
    },
    {
        type: "stone_sircle",
        x: 260,
        y: 155,
        rotation: 0,
        density: 1
    },
    {
        type: "stone_sircle",
        x: 359,
        y: 156,
        rotation: 0,
        density: 1
    },
    {
        type: "pumpkin_ground_blue",
        x: 177,
        y: 53,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger",
        x: 264,
        y: 73,
        rotation: 0
    },
    {
        type: "firefly_group",
        x: 178,
        y: 48,
        rotation: 0
    },
    {
        type: "skull",
        x: 281,
        y: 56,
        rotation: 0
    },
    {
        type: "bomb",
        x: 265,
        y: 55,
        rotation: 0,
        custom: "10",
        force: 2
    },
    {
        type: "skeleton_left",
        x: 429,
        y: 261,
        rotation: 0
    },
    {
        type: "watch",
        x: 28,
        y: 22,
        rotation: 0,
        custom: "30"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_bg_medium_4",
        x: 28,
        y: 195,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 134,
        y: 194,
        rotation: 0
    },
    {
        type: "ground_7",
        x: 480,
        y: 250,
        rotation: -.5499999999999999
    },
    {
        type: "ground_bg_medium_4",
        x: 80,
        y: 194,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 460,
        y: 275,
        rotation: 0
    },
    {
        type: "ground_platform_half",
        x: 91,
        y: 126,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: -7,
        y: 275,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 320,
        y: 104,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 146,
        y: 314,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 516,
        y: 314,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 316,
        y: 127,
        rotation: 0
    },
    {
        type: "resizeable_rect_4",
        x: 226,
        y: 103,
        rotation: 0
    },
    {
        type: "wood_platform_1",
        x: 228,
        y: 288,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_3",
        x: 227,
        y: 270,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_4",
        x: 227,
        y: 174,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_4",
        x: 227,
        y: 197,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_4",
        x: 227,
        y: 222,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_4",
        x: 227,
        y: 245,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_1",
        x: 227,
        y: 148,
        rotation: 0,
        custom: "1"
    },
    {
        type: "firefly_group",
        x: 348,
        y: 244,
        rotation: 0
    },
    {
        type: "skeleton_right",
        x: 72,
        y: 235,
        rotation: 0
    },
    {
        type: "skull",
        x: 93,
        y: 105,
        rotation: 0
    },
    {
        type: "bomb",
        x: 74,
        y: 103,
        rotation: 0,
        custom: "15"
    },
    {
        type: "watch",
        x: 22,
        y: 23,
        rotation: 0,
        custom: "20"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_triangle",
        x: 215,
        y: 291,
        rotation: 0
    },
    {
        type: "grave",
        x: 396,
        y: 279,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 349,
        y: 311,
        rotation: 0
    },
    {
        type: "ground_10",
        x: 103,
        y: 162,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: -88,
        y: 312,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 19,
        y: 189,
        rotation: 0
    },
    {
        type: "ground_10",
        x: 399,
        y: 162,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 359,
        y: 189,
        rotation: 0
    },
    {
        type: "wood_platform_2",
        x: 191,
        y: 188,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "wood_platform_1",
        x: 328,
        y: 89,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "wood_platform_1",
        x: 162,
        y: 90,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_platform_thin_med",
        x: 248,
        y: 89,
        rotation: 0
    },
    {
        type: "skull",
        x: 265,
        y: 74,
        rotation: 0
    },
    {
        type: "fakehead",
        x: 226,
        y: 73,
        rotation: 0
    },
    {
        type: "deadhand_left",
        x: 238,
        y: 163,
        rotation: 0
    },
    {
        type: "bomb",
        x: 245,
        y: 71,
        rotation: 0,
        custom: "15",
        force: "2"
    },
    {
        type: "bomb",
        x: 369,
        y: 283,
        rotation: 0,
        custom: "15",
        force: "6"
    },
    {
        type: "skeleton_right",
        x: 31,
        y: 275,
        rotation: 0
    },
    {
        type: "watch",
        x: 25,
        y: 23,
        rotation: 0,
        custom: "30"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_bg_half_3",
        x: 476,
        y: 242,
        rotation: 0
    },
    {
        type: "ground_7",
        x: -15,
        y: 221,
        rotation: .49999999999999994
    },
    {
        type: "ground_vert_small__2",
        x: 214,
        y: 270,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 499,
        y: 317,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 442,
        y: 295,
        rotation: 0
    },
    {
        type: "ground_vert_small__2",
        x: 192,
        y: 270,
        rotation: 0
    },
    {
        type: "ground_9",
        x: 254,
        y: 306,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 645,
        y: 326,
        rotation: 0
    },
    {
        type: "ground_7",
        x: -23,
        y: 313,
        rotation: 0
    },
    {
        type: "wood_platform_1",
        x: 136,
        y: 262,
        rotation: 0,
        custom: "1"
    },
    {
        type: "stone_platform_1",
        x: 135,
        y: 249,
        rotation: 0
    },
    {
        type: "ground_platform_thin_sm",
        x: 203,
        y: 242,
        rotation: 0
    },
    {
        type: "skeleton_left",
        x: 379,
        y: 287,
        rotation: 0
    },
    {
        type: "ground_10",
        x: 479,
        y: 196,
        rotation: .3
    },
    {
        type: "spikes_long_medium",
        x: 134,
        y: 239,
        rotation: 0,
        friction: 1
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 453,
        y: 213,
        rotation: 0,
        friction: 1
    },
    {
        type: "ground_platform_thin_bigger",
        x: 228,
        y: 133,
        rotation: 0
    },
    {
        type: "stone_platform_1",
        x: 379,
        y: 198,
        rotation: 0,
        density: 1,
        friction: 1
    },
    {
        type: "bomb",
        x: 282,
        y: 40,
        rotation: 0,
        custom: "15",
        force: 15
    },
    {
        type: "skull",
        x: 190,
        y: 43,
        rotation: 0
    },
    {
        type: "stone_platform_1",
        x: 213,
        y: 70,
        rotation: -.5235987755982988
    },
    {
        type: "wood_platform_small_1",
        x: 190,
        y: 57,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "wood_platform_small_1",
        x: 284,
        y: 56,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "watch",
        x: 24,
        y: 21,
        rotation: 0,
        custom: "20"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 107,
            y: 243
        }
    },
    {
        type: 0,
        point1: {
            x: 163,
            y: 244
        }
    },
    {
        type: 0,
        point1: {
            x: 240,
            y: 53
        }
    }]
},
{
    objects: [{
        type: "skull",
        x: 67,
        y: 60,
        rotation: 0
    },
    {
        type: "wood_platform_small_1",
        x: 150,
        y: 129,
        rotation: 1.5707963267948966,
        density: 0,
        custom: "1"
    },
    {
        type: "wood_platform_small_1",
        x: 94,
        y: 68,
        rotation: 1.5707963267948966,
        density: 0,
        custom: "1"
    },
    {
        type: "wood_platform_small_1",
        x: 426,
        y: 71,
        rotation: 1.5707963267948966,
        density: 0,
        custom: "1"
    },
    {
        type: "watch",
        x: 21,
        y: 19,
        rotation: 0
    },
    {
        type: "ground_platform_thin_sm",
        x: 77,
        y: 74,
        rotation: .1
    },
    {
        type: "ground_platform_thin_sm",
        x: 443,
        y: 76,
        rotation: -.1
    },
    {
        type: "wood_platform_small_1",
        x: 373,
        y: 127,
        rotation: 1.5707963267948966,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_platform_thin_sm",
        x: 131,
        y: 133,
        rotation: .1
    },
    {
        type: "wood_platform_small_1",
        x: 214,
        y: 182,
        rotation: 1.5707963267948966,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_platform_thin_sm",
        x: 392,
        y: 131,
        rotation: -.1
    },
    {
        type: "ground_vert_small__2",
        x: 103,
        y: 328,
        rotation: 0
    },
    {
        type: "wood_platform_small_1",
        x: 318,
        y: 180,
        rotation: 1.5707963267948966,
        density: 0,
        custom: "1"
    },
    {
        type: "ground_10",
        x: 267,
        y: 269,
        rotation: 0
    },
    {
        type: "ground_platform_thin_sm",
        x: 194,
        y: 187,
        rotation: .1
    },
    {
        type: "ground_platform_thin_sm",
        x: 335,
        y: 185,
        rotation: -.1
    },
    {
        type: "ground_bottom",
        x: -95,
        y: 299,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 301,
        y: 302,
        rotation: 0
    },
    {
        type: "deadhand_left",
        x: 368,
        y: 267,
        rotation: 0
    },
    {
        type: "skeleton_right",
        x: 47,
        y: 258,
        rotation: 0
    },
    {
        type: "fakehead",
        x: 454,
        y: 63,
        rotation: 0
    }],
    joints: []
},
{
    objects: [{
        type: "pumpkin_ground_blue",
        x: 37,
        y: 236,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 461,
        y: 288,
        rotation: 0
    },
    {
        type: "ground_7",
        x: 150,
        y: 310,
        rotation: .2
    },
    {
        type: "ground_7",
        x: -38,
        y: 291,
        rotation: 0
    },
    {
        type: "watch",
        x: 23,
        y: 24,
        rotation: 0,
        custom: "20"
    },
    {
        type: "ground_bottom",
        x: -67,
        y: 307,
        rotation: 0
    },
    {
        type: "ground_bg_half_3",
        x: 438,
        y: 210,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: 304,
        y: 307,
        rotation: 0
    },
    {
        type: "ground_platform_thin_med",
        x: 147,
        y: 179,
        rotation: 0
    },
    {
        type: "ground_platform_thin_bigger_mirror",
        x: 354,
        y: 181,
        rotation: 0,
        friction: 1
    },
    {
        type: "skull",
        x: 225,
        y: 164,
        rotation: 0,
        density: .5,
        friction: .5
    },
    {
        type: "wood_platform_square_1",
        x: 189,
        y: 156,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_1",
        x: 189,
        y: 130,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_1",
        x: 189,
        y: 103,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_1",
        x: 267,
        y: 130,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_1",
        x: 267,
        y: 157,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_6",
        x: 156,
        y: 124,
        rotation: 0,
        custom: "1"
    },
    {
        type: "symbol_7",
        x: 301,
        y: 127,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_5",
        x: 267,
        y: 104,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_5",
        x: 162,
        y: 156,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_4",
        x: 241,
        y: 104,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_2",
        x: 215,
        y: 104,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_small_1",
        x: 213,
        y: 84,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_small_1",
        x: 247,
        y: 84,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_circle_1",
        x: 231,
        y: 66,
        rotation: 0,
        density: 10
    },
    {
        type: "skeleton_left",
        x: 403,
        y: 269,
        rotation: 0
    },
    {
        type: "stone_square",
        x: 243,
        y: 129,
        rotation: 0,
        density: 0
    },
    {
        type: "stone_square",
        x: 213,
        y: 129,
        rotation: 0,
        density: 0
    },
    {
        type: "wood_platform_square_3",
        x: 136,
        y: 157,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_2",
        x: 321,
        y: 159,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_3",
        x: 294,
        y: 158,
        rotation: 0,
        custom: "1"
    }],
    joints: []
},
{
    objects: [{
        type: "ground_7",
        x: 250,
        y: 320,
        rotation: 0
    },
    {
        type: "ground_7",
        x: 360,
        y: 303,
        rotation: 0
    },
    {
        type: "pumpkin_ground_blue",
        x: 447,
        y: 221,
        rotation: 0
    },
    {
        type: "ground_platform_thin_med",
        x: 456,
        y: 240,
        rotation: 0
    },
    {
        type: "ground_8",
        x: 265,
        y: 272,
        rotation: 0,
        friction: .1
    },
    {
        type: "ground_7",
        x: 474,
        y: 292,
        rotation: 0
    },
    {
        type: "ground_bottom",
        x: -101,
        y: 289,
        rotation: 0,
        friction: .1
    },
    {
        type: "ground_bottom",
        x: 171,
        y: 329,
        rotation: 0,
        friction: .1
    },
    {
        type: "ground_bottom",
        x: 542,
        y: 328,
        rotation: 0
    },
    {
        type: "skeleton_right",
        x: 33,
        y: 253,
        rotation: 0
    },
    {
        type: "wood_platform_small_1",
        x: 285,
        y: 171,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "wood_platform_small_1",
        x: 244,
        y: 171,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "bomb",
        x: 206,
        y: 155,
        rotation: 0,
        friction: 1,
        custom: "20",
        force: 5
    },
    {
        type: "wood_platform_small_1",
        x: 205,
        y: 171,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skull",
        x: 403,
        y: 109,
        rotation: 0,
        friction: 1
    },
    {
        type: "spikes_circle",
        x: 242,
        y: 153,
        rotation: 0,
        density: 15,
        friction: .5
    },
    {
        type: "spikes_circle",
        x: 282,
        y: 152,
        rotation: 0,
        density: 15,
        friction: .5
    },
    {
        type: "wood_platform_1",
        x: 115,
        y: 133,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "stone_platform_2",
        x: 115,
        y: 120,
        rotation: 0,
        density: .5,
        friction: 1
    },
    {
        type: "spikes_medium",
        x: 116,
        y: 110,
        rotation: 0,
        density: .5,
        friction: 1
    },
    {
        type: "wood_platform_small_1",
        x: 402,
        y: 125,
        rotation: 0,
        density: 0,
        custom: "1"
    }],
    joints: [{
        type: 0,
        point1: {
            x: 98,
            y: 113
        }
    },
    {
        type: 0,
        point1: {
            x: 134,
            y: 114
        }
    }]
},
{
    objects: [{
        type: "ground_vert_big",
        x: 443,
        y: 328,
        rotation: 0
    },
    {
        type: "ground_bg_medium_4",
        x: 124,
        y: 287,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 125,
        y: 228,
        rotation: 0
    },
    {
        type: "ground_bg_medium_3",
        x: 275,
        y: 312,
        rotation: 0
    },
    {
        type: "ground_platform_medium",
        x: 279,
        y: 266,
        rotation: 0
    },
    {
        type: "stone_square",
        x: 311,
        y: 240,
        rotation: 0
    },
    {
        type: "stone_square",
        x: 251,
        y: 240,
        rotation: 0
    },
    {
        type: "wood_platform_square_3",
        x: 311,
        y: 217,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_3",
        x: 252,
        y: 218,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_1",
        x: 156,
        y: 199,
        rotation: 0,
        friction: 5,
        custom: "1"
    },
    {
        type: "wood_platform_square_1",
        x: 99,
        y: 199,
        rotation: 0,
        friction: 5,
        custom: "1"
    },
    {
        type: "stone_square",
        x: 156,
        y: 176,
        rotation: 0,
        friction: 5
    },
    {
        type: "stone_square",
        x: 99,
        y: 176,
        rotation: 0,
        friction: 5
    },
    {
        type: "wood_platform_square_4",
        x: 100,
        y: 127,
        rotation: 0,
        friction: 5,
        custom: "1"
    },
    {
        type: "wood_platform_square_5",
        x: 156,
        y: 128,
        rotation: 0,
        friction: 5,
        custom: "1"
    },
    {
        type: "wood_platform_square_3",
        x: 156,
        y: 154,
        rotation: 0,
        friction: 5,
        custom: "1"
    },
    {
        type: "wood_platform_square_2",
        x: 100,
        y: 154,
        rotation: 0,
        friction: 5,
        custom: "1"
    },
    {
        type: "stone_platform_4",
        x: 128,
        y: 108,
        rotation: 0
    },
    {
        type: "wood_platform_square_1",
        x: 346,
        y: 150,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_2",
        x: 218,
        y: 150,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "stone_platform_4",
        x: 282,
        y: 117,
        rotation: 0
    },
    {
        type: "symbol_9",
        x: 282,
        y: 131,
        rotation: 0,
        custom: "1"
    },
    {
        type: "skeleton_left",
        x: 453,
        y: 253,
        rotation: 0
    },
    {
        type: "wood_platform_square_3",
        x: 43,
        y: 71,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "wood_platform_1",
        x: 75,
        y: 52,
        rotation: 0,
        custom: "1"
    },
    {
        type: "wood_platform_square_2",
        x: 107,
        y: 71,
        rotation: 0,
        density: 0,
        custom: "1"
    },
    {
        type: "skull",
        x: 55,
        y: 36,
        rotation: 0,
        density: 1
    },
    {
        type: "watch",
        x: 17,
        y: 16,
        rotation: 0,
        custom: "15"
    }],
    joints: []
}];
Sprite.prototype.heightTo = function(a, c, d, e, f) {
    c = ~~c;
    0 >= c || (a = this.addTween("height", a, c, d, e, f)) && a.play();
    return this
};
function getRandomInt(a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a
}
function getRandom(a, c) {
    return Math.random() * (c - a) + a
}
function toFormattedTime(a) {
    var c = "00",
    d = "00",
    d = c = 0;
    a %= 3600;
    c = Math.floor(a / 60);
    d = a % 60;
    c = 10 <= c ? c.toString() : "0" + c.toString();
    d = 10 <= d ? d.toString() : "0" + d.toString();
    return c + ":" + d
}
function getName(a, c) {
    var d = c ? 0 : 1;
    return /^(\w{2,})\d+/i.exec(a) ? /^(\w{2,})(\d+)/i.exec(a)[d] : ""
}
function getQueryParams(a) {
    a = a.split("+").join(" ");
    for (var c = {},
    d, e = /[?&]?([^=]+)=([^&]*)/g; d = e.exec(a);) c[decodeURIComponent(d[1])] = decodeURIComponent(d[2]);
    return c
}
Number.prototype.insertComma = function() {
    for (var a = parseInt(this).toString().split("").reverse().join(""), c = "", d = 0; d < a.length; d++) c += (0 < d && 0 == d % 3 ? ",": "") + a.charAt(d);
    return c.split("").reverse().join("")
};
Array.prototype.deleteElement = function(a) {
    for (var c = 0; c < this.length; c++) this[c] == a && this.splice(c, 1)
};
var showDebugDraw = !1,
isAndroid = !1,
stage, world, mc, fps = 24,
GET, screenWidthCoef = 1,
screenHeightCoef = 1,
bitmaps, LANDSCAPE_MODE = !0,
STATE_SPLASH = 1,
STATE_MENU = 2,
STATE_GAME = 3,
STATE_SELECT_LEVEL = 4,
STATE_YOU_WIN = 5,
STATE_YOU_LOSE = 6,
STATE_GAME_OVER = 7,
gameState = STATE_GAME,
data = [],
curLevel = 0,
setId = 0,
titleLength = 16,
buttonDelay = 50,
clickDelay = 50,
isSoundOn = !0,
prevMusicName = "",
countIteration = 0,
gameTimer = null,
gameDecreaseTimer = null,
sprite = null,
letterSize = [],
batEyeSprites = [],
gameScoreText = null,
gameTimerText = null,
curLevelText = null,
levelStarSprite = null,
pause_flag = !1,
start_level_flag = !1,
animation_flag = !1,
bat_eye_flag = [],
contact_flag = !1,
win_flag = !1,
lose_flag = !1,
help_bomb_flag = !1,
show_hint_flag = !1,
no_level_star_flag = !1,
levelScore = 0,
gameScore = 0,
levelsScores = [],
levelsStars = [],
charMap = "0123456789:".split(""),
charWidth = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
backgroundArray = "back1 back2 back3 back4 back5 back6 back7 back8".split(" "),
explodeSoundArray = ["bomb_explosion", "bomb_explosion_1"],
MORE_GAMES_URL = "http://h.7k7k.com/";
window.onload = function() {
    GET = Utils.parseGet();
    Utils.addMobileListeners(LANDSCAPE_MODE);
    Utils.mobileCorrectPixelRatio();
    Utils.addFitLayoutListeners();
    ExternalAPI.init();
    setTimeout(startLoad, 600)
};
function startLoad() {
    var a = Utils.getMobileScreenResolution(LANDSCAPE_MODE);
    1 == GET.debug && (a = Utils.getScaleScreenResolution(1, LANDSCAPE_MODE));
    Utils.globalScale = a.scale;
    Utils.createLayout(document.getElementById("main_container"), a);
    Utils.addEventListener("fitlayout",
    function() {
        stage && (stage.drawScene(document.getElementById("screen")), buildBackground());
        Game.world && box2d.setDebugDrawScale(Game.world)
    });
    Utils.addEventListener("lockscreen",
    function() {
        stage && stage.started && stage.stop()
    });
    Utils.addEventListener("unlockscreen",
    function() {
        stage && !stage.started && stage.start()
    });
    Utils.mobileHideAddressBar();
    1 != GET.debug && Utils.checkOrientation(LANDSCAPE_MODE);
    for (var a = Utils.imagesRoot ,
    c = [{
        name: "bubbles",
        src: "./bubbles.png",
        width: 126,
        height: 126,
        frames: 10
    },
    {
        name: "eyes1",
        src: "./eyes1.png",
        width: 19,
        height: 8,
        frames: 7
    },
    {
        name: "eyes2",
        src: "./eyes2.png",
        width: 19,
        height: 8,
        frames: 8
    },
    {
        name: "hand_fakehead_left",
        src: "./hand_fakehead_left.png",
        width: 44,
        height: 91,
        frames: 10,
        layers: 2
    },
    {
        name: "hand_fakehead_right",
        src: "./hand_fakehead_right.png",
        width: 47,
        height: 91,
        frames: 10,
        layers: 2
    },
    {
        name: "hand_realhand_left",
        src: "./hand_realhand_left.png",
        width: 44,
        height: 91,
        frames: 10,
        layers: 2
    },
    {
        name: "hand_realhand_right",
        src: "./hand_realhand_right.png",
        width: 44,
        height: 91,
        frames: 10,
        layers: 2
    },
    {
        name: "pumpkin_anim",
        src: "./pumpkin_anim.png",
        width: 26,
        height: 29,
        frames: 18,
        layers: 2
    },
    {
        name: "pumpkin_anim_2",
        src: "./pumpkin_anim_2.png",
        width: 26,
        height: 27,
        frames: 18,
        layers: 2
    },
    {
        name: "select_level_eyes",
        src: "./select_level_eyes.png",
        width: 18,
        height: 8,
        frames: 110,
        layers: 2
    },
    {
        name: "skeleton_anim_left",
        src: "./skeleton_anim_left.png",
        width: 38,
        height: 45,
        frames: 18,
        layers: 2
    },
    {
        name: "skeleton_anim_right",
        src: "./skeleton_anim_right.png",
        width: 38,
        height: 45,
        frames: 18,
        layers: 2
    },
    {
        name: "smoke",
        src: "./smoke.png",
        width: 63,
        height: 76,
        frames: 9,
        layers: 5
    },
    {
        name: "white_explosion",
        src: "./white_explosion.png",
        width: 30,
        height: 30,
        frames: 11
    },
    {
        name: "back1",
        src: "./back1.jpg",
        width: 480,
        height: 320
    },
    {
        name: "back2",
        src: "./back2.jpg",
        width: 480,
        height: 320
    },
    {
        name: "back3",
        src: "./back3.jpg",
        width: 480,
        height: 320
    },
    {
        name: "back4",
        src: "./back4.jpg",
        width: 480,
        height: 320
    },
    {
        name: "back5",
        src: "./back5.jpg",
        width: 480,
        height: 320
    },
    {
        name: "back6",
        src: "./back6.jpg",
        width: 480,
        height: 320
    },
    {
        name: "back7",
        src: "./back7.jpg",
        width: 480,
        height: 320
    },
    {
        name: "back8",
        src: "./back8.jpg",
        width: 480,
        height: 320
    },
    {
        name: "choose_level",
        src: "./choose_level.png",
        width: 480,
        height: 320
    },
    {
        name: "game_complete",
        src: "./game_complete.jpg",
        width: 480,
        height: 320
    },
    {
        name: "game_complete_popup",
        src: "./game_complete_popup.png",
        width: 156,
        height: 159
    },
    {
        name: "level_failed_popup",
        src: "./level_failed_popup.png",
        width: 197,
        height: 161
    },
    {
        name: "menu",
        src: "./menu.jpg",
        width: 480,
        height: 320
    },
    {
        name: "level_1_1",
        src: "./level_1_1.png",
        width: 92,
        height: 51
    },
    {
        name: "level_1_2",
        src: "./level_1_2.png",
        width: 19,
        height: 50
    },
    {
        name: "level_2",
        src: "./level_2.png",
        width: 47,
        height: 29
    },
    {
        name: "level_4",
        src: "./level_4.png",
        width: 96,
        height: 7
    },
    {
        name: "level_5_1",
        src: "./level_5_1.png",
        width: 82,
        height: 21
    },
    {
        name: "level_5_2",
        src: "./level_5_2.png",
        width: 63,
        height: 7
    },
    {
        name: "level_6",
        src: "./level_6.png",
        width: 88,
        height: 54
    },
    {
        name: "hourglass",
        src: "./hourglass.png",
        width: 100,
        height: 150
    },
    {
        name: "01",
        src: "./01.png",
        width: 44,
        height: 40
    },
    {
        name: "02",
        src: "./02.png",
        width: 35,
        height: 34
    },
    {
        name: "03",
        src: "./03.png",
        width: 36,
        height: 33
    },
    {
        name: "04",
        src: "./04.png",
        width: 35,
        height: 30
    },
    {
        name: "05",
        src: "./05.png",
        width: 35,
        height: 34
    },
    {
        name: "06",
        src: "./06.png",
        width: 30,
        height: 27
    },
    {
        name: "07",
        src: "./07.png",
        width: 33,
        height: 39
    },
    {
        name: "11",
        src: "./11.png",
        width: 44,
        height: 40
    },
    {
        name: "12",
        src: "./12.png",
        width: 35,
        height: 34
    },
    {
        name: "13",
        src: "./13.png",
        width: 25,
        height: 36
    },
    {
        name: "14",
        src: "./14.png",
        width: 25,
        height: 36
    },
    {
        name: "15",
        src: "./15.png",
        width: 27,
        height: 27
    },
    {
        name: "16",
        src: "./16.png",
        width: 46,
        height: 33
    },
    {
        name: "17",
        src: "./17.png",
        width: 30,
        height: 27
    },
    {
        name: "18",
        src: "./18.png",
        width: 30,
        height: 27
    },
    {
        name: "19",
        src: "./19.png",
        width: 35,
        height: 30
    },
    {
        name: "letter1",
        src: "./letter1.png",
        width: 32,
        height: 29
    },
    {
        name: "letter10",
        src: "./letter10.png",
        width: 18,
        height: 27
    },
    {
        name: "letter11",
        src: "./letter11.png",
        width: 18,
        height: 27
    },
    {
        name: "letter12",
        src: "./letter12.png",
        width: 20,
        height: 19
    },
    {
        name: "letter13",
        src: "./letter13.png",
        width: 33,
        height: 23
    },
    {
        name: "letter14",
        src: "./letter14.png",
        width: 21,
        height: 19
    },
    {
        name: "letter15",
        src: "./letter15.png",
        width: 21,
        height: 19
    },
    {
        name: "letter16",
        src: "./letter16.png",
        width: 28,
        height: 22
    },
    {
        name: "letter2",
        src: "./letter2.png",
        width: 26,
        height: 24
    },
    {
        name: "letter3",
        src: "./letter3.png",
        width: 25,
        height: 23
    },
    {
        name: "letter4",
        src: "./letter4.png",
        width: 28,
        height: 22
    },
    {
        name: "letter5",
        src: "./letter5.png",
        width: 25,
        height: 24
    },
    {
        name: "letter6",
        src: "./letter6.png",
        width: 21,
        height: 19
    },
    {
        name: "letter7",
        src: "./letter7.png",
        width: 24,
        height: 28
    },
    {
        name: "letter8",
        src: "./letter8.png",
        width: 32,
        height: 29
    },
    {
        name: "letter9",
        src: "./letter9.png",
        width: 26,
        height: 24
    },
    {
        name: "firefly",
        src: "./firefly.png",
        width: 4,
        height: 4
    },
    {
        name: "btn_close_mini",
        src: "./btn_close_mini.png",
        width: 26,
        height: 26,
        frames: 3
    },
    {
        name: "btn_help_level",
        src: "./btn_help_level.png",
        width: 22,
        height: 22,
        frames: 3
    },
    {
        name: "btn_menu",
        src: "./btn_menu.png",
        width: 67,
        height: 25,
        frames: 3
    },
    {
        name: "btn_menu_level",
        src: "./btn_menu_level.png",
        width: 22,
        height: 22,
        frames: 2
    },
    {
        name: "btn_menu_mini",
        src: "./btn_menu_mini.png",
        width: 26,
        height: 26,
        frames: 3
    },
    {
        name: "btn_more_games",
        src: "./btn_more_games.png",
        width: 84,
        height: 25,
        frames: 3
    },
    {
        name: "btn_next_level_mini",
        src: "./btn_next_level_mini.png",
        width: 26,
        height: 26,
        frames: 3
    },
    {
        name: "btn_play",
        src: "./btn_play.png",
        width: 67,
        height: 25,
        frames: 3
    },
    {
        name: "btn_replay_mini",
        src: "./btn_replay_mini.png",
        width: 26,
        height: 26,
        frames: 3
    },
    {
        name: "btn_restart_level",
        src: "./btn_restart_level.png",
        width: 22,
        height: 22,
        frames: 2
    },
    {
        name: "btn_sound",
        src: "./btn_sound.png",
        width: 22,
        height: 22,
        frames: 3
    },
    {
        name: "get_star",
        src: "./get_star.png",
        width: 71,
        height: 38
    },
    {
        name: "icon_level",
        src: "./icon_level.png",
        width: 36,
        height: 35
    },
    {
        name: "icon_level_lock",
        src: "./icon_level_lock.png",
        width: 36,
        height: 35
    },
    {
        name: "icon_level_star",
        src: "./icon_level_star.png",
        width: 36,
        height: 35
    },
    {
        name: "no_get_star",
        src: "./no_get_star.png",
        width: 79,
        height: 58
    },
    {
        name: "nums",
        src: "./nums.png",
        width: 10,
        height: 10,
        frames: 11
    },
    {
        name: "popup",
        src: "./popup.png",
        width: 140,
        height: 154
    },
    {
        name: "popup_skeleton_bad",
        src: "./popup_skeleton_bad.png",
        width: 70,
        height: 72
    },
    {
        name: "popup_skeleton_cool",
        src: "./popup_skeleton_cool.png",
        width: 40,
        height: 88
    },
    {
        name: "stars_small",
        src: "./stars_small.png",
        width: 13,
        height: 12,
        frames: 2
    },
    {
        name: "txt_level",
        src: "./txt_level.png",
        width: 61,
        height: 20
    },
    {
        name: "txt_level_complete",
        src: "./txt_level_complete.png",
        width: 80,
        height: 28
    },
    {
        name: "txt_level_failed",
        src: "./txt_level_failed.png",
        width: 87,
        height: 50
    },
    {
        name: "skull",
        src: "./skull.png",
        width: 29,
        height: 28
    }], d = 0; d < c.length; d++) data.push({
        name: c[d].name,
        src: a + c[d].src
    });
    c = new ImagesPreloader;
    for (d = 0; d < objects.length; d++) data.push({
        name: objects[d].name,
        src: a + objects[d].image
    });
    data.push({
        name: "hourglass",
        src: a + "./hourglass.png"
    });
    TTLoader.create(loadSoundsEnd, !0, 1 == GET.debug);
    c = new ImagesPreloader;
    c.maxProgressVal = 50;
    c.load(data, loadImagesEnd, TTLoader.showLoadProgress)
}
function loadImagesEnd(a) {
    bitmaps = a;
    a = [];
    a.push("static/game_music");
    a.push("static/menu_music");
    a.push("static/bomb_explosion");
    a.push("static/bomb_explosion_1");
    a.push("static/button_click");
    a.push("static/dead_hand");
    a.push("static/head_eyes");
    a.push("static/head_jump");
    a.push("static/level_complete");
    a.push("static/level_failed");
    a.push("static/witch_laugh");
    a = new SoundsPreloader(a, TTLoader.loadComplete, TTLoader.showLoadProgress);
    a.maxProgressVal = 50;
    a.minProgressVal = 50;
    a.load()
}
function loadSoundsEnd() {
    document.getElementById("progress_container").style.display = "none";
    document.getElementById("screen_container").style.display = "block";
    document.getElementById("screen_background_container").style.display = "block";
    var a = 2;
    AudioMixer.isWebAudioSupport() || (a = 1);
    mixer = new AudioMixer("static", a);
    getLevelsScores();
    Game.init(levels);
    1 != GET.debug && (window.ExternalAPI && ExternalAPI.showCompanyLogo ? ExternalAPI.exec("showCompanyLogo", launchMenu) : launchMenu())
}
function launchMenu() {
    gameState = STATE_MENU;
    createScene()
}
function getStageWidth() {
    return Math.round(480 * screenWidthCoef)
}
function getStageHeight() {
    return Math.floor(320 * screenHeightCoef)
}
function getStageWidthCenter() {
    return Math.round(getStageWidth() / 2)
}
function getStageHeightCenter() {
    return Math.round(getStageHeight() / 2)
}
function clearBackground() {
    for (var a = stage.objects.filter(function(a) {
        return a.static
    }); a.length;) stage.removeChild(a.shift());
    buildBackground()
}
function createStage() {
    stage && (clearBackground(), stage.destroy(), stage.stop());
    stage = new Stage("screen", 480, 320, !1);
    stage.delay = 1E3 / fps;
    stage.onpretick = preTick;
    stage.onposttick = postTick;
    stage.ceilSizes = !0;
    stage.showFPS = !1;
    stage.start()
}
function setBackColor(a) {
    document.body.style.height = "100%";
    document.body.style.backgroundColor = a
}
function createScene() {
    setBackColor("#001a17");
    gameState == STATE_MENU && showScreen(showMenu);
    gameState == STATE_SELECT_LEVEL && showScreen(showLevelSelect);
    gameState == STATE_GAME && prepareLevel(curLevel);
    gameState == STATE_GAME_OVER && showScreen(showGameOver)
}
function showScreen(a) {
    if (stage && 0 < stage.objects.length) {
        var c = new Sprite(null, 480, 360, 1);
        c.x = getStageWidthCenter();
        c.y = getStageHeightCenter();
        c.fillColor = "#001a17";
        c.opacity = 0;
        stage.addChild(c);
        c.fadeTo(1, fps / 3, null,
        function() {
            createStage();
            a();
            buildBackground()
        })
    } else createStage(),
    a(),
    buildBackground()
}
function showMenu() {
    console.log("============showMenu()");
    playSound("menu_music", !0);
    var a = new Sprite(null, 480, 360, 1);
    a.x = getStageWidthCenter();
    a.y = getStageHeightCenter();
    a.fillColor = "#001a17";
    a.opacity = 1;
    stage.addChild(a);
    a.setZIndex(100);
    stage.drawScene(stage.canvas);
    mc = new Sprite(bitmaps.menu, 480, 320, 1);
    mc.x = getStageWidthCenter();
    mc.y = getStageHeightCenter();
    mc.static = !0;
    stage.addChild(mc);
    var c = new Sprite(bitmaps.btn_sound, 22, 22, 3);
    c.x = getStageWidthCenter() + 190;
    c.y = getStageHeightCenter() - 140;
    c.onclick = function(a) {
        toggleSound(a);
        return ! 1
    };
    stage.addChild(c);
    c.gotoAndStop(0);
    isSoundOn && c.gotoAndStop(1);
    c = [{
        x: -132,
        y: -116,
        s: 1
    },
    {
        x: -90,
        y: -129,
        s: .8
    },
    {
        x: -47,
        y: -98,
        s: .7
    },
    {
        x: -5,
        y: -130,
        s: .6
    },
    {
        x: 38,
        y: -121,
        s: 1
    },
    {
        x: 85,
        y: -114,
        s: .5
    }];
    batEyeSprites = [];
    bat_eye_flag = [];
    for (var d = 0; 6 > d; d++) mc = new Sprite(null, 10, 4, 1),
    mc.fillColor = "#011919",
    mc.x = getStageWidthCenter() + c[d].x,
    mc.y = getStageHeightCenter() + c[d].y,
    mc.scaleX = c[d].s,
    mc.scaleY = c[d].s,
    mc.static = !1,
    mc.height = 0,
    mc.ID = d,
    mc.BAT_EYES = !0,
    stage.addChild(mc),
    batEyeSprites.push(mc),
    bat_eye_flag.push(!1);
    a.fadeTo(0, fps / 1, null,
    function(a) {
        stage.removeChild(a.target.obj)
    });
    showButtonsMenu();
    showTitle();
    ExternalAPI.exec("showCopyright")
}
function showButtonsMenu() {
    var a = new Sprite(bitmaps.btn_play, 67, 25, 3);
    a.x = getStageWidthCenter() - 300;
    a.y = getStageHeightCenter() + 35;
    a.onclick = function() {
        gameState = STATE_SELECT_LEVEL;
        createScene();
        return ! 1
    };
    stage.addChild(a);
    a.gotoAndStop(2);
    var c = new Sprite(bitmaps.btn_more_games, 84, 25, 3);
    c.x = getStageWidthCenter() - 300;
    c.y = getStageHeightCenter() + 65;
    c.onclick = function() {
        showMoreGames();
        return ! 1
    };
    ExternalAPI.exec("getMoreGamesButtonDisable") || stage.addChild(c);
    c.gotoAndStop(2);
    a.moveTo(getStageWidthCenter() - 95, a.y, fps / 2, Easing.back.easeOut,
    function() {
        c.moveTo(getStageWidthCenter() - 95, c.y, fps / 2, Easing.back.easeOut)
    })
}
function showTitle() {
    for (var a = [{
        x: -180,
        y: -52
    },
    {
        x: -151,
        y: -57
    },
    {
        x: -128,
        y: -63
    },
    {
        x: -105,
        y: -69
    },
    {
        x: -84,
        y: -78
    },
    {
        x: -61,
        y: -81
    },
    {
        x: -37,
        y: -91
    },
    {
        x: -184,
        y: -16
    },
    {
        x: -155,
        y: -21
    },
    {
        x: -139,
        y: -28
    },
    {
        x: -127,
        y: -31
    },
    {
        x: -109,
        y: -32
    },
    {
        x: -83,
        y: -39
    },
    {
        x: -56,
        y: -47
    },
    {
        x: -34,
        y: -53
    },
    {
        x: -12,
        y: -59
    }], c = [], d = 0; d < titleLength; d++) {
        var e = new Sprite(bitmaps["letter" + (d + 1)], bitmaps["letter" + (d + 1)].width / Utils.globalScale, bitmaps["letter" + (d + 1)].height / Utils.globalScale, 1);
        e.x = getStageWidthCenter() + a[d].x;
        e.y = getStageHeightCenter() + a[d].y;
        e.ID = d;
        e.SHOW = !1;
        e.scaleX = 0;
        e.scaleY = 0;
        stage.addChild(e);
        c.push(e)
    }
    var f = 0,
    g = setInterval(function() {
        f == titleLength - 1 && clearInterval(g);
        c[f].SHOW || c[f].scaleTo(1, fps / 3, Easing.back.easeOut, null,
        function(a) {.5 <= a.target.obj.scaleX && !a.target.obj.SHOW && (a.target.obj.SHOW = !0, f++)
        })
    },
    20)
}
function showLevelSelect() {
    console.log("============showLevelSelect()");
    var a = new Sprite(null, 480, 360, 1);
    a.x = getStageWidthCenter();
    a.y = getStageHeightCenter();
    a.fillColor = "#001a17";
    a.opacity = 1;
    stage.addChild(a);
    a.setZIndex(100);
    stage.drawScene(stage.canvas);
    mc = new Sprite(bitmaps.choose_level, 480, 320, 1);
    mc.x = getStageWidthCenter();
    mc.y = getStageHeightCenter();
    mc.static = !0;
    stage.addChild(mc);
    mc.setZIndex(0);
    var c = new Sprite(bitmaps.btn_sound, 22, 22, 3);
    c.x = getStageWidthCenter() + 190;
    c.y = getStageHeightCenter() - 140;
    c.onclick = function(a) {
        toggleSound(a);
        return ! 1
    };
    stage.addChild(c);
    c.gotoAndStop(0);
    c.setZIndex(1);
    isSoundOn && c.gotoAndStop(1);
    mc = new TilesSprite(bitmaps.pumpkin_anim, 26, 29, 35, 18, 2);
    mc.x = getStageWidthCenter() - 173;
    mc.y = getStageHeightCenter() - 95;
    mc.animDelay = 2;
    mc.onenterframe = function(a) {
        a.target.animated && a.target.currentFrameX == a.target.framesCount - 1 && a.target.gotoAndPlay(0)
    };
    stage.addChild(mc);
    mc.setZIndex(1);
    mc = new TilesSprite(bitmaps.select_level_eyes, 18, 8, 218, 110, 2);
    mc.x = getStageWidthCenter() - 183;
    mc.y = getStageHeightCenter() + 117;
    mc.animDelay = 2;
    mc.scaleX = 1.1;
    mc.scaleY = 1.1;
    mc.onenterframe = function(a) {
        a.target.currentFrameX += 2;
        a.target.animated && a.target.currentFrameX == a.target.framesCount - 1 && a.target.gotoAndPlay(0)
    };
    stage.addChild(mc);
    mc.setZIndex(1);
    mc = new TilesSprite(bitmaps.pumpkin_anim_2, 26, 27, 35, 18, 2);
    mc.x = getStageWidthCenter() + 170;
    mc.y = getStageHeightCenter() + 41;
    mc.animDelay = 2;
    mc.onenterframe = function(a) {
        a.target.animated && a.target.currentFrameX >= a.target.framesCount - 1 && a.target.gotoAndPlay(0)
    };
    stage.addChild(mc);
    mc.setZIndex(1);
    mc = new TilesSprite(bitmaps.bubbles, 126, 126, 10, 10, 1);
    mc.x = getStageWidthCenter() + 200;
    mc.y = getStageHeightCenter() + 165;
    mc.animDelay = 2;
    mc.onenterframe = function(a) {
        a.target.animated && a.target.currentFrameX == a.target.framesCount - 1 && a.target.gotoAndPlay(0)
    };
    stage.addChild(mc);
    mc.setZIndex(1);
    mc = new TilesSprite(bitmaps.smoke, 63, 76, 45, 9, 5);
    mc.x = getStageWidthCenter() + 200;
    mc.y = getStageHeightCenter() + 80;
    mc.animDelay = 2;
    mc.opacity = .2;
    mc.scaleX = 1.5;
    mc.scaleY = 1.5;
    mc.onenterframe = function(a) {
        a.target.animated && a.target.currentFrameX == a.target.framesCount - 1 && a.target.gotoAndPlay(0)
    };
    stage.addChild(mc);
    mc.setZIndex(1);
    for (var d = 0,
    d = c = null,
    e = 0; e < levels.length; e++) if (d = Math.floor(e / 6), -1 < levelsScores[e] || 0 == e ? (c = new Sprite(0 < levelsStars[e] ? bitmaps.icon_level_star: bitmaps.icon_level, 36, 35, 1), c.LEVEL_ID = e, c.onclick = function(a) {
        curLevel = a.target.LEVEL_ID;
        gameState = STATE_GAME;
        showScreen(createScene);
        playSound("game_music", !0);
        return ! 1
    }) : c = new Sprite(bitmaps.icon_level_lock, 36, 35, 1), c.x = getStageWidthCenter() + -122 + 50 * (e - 6 * d), c.y = getStageHeightCenter() + -95 + 40 * d, stage.addChild(c), c.setZIndex(0), -1 < levelsScores[e] || 0 == e) d = new SimpleText(bitmaps.nums, 10, 10),
    d.x = c.x - 2,
    d.y = c.y + 3,
    d.scale = 1.3,
    d.charMap = charMap,
    d.charWidth = charWidth,
    d.align = d.ALIGN_CENTER,
    d.charSpacing = -1,
    d.write(e + 1);
    a.fadeTo(0, fps / 1, null,
    function(a) {
        stage.removeChild(a.target.obj)
    });
    showAdditionalButtons( - 90, 105, 90, 105);
    show_hint_flag = !0
}
function showAdditionalButtons(a, c, d, e) {
    var f = new Sprite(bitmaps.btn_menu, 67, 25, 3);
    f.x = getStageWidthCenter() + a;
    f.y = getStageHeightCenter() + 240;
    f.onclick = function() {
        launchMenu();
        return ! 1
    };
    stage.addChild(f);
    f.gotoAndStop(2);
    f.moveTo(f.x, getStageHeightCenter() + c, fps / 2, Easing.back.easeOut);
    a = new Sprite(bitmaps.btn_more_games, 84, 25, 3);
    a.x = getStageWidthCenter() + d;
    a.y = getStageHeightCenter() + 240;
    a.onclick = function() {
        showMoreGames();
        return ! 1
    };
    ExternalAPI.exec("getMoreGamesButtonDisable") || stage.addChild(a);
    a.gotoAndStop(2);
    a.moveTo(a.x, getStageHeightCenter() + e, fps / 2, Easing.back.easeOut)
}
function showYouWin() {
	mobConfig.stop();
    console.log("============showYouWin()");
    win_flag = !1;
    playSound("level_complete");
    var a = new Sprite(null, 480, 320, 1);
    a.x = getStageWidthCenter();
    a.y = getStageHeightCenter();
    a.fillColor = "#001a17";
    a.opacity = .7;
    a.static = !1;
    a.onclick = function() {
        return ! 1
    };
    stage.addChild(a);
    a = new SpritesGroup(stage);
    a.x = getStageWidthCenter();
    a.y = getStageHeightCenter() + 200;
    a.opacity = 0;
    var c = new Sprite(bitmaps.popup, 140, 154, 1);
    c.gx = 0;
    c.gy = 0;
    c.static = !1;
    a.addChild(c, !0);
    var d = new Sprite(bitmaps.txt_level_complete, 80, 28, 1);
    d.gx = 0;
    d.gy = -15;
    d.static = !1;
    a.addChild(d, !0);
    d = no_level_star_flag ? new Sprite(bitmaps.no_get_star, 79, 58, 1) : new Sprite(bitmaps.get_star, 71, 38, 1);
    d.gx = 0;
    d.gy = 10;
    d.static = !1;
    a.addChild(d, !0);
    c = stage.createTween(a, "y", a.y, getStageHeightCenter(), fps / 1, Easing.back.easeOut);
    a = stage.createTween(a, "opacity", .1, 1, fps / 1);
    c.onfinish = function(a) {
        d = new Sprite(bitmaps.popup_skeleton_cool, 40, 88, 1);
        d.x = getStageWidthCenter();
        d.y = getStageHeightCenter() + 10;
        d.opacity = 0;
        d.scaleX = 1.2;
        d.scaleY = 1.2;
        stage.addChild(d);
        d.moveTo(getStageWidthCenter() - 80, d.y, fps / 4, Easing.linear.easeIn);
        d.fadeTo(1, fps / 2, Easing.linear.easeIn);
        d = new Sprite(bitmaps.btn_next_level_mini, 26, 26, 3);
        d.x = getStageWidthCenter() + 90;
        d.y = getStageHeightCenter() - 30;
        d.scaleX = 0;
        d.scaleY = 0;
        d.onclick = function() {
            curLevel++;
            gameState = STATE_GAME;
            curLevel == levelsScores.length && (gameState = STATE_GAME_OVER);
            showScreen(createScene);
            return ! 1
        };
        stage.addChild(d);
        d.gotoAndStop(2);
        d.scaleTo(1, fps / 2, Easing.back.easeOut);
        d = new Sprite(bitmaps.btn_replay_mini, 26, 26, 3);
        d.x = getStageWidthCenter() + 90;
        d.y = getStageHeightCenter() + 5;
        d.scaleX = 0;
        d.scaleY = 0;
        d.onclick = function() {
            gameState = STATE_GAME;
            showScreen(createScene);
            return ! 1
        };
        stage.addChild(d);
        d.gotoAndStop(2);
        d.scaleTo(1, fps / 2, Easing.back.easeOut);
        d = new Sprite(bitmaps.btn_menu_mini, 26, 26, 3);
        d.x = getStageWidthCenter() + 90;
        d.y = getStageHeightCenter() + 40;
        d.scaleX = 0;
        d.scaleY = 0;
        d.onclick = function() {
            gameState = STATE_SELECT_LEVEL;
            showScreen(createScene);
            playSound("menu_music", !0);
            return ! 1
        };
        stage.addChild(d);
        d.gotoAndStop(2);
        d.scaleTo(1, fps / 2, Easing.back.easeOut);
        d = new Sprite(bitmaps.btn_more_games, 84, 25, 3);
        d.x = getStageWidthCenter();
        d.y = getStageHeightCenter() + 50;
        d.opacity = 0;
        d.onclick = function() {
            showMoreGames();
            return ! 1
        };
        ExternalAPI.exec("getMoreGamesButtonDisable") || stage.addChild(d);
        d.gotoAndStop(2);
        d.moveTo(d.x, getStageHeightCenter() + 100, fps / 2, Easing.back.easeOut);
        d.fadeTo(1, fps / 2, Easing.linear.easeIn);
        ExternalAPI.exec("showAds");
        ExternalAPI.openWidget(160, 50, "I scored " + getTotalLevelsScores() + " in Haunted Halloween game! Try to beat me!")
    };
    c.play();
    a.play()
}
function showYouLose() {
    ExternalAPI.exec("showAds");
    console.log("============showYouLose()");
    lose_flag = !1;
    playSound("level_failed");
    var a = new Sprite(null, 480, 320, 1);
    a.x = getStageWidthCenter();
    a.y = getStageHeightCenter();
    a.fillColor = "#001a17";
    a.opacity = .7;
    a.static = !1;
    a.onclick = function() {
        return ! 1
    };
    stage.addChild(a);
    a = new SpritesGroup(stage);
    a.x = getStageWidthCenter();
    a.y = getStageHeightCenter() + 200;
    a.opacity = 0;
    var c = new Sprite(bitmaps.popup, 140, 154, 1);
    c.gx = 0;
    c.gy = 0;
    c.static = !1;
    a.addChild(c, !0);
    var d = new Sprite(bitmaps.txt_level_failed, 87, 50, 1);
    d.gx = -2;
    d.gy = 5;
    d.static = !1;
    a.addChild(d, !0);
    c = stage.createTween(a, "y", a.y, getStageHeightCenter(), fps / 1, Easing.back.easeOut);
    a = stage.createTween(a, "opacity", .1, 1, fps / 1);
    c.onfinish = function(a) {
        d = new Sprite(bitmaps.popup_skeleton_bad, 70, 72, 1);
        d.x = getStageWidthCenter();
        d.y = getStageHeightCenter() + 10;
        d.opacity = 0;
        d.scaleX = 1.2;
        d.scaleY = 1.2;
        stage.addChild(d);
        d.moveTo(getStageWidthCenter() - 80, d.y, fps / 4, Easing.linear.easeIn);
        d.fadeTo(1, fps / 2, Easing.linear.easeIn);
        d = new Sprite(bitmaps.btn_replay_mini, 26, 26, 3);
        d.x = getStageWidthCenter() + 90;
        d.y = getStageHeightCenter() - 20;
        d.scaleX = 0;
        d.scaleY = 0;
        d.onclick = function() {
            gameState = STATE_GAME;
            showScreen(createScene);
            return ! 1
        };
        stage.addChild(d);
        d.gotoAndStop(2);
        d.scaleTo(1, fps / 2, Easing.back.easeOut);
        d = new Sprite(bitmaps.btn_menu_mini, 26, 26, 3);
        d.x = getStageWidthCenter() + 90;
        d.y = getStageHeightCenter() + 25;
        d.scaleX = 0;
        d.scaleY = 0;
        d.onclick = function() {
            gameState = STATE_SELECT_LEVEL;
            showScreen(createScene);
            playSound("menu_music", !0);
            return ! 1
        };
        stage.addChild(d);
        d.gotoAndStop(2);
        d.scaleTo(1, fps / 2, Easing.back.easeOut);
        d = new Sprite(bitmaps.btn_more_games, 84, 25, 3);
        d.x = getStageWidthCenter();
        d.y = getStageHeightCenter() + 100;
        d.opacity = 0;
        d.onclick = function() {
            showMoreGames();
            return ! 1
        };
        ExternalAPI.exec("getMoreGamesButtonDisable") || stage.addChild(d);
        d.gotoAndStop(2);
        d.fadeTo(1, fps / 2, Easing.linear.easeIn)
    };
    c.play();
    a.play()
}
function showGameOver() {
    console.log("============showGameOver()");
    var a = new Sprite(null, 480, 360, 1);
    a.x = getStageWidthCenter();
    a.y = getStageHeightCenter();
    a.fillColor = "#001a17";
    a.opacity = 1;
    stage.addChild(a);
    a.setZIndex(100);
    stage.drawScene(stage.canvas);
    mc = new Sprite(bitmaps.game_complete, 480, 320, 1);
    mc.x = getStageWidthCenter();
    mc.y = getStageHeightCenter();
    mc.static = !0;
    stage.addChild(mc);
    mc.setZIndex(0);
    a.fadeTo(0, fps / 1, null,
    function(a) {
        stage.removeChild(a.target.obj)
    });
    showAdditionalButtons(58, 32, 58, 62)
}
function showHints() {
    if (!show_hint_flag) return ! 1;
    switch (curLevel) {
    case 0:
        var a = new Sprite(bitmaps["level_" + (curLevel + 1) + "_1"], 92, 51, 1);
        a.x = getStageWidthCenter() - 125;
        a.y = getStageHeightCenter() + 30;
        a.static = !1;
        stage.addChild(a);
        a = new Sprite(bitmaps["level_" + (curLevel + 1) + "_2"], 19, 50, 1);
        a.x = getStageWidthCenter() + 155;
        a.y = getStageHeightCenter() + 50;
        a.static = !1;
        stage.addChild(a);
        break;
    case 1:
        a = new Sprite(bitmaps["level_" + (curLevel + 1)], 47, 29, 1);
        a.x = getStageWidthCenter() - 55;
        a.y = getStageHeightCenter() - 10;
        a.static = !1;
        stage.addChild(a);
        break;
    case 3:
        a = new Sprite(bitmaps["level_" + (curLevel + 1)], 96, 7, 1);
        a.x = getStageWidthCenter() - 70;
        a.y = getStageHeightCenter();
        a.static = !1;
        stage.addChild(a);
        break;
    case 4:
        a = new Sprite(bitmaps["level_" + (curLevel + 1) + "_1"], 82, 21, 1);
        a.x = getStageWidthCenter() + 100;
        a.y = getStageHeightCenter() - 90;
        a.static = !1;
        stage.addChild(a);
        a = new Sprite(bitmaps["level_" + (curLevel + 1) + "_2"], 63, 7, 1);
        a.x = getStageWidthCenter() - 2;
        a.y = getStageHeightCenter() + 70;
        a.static = !1;
        stage.addChild(a);
        break;
    case 5:
        a = new Sprite(bitmaps["level_" + (curLevel + 1)], 88, 54, 1),
        a.x = getStageWidthCenter() + 165,
        a.y = getStageHeightCenter() - 100,
        a.static = !1,
        stage.addChild(a)
    }
}
function prepareLevel(a) {
    stage && (mc = new Sprite(bitmaps.hourglass, 100, 150, 1), mc.x = 240, mc.y = 130, stage.addChild(mc));
    setTimeout(function() {
        startLevel(a)
    },
    1E3 / fps * 2)
}
function startLevel(a, c) {
    Game.reset();
    Game.init();
    createStage();
    var d = new Sprite(null, 480, 360, 1);
    d.x = getStageWidthCenter();
    d.y = getStageHeightCenter();
    d.fillColor = "#001a17";
    d.opacity = 1;
    stage.addChild(d);
    d.setZIndex(100);
    stage.drawScene(stage.canvas);
    var e = new Sprite(bitmaps[backgroundArray[getRandomInt(0, 7)]], 480, 320, 1);
    e.x = getStageWidthCenter();
    e.y = getStageHeightCenter();
    e.static = !0;
    stage.addChild(e);
    e = new Sprite(bitmaps.btn_help_level, 22, 22, 3);
    e.x = getStageWidthCenter() + 130;
    e.y = getStageHeightCenter() - 140;
    e.onclick = function(a) { (help_bomb_flag = !help_bomb_flag) ? a.target.gotoAndStop(1) : a.target.gotoAndStop(0);
        return ! 1
    };
    stage.addChild(e);
    e.gotoAndStop(0);
    e = new Sprite(bitmaps.btn_restart_level, 22, 22, 2);
    e.x = getStageWidthCenter() + 160;
    e.y = getStageHeightCenter() - 140;
    e.onclick = function() {
        Game.reset();
        prepareLevel(curLevel);
        return ! 1
    };
    stage.addChild(e);
    e.gotoAndStop(0);
    e = new Sprite(bitmaps.btn_sound, 22, 22, 3);
    e.x = getStageWidthCenter() + 190;
    e.y = getStageHeightCenter() - 140;
    e.onclick = function(a) {
        toggleSound(a);
        return ! 1
    };
    stage.addChild(e);
    e.gotoAndStop(0);
    isSoundOn && e.gotoAndStop(1);
    e = new Sprite(bitmaps.btn_menu_level, 22, 22, 2);
    e.x = getStageWidthCenter() + 220;
    e.y = getStageHeightCenter() - 140;
    e.onclick = function() {
        gameState = STATE_SELECT_LEVEL;
        createScene();
        playSound("menu_music", !0);
        return ! 1
    };
    stage.addChild(e);
    e.gotoAndStop(0);
    levelStarSprite = new Sprite(bitmaps.stars_small, 13, 12, 2);
    levelStarSprite.x = getStageWidthCenter() - 220;
    levelStarSprite.y = getStageHeightCenter() - 140;
    stage.addChild(levelStarSprite);
    levelStarSprite.gotoAndStop(1);
    gameTimerText = new SimpleText(bitmaps.nums, 10, 10);
    gameTimerText.x = getStageWidthCenter() - 190;
    gameTimerText.y = getStageHeightCenter() - 140;
    gameTimerText.charMap = charMap;
    gameTimerText.charWidth = charWidth;
    gameTimerText.align = gameTimerText.ALIGN_CENTER;
    gameTimerText.charSpacing = -1;
    gameTimerText.write(toFormattedTime(countIteration));
    mc = new Sprite(bitmaps.txt_level, 81, 29, 1);
    mc.x = getStageWidthCenter();
    mc.y = getStageHeightCenter() - 140;
    mc.scaleX = .6;
    mc.scaleY = .6;
    stage.addChild(mc);
    curLevelText = new SimpleText(bitmaps.nums, 10, 10);
    curLevelText.x = getStageWidthCenter() + 40;
    curLevelText.y = getStageHeightCenter() - 140;
    curLevelText.scale = 1.5;
    curLevelText.charMap = charMap;
    curLevelText.charWidth = charWidth;
    curLevelText.align = curLevelText.ALIGN_LEFT;
    curLevelText.charSpacing = -1;
    curLevelText.write(curLevel + 1);
    var f;
    c && (a = 0, levels = [c], gameState = STATE_GAME);
    f = levels[a].objects;
    e = levels[a].joints;
    if (levels[a]) {
        curLevel = a;
        for (var g, l, h = 0; h < f.length; h++) g = f[h],
        l = Game.findObject(g.type),
        Game.createObject(g, l);
        if (e) for (h = 0; h < e.length; h++) {
            f = e[h];
            g = Game.getBodyByPoint(f.point1);
            l = Game.getBodyByPoint(f.point2 ? f.point2: f.point1, g);
            if (0 == f.type) {
                var q = {
                    body1: g,
                    body2: l,
                    point: f.point1
                };
                "undefined" != typeof f.custom && (q.enableMotor = !0, q.motorSpeed = f.custom, q.maxMotorTorque = 2 * Math.PI);
                box2d.createRevoluteJoint(Game.world, q)
            }
            1 == f.type && box2d.createDistanceJoint(Game.world, {
                body1: g,
                body2: l,
                point1: f.point1,
                point2: f.point2
            })
        }
        start_level_flag = !0;
        countIteration = Game.starTime;
        console.log("countIteration = ", countIteration);
        showHints();
        Game.drawFirefly();
        d.fadeTo(0, fps / 1, null,
        function(a) {
            stage.removeChild(a.target.obj)
        });
        buildBackground();
        stage.start()
    }
}
function setGameTimer() {
    gameState != STATE_GAME || gameTimer || (gameTimer = setInterval(function() {
        gameState == STATE_GAME && (0 >= countIteration ? (clearInterval(gameTimer), no_level_star_flag = !0, levelStarSprite.gotoAndStop(0)) : pause_flag || (countIteration--, gameTimerText.write(toFormattedTime(countIteration))))
    },
    1E3))
}
function toggleSound(a) {
    isSoundOn ? (playSound("button_click"), isSoundOn = !1, a.target.gotoAndStop(2), mixer.stop(0), setTimeout(function() {
        a.target.gotoAndStop(0)
    },
    buttonDelay)) : (isSoundOn = !0, playSound("button_click"), a.target.gotoAndStop(2), gameState == STATE_MENU || gameState == STATE_SELECT_LEVEL ? playSound("menu_music", !0) : playSound("game_music", !0), setTimeout(function() {
        a.target.gotoAndStop(1)
    },
    buttonDelay));
    return ! 1
}
function playSound(a, c) {
    isSoundOn && (!c && AudioMixer.isWebAudioSupport() ? mixer.play(a, !1, !0, 1) : !c || mixer.channels[0].busy && a == prevMusicName || (prevMusicName = a, mixer.play(a, !0, !1, 0)))
}
function getLevelsScores() {
    levelsScores = [];
    var a = Utils.getCookie("hh_levels_scores") + "";
    "null" != a && (levelsScores = a.split(","));
    for (a = 0; a < levels.length; a++) levelsScores[a] || (levelsScores[a] = -1),
    levelsScores[a] *= 1;
    levelsStars = [];
    a = Utils.getCookie("hh_levels_stars") + "";
    "null" != a && (levelsStars = a.split(","));
    for (a = 0; a < levels.length; a++) levelsStars[a] || (levelsStars[a] = 0),
    levelsStars[a] *= 1
}
function saveLevelsScores() {
    Utils.setCookie("hh_levels_scores", levelsScores.join(","));
    Utils.setCookie("hh_levels_stars", levelsStars.join(","))
}
function getTotalLevelsScores() {
    for (var a = 0,
    c = 0; c < levels.length; c++) 0 <= levelsScores[c] && (a += levelsScores[c]);
    return a
}
function buildBackground() {
    stage && (Game.world && box2d.syncStage(Game.world), stage.drawScene(document.getElementById("screen_background"), !0))
}
function preTick() {
    if (gameState == STATE_MENU) for (var a = 0; a < batEyeSprites.length; a++).99 < Math.random() && !bat_eye_flag[a] && (bat_eye_flag[a] = !0, batEyeSprites[a].heightTo(4, fps / 2, null,
    function(a) {
        a.target.obj.heightTo(0, fps / 2, null,
        function(a) {
            bat_eye_flag[a.target.obj.ID] = !1
        })
    }));
    gameState == STATE_GAME && start_level_flag && (setGameTimer(), Game.world.Step(1 / fps, 10, 10), box2d.syncStage(Game.world), Game.checkSkullContact(), Game.checkFakeHeadContact(), gameTimerText && gameTimerText.write(toFormattedTime(countIteration)));
    win_flag && (start_level_flag = !1, levelsScores[curLevel] = 1, no_level_star_flag || (levelsStars[curLevel] = 1), curLevel + 1 < levels.length && (levelsScores[curLevel + 1] = 1), saveLevelsScores(), gameState = STATE_YOU_WIN, showYouWin());
    lose_flag && (start_level_flag = !1, gameState = STATE_YOU_LOSE, showYouLose())
}
function postTick() {
    Game.world && showDebugDraw && Game.world.DrawDebugData();
    if (gameState == STATE_GAME && help_bomb_flag) for (var a = 0; a < Game.bomb.length; a++) Game.bomb[a] && stage.drawCircle(Game.bomb[a].x, Game.bomb[a].y, Game.bomb[a].radius, 1, "#FFFFFF", .7);
    Game.debugVector && stage.drawLine(Game.debugVector.x1, Game.debugVector.y1, Game.debugVector.x2, Game.debugVector.y2, 1, "#F00")
}
function showMoreGames() {
    window.open(ExternalAPI.getMoreGamesURL(), "_blank")
}
var Game = {
    world: null,
    skull: null,
    fakehead: null,
    skeleton: null,
    bomb: [],
    firefly: [],
    starTime: 30,
    debugVector: null,
    init: function() {
        Game.world = box2d.createWorld();
        box2d.setDebugDraw(Game.world, document.getElementById("screen"))
    },
    getBodyByPoint: function(a, c) {
        var d = Game.world.GetGroundBody();
        if (a && (stack = stage.getObjectsStackByCoord(a.x, a.y, !1), 0 < stack.length)) for (var e = stack.length - 1; 0 <= e; e--) stack[e].box2dBody && stack[e].box2dBody != c && (d = stack[e].box2dBody);
        return d
    },
    createObject: function(a, c) {
        var d, e, f, g, l, h, q, z, v, t = 1;
        c.type == RESIZEABLE && (console.log("ob.type = ", c.type), console.log("lo.custom = ", a.custom), console.log("ob.toScale = ", c.toScale), console.log("ob.SCALE_FLAG = ", c.SCALE_FLAG), t = a.custom ? a.custom: c.toScale ? c.toScale: 1);
        mc = new Sprite(bitmaps[c.name], c.width * t, c.height * t, c.frames);
        mc.x = a.x;
        mc.y = a.y;
        mc.name = c.name;
        mc.onclick = Game.clickOnObject;
        mc.rotation = a.rotation;
        c.type == FIREFLY && (mc.opacity = 0);
        c.type != WATCH && stage.addChild(mc);
        mc.box2dBody = null;
        c.bodyType != NONE && c.type != SKELETON && c.type != BACKGROUND && c.type != FIREFLY && c.type != WATCH && (l = "undefined" != typeof a.fixed ? a.fixed: c.fixed, e = "undefined" != typeof a.density ? a.density: c.density, f = "undefined" != typeof a.restitution ? a.restitution: c.restitution, g = "undefined" != typeof a.friction ? a.friction: c.friction, 0 >= e && (l = !0), z = (c.bodyWidth ? c.bodyWidth: c.width) * t, v = (c.bodyHeight ? c.bodyHeight: c.height) * t, h = a.x, q = a.y, c.bodyPosCorrect && (h += c.bodyPosCorrect.x, q += c.bodyPosCorrect.y, mc.syncX = c.bodyPosCorrect.x, mc.syncY = c.bodyPosCorrect.y, mc.onbox2dsync = spritesSync), c.bodyType == BOX && (d = box2d.createBox(Game.world, {
            x: h,
            y: q,
            width: z,
            height: v,
            rotation: a.rotation,
            bodyType: l ? box2d.bodyType.static: box2d.bodyType.dynamic,
            density: e,
            restitution: f,
            friction: g
        })), c.bodyType == CIRCLE && (d = box2d.createCircle(Game.world, {
            x: h,
            y: q,
            radius: z / 2,
            rotation: a.rotation,
            bodyType: l ? box2d.bodyType.static: box2d.bodyType.dynamic,
            density: e,
            restitution: f,
            friction: g
        })), c.bodyType == POLY && (d = box2d.createPoly(Game.world, {
            x: h,
            y: q,
            points: c.points,
            rotation: a.rotation,
            bodyType: l ? box2d.bodyType.static: box2d.bodyType.dynamic,
            density: e,
            restitution: f,
            friction: g
        })), d.name = c.name, d.sprite = mc, mc.custom = d.custom = a.custom, mc.box2dBody = d);
        mc.obType = c.type;
        1 == GET.debug || !l && c.bodyType != NONE && c.type != BACKGROUND || (mc.static = !0);
        1 == a.custom && c.type != BOMB && c.type != RESIZEABLE && (mc.REMOVED = !0);
        c.orient && (mc.orient = c.orient);
        c.type == SKULL && (mc.SKULL = !0, Game.skull = mc);
        c.type == SKELETON && (mc.SKELETON = !0, Game.skeleton = mc);
        c.type == DEADHAND && (mc.DEADHAND = !0);
        c.type == FAKEHEAD && (mc.FAKEHEAD = !0, Game.fakehead = mc);
        c.type == SPIKES && (mc.SPIKES = !0);
        c.type == BOMB && (mc.BOMB = !0, mc.radius = a.custom, mc.force = a.force, mc.BOMB_ID = Game.bomb.length, Game.bomb.push(mc));
        c.type == FIREFLY && (mc.FIREFLY = !0, Game.firefly.push(mc));
        c.type == WATCH && (Game.starTime = a.custom || c.custom);
        c.type == RESIZEABLE && (mc.RESIZEABLE = !0, mc.toObject = c.toObject, mc.toScale = c.SKALE_FLAG ? -t: t);
        return mc
    },
    findObject: function(a) {
        for (var c = 0; c < objects.length; c++) if (objects[c].name == a) return objects[c];
        return ! 1
    },
    checkSkullContact: function() {
        if (!Game.skull || !Game.skeleton || contact_flag || win_flag || lose_flag) return ! 1;
        if (0 > Game.skull.x || Game.skull.x > getStageWidth() || Game.skull.y > getStageHeight()) return lose_flag = !0,
        !1;
        Game.getDistance(Game.skull, Game.skeleton) < Game.skull.width / 2 + Game.skeleton.width / 4 && (contact_flag = !0, Game.deleteObject(Game.skull), Game.skeleton.visible = !1, buildBackground(), mc = new TilesSprite(Game.skeleton.orient == LEFT ? bitmaps.skeleton_anim_left: bitmaps.skeleton_anim_right, 38, 45, 35, 18, 2), mc.x = Game.skeleton.x, mc.y = Game.skeleton.y, mc.animated = !0, mc.animDelay = 2, mc.onenterframe = function(a) {
            a.target.animated && a.target.currentFrameX == a.target.framesCount - 1 && (win_flag = !0, a.target.stop())
        },
        stage.addChild(mc), Game.deleteObject(Game.skeleton));
        for (var a = Game.skull.box2dBody.GetContactList(); a; a = a.next) if (a.contact.IsTouching()) {
            if (a.other.sprite.SPIKES) {
                Game.skull.visible = !1;
                var c = new Sprite(bitmaps.skull, 29, 28, 1);
                c.x = Game.skull.x;
                c.y = Game.skull.y;
                stage.addChild(c);
                c.moveTo(c.x, c.y - 50, fps / 2);
                c.fadeTo(0, fps / 2);
                Game.deleteObject(Game.skull);
                Game.skull = null;
                lose_flag = !0
            }
            a.other.sprite.DEADHAND && (contact_flag = !0, Game.deleteObject(Game.skull), a.other.sprite.visible = !1, buildBackground(), mc = new TilesSprite(a.other.sprite.orient == LEFT ? bitmaps.hand_realhand_left: bitmaps.hand_realhand_right, 44, 91, 18, 10, 2), mc.x = a.other.sprite.x, mc.y = a.other.sprite.y, mc.rotation = a.other.sprite.rotation, mc.animDelay = 2, mc.onenterframe = function(a) {
                a.target.animated && a.target.currentFrameX == a.target.framesCount - 1 && (contact_flag = !1, lose_flag = !0, a.target.stop(), a.target.visible = !1, a.target.destroy = !0)
            },
            stage.addChild(mc), Game.deleteObject(a.other.sprite))
        }
    },
    checkFakeHeadContact: function() {
        if (!Game.fakehead || contact_flag || win_flag || lose_flag) return ! 1;
        for (var a = Game.fakehead.box2dBody.GetContactList(); a; a = a.next) a.contact.IsTouching() && a.other.sprite.DEADHAND && (contact_flag = !0, a.other.sprite.visible = !1, Game.deleteObject(Game.fakehead), buildBackground(), mc = a.other.sprite.orient == LEFT ? new TilesSprite(bitmaps.hand_fakehead_left, 44, 91, 18, 10, 2) : new TilesSprite(bitmaps.hand_fakehead_right, 47, 91, 18, 10, 2), mc.x = a.other.sprite.x, mc.y = a.other.sprite.y, mc.rotation = a.other.sprite.rotation, mc.animDelay = 2, mc.onenterframe = function(a) {
            a.target.animated && a.target.currentFrameX == a.target.framesCount - 1 && (contact_flag = !1, a.target.stop(), a.target.visible = !1, a.target.destroy = !0)
        },
        stage.addChild(mc), Game.deleteObject(a.other.sprite))
    },
    resizeableElement: function(a) {
        var c = {
            x: a.box2dBody.GetPosition().x,
            y: a.box2dBody.GetPosition().y
        },
        d = {
            x: a.box2dBody.GetLinearVelocity().x,
            y: a.box2dBody.GetLinearVelocity().y
        },
        e = a.box2dBody.GetAngularVelocity(),
        f = Game.findObject(a.toObject);
        f.toScale = a.toScale;
        f.SCALE_FLAG = !0;
        f = Game.createObject({
            x: c.x,
            y: c.y
        },
        f);
        Game.deleteObject(a);
        f.box2dBody.SetPosition(c);
        f.box2dBody.SetLinearVelocity(d);
        f.box2dBody.SetAngularVelocity(e)
    },
    deleteObject: function(a) {
        a.box2dBody && Game.world.DestroyBody(a.box2dBody);
        stage.removeChild(a)
    },
    clickOnObject: function(a) {
        if (!a.target.REMOVED && !a.target.BOMB && !a.target.RESIZEABLE) return ! 1;
        if (a.target.REMOVED) {
            var c = a.target;
            Game.world.DestroyBody(c.box2dBody);
            c.static = !1;
            c.setZIndex(0);
            c.moveTo(a.target.x, a.target.y + 50, fps / 2, null,
            function() {
                c.visible = !1;
                c.destroy = !0
            });
            c.rotateTo(Math.PI / 4, fps / 2);
            c.fadeTo(0, fps / 2)
        }
        a.target.BOMB && Game.explode(a.target, 10);
        a.target.RESIZEABLE && Game.resizeableElement(a.target);
        buildBackground();
        return ! 1
    },
    getDistance: function(a, c) {
        return Math.sqrt((c.x - a.x) * (c.x - a.x) + (c.y - a.y) * (c.y - a.y))
    },
    explode: function(a, c) {
        var d = [],
        e = box2d.createCircle(Game.world, {
            x: a.x,
            y: a.y,
            radius: a.custom || 50,
            isSensor: !0,
            bodyType: box2d.bodyType.static
        });
        Game.world.Step(1 / fps, 10, 10);
        for (var f = -1 != navigator.userAgent.toLowerCase().indexOf("mac"), g = -1 != navigator.userAgent.toLowerCase().indexOf("crios"), l = e.GetContactList(); l; l = l.next) if ((l.contact.IsTouching() || f && g) && l.other && !l.other.sprite.SPIKES && 0 != l.other.GetMass()) {
            var h = new Box2D.Collision.b2WorldManifold;
            l.contact.GetWorldManifold(h);
            l.other.wm = h.m_points[0];
            d.push(l.other.sprite)
        }
        Game.world.DestroyBody(e);
        e = new TilesSprite(bitmaps.white_explosion, 30, 30, 11, 11, 1);
        e.setPosition(a.x, a.y);
        e.animDelay = 1;
        e.onenterframe = function(a) {
            a.target.currentFrameX >= a.target.framesCount - 1 && (a.target.destroy = !0, a.target.stop())
        };
        stage.addChild(e);
        if (0 != d.length) {
            e = a.force ? a.force: c || 5;
            for (f = 0; f < d.length; f++) g = d[f].box2dBody,
            h = Math.atan2(g.GetPosition().y - a.box2dBody.GetPosition().y, g.GetPosition().x - a.box2dBody.GetPosition().x),
            g.SetAwake(!1),
            l = Math.cos(h) * e,
            h = Math.sin(h) * e,
            l = new b2Vec2(l, h),
            h = g.GetPosition(),
            g.SetAwake(!0),
            g.ApplyImpulse(l, h);
            Game.deleteObject(a);
            delete Game.bomb[a.BOMB_ID];
            playSound(explodeSoundArray[getRandomInt(0, 1)])
        }
    },
    drawFirefly: function() {
        for (var a = [], c = [], d = "cubic exponential linear quadratic quartic quintic sine".split(" "), e = 0; e < Game.firefly.length; e++) {
            a = getRandomInt(4, 6);
            console.log("count_firefly = ", a);
            c[e] = [];
            for (var f = 0; f < a; f++) {
                var g = getRandom(.4, 1),
                l = new Sprite(bitmaps.firefly, 4, 4, 1);
                l.x = getRandomInt(Game.firefly[e].x - Game.firefly[e].width / 2, Game.firefly[e].x + Game.firefly[e].width / 2);
                l.y = getRandomInt(Game.firefly[e].y - Game.firefly[e].height / 2, Game.firefly[e].y + Game.firefly[e].height / 2);
                l.scaleX = g;
                l.scaleY = g;
                l.GROUP_ID = e;
                stage.addChild(l);
                c[e].push(l)
            }
        }
        for (var h = function(a) {
            q(a.target.obj)
        },
        q = function(a) {
            var c = getRandomInt(Game.firefly[a.GROUP_ID].x - Game.firefly[a.GROUP_ID].width / 2, Game.firefly[a.GROUP_ID].x + Game.firefly[a.GROUP_ID].width / 2),
            e = getRandomInt(Game.firefly[a.GROUP_ID].y - Game.firefly[a.GROUP_ID].height / 2, Game.firefly[a.GROUP_ID].y + Game.firefly[a.GROUP_ID].height / 2),
            f = d[getRandomInt(0, d.length - 1)],
            g = fps * getRandomInt(1, 4);
            a.addTween("x", c, g, Easing[f].easeInOut).play();
            f = d[getRandomInt(0, d.length - 1)];
            a.addTween("y", e, g, Easing[f].easeInOut, h).play()
        },
        z = function(a) {
            v(a.target.obj)
        },
        v = function(a) {
            var c = fps * getRandom(.2, 2),
            e = 0 < a.opacity ? 0 : 1,
            f = d[getRandomInt(0, d.length - 1)];
            a.addTween("opacity", e, c, Easing[f].easeInOut, z).play()
        },
        e = 0; e < c.length; e++) for (f = 0; f < c[e].length; f++) q(c[e][f]),
        v(c[e][f])
    },
    reset: function() {
        console.log("============================reset()");
        Game.bomb = [];
        Game.firefly = [];
        Game.skeleton = null;
        Game.fakehead = null;
        Game.skull = null;
        Game.starTime = 30;
        help_bomb_flag = no_level_star_flag = lose_flag = win_flag = contact_flag = animation_flag = time_is_up_flag = pause_flag = !1;
        clearInterval(gameTimer);
        gameTimer = null
    }
};