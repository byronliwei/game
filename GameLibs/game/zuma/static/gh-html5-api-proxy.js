// Gamehouse HTML5 API - proxy - mobile
/*
2.4.2 Unescape download URL's.
2.4 Eventlisteners are now created at 'window' level. postMessage is now called at 'window' level.
2.3.1 Fixed showDownloadButton and showIngameUpsell to be dynamic.
2.3 Added GAMEDOWNLOAD functionality.
2.2 Split languageCode variable into seperate language and country variables.
2.1 Improved architecture; Fixed inconsistent names; Removed old API connection; 
2.0 old proxy release which used seperate GH API class.

TODO: fix fake private/public vars. Change this into a class/instance/singleton.
*/
var proxy_ghAPIname = "GamehouseAPI_proxy_mobile";
var proxy_ghAPIversion = "2.4.2";
console.log(proxy_ghAPIname + ": Version: " + proxy_ghAPIversion);


/* // no longer required as we're using postmessage now.
var proxy_expression = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
var proxy_ghAPIdomain = ((proxy_expression.test(location.hostname)) ? location.hostname : /([-\w]+.\w+)?$/.exec(location.hostname)[0]);
if (proxy_ghAPIdomain) document.domain = proxy_ghAPIdomain;

if (proxy_ghAPIdomain)
	console.log(proxy_ghAPIname + ": running on: " + location.hostname + " (JS domain:" + document.domain + ")");
else
	console.log(proxy_ghAPIname + ": running locally.");
*/
/*
console.log(proxy_ghAPIname + ": Language       : " + parent.language);
console.log(proxy_ghAPIname + ": country        : " + parent.country);
console.log(proxy_ghAPIname + ": downloadUrl    : " + parent.downloadUrl);
console.log(proxy_ghAPIname + ": showAds        : " + parent.showAds);
console.log(proxy_ghAPIname + ": hasDownloadable: " + parent.hasDownloadable);
console.log(proxy_ghAPIname + ": extraParams    : " + parent.extraParams);
*/

function getURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
}}


// private vars
var defaultLanguage="en";
var defaultCountry="US";
var defaultDownloadUrl="http://www.gamehouse.com";
var defaultShowIngameUpsell=true;
var defaultShowDownloadButton=true;

// public vars
this.enableCheats=false;
this.languageCode=getLanguage();
this.countryCode=getCountry();
this.showDownloadButton=getShowDownloadButton();
this.showIngameUpsell=getShowIngameUpsell();


function getLanguage()
{
	return (getURLParameter('language') === undefined) ? defaultLanguage : getURLParameter('language');
}

function getCountry()
{
	return (getURLParameter('country') === undefined) ? defaultCountry : getURLParameter('country');
}

function getDownloadUrl()
{
	return unescape((getURLParameter('downloadUrl') === undefined) ? defaultDownloadUrl : getURLParameter('downloadUrl'));
}

function getShowDownloadButton()
{
	return (getURLParameter('showDownloadButton') === undefined) ? defaultShowDownloadButton : getURLParameter('showDownloadButton');
}

function getShowIngameUpsell()
{
	return (getURLParameter('showIngameUpsell') === undefined) ? defaultShowIngameUpsell : getURLParameter('showIngameUpsell');
}


if (window.addEventListener) // for all awesome browsers
{
	window.addEventListener("message", proxy_listener, false);
	console.log(proxy_ghAPIname + ": Adding event listener (modern).");
}
else // for IE and other non-modern browsers
{
	window.attachEvent("onmessage", proxy_listener);
	console.log(proxy_ghAPIname + ": Adding event listener (old).");
}


// --------------------------------------------
// Listener function
// --------------------------------------------
function proxy_listener(event)
{
	// optional host checking
	/*if ( event.origin !== "http://localhost" )
	{
		console.log(proxy_ghAPIname + ": origin not whitelisted, message discarded.");
		return
	}*/

	try
	{
		var message = JSON.parse(event.data);
		if (message.hasOwnProperty("eventName")===true)
		{
			// only listen to GAME messages
			if (message.eventName.indexOf("GAME_") === 0) {
				console.log(proxy_ghAPIname + ": received event: '" + event.data + "' from origin: '"+event.origin+"'");
			}
			else return;

			switch (message.eventName)
			{
				case "GAME_CONNECT":
					// create connect message with various parameters which can be used in the game.
					var connectMessage = {};
					connectMessage.eventName="SERVER_CONNECT";
					connectMessage.vars = {};
					connectMessage.vars.enableCheats = false;
					connectMessage.vars.languageCode = this.languageCode;
					connectMessage.vars.countryCode = this.countryCode;
					connectMessage.vars.showDownloadButton = this.showDownloadButton;
					connectMessage.vars.showIngameUpsell = this.showIngameUpsell;

					try
					{
						console.log(proxy_ghAPIname + ": about to send PROXY connect message + variables.");
						proxy_sender(JSON.stringify(connectMessage));
					}
					catch (e)
					{
						console.log(proxy_ghAPIname + ": Something went wrong while sending the " + connectMessage.eventName + " message.");
					}
					break;

				case "GAME_GAMEBREAK":
					/*
					console.log(proxy_ghAPIname + ": Auto-replying with GAMECONTINUE in 2000 milliseconds");
					setTimeout(postProxyEvent.bind(null, "GAMECONTINUE"), 2000);
					/*/
					postProxyEvent("GAMECONTINUE");
					//*/
					break;

				case "GAME_SCOREBROADCAST":
						// back end communication for SCOREBROADCAST...
					break;

				case "GAME_GAMEEND":
						// back end communication for GAMEEND...
					break;

				case "GAME_GAMEDOWNLOAD":
						window.open(getDownloadUrl(), '_blank');
					break;
			}
		}
	}
	catch (e)
	{
		console.log(proxy_ghAPIname + ": received message did not meet expectations. Error: " + e);
	}
}


// --------------------------------------------
// sender function
// --------------------------------------------
/** @private */
function proxy_sender(event){
	console.log(proxy_ghAPIname + ": Sending message: '"+event+"'");
	window.postMessage(event,"*");
}


/** @private */
function postProxyEvent(eventName, params)
{
	params = typeof params !== 'undefined' ? params : {};
	console.log(ghAPIname + ": postProxyEvent was called with eventName: " + eventName + " and params: " + JSON.stringify(params));

	switch (eventName)
	{
		case "GAMECONTINUE":
			var message = {};
			message.eventName="SERVER_GAMECONTINUE";
			proxy_sender(JSON.stringify(message));
			break;
	}
}