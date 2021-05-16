var nas = true
var PreRollAd = {
    adsManager: null,
    adsLoader: null,
    adDisplayContainer: null,
    videoContent: null,
    intervalTimer: null,
    adContainer: null,
    timeoutTimer: null,
    timeCounter: 15,
    adObject: null,
    startTime: new Date,
    showCk: false,
    frameCk: false,
    containerId: "play-iframe",
    adId: ['183342962', '180733'],
    // adId: ["1807333429605702","7790122186623761"],
    adChannel:[],
    // adChannel: ["9281219801", "3680327195", "1812131320", "1901052058", "1904180928", "1905080826", "1905090826"],
    adChannel_v: [],
    // adChannel_v: ["8044610431", "1812181208"],
    adType: ["video_text_image", "video_image", "text_image", "video", "image"],
    adAto: false,
    adTagUrlOg: 'https://googleads.g.doubleclick.net/pagead/ads?ad_type=video_text_image&client=ca-games-pub-2104961258307381&description_url=http%3A%2F%2Fwww.gamev6.com&videoad_start_delay=0&hl=en&max_ad_duration=30000',
    // adTagUrlOg: "https://googleads.g.doubleclick.net/pagead/ads?ad_type=[ad_type]&client=ca-games-pub-[ad_id]&description_url=" + encodeURIComponent(location.href) + "&[chaname]=[channel]&videoad_start_delay=0&max_ad_duration=30000",
    adTagUrl: null,
    setChannel: function (d) {
        var c, e, b = PreRollAd.adId[0],
            a = "channel";
        if ((Math.random() < 0.0001 && nas) || d) {
            PreRollAd.adAto = true;
            c = PreRollAd.adType[4];
            e = PreRollAd.adChannel[0];
            setTimeout(function () {
                PreRollAd.showAd()
            }, 500)
        } else {
            gamePlayContent.show();
            if (Math.random() < 0.999) {
                c = PreRollAd.adType[1];
                e = PreRollAd.adChannel[2];
                b = PreRollAd.adId[1];
                var f = Math.random();
                if (Math.random() < 0.001) {
                    c = PreRollAd.adType[3];
                    e = PreRollAd.adChannel[3];
                    if (f < 0.99 && !nas) {
                        e = PreRollAd.adChannel[6], PreRollAd.Bar = true
                    }
                } else {
                    if (f < 0.99 && !nas) {
                        e = PreRollAd.adChannel[5], PreRollAd.Bar = true
                    }
                }
                a = "slotname"
            } else {
                c = PreRollAd.adType[4];
                e = PreRollAd.adChannel[1]
            }
        }
        if (location.href.indexOf("s1.gamev6") > -1) {
            PreRollAd.adTagUrlOg = 'https://googleads.g.doubleclick.net/pagead/ads?ad_type=video_text_image&client=ca-games-pub-2104961258307381&description_url=http%3A%2F%2Fs1.gamev6.com&videoad_start_delay=0&hl=en&max_ad_duration=30000'
        }
        if (location.href.indexOf("_k") > -1) {
            c = "text";
            PreRollAd.adTagUrlOg = PreRollAd.adTagUrlOg.replace("3000", "3")
        }
        PreRollAd.adTagUrl = PreRollAd.adTagUrlOg.replace(/\[chaname\]/ig, a).replace(/\[channel\]/ig, e).replace(/\[ad_type\]/ig, c).replace(/\[ad_id\]/ig, b)
    },
    init: function () {
        PreRollAd.showCk = PreRollAd.frameCk = false;
        PreRollAd.setChannel();
        if ($('.header_games').data('isgdad') != 1) {
            $(".gamePlay-button").live("click", function () {            
                PreRollAd.showAd()                        
            })
        } else {
            $('#play-iframe').hide()
        }
    },
    inplayInit: function () {
        var a = $(".detail-content");
        preloadingContent.show();
        preloadingContent.css("visibility", "hidden");
        window.aiptag = aiptag || {};
        aiptag.cmd = aiptag.cmd || [];
        aiptag.cmd.player = aiptag.cmd.player || [];
        aiptag.consented = true;
        aiptag.cmd.player.push(function () {
            adplayer = new aipPlayer({
                AD_WIDTH: a.width() * 1,
                AD_HEIGHT: a.height() * 1,
                AD_FULLSCREEN: false,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                    return document.getElementById(PreRollAd.containerId)
                },
                AIP_COMPLETE: function () {
                    console.log("Ad Completed");
                    PreRollAd.showGame()
                },
                AIP_REMOVE: function () {}
            })
        });
        $(".gamePlay-button").live("click", function () {
            PreRollAd.inplayShowAd()
        })
    },
    showAd: function (c, a, b) {
        if (c) {
            PreRollAd.adTagUrl = PreRollAd.adTagUrl.replace(/(channel|slotname)=\d+/ig, "$1=" + c)
        }
        PreRollAd.start();
        gamePlayContent.hide();
        if (typeof a == "function") {
            a()
        }
        if (typeof b == "function") {
            PreRollAd._adEndFunc = b
        }
    },
    inplayShowAd: function (b, a) {
        PreRollAd.adContainer = $("#" + PreRollAd.containerId);
        preloadingContent.css("visibility", "visible");
        aiptag.cmd.player.push(function () {
            adplayer.startPreRoll()
        });
        gamePlayContent.hide();
        if (typeof a == "function") {
            a()
        }
    },
    processBar: {
        init: function (c) {
            var g = '<div id="preloading-bar" style="height: 5px;background: #0073dd;position: relative;margin-bottom: 16px;z-index: 999;width: 100%;"><div style="background: #fbbb01;width: 0%;height: 100%;"></div><span style="position: absolute;left: 2px;top: 3px;color: #fff;font-size: 14px;font-weight:bold;">Advertisement: <font>0.20</font></span></div>';
            PreRollAd.adContainer.prepend(g).height("97%").css("background-color", "#000");
            if (typeof barInterval != "undefined") {
                clearInterval(barInterval)
            }
            var b = 0,
                a = 21,
                d = $("#preloading-bar>div");
            var f = d.get(0).animate;
            window.barInterval = setInterval(function () {
                if (b >= a) {
                    clearInterval(barInterval);
                    if (typeof c == "function") {
                        c()
                    }
                    return
                }
                var e = (100 / a) * (b + 1);
                var i = a - b - 1;
                i = i >= 10 ? i : "0" + i;
                if (!f) {
                    d.css("width", (e >= 100 ? 100 : e) + "%")
                }
                $("#preloading-bar span font").text("00:" + i);
                b++
            }, 1000);
            if (f) {
                try {
                    d.get(0).animate([{
                        width: 0
                    }, {
                        width: "100%"
                    }], {
                        duration: (a - 1) * 1000,
                        fill: "forwards"
                    })
                } catch (h) {}
            }
            PreRollAd.correctPositions()
        },
        clear: function () {
            if (window.barInterval) {
                clearInterval(window.barInterval)
            }
            $("#preloading-bar").remove()
        }
    },
    start: function () {
        PreRollAd.videoContent = $("#videoElement").get(0);
        PreRollAd.adContainer = $("#" + PreRollAd.containerId);
        if (typeof (google) === "undefined") {
            PreRollAd.showGame();
            return
        }
        if (window.PreBox) {
            $("#game-col").addClass("game-pre")
        }
        PreRollAd.adContainer.show();
        PreRollAd.requestAds();
        $(window).bind("resize", PreRollAd.correctPositions)
    },
    setFrame: function (a) {
        if (PreRollAd.frameCk) {
            return
        }
        setTimeout(function () {
            if (typeof swfFnCall != "undefined") {
                swfFnCall()
            }
        }, a);
        PreRollAd.frameCk = true;
        console.log("setFrame")
    },
    showGame: function () {
        console.log('debug', 'IMA ad is skip...')
        PreRollAd.adContainer.add(preloader).html("").add(gamePlayContent).add(preCount).add(preloadingContent).hide();
        if (typeof PreRollAd._adEndFunc == "function") {
            PreRollAd._adEndFunc();
            PreRollAd._adEndFunc = null
        }
        if (PreRollAd.showCk) {
            return
        }
        console.log("showGame");
        PreRollAd.showCk = true;
        PreRollAd.setFrame(0);
        if (!nas) {
            recGame()
        }
        if (window.PreBox) {
            $("#game-col").removeClass("game-pre")
        }
        PreRollAd.processBar.clear()
    },
    correctPositions: function () {
        if (PreRollAd.adObject && PreRollAd.adsManager) {
            if (PreRollAd.adObject.isLinear()) {
                PreRollAd.adContainer.height(PreRollAd.adContainer.height());
                PreRollAd.adsManager.resize(PreRollAd.adContainer.width(), PreRollAd.adContainer.height(), google.ima.ViewMode.NORMAL)
            } else {}
        }
    },
    requestAds: function () {
        window.adContentType = "";
        PreRollAd.adDisplayContainer = new google.ima.AdDisplayContainer(PreRollAd.adContainer.get(0));
        PreRollAd.adDisplayContainer.initialize();
        PreRollAd.adsLoader = new google.ima.AdsLoader(PreRollAd.adDisplayContainer);
        PreRollAd.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, PreRollAd.onAdsManagerLoaded, !1);
        PreRollAd.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, PreRollAd.events.onAdError, !1);
        var a = new google.ima.AdsRequest;
        a.adTagUrl = PreRollAd.adTagUrl;
        if (window.ImAdTagUrl) {
            a.adTagUrl = ImAdTagUrl
        }
        a.forceNonLinearFullSlot = true;
        a.nonLinearAdSlotWidth = PreRollAd.adContainer.width();
        a.nonLinearAdSlotHeight = PreRollAd.adContainer.height();
        a.linearAdSlotWidth = PreRollAd.adContainer.width();
        a.linearAdSlotHeight = PreRollAd.adContainer.height();
        a.setAdWillAutoPlay(false);
        a.setAdWillPlayMuted(false);
        PreRollAd.adsLoader.requestAds(a)
    },
    onAdsManagerLoaded: function (d) {
        PreRollAd.adsManager = d.getAdsManager(PreRollAd.videoContent);
        var c = [google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CLICK, google.ima.AdEvent.Type.SKIPPED, google.ima.AdEvent.Type.USER_CLOSE, google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, google.ima.AdEvent.Type.COMPLETE, google.ima.AdEvent.Type.FIRST_QUARTILE, google.ima.AdEvent.Type.LOADED, google.ima.AdEvent.Type.MIDPOINT, google.ima.AdEvent.Type.PAUSED, google.ima.AdEvent.Type.STARTED, google.ima.AdEvent.Type.THIRD_QUARTILE];
        for (var a in c) {
            PreRollAd.adsManager.addEventListener(c[a], PreRollAd.events.onAdEvent)
        }
        PreRollAd.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, PreRollAd.events.onAdError);
        try {
            PreRollAd.adsManager.init(PreRollAd.adContainer.width(), PreRollAd.adContainer.height(), google.ima.ViewMode.NORMAL);
            PreRollAd.adsManager.start()
            console.log('debug', 'IMA ad is load...')
        } catch (b) {
            console.log("ad error", b);
            PreRollAd.showGame()
        }
    },
    events: {
        fireEvent: function (b, c) {
            if (document.createEventObject) {
                var a = document.createEventObject();
                return b.fireEvent("on" + c, a)
            } else {
                var a = document.createEvent("HTMLEvents");
                a.initEvent(c, true, true);
                return !b.dispatchEvent(a)
            }
        },
        onAdEvent: function (d) {
            var b = d.getAd();
            var a = d.getAdData() || {};
            if (a.contentType) {
                window.adContentType = a.contentType
            }
            var c = {
                w: a.width || a.vastMediaWidth || 0,
                h: a.height || a.vastMediaHeight || 0
            };
            window.contentSZ = c;
            switch (d.type) {
                case google.ima.AdEvent.Type.LOADED:
                    PreRollAd.adObject = b, PreRollAd.correctPositions(), b.isLinear() || PreRollAd.tickTimer();
                    try {
                        // ga("send", "event", "Preroll-SZ", c.w + "x" + c.h, window.adContentType)
                    } catch (d) {}
                    if ((c.w == "468" && c.h == "60") || (c.w == "200" && c.h == "200")) {
                        if (Math.random() < 0.68) {
                            try {
                                PreRollAd.events.fireEvent(PreRollAd.adsManager, google.ima.AdErrorEvent.Type.AD_ERROR);
                                // ga("send", "event", "Preroll-SZ-Show", c.w + "x" + c.h)
                            } catch (d) {}
                        }
                    }
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    if (PreRollAd.Bar) {
                        PreRollAd.processBar.init(function () {
                            PreRollAd.showGame()
                        })
                    }
                    PreRollAd.setFrame(3000);
                    break;
                case google.ima.AdEvent.Type.COMPLETE:
                case google.ima.AdEvent.Type.CLICK:
                case google.ima.AdEvent.Type.SKIPPED:
                case google.ima.AdEvent.Type.USER_CLOSE:
                    PreRollAd.showGame();
                    break;
                case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
                    if (window.adContentType.indexOf("image") > -1 || adContentType.indexOf("text") > -1) {
                        setTimeout(function () {
                            PreRollAd.showGame()
                        }, 5000)
                    }
                    break
            }
        },
        onAdError: function (a) {
            console.log(a);
            // if (!window.inplayCk && Math.random() > 0.95) {
            //     loadScript("//api.adinplay.com/libs/aiptag/pub/UFG/ufreegames.com/tag.min.js", function () {
            //         console.log("init");
            //         PreRollAd.inplayInit();
            //         setTimeout(function () {
            //             PreRollAd.inplayShowAd()
            //         }, 300)
            //     });
            //     window.inplayCk = true
            // } else {
            //     if (window.setAcc && !nas && Math.random() >= 0) {
            //         Accup.preroll();
            //         return
            //     }
            //     window.erCk = true;
            //     PreRollAd.showGame()
            // }
        }
    },
    tickTimer: function () {
        // PreRollAd.timeoutTimer = setTimeout(function () {
        //     PreRollAd.timeCounter--;
        //     if (PreRollAd.timeCounter == 0) {
        //         PreRollAd.showGame();
        //         clearTimeout(PreRollAd.timeoutTimer)
        //     } else {
        //         PreRollAd.tickTimer()
        //     }
        // }, 1000)
    },
    logPageClosedWhileAd: function () {}
};
var BlurFix = (function () {
    function c(e) {
        var d = navigator.userAgent;
        if (e == 11) {
            return (d.indexOf("Trident") !== -1 && d.indexOf("rv:11") !== -1)
        }
        return RegExp("msie" + (!isNaN(e) ? ("\\s" + e) : ""), "i").test(d)
    }
    var b = function (d) {
        return '<svg class="blur-ie"><defs><filter id="blur"><feGaussianBlur stdDeviation="45"/></filter></defs><image id="svgImg" xlink:href="' + d + '" width="100%" height="100%" filter="url(#blur)"></image></svg>'
    };
    var a = function () {
        var e = $("#gamePlay-content");
        var d = $(".gamePlay-bg").attr("src");
        if (c(10) || c(11) && d) {
            e.prepend(b(d))
        }
    };
    return {
        IE: c,
        fix: a
    }
}());
var gamePlayContent = $("#gamePlay-content"),
    preloadingContent = $("#game-preloading"),
    preloader = $("#game-preloader"),
    preCount = $("#pre-count"),
    preCountText = preCount.find("font"),
    preCountNum = $("#pre-count-num");
