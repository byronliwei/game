(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48110498-1', 'auto');
ga('send', 'pageview');

var current_domain = 'thehotgames.com';
//获取cookie
function getCookie(name){
	var arrStr = document.cookie.split("; ");
	for(var i = 0;i < arrStr.length;i ++){
		var temp = arrStr[i].split("=");
		if(temp[0] == name) return unescape(temp[1]);
   }
}

//添加cookie cookie名/值/过期时间
function addCookie(name,value,hours){
    var str = name + "=" + escape(value);
    if(hours > 0){  //为0或为空时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        date.setTime(date.getTime() + hours*3600*1000);
        str += "; expires=" + date.toGMTString()+";path=/";
   }
   document.cookie = str;
}

//删除cookie
function delCookie(name){
   document.cookie = name+"=;expires="+(new Date(0)).toGMTString();
}
function common_getquerystr(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function common_setcookie(name,value,exptime){
    var exp = new Date(); 
    exp.setTime(exp.getTime() + exptime*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";domain="+current_domain+";path=/;";
}
function common_getCookie(objName){
    var arrStr = document.cookie.split("; ");
    for(var i = 0;i < arrStr.length;i ++){
        var temp = arrStr[i].split("=");
        if(temp[0] == objName){
        	var tmpret = '';
        	for(var tmpi=1;tmpi<temp.length;tmpi++){
        		if(temp.length>2){
        			tmpret += "="+temp[tmpi];
        		}else{
        			tmpret += temp[tmpi];
        		}
        	}
        	return unescape(tmpret);
        }
    }
}

//添加收藏夹
function addFavorite(sURL, sTitle){
    var sURL=sURL?sURL:location.href,
        sTitle=sTitle?sTitle:document.title;
    try{
        window.external.addFavorite(sURL, sTitle);
    }catch (e){
        try{
            window.sidebar.addPanel(sTitle, sURL, "");
        }catch (e){
            alert('Please use "Ctrl + D" to add to favorites');
        }
    }
}

//判断浏览器
function getOs(){
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        var rStr="ie";
        
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

        if (Sys.ie) {
            rStr="ie"
        }
        if (Sys.firefox){
            rStr="firefox"
        }
        if (Sys.chrome){
            rStr="chrome"
        }
        if (Sys.opera){}
        if (Sys.safari){}
        
        return rStr;
}

function openwindow(url,name,iWidth,iHeight){
    var url;
    var name;
    var iWidth;
    var iHeight;
    var iTop = (window.screen.availHeight-30-iHeight)/2;
    var iLeft = (window.screen.availWidth-10-iWidth)/2;
    window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=yes,location=no,status=no');
}

function shareTo(site,paramJson){
    var siteJson={
        'f':'https://www.facebook.com/sharer/sharer.php?u=[url]',
        'g':'https://plus.google.com/share?url=[url]',
        't':'https://twitter.com/home?status=[url]',
        'p':'https://pinterest.com/pin/create/button/?url=[url]&media=[media]&description=[description]',
        's':'http://www.stumbleupon.com/submit?url=[url]'   
    };

    var paramJson={},share_url='http://www.thehotgames.com/'+site_config['lang']+'/game/play/'+site_config['n']+'.html';
    paramJson.url=share_url;
    share_url=siteJson[site];
    
    for(var x in paramJson){
        share_url=share_url.replace('['+x+']',paramJson[x]);
    }

    //alert(share_url);return;
    openwindow(share_url,'',800,500);
    
}

//********Facebook Share*********//
function showCommentBox(obj){
  $('.posts_reply').hide();
  var _this=$(obj),
      _parent=_this.closest('li'),
      replybox=_parent.find('.posts_reply'),
      fbcomment=$('#fb-comment-reply');
    if(!replybox.find('iframe').size()){
      replybox.html(fbcomment.html());
    }
    replybox.show();
    
}

function checkCommentHeight(){
    checkCCount=0;
    checkCHeight=setInterval(function(){
        var fbBox=$('#fb-comments .fb_iframe_widget:eq(0)');
        var height=fbBox.height();
        if(height>435||checkCCount>40){
            if(height>435){
                $('#comments_sub').remove();
            }
            clearInterval(checkCHeight);
        }
        checkCCount++;
        //console.log(height);
    },1500)
}

$(function(){
    
    $('#comments_sub').click(function(e){
      if(e.target.tagName!='A'){
        $('.posts_reply').hide();
      }
    })

    $('.posts_like').toggle(function(){
      $(this).text(site_config.fb.unlike);
    },function(){
      $(this).text(site_config.fb.like);
    })

})

//****************//

function loadNavHistoryData(){
    var _hdata=storage.get("HistoryGame","data"),str='',len=_hdata.length>5?5:_hdata.length;
    for(var i=0;i<len;i++){
        str+='<a href="'+_hdata[i].url+'" title="'+_hdata[i].name+'">'+
            '<img width="40" height="40" src="'+_hdata[i].img+'" alt="'+_hdata[i].name+'" />'+_hdata[i].name.substring(0,15)+
        '</a>';
    }
    $('#topPlayed .playedList').html(str);
}
loadNavHistoryData();


function lanToggle(){
    var lanToggle=$("#langSwitch"),
        lanUl=lanToggle.find('ul');
    
    lanToggle.click(function(){
        lanUl.toggle();
    }).on('mouseleave',function(){
        setTimeout(function(){
            lanUl.hide();
        },200)
    })

    //set current lang icon
    var lang=site_config.lang,langCurrent=$('#langSwitch>span');
    var _current=$('#langSwitch ul').find('.nation_'+lang);
    if(_current.size()){
        langCurrent.html(_current.parent().html());
    }
}
lanToggle();

/*######################全局事件追踪#####################*/
//Ga Analytics
function sentEvent(category,action,label){
    var category=category?category:'',
        action=action?action:'',
        label=label?label:'';
    ga('send', 'event', category, action, label);
}

$(function(){
    //Nav Event track
    $('.navTabs li>a').on('mousedown',function(){
        var _this=$(this);
        var name=_this.attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'Nav',name);
    })

    //Logo Click track
    $('#logo').on('mousedown',function(){
        sentEvent(site_config.cata,'Logo');
    })

    //Header sort nav track
    $('#headerSortList a').on('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'HeaderSortBar',name);
    })

    //Right nav Track
    $('.rightnav .tagnav a').on('mousedown',function(){
        var _this=$(this),name;
        if(_this.hasClass('m0')){
            name='home';
        }else{
           name =_this.attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1]
        }

        sentEvent(site_config.cata,'RightNav',name);
    })

    //Gototop track
    $('.gototop').on('mousedown',function(){
        sentEvent(site_config.cata,'RightNav','gotop_click');
    })

    //Login track
    $('#btn-login').on('mousedown',function(){
        sentEvent(site_config.cata,'User_login','login');
    })

    //Logout track
    $('#btn-logout').on('mousedown',function(){
        sentEvent(site_config.cata,'User_login','logout');
    })

    //Footer event track
    $('#footer_bar>a').on('mousedown',function(){
        var _this=$(this),
            name=_this.text();
        sentEvent(site_config.cata,'Footer_bar',name);
    })
    $('#langSwitch').on('mousedown',function(){
        var _this=$(this);
        sentEvent(site_config.cata,'LangSwitch','click');
    })
    $('#langSwitch ul a').on('mousedown',function(){
        var _this=$(this),lan=_this.attr('href').split('=')[1];
        sentEvent(site_config.cata,'LangSwitch','to_'+lan);
    })


    //Game List click track
    $('#game-box a').live('mousedown',function(){
        var _this=$(this),
            name=_this.find('span').text();
        sentEvent(site_config.cata,'Game',name);
    })
    
    $('.at4-share-btn').live('mousedown',function(){
    	sentEvent(site_config.cata,'Left_sharebar',$(this).attr('class').split('at-svc-')[1]);
    })
    
    $('.tophotbox a').on('mousedown',function(){
        var _this=$(this),
        name=_this.find('img').attr('alt');
        sentEvent(site_config.cata,'Tophotbox',name);
    })
    
    /*==============Game play Page Event================*/

    $('.addthis_toolbox .custom_images a').on('mousedown',function() {
    	var name=$(this).attr('class').replace('addthis_button_','');
    	var id=site_config.n;
    	sentEvent(site_config.cata,'Head_addthis',id+'_'+name);
    });
    $('#imgzw').on('mousedown',function() {
    	sentEvent(site_config.cata,'left_img');
    });
    $('.gameinfo .relatelinks .btn').on('mousedown',function() {
    	sentEvent(site_config.cata,'Left_relate_tag',$.trim($(this).text()));
    });
    $('#related .relategame').on('mousedown',function() {
    	sentEvent(site_config.cata,'Left_relate_game',$(this).attr('alt'));
    });

    $('.bottomrelated .relategame2').on('mousedown',function() {
    	sentEvent(site_config.cata,'Bottom_relategame',$(this).attr('alt'));
    }); 
    
    $('#playLeftGame a').on('mousedown',function() {
        sentEvent(site_config.cata,'playSideLeftGame',$(this).attr('title'));
    });
    $('#playRightGame a').on('mousedown',function() {
        sentEvent(site_config.cata,'playSideRightGame',$(this).attr('title'));
    });
    $('.topTags a').on('mousedown',function() {
        sentEvent(site_config.cata,'playTopTags',$.trim($(this).text()));
    });
    $('.posts_action a').on('mousedown',function() {
        var _index=$('.posts_action').find('a').index($(this));
        var _arr=['Reply','Like','Share','Time'];
        sentEvent(site_config.cata,'fbCommentAction',_arr[_index]);
    });
    $('#turnofflight-btn').on('click',function() {
        var name=$(this).attr('title').split(' ')[1];
        name=name=='On'?'Off':'On';
        sentEvent(site_config.cata,'playTopTools','TurnLight_'+name);
    });
    $('#maximize-btn').on('click',function() {
        var name=$(this).attr('title').split(' ')[0];
        name=name=='Full'?'Escape':'Full';
        sentEvent(site_config.cata,'playTopTools','FullScreen_'+name);
    });
    $('#gamedownload-btn').on('click',function() {
        var name=$(this).attr('title').split(' ')[0];
        name=name=='Full'?'Escape':'Full';
        sentEvent(site_config.cata,'playTopTools','GameDownload_'+name);
    });

    /*===========webgame============*/
    $('.game-container .game-item a').on('mousedown',function(){
    	sentEvent(site_config.cata,'Webgame-item',$(this).attr('title'));
    })
    
    $('.slider-list a').on('mousedown',function(){
    	sentEvent(site_config.cata,'Webgame-slide',$(this).find('img').attr('title'));
    })
    
    /*==============game more list==============*/

    $('#thumbsList .txtlink').on('mousedown',function(){
    	sentEvent(site_config.cata,'Moregame-item',$(this).attr('title'));
    })

    //Histroy page track
    $('.historybox a').live('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'Game',name);
    })

    /*==============game info page============*/
    $('.lefttop .nav-tabs a').on('mousedown',function(){
        sentEvent(site_config.cata,'Nav-tabs',$(this).attr('href'));
    })

    $('#game_tags a').on('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'Game_tags_top',name);
    })

    $('.right_area .toplist a').on('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'Top-games',name);
    })

    $('.relateditem a').on('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'Game_related',name);
    })
	$('#play_btn').on('mousedown',function(){
        sentEvent(site_config.cata,'Play-Now');
    })

    //新版导航事件追踪
    $('.hasNavSub>a').on('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'HasNavSub',name);
    })
    $('.navTabs .navSub>a').on('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'NavSub',name);
    })

    $('#topPlayed .navSub').on('mouseenter',function(){
        sentEvent(site_config.cata,'NavTopPlayed','show');
    })
    $('#topPlayed a').on('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'NavTopPlayed',name);
    })

    //Search
    $('.searchBox input').on('keydown',function(e){
        var _this=$(this),_parent=_this.parent(),name=_this.val();
        if(!name){
            name="(not provided)";
        }
        if(e.keyCode == 13){
            sentEvent(site_config.cata,'Search',name);
            _parent.get(0).submit();
        }
    })

    $('.searchBox button').on('mousedown',function(e){
        var _this=$(this),_parent=_this.parent(),
            _input=_parent.find('input'),name=_input.val();
        if(!name){
            name="(not provided)";
        }

        sentEvent(site_config.cata,'Search',name);
        _parent.get(0).submit();
    })

    $('.hot-box>a').on('mousedown',function(){
        var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'Hot-box',name);
    })

    $('#thumbsList .item>a').on('click',function(){
      var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'SearchResultItem',name);
    })

    $('#thumbsList .tag-item>a').on('click',function(){
      var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'TagItem',name);
    })

    $('.bottom-tags .tag_list a').on('click',function(){
      var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'Game_tags_bottom',name);
    })

    $('#christmas-collect').on('click',function(){
        sentEvent(site_config.cata,'Christmas-addLike');
    })

    $('#countdownClose').click(function(){
        sentEvent(site_config.cata,'Christmas-countdown','close');
    })
    $('#christmas-gif').click(function(){
        sentEvent(site_config.cata,'Christmas-countdown','show');
    })
    $('#countdownFavorite').click(function(){
        sentEvent(site_config.cata,'Christmas-countdown','favorite');
    })

    $('#sideGameLeft a').on('click',function(){
      var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'FixedSideGame_Left',name);
    })
    $('#sideGameRight a').on('click',function(){
      var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
        sentEvent(site_config.cata,'FixedSideGame_Right',name);
    })

    $('.gameSwitch-btn').on('click',function(){
      //var name =$(this).attr('href').match(/.*?\/([0-9a-zA-Z-_]*?)\.html/)[1];
      var Action=$(this).hasClass('gameSwitch-pre')?'Prev Game':'Next Game';
        sentEvent(site_config.cata,'PlayPrevNextGame',Action);
    })



})

