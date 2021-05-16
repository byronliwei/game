var ThirdParty = {

centerHorizontally: true,
centerVertically: true,
showRotateHint: true,
enableFullscreenToggle: true,

// Called when all assets have been loaded
loadingComplete: function()
{
	 //console.log('API: loadingComplete');
},

// Called when the main menu is showed
mainMenu: function() 
{
	//console.log('API: mainMenu');
},

gameHelp: function() 
{
	//console.log('API: gameHelp');
},

// Called when the game (first level) starts
gameStart: function() 
{
	//console.log('API: gameStart');
},

// Called when a level is completed
levelComplete: function(level) 
{
	mobConfig.stop();
	//console.log('API: levelComplete: ' + level);
},

// Called when game over
gameOver: function() 
{
	mobConfig.stop();
	//console.log('API: gameOver');
},
moreGames:function(){
	window.open(mobConfig.mainpage);
},
// Called when game is restarted
restartGame: function() 
{
	//console.log('API: restartGame');
},

// Called when game is completed (all levels completed)
gameComplete: function() 
{
	//console.log('API: gameComplete');
},

showLeaderboard: function()
{
	//console.log('API: showLeaderboard');
	GameHiscore.leaderBoard();
},

// Called when user is ready to submit a score.
submitScore: function(score, level) 
{
	//console.log('API: submitScore ' + score);
	// if (GameLib.online) {
	// 	GameHiscore.submitScore(score);
	// }
	// else {
	// 	alert('You are offline, you cannot submit your score.');
	// }
}

};