BlurFix.fix();
$(function () {
    if ($("#game-pre")) {
        window.PreBox = true
    }
    PreRollAd.init();
    // if (!nas && _Slots.base) {
    //     var a = Math.random() > 1 ? ["9748658479", 970] : ["2006234905", 728];
    //     $("body").append('<div id="stickyunit" style="position: fixed;bottom: 0px;left: 50%;margin-left: -' + (_Slots.base[2] / 2 + 18) + "px;width: " + _Slots.base[2] + 'px;height: 90px;z-index: 99999;border: solid 2px gray;">' + __Slots.render(_Slots.base, 1) + '<div id="sticky-close" style="position: absolute;top: -16px;right: -16px;width: 22px;height: 22px;font-size: 16px;text-align: center;color: #fff;line-height: 23px;cursor: pointer;font-weight: bold;border-radius: 15px;background: #333;">脳</div></div>');
    //     (adsbygoogle = window.adsbygoogle || []).push({});
    //     $("#sticky-close").live("click", function () {
    //         $("#stickyunit").remove()
    //     })
    // }
});
var vChannelObj = {
    // dunk: "9932868606",
    // fruit: "7530066541",
    // tap: "9065304212",
    // jump: "9626568808",
    // monster: "1903200688",
    // moto: "9826820656",
    // puzzle: "8206569826",
    // archery: "5698268206",
    // knife: "6820569826",
    // beach: "6654175300"
};

