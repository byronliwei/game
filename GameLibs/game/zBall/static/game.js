(function(e) {
    "use strict";
    function t(e, t) {
        console.log("[CloudAPI " + o + "] " + e, t)
    }
    function n() {
        return i["ad-rotation"] ? l["ad-count"] == i["ad-rotation"] - 1 ? (t("The ad-count is equal to (ad-rotation - 1)"), l["ad-count"] = 0, !0) : (l["ad-count"] = l["ad-count"] + 1, !1) : (t("No ad-rotation config!"), !1)
    }
    function a(t, n) {
        switch (t) {
        case "GAME_CONFIG":
            var n = JSON.parse(n);
            i["ad-rotation"] = n["ad-rotation"],
            i["ad-play"] = n["ad-play"],
            i.distribution = n.distribution,
            i["links-active"] = n["links-active"],
            e.mpConfig = {
                game: i.distribution.substring(0, i.distribution.indexOf("-en-s")),
                partner: "cloudgames"
            };
            // var a = document.createElement("script");
            // a.src = "static/main.js",
            // document.body.appendChild(a);
            break;
        case "GAME_UNMUTE":
            f.unmute()
        }
    }
    function r(t) {
        e.parent && e.parent.postMessage("cloud://" + t, "*")
    }
    var o = "1.2.6",
    i = {},
    s = {},
    l = {
        "ad-count": 0
    },
    u = "//cloudgames.com/api",
    c = e.addEventListener ? "addEventListener": "attachEvent",
    g = e[c],
    d = "attachEvent" == c ? "onmessage": "message";
    g(d,
    function(e) {
        var t = e.message ? "message": "data",
        n = e[t];
        if (n.indexOf("cloud://") > -1) {
            var n = n.replace("cloud://", "").split("//");
            a(n[0], n[1])
        }
    },
    !1);
    var p = {
        http: function(e, t, n, a) {
            var r = new XMLHttpRequest;
            r.onreadystatechange = function() {
                4 == r.readyState && (200 == r.status ? a(r.responseText) : a())
            },
            r.open(e, t, !0),
            r.setRequestHeader("Content-Type", "application/json"),
            r.send(n)
        }
    },
    f = {
        mute: function() {
            return "function" == typeof cr_setSuspended ? (cr_setSuspended(!0), !0) : !1
        },
        unmute: function() {
            return "function" == typeof cr_setSuspended ? (cr_setSuspended(!1), !0) : !1
        },
        init: function(e) {
            t("Initializing :)", e),
            s = e,
            r("GAME_INIT")
        },
        showAd: function() {
            t("Function showAd called.")
        },
        hideAd: function() {
            t("Function hideAd called.")
        },
        gameOver: function() {
            t("Function gameOver called."),
            n() && f.mute() && r("AD_SHOW");
            mobConfig.stop();
        },
        scores: {
            submit: function(e, t) {
                p.http("POST", u + "/games/" + s.id + "/scores", JSON.stringify({
                    name: e,
                    score: t
                }),
                function(e) {
                    console.log("POST result", e)
                })
            },
            fetch: function(e) {
                p.http("GET", u + "/games/" + s.id + "/scores", null,
                function(t) {
                    l.scores = t,
                    e && e(JSON.parse(t))
                })
            },
            list: function() {
                return l.scores ? l.scores: !1
            }
        },
        play: function() {
            t("Function play called.", i),
            i["ad-play"] && f.mute() && r("AD_SHOW")
        },
        links: {
            active: function() {
                return i["links-active"]
            }
        }
    };
    e.CloudAPI = f
})(window);