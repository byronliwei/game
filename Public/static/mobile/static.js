function setStyle(styleStr){
	if(document.all){ 
		window.style=styleStr; 
		document.createStyleSheet("javascript:style"); 
	}else{ 
		var style = document.createElement('style'); 
		style.type = 'text/css';
		style.id='initStyle';
		style.innerHTML=styleStr; 
		document.getElementsByTagName('HEAD').item(0).appendChild(style); 
	}
}

function getScrollbarWidth() {
	var scrollbarWidth=0;
	try{
		var oP = document.createElement('p'),
			styles = {
				width: '100px',
				height: '100px',
				overflowY: 'scroll'
			}, i, scrollbarWidth;
		for (i in styles) oP.style[i] = styles[i];
		document.body.appendChild(oP);
		scrollbarWidth = oP.offsetWidth - oP.clientWidth;
		oP.remove();
	}catch(e){}
    return scrollbarWidth;
}

function pageInit(){
	var barW=getScrollbarWidth(),
		viewW =document.body.offsetWidth-barW-10;
		//viewW=$('#game-container').width()-10;

	var minWidth=90,
	check=Math.floor(viewW/6);
	if(check<minWidth){
		var mod=3;
		window.setWidth=Math.floor(viewW/3);
	}else{
		window.setWidth=check;
		var mod=6;
	}

	$('#initStyle').remove();

    var asMod=[3,3];

	var styleStr=
	'.grid{margin:0px 10px;width:'+(setWidth*mod)+'px!important;}'+
	'.grid-item{width:'+setWidth+'px!important;height:'+setWidth+'px!important;}'+
	'.grid-item-width2{width:'+(setWidth*2)+'px!important;height:'+(setWidth*2)+'px!important;}'+
	'.item-inner{height:'+(setWidth-10)+'px!important;}'+
	'.grid-item-width2 .item-inner{height:'+(setWidth*2-10)+'px!important;}'+
	'.as-mobile{width:100%!important;height:280px!important;text-align:center;}'+
	'.as-mobile .item-inner{height:98%!important;}';
	setStyle(styleStr);
	//console.log(mod,setWidth,setWidth*mod);

	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		columnWidth: setWidth,
		isResizeBound:false
	});
}

function scrollToTop(){
    document.documentElement.scrollTop = document.body.scrollTop =0;
}

function botHeightCheck(){
    if($('body').height()<$(window).height()){
        $('html,body').addClass('_height100');
    }else{
        $('html,body').removeClass('_height100');
    }   
}

/*if(deviceType=='tablet'){
   $('body').addClass('body_tablet');
}*/



$(function(){

/*  $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: setWidth,
        isResizeBound:false
    });*/

    botHeightCheck();
})
