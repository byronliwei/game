(function(){var k=this,l=function(a){return void 0!==a},aa=function(){},ba=function(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==c&&"undefined"==typeof a.call)return"object";return c},m=function(a){return"array"==ba(a)},ca=function(a){var c=ba(a);return"array"==c||"object"==c&&"number"==typeof a.length},p=function(a){return"string"==typeof a},q=function(a){return"function"==ba(a)},da=function(a,c,b){return a.call.apply(a.bind,arguments)},ea=function(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,
2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}},r=function(a,c,b){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return r.apply(null,arguments)},s=Date.now||function(){return+new Date},u=function(a,c){var b,d=c,e=a.split(".");b=b||k;e[0]in b||!b.execScript||b.execScript("var "+e[0]);for(var f;e.length&&(f=e.shift());)!e.length&&l(d)?
b[f]=d:b=b[f]?b[f]:b[f]={}},v=function(a,c){function b(){}b.prototype=c.prototype;a.ha=c.prototype;a.prototype=new b;a.sa=function(a,b,f){var g=Array.prototype.slice.call(arguments,2);return c.prototype[b].apply(a,g)}};var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ga=function(a,c){return a<c?-1:a>c?1:0};var w=Array.prototype,ha=w.indexOf?function(a,c,b){return w.indexOf.call(a,c,b)}:function(a,c,b){b=null==b?0:0>b?Math.max(0,a.length+b):b;if(p(a))return p(c)&&1==c.length?a.indexOf(c,b):-1;for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},ia=w.forEach?function(a,c,b){w.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&c.call(b,e[f],f,a)},ja=function(a){var c=a.length;if(0<c){for(var b=Array(c),d=0;d<c;d++)b[d]=a[d];return b}return[]},ka=ja,la=
function(a,c,b){return 2>=arguments.length?w.slice.call(a,c):w.slice.call(a,c,b)};var ma=function(a,c){this.x=l(a)?a:0;this.y=l(c)?c:0};ma.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};ma.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var na=function(a,c){var b,d;for(d in a)c.call(b,a[d],d,a)},oa=function(a,c){var b,d;for(d in a)if(c.call(b,a[d],d,a))return!0;return!1},pa=function(a,c){for(var b=ca(c),d=b?c:arguments,b=b?0:1;b<d.length&&(a=a[d[b]],l(a));b++);return a},x=function(a,c,b){return c in a?a[c]:b},qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),ra=function(a,c){for(var b,d,e=1;e<arguments.length;e++){d=arguments[e];for(b in d)a[b]=d[b];for(var f=0;f<qa.length;f++)b=
qa[f],Object.prototype.hasOwnProperty.call(d,b)&&(a[b]=d[b])}},sa=function(a){var c=arguments.length;if(1==c&&m(arguments[0]))return sa.apply(null,arguments[0]);if(c%2)throw Error("Uneven number of arguments");for(var b={},d=0;d<c;d+=2)b[arguments[d]]=arguments[d+1];return b},ta=function(a){var c=arguments.length;if(1==c&&m(arguments[0]))return ta.apply(null,arguments[0]);for(var b={},d=0;d<c;d++)b[arguments[d]]=!0;return b};var y;t:{var ua=k.navigator;if(ua){var va=ua.userAgent;if(va){y=va;break t}}y=""}var z=function(a){var c=y;return-1!=c.indexOf(a)},wa=function(){var a="WebKit",c=y;return-1!=c.toLowerCase().indexOf(a.toLowerCase())};var xa=function(){return z("Opera")||z("OPR")},ya=function(){return z("Trident")||z("MSIE")},za=xa,Aa=ya;var Ba=za(),A=Aa(),B=z("Gecko")&&!wa()&&!(z("Trident")||z("MSIE")),C=wa(),Da=function(){var a="",c;if(Ba&&k.opera)return a=k.opera.version,q(a)?a():a;B?c=/rv\:([^\);]+)(\)|;)/:A?c=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:C&&(c=/WebKit\/(\S+)/);c&&(a=(a=c.exec(y))?a[1]:"");return A&&(c=Ca(),c>parseFloat(a))?String(c):a},Ca=function(){var a=k.document;return a?a.documentMode:void 0},Ea=Da(),Fa={},D=function(a){var c;if(!(c=Fa[a])){var b=a;c=Ea;var d=0;c=fa(String(c)).split(".");for(var b=fa(String(b)).split("."),
e=Math.max(c.length,b.length),f=0;0==d&&f<e;f++){var g=c[f]||"",h=b[f]||"",n=RegExp("(\\d*)(\\D*)","g"),t=RegExp("(\\d*)(\\D*)","g");do{var P=n.exec(g)||["","",""],Q=t.exec(h)||["","",""];if(0==P[0].length&&0==Q[0].length)break;var d=0==P[1].length?0:parseInt(P[1],10),Lb=0==Q[1].length?0:parseInt(Q[1],10),d=ga(d,Lb)||ga(0==P[2].length,0==Q[2].length)||ga(P[2],Q[2])}while(0==d)}c=d;c=Fa[a]=0<=c}return c},Ha=function(){var a=9;return A&&Ga>=a},Ia;var Ja=k.document;
if(Ja&&A){var Ka=Ca();Ia=Ka||("CSS1Compat"==Ja.compatMode?parseInt(Ea,10):5)}else Ia=void 0;var Ga=Ia;!B&&!A||A&&Ha()||B&&D("1.9.1");A&&D("9");var E=function(a){return a?a.parentWindow||a.defaultView:window};var La=function(){var a=E().top;try{return!!a.location.href||""===a.location.href}catch(c){return!1}};var Ma=[],Na=!1,Oa=function(a){if(Na)for(var c=0;c<Ma.length;c++)a(r(Ma[c].va,Ma[c]))};var Pa=function(a){Pa[" "](a);return a};Pa[" "]=aa;var Qa=!A||Ha(),Ra=A&&!D("9");!C||D("528");B&&D("http://s0.2mdn.net/instream/video/1.9b")||A&&D("8")||Ba&&D("9.5")||C&&D("528");B&&!D("8")||A&&D("9");var Sa=function(){this.T=this.T;this.ia=this.ia};Sa.prototype.T=!1;var F=function(a,c){this.type=a;this.currentTarget=this.target=c;this.defaultPrevented=this.n=!1;this.Q=!0};F.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Q=!1};var G=function(a,c){F.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.P=this.state=null;if(a){var b=a,d=c,e=this.type=b.type;this.target=b.target||b.srcElement;this.currentTarget=d;if(d=b.relatedTarget){if(B){var f;t:{var g="nodeName";try{Pa(d[g]);f=!0;break t}catch(h){}f=!1}f||(d=null)}}else"mouseover"==
e?d=b.fromElement:"mouseout"==e&&(d=b.toElement);this.relatedTarget=d;this.offsetX=C||void 0!==b.offsetX?b.offsetX:b.layerX;this.offsetY=C||void 0!==b.offsetY?b.offsetY:b.layerY;this.clientX=void 0!==b.clientX?b.clientX:b.pageX;this.clientY=void 0!==b.clientY?b.clientY:b.pageY;this.screenX=b.screenX||0;this.screenY=b.screenY||0;this.button=b.button;this.keyCode=b.keyCode||0;this.charCode=b.charCode||("keypress"==e?b.keyCode:0);this.ctrlKey=b.ctrlKey;this.altKey=b.altKey;this.shiftKey=b.shiftKey;this.metaKey=
b.metaKey;this.state=b.state;this.P=b;b.defaultPrevented&&this.preventDefault()}};v(G,F);G.prototype.preventDefault=function(){G.ha.preventDefault.call(this);var a=this.P;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ra)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(c){}};var H="closure_listenable_"+(1E6*Math.random()|0),Ta=0;var Ua=function(a,c,b,d,e){var f=null;this.i=a;this.w=f;this.src=c;this.type=b;this.p=!!d;this.r=e;this.key=++Ta;this.l=this.q=!1},Va=function(a){a.l=!0;a.i=null;a.w=null;a.src=null;a.r=null};var I=function(a){this.src=a;this.c={};this.A=0};I.prototype.add=function(a,c,b,d,e){var f=a.toString();a=this.c[f];a||(a=this.c[f]=[],this.A++);var g=Wa(a,c,d,e);-1<g?(c=a[g],b||(c.q=!1)):(c=new Ua(c,this.src,f,!!d,e),c.q=b,a.push(c));return c};I.prototype.remove=function(a,c,b,d){a=a.toString();if(!(a in this.c))return!1;var e=this.c[a];c=Wa(e,c,b,d);return-1<c?(b=e[c],Va(b),b=e,w.splice.call(b,c,1),0==e.length&&(delete this.c[a],this.A--),!0):!1};
var Xa=function(a,c){var b=c.type;if(b in a.c){var d,e=a.c[b],f=ha(e,c);(d=0<=f)&&w.splice.call(e,f,1);d&&(Va(c),0==a.c[b].length&&(delete a.c[b],a.A--))}};I.prototype.N=function(a,c,b,d){a=this.c[a.toString()];var e=-1;a&&(e=Wa(a,c,b,d));return-1<e?a[e]:null};var Wa=function(a,c,b,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.l&&f.i==c&&f.p==!!b&&f.r==d)return e}return-1};var Ya="closure_lm_"+(1E6*Math.random()|0),Za={},$a=0,J=function(a,c,b,d,e){if(m(c))for(var f=0;f<c.length;f++)J(a,c[f],b,d,e);else b=ab(b),a&&a[H]?a.h.add(String(c),b,!1,d,e):bb(a,c,b,!1,d,e)},bb=function(a,c,b,d,e,f){if(!c)throw Error("Invalid event type");var g=!!e,h=K(a);h||(a[Ya]=h=new I(a));b=h.add(c,b,d,e,f);b.w||(d=cb(),b.w=d,d.src=a,d.i=b,a.addEventListener?a.addEventListener(c.toString(),d,g):a.attachEvent(db(c.toString()),d),$a++)},cb=function(){var a=eb,c=Qa?function(b){return a.call(c.src,
c.i,b)}:function(b){b=a.call(c.src,c.i,b);if(!b)return b};return c},fb=function(a,c,b,d,e){if(m(c))for(var f=0;f<c.length;f++)fb(a,c[f],b,d,e);else b=ab(b),a&&a[H]?a.h.add(String(c),b,!0,d,e):bb(a,c,b,!0,d,e)},gb=function(a,c,b,d,e){if(m(c))for(var f=0;f<c.length;f++)gb(a,c[f],b,d,e);else b=ab(b),a&&a[H]?a.h.remove(String(c),b,d,e):a&&(d=!!d,(a=K(a))&&(c=a.N(c,b,d,e))&&hb(c))},hb=function(a){if("number"!=typeof a&&a&&!a.l){var c=a.src;if(c&&c[H])Xa(c.h,a);else{var b=a.type,d=a.w;c.removeEventListener?
c.removeEventListener(b,d,a.p):c.detachEvent&&c.detachEvent(db(b),d);$a--;(b=K(c))?(Xa(b,a),0==b.A&&(b.src=null,c[Ya]=null)):Va(a)}}},db=function(a){return a in Za?Za[a]:Za[a]="on"+a},jb=function(a,c,b,d){var e=1;if(a=K(a))if(c=a.c[c.toString()])for(c=c.concat(),a=0;a<c.length;a++){var f=c[a];f&&f.p==b&&!f.l&&(e&=!1!==ib(f,d))}return Boolean(e)},ib=function(a,c){var b=a.i,d=a.r||a.src;a.q&&hb(a);return b.call(d,c)},eb=function(a,c){if(a.l)return!0;if(!Qa){var b;if(!(b=c))t:{var d;b="window.event";
b=b.split(".");d=d||k;for(var e;e=b.shift();)if(null!=d[e])d=d[e];else{b=null;break t}b=d}e=b;d=new G(e,this);b=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){t:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break t}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=d.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;!d.n&&0<=h;h--)d.currentTarget=e[h],b&=jb(e[h],f,!0,d);for(h=0;!d.n&&h<e.length;h++)d.currentTarget=e[h],b&=jb(e[h],f,!1,d)}return b}return ib(a,new G(c,
this))},K=function(a){a=a[Ya];return a instanceof I?a:null},kb="__closure_events_fn_"+(1E9*Math.random()>>>0),ab=function(a){if(q(a))return a;a[kb]||(a[kb]=function(c){return a.handleEvent(c)});return a[kb]};Oa(function(a){eb=a(eb)});var L=function(a){this.j=sa.apply(null,arguments);return this};L.prototype.set=function(a,c){this.j[a]=c};L.prototype.get=function(a){return x(this.j,a,null)};L.prototype.extend=function(a){ra(this.j,a)};L.prototype.e=function(){var a=[],c;for(c in this.j)a.push(c+this.j[c]);return a.join("_")};var M=function(){return Math.round(s()/1E3)},lb=function(a){return window.performance&&window.performance.timing&&window.performance.timing.domLoading&&0<window.performance.timing[a]?(a=s()-window.performance.timing[a],Math.round(a/1E3)):null},mb=function(){this.domLoading=lb("domLoading");this.domComplete=lb("domComplete");this.unloadEventStart=lb("unloadEventStart")};
mb.prototype.toString=function(){function a(a){a=x(b,a);null!=a?c.push(""+a):c.push("u")}var c=[],b=this;a("domLoading");a("domComplete");a("unloadEventStart");return c.join(".")};var nb=function(){return new mb};var N=function(a,c){this.kv={};this.update(a,c);return this},ob=ta("m","c","s","t"),pb=function(a,c){var b;b=ob;b=a in b;var d="m"==a,e=d&&100<=c;return b&&(e||!d)&&0<c};N.prototype.update=function(a,c){if(a){var b=c?c:1,d=x(this.kv,a,0);this.kv[a]=d+b}};N.prototype.extend=function(a){var c=this;a&&na(a.kv,function(a,d){c.kv[d]=x(c.kv,d,0)+a})};N.prototype.e=function(a){var c="";na(this.kv,function(a,d){c+=pb(d,a)?d+a:""});return c?a+c:c};
var qb=function(a){return oa(a.kv,function(a,b){return pb(b,a)})};var rb=function(a,c){this.I=a;this.o=M();this.X=c;this.a=[]};rb.prototype.length=function(){return this.a.length};var sb=function(a,c){var b=Math.floor((c-a.o)/a.I);return Math.max(0,b)};rb.prototype.add=function(a,c){var b=M(),d=b,e=sb(this,d),e=e+1-this.X;0==this.a.length?this.o=d:e>=this.a.length?(this.o=d,this.a=[]):0<e&&(this.a=la(this.a,e),this.o+=e*this.I);b=sb(this,b);d=a;e=c;this.a[b]?this.a[b].update(d,e):this.a[b]=new N(d,e)};window.console&&"function"===typeof window.console.log&&r(window.console.log,window.console);var O=function(){Sa.call(this);this.h=new I(this);this.Z=this;this.S=null};v(O,Sa);var tb=O;tb.prototype[H]=!0;O.prototype.addEventListener=function(a,c,b,d){J(this,a,c,b,d)};O.prototype.removeEventListener=function(a,c,b,d){gb(this,a,c,b,d)};
O.prototype.dispatchEvent=function(a){var c,b=this.S;if(b){c=[];for(var d=1;b;b=b.S)c.push(b),++d}b=this.Z;d=a.type||a;if(p(a))a=new F(a,b);else if(a instanceof F)a.target=a.target||b;else{var e=a;a=new F(d,b);ra(a,e)}var e=!0,f;if(c)for(var g=c.length-1;!a.n&&0<=g;g--)f=a.currentTarget=c[g],e=R(f,d,!0,a)&&e;a.n||(f=a.currentTarget=b,e=R(f,d,!0,a)&&e,a.n||(e=R(f,d,!1,a)&&e));if(c)for(g=0;!a.n&&g<c.length;g++)f=a.currentTarget=c[g],e=R(f,d,!1,a)&&e;return b=e};
var R=function(a,c,b,d){c=a.h.c[String(c)];if(!c)return!0;c=c.concat();for(var e=!0,f=0;f<c.length;++f){var g=c[f];if(g&&!g.l&&g.p==b){var h=g.i,n=g.r||g.src;g.q&&Xa(a.h,g);e=!1!==h.call(n,d)&&e}}return e&&0!=d.Q};O.prototype.N=function(a,c,b,d){return this.h.N(String(a),c,b,d)};var ub=function(a){return a};var vb=function(a){k.setTimeout(function(){throw a;},0)},wb,xb=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(a.origin==
d||a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!Aa()){var c=new a,b={},d=b;c.port1.onmessage=function(){b=b.next;var a=b.U;b.U=null;a()};return function(a){d.next={U:a};d=d.next;c.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=
null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}},yb=ub;Oa(function(a){yb=a});var Cb=function(a,c){S||zb();Ab||(S(),Ab=!0);T.push(new Bb(a,c))},S,zb=function(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve();S=function(){a.then(Db)}}else S=function(){var a,b=Db,d=b;a&&(d=r(b,a));d=yb(d);!q(k.setImmediate)||k.Window&&k.Window.prototype.setImmediate==k.setImmediate?(wb||(wb=xb()),wb(d)):k.setImmediate(d)}},Ab=!1,T=[],Db=function(){for(;T.length;){var a=T;T=[];for(var c=0;c<a.length;c++){var b=a[c];try{b.la.call(b.scope)}catch(d){vb(d)}}}Ab=!1},Bb=function(a,c){this.la=
a;this.scope=c};var Hb=function(a,c,b){if(0==a.O){if(a==b)c=3,b=new TypeError("Promise cannot resolve to itself");else{var d;if(b)try{d=!!b.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.O=1;b.then(a.ba,a.ca,a);return}d=typeof b;if(d="object"==d&&null!=b||"function"==d)try{var f=b.then;if(q(f)){Eb(a,b,f);return}}catch(g){c=3,b=g}}a.ra=b;a.O=c;Fb(a);3!=c||Gb(a,b)}},Eb=function(a,c,b){a.O=1;var d=a,e=!1;a=function(a){e||(e=!0,d.ba(a))};var f=function(a){e||(e=!0,d.ca(a))};try{b.call(c,a,f)}catch(g){f(g)}},Fb=function(a){a.ja||
(a.ja=!0,Cb(a.ta,a))},Gb=function(a,c){a.na=!0;Cb(function(){a.na&&Ib.call(null,c)})},Ib=vb;var U=function(a,c){O.call(this);this.B=a||1;this.C=c||k;this.K=r(this.$,this);this.L=s()};v(U,O);U.prototype.enabled=!1;U.prototype.k=null;U.prototype.$=function(){if(this.enabled){var a=s()-this.L;0<a&&a<.8*this.B?this.k=this.C.setTimeout(this.K,this.B-a):(this.k&&(this.C.clearTimeout(this.k),this.k=null),this.dispatchEvent("tick"),this.enabled&&(this.k=this.C.setTimeout(this.K,this.B),this.L=s()))}};
U.prototype.start=function(){this.enabled=!0;this.k||(this.k=this.C.setTimeout(this.K,this.B),this.L=s())};var V=function(a,c,b){this.g=b;this.F=null;this.D=0;this.Y=500;this.G=null;Jb(this,a,c);b=document.documentElement;var d;try{if(La()){var e;c=[];var f=E(b.ownerDocument);for(b=f;b!=f.top;b=b.parent)if(b.frameElement)c.push(b.frameElement);else break;d=(e=c)&&0!=e.length?"1":"0"}else d="2"}catch(g){d="2"}try{if("1"==d){for(var h=a.parent;h!=a.top;h=h.parent)Jb(this,h,h.document);Jb(this,a.top,a.top.document)}}catch(n){}},Jb=function(a,c,b){J(b,"mousedown",r(a.da,a));J(c,"scroll",r(a.fa,a));J(b,"touchstart",
r(a.ga,a));J(b,"mousemove",r(a.ea,a))};V.prototype.ga=function(){this.g&&this.g("t")};V.prototype.da=function(){this.g&&this.g("c")};V.prototype.fa=function(){this.g&&this.g("s")};
V.prototype.ea=function(a){a=new ma(a.clientX,a.clientY);if(this.F){var c,b=this.F;c=b.x-a.x;b=b.y-a.y;c=Math.sqrt(c*c+b*b);this.D+=Math.round(c)}this.F=a;this.G&&k.clearTimeout(this.G);a=this.aa;c=this.Y;if(q(a))this&&(a=r(a,this));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");this.G=a=2147483647<c?-1:k.setTimeout(a,c||0)};V.prototype.aa=function(){this.g&&this.g("m",this.D);this.F=this.G=null;this.D=0};var Kb=0,W=null,Mb=function(){Kb=M();W=new rb(10,12);new V(E(),document,r(W.add,W))},Nb=function(a,c){a&&(M=a);c&&(nb=c)};var X=function(a){var c;W||Mb();c=W;this.f=new L("tt",M()-Kb,"pd",a,"bs",c.I);if(pa(E(),"ima","video","client","periscopeTag")){a=this.f;var b="eb",d=4,e=x(a.j,b,0),e=e|d;a.j[b]=e}c.add();a=[];for(b=0;b<c.a.length;b++)6>=c.a.length?d=b:(d=c.a.length-6,d=b<=d?0:b-d),a[d]||(a[d]=new N),c.a[b]&&a[d].extend(c.a[b]);c=a;this.a=c.reverse();t:{for(c=0;c<this.a.length;c++)if(this.a[c]&&qb(this.a[c]))break t;c=null}null!=c&&this.f.set("es",c);return this};X.prototype.R=function(){return this.f.get("tt")};
X.prototype.M=function(){return this.f.get("pd")};X.prototype.ma=function(){return this.a};var Ob=function(a,c){var b=a;ia(c,function(a,c){if(c>=b.a.length||!b.a[c])b.a[c]=new N;b.a[c].extend(a)})};X.prototype.ka=function(a,c,b){Ob(this,a);null!=c&&this.f.set("tt",Math.max(this.f.get("tt"),c));null!=b&&this.f.set("pd",Math.max(this.f.get("pd"),b))};
X.prototype.e=function(){var a=[],c;c=[];for(var b=0;b<this.a.length;b++)if(this.a[b]){var d=this.a[b].e("ed"+b);d&&c.push(d)}(c=c.join("_"))&&a.push(c);(c=this.f.e())&&a.push(c);return a.join("_")};X.prototype.getTimeSinceTagLoadSeconds=X.prototype.R;X.prototype.getPlaylistTimeDiff=X.prototype.M;X.prototype.getPlaylistTimeDiff=X.prototype.M;X.prototype.getBuckets=X.prototype.ma;X.prototype.extendWithDataFromTopIframe=X.prototype.ka;X.prototype.serialize=X.prototype.e;var Pb=function(a){if(/^\s*$/.test(a))return!1;var c=/\\["\\\/bfnrtu]/g,b=/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,d=/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,e=/^[\],:{}\s\u2028\u2029]*$/;return e.test(a.replace(c,"@").replace(b,"]").replace(d,""))},Qb=function(a){a=String(a);if(Pb(a))try{return eval("("+a+")")}catch(c){}throw Error("Invalid JSON string: "+a);},Rb=function(a){this.H=a};Rb.prototype.e=function(a){var c=[];Sb(this,a,c);return c.join("")};
var Sb=function(a,c,b){switch(typeof c){case "string":Tb(c,b);break;case "number":b.push(isFinite(c)&&!isNaN(c)?c:"null");break;case "boolean":b.push(c);break;case "undefined":b.push("null");break;case "object":if(null==c){b.push("null");break}if(m(c)){var d=a;a=c;c=a.length;b.push("[");for(var e="",f=0;f<c;f++)b.push(e),e=a[f],Sb(d,d.H?d.H.call(a,String(f),e):e,b),e=",";b.push("]");break}b.push("{");f="";for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(e=c[d],"function"!=typeof e&&(b.push(f),
Tb(d,b),b.push(":"),Sb(a,a.H?a.H.call(c,d,e):e,b),f=","));b.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof c);}},Ub={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Vb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Tb=function(a,c){c.push('"',a.replace(Vb,function(a){if(a in Ub)return Ub[a];var c=a.charCodeAt(0),e="\\u";16>c?e+="000":256>c?e+="00":4096>c&&(e+="0");return Ub[a]=
e+c.toString(16)}),'"')};var Wb=function(){var a;if(!a)return this;var c=a.pa(),b=a.qa(),d=a.oa(),e=a.R();a=a.M();c&&(this.er=c.e());b&&(this.vi=b.e());null!=d&&(this.buckets=d);null!=e&&(this.tt=e);null!=a&&(this.pd=a);return this};var Xb=null,Yb=function(){var a="google_video_inner_static_iframe",c=document;if(c.body){var b;try{b=c.createElement('<iframe name="'+a+'" id="'+a+'" src="about:blank" style="height: 0px; width: 0px; display:none">'),c.body.appendChild(b)}catch(d){b=c.createElement("iframe"),b.setAttribute("name",a),b.setAttribute("id",a),b.setAttribute("src","about:blank"),b.setAttribute("style","height: 0px; width: 0px; display:none"),c.body.appendChild(b)}}else c.write("<iframe frameBorder='0' src='about:blank' id='"+
a+"' name='"+a+"' style='height:0px;width:0px;display:none'></iframe>")},Zb=function(a){a=a.P;if(E().top==a.source){var c;t:{a=a.data;var b="data";try{if(0==a.lastIndexOf(b,0)){var d=a.substring(b.length),e=new Wb;0<d.length&&ra(e,Qb(d));c=e;break t}}catch(f){}c=null}null!=c&&(Xb=c)}},$b=function(){if(!La()){var a=E().frames;(a=a.length&&a.google_video_inner_static_iframe)||Yb();J(E(),"message",Zb);u("ima.video.client.getLastSnapshotFromTop",function(){return Xb});E().top.postMessage&&E().top.postMessage("get",
"*")}};var ac=null,bc=null;var cc=function(){this.d=-1};var dc=function(){this.d=-1;this.d=64;this.b=[];this.J=[];this.W=[];this.v=[];this.v[0]=128;for(var a=1;a<this.d;++a)this.v[a]=0;this.s=this.m=0;this.reset()};v(dc,cc);dc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.s=this.m=0};
var ec=function(a,c,b){b||(b=0);var d=a.W;if(p(c))for(var e=0;16>e;e++)d[e]=c.charCodeAt(b)<<24|c.charCodeAt(b+1)<<16|c.charCodeAt(b+2)<<8|c.charCodeAt(b+3),b+=4;else for(e=0;16>e;e++)d[e]=c[b]<<24|c[b+1]<<16|c[b+2]<<8|c[b+3],b+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}c=a.b[0];b=a.b[1];for(var g=a.b[2],h=a.b[3],n=a.b[4],t,e=0;80>e;e++)40>e?20>e?(f=h^b&(g^h),t=1518500249):(f=b^g^h,t=1859775393):60>e?(f=b&g|h&(b|g),t=2400959708):(f=b^g^h,t=3395469782),
f=(c<<5|c>>>27)+f+n+t+d[e]&4294967295,n=h,h=g,g=(b<<30|b>>>2)&4294967295,b=c,c=f;a.b[0]=a.b[0]+c&4294967295;a.b[1]=a.b[1]+b&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+n&4294967295};
dc.prototype.update=function(a,c){l(c)||(c=a.length);for(var b=c-this.d,d=0,e=this.J,f=this.m;d<c;){if(0==f)for(;d<=b;)ec(this,a,d),d+=this.d;if(p(a))for(;d<c;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.d){ec(this,e);f=0;break}}else for(;d<c;)if(e[f]=a[d],++f,++d,f==this.d){ec(this,e);f=0;break}}this.m=f;this.s+=c};var Y=function(a){this.V=a},fc=/\s*;\s*/;Y.prototype.isEnabled=function(){return navigator.cookieEnabled};Y.prototype.set=function(a,c,b,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(c))throw Error('Invalid cookie value "'+c+'"');l(b)||(b=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";0>b?b="":(b=0==b?new Date(1970,1,1):new Date(s()+1E3*b),b=";expires="+b.toUTCString());this.V.cookie=a+"="+c+e+d+b+f};
Y.prototype.get=function(a,c){for(var b=a+"=",d=(this.V.cookie||"").split(fc),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(b,0))return f.substr(b.length);if(f==a)return""}return c};Y.prototype.remove=function(a,c,b){var d=l(this.get(a));this.set(a,"",0,c,b);return d};var Z=new Y(document);Z.ua=3950;var gc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,hc=C,ic=function(a,c){var b;b=c;if(hc){hc=!1;var d=k.location;if(d){var e=d.href;if(e){var e=ic(3,e),f=!0;if((e=e?f?decodeURI(e):decodeURIComponent(e):e)&&e!=d.hostname)throw hc=!0,Error();}}}b=b.match(gc);return b[a]||null};var $=null,jc=null,kc=function(a,c,b,d,e){this.u=b;this.t=a;this.ed=c;this.nv=d;this.pl=e},lc=function(a){a=a.split("#")[0];var c=new dc;c.update(a);a=c;var c=[],b=8*a.s;56>a.m?a.update(a.v,56-a.m):a.update(a.v,a.d-(a.m-56));for(var d=a.d-1;56<=d;d--)a.J[d]=b&255,b/=256;ec(a,a.J);for(d=b=0;5>d;d++)for(var e=24;0<=e;e-=8)c[b]=a.b[d]>>e&255,++b;a=c;var f;if(!ca(a))throw Error("encodeByteArray takes an array as a parameter");if(!ac)for(ac={},bc={},c=0;65>c;c++)ac[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),
bc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);f=f?bc:ac;c=[];for(d=0;d<a.length;d+=3){var g=a[d],h=(b=d+1<a.length)?a[d+1]:0,n=(e=d+2<a.length)?a[d+2]:0,t=g>>2,g=(g&3)<<4|h>>4,h=(h&15)<<2|n>>6,n=n&63;e||(n=64,b||(h=64));c.push(f[t],f[g],f[h],f[n])}a=c.join("");return a.slice(0,4)},nc=function(){var a=mc(),c=0,b;var d=mc();if(d&&d.t){b=nb().unloadEventStart;var e=M(),d=d.t;b=b&&d>=e-b?!0:8>=jc-d}else b=!1;t:{e=lc(document.URL);if($)for(d=0;d<$.length;d++)if($[d].u==
e){e=!0;break t}e=!1}d=mc();d=!!d&&0<d.nv;(b=b&&!e&&!d)&&a&&a.pl&&(c=a.pl);return M()-Kb+c},oc=function(){var a=null;if(Z.isEnabled()&&l(Z.get("GED_PLAYLIST_ACTIVITY"))){var c=Z.get("GED_PLAYLIST_ACTIVITY");if(c)try{a=Qb(c)}catch(b){}}return a},mc=function(){if($)for(var a=lc(document.referrer),c=0;c<$.length;c++)if($[c].u==a)return $[c];return null},pc=function(){if(Z.isEnabled()){var a=nc(),c=new X(a),b;t:{b=c;for(var d=Math.min(b.a.length,2),e=0;e<d;e++){var f;if(f=b.a[e])f="c",f=f in b.a[e].kv;
if(f){b=!0;break t}}b=!1}d=M();e=lc(document.URL);a=new kc(d,c,e,b?1:0,a);c=oc();b=[];if(c){c=ka(c);b=document.URL;b=lc(b);d=M();for(e=0;e<c.length;e++)if(c[e].u==b||1200<=d-c[e].t)c.splice(e,1),e--;b=c}a&&b.unshift(a);b=b.slice(0,3);var g;g=(new Rb(g)).e(b);a=document.URL;a=ic(1,a);a="http"==a;Z.set("GED_PLAYLIST_ACTIVITY",g,-1,"/",null,!a)}};var qc=function(){function a(){pc()}if(!(window.ima&&window.ima.video&&window.ima.video.client&&window.ima.video.client.tagged)){Mb();fb(E(),"unload",a);try{jc||(jc=M(),$=oc())}catch(c){}var b=new U(1E3);b.start();J(b,"tick",function(){pc()});u("ima.video.client.getEData",function(){return new X(nc())});u("ima.video.client.setupEDHooks",Mb);u("ima.video.client.resetEDForTesting",Nb);u("ima.video.client.tagged",!0)}};u("ima.video.client.jsTag",!0);$b();qc();})()
