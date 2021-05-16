/**
 * @class
 * @description Класс брендированного прелодера компании PlayToMax для портала
 */
var TTLoader =
{
	endCallback: null,
	loadedData: null,
	landscapeMode: false,
	skipPlayButton: false,
	
	backgroundUrl: "",
	backgroundImage: null,
	
	/**
	 * Создание прелодера
	 * @param {Function} callback функция, которая будет вызвана по окончанию процесса загрузки
	 * @param {Boolean} landscape режим: false - портретный, true - лэндскейпный
	 * @param {Boolean} skipButton нужно ли пропустить обязательное нажание кнопки Play
	 * @param {Boolean} disableLogoLink нужно ли отключить ссылку на логотипе
	 * @example
	 * TTLoader.create(loadEnd, true, false);
	 * var preloader = new ImagesPreloader();
	 * preloader.load(images, TTLoader.loadComplete, TTLoader.showLoadProgress);
	 */
	create: function(callback, landscape, skipButton, disableLogoLink)
	{
		TTLoader.endCallback = callback;
		TTLoader.landscapeMode = landscape;
		TTLoader.skipPlayButton = skipButton;
		
		document.getElementById("progress_container").style.backgroundColor = "#000";
		document.getElementById("progress_container").style.backgroundRepeat = "no-repeat";
		document.getElementById("progress_container").style.backgroundPosition = "center center";
		
		document.getElementById("progress_container").style.zIndex = "1000";
		
		var c = document.getElementById("progress");
		c.setAttribute("valign", "top");
		c.style.verticalAlign = "top";
		c.style.background = "transparent";
		
		var d = document.createElement("div");
		
		var a = document.createElement("a");
		a.setAttribute("id", "tt_load_logo_c");
		
		var link = (window.ExternalAPI) ? ExternalAPI.exec("getPreloaderURL") : "http://playtomax.com/";
		var target = "_blank";
		
		if(disableLogoLink || !link)
		{
		    link = "javascript:void(0)";
		    target = "";
        }
		
		a.setAttribute("href", link);
		a.setAttribute("target", target);
		
		var logo = new Image();
		logo.setAttribute("id", "tt_load_logo");
		logo.setAttribute("border", "");
		logo.src = TTLoader.logoSrc;
		logo.style.cursor = "pointer";
		
		a.appendChild(logo);
		d.appendChild(a);
		
		d.style.position = "absolute";
		d.style.left = "0px";
		d.style.top = "0px";
		d.style.width = "100%";
		
		c.appendChild(d);
		
		var dc = document.createElement("div");
		dc.setAttribute("id", "tt_load_progress_wrapper");
		dc.style.position = "absolute";
		dc.style.left = "0px";
		dc.style.bottom = "0px";
		dc.style.width = "100%";
		dc.style.height = "28px";
		dc.style.background = "url(" + TTLoader.footerSrc + ")";
		dc.style.backgroundRepeat = "no-repeat";
		dc.style.backgroundPosition = "center top";
		
		var d = document.createElement("div");
		d.setAttribute("id", "tt_load_progress_cont");
		d.setAttribute("align", "left");
		d.setAttribute("style", "padding: 1px; border: 2px solid #e44d26; background: #fff");
		
		var d2 = document.createElement("div");
		d2.setAttribute("id", "tt_load_progress");
		d2.setAttribute("style", "width: 0px; background: #e44d26;");
		d2.innerHTML = "&nbsp;";
		d.appendChild(d2);
		
		dc.appendChild(d);
		c.appendChild(dc);
		
		var d = document.createElement("div");
		d.setAttribute("id", "tt_load_play");
		var button = new Image();
		button.setAttribute("id", "tt_load_button");
		button.src = TTLoader.buttonSrc;
		button.style.display = "none";
		d.appendChild(button);
		
		var icon = document.createElement("img");
		icon.setAttribute("id", "tt_load_icon");
		icon.src = TTLoader.loadingSrc;
		d.appendChild(icon);
		
		var style = document.createElement('style');
		style.type = 'text/css';
		var css = "@-moz-keyframes TTLoaderIconSpin { 100% { -moz-transform: rotate(360deg); } } ";
		css += "@-webkit-keyframes TTLoaderIconSpin { 100% { -webkit-transform: rotate(360deg); } } ";
		css += "@keyframes TTLoaderIconSpin { 100% { transform: rotate(360deg); }'; ";
		style.innerHTML = css;
		document.getElementsByTagName('head')[0].appendChild(style);
		
		TTLoader.applyWendorStyles(icon.style, "animation", "TTLoaderIconSpin 3s linear infinite");
		
		c.appendChild(d);
		
		Utils.addEventListener("fitlayout", TTLoader.setSizes);
		window.addEventListener("resize", TTLoader.setSizes);
		
		if(TTLoader.backgroundUrl)
		{
		    var preloader = new ImagesPreloader();
		    preloader.load([{name: "bg", src: TTLoader.backgroundUrl}], function(data)
		    {
		        TTLoader.backgroundImage = data.bg;
		        document.getElementById("progress_container").style.backgroundImage = "url('"+TTLoader.backgroundImage.src+"')";
		        TTLoader.setSizes();
		    });
		}
		
		TTLoader.setSizes();
	},
	
	/** @ignore */
	setSizes: function()
	{
		var rect;
		if(Utils.getWindowRect) rect = Utils.getWindowRect();
		else rect = {width: window.innerWidth, height: window.innerHeight};
		
		document.getElementById("progress_container").style.width = rect.width + "px";
		document.getElementById("progress_container").style.height = rect.height + "px";
		
		if(TTLoader.backgroundImage)
		{
		    var sc = rect.height / TTLoader.backgroundImage.height;
            var w = Math.floor(TTLoader.backgroundImage.width * sc);
            var h = Math.floor(TTLoader.backgroundImage.height * sc);
        
            document.getElementById("progress_container").style.backgroundSize = w + "px " + h + "px";
		}
		
		var c = Utils.globalScale*Utils.globalPixelScale;
		
		if(!TTLoader.landscapeMode) document.getElementById("progress").style.paddingTop = Math.floor(c*80)+"px";
		document.getElementById("tt_load_progress_cont").style.width = Math.floor(c*200)+"px";
		document.getElementById("tt_load_progress").style.height = Math.floor(c*12)+"px";
		document.getElementById('tt_load_progress').style.width = (c*TTLoader.progressVal*2)+"px";
		document.getElementById("tt_load_progress_cont").style.marginTop = Math.floor((c*55/2 - c*12)/2) + "px";
		
		document.getElementById("tt_load_logo").setAttribute("width", Math.floor(c*582/2)+"px");
		document.getElementById("tt_load_logo").setAttribute("height", Math.floor(c*110/2)+"px");
		
		document.getElementById("tt_load_button").setAttribute("width", Math.floor(c*262/3)+"px");
		document.getElementById("tt_load_button").setAttribute("height", Math.floor(c*125/3)+"px");
		document.getElementById("tt_load_button").style.marginTop = Math.floor((rect.height - c*125/3)/2)+"px";
		
		document.getElementById("tt_load_icon").setAttribute("width", Math.floor(c*128/2)+"px");
		document.getElementById("tt_load_icon").setAttribute("height", Math.floor(c*128/2)+"px");
		document.getElementById("tt_load_icon").style.marginTop = Math.floor((rect.height - c*128/2)/2)+"px";
		
		document.getElementById("tt_load_progress_wrapper").style.height = Math.floor(c*55/2)+"px";
		document.getElementById("tt_load_progress_wrapper").style.backgroundSize = Math.floor(c*548/2)+"px " + Math.floor(c*55/2)+"px";
	},
	
	progressVal: 0,
	
	/** 
	 * Изменение прогресса загрузки
	 * @param {Number} val значение в процентах от 0 до 100
	 */
	showLoadProgress: function(val)
	{
		if(val < 0) val = 0; 
		if(val > 100) val = 100; 
		
		TTLoader.progressVal = val;
		TTLoader.setSizes();
	},
	
	/**
	 * Завершение процесса загрузки
	 * @param {Object} загруженные данные
	 */
	loadComplete: function(data)
	{
		TTLoader.showLoadProgress(100);
		TTLoader.loadedData = data;
		
		var b = document.getElementById("tt_load_button");
		b.style.display = "";
		document.getElementById("tt_load_icon").style.display = "none";
		
		if(Utils.touchScreen)
		{
			//document.body.removeEventListener("touchstart", Utils.preventEvent);
			b.addEventListener(Utils.isWindowsPhone() ? "MSPointerDown" : "touchstart", TTLoader.close, false);
		}
		else b.onclick = TTLoader.close;
		
		b.style.cursor = "pointer";
		b.src = TTLoader.buttonSrc;
		
		b = document.getElementById("tt_load_progress");
		//b.style.background = "transparent";
		
		b = document.getElementById("tt_load_progress_cont");
		//b.style.border = "2px solid transparent";
		//b.style.background = "transparent";
		
		if(TTLoader.skipPlayButton) TTLoader.close();
		else TTLoader.animateButtonTimer = setInterval(TTLoader.animateButton, 40);
	},
	
	animateButtonTimer: null,
	animateButtonVal: 0,
	animateButtonDirect: 1,
	
	animateButton: function()
	{
	    TTLoader.animateButtonVal += TTLoader.animateButtonDirect;
	    if(TTLoader.animateButtonVal >= 10 || TTLoader.animateButtonVal == 0) TTLoader.animateButtonDirect *= -1;
	    var scale = 1 + TTLoader.animateButtonVal/100;
	    TTLoader.applyWendorStyles(document.getElementById("tt_load_button").style, "transform", "scale(" + scale + ", " + scale + ")");
	},
	
	applyWendorStyles: function(style, prop, value)
    {
        var prefix = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
        
        for(var i=0; i<prefix.length; i++)
        {
            style[prefix[i] + prop] = value;
        }
    },
	
	/** @ignore */
	close: function()
	{
		clearTimeout(TTLoader.animateButtonTimer);
		TTLoader.endCallback(TTLoader.loadedData);
		//if(Utils.touchScreen && !navigator.userAgent.match(/(iPad|iPhone|iPod).*CPU.*OS 7_\d/i)) document.body.addEventListener("touchstart", Utils.preventEvent, false);
	},
	
	logoSrc: "static/1.gif",
	buttonSrc: "data:image/png;base64,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",
	footerSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAAA3CAMAAAAL8KFeAAAAeFBMVEUAAAAAAAEAAAENDg4BAQIICAkAAAEAAAEAAAEDAwQNDg/x+Prz+vzx+Prs8/U5Ozz0+/3m7O7T2drO1NW5v8FtcHHa4eLh6Ont9Pbf5efb4ePX3d/y+fvAxsivtLalqqycoKKRlZbm7e/w9/nc4uQ3OTqWm5z0+/0Va/f0AAAAJ3RSTlMAAQIIGA8EHxILJ/L46eUz/tOtn3lGdk/aysG5s5B3bWRYK4kaGUjKPGIBAAAB5ElEQVR42u3bWW7CMBRG4dzr2BkgFMrUgQ4M7d3/DosQQiUQTPpYn28Nlg9E/rMbdotVMzT8e8Nmtd1kf7LlgCRkvNplfcnmyZCUwVKyPkQ3A0NihkuVXmekMSSnzykRdbQmSc3u7lOibmtI0sqp3HlGlmNDmpZO74pN8MQmWU8+SBYlWi0MyVpUKnfE5ot/NglrvpzeERsukqQtfJD4RTIyJGyUO41eJDND0maxq0RdPjEkbRK5SiT4b0Pivn2Q2xfJ1JC46e2rRH3Bz9bkjQqvN2rjyrUheevSdfdGq+LRkLzHotKsS/A1X1thTe1Dd23yTwPsM3dCbfDX3oSy5mUr9gZ1GTpr82HA3kfupKs2rwbsvXb0RkL5QG1wMHgog1yvzbsBB+/Xe6O+eDHg4KXwer02jH9xNDz25qI2PDfCyezYm3Ztng04er7SG3HlnEkWTsbz0snlc6M3A07ecqcXtal53IpfJrVXaoOevdGK2qDdm9an+UBtcNmb0PpIMjfgzDx3clabgikFWqZFpee1YUqBltFZb8TlTClwYZ07oTaI9obaINobphSITyuYUiA6rWBKgei0gikF4tMKphSITiuYUiA+rWBKgei0gikFotMKphSITyuYUiA6rWBKgei04gf1SxlWC63ntAAAAABJRU5ErkJggg==",
	loadingSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAC/VBMVEUAAAD9vaL/+uj/+eX/79n+i2T///v6fVb//ej3YTr///7/////flf/j2j2Yjv/hF3///////3//+D////vWTL/zKX//PT/nnf/e1T///f///z/uJH/4b/////0XDX////+akP/7sf/////f1j/47z/jGX4YDn//+73Yjv///7////4Yjv/qoP///////31XTb///3/bkf/pX7/9c7mTif/rIXsVC3/mXL/uJD/////bEX/hF3//+r/ckv//////tr/wZr/6cH/yaLvWDH/flb/4Ln///L/2bL/wJn/jWbqUiv/oXr/88z/sIn/hl//lG3/0Kn/yKH//+r4YTn//93wWTL/n3j/mXL/rYb/2bLqUyv/////j2f/58D/5b3/pH3/sov5Zj///+j/////mXL/a0P/rYb//+L/f1j///D/4rv//9r/17D/wJn//Nj/z6joUCn/uJH/7cb/rIX/6MHxWTL/47z//9ryWzT/7sf2Xjf/+9T+aEH/uZL//+r/5r///////9v/////+NH///3//9j////lTSbuVi/zXDT///TnUCnqUiv/bETrVC3wWTL/hV7//+/3Xzj//+b/nXb/mnP/aUL8ZD35Yjv/rof9Zj//v5f/sor/bkf/z6j/cUr/u5T/dk//c0z/3rf/elP/eFH/glv///n///3/fVb/iWL/f1j/mHD/kGj/h2D//+3/kmr//+j//+P//97/lW3/jGX//+r/qoP//+D/p4D//9v//9n/+9T/7sf/uJH/tI3/n3j//9j/9c7/5L3/4br/27T/xZ7/pH3/o3v/6MH/5r//1K3/to//2LH/1q//0qv/yKH/xp//wpv/q4T/8cr/7MX1Xjf/y6T4YTr+Z0D/zKX/cEn///v/fFX/dU7///j/i2T///z///b//+z/oXr/k2z/jmf/gFn/8sv/vZb/sIn///H//+L//NX/+NH/+ND/68T/+tP/4Ln/2rP/0ar/lm///9z/wZr/+dL/6cL/pn//9M3/88z/47z/yqPXa+0wAAAAhnRSTlMAAhkGDAZNDCAbicmJS0sj7rpMNDQyJxfxqW9IEtzSzsbDwr6vk4mIc1hAPh355d7U087My8O8u7CvramVlZKNjYxoXVNC8u7u7ezg2dnTzs3M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",
};