/*######################事件追踪#####################*/



/*######################全局用户登陆注册#####################*/

/*
 * 全局脚本，依赖于jQuery
 */

//woos全局变量
var woos = window.woos || {};

//命名空间
woos.namespace = function(ns) {
    if (!ns || !ns.length) {
        return null;
    }

    var levels = ns.split(".");
    var nsobj = woos;

    // woos is implied, so it is ignored if it is included
    for (var i=(levels[0] == "woos") ? 1 : 0; i<levels.length; ++i) {
        nsobj[levels[i]] = nsobj[levels[i]] || {};
        nsobj = nsobj[levels[i]];
    }

    return nsobj;
};

//扩展
woos.extend = function(target, object) {
    $.extend(target, object);
};

//调试输出
woos.log = function() {
    if (typeof(console) == "object" && typeof(console.log) == "function") {
        console.log.apply(console, arguments);
    }
};

//类创建
woos.createClass = function() {
    var c = function() {
        if (this.initialize) this.initialize.apply(this, arguments);
    };
    c.prototype.initialize = function() {};
    return c;
};
//类继承
woos.extendClass = function(subclass, superclass) {
    var f = function() {};
    f.prototype = superclass.prototype;
    subclass.prototype = new f();
    subclass.prototype.constructor = subclass;
    subclass.superclass = superclass.prototype;
    subclass.prototype.parent = superclass.prototype;
    if (superclass.prototype.constructor == Object.prototype.constructor) {
        superclass.prototype.constructor = superclass;
    }
};

