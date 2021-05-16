'use strict';
var aa, ba, da, C, ea, fa, H, R, ha, ia, ja, ka, la, ma, S, na, pa, qa, ra, sa, ta, ua, va, wa, xa, U, za, Aa, Ba, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ?
function(k) {
    return k.__proto__
}: function(k) {
    return k.constructor.prototype
}); (function() {
    function k(w, a, m, s) {
        this.set(w, a, m, s)
    }
    function p() {
        this.ib = this.hb = this.kb = this.jb = this.ub = this.tb = this.Ha = this.Ga = 0
    }
    function d(w, a, m, s) {
        w < a ? m < s ? (g = w < m ? w: m, q = a > s ? a: s) : (g = w < s ? w: s, q = a > m ? a: m) : m < s ? (g = a < m ? a: m, q = w > s ? w: s) : (g = a < s ? a: s, q = w > m ? w: m)
    }
    function h() {
        this.items = this.Pa = null;
        this.pg = 0;
        n && (this.Pa = new Set);
        this.Ng = [];
        this.ve = !0
    }
    function r(w) {
        u[M++] = w
    }
    function a() {
        this.ea = this.yk = this.y = this.jl = 0
    }
    function b(w) {
        this.pb = [];
        this.Gi = this.Ii = this.Ji = this.Hi = 0;
        this.gi(w)
    }
    function f(w, a) {
        this.Ut = w;
        this.Tt = a;
        this.cells = {}
    }
    function e(w, a, m) {
        var c;
        return s.length ? (c = s.pop(), c.Jv = w, c.x = a, c.y = m, c) : new ba(w, a, m)
    }
    function c(w, a, m) {
        this.Jv = w;
        this.x = a;
        this.y = m;
        this.Oh = new da
    }
    C = function(w) {
        window.console && window.console.log && window.console.log(w)
    };
    ea = function(w) {
        window.console && window.console.error && window.console.error(w)
    };
    aa = function(w) {
        return w
    };
    fa = function(w) {
        return "undefined" === typeof w
    };
    H = function(w) {
        return "number" === typeof w
    };
    R = function(w) {
        return "string" === typeof w
    };
    ha = function(w) {
        return 0 < w && 0 === (w - 1 & w)
    };
    ia = function(w) {--w;
        for (var a = 1; 32 > a; a <<= 1) w |= w >> a;
        return w + 1
    };
    ja = function(w) {
        return 0 > w ? -w: w
    };
    ka = function(w, a) {
        return w > a ? w: a
    };
    la = function(w, a) {
        return w < a ? w: a
    };
    ma = Math.PI;
    S = function(w) {
        return 0 <= w ? w | 0 : (w | 0) - 1
    };
    na = function(w) {
        var a = w | 0;
        return a === w ? a: a + 1
    };
    pa = function(w, a, m, s, c, b, e, l) {
        var g, n, f, d;
        w < m ? (n = w, g = m) : (n = m, g = w);
        c < e ? (d = c, f = e) : (d = e, f = c);
        if (g < d || n > f) return ! 1;
        a < s ? (n = a, g = s) : (n = s, g = a);
        b < l ? (d = b, f = l) : (d = l, f = b);
        if (g < d || n > f) return ! 1;
        g = c - w + e - m;
        n = b - a + l - s;
        w = m - w;
        a = s - a;
        c = e - c;
        b = l - b;
        l = ja(a * c - b * w);
        return ja(c * n - b * g) > l ? !1 : ja(w * n - a * g) <= l
    };
    k.prototype.set = function(a, m, s, c) {
        this.left = a;
        this.top = m;
        this.right = s;
        this.bottom = c
    };
    k.prototype.Yt = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    k.prototype.width = function() {
        return this.right - this.left
    };
    k.prototype.height = function() {
        return this.bottom - this.top
    };
    k.prototype.offset = function(a, m) {
        this.left += a;
        this.top += m;
        this.right += a;
        this.bottom += m;
        return this
    };
    k.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    k.prototype.op = function(a) {
        return ! (a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    k.prototype.pp = function(a, m, s) {
        return ! (a.right + m < this.left || a.bottom + s < this.top || a.left + m > this.right || a.top + s > this.bottom)
    };
    k.prototype.Tb = function(a, m) {
        return a >= this.left && a <= this.right && m >= this.top && m <= this.bottom
    };
    k.prototype.yu = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    qa = k;
    p.prototype.Qf = function(a) {
        this.Ga = a.left;
        this.Ha = a.top;
        this.tb = a.right;
        this.ub = a.top;
        this.jb = a.right;
        this.kb = a.bottom;
        this.hb = a.left;
        this.ib = a.bottom
    };
    p.prototype.Lq = function(a, m) {
        if (0 === m) this.Qf(a);
        else {
            var s = Math.sin(m),
            c = Math.cos(m),
            b = a.left * s,
            e = a.top * s,
            l = a.right * s,
            s = a.bottom * s,
            g = a.left * c,
            n = a.top * c,
            f = a.right * c,
            c = a.bottom * c;
            this.Ga = g - e;
            this.Ha = n + b;
            this.tb = f - e;
            this.ub = n + l;
            this.jb = f - s;
            this.kb = c + l;
            this.hb = g - s;
            this.ib = c + b
        }
    };
    p.prototype.offset = function(a, m) {
        this.Ga += a;
        this.Ha += m;
        this.tb += a;
        this.ub += m;
        this.jb += a;
        this.kb += m;
        this.hb += a;
        this.ib += m;
        return this
    };
    var g = 0,
    q = 0;
    p.prototype.po = function(a) {
        d(this.Ga, this.tb, this.jb, this.hb);
        a.left = g;
        a.right = q;
        d(this.Ha, this.ub, this.kb, this.ib);
        a.top = g;
        a.bottom = q
    };
    p.prototype.Tb = function(a, m) {
        var s = this.tb - this.Ga,
        c = this.ub - this.Ha,
        b = this.jb - this.Ga,
        e = this.kb - this.Ha,
        l = a - this.Ga,
        g = m - this.Ha,
        n = s * s + c * c,
        f = s * b + c * e,
        c = s * l + c * g,
        d = b * b + e * e,
        h = b * l + e * g,
        t = 1 / (n * d - f * f),
        s = (d * c - f * h) * t,
        n = (n * h - f * c) * t;
        if (0 <= s && 0 < n && 1 > s + n) return ! 0;
        s = this.hb - this.Ga;
        c = this.ib - this.Ha;
        n = s * s + c * c;
        f = s * b + c * e;
        c = s * l + c * g;
        t = 1 / (n * d - f * f);
        s = (d * c - f * h) * t;
        n = (n * h - f * c) * t;
        return 0 <= s && 0 < n && 1 > s + n
    };
    p.prototype.Yc = function(a, m) {
        if (m) switch (a) {
        case 0:
            return this.Ga;
        case 1:
            return this.tb;
        case 2:
            return this.jb;
        case 3:
            return this.hb;
        case 4:
            return this.Ga;
        default:
            return this.Ga
        } else switch (a) {
        case 0:
            return this.Ha;
        case 1:
            return this.ub;
        case 2:
            return this.kb;
        case 3:
            return this.ib;
        case 4:
            return this.Ha;
        default:
            return this.Ha
        }
    };
    p.prototype.Wp = function() {
        return (this.Ga + this.tb + this.jb + this.hb) / 4
    };
    p.prototype.Xp = function() {
        return (this.Ha + this.ub + this.kb + this.ib) / 4
    };
    p.prototype.am = function(a) {
        var m = a.Wp(),
        s = a.Xp();
        if (this.Tb(m, s)) return ! 0;
        m = this.Wp();
        s = this.Xp();
        if (a.Tb(m, s)) return ! 0;
        var c, b, e, l, g, n, f, d;
        for (f = 0; 4 > f; f++) for (d = 0; 4 > d; d++) if (m = this.Yc(f, !0), s = this.Yc(f, !1), c = this.Yc(f + 1, !0), b = this.Yc(f + 1, !1), e = a.Yc(d, !0), l = a.Yc(d, !1), g = a.Yc(d + 1, !0), n = a.Yc(d + 1, !1), pa(m, s, c, b, e, l, g, n)) return ! 0;
        return ! 1
    };
    ra = p;
    sa = function(a, m) {
        for (var s in m) m.hasOwnProperty(s) && (a[s] = m[s]);
        return a
    };
    ta = function(a, m) {
        var s, c;
        m = S(m);
        if (! (0 > m || m >= a.length)) {
            s = m;
            for (c = a.length - 1; s < c; s++) a[s] = a[s + 1];
            a.length = c
        }
    };
    ua = function(a, m) {
        a.length = m.length;
        var s, c;
        s = 0;
        for (c = m.length; s < c; s++) a[s] = m[s]
    };
    va = function(a, m) {
        a.push.apply(a, m)
    };
    wa = function(a, m) {
        var s, c;
        s = 0;
        for (c = a.length; s < c; ++s) if (a[s] === m) return s;
        return - 1
    };
    xa = function(a, m) {
        var s = wa(a, m); - 1 !== s && ta(a, s)
    };
    U = function(a) {
        return a / (180 / ma)
    };
    za = function(a) {
        return 180 / ma * a
    };
    Aa = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ba = function(a) {
        a %= 2 * ma;
        0 > a && (a += 2 * ma);
        return a
    };
    Da = function(a) {
        return Aa(za(a))
    };
    Ea = function(a) {
        return Ba(U(a))
    };
    Fa = function(a, m, s, c) {
        return Math.atan2(c - m, s - a)
    };
    Ga = function(a, m) {
        if (a === m) return 0;
        var s = Math.sin(a),
        c = Math.cos(a),
        b = Math.sin(m),
        e = Math.cos(m),
        s = s * b + c * e;
        return 1 <= s ? 0 : -1 >= s ? ma: Math.acos(s)
    };
    Ha = function(a, m, s) {
        var c = Math.sin(a),
        b = Math.cos(a),
        e = Math.sin(m),
        l = Math.cos(m);
        return Math.acos(c * e + b * l) > s ? 0 < b * e - c * l ? Ba(a + s) : Ba(a - s) : Ba(m)
    };
    Ia = function(a, m) {
        var s = Math.sin(a),
        c = Math.cos(a),
        b = Math.sin(m),
        e = Math.cos(m);
        return 0 >= c * b - s * e
    };
    Ja = function(a, m, s, c, b, e) {
        if (0 === s) return e ? a: m;
        var l = Math.sin(s);
        s = Math.cos(s);
        a -= c;
        m -= b;
        var g = a * l;
        a = a * s - m * l;
        m = m * s + g;
        return e ? a + c: m + b
    };
    Ka = function(a, m, s, c) {
        a = s - a;
        m = c - m;
        return Math.sqrt(a * a + m * m)
    };
    La = function(a, m) {
        return ! a !== !m
    };
    Ma = function(a) {
        for (var m in a) if (a.hasOwnProperty(m)) return ! 0;
        return ! 1
    };
    Na = function(a) {
        for (var m in a) a.hasOwnProperty(m) && delete a[m]
    };
    var v = +new Date;
    Oa = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - v
    };
    var l = !1,
    t = l = !1,
    G = !1;
    "undefined" !== typeof window && (l = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), l = !l && /safari/i.test(navigator.userAgent), t = /(iphone|ipod|ipad)/i.test(navigator.userAgent), G = window.c2ejecta);
    var n = !l && !G && !t && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    h.prototype.contains = function(a) {
        return this.kg() ? !1 : n ? this.Pa.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    h.prototype.add = function(a) {
        if (n) this.Pa.has(a) || (this.Pa.add(a), this.ve = !1);
        else {
            var m = a.toString(),
            s = this.items;
            s ? s.hasOwnProperty(m) || (s[m] = a, this.pg++, this.ve = !1) : (this.items = {},
            this.items[m] = a, this.pg = 1, this.ve = !1)
        }
    };
    h.prototype.remove = function(a) {
        if (!this.kg()) if (n) this.Pa.has(a) && (this.Pa["delete"](a), this.ve = !1);
        else if (this.items) {
            a = a.toString();
            var m = this.items;
            m.hasOwnProperty(a) && (delete m[a], this.pg--, this.ve = !1)
        }
    };
    h.prototype.clear = function() {
        this.kg() || (n ? this.Pa.clear() : (this.items = null, this.pg = 0), this.Ng.length = 0, this.ve = !0)
    };
    h.prototype.kg = function() {
        return 0 === this.count()
    };
    h.prototype.count = function() {
        return n ? this.Pa.size: this.pg
    };
    var u = null,
    M = 0;
    h.prototype.lx = function() {
        if (!this.ve) {
            if (n) this.Ng.length = this.Pa.size,
            u = this.Ng,
            M = 0,
            this.Pa.forEach(r),
            u = null,
            M = 0;
            else {
                var a = this.Ng;
                a.length = this.pg;
                var m, s = 0,
                c = this.items;
                if (c) for (m in c) c.hasOwnProperty(m) && (a[s++] = c[m])
            }
            this.ve = !0
        }
    };
    h.prototype.ke = function() {
        this.lx();
        return this.Ng
    };
    da = h;
    new da;
    Ra = function(a, m) {
        n ? Pa(a, m.Pa) : Qa(a, m.ke())
    };
    Pa = function(a, m) {
        var s, c, b, e;
        c = s = 0;
        for (b = a.length; s < b; ++s) e = a[s],
        m.has(e) || (a[c++] = e);
        a.length = c
    };
    Qa = function(a, m) {
        var s, c, b, e;
        c = s = 0;
        for (b = a.length; s < b; ++s) e = a[s],
        -1 === wa(m, e) && (a[c++] = e);
        a.length = c
    };
    a.prototype.add = function(a) {
        this.y = a - this.jl;
        this.yk = this.ea + this.y;
        this.jl = this.yk - this.ea - this.y;
        this.ea = this.yk
    };
    a.prototype.reset = function() {
        this.ea = this.yk = this.y = this.jl = 0
    };
    Sa = a;
    Xa = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    b.prototype.gi = function(a) {
        this.zq = a;
        this.fd = a.length / 2;
        this.pb.length = a.length;
        this.Mi = this.Ni = -1;
        this.so = 0
    };
    b.prototype.Af = function() {
        return ! this.zq.length
    };
    b.prototype.ma = function() {
        for (var a = this.pb,
        m = a[0], s = m, c = a[1], b = c, e, l, g = 1, n = this.fd; g < n; ++g) l = 2 * g,
        e = a[l],
        l = a[l + 1],
        e < m && (m = e),
        e > s && (s = e),
        l < c && (c = l),
        l > b && (b = l);
        this.Hi = m;
        this.Ii = s;
        this.Ji = c;
        this.Gi = b
    };
    b.prototype.Qf = function(a, m, s) {
        this.pb.length = 8;
        this.fd = 4;
        var c = this.pb;
        c[0] = a.left - m;
        c[1] = a.top - s;
        c[2] = a.right - m;
        c[3] = a.top - s;
        c[4] = a.right - m;
        c[5] = a.bottom - s;
        c[6] = a.left - m;
        c[7] = a.bottom - s;
        this.Ni = a.right - a.left;
        this.Mi = a.bottom - a.top;
        this.ma()
    };
    b.prototype.Pf = function(a, m, s, c, b) {
        this.pb.length = 8;
        this.fd = 4;
        var e = this.pb;
        e[0] = a.Ga - m;
        e[1] = a.Ha - s;
        e[2] = a.tb - m;
        e[3] = a.ub - s;
        e[4] = a.jb - m;
        e[5] = a.kb - s;
        e[6] = a.hb - m;
        e[7] = a.ib - s;
        this.Ni = c;
        this.Mi = b;
        this.ma()
    };
    b.prototype.Kq = function(a) {
        this.fd = a.fd;
        ua(this.pb, a.pb);
        this.Hi = a.Hi;
        this.Ji - a.Ji;
        this.Ii = a.Ii;
        this.Gi = a.Gi
    };
    b.prototype.cf = function(a, m, s) {
        if (this.Ni !== a || this.Mi !== m || this.so !== s) {
            this.Ni = a;
            this.Mi = m;
            this.so = s;
            var c, b, e, l, g, n = 0,
            f = 1,
            d = this.zq,
            h = this.pb;
            0 !== s && (n = Math.sin(s), f = Math.cos(s));
            s = 0;
            for (e = this.fd; s < e; s++) c = 2 * s,
            b = c + 1,
            l = d[c] * a,
            g = d[b] * m,
            h[c] = l * f - g * n,
            h[b] = g * f + l * n;
            this.ma()
        }
    };
    b.prototype.Tb = function(a, m) {
        var s = this.pb;
        if (a === s[0] && m === s[1]) return ! 0;
        var c, b, e, l = this.fd,
        g = this.Hi - 110,
        n = this.Ji - 101,
        f = this.Ii + 131,
        d = this.Gi + 120,
        h, t, u = 0,
        q = 0;
        for (c = 0; c < l; c++) b = 2 * c,
        e = (c + 1) % l * 2,
        h = s[b],
        b = s[b + 1],
        t = s[e],
        e = s[e + 1],
        pa(g, n, a, m, h, b, t, e) && u++,
        pa(f, d, a, m, h, b, t, e) && q++;
        return 1 === u % 2 || 1 === q % 2
    };
    b.prototype.uf = function(a, m, s) {
        var c = a.pb,
        b = this.pb;
        if (this.Tb(c[0] + m, c[1] + s) || a.Tb(b[0] - m, b[1] - s)) return ! 0;
        var e, l, g, n, f, d, h, t, u, q, v, k;
        e = 0;
        for (n = this.fd; e < n; e++) for (l = 2 * e, g = (e + 1) % n * 2, t = b[l], l = b[l + 1], u = b[g], q = b[g + 1], g = 0, h = a.fd; g < h; g++) if (f = 2 * g, d = (g + 1) % h * 2, v = c[f] + m, f = c[f + 1] + s, k = c[d] + m, d = c[d + 1] + s, pa(t, l, u, q, v, f, k, d)) return ! 0;
        return ! 1
    };
    Ya = b;
    f.prototype.Il = function(a, m, s) {
        var c;
        c = this.cells[a];
        return c ? (c = c[m]) ? c: s ? (c = e(this, a, m), this.cells[a][m] = c) : null: s ? (c = e(this, a, m), this.cells[a] = {},
        this.cells[a][m] = c) : null
    };
    f.prototype.Bi = function(a) {
        return S(a / this.Ut)
    };
    f.prototype.Ci = function(a) {
        return S(a / this.Tt)
    };
    f.prototype.update = function(a, m, c) {
        var b, e, l, g, n;
        if (m) for (b = m.left, e = m.right; b <= e; ++b) for (l = m.top, g = m.bottom; l <= g; ++l) if (!c || !c.Tb(b, l)) if (n = this.Il(b, l, !1)) n.remove(a),
        n.kg() && (n.Oh.clear(), 1E3 > s.length && s.push(n), this.cells[b][l] = null);
        if (c) for (b = c.left, e = c.right; b <= e; ++b) for (l = c.top, g = c.bottom; l <= g; ++l) m && m.Tb(b, l) || this.Il(b, l, !0).Rv(a)
    };
    f.prototype.Cq = function(a, m) {
        var s, c, b, e, l, g;
        s = this.Bi(a.left);
        b = this.Ci(a.top);
        c = this.Bi(a.right);
        for (l = this.Ci(a.bottom); s <= c; ++s) for (e = b; e <= l; ++e)(g = this.Il(s, e, !1)) && g.dump(m)
    };
    Za = f;
    var s = [];
    c.prototype.kg = function() {
        return this.Oh.kg()
    };
    c.prototype.Rv = function(a) {
        this.Oh.add(a)
    };
    c.prototype.remove = function(a) {
        this.Oh.remove(a)
    };
    c.prototype.dump = function(a) {
        va(a, this.Oh.ke())
    };
    ba = c;
    var m = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    $a = function(a) {
        return 0 >= a || 11 <= a ? "source-over": m[a - 1]
    };
    ab = function(a, m, s) {
        if (s) switch (a.Ib = s.ONE, a.Hb = s.ONE_MINUS_SRC_ALPHA, m) {
        case 1:
            a.Ib = s.ONE;
            a.Hb = s.ONE;
            break;
        case 3:
            a.Ib = s.ONE;
            a.Hb = s.ZERO;
            break;
        case 4:
            a.Ib = s.ONE_MINUS_DST_ALPHA;
            a.Hb = s.ONE;
            break;
        case 5:
            a.Ib = s.DST_ALPHA;
            a.Hb = s.ZERO;
            break;
        case 6:
            a.Ib = s.ZERO;
            a.Hb = s.SRC_ALPHA;
            break;
        case 7:
            a.Ib = s.ONE_MINUS_DST_ALPHA;
            a.Hb = s.ZERO;
            break;
        case 8:
            a.Ib = s.ZERO;
            a.Hb = s.ONE_MINUS_SRC_ALPHA;
            break;
        case 9:
            a.Ib = s.DST_ALPHA;
            a.Hb = s.ONE_MINUS_SRC_ALPHA;
            break;
        case 10:
            a.Ib = s.ONE_MINUS_DST_ALPHA,
            a.Hb = s.SRC_ALPHA
        }
    };
    bb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    cb = function(a, m) {
        return "string" !== typeof a || "string" !== typeof m || a.length !== m.length ? !1 : a === m ? !0 : a.toLowerCase() === m.toLowerCase()
    };
    db = function(a) {
        a = a.target;
        return ! a || a === document || a === window || document && document.body && a === document.body || cb(a.tagName, "canvas") ? !0 : !1
    }
})();
var Xb = "undefined" !== typeof Float32Array ? Float32Array: Array;
function Yb(k) {
    var p = new Xb(3);
    k && (p[0] = k[0], p[1] = k[1], p[2] = k[2]);
    return p
}
function Zb(k) {
    var p = new Xb(16);
    k && (p[0] = k[0], p[1] = k[1], p[2] = k[2], p[3] = k[3], p[4] = k[4], p[5] = k[5], p[6] = k[6], p[7] = k[7], p[8] = k[8], p[9] = k[9], p[10] = k[10], p[11] = k[11], p[12] = k[12], p[13] = k[13], p[14] = k[14], p[15] = k[15]);
    return p
}
function $b(k, p) {
    p[0] = k[0];
    p[1] = k[1];
    p[2] = k[2];
    p[3] = k[3];
    p[4] = k[4];
    p[5] = k[5];
    p[6] = k[6];
    p[7] = k[7];
    p[8] = k[8];
    p[9] = k[9];
    p[10] = k[10];
    p[11] = k[11];
    p[12] = k[12];
    p[13] = k[13];
    p[14] = k[14];
    p[15] = k[15]
}
function ac(k, p) {
    var d = p[0],
    h = p[1];
    p = p[2];
    k[0] *= d;
    k[1] *= d;
    k[2] *= d;
    k[3] *= d;
    k[4] *= h;
    k[5] *= h;
    k[6] *= h;
    k[7] *= h;
    k[8] *= p;
    k[9] *= p;
    k[10] *= p;
    k[11] *= p
}
function bc(k, p, d, h) {
    h || (h = Zb());
    var r, a, b, f, e, c, g, q, v = k[0],
    l = k[1];
    k = k[2];
    a = d[0];
    b = d[1];
    r = d[2];
    d = p[1];
    c = p[2];
    v === p[0] && l === d && k === c ? (k = h, k[0] = 1, k[1] = 0, k[2] = 0, k[3] = 0, k[4] = 0, k[5] = 1, k[6] = 0, k[7] = 0, k[8] = 0, k[9] = 0, k[10] = 1, k[11] = 0, k[12] = 0, k[13] = 0, k[14] = 0, k[15] = 1) : (d = v - p[0], c = l - p[1], g = k - p[2], q = 1 / Math.sqrt(d * d + c * c + g * g), d *= q, c *= q, g *= q, p = b * g - r * c, r = r * d - a * g, a = a * c - b * d, (q = Math.sqrt(p * p + r * r + a * a)) ? (q = 1 / q, p *= q, r *= q, a *= q) : a = r = p = 0, b = c * a - g * r, f = g * p - d * a, e = d * r - c * p, (q = Math.sqrt(b * b + f * f + e * e)) ? (q = 1 / q, b *= q, f *= q, e *= q) : e = f = b = 0, h[0] = p, h[1] = b, h[2] = d, h[3] = 0, h[4] = r, h[5] = f, h[6] = c, h[7] = 0, h[8] = a, h[9] = e, h[10] = g, h[11] = 0, h[12] = -(p * v + r * l + a * k), h[13] = -(b * v + f * l + e * k), h[14] = -(d * v + c * l + g * k), h[15] = 1)
} (function() {
    function k(a) {
        this.kc = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.vo = Yb([0, 0, 100]);
        this.Fp = Yb([0, 0, 0]);
        this.dr = Yb([0, 1, 0]);
        this.Fn = Yb([1, 1, 1]);
        this.Ko = !0;
        this.xm = Zb();
        this.Mc = Zb();
        this.xp = Zb();
        this.ol = Zb();
        this.A = a;
        this.kp()
    }
    function p(a, b, f) {
        this.A = a;
        this.hi = b;
        this.name = f;
        this.Lc = a.getAttribLocation(b, "aPos");
        this.Ie = a.getAttribLocation(b, "aTex");
        this.Dp = a.getUniformLocation(b, "matP");
        this.Oj = a.getUniformLocation(b, "matMV");
        this.sg = a.getUniformLocation(b, "opacity");
        this.Ep = a.getUniformLocation(b, "samplerFront");
        this.Fh = a.getUniformLocation(b, "samplerBack");
        this.If = a.getUniformLocation(b, "destStart");
        this.Hf = a.getUniformLocation(b, "destEnd");
        this.um = a.getUniformLocation(b, "seconds");
        this.tm = a.getUniformLocation(b, "pixelWidth");
        this.rm = a.getUniformLocation(b, "pixelHeight");
        this.Eh = a.getUniformLocation(b, "layerScale");
        this.Dh = a.getUniformLocation(b, "layerAngle");
        this.Hh = a.getUniformLocation(b, "viewOrigin");
        this.Gh = a.getUniformLocation(b, "scrollPos");
        this.Mv = !!(this.tm || this.rm || this.um || this.Fh || this.If || this.Hf || this.Eh || this.Dh || this.Hh || this.Gh);
        this.Np = this.Op = -999;
        this.Qj = 1;
        this.Jp = this.Ip = 0;
        this.Lp = this.Hp = this.Gp = 1;
        this.Qp = this.Pp = this.Sp = this.Rp = this.Kp = 0;
        this.km = [];
        this.Mp = Zb();
        this.sg && a.uniform1f(this.sg, 1);
        this.Ep && a.uniform1i(this.Ep, 0);
        this.Fh && a.uniform1i(this.Fh, 1);
        this.If && a.uniform2f(this.If, 0, 0);
        this.Hf && a.uniform2f(this.Hf, 1, 1);
        this.Eh && a.uniform1f(this.Eh, 1);
        this.Dh && a.uniform1f(this.Dh, 0);
        this.Hh && a.uniform2f(this.Hh, 0, 0);
        this.Gh && a.uniform2f(this.Gh, 0, 0);
        this.pf = !1
    }
    function d(a, b) {
        this.type = a;
        this.D = b;
        this.A = b.A;
        this.rd = this.Sc = this.mq = 0;
        this.va = this.hd = null;
        this.Mq = []
    }
    k.prototype.kp = function() {
        var a = this.A,
        b;
        this.yp = 1;
        this.Df = this.Cf = null;
        this.Zi = 1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.DEPTH_TEST);
        this.zp = a.ONE;
        this.wp = a.ONE_MINUS_SRC_ALPHA;
        this.Nm = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.Nm);
        this.vi = Array(4);
        this.mi = Array(4);
        for (b = 0; 4 > b; b++) this.vi[b] = a.createBuffer(),
        a.bindBuffer(a.ARRAY_BUFFER, this.vi[b]),
        this.mi[b] = a.createBuffer(),
        a.bindBuffer(a.ARRAY_BUFFER, this.mi[b]);
        this.Ld = 0;
        this.Pv = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Pv);
        this.An = new Float32Array(16E3);
        this.pn = new Float32Array(16E3);
        this.xw = new Float32Array(32E3);
        for (var f = new Uint16Array(12E3), e = b = 0; 12E3 > b;) f[b++] = e,
        f[b++] = e + 1,
        f[b++] = e + 2,
        f[b++] = e,
        f[b++] = e + 2,
        f[b++] = e + 3,
        e += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, f, a.STATIC_DRAW);
        this.Om = this.Gd = 0;
        this.sb = [];
        b = this.nl({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        },
        "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", "<default>");
        this.sb.push(b);
        b = this.nl({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        },
        "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.sb.push(b);
        for (var c in cc) cc.hasOwnProperty(c) && this.sb.push(this.nl(cc[c], "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", c));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.ue = [];
        this.Kd = 0;
        this.jc = !1;
        this.Eo = this.xh = -1;
        this.Vg = null;
        this.Wu = a.createFramebuffer();
        this.Fq = null;
        this.We = Yb([0, 0, 0]);
        this.Tp = a.getParameter(a.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.Tp && (this.Tp = 2048);
        this.Dd(0)
    };
    p.prototype.wn = function(a) {
        var b = this.Mp;
        if (b[0] !== a[0] || b[1] !== a[1] || b[2] !== a[2] || b[3] !== a[3] || b[4] !== a[4] || b[5] !== a[5] || b[6] !== a[6] || b[7] !== a[7] || b[8] !== a[8] || b[9] !== a[9] || b[10] !== a[10] || b[11] !== a[11] || b[12] !== a[12] || b[13] !== a[13] || b[14] !== a[14] || b[15] !== a[15]) $b(a, this.Mp),
        this.A.uniformMatrix4fv(this.Oj, !1, a)
    };
    k.prototype.nl = function(a, b, f) {
        var e = this.A,
        c = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(c, a.src);
        e.compileShader(c);
        if (!e.getShaderParameter(c, e.COMPILE_STATUS)) return e.deleteShader(c),
        null;
        var g = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(g, b);
        e.compileShader(g);
        if (!e.getShaderParameter(g, e.COMPILE_STATUS)) return e.deleteShader(c),
        e.deleteShader(g),
        null;
        b = e.createProgram();
        e.attachShader(b, c);
        e.attachShader(b, g);
        e.linkProgram(b);
        if (!e.getProgramParameter(b, e.LINK_STATUS)) return e.deleteShader(c),
        e.deleteShader(g),
        e.deleteProgram(b),
        null;
        e.useProgram(b);
        e.deleteShader(c);
        e.deleteShader(g);
        f = new p(e, b, f);
        f.zl = a.zl || 0;
        f.Al = a.Al || 0;
        f.Do = !!a.Do;
        f.lo = !!a.lo;
        f.R = a.R || [];
        a = 0;
        for (c = f.R.length; a < c; a++) f.R[a][1] = e.getUniformLocation(b, f.R[a][0]),
        f.km.push(0),
        e.uniform1f(f.R[a][1], 0);
        return f
    };
    k.prototype.Rl = function(a) {
        var b, f;
        b = 0;
        for (f = this.sb.length; b < f; b++) if (this.sb[b].name === a) return b;
        return - 1
    };
    k.prototype.yq = function(a, b, f) {
        var e = this.Mc,
        c = this.xm,
        g = [0, 0, 0, 0, 0, 0, 0, 0];
        g[0] = e[0] * a + e[4] * b + e[12];
        g[1] = e[1] * a + e[5] * b + e[13];
        g[2] = e[2] * a + e[6] * b + e[14];
        g[3] = e[3] * a + e[7] * b + e[15];
        g[4] = c[0] * g[0] + c[4] * g[1] + c[8] * g[2] + c[12] * g[3];
        g[5] = c[1] * g[0] + c[5] * g[1] + c[9] * g[2] + c[13] * g[3];
        g[6] = c[2] * g[0] + c[6] * g[1] + c[10] * g[2] + c[14] * g[3];
        g[7] = -g[2];
        0 !== g[7] && (g[7] = 1 / g[7], g[4] *= g[7], g[5] *= g[7], g[6] *= g[7], f[0] = (.5 * g[4] + .5) * this.width, f[1] = (.5 * g[5] + .5) * this.height)
    };
    k.prototype.Re = function(a, b, f) {
        if (this.width !== a || this.height !== b || f) {
            this.hf();
            this.width = a;
            this.height = b;
            this.A.viewport(0, 0, a, b);
            b = a / b;
            var e = this.xm,
            c;
            c = 1 * Math.tan(45 * Math.PI / 360);
            b *= c;
            a = -b;
            f = -c;
            e || (e = Zb());
            var g = b - a,
            d = c - f;
            e[0] = 2 / g;
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            e[4] = 0;
            e[5] = 2 / d;
            e[6] = 0;
            e[7] = 0;
            e[8] = (b + a) / g;
            e[9] = (c + f) / d;
            e[10] = -1001 / 999;
            e[11] = -1;
            e[12] = 0;
            e[13] = 0;
            e[14] = -2E3 / 999;
            e[15] = 0;
            bc(this.vo, this.Fp, this.dr, this.Mc);
            a = [0, 0];
            b = [0, 0];
            this.yq(0, 0, a);
            this.yq(1, 1, b);
            this.Fn[0] = 1 / (b[0] - a[0]);
            this.Fn[1] = -1 / (b[1] - a[1]);
            a = 0;
            for (b = this.sb.length; a < b; a++) f = this.sb[a],
            f.pf = !1,
            f.Dp && (this.A.useProgram(f.hi), this.A.uniformMatrix4fv(f.Dp, !1, this.xm));
            this.A.useProgram(this.sb[this.xh].hi);
            this.A.bindTexture(this.A.TEXTURE_2D, null);
            this.A.activeTexture(this.A.TEXTURE1);
            this.A.bindTexture(this.A.TEXTURE_2D, null);
            this.A.activeTexture(this.A.TEXTURE0);
            this.Df = this.Cf = null
        }
    };
    k.prototype.Pe = function() {
        bc(this.vo, this.Fp, this.dr, this.Mc);
        ac(this.Mc, this.Fn)
    };
    k.prototype.translate = function(a, b) {
        if (0 !== a || 0 !== b) {
            this.We[0] = a;
            this.We[1] = b;
            this.We[2] = 0;
            var f = this.Mc,
            e = this.We,
            c = e[0],
            g = e[1],
            e = e[2];
            f[12] = f[0] * c + f[4] * g + f[8] * e + f[12];
            f[13] = f[1] * c + f[5] * g + f[9] * e + f[13];
            f[14] = f[2] * c + f[6] * g + f[10] * e + f[14];
            f[15] = f[3] * c + f[7] * g + f[11] * e + f[15]
        }
    };
    k.prototype.scale = function(a, b) {
        if (1 !== a || 1 !== b) this.We[0] = a,
        this.We[1] = b,
        this.We[2] = 1,
        ac(this.Mc, this.We)
    };
    k.prototype.Gq = function(a) {
        if (0 !== a) {
            var b = this.Mc,
            f, e = Math.sin(a);
            a = Math.cos(a);
            var c = b[0],
            g = b[1],
            d = b[2],
            h = b[3],
            l = b[4],
            t = b[5],
            k = b[6],
            n = b[7];
            f ? b !== f && (f[8] = b[8], f[9] = b[9], f[10] = b[10], f[11] = b[11], f[12] = b[12], f[13] = b[13], f[14] = b[14], f[15] = b[15]) : f = b;
            f[0] = c * a + l * e;
            f[1] = g * a + t * e;
            f[2] = d * a + k * e;
            f[3] = h * a + n * e;
            f[4] = c * -e + l * a;
            f[5] = g * -e + t * a;
            f[6] = d * -e + k * a;
            f[7] = h * -e + n * a
        }
    };
    k.prototype.Xe = function() {
        for (var a = !1,
        b = 0; 16 > b; b++) if (this.xp[b] !== this.Mc[b]) {
            a = !0;
            break
        }
        a && (a = this.gd(), a.type = 5, a.va ? $b(this.Mc, a.va) : a.va = Zb(this.Mc), $b(this.Mc, this.xp), this.jc = !1)
    };
    d.prototype.qu = function() {
        this.A.bindTexture(this.A.TEXTURE_2D, this.hd)
    };
    d.prototype.ru = function() {
        var a = this.A;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.hd);
        a.activeTexture(a.TEXTURE0)
    };
    d.prototype.nu = function() {
        var a = this.mq,
        b = this.D;
        b.Zi = a;
        b = b.Vg;
        b.sg && b.Qj !== a && (b.Qj = a, this.A.uniform1f(b.sg, a))
    };
    d.prototype.iu = function() {
        this.A.drawElements(this.A.TRIANGLES, this.rd, this.A.UNSIGNED_SHORT, 2 * this.Sc)
    };
    d.prototype.mu = function() {
        this.A.blendFunc(this.Sc, this.rd)
    };
    d.prototype.tu = function() {
        var a, b, f, e = this.D.sb,
        c = this.D.Eo;
        a = 0;
        for (b = e.length; a < b; a++) f = e[a],
        a === c && f.Oj ? (f.wn(this.va), f.pf = !0) : f.pf = !1;
        $b(this.va, this.D.ol)
    };
    d.prototype.ku = function() {
        var a = this.A,
        b = this.D;
        this.hd ? (b.Df === this.hd && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.Df = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.Wu), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.hd, 0)) : (a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    d.prototype.gu = function() {
        var a = this.A;
        0 === this.Sc ? (a.clearColor(this.va[0], this.va[1], this.va[2], this.va[3]), a.clear(a.COLOR_BUFFER_BIT)) : (a.enable(a.SCISSOR_TEST), a.scissor(this.va[0], this.va[1], this.va[2], this.va[3]), a.clearColor(0, 0, 0, 0), a.clear(this.A.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST))
    };
    d.prototype.hu = function() {
        var a = this.A,
        b = this.D,
        f = b.sb[1];
        a.useProgram(f.hi); ! f.pf && f.Oj && (f.wn(b.ol), f.pf = !0);
        a.enableVertexAttribArray(f.Lc);
        a.bindBuffer(a.ARRAY_BUFFER, b.Nm);
        a.vertexAttribPointer(f.Lc, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.Sc / 4, this.rd);
        f = b.Vg;
        a.useProgram(f.hi);
        0 <= f.Lc && (a.enableVertexAttribArray(f.Lc), a.bindBuffer(a.ARRAY_BUFFER, b.vi[b.Ld]), a.vertexAttribPointer(f.Lc, 2, a.FLOAT, !1, 0, 0));
        0 <= f.Ie && (a.enableVertexAttribArray(f.Ie), a.bindBuffer(a.ARRAY_BUFFER, b.mi[b.Ld]), a.vertexAttribPointer(f.Ie, 2, a.FLOAT, !1, 0, 0))
    };
    d.prototype.ou = function() {
        var a = this.A,
        b = this.D,
        f = b.sb[this.Sc];
        b.Eo = this.Sc;
        b.Vg = f;
        a.useProgram(f.hi); ! f.pf && f.Oj && (f.wn(b.ol), f.pf = !0);
        f.sg && f.Qj !== b.Zi && (f.Qj = b.Zi, a.uniform1f(f.sg, b.Zi));
        0 <= f.Lc && (a.enableVertexAttribArray(f.Lc), a.bindBuffer(a.ARRAY_BUFFER, b.vi[b.Ld]), a.vertexAttribPointer(f.Lc, 2, a.FLOAT, !1, 0, 0));
        0 <= f.Ie && (a.enableVertexAttribArray(f.Ie), a.bindBuffer(a.ARRAY_BUFFER, b.mi[b.Ld]), a.vertexAttribPointer(f.Ie, 2, a.FLOAT, !1, 0, 0))
    };
    d.prototype.pu = function() {
        var a, b, f = this.D.Vg,
        e = this.A;
        a = this.va;
        f.Fh && this.D.Df !== this.hd && (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, this.hd), this.D.Df = this.hd, e.activeTexture(e.TEXTURE0));
        var c = a[0];
        f.tm && c !== f.Op && (f.Op = c, e.uniform1f(f.tm, c));
        c = a[1];
        f.rm && c !== f.Np && (f.Np = c, e.uniform1f(f.rm, c));
        c = a[2];
        b = a[3]; ! f.If || c === f.Ip && b === f.Jp || (f.Ip = c, f.Jp = b, e.uniform2f(f.If, c, b));
        c = a[4];
        b = a[5]; ! f.Hf || c === f.Gp && b === f.Hp || (f.Gp = c, f.Hp = c, e.uniform2f(f.Hf, c, b));
        c = a[6];
        f.Eh && c !== f.Lp && (f.Lp = c, e.uniform1f(f.Eh, c));
        c = a[7];
        f.Dh && c !== f.Kp && (f.Kp = c, e.uniform1f(f.Dh, c));
        c = a[8];
        b = a[9]; ! f.Hh || c === f.Rp && b === f.Sp || (f.Rp = c, f.Sp = b, e.uniform2f(f.Hh, c, b));
        c = a[10];
        b = a[11]; ! f.Gh || c === f.Pp && b === f.Qp || (f.Pp = c, f.Qp = b, e.uniform2f(f.Gh, c, b));
        f.um && e.uniform1f(f.um, Oa() / 1E3);
        if (f.R.length) for (a = 0, b = f.R.length; a < b; a++) c = this.Mq[a],
        c !== f.km[a] && (f.km[a] = c, e.uniform1f(f.R[a][1], c))
    };
    k.prototype.gd = function() {
        this.Kd === this.ue.length && this.ue.push(new d(0, this));
        return this.ue[this.Kd++]
    };
    k.prototype.hf = function() {
        if (0 !== this.Kd && !this.A.isContextLost()) {
            var a = this.A;
            0 < this.Om && (a.bindBuffer(a.ARRAY_BUFFER, this.Nm), a.bufferData(a.ARRAY_BUFFER, this.xw.subarray(0, this.Om), a.STREAM_DRAW), b && 0 <= b.Lc && "<point>" === b.name && a.vertexAttribPointer(b.Lc, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.Gd) {
                var b = this.Vg;
                a.bindBuffer(a.ARRAY_BUFFER, this.vi[this.Ld]);
                a.bufferData(a.ARRAY_BUFFER, this.An.subarray(0, this.Gd), a.STREAM_DRAW);
                b && 0 <= b.Lc && "<point>" !== b.name && a.vertexAttribPointer(b.Lc, 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.mi[this.Ld]);
                a.bufferData(a.ARRAY_BUFFER, this.pn.subarray(0, this.Gd), a.STREAM_DRAW);
                b && 0 <= b.Ie && "<point>" !== b.name && a.vertexAttribPointer(b.Ie, 2, a.FLOAT, !1, 0, 0)
            }
            for (var f, a = 0,
            b = this.Kd; a < b; a++) switch (f = this.ue[a], f.type) {
            case 1:
                f.iu();
                break;
            case 2:
                f.qu();
                break;
            case 3:
                f.nu();
                break;
            case 4:
                f.mu();
                break;
            case 5:
                f.tu();
                break;
            case 6:
                f.ku();
                break;
            case 7:
                f.gu();
                break;
            case 8:
                f.hu();
                break;
            case 9:
                f.ou();
                break;
            case 10:
                f.pu();
                break;
            case 11:
                f.ru()
            }
            this.Om = this.Gd = this.Kd = 0;
            this.jc = !1;
            this.Ld++;
            4 <= this.Ld && (this.Ld = 0)
        }
    };
    k.prototype.Of = function(a) {
        if (a !== this.yp) {
            var b = this.gd();
            b.type = 3;
            this.yp = b.mq = a;
            this.jc = !1
        }
    };
    k.prototype.pc = function(a) {
        if (a !== this.Cf) {
            var b = this.gd();
            b.type = 2;
            this.Cf = b.hd = a;
            this.jc = !1
        }
    };
    k.prototype.Qe = function(a, b) {
        if (a !== this.zp || b !== this.wp) {
            var f = this.gd();
            f.type = 4;
            f.Sc = a;
            f.rd = b;
            this.zp = a;
            this.wp = b;
            this.jc = !1
        }
    };
    k.prototype.Iq = function() {
        this.Qe(this.A.ONE, this.A.ONE_MINUS_SRC_ALPHA)
    };
    k.prototype.ik = function(a, b, f, e, c, g, d, h) {
        15992 <= this.Gd && this.hf();
        var l = this.Gd,
        t = this.An,
        k = this.pn;
        if (this.jc) this.ue[this.Kd - 1].rd += 6;
        else {
            var n = this.gd();
            n.type = 1;
            n.Sc = l / 4 * 3;
            n.rd = 6;
            this.jc = !0
        }
        t[l] = a;
        k[l++] = 0;
        t[l] = b;
        k[l++] = 0;
        t[l] = f;
        k[l++] = 1;
        t[l] = e;
        k[l++] = 0;
        t[l] = c;
        k[l++] = 1;
        t[l] = g;
        k[l++] = 1;
        t[l] = d;
        k[l++] = 0;
        t[l] = h;
        k[l++] = 1;
        this.Gd = l
    };
    k.prototype.xd = function(a, b, f, e, c, g, d, h, l) {
        15992 <= this.Gd && this.hf();
        var t = this.Gd,
        k = this.An,
        n = this.pn;
        if (this.jc) this.ue[this.Kd - 1].rd += 6;
        else {
            var u = this.gd();
            u.type = 1;
            u.Sc = t / 4 * 3;
            u.rd = 6;
            this.jc = !0
        }
        var u = l.left,
        r = l.top,
        s = l.right;
        l = l.bottom;
        k[t] = a;
        n[t++] = u;
        k[t] = b;
        n[t++] = r;
        k[t] = f;
        n[t++] = s;
        k[t] = e;
        n[t++] = r;
        k[t] = c;
        n[t++] = s;
        k[t] = g;
        n[t++] = l;
        k[t] = d;
        n[t++] = u;
        k[t] = h;
        n[t++] = l;
        this.Gd = t
    };
    k.prototype.Dd = function(a) {
        if (this.xh !== a) {
            if (!this.sb[a]) {
                if (0 === this.xh) return;
                a = 0
            }
            var b = this.gd();
            b.type = 9;
            this.xh = b.Sc = a;
            this.jc = !1
        }
    };
    k.prototype.Yh = function(a) {
        a = this.sb[a];
        return ! (!a.If && !a.Hf)
    };
    k.prototype.Pm = function(a) {
        a = this.sb[a];
        return !! (a.If || a.Hf || a.Do)
    };
    k.prototype.Dw = function(a) {
        a = this.sb[a];
        return 0 !== a.zl || 0 !== a.Al
    };
    k.prototype.rv = function(a) {
        return this.sb[a].zl
    };
    k.prototype.sv = function(a) {
        return this.sb[a].Al
    };
    k.prototype.tv = function(a, b) {
        return this.sb[a].R[b][2]
    };
    k.prototype.gk = function(a) {
        return this.sb[a].lo
    };
    k.prototype.Eg = function(a, b, f, e, c, g, d, h, l, t, k, n, u, r) {
        var s = this.sb[this.xh],
        m,
        w;
        if (s.Mv || r.length) {
            m = this.gd();
            m.type = 10;
            m.va ? $b(this.Mc, m.va) : m.va = Zb();
            w = m.va;
            w[0] = b;
            w[1] = f;
            w[2] = e;
            w[3] = c;
            w[4] = g;
            w[5] = d;
            w[6] = h;
            w[7] = l;
            w[8] = t;
            w[9] = k;
            w[10] = n;
            w[11] = u;
            m.hd = s.Fh ? a: null;
            if (r.length) for (f = m.Mq, f.length = r.length, a = 0, b = r.length; a < b; a++) f[a] = r[a];
            this.jc = !1
        }
    };
    k.prototype.clear = function(a, b, f, e) {
        var c = this.gd();
        c.type = 7;
        c.Sc = 0;
        c.va || (c.va = Zb());
        c.va[0] = a;
        c.va[1] = b;
        c.va[2] = f;
        c.va[3] = e;
        this.jc = !1
    };
    k.prototype.clearRect = function(a, b, f, e) {
        if (! (0 > f || 0 > e)) {
            var c = this.gd();
            c.type = 7;
            c.Sc = 1;
            c.va || (c.va = Zb());
            c.va[0] = a;
            c.va[1] = b;
            c.va[2] = f;
            c.va[3] = e;
            this.jc = !1
        }
    };
    k.prototype.Cw = function() {
        this.hf();
        this.A.flush()
    };
    var h = [],
    r = {};
    k.prototype.Xt = function() {
        h.length = 0;
        r = {}
    };
    k.prototype.qg = function(a, b, f, e) {
        b = !!b;
        f = !!f;
        var c = a.src + "," + b + "," + f + (b ? ",undefined": ""),
        g = null;
        if ("undefined" !== typeof a.src && r.hasOwnProperty(c)) return g = r[c],
        g.Li++,
        g;
        this.hf();
        var d = this.A,
        v = ha(a.width) && ha(a.height),
        g = d.createTexture();
        d.bindTexture(d.TEXTURE_2D, g);
        d.pixelStorei(d.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var l = d.RGBA,
        t = d.RGBA,
        k = d.UNSIGNED_BYTE;
        if (e && !this.kc) switch (e) {
        case 1:
            t = l = d.RGB;
            break;
        case 2:
            k = d.UNSIGNED_SHORT_4_4_4_4;
            break;
        case 3:
            k = d.UNSIGNED_SHORT_5_5_5_1;
            break;
        case 4:
            t = l = d.RGB,
            k = d.UNSIGNED_SHORT_5_6_5
        }
        if (!v && b) {
            e = document.createElement("canvas");
            e.width = ia(a.width);
            e.height = ia(a.height);
            var n = e.getContext("2d");
            n.webkitImageSmoothingEnabled = f;
            n.mozImageSmoothingEnabled = f;
            n.msImageSmoothingEnabled = f;
            n.imageSmoothingEnabled = f;
            n.drawImage(a, 0, 0, a.width, a.height, 0, 0, e.width, e.height);
            d.texImage2D(d.TEXTURE_2D, 0, l, t, k, e)
        } else d.texImage2D(d.TEXTURE_2D, 0, l, t, k, a);
        b ? (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.REPEAT), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.REPEAT)) : (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE));
        f ? (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.LINEAR), v && this.Ko ? (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.LINEAR_MIPMAP_LINEAR), d.generateMipmap(d.TEXTURE_2D)) : d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.LINEAR)) : (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST));
        d.bindTexture(d.TEXTURE_2D, null);
        this.Cf = null;
        g.Tg = a.width;
        g.Sg = a.height;
        g.Li = 1;
        g.ro = c;
        h.push(g);
        return r[c] = g
    };
    k.prototype.Ae = function(a, b, f) {
        var e;
        this.hf();
        var c = this.A;
        this.kc && (e = !1);
        var g = c.createTexture();
        c.bindTexture(c.TEXTURE_2D, g);
        c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, a, b, 0, c.RGBA, e ? c.UNSIGNED_SHORT_4_4_4_4: c.UNSIGNED_BYTE, null);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, f ? c.LINEAR: c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, f ? c.LINEAR: c.NEAREST);
        c.bindTexture(c.TEXTURE_2D, null);
        this.Cf = null;
        g.Tg = a;
        g.Sg = b;
        h.push(g);
        return g
    };
    k.prototype.deleteTexture = function(a) {
        a && ("undefined" !== typeof a.Li && 1 < a.Li ? a.Li--:(this.hf(), a === this.Cf && (this.A.bindTexture(this.A.TEXTURE_2D, null), this.Cf = null), a === this.Df && (this.A.activeTexture(this.A.TEXTURE1), this.A.bindTexture(this.A.TEXTURE_2D, null), this.A.activeTexture(this.A.TEXTURE0), this.Df = null), xa(h, a), "undefined" !== typeof a.ro && delete r[a.ro], this.A.deleteTexture(a)))
    };
    k.prototype.Bd = function(a) {
        if (a !== this.Fq) {
            var b = this.gd();
            b.type = 6;
            this.Fq = b.hd = a;
            this.jc = !1
        }
    };
    eb = k
})(); (function() {
    function k() {
        return "undefined" !== typeof jQuery ? jQuery(window).width() : window.innerWidth
    }
    function p() {
        return "undefined" !== typeof jQuery ? jQuery(window).height() : window.innerHeight
    }
    function d(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var m = this;
            this.wc = (this.ph = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2isphonegap && window.c2isphonegap;
            this.xb = !!a.dc;
            this.jg = "undefined" !== typeof window.AppMobi || this.xb;
            this.vc = !!window.c2cocoonjs;
            this.Jc = !!window.c2ejecta;
            this.vc && (CocoonJS.App.onSuspended.addEventListener(function() {
                m.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                m.setSuspended(!1)
            }));
            this.Jc && (document.addEventListener("pagehide",
            function() {
                m.setSuspended(!0)
            }), document.addEventListener("pageshow",
            function() {
                m.setSuspended(!1)
            }), document.addEventListener("resize",
            function() {
                m.setSize(window.innerWidth, window.innerHeight)
            }));
            this.xa = this.xb || this.vc || this.Jc;
            this.kc = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent);
            this.tp = /tizen/i.test(navigator.userAgent);
            this.yj = /android/i.test(navigator.userAgent) && !this.tp && !this.kc;
            this.jm = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.kc;
            this.vp = /ipad/i.test(navigator.userAgent);
            this.Fj = this.jm || this.vp || this.Jc;
            this.bw = this.jm && /os\s6/i.test(navigator.userAgent);
            this.oh = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent);
            this.qp = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Uv = /firefox/i.test(navigator.userAgent);
            this.sp = /safari/i.test(navigator.userAgent) && !this.oh && !this.kc;
            this.Xv = /windows/i.test(navigator.userAgent);
            this.Xd = "undefined" !== typeof window.c2nodewebkit || /nodewebkit/i.test(navigator.userAgent);
            this.Zv = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.$v = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.zf = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.gm = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.fm = this.Zv || this.$v || this.gm;
            this.Sv = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.zj = this.yj && !this.oh && !this.ph && !this.Uv && !this.qp && !this.xa;
            this.devicePixelRatio = 1;
            this.Ge = this.wc || this.ph || this.jg || this.vc || this.yj || this.Fj || this.zf || this.gm || this.Sv || this.tp || this.Jc;
            this.Ge || (this.Ge = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            "undefined" === typeof cr_is_preview || this.Xd || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.Xd = !0);
            this.Tv = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
            this.canvas = a;
            this.wo = document.getElementById("c2canvasdiv");
            this.wa = this.D = this.A = null;
            this.Fl = "";
            this.mj = !1;
            this.fq = this.gq = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return ! 1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return ! 1
            };
            this.xb && (window.c2runtime = this);
            this.Xd && (window.ondragover = function(a) {
                a.preventDefault();
                return ! 1
            },
            window.ondrop = function(a) {
                a.preventDefault();
                return ! 1
            },
            require("nw.gui").App.clearCache());
            this.zj && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.Z = this.width;
            this.Y = this.height;
            this.Xi = this.width;
            this.Wi = this.height;
            this.zh = window.innerWidth;
            this.yh = window.innerHeight;
            this.Yu = !1;
            this.la = !0;
            this.sh = !1;
            Date.now || (Date.now = function() {
                return + new Date
            });
            this.plugins = [];
            this.types = {};
            this.B = [];
            this.Wa = [];
            this.om = {};
            this.dd = [];
            this.yl = {};
            this.Rd = [];
            this.Pg = [];
            this.Hk = [];
            this.Jt = [];
            this.Kt = [];
            this.Rq = null;
            this.ff = {};
            this.cm = this.Fe = !1;
            this.ad = 0;
            this.em = !1;
            this.$c = [];
            this.Yd = this.Pb = this.Lj = this.Ym = "";
            this.ki = this.Pq = !1;
            this.ml = this.Ih = this.Qd = this.Ce = 0;
            this.ge = 1;
            this.lc = new Sa;
            this.Hd = new Sa;
            this.Ij = 0;
            this.Vp = !0;
            this.Uj = this.oj = this.ij = this.pi = this.Ah = this.El = 0;
            this.df = null;
            this.ej = [];
            this.xl = [];
            this.hj = -1;
            this.vm = [[]];
            this.tn = this.Pj = 0;
            this.hk(null);
            this.tg = [];
            this.Jh = -1;
            this.Yg = this.$p = this.Nh = 0;
            this.li = [];
            this.Ek = this.jk = -1;
            this.ng = !0;
            this.Gf = 0;
            this.rh = !1;
            this.Yw = 0;
            this.Yf = null;
            this.Kv = !1;
            this.lm = 0;
            this.sd = this.Ul = this.Qm = !1;
            this.dq = new da;
            this.Em = new da;
            this.Fm = new da;
            this.Hw = [];
            this.$b = new Ya([]);
            this.nn = new Ya([]);
            this.pe = [];
            this.hh = {};
            this.ag = {};
            this.Xf = {};
            this.Og = {};
            this.oo = {};
            this.Cp = this.Kj = this.nc = this.xc = this.Bp = this.Jj = this.ta = null;
            this.Mg = this.hm = !1;
            this.Gl = [null, null];
            this.lf = 0;
            this.Cl = "";
            this.Ke = {};
            this.uk = this.rg = null;
            this.Tj = [];
            this.Jw()
        }
    }
    function h(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }
    function r(a, m, c, b) {
        var e = indexedDB.open("_C2SaveStates");
        e.onupgradeneeded = h;
        e.onerror = b;
        e.onsuccess = function(e) {
            e = e.target.result;
            e.onerror = b;
            e.transaction(["saves"], "readwrite").objectStore("saves").put({
                slot: a,
                data: m
            }).onsuccess = c
        }
    }
    function a(a, m, c) {
        var b = indexedDB.open("_C2SaveStates");
        b.onupgradeneeded = h;
        b.onerror = c;
        b.onsuccess = function(b) {
            b = b.target.result;
            b.onerror = c;
            var e = b.transaction(["saves"]).objectStore("saves").get(a);
            e.onsuccess = function() {
                e.result ? m(e.result.data) : m(null)
            }
        }
    }
    function b() {
        C("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location += "?continuous"
    }
    function f(a) {
        var m, c = {};
        for (m in a) ! a.hasOwnProperty(m) || a[m] instanceof da || a[m] && "undefined" !== typeof a[m].fy || (c[m] = a[m]);
        return c
    }
    d.prototype.Jw = function() {
        var a = this,
        m;
        m = this.zf ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
        m.open("GET", "./static/data.js", !0);
        var c = !1;
        if (!this.xa && "response" in m && "responseType" in m) try {
            m.responseType = "json",
            c = "json" === m.responseType
        } catch(b) {
            c = !1
        }
        if (!c && "responseType" in m) try {
            m.responseType = "text"
        } catch(e) {}
        if ("overrideMimeType" in m) try {
            m.overrideMimeType("application/json; charset=utf-8")
        } catch(l) {}
        m.onload = function() {
            if (c) a.pm(m.response);
            else if (a.Jc) {
                var b = m.responseText,
                b = b.substr(b.indexOf("{"));
                a.pm(JSON.parse(b))
            } else a.pm(JSON.parse(m.responseText))
        };
        m.onerror = function(a) {
            ea("Error requesting data.js:");
            ea(a)
        };
        m.send()
    };
    d.prototype.Qv = function() {
        var a = this,
        m, c, b, e, l, g, n, f, d;
        this.devicePixelRatio = (this.wf = (!this.xa || this.Jc) && this.mx && !this.zj) ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Gb();
        c = !(!this.Yu && (!this.el || this.Xd || this.fm || this.zf || this.ph || this.wc || this.qp));
        0 < this.hc && this.setSize(k(), p(), !0);
        try {
            this.wu && (this.vc || this.Jc || !this.xa) && (m = {
                alpha: c,
                depth: !1,
                antialias: !1,
                failIfMajorPerformanceCaveat: !0
            },
            this.A = this.canvas.getContext("webgl", m) || this.canvas.getContext("experimental-webgl", m))
        } catch(h) {}
        if (this.A) {
            this.xa || (this.Eb = document.createElement("canvas"), jQuery(this.Eb).appendTo(this.canvas.parentNode), this.Eb.oncontextmenu = function() {
                return ! 1
            },
            this.Eb.onselectstart = function() {
                return ! 1
            },
            this.Eb.width = this.Xi, this.Eb.height = this.Wi, jQuery(this.Eb).css({
                width: this.Xi + "px",
                height: this.Wi + "px"
            }), this.xq(), this.Lm = this.Eb.getContext("2d"));
            this.D = new eb(this.A, this.Ge);
            this.D.Re(this.canvas.width, this.canvas.height);
            this.D.Ko = 0 !== this.uu;
            this.wa = null;
            this.canvas.addEventListener("webglcontextlost",
            function(m) {
                m.preventDefault();
                a.mw();
                C("[Construct 2] WebGL context lost");
                window.cr_setSuspended(!0)
            },
            !1);
            this.canvas.addEventListener("webglcontextrestored",
            function() {
                a.D.kp();
                a.D.Re(a.D.width, a.D.height, !0);
                a.xc = null;
                a.nc = null;
                a.Gl[0] = null;
                a.Gl[1] = null;
                a.nw();
                a.la = !0;
                C("[Construct 2] WebGL context restored");
                window.cr_setSuspended(!1)
            },
            !1);
            m = 0;
            for (c = this.B.length; m < c; m++) for (l = this.B[m], b = 0, e = l.P.length; b < e; b++) n = l.P[b],
            n.Fb = this.D.Rl(n.id),
            this.Mg = this.Mg || this.D.Yh(n.Fb);
            m = 0;
            for (c = this.dd.length; m < c; m++) {
                f = this.dd[m];
                b = 0;
                for (e = f.P.length; b < e; b++) n = f.P[b],
                n.Fb = this.D.Rl(n.id);
                b = 0;
                for (e = f.aa.length; b < e; b++) for (d = f.aa[b], l = 0, g = d.P.length; l < g; l++) n = d.P[l],
                n.Fb = this.D.Rl(n.id),
                this.Mg = this.Mg || this.D.Yh(n.Fb)
            }
        } else {
            if (0 < this.hc && this.xb) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return ! 1
                };
                document.onselectstart = function() {
                    return ! 1
                };
                this.wa = AppMobi.canvas.getContext("2d");
                try {
                    this.wa.samplingMode = this.ja ? "smooth": "sharp",
                    this.wa.globalScale = 1,
                    this.wa.HTML5CompatibilityMode = !0,
                    this.wa.imageSmoothingEnabled = this.ja
                } catch(t) {}
                0 !== this.width && 0 !== this.height && (this.wa.width = this.width, this.wa.height = this.height)
            }
            this.wa || (m = this.vc ? {
                antialias: !!this.ja,
                alpha: c
            }: {
                alpha: c
            },
            this.wa = this.canvas.getContext("2d", m), this.wa.webkitImageSmoothingEnabled = this.ja, this.wa.mozImageSmoothingEnabled = this.ja, this.wa.msImageSmoothingEnabled = this.ja, this.wa.imageSmoothingEnabled = this.ja);
            this.Lm = this.Eb = null
        }
        this.Dk = function() {
            a.Ta(!1)
        };
        window == window.top || this.xa || this.fm || this.zf || (document.addEventListener("mousedown",
        function() {
            window.focus()
        },
        !0), document.addEventListener("touchstart",
        function() {
            window.focus()
        },
        !0));
        "undefined" !== typeof cr_is_preview && (this.vc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (C("Reloading for continuous preview"), this.Lj = "__c2_continuouspreview", this.ki = !0), this.vw && !this.Ge && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            a.setSuspended(!0)
        })));
        this.xa || (m = function(a) {
            db(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur && document.activeElement.blur()
        },
        window.navigator.pointerEnabled ? document.addEventListener("pointerdown", m) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", m) : document.addEventListener("touchstart", m), document.addEventListener("mousedown", m));
        0 === this.hc && this.wf && 1 < this.devicePixelRatio && this.setSize(this.Oa, this.Na, !0);
        this.Zq();
        this.Hv();
        this.go();
        this.za = {}
    };
    d.prototype.setSize = function(a, m, c) {
        var b = 0,
        e = 0,
        l = 0,
        g = 0,
        g = 0,
        n = this.bw && this.sp && !navigator.standalone && !this.xa && !this.wc;
        n && (m += 60);
        if (this.zh !== a || this.yh !== m || c) {
            this.zh = a;
            this.yh = m;
            var f = this.hc,
            d = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.rh) && !this.wc;
            if (d || 0 !== this.hc || c) d && 0 < this.lf && (f = this.lf),
            c = this.devicePixelRatio,
            4 <= f ? (l = this.Oa / this.Na, a / m > l ? (l *= m, 5 === f ? (g = l * c / this.Oa, 1 < g ? g = Math.floor(g) : 1 > g && (g = 1 / Math.ceil(1 / g)), l = this.Oa * g / c, g = this.Na * g / c, b = (a - l) / 2, e = (m - g) / 2, a = l, m = g) : (b = (a - l) / 2, a = l)) : (g = a / l, 5 === f ? (g = g * c / this.Na, 1 < g ? g = Math.floor(g) : 1 > g && (g = 1 / Math.ceil(1 / g)), l = this.Oa * g / c, g = this.Na * g / c, b = (a - l) / 2, e = (m - g) / 2, a = l) : e = (m - g) / 2, m = g), d && !this.Xd && (e = b = 0)) : this.Xd && this.rh && 0 === this.So && (b = Math.floor((a - this.Oa) / 2), e = Math.floor((m - this.Na) / 2), a = this.Oa, m = this.Na),
            2 > f && (this.Rg = c),
            this.wf && this.vp && 1 < c && (1024 <= a && (a = 1023), 1024 <= m && (m = 1023)),
            this.Xi = Math.round(a),
            this.Wi = Math.round(m),
            this.width = Math.round(a * c),
            this.height = Math.round(m * c),
            this.la = !0,
            this.or ? (this.Z = this.width, this.Y = this.height, this.Gc = !0) : this.width < this.Oa && this.height < this.Na || 1 === f ? (this.Z = this.width, this.Y = this.height, this.Gc = !0) : (this.Z = this.Oa, this.Y = this.Na, this.Gc = !1, 2 === f ? (l = this.Oa / this.Na, f = this.zh / this.yh, f < l ? this.Z = this.Y * f: f > l && (this.Y = this.Z / f)) : 3 === f && (l = this.Oa / this.Na, f = this.zh / this.yh, f > l ? this.Z = this.Y * f: f < l && (this.Y = this.Z / f))),
            this.wo && !this.xa && (jQuery(this.wo).css({
                width: Math.round(a) + "px",
                height: Math.round(m) + "px",
                "margin-left": Math.floor(b) + "px",
                "margin-top": Math.floor(e) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(m) + "px"
            })),
            this.canvas && (this.canvas.width = Math.round(a * c), this.canvas.height = Math.round(m * c), this.Jc ? (this.canvas.style.left = Math.floor(b) + "px", this.canvas.style.top = Math.floor(e) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(m) + "px") : this.wf && !this.xa && jQuery(this.canvas).css({
                width: Math.round(a) + "px",
                height: Math.round(m) + "px"
            })),
            this.Eb && (this.Eb.width = Math.round(a), this.Eb.height = Math.round(m), jQuery(this.Eb).css({
                width: Math.round(a) + "px",
                height: Math.round(m) + "px"
            })),
            this.D && this.D.Re(Math.round(a * c), Math.round(m * c)),
            this.xb && this.wa && (this.wa.width = Math.round(a), this.wa.height = Math.round(m)),
            this.wa && (this.wa.webkitImageSmoothingEnabled = this.ja, this.wa.mozImageSmoothingEnabled = this.ja, this.wa.msImageSmoothingEnabled = this.ja, this.wa.imageSmoothingEnabled = this.ja),
            this.Zq(),
            this.xa || !n && !this.jm || window.setTimeout(function() {
                window.scrollTo(0, 1)
            },
            100)
        }
    };
    d.prototype.Zq = function() {
        if (this.Ot && 0 !== this.Jm) {
            var a = "portrait";
            2 === this.Jm && (a = "landscape");
            screen.orientation && screen.orientation.lock ? screen.orientation.lock(a) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
        }
    };
    d.prototype.mw = function() {
        this.D.Xt();
        this.hm = !0;
        var a, m, c;
        a = 0;
        for (m = this.B.length; a < m; a++) c = this.B[a],
        c.Wj && c.Wj()
    };
    d.prototype.nw = function() {
        this.hm = !1;
        var a, m, c;
        a = 0;
        for (m = this.B.length; a < m; a++) c = this.B[a],
        c.Yj && c.Yj()
    };
    d.prototype.xq = function() {
        if (!this.xa) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.rh) && !this.wc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Eb).css(a)
        }
    };
    var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    d.prototype.setSuspended = function(a) {
        var m;
        if (a && !this.sh) for (C("[Construct 2] Suspending"), this.sh = !0, -1 !== this.jk && e && e(this.jk), -1 !== this.Ek && clearTimeout(this.Ek), a = 0, m = this.li.length; a < m; a++) this.li[a](!0);
        else if (!a && this.sh) {
            C("[Construct 2] Resuming");
            this.sh = !1;
            this.Ij = Oa();
            this.Ah = Oa();
            a = this.Ih = this.oj = 0;
            for (m = this.li.length; a < m; a++) this.li[a](!1);
            this.Ta(!1)
        }
    };
    d.prototype.fo = function(a) {
        this.li.push(a)
    };
    d.prototype.ne = function(a) {
        return this.Tj[a]
    };
    d.prototype.pm = function(a) {
        a && a.project || ea("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.Ro = a[1];
        this.hc = a[12];
        this.So = a[12];
        this.Oa = a[10];
        this.Na = a[11];
        this.tq = this.Oa / 2;
        this.uq = this.Na / 2;
        this.xa && !this.Jc && (4 <= a[12] || 0 === a[12]) && (C("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.So = this.hc = 3);
        this.yn = a[18];
        this.Ch = a[19];
        0 === this.Ch && (this.rg = new Image, this.rg.src = "./static/loading-logo.png");
        this.Nh = a[21];
        this.Tj = dc();
        this.Ed = new W(this);
        var m, c, b, e, l, g, n, f, d;
        m = 0;
        for (c = a[2].length; m < c; m++) n = a[2][m],
        b = this.ne(n[0]),
        fb(n, b.prototype),
        d = new b(this),
        d.tk = n[1],
        d.He = n[2],
        d.Yp = n[9],
        d.G && d.G(),
        this.plugins.push(d);
        this.Tj = dc();
        m = 0;
        for (c = a[3].length; m < c; m++) {
            n = a[3][m];
            l = this.ne(n[1]);
            d = null;
            b = 0;
            for (e = this.plugins.length; b < e; b++) if (this.plugins[b] instanceof l) {
                d = this.plugins[b];
                break
            }
            var h = new d.W(d);
            h.name = n[0];
            h.J = n[2];
            h.$l = n[3].slice(0);
            h.ox = n[3].length;
            h.Pt = n[4];
            h.$u = n[5];
            h.ca = n[11];
            h.J ? (h.vg = [], h.Sd = this.Yg++, h.Ja = null) : (h.vg = null, h.Sd = -1, h.Ja = []);
            h.kj = null;
            h.eg = null;
            h.Mo = null;
            h.Ub = !1;
            h.fc = null;
            n[6] ? (h.Ak = n[6][0], h.qn = n[6][1], h.ni = n[6][2]) : (h.Ak = null, h.qn = 0, h.ni = 0);
            h.ec = n[7] ? n[7] : null;
            h.index = m;
            h.c = [];
            h.aj = [];
            h.Ue = [new gb(h)];
            h.Od = 0;
            h.Cc = null;
            h.du = 0;
            h.Gg = !0;
            h.Jk = hb;
            h.Xo = ib;
            h.pv = jb;
            h.U = kb;
            h.Zh = lb;
            h.ae = mb;
            h.Qc = nb;
            h.qj = ob;
            h.Hl = pb;
            h.Ol = qb;
            h.Jd = rb;
            h.Yo = sb;
            h.Ti = new Za(this.Oa, this.Na);
            h.Di = !0;
            h.Ei = !1;
            h.za = {};
            h.toString = tb;
            h.Wa = [];
            b = 0;
            for (e = n[8].length; b < e; b++) {
                f = n[8][b];
                var t = this.ne(f[1]),
                u = null;
                l = 0;
                for (g = this.Wa.length; l < g; l++) if (this.Wa[l] instanceof t) {
                    u = this.Wa[l];
                    break
                }
                u || (u = new t(this), u.Cm = [], u.Sj = new da, u.G && u.G(), this.Wa.push(u), ec && u instanceof ec && (this.Rq = u)); - 1 === u.Cm.indexOf(h) && u.Cm.push(h);
                l = new u.W(u, h);
                l.name = f[0];
                l.ca = f[2];
                l.G();
                h.Wa.push(l)
            }
            h.global = n[9];
            h.dm = n[10];
            h.P = [];
            b = 0;
            for (e = n[12].length; b < e; b++) h.P.push({
                id: n[12][b][0],
                name: n[12][b][1],
                Fb: -1,
                Bb: !0,
                index: b
            });
            h.uy = n[13];
            this.yn && !h.J && !h.dm && d.He || h.G();
            h.name && (this.types[h.name] = h);
            this.B.push(h);
            d.tk && (b = new d.O(h), b.uid = this.Nh++, b.Aq = this.$p++, b.rf = 0, b.fh = ub, b.toString = vb, b.q = n[14], b.G(), h.c.push(b), this.Ke[b.uid.toString()] = b)
        }
        m = 0;
        for (c = a[4].length; m < c; m++) for (l = a[4][m], g = this.B[l[0]], b = 1, e = l.length; b < e; b++) n = this.B[l[b]],
        n.Ja.push(g),
        g.vg.push(n);
        m = 0;
        for (c = a[27].length; m < c; m++) {
            l = a[27][m];
            g = [];
            b = 0;
            for (e = l.length; b < e; b++) g.push(this.B[l[b]]);
            b = 0;
            for (e = g.length; b < e; b++) g[b].Ub = !0,
            g[b].fc = g
        }
        if (0 < this.Yg) for (m = 0, c = this.B.length; m < c; m++) if (n = this.B[m], !n.J && n.Ja.length) {
            n.kj = Array(this.Yg);
            n.eg = Array(this.Yg);
            n.Mo = Array(this.Yg);
            h = [];
            b = u = t = f = 0;
            for (e = n.Ja.length; b < e; b++) for (d = n.Ja[b], n.kj[d.Sd] = f, f += d.ox, n.eg[d.Sd] = t, t += d.Pt, n.Mo[d.Sd] = u, u += d.$u, l = 0, g = d.P.length; l < g; l++) h.push(sa({},
            d.P[l]));
            n.P = h.concat(n.P);
            b = 0;
            for (e = n.P.length; b < e; b++) n.P[b].index = b
        }
        m = 0;
        for (c = a[5].length; m < c; m++) n = a[5][m],
        b = new zb(this, n),
        this.om[b.name] = b,
        this.dd.push(b);
        m = 0;
        for (c = a[6].length; m < c; m++) n = a[6][m],
        b = new Ab(this, n),
        this.yl[b.name] = b,
        this.Rd.push(b);
        m = 0;
        for (c = this.Rd.length; m < c; m++) this.Rd[m].Sa();
        m = 0;
        for (c = this.Rd.length; m < c; m++) this.Rd[m].vn();
        m = 0;
        for (c = this.Hk.length; m < c; m++) this.Hk[m].Sa();
        this.Hk.length = 0;
        this.Nt = a[7];
        this.Cl = a[8];
        this.wd = a[9];
        this.Rg = 1;
        this.wu = a[13];
        this.ja = a[14];
        this.el = a[15];
        this.mx = a[17];
        this.Jm = a[20];
        this.Ot = 0 < this.Jm;
        this.vw = a[22];
        this.Gc = this.or = a[23];
        this.uu = a[24];
        this.Bw = a[25];
        this.vk = Date.now();
        this.Tj.length = 0;
        this.Qv()
    };
    var c = !1;
    d.prototype.Cn = function(a, m) {
        a.cocoonLazyLoad = !0;
        a.onerror = function(m) {
            c = a.qo = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", m)
        };
        this.Jc ? a.src = m: a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(m,
        function(m) {
            a.src = m
        },
        function(b) {
            c = a.qo = !0;
            console && console.error && console.error("Error extracting image '" + m + "' from expansion file: ", b)
        }) : a.src = m);
        this.Pg.push(a)
    };
    d.prototype.Xu = function(a) {
        var m, c;
        m = 0;
        for (c = this.Pg.length; m < c; m++) if (this.Pg[m].$t === a) return this.Pg[m];
        return null
    };
    var g = 0,
    q = !1;
    d.prototype.Hv = function() {
        this.Yf && (g = this.Yf.Ww(this.Nt))
    };
    d.prototype.no = function() {
        var a = g,
        m = 0,
        c = 0,
        b = !0,
        e, l, c = 0;
        for (e = this.Pg.length; c < e; c++) {
            l = this.Pg[c];
            var n = l.Bo;
            if (!n || 0 >= n) n = 5E4;
            a += n;
            l.src && (l.complete || l.loaded) && !l.qo ? m += n: b = !1
        }
        b && this.Bw && this.Yf && (q || (this.Yf.Zw(), q = !0), c = this.Yf.qv(), m += c, c < g && (b = !1));
        this.ed = 0 == a ? 0 : m / a;
        return b
    };
    d.prototype.go = function() {
        if (this.wa || this.D) {
            var a = this.wa || this.Lm;
            this.Eb && this.xq();
            this.ed = 0;
            this.Ap = -1;
            if (this.no()) this.Iv();
            else {
                var m = Date.now() - this.vk;
                if (a) {
                    var b = this.width,
                    e = this.height,
                    l = this.devicePixelRatio;
                    this.Eb && (b = this.Xi, e = this.Wi, l = 1);
                    if (3 !== this.Ch && (this.vc || 500 <= m && this.Ap != this.ed)) {
                        a.clearRect(0, 0, b, e);
                        var m = b / 2,
                        e = e / 2,
                        b = 0 === this.Ch && this.rg.complete,
                        n = 40 * l,
                        g = 0,
                        f = 80 * l,
                        d;
                        b && (f = this.rg.width * l, d = this.rg.height * l, n = f / 2, g = d / 2, a.drawImage(this.rg, S(m - n), S(e - g), f, d));
                        1 >= this.Ch ? (m = S(m - n) + .5, e = S(e + (g + (b ? 12 * l: 0))) + .5, a.fillStyle = c ? "red": "DodgerBlue", a.fillRect(m, e, Math.floor(f * this.ed), 6 * l), a.strokeStyle = "black", a.strokeRect(m, e, f, 6 * l), a.strokeStyle = "white", a.strokeRect(m - 1 * l, e - 1 * l, f + 2 * l, 8 * l)) : 2 === this.Ch && (a.font = this.Jc ? "12pt ArialMT": "12pt Arial", a.fillStyle = c ? "#f00": "#999", a.ty = "middle", l = Math.round(100 * this.ed) + "%", b = a.measureText ? a.measureText(l) : null, a.fillText(l, m - (b ? b.width: 0) / 2, e))
                    }
                    this.Ap = this.ed
                }
                setTimeout(function(a) {
                    return function() {
                        a.go()
                    }
                } (this), this.vc ? 10 : 100)
            }
        }
    };
    d.prototype.Iv = function() {
        this.Eb && (this.canvas.parentNode.removeChild(this.Eb), this.Eb = this.Lm = null);
        this.vk = Date.now();
        this.Ah = Oa();
        var a, m, c;
        if (this.yn) for (a = 0, m = this.B.length; a < m; a++) c = this.B[a],
        c.J || c.dm || !c.ya.He || c.G();
        else this.ng = !1;
        a = 0;
        for (m = this.dd.length; a < m; a++) this.dd[a].au();
        2 <= this.hc && (a = this.Oa / this.Na, m = this.width / this.height, this.Rg = 2 !== this.hc && m > a || 2 === this.hc && m < a ? this.height / this.Na: this.width / this.Oa);
        this.Ro ? this.om[this.Ro].kn() : this.dd[0].kn();
        this.yn || (this.Gf = 1, this.trigger(W.prototype.d.Nn, null));
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (m = this.B.length; a < m; a++) c = this.B[a],
        c.lw && c.lw();
        this.Ta(!1);
        this.xb && AppMobi.webview.execute("onGameReady();")
    };
    var v = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    d.prototype.Ta = function(a) {
        if (this.ta) {
            var m = Oa();
            if (this.Kv && this.Qm && 29 > m - this.lm) this.Qm = !1,
            this.lm = m,
            v ? this.jk = v(this.Dk, this.canvas) : this.Ek = setTimeout(this.Dk, this.Ge ? 1 : 16);
            else {
                this.Qm = !0;
                this.lm = m;
                var c = this.hc,
                b = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.wc; (b || this.rh) && 0 < this.lf && (c = this.lf);
                0 < c && (!this.Fj || window.self !== window.top) && (c = window.innerHeight, this.zh === window.innerWidth && this.yh === c || this.setSize(k(), p()));
                this.xa || (b ? (this.mj || (this.Fl = jQuery(this.canvas).css("margin") || "0", this.mj = !0), this.oh || this.Xd || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.mj ? (this.oh || this.Xd || jQuery(this.canvas).css("margin", this.Fl), this.Fl = "", this.mj = !1, 0 === this.hc && this.setSize(Math.round(this.gq / this.devicePixelRatio), Math.round(this.fq / this.devicePixelRatio), !0)) : (this.gq = this.width, this.fq = this.height));
                this.ng && (b = this.no(), this.Gf = this.ed, b && (this.ng = !1, this.ed = 1, this.trigger(W.prototype.d.Nn, null)));
                this.gw(); ! this.la && !this.vc || this.hm || this.ki || a || (this.la = !1, this.D ? this.Ec() : this.Pd(), this.uk && (this.canvas && this.canvas.toDataURL && (this.canvas.toDataURL(this.uk[0], this.uk[1]), this.trigger(W.prototype.d.us, null)), this.uk = null));
                this.ly || (this.pi++, this.ij++, this.oj++);
                this.Ih += Oa() - m;
                this.sh || a || (v ? this.jk = v(this.Dk, this.canvas) : this.Ek = setTimeout(this.Dk, this.Ge ? 1 : 16))
            }
        }
    };
    d.prototype.gw = function() {
        var a, m, c, b, e, l, n, g, f;
        a = Oa();
        1E3 <= a - this.Ah && (this.Ah += 1E3, this.El = this.oj, this.oj = 0, this.ml = this.Ih, this.Ih = 0);
        this.Vp && (0 !== this.Ij && (m = a - this.Ij, 0 !== m || this.Tv ? (this.Qd = m / 1E3, .5 < this.Qd ? this.Qd = 0 : .1 < this.Qd && (this.Qd = .1)) : (10 <= this.vy && (this.Vp = !1), this.Qd = 1 / 60)), this.Ij = a);
        this.Ce = this.Qd * this.ge;
        this.lc.add(this.Ce);
        this.Hd.add(this.Qd);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.rh) && !this.wc;
        2 <= this.hc || a && 0 < this.lf ? (m = this.Oa / this.Na, c = this.width / this.height, b = this.hc, a && 0 < this.lf && (b = this.lf), this.Rg = 2 !== b && c > m || 2 === b && c < m ? this.height / this.Na: this.width / this.Oa, this.ta && (this.ta.Zm(this.ta.scrollX), this.ta.$m(this.ta.scrollY))) : this.Rg = this.wf ? this.devicePixelRatio: 1;
        this.Gb();
        this.ad++;
        this.Ed.Mw();
        this.ad--;
        this.Gb();
        this.ad++;
        c = this.dq.ke();
        a = 0;
        for (m = c.length; a < m; a++) c[a].ny();
        a = 0;
        for (m = this.B.length; a < m; a++) if (n = this.B[a], !n.J && (n.Wa.length || n.Ja.length)) for (c = 0, b = n.c.length; c < b; c++) for (g = n.c[c], e = 0, l = g.T.length; e < l; e++) g.T[e].Ta();
        a = 0;
        for (m = this.B.length; a < m; a++) if (n = this.B[a], !n.J && (n.Wa.length || n.Ja.length)) for (c = 0, b = n.c.length; c < b; c++) for (g = n.c[c], e = 0, l = g.T.length; e < l; e++) f = g.T[e],
        f.Aw && f.Aw();
        c = this.Em.ke();
        a = 0;
        for (m = c.length; a < m; a++) c[a].Ta();
        this.ad--;
        this.Lv();
        for (a = 0; this.df && 10 > a++;) this.Ho(this.df);
        a = 0;
        for (m = this.Rd.length; a < m; a++) this.Rd[a].Wl = !1;
        this.ta.jf && this.ta.jf.eb();
        this.Hw.length = 0;
        this.ad++;
        a = 0;
        for (m = this.B.length; a < m; a++) if (n = this.B[a], !n.J && (n.Wa.length || n.Ja.length)) for (c = 0, b = n.c.length; c < b; c++) for (g = n.c[c], e = 0, l = g.T.length; e < l; e++) f = g.T[e],
        f.Jg && f.Jg();
        c = this.Fm.ke();
        a = 0;
        for (m = c.length; a < m; a++) c[a].Jg();
        this.ad--
    };
    d.prototype.Ho = function(a) {
        var m = this.ta;
        this.ta.$w();
        var c, b, e, l, n, g, f;
        if (this.D) for (c = 0, b = this.B.length; c < b; c++) n = this.B[c],
        n.J || !n.Ik || n.global && 0 !== n.c.length || -1 !== a.mh.indexOf(n) || n.Ik();
        m == a && (this.Ed.ac.length = 0);
        a.kn();
        c = 0;
        for (b = this.B.length; c < b; c++) if (n = this.B[c], n.global || n.ya.tk) for (a = 0, m = n.c.length; a < m; a++) if (g = n.c[a], g.Vj && g.Vj(), g.T) for (e = 0, l = g.T.length; e < l; e++) f = g.T[e],
        f.Vj && f.Vj();
        this.la = !0;
        this.Gb()
    };
    d.prototype.oi = function(a) {
        this.Em.add(a)
    };
    d.prototype.cx = function(a) {
        this.Fm.add(a)
    };
    d.prototype.bh = function(a) {
        return a && -1 !== a.Mh ? this.Qd * a.Mh: this.Ce
    };
    d.prototype.Pd = function() {
        this.ta.Pd(this.wa);
        this.xb && this.wa.present()
    };
    d.prototype.Ec = function() {
        this.ta.Ec(this.D);
        this.D.Cw()
    };
    d.prototype.co = function(a) {
        a && this.ej.push(a)
    };
    d.prototype.Iw = function(a) {
        xa(this.ej, a)
    };
    d.prototype.dh = function(a) {
        a = a.toString();
        return this.Ke.hasOwnProperty(a) ? this.Ke[a] : null
    };
    var l = [];
    d.prototype.me = function(a) {
        var m, c;
        m = a.type.name;
        var b = null;
        if (this.ff.hasOwnProperty(m)) {
            if (b = this.ff[m], b.contains(a)) return
        } else b = l.length ? l.pop() : new da,
        this.ff[m] = b;
        b.add(a);
        this.Fe = !0;
        if (a.Ub) for (m = 0, c = a.siblings.length; m < c; m++) this.me(a.siblings[m]);
        this.cm && b.Ng.push(a);
        this.ad++;
        this.trigger(Object.getPrototypeOf(a.type.ya).d.Ln, a);
        this.ad--
    };
    d.prototype.Gb = function() {
        if (this.Fe) {
            var a, m, c, b, e, l;
            this.cm = !0;
            c = 0;
            for (e = this.$c.length; c < e; ++c) for (a = this.$c[c], m = a.type, m.c.push(a), b = 0, l = m.Ja.length; b < l; ++b) m.Ja[b].c.push(a),
            m.Ja[b].Gg = !0;
            this.$c.length = 0;
            this.bs();
            Na(this.ff);
            this.Fe = this.cm = !1
        }
    };
    d.prototype.bs = function() {
        for (var a in this.ff) this.ff.hasOwnProperty(a) && this.Br(this.ff[a])
    };
    d.prototype.Br = function(a) {
        var m = a.ke(),
        c = m[0].type,
        b,
        e,
        n,
        g,
        f,
        d;
        Ra(c.c, a);
        c.Gg = !0;
        0 === c.c.length && (c.Ei = !1);
        b = 0;
        for (e = c.Ja.length; b < e; ++b) d = c.Ja[b],
        Ra(d.c, a),
        d.Gg = !0;
        b = 0;
        for (e = this.Ed.ac.length; b < e; ++b) if (f = this.Ed.ac[b], f.Qb.hasOwnProperty(c.index) && Ra(f.Qb[c.index].Wd, a), !c.J) for (n = 0, g = c.Ja.length; n < g; ++n) d = c.Ja[n],
        f.Qb.hasOwnProperty(d.index) && Ra(f.Qb[d.index].Wd, a); (b = m[0].j) && Ra(b.c, a);
        for (b = 0; b < m.length; ++b) this.Ar(m[b], c);
        a.clear();
        l.push(a);
        this.la = !0
    };
    d.prototype.Ar = function(a, c) {
        var b, e, l;
        b = 0;
        for (e = this.ej.length; b < e; ++b) this.ej[b](a);
        a.Si && c.Ti.update(a, a.Si, null);
        if (b = a.j) xa(b.c, a),
        b.rc = !0;
        if (a.T) for (b = 0, e = a.T.length; b < e; ++b) l = a.T[b],
        l.Le && l.Le(),
        l.behavior.Sj.remove(a);
        this.dq.remove(a);
        this.Em.remove(a);
        this.Fm.remove(a);
        a.Le && a.Le();
        this.Ke.hasOwnProperty(a.uid.toString()) && delete this.Ke[a.uid.toString()];
        this.Uj--;
        100 > c.aj.length && c.aj.push(a)
    };
    d.prototype.Co = function(a, c, b, e) {
        if (a.J) {
            var l = S(Math.random() * a.vg.length);
            return this.Co(a.vg[l], c, b, e)
        }
        return a.Cc ? this.Be(a.Cc, c, !1, b, e, !1) : null
    };
    var t = [];
    d.prototype.Be = function(a, c, b, e, l, n) {
        var g, f, d, h;
        if (!a) return null;
        var u = this.B[a[1]],
        v = u.ya.He;
        if (this.ng && v && !u.dm || v && !this.D && 11 === a[0][11]) return null;
        var k = c;
        v || (c = null);
        var q;
        u.aj.length ? (q = u.aj.pop(), q.Yb = !0, u.ya.O.call(q, u)) : (q = new u.ya.O(u), q.Yb = !1);
        q.uid = b && !n ? a[2] : this.Nh++;
        this.Ke[q.uid.toString()] = q;
        q.Aq = this.$p++;
        q.rf = u.c.length;
        g = 0;
        for (f = this.$c.length; g < f; ++g) this.$c[g].type === u && q.rf++;
        q.fh = ub;
        d = a[3];
        if (q.Yb) Na(q.za);
        else {
            q.za = {};
            if ("undefined" !== typeof cr_is_preview) for (q.np = [], q.np.length = d.length, g = 0, f = d.length; g < f; g++) q.np[g] = d[g][1];
            q.nb = [];
            q.nb.length = d.length
        }
        g = 0;
        for (f = d.length; g < f; g++) q.nb[g] = d[g][0];
        if (v) {
            var r = a[0];
            q.x = fa(e) ? r[0] : e;
            q.y = fa(l) ? r[1] : l;
            q.z = r[2];
            q.width = r[3];
            q.height = r[4];
            q.depth = r[5];
            q.g = r[6];
            q.opacity = r[7];
            q.Lb = r[8];
            q.Mb = r[9];
            q.Rb = r[10];
            g = r[11]; ! this.D && u.P.length && (q.Rb = g);
            q.Ug = $a(q.Rb);
            this.A && ab(q, q.Rb, this.A);
            if (q.Yb) {
                g = 0;
                for (f = r[12].length; g < f; g++) for (d = 0, h = r[12][g].length; d < h; d++) q.La[g][d] = r[12][g][d];
                q.X.set(0, 0, 0, 0);
                q.Si.set(0, 0, -1, -1);
                q.Sb.Qf(q.X);
                q.il.length = 0
            } else {
                q.La = r[12].slice(0);
                g = 0;
                for (f = q.La.length; g < f; g++) q.La[g] = r[12][g].slice(0);
                q.na = [];
                q.oe = [];
                q.oe.length = u.P.length;
                q.X = new qa(0, 0, 0, 0);
                q.Si = new qa(0, 0, -1, -1);
                q.Sb = new ra;
                q.il = [];
                q.Da = Bb;
                q.ey = Cb;
                q.Tb = Db;
                q.ma = Eb;
                q.kr = Fb;
                q.Ic = Gb
            }
            q.Kg = !1;
            q.hx = 0;
            q.gx = 0;
            q.dx = null;
            14 === r.length && (q.Kg = !0, q.hx = r[13][0], q.gx = r[13][1], q.dx = r[13][2]);
            g = 0;
            for (f = u.P.length; g < f; g++) q.oe[g] = !0;
            q.je = Hb;
            q.je();
            q.lr = !!q.na.length;
            q.hl = !0;
            q.kl = !0;
            u.Di = !0;
            q.visible = !0;
            q.Mh = -1;
            q.j = c;
            q.Tf = c.c.length;
            "undefined" === typeof q.fa && (q.fa = null);
            this.la = q.ye = !0
        }
        q.toString = vb;
        var G;
        g = t.length = 0;
        for (f = u.Ja.length; g < f; g++) t.push.apply(t, u.Ja[g].Wa);
        t.push.apply(t, u.Wa);
        if (q.Yb) for (g = 0, f = t.length; g < f; g++) {
            var p = t[g];
            G = q.T[g];
            G.Yb = !0;
            p.behavior.O.call(G, p, q);
            r = a[4][g];
            d = 0;
            for (h = r.length; d < h; d++) G.q[d] = r[d];
            G.G();
            p.behavior.Sj.add(q)
        } else for (q.T = [], g = 0, f = t.length; g < f; g++) p = t[g],
        G = new p.behavior.O(p, q),
        G.Yb = !1,
        G.q = a[4][g].slice(0),
        G.G(),
        q.T.push(G),
        p.behavior.Sj.add(q);
        r = a[5];
        if (q.Yb) for (g = 0, f = r.length; g < f; g++) q.q[g] = r[g];
        else q.q = r.slice(0);
        this.$c.push(q);
        this.Fe = !0;
        c && (c.c.push(q), 1 !== c.Oc || 1 !== c.Pc) && (u.Ei = !0);
        this.Uj++;
        if (u.Ub) {
            if (q.Ub = !0, q.Yb ? q.siblings.length = 0 : q.siblings = [], !b && !n) {
                g = 0;
                for (f = u.fc.length; g < f; g++) if (u.fc[g] !== u) {
                    if (!u.fc[g].Cc) return null;
                    q.siblings.push(this.Be(u.fc[g].Cc, k, !1, v ? q.x: e, v ? q.y: l, !0))
                }
                g = 0;
                for (f = q.siblings.length; g < f; g++) for (q.siblings[g].siblings.push(q), d = 0; d < f; d++) g !== d && q.siblings[g].siblings.push(q.siblings[d])
            }
        } else q.Ub = !1,
        q.siblings = null;
        q.G();
        g = 0;
        for (f = q.T.length; g < f; g++) q.T[g].zw && q.T[g].zw();
        return q
    };
    d.prototype.sj = function(a) {
        var c, b;
        c = 0;
        for (b = this.ta.aa.length; c < b; c++) {
            var e = this.ta.aa[c];
            if (cb(e.name, a)) return e
        }
        return null
    };
    d.prototype.fg = function(a) {
        a = S(a);
        0 > a && (a = 0);
        a >= this.ta.aa.length && (a = this.ta.aa.length - 1);
        return this.ta.aa[a]
    };
    d.prototype.rj = function(a) {
        return H(a) ? this.fg(a) : this.sj(a.toString())
    };
    d.prototype.ll = function(a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].U().ba = !0
    };
    d.prototype.Zh = function(a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].Zh()
    };
    d.prototype.ae = function(a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].ae()
    };
    d.prototype.Qc = function(a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].Qc()
    };
    d.prototype.gr = function(a) {
        if (a.Di) {
            var c, b, e = a.c;
            c = 0;
            for (b = e.length; c < b; ++c) e[c].kr();
            e = this.$c;
            c = 0;
            for (b = e.length; c < b; ++c) e[c].type === a && e[c].kr();
            a.Di = !1
        }
    };
    d.prototype.Kl = function(a, c, b, e) {
        var g, l, n = a ? 1 !== a.Oc || 1 !== a.Pc: !1;
        if (c.J) for (a = 0, g = c.vg.length; a < g; ++a) l = c.vg[a],
        n || l.Ei ? va(e, l.c) : (this.gr(l), l.Ti.Cq(b, e));
        else n || c.Ei ? va(e, c.c) : (this.gr(c), c.Ti.Cq(b, e))
    };
    d.prototype.cp = function(a, c, b, e) {
        var g, l;
        g = 0;
        for (l = c.length; g < l; ++g) this.Kl(a, c[g], b, e)
    };
    d.prototype.uv = function(a, c) {
        var b = this.Rq;
        b && this.cp(null, b.Cm, a, c)
    };
    d.prototype.zk = function(a, c, b) {
        var e = a.U(),
        g,
        l,
        n,
        f,
        d,
        h;
        if (e.ba) for (e.ba = !1, g = e.c.length = 0, f = a.c.length; g < f; g++) n = a.c[g],
        n.ma(),
        d = n.j.Jb(c, b, !0),
        h = n.j.Jb(c, b, !1),
        n.Tb(d, h) && e.c.push(n);
        else {
            g = l = 0;
            for (f = e.c.length; g < f; g++) n = e.c[g],
            n.ma(),
            d = n.j.Jb(c, b, !0),
            h = n.j.Jb(c, b, !1),
            n.Tb(d, h) && (e.c[l] = e.c[g], l++);
            e.c.length = l
        }
        a.Jd();
        return e.Vl()
    };
    d.prototype.ax = function(a, c) {
        if (! (a && c && a !== c && a.ye && c.ye)) return ! 1;
        a.ma();
        c.ma();
        var b = a.j,
        e = c.j,
        g, l, n, f, d, h, u, q;
        if (b === e || b.Oc === e.Oc && e.Pc === e.Pc && b.scale === e.scale && b.g === e.g && b.jd === e.jd) {
            if (!a.X.op(c.X) || !a.Sb.am(c.Sb) || a.Kg && c.Kg) return ! 1;
            if (a.Kg) return this.Uq(a, c);
            if (c.Kg) return this.Uq(c, a);
            u = a.fa && !a.fa.Af();
            g = c.fa && !c.fa.Af();
            if (!u && !g) return ! 0;
            u ? (a.fa.cf(a.width, a.height, a.g), u = a.fa) : (this.$b.Pf(a.Sb, a.x, a.y, a.width, a.height), u = this.$b);
            g ? (c.fa.cf(c.width, c.height, c.g), q = c.fa) : (this.$b.Pf(c.Sb, c.x, c.y, c.width, c.height), q = this.$b);
            return u.uf(q, c.x - a.x, c.y - a.y)
        }
        u = a.fa && !a.fa.Af();
        g = c.fa && !c.fa.Af();
        u ? (a.fa.cf(a.width, a.height, a.g), this.$b.Kq(a.fa)) : this.$b.Pf(a.Sb, a.x, a.y, a.width, a.height);
        u = this.$b;
        g ? (c.fa.cf(c.width, c.height, c.g), this.nn.Kq(c.fa)) : this.nn.Pf(c.Sb, c.x, c.y, c.width, c.height);
        q = this.nn;
        g = 0;
        for (l = u.fd; g < l; g++) n = 2 * g,
        f = n + 1,
        d = u.pb[n],
        h = u.pb[f],
        u.pb[n] = b.Nb(d + a.x, h + a.y, !0),
        u.pb[f] = b.Nb(d + a.x, h + a.y, !1);
        u.ma();
        g = 0;
        for (l = q.fd; g < l; g++) n = 2 * g,
        f = n + 1,
        d = q.pb[n],
        h = q.pb[f],
        q.pb[n] = e.Nb(d + c.x, h + c.y, !0),
        q.pb[f] = e.Nb(d + c.x, h + c.y, !1);
        q.ma();
        return u.uf(q, 0, 0)
    };
    var G = new ra;
    new qa(0, 0, 0, 0);
    var n = [];
    d.prototype.Uq = function(a, c) {
        var b, e, g, l, f = c.X,
        d = a.x,
        h = a.y;
        a.jv(f, n);
        var u = c.fa && !c.fa.Af();
        b = 0;
        for (e = n.length; b < e; ++b) if (g = n[b], l = g.Fw, f.pp(l, d, h) && (G.Qf(l), G.offset(d, h), G.am(c.Sb))) if (u) if (c.fa.cf(c.width, c.height, c.g), g.Wh) {
            if (g.Wh.uf(c.fa, c.x - (d + l.left), c.y - (h + l.top))) return n.length = 0,
            !0
        } else {
            if (this.$b.Pf(G, 0, 0, l.right - l.left, l.bottom - l.top), this.$b.uf(c.fa, c.x, c.y)) return n.length = 0,
            !0
        } else if (g.Wh) {
            if (this.$b.Pf(c.Sb, 0, 0, c.width, c.height), g.Wh.uf(this.$b, -(d + l.left), -(h + l.top))) return n.length = 0,
            !0
        } else return n.length = 0,
        !0;
        n.length = 0;
        return ! 1
    };
    d.prototype.on = function(a, c) {
        if (!c || !c.ye) return ! 1;
        c.ma();
        if (!c.X.op(a)) return ! 1;
        if (c.Kg) {
            c.jv(a, n);
            var b, e, g, l, f = c.x,
            d = c.y;
            b = 0;
            for (e = n.length; b < e; ++b) if (g = n[b], l = g.Fw, a.pp(l, f, d)) if (g.Wh) {
                if (this.$b.Qf(a, 0, 0), g.Wh.uf(this.$b, -(f + l.left), -(d + l.top))) return n.length = 0,
                !0
            } else return n.length = 0,
            !0;
            n.length = 0;
            return ! 1
        }
        G.Qf(a);
        if (!c.Sb.am(G)) return ! 1;
        if (!c.fa || c.fa.Af()) return ! 0;
        c.fa.cf(c.width, c.height, c.g);
        G.offset( - a.left, -a.top);
        this.$b.Pf(G, 0, 0, 1, 1);
        return c.fa.uf(this.$b, a.left - c.x, a.top - c.y)
    };
    d.prototype.$q = function(a, c) {
        if (!c) return ! 1;
        var b, e, g, l, n;
        b = 0;
        for (e = a.Wa.length; b < e; b++) if (a.Wa[b].behavior instanceof c) return ! 0;
        if (!a.J) for (b = 0, e = a.Ja.length; b < e; b++) for (n = a.Ja[b], g = 0, l = n.Wa.length; g < l; g++) if (n.Wa[g].behavior instanceof c) return ! 0;
        return ! 1
    };
    d.prototype.br = function(a) {
        return this.$q(a, Wb.Ox)
    };
    d.prototype.un = function(a) {
        return this.$q(a, Wb.Px)
    };
    var u = [];
    d.prototype.bx = function(a) {
        var c, b, e;
        this.uv(a, u);
        c = 0;
        for (b = u.length; c < b; ++c) if (e = u[c], e.za.solidEnabled && this.on(a, e)) return u.length = 0,
        e;
        u.length = 0;
        return null
    };
    var M = -1;
    d.prototype.trigger = function(a, c, b) {
        if (!this.ta) return ! 1;
        var e = this.ta.jf;
        if (!e) return ! 1;
        var g = !1,
        l, n, f;
        M++;
        var d = e.rl;
        n = 0;
        for (f = d.length; n < f; ++n) l = this.Xq(a, c, d[n], b),
        g = g || l;
        l = this.Xq(a, c, e, b);
        M--;
        return g || l
    };
    d.prototype.Xq = function(a, c, b, e) {
        var g = !1,
        l, n, f, d;
        if (c) for (f = this.sn(a, c, c.type.name, b, e), g = g || f, d = c.type.Ja, l = 0, n = d.length; l < n; ++l) f = this.sn(a, c, d[l].name, b, e),
        g = g || f;
        else f = this.sn(a, c, "system", b, e),
        g = g || f;
        return g
    };
    d.prototype.sn = function(a, c, b, e, g) {
        var l, n = !1,
        f = !1,
        f = "undefined" !== typeof g,
        d = (f ? e.Oo: e.Yq)[b];
        if (!d) return n;
        var h = null;
        e = 0;
        for (l = d.length; e < l; ++e) if (d[e].method == a) {
            h = d[e].Wg;
            break
        }
        if (!h) return n;
        a = f ? h[g] : h;
        if (!a) return null;
        e = 0;
        for (l = a.length; e < l; e++) g = a[e][0],
        f = a[e][1],
        f = this.Vu(c, b, g, f),
        n = n || f;
        return n
    };
    d.prototype.Vu = function(a, c, b, e) {
        var g, l, n = !1;
        this.tn++;
        var f = this.Ma().Ka;
        f && this.Zh(f.Se);
        var d = 1 < this.tn;
        this.Zh(b.Se);
        d && this.Ew();
        var h = this.hk(b);
        h.Ka = b;
        a && (g = this.types[c].U(), g.ba = !1, g.c.length = 1, g.c[0] = a, this.types[c].Jd());
        a = !0;
        if (b.parent) {
            c = h.Tq;
            for (g = b.parent; g;) c.push(g),
            g = g.parent;
            c.reverse();
            g = 0;
            for (l = c.length; g < l; g++) if (!c[g].Ow()) {
                a = !1;
                break
            }
        }
        a && (this.ij++, b.Nc ? b.Nw(e) : b.eb(), n = n || h.Ef);
        this.ck();
        d && this.yw();
        this.Qc(b.Se);
        f && this.Qc(f.Se);
        this.Fe && 0 === this.ad && 0 === M && !this.em && this.Gb();
        this.tn--;
        return n
    };
    d.prototype.Ll = function() {
        var a = this.Ma();
        return a.Ka.lb[a.Ya]
    };
    d.prototype.Ew = function() {
        this.Pj++;
        this.Pj >= this.vm.length && this.vm.push([])
    };
    d.prototype.yw = function() {
        this.Pj--
    };
    d.prototype.Vo = function() {
        return this.vm[this.Pj]
    };
    d.prototype.hk = function(a) {
        this.hj++;
        this.hj >= this.xl.length && this.xl.push(new Ib);
        var c = this.Ma();
        c.reset(a);
        return c
    };
    d.prototype.ck = function() {
        this.hj--
    };
    d.prototype.Ma = function() {
        return this.xl[this.hj]
    };
    d.prototype.$h = function() {
        this.Jh++;
        this.Jh >= this.tg.length && this.tg.push(aa({
            name: void 0,
            index: 0,
            Fa: !1
        }));
        var a = this.Ml();
        a.name = void 0;
        a.index = 0;
        a.Fa = !1;
        return a
    };
    d.prototype.Xh = function() {
        this.Jh--
    };
    d.prototype.Ml = function() {
        return this.tg[this.Jh]
    };
    d.prototype.Wo = function(a, c) {
        for (var b, e, g, l, n, f; c;) {
            b = 0;
            for (e = c.Tc.length; b < e; b++) if (f = c.Tc[b], f instanceof Jb && cb(a, f.name)) return f;
            c = c.parent
        }
        b = 0;
        for (e = this.Rd.length; b < e; b++) for (n = this.Rd[b], g = 0, l = n.De.length; g < l; g++) if (f = n.De[g], f instanceof Jb && cb(a, f.name)) return f;
        return null
    };
    d.prototype.Zo = function(a) {
        var c, b;
        c = 0;
        for (b = this.dd.length; c < b; c++) if (this.dd[c].ca === a) return this.dd[c];
        return null
    };
    d.prototype.gg = function(a) {
        var c, b;
        c = 0;
        for (b = this.B.length; c < b; c++) if (this.B[c].ca === a) return this.B[c];
        return null
    };
    d.prototype.kv = function(a) {
        var c, b;
        c = 0;
        for (b = this.pe.length; c < b; c++) if (this.pe[c].ca === a) return this.pe[c];
        return null
    };
    d.prototype.Lv = function() {
        var c = this,
        e = this.Ym,
        g = this.Yd,
        l = this.Lj,
        n = !1;
        this.Pq && (n = !0, e = "__c2_continuouspreview", this.Pq = !1);
        if (e.length) {
            this.Gb();
            g = this.Sw();
            if (window.indexedDB && !this.vc) r(e, g,
            function() {
                C("Saved state to IndexedDB storage (" + g.length + " bytes)");
                c.Yd = g;
                c.trigger(W.prototype.d.Xk, null);
                c.Yd = "";
                n && b()
            },
            function(a) {
                try {
                    localStorage.setItem("__c2save_" + e, g),
                    C("Saved state to WebStorage (" + g.length + " bytes)"),
                    c.Yd = g,
                    c.trigger(W.prototype.d.Xk, null),
                    c.Yd = "",
                    n && b()
                } catch(l) {
                    C("Failed to save game state: " + a + "; " + l)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + e, g),
                C("Saved state to WebStorage (" + g.length + " bytes)"),
                c.Yd = g,
                this.trigger(W.prototype.d.Xk, null),
                c.Yd = "",
                n && b()
            } catch(f) {
                C("Error saving to WebStorage: " + f)
            }
            this.Pb = this.Lj = this.Ym = ""
        }
        l.length && (window.indexedDB && !this.vc ? a(l,
        function(a) {
            a ? (c.Pb = a, C("Loaded state from IndexedDB storage (" + c.Pb.length + " bytes)")) : (c.Pb = localStorage.getItem("__c2save_" + l) || "", C("Loaded state from WebStorage (" + c.Pb.length + " bytes)"));
            c.ki = !1;
            c.Pb.length || c.trigger(W.prototype.d.Wk, null)
        },
        function() {
            c.Pb = localStorage.getItem("__c2save_" + l) || "";
            C("Loaded state from WebStorage (" + c.Pb.length + " bytes)");
            c.ki = !1;
            c.Pb.length || c.trigger(W.prototype.d.Wk, null)
        }) : (this.Pb = localStorage.getItem("__c2save_" + l) || "", C("Loaded state from WebStorage (" + this.Pb.length + " bytes)"), this.ki = !1, c.Pb.length || c.trigger(W.prototype.d.Wk, null)), this.Ym = this.Lj = "");
        this.Pb.length && (this.Gb(), this.fw(this.Pb), this.Yd = this.Pb, this.trigger(W.prototype.d.Cs, null), this.Pb = this.Yd = "")
    };
    d.prototype.Sw = function() {
        var a, c, b, e, g, l, n, d = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.lc.ea,
                walltime: this.Hd.ea,
                timescale: this.ge,
                tickcount: this.pi,
                execcount: this.ij,
                next_uid: this.Nh,
                running_layout: this.ta.ca,
                start_time_offset: Date.now() - this.vk
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        a = 0;
        for (c = this.B.length; a < c; a++) if (g = this.B[a], !g.J && !this.br(g)) {
            l = {
                instances: []
            };
            Ma(g.za) && (l.ex = f(g.za));
            b = 0;
            for (e = g.c.length; b < e; b++) l.instances.push(this.Xm(g.c[b]));
            d.types[g.ca.toString()] = l
        }
        a = 0;
        for (c = this.dd.length; a < c; a++) b = this.dd[a],
        d.layouts[b.ca.toString()] = b.rb();
        e = d.events.groups;
        a = 0;
        for (c = this.pe.length; a < c; a++) b = this.pe[a],
        e[b.ca.toString()] = this.hh[b.gh].of;
        c = d.events.cnds;
        for (n in this.ag) this.ag.hasOwnProperty(n) && (a = this.ag[n], Ma(a.za) && (c[n] = {
            ex: f(a.za)
        }));
        c = d.events.acts;
        for (n in this.Xf) this.Xf.hasOwnProperty(n) && (a = this.Xf[n], Ma(a.za) && (c[n] = {
            ex: a.za
        }));
        c = d.events.vars;
        for (n in this.Og) this.Og.hasOwnProperty(n) && (a = this.Og[n], a.Bj || a.parent && !a.vh || (c[n] = a.data));
        d.system = this.Ed.rb();
        return JSON.stringify(d)
    };
    d.prototype.Eq = function() {
        var a, c, b, e, g, l;
        this.Ke = {};
        a = 0;
        for (c = this.B.length; a < c; a++) if (b = this.B[a], !b.J) for (e = 0, g = b.c.length; e < g; e++) l = b.c[e],
        this.Ke[l.uid.toString()] = l
    };
    d.prototype.fw = function(a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            var c = a.rt;
            this.lc.reset();
            this.lc.ea = c.time;
            this.Hd.reset();
            this.Hd.ea = c.walltime || 0;
            this.ge = c.timescale;
            this.pi = c.tickcount;
            this.vk = Date.now() - c.start_time_offset;
            var b = c.running_layout;
            if (b !== this.ta.ca) if (b = this.Zo(b)) this.Ho(b);
            else return;
            var e, g, l, n, f, d, h;
            d = a.types;
            for (g in d) if (d.hasOwnProperty(g) && (n = this.gg(parseInt(g, 10))) && !n.J && !this.br(n)) {
                d[g].ex ? n.za = d[g].ex: Na(n.za);
                f = n.c;
                l = d[g].instances;
                b = 0;
                for (e = la(f.length, l.length); b < e; b++) this.Mj(f[b], l[b]);
                b = l.length;
                for (e = f.length; b < e; b++) this.me(f[b]);
                b = f.length;
                for (e = l.length; b < e; b++) {
                    f = null;
                    if (n.ya.He && (f = this.ta.tj(l[b].w.l), !f)) continue;
                    f = this.Be(n.Cc, f, !1, 0, 0, !0);
                    this.Mj(f, l[b])
                }
                n.Gg = !0
            }
            this.Gb();
            this.Eq();
            e = a.layouts;
            for (g in e) e.hasOwnProperty(g) && (b = this.Zo(parseInt(g, 10))) && b.Db(e[g]);
            e = a.events.groups;
            for (g in e) e.hasOwnProperty(g) && (b = this.kv(parseInt(g, 10))) && this.hh[b.gh] && (this.hh[b.gh].of = e[g]);
            b = a.events.cnds;
            for (g in b) b.hasOwnProperty(g) && this.ag.hasOwnProperty(g) && (this.ag[g].za = b[g].ex);
            b = a.events.acts;
            for (g in b) b.hasOwnProperty(g) && this.Xf.hasOwnProperty(g) && (this.Xf[g].za = b[g].ex);
            b = a.events.vars;
            for (g in b) b.hasOwnProperty(g) && this.Og.hasOwnProperty(g) && (this.Og[g].data = b[g]);
            this.Nh = c.next_uid;
            this.Ed.Db(a.system);
            b = 0;
            for (e = this.B.length; b < e; b++) if (n = this.B[b], !n.J) for (g = 0, a = n.c.length; g < a; g++) {
                f = n.c[g];
                if (n.Ub) for (d = f.fh(), c = f.siblings.length = 0, l = n.fc.length; c < l; c++) h = n.fc[c],
                n !== h && f.siblings.push(h.c[d]);
                f.Wc && f.Wc();
                if (f.T) for (c = 0, l = f.T.length; c < l; c++) d = f.T[c],
                d.Wc && d.Wc()
            }
            this.la = !0
        }
    };
    d.prototype.Xm = function(a, c) {
        var b, g, e, l, n;
        l = a.type;
        e = l.ya;
        var d = {};
        c ? d.c2 = !0 : d.uid = a.uid;
        Ma(a.za) && (d.ex = f(a.za));
        if (a.nb && a.nb.length) for (d.ivs = {},
        b = 0, g = a.nb.length; b < g; b++) d.ivs[a.type.$l[b].toString()] = a.nb[b];
        if (e.He) {
            e = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.j.ca,
                zi: a.Ic()
            };
            0 !== a.g && (e.a = a.g);
            1 !== a.opacity && (e.o = a.opacity);.5 !== a.Lb && (e.hX = a.Lb);.5 !== a.Mb && (e.hY = a.Mb);
            0 !== a.Rb && (e.bm = a.Rb);
            a.visible || (e.v = a.visible);
            a.ye || (e.ce = a.ye); - 1 !== a.Mh && (e.mts = a.Mh);
            if (l.P.length) for (e.fx = [], b = 0, g = l.P.length; b < g; b++) n = l.P[b],
            e.fx.push({
                name: n.name,
                active: a.oe[n.index],
                params: a.La[n.index]
            });
            d.w = e
        }
        if (a.T && a.T.length) for (d.behs = {},
        b = 0, g = a.T.length; b < g; b++) l = a.T[b],
        l.rb && (d.behs[l.type.ca.toString()] = l.rb());
        a.rb && (d.data = a.rb());
        return d
    };
    d.prototype.nv = function(a, c) {
        var b, e;
        b = 0;
        for (e = a.$l.length; b < e; b++) if (a.$l[b] === c) return b;
        return - 1
    };
    d.prototype.hv = function(a, c) {
        var b, e;
        b = 0;
        for (e = a.T.length; b < e; b++) if (a.T[b].type.ca === c) return b;
        return - 1
    };
    d.prototype.Mj = function(a, c, b) {
        var e, g, l, n, f;
        f = a.type;
        l = f.ya;
        if (b) {
            if (!c.c2) return
        } else a.uid = c.uid;
        c.ex ? a.za = c.ex: Na(a.za);
        if (g = c.ivs) for (e in g) g.hasOwnProperty(e) && (b = this.nv(f, parseInt(e, 10)), 0 > b || b >= a.nb.length || (a.nb[b] = g[e]));
        if (l.He) {
            l = c.w;
            a.j.ca !== l.l && (b = a.j, a.j = this.ta.tj(l.l), a.j ? (a.j.c.push(a), a.j.rc = !0, xa(b.c, a), b.rc = !0) : (a.j = b, this.me(a)));
            a.x = l.x;
            a.y = l.y;
            a.width = l.w;
            a.height = l.h;
            a.Tf = l.zi;
            a.g = l.hasOwnProperty("a") ? l.a: 0;
            a.opacity = l.hasOwnProperty("o") ? l.o: 1;
            a.Lb = l.hasOwnProperty("hX") ? l.hX: .5;
            a.Mb = l.hasOwnProperty("hY") ? l.hY: .5;
            a.visible = l.hasOwnProperty("v") ? l.v: !0;
            a.ye = l.hasOwnProperty("ce") ? l.ce: !0;
            a.Mh = l.hasOwnProperty("mts") ? l.mts: -1;
            a.Rb = l.hasOwnProperty("bm") ? l.bm: 0;
            a.Ug = $a(a.Rb);
            this.A && ab(a, a.Rb, this.A);
            a.Da();
            if (l.hasOwnProperty("fx")) for (b = 0, g = l.fx.length; b < g; b++) n = f.Ol(l.fx[b].name),
            0 > n || (a.oe[n] = l.fx[b].active, a.La[n] = l.fx[b].params);
            a.je()
        }
        if (f = c.behs) for (e in f) f.hasOwnProperty(e) && (l = this.hv(a, parseInt(e, 10)), 0 > l || a.T[l].Db(f[e]));
        c.data && a.Db(c.data)
    };
    Kb = function(a) {
        return new d(document.getElementById(a))
    };
    Lb = function(a, c) {
        return new d({
            dc: !0,
            width: a,
            height: c
        })
    };
    window.cr_createRuntime = Kb;
    window.cr_createDCRuntime = Lb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.qy = !0;
        document.body.appendChild(a);
        a = new d(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange",
        function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new d(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var k = document.getElementById("c2canvas");
    return k ? k.c2runtime: window.c2runtime ? window.c2runtime: null
};
window.cr_sizeCanvas = function(k, p) {
    if (0 !== k && 0 !== p) {
        var d = window.cr_getC2Runtime();
        d && d.setSize(k, p)
    }
};
window.cr_setSuspended = function(k) {
    var p = window.cr_getC2Runtime();
    p && p.setSuspended(k)
}; (function() {
    function k(a, b) {
        this.b = a;
        this.jf = null;
        this.scrollX = this.b.Oa / 2;
        this.scrollY = this.b.Na / 2;
        this.scale = 1;
        this.g = 0;
        this.$g = !0;
        this.name = b[0];
        this.width = b[1];
        this.height = b[2];
        this.cr = b[3];
        this.Nq = b[4];
        this.ca = b[5];
        var f = b[6],
        e,
        c;
        this.aa = [];
        this.mh = [];
        e = 0;
        for (c = f.length; e < c; e++) {
            var g = new Mb(this, f[e]);
            g.bq = e;
            this.aa.push(g)
        }
        f = b[7];
        this.tf = [];
        e = 0;
        for (c = f.length; e < c; e++) {
            var g = f[e],
            d = this.b.B[g[1]];
            d.Cc || (d.Cc = g);
            this.tf.push(g); - 1 === this.mh.indexOf(d) && this.mh.push(d)
        }
        this.P = [];
        this.na = [];
        this.La = [];
        e = 0;
        for (c = b[8].length; e < c; e++) this.P.push({
            id: b[8][e][0],
            name: b[8][e][1],
            Fb: -1,
            Bb: !0,
            index: e
        }),
        this.La.push(b[8][e][2].slice(0));
        this.je();
        this.ci = new qa(0, 0, 1, 1);
        this.Rm = new qa(0, 0, 1, 1);
        this.Ne = {}
    }
    function p(a, b) {
        return a.Tf - b.Tf
    }
    function d(a, b) {
        this.Aa = a;
        this.b = a.b;
        this.c = [];
        this.scale = 1;
        this.g = 0;
        this.gf = !1;
        this.he = new qa(0, 0, 0, 0);
        this.Wq = new ra;
        this.fb = this.Va = this.gb = this.Ua = 0;
        this.rc = !1;
        this.name = b[0];
        this.index = b[1];
        this.ca = b[2];
        this.visible = b[3];
        this.te = b[4];
        this.ie = b[5];
        this.Oc = b[6];
        this.Pc = b[7];
        this.opacity = b[8];
        this.Dl = b[9];
        this.jd = b[10];
        this.Rb = b[11];
        this.vu = b[12];
        this.Ug = "source-over";
        this.Hb = this.Ib = 0;
        this.Oe = !1;
        var f = b[13],
        e,
        c;
        this.ig = [];
        e = 0;
        for (c = f.length; e < c; e++) {
            var g = f[e],
            d = this.b.B[g[1]];
            d.Cc || (d.Cc = g, d.du = this.index);
            this.ig.push(g); - 1 === this.Aa.mh.indexOf(d) && this.Aa.mh.push(d)
        }
        this.P = [];
        this.na = [];
        this.La = [];
        e = 0;
        for (c = b[14].length; e < c; e++) this.P.push({
            id: b[14][e][0],
            name: b[14][e][1],
            Fb: -1,
            Bb: !0,
            index: e
        }),
        this.La.push(b[14][e][2].slice(0));
        this.je();
        this.ci = new qa(0, 0, 1, 1);
        this.Rm = new qa(0, 0, 1, 1)
    }
    k.prototype.Rw = function(a) {
        var b = a.type.ca.toString();
        this.Ne.hasOwnProperty(b) || (this.Ne[b] = []);
        this.Ne[b].push(this.b.Xm(a))
    };
    k.prototype.fp = function() {
        var a = this.aa[0];
        return ! a.ie && 1 === a.opacity && !a.Dl && a.visible
    };
    k.prototype.je = function() {
        this.na.length = 0;
        var a, b, f;
        a = 0;
        for (b = this.P.length; a < b; a++) f = this.P[a],
        f.Bb && this.na.push(f)
    };
    k.prototype.Nl = function(a) {
        var b, f, e;
        b = 0;
        for (f = this.P.length; b < f; b++) if (e = this.P[b], e.name === a) return e;
        return null
    };
    var h = [],
    r = !0;
    k.prototype.kn = function() {
        this.Nq && (this.jf = this.b.yl[this.Nq], this.jf.vn());
        this.b.ta = this;
        this.scrollX = this.b.Oa / 2;
        this.scrollY = this.b.Na / 2;
        var a, b, f, e, c, g, d;
        a = 0;
        for (f = this.b.B.length; a < f; a++) if (b = this.b.B[a], !b.J) for (c = b.c, b = 0, e = c.length; b < e; b++) if (g = c[b], g.j) {
            var v = g.j.bq;
            v >= this.aa.length && (v = this.aa.length - 1);
            g.j = this.aa[v]; - 1 === g.j.c.indexOf(g) && g.j.c.push(g);
            g.j.rc = !0
        }
        if (!r) for (a = 0, f = this.aa.length; a < f; ++a) this.aa[a].c.sort(p);
        h.length = 0;
        this.Qt();
        a = 0;
        for (f = this.aa.length; a < f; a++) g = this.aa[a],
        g.bu(),
        g.xn();
        c = !1;
        if (!this.$g) {
            for (d in this.Ne) if (this.Ne.hasOwnProperty(d) && (b = this.b.gg(parseInt(d, 10))) && !b.J && this.b.un(b)) {
                e = this.Ne[d];
                a = 0;
                for (f = e.length; a < f; a++) {
                    g = null;
                    if (b.ya.He && (g = this.tj(e[a].w.l), !g)) continue;
                    g = this.b.Be(b.Cc, g, !1, 0, 0, !0);
                    this.b.Mj(g, e[a]);
                    c = !0;
                    h.push(g)
                }
                e.length = 0
            }
            a = 0;
            for (f = this.aa.length; a < f; a++) this.aa[a].c.sort(p),
            this.aa[a].rc = !0
        }
        c && (this.b.Gb(), this.b.Eq());
        for (a = 0; a < h.length; a++) if (g = h[a], g.type.Ub) for (f = g.fh(), b = 0, e = g.type.fc.length; b < e; b++) d = g.type.fc[b],
        g.type !== d && (d.c.length > f ? g.siblings.push(d.c[f]) : d.Cc && (c = this.b.Be(d.Cc, g.j, !0, g.x, g.y, !0), this.b.Gb(), d.Jk(), g.siblings.push(c), h.push(c)));
        a = 0;
        for (f = this.tf.length; a < f; a++) this.b.Be(this.tf[a], null, !0);
        this.b.df = null;
        this.b.Gb();
        if (this.b.wa && !this.b.xa) for (a = 0, f = this.b.B.length; a < f; a++) d = this.b.B[a],
        !d.J && d.c.length && d.fk && d.fk(this.b.wa);
        a = 0;
        for (f = h.length; a < f; a++) g = h[a],
        this.b.trigger(Object.getPrototypeOf(g.type.ya).d.Tk, g);
        h.length = 0;
        this.b.trigger(W.prototype.d.Mn, null);
        this.$g = !1
    };
    k.prototype.au = function() {
        var a, b, f, e, c;
        b = a = 0;
        for (f = this.tf.length; a < f; a++) e = this.tf[a],
        c = this.b.B[e[1]],
        c.global ? this.b.Be(e, null, !0) : (this.tf[b] = e, b++);
        this.tf.length = b
    };
    k.prototype.$w = function() {
        this.b.trigger(W.prototype.d.Bs, null);
        this.b.Ed.ac.length = 0;
        var a, b, f, e, c, g;
        a = 0;
        for (b = this.aa.length; a < b; a++) for (this.aa[a].jr(), c = this.aa[a].c, f = 0, e = c.length; f < e; f++) g = c[f],
        g.type.global || this.b.un(g.type) && this.Rw(g);
        a = 0;
        for (b = this.aa.length; a < b; a++) {
            c = this.aa[a].c;
            f = 0;
            for (e = c.length; f < e; f++) g = c[f],
            g.type.global || this.b.me(g);
            this.b.Gb();
            c.length = 0;
            this.aa[a].rc = !0
        }
        a = 0;
        for (b = this.b.B.length; a < b; a++) if (c = this.b.B[a], !(c.global || c.ya.He || c.ya.tk || c.J)) {
            f = 0;
            for (e = c.c.length; f < e; f++) this.b.me(c.c[f]);
            this.b.Gb()
        }
        r = !1
    };
    k.prototype.Pd = function(a) {
        var b, f = a,
        e = !1,
        c = !this.b.Gc;
        c && (this.b.Kj || (this.b.Kj = document.createElement("canvas"), b = this.b.Kj, b.width = this.b.Z, b.height = this.b.Y, this.b.Cp = b.getContext("2d"), e = !0), b = this.b.Kj, f = this.b.Cp, b.width !== this.b.Z && (b.width = this.b.Z, e = !0), b.height !== this.b.Y && (b.height = this.b.Y, e = !0), e && (f.webkitImageSmoothingEnabled = this.b.ja, f.mozImageSmoothingEnabled = this.b.ja, f.msImageSmoothingEnabled = this.b.ja, f.imageSmoothingEnabled = this.b.ja));
        f.globalAlpha = 1;
        f.globalCompositeOperation = "source-over";
        this.b.el && !this.fp() && f.clearRect(0, 0, this.b.Z, this.b.Y);
        var g, d, e = 0;
        for (g = this.aa.length; e < g; e++) d = this.aa[e],
        d.visible && 0 < d.opacity && 11 !== d.Rb && (d.c.length || !d.ie) ? d.Pd(f) : d.xn();
        c && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    k.prototype.Ec = function(a) {
        var b = 0 < this.na.length || this.b.Mg || !this.b.Gc;
        if (b) {
            this.b.nc || (this.b.nc = a.Ae(this.b.Z, this.b.Y, this.b.ja));
            if (this.b.nc.Tg !== this.b.Z || this.b.nc.Sg !== this.b.Y) a.deleteTexture(this.b.nc),
            this.b.nc = a.Ae(this.b.Z, this.b.Y, this.b.ja);
            a.Bd(this.b.nc);
            this.b.Gc || a.Re(this.b.Z, this.b.Y)
        } else this.b.nc && (a.Bd(null), a.deleteTexture(this.b.nc), this.b.nc = null);
        this.b.el && !this.fp() && a.clear(0, 0, 0, 0);
        var f, e, c;
        f = 0;
        for (e = this.aa.length; f < e; f++) c = this.aa[f],
        c.visible && 0 < c.opacity && (c.c.length || !c.ie) ? c.Ec(a) : c.xn();
        b && (0 === this.na.length || 1 === this.na.length && this.b.Gc ? (1 === this.na.length ? (b = this.na[0].index, a.Dd(this.na[0].Fb), a.Eg(null, 1 / this.b.Z, 1 / this.b.Y, 0, 0, 1, 1, this.scale, this.g, 0, 0, this.b.Z / 2, this.b.Y / 2, this.La[b]), a.gk(this.na[0].Fb) && (this.b.la = !0)) : a.Dd(0), this.b.Gc || a.Re(this.b.width, this.b.height), a.Bd(null), a.Of(1), a.pc(this.b.nc), a.Iq(), a.Pe(), a.Xe(), b = this.b.width / 2, f = this.b.height / 2, a.ik( - b, f, b, f, b, -f, -b, -f), a.pc(null)) : this.Sm(a, null, null, null))
    };
    k.prototype.eh = function() {
        return 0 < this.na.length || this.b.Mg || !this.b.Gc ? this.b.nc: null
    };
    k.prototype.$o = function() {
        var a = this.aa[0].Hc(),
        b,
        f,
        e;
        b = 1;
        for (f = this.aa.length; b < f; b++) e = this.aa[b],
        (0 !== e.Oc || 0 !== e.Pc) && e.Hc() < a && (a = e.Hc());
        return a
    };
    k.prototype.Zm = function(a) {
        if (!this.cr) {
            var b = 1 / this.$o() * this.b.Z / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.la = !0)
    };
    k.prototype.$m = function(a) {
        if (!this.cr) {
            var b = 1 / this.$o() * this.b.Y / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.la = !0)
    };
    k.prototype.Qt = function() {
        this.Zm(this.scrollX);
        this.$m(this.scrollY)
    };
    k.prototype.Sm = function(a, b, f, e) {
        var c = f ? f.na: b ? b.na: this.na,
        g = 1,
        d = 0,
        h = 0,
        l = 0,
        t = this.b.Z,
        k = this.b.Y;
        f ? (g = f.j.Hc(), d = f.j.wb(), h = f.j.Ua, l = f.j.Va, t = f.j.gb, k = f.j.fb) : b && (g = b.Hc(), d = b.wb(), h = b.Ua, l = b.Va, t = b.gb, k = b.fb);
        var n = this.b.Gl,
        u, r, s, m, p = 0,
        ca = 1,
        T, z = this.b.Z,
        N = this.b.Y,
        F = z / 2,
        y = N / 2,
        O = b ? b.ci: this.ci,
        E = b ? b.Rm: this.Rm,
        D = 0,
        A = 0,
        J = 0,
        B = 0,
        x = z,
        I = z,
        K = N,
        P = N,
        L = s = 0,
        Q = f ? f.j.wb() : 0;
        if (f) {
            u = 0;
            for (r = c.length; u < r; u++) s += a.rv(c[u].Fb),
            L += a.sv(c[u].Fb);
            m = f.X;
            D = b.Nb(m.left, m.top, !0, !0);
            J = b.Nb(m.left, m.top, !1, !0);
            x = b.Nb(m.right, m.bottom, !0, !0);
            K = b.Nb(m.right, m.bottom, !1, !0);
            0 !== Q && (u = b.Nb(m.right, m.top, !0, !0), r = b.Nb(m.right, m.top, !1, !0), A = b.Nb(m.left, m.bottom, !0, !0), B = b.Nb(m.left, m.bottom, !1, !0), m = Math.min(D, x, u, A), x = Math.max(D, x, u, A), D = m, m = Math.min(J, K, r, B), K = Math.max(J, K, r, B), J = m);
            D -= s;
            J -= L;
            x += s;
            K += L;
            E.left = D / z;
            E.top = 1 - J / N;
            E.right = x / z;
            E.bottom = 1 - K / N;
            A = D = S(D);
            B = J = S(J);
            I = x = na(x);
            P = K = na(K);
            A -= s;
            B -= L;
            I += s;
            P += L;
            0 > D && (D = 0);
            0 > J && (J = 0);
            x > z && (x = z);
            K > N && (K = N);
            0 > A && (A = 0);
            0 > B && (B = 0);
            I > z && (I = z);
            P > N && (P = N);
            O.left = D / z;
            O.top = 1 - J / N;
            O.right = x / z;
            O.bottom = 1 - K / N
        } else O.left = E.left = 0,
        O.top = E.top = 0,
        O.right = E.right = 1,
        O.bottom = E.bottom = 1;
        L = f && ((f.g || Q) && a.Yh(c[0].Fb) || 0 !== s || 0 !== L || 1 !== f.opacity || f.type.ya.Yp) || b && !f && 1 !== b.opacity;
        a.Iq();
        if (L) {
            n[p] || (n[p] = a.Ae(z, N, this.b.ja));
            if (n[p].Tg !== z || n[p].Sg !== N) a.deleteTexture(n[p]),
            n[p] = a.Ae(z, N, this.b.ja);
            a.Dd(0);
            a.Bd(n[p]);
            T = P - B;
            a.clearRect(A, N - B - T, I - A, T);
            f ? f.Ec(a) : (a.pc(this.b.xc), a.Of(b.opacity), a.Pe(), a.translate( - F, -y), a.Xe(), a.xd(D, K, x, K, x, J, D, J, O));
            E.left = E.top = 0;
            E.right = E.bottom = 1;
            f && (m = O.top, O.top = O.bottom, O.bottom = m);
            p = 1;
            ca = 0
        }
        a.Of(1);
        s = c.length - 1;
        var Q = a.Pm(c[s].Fb) || !b && !f && !this.b.Gc,
        ga = 0;
        u = 0;
        for (r = c.length; u < r; u++) {
            n[p] || (n[p] = a.Ae(z, N, this.b.ja));
            if (n[p].Tg !== z || n[p].Sg !== N) a.deleteTexture(n[p]),
            n[p] = a.Ae(z, N, this.b.ja);
            a.Dd(c[u].Fb);
            ga = c[u].index;
            a.gk(c[u].Fb) && (this.b.la = !0);
            0 != u || L ? (a.Eg(e, 1 / z, 1 / N, E.left, E.top, E.right, E.bottom, g, d, h, l, (h + t) / 2, (l + k) / 2, f ? f.La[ga] : b ? b.La[ga] : this.La[ga]), a.pc(null), u !== s || Q ? (a.Bd(n[p]), T = P - B, m = N - B - T, a.clearRect(A, m, I - A, T)) : (f ? a.Qe(f.Ib, f.Hb) : b && a.Qe(b.Ib, b.Hb), a.Bd(e)), a.pc(n[ca]), a.Pe(), a.translate( - F, -y), a.Xe(), a.xd(D, K, x, K, x, J, D, J, O), u !== s || Q || a.pc(null)) : (a.Bd(n[p]), T = P - B, m = N - B - T, a.clearRect(A, m, I - A, T), f ? (a.Eg(e, 1 / f.width, 1 / f.height, E.left, E.top, E.right, E.bottom, g, d, h, l, (h + t) / 2, (l + k) / 2, f.La[ga]), f.Ec(a)) : (a.Eg(e, 1 / z, 1 / N, 0, 0, 1, 1, g, d, h, l, (h + t) / 2, (l + k) / 2, b ? b.La[ga] : this.La[ga]), a.pc(b ? this.b.xc: this.b.nc), a.Pe(), a.translate( - F, -y), a.Xe(), a.xd(D, K, x, K, x, J, D, J, O)), E.left = E.top = 0, E.right = E.bottom = 1, f && !Q && (m = K, K = J, J = m));
            p = 0 === p ? 1 : 0;
            ca = 0 === p ? 1 : 0
        }
        Q && (a.Dd(0), f ? a.Qe(f.Ib, f.Hb) : b ? a.Qe(b.Ib, b.Hb) : this.b.Gc || (a.Re(this.b.width, this.b.height), F = this.b.width / 2, y = this.b.height / 2, J = D = 0, x = this.b.width, K = this.b.height), a.Bd(e), a.pc(n[ca]), a.Pe(), a.translate( - F, -y), a.Xe(), f && 1 === c.length && !L ? a.xd(D, J, x, J, x, K, D, K, O) : a.xd(D, K, x, K, x, J, D, J, O), a.pc(null))
    };
    k.prototype.tj = function(a) {
        var b, d;
        b = 0;
        for (d = this.aa.length; b < d; b++) if (this.aa[b].ca === a) return this.aa[b];
        return null
    };
    k.prototype.rb = function() {
        var a, b, d, e = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.g,
            w: this.width,
            h: this.height,
            fv: this.$g,
            persist: this.Ne,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.P.length; a < b; a++) d = this.P[a],
        e.fx.push({
            name: d.name,
            active: d.Bb,
            params: this.La[d.index]
        });
        a = 0;
        for (b = this.aa.length; a < b; a++) d = this.aa[a],
        e.layers[d.ca.toString()] = d.rb();
        return e
    };
    k.prototype.Db = function(a) {
        var b, d, e, c;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.g = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Ne = a.persist;
        "undefined" !== typeof a.fv && (this.$g = a.fv);
        var g = a.fx;
        b = 0;
        for (d = g.length; b < d; b++) if (e = this.Nl(g[b].name)) e.Bb = g[b].active,
        this.La[e.index] = g[b].params;
        this.je();
        b = a.layers;
        for (c in b) b.hasOwnProperty(c) && (a = this.tj(parseInt(c, 10))) && a.Db(b[c])
    };
    zb = k;
    d.prototype.je = function() {
        this.na.length = 0;
        var a, b, d;
        a = 0;
        for (b = this.P.length; a < b; a++) d = this.P[a],
        d.Bb && this.na.push(d)
    };
    d.prototype.Nl = function(a) {
        var b, d, e;
        b = 0;
        for (d = this.P.length; b < d; b++) if (e = this.P[b], e.name === a) return e;
        return null
    };
    d.prototype.bu = function() {
        var a, b, d, e, c, g;
        b = a = 0;
        for (d = this.ig.length; a < d; a++) {
            e = this.ig[a];
            c = this.b.B[e[1]];
            g = this.b.un(c);
            c = !0;
            if (!g || this.Aa.$g) e = this.b.Be(e, this, !0),
            h.push(e),
            e.type.global && (c = !1);
            c && (this.ig[b] = this.ig[a], b++)
        }
        this.ig.length = b;
        this.b.Gb(); ! this.b.D && this.P.length && (this.Rb = this.vu);
        this.Ug = $a(this.Rb);
        this.b.A && ab(this, this.Rb, this.b.A)
    };
    d.prototype.jr = function() {
        if (this.rc) {
            var a, b;
            a = 0;
            for (b = this.c.length; a < b; a++) this.c[a].Tf = a;
            this.rc = !1
        }
    };
    d.prototype.Hc = function(a) {
        return this.ov() * (this.b.Gc || a ? this.b.Rg: 1)
    };
    d.prototype.ov = function() {
        return (this.scale * this.Aa.scale - 1) * this.jd + 1
    };
    d.prototype.wb = function() {
        return this.gf ? 0 : Ba(this.Aa.g + this.g)
    };
    d.prototype.Pd = function(a) {
        this.Oe = this.Dl || 1 !== this.opacity || 0 !== this.Rb;
        var b = this.b.canvas,
        d = a,
        e = !1;
        this.Oe && (this.b.Jj || (this.b.Jj = document.createElement("canvas"), b = this.b.Jj, b.width = this.b.Z, b.height = this.b.Y, this.b.Bp = b.getContext("2d"), e = !0), b = this.b.Jj, d = this.b.Bp, b.width !== this.b.Z && (b.width = this.b.Z, e = !0), b.height !== this.b.Y && (b.height = this.b.Y, e = !0), e && (d.webkitImageSmoothingEnabled = this.b.ja, d.mozImageSmoothingEnabled = this.b.ja, d.msImageSmoothingEnabled = this.b.ja, d.imageSmoothingEnabled = this.b.ja), this.ie && d.clearRect(0, 0, this.b.Z, this.b.Y));
        d.globalAlpha = 1;
        d.globalCompositeOperation = "source-over";
        this.ie || (d.fillStyle = "rgb(" + this.te[0] + "," + this.te[1] + "," + this.te[2] + ")", d.fillRect(0, 0, this.b.Z, this.b.Y));
        d.save();
        this.gf = !0;
        var e = this.Jb(0, 0, !0, !0),
        c = this.Jb(0, 0, !1, !0);
        this.gf = !1;
        this.b.wd && (e = Math.round(e), c = Math.round(c));
        this.Um(e, c, d);
        var g = this.Hc();
        d.scale(g, g);
        d.translate( - e, -c);
        for (var h, e = 0,
        c = this.c.length; e < c; e++) g = this.c[e],
        g.visible && 0 !== g.width && 0 !== g.height && (g.ma(), h = g.X, h.right < this.Ua || h.bottom < this.Va || h.left > this.gb || h.top > this.fb || (d.globalCompositeOperation = g.Ug, g.Pd(d)));
        d.restore();
        this.Oe && (a.globalCompositeOperation = this.Ug, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    d.prototype.xn = function() {
        this.gf = !0;
        var a = this.Jb(0, 0, !0, !0),
        b = this.Jb(0, 0, !1, !0);
        this.gf = !1;
        this.b.wd && (a = Math.round(a), b = Math.round(b));
        this.Um(a, b, null)
    };
    d.prototype.Um = function(a, b, d) {
        var e = this.Hc();
        this.Ua = a;
        this.Va = b;
        this.gb = a + 1 / e * this.b.Z;
        this.fb = b + 1 / e * this.b.Y;
        a = this.wb();
        0 !== a && (d && (d.translate(this.b.Z / 2, this.b.Y / 2), d.rotate( - a), d.translate(this.b.Z / -2, this.b.Y / -2)), this.he.set(this.Ua, this.Va, this.gb, this.fb), this.he.offset((this.Ua + this.gb) / -2, (this.Va + this.fb) / -2), this.Wq.Lq(this.he, a), this.Wq.po(this.he), this.he.offset((this.Ua + this.gb) / 2, (this.Va + this.fb) / 2), this.Ua = this.he.left, this.Va = this.he.top, this.gb = this.he.right, this.fb = this.he.bottom)
    };
    d.prototype.Ec = function(a) {
        var b = this.b.Z,
        d = this.b.Y,
        e = 0,
        c = 0;
        if (this.Oe = this.Dl || 1 !== this.opacity || 0 < this.na.length || 0 !== this.Rb) {
            this.b.xc || (this.b.xc = a.Ae(this.b.Z, this.b.Y, this.b.ja));
            if (this.b.xc.Tg !== this.b.Z || this.b.xc.Sg !== this.b.Y) a.deleteTexture(this.b.xc),
            this.b.xc = a.Ae(this.b.Z, this.b.Y, this.b.ja);
            a.Bd(this.b.xc);
            this.ie && a.clear(0, 0, 0, 0)
        }
        this.ie || a.clear(this.te[0] / 255, this.te[1] / 255, this.te[2] / 255, 1);
        this.gf = !0;
        var c = this.Jb(0, 0, !0, !0),
        g = this.Jb(0, 0, !1, !0);
        this.gf = !1;
        this.b.wd && (c = Math.round(c), g = Math.round(g));
        this.Um(c, g, null);
        g = this.Hc();
        a.Pe();
        a.scale(g, g);
        a.Gq( - this.wb());
        a.translate((this.Ua + this.gb) / -2, (this.Va + this.fb) / -2);
        a.Xe();
        var h, v, l;
        h = 0;
        for (v = this.c.length; h < v; h++) if (l = this.c[h], l.visible && 0 !== l.width && 0 !== l.height && (l.ma(), e = l.X, !(e.right < this.Ua || e.bottom < this.Va || e.left > this.gb || e.top > this.fb))) if (l.lr) if (e = l.na[0].Fb, c = l.na[0].index, 1 !== l.na.length || a.Pm(e) || a.Dw(e) || (l.g || l.j.wb()) && a.Yh(e) || 1 !== l.opacity || l.type.ya.Yp) this.Aa.Sm(a, this, l, this.Oe ? this.b.xc: this.Aa.eh()),
        a.Pe(),
        a.scale(g, g),
        a.Gq( - this.wb()),
        a.translate((this.Ua + this.gb) / -2, (this.Va + this.fb) / -2),
        a.Xe();
        else {
            a.Dd(e);
            a.Qe(l.Ib, l.Hb);
            a.gk(e) && (this.b.la = !0);
            var t = 0,
            k = 0,
            n = 0,
            u = 0;
            a.Yh(e) && (e = l.X, t = this.Nb(e.left, e.top, !0, !0), k = this.Nb(e.left, e.top, !1, !0), n = this.Nb(e.right, e.bottom, !0, !0), e = this.Nb(e.right, e.bottom, !1, !0), t /= b, k = 1 - k / d, n /= b, u = 1 - e / d);
            a.Eg(this.Oe ? this.b.xc: this.Aa.eh(), 1 / l.width, 1 / l.height, t, k, n, u, this.Hc(), this.wb(), this.Ua, this.Va, (this.Ua + this.gb) / 2, (this.Va + this.fb) / 2, l.La[c]);
            l.Ec(a)
        } else a.Dd(0),
        a.Qe(l.Ib, l.Hb),
        l.Ec(a);
        this.Oe && (e = this.na.length ? this.na[0].Fb: 0, c = this.na.length ? this.na[0].index: 0, 0 === this.na.length || 1 === this.na.length && !a.Pm(e) && 1 === this.opacity ? (1 === this.na.length ? (a.Dd(e), a.Eg(this.Aa.eh(), 1 / this.b.Z, 1 / this.b.Y, 0, 0, 1, 1, this.Hc(), this.wb(), this.Ua, this.Va, (this.Ua + this.gb) / 2, (this.Va + this.fb) / 2, this.La[c]), a.gk(e) && (this.b.la = !0)) : a.Dd(0), a.Bd(this.Aa.eh()), a.Of(this.opacity), a.pc(this.b.xc), a.Qe(this.Ib, this.Hb), a.Pe(), a.Xe(), b = this.b.Z / 2, d = this.b.Y / 2, a.ik( - b, d, b, d, b, -d, -b, -d), a.pc(null)) : this.Aa.Sm(a, this, null, this.Aa.eh()))
    };
    d.prototype.Jb = function(a, b, d, e) {
        var c = this.b.devicePixelRatio;
        this.b.wf && (a *= c, b *= c);
        var c = this.b.tq,
        g = this.b.uq,
        c = (this.Aa.scrollX - c) * this.Oc + c,
        g = (this.Aa.scrollY - g) * this.Pc + g,
        h = 1 / this.Hc(!e);
        e ? (c -= this.b.Z * h / 2, g -= this.b.Y * h / 2) : (c -= this.b.width * h / 2, g -= this.b.height * h / 2);
        c += a * h;
        g += b * h;
        b = this.wb();
        0 !== b && (c -= this.Aa.scrollX, g -= this.Aa.scrollY, a = Math.cos(b), b = Math.sin(b), e = c * a - g * b, g = g * a + c * b, c = e + this.Aa.scrollX, g += this.Aa.scrollY);
        return d ? c: g
    };
    d.prototype.Nb = function(a, b, d, e) {
        var c = this.wb();
        if (0 !== c) {
            a -= this.Aa.scrollX;
            b -= this.Aa.scrollY;
            var g = Math.cos( - c),
            c = Math.sin( - c),
            h = a * g - b * c;
            b = b * g + a * c;
            a = h + this.Aa.scrollX;
            b += this.Aa.scrollY
        }
        g = this.b.tq;
        c = this.b.uq;
        g = (this.Aa.scrollX - g) * this.Oc + g;
        c = (this.Aa.scrollY - c) * this.Pc + c;
        h = 1 / this.Hc(!e);
        e ? (g -= this.b.Z * h / 2, c -= this.b.Y * h / 2) : (g -= this.b.width * h / 2, c -= this.b.height * h / 2);
        g = (a - g) / h;
        c = (b - c) / h;
        a = this.b.devicePixelRatio;
        this.b.wf && !e && (g /= a, c /= a);
        return d ? g: c
    };
    d.prototype.rb = function() {
        var a, b, d, e = {
            s: this.scale,
            a: this.g,
            vl: this.Ua,
            vt: this.Va,
            vr: this.gb,
            vb: this.fb,
            v: this.visible,
            bc: this.te,
            t: this.ie,
            px: this.Oc,
            py: this.Pc,
            o: this.opacity,
            zr: this.jd,
            fx: [],
            instances: []
        };
        a = 0;
        for (b = this.P.length; a < b; a++) d = this.P[a],
        e.fx.push({
            name: d.name,
            active: d.Bb,
            params: this.La[d.index]
        });
        return e
    };
    d.prototype.Db = function(a) {
        var b, d;
        this.scale = a.s;
        this.g = a.a;
        this.Ua = a.vl;
        this.Va = a.vt;
        this.gb = a.vr;
        this.fb = a.vb;
        this.visible = a.v;
        this.te = a.bc;
        this.ie = a.t;
        this.Oc = a.px;
        this.Pc = a.py;
        this.opacity = a.o;
        this.jd = a.zr;
        var e = a.fx;
        a = 0;
        for (b = e.length; a < b; a++) if (d = this.Nl(e[a].name)) d.Bb = e[a].active,
        this.La[d.index] = e[a].params;
        this.je();
        this.c.sort(p);
        this.rc = !0
    };
    Mb = d
})(); (function() {
    function k(a, c) {
        var b, e = a.length;
        switch (e) {
        case 0:
            return ! 0;
        case 1:
            return a[0] === c[0];
        case 2:
            return a[0] === c[0] && a[1] === c[1];
        default:
            for (b = 0; b < e; b++) if (a[b] !== c[b]) return ! 1;
            return ! 0
        }
    }
    function p(a, c) {
        return a.index - c.index
    }
    function d(a) {
        var c, b, e, g;
        2 === a.length ? a[0].index > a[1].index && (c = a[0], a[0] = a[1], a[1] = c) : 2 < a.length && a.sort(p);
        a.length >= l.length && (l.length = a.length + 1);
        l[a.length] || (l[a.length] = []);
        g = l[a.length];
        c = 0;
        for (b = g.length; c < b; c++) if (e = g[c], k(a, e)) return e;
        g.push(a);
        return a
    }
    function h(a, c) {
        this.b = a;
        this.Yq = {};
        this.Oo = {};
        this.Wl = !1;
        this.jp = new da;
        this.rl = [];
        this.fl = [];
        this.name = c[0];
        var b = c[1];
        this.De = [];
        var e, g;
        e = 0;
        for (g = b.length; e < g; e++) this.lp(b[e], null, this.De)
    }
    function r(a) {
        this.type = a;
        this.c = [];
        this.qa = [];
        this.ba = !0
    }
    function a(a, c, b) {
        this.sheet = a;
        this.parent = c;
        this.b = a.b;
        this.V = [];
        this.Se = [];
        this.gp = this.Fk = this.rn = this.wj = this.group = this.jn = !1;
        this.lb = [];
        this.Vc = [];
        this.Tc = [];
        this.gh = "";
        this.of = this.wj = this.group = !1;
        this.Ui = null;
        b[1] && (this.gh = b[1][1].toLowerCase(), this.group = !0, this.wj = !!b[1][0], this.Ui = [], this.of = this.wj, this.b.pe.push(this), this.b.hh[this.gh] = this);
        this.Nc = b[2];
        this.ca = b[4];
        this.group || (this.b.oo[this.ca.toString()] = this);
        var e = b[5];
        a = 0;
        for (c = e.length; a < c; a++) {
            var g = new Nb(this, e[a]);
            g.index = a;
            this.lb.push(g);
            this.eo(g.type)
        }
        e = b[6];
        a = 0;
        for (c = e.length; a < c; a++) g = new Ob(this, e[a]),
        g.index = a,
        this.Vc.push(g);
        if (8 === b.length) for (b = b[7], a = 0, c = b.length; a < c; a++) this.sheet.lp(b[a], this, this.Tc);
        this.Dj = !1;
        this.lb.length && (this.Dj = null == this.lb[0].type && this.lb[0].Cb == W.prototype.d.Hn)
    }
    function b(a, c) {
        var b, e, g;
        if (a && ( - 1 === c.indexOf(a) && c.push(a), a.Ub)) for (b = 0, e = a.fc.length; b < e; b++) g = a.fc[b],
        a !== g && -1 === c.indexOf(g) && c.push(g)
    }
    function f(a, c) {
        this.sc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.R = [];
        this.Ca = [];
        this.za = {};
        this.index = -1;
        this.Qg = !1;
        this.Cb = this.b.ne(c[1]);
        this.trigger = 0 < c[3];
        this.No = 2 === c[3];
        this.td = c[4];
        this.xj = c[5];
        this.dw = c[6];
        this.ca = c[7];
        this.b.ag[this.ca.toString()] = this; - 1 === c[0] ? (this.type = null, this.eb = this.Wm, this.bf = null, this.zc = -1) : (this.type = this.b.B[c[0]], this.eb = this.dw ? this.Pw: this.Vm, c[2] ? (this.bf = this.type.qj(c[2]), this.zc = this.type.Hl(c[2])) : (this.bf = null, this.zc = -1), this.sc.parent && this.sc.parent.rk());
        this.No && (this.eb = this.Qw);
        if (10 === c.length) {
            var b, e, g = c[9];
            b = 0;
            for (e = g.length; b < e; b++) {
                var l = new Pb(this, g[b]);
                this.R.push(l)
            }
            this.Ca.length = g.length
        }
    }
    function e(a, c) {
        this.sc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.R = [];
        this.Ca = [];
        this.za = {};
        this.index = -1;
        this.Qg = !1;
        this.Cb = this.b.ne(c[1]); - 1 === c[0] ? (this.type = null, this.eb = this.Wm, this.bf = null, this.zc = -1) : (this.type = this.b.B[c[0]], this.eb = this.Vm, c[2] ? (this.bf = this.type.qj(c[2]), this.zc = this.type.Hl(c[2])) : (this.bf = null, this.zc = -1));
        this.ca = c[3];
        this.b.Xf[this.ca.toString()] = this;
        if (6 === c.length) {
            var b, e, g = c[5];
            b = 0;
            for (e = g.length; b < e; b++) {
                var l = new Pb(this, g[b]);
                this.R.push(l)
            }
            this.Ca.length = g.length
        }
    }
    function c(a, c) {
        this.H = a;
        this.sc = a.sc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = c[0];
        this.od = null;
        this.Te = 0;
        this.get = null;
        this.zo = 0;
        this.Aa = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.ri = this.Rf = this.ri = this.Rf = this.Po = this.kf = this.si = null;
        this.Uc = !1;
        var b, e, g;
        switch (c[0]) {
        case 0:
        case 7:
            this.od = new Qb(this, c[1]);
            this.Te = 0;
            this.get = this.yv;
            break;
        case 1:
            this.od = new Qb(this, c[1]);
            this.Te = 0;
            this.get = this.zv;
            break;
        case 5:
            this.od = new Qb(this, c[1]);
            this.Te = 0;
            this.get = this.Dv;
            break;
        case 3:
        case 8:
            this.zo = c[1];
            this.get = this.wv;
            break;
        case 6:
            this.Aa = this.b.om[c[1]];
            this.get = this.Ev;
            break;
        case 9:
            this.key = c[1];
            this.get = this.Cv;
            break;
        case 4:
            this.object = this.b.B[c[1]];
            this.get = this.Fv;
            this.sc.eo(this.object);
            this.H instanceof Ob ? this.sc.rk() : this.sc.parent && this.sc.parent.rk();
            break;
        case 10:
            this.index = c[1];
            a.type.J ? (this.get = this.Av, this.Uc = !0) : this.get = this.Bv;
            break;
        case 11:
            this.si = c[1];
            this.kf = null;
            this.get = this.xv;
            break;
        case 2:
        case 12:
            this.Po = c[1];
            this.get = this.vv;
            break;
        case 13:
            for (this.get = this.Gv, this.Rf = [], this.ri = [], b = 1, e = c.length; b < e; b++) g = new Pb(this.H, c[b]),
            this.Rf.push(g),
            this.ri.push(0)
        }
    }
    function g(a, c, b) {
        this.sheet = a;
        this.parent = c;
        this.b = a.b;
        this.V = [];
        this.name = b[1];
        this.ti = b[2];
        this.Zl = b[3];
        this.vh = !!b[4];
        this.Bj = !!b[5];
        this.ca = b[6];
        this.b.Og[this.ca.toString()] = this;
        this.data = this.Zl;
        this.parent ? (this.Jf = this.vh || this.Bj ? -1 : this.b.Yw++, this.b.Kt.push(this)) : (this.Jf = -1, this.b.Jt.push(this))
    }
    function q(a, c, b) {
        this.sheet = a;
        this.parent = c;
        this.b = a.b;
        this.V = [];
        this.kh = null;
        this.Ov = b[1];
        this.Bb = !0
    }
    function v() {
        this.Tq = [];
        this.reset(null)
    }
    var l = [];
    h.prototype.toString = function() {
        return this.name
    };
    h.prototype.lp = function(a, c, b) {
        switch (a[0]) {
        case 0:
            a = new Rb(this, c, a);
            if (a.Nc) for (b.push(a), b = 0, c = a.lb.length; b < c; b++) a.lb[b].trigger && this.mp(a, b);
            else a.up() ? this.mp(a, 0) : b.push(a);
            break;
        case 1:
            a = new Jb(this, c, a);
            b.push(a);
            break;
        case 2:
            a = new Sb(this, c, a),
            b.push(a)
        }
    };
    h.prototype.Sa = function() {
        var a, c;
        a = 0;
        for (c = this.De.length; a < c; a++) this.De[a].Sa(a < c - 1 && this.De[a + 1].Dj)
    };
    h.prototype.vn = function() {
        this.rl.length = 0;
        this.fl.length = 0;
        this.bo(this);
        this.fl.length = 0
    };
    h.prototype.bo = function(a) {
        var c, b, e, g, l = a.rl,
        d = a.fl,
        f = this.jp.ke();
        c = 0;
        for (b = f.length; c < b; ++c) e = f[c],
        g = e.kh,
        !e.Bb || a === g || -1 < d.indexOf(g) || (d.push(g), g.bo(a), l.push(g))
    };
    h.prototype.eb = function(a) {
        this.b.oy || (this.Wl = !0, a || (this.b.em = !0));
        var c, b;
        c = 0;
        for (b = this.De.length; c < b; c++) {
            var e = this.De[c];
            e.eb();
            this.b.ll(e.V);
            this.b.Fe && this.b.Gb()
        }
        a || (this.b.em = !1)
    };
    h.prototype.mp = function(a, c) {
        a.Nc || this.b.Hk.push(a);
        var b, e, g = a.lb[c],
        l;
        l = g.type ? g.type.name: "system";
        var d = (b = g.No) ? this.Oo: this.Yq;
        d[l] || (d[l] = []);
        l = d[l];
        d = g.Cb;
        if (b) {
            if (g.R.length && (g = g.R[0], 1 === g.type && 2 === g.od.type)) {
                g = g.od.value.toLowerCase();
                b = 0;
                for (e = l.length; b < e; b++) if (l[b].method == d) {
                    b = l[b].Wg;
                    b[g] ? b[g].push([a, c]) : b[g] = [[a, c]];
                    return
                }
                b = {};
                b[g] = [[a, c]];
                l.push({
                    method: d,
                    Wg: b
                })
            }
        } else {
            b = 0;
            for (e = l.length; b < e; b++) if (l[b].method == d) {
                l[b].Wg.push([a, c]);
                return
            }
            X && d === X.prototype.d.Wf ? l.unshift({
                method: d,
                Wg: [[a, c]]
            }) : l.push({
                method: d,
                Wg: [[a, c]]
            })
        }
    };
    Ab = h;
    r.prototype.Vl = function() {
        return this.ba ? this.type.c.length: this.c.length
    };
    r.prototype.ic = function() {
        return this.ba ? this.type.c: this.c
    };
    r.prototype.Uh = function(a) {
        a && (a.b.Ma().Ka.Nc ? (this.ba && (this.c.length = 0, ua(this.qa, a.type.c), this.ba = !1), a = this.qa.indexOf(a), -1 !== a && (this.c.push(this.qa[a]), this.qa.splice(a, 1))) : (this.ba = !1, this.c.length = 1, this.c[0] = a))
    };
    gb = r;
    window._c2hh_ = "A30E47460D71C81DE06E539024B4650A61F54587";
    a.prototype.Sa = function(a) {
        var c, b = this.parent;
        if (this.group) for (this.Fk = !0; b;) {
            if (!b.group) {
                this.Fk = !1;
                break
            }
            b = b.parent
        }
        this.rn = !this.up() && (!this.parent || this.parent.group && this.parent.Fk);
        this.gp = !!a;
        this.Se = this.V.slice(0);
        for (b = this.parent; b;) {
            a = 0;
            for (c = b.V.length; a < c; a++) this.It(b.V[a]);
            b = b.parent
        }
        this.V = d(this.V);
        this.Se = d(this.Se);
        a = 0;
        for (c = this.lb.length; a < c; a++) this.lb[a].Sa();
        a = 0;
        for (c = this.Vc.length; a < c; a++) this.Vc[a].Sa();
        a = 0;
        for (c = this.Tc.length; a < c; a++) this.Tc[a].Sa(a < c - 1 && this.Tc[a + 1].Dj)
    };
    a.prototype.Uw = function(a) {
        if (this.of !== !!a) {
            this.of = !!a;
            var c;
            a = 0;
            for (c = this.Ui.length; a < c; ++a) this.Ui[a].er();
            0 < c && this.b.ta.jf && this.b.ta.jf.vn()
        }
    };
    a.prototype.eo = function(a) {
        b(a, this.V)
    };
    a.prototype.It = function(a) {
        b(a, this.Se)
    };
    a.prototype.rk = function() {
        this.jn = !0;
        this.parent && this.parent.rk()
    };
    a.prototype.up = function() {
        return this.lb.length ? this.lb[0].trigger: !1
    };
    a.prototype.eb = function() {
        var a, c = !1,
        b, g = this.b,
        e = this.b.Ma();
        e.Ka = this;
        var l = this.lb;
        this.Dj || (e.wl = !1);
        if (this.Nc) {
            0 === l.length && (c = !0);
            e.Ya = 0;
            for (a = l.length; e.Ya < a; e.Ya++) l[e.Ya].trigger || (b = l[e.Ya].eb()) && (c = !0); (e.Ef = c) && this.nk()
        } else {
            e.Ya = 0;
            for (a = l.length; e.Ya < a; e.Ya++) if (b = l[e.Ya].eb(), !b) {
                e.Ef = !1;
                this.rn && g.Fe && g.Gb();
                return
            }
            e.Ef = !0;
            this.nk()
        }
        this.xu(e)
    };
    a.prototype.xu = function(a) {
        a.Ef && this.gp && (a.wl = !0);
        this.rn && this.b.Fe && this.b.Gb()
    };
    a.prototype.Nw = function(a) {
        this.b.Ma().Ka = this;
        this.lb[a].eb() && (this.nk(), this.b.Ma().Ef = !0)
    };
    a.prototype.nk = function() {
        var a = this.b.Ma(),
        c;
        a.cc = 0;
        for (c = this.Vc.length; a.cc < c; a.cc++) if (this.Vc[a.cc].eb()) return;
        this.Hq()
    };
    a.prototype.Lw = function() {
        var a = this.b.Ma(),
        c;
        for (c = this.Vc.length; a.cc < c; a.cc++) if (this.Vc[a.cc].eb()) return;
        this.Hq()
    };
    a.prototype.Hq = function() {
        if (this.Tc.length) {
            var a, c, b, e, g = this.Tc.length - 1;
            this.b.hk(this);
            if (this.jn) for (a = 0, c = this.Tc.length; a < c; a++) b = this.Tc[a],
            (e = !this.Fk || !this.group && a < g) && this.b.ae(b.V),
            b.eb(),
            e ? this.b.Qc(b.V) : this.b.ll(b.V);
            else for (a = 0, c = this.Tc.length; a < c; a++) this.Tc[a].eb();
            this.b.ck()
        }
    };
    a.prototype.Ow = function() {
        var a = this.b.Ma();
        a.Ka = this;
        var c = !1,
        b;
        a.Ya = 0;
        for (b = this.lb.length; a.Ya < b; a.Ya++) if (this.lb[a.Ya].eb()) c = !0;
        else if (!this.Nc) return ! 1;
        return this.Nc ? c: !0
    };
    a.prototype.Ad = function() {
        this.b.ij++;
        var a = this.b.Ma().Ya,
        c = this.b.hk(this);
        if (!this.Nc) for (c.Ya = a + 1, a = this.lb.length; c.Ya < a; c.Ya++) if (!this.lb[c.Ya].eb()) return this.b.ck(),
        !1;
        this.nk();
        this.b.ck();
        return ! 0
    };
    a.prototype.Vv = function(a) {
        var c = a.index;
        if (0 === c) return ! 0;
        for (--c; 0 <= c; --c) if (this.lb[c].type === a.type) return ! 1;
        return ! 0
    };
    Rb = a;
    f.prototype.Sa = function() {
        var a, c, b;
        a = 0;
        for (c = this.R.length; a < c; a++) b = this.R[a],
        b.Sa(),
        b.Uc && (this.Qg = !0)
    };
    f.prototype.Qw = function() {
        return ! 0
    };
    f.prototype.Wm = function() {
        var a, c;
        a = 0;
        for (c = this.R.length; a < c; a++) this.Ca[a] = this.R[a].get();
        return La(this.Cb.apply(this.b.Ed, this.Ca), this.xj)
    };
    f.prototype.Pw = function() {
        var a, c;
        a = 0;
        for (c = this.R.length; a < c; a++) this.Ca[a] = this.R[a].get();
        a = this.Cb.apply(this.bf ? this.bf: this.type, this.Ca);
        this.type.Jd();
        return a
    };
    f.prototype.Vm = function() {
        var a, c, b, e, g, l, d, f, h = this.type,
        t = h.U(),
        q = this.sc.Nc && !this.trigger;
        c = 0;
        var v = h.Ub,
        k = h.J,
        r = h.Sd,
        p = this.zc,
        G = -1 < p,
        J = this.Qg,
        B = this.R,
        x = this.Ca,
        I = this.xj,
        K = this.Cb,
        P;
        if (J) for (c = 0, g = B.length; c < g; ++c) l = B[c],
        l.Uc || (x[c] = l.get(0));
        else for (c = 0, g = B.length; c < g; ++c) x[c] = B[c].get(0);
        if (t.ba) {
            t.c.length = 0;
            t.qa.length = 0;
            P = h.c;
            a = 0;
            for (e = P.length; a < e; ++a) {
                f = P[a];
                if (J) for (c = 0, g = B.length; c < g; ++c) l = B[c],
                l.Uc && (x[c] = l.get(a));
                G ? (c = 0, k && (c = f.type.eg[r]), c = K.apply(f.T[p + c], x)) : c = K.apply(f, x); (d = La(c, I)) ? t.c.push(f) : q && t.qa.push(f)
            }
            h.finish && h.finish(!0);
            t.ba = !1;
            h.Jd();
            return t.Vl()
        }
        b = 0;
        P = (d = q && !this.sc.Vv(this)) ? t.qa: t.c;
        var L = !1;
        a = 0;
        for (e = P.length; a < e; ++a) {
            f = P[a];
            if (J) for (c = 0, g = B.length; c < g; ++c) l = B[c],
            l.Uc && (x[c] = l.get(a));
            G ? (c = 0, k && (c = f.type.eg[r]), c = K.apply(f.T[p + c], x)) : c = K.apply(f, x);
            if (La(c, I)) if (L = !0, d) {
                if (t.c.push(f), v) for (c = 0, g = f.siblings.length; c < g; c++) l = f.siblings[c],
                l.type.U().c.push(l)
            } else {
                P[b] = f;
                if (v) for (c = 0, g = f.siblings.length; c < g; c++) l = f.siblings[c],
                l.type.U().c[b] = l;
                b++
            } else if (d) {
                P[b] = f;
                if (v) for (c = 0, g = f.siblings.length; c < g; c++) l = f.siblings[c],
                l.type.U().qa[b] = l;
                b++
            } else if (q && (t.qa.push(f), v)) for (c = 0, g = f.siblings.length; c < g; c++) l = f.siblings[c],
            l.type.U().qa.push(l)
        }
        P.length = b;
        if (v) for (k = h.fc, a = 0, e = k.length; a < e; a++) f = k[a].U(),
        d ? f.qa.length = b: f.c.length = b;
        b = L;
        if (d && !L) for (a = 0, e = t.c.length; a < e; a++) {
            f = t.c[a];
            if (J) for (c = 0, g = B.length; c < g; c++) l = B[c],
            l.Uc && (x[c] = l.get(a));
            c = G ? K.apply(f.T[p], x) : K.apply(f, x);
            if (La(c, I)) {
                L = !0;
                break
            }
        }
        h.finish && h.finish(b || q);
        return q ? L: t.Vl()
    };
    Nb = f;
    e.prototype.Sa = function() {
        var a, c, b;
        a = 0;
        for (c = this.R.length; a < c; a++) b = this.R[a],
        b.Sa(),
        b.Uc && (this.Qg = !0)
    };
    e.prototype.Wm = function() {
        var a, c;
        a = 0;
        for (c = this.R.length; a < c; a++) this.Ca[a] = this.R[a].get();
        return this.Cb.apply(this.b.Ed, this.Ca)
    };
    e.prototype.Vm = function() {
        var a = this.type.U().ic(),
        c = this.type.J,
        b = this.type.Sd,
        e = this.zc,
        g = -1 < e,
        l = this.Qg,
        d = this.R,
        f = this.Ca,
        h = this.Cb,
        t,
        q,
        v,
        k,
        r,
        p;
        if (l) for (q = 0, k = d.length; q < k; ++q) r = d[q],
        r.Uc || (f[q] = r.get(0));
        else for (q = 0, k = d.length; q < k; ++q) f[q] = d[q].get(0);
        t = 0;
        for (v = a.length; t < v; ++t) {
            p = a[t];
            if (l) for (q = 0, k = d.length; q < k; ++q) r = d[q],
            r.Uc && (f[q] = r.get(t));
            g ? (q = 0, c && (q = p.type.eg[b]), h.apply(p.T[e + q], f)) : h.apply(p, f)
        }
        return ! 1
    };
    Ob = e;
    var t = [],
    G = -1;
    c.prototype.Sa = function() {
        var a, c;
        if (11 === this.type) this.kf = this.b.Wo(this.si, this.sc.parent);
        else if (13 === this.type) for (a = 0, c = this.Rf.length; a < c; a++) this.Rf[a].Sa();
        this.od && this.od.Sa()
    };
    c.prototype.jw = function(a) {
        this.Uc || !a || a.ya.tk || (this.Uc = !0)
    };
    c.prototype.Jq = function() {
        this.Uc = !0
    };
    c.prototype.qb = function() {
        G++;
        t.length === G && t.push(new Tb);
        return t[G]
    };
    c.prototype.bb = function() {
        G--
    };
    c.prototype.yv = function(a) {
        this.Te = a || 0;
        a = this.qb();
        this.od.get(a);
        this.bb();
        return a.data
    };
    c.prototype.zv = function(a) {
        this.Te = a || 0;
        a = this.qb();
        this.od.get(a);
        this.bb();
        return R(a.data) ? a.data: ""
    };
    c.prototype.Fv = function() {
        return this.object
    };
    c.prototype.wv = function() {
        return this.zo
    };
    c.prototype.Dv = function(a) {
        this.Te = a || 0;
        a = this.qb();
        this.od.get(a);
        this.bb();
        return a.yb() ? this.b.fg(a.data) : this.b.sj(a.data)
    };
    c.prototype.Ev = function() {
        return this.Aa
    };
    c.prototype.Cv = function() {
        return this.key
    };
    c.prototype.Bv = function() {
        return this.index
    };
    c.prototype.Av = function(a) {
        a = a || 0;
        var c = this.H.type,
        b = null,
        b = c.U(),
        e = b.ic();
        if (e.length) b = e[a % e.length].type;
        else if (b.qa.length) b = b.qa[a % b.qa.length].type;
        else if (c.c.length) b = c.c[a % c.c.length].type;
        else return 0;
        return this.index + b.kj[c.Sd]
    };
    c.prototype.xv = function() {
        return this.kf
    };
    c.prototype.vv = function() {
        return this.Po
    };
    c.prototype.Gv = function() {
        var a, c;
        a = 0;
        for (c = this.Rf.length; a < c; a++) this.ri[a] = this.Rf[a].get();
        return this.ri
    };
    Pb = c;
    g.prototype.Sa = function() {
        this.V = d(this.V)
    };
    g.prototype.fe = function(a) {
        var c = this.b.Vo();
        this.parent && !this.vh && c ? (this.Jf >= c.length && (c.length = this.Jf + 1), c[this.Jf] = a) : this.data = a
    };
    g.prototype.nf = function() {
        var a = this.b.Vo();
        return ! this.parent || this.vh || !a || this.Bj ? this.data: this.Jf >= a.length || "undefined" === typeof a[this.Jf] ? this.Zl: a[this.Jf]
    };
    g.prototype.eb = function() { ! this.parent || this.vh || this.Bj || this.fe(this.Zl)
    };
    Jb = g;
    q.prototype.toString = function() {
        return "include:" + this.kh.toString()
    };
    q.prototype.Sa = function() {
        this.kh = this.b.yl[this.Ov];
        this.sheet.jp.add(this);
        this.V = d(this.V);
        for (var a = this.parent; a;) a.group && a.Ui.push(this),
        a = a.parent;
        this.er()
    };
    q.prototype.eb = function() {
        this.parent && this.b.Zh(this.b.B);
        this.kh.Wl || this.kh.eb(!0);
        this.parent && this.b.Qc(this.b.B)
    };
    q.prototype.er = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.of) {
                this.Bb = !1;
                return
            }
            a = a.parent
        }
        this.Bb = !0
    };
    Sb = q;
    v.prototype.reset = function(a) {
        this.Ka = a;
        this.cc = this.Ya = 0;
        this.Tq.length = 0;
        this.wl = this.Ef = !1
    };
    v.prototype.Aj = function() {
        return this.Ka.jn ? !0 : this.Ya < this.Ka.lb.length - 1 ? !!this.Ka.V.length: !1
    };
    Ib = v
})(); (function() {
    function k(d, h) {
        this.H = d;
        this.b = d.b;
        this.type = h[0];
        this.get = [this.Ju, this.Fu, this.Ru, this.Uu, this.zu, this.Su, this.Nu, this.Cu, this.Mu, this.Qu, this.Au, this.Pu, this.Du, this.Ou, this.Ku, this.Lu, this.Gu, this.Hu, this.Bu, this.Tu, this.Lo, this.Iu, this.Lo, this.Eu][this.type];
        var k = null;
        this.Xb = this.R = this.Ca = this.Cb = this.Ck = this.Ab = this.first = this.value = null;
        this.zc = -1;
        this.Vd = null;
        this.zn = -1;
        this.kf = this.si = null;
        this.di = !1;
        switch (this.type) {
        case 0:
        case 1:
        case 2:
            this.value = h[1];
            break;
        case 3:
            this.first = new Qb(d, h[1]);
            break;
        case 18:
            this.first = new Qb(d, h[1]);
            this.Ab = new Qb(d, h[2]);
            this.Ck = new Qb(d, h[3]);
            break;
        case 19:
            this.Cb = this.b.ne(h[1]);
            this.Cb !== W.prototype.u.random && this.Cb !== W.prototype.u.Vt || this.H.Jq();
            this.Ca = [];
            this.R = [];
            3 === h.length ? (k = h[2], this.Ca.length = k.length + 1) : this.Ca.length = 1;
            break;
        case 20:
            this.Xb = this.b.B[h[1]];
            this.zc = -1;
            this.Cb = this.b.ne(h[2]);
            this.di = h[3];
            fc && this.Cb === fc.prototype.u.xr && this.H.Jq();
            this.Vd = h[4] ? new Qb(d, h[4]) : null;
            this.Ca = [];
            this.R = [];
            6 === h.length ? (k = h[5], this.Ca.length = k.length + 1) : this.Ca.length = 1;
            break;
        case 21:
            this.Xb = this.b.B[h[1]];
            this.di = h[2];
            this.Vd = h[3] ? new Qb(d, h[3]) : null;
            this.zn = h[4];
            break;
        case 22:
            this.Xb = this.b.B[h[1]];
            this.Xb.qj(h[2]);
            this.zc = this.Xb.Hl(h[2]);
            this.Cb = this.b.ne(h[3]);
            this.di = h[4];
            this.Vd = h[5] ? new Qb(d, h[5]) : null;
            this.Ca = [];
            this.R = [];
            7 === h.length ? (k = h[6], this.Ca.length = k.length + 1) : this.Ca.length = 1;
            break;
        case 23:
            this.si = h[1],
            this.kf = null
        }
        this.H.jw(this.Xb);
        4 <= this.type && 17 >= this.type && (this.first = new Qb(d, h[1]), this.Ab = new Qb(d, h[2]));
        if (k) {
            var a, b;
            a = 0;
            for (b = k.length; a < b; a++) this.R.push(new Qb(d, k[a]))
        }
    }
    function p(d, h) {
        this.type = d || Ub.Vf;
        this.data = h || 0;
        this.zg = null;
        this.type == Ub.Vf && (this.data = Math.floor(this.data))
    }
    k.prototype.Sa = function() {
        23 === this.type && (this.kf = this.H.b.Wo(this.si, this.H.sc.parent));
        this.first && this.first.Sa();
        this.Ab && this.Ab.Sa();
        this.Ck && this.Ck.Sa();
        this.Vd && this.Vd.Sa();
        if (this.R) {
            var d, h;
            d = 0;
            for (h = this.R.length; d < h; d++) this.R[d].Sa()
        }
    };
    k.prototype.Tu = function(d) {
        this.Ca[0] = d;
        d = this.H.qb();
        var h, k;
        h = 0;
        for (k = this.R.length; h < k; h++) this.R[h].get(d),
        this.Ca[h + 1] = d.data;
        this.H.bb();
        this.Cb.apply(this.b.Ed, this.Ca)
    };
    k.prototype.Lo = function(d) {
        var h = this.Xb.U(),
        k = h.ic();
        if (!k.length) if (h.qa.length) k = h.qa;
        else {
            this.di ? d.Ea("") : d.I(0);
            return
        }
        this.Ca[0] = d;
        d.zg = this.Xb;
        d = this.H.qb();
        var a, h = 0;
        for (a = this.R.length; h < a; h++) this.R[h].get(d),
        this.Ca[h + 1] = d.data;
        h = this.H.Te;
        this.Vd && (this.Vd.get(d), d.yb() && (h = d.data, k = this.Xb.c));
        this.H.bb();
        h %= k.length;
        0 > h && (h += k.length);
        k = k[h]; - 1 < this.zc ? (d = 0, this.Xb.J && (d = k.type.eg[this.Xb.Sd]), this.Cb.apply(k.T[this.zc + d], this.Ca)) : this.Cb.apply(k, this.Ca)
    };
    k.prototype.Iu = function(d) {
        var h = this.Xb.U(),
        k = h.ic();
        if (!k.length) if (h.qa.length) k = h.qa;
        else {
            this.di ? d.Ea("") : d.I(0);
            return
        }
        h = this.H.Te;
        if (this.Vd) {
            var a = this.H.qb();
            this.Vd.get(a);
            if (a.yb()) {
                h = a.data;
                k = this.Xb.c;
                h %= k.length;
                0 > h && (h += k.length);
                k = k[h].nb[this.zn];
                R(k) ? d.Ea(k) : d.C(k);
                this.H.bb();
                return
            }
            this.H.bb()
        }
        h %= k.length;
        0 > h && (h += k.length);
        k = k[h];
        h = 0;
        this.Xb.J && (h = k.type.kj[this.Xb.Sd]);
        k = k.nb[this.zn + h];
        R(k) ? d.Ea(k) : d.C(k)
    };
    k.prototype.Ju = function(d) {
        d.type = Ub.Vf;
        d.data = this.value
    };
    k.prototype.Fu = function(d) {
        d.type = Ub.Uf;
        d.data = this.value
    };
    k.prototype.Ru = function(d) {
        d.type = Ub.String;
        d.data = this.value
    };
    k.prototype.Uu = function(d) {
        this.first.get(d);
        d.yb() && (d.data = -d.data)
    };
    k.prototype.zu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.yb() && h.yb() && (d.data += h.data, h.lg() && d.ug());
        this.H.bb()
    };
    k.prototype.Su = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.yb() && h.yb() && (d.data -= h.data, h.lg() && d.ug());
        this.H.bb()
    };
    k.prototype.Nu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.yb() && h.yb() && (d.data *= h.data, h.lg() && d.ug());
        this.H.bb()
    };
    k.prototype.Cu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.yb() && h.yb() && (d.data /= h.data, d.ug());
        this.H.bb()
    };
    k.prototype.Mu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.yb() && h.yb() && (d.data %= h.data, h.lg() && d.ug());
        this.H.bb()
    };
    k.prototype.Qu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.yb() && h.yb() && (d.data = Math.pow(d.data, h.data), h.lg() && d.ug());
        this.H.bb()
    };
    k.prototype.Au = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.yb() ? h.Ej() ? d.Ea(d.data.toString() + h.data) : d.data && h.data ? d.I(1) : d.I(0) : d.Ej() && (d.data = h.Ej() ? d.data + h.data: d.data + (Math.round(1E10 * h.data) / 1E10).toString());
        this.H.bb()
    };
    k.prototype.Pu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.yb() && h.yb() && (d.data || h.data ? d.I(1) : d.I(0));
        this.H.bb()
    };
    k.prototype.Bu = function(d) {
        this.first.get(d);
        d.data ? this.Ab.get(d) : this.Ck.get(d)
    };
    k.prototype.Du = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.I(d.data === h.data ? 1 : 0);
        this.H.bb()
    };
    k.prototype.Ou = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.I(d.data !== h.data ? 1 : 0);
        this.H.bb()
    };
    k.prototype.Ku = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.I(d.data < h.data ? 1 : 0);
        this.H.bb()
    };
    k.prototype.Lu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.I(d.data <= h.data ? 1 : 0);
        this.H.bb()
    };
    k.prototype.Gu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.I(d.data > h.data ? 1 : 0);
        this.H.bb()
    };
    k.prototype.Hu = function(d) {
        this.first.get(d);
        var h = this.H.qb();
        this.Ab.get(h);
        d.I(d.data >= h.data ? 1 : 0);
        this.H.bb()
    };
    k.prototype.Eu = function(d) {
        var h = this.kf.nf();
        H(h) ? d.C(h) : d.Ea(h)
    };
    Qb = k;
    p.prototype.lg = function() {
        return this.type === Ub.Uf
    };
    p.prototype.yb = function() {
        return this.type === Ub.Vf || this.type === Ub.Uf
    };
    p.prototype.Ej = function() {
        return this.type === Ub.String
    };
    p.prototype.ug = function() {
        this.lg() || (this.Ej() && (this.data = parseFloat(this.data)), this.type = Ub.Uf)
    };
    p.prototype.I = function(d) {
        this.type = Ub.Vf;
        this.data = Math.floor(d)
    };
    p.prototype.C = function(d) {
        this.type = Ub.Uf;
        this.data = d
    };
    p.prototype.Ea = function(d) {
        this.type = Ub.String;
        this.data = d
    };
    p.prototype.Cd = function(d) {
        H(d) ? (this.type = Ub.Uf, this.data = d) : R(d) ? (this.type = Ub.String, this.data = d.toString()) : (this.type = Ub.Vf, this.data = 0)
    };
    Tb = p;
    Ub = {
        Vf: 0,
        Uf: 1,
        String: 2
    }
})();
function W(k) {
    this.b = k;
    this.ac = []
}
W.prototype.rb = function() {
    var k = {},
    p, d, h, r, a, b, f, e;
    k.waits = [];
    var c = k.waits,
    g;
    p = 0;
    for (d = this.ac.length; p < d; p++) {
        b = this.ac[p];
        g = {
            t: b.time,
            st: b.Qq,
            s: b.hn,
            ev: b.dg.ca,
            sm: [],
            sols: {}
        };
        b.dg.Vc[b.cc] && (g.act = b.dg.Vc[b.cc].ca);
        h = 0;
        for (r = b.V.length; h < r; h++) g.sm.push(b.V[h].ca);
        for (a in b.Qb) if (b.Qb.hasOwnProperty(a)) {
            f = this.b.B[parseInt(a, 10)];
            e = {
                sa: b.Qb[a].ok,
                insts: []
            };
            h = 0;
            for (r = b.Qb[a].Wd.length; h < r; h++) e.insts.push(b.Qb[a].Wd[h].uid);
            g.sols[f.ca.toString()] = e
        }
        c.push(g)
    }
    return k
};
W.prototype.Db = function(k) {
    k = k.waits;
    var p, d, h, r, a, b, f, e, c, g, q;
    p = this.ac.length = 0;
    for (d = k.length; p < d; p++) if (b = k[p], e = this.b.oo[b.ev.toString()]) {
        c = -1;
        h = 0;
        for (r = e.Vc.length; h < r; h++) if (e.Vc[h].ca === b.act) {
            c = h;
            break
        }
        if ( - 1 !== c) {
            f = {
                Qb: {},
                V: [],
                sl: !1
            };
            f.time = b.t;
            f.Qq = b.st || "";
            f.hn = !!b.s;
            f.dg = e;
            f.cc = c;
            h = 0;
            for (r = b.sm.length; h < r; h++)(e = this.b.gg(b.sm[h])) && f.V.push(e);
            for (a in b.sols) if (b.sols.hasOwnProperty(a) && (e = this.b.gg(parseInt(a, 10)))) {
                c = b.sols[a];
                g = {
                    ok: c.sa,
                    Wd: []
                };
                h = 0;
                for (r = c.insts.length; h < r; h++)(q = this.b.dh(c.insts[h])) && g.Wd.push(q);
                f.Qb[e.index.toString()] = g
            }
            this.ac.push(f)
        }
    }
}; (function() {
    function k() {}
    function p(a, b) {
        var e = a.za.c2_feo_val,
        d = b.za.c2_feo_val;
        if (H(e) && H(d)) return e - d;
        e = "" + e;
        d = "" + d;
        return e < d ? -1 : e > d ? 1 : 0
    }
    function d() {}
    function h() {}
    var r = W.prototype;
    k.prototype.Mr = function() {
        return ! 0
    };
    k.prototype.Mn = function() {
        return ! 0
    };
    k.prototype.Bs = function() {
        return ! 0
    };
    k.prototype.Cr = function(a, b, e) {
        return Vb(a, b, e)
    };
    k.prototype.Rs = function(a) {
        var b = this.b.Ma(),
        e = b.Ka,
        d = b.Aj(),
        b = this.b.$h();
        if (d) for (d = 0; d < a && !b.Fa; d++) this.b.ae(e.V),
        b.index = d,
        e.Ad(),
        this.b.Qc(e.V);
        else for (d = 0; d < a && !b.Fa; d++) b.index = d,
        e.Ad();
        this.b.Xh();
        return ! 1
    };
    k.prototype.Bt = function() {
        var a = this.b.Ma(),
        b = a.Ka,
        e = a.Aj(),
        a = this.b.$h();
        if (e) for (e = 0; ! a.Fa; e++) this.b.ae(b.V),
        a.index = e,
        b.Ad() || (a.Fa = !0),
        this.b.Qc(b.V);
        else for (e = 0; ! a.Fa; e++) a.index = e,
        b.Ad() || (a.Fa = !0);
        this.b.Xh();
        return ! 1
    };
    var a = [],
    b = -1;
    k.prototype.Rk = function(c) {
        var e = c.U();
        b++;
        a.length === b && a.push([]);
        var d = a[b];
        ua(d, e.ic());
        var f = this.b.Ma(),
        l = f.Ka,
        h = f.Aj(),
        f = this.b.$h(),
        k,
        n,
        p,
        r,
        s,
        m,
        w = c.Ub;
        if (h) for (h = 0, k = d.length; h < k && !f.Fa; h++) {
            this.b.ae(l.V);
            r = d[h];
            e = c.U();
            e.ba = !1;
            e.c.length = 1;
            e.c[0] = r;
            if (w) for (n = 0, p = r.siblings.length; n < p; n++) s = r.siblings[n],
            m = s.type.U(),
            m.ba = !1,
            m.c.length = 1,
            m.c[0] = s;
            f.index = h;
            l.Ad();
            this.b.Qc(l.V)
        } else for (e.ba = !1, e.c.length = 1, h = 0, k = d.length; h < k && !f.Fa; h++) {
            r = d[h];
            e.c[0] = r;
            if (w) for (n = 0, p = r.siblings.length; n < p; n++) s = r.siblings[n],
            m = s.type.U(),
            m.ba = !1,
            m.c.length = 1,
            m.c[0] = s;
            f.index = h;
            l.Ad()
        }
        d.length = 0;
        this.b.Xh();
        b--;
        return ! 1
    };
    k.prototype.Qr = function(c, e, d) {
        e = c.U();
        b++;
        a.length === b && a.push([]);
        var f = a[b];
        ua(f, e.ic());
        var l = this.b.Ma(),
        h = l.Ka,
        k = this.b.Ll(),
        n = l.Aj(),
        l = this.b.$h(),
        r,
        M,
        s,
        m,
        w;
        r = 0;
        for (M = f.length; r < M; r++) f[r].za.c2_feo_val = k.R[1].get(r);
        f.sort(p);
        1 === d && f.reverse();
        d = c.Ub;
        if (n) for (r = 0, M = f.length; r < M && !l.Fa; r++) {
            this.b.ae(h.V);
            s = f[r];
            e = c.U();
            e.ba = !1;
            e.c.length = 1;
            e.c[0] = s;
            if (d) for (k = 0, n = s.siblings.length; k < n; k++) m = s.siblings[k],
            w = m.type.U(),
            w.ba = !1,
            w.c.length = 1,
            w.c[0] = m;
            l.index = r;
            h.Ad();
            this.b.Qc(h.V)
        } else for (e.ba = !1, e.c.length = 1, r = 0, M = f.length; r < M && !l.Fa; r++) {
            s = f[r];
            e.c[0] = s;
            if (d) for (k = 0, n = s.siblings.length; k < n; k++) m = s.siblings[k],
            w = m.type.U(),
            w.ba = !1,
            w.c.length = 1,
            w.c[0] = m;
            l.index = r;
            h.Ad()
        }
        f.length = 0;
        this.b.Xh();
        b--;
        return ! 1
    };
    k.prototype.Gr = function(a, b, e) {
        return Vb(a.nf(), b, e)
    };
    k.prototype.Wr = function(a) {
        return (a = this.b.hh[a.toLowerCase()]) && a.of
    };
    k.prototype.Dr = function(a, b, e) {
        return a >= b && a <= e
    };
    k.prototype.Hn = function() {
        var a = this.b.Ma();
        return a.wl ? !1 : !a.Ef
    };
    k.prototype.Nn = function() {
        return ! 0
    };
    k.prototype.us = function() {
        return ! 0
    };
    k.prototype.Xk = function() {
        return ! 0
    };
    k.prototype.Cs = function() {
        return ! 0
    };
    k.prototype.Wk = function() {
        return ! 0
    };
    k.prototype.sr = function(a, b, e) {
        return Ga(U(a), U(e)) <= U(b)
    };
    k.prototype.Vr = function(a, b) {
        return Ia(U(a), U(b))
    };
    k.prototype.Ur = function(a, b, e) {
        a = Ea(a);
        b = Ea(b);
        e = Ea(e);
        return Ia(e, b) ? Ia(a, b) && !Ia(a, e) : !(!Ia(a, b) && Ia(a, e))
    };
    r.d = new k;
    d.prototype.Rr = function(a) {
        this.b.ng || this.b.df || (this.b.df = a)
    };
    d.prototype.Jr = function(a, b, e, d) {
        if (b && a && (b = this.b.Co(a, b, e, d))) {
            this.b.ad++;
            var l;
            this.b.trigger(Object.getPrototypeOf(a.ya).d.Tk, b);
            if (b.Ub) for (e = 0, d = b.siblings.length; e < d; e++) l = b.siblings[e],
            this.b.trigger(Object.getPrototypeOf(l.type.ya).d.Tk, l);
            this.b.ad--;
            a = a.U();
            a.ba = !1;
            a.c.length = 1;
            a.c[0] = b;
            if (b.Ub) for (e = 0, d = b.siblings.length; e < d; e++) l = b.siblings[e],
            a = l.type.U(),
            a.ba = !1,
            a.c.length = 1,
            a.c[0] = l
        }
    };
    d.prototype.it = function(a, b) {
        0 === a.ti ? H(b) ? a.fe(b) : a.fe(parseFloat(b)) : 1 === a.ti && a.fe(b.toString())
    };
    d.prototype.rr = function(a, b) {
        0 === a.ti ? H(b) ? a.fe(a.nf() + b) : a.fe(a.nf() + parseFloat(b)) : 1 === a.ti && a.fe(a.nf() + b.toString())
    };
    d.prototype.ut = function(a, b) {
        0 === a.ti && (H(b) ? a.fe(a.nf() - b) : a.fe(a.nf() - parseFloat(b)))
    };
    d.prototype.ht = function(a) {
        0 > a && (a = 0);
        this.b.ge = a
    };
    var f = [],
    e = [];
    d.prototype.At = function(a) {
        if (! (0 > a)) {
            var b, d, h, l = this.b.Ma(),
            t;
            t = f.length ? f.pop() : {
                Qb: {},
                V: []
            };
            t.sl = !1;
            t.time = this.b.lc.ea + a;
            t.Qq = "";
            t.hn = !1;
            t.dg = l.Ka;
            t.cc = l.cc + 1;
            a = 0;
            for (b = this.b.B.length; a < b; a++) h = this.b.B[a],
            d = h.U(),
            d.ba && -1 === l.Ka.V.indexOf(h) || (t.V.push(h), h = void 0, h = e.length ? e.pop() : {
                Wd: []
            },
            h.ok = !1, h.ok = d.ba, ua(h.Wd, d.c), t.Qb[a.toString()] = h);
            this.ac.push(t);
            return ! 0
        }
    };
    d.prototype.ot = function() {
        0 > this.b.Jh || (this.b.Ml().Fa = !0)
    };
    d.prototype.Ts = function() {
        if (!this.b.ng && !this.b.df && this.b.ta) {
            this.b.df = this.b.ta;
            var a, b, e;
            a = 0;
            for (b = this.b.pe.length; a < b; a++) e = this.b.pe[a],
            e.Uw(e.wj)
        }
    };
    r.n = new d;
    h.prototype["int"] = function(a, b) {
        R(b) ? (a.I(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.I(b)
    };
    h.prototype["float"] = function(a, b) {
        R(b) ? (a.C(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.C(b)
    };
    h.prototype.random = function(a, b, e) {
        void 0 === e ? a.C(Math.random() * b) : a.C(Math.random() * (e - b) + b)
    };
    h.prototype.sqrt = function(a, b) {
        a.C(Math.sqrt(b))
    };
    h.prototype.abs = function(a, b) {
        a.C(Math.abs(b))
    };
    h.prototype.round = function(a, b) {
        a.I(Math.round(b))
    };
    h.prototype.floor = function(a, b) {
        a.I(Math.floor(b))
    };
    h.prototype.ceil = function(a, b) {
        a.I(Math.ceil(b))
    };
    h.prototype.sin = function(a, b) {
        a.C(Math.sin(U(b)))
    };
    h.prototype.cos = function(a, b) {
        a.C(Math.cos(U(b)))
    };
    h.prototype.tan = function(a, b) {
        a.C(Math.tan(U(b)))
    };
    h.prototype.asin = function(a, b) {
        a.C(za(Math.asin(b)))
    };
    h.prototype.acos = function(a, b) {
        a.C(za(Math.acos(b)))
    };
    h.prototype.atan = function(a, b) {
        a.C(za(Math.atan(b)))
    };
    h.prototype.exp = function(a, b) {
        a.C(Math.exp(b))
    };
    h.prototype.log10 = function(a, b) {
        a.C(Math.log(b) / Math.LN10)
    };
    h.prototype.max = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var e, d, l;
        e = 2;
        for (d = arguments.length; e < d; e++) l = arguments[e],
        "number" === typeof l && b < l && (b = l);
        a.C(b)
    };
    h.prototype.min = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var e, d, l;
        e = 2;
        for (d = arguments.length; e < d; e++) l = arguments[e],
        "number" === typeof l && b > l && (b = l);
        a.C(b)
    };
    h.prototype.Ce = function(a) {
        a.C(this.b.Ce)
    };
    h.prototype.ge = function(a) {
        a.C(this.b.ge)
    };
    h.prototype.time = function(a) {
        a.C(this.b.lc.ea)
    };
    h.prototype.pi = function(a) {
        a.I(this.b.pi)
    };
    h.prototype.Uj = function(a) {
        a.I(this.b.Uj)
    };
    h.prototype.El = function(a) {
        a.I(this.b.El)
    };
    h.prototype.hw = function(a, b) {
        var e, d, l;
        if (this.b.tg.length) if (b) {
            d = 0;
            for (l = this.b.tg.length; d < l; d++) if (e = this.b.tg[d], e.name === b) {
                a.I(e.index);
                return
            }
            a.I(0)
        } else e = this.b.Ml(),
        a.I(e ? e.index: -1);
        else a.I(0)
    };
    h.prototype.fu = function(a, b, e, d, l) {
        a.C(Ka(b, e, d, l))
    };
    h.prototype.g = function(a, b, e, d, l) {
        a.C(za(Fa(b, e, d, l)))
    };
    h.prototype.Wt = function(a, b, e, d) {
        b < e ? a.C(e) : b > d ? a.C(d) : a.C(b)
    };
    h.prototype.find = function(a, b, e) {
        R(b) && R(e) ? a.I(b.search(new RegExp(Xa(e), "i"))) : a.I( - 1)
    };
    h.prototype.left = function(a, b, e) {
        a.Ea(R(b) ? b.substr(0, e) : "")
    };
    h.prototype.right = function(a, b, e) {
        a.Ea(R(b) ? b.substr(b.length - e) : "")
    };
    h.prototype.ix = function(a, b, e, d) {
        R(b) && R(d) ? (b = b.split(d), e = S(e), 0 > e || e >= b.length ? a.Ea("") : a.Ea(b[e])) : a.Ea("")
    };
    h.prototype.jx = function(a, b, e) {
        R(b) && b.length ? a.I(b.split(e).length) : a.I(0)
    };
    h.prototype.replace = function(a, b, e, d) {
        R(b) && R(e) && R(d) ? a.Ea(b.replace(new RegExp(Xa(e), "gi"), d)) : a.Ea(R(b) ? b: "")
    };
    h.prototype.trim = function(a, b) {
        a.Ea(R(b) ? b.trim() : "")
    };
    h.prototype.Vt = function(a) {
        var b = S(Math.random() * (arguments.length - 1));
        a.Cd(arguments[b + 1])
    };
    h.prototype.ml = function(a) {
        a.C(this.b.ml / 1E3)
    };
    h.prototype.tx = function(a, b) {
        var e = this.b.rj(b);
        a.C(e ? e.Ua: 0)
    };
    h.prototype.vx = function(a, b) {
        var e = this.b.rj(b);
        a.C(e ? e.Va: 0)
    };
    h.prototype.ux = function(a, b) {
        var e = this.b.rj(b);
        a.C(e ? e.gb: 0)
    };
    h.prototype.qx = function(a, b) {
        var e = this.b.rj(b);
        a.C(e ? e.fb: 0)
    };
    h.prototype.Gf = function(a) {
        a.C(this.b.Gf)
    };
    r.u = new h;
    r.Mw = function() {
        var a, b, d, h, l, t, k = this.b.Ma();
        a = 0;
        for (d = this.ac.length; a < d; a++) {
            h = this.ac[a];
            if ( - 1 === h.time) {
                if (!h.hn) continue
            } else if (h.time > this.b.lc.ea) continue;
            k.Ka = h.dg;
            k.cc = h.cc;
            k.Ya = 0;
            for (b in h.Qb) h.Qb.hasOwnProperty(b) && (l = this.b.B[parseInt(b, 10)].U(), t = h.Qb[b], l.ba = t.ok, ua(l.c, t.Wd), l = t, l.Wd.length = 0, e.push(l));
            h.dg.Lw();
            this.b.ll(h.V);
            h.sl = !0
        }
        b = a = 0;
        for (d = this.ac.length; a < d; a++) h = this.ac[a],
        this.ac[b] = h,
        h.sl ? (Na(h.Qb), h.V.length = 0, f.push(h)) : b++;
        this.ac.length = b
    }
})(); (function() {
    fb = function(k, d) {
        var h = k[1],
        r = k[3],
        a = k[4],
        b = k[5],
        f = k[6],
        e = k[7],
        c = k[8];
        d.d || (d.d = {});
        d.n || (d.n = {});
        d.u || (d.u = {});
        var g = d.d,
        q = d.n,
        v = d.u;
        r && (g.Qk = function(a, b) {
            return Vb(this.x, a, b)
        },
        g.Hr = function(a, b) {
            return Vb(this.y, a, b)
        },
        g.Xr = function() {
            var a = this.j;
            this.ma();
            var b = this.X;
            return ! (b.right < a.Ua || b.bottom < a.Va || b.left > a.gb || b.top > a.fb)
        },
        g.Jx = function() {
            this.ma();
            var a = this.X,
            b = this.b.ta;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        },
        g.Qx = function(a, b, c) {
            var e = this.U(),
            d = e.ic();
            if (!d.length) return ! 1;
            var g = d[0],
            f = g,
            h = Ka(g.x, g.y, b, c),
            k,
            r,
            p;
            k = 1;
            for (r = d.length; k < r; k++) if (g = d[k], p = Ka(g.x, g.y, b, c), 0 === a && p < h || 1 === a && p > h) h = p,
            f = g;
            e.Uh(f);
            return ! 0
        },
        q.bl = function(a) {
            this.x !== a && (this.x = a, this.Da())
        },
        q.kt = function(a) {
            this.y !== a && (this.y = a, this.Da())
        },
        q.ct = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a,
            this.y = b,
            this.Da()
        },
        q.dt = function(a, b) {
            var c = a.pv(this);
            if (c) {
                var e;
                c.Pl ? (e = c.Pl(b, !0), c = c.Pl(b, !1)) : (e = c.x, c = c.y);
                if (this.x !== e || this.y !== c) this.x = e,
                this.y = c,
                this.Da()
            }
        },
        q.Mx = function(a) {
            0 !== a && (this.x += Math.cos(this.g) * a, this.y += Math.sin(this.g) * a, this.Da())
        },
        q.ks = function(a, b) {
            0 !== b && (this.x += Math.cos(U(a)) * b, this.y += Math.sin(U(a)) * b, this.Da())
        },
        v.Xn = function(a) {
            a.C(this.x)
        },
        v.Yn = function(a) {
            a.C(this.y)
        },
        v.Ce = function(a) {
            a.C(this.b.bh(this))
        });
        a && (g.Ex = function(a, b) {
            return Vb(this.width, a, b)
        },
        g.Dx = function(a, b) {
            return Vb(this.height, a, b)
        },
        q.jt = function(a) {
            this.width !== a && (this.width = a, this.Da())
        },
        q.ay = function(a) {
            this.height !== a && (this.height = a, this.Da())
        },
        q.Wn = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a,
            this.height = b,
            this.Da()
        },
        v.cl = function(a) {
            a.C(this.width)
        },
        v.In = function(a) {
            a.C(this.height)
        },
        v.Ax = function(a) {
            this.ma();
            a.C(this.X.left)
        },
        v.Cx = function(a) {
            this.ma();
            a.C(this.X.top)
        },
        v.Bx = function(a) {
            this.ma();
            a.C(this.X.right)
        },
        v.zx = function(a) {
            this.ma();
            a.C(this.X.bottom)
        });
        b && (g.sr = function(a, b) {
            return Ga(this.g, U(b)) <= U(a)
        },
        g.Vr = function(a) {
            return Ia(this.g, U(a))
        },
        g.Ur = function(a, b) {
            var c = Ea(a),
            e = Ea(b),
            d = Ba(this.g);
            return Ia(e, c) ? Ia(d, c) && !Ia(d, e) : !(!Ia(d, c) && Ia(d, e))
        },
        q.Wx = function(a) {
            a = U(Aa(a));
            isNaN(a) || this.g === a || (this.g = a, this.Da())
        },
        q.Vs = function(a) {
            0 === a || isNaN(a) || (this.g += U(a), this.g = Ba(this.g), this.Da())
        },
        q.Tx = function(a) {
            0 === a || isNaN(a) || (this.g -= U(a), this.g = Ba(this.g), this.Da())
        },
        q.Ux = function(a, b) {
            var c = Ha(this.g, U(b), U(a));
            isNaN(c) || this.g === c || (this.g = c, this.Da())
        },
        q.Vx = function(a, b, c) {
            a = Ha(this.g, Math.atan2(c - this.y, b - this.x), U(a));
            isNaN(a) || this.g === a || (this.g = a, this.Da())
        },
        q.by = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.g === c || (this.g = c, this.Da())
        },
        v.yx = function(a) {
            a.C(Da(this.g))
        });
        h || (g.Gn = function(a, b, c) {
            return Vb(this.nb[a], b, c)
        },
        g.Hx = function(a) {
            return this.nb[a]
        },
        g.Rx = function(a, b) {
            var c = this.U(),
            e = c.ic();
            if (!e.length) return ! 1;
            var d = e[0],
            g = d,
            f = d.nb[b],
            h,
            k,
            r;
            h = 1;
            for (k = e.length; h < k; h++) if (d = e[h], r = d.nb[b], 0 === a && r < f || 1 === a && r > f) f = r,
            g = d;
            c.Uh(g);
            return ! 0
        },
        g.Un = function(a) {
            var b, c, e, d, g;
            if (this.b.Ll().xj) {
                g = this.U();
                if (g.ba) for (g.ba = !1, g.c.length = 0, g.qa.length = 0, e = this.c, b = 0, c = e.length; b < c; b++) d = e[b],
                d.uid === a ? g.qa.push(d) : g.c.push(d);
                else {
                    e = b = 0;
                    for (c = g.c.length; b < c; b++) d = g.c[b],
                    g.c[e] = d,
                    d.uid === a ? g.qa.push(d) : e++;
                    g.c.length = e
                }
                this.Jd();
                return !! g.c.length
            }
            d = this.b.dh(a);
            if (!d) return ! 1;
            g = this.U();
            if (!g.ba && -1 === g.c.indexOf(d)) return ! 1;
            if (this.J) for (a = d.type.Ja, b = 0, c = a.length; b < c; b++) {
                if (a[b] === this) return g.Uh(d),
                this.Jd(),
                !0
            } else if (d.type === this) return g.Uh(d),
            this.Jd(),
            !0;
            return ! 1
        },
        g.Tk = function() {
            return ! 0
        },
        g.Ln = function() {
            return ! 0
        },
        q.$s = function(a, b) {
            var c = this.nb;
            H(c[a]) ? c[a] = H(b) ? b: parseFloat(b) : R(c[a]) && (c[a] = R(b) ? b: b.toString())
        },
        q.xx = function(a, b) {
            var c = this.nb;
            H(c[a]) ? c[a] = H(b) ? c[a] + b: c[a] + parseFloat(b) : R(c[a]) && (c[a] = R(b) ? c[a] + b: c[a] + b.toString())
        },
        q.tt = function(a, b) {
            var c = this.nb;
            H(c[a]) && (c[a] = H(b) ? c[a] - b: c[a] - parseFloat(b))
        },
        q.Xx = function(a, b) {
            this.nb[a] = b ? 1 : 0
        },
        q.cy = function(a) {
            this.nb[a] = 1 - this.nb[a]
        },
        q.Lr = function() {
            this.b.me(this)
        },
        q.gs || (q.gs = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch(e) {
                return
            }
            this.b.Mj(this, b, !0);
            this.Wc && this.Wc();
            if (this.T) for (a = 0, b = this.T.length; a < b; ++a) c = this.T[a],
            c.Wc && c.Wc()
        }), v.Fx = function(a) {
            var b = a.zg.c.length,
            c, e, d;
            c = 0;
            for (e = this.b.$c.length; c < e; c++) d = this.b.$c[c],
            a.zg.J ? 0 <= d.type.Ja.indexOf(a.zg) && b++:d.type === a.zg && b++;
            a.I(b)
        },
        v.Ns = function(a) {
            a.I(a.zg.U().ic().length)
        },
        v.yt = function(a) {
            a.I(this.uid)
        },
        v.Gx = function(a) {
            a.I(this.fh())
        },
        v.Pk || (v.Pk = function(a) {
            a.Ea(JSON.stringify(this.b.Xm(this, !0)))
        }));
        f && (g.Jn = function() {
            return this.visible
        },
        q.al = function(a) { ! a !== !this.visible && (this.visible = a, this.b.la = !0)
        },
        g.Fr = function(a, b) {
            return Vb(bb(100 * this.opacity), a, b)
        },
        q.bt = function(a) {
            a /= 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.la = !0)
        },
        v.Opacity = function(a) {
            a.C(bb(100 * this.opacity))
        });
        e && (g.Ix = function(a) {
            return a ? this.j === a: !1
        },
        g.Sx = function(a) {
            var b = this.U(),
            c = b.ic();
            if (!c.length) return ! 1;
            var e = c[0],
            d = e,
            g,
            f;
            g = 1;
            for (f = c.length; g < f; g++) if (e = c[g], 0 === a) {
                if (e.j.index > d.j.index || e.j.index === d.j.index && e.Ic() > d.Ic()) d = e
            } else if (e.j.index < d.j.index || e.j.index === d.j.index && e.Ic() < d.Ic()) d = e;
            b.Uh(d);
            return ! 0
        },
        q.ns = function() {
            var a = this.Ic();
            a !== this.j.c.length - 1 && (ta(this.j.c, a), this.j.c.push(this), this.b.la = !0, this.j.rc = !0)
        },
        q.ls = function() {
            var a = this.Ic();
            0 !== a && (ta(this.j.c, a), this.j.c.unshift(this), this.b.la = !0, this.j.rc = !0)
        },
        q.Nx = function(a) {
            a && a != this.j && (ta(this.j.c, this.Ic()), this.j.rc = !0, this.j = a, this.Tf = a.c.length, a.c.push(this), this.b.la = !0)
        },
        q.Et = function(a, b) {
            var c = 0 === a;
            if (b) {
                var e = b.Xo(this);
                if (e && e.uid !== this.uid) {
                    this.j.index !== e.j.index && (ta(this.j.c, this.Ic()), this.j.rc = !0, this.j = e.j, this.Tf = e.j.c.length, e.j.c.push(this));
                    var d = this.Ic(),
                    e = e.Ic();
                    ta(this.j.c, d);
                    d < e && e--;
                    c && e++;
                    e === this.j.c.length ? this.j.c.push(this) : this.j.c.splice(e, 0, this);
                    this.j.rc = !0;
                    this.b.la = !0
                }
            }
        },
        v.Lx = function(a) {
            a.I(this.j.bq)
        },
        v.Kx = function(a) {
            a.Ea(this.j.name)
        },
        v.dy = function(a) {
            a.I(this.Ic())
        });
        c && (q.Zx = function(a, b) {
            if (this.b.D) {
                var c = this.type.Ol(b);
                if (! (0 > c)) {
                    var e = 1 === a;
                    this.oe[c] !== e && (this.oe[c] = e, this.je(), this.b.la = !0)
                }
            }
        },
        q.$x = function(a, b, c) {
            if (this.b.D) {
                var e = this.type.Ol(a);
                0 > e || (a = this.type.P[e], e = this.La[e], b = Math.floor(b), 0 > b || b >= e.length || (1 === this.b.D.tv(a.Fb, b) && (c /= 100), e[b] !== c && (e[b] = c, a.Bb && (this.b.la = !0))))
            }
        })
    };
    Bb = function() {
        this.kl = this.hl = !0;
        this.type.Di = !0;
        this.b.la = !0;
        var k, d, h = this.il;
        k = 0;
        for (d = h.length; k < d; ++k) h[k](this)
    };
    Cb = function(k) {
        k && this.il.push(k)
    };
    Eb = function() {
        if (this.hl) {
            var k = this.X,
            d = this.Sb;
            k.set(this.x, this.y, this.x + this.width, this.y + this.height);
            k.offset( - this.Lb * this.width, -this.Mb * this.height);
            this.g ? (k.offset( - this.x, -this.y), d.Lq(k, this.g), d.offset(this.x, this.y), d.po(k)) : d.Qf(k);
            k.normalize();
            this.hl = !1
        }
    };
    var k = new qa(0, 0, 0, 0);
    Fb = function() {
        if (this.kl && this.ye) {
            this.ma();
            var p = this.type.Ti,
            d = this.Si,
            h = this.X;
            k.set(p.Bi(h.left), p.Ci(h.top), p.Bi(h.right), p.Ci(h.bottom));
            d.yu(k) || (d.right < d.left ? p.update(this, null, k) : p.update(this, d, k), d.Yt(k), this.kl = !1)
        }
    };
    Db = function(k, d) {
        return this.X.Tb(k, d) && this.Sb.Tb(k, d) ? this.fa && !this.fa.Af() ? (this.fa.cf(this.width, this.height, this.g), this.fa.Tb(k - this.x, d - this.y)) : !0 : !1
    };
    ub = function() {
        this.type.Jk();
        return this.rf
    };
    Gb = function() {
        this.j.jr();
        return this.Tf
    };
    Hb = function() {
        this.na.length = 0;
        var k, d;
        k = 0;
        for (d = this.oe.length; k < d; k++) this.oe[k] && this.na.push(this.type.P[k]);
        this.lr = !!this.na.length
    };
    vb = function() {
        return "Inst" + this.Aq
    };
    ib = function(k) {
        if (k && k.Ub && k.type != this) {
            var d, h, r;
            d = 0;
            for (h = k.siblings.length; d < h; d++) if (r = k.siblings[d], r.type == this) return r
        }
        k = this.U().ic();
        return k.length ? k[0] : null
    };
    jb = function(k) {
        var d = this.U().ic();
        return d.length ? d[k.fh() % d.length] : null
    };
    hb = function() {
        if (this.Gg && !this.J) {
            var k, d;
            k = 0;
            for (d = this.c.length; k < d; k++) this.c[k].rf = k;
            var h = k,
            r = this.b.$c;
            k = 0;
            for (d = r.length; k < d; ++k) r[k].type === this && (r[k].rf = h++);
            this.Gg = !1
        }
    };
    sb = function(k) {
        if (k < this.c.length) return this.c[k];
        k -= this.c.length;
        var d = this.b.$c,
        h, r;
        h = 0;
        for (r = d.length; h < r; ++h) if (d[h].type === this) {
            if (0 === k) return d[h]; --k
        }
        return null
    };
    kb = function() {
        return this.Ue[this.Od]
    };
    lb = function() {
        this.Od++;
        this.Od === this.Ue.length ? this.Ue.push(new gb(this)) : this.Ue[this.Od].ba = !0
    };
    mb = function() {
        this.Od++;
        this.Od === this.Ue.length && this.Ue.push(new gb(this));
        var k = this.Ue[this.Od],
        d = this.Ue[this.Od - 1];
        d.ba ? k.ba = !0 : (k.ba = !1, ua(k.c, d.c), ua(k.qa, d.qa))
    };
    nb = function() {
        this.Od--
    };
    ob = function(k) {
        var d, h, r, a, b, f = 0;
        if (!this.J) for (d = 0, h = this.Ja.length; d < h; d++) for (b = this.Ja[d], r = 0, a = b.Wa.length; r < a; r++) {
            if (k === b.Wa[r].name) return this.za.lastBehIndex = f,
            b.Wa[r];
            f++
        }
        d = 0;
        for (h = this.Wa.length; d < h; d++) {
            if (k === this.Wa[d].name) return this.za.lastBehIndex = f,
            this.Wa[d];
            f++
        }
        return null
    };
    pb = function(k) {
        return this.qj(k) ? this.za.lastBehIndex: -1
    };
    qb = function(k) {
        var d, h;
        d = 0;
        for (h = this.P.length; d < h; d++) if (this.P[d].name === k) return d;
        return - 1
    };
    rb = function() {
        if (this.Ub && !this.J) {
            var k, d, h, r, a, b, f;
            this.Jk();
            b = this.U();
            var e = b.ba,
            c = (k = this.b.Ma()) && k.Ka && k.Ka.Nc;
            k = 0;
            for (d = this.fc.length; k < d; k++) if (a = this.fc[k], a !== this && (a.Jk(), f = a.U(), f.ba = e, !e)) {
                f.c.length = b.c.length;
                h = 0;
                for (r = b.c.length; h < r; h++) f.c[h] = a.Yo(b.c[h].rf);
                if (c) for (f.qa.length = b.qa.length, h = 0, r = b.qa.length; h < r; h++) f.qa[h] = a.Yo(b.qa[h].rf)
            }
        }
    };
    tb = function() {
        return "Type" + this.ca
    };
    Vb = function(k, d, h) {
        if ("undefined" === typeof k || "undefined" === typeof h) return ! 1;
        switch (d) {
        case 0:
            return k === h;
        case 1:
            return k !== h;
        case 2:
            return k < h;
        case 3:
            return k <= h;
        case 4:
            return k > h;
        case 5:
            return k >= h;
        default:
            return ! 1
        }
    }
})();
var cc = {};
function gc(k) {
    this.b = k
} (function() {
    function k() {}
    function p() {}
    function d() {}
    var h = !1,
    r = null,
    a = null,
    b = "",
    f = gc.prototype;
    f.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    f.W.prototype.G = function() {};
    f.O = function(c) {
        this.type = c;
        this.b = c.b;
        this.nd = this.Bf = "";
        this.ed = 0;
        this.timeout = -1;
        if (h = this.b.Xd) r = require("path"),
        a = require("fs"),
        b = r.dirname(process.execPath) + "\\"
    };
    var e = f.O.prototype,
    c = null;
    window.C2_AJAX_DCSide = function(a, b, e) {
        c && ("success" === a ? (c.nd = b, c.Bf = e, c.b.trigger(gc.prototype.d.xi, c)) : "error" === a ? (c.nd = b, c.b.trigger(gc.prototype.d.Vk, c)) : "progress" === a && (c.ed = e, c.nd = b, c.b.trigger(gc.prototype.d.Sn, c)))
    };
    e.G = function() {
        c = this
    };
    e.rb = function() {
        return {
            lastData: this.Bf
        }
    };
    e.Db = function(a) {
        this.Bf = a.lastData;
        this.nd = "";
        this.ed = 0
    };
    var g = {},
    q = "";
    e.lu = function(c, e) {
        if (this.b.xb) AppMobi.webview.execute('C2_AJAX_WebSide("' + c + '", "' + e + '", "GET", null);');
        else {
            var d = this,
            f = null,
            k = function() {
                d.nd = c;
                d.b.trigger(gc.prototype.d.Vk, d)
            },
            r = function() {
                if (h) {
                    var c = b + e;
                    a.existsSync(c) ? a.readFile(c, {
                        encoding: "utf8"
                    },
                    function(a, b) {
                        a ? k() : (d.Bf = b.replace(/\r\n/g, "\n"), d.b.trigger(gc.prototype.d.xi, d))
                    }) : k()
                } else k()
            },
            p = function(a) {
                a.lengthComputable && (d.ed = a.loaded / a.total, d.nd = c, d.b.trigger(gc.prototype.d.Sn, d))
            };
            try {
                f = this.b.zf ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
                f.onreadystatechange = function() {
                    4 === f.readyState && (d.nd = c, d.Bf = f.responseText ? f.responseText.replace(/\r\n/g, "\n") : "", 400 <= f.status ? d.b.trigger(gc.prototype.d.Vk, d) : h && !d.Bf.length || d.b.trigger(gc.prototype.d.xi, d))
                };
                this.b.zf || (f.onerror = r, f.ontimeout = r, f.onabort = r, f.onprogress = p);
                f.open("GET", e); ! this.b.zf && 0 <= this.timeout && "undefined" !== typeof f.timeout && (f.timeout = this.timeout);
                try {
                    f.responseType = "text"
                } catch(s) {}
                if (f.setRequestHeader) {
                    for (var m in g) if (g.hasOwnProperty(m)) try {
                        f.setRequestHeader(m, g[m])
                    } catch(w) {}
                    g = {}
                }
                if (q && f.overrideMimeType) {
                    try {
                        f.overrideMimeType(q)
                    } catch(ca) {}
                    q = ""
                }
                f.send()
            } catch(T) {
                r()
            }
        }
    };
    k.prototype.xi = function(a) {
        return cb(a, this.nd)
    };
    k.prototype.Vk = function(a) {
        return cb(a, this.nd)
    };
    k.prototype.Sn = function(a) {
        return cb(a, this.nd)
    };
    f.d = new k;
    p.prototype.Ss = function(a, b) {
        this.lu(a, b)
    };
    f.n = new p;
    d.prototype.ds = function(a) {
        a.Ea(this.Bf)
    };
    f.u = new d
})();
function hc(k) {
    this.b = k
} (function() {
    function k() {
        return f.length ? f.pop() : []
    }
    function p(a) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; b++) Array.isArray(a[b]) && p(a[b]);
        a.length = 0;
        f.push(a)
    }
    function d() {}
    function h() {}
    function r() {}
    var a = hc.prototype;
    a.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    a.W.prototype.G = function() {};
    a.O = function(a) {
        this.type = a;
        this.b = a.b
    };
    var b = a.O.prototype,
    f = [];
    Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    });
    b.G = function() {
        this.Kb = this.q[0];
        this.gc = this.q[1];
        this.Bc = this.q[2];
        this.Yb || (this.ld = k());
        var a = this.ld;
        a.length = this.Kb;
        var b, d, f;
        for (b = 0; b < this.Kb; b++) for (a[b] || (a[b] = k()), a[b].length = this.gc, d = 0; d < this.gc; d++) for (a[b][d] || (a[b][d] = k()), a[b][d].length = this.Bc, f = 0; f < this.Bc; f++) a[b][d][f] = 0;
        this.ah = this.Ee = this.Fc = 0
    };
    b.Le = function() {
        var a;
        for (a = 0; a < this.Kb; a++) p(this.ld[a]);
        this.ld.length = 0
    };
    b.Yc = function(a, b, d) {
        a = Math.floor(a);
        b = Math.floor(b);
        d = Math.floor(d);
        return isNaN(a) || 0 > a || a > this.Kb - 1 || isNaN(b) || 0 > b || b > this.gc - 1 || isNaN(d) || 0 > d || d > this.Bc - 1 ? 0 : this.ld[a][b][d]
    };
    b.set = function(a, b, d, f) {
        a = Math.floor(a);
        b = Math.floor(b);
        d = Math.floor(d);
        isNaN(a) || 0 > a || a > this.Kb - 1 || isNaN(b) || 0 > b || b > this.gc - 1 || isNaN(d) || 0 > d || d > this.Bc - 1 || (this.ld[a][b][d] = f)
    };
    b.gv = function() {
        return JSON.stringify({
            c2array: !0,
            size: [this.Kb, this.gc, this.Bc],
            data: this.ld
        })
    };
    b.rb = function() {
        return {
            size: [this.Kb, this.gc, this.Bc],
            data: this.ld
        }
    };
    b.Db = function(a) {
        var b = a.size;
        this.Kb = b[0];
        this.gc = b[1];
        this.Bc = b[2];
        this.ld = a.data
    };
    b.Re = function(a, b, d) {
        0 > a && (a = 0);
        0 > b && (b = 0);
        0 > d && (d = 0);
        if (this.Kb !== a || this.gc !== b || this.Bc !== d) {
            this.Kb = a;
            this.gc = b;
            this.Bc = d;
            var f, h, l = this.ld;
            l.length = a;
            for (a = 0; a < this.Kb; a++) for (fa(l[a]) && (l[a] = k()), l[a].length = b, f = 0; f < this.gc; f++) for (fa(l[a][f]) && (l[a][f] = k()), l[a][f].length = d, h = 0; h < this.Bc; h++) fa(l[a][f][h]) && (l[a][f][h] = 0)
        }
    };
    d.prototype.Qk = function(a, b, d) {
        return Vb(this.Yc(a, 0, 0), b, d)
    };
    b.ul = function(a) {
        this.b.ae(a.V);
        a.Ad();
        this.b.Qc(a.V)
    };
    d.prototype.ur = function(a) {
        var b = this.b.Ma().Ka;
        this.ah = this.Ee = this.Fc = 0;
        switch (a) {
        case 0:
            for (this.Fc = 0; this.Fc < this.Kb; this.Fc++) for (this.Ee = 0; this.Ee < this.gc; this.Ee++) for (this.ah = 0; this.ah < this.Bc; this.ah++) this.ul(b);
            break;
        case 1:
            for (this.Fc = 0; this.Fc < this.Kb; this.Fc++) for (this.Ee = 0; this.Ee < this.gc; this.Ee++) this.ul(b);
            break;
        case 2:
            for (this.Fc = 0; this.Fc < this.Kb; this.Fc++) this.ul(b)
        }
        this.ah = this.Ee = this.Fc = 0;
        return ! 1
    };
    a.d = new d;
    h.prototype.yr = function() {
        var a, b, d;
        for (a = 0; a < this.Kb; a++) for (b = 0; b < this.gc; b++) for (d = 0; d < this.Bc; d++) this.ld[a][b][d] = 0
    };
    h.prototype.Wn = function(a, b, d) {
        this.Re(a, b, d)
    };
    h.prototype.bl = function(a, b) {
        this.set(a, 0, 0, b)
    };
    a.n = new h;
    r.prototype.wr = function(a, b, d, f) {
        a.Cd(this.Yc(b, d || 0, f || 0))
    };
    r.prototype.cl = function(a) {
        a.I(this.Kb)
    };
    r.prototype.In = function(a) {
        a.I(this.gc)
    };
    r.prototype.Kr = function(a) {
        a.I(this.Fc)
    };
    r.prototype.Pk = function(a) {
        a.Ea(this.gv())
    };
    a.u = new r
})();
function ic(k) {
    this.b = k
} (function() {
    function k(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }
    function p(a) {
        a = a.toLowerCase();
        return V.hasOwnProperty(a) && V[a].length ? V[a][0].uc() : A.destination
    }
    function d() {
        return A.createGain ? A.createGain() : A.createGainNode()
    }
    function h(a) {
        return A.createDelay ? A.createDelay(a) : A.createDelayNode(a)
    }
    function r(a) {
        a.start ? a.start(0) : a.noteOn(0)
    }
    function a(a, b, c) {
        a.start ? a.start(0, b) : a.noteGrainOn(0, b, c - b)
    }
    function b(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch(b) {}
    }
    function f(a, b, c, e, g, f) {
        this.type = "filter";
        this.ob = [a, b, c, e, g, f];
        this.ha = d();
        this.N = d();
        this.N.gain.value = f;
        this.M = d();
        this.M.gain.value = 1 - f;
        this.Za = A.createBiquadFilter();
        this.Za.type = "number" === typeof this.Za.type ? a: xc[a];
        this.Za.frequency.value = b;
        this.Za.detune && (this.Za.detune.value = c);
        this.Za.Q.value = e;
        this.Za.gain.value = g;
        this.ha.connect(this.Za);
        this.ha.connect(this.M);
        this.Za.connect(this.N)
    }
    function e(a, b, c) {
        this.type = "delay";
        this.ob = [a, b, c];
        this.ha = d();
        this.N = d();
        this.N.gain.value = c;
        this.M = d();
        this.M.gain.value = 1 - c;
        this.Kh = d();
        this.Dc = h(a);
        this.Dc.delayTime.value = a;
        this.bj = d();
        this.bj.gain.value = b;
        this.ha.connect(this.Kh);
        this.ha.connect(this.M);
        this.Kh.connect(this.N);
        this.Kh.connect(this.Dc);
        this.Dc.connect(this.bj);
        this.bj.connect(this.Kh)
    }
    function c(a, b, c, e) {
        this.type = "convolve";
        this.ob = [b, c, e];
        this.ha = d();
        this.N = d();
        this.N.gain.value = c;
        this.M = d();
        this.M.gain.value = 1 - c;
        this.ef = A.createConvolver();
        a && (this.ef.normalize = b, this.ef.buffer = a);
        this.ha.connect(this.ef);
        this.ha.connect(this.M);
        this.ef.connect(this.N)
    }
    function g(a, b, c, e, g) {
        this.type = "flanger";
        this.ob = [a, b, c, e, g];
        this.ha = d();
        this.M = d();
        this.M.gain.value = 1 - g / 2;
        this.N = d();
        this.N.gain.value = g / 2;
        this.lj = d();
        this.lj.gain.value = e;
        this.Dc = h(a + b);
        this.Dc.delayTime.value = a;
        this.zb = A.createOscillator();
        this.zb.frequency.value = c;
        this.oc = d();
        this.oc.gain.value = b;
        this.ha.connect(this.Dc);
        this.ha.connect(this.M);
        this.Dc.connect(this.N);
        this.Dc.connect(this.lj);
        this.lj.connect(this.Dc);
        this.zb.connect(this.oc);
        this.oc.connect(this.Dc.delayTime);
        r(this.zb)
    }
    function q(a, b, c, e, g, f) {
        this.type = "phaser";
        this.ob = [a, b, c, e, g, f];
        this.ha = d();
        this.M = d();
        this.M.gain.value = 1 - f / 2;
        this.N = d();
        this.N.gain.value = f / 2;
        this.Za = A.createBiquadFilter();
        this.Za.type = "number" === typeof this.Za.type ? 7 : "allpass";
        this.Za.frequency.value = a;
        this.Za.detune && (this.Za.detune.value = b);
        this.Za.Q.value = c;
        this.zb = A.createOscillator();
        this.zb.frequency.value = g;
        this.oc = d();
        this.oc.gain.value = e;
        this.ha.connect(this.Za);
        this.ha.connect(this.M);
        this.Za.connect(this.N);
        this.zb.connect(this.oc);
        this.oc.connect(this.Za.frequency);
        r(this.zb)
    }
    function v(a) {
        this.type = "gain";
        this.ob = [a];
        this.ka = d();
        this.ka.gain.value = a
    }
    function l(a, b) {
        this.type = "tremolo";
        this.ob = [a, b];
        this.ka = d();
        this.ka.gain.value = 1 - b / 2;
        this.zb = A.createOscillator();
        this.zb.frequency.value = a;
        this.oc = d();
        this.oc.gain.value = b / 2;
        this.zb.connect(this.oc);
        this.oc.connect(this.ka.gain);
        r(this.zb)
    }
    function t(a, b) {
        this.type = "ringmod";
        this.ob = [a, b];
        this.ha = d();
        this.N = d();
        this.N.gain.value = b;
        this.M = d();
        this.M.gain.value = 1 - b;
        this.ei = d();
        this.ei.gain.value = 0;
        this.zb = A.createOscillator();
        this.zb.frequency.value = a;
        this.zb.connect(this.ei.gain);
        r(this.zb);
        this.ha.connect(this.ei);
        this.ha.connect(this.M);
        this.ei.connect(this.N)
    }
    function G(a, b, c, e, g) {
        this.type = "distortion";
        this.ob = [a, b, c, e, g];
        this.ha = d();
        this.ek = d();
        this.dk = d();
        this.Tw(c, Math.pow(10, e / 20));
        this.N = d();
        this.N.gain.value = g;
        this.M = d();
        this.M.gain.value = 1 - g;
        this.Kk = A.createWaveShaper();
        this.$i = new Float32Array(65536);
        this.bv(a, b);
        this.Kk.$i = this.$i;
        this.ha.connect(this.ek);
        this.ha.connect(this.M);
        this.ek.connect(this.Kk);
        this.Kk.connect(this.dk);
        this.dk.connect(this.N)
    }
    function n(a, b, c, e, d) {
        this.type = "compressor";
        this.ob = [a, b, c, e, d];
        this.ka = A.createDynamicsCompressor();
        try {
            this.ka.threshold.value = a,
            this.ka.knee.value = b,
            this.ka.ratio.value = c,
            this.ka.attack.value = e,
            this.ka.release.value = d
        } catch(g) {}
    }
    function u(a, b) {
        this.type = "analyser";
        this.ob = [a, b];
        this.ka = A.createAnalyser();
        this.ka.fftSize = a;
        this.ka.smoothingTimeConstant = b;
        this.Zu = new Float32Array(this.ka.frequencyBinCount);
        this.Oq = new Uint8Array(a);
        this.Th = 0
    }
    function M() {
        this.K = null;
        this.Nj = 0;
        this.Ve = [];
        this.Bm = this.Hj = this.Gj = 0
    }
    function s(a, b) {
        this.src = a;
        this.da = D;
        this.bd = b;
        this.ho = !1;
        var c = this;
        this.zm = this.Km = null;
        this.Cg = [];
        this.pk = 0;
        this.Dn = this.Bl = this.Sq = this.Zj = !1;
        1 === D && b && (this.da = 0, this.Km = d());
        this.$e = this.ua = null;
        var e;
        switch (this.da) {
        case 0:
            this.ua = new Audio;
            this.ua.addEventListener("canplaythrough",
            function() {
                c.Dn = !0
            });
            1 === D && A.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Sq = !0, this.ua.addEventListener("canplay",
            function() {
                c.zm || (c.zm = A.createMediaElementSource(c.ua), c.zm.connect(c.Km))
            }));
            this.ua.autoplay = !1;
            this.ua.my = "auto";
            this.ua.src = a;
            break;
        case 1:
            e = new XMLHttpRequest;
            e.open("GET", a, !0);
            e.responseType = "arraybuffer";
            e.onload = function() {
                c.$e = e.response;
                c.cu()
            };
            e.onerror = function() {
                c.Bl = !0
            };
            e.send();
            break;
        case 2:
            this.ua = !0;
            break;
        case 3:
            this.ua = !0
        }
    }
    function m(a, b) {
        var c = this;
        this.tag = b;
        this.Fa = this.qd = !0;
        this.src = a.src;
        this.buffer = a;
        this.da = D;
        this.bd = a.bd;
        this.playbackRate = 1;
        this.Mm = !0;
        this.Kc = this.be = !1;
        this.Zb = 0;
        this.uh = this.mg = this.td = !1;
        this.volume = 1;
        this.yf = 1 === K && !this.bd || 2 === K;
        this.wg = 1;
        this.startTime = this.yf ? F.lc.ea: F.Hd.ea;
        this.Ra = this.$a = null;
        this.vd = !1;
        this.Qa = null;
        this.qq = this.pq = this.oq = this.nq = this.sq = this.rq = 0;
        this.k = null;
        var e = !1;
        1 !== this.da || 0 !== this.buffer.da || this.buffer.Sq || (this.da = 0);
        switch (this.da) {
        case 0:
            this.bd ? (this.k = a.ua, e = !a.ho, a.ho = !0) : (this.k = new Audio, this.k.autoplay = !1, this.k.src = a.ua.src, e = !0);
            e && this.k.addEventListener("ended",
            function() {
                O = c.tag;
                c.Fa = !0;
                F.trigger(ic.prototype.d.Uk, y)
            });
            break;
        case 1:
            this.$a = d();
            this.$a.connect(p(b));
            1 === this.buffer.da ? a.ua && (this.k = A.createBufferSource(), this.k.buffer = a.ua, this.k.connect(this.$a)) : (this.k = this.buffer.ua, this.buffer.Km.connect(this.$a));
            break;
        case 2:
            this.k = new window.Media(E + this.src, null, null,
            function(a) {
                a === window.Media.MEDIA_STOPPED && (c.Mm = !0, c.Fa = !0, O = c.tag, F.trigger(ic.prototype.d.Uk, y))
            });
            break;
        case 3:
            this.k = !0
        }
    }
    function w(a) {
        ya.length = 0;
        if (a.length) {
            var b, c, e;
            b = 0;
            for (c = B.length; b < c; b++) e = B[b],
            cb(a, e.tag) && ya.push(e)
        } else x && !x.qf() && (ya.length = 1, ya[0] = x)
    }
    function ca(a, b) {
        V.hasOwnProperty(a) ? V[a].push(b) : V[a] = [b];
        var c, e, d, g, f = A.destination;
        if (V.hasOwnProperty(a) && (d = V[a], d.length)) for (f = d[0].uc(), c = 0, e = d.length; c < e; c++) g = d[c],
        c + 1 === e ? g.Ac(A.destination) : g.Ac(d[c + 1].uc());
        w(a);
        c = 0;
        for (e = ya.length; c < e; c++) ya[c].Gw(f);
        Ca && wb === a && (Ca.disconnect(), Ca.connect(f))
    }
    function T() {}
    function z() {}
    var N = ic.prototype;
    N.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    N.W.prototype.G = function() {};
    var F = null,
    y = null,
    O = "",
    E = "",
    D = 0,
    A = null,
    J = [],
    B = [],
    x = null,
    I = !1,
    K = 0,
    P = !1,
    L = 1,
    Q = 0,
    ga = 0,
    xb = 1,
    yb = 1,
    sc = 10,
    tc = 1E4,
    uc = 1,
    Ca = null,
    wb = "",
    Ta = !1,
    Ua = [],
    V = {},
    xc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    f.prototype.Ac = function(a) {
        this.N.disconnect();
        this.N.connect(a);
        this.M.disconnect();
        this.M.connect(a)
    };
    f.prototype.remove = function() {
        this.ha.disconnect();
        this.Za.disconnect();
        this.N.disconnect();
        this.M.disconnect()
    };
    f.prototype.uc = function() {
        return this.ha
    };
    e.prototype.Ac = function(a) {
        this.N.disconnect();
        this.N.connect(a);
        this.M.disconnect();
        this.M.connect(a)
    };
    e.prototype.remove = function() {
        this.ha.disconnect();
        this.Kh.disconnect();
        this.Dc.disconnect();
        this.bj.disconnect();
        this.N.disconnect();
        this.M.disconnect()
    };
    e.prototype.uc = function() {
        return this.ha
    };
    c.prototype.Ac = function(a) {
        this.N.disconnect();
        this.N.connect(a);
        this.M.disconnect();
        this.M.connect(a)
    };
    c.prototype.remove = function() {
        this.ha.disconnect();
        this.ef.disconnect();
        this.N.disconnect();
        this.M.disconnect()
    };
    c.prototype.uc = function() {
        return this.ha
    };
    g.prototype.Ac = function(a) {
        this.M.disconnect();
        this.M.connect(a);
        this.N.disconnect();
        this.N.connect(a)
    };
    g.prototype.remove = function() {
        this.ha.disconnect();
        this.Dc.disconnect();
        this.zb.disconnect();
        this.oc.disconnect();
        this.M.disconnect();
        this.N.disconnect();
        this.lj.disconnect()
    };
    g.prototype.uc = function() {
        return this.ha
    };
    q.prototype.Ac = function(a) {
        this.M.disconnect();
        this.M.connect(a);
        this.N.disconnect();
        this.N.connect(a)
    };
    q.prototype.remove = function() {
        this.ha.disconnect();
        this.Za.disconnect();
        this.zb.disconnect();
        this.oc.disconnect();
        this.M.disconnect();
        this.N.disconnect()
    };
    q.prototype.uc = function() {
        return this.ha
    };
    v.prototype.Ac = function(a) {
        this.ka.disconnect();
        this.ka.connect(a)
    };
    v.prototype.remove = function() {
        this.ka.disconnect()
    };
    v.prototype.uc = function() {
        return this.ka
    };
    l.prototype.Ac = function(a) {
        this.ka.disconnect();
        this.ka.connect(a)
    };
    l.prototype.remove = function() {
        this.zb.disconnect();
        this.oc.disconnect();
        this.ka.disconnect()
    };
    l.prototype.uc = function() {
        return this.ka
    };
    t.prototype.Ac = function(a) {
        this.N.disconnect();
        this.N.connect(a);
        this.M.disconnect();
        this.M.connect(a)
    };
    t.prototype.remove = function() {
        this.zb.disconnect();
        this.ei.disconnect();
        this.ha.disconnect();
        this.N.disconnect();
        this.M.disconnect()
    };
    t.prototype.uc = function() {
        return this.ha
    };
    G.prototype.Tw = function(a, b) {.01 > a && (a = .01);
        this.ek.gain.value = a;
        this.dk.gain.value = Math.pow(1 / a, .6) * b
    };
    G.prototype.shape = function(a, b, c) {
        var e = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a: a;
        b = a < b ? a: b + e * (1 - Math.exp( - (1 / e) * (a - b)));
        return b * c
    };
    G.prototype.bv = function(a, b) {
        for (var c = Math.pow(10, a / 20), e = Math.pow(10, b / 20), d = 0, g = 0; 32768 > g; ++g) d = g / 32768,
        d = this.shape(d, c, e),
        this.$i[32768 + g] = d,
        this.$i[32768 - g - 1] = -d
    };
    G.prototype.Ac = function(a) {
        this.N.disconnect();
        this.N.connect(a);
        this.M.disconnect();
        this.M.connect(a)
    };
    G.prototype.remove = function() {
        this.ha.disconnect();
        this.ek.disconnect();
        this.Kk.disconnect();
        this.dk.disconnect();
        this.N.disconnect();
        this.M.disconnect()
    };
    G.prototype.uc = function() {
        return this.ha
    };
    n.prototype.Ac = function(a) {
        this.ka.disconnect();
        this.ka.connect(a)
    };
    n.prototype.remove = function() {
        this.ka.disconnect()
    };
    n.prototype.uc = function() {
        return this.ka
    };
    u.prototype.Ta = function() {
        this.ka.getFloatFrequencyData(this.Zu);
        this.ka.getByteTimeDomainData(this.Oq);
        for (var a = this.ka.fftSize,
        b = 0,
        c = this.Th = 0,
        e = 0; b < a; b++) e = (this.Oq[b] - 128) / 128,
        0 > e && (e = -e),
        this.Th < e && (this.Th = e),
        c += e * e;
        this.Th = k(this.Th);
        k(Math.sqrt(c / a))
    };
    u.prototype.Ac = function(a) {
        this.ka.disconnect();
        this.ka.connect(a)
    };
    u.prototype.remove = function() {
        this.ka.disconnect()
    };
    u.prototype.uc = function() {
        return this.ka
    };
    M.prototype.fi = function(a) {
        if (this.K = a) this.Gj = this.K.x,
        this.Hj = this.K.y;
        this.Ve.length = 0
    };
    M.prototype.uj = function() {
        return !! this.K
    };
    M.prototype.Ta = function(a) {
        this.K && 0 !== a && (this.Bm = Fa(this.Gj, this.Hj, this.K.x, this.K.y), a = Ka(this.Gj, this.Hj, this.K.x, this.K.y) / a, 4 > this.Ve.length || this.Ve.shift(), this.Ve.push(a), this.Gj = this.K.x, this.Hj = this.K.y)
    };
    M.prototype.bp = function() {
        if (!this.Ve.length) return 0;
        var a, b, c = 0;
        a = 0;
        for (b = this.Ve.length; a < b; a++) c += this.Ve[a];
        return c / this.Ve.length
    };
    M.prototype.Sl = function() {
        return Math.cos(this.Bm) * this.bp()
    };
    M.prototype.Tl = function() {
        return Math.sin(this.Bm) * this.bp()
    };
    var vc = !1;
    s.prototype.cu = function() {
        if (!this.ua && this.$e) {
            var a = this;
            if (A.decodeAudioData) A.decodeAudioData(this.$e,
            function(b) {
                a.ua = b;
                a.$e = null;
                var c, e, d;
                if (fa(a.ak) || P) fa(a.Vi) || (c = a.Vi.ef, c.normalize = a.aq, c.buffer = b);
                else if (a.Cg.length) {
                    c = 0;
                    for (e = a.Cg.length; c < e; c++) {
                        b = a.Cg[c];
                        d = new m(a, b.Vq);
                        d.bn(!0);
                        if ("undefined" !== typeof b.cq && (b.K = F.dh(b.cq), !b.K)) continue;
                        if (b.K) {
                            var g = Ja(b.K.x, b.K.y, -b.K.j.wb(), Q, ga, !0),
                            f = Ja(b.K.x, b.K.y, -b.K.j.wb(), Q, ga, !1);
                            d.an(g, f, za(b.K.g - b.K.j.wb()), b.Xl, b.Dm, b.Gm);
                            d.fi(b.K)
                        } else d.an(b.x, b.y, b.yc, b.Xl, b.Dm, b.Gm);
                        d.play(a.wm, a.Bn, a.pk);
                        a.Zj && d.pause();
                        B.push(d)
                    }
                    a.Cg.length = 0
                } else d = new m(a, a.ak),
                d.play(a.wm, a.Bn, a.pk),
                a.Zj && d.pause(),
                B.push(d)
            },
            function() {
                a.Bl = !0
            });
            else if (this.ua = A.createBuffer(this.$e, !1), this.$e = null, fa(this.ak) || P) fa(this.Vi) || (b = this.Vi.ef, b.normalize = this.aq, b.buffer = this.ua);
            else {
                var b = new m(this, this.ak);
                b.play(this.wm, this.Bn, this.pk);
                this.Zj && b.pause();
                B.push(b)
            }
        }
    };
    s.prototype.rp = function() {
        switch (this.da) {
        case 0:
            var a = 4 <= this.ua.readyState;
            a && (this.Dn = !0);
            return a || this.Dn;
        case 1:
            return !! this.$e || !!this.ua;
        case 2:
            return ! 0;
        case 3:
            return ! 0
        }
        return ! 1
    };
    s.prototype.Wv = function() {
        switch (this.da) {
        case 0:
            return this.rp();
        case 1:
            return !! this.ua;
        case 2:
            return ! 0;
        case 3:
            return ! 0
        }
        return ! 1
    };
    s.prototype.Nv = function() {
        switch (this.da) {
        case 0:
            return !! this.ua.error;
        case 1:
            return this.Bl
        }
        return ! 1
    };
    m.prototype.qf = function() {
        var a;
        switch (this.da) {
        case 0:
            return this.k.ended;
        case 1:
            if (1 === this.buffer.da) {
                if (!this.qd && !this.Fa && this.k.loop || this.Kc) return ! 1;
                a = this.yf ? F.lc.ea: F.Hd.ea;
                return a - this.startTime > this.buffer.ua.duration
            }
            return this.k.ended;
        case 2:
            return this.Mm;
        case 3:
            !0
        }
        return ! 0
    };
    m.prototype.St = function() {
        return this.qd || this.Fa ? !0 : this.qf()
    };
    m.prototype.bn = function(a) {
        1 === D && (!this.vd && a ? this.$a && (this.Ra || (this.Ra = A.createPanner(), this.Ra.panningModel = "number" === typeof this.Ra.panningModel ? xb: ["equalpower", "HRTF", "soundfield"][xb], this.Ra.distanceModel = "number" === typeof this.Ra.distanceModel ? yb: ["linear", "inverse", "exponential"][yb], this.Ra.refDistance = sc, this.Ra.maxDistance = tc, this.Ra.rolloffFactor = uc), this.$a.disconnect(), this.$a.connect(this.Ra), this.Ra.connect(p(this.tag)), this.vd = !0) : this.vd && !a && this.$a && (this.Ra.disconnect(), this.$a.disconnect(), this.$a.connect(p(this.tag)), this.vd = !1))
    };
    m.prototype.an = function(a, b, c, e, d, g) {
        this.vd && 1 === D && (this.Ra.setPosition(a, b, 0), this.Ra.setOrientation(Math.cos(U(c)), Math.sin(U(c)), 0), this.Ra.coneInnerAngle = e, this.Ra.coneOuterAngle = d, this.Ra.coneOuterGain = g, this.rq = a, this.sq = b, this.nq = c, this.oq = e, this.pq = d, this.qq = g)
    };
    m.prototype.fi = function(a) {
        this.vd && 1 === D && (this.Qa || (this.Qa = new M), this.Qa.fi(a))
    };
    m.prototype.Ta = function(a) {
        if (this.vd && 1 === D && this.Qa && this.Qa.uj() && this.vf()) {
            this.Qa.Ta(a);
            a = this.Qa.K;
            var b = Ja(a.x, a.y, -a.j.wb(), Q, ga, !0),
            c = Ja(a.x, a.y, -a.j.wb(), Q, ga, !1);
            this.Ra.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.Qa.K.g && (b = a.g - a.j.wb(), this.Ra.setOrientation(Math.cos(b), Math.sin(b), 0));
            b = Ja(this.Qa.Sl(), this.Qa.Tl(), -a.j.wb(), 0, 0, !0);
            c = Ja(this.Qa.Sl(), this.Qa.Tl(), -a.j.wb(), 0, 0, !1);
            this.Ra.setVelocity(b, c, 0)
        }
    };
    m.prototype.play = function(b, c, e) {
        var d = this.k;
        this.td = b;
        this.volume = c;
        e = e || 0;
        switch (this.da) {
        case 0:
            1 !== d.playbackRate && (d.playbackRate = 1);
            d.volume !== c * L && (d.volume = c * L);
            d.loop !== b && (d.loop = b);
            d.muted && (d.muted = !1);
            if (d.currentTime !== e) try {
                d.currentTime = e
            } catch(g) {}
            if (this.bd && Ta && !F.sd) Ua.push(this);
            else try {
                this.k.play()
            } catch(f) {
                console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", f)
            }
            break;
        case 1:
            this.muted = !1;
            this.wg = 1;
            if (1 === this.buffer.da) this.qd || (this.k = A.createBufferSource(), this.k.buffer = this.buffer.ua, this.k.connect(this.$a)),
            this.k.loop = b,
            this.$a.gain.value = c * L,
            0 === e ? r(this.k) : a(this.k, e, this.mf());
            else {
                1 !== d.playbackRate && (d.playbackRate = 1);
                d.loop !== b && (d.loop = b);
                this.$a.gain.value = c * L;
                if (d.currentTime !== e) try {
                    d.currentTime = e
                } catch(l) {}
                this.bd && Ta && !F.sd ? Ua.push(this) : d.play()
            }
            break;
        case 2:
            (!this.qd && this.Fa || 0 !== e) && d.seekTo(e);
            d.play();
            this.Mm = !1;
            break;
        case 3:
            F.xb ? AppMobi.context.playSound(this.src, b) : AppMobi.player.playSound(this.src, b)
        }
        this.playbackRate = 1;
        this.startTime = (this.yf ? F.lc.ea: F.Hd.ea) - e;
        this.Kc = this.Fa = this.qd = !1
    };
    m.prototype.stop = function() {
        switch (this.da) {
        case 0:
            this.k.paused || this.k.pause();
            break;
        case 1:
            1 === this.buffer.da ? b(this.k) : this.k.paused || this.k.pause();
            break;
        case 2:
            this.k.stop();
            break;
        case 3:
            F.xb && AppMobi.context.stopSound(this.src)
        }
        this.Fa = !0;
        this.Kc = !1
    };
    m.prototype.pause = function() {
        if (! (this.qd || this.Fa || this.qf() || this.Kc)) {
            switch (this.da) {
            case 0:
                this.k.paused || this.k.pause();
                break;
            case 1:
                1 === this.buffer.da ? (this.Zb = this.Ql(), this.td && (this.Zb %= this.mf()), b(this.k)) : this.k.paused || this.k.pause();
                break;
            case 2:
                this.k.pause();
                break;
            case 3:
                F.xb && AppMobi.context.stopSound(this.src)
            }
            this.Kc = !0
        }
    };
    m.prototype.Kw = function() {
        if (! (this.qd || this.Fa || this.qf()) && this.Kc) {
            switch (this.da) {
            case 0:
                this.k.play();
                break;
            case 1:
                1 === this.buffer.da ? (this.k = A.createBufferSource(), this.k.buffer = this.buffer.ua, this.k.connect(this.$a), this.k.loop = this.td, this.$a.gain.value = L * this.volume * this.wg, this.startTime = (this.yf ? F.lc.ea: F.Hd.ea) - this.Zb, a(this.k, this.Zb, this.mf())) : this.k.play();
                break;
            case 2:
                this.k.play();
                break;
            case 3:
                F.xb && AppMobi.context.resumeSound(this.src)
            }
            this.Kc = !1
        }
    };
    m.prototype.seek = function(a) {
        if (! (this.qd || this.Fa || this.qf())) switch (this.da) {
        case 0:
            try {
                this.k.currentTime = a
            } catch(b) {}
            break;
        case 1:
            if (1 === this.buffer.da) this.Kc ? this.Zb = a: (this.pause(), this.Zb = a, this.Kw());
            else try {
                this.k.currentTime = a
            } catch(c) {}
            break;
        case 3:
            F.xb && AppMobi.context.seekSound(this.src, a)
        }
    };
    m.prototype.Gw = function(a) {
        1 === this.da && (this.vd ? (this.Ra.disconnect(), this.Ra.connect(a)) : (this.$a.disconnect(), this.$a.connect(a)))
    };
    m.prototype.mf = function() {
        switch (this.da) {
        case 0:
            if ("undefined" !== typeof this.k.duration) return this.k.duration;
            break;
        case 1:
            return this.buffer.ua.duration;
        case 2:
            return this.k.getDuration();
        case 3:
            if (F.xb) return AppMobi.context.getDurationSound(this.src)
        }
        return 0
    };
    m.prototype.Ql = function() {
        var a = this.mf(),
        b = 0;
        switch (this.da) {
        case 0:
            "undefined" !== typeof this.k.currentTime && (b = this.k.currentTime);
            break;
        case 1:
            if (1 === this.buffer.da) {
                if (this.Kc) return this.Zb;
                b = (this.yf ? F.lc.ea: F.Hd.ea) - this.startTime
            } else "undefined" !== typeof this.k.currentTime && (b = this.k.currentTime);
            break;
        case 3:
            F.xb && (b = AppMobi.context.getPlaybackTimeSound(this.src))
        } ! this.td && b > a && (b = a);
        return b
    };
    m.prototype.vf = function() {
        return ! this.Kc && !this.qd && !this.Fa && !this.qf()
    };
    m.prototype.kx = function() {
        var a = this.volume * L;
        switch (this.da) {
        case 0:
            this.k.volume && this.k.volume !== a && (this.k.volume = a);
            break;
        case 1:
            this.$a.gain.value = a * this.wg
        }
    };
    m.prototype.gj = function(a) {
        switch (this.da) {
        case 0:
            this.k.muted !== !!a && (this.k.muted = !!a);
            break;
        case 1:
            this.wg = a ? 0 : 1,
            this.$a.gain.value = L * this.volume * this.wg
        }
    };
    m.prototype.Vw = function() {
        this.mg = !0;
        this.gj(this.mg || this.uh)
    };
    m.prototype.qk = function(a) {
        this.uh = !!a;
        this.gj(this.mg || this.uh)
    };
    m.prototype.ir = function() {
        var a = this.playbackRate;
        this.yf && (a *= F.ge);
        switch (this.da) {
        case 0:
            this.k.playbackRate !== a && (this.k.playbackRate = a);
            break;
        case 1:
            1 === this.buffer.da ? this.k.playbackRate.value !== a && (this.k.playbackRate.value = a) : this.k.playbackRate !== a && (this.k.playbackRate = a)
        }
    };
    m.prototype.Xw = function(c) {
        switch (this.da) {
        case 0:
            c ? this.vf() ? (this.k.pause(), this.be = !0) : this.be = !1 : this.be && this.k.play();
            break;
        case 1:
            c ? this.vf() ? (1 === this.buffer.da ? (this.Zb = this.Ql(), this.td && (this.Zb %= this.mf()), b(this.k)) : this.k.pause(), this.be = !0) : this.be = !1 : this.be && (1 === this.buffer.da ? (this.k = A.createBufferSource(), this.k.buffer = this.buffer.ua, this.k.connect(this.$a), this.k.loop = this.td, this.$a.gain.value = L * this.volume * this.wg, this.startTime = (this.yf ? F.lc.ea: F.Hd.ea) - this.Zb, a(this.k, this.Zb, this.mf())) : this.k.play());
            break;
        case 2:
            c ? this.vf() ? (this.k.pause(), this.be = !0) : this.be = !1 : this.be && this.k.play()
        }
    };
    N.O = function(a) {
        this.type = a;
        F = this.b = a.b;
        y = this;
        this.Ob = null;
        this.Bh = -600; ! (this.b.Fj || this.b.yj && (this.b.oh || this.b.zj)) || this.b.ph || this.b.xa || (Ta = !0);
        A = null;
        "undefined" !== typeof AudioContext ? (D = 1, A = new AudioContext) : "undefined" !== typeof webkitAudioContext && (D = 1, A = new webkitAudioContext); (this.b.Fj && 1 === D || Ta) && document.addEventListener("touchstart",
        function() {
            var a, b, c; ! vc && A && (a = A.createBuffer(1, 1, 22050), b = A.createBufferSource(), b.buffer = a, b.connect(A.destination), r(b), vc = !0);
            if (Ta) {
                if (!P) for (a = 0, b = Ua.length; a < b; ++a) c = Ua[a],
                c.Fa || c.Kc || c.k.play();
                Ua.length = 0
            }
        },
        !0);
        1 !== D && (this.b.wc && "undefined" !== typeof window.Media ? D = 2 : this.b.jg && (D = 3));
        2 === D && (E = location.href, a = E.lastIndexOf("/"), -1 < a && (E = E.substr(0, a + 1)), E = E.replace("file://", ""));
        if (this.b.sp && this.b.Xv && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."),
        this.b.me(this);
        else {
            if (this.b.xb) I = this.b.yj;
            else try {
                I = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch(b) {
                I = !1
            }
            this.b.oi(this)
        }
    };
    var oa = N.O.prototype;
    oa.G = function() {
        this.b.Yf = this;
        K = this.q[0];
        this.ee = this.q[1];
        this.ww = 0 !== this.q[2];
        xb = this.q[3];
        yb = this.q[4];
        this.Bh = -this.q[5];
        sc = this.q[6];
        tc = this.q[7];
        uc = this.q[8];
        this.Ob = new M;
        var a = this.b.Z || this.b.width,
        b = this.b.Y || this.b.height;
        1 === D && (A.listener.speedOfSound = this.q[9], A.listener.dopplerFactor = this.q[10], A.listener.setPosition(a / 2, b / 2, this.Bh), A.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            Ca && Ca.disconnect();
            wb = b.toLowerCase();
            Ca = A.createMediaStreamSource(a);
            Ca.connect(p(wb))
        });
        this.b.fo(function(a) {
            y.rw(a)
        });
        var c = this;
        this.b.co(function(a) {
            c.Hm(a)
        })
    };
    oa.Hm = function(a) {
        var b, c, e;
        b = 0;
        for (c = B.length; b < c; b++) e = B[b],
        e.Qa && e.Qa.K === a && (e.Qa.K = null, e.vd && e.vf() && e.td && e.stop());
        this.Ob.K === a && (this.Ob.K = null)
    };
    oa.rb = function() {
        var a = {
            silent: P,
            masterVolume: L,
            listenerZ: this.Bh,
            listenerUid: this.Ob.uj() ? this.Ob.K.uid: -1,
            playing: [],
            effects: {}
        },
        b = a.playing,
        c,
        e,
        d,
        g,
        f,
        l;
        c = 0;
        for (e = B.length; c < e; c++) d = B[c],
        !d.vf() || 3 === this.ee || d.bd && 1 === this.ee || !d.bd && 2 === this.ee || (g = d.Ql(), d.td && (g %= d.mf()), g = {
            tag: d.tag,
            buffersrc: d.buffer.src,
            is_music: d.bd,
            playbackTime: g,
            volume: d.volume,
            looping: d.td,
            muted: d.mg,
            playbackRate: d.playbackRate,
            paused: d.Kc,
            resume_position: d.Zb
        },
        d.vd && (g.pan = {},
        l = g.pan, d.Qa && d.Qa.uj() ? l.objUid = d.Qa.K.uid: (l.x = d.rq, l.y = d.sq, l.a = d.nq), l.ia = d.oq, l.oa = d.pq, l.og = d.qq), b.push(g));
        b = a.effects;
        for (f in V) if (V.hasOwnProperty(f)) {
            d = [];
            c = 0;
            for (e = V[f].length; c < e; c++) d.push({
                type: V[f][c].type,
                params: V[f][c].ob
            });
            b[f] = d
        }
        return a
    };
    var Va = [];
    oa.Db = function(a) {
        var b = a.silent;
        L = a.masterVolume;
        this.Bh = a.listenerZ;
        this.Ob.fi(null);
        var d = a.listenerUid; - 1 !== d && (this.Ob.Nj = d, Va.push(this.Ob));
        var d = a.playing,
        h, m, k, r, s, p, w, T, z, y, x;
        if (3 !== this.ee) for (h = 0, m = B.length; h < m; h++) z = B[h],
        z.bd && 1 === this.ee || (z.bd || 2 !== this.ee) && z.stop();
        for (s in V) if (V.hasOwnProperty(s)) for (h = 0, m = V[s].length; h < m; h++) V[s][h].remove();
        Na(V);
        for (s in a.effects) if (a.effects.hasOwnProperty(s)) for (p = a.effects[s], h = 0, m = p.length; h < m; h++) switch (k = p[h].type, y = p[h].params, k) {
        case "filter":
            ca(s, new f(y[0], y[1], y[2], y[3], y[4], y[5]));
            break;
        case "delay":
            ca(s, new e(y[0], y[1], y[2]));
            break;
        case "convolve":
            k = y[2];
            z = this.pj(k, !1);
            z.ua ? k = new c(z.ua, y[0], y[1], k) : (k = new c(null, y[0], y[1], k), z.aq = y[0], z.Vi = k);
            ca(s, k);
            break;
        case "flanger":
            ca(s, new g(y[0], y[1], y[2], y[3], y[4]));
            break;
        case "phaser":
            ca(s, new q(y[0], y[1], y[2], y[3], y[4], y[5]));
            break;
        case "gain":
            ca(s, new v(y[0]));
            break;
        case "tremolo":
            ca(s, new l(y[0], y[1]));
            break;
        case "ringmod":
            ca(s, new t(y[0], y[1]));
            break;
        case "distortion":
            ca(s, new G(y[0], y[1], y[2], y[3], y[4]));
            break;
        case "compressor":
            ca(s, new n(y[0], y[1], y[2], y[3], y[4]));
            break;
        case "analyser":
            ca(s, new u(y[0], y[1]))
        }
        h = 0;
        for (m = d.length; h < m; h++) 3 === this.ee || (a = d[h], k = a.buffersrc, r = a.is_music, s = a.tag, p = a.playbackTime, w = a.looping, T = a.volume, x = (y = a.pan) && y.hasOwnProperty("objUid") ? y.objUid: -1, r && 1 === this.ee) || !r && 2 === this.ee || ((z = this.Uo(k, s, r, w, T)) ? (z.Zb = a.resume_position, z.bn( !! y), z.play(w, T, p), z.ir(), z.kx(), z.gj(z.mg || z.uh), a.paused && z.pause(), a.muted && z.Vw(), z.gj(z.mg || z.uh), y && ( - 1 !== x ? (z.Qa = z.Qa || new M, z.Qa.Nj = x, Va.push(z.Qa)) : z.an(y.x, y.y, y.a, y.ia, y.oa, y.og))) : (z = this.pj(k, r), z.pk = p, z.Zj = a.paused, y && ( - 1 !== x ? z.Cg.push({
            cq: x,
            Xl: y.ia,
            Dm: y.oa,
            Gm: y.og,
            Vq: s
        }) : z.Cg.push({
            x: y.x,
            y: y.y,
            yc: y.a,
            Xl: y.ia,
            Dm: y.oa,
            Gm: y.og,
            Vq: s
        }))));
        if (b && !P) {
            h = 0;
            for (m = B.length; h < m; h++) B[h].qk(!0);
            P = !0
        } else if (!b && P) {
            h = 0;
            for (m = B.length; h < m; h++) B[h].qk(!1);
            P = !1
        }
    };
    oa.Wc = function() {
        var a, b, c, e;
        a = 0;
        for (b = Va.length; a < b; a++) c = Va[a],
        e = this.b.dh(c.Nj),
        c.fi(e),
        c.Nj = -1,
        e && (Q = e.x, ga = e.y);
        Va.length = 0
    };
    oa.rw = function(a) {
        if (!this.ww) { ! a && A && A.resume && A.resume();
            var b, c;
            b = 0;
            for (c = B.length; b < c; b++) B[b].Xw(a);
            a && A && A.suspend && A.suspend()
        }
    };
    oa.Ta = function() {
        var a = this.b.Ce,
        b, c, e;
        b = 0;
        for (c = B.length; b < c; b++) e = B[b],
        e.Ta(a),
        0 === e.da || 3 === e.da || e.qd || e.Fa || !e.qf() || (e.Fa = !0, O = e.tag, F.trigger(ic.prototype.d.Uk, y)),
        0 !== K && e.ir();
        var d, g;
        for (d in V) if (V.hasOwnProperty(d)) for (e = V[d], b = 0, c = e.length; b < c; b++) g = e[b],
        g.Ta && g.Ta();
        1 === D && this.Ob.uj() && (this.Ob.Ta(a), Q = this.Ob.K.x, ga = this.Ob.K.y, A.listener.setPosition(this.Ob.K.x, this.Ob.K.y, this.Bh), A.listener.setVelocity(this.Ob.Sl(), this.Ob.Tl(), 0))
    };
    var Wa = [];
    oa.Ww = function(a) {
        var b, c, e, d, g, f = 0;
        b = 0;
        for (c = a.length; b < c; ++b) if (e = a[b], d = e[0], e = 2 * e[1], (g = 4 < d.length && ".ogg" === d.substr(d.length - 4)) && I || !g && !I) Wa.push({
            filename: d,
            size: e,
            K: null
        }),
        f += e;
        return f
    };
    oa.Zw = function() {
        var a, b, c, e;
        a = 0;
        for (b = Wa.length; a < b; ++a) c = Wa[a],
        e = this.b.Cl + c.filename,
        c.K = this.pj(e, !1)
    };
    oa.qv = function() {
        var a = 0,
        b, c, e;
        b = 0;
        for (c = Wa.length; b < c; ++b) e = Wa[b],
        e.K.Wv() || e.K.Nv() || this.b.xa || this.b.zj ? a += e.size: e.K.rp() && (a += Math.floor(e.size / 2));
        return a
    };
    oa.pj = function(a, b) {
        var c, e, d, g = null;
        c = 0;
        for (e = J.length; c < e; c++) if (d = J[c], d.src === a) {
            g = d;
            break
        }
        g || (g = new s(a, b), J.push(g));
        return g
    };
    oa.Uo = function(a, b, c, e, d) {
        var g, f, l;
        g = 0;
        for (f = B.length; g < f; g++) if (l = B[g], l.src === a && (l.St() || c)) return l.tag = b,
        l;
        a = this.pj(a, c);
        if (!a.ua) return "<preload>" !== b && (a.ak = b, a.wm = e, a.Bn = d),
        null;
        l = new m(a, b);
        B.push(l);
        return l
    };
    var ya = [];
    T.prototype.Uk = function(a) {
        return cb(O, a)
    };
    T.prototype.$r = function(a) {
        w(a);
        var b;
        a = 0;
        for (b = ya.length; a < b; a++) if (ya[a].vf()) return ! 0;
        return ! 1
    };
    N.d = new T;
    z.prototype.Play = function(a, b, c, e) { ! P && (c = Math.pow(10, c / 20), 0 > c && (c = 0), 1 < c && (c = 1), x = this.Uo(this.b.Cl + a[0] + (I ? ".ogg": ".m4a"), e, a[1], 0 !== b, c)) && (x.bn(!1), x.play(0 !== b, c))
    };
    z.prototype.nt = function() {
        var a, b;
        a = 0;
        for (b = B.length; a < b; a++) B[a].stop()
    };
    z.prototype.ft = function(a) {
        var b;
        2 === a && (a = P ? 1 : 0);
        if (0 === a && !P) {
            a = 0;
            for (b = B.length; a < b; a++) B[a].qk(!0);
            P = !0
        } else if (1 === a && P) {
            a = 0;
            for (b = B.length; a < b; a++) B[a].qk(!1);
            P = !1
        }
    };
    N.n = new z;
    N.u = new
    function() {}
})();
function Y(k) {
    this.b = k
} (function() {
    function k() {}
    function p() {}
    function d() {}
    var h = Y.prototype;
    h.W = function(d) {
        this.ya = d;
        this.b = d.b
    };
    h.W.prototype.G = function() {};
    h.O = function(d) {
        this.type = d;
        this.b = d.b
    };
    h.O.prototype.G = function() {
        var d = this;
        window.addEventListener("resize",
        function() {
            d.b.trigger(Y.prototype.d.Is, d)
        });
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online",
        function() {
            d.b.trigger(Y.prototype.d.Es, d)
        }), window.addEventListener("offline",
        function() {
            d.b.trigger(Y.prototype.d.Ds, d)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready",
        function() {
            d.b.Gf = 1;
            d.b.trigger(Y.prototype.d.Tn, d)
        }), window.applicationCache.addEventListener("progress",
        function(a) {
            d.b.Gf = a.loaded / a.total
        }));
        this.b.xb || (document.addEventListener("appMobi.device.update.available",
        function() {
            d.b.trigger(Y.prototype.d.Tn, d)
        }), document.addEventListener("backbutton",
        function() {
            d.b.trigger(Y.prototype.d.Sk, d)
        }), document.addEventListener("menubutton",
        function() {
            d.b.trigger(Y.prototype.d.On, d)
        }), document.addEventListener("searchbutton",
        function() {
            d.b.trigger(Y.prototype.d.Js, d)
        }), document.addEventListener("tizenhwkey",
        function(a) {
            var b;
            switch (a.keyName) {
            case "back":
                b = d.b.trigger(Y.prototype.d.Sk, d); ! b && window.tizen && window.tizen.application.getCurrentApplication().exit();
                break;
            case "menu":
                (b = d.b.trigger(Y.prototype.d.On, d)) || a.preventDefault()
            }
        }));
        this.b.gm && (WinJS.Application.onbackclick = function() {
            return !! d.b.trigger(Y.prototype.d.Sk, d)
        });
        this.b.fo(function(a) {
            a ? d.b.trigger(Y.prototype.d.Fs, d) : d.b.trigger(Y.prototype.d.Gs, d)
        });
        this.aw = "undefined" !== typeof window.is_scirra_arcade
    };
    k.prototype.Es = function() {
        return ! 0
    };
    k.prototype.Ds = function() {
        return ! 0
    };
    k.prototype.Tn = function() {
        return ! 0
    };
    k.prototype.Gs = function() {
        return ! 0
    };
    k.prototype.Fs = function() {
        return ! 0
    };
    k.prototype.Is = function() {
        return ! 0
    };
    k.prototype.Sk = function() {
        return ! 0
    };
    k.prototype.On = function() {
        return ! 0
    };
    k.prototype.Js = function() {
        return ! 0
    };
    h.d = new k;
    p.prototype.Sr = function(d, a) {
        this.b.vc ? CocoonJS.App.openURL(d) : this.b.Jc ? ejecta.openURL(d) : this.b.fm ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(d)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(d, {
            openExternal: !0
        }) : this.b.wc ? window.open(d, "_system") : this.aw || this.b.xa || window.open(d, a)
    };
    p.prototype.Ir = function(d, a) {
        "undefined" !== typeof console && (0 === d && console.log && console.log(a.toString()), 1 === d && console.warn && console.warn(a.toString()), 2 === d && console.error && console.error(a.toString()))
    };
    p.prototype.Or = function(d) {
        try {
            eval && eval(d)
        } catch(a) {
            // console && console.error && console.error("Error executing Javascript: ", a)
        }
    };
    h.n = new p;
    d.prototype.URL = function(d) {
        d.Ea(this.b.xa ? "": window.location.toString())
    };
    d.prototype.Nr = function(d, a) {
        if (eval) {
            var b = 0;
            try {
                b = eval(a)
            } catch(f) {
                console && console.error && console.error("Error executing Javascript: ", f)
            }
            "number" === typeof b ? d.Cd(b) : "string" === typeof b ? d.Cd(b) : "boolean" === typeof b ? d.Cd(b ? 1 : 0) : d.Cd(0)
        } else d.Cd(0)
    };
    h.u = new d
})();
function fc(k) {
    this.b = k
} (function() {
    function k() {
        this.name = "";
        this.Nf = 0;
        this.ob = []
    }
    function p() {
        f++;
        f === b.length && b.push(new k);
        return b[f]
    }
    function d() {}
    function h() {}
    function r() {}
    var a = fc.prototype;
    a.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    a.W.prototype.G = function() {};
    a.O = function(a) {
        this.type = a;
        this.b = a.b
    };
    var b = [],
    f = -1;
    a.O.prototype.G = function() {
        var a = this;
        window.c2_callFunction = function(b, d) {
            var h, k, l, t = p();
            t.name = b.toLowerCase();
            t.Nf = 0;
            if (d) for (t.ob.length = d.length, h = 0, k = d.length; h < k; ++h) l = d[h],
            t.ob[h] = "number" === typeof l || "string" === typeof l ? l: "boolean" === typeof l ? l ? 1 : 0 : 0;
            else t.ob.length = 0;
            a.b.trigger(fc.prototype.d.yi, a, t.name);
            f--;
            return t.Nf
        }
    };
    d.prototype.yi = function(a) {
        var c = 0 > f ? null: b[f];
        return c ? cb(a, c.name) : !1
    };
    a.d = new d;
    h.prototype.CallFunction = function(a, b) {
        var d = p();
        d.name = a.toLowerCase();
        d.Nf = 0;
        ua(d.ob, b);
        this.b.trigger(fc.prototype.d.yi, this, d.name);
        f--
    };
    h.prototype.et = function(a) {
        var c = 0 > f ? null: b[f];
        c && (c.Nf = a)
    };
    a.n = new h;
    r.prototype.Us = function(a) {
        var c;
        b.length ? (c = f + 1, c >= b.length && (c = b.length - 1), c = b[c]) : c = null;
        c ? a.Cd(c.Nf) : a.I(0)
    };
    r.prototype.Ms = function(a, c) {
        c = S(c);
        var d = 0 > f ? null: b[f];
        d ? 0 <= c && c < d.ob.length ? a.Cd(d.ob[c]) : a.I(0) : a.I(0)
    };
    r.prototype.xr = function(a, b) {
        var d = p();
        d.name = b.toLowerCase();
        d.Nf = 0;
        d.ob.length = 0;
        var h, k;
        h = 2;
        for (k = arguments.length; h < k; h++) d.ob.push(arguments[h]);
        this.b.trigger(fc.prototype.d.yi, this, d.name);
        f--;
        a.Cd(d.Nf)
    };
    a.u = new r
})();
function X(k) {
    this.b = k
} (function() {
    function k() {
        if (0 === this.pl.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Fg ? b.drawImage(this.L, this.Ag, this.Bg, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.L, 0, 0, this.width, this.height);
            this.pl = a.toDataURL("image/png")
        }
        return this.pl
    }
    function p() {}
    function d() {}
    function h() {}
    var r = X.prototype;
    r.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    var a = r.W.prototype;
    a.G = function() {
        if (!this.J) {
            var a, b, c, e, d, g, f, h, m;
            this.Xc = [];
            this.jh = !1;
            a = 0;
            for (b = this.ec.length; a < b; a++) {
                d = this.ec[a];
                f = {};
                f.name = d[0];
                f.speed = d[1];
                f.loop = d[2];
                f.Tm = d[3];
                f.lk = d[4];
                f.vq = d[5];
                f.ca = d[6];
                f.frames = [];
                c = 0;
                for (e = d[7].length; c < e; c++) g = d[7][c],
                h = {},
                h.Ak = g[0],
                h.qn = g[1],
                h.Ag = g[2],
                h.Bg = g[3],
                h.width = g[4],
                h.height = g[5],
                h.duration = g[6],
                h.Lb = g[7],
                h.Mb = g[8],
                h.Yl = g[9],
                h.bk = g[10],
                h.wq = g[11],
                h.Fg = 0 !== h.width,
                h.pl = "",
                h.iy = k,
                m = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                },
                h.gn = m,
                h.S = null,
                (m = this.b.Xu(g[0])) ? h.L = m: (h.L = new Image, h.L.$t = g[0], h.L.Bo = g[1], h.L.Rt = null, this.b.Cn(h.L, g[0])),
                f.frames.push(h),
                this.Xc.push(h);
                this.ec[a] = f
            }
        }
    };
    a.hr = function() {
        var a, b, c;
        a = 0;
        for (b = this.c.length; a < b; a++) c = this.c[a],
        c.Yi = c.tc.S
    };
    a.Wj = function() {
        if (!this.J) {
            var a, b, c;
            a = 0;
            for (b = this.Xc.length; a < b; ++a) c = this.Xc[a],
            c.L.Rt = null,
            c.S = null;
            this.jh = !1;
            this.hr()
        }
    };
    a.Yj = function() {
        if (!this.J && this.c.length) {
            var a, b, c;
            a = 0;
            for (b = this.Xc.length; a < b; ++a) c = this.Xc[a],
            c.S = this.b.D.qg(c.L, !1, this.b.ja, c.wq);
            this.hr()
        }
    };
    a.qm = function() {
        if (!this.J && !this.jh && this.b.D) {
            var a, b, c;
            a = 0;
            for (b = this.Xc.length; a < b; ++a) c = this.Xc[a],
            c.S = this.b.D.qg(c.L, !1, this.b.ja, c.wq);
            this.jh = !0
        }
    };
    a.Ik = function() {
        if (!this.J && !this.c.length && this.jh) {
            var a, b, c;
            a = 0;
            for (b = this.Xc.length; a < b; ++a) c = this.Xc[a],
            this.b.D.deleteTexture(c.S),
            c.S = null;
            this.jh = !1
        }
    };
    var b = [];
    a.fk = function(a) {
        var c, d, e;
        c = b.length = 0;
        for (d = this.Xc.length; c < d; ++c) e = this.Xc[c].L,
        -1 === b.indexOf(e) && (a.drawImage(e, 0, 0), b.push(e))
    };
    r.O = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.ec[0].frames[0].bk;
        this.Yb ? this.fa.gi(a) : this.fa = new Ya(a)
    };
    var f = r.O.prototype;
    f.G = function() {
        this.visible = 0 === this.q[0];
        this.vj = this.xf = !1;
        this.ye = 0 !== this.q[3];
        1 === this.type.ec.length && 1 === this.type.ec[0].frames.length || 0 === this.type.ec[0].speed || (this.b.oi(this), this.xf = !0);
        this.Ia = this.To(this.q[1]) || this.type.ec[0];
        this.F = this.q[2];
        0 > this.F && (this.F = 0);
        this.F >= this.Ia.frames.length && (this.F = this.Ia.frames.length - 1);
        var a = this.Ia.frames[this.F];
        this.fa.gi(a.bk);
        this.Lb = a.Lb;
        this.Mb = a.Mb;
        this.bg = this.Ia.speed;
        this.Yb ? this.kd.reset() : this.kd = new Sa;
        this.Td = this.kd.ea;
        this.Ze = !0;
        this.Id = 0;
        this.qe = !0;
        this.Zf = this.ko = "";
        this.xo = 0;
        this.Oi = -1;
        this.type.qm();
        var b, c, d, e, g, f, h, a = 0;
        for (b = this.type.ec.length; a < b; a++) for (e = this.type.ec[a], c = 0, d = e.frames.length; c < d; c++) g = e.frames[c],
        0 === g.width && (g.width = g.L.width, g.height = g.L.height),
        g.Fg && (h = g.L, f = g.gn, f.left = g.Ag / h.width, f.top = g.Bg / h.height, f.right = (g.Ag + g.width) / h.width, f.bottom = (g.Bg + g.height) / h.height, 0 === g.Ag && 0 === g.Bg && g.width === h.width && g.height === h.height && (g.Fg = !1));
        this.tc = this.Ia.frames[this.F];
        this.Yi = this.tc.S
    };
    f.rb = function() {
        var a = {
            a: this.Ia.ca,
            f: this.F,
            cas: this.bg,
            fs: this.Td,
            ar: this.Id,
            at: this.kd.ea
        };
        this.Ze || (a.ap = this.Ze);
        this.qe || (a.af = this.qe);
        return a
    };
    f.Db = function(a) {
        var b = this.dv(a.a);
        b && (this.Ia = b);
        this.F = a.f;
        0 > this.F && (this.F = 0);
        this.F >= this.Ia.frames.length && (this.F = this.Ia.frames.length - 1);
        this.bg = a.cas;
        this.Td = a.fs;
        this.Id = a.ar;
        this.kd.reset();
        this.kd.ea = a.at;
        this.Ze = a.hasOwnProperty("ap") ? a.ap: !0;
        this.qe = a.hasOwnProperty("af") ? a.af: !0;
        this.tc = this.Ia.frames[this.F];
        this.Yi = this.tc.S;
        this.fa.gi(this.tc.bk);
        this.Lb = this.tc.Lb;
        this.Mb = this.tc.Mb
    };
    f.gl = function(a) {
        this.F = a ? 0 : this.Ia.frames.length - 1;
        this.Ze = !1;
        this.ko = this.Ia.name;
        this.vj = !0;
        this.b.trigger(X.prototype.d.rs, this);
        this.b.trigger(X.prototype.d.qs, this);
        this.vj = !1;
        this.Id = 0
    };
    f.ky = function() {
        return this.kd.ea
    };
    f.Ta = function() {
        this.kd.add(this.b.bh(this));
        this.Zf.length && this.Fo();
        0 <= this.Oi && this.Go();
        var a = this.kd.ea,
        b = this.Ia,
        c = b.frames[this.F],
        d = c.duration / this.bg;
        this.Ze && a >= this.Td + d && (this.qe ? this.F++:this.F--, this.Td += d, this.F >= b.frames.length && (b.vq ? (this.qe = !1, this.F = b.frames.length - 2) : b.loop ? this.F = b.lk: (this.Id++, this.Id >= b.Tm ? this.gl(!1) : this.F = b.lk)), 0 > this.F && (b.vq ? (this.F = 1, this.qe = !0, b.loop || (this.Id++, this.Id >= b.Tm && this.gl(!0))) : b.loop ? this.F = b.lk: (this.Id++, this.Id >= b.Tm ? this.gl(!0) : this.F = b.lk)), 0 > this.F ? this.F = 0 : this.F >= b.frames.length && (this.F = b.frames.length - 1), a > this.Td + b.frames[this.F].duration / this.bg && (this.Td = a), a = b.frames[this.F], this.Wf(c, a), this.b.la = !0)
    };
    f.To = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.ec.length; b < c; b++) if (d = this.type.ec[b], cb(d.name, a)) return d;
        return null
    };
    f.dv = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.ec.length; b < c; b++) if (d = this.type.ec[b], d.ca === a) return d;
        return null
    };
    f.Fo = function() {
        var a = this.Ia.frames[this.F],
        b = this.To(this.Zf);
        this.Zf = ""; ! b || cb(b.name, this.Ia.name) && this.Ze || (this.Ia = b, this.bg = b.speed, 0 > this.F && (this.F = 0), this.F >= this.Ia.frames.length && (this.F = this.Ia.frames.length - 1), 1 === this.xo && (this.F = 0), this.Ze = !0, this.Td = this.kd.ea, this.qe = !0, this.Wf(a, this.Ia.frames[this.F]), this.b.la = !0)
    };
    f.Go = function() {
        var a = this.Ia.frames[this.F],
        b = this.F;
        this.F = S(this.Oi);
        0 > this.F && (this.F = 0);
        this.F >= this.Ia.frames.length && (this.F = this.Ia.frames.length - 1);
        b !== this.F && (this.Wf(a, this.Ia.frames[this.F]), this.Td = this.kd.ea, this.b.la = !0);
        this.Oi = -1
    };
    f.Wf = function(a, b) {
        var c = a.width,
        d = a.height,
        e = b.width,
        g = b.height;
        c != e && (this.width *= e / c);
        d != g && (this.height *= g / d);
        this.Lb = b.Lb;
        this.Mb = b.Mb;
        this.fa.gi(b.bk);
        this.Da();
        this.tc = b;
        this.Yi = b.S;
        c = 0;
        for (d = this.T.length; c < d; c++) e = this.T[c],
        e.jq && e.jq(a, b);
        this.b.trigger(X.prototype.d.Wf, this)
    };
    f.Pd = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.tc,
        c = b.Fg,
        d = b.L,
        e = this.x,
        g = this.y,
        f = this.width,
        h = this.height;
        if (0 === this.g && 0 <= f && 0 <= h) e -= this.Lb * f,
        g -= this.Mb * h,
        this.b.wd && (e = Math.round(e), g = Math.round(g)),
        c ? a.drawImage(d, b.Ag, b.Bg, b.width, b.height, e, g, f, h) : a.drawImage(d, e, g, f, h);
        else {
            this.b.wd && (e = Math.round(e), g = Math.round(g));
            a.save();
            var m = 0 < f ? 1 : -1,
            k = 0 < h ? 1 : -1;
            a.translate(e, g);
            1 === m && 1 === k || a.scale(m, k);
            a.rotate(this.g * m * k);
            e = 0 - this.Lb * ja(f);
            g = 0 - this.Mb * ja(h);
            c ? a.drawImage(d, b.Ag, b.Bg, b.width, b.height, e, g, ja(f), ja(h)) : a.drawImage(d, e, g, ja(f), ja(h));
            a.restore()
        }
    };
    f.Ec = function(a) {
        a.pc(this.Yi);
        a.Of(this.opacity);
        var b = this.tc,
        c = this.Sb;
        if (this.b.wd) {
            var d = Math.round(this.x) - this.x,
            e = Math.round(this.y) - this.y;
            b.Fg ? a.xd(c.Ga + d, c.Ha + e, c.tb + d, c.ub + e, c.jb + d, c.kb + e, c.hb + d, c.ib + e, b.gn) : a.ik(c.Ga + d, c.Ha + e, c.tb + d, c.ub + e, c.jb + d, c.kb + e, c.hb + d, c.ib + e)
        } else b.Fg ? a.xd(c.Ga, c.Ha, c.tb, c.ub, c.jb, c.kb, c.hb, c.ib, b.gn) : a.ik(c.Ga, c.Ha, c.tb, c.ub, c.jb, c.kb, c.hb, c.ib)
    };
    f.lv = function(a) {
        var b = this.tc,
        c, d;
        c = 0;
        for (d = b.Yl.length; c < d; c++) if (cb(a, b.Yl[c][0])) return c;
        return - 1
    };
    f.Pl = function(a, b) {
        var c = this.tc,
        d = c.Yl,
        e;
        e = R(a) ? this.lv(a) : a - 1;
        e = S(e);
        if (0 > e || e >= d.length) return b ? this.x: this.y;
        var g = (d[e][1] - c.Lb) * this.width,
        d = d[e][2],
        d = (d - c.Mb) * this.height,
        c = Math.cos(this.g);
        e = Math.sin(this.g);
        var f = g * c - d * e,
        d = d * c + g * e,
        g = f + this.x,
        d = d + this.y;
        return b ? g: d
    };
    var e = null,
    c = new da,
    g = !1,
    q = [];
    a.finish = function(a) {
        if (g) {
            if (a) {
                var b = this.b.Ma().Ka.Nc;
                a = e.U();
                var d = c.ke(),
                f,
                h;
                if (a.ba) {
                    a.ba = !1;
                    a.c.length = d.length;
                    f = 0;
                    for (h = d.length; f < h; f++) a.c[f] = d[f];
                    if (b) for (f = a.qa.length = 0, h = e.c.length; f < h; f++) d = e.c[f],
                    c.contains(d) || a.qa.push(d)
                } else if (b) for (b = a.c.length, a.c.length = b + d.length, f = 0, h = d.length; f < h; f++) a.c[b + f] = d[f],
                xa(a.qa, d[f]);
                else ua(a.c, d);
                e.Jd()
            }
            c.clear();
            g = !1
        }
    };
    p.prototype.Yr = function(a) {
        if (a) {
            var b = !1,
            d, f, h, k = this.b.Ll(),
            r = k.type,
            k = k.xj;
            d = a.U();
            f = this.b.Ma().Ka.Nc;
            var p;
            d.ba ? (this.ma(), this.b.Kl(this.j, a, this.X, q), p = q) : p = f ? d.qa: d.c;
            e = a;
            g = r !== a && !k;
            d = 0;
            for (f = p.length; d < f; d++) if (h = p[d], this.b.ax(this, h)) {
                b = !0;
                if (k) break;
                r !== a && c.add(h)
            }
            q.length = 0;
            a = b
        } else a = !1;
        return a
    };
    p.prototype.Tr = function(a) {
        return this.Zf.length ? cb(this.Zf, a) : cb(this.Ia.name, a)
    };
    p.prototype.Er = function(a, b) {
        return Vb(this.F, a, b)
    };
    p.prototype.qs = function(a) {
        return cb(this.ko, a)
    };
    p.prototype.rs = function() {
        return ! 0
    };
    p.prototype.Wf = function() {
        return ! 0
    };
    r.d = new p;
    d.prototype.Xs = function(a, b) {
        this.Zf = a;
        this.xo = b;
        this.xf || (this.b.oi(this), this.xf = !0);
        this.vj || this.Fo()
    };
    d.prototype.Ys = function(a) {
        this.Oi = a;
        this.xf || (this.b.oi(this), this.xf = !0);
        this.vj || this.Go()
    };
    d.prototype.Zs = function(a) {
        this.bg = ja(a);
        this.qe = 0 <= a;
        this.xf || (this.b.oi(this), this.xf = !0)
    };
    d.prototype.Vn = function(a) {
        var b = this.tc,
        c = b.width * a * (0 > this.width ? -1 : 1);
        a = b.height * a * (0 > this.height ? -1 : 1);
        if (this.width !== c || this.height !== a) this.width = c,
        this.height = a,
        this.Da()
    };
    r.n = new d;
    h.prototype.tr = function(a) {
        a.I(this.F)
    };
    r.u = new h
})();
function jc(k) {
    this.b = k
} (function() {
    function k(a, b) {
        return a.length ? a.pop() : new b
    }
    function p(a, b, c) {
        if (c) {
            var d;
            c = 0;
            for (d = b.length; c < d; c++) a.length < f && a.push(b[c]);
            b.length = 0
        } else for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < f && a.push(b[d]), delete b[d])
    }
    function d(a, b, c) {
        var d = a.Ff;
        c = c.replace(/\s\s*$/, "");
        b >= d.length && d.push(k(e, Object));
        b = d[b];
        b.text = c;
        b.width = a.ym(c);
        a.Hg = ka(a.Hg, b.width)
    }
    function h() {}
    function r() {}
    var a = jc.prototype;
    a.G = function() {};
    a.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    var b = a.W.prototype;
    b.G = function() {
        this.J || (this.L = new Image, this.b.Cn(this.L, this.Ak), this.S = null)
    };
    b.Wj = function() {
        this.J || (this.S = null)
    };
    b.Yj = function() {
        if (!this.J && this.c.length) {
            this.S || (this.S = this.b.D.qg(this.L, !1, this.b.ja, this.ni));
            var a, b;
            a = 0;
            for (b = this.c.length; a < b; a++) this.c[a].S = this.S
        }
    };
    b.Ik = function() {
        this.J || this.c.length || !this.S || (this.b.D.deleteTexture(this.S), this.S = null)
    };
    b.fk = function(a) {
        a.drawImage(this.L, 0, 0)
    };
    a.O = function(a) {
        this.type = a;
        this.b = a.b
    };
    b = a.O.prototype;
    b.Le = function() {
        p(e, this.Ff, !0);
        p(c, this.Qi, !1);
        p(g, this.Ri, !1);
        Na(this.xe)
    };
    b.G = function() {
        this.L = this.type.L;
        this.Pi = this.q[0];
        this.we = this.q[1];
        this.characterSet = this.q[2];
        this.text = this.q[3];
        this.md = this.q[4];
        this.visible = 0 === this.q[5];
        this.ep = this.q[6] / 2;
        this.mr = this.q[7] / 2;
        this.wx = 0 === this.q[9];
        this.$f = this.q[10];
        this.lineHeight = this.q[11];
        this.Sf = this.Hg = 0;
        this.Yb ? (this.Ff.length = 0, Na(this.Qi), Na(this.Ri), Na(this.xe)) : (this.Ff = [], this.Qi = {},
        this.Ri = {},
        this.xe = {});
        this.Ig = !0;
        this.nm = this.width;
        this.b.D && (this.type.S || (this.type.S = this.b.D.qg(this.type.L, !1, this.b.ja, this.type.ni)), this.S = this.type.S);
        this.lt()
    };
    b.rb = function() {
        var a = {
            t: this.text,
            csc: this.md,
            csp: this.$f,
            lh: this.lineHeight,
            tw: this.Hg,
            th: this.Sf,
            lrt: this.ew,
            cw: {}
        },
        b;
        for (b in this.xe) a.cw[b] = this.xe[b];
        return a
    };
    b.Db = function(a) {
        this.text = a.t;
        this.md = a.csc;
        this.$f = a.csp;
        this.lineHeight = a.lh;
        this.Hg = a.tw;
        this.Sf = a.th;
        this.ew = a.lrt;
        for (var b in a.cw) this.xe[b] = a.cw[b];
        this.Ig = !0;
        this.nm = this.width
    };
    var f = 1E3,
    e = [],
    c = [],
    g = [];
    b.lt = function() {
        for (var a = this.L,
        b = a.width,
        d = a.height,
        a = this.Pi,
        e = this.we,
        f = a / b,
        h = e / d,
        r = this.characterSet,
        b = Math.floor(b / a), d = Math.floor(d / e), m = 0; m < r.length && !(m >= b * d); m++) {
            var q = m % b,
            p = Math.floor(m / b),
            v = r.charAt(m);
            if (this.b.D) {
                var z = this.Ri,
                N = q * f,
                F = p * h,
                q = (q + 1) * f,
                p = (p + 1) * h;
                void 0 === z[v] && (z[v] = k(g, qa));
                z[v].left = N;
                z[v].top = F;
                z[v].right = q;
                z[v].bottom = p
            } else z = this.Qi,
            q *= a,
            p *= e,
            N = a,
            F = e,
            void 0 === z[v] && (z[v] = k(c, Object)),
            z[v].x = q,
            z[v].y = p,
            z[v].nr = N,
            z[v].dp = F
        }
    };
    var q = [];
    a.xt = function(a) {
        q.length = 0;
        for (var b = "",
        c, d = 0; d < a.length;) if (c = a.charAt(d), "\n" === c) b.length && (q.push(b), b = ""),
        q.push("\n"),
        ++d;
        else if (" " === c || "\t" === c || "-" === c) {
            do b += a.charAt(d),
            d++;
            while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
            q.push(b);
            b = ""
        } else d < a.length && (b += c, d++);
        b.length && q.push(b)
    };
    a.Ct = function(a) {
        var b = a.text,
        c = a.Ff;
        if (b && b.length) {
            var d = a.width;
            if (2 >= d) p(e, c, !0);
            else {
                var g = a.md,
                f = a.$f;
                if (b.length * (a.Pi * g + f) - f <= d && -1 === b.indexOf("\n") && (f = a.ym(b), f <= d)) {
                    p(e, c, !0);
                    c.push(k(e, Object));
                    c[0].text = b;
                    c[0].width = f;
                    a.Hg = f;
                    a.Sf = a.we * g + a.lineHeight;
                    return
                }
                this.Dt(a);
                a.Sf = c.length * (a.we * g + a.lineHeight)
            }
        } else p(e, c, !0)
    };
    a.Dt = function(a) {
        var b = a.wx,
        c = a.text,
        g = a.Ff,
        h = a.width;
        b && (this.xt(c), c = q);
        var k = "",
        r, m, p, v = 0,
        T = !1;
        for (p = 0; p < c.length; p++)"\n" === c[p] ? (!0 === T ? T = !1 : (d(a, v, k), v++), k = "") : (T = !1, r = k, k += c[p], m = a.ym(k.replace(/\s\s*$/, "")), m > h && ("" === r ? (d(a, v, k), k = "", T = !0) : (d(a, v, r), k = c[p]), v++, b || " " !== k || (k = "")));
        k.replace(/\s\s*$/, "").length && (d(a, v, k), v++);
        for (p = v; p < g.length; p++) e.length < f && e.push(g[p]);
        g.length = v
    };
    b.ym = function(a) {
        for (var b = this.$f,
        c = a.length,
        d = 0,
        e = 0; e < c; e++) d += this.Jl(a.charAt(e)) * this.md + b;
        return d - (0 < d ? b: 0)
    };
    b.Jl = function(a) {
        var b = this.xe;
        return void 0 !== b[a] ? b[a] : this.Pi
    };
    b.Dq = function() {
        if (this.Ig || this.width !== this.nm) this.Sf = this.Hg = 0,
        this.type.ya.Ct(this),
        this.Ig = !1,
        this.nm = this.width
    };
    b.Pd = function(a) {
        var b = this.L;
        if ("" !== this.text && null != b && (this.Dq(), !(this.height < this.we * this.md + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
            c = this.y;
            this.b.wd && (b = Math.round(b), c = Math.round(c));
            var d = this.j.Ua,
            e = this.j.Va,
            g = this.j.gb,
            f = this.j.fb;
            a.save();
            a.translate(b, c);
            a.rotate(this.g);
            for (var h = this.ep,
            k = this.md,
            r = this.we * k,
            q = this.lineHeight,
            p = this.$f,
            v = this.Ff,
            F, y = -(this.Lb * this.width), O = -(this.Mb * this.height), O = O + this.mr * ka(0, this.height - this.Sf), E, D, A, J = 0; J < v.length; J++) {
                var B = v[J].text;
                F = h * ka(0, this.width - v[J].width);
                E = y + F;
                O += q;
                if (c + O + r < e) O += r;
                else {
                    for (var x = 0; x < B.length; x++) {
                        D = B.charAt(x);
                        F = this.Jl(D);
                        var I = this.Qi[D];
                        if (b + E + F * k + p < d) E += F * k + p;
                        else {
                            if (E + F * k > this.width + 1E-5) break;
                            void 0 !== I && (D = E, A = O, 0 === this.g && (D = Math.round(D), A = Math.round(A)), a.drawImage(this.L, I.x, I.y, I.nr, I.dp, D, A, I.nr * k, I.dp * k));
                            E += F * k + p;
                            if (b + E > g) break
                        }
                    }
                    O += r;
                    if (O + r + q > this.height || c + O > f) break
                }
            }
            a.restore()
        }
    };
    var v = new ra;
    b.Ec = function(a) {
        a.pc(this.S);
        a.Of(this.opacity);
        if (this.text && (this.Dq(), !(this.height < this.we * this.md + this.lineHeight))) {
            this.ma();
            var b = this.Sb,
            c = 0,
            d = 0;
            this.b.wd && (c = Math.round(this.x) - this.x, d = Math.round(this.y) - this.y);
            var e = this.j.Ua,
            g = this.j.Va,
            f = this.j.gb,
            h = this.j.fb,
            k = this.g,
            r = this.ep,
            q = this.mr,
            p = this.md,
            N = this.we * p,
            F = this.lineHeight,
            y = this.$f,
            O = this.Ff,
            E = this.Sf,
            D, A, J;
            0 !== k && (A = Math.cos(k), J = Math.sin(k));
            for (var c = b.Ga + c,
            b = b.Ha + d,
            B, q = q * ka(0, this.height - E), x, I, E = 0; E < O.length; E++) if (d = O[E].text, B = D = r * ka(0, this.width - O[E].width), q += F, b + q + N < g) q += N;
            else {
                for (var K = 0; K < d.length; K++) {
                    var P = d.charAt(K);
                    D = this.Jl(P);
                    P = this.Ri[P];
                    if (c + B + D * p + y < e) B += D * p + y;
                    else {
                        if (B + D * p > this.width + 1E-5) break;
                        if (void 0 !== P) {
                            var L = this.Pi * p,
                            Q = this.we * p;
                            x = B;
                            I = q;
                            0 === k && (x = Math.round(x), I = Math.round(I));
                            v.Ga = x;
                            v.Ha = I;
                            v.tb = x + L;
                            v.ub = I;
                            v.hb = x;
                            v.ib = I + Q;
                            v.jb = x + L;
                            v.kb = I + Q;
                            0 !== k && (x = v, I = A, L = J, Q = void 0, Q = x.Ga * I - x.Ha * L, x.Ha = x.Ha * I + x.Ga * L, x.Ga = Q, Q = x.tb * I - x.ub * L, x.ub = x.ub * I + x.tb * L, x.tb = Q, Q = x.hb * I - x.ib * L, x.ib = x.ib * I + x.hb * L, x.hb = Q, Q = x.jb * I - x.kb * L, x.kb = x.kb * I + x.jb * L, x.jb = Q);
                            v.offset(c, b);
                            a.xd(v.Ga, v.Ha, v.tb, v.ub, v.jb, v.kb, v.hb, v.ib, P)
                        }
                        B += D * p + y;
                        if (c + B > f) break
                    }
                }
                q += N;
                if (q + N + F > this.height || b + q > h) break
            }
        }
    };
    a.d = new
    function() {};
    h.prototype.gt = function(a) {
        H(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Ig = !0, this.b.la = !0)
    };
    h.prototype.Vn = function(a) {
        a !== this.md && (this.md = a, this.Ig = !0, this.b.la = !0)
    };
    b.Yx = function(a, b) {
        var c = parseInt(b, 10);
        this.xe[a] !== c && (this.xe[a] = c, this.Ig = !0, this.b.la = !0)
    };
    a.n = new h;
    r.prototype.Text = function(a) {
        a.Ea(this.text)
    };
    a.u = new r
})();
function kc(k) {
    this.b = k
} (function() {
    var k = kc.prototype;
    k.W = function(d) {
        this.ya = d;
        this.b = d.b
    };
    var p = k.W.prototype;
    p.G = function() {
        this.J || (this.L = new Image, this.L.Bo = this.qn, this.b.Cn(this.L, this.Ak), this.S = this.pattern = null)
    };
    p.Wj = function() {
        this.J || (this.S = null)
    };
    p.Yj = function() {
        if (!this.J && this.c.length) {
            this.S || (this.S = this.b.D.qg(this.L, !0, this.b.ja, this.ni));
            var d, h;
            d = 0;
            for (h = this.c.length; d < h; d++) this.c[d].S = this.S
        }
    };
    p.qm = function() {
        this.J || this.S || !this.b.D || (this.S = this.b.D.qg(this.L, !0, this.b.ja, this.ni))
    };
    p.Ik = function() {
        this.J || this.c.length || !this.S || (this.b.D.deleteTexture(this.S), this.S = null)
    };
    p.fk = function(d) {
        d.drawImage(this.L, 0, 0)
    };
    k.O = function(d) {
        this.type = d;
        this.b = d.b
    };
    p = k.O.prototype;
    p.G = function() {
        this.visible = 0 === this.q[0];
        this.ci = new qa(0, 0, 0, 0);
        this.ip = !1;
        this.L = this.type.L;
        this.b.D ? (this.type.qm(), this.S = this.type.S) : (this.type.pattern || (this.type.pattern = this.b.wa.createPattern(this.type.L, "repeat")), this.pattern = this.type.pattern)
    };
    p.Wc = function() {
        this.ip = !1;
        this.L = this.type.L
    };
    p.Le = function() {
        this.b.D && this.ip && this.S && (this.b.D.deleteTexture(this.S), this.S = null)
    };
    p.Pd = function(d) {
        d.globalAlpha = this.opacity;
        d.save();
        d.fillStyle = this.pattern;
        var h = this.x,
        k = this.y;
        this.b.wd && (h = Math.round(h), k = Math.round(k));
        var a = -(this.Lb * this.width),
        b = -(this.Mb * this.height),
        f = a % this.L.width,
        e = b % this.L.height;
        0 > f && (f += this.L.width);
        0 > e && (e += this.L.height);
        d.translate(h, k);
        d.rotate(this.g);
        d.translate(f, e);
        d.fillRect(a - f, b - e, this.width, this.height);
        d.restore()
    };
    p.Ec = function(d) {
        d.pc(this.S);
        d.Of(this.opacity);
        var h = this.ci;
        h.right = this.width / this.L.width;
        h.bottom = this.height / this.L.height;
        var k = this.Sb;
        if (this.b.wd) {
            var a = Math.round(this.x) - this.x,
            b = Math.round(this.y) - this.y;
            d.xd(k.Ga + a, k.Ha + b, k.tb + a, k.ub + b, k.jb + a, k.kb + b, k.hb + a, k.ib + b, h)
        } else d.xd(k.Ga, k.Ha, k.tb, k.ub, k.jb, k.kb, k.hb, k.ib, h)
    };
    k.d = new
    function() {};
    k.n = new
    function() {};
    k.u = new
    function() {}
})();
function Z(k) {
    this.b = k
} (function() {
    function k(a) {
        c = a.x;
        g = a.y;
        q = a.z
    }
    function p(a) {
        v = a.x;
        l = a.y;
        t = a.z
    }
    function d(a, b, c, d) {
        var e;
        e = G.length ? G.pop() : new h;
        e.init(a, b, c, d);
        return e
    }
    function h() {
        this.ji = this.id = this.y = this.x = this.xk = this.wk = this.mm = this.time = this.ln = 0;
        this.qi = this.Gk = !1
    }
    function r() {}
    function a() {}
    var b = Z.prototype;
    b.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    b.W.prototype.G = function() {};
    b.O = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.Am = !1
    };
    var f = b.O.prototype,
    e = {
        left: 0,
        top: 0
    };
    f.Zg = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++) if (this.touches[b].id === a) return b;
        return - 1
    };
    var c = 0,
    g = 0,
    q = 0,
    v = 0,
    l = 0,
    t = 0,
    G = [];
    h.prototype.init = function(a, b, c, d) {
        var e = Oa();
        this.ln = this.mm = this.time = e;
        this.wk = a;
        this.xk = b;
        this.x = a;
        this.y = b;
        this.id = c;
        this.ji = d;
        this.qi = this.Gk = !1
    };
    h.prototype.update = function(a, b, c) {
        this.mm = this.time;
        this.time = a;
        this.x = b;
        this.y = c; ! this.qi && 15 <= Ka(this.wk, this.xk, this.x, this.y) && (this.qi = !0)
    };
    h.prototype.iw = function(a, b) { ! this.Gk && 500 <= Oa() - this.ln && !this.qi && 15 > Ka(this.wk, this.xk, this.x, this.y) && (this.Gk = !0, a.Fd = this.ji, a.Lg = this.id, a.hg = b, a.b.trigger(Z.prototype.d.zs, a), a.Md = this.x, a.Nd = this.y, a.b.trigger(Z.prototype.d.As, a), a.hg = 0)
    };
    var n = -1E3,
    u = -1E3,
    M = -1E4;
    h.prototype.Up = function(a, b) {
        if (!this.Gk) {
            var c = Oa();
            333 >= c - this.ln && !this.qi && 15 > Ka(this.wk, this.xk, this.x, this.y) && (a.Fd = this.ji, a.Lg = this.id, a.hg = b, 666 >= c - M && 25 > Ka(n, u, this.x, this.y) ? (a.b.trigger(Z.prototype.d.vs, a), a.Md = this.x, a.Nd = this.y, a.b.trigger(Z.prototype.d.ws, a), u = n = -1E3, M = -1E4) : (a.b.trigger(Z.prototype.d.Ks, a), a.Md = this.x, a.Nd = this.y, a.b.trigger(Z.prototype.d.Ls, a), n = this.x, u = this.y, M = c), a.hg = 0)
        }
    };
    f.G = function() {
        this.Yv = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.hg = this.Lg = this.Fd = this.Nd = this.Md = this.ao = this.$n = this.Zn = this.Ht = this.Gt = this.Ft = this.Sh = this.Rh = this.Qh = 0;
        this.nx = 0 !== this.q[0];
        var a = 0 < this.b.hc ? document: this.b.canvas,
        b = document;
        this.b.xb ? b = a = window.Canvas: this.b.vc && (b = a = window);
        var c = this;
        window.navigator.pointerEnabled ? (a.addEventListener("pointerdown",
        function(a) {
            c.iq(a)
        },
        !1), a.addEventListener("pointermove",
        function(a) {
            c.hq(a)
        },
        !1), b.addEventListener("pointerup",
        function(a) {
            c.Xj(a, !1)
        },
        !1), b.addEventListener("pointercancel",
        function(a) {
            c.Xj(a, !0)
        },
        !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold",
        function(a) {
            a.preventDefault()
        },
        !1), document.addEventListener("MSGestureHold",
        function(a) {
            a.preventDefault()
        },
        !1), this.b.canvas.addEventListener("gesturehold",
        function(a) {
            a.preventDefault()
        },
        !1), document.addEventListener("gesturehold",
        function(a) {
            a.preventDefault()
        },
        !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown",
        function(a) {
            c.iq(a)
        },
        !1), a.addEventListener("MSPointerMove",
        function(a) {
            c.hq(a)
        },
        !1), b.addEventListener("MSPointerUp",
        function(a) {
            c.Xj(a, !1)
        },
        !1), b.addEventListener("MSPointerCancel",
        function(a) {
            c.Xj(a, !0)
        },
        !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold",
        function(a) {
            a.preventDefault()
        },
        !1), document.addEventListener("MSGestureHold",
        function(a) {
            a.preventDefault()
        },
        !1))) : (a.addEventListener("touchstart",
        function(a) {
            c.lq(a)
        },
        !1), a.addEventListener("touchmove",
        function(a) {
            c.kq(a)
        },
        !1), b.addEventListener("touchend",
        function(a) {
            c.Im(a, !1)
        },
        !1), b.addEventListener("touchcancel",
        function(a) {
            c.Im(a, !0)
        },
        !1));
        if (this.Yv) {
            var d = function(a) {
                a = a.reading;
                c.Zn = a.accelerationX;
                c.$n = a.accelerationY;
                c.ao = a.accelerationZ
            },
            e = function(a) {
                a = a.reading;
                c.Qh = a.yawDegrees;
                c.Rh = a.pitchDegrees;
                c.Sh = a.rollDegrees
            },
            g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", d));
            var f = Windows.Devices.Sensors.Inclinometer.getDefault();
            f && (f.reportInterval = Math.max(f.minimumReportInterval, 16), f.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange",
            function() {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", d), f && f.removeEventListener("readingchanged", e)) : (g && g.addEventListener("readingchanged", d), f && f.addEventListener("readingchanged", e))
            },
            !1)
        } else window.addEventListener("deviceorientation",
        function(a) {
            c.Qh = a.alpha || 0;
            c.Rh = a.beta || 0;
            c.Sh = a.gamma || 0
        },
        !1),
        window.addEventListener("devicemotion",
        function(a) {
            a.accelerationIncludingGravity && (c.Ft = a.accelerationIncludingGravity.x || 0, c.Gt = a.accelerationIncludingGravity.y || 0, c.Ht = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.Zn = a.acceleration.x || 0, c.$n = a.acceleration.y || 0, c.ao = a.acceleration.z || 0)
        },
        !1);
        this.nx && !this.b.xa && (jQuery(document).mousemove(function(a) {
            c.pw(a)
        }), jQuery(document).mousedown(function(a) {
            c.ow(a)
        }), jQuery(document).mouseup(function(a) {
            c.qw(a)
        }));
        this.b.jg && !this.b.xb && AppMobi.accelerometer.watchAcceleration(k, {
            frequency: 40,
            adjustForRotation: !0
        });
        this.b.wc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(p, null, {
            frequency: 40
        });
        this.b.cx(this)
    };
    f.hq = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.Zg(a.pointerId),
            c = Oa();
            if (0 <= b) {
                var d = this.b.xa ? e: jQuery(this.b.canvas).offset(),
                b = this.touches[b];
                2 > c - b.time || b.update(c, a.pageX - d.left, a.pageY - d.top)
            }
        }
    };
    f.iq = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && db(a) && a.preventDefault();
            var b = this.b.xa ? e: jQuery(this.b.canvas).offset(),
            c = a.pageX - b.left,
            b = a.pageY - b.top;
            Oa();
            this.Fd = this.touches.length;
            this.Lg = a.pointerId;
            this.touches.push(d(c, b, a.pointerId, this.Fd));
            this.b.sd = !0;
            this.b.trigger(Z.prototype.d.Qn, this);
            this.b.trigger(Z.prototype.d.$k, this);
            this.Md = c;
            this.Nd = b;
            this.b.trigger(Z.prototype.d.Zk, this);
            this.b.sd = !1
        }
    };
    f.Xj = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && db(a) && a.preventDefault();
            var c = this.Zg(a.pointerId);
            this.Fd = 0 <= c ? this.touches[c].ji: -1;
            this.Lg = 0 <= c ? this.touches[c].id: -1;
            this.b.sd = !0;
            this.b.trigger(Z.prototype.d.Pn, this);
            this.b.trigger(Z.prototype.d.Yk, this);
            0 <= c && (b || this.touches[c].Up(this, c), 100 > G.length && G.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.sd = !1
        }
    };
    f.kq = function(a) {
        a.preventDefault && a.preventDefault();
        var b = Oa(),
        c,
        d,
        g,
        f;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) if (g = a.changedTouches[c], f = this.Zg(g.identifier), 0 <= f) {
            var h = this.b.xa ? e: jQuery(this.b.canvas).offset();
            f = this.touches[f];
            2 > b - f.time || f.update(b, g.pageX - h.left, g.pageY - h.top)
        }
    };
    f.lq = function(a) {
        a.preventDefault && db(a) && a.preventDefault();
        var b = this.b.xa ? e: jQuery(this.b.canvas).offset();
        Oa();
        this.b.sd = !0;
        var c, g, f, h;
        c = 0;
        for (g = a.changedTouches.length; c < g; c++) if (f = a.changedTouches[c], h = this.Zg(f.identifier), -1 === h) {
            h = f.pageX - b.left;
            var k = f.pageY - b.top;
            this.Fd = this.touches.length;
            this.Lg = f.identifier;
            this.touches.push(d(h, k, f.identifier, this.Fd));
            this.b.trigger(Z.prototype.d.Qn, this);
            this.b.trigger(Z.prototype.d.$k, this);
            this.Md = h;
            this.Nd = k;
            this.b.trigger(Z.prototype.d.Zk, this)
        }
        this.b.sd = !1
    };
    f.Im = function(a, b) {
        a.preventDefault && db(a) && a.preventDefault();
        this.b.sd = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c],
        e = this.Zg(e.identifier),
        0 <= e && (this.Fd = this.touches[e].ji, this.Lg = this.touches[e].id, this.b.trigger(Z.prototype.d.Pn, this), this.b.trigger(Z.prototype.d.Yk, this), b || this.touches[e].Up(this, e), 100 > G.length && G.push(this.touches[e]), this.touches.splice(e, 1));
        this.b.sd = !1
    };
    f.gy = function() {
        return this.b.jg && 0 === this.Qh && 0 !== q ? 90 * q: this.b.wc && 0 === this.Qh && 0 !== t ? 90 * t: this.Qh
    };
    f.hy = function() {
        return this.b.jg && 0 === this.Rh && 0 !== g ? -90 * g: this.b.wc && 0 === this.Rh && 0 !== l ? -90 * l: this.Rh
    };
    f.jy = function() {
        return this.b.jg && 0 === this.Sh && 0 !== c ? 90 * c: this.b.wc && 0 === this.Sh && 0 !== v ? 90 * v: this.Sh
    };
    f.ow = function(a) {
        a.preventDefault && this.b.Ul && !this.b.Ge && a.preventDefault();
        this.lq({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Am = !0
    };
    f.pw = function(a) {
        this.Am && this.kq({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    f.qw = function(a) {
        a.preventDefault && this.b.Ul && !this.b.Ge && a.preventDefault();
        this.b.Ul = !0;
        this.Im({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Am = !1
    };
    f.Jg = function() {
        var a, b, c, d = Oa();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a],
        c.time <= d - 50 && (c.mm = d),
        c.iw(this, a)
    };
    r.prototype.$k = function() {
        return ! 0
    };
    r.prototype.Yk = function() {
        return ! 0
    };
    r.prototype.Zk = function(a) {
        return a ? this.b.zk(a, this.Md, this.Nd) : !1
    };
    var s = [];
    r.prototype.as = function(a) {
        if (!a) return ! 1;
        var b = a.U(),
        c = b.ic(),
        d,
        e,
        g,
        f,
        h,
        k;
        g = 0;
        for (f = c.length; g < f; g++) {
            var l = c[g];
            l.ma();
            h = 0;
            for (k = this.touches.length; h < k; h++) if (e = this.touches[h], d = l.j.Jb(e.x, e.y, !0), e = l.j.Jb(e.x, e.y, !1), l.Tb(d, e)) {
                s.push(l);
                break
            }
        }
        return s.length ? (b.ba = !1, ua(b.c, s), a.Jd(), s.length = 0, !0) : !1
    };
    r.prototype.Qn = function(a) {
        a = Math.floor(a);
        return a === this.Fd
    };
    r.prototype.Pn = function(a) {
        a = Math.floor(a);
        return a === this.Fd
    };
    r.prototype.zs = function() {
        return ! 0
    };
    r.prototype.Ks = function() {
        return ! 0
    };
    r.prototype.vs = function() {
        return ! 0
    };
    r.prototype.As = function(a) {
        return a ? this.b.zk(a, this.Md, this.Nd) : !1
    };
    r.prototype.Ls = function(a) {
        return a ? this.b.zk(a, this.Md, this.Nd) : !1
    };
    r.prototype.ws = function(a) {
        return a ? this.b.zk(a, this.Md, this.Nd) : !1
    };
    b.d = new r;
    a.prototype.Xn = function(a, b) {
        var c = this.hg;
        if (0 > c || c >= this.touches.length) a.C(0);
        else {
            var d, e, g, f, h;
            fa(b) ? (d = this.b.fg(0), e = d.scale, g = d.jd, f = d.Oc, h = d.g, d.scale = 1, d.jd = 1, d.Oc = 1, d.g = 0, a.C(d.Jb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.jd = g, d.Oc = f, d.g = h) : (d = H(b) ? this.b.fg(b) : this.b.sj(b)) ? a.C(d.Jb(this.touches[c].x, this.touches[c].y, !0)) : a.C(0)
        }
    };
    a.prototype.Yn = function(a, b) {
        var c = this.hg;
        if (0 > c || c >= this.touches.length) a.C(0);
        else {
            var d, e, g, f, h;
            fa(b) ? (d = this.b.fg(0), e = d.scale, g = d.jd, f = d.Pc, h = d.g, d.scale = 1, d.jd = 1, d.Pc = 1, d.g = 0, a.C(d.Jb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.jd = g, d.Pc = f, d.g = h) : (d = H(b) ? this.b.fg(b) : this.b.sj(b)) ? a.C(d.Jb(this.touches[c].x, this.touches[c].y, !1)) : a.C(0)
        }
    };
    b.u = new a
})();
function lc(k) {
    this.b = k
} (function() {
    function k() {}
    function p() {}
    function d() {}
    var h = lc.prototype;
    h.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    h.W.prototype.G = function() {};
    h.O = function(a) {
        this.type = a;
        this.b = a.b
    };
    var r = h.O.prototype,
    a = "",
    b = "undefined" !== typeof window.is_scirra_arcade;
    b && (a = "arcade" + window.scirra_arcade_id);
    r.G = function() {};
    k.prototype.hs = function(b) {
        return null != localStorage.getItem(a + b)
    };
    k.prototype.Hs = function() {
        return ! 0
    };
    h.d = new k;
    p.prototype.pt = function(b, d) {
        try {
            localStorage.setItem(a + b, d)
        } catch(c) {
            this.b.trigger(lc.prototype.d.Hs, this)
        }
    };
    h.n = new p;
    d.prototype.js = function(b, d) {
        b.Ea(localStorage.getItem(a + d) || "")
    };
    d.prototype.Pk = function(d) {
        var e = {},
        c, g, h;
        c = 0;
        for (g = localStorage.length; c < g; c++) h = localStorage.key(c),
        b ? h.substr(0, a.length) === a && (e[h.substr(a.length)] = localStorage.getItem(h)) : e[h] = localStorage.getItem(h);
        d.Ea(JSON.stringify({
            c2dictionary: !0,
            data: e
        }))
    };
    h.u = new d
})();
function mc(k) {
    this.b = k;
    this.b.kc && (k = {},
    window.XPathResult = k, k.NUMBER_TYPE = 1, k.STRING_TYPE = 2, k.UNORDERED_NODE_SNAPSHOT_TYPE = 6, k.ORDERED_NODE_SNAPSHOT_TYPE = 7)
} (function() {
    function k() {}
    function p() {}
    function d() {}
    var h = mc.prototype;
    h.W = function(a) {
        this.ya = a;
        this.b = a.b
    };
    h.W.prototype.G = function() {};
    h.O = function(a) {
        this.type = a;
        this.b = a.b
    };
    var r = h.O.prototype;
    r.G = function() {
        this.Ye = null;
        this.Je = [];
        this.b.xa && C("[Construct 2] The XML object is not supported on this platform.")
    };
    r.qr = function(a, b) {
        if (this.Ye) {
            var d = this.Je.length ? this.Je[this.Je.length - 1] : this.Ye.documentElement;
            try {
                return this.b.kc ? d.selectSingleNode(a) : this.Ye.evaluate(a, d, null, b, null)
            } catch(e) {
                return null
            }
        }
    };
    r.pr = function(a, b) {
        if (this.Ye) {
            var d = this.Je.length ? this.Je[this.Je.length - 1] : this.Ye.documentElement;
            try {
                return this.b.kc ? d.selectNodes(a) : this.Ye.evaluate(a, d, null, b, null)
            } catch(e) {
                return null
            }
        }
    };
    r.Jo = function(a, b) {
        this.Je.push(b);
        this.b.ae(a.V);
        a.Ad();
        this.b.Qc(a.V);
        this.Je.pop()
    };
    k.prototype.Rk = function(a) {
        if (this.b.xa) return ! 1;
        var b = this.b.Ma().Ka;
        a = this.pr(a, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
        var d, e;
        if (a) {
            var c = this.b.$h();
            if (this.b.kc) for (d = 0, e = a.length; d < e; d++) c.index = d,
            this.Jo(b, a[d]);
            else for (d = 0, e = a.snapshotLength; d < e; d++) c.index = d,
            this.Jo(b, a.snapshotItem(d));
            this.b.Xh()
        }
        return ! 1
    };
    h.d = new k;
    p.prototype.es = function(a) {
        if (!this.b.xa) {
            var b, d, e = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            try {
                if (e) b = new Windows.Data.Xml.Dom.XmlDocument,
                b.loadXml(a);
                else if (this.b.kc) {
                    d = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument"];
                    for (var c = 0; 3 > c; c++) try {
                        if (b = new ActiveXObject(d[c])) break
                    } catch(g) {
                        b = null
                    }
                    b && (b.async = "false", b.loadXML(a))
                } else d = new DOMParser,
                b = d.parseFromString(a, "text/xml")
            } catch(h) {
                b = null
            }
            b && (this.Ye = b, this.b.kc && !e && this.Ye.setProperty("SelectionLanguage", "XPath"))
        }
    };
    h.n = new p;
    d.prototype.qt = function(a, b) {
        if (this.b.xa) a.Ea("");
        else {
            var d;
            if (/firefox/i.test(navigator.userAgent)) if (d = this.qr(b, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE)) {
                var e, c, g = "";
                e = 0;
                for (c = d.snapshotLength; e < c; e++) g += d.snapshotItem(e).textContent;
                a.Ea(g)
            } else a.Ea("");
            else(d = this.qr(b, XPathResult.STRING_TYPE)) ? this.b.kc ? a.Ea(d.nodeValue || "") : a.Ea(d.stringValue || "") : a.Ea("")
        }
    };
    d.prototype.Kn = function(a, b) {
        if (this.b.xa) a.I(0);
        else {
            var d = this.pr(b, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE);
            d ? this.b.kc ? a.I(d.length || 0) : a.I(d.snapshotLength || 0) : a.I(0)
        }
    };
    h.u = new d
})();
function nc(k) {
    this.b = k
} (function() {
    function k() {}
    var p = nc.prototype;
    p.W = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    p.W.prototype.G = function() {};
    p.O = function(d, k) {
        this.type = d;
        this.behavior = d.behavior;
        this.e = k;
        this.b = d.b
    };
    var d = p.O.prototype;
    d.G = function() {
        this.io = this.q[0];
        this.jo = this.q[1];
        this.Mt = this.q[2];
        this.Lt = this.q[3];
        this.e.ma();
        this.Lk = this.e.X.left;
        this.Ok = this.e.X.top;
        this.Mk = this.b.Oa - this.e.X.left;
        this.Nk = this.b.Na - this.e.X.top;
        this.kk = this.b.Oa - this.e.X.right;
        this.Ki = this.b.Na - this.e.X.bottom;
        this.enabled = 0 !== this.q[4]
    };
    d.rb = function() {
        return {
            xleft: this.Lk,
            ytop: this.Ok,
            xright: this.Mk,
            ybottom: this.Nk,
            rdiff: this.kk,
            bdiff: this.Ki,
            enabled: this.enabled
        }
    };
    d.Db = function(d) {
        this.Lk = d.xleft;
        this.Ok = d.ytop;
        this.Mk = d.xright;
        this.Nk = d.ybottom;
        this.kk = d.rdiff;
        this.Ki = d.bdiff;
        this.enabled = d.enabled
    };
    d.Ta = function() {
        if (this.enabled) {
            var d, k = this.e.j,
            a = this.e,
            b = this.e.X;
            0 === this.io ? (a.ma(), d = k.Ua + this.Lk - b.left, 0 !== d && (a.x += d, a.Da())) : 1 === this.io && (a.ma(), d = k.gb - this.Mk - b.left, 0 !== d && (a.x += d, a.Da()));
            0 === this.jo ? (a.ma(), d = k.Va + this.Ok - b.top, 0 !== d && (a.y += d, a.Da())) : 1 === this.jo && (a.ma(), d = k.fb - this.Nk - b.top, 0 !== d && (a.y += d, a.Da()));
            1 === this.Mt && (a.ma(), d = k.gb - this.kk - b.right, 0 !== d && (a.width += d, 0 > a.width && (a.width = 0), a.Da()));
            1 === this.Lt && (a.ma(), d = k.fb - this.Ki - b.bottom, 0 !== d && (a.height += d, 0 > a.height && (a.height = 0), a.Da()))
        }
    };
    p.d = new
    function() {};
    k.prototype.Ai = function(d) {
        this.enabled && 0 === d ? this.enabled = !1 : this.enabled || 0 === d || (this.e.ma(), this.Lk = this.e.X.left, this.Ok = this.e.X.top, this.Mk = this.b.Oa - this.e.X.left, this.Nk = this.b.Na - this.e.X.top, this.kk = this.b.Oa - this.e.X.right, this.Ki = this.b.Na - this.e.X.bottom, this.enabled = !0)
    };
    p.n = new k;
    p.u = new
    function() {}
})();
function oc(k) {
    this.b = k
} (function() {
    function k() {}
    function p() {}
    var d = oc.prototype;
    d.W = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    d.W.prototype.G = function() {};
    d.O = function(d, a) {
        this.type = d;
        this.behavior = d.behavior;
        this.e = a;
        this.b = d.b
    };
    var h = d.O.prototype;
    h.G = function() {
        var d = 1 === this.q[0];
        this.Xg = this.q[1];
        this.wi = this.q[2];
        this.jj = this.q[3];
        this.eu = this.q[4];
        this.qc = d ? 0 : 3;
        this.Yb ? this.Rc.reset() : this.Rc = new Sa;
        this.Kf = this.e.opacity ? this.e.opacity: 1;
        d && (0 === this.Xg ? (this.qc = 1, 0 === this.wi && (this.qc = 2)) : (this.e.opacity = 0, this.b.la = !0))
    };
    h.rb = function() {
        return {
            fit: this.Xg,
            wt: this.wi,
            fot: this.jj,
            s: this.qc,
            st: this.Rc.ea,
            mo: this.Kf
        }
    };
    h.Db = function(d) {
        this.Xg = d.fit;
        this.wi = d.wt;
        this.jj = d.fot;
        this.qc = d.s;
        this.Rc.reset();
        this.Rc.ea = d.st;
        this.Kf = d.mo
    };
    h.Ta = function() {
        this.Rc.add(this.b.bh(this.e));
        0 === this.qc && (this.e.opacity = this.Rc.ea / this.Xg * this.Kf, this.b.la = !0, this.e.opacity >= this.Kf && (this.e.opacity = this.Kf, this.qc = 1, this.Rc.reset()));
        1 === this.qc && this.Rc.ea >= this.wi && (this.qc = 2, this.Rc.reset());
        2 === this.qc && 0 !== this.jj && (this.e.opacity = this.Kf - this.Rc.ea / this.jj * this.Kf, this.b.la = !0, 0 > this.e.opacity && (this.e.opacity = 0, this.qc = 3, this.Rc.reset(), this.b.trigger(oc.prototype.d.xs, this.e), 1 === this.eu && this.b.me(this.e)))
    };
    h.su = function() {
        this.qc = 0;
        this.Rc.reset();
        0 === this.Xg ? (this.qc = 1, 0 === this.wi && (this.qc = 2)) : (this.e.opacity = 0, this.b.la = !0)
    };
    k.prototype.xs = function() {
        return ! 0
    };
    d.d = new k;
    p.prototype.mt = function() {
        3 === this.qc && this.su()
    };
    d.n = new p
})();
function pc(k) {
    this.b = k
} (function() {
    function k() {}
    function p() {}
    function d() {}
    var h = pc.prototype;
    h.W = function(a) {
        this.behavior = a;
        this.b = a.b
    };
    h.W.prototype.G = function() {
        this.Ph = [];
        this.ze = []
    };
    var r = {};
    h.O = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.e = b;
        this.b = a.b
    };
    var a = h.O.prototype;
    a.G = function() {
        this.Xa = this.q[0];
        3 > this.Xa && (this.Xa = 3);
        this.Zc = this.q[1];
        this.kw = this.q[2];
        this.ud = this.q[3];
        this.dl = this.q[4];
        this.ql = this.q[5];
        this.Fi = U(this.q[6]);
        this.mk = 0 !== this.q[7];
        this.fj = 0 !== this.q[8];
        this.enabled = 0 !== this.q[9];
        this.ih = this.nj = this.Rj = this.qh = !1;
        this.Wb = 0;
        this.cd = this.yc = this.e.g;
        this.ai = this.zd = this.yd = this.Pa = 0;
        this.Lf = Math.ceil(this.b.ta.width / this.Xa);
        this.yg = Math.ceil(this.b.ta.height / this.Xa);
        this.Ba = [];
        this.cg = !1;
        this.dj = this.cj = 0;
        this.nh = this.Cj = !1;
        this.uo = this.to = 0;
        this.Qo = !0;
        var a = this;
        this.Yb || (this.uw = function() {
            a.Cj || (a.nh = !1, a.Zt(), a.ih = 0 < a.Ba.length, a.Wb = 0, a.b.trigger(pc.prototype.d.Rn, a.e), a.tl())
        },
        this.sw = function() {
            a.Cj || (a.nh = !1, a.yo(), a.ih = !1, a.qh = !1, a.Wb = 0, a.b.trigger(pc.prototype.d.ys, a.e), a.tl())
        })
    };
    a.Le = function() {
        this.Cj = !0;
        this.cg = !1
    };
    a.rb = function() {
        var a = {
            cs: this.Xa,
            cb: this.Zc,
            ms: this.ud,
            acc: this.dl,
            dec: this.ql,
            av: this.Fi,
            re: this.mk,
            de: this.fj,
            im: this.qh,
            mfs: this.Rj,
            ftmwm: this.nj,
            hp: this.ih,
            mn: this.Wb,
            a: this.yc,
            lka: this.cd,
            s: this.Pa,
            rx: this.yd,
            ry: this.zd,
            ra: this.ai,
            myhc: this.Lf,
            myvc: this.yg,
            path: this.Ba,
            en: this.enabled,
            fr: this.Qo,
            obs: [],
            costs: []
        };
        this.nh ? (a.dfp = !0, a.dpx = this.to, a.dpy = this.uo) : (a.dfp = this.cg, a.dpx = this.cj, a.dpy = this.dj);
        var b, d;
        b = 0;
        for (d = this.type.Ph.length; b < d; b++) a.obs.push(this.type.Ph[b].ca);
        b = 0;
        for (d = this.type.ze.length; b < d; b++) a.costs.push({
            sid: this.type.ze[b].K.ca,
            cost: this.type.ze[b].Ao
        });
        return a
    };
    a.Db = function(a) {
        this.Xa = a.cs;
        this.Zc = a.cb;
        this.ud = a.ms;
        this.dl = a.acc;
        this.ql = a.dec;
        this.Fi = a.av;
        this.mk = a.re;
        this.fj = a.de;
        this.qh = a.im;
        this.Rj = a.mfs;
        this.nj = a.ftmwm;
        this.ih = a.hp;
        this.Wb = a.mn;
        this.yc = a.a;
        this.cd = a.lka;
        this.Pa = a.s;
        this.yd = a.rx;
        this.zd = a.ry;
        this.ai = a.ra;
        this.Lf = a.myhc;
        this.yg = a.myvc;
        this.Ba = a.path;
        this.enabled = a.en;
        this.Qo = a.fr;
        this.cg = a.dfp;
        this.cj = a.dpx;
        this.dj = a.dpy;
        this.type.Ph.length = 0;
        var b = a.obs,
        d, f, h;
        d = 0;
        for (f = b.length; d < f; d++)(h = this.b.gg(b[d])) && this.type.Ph.push(h);
        this.type.ze.length = 0;
        a = a.costs;
        d = 0;
        for (f = a.length; d < f; d++)(h = this.b.gg(a[d].sid)) && this.type.ze.push({
            K: h,
            Ao: a[d].cost
        });
        this.Ud().Me.setDiagonals(this.fj)
    };
    a.Wc = function() {
        this.Ud().Dg = !0
    };
    a.Ta = function() {
        if (this.enabled && this.qh) {
            this.mk && this.e.g !== this.cd && (this.yc = this.e.g);
            var a = this.b.bh(this.e),
            b,
            d,
            f,
            h,
            k,
            p = this.e,
            r = Math.min(.4 * this.ud, 2 * Math.abs(this.e.width)),
            n = Math.max(1.5 * this.Pa, 30);
            this.Wb < this.Ba.length ? (h = this.Ba[this.Wb].x, k = this.Ba[this.Wb].y, f = Ka(this.yd, this.zd, h, k), f < 3 * n * a && (this.Wb++, this.yd = h, this.zd = k, this.Wb < this.Ba.length && (h = this.Ba[this.Wb].x, k = this.Ba[this.Wb].y))) : (h = this.Ba[this.Ba.length - 1].x, k = this.Ba[this.Ba.length - 1].y);
            this.ai = Fa(this.yd, this.zd, h, k);
            f = Ka(p.x, p.y, this.yd, this.zd);
            f < r && this.Wb < this.Ba.length && (this.nj ? this.nj = !1 : r = n * a, this.yd += Math.cos(this.ai) * r, this.zd += Math.sin(this.ai) * r);
            b = Fa(p.x, p.y, this.yd, this.zd);
            d = Ga(this.yc, b);
            r = Ka(p.x, p.y, this.Ba[this.Ba.length - 1].x, this.Ba[this.Ba.length - 1].y);
            n = this.ud * this.ud / (2 * this.ql);
            1 < f && (this.yc = Ha(this.yc, b, this.Fi * a), .5 >= za(d) ? d = this.ud: 120 <= za(d) || this.Rj && 0 === this.Wb ? (d = 0, this.Rj = !0) : (b = d / this.Fi, f = Ka(p.x, p.y, this.yd, this.zd), f /= 2 * Math.sin(d), d = f * d / b, 0 > d && (d = 0), d > this.ud && (d = this.ud)), r < n && (d = Math.min(d, r / n * this.ud + this.ud / 40)), this.Pa += this.dl * a, this.Pa > d && (this.Pa = d));
            p.x += Math.cos(this.yc) * this.Pa * a;
            p.y += Math.sin(this.yc) * this.Pa * a;
            this.mk && (this.cd = p.g = this.yc);
            p.Da();
            this.Wb === this.Ba.length && Ka(p.x, p.y, h, k) < Math.max(3 * this.Pa * a, 10) && (this.ih = this.qh = !1, this.Pa = this.Wb = 0, this.b.trigger(pc.prototype.d.ts, p))
        }
    };
    a.Jg = function() {
        this.enabled && (this.cv(), this.tl())
    };
    a.tl = function() {
        this.cg && !this.Cj && (this.cg = !1, this.Io(this.e.x, this.e.y, this.cj, this.dj))
    };
    a.Ud = function() {
        var a = "" + this.Xa + "," + this.Zc;
        r.hasOwnProperty(a) || (r[a] = {
            Me: new window.Pathfinder,
            cells: null,
            Dg: !1,
            Mf: []
        });
        return r[a]
    };
    a.cv = function() {
        var a = this.Ud();
        if (!a.Me.isReady() || a.Dg || a.Mf.length) {
            var b, d, f, h, k, p, r, n, u, M;
            if (!a.Me.isReady() || a.Dg) {
                b = [];
                h = b.length = this.Lf;
                k = this.yg;
                for (d = 0; d < h; ++d) for (b[d] = [], b[d].length = k, f = 0; f < k; ++f) b[d][f] = this.Bq(d, f);
                a.cells = b;
                a.Me.init(this.Lf, this.yg, b, this.fj);
                a.Dg = !1;
                a.Mf.length = 0
            } else if (a.Mf.length) {
                p = 0;
                for (r = a.Mf.length; p < r; ++p) {
                    b = a.Mf[p];
                    n = b[0];
                    u = b[1];
                    h = b[2];
                    d = b[3];
                    b = [];
                    h -= n;
                    k = d - u;
                    b.length = h;
                    for (d = 0; d < h; ++d) for (b[d] = [], b[d].length = k, f = 0; f < k; ++f) M = this.Bq(n + d, u + f),
                    b[d][f] = M,
                    a.cells[n + d][u + f] = M;
                    a.Me.updateRegion(n, u, h, k, b)
                }
                a.Mf.length = 0
            }
        }
    };
    a.yo = function() {
        var a, b;
        a = 0;
        for (b = this.Ba.length; a < b; a++) window.freeResultNode(this.Ba[a]);
        this.Ba.length = 0
    };
    a.Zt = function() {
        var a = this.Ud().Me.pathList;
        this.yo();
        var b, d, f, h;
        b = 0;
        for (d = a.length; b < d; b++) f = a[b],
        h = window.allocResultNode(),
        h.x = (f.x + .5) * this.Xa,
        h.y = (f.y + .5) * this.Xa,
        this.Ba.push(h)
    };
    var b = [],
    f = new qa;
    a.Bq = function(a, c) {
        var d, h, k, l, p, r = 0;
        f.left = a * this.Xa - this.Zc;
        f.top = c * this.Xa - this.Zc;
        f.right = (a + 1) * this.Xa + this.Zc;
        f.bottom = (c + 1) * this.Xa + this.Zc;
        if (0 === this.kw) {
            if (this.b.bx(f)) return window.PF_OBSTACLE
        } else {
            this.b.cp(this.e.j, this.type.Ph, f, b);
            d = 0;
            for (h = b.length; d < h; ++d) if (this.b.on(f, b[d])) return b.length = 0,
            window.PF_OBSTACLE;
            b.length = 0
        }
        d = 0;
        for (h = this.type.ze.length; d < h; d++) {
            k = this.type.ze[d].K;
            p = this.type.ze[d].Ao;
            this.b.Kl(this.e.j, k, f, b);
            k = 0;
            for (l = b.length; k < l; ++k) this.b.on(f, b[k]) && (r += p);
            b.length = 0
        }
        return r
    };
    a.Io = function(a, b, d, f) {
        var h = this.Ud().Me;
        if (h.isReady()) {
            this.nh = !0;
            this.to = d;
            this.uo = f;
            a = Math.floor(a / this.Xa);
            b = Math.floor(b / this.Xa);
            d = Math.floor(d / this.Xa);
            f = Math.floor(f / this.Xa);
            var k, p, r, n, u, M, s;
            if (h.at(d, f) === window.PF_OBSTACLE) {
                k = 1E6;
                for (n = r = p = 0; n < this.Lf; n++) for (u = 0; u < this.yg; u++) h.at(n, u) !== window.PF_OBSTACLE && (M = d - n, s = f - u, M = M * M + s * s, M < k && (k = M, p = n, r = u));
                d = p;
                f = r
            }
            h.findPath(a, b, d, f, this.uw, this.sw)
        }
    };
    a.Vj = function() {
        this.Ud().Dg = !0
    };
    k.prototype.Rn = function() {
        return ! 0
    };
    k.prototype.ys = function() {
        return ! 0
    };
    k.prototype.ts = function() {
        return ! 0
    };
    h.d = new k;
    p.prototype.Pr = function(a, b) {
        this.enabled && (this.nh || !this.Ud().Me.isReady() ? (this.cg = !0, this.cj = a, this.dj = b) : this.Io(this.e.x, this.e.y, a, b))
    };
    p.prototype.Ai = function(a) {
        this.enabled = 0 !== a
    };
    p.prototype.Ps = function() {
        this.Ud().Dg = !0
    };
    p.prototype.Qs = function(a) {
        if (a) {
            a = a.U().ic();
            var b, d, f;
            b = 0;
            for (d = a.length; b < d; ++b) f = a[b],
            f.ma && (f.ma(), this.ju(f.X.left, f.X.top, f.X.right, f.X.bottom))
        }
    };
    a.ju = function(a, b, d, f) {
        var h = Math.min(a, d) - this.Zc,
        k = Math.min(b, f) - this.Zc;
        a = Math.max(a, d) + this.Zc;
        b = Math.max(b, f) + this.Zc;
        h = Math.max(Math.floor(h / this.Xa), 0);
        k = Math.max(Math.floor(k / this.Xa), 0);
        a = Math.min(Math.ceil(a / this.Xa), this.Lf);
        b = Math.min(Math.ceil(b / this.Xa), this.yg);
        h >= a || k >= b || this.Ud().Mf.push([h, k, a, b])
    };
    h.n = new p;
    d.prototype.Kn = function(a) {
        a.I(this.Ba.length)
    };
    d.prototype.os = function(a, b) {
        b = Math.floor(b);
        0 > b || b >= this.Ba.length ? a.C(0) : a.C(this.Ba[b].x)
    };
    d.prototype.ps = function(a, b) {
        b = Math.floor(b);
        0 > b || b >= this.Ba.length ? a.C(0) : a.C(this.Ba[b].y)
    };
    h.u = new d
})();
function qc(k) {
    this.b = k
} (function() {
    function k() {}
    function p() {}
    var d = qc.prototype;
    d.W = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    d.W.prototype.G = function() {};
    d.O = function(d, a) {
        this.type = d;
        this.behavior = d.behavior;
        this.e = a;
        this.b = d.b
    };
    var h = d.O.prototype;
    h.G = function() {
        this.ab = null;
        this.$j = -1;
        this.mode = this.cd = this.Bk = this.xg = this.$d = this.Vh = 0;
        var d = this;
        this.Yb || (this.Zp = function(a) {
            d.Hm(a)
        });
        this.b.co(this.Zp)
    };
    h.rb = function() {
        return {
            uid: this.ab ? this.ab.uid: -1,
            pa: this.Vh,
            pd: this.$d,
            msa: this.xg,
            tsa: this.Bk,
            lka: this.cd,
            m: this.mode
        }
    };
    h.Db = function(d) {
        this.$j = d.uid;
        this.Vh = d.pa;
        this.$d = d.pd;
        this.xg = d.msa;
        this.Bk = d.tsa;
        this.cd = d.lka;
        this.mode = d.m
    };
    h.Wc = function() {
        this.ab = -1 === this.$j ? null: this.b.dh(this.$j);
        this.$j = -1
    };
    h.Hm = function(d) {
        this.ab == d && (this.ab = null)
    };
    h.Le = function() {
        this.ab = null;
        this.b.Iw(this.Zp)
    };
    h.Ta = function() {};
    h.Jg = function() {
        if (this.ab) {
            this.cd !== this.e.g && (this.xg = Ba(this.xg + (this.e.g - this.cd)));
            var d = this.e.x,
            a = this.e.y;
            if (3 === this.mode || 4 === this.mode) {
                var b = Ka(this.e.x, this.e.y, this.ab.x, this.ab.y);
                if (b > this.$d || 4 === this.mode && b < this.$d) a = Fa(this.ab.x, this.ab.y, this.e.x, this.e.y),
                d = this.ab.x + Math.cos(a) * this.$d,
                a = this.ab.y + Math.sin(a) * this.$d
            } else d = this.ab.x + Math.cos(this.ab.g + this.Vh) * this.$d,
            a = this.ab.y + Math.sin(this.ab.g + this.Vh) * this.$d;
            this.cd = b = Ba(this.xg + (this.ab.g - this.Bk));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.e.x === d && this.e.y === a || (this.e.x = d, this.e.y = a, this.e.Da());
            0 !== this.mode && 2 !== this.mode || this.e.g === b || (this.e.g = b, this.e.Da())
        }
    };
    k.prototype.Zr = function() {
        return !! this.ab
    };
    d.d = new k;
    p.prototype.Os = function(d, a) {
        if (d) {
            var b = d.Xo(this.e);
            b && (this.ab = b, this.Vh = Fa(b.x, b.y, this.e.x, this.e.y) - b.g, this.$d = Ka(b.x, b.y, this.e.x, this.e.y), this.cd = this.xg = this.e.g, this.Bk = b.g, this.mode = a)
        }
    };
    p.prototype.zt = function() {
        this.ab = null
    };
    d.n = new p;
    d.u = new
    function() {}
})();
function rc(k) {
    this.b = k
} (function() {
    function k() {}
    var p = rc.prototype;
    p.W = function(a) {
        this.behavior = a;
        this.b = a.b
    };
    p.W.prototype.G = function() {};
    p.O = function(a, d) {
        this.type = a;
        this.behavior = a.behavior;
        this.e = d;
        this.b = a.b;
        this.mb = 0
    };
    var d = p.O.prototype,
    h = 2 * Math.PI,
    r = Math.PI / 2,
    a = 3 * Math.PI / 2;
    d.G = function() {
        this.Bb = 1 === this.q[0];
        this.Lh = this.q[1];
        this.En = this.q[2];
        this.Zd = this.q[3];
        this.Zd += Math.random() * this.q[4];
        0 === this.Zd ? this.mb = 0 : (this.mb = this.q[5] / this.Zd * h, this.mb += Math.random() * this.q[6] / this.Zd * h);
        this.Vb = this.q[7];
        this.Vb += Math.random() * this.q[8];
        this.bi = this.sf = this.ga = 0;
        this.init()
    };
    d.rb = function() {
        return {
            i: this.mb,
            a: this.Bb,
            mv: this.Lh,
            w: this.En,
            p: this.Zd,
            mag: this.Vb,
            iv: this.ga,
            iv2: this.sf,
            r: this.bi,
            lkv: this.mc,
            lkv2: this.wh
        }
    };
    d.Db = function(a) {
        this.mb = a.i;
        this.Bb = a.a;
        this.Lh = a.mv;
        this.En = a.w;
        this.Zd = a.p;
        this.Vb = a.mag;
        this.ga = a.iv;
        this.sf = a.iv2 || 0;
        this.bi = a.r;
        this.mc = a.lkv;
        this.wh = a.lkv2 || 0
    };
    d.init = function() {
        switch (this.Lh) {
        case 0:
            this.ga = this.e.x;
            break;
        case 1:
            this.ga = this.e.y;
            break;
        case 2:
            this.ga = this.e.width;
            this.bi = this.e.height / this.e.width;
            break;
        case 3:
            this.ga = this.e.width;
            break;
        case 4:
            this.ga = this.e.height;
            break;
        case 5:
            this.ga = this.e.g;
            this.Vb = U(this.Vb);
            break;
        case 6:
            this.ga = this.e.opacity;
            break;
        case 7:
            this.ga = 0;
            break;
        case 8:
            this.ga = this.e.x,
            this.sf = this.e.y
        }
        this.mc = this.ga;
        this.wh = this.sf
    };
    d.le = function(b) {
        b %= h;
        switch (this.En) {
        case 0:
            return Math.sin(b);
        case 1:
            return b <= r ? b / r: b <= a ? 1 - 2 * (b - r) / Math.PI: (b - a) / r - 1;
        case 2:
            return 2 * b / h - 1;
        case 3:
            return - 2 * b / h + 1;
        case 4:
            return b < Math.PI ? -1 : 1
        }
        return 0
    };
    d.Ta = function() {
        var a = this.b.bh(this.e);
        if (this.Bb && 0 !== a) {
            0 === this.Zd ? this.mb = 0 : (this.mb += a / this.Zd * h, this.mb %= h);
            switch (this.Lh) {
            case 0:
                this.e.x !== this.mc && (this.ga += this.e.x - this.mc);
                this.e.x = this.ga + this.le(this.mb) * this.Vb;
                this.mc = this.e.x;
                break;
            case 1:
                this.e.y !== this.mc && (this.ga += this.e.y - this.mc);
                this.e.y = this.ga + this.le(this.mb) * this.Vb;
                this.mc = this.e.y;
                break;
            case 2:
                this.e.width = this.ga + this.le(this.mb) * this.Vb;
                this.e.height = this.e.width * this.bi;
                break;
            case 3:
                this.e.width = this.ga + this.le(this.mb) * this.Vb;
                break;
            case 4:
                this.e.height = this.ga + this.le(this.mb) * this.Vb;
                break;
            case 5:
                this.e.g !== this.mc && (this.ga = Ba(this.ga + (this.e.g - this.mc)));
                this.e.g = Ba(this.ga + this.le(this.mb) * this.Vb);
                this.mc = this.e.g;
                break;
            case 6:
                this.e.opacity = this.ga + this.le(this.mb) * this.Vb / 100;
                0 > this.e.opacity ? this.e.opacity = 0 : 1 < this.e.opacity && (this.e.opacity = 1);
                break;
            case 8:
                this.e.x !== this.mc && (this.ga += this.e.x - this.mc),
                this.e.y !== this.wh && (this.sf += this.e.y - this.wh),
                this.e.x = this.ga + Math.cos(this.e.g) * this.le(this.mb) * this.Vb,
                this.e.y = this.sf + Math.sin(this.e.g) * this.le(this.mb) * this.Vb,
                this.mc = this.e.x,
                this.wh = this.e.y
            }
            this.e.Da()
        }
    };
    d.jq = function(a, d) {
        switch (this.Lh) {
        case 2:
            this.ga *= d.width / a.width;
            this.bi = d.height / d.width;
            break;
        case 3:
            this.ga *= d.width / a.width;
            break;
        case 4:
            this.ga *= d.height / a.height
        }
    };
    p.d = new
    function() {};
    k.prototype.Ws = function(a) {
        this.Bb = 1 === a
    };
    p.n = new k;
    p.u = new
    function() {}
})();
function wc(k) {
    this.b = k;
    this.dn = this.sk = this.ii = this.cn = 0
} (function() {
    function k() {}
    var p = wc.prototype;
    p.W = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    p.W.prototype.G = function() {};
    p.O = function(d, k) {
        this.type = d;
        this.behavior = d.behavior;
        this.e = k;
        this.b = d.b
    };
    var d = p.O.prototype;
    d.G = function() {
        this.enabled = 0 !== this.q[0]
    };
    d.rb = function() {
        return {
            smg: this.behavior.cn,
            ss: this.behavior.ii,
            se: this.behavior.sk,
            smd: this.behavior.dn
        }
    };
    d.Db = function(d) {
        this.behavior.cn = d.smg;
        this.behavior.ii = d.ss;
        this.behavior.sk = d.se;
        this.behavior.dn = d.smd
    };
    d.Ta = function() {};
    d.Jg = function() {
        if (this.enabled) {
            var d = this.behavior.Sj.ke(),
            k = 0,
            a = 0,
            b,
            f,
            e,
            c = 0;
            b = 0;
            for (f = d.length; b < f; b++) {
                a: {
                    e = d[b];
                    for (var g = void 0,
                    p = void 0,
                    v = void 0,
                    g = 0,
                    p = e.T.length; g < p; ++g) if (v = e.T[g], v.behavior instanceof wc) {
                        e = v;
                        break a
                    }
                    e = null
                }
                e && e.enabled && (k += d[b].x, a += d[b].y, ++c)
            }
            d = this.e.j.Aa;
            f = this.b.lc.ea;
            e = b = 0;
            f >= this.behavior.ii && f < this.behavior.sk && (b = this.behavior.cn * Math.min(this.b.ge, 1), 0 === this.behavior.dn && (b *= 1 - (f - this.behavior.ii) / (this.behavior.sk - this.behavior.ii)), f = Math.random() * Math.PI * 2, e = Math.random() * b, b = Math.cos(f) * e, e *= Math.sin(f));
            d.Zm(k / c + b);
            d.$m(a / c + e)
        }
    };
    k.prototype.Ai = function(d) {
        this.enabled = 0 !== d
    };
    p.n = new k
})();
function ec(k) {
    this.b = k
} (function() {
    function k() {}
    var p = ec.prototype;
    p.W = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    p.W.prototype.G = function() {};
    p.O = function(d, k) {
        this.type = d;
        this.behavior = d.behavior;
        this.e = k;
        this.b = d.b
    };
    var d = p.O.prototype;
    d.G = function() {
        this.e.za.solidEnabled = 0 !== this.q[0]
    };
    d.Ta = function() {};
    p.d = new
    function() {};
    k.prototype.Ai = function(d) {
        this.e.za.solidEnabled = !!d
    };
    p.n = new k
})();
function dc() {
    return [gc, hc, ic, Y, fc, kc, Z, X, jc, lc, mc, rc, qc, nc, wc, oc, ec, pc, W.prototype.d.Mn, fc.prototype.n.CallFunction, qc.prototype.n.Os, X.prototype.n.Vn, W.prototype.n.it, W.prototype.u.random, X.prototype.d.Er, jc.prototype.d.Gn, X.prototype.d.Gn, X.prototype.n.ct, X.prototype.u.Xn, X.prototype.u.Yn, X.prototype.n.Et, W.prototype.d.Gr, W.prototype.d.Rs, lc.prototype.d.hs, lc.prototype.u.js, hc.prototype.d.ur, hc.prototype.n.bl, hc.prototype.u.Kr, W.prototype.u["int"], W.prototype.u.ix, gc.prototype.n.Ss, X.prototype.d.Un, X.prototype.n.Ys, W.prototype.d.Hn, W.prototype.d.Mr, W.prototype.u.g, X.prototype.n.ks, W.prototype.u.Ce, W.prototype.d.Cr, W.prototype.u.fu, W.prototype.n.rr, X.prototype.n.$s, qc.prototype.d.Zr, X.prototype.n.al, qc.prototype.n.zt, W.prototype.n.ut, W.prototype.n.Jr, W.prototype.u.tx, W.prototype.u.ux, W.prototype.u.vx, W.prototype.u.qx, W.prototype.u.floor, X.prototype.n.bt, X.prototype.n.ls, oc.prototype.n.mt, W.prototype.d.Rk, X.prototype.n.kt, X.prototype.n.bl, X.prototype.n.Vs, X.prototype.n.tt, X.prototype.d.Fr, X.prototype.u.Opacity, X.prototype.n.Lr, fc.prototype.d.yi, fc.prototype.u.Ms, X.prototype.n.Xs, X.prototype.n.Zs, gc.prototype.d.xi, mc.prototype.n.es, gc.prototype.u.ds, X.prototype.d.Xr, X.prototype.d.Hr, X.prototype.d.Ln, Z.prototype.d.Zk, X.prototype.d.Jn, Y.prototype.n.Sr, Y.prototype.u.Nr, Z.prototype.d.$k, Z.prototype.d.as, rc.prototype.n.Ws, ic.prototype.n.Play, Z.prototype.d.Yk, X.prototype.u.yt, ic.prototype.n.nt, ic.prototype.n.ft, W.prototype.n.Rr, jc.prototype.d.Un, jc.prototype.n.al, hc.prototype.u.wr, W.prototype.u.hw, jc.prototype.n.gt, X.prototype.u.tr, W.prototype.d.Qr, X.prototype.n.Wn, X.prototype.u.cl, X.prototype.u.In, X.prototype.n.dt, W.prototype.n.ht, ic.prototype.d.$r, pc.prototype.n.Ps, pc.prototype.n.Qs, X.prototype.d.Yr, W.prototype.d.Wr, mc.prototype.d.Rk, mc.prototype.u.qt, W.prototype.n.ot, X.prototype.n.ns, wc.prototype.n.Ai, W.prototype.d.Dr, X.prototype.d.Qk, W.prototype.u.sqrt, W.prototype.u.Wt, W.prototype.u.ge, fc.prototype.u.Us, W.prototype.u.abs, fc.prototype.n.et, X.prototype.u.Ns, X.prototype.d.Tr, pc.prototype.n.Pr, hc.prototype.n.yr, hc.prototype.d.Qk, lc.prototype.n.pt, Y.prototype.n.Or, W.prototype.u.jx, W.prototype.d.Bt, pc.prototype.d.Rn, pc.prototype.u.Kn, pc.prototype.u.os, pc.prototype.u.ps, Y.prototype.n.Ir, W.prototype.n.Ts, W.prototype.u.Gf, kc.prototype.n.jt, kc.prototype.d.Jn, kc.prototype.n.al, kc.prototype.u.cl, W.prototype.n.At]
};