function bindParentMsgEvent() {
    try {
        var d = 0;
        var b = (location.href.match(/play\/(.*?)\.html/g) || [""])[0].replace("play/", "").split("-")[0];
        var a = vChannelObj[b] || "9065304212";
        MsgApi.parentOnMsgInit("gameframe", function (g) {
            var h = g.data,
                f = new Date().getTime();
            if (f - d >= 25 * 1000) {
                PreRollAd.showAd(a, function () {
                    MsgApi.sendToChild(h);
                    d = new Date().getTime()
                })
            } else {
                MsgApi.sendToChild(h)
            }
        })
    } catch (c) {}
}

function playVideo() {
    var b = (location.href.match(/play\/(.*?)\.html/g) || [""])[0].replace("play/", "").split("-")[0];
    var c = this,
        a = vChannelObj[c.msg] || vChannelObj[b] || "9065304212";
    PreRollAd.showAd(a, null, function () {
        c.response()
    })
}
var _recGamesArr = [
    // ["super", "minecraft-online.png", "Minecraft Online", "minecraft-online", 0, 1, 1, 1],
    // ["super", "bus-runner.jpg", "Bus & Subway surfers", "subway-surfers", 1, 0, 0, 1],
    // ["racing", "highway-traffic.jpg", "Highway Traffic", "highway-traffic", 1, 0, 1, 1],
    // ["super", "fun-race-3d.jpg", "Fun Race 3D", "fun-race-3d", 1, 0, 1, 1],
    // ["super", "kick-the-buddy.jpg", "kick the buddy", "kick-the-buddy", 1, 0, 1, 1],
    // ["super", "crazy_jump.png", "Helix Crazy Jump 3", "helix-crazy-jump-3", 0, 0, 1, 1],
    // ["super", "flip-master.jpg", "Flip Master", "flip-master", 0, 0, 1, 1],
    // ["super", "bowmasters.png", "Bowmasters", "bowmasters", 1, 0, 1, 1],
    // ["super", "jelly-shift.jpg", "Jelly Shift", "jelly-shift", 1, 0, 1, 1],
    // ["super", "aquapark.png", "Aquapark.io", "aquapark_io", 0, 1, 1, 1],
    // ["super", "paint-pop-3d.png", "Paint Pop 3d: 2", "paint-pop-3d-2", 0, 1, 1, 1],
    // ["super", "stack-ball-3d.jpg", "Stack Fall 3D", "stack-fall-3d", 0, 0, 1, 1],
    // ["super", "police-pursuit-2.jpg", "Police Pursuit 2", "police-pursuit-2", 0, 0, 1, 0],
    // ["super", "fruit-break.png", "Fruit Break", "fruit-break", 0, 1, 1, 1],
    // ["super", "heartlake-rush.jpg", "Lego Friends: Heartlake Rush", "lego-friends-heartlake-rush", 0, 1, 1, 0]
];

