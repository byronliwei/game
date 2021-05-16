// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

var adsManager;
var adsLoader;
var adDisplayContainer;
var intervalTimer;
var playButton;
var videoContent;
var tagTime=0;
function init() {
  videoContent = document.getElementById('contentElement');
  setUpIMA();
}


function setUpIMA() {
  // Create the ad display container.
  createAdDisplayContainer();
  // Create ads loader.
  adsLoader = new google.ima.AdsLoader(adDisplayContainer);
  // Listen and respond to ads loaded and error events.
  adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      onAdsManagerLoaded,
      false);
  adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      onAdError,
      false);

  // An event listener to tell the SDK that our content video
  // is completed so the SDK can play any post-roll ads.
  var contentEndedListener = function() {adsLoader.contentComplete();};
  videoContent.onended = contentEndedListener;

  // Request video ads.
  window.adsRequest = new google.ima.AdsRequest();
  //adsRequest.adTagUrl = 'https://googleads.g.doubleclick.net/pagead/ads?ad_type=video_image&client=ca-games-pub-3961823097646209&description_url=http%3A%2F%2Fwww.gamez6.com%2FGameLibs%2Fgame%2Ftrickytest%2F&channel=1284822163&max_ad_duration=30000&sdmax=30000';

  window.adTagUrlAfter = 'https://googleads.g.doubleclick.net/pagead/ads?ad_type=image&client=ca-games-pub-3961823097646209&description_url=http%3A%2F%2Fwww.gamez6.com%2FGameLibs%2Fgame%2Ftrickytest%2F&channel=1284822163';

  adsRequest.adTagUrl='https://googleads.g.doubleclick.net/pagead/ads?ad_type=image&client=ca-games-pub-3961823097646209&description_url=http%3A%2F%2Fwww.gamez6.com%2FGameLibs%2Fgame%2Ftrickytest%2F&channel=9123250909';

console.log(adsRequest.adTagUrl);
  // Specify the linear and nonlinear slot sizes. This helps the SDK to
  // select the correct creative if multiple are returned.
  adsRequest.linearAdSlotWidth = document.body.clientWidth;
  adsRequest.linearAdSlotHeight = document.body.clientHeight;
  adsRequest.nonLinearAdSlotWidth = document.body.clientWidth;
  adsRequest.nonLinearAdSlotHeight = document.body.clientHeight;
  adsRequest.forceNonLinearFullSlot = true;

  adsLoader.requestAds(adsRequest);
}


function createAdDisplayContainer() {
  // We assume the adContainer is the DOM id of the element that will house
  // the ads.

  adDisplayContainer = new google.ima.AdDisplayContainer(
      document.getElementById('adContainer'), videoContent);
}

function playAds() {
  document.getElementById('adContainer').style.display='block';
  // Initialize the container. Must be done via a user action on mobile devices.
  //videoContent.load();
  adDisplayContainer.initialize();

  try {
    // Initialize the ads manager. Ad rules playlist will start at this time.
    adsManager.init(document.body.clientWidth, document.body.clientHeight, google.ima.ViewMode.NORMAL);
    // Call play to start showing the ad. Single video and overlay ads will
    // start at this time; the call will be ignored for ad rules.
    adsManager.start();
  } catch (adError) {
     onAdError({getError:function(){}});
    console.log(adError);

    // An error may be thrown if there was a problem with the VAST response.
    //videoContent.play();
  }
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
  // Get the ads manager.
  var adsRenderingSettings = new google.ima.AdsRenderingSettings();
  adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
  // videoContent should be set to the content video element.
  adsManager = adsManagerLoadedEvent.getAdsManager(
      videoContent, adsRenderingSettings);

  // Add listeners to the required events.
  adsManager.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      onAdError);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
      onContentPauseRequested);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
      onContentResumeRequested);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
      onAdEvent);




  // Listen to any additional events, if necessary.
  adsManager.addEventListener(
      google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.LOADED,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.STARTED,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.COMPLETE,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.USER_CLOSE,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.SKIPPED,
      onAdEvent);
}

function onAdEvent(adEvent) {
  console.log(adEvent);
  // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
  // don't have ad object associated.
  var ad = adEvent.getAd();
  switch (adEvent.type) {
    case google.ima.AdEvent.Type.LOADED:
      // This is the first event sent for an ad - it is possible to
      // determine whether the ad is a video ad or an overlay.
      if (!ad.isLinear()) {
        console.log(5);
        // Position AdDisplayContainer correctly for overlay.
        // Use ad.width and ad.height.
        //videoContent.play();
      }
      break;
    case google.ima.AdEvent.Type.STARTED:
      // This event indicates the ad has started - the video player
      // can adjust the UI, for example display a pause button and
      // remaining time.
      if (ad.isLinear()) {
        console.log(6);
        // For a linear ad, a timer can be started to poll for
        // the remaining time.
        intervalTimer = setInterval(
            function() {
              var remainingTime = adsManager.getRemainingTime();
            },
            300); // every 300ms
      }
      break;
    case google.ima.AdEvent.Type.USER_CLOSE:
    case google.ima.AdEvent.Type.SKIPPED:
    case google.ima.AdEvent.Type.COMPLETE:
    console.log(1);

    document.getElementById('adContainer').style.display='none';
    nowTime=(new Date()).getTime();
    
    if(firstShow){
      firstShow=false;
      adsRequest.adTagUrl=adTagUrlAfter;
      adsLoader.requestAds(adsRequest);
    }

    try{
      tagTime=tagTime||0;
      if(nowTime-tagTime>500){
        window.onAdmobRewarded();
        tagTime=nowTime;
        window.onAdmobRewardedVideoAdClosed();
        adAfter();
      }
    }catch(e){};
      // This event indicates the ad has finished - the video player
      // can perform appropriate UI actions, such as removing the timer for
      // remaining time detection.
      if (ad.isLinear()) {
        clearInterval(intervalTimer);
      }
      break;
  }
}

function onAdError(adErrorEvent) {
  // Handle the error logging.
  console.log(adErrorEvent.getError());
  //setUpIMA();
  try{
    document.getElementById('adContainer').style.display='none';
    window.onAdmobRewardedVideoAdClosed();
    adsManager.destroy();
    adsRequest.adTagUrl=adTagUrlAfter;
    adAfter();
    tagTime=(new Date()).getTime();
  }catch(e){
    console.log(e);
  }
  

}

function onContentPauseRequested() {
  //videoContent.pause();
  // This function is where you should setup UI for showing ads (e.g.
  // display ad timer countdown, disable seeking etc.)
  // setupUIForAds();
}

function onContentResumeRequested() {
  //videoContent.play();
  // This function is where you should ensure that your UI is ready
  // to play content. It is the responsibility of the Publisher to
  // implement this function when necessary.
  // setupUIForContent();

}

// Wire UI element references and UI event listeners.
init();