//配置操作
woos.namespace('woos.config');
//默认配置
woos.config._setting = {
    debug : false,
    uid : 0,
    baseUrl : 'http://www.thehotgames.com',
    wikiUrl : 'http://www.thehotgames.com',
    appUrl : 'http://www.thehotgames.com'
};
//读取配置
woos.config.get = function(key) {
    return woos.config._setting[key] ? woos.config._setting[key] : '';
};
//写入配置
woos.config.set = function(key, value) {
    if ($.isPlainObject(key)) {
        $.extend(woos.config._setting, key);
    } else {
        woos.config._setting[key] = value;
    }
};

//语言操作
woos.namespace('woos.langs');
woos.langs._content = {};
woos.langs.get = function(key) {
    var key = arguments[0] || '_';
    var msg = woos.langs._content[key] ? woos.langs._content[key] : key;
    for(var i=1; i<arguments.length; i++) {
        msg = msg.replace('{'+(i-1)+'}', arguments[i]);
    }
    return msg;
};
woos.langs.set = function(key, value) {
    if ($.isPlainObject(key)) {
        $.extend(woos.langs._content, key);
    } else {
        woos.langs._content[key] = value;
    }
};
woos.langs.load = function(string) {
    return string.replace(/\[lang\:(\w+)\]/ig, function(find, key){ return woos.langs.get(key); } );
};

