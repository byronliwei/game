function layout() {
    var wheight = $(window).height();
    var wwidth = $('body').width();
    var lgap = 180;
	var aviWidth=window.screen.availWidth;
	var containerBox=$('.container,.container .center');
	var originWidth=containerBox.width();
	
	var containWidth=wwidth - lgap;
	var containMargin=55;
	var minWidth=1024,maxWidth=2000;
	var adBox=$('.wrap_ad .banner300');
	var adLast=adBox.eq(3);
	var gameFill=adBox.eq(4);
	var adFill=$('#banner-fill');
	
	$('.header').css('min-width',minWidth);
	
	if((containWidth<minWidth)&&layout_first){
		if(containWidth<originWidth)
		return;
	}

	function adFrameHandle(){
		var adFrame=adLast.find('iframe'),
			frameStatus=adFrame.attr('status');

		if(frameStatus!='true'){
			adFrame.attr('src',adFrame.attr('data-src'));
			adFrame.attr('status','true');
		}	
	}
	
	if(containWidth>maxWidth){
		containMargin=(wwidth-maxWidth-55)/2+35;
		containWidth=maxWidth;
		wwidth=containWidth+lgap;
		
		adFill.hide();
		adLast.css('width','300px').show();
		adFrameHandle();
	}else{
		var fillWidth=containWidth-955;
		
		//fillWidth>=450 show game
		
		if(fillWidth>450){
			var ajustBox=gameFill;
			adFrameHandle();
			
			$('.lazytop').attr('src',function(){
				return $(this).attr('original');
			})
			adLast.show();
			fillWidth-=316;
			adFill.hide();
			adLast.css('width','300px');
			
		}else if(fillWidth>200&&fillWidth<450){
			var ajustBox=adLast;
			adFrameHandle();
			adLast.show();
			adFill.hide();
			gameFill.hide();
		}else{
			var ajustBox=adFill;
			if(fillWidth<=0){
				adLast.add(adFill).hide();
			}else{
				adLast.hide();
				adFill.show();
			}
		}
		ajustBox.css('width',fillWidth+'px');
		
		if(fillWidth>10){
			ajustBox.show();
		}
		
	}
	
	//containerBox.width(containWidth);
	var cpt = Math.round((wwidth - lgap) / 145);
	$('.container .center a').width((wwidth - lgap) / cpt - 9);
	$('.container .center a').height((wwidth - lgap) / cpt - 9);

	//$('.container').css('margin-left',containMargin+'px');
   
}
layout_first=false;
layout();
layout_first=true;
$(window).resize(function() {
    layout();
});

function showimags() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        failure_limit: 10000,
    });
}

function showready() {
    $('#home').animate({
        'top': '-100%'
    }, 100);
}
setTimeout('showready();', 2000);

function hidelogopg() {
    $("#home img").css('cursor', 'pointer');
    $("#home").css('top', '-100%');
    $("#slider").css('top', '0');
    $("#about").css('top', '100%');
}

$('#home img').click(function() {
    hidelogopg();
});
$(document).ready(function() {
    showimags();
    hidelogopg();
    $('.center').css('visibility', 'visible');
    $('.bookmark-link').click(function() {
        var title = 'TheHotGames'
        var url = 'http://www.thehotgames.com'
        if (window.sidebar) {
            return;
        } else if (window.opera && window.print) {
            var mbm = document.createElement('a');
            mbm.setAttribute('rel', 'sidebar');
            mbm.setAttribute('href', url);
            mbm.setAttribute('title', title);
            mbm.click();
        } else if (document.all) {
            window.external.AddFavorite(url, title);
        } else {
            alert("Please Press 'Ctrl+D' To Bookmark This Page!")
        }
        return false;
    });
    var windowWidth = $(window).width();
    if (windowWidth <= 1055) {
        $('.navTabs ul').children().eq(4).remove();
        $('.navTabs ul').children().eq(2).remove();
    } else if (windowWidth <= 1180) {
        $('.navTabs ul').children().eq(4).remove();
    }
});


var currentPage = 1;
var page = 2;
var onGetDur = false;
var saveScrollTopHeight = 0;

window.onscroll = function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop < 10){
        $('.rightnav .gototop').hide();
    }else{
        $('.rightnav .gototop').show();
    }
    var windowHeight = $(window).height();
    var bottom = 50;
    var bodyHeight = $(document.body).height();
    //console.log('scrollTop:'+(scrollTop));
    if(page > 6){return;}
    if(!onGetDur && scrollTop + windowHeight >= bodyHeight - bottom && scrollTop > saveScrollTopHeight ){
        onGetDur = true;
    }
//    return;
    if(onGetDur){
        onGetDur = false;
        saveScrollTopHeight = bodyHeight;
        var url =location.href.split('?')[0]+'?page=' + page;

        if(url.search('category')==-1&&url.search('tag')==-1){
        	url=location.href.split('?')[0]+'/game/category/hot-games.html?page=' + page;
        }
        
        $('.center .loading').show();
        $.get(url, function(res){
            $('.center').find('.loading').before(res.html);
            layout();
            $('.center .loading').hide();
            $('.center').find( '.gmpage' + page + " img.lazy").show().lazyload({effect : "fadeIn",failure_limit:10000});
            page++;
        },'json');
    }
}
