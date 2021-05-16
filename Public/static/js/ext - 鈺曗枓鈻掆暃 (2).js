/*$(function(){
    headerWarn.show({
        'string':'hello world',
        'height':40
    });
})*/

if (!window.localStorage) {
  window.localStorage = {
    getItem: function (sKey) {
      if (!sKey || !this.hasOwnProperty(sKey)) { return null; }
      return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
    },
    key: function (nKeyId) {
      return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
    },
    setItem: function (sKey, sValue) {
      if(!sKey) { return; }
      document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
      this.length = document.cookie.match(/\=/g).length;
    },
    length: 0,
    removeItem: function (sKey) {
      if (!sKey || !this.hasOwnProperty(sKey)) { return; }
      document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      this.length--;
    },
    hasOwnProperty: function (sKey) {
      return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }
  };
  window.localStorage.length = (document.cookie.match(/\=/g) || window.localStorage).length;
}

function setLastOpenSort(){
	var site_config=window.site_config||{},
		url=location.href,
		cata=site_config.cata||'',
		_cata=cata.split('-')[0]||'',
		sort=site_config.sort;
	var b_filter=['index','best','hot',''];

	if(b_filter.indexOf(_cata)==-1&&url.indexOf('game/category')>-1){
		localStorage.lastOpenCata=_cata;
	}
}
setLastOpenSort();

function recommendBestGame(){
	function onetime(node, type, callback) {
	    node.addEventListener(type, function(e) {
	      node.removeEventListener(e.type, arguments.callee);
	      return callback(e);
	    })
	}

	var check=function(callback){
		var url=location.href;
		var utime=localStorage.utime||0;
		var ntime=new Date().getTime();

		if(url.indexOf('/game/play')>-1&&(ntime-utime)>518400*1000){
			if(typeof callback=='function'){
				callback();
			}
		}
	}

	try{
		check(function(){
			onetime(document, "click", function(e){
				var site_config=window.site_config||{},
					lang=site_config.lang||'',
					sort=site_config.sort||'';
				
				var lastCata=localStorage.getItem('lastOpenCata')||'';
				var recommendArr=['car','girl','mario','skill'];

				var recStr='car';

				if(lastCata!=sort&&recommendArr.indexOf(sort)>-1){
					recStr=sort;
				}else if(lastCata==sort&&recommendArr.indexOf(sort)>-1){
					if(sort=='car'){
						recStr=Math.random()>0.5?'girl':'mario';
					}
				}

				var url=(lang?('/'+lang):'')+'/game/category/'+recStr+'-games.html?info=1&version=new&utm=best';
				window.open(url);
				localStorage.utime=new Date().getTime();
			});
		})
	}catch(e){}
}
//recommendBestGame();

(function(){
	function onetime(node, type, callback) {
	    node.addEventListener(type, function(e) {
	      node.removeEventListener(e.type, arguments.callee);
	      return callback(e);
	    })
	}

	try{
		var cata=site_config.cata;
		var ptime=localStorage.getItem('ptime')||0;
		var ntime=new Date().getTime();
		var lang=site_config.lang;
		//var goArr=['br','pt-br','pt-pt','pt','es','es-ar','es-mx','es-419','es-es'];
		var goArr=['es','es-ar','es-mx','es-419','es-es','en','en-us'];
		//var goArrMetor=['ru','ru-ru'];
		var locCheck=(location.href.indexOf('game/info')>-1||location.href.indexOf('game/play')>-1);
		
		var randCheck=true;

		//For Copacet random test
		/*if(locCheck&&(ntime-ptime)>86400*1000&&lang!='tr'&&lang!='tr-tr'&&goArr.indexOf(lang)==-1){
			goName='Copacet';
			if(Math.random()<0.06){
				randCheck=false;
				document.write("<scr" + "ipt type='text/javascript' src='//advertising.copacet.com/ad/getoffers/?instanceID=1ae97b4f57&" + Math.random() + "'></scri" + "pt>");
				localStorage.setItem('ptime',new Date().getTime());
				sentEvent('PopData',goName,lang);
			}
		}*/
		
		if(randCheck&&locCheck&&(Math.random()>0.6)&&(ntime-ptime)>86400*1000&&goArr.indexOf(navigator.language.toLowerCase())>-1){
			var goUrl='http://ads.ad4game.com/www/delivery/pu.php?n=&zoneid=51800';
			var goName='ad4game';
			
			/*if(goArrMetor.indexOf(navigator.language.toLowerCase())>-1){//For RU
				goUrl='http://goo.gl/wZR5je';
				goName='gamemeteor';
			}*/
			if(goUrl){
				onetime(document, "click", function(e){
					localStorage.setItem('ptime',new Date().getTime());
					window.open(goUrl);
					window.focus();
					sentEvent('PopData',goName,lang);
				})
			}
		}
	}catch(e){}
}())