//cookie操作
woos.namespace('woos.cookie');
//cookie的读取
woos.cookie.get = function (key, value, options) {
        options = options || {};
        var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
        return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
//cookie的删除
woos.cookie.remove = function (key) {
    woos.cookie.set(key, null);
};
//cookie的写入
woos.cookie.set = function (key, value, options) {

    options = jQuery.extend({
        domain : woos.config.get('cookieDomain'),
        path :  woos.config.get('cookiePath')
    }, options);

    if (value === null || value === undefined) {
        options.expires = -1;
    }

    if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setDate(t.getDate() + days);
    }

    value = String(value);

    return (document.cookie = [
        encodeURIComponent(key), '=',
        options.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
    ].join(''));
};

//请求操作
woos.namespace('woos.request');
woos.request._send = function (url, type,  _data, _successCallback, _errorCallback) {
    data = null;
    successCallback = null;
    errorCallback = null;
    if (!$.isPlainObject(_data) && $.isFunction(_data)) {
        successCallback = _data;
        errorCallback = _successCallback;
    } else {
        data = _data;
        successCallback = _successCallback;
        errorCallback = _errorCallback;
    }

    //判断是否为同域
    var host = location.protocol + '//' + location.hostname
    var crossdomain = url.substr(0, host.length) == host ? false : true;

    var options = {
        url: url,
        type: crossdomain ? 'GET' : type, //跨域则强制使用get
        data: arguments.length == 2 ? {} : data,
        timeout: 20000
    };
    if (crossdomain) {
        options['dataType'] = 'jsonp';
        options['jsonp'] = 'callback';
    } else {
        options['dataType'] = 'json';
    }
    if (successCallback) {
        options['success'] = successCallback;
    }
    if (errorCallback) {
        options['error'] = errorCallback;
    }
    jQuery.ajax(options);
};
//使用GET请求
woos.request.get = function(url, data, success, error) {
    woos.request._send(url, 'GET', data, success, error)
}
//使用POST请求
woos.request.post = function(url, data, success, error) {
    woos.request._send(url, 'POST', data, success, error)
}

