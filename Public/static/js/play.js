var adts =29;

function showgame(t) {
	if (adts < 1||t) {
		$('#prerollLoading,#prerollDiv').remove();
		$('#gameBoxFlash').css('visibility', 'visible');
		$('#gamePlayBox').removeClass('gamePlayPre');
		$('#gameTopTool').show();
		//$('#gamebox').height(allowheight);
		//adjustpos();
	}
}

setTimeout(showgame, adts * 1000);

function removead() {
	$('#cntdown_span,#prerollContainer').remove();
	$('#prerollTop').remove();
	$('#prerollbrand').height(300);
	$('#prerollbrand').css('margin', '110px auto 0');
	adts = 0;
}
$('#skip_span').click(function() {
	removead();
});

function cntdown() {
	$('#cntdown_span').html('  Ad will ends in  <b>' + adts + '</b> seconds!');
	if (adts > 0) adts--;
	if (adts == 0) {
		removead();
		showgame();
		clearInterval(t2);
	}
	if(adts==15){
		$('#skip_span').show();
	}
}
var t2 = setInterval("cntdown()", 1000);


$("#prerollLoading span").animate({
	width: '100%'
}, adts*1000);



function adjustpos(){
	var _width=$('body').width();
	if(_width<1100){

	}
}

function viewPlayFixed(){
	var fixedBox=$('.gamePlaySide'),_fixFlag=false;
	$(window).scroll(function(){
		var _top=$(window).scrollTop();

		fixedBox.each(function(){
			var _this=$(this),_left=_this.offset().left;
			//console.log(_top);
			//return;
			if (_top>150){
				_this.css({
					'position':'fixed',
					'left':(_left)+'px',
					'top':'20px'
				});
				_fixFlag=true;
			}else{
				if(_fixFlag){
					_this.attr('style','');
				}
			}			
		})

	});	
}

function launchFullScreen(element) {  
  if(element.requestFullscreen) {  
    element.requestFullscreen();  
  } else if(element.mozRequestFullScreen) {  
    element.mozRequestFullScreen();  
  } else if(element.webkitRequestFullscreen) {  
    element.webkitRequestFullscreen();  
  } else if(element.msRequestFullscreen) {  
    element.msRequestFullscreen();  
  }  
}  

// 退出 fullscreen  
function exitFullscreen() {  
  if(document.exitFullscreen) {  
    document.exitFullscreen();  
  } else if(document.mozExitFullScreen) {  
    document.mozExitFullScreen();  
  } else if(document.webkitExitFullscreen) {  
    document.webkitExitFullscreen();  
  }  
} 

function listenFullscreen(){
	document.addEventListener=document.addEventListener||document.attachEvent;
	document.addEventListener("fullscreenchange", function () {
		if(!document.fullscreen&&!_fullTag){
			$("#maximize-btn").click();
			_fullTag=true;
		};
	}, false);  
	   
	document.addEventListener("mozfullscreenchange", function () {
		if(!document.mozFullScreen&&!_fullTag){
			$("#maximize-btn").click();
			_fullTag=true;
		}
	}, false);  
	document.addEventListener("webkitfullscreenchange", function () {
		if(!document.webkitIsFullScreen&&!_fullTag){
			$("#maximize-btn").click();
			_fullTag=true;
		}
	}, false);
	document.addEventListener("msfullscreenchange", function () {
		if(!document.msFullscreenElement&&!_fullTag){
			$("#maximize-btn").click();
			_fullTag=true;
		}
	}, false);
}

listenFullscreen();

function turnOffLight(){
	var container=$('#playContainer');
	$('#turnofflight-btn').toggle(function(){
		container.addClass('container-lightoff');
		$('body,html').animate({scrollTop:195},800);
		$(this).attr('title','Turn On Light');
	},function(){
		container.removeClass('container-lightoff');
		$('body,html').animate({scrollTop:0},0);
		$(this).attr('title','Turn Off Light');
	})

	$('.container-lightoff').live('click',function(){
		$(this).find('#turnofflight-btn').click();
	})
	_fullTag=false;
	$("#maximize-btn").toggle(function(){
		_fullTag=false;
		var gameBox=$('#gamePlayBox'),
			flashBox=$('#gameBoxFlash'),
			w=gameBox.width(),
			h=gameBox.height(),
			resultW=w+224,
			ratio=resultW>850?ratio=850/w:resultW/w,
			wf=gameBox.width(),
			hf=gameBox.height();

		container.addClass('container-maximize');
		gameBox.css({'width':w*ratio+'px','height':ratio*h+100+'px'});
		flashBox.css({
			'width':ratio*wf+'px',
			'height':ratio*hf+'px',
			'margin-left':-ratio*wf/2+'px',
			'margin-top':(-ratio*hf/2+22)+'px'
		});
		launchFullScreen(document.documentElement); 
		$('body,html').animate({scrollTop:195},800);
		$(this).attr('title','Escape Full Screen');

	},function(){
		var gameBox=$('#gamePlayBox'),
			flashBox=$('#gameBoxFlash'),
			w=gameBox.width(),
			h=gameBox.height(),
			ratio=(w+224)/w,
			wf=gameBox.width(),
			hf=gameBox.height();
		container.removeClass('container-maximize');
		gameBox.css({'width':gameBox.attr('origin-width')+'px','height':gameBox.attr('origin-height')+'px'});

		var orginWidth=flashBox.attr('origin-width'),
			originHeight=flashBox.attr('origin-height');
		flashBox.css({
			'width':orginWidth+'px',
			'height':originHeight+'px',
			'margin-left':-orginWidth/2+'px',
			'margin-top':(-originHeight/2+22)+'px'
		});	
		exitFullscreen();	
		_fullTag=true;
		$(this).attr('title','Full Screen');
	})
}




$(function(){
	$("img.lazy").show().lazyload({
		effect: "fadeIn",
		failure_limit: 10000
	});
	setTimeout(function(){checkCommentHeight();},5000);
	//viewPlayFixed();
	turnOffLight();

    var windowWidth = $(window).width();
    if (windowWidth <= 1055) {
        $('.navTabs ul').children().eq(4).remove();
        $('.navTabs ul').children().eq(2).remove();
    } else if (windowWidth <= 1180) {
        $('.navTabs ul').children().eq(4).remove();
    }
	
})

