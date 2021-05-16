var adts =29;

function adjustpos() {
	var adwidth = 0;
	$('#gamebox').width(allowwidth);
	if (global_win_width <= 1024) {
		$('.leftblock #header  #logoLink').width(120);
		$('.leftblock #header #logoLink').height(25);
		$('.leftblock #header #logoLink img').attr('src', 'images/header_logo.png');

		$('#banner300,.gameinfo,#header h1').hide();
		$('.gameinfo,.leftblock').width(120);
		$('.leftblock').css('margin', '0 10px 0 5px');
		$('#header').css('margin', '50px 0 8px 10px');
		$('.leftblock #header #logoLink').css('margin', '10px 0 0 0px');
		$('.addthiscont').hide();
		$('.topad,.headerarea').show();
		$('.headerarea').find('.retpos').html($('.addthiscont').find('.rethome').html());
		if (pagerd > 6) {
			$('.leftad').show();
			//$('.bottomcontainer').show();
		} else {
			$('#related').show();
			$('.left-ad-80').show();
		}
		//smartlayer
		try{
			addthis.layers({
				'theme': 'transparent',
				'share': {
					'position': 'left',
					'numPreferredServices': 5
				}
			});
		//smartlayer
		}catch(e){
			
		}
	} else {
		$('.leftblock #header #logoLink img').attr('src', '/Public/static/images/header_logo.png');
		$('.leftblock #header #logoLink').width(200);
		$('.leftblock #header #logoLink').height(42);
		if (web_ad) {
			$('.web-ad').show();
		} else {
			$('#related').width(300);
			$('#related').height(290);
			$('#related').css('margin', '5px -3px 0 0px');
			$('#related,.relatedtitle').show();
			$('.relategame div').width(94.5);
			$('.relategame div').height(90);
		}
	}
	if (allowheight < 550) {
		$('#main_part').height(550);
	} else {
		$('#main_part').height(allowheight + 20);
	}
	//prepare120
	var ra120 = 0;
	var ra160 = 0;
	if (global_win_width > 1270 &&
		(global_win_width - allowwidth) > 480 &&
		(global_win_width - allowwidth) <= 640
	) {
		//alert(global_win_width - allowwidth);
		$('.rightad').addClass('right-ad-160').show();

		ra120 = 1;
		adwidth = 140;
		if (global_win_width > 1270 && global_win_width < 1290) {
			$('#main_part').width(allowwidth + 110);
		} else {
			$('#main_part').width(allowwidth + 160);
		}
	}
	//prepare120
	//alert(global_win_width - allowwidth);
	if (global_win_width > 1270 && (global_win_width - allowwidth) > 640) {
		$('.rightad').show();
		$('.right-ad-160').show();
		ra160 = 1;
		//$('.bottomcontainer').show();
		//alert('minheigh600');
		$('#main_part').css('min-height', '600px');
		adwidth = 180;
		if (global_win_width > 1420 && global_win_width < 1450) {
			$('#main_part').width(allowwidth + 100);
		} else {
			$('#main_part').width(allowwidth + 120);
		}
	} else {
		$('#main_part').width(allowwidth + 20);
	}

	$('#gamebox').css('margin-top', ($('#main_part').height() - allowheight) / 2);
	//alert(global_win_width - allowwidth);
	var mainpartw = $('#main_part').width();
	//if(global_win_height > 800 && mainpartw>730){
	//$('#related').css('padding-left','45px');
	//}
	if (global_win_width > 1024 && global_win_height <= 800 && allowwidth <= 650) {
		$('.rightblock').width(mainpartw);
		$('#banner300').show();
		$('#related').width(300);
		//$('#related').height(201);
		//$('.relatedtitle').show();
		//$('#related').show();
		//$('.bottomcontainer').hide();
	} else if (global_win_width > 1024) {
		$('#banner300').show();
		//$('.bottomcontainer').show();
	}
	if (global_win_width > 1260 && global_win_width < 1921 && (ra160 + ra120) > 0) {
		var tmpgap = (global_win_width - mainpartw - 540);
		if (global_win_width > 1580 && global_win_width < 1601 ||
			(global_win_width > 1420 && global_win_width < 1441)) {
			tmpgap = (global_win_width - mainpartw - 560);
		}
		if (global_win_width > 1900 && global_win_width < 1921) {
			tmpgap = (global_win_width - mainpartw - 880);
		}
		if (ra120 > 0) {
			tmpgap = tmpgap + 40;
		}
		if (tmpgap > 150) tmpgap = 150;
		//alert(tmpgap);
		if (tmpgap > 1) {
			$('.rightblock').css('margin', '0 ' + (parseInt(tmpgap / 2.5)) + 'px');
			adwidth = adwidth + tmpgap;
		}
	}
	$('.rightblock').width(mainpartw);
	$('.bottomad').width($('#main_part').width() + 5);
	$('.bottomad').show();
	$('#container').width($('.leftblock').width() + mainpartw + 15 + adwidth);
	$('#container').css('visibility', 'visible');
	$("img.lazy").show().lazyload({
		effect: "fadeIn",
		failure_limit: 10000
	});
}

function showgame() {
	if (adts < 1) {
		$('#prerollDiv').remove();
		$('#gamebox').css('visibility', 'visible');
		$('#gamebox').height(allowheight);
		adjustpos();
	}
}
adjustpos();
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
	$('#cntdown_span').html('  Ad will ends in  ' + adts + ' seconds!');
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

var colors = ['white', '#ececec', 'red', '#46c2', '#b77d0', '#6db1f5', '#72ae00', '#924aaf', '#9bd5', '#96ddb'];
$('.bottomcontainer .tags a').each(function() {
	var pos = parseInt(10 * Math.random());
	$(this).css('color', colors[pos]);
});

$(function(){
    var windowWidth = $(window).width();
    if (windowWidth <= 1055) {
        $('.navTabs ul').children().eq(4).remove();
        $('.navTabs ul').children().eq(2).remove();
    } else if (windowWidth <= 1180) {
        $('.navTabs ul').children().eq(4).remove();
    }

	$(window).resize(function() {
	    adjustpos();
	});
})