//字符串操作
String.prototype.strLength = function() {
    var cArr = this.match(/[^\x00-\xff]/ig);
    return this.length + (cArr == null ? 0 : cArr.length) + "&" + cArr;
}

woos.namespace('woos.string');
woos.string.cut = function(str, len){
    len = parseInt(len);
    var temp = str.strLength().split('&')[1];
    var strLen = str.strLength().split('&')[0];
    if(temp == 'null'){
        if(strLen >= len + 2) return str.substr(0, len) + "...";
        else return str;
    }else{
        len = len/2;
        if(strLen >= len + 2) return str.substr(0, len) + "...";
        else return str;
    }
};


woos.string.trim = function(str) {
    return $.trim(str);
};

//用户模块
woos.namespace('woos.user');
woos.user.showLogin = function(){
    $('#login_modal').modal();
    $('.reg_error_tip,.login_error_tip').html('');
}

woos.user.fbConnect = function(callback){
    if(typeof(FB) == 'undefined') {
        setTimeout(function(){woos.user.fbConnect(callback);}, 500);
        return;
    }
    FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', function(response){
                console.log(response);
                woos.user.fbLogin(response,callback);
            });
        } else {
            //cancel
        }
    }, {scope: 'public_profile,email'});
    return false;
}

woos.user.fbLogin = function(params,callback) {
    var url = '/user/login';
    $.ajax({
        type: "POST",
        url: url,
        data: params,
        dataType : 'json'
    }).done(function( res ) {

        if (res.status == 0) {
            $('#login_modal').modal('hide');
            var uinfo=res.uinfo;
            loginHandle(uinfo);
            return;
            
            var login_callback = woos.config.get('login_callback');
            if(typeof(callback) != 'undefined'){
                callback(res);
            }else if(typeof(login_callback) != 'undefined' && $.isFunction(login_callback)){
                login_callback(res);
            }else{
                //loginHandle(uinfo);
                
                //window.location.reload();
            }
        }
        else {
            alert('ERROR'  + res.status);
        }
    });
    $('#login_modal').modal('hide')
}


