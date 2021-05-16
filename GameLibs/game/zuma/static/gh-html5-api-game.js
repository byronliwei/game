// Gamehouse HTML5 API - game
/*
2.4 Eventlisteners are now created at 'window' level. postMessage is now called at 'window' level.
2.3 Added GAMEDOWNLOAD functionality.
2.2 Split languageCode variable into seperate language and country variables.
2.1 Improved architecture; Fixed inconsistent names; Removed legacy functions;
2.0 old proxy release.
*/
var ghAPIname = "GamehouseAPI_game";
var ghAPIversion = "2.4";
console.log(ghAPIname + ": Version: " + ghAPIversion);

/**
* Main API class. Create an instance of this class to be able to use its API functions.
*	@constructor GamehouseAPI
*	@property {boolean} enableCheats  Indicates whether or not cheats should be activated in-game.
* @property {string} languageCode The language code.
* @property {string} countryCode The country code.
* @property {boolean} showDownloadButton Indicates whether or not download buttons throughout the game should be shown.
* @property {boolean} showIngameUpsell Indicates whether or not the IN-GAME upsell screen should be shown.
*	@example
*	// Create a new instance of the GamehouseAPI. This should only be done once in your game.
*	var mygh = new GamehouseAPI();
*	@example
*	// After instantiating the API, create a callback function for the API to call when it is
*	// finished initializing/connected to our proxy.
*	function GHCallbackAPIReady()
*	{
*		console.log("GAME: Loading & starting game...");
*		// Add your code to load the game here.
*		// The API variables listed above will now also contain the final/correct values.
*		// This means you can now determine which language to load using 'languageCode'.
*	}
*	@example
*	// Then, initialize the API.
*	mygh.initialize();	// 'mygh' would be your local GameHouseAPI instance.
*/
function GamehouseAPI()
{
	// public vars. These might be overridden with values passed by the API proxy via the connect message.
	this.enableCheats=false;
	this.languageCode="yy";
	this.countryCode="YY";
	this.showDownloadButton=false;
	this.showIngameUpsell=false;

	// private vars
	var standAloneMode = false;
	var APIconnected = false;
	var APIconnectionTimeout; // timer
	var _instance = this;

	// domain regular expression to detect whether the API runs local or from a server. (ipv4, ipv6, domain names).
	var domainRegEx = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
	var ghAPIdomain = ((domainRegEx.test(location.hostname)) ? location.hostname : /([-\w]+.\w+)?$/.exec(location.hostname)[0]);
	if (ghAPIdomain) document.domain = ghAPIdomain;


	/**
	* Initializes the API by attempting to connect to the API proxy If this succeeds the proxy will send back variables used to control the game behavior.
	* @function initialize
	*	@memberof GamehouseAPI
	* @public
	* @example
	* // First, create a callback function for the API to call when it is finished
	* // initializing/connecting to our proxy.
	* function GHCallbackAPIReady()
	* {
	*	console.log("GAME: API reported it's ready for action.");
	*	// add your code to load the game here.
	* }
	* @example
	* // Then, initialize the API.
	* mygh.initialize();	// 'mygh' would be your local GameHouseAPI instance.
	* 			// Refer to the {@link GamehouseAPI|GamehouseAPI class} for instantiation.
	*/
	function initialize()
	{
		console.log(ghAPIname + ": Initialization started...");

		if (ghAPIdomain)
		{
			console.log(ghAPIname + ": running on: " + location.hostname + "(JS domain:" + document.domain + ")");
			var connectMessage = {};
			connectMessage.eventName="GAME_CONNECT";
			try
			{
				console.log(ghAPIname + ": about to send GAME connect message.");
				game_sender(JSON.stringify(connectMessage));
				APIconnectionTimeout = setTimeout(onConnect.bind(null), 2000); // auto-respond when testing locally.
			}
			catch (e)
			{
				console.log(ghAPIname + ": Something went wrong while sending the connect message.");
				clearInterval(APIconnectionTimeout);
				onConnect();
			}
		}
		else
		{
			console.log(ghAPIname + ": running locally.");
			onConnect();
		}
	}


	function onConnect()
	{
		if(APIconnected)
		{
			console.log(ghAPIname + ": API is now running in live mode.");
		}
		else
		{
			console.log(ghAPIname + ": Proxy did not respond to connect message. API is now running in standalone mode.");
			standAloneMode = true;
		}

		console.log(ghAPIname + ": calling GHCallbackAPIReady callback function.");
		if (typeof(window.GHCallbackAPIReady) === "function")
			window.GHCallbackAPIReady();
		else
			console.log(ghAPIname + ": 'GHCallbackAPIReady' cannot be called. Make sure you created the function.");
}


	// ------------------------------------------------------------------------------
	// Initialization of listeners
	// ------------------------------------------------------------------------------
	if (window.addEventListener) // for all awesome browsers
	{
		window.addEventListener("message", game_listener, false);
		console.log(ghAPIname + ": Adding eventlistener (modern).");
	}
	else // for non-modern browsers
	{
		window.attachEvent("onmessage", game_listener);
		console.log(ghAPIname + ": Adding eventlistener (old).");
	}

	// Listener function
	// Listens for events from the hosting page (that arrive via postMessage).
	/** @private */
	function game_listener(event)
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
				// only listen to SERVER messages
				if (message.eventName.indexOf("SERVER_") === 0) {
					console.log(ghAPIname + ": received event: '" + event.data + "' from origin: '"+event.origin+"'");
				}
				else return;

				if (message.eventName == "SERVER_CONNECT")
				{
					console.log(ghAPIname + ": connection with proxy established.");
					APIconnected=true;
					clearInterval(APIconnectionTimeout);

					if (message.hasOwnProperty("vars")===true)
					{
						for (var key in message.vars)
						{
							console.log(ghAPIname + ": received: " + key + "= " + message.vars[key]);
							_instance[key] = message.vars[key];
						}
					}
					onConnect();
				}
				else
					fireGamehouseGameEvent(message.eventName);
			}
		}
		catch (e)
		{
			console.log(ghAPIname + ": received message did not meet expectations. Error: " + e);
		}
	}

	// Sender function
	// Sends events to the hosting page (via postMessage).
	/** @private */
	function game_sender(event)
	{
		console.log(ghAPIname + ": Sending message: '"+event+"'");
		window.postMessage(event,"*");
	}


	// ------------------------------------------------------------------------------
	// SIMPLE FUNCTIONS, for the game to call.
	// ------------------------------------------------------------------------------
	/**
	* Fires a GAMEBREAK event; indicating an advertisement can be shown by our back-end systems.
	* The commercials are overlayed using css. Please mute your game's sound before calling this function.
	* Make sure to define the 'GHCallbackGameContinue' function before calling this function.
	* After the commercial ends, as well as when no commercial is shown, the callback function will be called to indicate the game can continue playback.
	* @function fireGAMEBREAK
	*	@memberof GamehouseAPI
	* @public
	* @example
	* // First, create a callback function in your game for the API to call when the
	* // GAMEBREAK has ended.
	* function GHCallbackGameContinue()
	* {
	*	console.log("GAME: Continuing");
	*	// add your code to continue gameplay here.
	* }
	* @example
	* // Then, fire the GAMEBREAK event.
	* mygh.fireGAMEBREAK();	// 'mygh' would be your local GameHouseAPI instance.
	* 			// Refer to the {@link GamehouseAPI|GamehouseAPI class} for instantiation.
	*/
	function fireGAMEBREAK(){
		if (!standAloneMode)
			postGameEvent("GAMEBREAK");
		else
		{
			console.log(ghAPIname + ": standAloneMode is active. Autoresponding in 2000ms.");
			setTimeout(fireGamehouseGameEvent.bind(null, "GAMECONTINUE"), 2000); // auto-respond when testing locally.
		}
	}


	/**
	* Fires a SCOREBROADCAST API event.
	* @function fireSCOREBROADCAST
	*	@memberof GamehouseAPI
	* @deprecated no longer required.
	* @private
	*/
	function fireSCOREBROADCAST(score, state){
		var params = {};
		params.score=score;
		params.state=state;
		postGameEvent("SCOREBROADCAST", params);
	}


	/**
	* Submits a highscore and whether the player has won / lost.
	* @function submitScore
	*	@memberof GamehouseAPI
	* @public
	* @param {string} score The total score the player achieved.
	* @param {boolean} playerHasWon Set to true if the player has won and to false if the player has lost.
	* @example
	* // Submit the score.
	* mygh.submitScore(5000, true);	// 'mygh' would be your local GameHouseAPI instance.
	* 				// Refer to the {@link GamehouseAPI|GamehouseAPI class} for instantiation.
	*/
	function submitScore(score, playerHasWon){
		var params = {};
		params.score=score;
		if (playerHasWon === true)
			params.outcome='win';
		else
			params.outcome='lose';
		postGameEvent("GAMEEND", params);
	}


	/**
	* Fires a download event allowing the proxy to handle it in a specific way suitable for the platform/portal it's running on.
	* @function fireGAMEDOWNLOAD
	*	@memberof GamehouseAPI
	* @public
	* @example
	* // Fires the download event.
	* mygh.fireGAMEDOWNLOAD();	// 'mygh' would be your local GameHouseAPI instance.
	* 				// Refer to the {@link GamehouseAPI|GamehouseAPI class} for instantiation.
	*/
	function fireGAMEDOWNLOAD(){
		postGameEvent("GAMEDOWNLOAD");
	}


	// ------------------------------------------------------------------------------
	// Advanced function. No need to call this.
	// ------------------------------------------------------------------------------
	/** @private */
	function postGameEvent(eventName, params)
	{
		params = typeof params !== 'undefined' ? params : {};
		console.log(ghAPIname + ": postGameEvent was called with eventName: " + eventName + " and params: " + JSON.stringify(params));

		switch (eventName)
		{
			case "SCOREBROADCAST":
				if (params.score && params.state)
				{
					params.score = params.score.toString();
					params.eventName="GAME_SCOREBROADCAST";
					game_sender(JSON.stringify(params));
				}else{
					console.log(ghAPIname + ": Parameters for SCOREBROADCAST call are not okay! Call cancelled!");
				}
				break;

			case "GAMEEND":
				if (params.score && params.outcome)
				{
					params.score = params.score.toString();
					params.eventName="GAME_GAMEEND";
					game_sender(JSON.stringify(params));
				}else{
					console.log(ghAPIname + ": Parameters for GAMEEND call are not okay! Call cancelled!");
				}
				break;

			case "GAMEBREAK":
				params.eventName="GAME_GAMEBREAK";
				game_sender(JSON.stringify(params));
				break;

			case "GAMEDOWNLOAD":
				params.eventName="GAME_GAMEDOWNLOAD";
				game_sender(JSON.stringify(params));
				break;
		}
	}


	// ------------------------------------------------------------------------------
	// Callback functionality. No need to call this.
	// ------------------------------------------------------------------------------
	/** @private */
	function fireGamehouseGameEvent(eventName)
	{
		 switch (eventName)
		{
			case "SERVER_GAMECONTINUE":
				console.log(ghAPIname + ": calling GHCallbackGameContinue callback function.");
				if (typeof(window.GHCallbackGameContinue) === "function")
					window.GHCallbackGameContinue();
				else
					console.log(ghAPIname + ": 'GHCallbackGameContinue' cannot be called. Make sure you created the function.");
			break;
		}
	}


	// ------------------------------------------------------------------------------
	// Prototype stuff.
	// ------------------------------------------------------------------------------
	/** @private */
	var _GamehouseAPI_prototype_called = false;
	//if (typeof(_GamehouseAPI_prototype_called) == 'undefined')
	if (_GamehouseAPI_prototype_called === false)
	{
		_GamehouseAPI_prototype_called = true;
		GamehouseAPI.prototype.initialize = initialize;
		GamehouseAPI.prototype.fireGAMEBREAK = fireGAMEBREAK;
		GamehouseAPI.prototype.fireSCOREBROADCAST = fireSCOREBROADCAST;
		GamehouseAPI.prototype.submitScore = submitScore;
		GamehouseAPI.prototype.fireGAMEDOWNLOAD = fireGAMEDOWNLOAD;
		GamehouseAPI.prototype.postGameEvent = postGameEvent;
	}
}