function asBakShow(){
	$('.adsbygoogle').each(function(){
		var _this=$(this),
		h=_this.height(),
		w=_this.width();
		_this.after('<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" style="width:'+w+'px;height:'+h+'px;" src="/Asbak/index.html?w='+w+'&h='+h+'&f=adblock"></iframe>').show();
	})
}

$(function(){
	try{
		var asOff=true;$('.adsbygoogle').each(function(){
			if($(this).children().length>=1){
				asOff=false;
			}
			if(asOff){
				sentEvent('Adblock',site_config.cata,'Be blocked');
			}
		
		});

		if(asOff){
			asBakShow();
		}
		
	}catch(e){};
})


/*Ext Install*/
function installExt(position){
	var position=position?position:'topWarn';
	sentEvent('ExtInstall',position,'btnClick');

	var itemURL = $('link[rel=chrome-webstore-item]').attr('href');
	chrome.webstore.install(itemURL, function(){
		sentEvent('ExtInstall',position,'success');
		headerWarn.hide();
	}, function(){
		sentEvent('ExtInstall',position,'failure');
		headerWarn.hide();
	});

	localStorage.installCheck=true;
	localStorage.installCheckTime=new Date().getTime();
}

$(function(){

	(function(){
		var isChrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());

		if(isChrome&&site_config.cata=='index'&&site_config.sort==''&&!localStorage.installCheck){
			$('body').append('<div title="Game Elf" onclick="installExt(\'fixed-elf\')" style="cursor:pointer;position:fixed;bottom:30px;left:10px;"><img width="150" src="/Public/static/images/icon_elf.png"></div>')

		}

		var posCheck=location.href.indexOf('/game/play')>-1||location.href.indexOf('/game/info')>-1;
		if(isChrome&&posCheck&&!localStorage.installCheck){
			sentEvent('ExtInstall','popFixed','popShow');
			$('body').append('<style>#ext-play-box a:hover{opacity: 0.9}#extplay-close:hover{font-size:24px!important;}</style><div id="ext-play-box" style="position:fixed;right:10px;top: 50px;width:300px;height: 120px;background: #fff url(/Public/static/images/ext_bg.png) left center no-repeat;z-index: 999999;border:solid 3px #2E53AD;border-radius: 6px;box-shadow:1px 1px 6px #333"><h2 style="position: absolute;left: 96px;top: 32px;color: green;font-size:16.5px;font-weight:bold;">Game Elf, Daily Haha!</h2><div id="extplay-close" title="close" style="position: absolute;right: 0px;top: 0px;color: red;font-size: 26px;line-height: 25px;width: 25px;height: 25px;text-align: center;cursor: pointer;">&times;</div><a href="javascript:;" onclick="installExt(\'popFixed\')" title="Game Elf in Chrome" style="margin-left:85px;margin-top: 61px;display: inline-block;"><img src="/Public/static/images/ext_install_bg.png"></a></div>');
			
			setTimeout(function(){
				if($('#ext-play-box').is(":visible")){
					$('#ext-play-box').hide();
					localStorage.installCheck=true;
					localStorage.installCheckTime=new Date().getTime();	
					sentEvent('ExtInstall','popFixed','autoClose');
				}
			},30000);

			$('#ext-play-box').live('click',function(){
				sentEvent('ExtInstall','popFixed','btnClose');
				$('#ext-play-box').hide();
				localStorage.installCheck=true;
				localStorage.installCheckTime=new Date().getTime();	
			})
		}

	}());
})