woos.user.GPReady = function(){
//    console.log('GPReady');
    woos.config.set('GPReady', true);
}

woos.user.GPConnect = function(callback){
    if(!woos.config.get('GPReady')) {
        //console.log('GP undefined');
        setTimeout(function(){woos.user.GPConnect(callback);}, 500);
        return;
    }

    var signinCallback = function(authResult) {
        console.log(authResult);
        if (authResult['status']['signed_in']) {
            if(authResult['status']['method'] == 'PROMPT'){
                woos.user.GPLogin(authResult,callback)
            }
        } else {
            //console.log('Sign-in state: ' + authResult['error']);
        }
    }
    var additionalParams = {
        'callback': signinCallback,
        'scope' : 'openid profile email'
    };
    gapi.auth.signIn(additionalParams);
}

//登录模块
woos.user.login = function(username, password, remember, complete) {
    var data = {
        username : username,
        password : password
    };

    var loginUrl = '/user/login';
    $.post(loginUrl, data, function(ret){
        complete.call(this, ret);
    });
}

woos.user.GPLogin = function(authResult,callback) {
    var url = 'http://www.thehotgames.com';
    var param = {
        access_token: {
            access_token:authResult.access_token,
            token_type:authResult.token_type,
            expires_in : authResult.expires_in,
            id_token:authResult.id_token,
            created:authResult.expires_at
        }
    }
    $('#login_modal').modal('hide')
    window.location.reload();
}

woos.user.register = function(username, password, email, complete) {
    var data = {
        username: username,
        password:password,
        email:email,
        submit:1
    };
    var registerUrl ='/user/register';
    $.post(registerUrl, data, function(ret){
        //console.log(ret);
        complete.call(this, ret);
    });
}

woos.user.register2 = function(username, password, email, inviter, captchacode,complete) {
    var data = {
        username: username,
        password:password,
        email:email,
        inviter:inviter,
        captchacode:captchacode,
        submit:1
    };
    var registerUrl = woos.config.get('baseUrl') + '/user/register';
    woos.request.post(registerUrl, data, function(ret){
        if (ret && ret.status == 0) {
            woos.user._afterLogin(ret);
        }
        complete.call(this, ret);
    }, function(){
        complete.call(this, {status : -10});
    });
}


function common_add(info){
	var tmpimg = new Image();
    tmpimg.src = "http://ana."+current_domain+"/"+info+"/empty.gif?v="+Math.floor(Math.random() * 10000);
}

var zhExt = /^[0-9\u4e00-\u9faf]+$/;
var toolTip={
    "Username":["Username cannot be blank","Must be 4 -15 characters long"],
    "Password":["Password cannot be empty","A password should contain between 6 and 20 characters","re-enter your password","Only fill A-Z and 0-9"],
    "Email":["The mail address cannot be blank","有效郵箱"],
    "accountTip":"Please fill in the correct username and password",
    "loginReturn":["帳戶名已存在","帳戶名只能包含字母和數位","此信箱已被使用，請更換一個新的信箱","有效郵箱","註冊失敗。請檢查您的輸入",""]

};

function booleanFocusCheck(obj) {
    var oValue = obj.val(),
        dataVal = obj.attr("data-value");
    if (oValue == dataVal || oValue == "") {
        obj.val("")
    }
    if (obj.attr("name") == "password") {
        try {
            obj.prop("type", "password")
        } catch (err) {
            var replaceInput = $('<input type="password" data-value="Password" autotype="password" id="password" name="password" class="dialog-input">');
            obj.replaceWith(replaceInput);
            replaceInput.focus();
            replaceInput.blur(function() {
                booleanBlurCheck(replaceInput)
            })
        }
    }
}

