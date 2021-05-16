// JavaScript Document
var PreRollAd = {
        adsManager: null,
        adsLoader: null,
        adDisplayContainer: null,
        videoContent: null,
        intervalTimer: null,
        adContainer: null,
        timeoutTimer: null,
        timeCounter: 15,
        adObject: null,
        startTime: new Date,
        start: function () {
            PreRollAd.videoContent = $("#videoElement").get(0);
			PreRollAd.adContainer = $("#adContainer");
			if(SysOS=="pc"){
				PreRollAd.adContainer.height(594 - $("#adTitle").height());	
			}else{
				//PreRollAd.adContainer.height($(window).height()- AdDistance - $("#adTitle").height());
				PreRollAd.adContainer.width($(window).width());
				PreRollAd.adContainer.height($(window).height());
			}
			PreRollAd.requestAds();
			$(window).bind("resize", PreRollAd.correctPositions);
        },
        showGame: function () {
			if(SysOS=="pc"){
				SkipAdAndShowGame();
			}else{
				$("#adsContainer").hide();
			}
        },
        correctPositions: function () {
			$("#adContainer_logo").hide();
            if(PreRollAd.adObject && PreRollAd.adsManager ){
				if(SysOS=="pc"){
					if(PreRollAd.adObject.isLinear()){
						$("#adsContainer").css({"margin-top":0}); 
						$("#adTitle").hide();
		                              $("#adsContainer").height(604);
		                              PreRollAd.adContainer.height(604);
		                              $("#adContainer").css({
		                                   "padding-top":     10
		                              });
		                              PreRollAd.adsManager.resize(PreRollAd.adContainer.width(), 604, google.ima.ViewMode.NORMAL);						
					}else{
						$("#adsContainer").css({"margin-top":0});
						$("#adsContainer").height(594);
						$("#adTitle").height(($("#adsContainer").height() - PreRollAd.adObject.getHeight()) / 2);
						PreRollAd.adContainer.height(594 - $("#adTitle").height());
						//PreRollAd.adsManager.resize(PreRollAd.adContainer.width(), PreRollAd.adObject.getHeight(), google.ima.ViewMode.NORMAL);
						PreRollAd.adsManager.resize(PreRollAd.adObject.getWidth(), PreRollAd.adObject.getHeight(), google.ima.ViewMode.NORMAL);
						var PaddingLeft=(488-PreRollAd.adObject.getWidth())/2;
						if(PaddingLeft<0) PaddingLeft=0;
						$("#adContainer").css({
							"padding-left":	PaddingLeft
						});
					}
				}else{
					if(PreRollAd.adObject.isLinear()){
		                              $("#adTitle").hide();
		                              PreRollAd.adContainer.height($(window).height()-AdDistance);
		                              PreRollAd.adsManager.resize($(window).width(), $(window).height()-AdDistance, google.ima.ViewMode.NORMAL);
					}else{
						$("#adsContainer").css({"margin-top":0});
						$("#adsContainer").height($(window).height()-AdDistance);
						$("#adTitle").height(($(window).height()- AdDistance - PreRollAd.adObject.getHeight()) / 2);
						PreRollAd.adContainer.height($(window).height()-AdDistance - $("#adTitle").height());
						//PreRollAd.adsManager.resize(PreRollAd.adContainer.width(), PreRollAd.adObject.getHeight(), google.ima.ViewMode.NORMAL);
						PreRollAd.adsManager.resize(PreRollAd.adObject.getWidth(), PreRollAd.adObject.getHeight(), google.ima.ViewMode.NORMAL);
						var PaddingLeft=($(window).width()-PreRollAd.adObject.getWidth())/2;
						if(PaddingLeft<0) PaddingLeft=0;
						$("#adContainer").css({
							"padding-left":	PaddingLeft
						});
					}
				}
			}
        },
        requestAds: function () {
            PreRollAd.adDisplayContainer = new google.ima.AdDisplayContainer(PreRollAd.adContainer.get(0));
			PreRollAd.adDisplayContainer.initialize();
			PreRollAd.adsLoader = new google.ima.AdsLoader(PreRollAd.adDisplayContainer);
			PreRollAd.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, PreRollAd.onAdsManagerLoaded, !1);
			PreRollAd.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, PreRollAd.events.onAdError, !1);
            var e = new google.ima.AdsRequest;
            e.adTagUrl = "http://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3961823097646209&ad_type=" + (video_ads ? "video" : "image") + "&channel=" + ad_channel + "&max_ad_duration=300000&adsafe=high&description_url=" + encodeURIComponent(descriptionURL);
            e.forceNonLinearFullSlot = true;
			if(video_ads){
				e.linearAdSlotWidth = $(window).width();
				e.linearAdSlotHeight = $(window).height();
			}else{
				e.nonLinearAdSlotWidth = PreRollAd.adContainer.width();
				e.nonLinearAdSlotHeight = PreRollAd.adContainer.height();
			}
			PreRollAd.adsLoader.requestAds(e);
        },
        onAdsManagerLoaded: function (e) {
            PreRollAd.adsManager = e.getAdsManager(PreRollAd.videoContent);
			PreRollAd.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, PreRollAd.events.onAdError);
			PreRollAd.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, PreRollAd.events.onUserClose);
			PreRollAd.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, PreRollAd.events.onAdEvent);
			PreRollAd.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, PreRollAd.events.onAdEvent);
			PreRollAd.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, PreRollAd.events.onAdEvent);
			PreRollAd.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, PreRollAd.events.onAdEvent);
            try {
                PreRollAd.adsManager.init(PreRollAd.adContainer.width(), PreRollAd.adContainer.height(), google.ima.ViewMode.NORMAL);
				PreRollAd.adsManager.start();
            } catch (i) {
				PreRollAd.showGame();
            }
        },
        events: {
            onUserClose: function () {
                PreRollAd.showGame();
            },
            onAdEvent: function (e) {
                var i = e.getAd();
                switch (e.type) {
                case google.ima.AdEvent.Type.LOADED:
					PreRollAd.adObject = i, PreRollAd.correctPositions(), i.isLinear() || PreRollAd.tickTimer();
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    break;
                case google.ima.AdEvent.Type.COMPLETE:
                    PreRollAd.showGame();
                    break;
                case google.ima.AdEvent.Type.CLICK:
                    PreRollAd.showGame();
                }
            },
            onAdError: function (e) {
                PreRollAd.showGame();
            }
        },
        tickTimer: function () {
            $("#adTitle .titleText").html("Advertisement, " + PreRollAd.timeCounter + "")
			PreRollAd.timeoutTimer = setTimeout(function () {
                PreRollAd.timeCounter--;
				if(PreRollAd.timeCounter==0){
					PreRollAd.showGame();
					clearTimeout(PreRollAd.timeoutTimer);
				}else{
					PreRollAd.tickTimer();
				}
            }, 1e3)
        },
        logPageClosedWhileAd: function () {
			
        }
    };