function _rd(d, a) {
    var b = a - d + 1;
    return Math.floor(Math.random() * b + d)
}

function recGame() {
    var c = false;
    var a = window.recGamesArr ? window.recGamesArr : _recGamesArr;
    var b = a[_rd(0, a.length - 1)];
    var d = getComHl();
    var e = '<div id="rec-play"><a title="' + b["2"] + '" href="' + d + "/" + (c ? "details" : "play") + "/" + b[3] + '.html?ref=recs" target="_blank"><span class="new_icon"></span><img src="//static' + _rd(1, 6) + ".ufreegames.io/covers/" + b[0] + "/" + b[1] + '" alt="' + b[2] + '"><p>Play Now</p></a><div id="rec-close">脳</div></div>';
    $("#ava-game_container").append(e);
    $("#rec-close").live("click", function () {
        $("#rec-play").remove()
    })
}
window.MsgApi = (function () {
    function g(i) {
        if (window.addEventListener) {
            window.addEventListener("message", i, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onmessage", i)
            }
        }
    }

    function h(i) {
        return (i.match(/https?:\/\/(.|\.)*?\//g) || ["/"])[0]
    }

    function b(j) {
        var i = this.frameId || "iframeId";
        var k = document.getElementById(i);
        k.contentWindow.postMessage(j, this.getHost(k.src))
    }

    function e(i) {
        window.top.postMessage(i, this.getHost(document.referrer))
    }
    var f = {};

    function c(j) {
        var i = document.getElementById(this.signalBoxId);
        var k = function () {
            i.value = j;
            i.click()
        };
        f[j] = k;
        if (!window.postMessage || window.top == window) {
            k()
        } else {
            this.sendToParent(j)
        }
    }

    function d(i) {
        this.signalBoxId = i;
        this.onMsgBind(function (j) {
            if (j.source != window.top) {
                return
            }
            if (typeof f[j.data] == "function") {
                f[j.data]()
            } else {}
        })
    }

    function a(i, k) {
        this.frameId = i;
        var j = document.getElementById(i);
        if (!j) {
            return
        }
        if (j.src.indexOf("mobs.") <= -1) {
            return
        }
        this.onMsgBind(function (l) {
            if (l.source != j.contentWindow) {
                return
            }
            if (typeof k == "function") {
                k(l)
            }
        })
    }
    return {
        onMsgBind: g,
        getHost: h,
        sendToChild: b,
        sendToParent: e,
        signalChildBind: c,
        childOnMsgInit: d,
        parentOnMsgInit: a
    }
}());


function loadScript(b, c) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.id = "spark";
    a.crossorigin = "anonymous";
    a.async = "async";
    if (a.readyState) {
        a.onreadystatechange = function () {
            if (a.readyState == "loaded" || a.readyState == "complete") {
                a.onreadystatechange = null;
                c()
            }
        }
    } else {
        a.onload = function () {
            c()
        }
    }
    a.src = b;
    document.body.appendChild(a)
}