function booleanBlurCheck(obj) {
    var oValue = obj.val(),
        dataVal = obj.attr("data-value"),
        tool = obj.next(".tool-tip"),
        dataType = obj.attr("autoType");

    function passwordCheck(obj, oValue, dataVal, tool) {
        if (oValue.length < 6) {
            if (oValue == "" || oValue.length == 0) {
                obj.val(dataVal);
                tool.html(toolTip.Password[0]).removeClass("hidden")
            } else {
                tool.html(toolTip.Password[1]).removeClass("hidden")
            }
            return false
        } else {
            if (oValue == dataVal) {
                obj.val(dataVal);
                tool.removeClass("hidden").html(toolTip.Username[0]);
                return false
            } else {
                tool.addClass("hidden");
                return true
            }
        }
    }
    if (obj.attr("type") == "password" && obj.val().length == 0) {
        try {
            obj.prop("type", "text")
        } catch (err) {
            var replaceInput = $('<input value="Password" type="text" data-value="Password" autotype="password" id="password" name="password" class="dialog-input">');
            obj.replaceWith(replaceInput);
            replaceInput.bind("focus", function() {
                booleanFocusCheck(replaceInput)
            })
        }
    }
    switch (dataType) {
        case "username":
            if (zhExt.test(oValue)) {
                tool.html(toolTip.Password[3]).removeClass("hidden");
                return false
            }
            if (oValue.length < 4) {
                if (oValue == "") {
                    obj.val(dataVal);
                    tool.html(toolTip.Username[0]).removeClass("hidden")
                } else {
                    tool.html(toolTip.Username[1]).removeClass("hidden")
                }
                return false
            } else {
                if (oValue == dataVal) {
                    obj.val(dataVal);
                    tool.removeClass("hidden").html(toolTip.Username[0]);
                    return false
                } else {
                    tool.addClass("hidden");
                    return true
                }
            }
            break;
        case "password":
            passwordCheck(obj, oValue, dataVal, tool);
            if (passwordCheck(obj, oValue, dataVal, tool) == false) {
                return false
            } else {
                return true
            }
            break;
        case "confirmPassword":
            var firstVal = $("#reg-password").eq(0).val(),
                secondVal = obj.val();
            if (firstVal !== secondVal) {
                tool.html(toolTip.Password[2]).removeClass("hidden");
                return false
            } else {
                tool.html("");
                return true
            }
            if (passwordCheck(obj, oValue, dataVal, tool) == false) {
                return false
            } else {
                return true
            }
            break;
        case "email":
            var isEmail = /^\w+([-\.]\w+)*@\w+([\.-]\w+)*\.\w{2,4}$/;
            if (!isEmail.test(oValue)) {
                if (oValue == "") {
                    obj.val(dataVal);
                    tool.html(toolTip.Email[0]).removeClass("hidden")
                } else {
                    tool.html(toolTip.Email[1]).removeClass("hidden")
                }
                return false
            } else {
                tool.addClass("hidden");
                return true
            }
            break
    }
}
var onPost = false;
$(".dialog-input").focus(function() {
    var me = $(this);
    booleanFocusCheck(me)
});
$(".dialog-input").blur(function() {
    var me = $(this);
    booleanBlurCheck(me)
});

function checkUsername(regUserName){
    var error = '';
    var u = $("#reg_username").attr("data-value");
    if (regUserName == u){
        error = regTip.username[0];
    }else{
        var username_reg = /^[0-9a-zA-Z_]*$/;
        regUserName = regUserName.replace(/^\s+/, '').replace(/\s+$/, '');
        if(regUserName == ""){
            error = regTip.username[0];
        }else if(regUserName.length < 5 || regUserName.length > 15){
            error = regTip.username[1];
        }else if(!username_reg.test(regUserName)){
            error = regTip.username[2];
        }
    }
    if(error){
        $('#reg_username_error').html(error);
        return false;
    }else{
        $('#reg_username_error').html('');
        return true;
    }
}
function checkPwd(regPassword){
    var p = $("#reg_password").attr("data-value");
    var error = '';
    regPassword = regPassword.replace(/^\s+/, '').replace(/\s+$/, '');
    if(regPassword == p){
        error = regTip.password[0];
    }
    else if(regPassword == ""){
        error = regTip.password[0];
    }else if(regPassword.length < 6 || regPassword.length > 20){
        error = regTip.password[1];
    }
    if (error) {
        $('#reg_pwd_error').html(error);
        return false
    }else {
        $('#reg_pwd_error').html('');
        return true;
    }
}
function checkEmail(regEmail){
    var e = $("#reg_email").attr("data-value");
    var error = '';
    var email_reg = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
    regEmail = regEmail.replace(/^\s+/, '').replace(/\s+$/, '');
    if(regEmail == e){
        error = regTip.email[0];
    }else if(regEmail == ""){
        error = regTip.email[0];
    }else if(!email_reg.test(regEmail)){
        error = regTip.email[1];
    }
    if (error) {
        $('#reg_email_error').html(error);
        return false
    }else {
        $('#reg_email_error').html('');
        return true;
    }
}
function modal_register(obj){
    if (onPost) {
        return;
    }
    var regUserName = $("#reg_username").val(),
        regPassword = $("#reg_password").val(),
        regEmail = $("#reg_email").val();

    var nameStatus = checkUsername(regUserName);
    var pwdStatus = checkPwd(regPassword);
    var emailStatus = checkEmail(regEmail);
    if(!nameStatus || !pwdStatus || !emailStatus){
        return false;
    }
    onPost = true;
    $(obj).val("").css({
        background: "url('/Public/static/images/loading1.gif') no-repeat center center",
        cursor: "auto"
    });
    woos.user.register(regUserName, regPassword, regEmail, function(res){
        onPost = false;
        res=eval('(' + res + ')'); 

        $(obj).val(langItem.login).removeAttr('style');
        if(res.status == 0){
        	var uinfo=res.uinfo;
        	loginHandle(uinfo);
        }else{
            if(typeof(res.errorType) != 'undefined'){
                $('#reg_'+ res.errorType +'_error').html(res.msg);
            }else{
                alert('Register Fail');
            }
        }
    });
}
function modal_login(obj){
    if (onPost) {
        return;
    }
    var loginUserName = $("#login_username").val(),
        loginPassword = $("#login_password").val();
    var u = $("#login_username").attr("data-value");
    var p = $("#login_password").attr("data-value");
    if(loginUserName == u || loginPassword == p || loginUserName == '' || loginPassword == ''){
        $('.login_error_tip').html(regTip.username[3]);
        return;
    }
    onPost = true;
    $(obj).val("").css({
        background: "url('/Public/static/images/loading1.gif') no-repeat center center",
        cursor: "auto"
    });
    $('.login_error_tip').html();
    woos.user.login(loginUserName, loginPassword, 1, function(res){
        onPost = false;
        res=eval('(' + res + ')'); 
        $(obj).val(langItem.login).removeAttr('style');
        if(res.status == 0){
        	//setcookie
        	var uinfo=res.uinfo;
        	loginHandle(uinfo);
        }else{
            $('#reg_username_error').html(res.msg);
        }
    })
}

function loginHandle(uinfo){
	addCookie('uinfo',JSON.stringify(uinfo),1000);
	window.uinfo=uinfo;
	
	$('#login_modal').modal('hide');
	$('.user-logo').show().find('img').attr('title',uinfo.name);
	$('#btn-login').hide();
	$('#btn-logout').show();	
}

function userLogout(){
	logoutHandle();
	location.href='/user/login?type=logout';
}

function logoutHandle(){
	delCookie('uinfo');
	window.uinfo='';
	
	$('.user-logo').hide().find('img').attr('alt','');
	$('#btn-login').show();
	$('#btn-logout').hide();	
}

$(function(){
	var uinfo=getCookie('uinfo');

	if(typeof uinfo!='undefined'&&uinfo!='undefined'){
		if(uinfo){
			uinfo=JSON.parse(uinfo);
			loginHandle(uinfo);
		}
	}
})


function modal_goTo(name){
    if(name && name=='login'){
        $('#login-begin').removeClass('hidden');
        $('#register-begin').addClass('hidden');
    }else{
        $('#login-begin').addClass('hidden');
        $('#register-begin').removeClass('hidden');
    }
}

//Common Header Warn Function
window.headerWarn={
    show:function(obj){
        if(obj.string){
            $('body').addClass('site-warn').prepend('<div id="header-warn" style="height:'+obj.height+'px">'+obj.string+'</div>');
            $('.site-warn').css('padding-top',obj.height+'px');
        }
    },
    hide:function(){
        $('.site-warn').css('padding-top','');
        $('#header-warn').hide();
        $('body').removeClass('site-warn');
    }
}

/*######################全局用户登陆注册END#####################*/

/*FB Like*/
$(function(){
    setTimeout(function(){
      $(".facebookNum").html("98k").show();
      $(".facebookSanjiao").show();
    },100);
})