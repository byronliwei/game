/**
 * Created by Dedy Suwandi on 8/26/2014.
 */

//Screen
var SCREEN_WIDTH = 480;
var SCREEN_HEIGHT = 720;

//Tile
var TILE_WIDTH  = 78;
var TILE_HEIGHT = 67;

//Control State
var ON_DOWN = 1;
var ON_RELEASE = 2 ;

//Game State
var ON_GAMEWIN = 0;
var ON_GAMELOSE = 1;
var ON_GAMEPAUSE = 2;
var ON_GAMEPLAY = 3;

//Direction
var DIR_TOPNORM = 0;
var DIR_TOPRIGHT = 1;
var DIR_BOTRIGHT = 2;
var DIR_BOTNORM = 3;
var DIR_BOTLEFT = 4;
var DIR_TOPLEFT = 5;

//Delay
var DROP_DELAY = 220;

//Position
var EYES_POSX = [  0,   0,   2,   0,   0];
var EYES_POSY = [-38, -36, -36, -36, -32];

//Explostion Angle
var EXPLOSION_ANGLE = [0, 60, 120, 180, 240, 300];

//Object Type Constants
var OBJTYPE_TILE  = 0;
var OBJTYPE_PIECE = 1;
var OBJTYPE_PARTICLESTAR = 2;
var OBJTYPE_LINE = 3;
/**
 * Created by Dedy Suwandi on 9/2/2014.
 */

/**
 * Global Class
 */
var objGameModule;
var objAudioHandler;
var objLinePooler;
var objPiecePooler;
var objParticlePooler;

var arrButtons = [];
var arrClickContext = [];
var arrClickHandler = [];

/**
 * Global Flag
 */
var fBGMEnabled = true;
var fSFXEnabled = true;

/**
 * Misc
 */
var urlMoreGames;
var sponsorLogo;


/**
 * Stage Select Level State
 */
var objSSLvStats = [];
var fJustFinishedALevel = false;
var fPrevStars = 0;
var fNewStars  = 0;

/**
 * Save Game Handling
 */
var objGameStorage;
var objGameSave;
var fSaveID     = "FRUITASWIPE_1.1.3-spilgames";

function GetStorage() {
    var storageImpl;

    try {
        localStorage.setItem("storage", "");
        localStorage.removeItem("storage");
        storageImpl = localStorage;
    }
    catch(err) {
        storageImpl = new LocalStorageAlternative();
    }

    return storageImpl;

}

function LocalStorageAlternative() {

    var structureLocalStorage = {};

    this.setItem = function (key, value) {
        structureLocalStorage[key] = value;
    }

    this.getItem = function (key) {
        if(typeof structureLocalStorage[key] != 'undefined' ) {
            return structureLocalStorage[key];
        }
        else {
            return null;
        }
    }

    this.removeItem = function (key) {
        structureLocalStorage[key] = undefined;
    }
}

/**
 * Level Data
 */
var nGameLevel = 0;
var objLevelData = [{ row    :  9,                              //1
                      col    :  4,
                      design :  [[0, 1, 1, 0],
                                 [1, 1, 1],
                                 [0, 1, 1, 0],
                                 [1, 1, 1],
                                 [0, 1, 1, 0],
                                 [1, 1, 1],
                                 [0, 1, 1, 0],
                                 [1, 1, 1],
                                 [0, 1, 1, 0]],
                     score  : 800,
                     target : [[2, 9]],
                     avail  : [1, 2, 3],
                     move   : 6},

                    {row    :  13,                              //2
                     col    :  5,
                     design :  [[0, 0, 0, 0, 0],
                                [0, 0, 0, 0],
                                [0, 1, 0, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 0, 1, 0],
                                [0, 0, 0, 0],
                                [0, 0, 0, 0, 0]],
                     score  : 1400,
                     target : [[2, 8], [5, 8]],
                     avail  : [2, 3, 5],
                     move   : 7},

                    { row    :  11,                             //3
                      col    :  5,
                      design :  [[0, 0, 1, 0, 0],
                                 [0, 1, 1, 0],
                                 [0, 1, 1, 1, 0],
                                 [0, 1, 1, 0],
                                 [0, 1, 1, 1, 0],
                                 [0, 1, 1, 0],
                                 [0, 1, 1, 1, 0],
                                 [0, 1, 1, 0],
                                 [0, 1, 1, 1, 0],
                                 [0, 1, 1, 0],
                                 [0, 0, 1, 0, 0]],
                      score  : 2200,
                      target : [[1, 12], [3, 12]],
                      avail  : [1, 3, 4],
                      move   : 8},

                    { row    :  11,
                      col    :  5,
                      design :  [[0, 1, 1, 1, 0],                //4
                                 [1, 1, 1, 1],
                                 [0, 1, 1, 1, 0],
                                 [1, 1, 1, 1],
                                 [0, 1, 1, 1, 0],
                                 [0, 0, 0, 0],
                                 [0, 1, 1, 1, 0],
                                 [1, 1, 1, 1],
                                 [0, 1, 1, 1, 0],
                                 [1, 1, 1, 1],
                                 [0, 1, 1, 1, 0]],
                    score  : 2000,
                    target : [[3, 14], [4, 14]],
                    avail  : [1, 3, 4],
                    move   : 8},

                    {row    :  11,
                     col    :  5,
                     design :  [[0, 1, 0, 1, 0],                //5
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0]],
                     score  : 2200,
                     target : [[1, 10], [3, 10], [4, 10]],
                     avail  : [1, 2, 3, 4],
                     move   : 12},

                    {row    :  11,
                     col    :  5,
                     design :  [[0, 0, 1, 0, 0],                //6
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 0, 0, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0]],
                      score  : 2700,
                      target : [[2, 14], [3, 14], [5, 12]],
                      avail  : [2, 3, 5],
                      move   : 10},

                    {row    :  11,                              //7
                     col    :  5,
                     design :  [[0, 0, 1, 0, 0],
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0]],
                     score  : 3000,
                     target : [[1, 14], [2, 14], [4, 10], [5, 10]],
                     avail  : [1, 2, 4, 5],
                     move   : 14},

                    {row    :  11,
                     col    :  5,
                     design :  [[0, 0, 1, 0, 0],                //8
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 0, 1, 0, 0],
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0]],
                      score  : 3200,
                      target : [[1, 14], [3, 14], [4, 14], [5, 14]],
                      avail  : [1, 3, 4, 5],
                      move   : 15},

                    {row    :  9,                              //9
                     col    :  4,
                     design :  [[0, 2, 2, 0],
                                [2, 2, 2],
                                [0, 2, 2, 0],
                                [2, 2, 2],
                                [0, 2, 2, 0],
                                [2, 2, 2],
                                [0, 2, 2, 0],
                                [2, 2, 2],
                                [0, 2, 2, 0]],
                     score  : 2600,
                     target : [[1, 10], [10, 22]],
                     avail  : [1, 2, 3, 4],
                     move   : 12},

                    {row    :  11,                              //10
                     col    :  4,
                     design :  [[0, 0, 0, 0],
                                [2, 0, 2],
                                [2, 0, 0, 2],
                                [2, 0, 2],
                                [2, 0, 0, 2],
                                [2, 0, 2],
                                [2, 0, 0, 2],
                                [2, 2, 2],
                                [2, 2, 2, 2],
                                [2, 2, 2],
                                [0, 2, 2, 0]],
                     score  : 2200,
                     target : [[5, 12], [10, 24]],
                     avail  : [2, 3, 5],
                     move   : 14},

                    {row    :  11,                              //11
                     col    :  5,
                     design :  [[0, 2, 0, 2, 0],
                                [1, 1, 1, 1],
                                [0, 2, 2, 2, 0],
                                [1, 1, 1, 1],
                                [0, 2, 0, 2, 0],
                                [0, 1, 1, 0],
                                [0, 2, 0, 2, 0],
                                [1, 1, 1, 1],
                                [0, 2, 2, 2, 0],
                                [1, 1, 1, 1],
                                [0, 2, 0, 2, 0]],
                     score  : 2700,
                     target : [[2, 16], [5, 16], [10, 14]],
                     avail  : [2, 3, 4, 5],
                     move   : 14},

                    {row    :  11,                              //12
                     col    :  5,
                     design :  [[0, 0, 1, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 2, 1, 0],
                                [1, 2, 2, 1],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [1, 2, 2, 1],
                                [0, 1, 2, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0]],
                     score  : 2700,
                     target : [[3, 15], [4, 15], [10, 16]],
                     avail  : [2, 3, 4, 5],
                     move   : 16},


                    {row    :  13,                              //13
                     col    :  5,
                     design :  [[0, 0, 0, 0, 0],
                                [0, 1, 1, 0],
                                [0, 3, 1, 3, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 3, 1, 3, 0],
                                [0, 1, 1, 0],
                                [0, 0, 0, 0, 0]],
                     score  : 1200,
                     target : [[1, 10], [14, 4]],
                     avail  : [1, 2, 3, 5],
                     move   : 12},

                    {row    :  13,                              //14
                     col    :  5,
                     design :  [[0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 3, 0, 3, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 3, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 3, 0, 3, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0]],
                     score  : 2000,
                     target : [[2, 15], [14, 5]],
                     avail  : [1, 2, 3, 5],
                     move   : 15},

                    {row    :  13,                              //15
                     col    :  5,
                     design :  [[0, 0, 3, 0, 0],
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0],
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0],
                                [0, 1, 1, 0],
                                [0, 0, 3, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 3, 0, 3, 0]],
                      score  : 2700,
                      target : [[2, 16], [3, 16], [14, 4]],
                      avail  : [2, 3, 4, 5],
                      move   : 14},

                    {row    :  13,                              //16
                     col    :  5,
                     design :  [[0, 0, 1, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [3, 1, 1, 3],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [3, 1, 1, 3],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 1, 0, 0]],
                     score  : 4200,
                     target : [[3, 20], [5, 20], [14, 4]],
                     avail  : [2, 3, 4, 5],
                     move   : 14},

                    {row    :  11,                              //17
                     col    :  5,
                     design :  [[0, 2, 0, 2, 0],
                                [1, 1, 1, 1],
                                [0, 3, 3, 3, 0],
                                [1, 1, 1, 1],
                                [0, 2, 0, 2, 0],
                                [0, 1, 1, 0],
                                [0, 2, 0, 2, 0],
                                [1, 1, 1, 1],
                                [0, 3, 3, 3, 0],
                                [1, 1, 1, 1],
                                [0, 2, 0, 2, 0]],
                      score  : 2900,
                      target : [[3, 20], [10, 8], [14, 6]],
                      avail  : [1, 2, 3, 5],
                      move   : 14},

                    {row    :  13,                              //18
                     col    :  5,
                     design :  [[0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 0, 0, 1],
                                [0, 1, 0, 1, 0],
                                [1, 0, 0, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0]],
                     score  : 3200,
                     target : [[1, 20], [2, 20], [4, 14], [5, 14]],
                     avail  : [1, 2, 4, 5],
                     move   : 16},

                    {row    :  13,                              //19
                     col    :  5,
                     design :  [[0, 3, 0, 3, 0],
                                [1, 0, 0, 1],
                                [0, 1, 0, 1, 0],
                                [1, 0, 0, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 3, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 0, 0, 1],
                                [0, 1, 0, 1, 0],
                                [1, 0, 0, 1],
                                [0, 3, 0, 3, 0]],
                      score  : 3400,
                      target : [[1, 20], [2, 20], [3, 16], [14, 5]],
                      avail  : [1, 2, 3, 5],
                      move   : 16},

                    {row    :  13,                              //20
                     col    :  5,
                     design :  [[0, 0, 1, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [0, 2, 2, 0],
                                [0, 0, 2, 0, 0],
                                [0, 2, 2, 0],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 0, 2, 0]],
                      score  : 3400,
                      target : [[2, 20], [4, 20], [10, 21]],
                      avail  : [2, 4, 5],
                      move   : 18},

                    {row    :  13,                              //21
                     col    :  5,
                     design :  [[0, 1, 0, 1, 0],
                                [3, 1, 1, 3],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 0, 1, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [3, 1, 1, 3],
                                [0, 1, 0, 1, 0]],
                     score  : 3500,
                     target : [[1, 20], [2, 16], [3, 16], [14, 4]],
                     avail  : [1, 2, 3, 4],
                     move   : 18},

                    {row    :  13,                              //22
                     col    :  5,
                     design :  [[0, 1, 1, 1, 0],
                                [3, 1, 1, 3],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 3, 3, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 3, 0, 3, 0]],
                      score  : 3700,
                      target : [[3, 21], [4, 21], [5, 14], [14, 6]],
                      avail  : [2, 3, 4, 5],
                      move   : 18},

                    {row    :  13,                              //23
                     col    :  5,
                     design :  [[0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 2, 0, 2, 0],
                                [2, 0, 0, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 0, 0, 2],
                                [0, 2, 0, 2, 0],
                                [1, 0, 0, 1],
                                [0, 1, 0, 1, 0]],
                     score  : 4000,
                     target : [[3, 25], [5, 25], [10, 25]],
                     avail  : [3, 4, 5],
                     move   : 14},

                    {row    :  13,                              //24
                     col    :  5,
                     design :  [[0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 3, 2, 0],
                                [0, 1, 1, 0],
                                [0, 1, 0, 1, 0],
                                [0, 1, 1, 0],
                                [0, 3, 0, 3, 0],
                                [0, 1, 1, 0],
                                [0, 1, 0, 1, 0],
                                [0, 1, 1, 0],
                                [0, 2, 3, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0]],
                     score  : 4200,
                     target : [[5, 25], [10, 18], [14, 4]],
                     avail  : [2, 4, 5],
                     move   : 16},

                    {row    :  13,                              //25
                     col    :  5,
                     design :  [[0, 2, 0, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 0, 2, 0],
                                [2, 2, 2, 2],
                                [0, 1, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 3, 3, 3, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 1, 0],
                                [2, 2, 2, 2],
                                [0, 2, 0, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 0, 2, 0]],
                     score  : 4200,
                     target : [[1, 24], [3, 24], [10, 24], [14, 3]],
                     avail  : [1, 3, 5],
                     move   : 16},

                    {row    :  13,                              //26
                     col    :  5,
                     design :  [[0, 1, 1, 1, 0],
                                [3, 3, 3, 3],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 3, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 0, 1, 0],
                                [1, 1, 1, 1],
                                [0, 3, 0, 3, 0]],
                     score  : 4400,
                     target : [[1, 15], [2, 25], [3, 25], [14, 7]],
                     avail  : [1, 2, 3, 4],
                     move   : 18},

                    {row    :  13,                              //27
                     col    :  5,
                     design :  [[0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 0, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0]],
                        score  : 4700,
                        target : [[1, 21], [2, 21], [3, 21], [10, 44]],
                        avail  : [1, 2, 3, 5],
                        move   : 18},


                    {row    :  13,                              //28
                     col    :  5,
                     design :  [[0, 0, 1, 0, 0],
                                [0, 3, 3, 0],
                                [0, 1, 1, 1, 0],
                                [3, 1, 1, 3],
                                [0, 1, 1, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 3, 1, 0],
                                [1, 1, 1, 1],
                                [0, 1, 1, 1, 0],
                                [3, 1, 1, 3],
                                [0, 1, 1, 1, 0],
                                [0, 3, 3, 0],
                                [0, 0, 1, 0, 0]],
                     score  : 5400,
                     target : [[1, 24], [2, 24], [5, 24], [14, 9]],
                     avail  : [1, 2, 4, 5],
                     move   : 18},

                    {row    :  13,                              //29
                     col    :  5,
                     design :  [[0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0]],
                     score  : 5700,
                     target : [[2, 30], [3, 30], [5, 30], [10, 45]],
                     avail  : [2, 3, 4, 5],
                     move   : 20},

                    {row    :  13,                              //30
                     col    :  5,
                     design :  [[0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 3, 2, 3, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 3, 2, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0],
                                [2, 2, 2, 2],
                                [0, 3, 2, 3, 0],
                                [2, 2, 2, 2],
                                [0, 2, 2, 2, 0]],
                        score  : 5800,
                        target : [[2, 35], [3, 35], [10, 40], [14, 5]],
                        avail  : [2, 3, 4, 5],
                        move   : 20}
                    ];
/**
 * Created by Dedy Suwandi on 7/10/2014.
 */

module = function(){};

module.prototype = {
  //Random
  RandomRangeInt : function(min, max){
    return (min + Math.floor(Math.random() * (max - min + 1)));
  },

  RandomRangeFloat : function(min, max){
    return (min + (Math.random() * (max - min + 1)));
  },

  //Tween Stopper
  StopTweens : function(obj){
      // first get all of the active tweens
      var tweens = game.tweens.getAll();

      // filter that down to an array of all tweens of the specified object
      var currentTweens = tweens.filter(function(tween) {
          return tween._object === obj;
      });

      // if we have any matching tweens for the object, cycle through all of them and stop them
      if (currentTweens.length > 0) {
          for (var t = 0, len = currentTweens.length; t < len; t++) {
              currentTweens[t].stop();
          }
      }
  },

  //Time Converter
  ConvertToTimeString : function(seconds){
      var tmpMinutes;
      var tmpSeconds;

      tmpMinutes = Math.floor(seconds / 60);
      tmpSeconds = seconds - (tmpMinutes * 60);

      if(tmpMinutes < 10){
          tmpMinutes = "0" + tmpMinutes.toString();
      }
      if(tmpSeconds < 10){
          tmpSeconds = "0" + tmpSeconds.toString();
      }

      return (tmpMinutes + ":" + tmpSeconds);
  },

   //BG Transition
   CallTransition : function(onComplete, onCompleteContext){
       //Create Temporary BG
       var tmpBGTransition = game.add.graphics(0, 0);
       tmpBGTransition.beginFill(0x000000, 1);
       tmpBGTransition.drawRect(0, 0, game.width, game.height);
       tmpBGTransition.alpha = 0;
       tmpBGTransition.endFill();

       game.add.tween(tmpBGTransition).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
           //Call Complete Event if Exists
           if(onComplete){
               onComplete.apply(onCompleteContext);
           }

           //Destroy The BG
           game.add.tween(tmpBGTransition).to({alpha : 0}, 500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
               tmpBGTransition.destroy();
               tmpBGTransition = null;
           }, this);
       }, this);
   },

   //Create Button
    CreateButton : function(cx, cy, ax, ay, cParent, catlasName, cframeName, cbtnName, clickHandler, clickContext){
        //Create Button
        tmpButton = game.add.sprite(cx, cy, catlasName);
        if(cframeName.length > 0){
            tmpButton.frameName = cframeName;
        }
        tmpButton.name = cbtnName;
        tmpButton.inputEnabled = true;
        tmpButton.events.onInputDown.add(this.ClickHandler, this);
        tmpButton.events.onInputUp.add(this.ReleaseHandler, this);
        tmpButton.anchor.setTo(ax, ay);
        cParent.add(tmpButton);

        //Push Reference
        arrButtons.push(tmpButton);
        arrClickHandler.push(clickHandler);
        arrClickContext.push(clickContext);

        //Return Object
        return tmpButton;
    },

    ClickHandler : function(sprite){
        //Get Index
        var tmpIdx = arrButtons.indexOf(sprite);

        //Set Sprite Scale
        sprite.scale.setTo(sprite.scale.x * 0.98, sprite.scale.y * 0.98);

        //Play SFX
        objAudioHandler.playSFX('SFX_Click');

        //Call Context
        if(arrClickContext[tmpIdx] != null){
            arrClickHandler[tmpIdx].apply(arrClickContext[tmpIdx], [sprite]);
        }
    },

    ReleaseHandler : function(sprite){
        sprite.scale.setTo(sprite.scale.x / 0.98, sprite.scale.y / 0.98);
    },

    DestroyButton : function(obj){
        var tmpIdx = arrButtons.indexOf(obj);

        arrButtons[tmpIdx].destroy();
        arrButtons[tmpIdx] = null;

        arrButtons.splice(tmpIdx, 1);
        arrClickContext.splice(tmpIdx, 1);
        arrClickHandler.splice(tmpIdx, 1);
    },

    DestroyAllButtons : function(){
        for(var tmpI = 0 ; tmpI < arrButtons.length ; tmpI++){
            arrButtons[tmpI].destroy();
            arrButtons[tmpI] = null;
        }

        arrButtons = [];
        arrClickContext = [];
        arrClickHandler = [];
    }
};

/**
 * Created by Dedy Suwandi on 7/21/2014.
 */
audiohandler = function(){
    if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

    //BGM
    this.BGM = game.add.audio('BGM');
    this.BGM.addMarker('BGM_mainmenu' ,  27,  29.0);
    this.BGM.addMarker('BGM_ingame'   ,   0,  19.4);
    this.BGM.addMarker('BGM_lose'     ,  21,   4.2);
    this.BGM.addMarker('BGM_win'      ,  57,   4.9);

    //SFX
    this.SFX = [];


    this.SFX = game.add.audio('SFX');

    /*
    this.SFX.addMarker('SFX_Clap'           ,   0, 3.40);
    this.SFX.addMarker('SFX_Click'          ,   5, 0.16);
    this.SFX.addMarker('SFX_Explode'        ,   7, 0.13);
    this.SFX.addMarker('SFX_Star'           ,   9, 2.0);
    this.SFX.addMarker('SFX_Swipe'          ,  12, 0.50);
    this.SFX.addMarker('SFX_Swosh'          ,  14, 0.67);
    this.SFX.addMarker('SFX_Tap'            ,  16, 0.68);
    this.SFX.addMarker('SFX_Zap'            ,  18, 0.23);
    this.SFX.addMarker('SFX_Zap2'           ,  20, 0.24);
    this.SFX.addMarker('SFX_Zap3'           ,  22, 0.23);
    this.SFX.addMarker('SFX_Zap4'           ,  24, 0.21);
    this.SFX.addMarker('SFX_Zap5'           ,  26, 0.45);
    */

    this.SFX.addMarker('SFX_Bomb'           ,   0, 0.69);
    this.SFX.addMarker('SFX_Clap'           ,   2, 3.42);
    this.SFX.addMarker('SFX_Click'          ,   7, 0.15);
    this.SFX.addMarker('SFX_Complete'       ,   9, 0.50);
    this.SFX.addMarker('SFX_Explode'        ,  11, 0.13);
    this.SFX.addMarker('SFX_Good'           ,  13, 0.49);
    this.SFX.addMarker('SFX_Nice'           ,  15, 0.60);
    this.SFX.addMarker('SFX_Star'           ,  17, 2.00);
    this.SFX.addMarker('SFX_Swipe'          ,  20, 0.50);
    this.SFX.addMarker('SFX_Swosh'          ,  22, 0.67);
    this.SFX.addMarker('SFX_Tap'            ,  24, 0.10);
    this.SFX.addMarker('SFX_Wood'           ,  26, 0.32);

    this.SFX.allowMultiple = true;

    //Flag
    this.resetVolSFX();
    this.resetVolBGM();
};

audiohandler.prototype = {
    playBGM : function(name, loop){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        this.BGM.play(name, 0, this.bgmvol, loop);
    },

    pauseBGM : function(){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        this.BGM.pause();
    },

    resumeBGM : function(){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        this.BGM.resume();
    },

    stopBGM : function(){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        this.BGM.stop();
    },

    playSFX : function(name){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

       this.SFX.play(name, 0, this.sfxvol);
    },

    resetVolBGM : function(){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        this.bgmvol = (objGameSave.music) ? 0.28 : 0;
        this.BGM.volume = this.bgmvol;
    },

    resetVolSFX : function(){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        this.sfxvol = (objGameSave.sfx)   ? 1.0 : 0;
    },

    fadeOutBGM : function(stopBGM) {
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        if(objGameSave.music){
            game.add.tween(this.BGM).to({volume : 0}, 400, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                if(stopBGM){
                    this.BGM.stop();
                }
            }, this);
        }
    },

    fadeInBGM : function(){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        this.BGM.volume = 0;
        if(objGameSave.music){
            game.add.tween(this.BGM).to({volume : this.bgmvol}, 800, Phaser.Easing.Linear.None, true);
        }
    },

    isBGMPlaying : function(){
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return false;

        return this.BGM.isPlaying;
    },

    destroy : function() {
        if(!game.device.webAudio || Phaser.Device.isAndroidStockBrowser())  return;

        this.BGM.destroy();
        this.BGM = null;

        this.SFX.destroy();
        this.SFX = null;

        this.SFXOnce.destroy();
        this.SFXOnce = null;
    }
};

/**
 * Created by Dedy Suwandi on 10/8/2014.
 */

/**
 * Constructor and Main Handler
 */
creditsboard = function(parent, clickListener, clickContext){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    this.objBoard = game.add.group();
    this.objGroup.add(this.objBoard);

    //##.Add Object
    //a.bg
    this.objBG1 = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBG1.frameName = 'obj-boardbg1.png';
    this.objBG1.scale.setTo(1.8, 1.7);
    this.objBoard.add(this.objBG1);

    this.objBG2 = game.add.sprite(42, -16, 'atlas-ingamestatic');
    this.objBG2.frameName = 'obj-boardbg2.png';
    this.objBoard.add(this.objBG2);

    this.objBG3 = game.add.sprite(24, 66, 'atlas-ingamestatic');
    this.objBG3.frameName = 'obj-boardbg3.png';
    this.objBG3.scale.setTo(1.55, 1.68);
    this.objBoard.add(this.objBG3);

    //b.credits text
    this.txtTitle = game.add.bitmapText(115, 0, 'fnt-berlin','CREDITS', 35);
    this.objBoard.add(this.txtTitle);

    this.txtProgram1 = game.add.sprite(60, 100, 'atlas-title');
    this.txtProgram1.frameName = 'txt-program1.png';
    this.objBoard.add(this.txtProgram1);

    this.txtProgram2 = game.add.sprite(42, 130, 'atlas-title');
    this.txtProgram2.frameName = 'txt-program2.png';
    this.objBoard.add(this.txtProgram2);

    this.txtGraphic1 = game.add.sprite(210, 100, 'atlas-title');
    this.txtGraphic1.frameName = 'txt-graphic1.png';
    this.objBoard.add(this.txtGraphic1);

    this.txtGraphic2 = game.add.sprite(192, 130, 'atlas-title');
    this.txtGraphic2.frameName = 'txt-graphic2.png';
    this.objBoard.add(this.txtGraphic2);

    this.txtSound1 = game.add.sprite(145, 180, 'atlas-title');
    this.txtSound1.frameName = 'txt-sound1.png';
    this.objBoard.add(this.txtSound1);

    this.txtSound2 = game.add.sprite(115, 210, 'atlas-title');
    this.txtSound2.frameName = 'txt-sound2.png';
    this.objBoard.add(this.txtSound2);

    //c.button OK
    objGameModule.CreateButton(this.objBG1.width * .5, 290, 0.5, 0.5, this.objBoard, 'atlas-title', 'btn-ok.png'  , 'HideCredits'  , this.Hide, this);

    //##.Register Click Context and Click Handler
    this.clickContext = clickContext;
    this.clickHandler = clickListener;

    //##.Set Position
    this.objBoard.x = -this.objBoard.width * 0.5;
    this.objBoard.y = -this.objBoard.height * 0.5;

    //##.Deactivate
    this.objGroup.visible = false;
};

creditsboard.prototype = {
    Show : function() {
        this.objGroup.visible = true;
        this.objGroup.scale.setTo(0.4, 0.4);
        game.add.tween(this.objGroup.scale).to({x : 1, y : 1}, 600, Phaser.Easing.Elastic.Out, true);
    },

    Hide : function(sprite){
        game.add.tween(this.objGroup.scale).to({x : 0, y : 0}, 120, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            this.objGroup.visible = false;
        }, this);

        //Call Context Handling
        if(this.clickContext != null){
            this.clickHandler.apply(this.clickContext, [sprite]);
        }
    },

    Destroy : function () {

        //##.Destroy Object
        //a.bg
        this.objBG1.destroy();
        this.objBG1 = null;

        this.objBG2.destroy();
        this.objBG2 = null;

        this.objBG3.destroy();
        this.objBG3 = null;

        //b.credits text
        this.txtTitle.destroy();
        this.txtTitle = null;

        this.txtProgram1.destroy();
        this.txtProgram1 = null;

        this.txtProgram2.destroy();
        this.txtProgram2 = null;

        this.txtGraphic1.destroy();
        this.txtGraphic1 = null;

        this.txtGraphic2.destroy();
        this.txtGraphic2 = null;

        this.txtSound1.destroy();
        this.txtSound1 = null;

        this.txtSound2.destroy();
        this.txtSound2 = null;

        //##.Register Click Context and Click Handler
        this.clickContext = null;
        this.clickHandler = null;

        //##.Destroy Group
        this.objBoard.removeAll();
        this.objBoard.destroy();
        this.objBoard = null;

        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(creditsboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(creditsboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(creditsboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 9/12/2014.
 */

/**
 * Constructor and Main Handler
 */
failboard = function(args, parent, clickListener, clickContext){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    //##.Add Object
    //a.main board
    this.objBoard = game.add.group();
    this.objGroup.add(this.objBoard);

    //b.bg
    this.objBG1 = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBG1.frameName = 'obj-boardbg1.png';
    this.objBG1.scale.setTo(1.87, 1.55);
    this.objBoard.add(this.objBG1);

    this.objBG2 = game.add.sprite(40, -16, 'atlas-ingamestatic');
    this.objBG2.frameName = 'obj-boardbg2.png';
    this.objBoard.add(this.objBG2);

    this.objBG3 = game.add.sprite(28, 64, 'atlas-ingamestatic');
    this.objBG3.frameName = 'obj-boardbg3.png';
    this.objBG3.scale.setTo(1.55, 1.40);
    this.objBoard.add(this.objBG3);

    //c.title
    this.objTitle = game.add.sprite(78, 78, 'atlas-ingamestatic');
    this.objTitle.frameName = 'obj-stagefailedtxt.png';
    this.objBoard.add(this.objTitle);

    this.txtTitle = game.add.bitmapText(178, 0, 'fnt-berlin','STAGE ' + (nGameLevel + 1).toString(), 35);
    this.txtTitle.updateTransform();
    this.txtTitle.x = 178 - (this.txtTitle.textWidth * 0.5);
    this.objBoard.add(this.txtTitle);

    //d.losing info
    this.objFruitGroup = game.add.group();
    this.objBoard.add(this.objFruitGroup);

    this.objFruitGroupObj1 = [];
    this.objFruitGroupObj2 = [];
    this.objFruitGroupObj3 = [];

    var tmpObj1, tmpObj2, tmpObj3;
    for(var tmpI = 0 ; tmpI < (args.length - 1) ; tmpI++){
        /*
        tmpObj1 = objPiecePooler.CallObject(this.objFruitGroup);
        tmpObj1.Reset(args[tmpI][0], 34 + (tmpI * 70), 25, 0, 0);
        tmpObj1.self.scale.setTo(0.8, 0.8);
        this.objFruitGroupObj1.push(tmpObj1);
        */

        tmpObj1 = game.add.sprite(42 + (tmpI * 70), 46, 'atlas-ingamestatic');
        switch(args[tmpI][0]){
            case 10  :
                tmpObj1.frameName = 'obj-ceramic.png';
                tmpObj1.scale.setTo(0.6, 0.6);
                break;
            case 14  :
                tmpObj1.frameName = 'obj-fruit14-body-normal.png';
                tmpObj1.scale.setTo(0.8, 0.8);
                break;
            default  :
                tmpObj1.frameName = 'obj-fruit' + args[tmpI][0].toString() + '.png';
                tmpObj1.scale.setTo(0.8, 0.8);
                break;
        }
        tmpObj1.anchor.setTo(0.5, 1);
        this.objFruitGroup.add(tmpObj1);
        this.objFruitGroupObj1.push(tmpObj1);

        tmpObj2 = game.add.sprite(0, 38, 'atlas-ingamestatic');
        this.objFruitGroup.add(tmpObj2);
        this.objFruitGroupObj2.push(tmpObj2);

        tmpObj3 = game.add.bitmapText(0, 60, 'fnt-berlin' ,(args[tmpI][1].toString() + ' / ' +  args[tmpI][2].toString()), 18);
        tmpObj3.updateTransform();
        tmpObj3.x = 42 - (tmpObj3.textWidth * 0.5) + (tmpI * 70);
        this.objFruitGroup.add(tmpObj3);
        this.objFruitGroupObj3.push(tmpObj3);

        if(args[tmpI][1] >= args[tmpI][2]){
            tmpObj2.frameName = 'obj-check.png';
            tmpObj2.x = 38 + (tmpI * 70);

            tmpObj3.tint = 0x75E897;
        } else {
            tmpObj2.frameName = 'obj-cross.png';
            tmpObj2.x = 45 + (tmpI * 70);

            tmpObj3.tint = 0xF25B5B;
        }
    }
    this.objFruitGroup.x = (315 - this.objFruitGroup.width) * 0.5;
    this.objFruitGroup.y = 115;

    //e.button
    this.btnRetry = objGameModule.CreateButton( 98, 262, 0.5, 0.5, this.objBoard, 'atlas-ingamestatic', 'btn-retry.png'  , 'Restart'     , clickListener, clickContext);
    this.btnMenu  = objGameModule.CreateButton(268, 262, 0.5, 0.5, this.objBoard, 'atlas-ingamestatic', 'btn-menu.png'   , 'BackToMenu'  , clickListener, clickContext);

    //##.Set Position
    this.objBoard.x = -this.objBG1.width * 0.5;
    this.objBoard.y = -this.objBG1.height * 0.5;
};

failboard.prototype = {
    Destroy : function () {
        //Remove All Object
        this.objBoard.remove(this.objBG1);
        this.objBG1.destroy();
        this.objBG1 = null;

        this.objBoard.remove(this.objBG2);
        this.objBG2.destroy();
        this.objBG2 = null;

        this.objBoard.remove(this.objBG3);
        this.objBG3.destroy();
        this.objBG3 = null;

        this.objBoard.remove(this.objTitle);
        this.objTitle.destroy();
        this.objTitle = null;

        this.objBoard.remove(this.txtTitle);
        this.txtTitle.destroy();
        this.txtTitle = null;

        objGameModule.DestroyButton(this.btnRetry);
        this.btnRetry = null;

        objGameModule.DestroyButton(this.btnMenu);
        this.btnMenu  = null;

        //Remove Collect Info
        for(var tmpI = 0 ; tmpI < this.objFruitGroupObj1.length ; tmpI++){
            this.objFruitGroupObj1[tmpI].destroy();
            this.objFruitGroupObj1[tmpI] = null;

            this.objFruitGroup.remove(this.objFruitGroupObj2[tmpI]);
            this.objFruitGroupObj2[tmpI].destroy();
            this.objFruitGroupObj2[tmpI] = null;

            this.objFruitGroup.remove(this.objFruitGroupObj3[tmpI]);
            this.objFruitGroupObj3[tmpI].destroy();
            this.objFruitGroupObj3[tmpI] = null;
        }
        this.objFruitGroupObj1 = [];
        this.objFruitGroupObj2 = [];
        this.objFruitGroupObj3 = [];

        this.objBoard.remove(this.objFruitGroup);
        this.objFruitGroup.removeAll();
        this.objFruitGroup.destroy();
        this.objFruitGroup = null;

        //Remove Board
        this.objGroup.remove(this.objBoard);
        this.objBoard.removeAll();
        this.objBoard = null;

        //Remove Main Group
        this.objGroup.parent.remove(this.objGroup);
        this.objGroup.removeAll();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(failboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(failboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(failboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 9/12/2014.
 */
/**
 * Constructor and Main Handler
 */
fruitboard = function(ctype, ctarget, cparent){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    cparent.add(this.objGroup);

    //##.Add Main Board
    this.objBoardBG = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBoardBG.frameName = 'obj-fruitboardbg.png';
    this.objGroup.add(this.objBoardBG);

    switch(ctype){
        case 10  :
            this.objFruit = game.add.sprite(34, 50, 'atlas-ingamestatic');
            this.objFruit.scale.setTo(0.6, 0.6);
            this.objFruit.frameName = 'obj-ceramic.png';
            break;
        case 14 :
            this.objFruit = game.add.sprite(34, 50, 'atlas-ingamestatic');
            this.objFruit.scale.setTo(0.8, 0.8);
            this.objFruit.frameName = 'obj-fruit14-body-normal.png';
            break;
        default  :
            this.objFruit = game.add.sprite(34, 55, 'atlas-ingamestatic');
            this.objFruit.scale.setTo(0.8, 0.8);
            this.objFruit.frameName = 'obj-fruit' + ctype.toString() + '.png';
            break;
    }
    this.objFruit.anchor.setTo(0.5, 1);
    this.objGroup.add(this.objFruit);

    //this.objFruit = objPiecePooler.CallObject(this.objGroup);
    //this.objFruit.Reset(ctype, 34, 25, 0, 0);
    //this.objFruit.self.scale.setTo(0.8, 0.8);

    this.objCheck = game.add.sprite(40, 30, 'atlas-ingamestatic');
    this.objCheck.frameName = 'obj-check.png';
    this.objCheck.visible = false;
    this.objGroup.add(this.objCheck);

    //##.Set Flag
    this.nType = ctype;
    this.nTarget = ctarget;
    this.nValue  = 0;

    //##Total Move / Target
    this.txtCurnMove = game.add.bitmapText(26, 55, 'fnt-berlin','0', 20);
    this.objGroup.add(this.txtCurnMove);

    this.txtTargetMove = game.add.bitmapText(26, 55, 'fnt-berlin',(' / ' + this.nTarget.toString()), 20);
    this.objGroup.add(this.txtTargetMove);

    this.RefreshMove();
};


fruitboard.prototype = {
    Bounce : function(){
        game.add.tween(this.objFruit.scale).to({x : 1.15 * this.objFruit.scale.x, y : 1.15 * this.objFruit.scale.y}, 100, Phaser.Easing.Linear.None, true, 0, true, true);
    },

    RefreshMove : function(){
        this.txtCurnMove.setText(this.nValue.toString());
        this.txtCurnMove.updateTransform();
        this.txtCurnMove.x = 26 - this.txtCurnMove.textWidth;

        switch(this.objCheck.visible){
            case false :
                if(this.nValue >= this.nTarget){
                    this.txtCurnMove.tint = 0x75E897;
                    this.txtTargetMove.tint = 0x75E897;

                    this.objCheck.visible = true;
                    this.objCheck.scale.setTo(0.1, 0.1);
                    game.add.tween(this.objCheck.scale).to({x : 1, y : 1}, 500, Phaser.Easing.Elastic.Out, true);
                }
                break;
            case true  :
                if(this.nValue < this.nTarget){
                    this.txtCurnMove.tint = 0x000000;
                    this.txtTargetMove.tint = 0x000000;
                }
                break;
        }
    },

    Destroy : function () {
        //Remove Main Board Thing
        this.objGroup.remove(this.objBoardBG);
        this.objBoardBG.destroy();
        this.objBoardBG = null;

        this.objFruit.destroy();
        this.objFruit = null;

        this.objGroup.remove(this.objCheck);
        this.objCheck.destroy();
        this.objCheck = null;

        //Remove Text Group
        this.objGroup.remove(this.txtCurnMove);
        this.txtCurnMove.destroy();
        this.txtCurnMove = null;

        this.objGroup.remove(this.txtTargetMove);
        this.txtTargetMove.destroy();
        this.txtTargetMove = null;

        //Remove Body From Parent
        if(this.objGroup.parent != null){
            this.objGroup.parent.remove(this.objGroup);
        }
        this.objGroup.removeAll();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(fruitboard.prototype, "fruitCenterX", {
    get: function () {
        return (this.x + this.objFruit.x);
    }
});
Object.defineProperty(fruitboard.prototype, "fruitCenterY", {
    get: function () {
        return (this.y + this.objFruit.y);
    }
});
Object.defineProperty(fruitboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(fruitboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(fruitboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 9/15/2014.
 */

/**
 * Constructor and Main Handler
 */
line = function(){
    //Create Group
    this.objGroup = game.add.group();

    //Create Object and Set The Rotation
    this.objLine = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objLine.frameName = 'obj-line.png';
    this.objLine.pivot.x = 11.2;
    this.objLine.pivot.y = 11.2;
    this.objGroup.add(this.objLine);

    //Create Txt
    this.txtCurnMoveFront = game.add.bitmapText(0, 0, 'fnt-berlin','0', 16);
    this.objGroup.add(this.txtCurnMoveFront);
    this.txtCurnMoveFront.visible = false;

    this.txtCurnMoveEnd = game.add.bitmapText(0, 0, 'fnt-berlin','0', 16);
    this.objGroup.add(this.txtCurnMoveEnd);
    this.txtCurnMoveEnd.visible = false;

    //Deactivate Object First
    this.Deactivate();
};

line.prototype = {
    //PUBLIC HANDLING
    Reset : function(cx, cy, cdirection, cvalue, isLast){
        //Temp Variable
        var tmpRotation;

        //Set Rotation
        switch(cdirection){
            case DIR_TOPNORM  :
                tmpRotation = -90;
                break;
            case DIR_TOPRIGHT :
                tmpRotation = -30;
                break;
            case DIR_BOTRIGHT :
                tmpRotation = 30;
                break;
            case DIR_BOTNORM  :
                tmpRotation = 90;
                break;
            case DIR_BOTLEFT  :
                tmpRotation = 150;
                break;
            case DIR_TOPLEFT  :
                tmpRotation = -150;
                break;
        }

        //Reset Position and Rotation
        this.objGroup.x = cx;
        this.objGroup.y = cy;
        this.objLine.rotation = tmpRotation * Math.PI / 180;

        //Reset Value
        this.txtCurnMoveFront.visible = true;
        this.txtCurnMoveFront.setText(cvalue.toString());
        this.txtCurnMoveFront.updateTransform();
        this.txtCurnMoveFront.x = -this.txtCurnMoveFront.textWidth * 0.5;
        this.txtCurnMoveFront.y = -this.txtCurnMoveFront.textHeight * 0.5;

        if(isLast) {
            this.ShowLast(cvalue + 1);
        }
    },

    ShowLast : function(cvalue){
        this.txtCurnMoveEnd.visible = true;
        this.txtCurnMoveEnd.setText(cvalue.toString());
        this.txtCurnMoveEnd.updateTransform();
        this.txtCurnMoveEnd.x = (-this.txtCurnMoveEnd.textWidth * 0.5)  + (Math.cos(this.objLine.rotation) * 67);
        this.txtCurnMoveEnd.y = (-this.txtCurnMoveEnd.textHeight * 0.5) + (Math.sin(this.objLine.rotation) * 67);
    },

    HideLast : function(){
      this.txtCurnMoveEnd.visible = false;
    },

    Activate : function(){
        this.fOnUse = true;
        this.objGroup.visible = true;
    },

    Deactivate : function(){
        if(this.objGroup.parent != null){
            this.objGroup.parent.remove(this.objGroup);
        }

        //Text
        this.txtCurnMoveFront.visible = false;
        this.txtCurnMoveEnd.visible = false;

        //Other Flag
        this.fOnUse = false;
        this.objGroup.visible = false;
    },

    Destroy : function () {
        //Destroy Text
        this.objGroup.remove(this.txtCurnMoveFront);
        this.txtCurnMoveFront.destroy();
        this.txtCurnMoveFront= null;

        this.objGroup.remove(this.txtCurnMoveEnd);
        this.txtCurnMoveEnd.destroy();
        this.txtCurnMoveEnd= null;

        //Destroy Line
        this.objGroup.remove(this.objLine);
        this.objLine.destroy();
        this.objLine = null;

        //Destroy Group
        if(this.objGroup.parent != null){
            this.objGroup.parent.remove(this.objGroup);
        }
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(line.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(line.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(line.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 11/11/2014.
 */

/**
 * Constructor and Main Handler
 */
objectiveboard = function(parent, clickListener, clickContext){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    //##.Add Object
    //a.main board
    this.objBoard = game.add.group();
    this.objGroup.add(this.objBoard);

    //b.bg
    this.objBG1 = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBG1.frameName = 'obj-boardbg1.png';
    //this.objBG1.scale.setTo(1.8, 2.1);
    this.objBG1.scale.setTo(1.8, 2.3);
    this.objBoard.add(this.objBG1);

    this.objBG2 = game.add.sprite(40, -16, 'atlas-ingamestatic');
    this.objBG2.frameName = 'obj-boardbg2.png';
    this.objBoard.add(this.objBG2);

    this.objBG3 = game.add.sprite(22, 64, 'atlas-ingamestatic');
    this.objBG3.frameName = 'obj-boardbg3.png';
    //this.objBG3.scale.setTo(1.55, 2.62);
    this.objBG3.scale.setTo(1.55, 2.95);
    this.objBoard.add(this.objBG3);

    //c.title
    this.txtTitle = game.add.bitmapText(178, 0, 'fnt-berlin','STAGE ' + (nGameLevel + 1).toString(), 35);
    this.txtTitle.updateTransform();
    this.txtTitle.x = 178 - (this.txtTitle.textWidth * 0.5);
    this.objBoard.add(this.txtTitle);

    //d.Text and Line Separator
    this.objLineSeparator = game.add.sprite(40, 220, 'atlas-ingamestatic');
    this.objLineSeparator.frameName = 'obj-lineseparator.png';
    this.objBoard.add(this.objLineSeparator);

    this.txtCollect = game.add.bitmapText(135, 235, 'fnt-berlin' ,'COLLECT', 18);
    this.txtCollect.tint = 0xE9B91A;
    this.objBoard.add(this.txtCollect);

    this.txtAvailableMove = game.add.bitmapText(165, 340, 'fnt-berlin' ,'MOVES : ', 18);
    this.txtAvailableMove.tint = 0xE9B91A;
    this.objBoard.add(this.txtAvailableMove);

    //e.level info
    this.objFruitGroup = game.add.group();
    this.objBoard.add(this.objFruitGroup);

    this.arrFruitObj1 = [];
    this.arrFruitObj2 = [];

    var tmpObj1;
    for(var tmpI = 0 ; tmpI < 4 ; tmpI++){
        tmpObj1 = game.add.sprite(42 + (tmpI * 70), 46, 'atlas-ingamestatic');
        tmpObj1.scale.setTo(0.8, 0.8);
        tmpObj1.anchor.setTo(0.5, 1);
        this.objFruitGroup.add(tmpObj1);
        this.arrFruitObj1.push(tmpObj1);

        tmpObj2 = game.add.bitmapText(0, 35, 'fnt-berlin' , '0', 18);
        tmpObj2.tint = 0xE9B91A;
        this.objFruitGroup.add(tmpObj2);
        this.arrFruitObj2.push(tmpObj2);
    }
    this.objFruitGroup.x = (335 - this.objFruitGroup.width) * 0.5;
    this.objFruitGroup.y = 272;

    //f.button
    //this.btnPlay = objGameModule.CreateButton( 175, 375, 0.5, 0.5, this.objBoard, 'atlas-title'       , 'btn-play.png'   , 'Play'     , clickListener, clickContext);
    this.btnPlay = objGameModule.CreateButton( 175, 410, 0.5, 0.5, this.objBoard, 'atlas-title'       , 'btn-play.png'   , 'Play'     , clickListener, clickContext);
    this.btnPlay.scale.setTo(0.6, 0.6);

    //g.star
    this.arrObjStar  = [];
    this.arrObjEmpty = [];
    this.arrObjShiny = [];
    var tmpStar, tmpShiny;
    for(tmpI = 0 ; tmpI < 3 ; tmpI++){
        tmpShiny = game.add.sprite(175, 110, 'atlas-ingamestatic');
        tmpShiny.frameName = 'obj-shineeffect.png';
        tmpShiny.scale.setTo(0.6, 0.6);
        tmpShiny.anchor.setTo(0.5, 0.5);
        this.objBoard.add(tmpShiny);
        this.arrObjShiny.push(tmpShiny);
    }
    for(tmpI = 0 ; tmpI < 3 ; tmpI++){
        tmpStar = game.add.sprite(175, 115, 'atlas-ingamestatic');
        tmpStar.frameName = 'obj-star.png';
        tmpStar.anchor.setTo(0.5, 0.5);
        tmpStar.scale.setTo(0.8, 0.8);
        this.objBoard.add(tmpStar);
        this.arrObjStar.push(tmpStar);

        tmpStar = game.add.sprite(175, 115, 'atlas-ingamestatic');
        tmpStar.frameName = 'obj-starblank.png';
        tmpStar.visible = false;
        tmpStar.anchor.setTo(0.5, 0.5);
        tmpStar.scale.setTo(0.8, 0.8);
        this.objBoard.add(tmpStar);
        this.arrObjEmpty.push(tmpStar);
    }

    this.arrObjEmpty[0].x = this.arrObjShiny[0].x = this.arrObjStar[0].x = 100;
    this.arrObjEmpty[0].y = this.arrObjShiny[0].y = this.arrObjStar[0].y = 130;
    this.arrObjEmpty[0].angle = this.arrObjStar[0].angle = -20;

    this.arrObjEmpty[2].x = this.arrObjShiny[2].x = this.arrObjStar[2].x = 250;
    this.arrObjEmpty[2].y = this.arrObjShiny[2].y = this.arrObjStar[2].y = 130;
    this.arrObjEmpty[2].angle = this.arrObjStar[2].angle = 20;

    //h.Best Score
    this.objBestGroupBoard = game.add.group();
    this.objBestGroupBoard.y = 180;
    this.objBoard.add(this.objBestGroupBoard );

    this.txtBestTitle  = game.add.bitmapText(0, 0, 'fnt-berlin' ,'BEST : ', 18);
    this.txtBestTitle.tint = 0xE9B91A;
    this.objBestGroupBoard .add(this.txtBestTitle);

    this.txtBestValue = game.add.bitmapText(65, 0, 'fnt-berlin' ,'2000', 18);
    this.txtBestValue.tint = 0xE9B91A;
    this.objBestGroupBoard .add(this.txtBestValue);

    //##.Set Position
    this.objBoard.x = -this.objBG1.width * 0.5;
    this.objBoard.y = -this.objBG1.height * 0.5;

    //##.Flag
    this.nCurnLevel = -1;
};

objectiveboard.prototype = {
    Reset   : function (level){
        //Temp Variable
        var tmpI;
        var tmpTotalObj = objLevelData[level].target.length;

        //Hide First
        for(tmpI = 0 ; tmpI < this.arrFruitObj1.length ; tmpI++){
            this.arrFruitObj1[tmpI].visible = false;
            this.arrFruitObj2[tmpI].visible = false;
        }

        //Show and Set Position
        for(tmpI = 0 ; tmpI < tmpTotalObj ; tmpI++){
            //Set Type
            switch(objLevelData[level].target[tmpI][0]){
                case 10  :
                    this.arrFruitObj1[tmpI].frameName = 'obj-ceramic.png';
                    this.arrFruitObj1[tmpI].scale.setTo(0.6, 0.6);
                    break;
                case 14  :
                    this.arrFruitObj1[tmpI].frameName = 'obj-fruit14-body-normal.png';
                    this.arrFruitObj1[tmpI].scale.setTo(1.0, 1.0);
                    break;
                default  :
                    this.arrFruitObj1[tmpI].frameName = 'obj-fruit' + objLevelData[level].target[tmpI][0].toString() + '.png';
                    this.arrFruitObj1[tmpI].scale.setTo(1.0, 1.0);
                    break;
            }

            //Set Total
            this.arrFruitObj2[tmpI].text = 'x ' + objLevelData[level].target[tmpI][1].toString();
            this.arrFruitObj2[tmpI].updateTransform();
            this.arrFruitObj2[tmpI].x = 60 - (this.arrFruitObj2[tmpI].textWidth * 0.5) + (tmpI * 70);

            //Set visibility
            this.arrFruitObj1[tmpI].visible = true;
            this.arrFruitObj2[tmpI].visible = true;
        }
        this.objFruitGroup.x = (330 - (66 * tmpTotalObj)) * 0.5;

        //Set Move Text
        this.txtAvailableMove.text = 'MOVES : ' + objLevelData[level].move.toString();
        this.txtAvailableMove.updateTransform();
        this.txtAvailableMove.x = 172 - (this.txtAvailableMove.textWidth * 0.5);

        //Set Star
        for(tmpI = 0 ; tmpI < this.arrObjEmpty.length ; tmpI++){
            this.arrObjEmpty[tmpI].visible = false;
        }

        for(tmpI = 2 ; tmpI >= objGameSave.lvStats[level] ; tmpI--){
            this.arrObjEmpty[tmpI].visible = true;
        }

        //Set Title Text
        this.txtTitle.text = 'STAGE ' + (level + 1).toString();

        //Set Flag
        this.nCurnLevel = level;

        //Set High Score
        this.txtBestValue.text = objGameSave.bestScore[level].toString();
        this.objBestGroupBoard.x = (this.objBoard.width - this.objBestGroupBoard.width) * 0.5;
    },

    Destroy : function () {
        //##.Add Object
        //b.bg
        this.objBG1.destroy();
        this.objBG1 = null;

        this.objBG2.destroy();
        this.objBG2 = null;

        this.objBG3.destroy();
        this.objBG3 = null;

        //c.title
        this.txtTitle.destroy();
        this.txtTitle = null;

        //d.Text and Line Separator
        this.objLineSeparator.destroy();
        this.objLineSeparator = null;

        this.txtCollect.destroy();
        this.txtCollect = null;

        this.txtAvailableMove.destroy();
        this.txtAvailableMove = null;

        //e.level info
        for(var tmpI = 0 ; tmpI < this.arrFruitObj1.length ; tmpI++){
            this.arrFruitObj1[tmpI].destroy();
            this.arrFruitObj1[tmpI] = null;

            this.arrFruitObj2[tmpI].destroy();
            this.arrFruitObj2[tmpI] = null;
        }

        this.arrFruitObj1 = [];
        this.arrFruitObj2 = [];

        this.objFruitGroup.removeAll();
        this.objFruitGroup.destroy();
        this.objFruitGroup = null;

        //f.button
        objGameModule.DestroyButton(this.btnPlay);

        //g.star
        for(tmpI = 0 ; tmpI < 3 ; tmpI++){
            this.arrObjShiny[tmpI].destroy();
            this.arrObjShiny[tmpI] = null;

            this.arrObjStar[tmpI].destroy();
            this.arrObjStar[tmpI] = null;

            this.arrObjEmpty[tmpI].destroy();
            this.arrObjEmpty[tmpI] = null;
        }

        this.arrObjShiny = [];
        this.arrObjStar = [];
        this.arrObjEmpty = [];

        //h.Best Score
        this.objBestGroupBoard.removeAll();
        this.objBestGroupBoard.destroy();
        this.objBestGroupBoard = null;

        this.txtBestTitle.destroy();
        this.txtBestTitle = null;

        this.txtBestValue.destroy();
        this.txtBestValue = null;

        //a.main board
        this.objBoard.removeAll();
        this.objBoard.destroy();
        this.objBoard = null;

        //Create Group and Add to Parent
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(objectiveboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(objectiveboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(objectiveboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 8/26/2014.
 */

/**
 * Constructor and Main Handler
 */
particlestar = function(){
    //Create Group
    this.objGroup = game.add.group();

    //Create Star
    this.arrStar = [];
    this.CreateStar(-80, -20,  -75);
    this.CreateStar( 18,  40, -175);
    this.CreateStar( 72, -40,  100);
    this.CreateStar(-22, -95,    0);

    //Deactivate Object First
    this.Deactivate();
};

particlestar.prototype = {
    //PRIVATE HANDLING
    CreateStar : function(cx, cy, cangle){
        var tmpObj;

        tmpObj = game.add.sprite(0, 0, 'atlas-ingameanim2');
        tmpObj.animations.add('ParticleStar');
        tmpObj.x = cx;
        tmpObj.y = cy;
        tmpObj.angle = cangle;
        this.objGroup.add(tmpObj);
        this.arrStar.push(tmpObj);
    },

    //PUBLIC HANDLING
    Play : function(cx, cy){
        //Temp Variable
        var tmpI;

        //Set Position
        this.objGroup.x = cx;
        this.objGroup.y = cy;

        //Play all the animation
        for(tmpI = 0 ; tmpI < this.arrStar.length ; tmpI++){
            this.arrStar[tmpI].animations.play('ParticleStar', 30, false).onComplete.add(function(){
                if(this.fOnUse){
                    if(this.objGroup.parent != null){
                        this.objGroup.parent.remove(this.objGroup);
                    }
                    this.Deactivate();
                }
            }, this);
        }
    },

    Activate : function(){
        this.fOnUse = true;
        this.objGroup.visible = true;
    },

    Deactivate : function(){
        if(this.objGroup.parent != null){
            this.objGroup.parent.remove(this.objGroup);
        }

        this.fOnUse = false;
        this.objGroup.visible = false;
    },

    Destroy : function () {
        //Temp Variable;
        var tmpI;

        //Destroy All Stars
        for(tmpI = 0 ; tmpI < this.arrStar.length ; tmpI++){
            this.arrStar[tmpI].destroy();
            this.arrStar[tmpI] = null;
        }
        this.arrStar = [];

        //Destroy Group
        if(this.objGroup.parent != null){
            this.objGroup.parent.remove(this.objGroup);
        }
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(particlestar.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(particlestar.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(particlestar.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 8/26/2014.
 */

/**
 * Constructor and Main Handler
 */
pauseboard = function(parent, clickListener, clickContext){

    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    //##.Add Object
    //a.main board
    this.objBoard = game.add.group();
    this.objGroup.add(this.objBoard);

    //b.bg
    this.objBG1 = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBG1.frameName = 'obj-boardbg1.png';
    this.objBG1.scale.setTo(1.85, 1.88);
    this.objBoard.add(this.objBG1);

    this.objBG2 = game.add.sprite(40, -16, 'atlas-ingamestatic');
    this.objBG2.frameName = 'obj-boardbg2.png';
    this.objBoard.add(this.objBG2);

    this.objBG3 = game.add.sprite(28, 64, 'atlas-ingamestatic');
    this.objBG3.frameName = 'obj-boardbg3.png';
    this.objBG3.scale.setTo(1.55, 1.30);
    this.objBoard.add(this.objBG3);

    //c.title
    this.txtTitle = game.add.bitmapText(122, 0, 'fnt-berlin','PAUSE', 35);
    this.objBoard.add(this.txtTitle);

    //d.button
    this.btnResume    = objGameModule.CreateButton( 98, 260, 0.5, 0.5, this.objBoard, 'atlas-ingamestatic', 'btn-resume.png'    , 'Resume'    , clickListener, clickContext);
    this.btnQuit      = objGameModule.CreateButton(268, 260, 0.5, 0.5, this.objBoard, 'atlas-ingamestatic', 'btn-quit.png'      , 'BackToMenu', clickListener, clickContext);
    this.btnRetry     = objGameModule.CreateButton( 98, 325, 0.5, 0.5, this.objBoard, 'atlas-ingamestatic', 'btn-retry.png'     , 'Restart'   , clickListener, clickContext);
    this.btnMoreGames = objGameModule.CreateButton(268, 325, 0.5, 0.5, this.objBoard, 'atlas-ingamestatic', 'btn-moregames.png' , 'MoreGames' , clickListener, clickContext);

    //e.BGM and SFX
    this.objSoundMenu = game.add.sprite(37, 80, 'atlas-ingamestatic');
    this.objSoundMenu.frameName = 'obj-soundmenu.png';
    this.objBoard.add(this.objSoundMenu);

    this.btnBGMOff = game.add.sprite(172, 83, 'atlas-ingamestatic');
    this.btnBGMOff.frameName = 'btn-off-dark.png';
    this.btnBGMOff.name = "BGM-off";
    this.btnBGMOff.inputEnabled = true;
    this.btnBGMOff.events.onInputDown.add(this.ClickHandler, this);
    this.objBoard.add(this.btnBGMOff);

    this.btnBGMOn = game.add.sprite(250, 83, 'atlas-ingamestatic');
    this.btnBGMOn.frameName = 'btn-on-dark.png';
    this.btnBGMOn.name = "BGM-on";
    this.btnBGMOn.inputEnabled = true;
    this.btnBGMOn.events.onInputDown.add(this.ClickHandler, this);
    this.objBoard.add(this.btnBGMOn);

    this.btnSFXOff = game.add.sprite(172, 139, 'atlas-ingamestatic');
    this.btnSFXOff.frameName = 'btn-off-dark.png';
    this.btnSFXOff.name = "SFX-off";
    this.btnSFXOff.inputEnabled = true;
    this.btnSFXOff.events.onInputDown.add(this.ClickHandler, this);
    this.objBoard.add(this.btnSFXOff);

    this.btnSFXOn = game.add.sprite(250, 139, 'atlas-ingamestatic');
    this.btnSFXOn.frameName = 'btn-on-dark.png';
    this.btnSFXOn.name = "SFX-on";
    this.btnSFXOn.inputEnabled = true;
    this.btnSFXOn.events.onInputDown.add(this.ClickHandler, this);
    this.objBoard.add(this.btnSFXOn);

    this.fBGMEnabled = objGameSave.music;
    this.fSFXEnabled = objGameSave.sfx;
    this.RefreshSoundState();

    //##.Set Position
    this.objBoard.x = -this.objBG1.width * 0.5;
    this.objBoard.y = -this.objBG1.height * 0.5;
};

pauseboard.prototype = {
    RefreshSoundState : function(){
        //Set button BGM Visibility
        this.btnBGMOn.visible = !this.fBGMEnabled;
        this.btnBGMOff.visible = this.fBGMEnabled;

        //Set button SFX Visibility
        this.btnSFXOn.visible = !this.fSFXEnabled;
        this.btnSFXOff.visible = this.fSFXEnabled;

        objAudioHandler.resetVolSFX();
        objAudioHandler.resetVolBGM();
    },

    ClickHandler : function(sprite){
        switch(sprite.name){
            case "BGM-off" :
                objGameSave.music = this.fBGMEnabled = false;
                this.RefreshSoundState();
                break;
            case "BGM-on"  :
                objGameSave.music = this.fBGMEnabled = true;
                this.RefreshSoundState();
                break;
            case "SFX-off" :
                objGameSave.sfx = this.fSFXEnabled = false;
                this.RefreshSoundState();
                break;
            case "SFX-on"  :
                objGameSave.sfx = this.fSFXEnabled = true;
                this.RefreshSoundState();
                break;
            case "MoreGames" :
                sprite.scale.setTo(0.96, 0.96);
                urlMoreGames.action();
                          break;
        }

        //Save Game
        objGameStorage.setItem(fSaveID, JSON.stringify(objGameSave));
    },

    Destroy : function () {
        //b.bg
        this.objBG1.destroy();
        this.objBG1 = null;

        this.objBG2.destroy();
        this.objBG2 = null;

        this.objBG3.destroy();
        this.objBG3 = null;

        //c.title
        this.txtTitle.destroy();
        this.txtTitle = null;

        //d.button
        objGameModule.DestroyButton(this.btnResume);
        this.btnResume    = null;

        objGameModule.DestroyButton(this.btnQuit);
        this.btnQuit      = null;

        objGameModule.DestroyButton(this.btnRetry);
        this.btnRetry     = null;

        objGameModule.DestroyButton(this.btnMoreGames);
        this.btnMoreGames = null;

        //e.BGM and SFX
        this.objSoundMenu.destroy();
        this.objSoundMenu = null;

        this.btnBGMOff.destroy();
        this.btnBGMOff = null;

        this.btnBGMOn.destroy();
        this.btnBGMOn = null;

        this.btnSFXOff.destroy();
        this.btnSFXOff = null;

        this.btnSFXOn.destroy();
        this.btnSFXOn = null;

        //##.Set Position
        this.objBoard.removeAll();
        this.objBoard.destroy();
        this.objBoard = null;

        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(pauseboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(pauseboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(pauseboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 8/26/2014.
 */

/**
 * Constructor and Main Handler
 */
piece = function(){
    //Create Group
    this.objGroup = game.add.group();

    //Create Piece
    this.objPiece = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objPiece.anchor.setTo(0.5, 1);
    this.objGroup.add(this.objPiece);

    this.objEyes = game.add.sprite(0, 0, 'atlas-ingameanim1');
    this.objEyes.animations.add('AnimEyes1', Phaser.Animation.generateFrameNames('ingame-eyes instance 1',  0,  8, '', 4), 30, true);
    this.objEyes.animations.add('AnimEyes2', Phaser.Animation.generateFrameNames('ingame-eyes instance 1',  9, 17, '', 4), 30, true);
    this.objEyes.animations.add('AnimEyes3', Phaser.Animation.generateFrameNames('ingame-eyes instance 1', 18, 24, '', 4), 30, true);
    this.objEyes.animations.add('AnimEyes4', Phaser.Animation.generateFrameNames('ingame-eyes instance 1', 25, 32, '', 4), 30, true);
    this.objEyes.animations.add('AnimEyes5', Phaser.Animation.generateFrameNames('ingame-eyes instance 1', 33, 40, '', 4), 30, true);
    this.objEyes.anchor.setTo(0.5, 0);
    this.objEyes.visible = false;
    this.objGroup.add(this.objEyes);

    //Param
    this.nStartY = 0;
    this.nRow    = 0;
    this.nCol    = 0;
    this.nDir    = -1;
    this.nType   = -1;
    this.objHintTween = null;

    //Deactivate Object First
    this.Deactivate();
};

piece.prototype = {
    Reset : function(ctype, cx, cy, crow, ccol){
        //Set Flag
        this.nStartY = this.objPiece.height * 0.5;
        this.nRow = crow;
        this.nCol = ccol;
        this.nType = ctype;

        //Set Piece
        this.objPiece.frameName = 'obj-fruit' + ctype.toString() + '-body-normal.png';

        //Hide Hint If Exists
        this.HideHint();

        //Stop Blob Piece
        this.BlobPiece(false);

        switch(ctype){
            case 11  :
                //Set Piece
                this.objPiece.anchor.setTo(0.5, 0.5);
                this.objPiece.x = 1;
                this.objPiece.y = -(this.objPiece.height * 0.5);

                var tmpEnable = [];
                if(this.nRow < 5){
                    if(this.nCol < 3){
                        tmpEnable = [3, 2];
                    } else {
                        tmpEnable = [3, 4];
                    }
                } else {
                    if(this.nCol < 4){
                        tmpEnable = [0, 1];
                    } else {
                        tmpEnable = [0, 5];
                    }
                }

                this.nDir = tmpEnable[objGameModule.RandomRangeInt(0, tmpEnable.length - 1)];
                this.objPiece.angle = EXPLOSION_ANGLE[this.nDir];

                this.BlobPiece(true);

                //Set Eyes
                this.objEyes.visible = false;
                break;
            case 10  :
                //Set Piece
                this.objPiece.anchor.setTo(0.5, 0.5);
                this.objPiece.rotation = 0;
                this.objPiece.x = 1;
                this.objPiece.y = -(this.objPiece.height * 0.5);

                this.BlobPiece(true);

                //Set Eyes
                this.objEyes.visible = false;
                break;
            case 13 :
            case 14 :
                //Set Piece
                this.objPiece.anchor.setTo(0.5, 1);
                this.objPiece.rotation = 0;
                this.objPiece.x = this.objPiece.y = 0;

                //Set Eyes
                this.objEyes.visible = false;
                break;
            default :
                //Set Piece
                this.objPiece.anchor.setTo(0.5, 1);
                this.objPiece.rotation = 0;
                this.objPiece.x = this.objPiece.y = 0;

                //Set Eyes
                this.objEyes.visible = true;
                this.objEyes.animations.play('AnimEyes' + this.nType.toString(), 30, false);
                this.objEyes.x = EYES_POSX[ctype - 1];
                this.objEyes.y = EYES_POSY[ctype - 1];
                break;
        }

        //Set Position
        this.objGroup.x = cx;
        this.objGroup.y = cy + this.nStartY;
    },

    ReleaseObstacle : function(){
        //Set Flag
        this.nType = 14

        //Change It
        game.add.tween(this.objGroup.scale).to({x : 0.3, y : 0.3}, 150, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
            this.objPiece.frameName = 'obj-fruit14-body-normal.png';

            game.add.tween(this.objGroup.scale).to({x : 1, y : 1}, 350, Phaser.Easing.Elastic.Out, true);
        }, this);
    },

    ForceChange : function(ctype){
      //Set Flag
      this.nType = ctype

      //Change It
      game.add.tween(this.objGroup.scale).to({x : 0, y : 0}, 150, Phaser.Easing.Quadratic.Out, true, 250).onComplete.add(function(){
          this.objPiece.frameName = 'obj-fruit' + ctype.toString() + '-body-normal.png';

          this.objEyes.animations.play('AnimEyes' + ctype.toString(), 30, false);
          this.objEyes.x = EYES_POSX[ctype - 1];
          this.objEyes.y = EYES_POSY[ctype - 1];

          //Stop Blob Piece
          this.BlobPiece(false);

          game.add.tween(this.objGroup.scale).to({x : 1, y : 1}, 400, Phaser.Easing.Elastic.Out, true);
      }, this)
    },

    Blink : function(){
        if(this.objEyes == null || !this.objEyes.visible)    return;

        this.objEyes.animations.play('AnimEyes' + this.nType.toString(), 30, false);
    },

    BlobPiece : function(enable){
        if(this.objPiece == null)   return;

        switch (enable){
            case false :
                objGameModule.StopTweens(this.objPiece.scale);
                break;
            case true  :
                if(this.nType < 10){
                    this.BlobPiece(false);
                    return;
                }
                game.add.tween(this.objPiece.scale).to({x : 1.0, y : 1.0}, 300, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                    game.add.tween(this.objPiece.scale).to({x : 0.96, y : 0.96}, 300, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                        this.BlobPiece(true);
                    }, this)
                }, this)
                break;
        }
    },

    Drop : function(cx, cy, cdropdelay){
        //Just Recheck, Stop The Tween and Reset Some Flag
        this.objGroup.alpha = 1;

        //Just Stop The Tween If Exists
        objGameModule.StopTweens(this.objGroup);

        //Set Drop Tween-Sequence
        game.add.tween(this.objGroup).to({x : cx, y : (cy + this.nStartY)}, cdropdelay, Phaser.Easing.Quadratic.In, true).onComplete.add(function(){
            game.add.tween(this.objGroup.scale).to({x : 1.2, y : 0.6}, 80, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                game.add.tween(this.objGroup.scale).to({x : 0.85, y : 1.15}, 100, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                    game.add.tween(this.objGroup.scale).to({x : 1.0, y : 1.0}, 100, Phaser.Easing.Linear.None, true);
                    this.Blink();
                }, this);
            }, this);
        }, this);
    },

    ShowHint : function(){
        if(this.objHintTween != null)   return;

        this.objHintTween = game.add.tween(this.objGroup).to({alpha : 0.1}, 500, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    },

    HideHint : function(){
        this.objGroup.alpha = 1;

        if(this.objHintTween != null){
            this.objHintTween.stop();
            this.objHintTween = null;
        }
    },

    Select : function(){
        this.objPiece.frameName = 'obj-fruit' + this.nType.toString() + '-body-selected.png';

        switch(this.nType){
            case 1 :
                this.objPiece.y += 3.2;
                break;
            case 2 :
                this.objPiece.y += 2.8;
                break;
            case 3 :
                this.objPiece.y += 3;
                break;
            case 4 :
                this.objPiece.y += 3;
                break;
            case 5 :
                this.objPiece.y += 4;
                break;
        }
    },

    Deselect : function(){
        this.objPiece.frameName = 'obj-fruit' + this.nType.toString() + '-body-normal.png';

        switch(this.nType){
            case 1 :
                this.objPiece.y -= 3.2;
                break;
            case 2 :
                this.objPiece.y -= 2.8;
                break;
            case 3 :
                this.objPiece.y -= 3;
                break;
            case 4 :
                this.objPiece.y -= 3;
                break;
            case 5 :
                this.objPiece.y -= 4;
                break;
        }
    },

    Activate : function(){
        this.objGroup.visible = true;
        this.fOnUse = true;
    },

    Deactivate : function(){
        if(this.objGroup.parent != null){
            this.objGroup.parent.remove(this.objGroup);
        }
        this.objGroup.visible = false;
        this.fOnUse = false;
    },

    Destroy : function () {
        //Hide Hint First
        objGameModule.StopTweens(this.objGroup.scale);
        objGameModule.StopTweens(this.objGroup);

        //Destroy Piece
        objGameModule.StopTweens(this.objPiece.scale);
        objGameModule.StopTweens(this.objPiece);
        this.objPiece.destroy();
        this.objPiece = null;

        this.objEyes.destroy();
        this.objEyes = null;

        this.objHintTween = null

        //Destroy Group
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(piece.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(piece.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(piece.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 8/26/2014.
 */
/**
 * Constructor and Main Handler
 */
playboard = function(updtHandler, updtContext, parent){
    //##0.Create Obj Group and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    //##1.Prepare Variable
    //###a.Object
    this.arrTile = [];
    this.arrPiece = [];
    this.arrSwipeLine = [];

    //###b.Constants, Flag and Param
    //--Constants
    this.nTotalCol = 0;
    this.nTotalRow = 0;
    this.nWidth    = 0;
    this.nHeight   = 0;
    this.nDispositionX = 0;
    this.nDispositionY = 0;

    //--Flag
    this.justMakeItExplode = false;
    this.nControlState = ON_RELEASE;
    this.fEnableShowHint = true;

    this.arrPressedTile = [];
    this.arrHintPiecesID = [];
    this.arrSpawnBonusType = [];
    this.arrSpawnBonusItem = [];

    //--Param
    this.nLastPressedRow = -1;
    this.nLastPressedCol = -1;
    this.nLastPressedX  = 0;
    this.nLastPressedY  = 0;
    this.nLastPieceType = -1;
    this.nTimeBlink = 0;
    this.nTimeIdle  = 0;

    this.levelData = [];

    this.nShowTutor = -1;

    //##2.Register Delegate
    this.updateHandler = updtHandler;
    this.updateContext = updtContext;

    //##3.Add Event
    game.input.onUp.add(this.PieceReleaseHandler,this);
};

playboard.prototype = {
    /**
     *  Event Handling
     */
    PieceClickHandler : function(row, col){
        //Set Effect to Selected Object
        this.arrPiece[this.arrTile[row][col].nPieceID].Select();

        //Push to array
        this.arrPressedTile.push(this.arrTile[row][col]);

        switch(this.arrPiece[this.arrTile[row][col].nPieceID].nType){
            case 10 :
                //Do Nothing, Just Force Player Not To Start From Here
                this.nControlState = ON_DOWN;
                break;
            case 11 :
                objAudioHandler.playSFX('SFX_Bomb');
                this.justMakeItExplode = true;
                this.AddExplosionInLine(row, col, this.arrPiece[this.arrTile[row][col].nPieceID].nDir);
                this.PieceReleaseHandler();
                break;
            default :
                //Set Flag
                this.nControlState = ON_DOWN;
                this.nLastPressedRow = row;
                this.nLastPressedCol = col;
                this.nLastPressedX = this.arrTile[row][col].self.x;
                this.nLastPressedY = this.arrTile[row][col].self.y;
                this.nLastPieceType = this.arrPiece[this.arrTile[row][col].nPieceID].nType;
                break;
        }
    },

    PieceUpdateHandler : function(){
        if(this.arrPiece[this.arrPressedTile[0].nPieceID].nType >= 10)    return;

        //Temp Variable
        var tmpDistX, tmpDistY, tmpDist, tmpAngle;
        var tmpNextRow, tmpNextCol, tmpI, tmpJ, tmpK, tmpL, tmpM, tmpDir;

        //Calculate Distance First
        tmpDistX = (game.input.x - this.nDispositionX) - this.nLastPressedX;
        tmpDistY = (game.input.y - this.nDispositionY) - this.nLastPressedY;
        tmpDist  = Math.sqrt(tmpDistX * tmpDistX + tmpDistY * tmpDistY);

        //If distance was larger than standard radius, then :
        if(tmpDist > (TILE_WIDTH * 0.43)){
            //Get Angle
            tmpAngle = Math.atan2(tmpDistY, tmpDistX) * 180 / Math.PI;

            //Check Angle Range and Decide Which one should be done
            tmpNextCol = this.nLastPressedCol;
            tmpNextRow = this.nLastPressedRow;
            tmpI = (this.nLastPressedRow % 2);
            tmpJ = ((tmpI + 1) % 2);
            tmpDir = DIR_TOPNORM;
            if(tmpAngle > 0 && tmpAngle <= 60){
                tmpNextRow++;
                tmpNextCol += tmpI;
                tmpDir = DIR_BOTRIGHT;
            }
            else if(tmpAngle > 60 && tmpAngle <= 120){
                tmpNextRow += 2;
                tmpDir = DIR_BOTNORM;
            }
            else if (tmpAngle > 120 && tmpAngle <= 180){
                tmpNextRow++;
                tmpNextCol -= tmpJ;
                tmpDir = DIR_BOTLEFT;
            }
            else if(tmpAngle > -180 && tmpAngle <= -120){
                tmpNextRow--;
                tmpNextCol -= tmpJ;
                tmpDir = DIR_TOPLEFT;
            }
            else if(tmpAngle > -120 && tmpAngle <= -60){
                tmpNextRow -= 2;
                tmpDir = DIR_TOPNORM;
            }
            else if (tmpAngle > -60 && tmpAngle <= 0){
                tmpNextRow--;
                tmpNextCol += tmpI;
                tmpDir = DIR_TOPRIGHT;
            }

            tmpK = ((tmpNextRow % 2) == 0) ? this.nTotalCol : (this.nTotalCol - 1);
            if(tmpNextRow >= 0 && tmpNextRow < this.nTotalRow && tmpNextCol >= 0 && tmpNextCol < tmpK){
                if(this.arrTile[tmpNextRow][tmpNextCol].nPieceID != -1){
                    tmpL = this.arrPressedTile.indexOf(this.arrTile[tmpNextRow][tmpNextCol]);
                    if(tmpL == -1){
                        tmpM = this.arrPiece[this.arrTile[tmpNextRow][tmpNextCol].nPieceID].nType;
                        if(this.nLastPieceType == 10 || tmpM == 10 || this.nLastPieceType >=  13 || tmpM >= 13 || tmpM == this.nLastPieceType) {
                            //Reset Flag
                            if(tmpM < 10){
                                this.nLastPieceType = tmpM;
                            }

                            //Add Swipe Direction
                            var tmpLine = objLinePooler.CallObject(this.objGroup);
                            tmpLine.Reset(this.nLastPressedX, this.nLastPressedY, tmpDir, this.arrSwipeLine.length + 1, true);

                            //Deactivate Previous Line Number
                            if(this.arrSwipeLine.length > 0){
                                this.arrSwipeLine[this.arrSwipeLine.length - 1].HideLast();
                            }

                            //Push to Array
                            this.arrSwipeLine.push(tmpLine);

                            //Set Effect to Selected Object
                            this.arrPiece[this.arrTile[tmpNextRow][tmpNextCol].nPieceID].Select();

                            //Push to array and press the tile
                            this.nLastPressedRow = tmpNextRow;
                            this.nLastPressedCol = tmpNextCol;
                            this.arrTile[tmpNextRow][tmpNextCol].Press();
                            this.nLastPressedX = this.arrTile[tmpNextRow][tmpNextCol].self.x;
                            this.nLastPressedY = this.arrTile[tmpNextRow][tmpNextCol].self.y;
                            this.arrPressedTile.push(this.arrTile[tmpNextRow][tmpNextCol]);
                        }
                    } else {
                        if(tmpL == this.arrPressedTile.length - 2){
                            //Reset Flag
                            this.nLastPressedRow = this.arrPressedTile[tmpL].nRow;
                            this.nLastPressedCol = this.arrPressedTile[tmpL].nCol;
                            this.nLastPressedX = this.arrPressedTile[tmpL].self.x;
                            this.nLastPressedY = this.arrPressedTile[tmpL].self.y;

                            //Remove Tile and Deselect
                            this.arrPiece[this.arrPressedTile[tmpL + 1].nPieceID].Deselect();
                            this.arrPressedTile[tmpL + 1].Release();
                            this.arrPressedTile.pop();

                            //Remove Line
                            this.arrSwipeLine.pop().Deactivate();
                            objLinePooler.Refresh();

                            //Hide Previous
                            if(this.arrSwipeLine.length > 0){
                                this.arrSwipeLine[this.arrSwipeLine.length - 1].ShowLast(this.arrSwipeLine.length + 1);
                            } else {
                                this.nLastPieceType = this.arrPiece[this.arrPressedTile[0].nPieceID].nType;
                            }
                        }
                    }
                }
            } else {
                //if(this.game.device.desktop){
                //    this.PieceReleaseHandler();
                //}
            }
        }

    },

    PieceReleaseHandler : function(){
        //Temp Variable
        var tmpI, tmpJ, tmpParticle;
        var tmpIsBreakCeramic = false;

        var tmpArrFruitTp = [];
        var tmpArrFruitCx = [];
        var tmpArrFruitCy = [];

        //Remove Pressed Effect
        for(tmpI = 0 ; tmpI < this.arrPressedTile.length ; tmpI++){
            this.arrPressedTile[tmpI].Release();
        }

        //Remove Swipe Line
        for(tmpI = 0 ; tmpI < this.arrSwipeLine.length ; tmpI++){
            this.arrSwipeLine[tmpI].Deactivate();
            this.arrSwipeLine[tmpI] = null;
        }
        objLinePooler.Refresh();
        this.arrSwipeLine = [];

        //Deselect All Object
        for(tmpI = 0 ; tmpI < this.arrPressedTile.length ; tmpI++){
            this.arrPiece[this.arrPressedTile[tmpI].nPieceID].Deselect();
        }

        //Explosion Calculation
        var tmpTotalExplosion = this.arrPressedTile.length;
        if(tmpTotalExplosion >= 3 || this.justMakeItExplode){
            //Get Randomized Position
            tmpI = objGameModule.RandomRangeInt(0, this.arrPressedTile.length - 1);
            tmpCx = this.arrPressedTile[tmpI].x + this.objGroup.x;
            tmpCy = this.arrPressedTile[tmpI].y + this.objGroup.y;

            //Reset Hint
            for(tmpI = 0 ; tmpI < this.arrHintPiecesID.length ; tmpI++){
                this.arrPiece[this.arrHintPiecesID[tmpI]].HideHint();
            }
            this.arrHintPiecesID = [];
            this.nTimeIdle = 0;

            //Explode Object
            for(tmpI = 0 ; tmpI < this.arrPressedTile.length ; tmpI++){
                //Broke the board
                if(this.arrPressedTile[tmpI].nType == 2){
                    tmpIsBreakCeramic = true;

                    //To Do : Add Tile-Broke Effect
                    this.arrPressedTile[tmpI].BreakTheCeramic();

                    //Call Piece Collect Event in Game-State
                    tmpArrFruitTp.push(10);
                    tmpArrFruitCx.push(this.arrPressedTile[tmpI].x + this.objGroup.x);
                    tmpArrFruitCy.push(this.arrPressedTile[tmpI].y + this.objGroup.y);
                }

                if (this.arrPiece[this.arrPressedTile[tmpI].nPieceID].nType == 13){
                    this.arrPiece[this.arrPressedTile[tmpI].nPieceID].ReleaseObstacle();
                } else {
                    if(this.arrPiece[this.arrPressedTile[tmpI].nPieceID].nType == 10){
                        //P.S : Auto Push to Pressed Tile
                        this.AddExplosionInArea(this.arrPressedTile[tmpI].nRow, this.arrPressedTile[tmpI].nCol, this.arrPiece[this.arrPressedTile[tmpI].nPieceID].nDir);
                    }
                    else if(this.arrPiece[this.arrPressedTile[tmpI].nPieceID].nType == 11){
                        //P.S : Auto Push to Pressed Tile
                        this.AddExplosionInLine(this.arrPressedTile[tmpI].nRow, this.arrPressedTile[tmpI].nCol, this.arrPiece[this.arrPressedTile[tmpI].nPieceID].nDir);
                    }

                    //Push To Array
                    switch(this.arrPiece[this.arrPressedTile[tmpI].nPieceID].nType){
                        case 10 :
                        case 11 :
                            //Do Nothing
                            break;
                        default  :
                            tmpArrFruitTp.push(this.arrPiece[this.arrPressedTile[tmpI].nPieceID].nType);
                            tmpArrFruitCx.push(this.arrPressedTile[tmpI].x + this.objGroup.x);
                            tmpArrFruitCy.push(this.arrPressedTile[tmpI].y + this.objGroup.y);
                            break;
                    }

                    //Call Star Effect
                    tmpParticle = objParticlePooler.CallObject(this.objGroup);
                    tmpParticle.Play(this.arrPiece[this.arrPressedTile[tmpI].nPieceID].x, this.arrPiece[this.arrPressedTile[tmpI].nPieceID].y);

                    //Remove Piece Reference and Object
                    this.arrPiece[this.arrPressedTile[tmpI].nPieceID].Deactivate();
                    this.arrPiece[this.arrPressedTile[tmpI].nPieceID] = null;
                    this.arrPressedTile[tmpI].nPieceID = -1;
                }
            }

            //Call Piece Collect Event in Game-State
            this.updateHandler.apply(this.updateContext, ['piece-collect', [tmpArrFruitTp, tmpArrFruitCx, tmpArrFruitCy, tmpTotalExplosion]]);

            //Play SFX
            objAudioHandler.playSFX('SFX_Explode');

            if(tmpIsBreakCeramic){
                console.log("PLAY");
                objAudioHandler.playSFX('SFX_Wood');
            }


            //Fill the board again
            //Get Explosion
            if(!this.justMakeItExplode && tmpTotalExplosion >= 4){
                if(nGameLevel >= 5){
                    var tmpN = objGameModule.RandomRangeInt(1, tmpTotalExplosion - 3);
                    for(tmpJ = 0 ; tmpJ < tmpN ; tmpJ++){
                        this.arrSpawnBonusType.push(objGameModule.RandomRangeInt(10, 11));
                        this.arrSpawnBonusItem.push(tmpTotalExplosion - tmpJ);
                    }
                } else if(nGameLevel >= 4){
                    this.arrSpawnBonusType.push(10);
                    this.arrSpawnBonusItem.push(1);
                }
                else if(nGameLevel >= 2){
                    this.arrSpawnBonusType.push(11);
                    this.arrSpawnBonusItem.push(1);
                }
            }

            this.FillTheBoard();

            //Ask for info update
            if(!this.justMakeItExplode){
                this.updateHandler.apply(this.updateContext, ['move-released']);
            }

            //Clear The Pool
            objPiecePooler.Refresh();

            //Just Reset Show Hint, If There're Explosion Happened
            this.fEnableShowHint = true;
        }

        //Remove Reference
        this.arrPressedTile = [];

        //Reset Flag
        this.justMakeItExplode = false;
        this.nControlState = ON_RELEASE;
        this.nLastPieceType = -1;
        this.nPressedCol = -1;
        this.nPressedRow = -1;
    },

    /**
     *  Common Handling
     */
    Start : function(row, col, levelData){
        //Temp Variable
        var tmpI, tmpJ, tmpK, tmpL;
        var tmpRow, tmpCol, tmpCx, tmpCy, tmpTile;

        var tmpTileCeramic = false;
        var tmpTileSpecialFruits = false;

        //##1.Initialize All Tile and Piece on the board
        tmpRow = row;
        tmpCol = col;

        for(tmpI = 0 ; tmpI < tmpRow ; tmpI++) {
            if (tmpI % 2 == 0) {
                tmpL = tmpCol;
                tmpK = 0.5;
            } else {
                tmpL = tmpCol - 1;
                tmpK = 1.25;
            }
            tmpCy = (tmpI + 1) * 0.5 * TILE_HEIGHT;

            this.arrTile.push([]);
            this.levelData = levelData;
            for(tmpJ = 0 ; tmpJ < tmpL ; tmpJ++){
                tmpCx = (tmpJ * 1.5 + tmpK) * TILE_WIDTH;
                tmpTile = new tile(this.objGroup, this.levelData[tmpI][tmpJ], tmpCx, tmpCy, tmpI, tmpJ, this.PieceClickHandler, this);
                this.arrTile[tmpI].push(tmpTile);

                switch(this.levelData[tmpI][tmpJ]){
                    case 2 :
                        tmpTileCeramic = true;
                        break;
                    case 3 :
                        tmpTileSpecialFruits = true;
                        break;
                }
            }
        }

        //##2.Reset Flag and Object
        //--Unchangeable Flag and Param
        this.nTotalCol = tmpCol;
        this.nTotalRow = tmpRow;
        this.nWidth  = (tmpCol * TILE_WIDTH) + ((tmpCol - 1) * (TILE_WIDTH * 0.5));
        this.nHeight = (((tmpRow - 1) / 2) + 1) * TILE_HEIGHT;
        this.nDispositionX = 0;
        this.nDispositionY = 0;

        //--Changeable Flag and Param
        this.nControlState = ON_RELEASE;
        this.fEnableShowHint = true;
        this.nLastPressedRow = -1;
        this.nLastPressedCol = -1;
        this.nLastPressedX  = 0;
        this.nLastPressedY  = 0;
        this.nLastPieceType = -1;
        this.nTimeBlink = 0;
        this.nTimeIdle  = 0;

        //##0.Special For Tutorial
        switch(nGameLevel){
            case 2 :
                this.arrSpawnBonusType.push(11);
                this.arrSpawnBonusItem.push(1);
                if(this.nShowTutor == -1){
                    this.nShowTutor = 0;
                }
                break;
            case 4 :
                this.arrSpawnBonusType.push(10);
                this.arrSpawnBonusItem.push(1);
                if(this.nShowTutor == -1){
                    this.nShowTutor = 0;
                }
                break;
        }

        //##4.Fill the board
        this.FillTheBoard();
    },

    Restart : function(){
        //Temp Variable
        var tmpI, tmpJ;

        //##1.Hint
        for(tmpI = 0 ; tmpI < this.arrHintPiecesID.length ; tmpI++){
            this.arrPiece[this.arrHintPiecesID[tmpI]].HideHint()
        }
        this.arrHintPiecesID = [];

        //##2.Line
        for(tmpI = 0 ; tmpI < this.arrSwipeLine.length ; tmpI++){
            this.arrSwipeLine[tmpI].Deactivate();
            this.arrSwipeLine[tmpI] = null;
        }
        this.arrSwipeLine = [];

        //##3.Piece
        for(tmpI = 0 ; tmpI < this.arrPiece.length ; tmpI++){
            if(this.arrPiece[tmpI] != null){
                this.arrPiece[tmpI].Deactivate();
                this.arrPiece[tmpI] = null;
            }
        }
        this.arrPiece = [];

        //##4.Tile
        for(tmpI = 0 ; tmpI < this.arrTile.length ; tmpI++){
            for(tmpJ = 0 ; tmpJ < this.arrTile[tmpI].length ; tmpJ++){
                this.arrTile[tmpI][tmpJ].Reset(this.levelData[tmpI][tmpJ]);
            }
        }
        this.arrPressedTile = [];

        //##5.Refresh Flag
        this.nControlState = ON_RELEASE;
        this.fEnableShowHint = true;
        this.nLastPressedRow = -1;
        this.nLastPressedCol = -1;
        this.nLastPressedX  = 0;
        this.nLastPressedY  = 0;
        this.nLastPieceType = -1;
        this.nTimeBlink = 0;
        this.nTimeIdle  = 0;
        this.nShowTutor = -1;
        this.arrSpawnBonusType = [];
        this.arrSpawnBonusItem = [];

        //##0.Special For Tutorial
        if(nGameLevel == 4){
            this.arrSpawnBonusType.push(10);
            this.arrSpawnBonusItem.push(1);
            if(this.nShowTutor == -1){
                this.nShowTutor = 0;
            }
        }
        else if(nGameLevel == 2){
            this.arrSpawnBonusType.push(11);
            this.arrSpawnBonusItem.push(1);
            if(this.nShowTutor == -1){
                this.nShowTutor = 0;
            }
        }

        //##6.Fill the board
        this.FillTheBoard();
    },

    CreateNewPiece : function(row, col, rec){
        var tmpI, tmpJ, tmpK, tmpCx, tmpCy, tmpType, tmpPiece;

        for(tmpJ = 0 ; tmpJ <= rec ; tmpJ++){
            tmpCx = this.arrTile[row][col].x;
            tmpCy = this.arrTile[row][col].y - ((rec - tmpJ + 1) * TILE_HEIGHT);

            if(this.arrTile[row + (tmpJ * 2)][col].nType == 3){
                tmpType = 13;
                this.arrTile[row + (tmpJ * 2)][col].nType = 1;
            } else {
                tmpK = this.arrSpawnBonusItem.length;
                if(tmpK > 0){
                    if(--this.arrSpawnBonusItem[tmpK - 1] <= 0){
                        tmpType = this.arrSpawnBonusType.pop();
                        this.arrSpawnBonusItem.pop();
                    } else{
                        tmpType = objLevelData[nGameLevel].avail[objGameModule.RandomRangeInt(0, objLevelData[nGameLevel].avail.length - 1)];
                    }
                } else {
                    tmpType = objLevelData[nGameLevel].avail[objGameModule.RandomRangeInt(0, objLevelData[nGameLevel].avail.length - 1)];
                }
            }
            tmpPiece = objPiecePooler.CallObject(this.objGroup);
            tmpPiece.Reset(tmpType, tmpCx, tmpCy, row + tmpJ, col);

            //Check Empty Piece In Array and Push to it
            for(tmpI = 0 ; tmpI < this.arrPiece.length ; tmpI++){
                if(this.arrPiece[tmpI] == null){
                    this.arrPiece[tmpI] = tmpPiece;
                    break;
                }
            }
            if(tmpI == this.arrPiece.length){
                this.arrPiece.push(tmpPiece);
            }

            //Tween the piece
            this.arrTile[row + (tmpJ * 2)][col].nPieceID = tmpI;
            this.arrPiece[tmpI].Drop(this.arrTile[row + (tmpJ * 2)][col].x, this.arrTile[row + (tmpJ * 2)][col].y, DROP_DELAY);
        }
    },

    DropThePiece : function(row, col, rec){
        //Temp Variable
        var tmpDropID = -1;

        if(row - 2 >= 0){
            if(this.arrTile[row - 2][col] != null){
                if(this.arrTile[row - 2][col].nPieceID != -1){
                    //Drop the Piece
                    tmpDropID = this.arrTile[row - 2][col].nPieceID;
                    this.arrTile[row - 2][col].nPieceID = -1;

                    //Tween the Piece
                    this.arrTile[row + (rec * 2)][col].nPieceID = tmpDropID;
                    this.arrPiece[tmpDropID].Drop(this.arrTile[row + (rec * 2)][col].x,this.arrTile[row + (rec * 2)][col].y, DROP_DELAY);

                    //Request New Piece
                    this.DropThePiece(row - 2, col, rec);
                } else {
                    switch(this.arrTile[row - 2][col].nType){
                        case 0 :
                            //Create New Piece
                            this.CreateNewPiece(row, col, rec);
                            break;
                        case 1 :
                        case 2 :
                        case 3 :
                            //Request New Piece
                            this.DropThePiece(row - 2, col, rec + 1);
                            break;
                    }
                }
            } else {
                //Create New Piece
                this.CreateNewPiece(row, col, rec);
            }
        } else {
            //Create New Piece
            this.CreateNewPiece(row, col, rec);
        }
    },

    FillTheBoard : function(ctype){
        //Temp Variable
        var tmpI, tmpJ, tmpK;

        //Push down all piece so everything was fit
        for(tmpI = (this.arrTile.length - 1) ; tmpI >= 0 ; tmpI--){
            for(tmpJ = 0 ; tmpJ < this.arrTile[tmpI].length ; tmpJ++){
                if(this.arrTile[tmpI][tmpJ] != null){
                    if(this.arrTile[tmpI][tmpJ].nType != 0 && this.arrTile[tmpI][tmpJ].nPieceID == -1){
                        this.DropThePiece(tmpI, tmpJ, 0);
                    }
                }
            }
        }

        //For Tutorial Delay
        game.add.tween(this.objGroup).to({}, 400, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            switch(nGameLevel){
                //Control + Objective
                case 0 :
                    switch(this.nShowTutor){
                        case -1 :
                            this.nShowTutor = 0;
                            this.updateHandler.apply(this.updateContext, ['show-tutor', 1]);
                            break;
                        case  0 :
                            this.nShowTutor = 1;
                            this.updateHandler.apply(this.updateContext, ['show-tutor', 6]);
                            break;
                        case 1  :
                            //Do Nothing
                            break;
                    }
                    break;
                //Directed Explosion
                case 2 :
                    if(this.nShowTutor == 0){
                        this.nShowTutor = 1;
                        this.updateHandler.apply(this.updateContext, ['show-tutor', 2]);
                    }
                    break;
                //Area Explosion
                case 4 :
                    if(this.nShowTutor == 0){
                        this.nShowTutor = 1;
                        this.updateHandler.apply(this.updateContext, ['show-tutor', 3]);
                    }
                    break;
                //Ceramic
                case 8 :
                    if(this.nShowTutor == -1){
                        this.nShowTutor = 0;
                        this.updateHandler.apply(this.updateContext, ['show-tutor', 4]);
                    }
                    break;
                //Pineapple
                case 12 :
                    if(this.nShowTutor == -1){
                        this.nShowTutor = 0;
                        this.updateHandler.apply(this.updateContext, ['show-tutor', 5]);
                    }
                    break;
            }
        }, this);

        //After Fill The Board, Check The Structure
        game.add.tween(this.objGroup).to({}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            //Check Stats
            this.CheckIsAnythingCanBeExplodedOrNot();
        }, this);
    },

    AddExplosionInArea : function(srow, scol, cdir){
        //Temp Variable
        var tmpI, tmpRow, tmpCol;
        var tmpColRep = [];
        var tmpRowRep = [];

        switch(srow % 2){
            case 0 :
                tmpColRep = [-1,  0,  0,  0,  0, -1];
                tmpRowRep = [-1, -2, -1,  1,  2,  1];
                break;
            case 1 :
                tmpColRep = [ 0,  0,  1,  1,  0,  0];
                tmpRowRep = [-1, -2, -1,  1,  2,  1];
                break;
        }

        for(tmpI = 0 ; tmpI < 6 ; tmpI++){
            tmpCol = scol + tmpColRep[tmpI];
            tmpRow = srow + tmpRowRep[tmpI];

            if(tmpCol >= 0 && tmpRow >= 0 && this.arrTile[tmpRow] != null && this.arrTile[tmpRow][tmpCol] != null){
                if(this.arrTile[tmpRow][tmpCol].nPieceID != -1 && this.arrPressedTile.indexOf(this.arrTile[tmpRow][tmpCol]) == -1){
                    this.arrPressedTile.push(this.arrTile[tmpRow][tmpCol]);
                }
            }
        }
    },

    AddExplosionInLine : function(srow, scol, cdir){
        //Temp Variable
        var tmpI, tmpJ;
        var tmpRow, tmpCol;
        var tmpBreak;

        //even, odd [genap, ganjil]
        var tmpColRep = [];
        var tmpRowRep = [];

        switch(cdir){
            case DIR_BOTLEFT  :
                tmpColRep = [-1,  0];
                tmpRowRep = [ 1,  1];
                break;
            case DIR_BOTNORM  :
                tmpColRep = [ 0,  0];
                tmpRowRep = [ 2,  2];
                break;
            case DIR_BOTRIGHT :
                tmpColRep = [ 0,  1];
                tmpRowRep = [ 1,  1];
                break;
            case DIR_TOPLEFT  :
                tmpColRep = [-1,  0];
                tmpRowRep = [-1, -1];
                break;
            case DIR_TOPNORM  :
                tmpColRep = [ 0,  0];
                tmpRowRep = [-2, -2];
                break;
            case DIR_TOPRIGHT :
                tmpColRep = [ 0,  1];
                tmpRowRep = [-1, -1];
                break;
        }

        //Loop It
        tmpRow = srow;
        tmpCol = scol;
        tmpBreak = false;
        do{
            //Do It
            tmpJ = tmpRow % 2;
            tmpCol += tmpColRep[tmpJ];
            tmpRow += tmpRowRep[tmpJ];

            if(tmpCol < 0 || tmpRow < 0 || this.arrTile[tmpRow] == null || this.arrTile[tmpRow][tmpCol] == null){
                tmpBreak = true;
            } else if(this.arrTile[tmpRow][tmpCol].nPieceID != -1 && this.arrPressedTile.indexOf(this.arrTile[tmpRow][tmpCol]) == -1){
                this.arrPressedTile.push(this.arrTile[tmpRow][tmpCol]);
            }
        } while(!tmpBreak);
    },

    ShowHint : function(){
        //Set Flag
        this.fEnableShowHint = false;

        //Temp Variable
        var tmpI, tmpJ;
        var tmpCheckedPieceID, tmpIsGroupFounded;
        var tmpPiecesNewList = [];

        //Reset Array
        this.arrHintPiecesID = [];

        //Iterate From Bottom Part For Checking
        for(tmpI = (this.arrTile.length - 1) ; tmpI >= 0 ; tmpI--){
            tmpIsGroupFounded = false;

            for(tmpJ = 0 ; tmpJ < this.arrTile[tmpI].length ; tmpJ++){
                if(this.arrTile[tmpI] != null && this.arrTile[tmpI][tmpJ] != null){
                    tmpCheckedPieceID = this.arrTile[tmpI][tmpJ].nPieceID;

                    //Push ID to Already-Checked List
                    if(tmpCheckedPieceID != -1){
                        tmpPiecesNewList = this.CheckPiecesLink(-1, this.arrPiece[tmpCheckedPieceID].nType, tmpI, tmpJ, []);
                        if(tmpPiecesNewList.length >= 3){
                            tmpIsGroupFounded = true;
                            break;
                        }
                    }
                }
            }

            if(tmpIsGroupFounded){
                this.arrHintPiecesID = tmpPiecesNewList;
                for(var tmpK = 0 ; tmpK < this.arrHintPiecesID.length ; tmpK++){
                    this.arrPiece[this.arrHintPiecesID[tmpK]].ShowHint();
                }
                return;
            }
        }
    },

    CheckIsAnythingCanBeExplodedOrNot : function(){
        //Temp Variable
        var tmpI, tmpJ;
        var tmpCheckedPieceID;
        var tmpPiecesNewList = [];

        for(tmpI = (this.arrTile.length - 1) ; tmpI >= 0 ; tmpI--){
            for(tmpJ = 0 ; tmpJ < this.arrTile[tmpI].length ; tmpJ++){
                if(this.arrTile[tmpI] != null && this.arrTile[tmpI][tmpJ] != null){
                    tmpCheckedPieceID = this.arrTile[tmpI][tmpJ].nPieceID;

                    //Push ID to Already-Checked List
                    if(tmpCheckedPieceID != -1){
                        tmpPiecesNewList = this.CheckPiecesLink(-1, this.arrPiece[tmpCheckedPieceID].nType, tmpI, tmpJ, []);
                        if(tmpPiecesNewList.length >= 3){
                            //Just Return
                            return;
                        }
                    }
                }
            }
        }

        //If Not Founded, Force To Change
        this.ForceChange();
    },

    ForceChange : function(){
        //Temp Variable
        var tmpI, tmpJ, tmpK, tmpL;
        var tmpRow, tmpCol, tmpKRow, tmpKCol;
        var tmpColRep = [];
        var tmpRowRep = [];
        var tmpUsableTile = [];
        var tmpAvailablePiece = [];

        //Get Usable Tile First
        for(tmpI = 0 ; tmpI < this.arrTile.length ; tmpI++){
            if(this.arrTile[tmpI] != null){
                for(tmpJ = 0 ; tmpJ < this.arrTile[tmpI].length ; tmpJ++){
                    if(this.arrTile[tmpI][tmpJ] != null && this.arrTile[tmpI][tmpJ].nPieceID != -1){
                        if(this.arrPiece[this.arrTile[tmpI][tmpJ].nPieceID].nType < 10){
                            tmpUsableTile.push(this.arrTile[tmpI][tmpJ]);
                        }
                    }
                }
            }
        }

        do{
            //Random 1 Usable Tile and Force It To Create The Link
            tmpK = objGameModule.RandomRangeInt(0, tmpUsableTile.length - 1);

            //Check Available Direction First
            tmpRow = tmpUsableTile[tmpK].nRow;
            tmpCol = tmpUsableTile[tmpK].nCol;

            for(tmpI = 0 ; tmpI < 6 ; tmpI++){
                tmpJ = tmpRow % 2;
                switch(tmpI){
                    case DIR_BOTLEFT  :
                        tmpColRep = [-1,  0];
                        tmpRowRep = [ 1,  1];
                        break;
                    case DIR_BOTNORM  :
                        tmpColRep = [ 0,  0];
                        tmpRowRep = [ 2,  2];
                        break;
                    case DIR_BOTRIGHT :
                        tmpColRep = [ 0,  1];
                        tmpRowRep = [ 1,  1];
                        break;
                    case DIR_TOPLEFT  :
                        tmpColRep = [-1,  0];
                        tmpRowRep = [-1, -1];
                        break;
                    case DIR_TOPNORM  :
                        tmpColRep = [ 0,  0];
                        tmpRowRep = [-2, -2];
                        break;
                    case DIR_TOPRIGHT :
                        tmpColRep = [ 0,  1];
                        tmpRowRep = [-1, -1];
                        break;
                }

                tmpKRow = tmpRow + tmpRowRep[tmpJ];
                tmpKCol = tmpCol + tmpColRep[tmpJ];

                if(this.arrTile[tmpKRow] != null && this.arrTile[tmpKRow][tmpKCol] != null){
                    if(this.arrTile[tmpKRow][tmpKCol].nPieceID != -1 && this.arrPiece[this.arrTile[tmpKRow][tmpKCol].nPieceID].nType < 10){
                        tmpAvailablePiece.push(this.arrTile[tmpKRow][tmpKCol].nPieceID);
                    }
                }
            }
        } while(tmpAvailablePiece.length < 2);

        //Force Change Specified Piece
        tmpJ = 0;
        tmpL = this.arrPiece[tmpUsableTile[tmpK].nPieceID].nType;
        do{
            //Random It
            tmpI = objGameModule.RandomRangeInt(0, tmpAvailablePiece.length - 1);

            //Force Change
            this.arrPiece[tmpAvailablePiece[tmpI]].ForceChange(tmpL);

            //Dispose Piece From List
            tmpAvailablePiece.splice(tmpI, 1);
        } while(++tmpJ < 2);
    },

    CheckPiecesLink : function(dir, type, row, col, pieceslist){
        //Temp Variable
        var tmpCheckedPieceID;
        var tmpPiecesNewList;

        if(this.arrTile[row] == null || this.arrTile[row][col] == null)
            return pieceslist;

        tmpCheckedPieceID = this.arrTile[row][col].nPieceID;

        if(tmpCheckedPieceID != -1 && this.arrHintPiecesID.indexOf(tmpCheckedPieceID) == -1 && this.arrPiece[tmpCheckedPieceID].nType == type && this.arrPiece[tmpCheckedPieceID].nType < 10){
            this.arrHintPiecesID.push(tmpCheckedPieceID);
            pieceslist.push(tmpCheckedPieceID);

            //Check other direction depend on previous direction
            if(row % 2 == 0){
                if(dir != DIR_BOTRIGHT){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_TOPLEFT, type, row - 1, col - 1, pieceslist);

                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_BOTNORM){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_TOPNORM, type, row - 2, col, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_BOTLEFT){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_TOPRIGHT, type, row - 1, col, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_TOPRIGHT){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_BOTLEFT, type, row + 1, col - 1, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_TOPNORM){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_BOTNORM, type, row + 2, col, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_TOPLEFT){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_BOTRIGHT, type, row + 1, col, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }
            } else {
                if(dir != DIR_BOTRIGHT){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_TOPLEFT, type, row - 1, col,pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_BOTNORM){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_TOPNORM, type, row - 2, col, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_BOTLEFT){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_TOPRIGHT, type, row - 1, col + 1, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_TOPRIGHT){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_BOTLEFT, type, row + 1, col, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_TOPNORM){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_BOTNORM, type, row + 2, col, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }

                if(dir != DIR_TOPLEFT){
                    tmpPiecesNewList = this.CheckPiecesLink(DIR_BOTRIGHT, type, row + 1, col + 1, pieceslist);
                    if(tmpPiecesNewList.length != pieceslist.length && tmpPiecesNewList.length >= 3){
                        return tmpPiecesNewList;
                    }
                }
            }
        }

        return pieceslist;
    },

    Disposition : function(cx, cy){
        this.nDispositionX = cx;
        this.nDispositionY = cy;
        this.self.x = cx;
        this.self.y = cy;
    },

    Update : function() {
        if (this.nControlState == ON_DOWN) {
            this.PieceUpdateHandler();
        }

        //Update Other Thing
        //##.Eyes Blinking
        if (++this.nTimeBlink > 80) {
            var tmpI, tmpJ;
            var tmpBlink = [];
            for (tmpI = 0; tmpI < (this.arrPiece.length / 10); tmpI++) {
                do {
                    tmpJ = objGameModule.RandomRangeInt(0, this.arrPiece.length - 1);
                } while (tmpBlink.indexOf(tmpJ) != -1);
                tmpBlink.push(tmpJ);

                //Blink The Eye
                if(this.arrPiece[tmpJ] != null){
                    this.arrPiece[tmpJ].Blink();
                }
            }

            //Reset The Counter
            this.nTimeBlink = 0;
        }

        //##.Check Piece That Can Be Clicked
        switch (this.fEnableShowHint){
            case true  :
                if(++this.nTimeIdle >= 600){
                    this.ShowHint();
                }
                break;
            case false :
                this.nTimeIdle = 0;
                break;
        }
    },
    
    Destroy : function () {
        //Temp Variable
        var tmpI, tmpJ;

        //##1.Line
        for(tmpI = 0 ; tmpI < this.arrSwipeLine.length ; tmpI++){
            this.arrSwipeLine[tmpI] = null;
        }
        this.arrSwipeLine = [];

        //##2.Piece
        for(tmpI = 0 ; tmpI < this.arrPiece.length ; tmpI++){
             this.arrPiece[tmpI] = null;
        }
        this.arrPiece = [];

        //##3.Tile
        for(tmpI = 0 ; tmpI < this.arrTile.length ; tmpI++){
            for(tmpJ = 0 ; tmpJ < this.arrTile[tmpI].length ; tmpJ++){
                this.arrTile[tmpI][tmpJ].Destroy();
                this.arrTile[tmpI][tmpJ] = null;
            }
            this.arrTile[tmpI] = [];
        }
        this.arrTile = [];
        this.arrPressedTile = [];

        //##4.Remove All Event
        this.updateHandler = null;
        this.updateContext = null;

        //##5.Other
        this.levelData = [];

        game.input.onUp.remove(this.PieceReleaseHandler,this);

        //Group
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(playboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(playboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(playboard.prototype, "width", {
    get: function () {
        return this.nWidth;
    }
});
Object.defineProperty(playboard.prototype, "height", {
    get: function () {
        return this.nHeight;
    }
});
Object.defineProperty(playboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 8/26/2014.
 */

/**
 * Constructor and Main Handler
 */
playinfo = function(parent, clickListener, clickContext){
    //Set Event And Context
    this.clickHandler = clickListener;
    this.clickContext = clickContext;

    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    //Set Board Group
    this.objSubGroupTop = game.add.group();
    this.objGroup.add(this.objSubGroupTop);

    this.objSubGroupBot = game.add.group();
    this.objGroup.add(this.objSubGroupBot);

    //##.Add Main Board
    this.objMainBoard = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objMainBoard.frameName = 'obj-infoboard-bg.png';
    this.objSubGroupTop.add(this.objMainBoard);

    objGameModule.CreateButton(481, 0, 1, 0, this.objSubGroupTop, 'atlas-ingamestatic', 'btn-menu-normal.png', "Pause", this.ClickHandler, this);

    //##.Score Bar
    this.objScoreBarMask = game.add.sprite(28, 36, 'atlas-ingamestatic');
    this.objScoreBarMask.frameName = 'obj-infoboard-mask.png';
    this.objScoreBarMask.anchor.setTo(0.27, 0.32);
    this.objScoreBarMask.angle = 0;
    this.objSubGroupTop.add(this.objScoreBarMask);

    this.objMainBoardTop = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objMainBoardTop.frameName = 'obj-infoboard-top.png';
    this.objSubGroupTop.add(this.objMainBoardTop);

    //##.Star
    this.arrStarEmpty = [];
    this.arrStarFilled = [];
    var tmpObj;
    var tmpPositionX = [100, 92,  60];
    var tmpPositionY = [ 20, 65,  97];
    for(var tmpI = 0 ; tmpI < 3 ; tmpI++){
        tmpObj = game.add.sprite(tmpPositionX[tmpI], tmpPositionY[tmpI], 'atlas-ingamestatic');
        tmpObj.frameName = 'obj-scoreempty.png';
        tmpObj.anchor.setTo(0.5, 0.5);
        tmpObj.scale.setTo(1.2, 1.2);
        this.objSubGroupTop.add(tmpObj);
        this.arrStarEmpty.push(tmpObj);

        tmpObj = game.add.sprite(tmpPositionX[tmpI], tmpPositionY[tmpI], 'atlas-ingamestatic');
        tmpObj.frameName = 'obj-scorefilled.png';
        tmpObj.visible = false;
        tmpObj.anchor.setTo(0.5, 0.5);
        tmpObj.scale.setTo(1.2, 1.2);
        this.objSubGroupTop.add(tmpObj);
        this.arrStarFilled.push(tmpObj);
    }

    //##.Fruit Target
    this.arrFruitTarget = [];
    this.arrFruitType = [];

    //##.Move Notif
    this.objMoveNotif = game.add.sprite(50, 58, 'atlas-ingamestatic');
    this.objMoveNotif.anchor.setTo(0.5, 0.5);
    this.objMoveNotif.frameName = 'obj-movenotif.png';
    this.objMoveNotif.visible = false;
    this.objSubGroupTop.add(this.objMoveNotif);

    //##.Other Flag
    this.nCurnScore = 0;
    this.nCurnStar  = 0;

    //##.Total Move
    this.txtMove = game.add.bitmapText(20, 32, 'fnt-franklin','99', 50);
    this.objSubGroupTop.add(this.txtMove);

    //##.Total Score
    this.objScoreBoardBot = game.add.sprite(240, 710, 'atlas-ingamestatic');
    this.objScoreBoardBot.anchor.setTo(0.5, 0.5);
    this.objScoreBoardBot .frameName = 'obj-infoboard-bot.png';
    this.objSubGroupBot.add(this.objScoreBoardBot );

    this.txtScoreTitle = game.add.bitmapText(165, 698, 'fnt-berlin' ,'SCORE : ', 18);
    this.objSubGroupBot.add(this.txtScoreTitle);

    this.nScoreText = 0;
    this.txtScoreValue = game.add.bitmapText(240, 698, 'fnt-berlin' ,'000000', 18);
    this.objSubGroupBot.add(this.txtScoreValue);

    this.timeScoreUpdate = null;

    //##.Score
    this.objScoreAnim = new scoreanime(this.objGroup);

    //##.Compliment
    this.objCompliment = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objCompliment.anchor.setTo(0.5, 0.5);
    this.objCompliment.visible = false;
    this.objGroup.add(this.objCompliment);
};


playinfo.prototype = {
    Reset : function(cfruitlist){
        //Temp Variable
        var tmpI, tmpFruit;

        //Destroy Previous if Exists
        for(tmpI = 0 ; tmpI < this.arrFruitTarget.length ; tmpI++){
            this.arrFruitTarget[tmpI].Destroy();
            this.arrFruitTarget[tmpI] = null;
        }
        this.arrFruitTarget = [];
        this.arrFruitType = [];

        //Create New Board Combination
        for(tmpI = 0 ; tmpI < cfruitlist.length ; tmpI++){
            tmpFruit = new fruitboard(cfruitlist[tmpI][0], cfruitlist[tmpI][1], this.objSubGroupTop);
            tmpFruit.x = 120 + (tmpI * 75);
            tmpFruit.y = 10;

            //Register to Array
            this.arrFruitTarget.push(tmpFruit);
            this.arrFruitType.push(tmpFruit.nType);
        }

        //Reset Star and Score
        this.nCurnScore = 0;
        this.nScoreText = 0;
        this.txtScoreValue.text = this.SetScoreString('0');

        this.nCurnStar  = 0;
        this.objScoreBarMask.angle = 0;
        for(tmpI = 0 ; tmpI < this.arrStarFilled.length ; tmpI++){
            this.arrStarFilled[tmpI].visible = false;
        }

        //Reset Other
        this.txtMove.tint = 0x000000;
        objGameModule.StopTweens(this.objMoveNotif);
        objGameModule.StopTweens(this.objMoveNotif.scale);
        this.objMoveNotif.visible = false;
    },

    AnimIn : function(){
      this.objSubGroupTop.y = -200;
      game.add.tween(this.objSubGroupTop).to({y : 0}, 400, Phaser.Easing.Quadratic.Out, true);

      this.objSubGroupBot.y = 200;
      game.add.tween(this.objSubGroupBot).to({y : 0}, 400, Phaser.Easing.Quadratic.Out, true);
    },

    PlayNotif : function(){
        if(this.objMoveNotif != null){
            this.objMoveNotif.alpha = 0;
            this.objMoveNotif.scale.setTo(0.2, 0.2);
            this.objMoveNotif.visible = true;

            game.add.tween(this.objMoveNotif).to({alpha : 1}, 400, Phaser.Easing.Linear.None, true);
            game.add.tween(this.objMoveNotif.scale).to({x : 0.5, y : 0.5}, 400, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                game.add.tween(this.objMoveNotif).to({alpha : 0}, 400, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.objMoveNotif.scale).to({x : 0.9, y : 0.9}, 600, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.PlayNotif, this);
            }, this);
        }
    },

    AddScore : function(score){
        this.nCurnScore += score;

        //Set Max Value
        var tmpScoreForPercentage = (this.nCurnScore > objLevelData[nGameLevel].score) ? objLevelData[nGameLevel].score : this.nCurnScore;

        //Set Rotation depends on Percentage
        var tmpPercentage = (tmpScoreForPercentage/objLevelData[nGameLevel].score);
        game.add.tween(this.objScoreBarMask).to({angle : tmpPercentage * -150}, 300, Phaser.Easing.Linear.None, true);

        //Check Star [50, 90, 130]
        var tmpObj = [];

        if(tmpPercentage >= 0.33 && !this.arrStarFilled[2].visible){
            tmpObj.push(this.arrStarFilled[2]);
            objAudioHandler.playSFX('SFX_Star');
            this.nCurnStar  = 1;
        }
        if(tmpPercentage >= 0.60 && !this.arrStarFilled[1].visible){
            tmpObj.push(this.arrStarFilled[1]);
            objAudioHandler.playSFX('SFX_Star');
            this.nCurnStar  = 2;
        }
        if(tmpPercentage >= 0.87 && !this.arrStarFilled[0].visible){;
            tmpObj.push(this.arrStarFilled[0]);
            objAudioHandler.playSFX('SFX_Star');
            this.nCurnStar  = 3;
        }

        for(var tmpI = 0 ; tmpI < tmpObj.length ; tmpI++){
            this.ShowScoreStar(tmpObj[tmpI], tmpI * 70);
        }

        //Update Score Text
        if(this.timeScoreUpdate != null) {
            game.time.events.remove(this.timeScoreUpdate);
            this.timeScoreUpdate = null;

            this.nScoreText = this.nCurnScore;
            this.txtScoreValue = this.SetScoreString(this.nScoreText);
        }

        var tmpAdd = Math.round((this.nCurnScore - this.nScoreText) * 0.2);
        this.timeScoreUpdate = game.time.events.repeat(40, 6, function(){
            this.nScoreText += tmpAdd;
            if(this.timeScoreUpdate.repeatCount <= 0){
                this.nScoreText = this.nCurnScore;
                game.time.events.remove(this.timeScoreUpdate);
                this.timeScoreUpdate = null;
            }
            this.txtScoreValue.text = this.SetScoreString(this.nScoreText.toString());
        }, this);
    },

    SetScoreString : function(val){
        var tmpI, tmpJ;
        var tmpRes = '';

        tmpJ = 7 - val.length;
        for(tmpI = 0 ; tmpI < tmpJ ; tmpI++){
           tmpRes += '0';
        }
        tmpRes += val;

        return tmpRes;
    },

    ShowScoreStar : function(cobj, cdelay){
        cobj.alpha = 0;
        cobj.scale.setTo(0.1, 0.1);
        cobj.visible = true;
        game.add.tween(cobj).to({alpha : 1}, 300, Phaser.Easing.Linear.None, true, cdelay);
        game.add.tween(cobj.scale).to({x : 2.0, y : 2.0}, 200, Phaser.Easing.Linear.None, true, cdelay).onComplete.add(function(){
            game.add.tween(cobj.scale).to({x : 1.2, y : 1.2}, 100, Phaser.Easing.Linear.None, true);
        }, this);
    },

    IsAllFulfilled : function(){
        //Temp Variable
        var tmpI, tmpFulfilled;

        //Start Checking
        tmpFulfilled = true;
        for(tmpI = 0 ; tmpI < this.arrFruitTarget.length ; tmpI++){
            if(this.arrFruitTarget[tmpI].nValue < this.arrFruitTarget[tmpI].nTarget){
                tmpFulfilled = false;
                break;
            }
        }

        return tmpFulfilled;
    },

    GetGameInfo : function(){
        //Temp Variable
        var tmpI;
        var tmpInfo = [];

        //Create the Info
        for(tmpI = 0 ; tmpI < this.arrFruitTarget.length ; tmpI++){
            tmpInfo.push([this.arrFruitType[tmpI], this.arrFruitTarget[tmpI].nValue, this.arrFruitTarget[tmpI].nTarget])
        }
        tmpInfo.push(this.nCurnScore);

        return tmpInfo;
    },

    CollectFruit : function(args){
        //Temp Variable
        var tmpI, tmpJ, tmpK, tmpL;

        var tmpArrFruitType   = args[0];
        var tmpArrFruitCx     = args[1];
        var tmpArrFruitCy     = args[2];
        var tmpTotalExplosion = args[3];

        if(tmpTotalExplosion >= 7){
            tmpK = 80;
        }
        else if (tmpTotalExplosion >= 5){
            tmpK = 40;
        }
        else {
            tmpK = 20;
        }

        tmpJ = -1;
        tmpL = 0;
        for(tmpI = 0 ; tmpI < tmpArrFruitType.length ; tmpI++){
            tmpJ = this.arrFruitType.indexOf(tmpArrFruitType[tmpI]);

            if(tmpJ != -1){
                this.ThrowFruitToBoard(tmpArrFruitType[tmpI], tmpArrFruitCx[tmpI], tmpArrFruitCy[tmpI], tmpJ);
            }

            if(tmpArrFruitType[tmpI] != 10 && tmpArrFruitType[tmpI] != 11){
                //Play Score Anim
                this.objScoreAnim.Play(tmpArrFruitCx[tmpI], tmpArrFruitCy[tmpI] + 20, tmpK);
                tmpL++;
            }
        }

        //Add Score
        this.AddScore(tmpL * tmpK);

        //Show Compliment
        tmpI = objGameModule.RandomRangeInt(0, tmpArrFruitCx.length - 1);
        this.ShowCompliment(tmpL, tmpArrFruitCx[tmpI], tmpArrFruitCy[tmpI]);
    },

    ThrowFruitToBoard : function (ctype, cx, cy, tid){
        //Set Target Flag First
        this.arrFruitTarget[tid].nValue++;

        var tmpFruit = game.add.sprite(cx, cy, 'atlas-ingamestatic');
        switch(ctype){
            case 10  :
                tmpFruit.frameName = 'obj-ceramic.png';
                tmpFruit.scale.setTo(0.8, 0.8);
                break;
            case 14  :
                tmpFruit.frameName = 'obj-fruit14-body-normal.png';
                break;
            default  :
                tmpFruit.frameName = 'obj-fruit' + ctype.toString() + '.png';
                break;
        }
        tmpFruit.anchor.setTo(0.5, 1);
        this.objGroup.add(tmpFruit);

        game.add.tween(tmpFruit).to({x : this.arrFruitTarget[tid].fruitCenterX, y : this.arrFruitTarget[tid].fruitCenterY}, 500, Phaser.Easing.Linear.None, true);
        game.add.tween(tmpFruit.scale).to({x : tmpFruit.scale.x * 0.8, y : tmpFruit.scale.y * 0.8}, 600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(sprite){
            //Update Info
            this.arrFruitTarget[tid].Bounce();
            this.arrFruitTarget[tid].RefreshMove();

            //Remove Tween List
            tmpFruit.destroy();
            tmpFruit = null;
        }, this);
    },

    ShowCompliment : function(total, cx, cy){
        //Add Some Compliment
        if(total >= 7){
            this.objCompliment.visible = true;
            this.objCompliment.frameName = 'obj-nice.png';

            //Play SFX
            //objAudioHandler.playSFX('SFX_Nice');
        }
        else if(total >= 5){
            this.objCompliment.visible = true;
            this.objCompliment.frameName = 'obj-good.png';

            //Play SFX
            //objAudioHandler.playSFX('SFX_Good');
        }

        if(this.objCompliment.visible){
            this.objCompliment.alpha = 1;
            this.objCompliment.scale.setTo(0, 0);
            this.objCompliment.x = cx;
            this.objCompliment.y = cy;
            game.add.tween(this.objCompliment.scale).to({x : 1.0, y : 1.0}, 700, Phaser.Easing.Elastic.Out, true).onComplete.add(function(){
                game.add.tween(this.objCompliment).to({alpha : 0, y : cy - 20}, 200, Phaser.Easing.Linear.None, true, 80).onComplete.add(function(){
                    this.objCompliment.visible = false;
                }, this)
            }, this)
        }
    },

    UpdateMove : function(val){
        this.txtMove.setText(val.toString());
        this.txtMove.updateTransform();
        this.txtMove.x = 50 - (this.txtMove.textWidth * 0.5);

        if(val <= 3){
            this.txtMove.tint = 0xFC4D38;
        }
        else if(val <= 5){
            if(!this.objMoveNotif.visible){
                this.PlayNotif();
            }
        }
        else {
            this.txtMove.tint = 0x000000;
            this.objMoveNotif.visible = false;
        }
    },

    ClickHandler : function(sprite){
        //Set Sprite Scale
        sprite.scale.setTo(0.97, 0.97);

        //Check Context Listener
        if(this.clickContext != null){
            this.clickHandler.apply(this.clickContext, [sprite]);
        }
    },

    Destroy : function () {
        //Temp Variable
        var tmpI;

        //##.Add Main Board
        this.objMainBoard.destroy();
        this.objMainBoard = null;

        //##.Score Bar
        this.objScoreBarMask.destroy();
        this.objScoreBarMask = null;

        this.objMainBoardTop.destroy();
        this.objMainBoardTop = null;

        //##.Star
        for(tmpI = 0 ; tmpI < 3 ; tmpI++){
            this.arrStarEmpty[tmpI].destroy();
            this.arrStarEmpty[tmpI] = null;

            this.arrStarFilled[tmpI].destroy();
            this.arrStarFilled[tmpI] = null;
        }
        this.arrStarEmpty = [];
        this.arrStarFilled = [];

        //##.Fruit Target
        for(tmpI = 0 ; tmpI < this.arrFruitTarget.length ; tmpI++){
            this.arrFruitTarget[tmpI].Destroy();
            this.arrFruitTarget[tmpI] = null;
        }
        this.arrFruitTarget = [];
        this.arrFruitType = [];

        this.clickHandler = null;
        this.clickContext = null;

        //##.Total Move
        this.txtMove.destroy();
        this.txtMove = null;

        //##.Score Anim
        this.objScoreAnim.Destroy();
        this.objScoreAnim = null;

        //##.Move Notif
        objGameModule.StopTweens(this.objMoveNotif);
        objGameModule.StopTweens(this.objMoveNotif.scale);
        this.objMoveNotif.destroy();
        this.objMoveNotif = null;

        //##Score Board
        this.objScoreBoardBot.destroy();
        this.objScoreBoardBot = null;

        this.txtScoreTitle.destroy();
        this.txtScoreTitle = null;

        this.txtScoreValue.destroy();
        this.txtScoreValue = null;

        if(this.timeScoreUpdate != null){
            game.time.events.remove(this.timeScoreUpdate);
            this.timeScoreUpdate = null;
        }
        //##.Compliment
        this.objCompliment.destroy();
        this.objCompliment = null;

        //Destroy Group
        this.objSubGroupTop.removeAll();
        this.objSubGroupTop.destroy();
        this.objSubGroupTop = null;

        this.objSubGroupBot.removeAll();
        this.objSubGroupBot.destroy();
        this.objSubGroupBot = null;

        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(playinfo.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(playinfo.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(playinfo.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 8/26/2014.
 */
/**
 * Constructor and Main Handler
 */
poolobject = function(type, maxObject){
    //Set Type Flag
    this.nType = type;
    this.nMaxObject = maxObject;

    //Set Object Array
    this.arrObj = [];
};

poolobject.prototype = {
    CallObject : function(cparent) {
        //Temp Variable
        var tmpI, tmpJ;
        var tmpObj = null;

        //Check Available-Object
        for(tmpI = 0 ; tmpI < this.arrObj.length ; tmpI++){
            if(!this.arrObj[tmpI].fOnUse){
                tmpObj = this.arrObj[tmpI];
                tmpObj.Activate();
                break;
            }
        }

        //If tmpObj still null, Create new one
        if(tmpObj == null){
            switch(this.nType){
                case OBJTYPE_LINE :
                    tmpObj = new line();
                    break;
                case OBJTYPE_PIECE :
                    tmpObj = new piece();
                    break;
                case OBJTYPE_PARTICLESTAR :
                    tmpObj = new particlestar();
                    break;
            }
            this.arrObj.push(tmpObj);
            tmpObj.Activate();
        }

        if(cparent != null){
            cparent.add(tmpObj.self);
        }

        return tmpObj;
    },

    Refresh : function () {
        if(this.arrObj.length > this.nMaxObject){
            //Temp Variable
            var tmpI;

            //Check Over
            for(tmpI = (this.arrObj.length - 1) ; tmpI >= 0 ; tmpI--){
                if(!this.arrObj[tmpI].fOnUse){
                    this.arrObj[tmpI].Destroy();
                    this.arrObj[tmpI] = null;
                    this.arrObj.splice(tmpI, 1);
                }
            }
        }
    },

    Destroy : function(){
        //Temp Variable
        var tmpI;

        //Remove All Object
        for(tmpI = 0 ; tmpI < this.arrObj.length ; tmpI++){
            this.arrObj[tmpI].Destroy();
            this.arrObj[tmpI] = null;
        }

        //Remove Reference
        this.arrObj = [];
    }
};
/**
 * Created by Dedy Suwandi on 11/13/2014.
 */

/**
 * Constructor and Main Handler
 */
scoreanime = function(cparent){
    //Group Parent
    this.objGroup = game.add.group();
    cparent.add(this.objGroup);


    //Create Object Pooling
    this.arrAnimObject = [];
    this.nMaxObj       = 6;
};


scoreanime.prototype = {
    Play  : function(cx, cy, cscore){
        //Temp Variable
        var tmpAnim;

        if(this.arrAnimObject.length <= 0){
            tmpAnim = game.add.sprite(0, 0, 'atlas-ingamestatic');
            this.objGroup.add(tmpAnim);

            this.arrAnimObject.push(tmpAnim);
        }

        tmpAnim = this.arrAnimObject.pop();
        tmpAnim.visible = true;
        tmpAnim.x = cx;
        tmpAnim.y = cy;
        tmpAnim.frameName = 'obj-score' + cscore.toString() + '.png';
        tmpAnim.alpha = 0;
        tmpAnim.anchor.setTo(0.5, 1);
        tmpAnim.scale.setTo(0.4, 0.4);
        game.add.tween(tmpAnim).to({y : tmpAnim.y - 20, alpha : 1}, 50, Phaser.Easing.Linear.None, true);
        game.add.tween(tmpAnim.scale).to({x : 1, y : 1}, 350, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            game.add.tween(tmpAnim.scale).to({x : 0.8, y : 0.8}, 350, Phaser.Easing.Linear.None, true);
            game.add.tween(tmpAnim).to({y : tmpAnim.y - 20, alpha : 0}, 355, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                if(this.arrAnimObject.length < this.nMaxObj){
                    tmpAnim.visible = false;
                    this.arrAnimObject.push(tmpAnim);
                } else {
                    tmpAnim.destroy();
                    tmpAnim = null;
                }
            }, this);
        }, this);
    },

    Destroy : function () {
        for(var tmpI = 0 ; tmpI < this.arrAnimObject.length ; tmpI++){
            //Stop Tween First
            objGameModule.StopTweens(this.arrAnimObject[tmpI].scale);
            objGameModule.StopTweens(this.arrAnimObject[tmpI]);

            //Destroy
            this.arrAnimObject[tmpI].destroy();
            this.arrAnimObject[tmpI] = null;
        }
        this.arrAnimObject = [];

        //Remove Group
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(scoreanime.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(scoreanime.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(scoreanime.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 10/9/2014.
 */

/**
 * Constructor and Main Handler
 */
settingboard = function(parent, clickListener, clickContext){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    //##.Add Object
    //a.main board
    this.objBoard = game.add.group();
    this.objGroup.add(this.objBoard);

    //b.bg
    this.objBG1 = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBG1.frameName = 'obj-boardbg1.png';
    this.objBG1.scale.setTo(1.8, 1.5);
    this.objBoard.add(this.objBG1);

    this.objBG2 = game.add.sprite(40, -16, 'atlas-ingamestatic');
    this.objBG2.frameName = 'obj-boardbg2.png';
    this.objBoard.add(this.objBG2);

    this.objBG3 = game.add.sprite(22, 64, 'atlas-ingamestatic');
    this.objBG3.frameName = 'obj-boardbg3.png';
    this.objBG3.scale.setTo(1.55, 1.30);
    this.objBoard.add(this.objBG3);

    //c.title
    this.txtTitle = game.add.bitmapText(105, 0, 'fnt-berlin','SETTINGS', 35);
    this.objBoard.add(this.txtTitle);

    //d.button
    objGameModule.CreateButton(this.objBG1.width * .5, 240, 0.5, 0.5, this.objBoard, 'atlas-title', 'btn-ok.png'  , 'HideSetting'  , this.Hide, this);

    //e.BGM and SFX
    this.objSoundMenu = game.add.sprite(37, 80, 'atlas-ingamestatic');
    this.objSoundMenu.frameName = 'obj-soundmenu.png';
    this.objBoard.add(this.objSoundMenu);

    this.btnBGMOff = game.add.sprite(172, 83, 'atlas-ingamestatic');
    this.btnBGMOff.frameName = 'btn-off-dark.png';
    this.btnBGMOff.name = "BGM-off";
    this.btnBGMOff.inputEnabled = true;
    this.btnBGMOff.events.onInputDown.add(this.ClickHandler, this);
    this.objBoard.add(this.btnBGMOff);

    this.btnBGMOn = game.add.sprite(250, 83, 'atlas-ingamestatic');
    this.btnBGMOn.frameName = 'btn-on-dark.png';
    this.btnBGMOn.name = "BGM-on";
    this.btnBGMOn.inputEnabled = true;
    this.btnBGMOn.events.onInputDown.add(this.ClickHandler, this);
    this.objBoard.add(this.btnBGMOn);

    this.btnSFXOff = game.add.sprite(172, 139, 'atlas-ingamestatic');
    this.btnSFXOff.frameName = 'btn-off-dark.png';
    this.btnSFXOff.name = "SFX-off";
    this.btnSFXOff.inputEnabled = true;
    this.btnSFXOff.events.onInputDown.add(this.ClickHandler, this);
    this.objBoard.add(this.btnSFXOff);

    this.btnSFXOn = game.add.sprite(250, 139, 'atlas-ingamestatic');
    this.btnSFXOn.frameName = 'btn-on-dark.png';
    this.btnSFXOn.name = "SFX-on";
    this.btnSFXOn.inputEnabled = true;
    this.btnSFXOn.events.onInputDown.add(this.ClickHandler, this);
    this.objBoard.add(this.btnSFXOn);

    this.fBGMEnabled = objGameSave.music;
    this.fSFXEnabled = objGameSave.sfx;
    this.RefreshSoundState();

    //##.Set Position
    this.objBoard.x = -this.objBoard.width * 0.5;
    this.objBoard.y = -this.objBoard.height * 0.5;

    //##.Register Click Context and Click Handler
    this.clickContext = clickContext;
    this.clickHandler = clickListener;

    //##.Refresh Sound State
    this.RefreshSoundState();

    //##.Deactivate
    this.objGroup.visible = false;
};

settingboard.prototype = {
    Show : function(){
        this.objGroup.visible = true;
        this.objGroup.scale.setTo(0.4, 0.4);
        game.add.tween(this.objGroup.scale).to({x : 1, y : 1}, 600, Phaser.Easing.Elastic.Out, true);

    },

    Hide : function(sprite){
        game.add.tween(this.objGroup.scale).to({x : 0, y : 0}, 120, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            this.objGroup.visible = false;
        }, this);

        //Call Context Handling
        if(this.clickContext != null){
            this.clickHandler.apply(this.clickContext, [sprite]);
        }
    },

    RefreshSoundState : function(){
        //Set button BGM Visibility
        this.btnBGMOn.visible = !this.fBGMEnabled;
        this.btnBGMOff.visible = this.fBGMEnabled;

        //Set button SFX Visibility
        this.btnSFXOn.visible = !this.fSFXEnabled;
        this.btnSFXOff.visible = this.fSFXEnabled;

        objAudioHandler.resetVolSFX();
        objAudioHandler.resetVolBGM();
    },

    ClickHandler : function(sprite){
        switch(sprite.name){
            case "BGM-off" :
                objGameSave.music = this.fBGMEnabled = false;
                this.RefreshSoundState();
                break;
            case "BGM-on"  :
                objGameSave.music = this.fBGMEnabled = true;
                this.RefreshSoundState();
                break;
            case "SFX-off" :
                objGameSave.sfx = this.fSFXEnabled = false;
                this.RefreshSoundState();
                break;
            case "SFX-on"  :
                objGameSave.sfx = this.fSFXEnabled = true;
                this.RefreshSoundState();
                break;
        }

        //Save Game
        objGameStorage.setItem(fSaveID, JSON.stringify(objGameSave));

        //Call Context Handling
        if(this.clickContext != null){
            this.clickHandler.apply(this.clickContext, [sprite.name]);
        }
    },

    Destroy : function () {
        //##.Destroy Main Object
        //a.bg
        this.objBG1.destroy();
        this.objBG1 = null;

        this.objBG2.destroy();
        this.objBG2 = null;

        this.objBG3.destroy();
        this.objBG3 = null;

        //b.title
        this.txtTitle.destroy();
        this.txtTitle = null;

        //c.BGM and SFX
        this.objSoundMenu.destroy();
        this.objSoundMenu = null;

        this.btnBGMOff.events.onInputDown.remove(this.ClickHandler);
        this.btnBGMOff.destroy();
        this.btnBGMOff = null;

        this.btnBGMOn.events.onInputDown.remove(this.ClickHandler);
        this.btnBGMOn.destroy();
        this.btnBGMOn = null;

        this.btnSFXOff.destroy();
        this.btnSFXOff = null;

        this.btnSFXOn.destroy();
        this.btnSFXOn = null;

        //d.main board
        this.objBoard.removeAll();
        this.objBoard.destroy();
        this.objBoard = null;

        //##.Register Click Context and Click Handler
        this.clickContext = null;
        this.clickHandler = null;

        //##.Deactivate
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(settingboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(settingboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(settingboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 10/15/2014.
 */

/**
 * Constructor and Main Handler
 */
stageselector = function(parent, cid, cx, cy, clickListener, eventListener, clickContext){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    this.objGroup.x = cx;
    this.objGroup.y = cy;
    parent.add(this.objGroup);

    //##.Add Object
    //a.bg
    this.objSelector = game.add.sprite(0, 0, 'atlas-stageselect');
    this.objSelector.anchor.setTo(0.5, 0.5);
    this.objSelector.x = this.objSelector.width * 0.5;
    this.objSelector.y = this.objSelector.height * 0.5;
    this.objSelector.frameName = 'obj-selectorlocked.png';
    this.objGroup.add(this.objSelector);

    //b.star normal and shine
    this.arrStarCX = [[ 23],
                      [ 10, 35],
                      [  0, 46, 23]];
    this.arrStarCY = [[-15],
                      [-11, -12],
                      [ -8,  -8, -15]];
    this.arrStarAng = [[  0],
                       [-30,  30],
                       [-45,  45,  0]];

    this.arrStarNormal =[];
    var tmpStarNormal;
    for(tmpI = 2 ; tmpI >= 0; tmpI--){
        tmpStarNormal = game.add.sprite(0, 0, 'atlas-stageselect');
        tmpStarNormal.frameName = 'obj-starnormal.png';
        tmpStarNormal.visible = false;
        tmpStarNormal.anchor.setTo(0.5, 0.5);
        this.objGroup.add(tmpStarNormal);

        this.arrStarNormal.push(tmpStarNormal);
    }

    this.arrStarShine = [];
    var tmpStarShine;
    for(tmpI = 2 ; tmpI >= 0; tmpI--){
        tmpStarShine = game.add.sprite(0, 0, 'atlas-stageselect');
        tmpStarShine.frameName = 'obj-starshine.png';
        tmpStarShine.visible = false;
        tmpStarShine.anchor.setTo(0.5, 0.5);
        this.objGroup.add(tmpStarShine);

        this.arrStarShine.push(tmpStarShine);
    }

    //##.Register Click Context and Click Handler
    this.clickContext = clickContext;
    this.clickHandler = clickListener;
    this.eventListener = eventListener;

    //##.Flag
    this.fCurnStar = 0;
    this.fCurnID = cid;
};

stageselector.prototype = {
    Locked   : function(){
        this.fCurnStar = 0;
        this.objSelector.frameName = 'obj-selectorlocked.png';

        //Add Event Handling
        if(this.objSelector.inputEnabled){
            this.objSelector.events.onInputDown.remove(this.ClickHandler, this);
            this.objSelector.events.onInputUp.remove(this.ReleaseHandler, this);
            this.objSelector.inputEnabled = false;
        }
    },

    Unlocked : function(){
       this.objSelector.frameName = 'obj-selectornormal.png';

        //Add Event Handling
        if(!this.objSelector.inputEnabled) {
            this.objSelector.inputEnabled = true;
            this.objSelector.events.onInputDown.add(this.ClickHandler, this);
            this.objSelector.events.onInputUp.add(this.ReleaseHandler, this);
        }
    },

    MakeGolden : function(){
        this.fCurnStar = 3;
        this.objSelector.frameName = 'obj-selectorgold.png';

        //Add Event Handling
        if(!this.objSelector.inputEnabled){
            this.objSelector.inputEnabled = true;
            this.objSelector.events.onInputDown.add(this.ClickHandler, this);
            this.objSelector.events.onInputUp.add(this.ReleaseHandler, this);
        }
    },

    SetStar : function(to, animate){
        var tmpI;

        switch(animate){
            case false :
                //Update Flag
                this.fCurnStar = to;

                for(tmpI = 0 ; tmpI < 3 ; tmpI++){
                    this.arrStarNormal[tmpI].visible = false;
                    this.arrStarShine[tmpI].visible = false;
                }

                for(tmpI = 0 ; tmpI < to ; tmpI++){
                    this.arrStarNormal[tmpI].visible = true;
                    this.arrStarNormal[tmpI].x = this.arrStarCX[to - 1][tmpI];
                    this.arrStarNormal[tmpI].y = this.arrStarCY[to - 1][tmpI];
                    this.arrStarNormal[tmpI].angle = this.arrStarAng[to - 1][tmpI];
                }

                switch(to){
                    case -1 :
                        //Lock It
                        this.Locked();
                        break;
                    case 0 :
                    case 1 :
                    case 2 :
                        //Release It
                        this.Unlocked();
                        break;
                    case 3 :
                        //Make It Golden
                        this.MakeGolden();
                        break;
                }
                break;
            case true  :
                //Play SFX
                objAudioHandler.playSFX('SFX_Star');

                //Update Flag
                this.fCurnStar += 1;

                switch(this.fCurnStar){
                    case 1 :
                        this.arrStarShine[0].x = this.arrStarNormal[0].x = this.arrStarCX[this.fCurnStar - 1][0];
                        this.arrStarShine[0].y = this.arrStarNormal[0].y = this.arrStarCY[this.fCurnStar - 1][0];
                        this.arrStarShine[0].alpha = this.arrStarNormal[0].alpha = 0;
                        this.arrStarShine[0].visible = this.arrStarNormal[0].visible = true;

                        if(this.fCurnStar >= to){
                            this.eventListener.apply(this.clickContext, ['level-unlocked']);
                        }

                        game.add.tween(this.arrStarNormal[0]).to({alpha : 1}, 300, Phaser.Easing.Linear.None, true);
                        game.add.tween(this.arrStarShine[0]).to({alpha : 1}, 400, Phaser.Easing.Linear.None, true, 0, true, true).onComplete.add(function(){
                            this.arrStarShine[0].visible = false;

                            if(this.fCurnStar < to){
                                this.SetStar(to ,true);
                            }
                        }, this);
                        break;
                    case 2 :
                        game.add.tween(this.arrStarNormal[0]).to({x : this.arrStarCX[this.fCurnStar - 1][0], y : this.arrStarCY[this.fCurnStar - 1][0], angle : this.arrStarAng[this.fCurnStar - 1][0]}, 300, Phaser.Easing.Linear.None, true);

                        this.arrStarShine[1].alpha = this.arrStarNormal[1].alpha = 0;
                        this.arrStarShine[1].x = this.arrStarNormal[1].x = this.arrStarCX[this.fCurnStar - 1][1];
                        this.arrStarShine[1].y = this.arrStarNormal[1].y = this.arrStarCY[this.fCurnStar - 1][1];
                        this.arrStarShine[1].angle = this.arrStarNormal[1].angle = this.arrStarAng[this.fCurnStar - 1][1];
                        this.arrStarShine[1].visible = this.arrStarNormal[1].visible = true;

                        if(this.fCurnStar >= to){
                            this.eventListener.apply(this.clickContext, ['level-unlocked']);
                        }

                        game.add.tween(this.arrStarNormal[1]).to({alpha : 1}, 300, Phaser.Easing.Linear.None, true);
                        game.add.tween(this.arrStarShine[1]).to({alpha : 1}, 400, Phaser.Easing.Linear.None, true, 0, true, true).onComplete.add(function(){
                            this.arrStarShine[1].visible = false;

                            if(this.fCurnStar < to){
                                this.SetStar(to ,true);
                            }
                        }, this);
                        break;
                    case 3 :
                        game.add.tween(this.arrStarNormal[0]).to({x : this.arrStarCX[this.fCurnStar - 1][0], y : this.arrStarCY[this.fCurnStar - 1][0], angle : this.arrStarAng[this.fCurnStar - 1][0]}, 300, Phaser.Easing.Linear.None, true);
                        game.add.tween(this.arrStarNormal[1]).to({x : this.arrStarCX[this.fCurnStar - 1][1], y : this.arrStarCY[this.fCurnStar - 1][1], angle : this.arrStarAng[this.fCurnStar - 1][1]}, 300, Phaser.Easing.Linear.None, true);

                        this.arrStarShine[2].alpha = this.arrStarNormal[2].alpha = 0;
                        this.arrStarShine[2].x = this.arrStarNormal[2].x = this.arrStarCX[this.fCurnStar - 1][2];
                        this.arrStarShine[2].y = this.arrStarNormal[2].y = this.arrStarCY[this.fCurnStar - 1][2];
                        this.arrStarShine[2].angle = this.arrStarNormal[2].angle = this.arrStarAng[this.fCurnStar - 1][2];
                        this.arrStarShine[2].visible = this.arrStarNormal[2].visible = true;

                        if(this.fCurnStar >= to){
                            this.eventListener.apply(this.clickContext, ['level-golden']);
                        }

                        game.add.tween(this.arrStarNormal[2]).to({alpha : 1}, 300, Phaser.Easing.Linear.None, true);
                        game.add.tween(this.arrStarShine[2]).to({alpha : 1}, 400, Phaser.Easing.Linear.None, true, 0, true, true).onComplete.add(function(){
                            this.arrStarShine[2].visible = false;
                        }, this);
                        break;
                }
                break;
        }
    },

    ClickHandler : function(sprite){
        //Set Scale
        sprite.scale.setTo(0.9, 0.9);

        //Call Context Handling
        if(this.clickContext != null){
            this.clickHandler.apply(this.clickContext, [this.fCurnID]);
        }
    },

    ReleaseHandler : function(sprite){
        sprite.scale.setTo(1, 1);
    },

    Destroy : function () {
        //##.Add Object
        //a.bg
        this.objSelector.destroy();
        this.objSelector = null;

        //b.star normal and shine
        this.arrStarCX = [];
        this.arrStarCY = [];
        this.arrStarAng = [];

        for(tmpI = 2 ; tmpI >= 0; tmpI--){
            objGameModule.StopTweens(this.arrStarNormal[tmpI]);
            this.arrStarNormal[tmpI].destroy();
            this.arrStarNormal[tmpI] = null;

            objGameModule.StopTweens(this.arrStarShine[tmpI]);
            this.arrStarShine[tmpI].destroy();
            this.arrStarShine[tmpI] = null;
        }
        this.arrStarNormal = [];
        this.arrStarShine = [];

        //##.Register Click Context and Click Handler
        this.clickContext = null;
        this.clickHandler = null;
        this.eventListener = null;

        //Create Group and Add to Parent
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;

    }
};

/**
 * Define Object Property
 */
Object.defineProperty(stageselector.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(stageselector.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(stageselector.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 11/27/2014.
 */
/**
 * Constructor and Main Handler
 */
targetboard = function(ctarget, cparent){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    cparent.add(this.objGroup);

    //##.Add Main Board
    this.objBoardBG = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBoardBG.frameName = 'obj-fruitboardbg.png';
    this.objGroup.add(this.objBoardBG);

    //##.Set Flag
    this.nType = ctype;
    this.nTarget = ctarget;
    this.nValue  = 0;

    //##Total Move / Target
    this.txtCurnScoreTitle = game.add.bitmapText(26, 55, 'fnt-berlin', '0', 20);
    this.objGroup.add(this.txtCurnScoreTitle);

    this.txtCurnScore = game.add.bitmapText(26, 55, 'fnt-berlin','0', 20);
    this.objGroup.add(this.txtCurnMove);

    this.txtTargetScore = game.add.bitmapText(26, 55, 'fnt-berlin',(' / ' + this.nTarget.toString()), 20);
    this.objGroup.add(this.txtTargetMove);

    this.RefreshMove();
};


targetboard.prototype = {
    Bounce : function(){
        game.add.tween(this.objFruit.scale).to({x : 1.15 * this.objFruit.scale.x, y : 1.15 * this.objFruit.scale.y}, 100, Phaser.Easing.Linear.None, true, 0, true, true);
    },

    RefreshMove : function(){
        this.txtCurnMove.setText(this.nValue.toString());
        this.txtCurnMove.updateTransform();
        this.txtCurnMove.x = 26 - this.txtCurnMove.textWidth;

        switch(this.objCheck.visible){
            case false :
                if(this.nValue >= this.nTarget){
                    this.txtCurnMove.tint = 0x75E897;
                    this.txtTargetMove.tint = 0x75E897;

                    this.objCheck.visible = true;
                    this.objCheck.scale.setTo(0.1, 0.1);
                    game.add.tween(this.objCheck.scale).to({x : 1, y : 1}, 500, Phaser.Easing.Elastic.Out, true);
                }
                break;
            case true  :
                if(this.nValue < this.nTarget){
                    this.txtCurnMove.tint = 0x000000;
                    this.txtTargetMove.tint = 0x000000;
                }
                break;
        }
    },

    Destroy : function () {
        //Remove Main Board Thing
        this.objGroup.remove(this.objBoardBG);
        this.objBoardBG.destroy();
        this.objBoardBG = null;

        this.objFruit.destroy();
        this.objFruit = null;

        this.objGroup.remove(this.objCheck);
        this.objCheck.destroy();
        this.objCheck = null;

        //Remove Text Group
        this.objGroup.remove(this.txtCurnMove);
        this.txtCurnMove.destroy();
        this.txtCurnMove = null;

        this.objGroup.remove(this.txtTargetMove);
        this.txtTargetMove.destroy();
        this.txtTargetMove = null;

        //Remove Body From Parent
        if(this.objGroup.parent != null){
            this.objGroup.parent.remove(this.objGroup);
        }
        this.objGroup.removeAll();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(targetboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(targetboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(targetboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 8/26/2014.
 */

/**
 * Constructor and Main Handler
 */
tile = function(cparent, ctype, cx, cy, crow, ccol, onclickhandler, context){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    cparent.add(this.objGroup);

    //Create Tile
    this.objTile = game.add.sprite(-TILE_WIDTH * 0.5, -TILE_HEIGHT * 0.5, 'atlas-ingamestatic');
    this.objTile.inputEnabled = true;
    this.objTile.input.pixelPerfectClick = true;
    this.objTile.events.onInputDown.add(this.Click, this);
    this.objTile.events.onInputUp.add(this.Release, this);
    this.objGroup.add(this.objTile);

    this.objCeramic = game.add.sprite(-TILE_WIDTH * 0.5, -TILE_HEIGHT * 0.5, 'atlas-ingamestatic');
    this.objGroup.add(this.objCeramic);

    this.objPressEffect = game.add.sprite(-TILE_WIDTH * 0.5, -TILE_HEIGHT * 0.5, 'atlas-ingamestatic');
    this.objPressEffect.visible = false;
    this.objGroup.add(this.objPressEffect);

    //Set Position
    this.objGroup.x = cx;
    this.objGroup.y = cy;

    //Reset Flag
    this.nRow = crow;
    this.nCol = ccol;
    this.nType = ctype;
    this.nPieceID = -1;

    //Set Frame and Type
    this.Reset(ctype);

    //Register Event
    this.context = context;
    this.onClickHandler = onclickhandler;
};

tile.prototype = {
    Reset : function (ctype) {
        this.nPieceID = -1;
        this.nType = ctype;

        //Set Frame and Type
        this.objTile.frameName = 'obj-tile-empty.png';
        this.objCeramic.frameName = 'obj-ceramic.png';
        this.objPressEffect.frameName = 'obj-tile-filled.png';
        this.ChangeType(this.nType);

        this.objCeramic.scale.setTo(1, 1);
    },

    Click : function(obj){
        //Call Dispatcher
        if(this.context != null){
            //Set Clicked Frame
            this.Press();

            this.onClickHandler.apply(this.context, [this.nRow, this.nCol]);
        }
    },

    Press : function(){
        //Play SFX
        objAudioHandler.playSFX('SFX_Tap');

      //Set Clicked Frame
      this.objPressEffect.visible = true;
    },

    Release : function(){
        //Set Released Frame
        this.objPressEffect.visible = false;
    },

    ChangeType : function(ctype){
        //Set Tile Type
        switch(ctype){
            //Empty
            case 0 :
                this.objGroup.visible = false;
                break;
            //Normal
            case 1 :
                this.objCeramic.alpha = 1;
                this.objCeramic.visible = false;
                break;
            //Get Board Below It
            case 2 :
                //Just Show All
                this.objCeramic.alpha = 1;
                this.objCeramic.visible = true;
                break;
            //Special Fruit
            case 3 :
                this.objCeramic.alpha = 1;
                this.objCeramic.visible = false;
                break;
                break;
        }
    },

    BreakTheCeramic : function(){
        this.nType = 1;
        game.add.tween(this.objCeramic.scale).to({x : 1.1, y : 1.1}, 200, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.objCeramic).to({alpha : 0}, 300, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            this.objCeramic.visible = false;
        }, this);
    },

    Destroy : function () {
        //Create Tile
        this.objGroup.remove(this.objTile);
        this.objTile.events.onInputDown.remove(this.Click, this);
        this.objTile.events.onInputUp.remove(this.Release, this);
        this.objTile.destroy();
        this.objTile = null;

        this.objGroup.remove(this.objCeramic);
        this.objCeramic.destroy();
        this.objCeramic = null;

        this.objGroup.remove(this.objPressEffect);
        this.objPressEffect.destroy();
        this.objPressEffect = null;

        //Remove Group from Parent
        if(this.objGroup.parent != null){
            this.objGroup.parent.remove(this.objGroup);
        }
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;

        //Remove Event
        this.context = null;
        this.onClickHandler = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(tile.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(tile.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(tile.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 11/14/2014.
 */

/**
 * Constructor and Main Handler
 */
tutorboard = function(parent, clickListener, clickContext){
    //Create Holder and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    //##.Add Object
    //a.main board
    this.objBoard = game.add.group();
    this.objGroup.add(this.objBoard);

    this.objTutorHolder = game.add.group();
    this.objGroup.add(this.objTutorHolder);

    //b.bg
    this.objBG1 = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBG1.frameName = 'obj-boardbg1.png';
    this.objBG1.scale.setTo(2.1, 2.0);
    this.objBoard.add(this.objBG1);

    this.objBG2 = game.add.sprite(65, -16, 'atlas-ingamestatic');
    this.objBG2.frameName = 'obj-boardbg2.png';
    this.objBoard.add(this.objBG2);

    this.objBG3 = game.add.sprite(24, 64, 'atlas-ingamestatic');
    this.objBG3.frameName = 'obj-boardbg3.png';
    this.objBG3.scale.setTo(1.81, 2.4);
    this.objBoard.add(this.objBG3);

    //c.title
    this.txtTitle = game.add.bitmapText(205, 5, 'fnt-berlin','TIPS TO PLAY', 24);
    this.txtTitle.updateTransform();
    this.txtTitle.x = 205 - (this.txtTitle.textWidth * 0.5);
    this.objBoard.add(this.txtTitle);

    //f.button
    this.btnOK = objGameModule.CreateButton( 203, 352, 0.5, 0.5, this.objBoard, 'atlas-title'       , 'btn-ok.png'   , 'CloseTutor'     , clickListener, clickContext);
    this.btnOK.scale.setTo(0.95, 0.95);

    //##.Set Position
    this.objTutorHolder.x = this.objBoard.x = -this.objBG1.width * 0.5;
    this.objTutorHolder.y = this.objBoard.y = -this.objBG1.height * 0.5;

    //##.Set Flag
    this.nID = -1;

    //##.For Tutorial Object
    this.arrObj = [];
    this.arrSpr = [];
};

tutorboard.prototype = {
    Reset   : function (cid){
        var tmpI;
        var tmpObj;
        var tmpSpr;
        //var tmpCX = [];
        //var tmpCY = [];
        //var tmpCM = [];

        //Set ID
        this.nID = cid;

        switch(cid){
            case 1 :
                tmpSpr = game.add.sprite(70, 85, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor1a.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                tmpSpr = game.add.sprite(135, 185, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor4b.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                tmpSpr = game.add.sprite(133, 138, 'atlas-tutoranim1');
                tmpSpr.animations.add('AnimTutorial1', null, 30, true);
                tmpSpr.play('AnimTutorial1', 30, true);
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                //Temporary Timer
                game.time.events.add(2666, function(){
                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(165, 195);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(207, 175);


                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(245, 195);
                }, this);

                game.time.events.loop(3333, function(){
                   game.time.events.add(2666, function(){
                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                       tmpSpr.Play(165, 195);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                       tmpSpr.Play(207, 175);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                       tmpSpr.Play(245, 195);
                    }, this);
                }, this);
                break;
            case 2 :
                tmpSpr = game.add.sprite(40, 75, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor2a.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                tmpSpr = game.add.sprite(212, 137, 'atlas-tutoranim2');
                tmpSpr.animations.add('AnimTutorial2', null, 30, true);
                tmpSpr.play('AnimTutorial2', 30, true);
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                tmpSpr = game.add.sprite(122, 140, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor2b.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                //Temporary Timer
                game.time.events.add(2050, function() {
                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(245, 170);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(245, 230);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(245, 285);
                }, this);

                game.time.events.loop(3000, function(){
                    game.time.events.add(2050, function(){
                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                        tmpSpr.Play(245, 170);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                        tmpSpr.Play(245, 230);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                        tmpSpr.Play(245, 285);
                    }, this);
                }, this);
                break;
            case 3 :
                tmpSpr = game.add.sprite(45, 75, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor3a.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                tmpSpr = game.add.sprite(115, 125, 'atlas-tutoranim3');
                tmpSpr.scale.setTo(1.2, 1.2);
                tmpSpr.animations.add('AnimTutorial3', null, 30, true);
                tmpSpr.play('AnimTutorial3', 30, true);
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                //Temporary Timer
                game.time.events.add(2666, function() {
                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.7, 0.7);
                    tmpSpr.Play(205, 175);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.7, 0.7);
                    tmpSpr.Play(205, 225);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.7, 0.7);
                    tmpSpr.Play(205, 275);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.7, 0.7);
                    tmpSpr.Play(255, 205);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.7, 0.7);
                    tmpSpr.Play(255, 250);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.7, 0.7);
                    tmpSpr.Play(155, 205);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.7, 0.7);
                    tmpSpr.Play(155, 250);
                }, this);

                game.time.events.loop(2966, function(){
                    game.time.events.add(2666, function(){
                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.7, 0.7);
                        tmpSpr.Play(205, 175);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.7, 0.7);
                        tmpSpr.Play(205, 225);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.7, 0.7);
                        tmpSpr.Play(205, 275);

                            tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.7, 0.7);
                        tmpSpr.Play(255, 205);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.7, 0.7);
                        tmpSpr.Play(255, 250);

                         tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                         tmpSpr.self.scale.setTo(0.7, 0.7);
                         tmpSpr.Play(155, 205);

                         tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                         tmpSpr.self.scale.setTo(0.7, 0.7);
                         tmpSpr.Play(155, 250);
                    }, this);
                }, this);
                break;
            case 4 :
                tmpSpr = game.add.sprite(50, 85, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor4a.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                tmpSpr = game.add.sprite(135, 185, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor4b.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                tmpSpr = game.add.sprite(135, 140, 'atlas-tutoranim4');
                tmpSpr.animations.add('AnimTutorial1', null, 30, true);
                tmpSpr.play('AnimTutorial1', 30, true);
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                //Temporary Timer
                game.time.events.add(2666, function(){
                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(165, 195);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(207, 175);


                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(245, 195);
                }, this);

                game.time.events.loop(3333, function(){
                    game.time.events.add(2666, function(){
                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                        tmpSpr.Play(165, 195);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                        tmpSpr.Play(207, 175);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                        tmpSpr.Play(245, 195);
                    }, this);
                }, this);
                break;
            case 5 :
                tmpSpr = game.add.sprite(60, 85, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor5a.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                tmpSpr = game.add.sprite(120, 200, 'atlas-tutoranim5');
                tmpSpr.animations.add('AnimTutorial1', null, 30, true);
                tmpSpr.play('AnimTutorial1', 30, true);
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);

                //Temporary Timer
                game.time.events.add(2666, function(){
                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(155, 268);

                    tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                    tmpSpr.self.scale.setTo(0.5, 0.5);
                    tmpSpr.Play(255, 268);
                }, this);

                game.time.events.loop(3333, function(){
                    game.time.events.add(2666, function(){
                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                        tmpSpr.Play(155, 268);

                        tmpSpr = objParticlePooler.CallObject(this.objTutorHolder);
                        tmpSpr.self.scale.setTo(0.5, 0.5);
                        tmpSpr.Play(255, 268);
                    }, this);
                }, this);
                break;
            case 6 :
                tmpSpr = game.add.sprite(50, 85, 'atlas-tutor');
                tmpSpr.frameName = 'spr-tutor6a.png';
                this.objTutorHolder.add(tmpSpr);
                this.arrSpr.push(tmpSpr);
                break;
        }


    },

    Hide : function(){
        //Temp Variable
        var tmpI;

        //Clear The Board
        this.objTutorHolder.removeAll();

        //Destroy All List
        for(tmpI = 0 ; tmpI < this.arrObj.length ; tmpI++){
            this.arrObj.pop().Destroy();
        }
        this.arrObj = [];

        for(tmpI = 0 ; tmpI < this.arrSpr.length ; tmpI++){
            this.arrSpr.pop().destroy();
        }
        this.arrSpr = [];

        //Remove All Time Events
        game.time.events.removeAll();

        //Hide Object
        this.self.visible = false;
    },

    Destroy : function () {
        //Temp Variable
        var tmpI;

        //##.Add Object
        //a.Clear The Board
        this.objTutorHolder.removeAll();

        //Destroy All List
        for(tmpI = 0 ; tmpI < this.arrObj.length ; tmpI++){
            this.arrObj.pop().Destroy();
        }
        this.arrObj = [];

        for(tmpI = 0 ; tmpI < this.arrSpr.length ; tmpI++){
            this.arrSpr.pop().destroy();
        }
        this.arrSpr = [];

        //Remove All Time Events
        game.time.events.removeAll();

        //b.bg
        this.objBG1.destroy();
        this.objBG1 = null;

        this.objBG2.destroy();
        this.objBG2 = null;

        this.objBG3.destroy();
        this.objBG3 = null;

        //c.title
        this.txtTitle.destroy();
        this.txtTitle = null;

        //f.button
        objGameModule.DestroyButton(this.btnOK)

        //a.main board
        this.objBoard.removeAll();
        this.objBoard.destroy();
        this.objBoard = null;

        //Create Group and Add to Parent
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(tutorboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(tutorboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(tutorboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 9/16/2014.
 */
/**
 * Constructor and Main Handler
 */
winboard = function(args, parent, clickListener, clickContext){
    //Create Group and Add to Parent
    this.objGroup = game.add.group();
    parent.add(this.objGroup);

    //##.Add Object
    //a.main board
    this.objBoard = game.add.group();
    this.objGroup.add(this.objBoard);

    //b.bg
    this.objBG1 = game.add.sprite(0, 0, 'atlas-ingamestatic');
    this.objBG1.frameName = 'obj-boardbg1.png';
    //this.objBG1.scale.setTo(1.88, 2.15);
    this.objBG1.scale.setTo(1.88, 2.30);
    this.objBoard.add(this.objBG1);

    this.objBG2 = game.add.sprite(40, -16, 'atlas-ingamestatic');
    this.objBG2.frameName = 'obj-boardbg2.png';
    this.objBoard.add(this.objBG2);

    this.objBG3 = game.add.sprite(30, 64, 'atlas-ingamestatic');
    this.objBG3.frameName = 'obj-boardbg3.png';
    //this.objBG3.scale.setTo(1.55, 2.50);
    this.objBG3.scale.setTo(1.55, 2.90);
    this.objBoard.add(this.objBG3);

    //c.Star Object
    this.arrObjStar = [];
    this.arrObjShiny = [];
    var tmpStar, tmpShiny;
    for(tmpI = 0 ; tmpI < 3 ; tmpI++){
        tmpShiny = game.add.sprite(175, 165, 'atlas-ingamestatic');
        tmpShiny.frameName = 'obj-shineeffect.png';
        tmpShiny.anchor.setTo(0.5, 0.5);
        this.objBoard.add(tmpShiny);
        tmpShiny.visible = false;
        this.arrObjShiny.push(tmpShiny);
    }
    for(tmpI = 0 ; tmpI < 3 ; tmpI++){
        tmpStar = game.add.sprite(185, 165, 'atlas-ingamestatic');
        tmpStar.frameName = 'obj-star.png';
        tmpStar.anchor.setTo(0.5, 0.5);
        tmpStar.visible = false;
        this.objBoard.add(tmpStar);
        this.arrObjStar.push(tmpStar);
    }

    this.arrObjShiny[1].x = this.arrObjStar[1].x = 90;
    this.arrObjShiny[1].y = this.arrObjStar[1].y = 180;
    this.arrObjStar[1].angle = -20;

    this.arrObjShiny[2].x = this.arrObjStar[2].x = 280;
    this.arrObjShiny[2].y = this.arrObjStar[2].y = 180;
    this.arrObjStar[2].angle = 20;

    //d.title
    this.objTitle = game.add.sprite(76, 84, 'atlas-ingamestatic');
    this.objTitle.frameName = 'obj-stageclearedtxt.png';
    this.objBoard.add(this.objTitle);

    this.txtTitle = game.add.bitmapText(180, 0, 'fnt-berlin','STAGE ' + (nGameLevel + 1).toString(), 35);
    this.txtTitle.updateTransform();
    this.txtTitle.x = 180 - (this.txtTitle.textWidth * 0.5);
    this.objBoard.add(this.txtTitle);

    //e.winning info
    this.objFruitGroup = game.add.group();
    this.objBoard.add(this.objFruitGroup);

    this.objFruitGroupObj1 = [];
    this.objFruitGroupObj2 = [];
    this.objFruitGroupObj3 = [];

    var tmpObj1, tmpObj2, tmpObj3;
    for(var tmpI = 0 ; tmpI < (args.length - 1) ; tmpI++){
        /*
        tmpObj1 = objPiecePooler.CallObject(this.objFruitGroup);
        tmpObj1.Reset(args[tmpI][0], 34 + (tmpI * 70), 25, 0, 0);
        tmpObj1.self.scale.setTo(0.8, 0.8);
        this.objFruitGroupObj1.push(tmpObj1);
        */

        tmpObj1 = game.add.sprite(42 + (tmpI * 70), 46, 'atlas-ingamestatic');
        switch(args[tmpI][0]){
            case 10  :
                tmpObj1.frameName = 'obj-ceramic.png';
                tmpObj1.scale.setTo(0.6, 0.6);
                break;
            case 14  :
                tmpObj1.frameName = 'obj-fruit14-body-normal.png';
                tmpObj1.scale.setTo(0.8, 0.8);
                break;
            default  :
                tmpObj1.frameName = 'obj-fruit' + args[tmpI][0].toString() + '.png';
                tmpObj1.scale.setTo(0.8, 0.8);
                break;
        }
        tmpObj1.anchor.setTo(0.5, 1);
        this.objFruitGroup.add(tmpObj1);
        this.objFruitGroupObj1.push(tmpObj1);

        tmpObj2 = game.add.sprite(0, 38, 'atlas-ingamestatic');
        this.objFruitGroup.add(tmpObj2);
        this.objFruitGroupObj2.push(tmpObj2);

        tmpObj3 = game.add.bitmapText(0, 68, 'fnt-berlin' ,(args[tmpI][1].toString() + ' / ' +  args[tmpI][2].toString()), 18);
        tmpObj3.updateTransform();
        tmpObj3.x = 35 - (tmpObj3.textWidth * 0.5) + (tmpI * 70);
        this.objFruitGroup.add(tmpObj3);
        this.objFruitGroupObj3.push(tmpObj3);

        if(args[tmpI][1] >= args[tmpI][2]){
            tmpObj2.frameName = 'obj-check.png';
            tmpObj2.x = 38 + (tmpI * 70);

            tmpObj3.tint = 0x75E897;
        } else {
            tmpObj2.frameName = 'obj-cross.png';
            tmpObj2.x = 45 + (tmpI * 70);

            tmpObj3.tint = 0xF25B5B;
        }
    }
    this.objFruitGroup.x = (340 - this.objFruitGroup.width) * 0.5;
    this.objFruitGroup.y = 260;

    //f.button
    this.btnRetry = objGameModule.CreateButton( 98, 410, 0.5, 0.5, this.objBoard, 'atlas-ingamestatic', 'btn-retry.png'  , 'Restart'     , clickListener, clickContext);
    this.btnMenu  = objGameModule.CreateButton(272, 410, 0.5, 0.5, this.objBoard, 'atlas-ingamestatic', 'btn-next.png'   , 'BackToMenu'  , clickListener, clickContext);

    //g.score and best score
    var tmpScore = args[args.length - 1];

    this.objTextGroup = game.add.group();
    this.objTextGroup.y = 230;
    this.objBoard.add(this.objTextGroup);

    this.objScoreNew = game.add.sprite(-25, -5, 'atlas-ingamestatic');
    this.objScoreNew.scale.setTo(0.8, 0.8);
    this.objScoreNew.angle = -15;
    this.objScoreNew.frameName = 'obj-newscore.png';
    this.objScoreNew.visible = false;
    this.objTextGroup.add(this.objScoreNew);

    this.txtScoreTitleText = game.add.bitmapText(0, 0, 'fnt-berlin' , 'Score : ', 18);
    this.txtScoreTitleText.tint = 0xE9B91A;
    this.objTextGroup.add(this.txtScoreTitleText);

    this.txtScoreValueText = game.add.bitmapText(70, 0, 'fnt-berlin' , tmpScore.toString(), 18);
    this.txtScoreValueText.tint = 0xE9B91A;
    this.objTextGroup.add(this.txtScoreValueText);

    this.objTextGroup.x = (this.objBoard.width - this.objTextGroup.width) * 0.5;

    if(tmpScore > objGameSave.bestScore[nGameLevel]){
        this.objScoreNew.visible = true;
        objGameSave.bestScore[nGameLevel] = tmpScore;
        objGameStorage.setItem(fSaveID, JSON.stringify(objGameSave));
    }

    //##.Set Position
    this.objBoard.x = -this.objBG1.width * 0.5;
    this.objBoard.y = -this.objBG1.height * 0.5;
};

winboard.prototype = {
    PlayStar : function(cID, cTotal){
        if(this.objGroup == null)   return;
        
        //Show Bonus Star depends on Total
        if(cTotal >= (cID + 1)){
            //Temp Variable
            var tmpScale

            //Set Starting State
            switch(cID){
                case 0 :
                    tmpScale = 1.0;
                    break;
                case 1 :
                    tmpScale = 0.80;
                    break;
                case 2 :
                    tmpScale = 0.80;
                    break;
            }

            this.arrObjStar[cID].scale.setTo(0.1, 0.1);
            this.arrObjStar[cID].visible = true;

            this.arrObjShiny[cID].alpha = 0;
            this.SpinShineEffect(this.arrObjShiny[cID]);
            this.arrObjShiny[cID].scale.setTo(tmpScale * 0.9, tmpScale * 0.9);
            this.arrObjShiny[cID].visible = true;

            game.add.tween(this.arrObjShiny[cID]).to({alpha : 1}, 400, Phaser.Easing.Linear.None, true);
            game.add.tween( this.arrObjStar[cID].scale).to({x : tmpScale, y : tmpScale}, 550, Phaser.Easing.Elastic.Out, true).onComplete.add(function(sprite){
                this.PlayStar(cID + 1, cTotal);
            }, this);

            //Play SFX
            objAudioHandler.playSFX('SFX_Star');
        }
    },

    SpinShineEffect : function(sprite){
        game.add.tween(sprite).to({angle : 360}, 4000, Phaser.Easing.Linear.None, true).onComplete.add(this.SpinShineEffect, this);
    },

    ClickHandler : function(sprite){
        //Scale Handling
        sprite.scale.setTo(0.96, 0.96);

        //Call Context Handling
        if(this.clickContext != null){
            this.clickHandler.apply(this.clickContext, [sprite.name]);
        }
    },

    ReleaseHandler : function(sprite){
        sprite.scale.setTo(1.0, 1.0);
    },

    Destroy : function () {
        //Remove All Object
        this.objBoard.remove(this.objBG1);
        this.objBG1.destroy();
        this.objBG1 = null;

        this.objBoard.remove(this.objBG2);
        this.objBG2.destroy();
        this.objBG2 = null;

        this.objBoard.remove(this.objBG3);
        this.objBG3.destroy();
        this.objBG3 = null;

        this.objBoard.remove(this.objTitle);
        this.objTitle.destroy();
        this.objTitle = null;

        this.objBoard.remove(this.txtTitle);
        this.txtTitle.destroy();
        this.txtTitle = null;

        objGameModule.DestroyButton(this.btnRetry);
        this.btnRetry = null;

        objGameModule.DestroyButton(this.btnMenu);
        this.btnMenu = null;

        //Remove Collect Info
        for(var tmpI = 0 ; tmpI < this.objFruitGroupObj1.length ; tmpI++){
            this.objFruitGroupObj1[tmpI].destroy();
            this.objFruitGroupObj1[tmpI] = null;

            this.objFruitGroup.remove(this.objFruitGroupObj2[tmpI]);
            this.objFruitGroupObj2[tmpI].destroy();
            this.objFruitGroupObj2[tmpI] = null;

            this.objFruitGroup.remove(this.objFruitGroupObj3[tmpI]);
            this.objFruitGroupObj3[tmpI].destroy();
            this.objFruitGroupObj3[tmpI] = null;
        }
        this.objFruitGroupObj1 = [];
        this.objFruitGroupObj2 = [];
        this.objFruitGroupObj3 = [];

        this.objBoard.remove(this.objFruitGroup);
        this.objFruitGroup.removeAll();
        this.objFruitGroup.destroy();
        this.objFruitGroup = null;

        //Remove Star
        for(tmpI = 0 ; tmpI < 3 ; tmpI++){
            objGameModule.StopTweens(this.arrObjStar[tmpI].scale);
            this.arrObjStar[tmpI].destroy();
            this.arrObjStar[tmpI] = null;

            objGameModule.StopTweens(this.arrObjShiny[tmpI]);
            this.arrObjShiny[tmpI].destroy();
            this.arrObjShiny[tmpI] = null;
        }
        this.arrObjStar = [];
        this.arrObjShiny = [];

        //Remove Score
        this.objScoreNew.destroy();
        this.objScoreNew = null;

        this.txtScoreTitleText.destroy();
        this.txtScoreTitleText = null;

        this.txtScoreValueText.destroy();
        this.txtScoreValueText = null;

        this.objTextGroup.removeAll();
        this.objTextGroup.destroy();
        this.objTextGroup = null;

        //Remove Board
        this.objBoard.removeAll();
        this.objBoard.destroy();
        this.objBoard = null;

        //Remove Main Group
        this.objGroup.removeAll();
        this.objGroup.destroy();
        this.objGroup = null;
    }
};

/**
 * Define Object Property
 */
Object.defineProperty(winboard.prototype, "x", {
    get: function () {
        return this.objGroup.x;
    },
    set: function (value) {
        this.objGroup.x = value;
    }
});
Object.defineProperty(winboard.prototype, "y", {
    get: function () {
        return this.objGroup.y;
    },
    set: function (value) {
        this.objGroup.y = value;
    }
});
Object.defineProperty(winboard.prototype, "self", {
    get: function () {
        return this.objGroup;
    }
});
/**
 * Created by Dedy Suwandi on 8/25/2014.
 */
var Main = {};

Main.boot = function(){
    this.sc = ["tactictos.com", "fgl.com"];
};

Main.boot.prototype = {
    preload : function(){
        game.stage.backgroundColor = '#292D5D';

        game.scale.maxIterations = 1;
        game.scale.refresh();

        //Load Preloader Bar
        game.load.image('obj-preloaderbarback'       , './static/obj-preloaderbarback.png');
        game.load.image('obj-preloaderbarborder'     , './static/obj-preloaderbarborder.png');
        game.load.image('obj-preloaderbarfill'       , './static/obj-preloaderbarfill.png');

        game.load.image('obj-gamebg'                 , './static/obj-gamebg.jpg');
        game.load.atlas('atlas-title'               , './static/atlas-title.png'                  , './static/atlas-title.json');
    },

    create  : function() {
        //Check and Add Orientation Event
        if (game.device.desktop) {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        } else {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.forceOrientation(false, true);
            game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        }

        //game.scale.parentIsWindow = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);
        game.scale.refresh();

        //Start Preloader
        //var tmpCheck  = false;
        //var tmpGlName = window.location.hostname;
        //for (var tmpI = 0; tmpI < this.sc.length ; tmpI++){
        //    if (tmpGlName.indexOf(this.sc[tmpI]) != -1) {
        //        tmpCheck = true;
        //        break;
        //    }
        //}
        //if(tmpCheck){
            this.game.state.start('Preloader');
        //}
    },

    enterIncorrectOrientation: function () {
        game.paused = true;
        document.getElementById('orientation').style.display = 'block';
    },

    leaveIncorrectOrientation: function () {
        game.paused = false;
        document.getElementById('orientation').style.display = 'none';
    }
};
/**
 * Created by Dedy Suwandi on 8/25/2014.
 */

Main.game = function(){
    //Layer
    this.layerGame = null;

    //Game-Object
    this.objGameBoard = null;
};

Main.game.prototype = {
    /**
     * PRIVATE HANDLER
     */
    create : function(){
        //1.Initialize Layer Group
        this.layerGame    = game.add.group();
        this.layerUI      = game.add.group();

        //2.Flag and Global Object
        this.nAvailableMove = 0;

        objLinePooler = new poolobject(OBJTYPE_LINE, 10);
        objPiecePooler = new poolobject(OBJTYPE_PIECE, 45);
        objParticlePooler = new poolobject(OBJTYPE_PARTICLESTAR, 10);

        //3.Initialize Other Game-Object and Centralize it
        //##a.Game BG
        this.objGameBG = game.add.sprite(0, 0, 'obj-gamebg');
        this.layerGame.add(this.objGameBG);

        //##b.Game PlayBoard
        this.objGameBoard = new playboard(this.InfoUpdate, this, this.layerGame);

        //##c.Game Info
        this.objGameInfo = new playinfo(this.layerGame, this.ClickHandler, this);

        //##d.Game Pause
        this.objGamePause = new pauseboard(this.layerUI, this.ClickHandler, this);
        this.objGamePause.x = 240;
        this.objGamePause.y = 340;
        this.objGamePause.self.visible = false;

        //##e.Game Tutorial
        this.objGameTutorial = new tutorboard(this.layerUI, this.ClickHandler, this);
        this.objGameTutorial.x = 240;
        this.objGameTutorial.y = 340;
        this.objGameTutorial.self.visible = false;

        //##f.Game Goal Completed
        this.objGameCompleted = game.add.sprite(240, 300, 'atlas-ingamestatic');
        this.objGameCompleted.frameName = 'obj-goalcompleted.png';
        this.objGameCompleted.anchor.setTo(0.5, 0.5);
        this.objGameCompleted.visible = false;
        this.layerGame.add(this.objGameCompleted);

        //##g.Sponsor
        if(sponsorLogo.image){
            objGameModule.CreateButton(10, 710, 0, 1, this.layerGame, 'obj-sponsor', '', 'Sponsor', sponsorLogo.action, this).scale.setTo(0.6, 0.6);
        }

        //##y.Black Layer For UI
        this.objBlackBG = game.add.sprite(0, 0, 'atlas-ingamestatic');
        this.objBlackBG.frameName = 'obj-black.jpg';
        this.objBlackBG.inputEnabled = true;
        this.objBlackBG.alpha = 0;
        this.objBlackBG.scale.setTo(game.world.width / 4, game.world.height / 4);
        this.objBlackBG.visible = false;
        this.layerGame.add(this.objBlackBG);

        //4.Temporary Variable
        this.objGameLose = null;
        this.objGameWin = null;

        //5.Set Flag
        this.nGameState = -1;
        this.fIsGoalCompleted = false;

        //6.Start The Game
        this.Start();

        this.objBGTransition = game.add.graphics(0, 0);
        this.objBGTransition.beginFill(0x000000, 1);
        this.objBGTransition.drawRect(0, 0, game.width, game.height);
        this.objBGTransition.alpha = 1;
        this.objBGTransition.endFill();
        game.add.tween(this.objBGTransition).to({alpha : 0}, 400, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            this.objBGTransition.destroy();
            this.objBGTransition = null;
        }, this);
    },

    update : function(){
        switch(this.nGameState){
            case ON_GAMEWIN   :
            case ON_GAMELOSE  :
            case ON_GAMEPAUSE :
                break;
            case ON_GAMEPLAY  :
                this.objGameBoard.Update();
                break;
        }
    },

    /**
     * PUBLIC HANDLER
     */
    Start   : function(){
        //Play BGM
        objAudioHandler.playBGM("BGM_ingame", true);
        objAudioHandler.fadeInBGM();

        //Prepare Game Board
        this.objGameBoard.Start(objLevelData[nGameLevel].row, objLevelData[nGameLevel].col, objLevelData[nGameLevel].design);
        this.objGameBoard.Disposition((SCREEN_WIDTH - this.objGameBoard.width) * 0.5, (SCREEN_HEIGHT - this.objGameBoard.height) * 0.65);

        //Reset Info
        this.nAvailableMove = objLevelData[nGameLevel].move;
        this.objGameInfo.Reset(objLevelData[nGameLevel].target);
        this.objGameInfo.UpdateMove(this.nAvailableMove);
        this.objGameInfo.AnimIn();

        //Set Flag
        this.nGameState = ON_GAMEPLAY;
        this.fIsGoalCompleted = false;
    },

    Restart : function(){
        //Play BGM
        objAudioHandler.playBGM("BGM_ingame", true);
        objAudioHandler.fadeInBGM();

        objGameModule.CallTransition(function(){
            //Call Ads First
            GameAPI.GameBreak.request(function(){
                game.paused = true;
            }, function(){
                game.paused = false;
            });

            //Hide or Destroy Other Board Possibility
            if(this.objGameLose != null){
                this.objGameLose.Destroy();
                this.objGameLose = null;
            }

            if(this.objGameWin != null){
                this.objGameWin.Destroy();
                this.objGameWin = null;
            }

            if(this.objGamePause.self.visible){
                this.objGamePause.self.visible = false;
            }

            //Remove Black BG
            this.objBlackBG.alpha = 0;
            this.objBlackBG.visible = false;

            //Reset The Board
            this.objGameBoard.Restart();
            this.objGameBoard.Disposition((SCREEN_WIDTH - this.objGameBoard.width) * 0.5, (SCREEN_HEIGHT - this.objGameBoard.height) * 0.65);

            //Reset Info
            this.nAvailableMove = objLevelData[nGameLevel].move;
            this.objGameInfo.Reset(objLevelData[nGameLevel].target);
            this.objGameInfo.UpdateMove(this.nAvailableMove);
            this.objGameInfo.AnimIn();

            //Refresh All Object Pool
            objPiecePooler.Refresh();
            objLinePooler.Refresh();
            objParticlePooler.Refresh();

            //Set Flag
            this.nGameState = ON_GAMEPLAY;
            this.fIsGoalCompleted = false;
        }, this);
    },

    Win : function(){
        //BGM Fade Out
        objAudioHandler.fadeOutBGM(true);
mobConfig.stop();
        //Set Flag
        this.nGameState = ON_GAMEWIN;

        //Block The Screen
        this.objBlackBG.visible = true;
        this.objBlackBG.alpha = 0;

        //Set Value
        var tmpStar = 0;
        var tmpPercentage = (this.objGameInfo.nCurnScore / objLevelData[nGameLevel].score);
        if(tmpPercentage >= 0.87){
            tmpStar = 3;
        }
        else if(tmpPercentage >= 0.60){
            tmpStar = 2;
        }
        else if(tmpPercentage >= 0.33){
            tmpStar = 1;
        } else {
            tmpStar = 0;
        }

        if(tmpStar > objGameSave.lvStats[nGameLevel]){
            objGameSave.lvStats[nGameLevel] = tmpStar;
            if((nGameLevel + 1) < objGameSave.lvStats.length){
                if(objGameSave.lvStats[nGameLevel + 1] == -1){
                    objGameSave.lvStats[nGameLevel + 1] = 0;
                }
            }

            objGameStorage.setItem(fSaveID, JSON.stringify(objGameSave));
        }

        //Start Tweening
        game.add.tween(this.objGameBG).to({x : 0}, 500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            objAudioHandler.playBGM('BGM_win', false);

            //Tween Over The Black BG
            game.add.tween(this.objBlackBG).to({alpha : 0.5}, 200, Phaser.Easing.Linear.None, true);

            //Create and Show The Board
            this.objGameWin = new winboard(this.objGameInfo.GetGameInfo(), this.layerUI, this.ClickHandler, this);
            this.objGameWin.x = 240;
            this.objGameWin.y = 340;
            this.objGameWin.self.scale.setTo(0, 0);
            game.add.tween(this.objGameWin.self.scale).to({x : 1, y : 1}, 700, Phaser.Easing.Elastic.Out, true).onComplete.add(function(){
                this.objGameWin.PlayStar(0, tmpStar);
            }, this);
        }, this);
    },

    Lose  : function(){
        //BGM Fade Out
        objAudioHandler.fadeOutBGM(true);
mobConfig.stop();
        //Set Flag
        this.nGameState = ON_GAMELOSE;

        //Block The Screen
        this.objBlackBG.visible = true;
        this.objBlackBG.alpha = 0;

        //Start Tweening
        game.add.tween(this.objGameBG).to({x : 0}, 500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            objAudioHandler.playBGM('BGM_lose', false);

            //Tween Over The Black BG
            game.add.tween(this.objBlackBG).to({alpha : 0.5}, 200, Phaser.Easing.Linear.None, true);

            //Create and Show The Board
            this.objGameLose = new failboard(this.objGameInfo.GetGameInfo(), this.layerUI, this.ClickHandler, this);
            this.objGameLose.x = 240;
            this.objGameLose.y = 340;
            this.objGameLose.self.scale.setTo(0, 0);
            game.add.tween(this.objGameLose.self.scale).to({x : 1, y : 1}, 700, Phaser.Easing.Elastic.Out, true);
        }, this);
    },

    Pause : function(){
        //Set Flag
        this.nGameState = ON_GAMEPAUSE;

        //Tween Over The Black BG
        this.objBlackBG.visible = true;
        this.objBlackBG.alpha = 0;
        game.add.tween(this.objBlackBG).to({alpha : 0.5}, 200, Phaser.Easing.Linear.None, true);

        //Show The Board
        this.objGamePause.self.visible = true;
        this.objGamePause.self.scale.setTo(0.4, 0.4);
        game.add.tween(this.objGamePause.self.scale).to({x : 1, y : 1}, 600, Phaser.Easing.Elastic.Out, true);
    },

    Resume : function() {
        //Set Flag
        this.nGameState = ON_GAMEPLAY;

        //Hide Over The Black BG
        game.add.tween(this.objBlackBG).to({alpha : 0}, 200, Phaser.Easing.Linear.None, true).onComplete.add(function(sprite){
            this.objBlackBG.visible = false;
        }, this);

        //Hide The Board
        game.add.tween(this.objGamePause.self.scale).to({x : 0, y : 0}, 200, Phaser.Easing.Linear.None, true).onComplete.add(function(sprite){
            this.objGamePause.self.visible = false;
        }, this);
    },

    ShowTutor : function(id){
        if(this.nGameState != ON_GAMEPLAY)  return;1

         //Tween Over The Black BG
         this.objBlackBG.visible = true;
         this.objBlackBG.alpha = 0;
         game.add.tween(this.objBlackBG).to({alpha : 0.5}, 200, Phaser.Easing.Linear.None, true);

         //Show The Board
         objAudioHandler.playSFX('SFX_Explode');
         this.objGameTutorial.self.visible = true;
         this.objGameTutorial.self.scale.setTo(0, 0);
         this.objGameTutorial.Reset(id);
         game.add.tween(this.objGameTutorial.self.scale).to({x : 1, y : 1}, 650, Phaser.Easing.Elastic.Out, true, 50);
    },

    InfoUpdate : function(args1, args2){
        switch(args1){
            case "show-tutor"    :
                this.ShowTutor(args2);
                break;
            case "move-released" :
                this.nAvailableMove--;
                this.objGameInfo.UpdateMove(this.nAvailableMove);

                //Check Lose
                if(this.nGameState == ON_GAMEPLAY){
                    if(this.nAvailableMove <= 0){
                        if(!this.objGameInfo.IsAllFulfilled()){
                            this.Lose();
                        } else {
                            this.Win();
                        }
                    } else {
                        if(!this.fIsGoalCompleted){
                            if(this.objGameInfo.IsAllFulfilled()){
                                this.GoalCompletedAnim();
                            }
                        }
                    }
                }
                break;
            case "piece-collect" :
                this.objGameInfo.CollectFruit(args2);
                break;
        }
    },

    GoalCompletedAnim : function(){
        //Set Flag
        this.fIsGoalCompleted = true;

        //Play SFX
        objAudioHandler.playSFX('SFX_Clap');

        //Play Anim
        this.objGameCompleted.visible = true;
        this.objGameCompleted.alpha   = 1;
        this.objGameCompleted.scale.setTo(0, 0);
        this.objGameCompleted.y = 270;
        game.add.tween(this.objGameCompleted.scale).to({x : 1.5, y : 1.5}, 700, Phaser.Easing.Elastic.Out, true).onComplete.add(function(){
            //Hide
            game.add.tween(this.objGameCompleted).to({y : 260, alpha : 0}, 400, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function(){
                this.objGameCompleted.visible = false;
            }, this);
        }, this);
    },

    shutdown : function(){
        //3.Initialize Other Game-Object and Centralize it
        //##a.Game BG
        this.objGameBG.destroy();
        this.objGameBG =  null;

        //##b.Game PlayBoard
        this.objGameBoard.Destroy();
        this.objGameBoard = null;

        //##c.Game Info
        this.objGameInfo.Destroy();
        this.objGameInfo = null;

        //##d.Game Pause
        this.objGamePause.Destroy();
        this.objGamePause = null;

        //##e.Game Completed
        objGameModule.StopTweens(this.objGameCompleted.scale);
        objGameModule.StopTweens(this.objGameCompleted);
        this.objGameCompleted.destroy();
        this.objGameCompleted = null;

        //2.Tutorial
        this.objGameTutorial.Destroy();
        this.objGameTutorial = null;

        //##y.Black Layer For UI
        this.objBlackBG.destroy();
        this.objBlackBG = null;

        //4.Temporary Variable
        if(this.objGameLose != null){
            this.objGameLose.Destroy();
            this.objGameLose = null;
        }
        if(this.objGameWin != null){
            this.objGameWin.Destroy();
            this.objGameWin = null;
        }

        //1.Pooler
        objLinePooler.Destroy();
        objLinePooler = null;

        objPiecePooler.Destroy();
        objPiecePooler = null;

        objParticlePooler.Destroy();
        objParticlePooler = null;

        //Destroy All Button
        objGameModule.DestroyAllButtons();

        //##.Destroy Group
        this.layerGame.removeAll();
        this.layerGame = null;

        this.layerUI.removeAll();
        this.layerUI = null;
    },

    /**
     * EVENT HANDLER
     */
    ClickHandler : function(sprite){
        switch(sprite.name){
            case "Pause" :
                //Pause The Game
                this.Pause();
                break;
            case "Resume" :
                //Resume The Game
                this.Resume();
                break;
            case "Restart" :
                //Restart The Game
                this.Restart();
                break;
            case "BackToMenu" :
                //BGM Fade Out
                objAudioHandler.fadeOutBGM(true);

                //Go To Stage Select
                objGameModule.CallTransition(function(){
                    //Call Ads First
                    GameAPI.GameBreak.request(function(){
                        game.paused = true;
                    }, function(){
                        game.paused = false;
                    });

                    game.state.start('StageSelect');
                }, this);
                break;
            case "MoreGames"  :
                 urlMoreGames.action();
          
                break;
            case "CloseTutor" :
                //Resume Game
                this.nGameState = ON_GAMEPLAY;

                //Hide Over The Black BG
                game.add.tween(this.objBlackBG).to({alpha : 0}, 200, Phaser.Easing.Linear.None, true).onComplete.add(function(sprite){
                    this.objBlackBG.visible = false;
                }, this);

                //Hide The Board
                game.add.tween(this.objGameTutorial.self.scale).to({x : 0, y : 0}, 200, Phaser.Easing.Linear.None, true).onComplete.add(function(sprite){
                    this.objGameTutorial.Hide();
                }, this);
                break;
        }
    }

};
/**
 * Created by Dedy Suwandi on 8/25/2014.
 */
Main.preloader = function(){
    this.ready = false;
};

Main.preloader.prototype = {
    preload : function(){
        //Init Preloader Text Percentage
        this.objPreloaderBG        = game.add.sprite(0, 0, 'obj-gamebg');
        this.objPreloaderTitle     = game.add.sprite(25, 250, 'atlas-title');
        this.objPreloaderTitle.frameName = 'obj-title.png';

        this.objPreloaderPercent   = game.add.text(240, 585, '0 %');
        this.objPreloaderPercent.anchor.setTo(0.5, 0.5);
        this.objPreloaderPercent.fill = '#FFFFFF';
        this.objPreloaderPercent.font = 'Arial';
        this.objPreloaderPercent.stroke = '#000000';
        this.objPreloaderPercent.strokeThickness = 8;

        //Init Preloader Bar
        this.objPreloaderBarBack   = game.add.sprite(49, 505, 'obj-preloaderbarback');
        this.objPreloaderBarFill   = game.add.sprite(48, 505, 'obj-preloaderbarfill');
        this.objPreloaderBarBorder = game.add.sprite(48, 505, 'obj-preloaderbarborder');
        this.load.setPreloadSprite(this.objPreloaderBarFill);
        this.load.onFileComplete.add(this.loading, this);

        //Set Cross-Origin
        game.load.crossOrigin = true;

        //Load Assets
        //##a.Font
        game.load.bitmapFont('fnt-berlin'           , './static/fnt-berlinsans.png'                         , './static/fnt-berlinsans.xml');
        game.load.bitmapFont('fnt-berlinnormal'     , './static/fnt-berlinsansnormal.png'                   , './static/fnt-berlinsansnormal.xml');
        game.load.bitmapFont('fnt-franklin'         , './static/fnt-franklingothic.png'                     , './static/fnt-franklingothic.xml');

        //##b.Common
        game.load.image('obj-black'                 , './static/obj-black.jpg');

        //##c.Title
        game.load.image('obj-titlebg'                , './static/obj-titlebg.jpg');

        //##d.StageSelect
        game.load.image('obj-stageselectbg'         , './static/obj-stageselectbg.jpg');
        game.load.atlas('atlas-stageselect'         , './static/atlas-stageselect.png'      , './static/atlas-stageselect.json');

        //##e.In-Game
        game.load.atlas('atlas-ingamestatic'        , './static/atlas-ingamestatic.png'          , './static/atlas-ingamestatic.json');
        game.load.atlas('atlas-ingameanim1'         , './static/atlas-ingameanim-1.png'          , './static/atlas-ingameanim-1.json');
        game.load.atlas('atlas-ingameanim2'         , './static/atlas-ingameanim-2.png'          , './static/atlas-ingameanim-2.json');

        //##f.Tutorial
        game.load.atlas('atlas-tutor'               , './static/atlas-tutor.png'                  , './static/atlas-tutor.json');

        game.load.atlas('atlas-tutoranim1'           , './static/atlas-tutoranim1.png'            , './static/atlas-tutoranim1.json');
        game.load.atlas('atlas-tutoranim2'           , './static/atlas-tutoranim2.png'            , './static/atlas-tutoranim2.json');
        game.load.atlas('atlas-tutoranim3'           , './static/atlas-tutoranim3.png'            , './static/atlas-tutoranim3.json');
        game.load.atlas('atlas-tutoranim4'           , './static/atlas-tutoranim4.png'            , './static/atlas-tutoranim4.json');
        game.load.atlas('atlas-tutoranim5'           , './static/atlas-tutoranim5.png'            , './static/atlas-tutoranim5.json');

        //##g.Sponsor Logo
        if(sponsorLogo.image){
            game.load.image('obj-sponsor'                , sponsorLogo.image);
        }

        //##3.Sound
        game.load.audio('SFX', ['./static/SFX.ogg', './static/SFX.mp3']);
        game.load.audio('BGM', ['./static/BGM.ogg', './static/BGM.mp3']);
    },

    loading : function(progress){
        if(progress < 100){
            this.objPreloaderPercent.text = progress.toString() + " %";
        } else {
            this.objPreloaderPercent.text = "preparing...";
        }
    },

    update : function(){
        if (game.cache.isSoundDecoded('BGM') && game.cache.isSoundDecoded('SFX') && !this.ready) {
            this.ready = true;

            if(game.device.iOS){
                this.objPreloaderPercent.text = "tap to continue...";
                game.input.onDown.add(this.start, this);
            } else {
                this.start();
            }
        }
    },

    start  : function(){
        //Go To Title
        objGameModule.CallTransition(function(){
            //Create Audio
            objAudioHandler = new audiohandler();

            //Start The Game
            game.state.start('Title');

        }, this);
    },

    create : function () {
        //Load Game Data
        objGameStorage = GetStorage();
        objGameSave    = JSON.parse(objGameStorage.getItem(fSaveID));

        if(objGameSave == null){
            objGameSave = {
                            lvStats : [0, -1, -1, -1, -1,
                                      -1, -1, -1, -1, -1,
                                      -1, -1, -1, -1, -1,
                                      -1, -1, -1, -1, -1,
                                      -1, -1, -1, -1, -1,
                                      -1, -1, -1, -1, -1],
                            bestScore : [0, 0, 0, 0, 0,
                                         0, 0, 0, 0, 0,
                                         0, 0, 0, 0, 0,
                                         0, 0, 0, 0, 0,
                                         0, 0, 0, 0, 0,
                                         0, 0, 0, 0, 0],
                            /*
                            lvStats : [ 0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0],*/
                           music : true,
                           sfx : true};
            objGameStorage.setItem(fSaveID, JSON.stringify(objGameSave));
        }

        //Copy Stats to StageSelect Lv Stats
        for(var tmpI = 0 ; tmpI < objGameSave.lvStats.length ; tmpI++){
            objSSLvStats.push(objGameSave.lvStats[tmpI]);
        }

        //Create Object Pooler
        objGameModule = new module();
    },

    shutdown : function(){
        //Remove Event
        game.input.onDown.removeAll();

        this.objPreloaderBG.destroy();
        this.objPreloaderBG = null;

        this.objPreloaderPercent.destroy();
        this.objPreloaderPercent = null;

        this.objPreloaderBarBack.destroy();
        this.objPreloaderBarBack = null;

        this.objPreloaderBarFill.destroy();
        this.objPreloaderBarFill = null;

        this.objPreloaderBarBorder.destroy();
        this.objPreloaderBarBorder = null;
    }
};
/**
 * Created by Dedy Suwandi on 10/8/2014.
 */

Main.stageselect = function(){
    this.btnLevelCX = [110, 185, 278, 355, 380,
                       345, 276, 197, 107,  63,
                       125, 215, 300, 385, 380,
                       336, 268, 180, 105,  70,
                       124, 210, 300, 380, 410,
                       377, 312, 237, 151,  82];
    this.btnLevelCY = [1300, 1256, 1240, 1205, 1136,
                       1076, 1045, 1019,  990,  918,
                        860,  837,  808,  732,  662,
                        607,  569,  550,  518,  450,
                        388,  371,  361,  326,  255,
                        195,  160,  145,  135,   93];


    this.nCurnLevel = 0;
};

Main.stageselect.prototype = {
    preload : function(){
        var tmpI;

        //1.Initialize Layer Group
        this.layerSelect   = game.add.group();
        this.layerUI       = game.add.group();

        //2.Flag
        this.onBGDrag = false;
        this.nMaxBoundY =    0;
        this.nMinBoundY = -720;
        this.nCurrentBound = 0;
        this.nStartY = 0;
        this.fEnableInteract = true;

        for(tmpI = 0 ; tmpI < objSSLvStats.length ; tmpI++){
            if(objSSLvStats[tmpI] == -1){
                break;
            } else {
                this.nCurnLevel = tmpI;
            }
        }

        //3.Initialize Other Game-Object and Centralize it
        //##a.Stage Select BG
        this.objStageSelectBG = game.add.sprite(0, 0, 'obj-stageselectbg');
        this.objStageSelectBG.inputEnabled = true;
        this.objStageSelectBG.events.onInputDown.add(this.ClickHandler, this);
        this.objStageSelectBG.events.onInputUp.add(this.ReleaseHandler, this);
        this.layerSelect.add(this.objStageSelectBG);

        //##b.Stage Selector
        this.arrStageSelector = [];
        var tmpSelector;
        for(tmpI = 0 ; tmpI < 30 ; tmpI++){
            tmpSelector = new stageselector(this.layerSelect, tmpI, this.btnLevelCX[tmpI], this.btnLevelCY[tmpI], this.LevelSelect, this.LevelCall, this);
            tmpSelector.SetStar(objSSLvStats[tmpI], false);
            tmpSelector.self.scale.setTo(0.76, 0.76);
            this.arrStageSelector.push(tmpSelector);
        }

        //##c.Stage Update
        this.objStageUpdater = game.add.sprite(0, 0, 'atlas-stageselect');
        this.objStageUpdater.frameName = 'obj-stageunlockeffect.png';
        this.objStageUpdater.scale.setTo(0.77, 0.77);
        this.objStageUpdater.alpha = 0;
        this.layerSelect.add(this.objStageUpdater);

        //##d.Stage Arrow
        this.objStageArrow = game.add.sprite(0, 0, 'atlas-stageselect');
        this.objStageArrow.frameName = 'obj-stagearrow.png';
        this.objStageArrow.anchor.setTo(0.5, 1);
        this.objStageArrow.x = this.btnLevelCX[this.nCurnLevel] + 18;
        this.objStageArrow.y = this.btnLevelCY[this.nCurnLevel] - 20;
        this.layerSelect.add(this.objStageArrow);
        this.PlayArrow();

        //##f.Button Back to Title
        objGameModule.CreateButton(  0, 725,   0,   1, this.layerUI, 'atlas-title', 'btn-setting.png'    , 'Back'     , this.ClickHandler, this);

        //##g.Sponsor
        if(sponsorLogo.image){
            objGameModule.CreateButton(470, 710, 1, 1, this.layerUI, 'obj-sponsor', '', 'Sponsor', sponsorLogo.action, this).scale.setTo(0.7, 0.7);
        }

        //##g.Black BG and Objective Board
        this.objBlackBG = game.add.sprite(0, 0, 'atlas-ingamestatic');
        this.objBlackBG.frameName = 'obj-black.jpg';
        this.objBlackBG.name = 'HideObjective';
        this.objBlackBG.inputEnabled = true;
        this.objBlackBG.events.onInputDown.add(this.ClickHandler, this);
        this.objBlackBG.events.onInputUp.add(this.ReleaseHandler, this);
        this.objBlackBG.scale.setTo(game.world.width / 4, game.world.height / 4);
        this.objBlackBG.visible = false;
        this.layerUI.add(this.objBlackBG);

        this.objGameObjective = new objectiveboard(this.layerUI, this.ClickHandler, this);
        this.objGameObjective.x = 240;
        this.objGameObjective.y = 340;
        this.objGameObjective.self.visible = false;

        //4.Set Layer Position
        this.layerSelect.x = 0;
        this.layerSelect.y = -320;

        //For Drag Handling
        this.nDragCounter = 0;
        this.nDragStartY = this.nDragEndY = this.layerSelect.y;

        //Play BGM
        if(!objAudioHandler.isBGMPlaying()){
            objAudioHandler.playBGM("BGM_mainmenu", true);
            objAudioHandler.fadeInBGM();
        }

        //Start State
        this.objBGTransition = game.add.graphics(0, 0);
        this.objBGTransition.beginFill(0x000000, 1);
        this.objBGTransition.drawRect(0, 0, game.width, game.height);
        this.objBGTransition.alpha = 1;
        this.objBGTransition.endFill();



        //Cross-Check the Condition with Save Game
        var tmpFound = false;
        for(tmpI = 0 ; tmpI < objSSLvStats.length ; tmpI++){
            if(objSSLvStats[tmpI] != objGameSave.lvStats[tmpI]){
                tmpFound = true;
                objSSLvStats[tmpI] = objGameSave.lvStats[tmpI];
                break;
            }
        }

        //AutoPageFocus Handling
        if(tmpFound){
            this.AutoPageFocus(this.btnLevelCY[tmpI]);
            game.time.events.add(600, function(){
                this.LevelFinished(objGameSave.lvStats[tmpI], tmpI);
            }, this)
        } else {
            this.AutoPageFocus(this.btnLevelCY[this.nCurnLevel]);
        }

        game.add.tween(this.objBGTransition).to({alpha : 0}, 500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            this.objBGTransition.destroy();
            this.objBGTransition = null;
        }, this);
    },

    update : function(){
      if(!this.fEnableInteract) return;
      if(this.onBGDrag){
        //Stop Current Tween
        objGameModule.StopTweens(this.layerSelect);

        //Update Current Bound
          this.nCurrentBound = game.input.y - this.nStartY;

        //Update BG Position
        if(this.nCurrentBound > this.nMaxBoundY){
            this.nCurrentBound = this.nMaxBoundY;
        }
        if (this.nCurrentBound < this.nMinBoundY){
            this.nCurrentBound = this.nMinBoundY;
        }
        this.layerSelect.y = this.nCurrentBound;

        //For Drag Release Handler
        if(++this.nDragCounter > 100){
            this.nDragStartY  = this.nDragEndY = this.layerSelect.y;
            this.nDragCounter = 0;
        } else {
            this.nDragEndY = this.layerSelect.y;
        }
      }
    },

    PlayArrow : function(){
        game.add.tween(this.objStageArrow.scale).to({x : 0.9, y : 0.9}, 500, Phaser.Easing.Linear.None, true, 0, true, true).onComplete.add(this.PlayArrow, this);
    },

    ClickHandler : function(sprite){
        switch(sprite.name){
            case "Back" :
                //Back to Title
                objGameModule.CallTransition(function(){
                    game.state.start('Title');
                }, this);
                break;
            case "HideObjective" :
                //Play SFX
                //objAudioHandler.playSFX('SFX_Swosh');

                //Black BG
                game.add.tween(this.objBlackBG).to({alpha : 0}, 150, Phaser.Easing.Linear.None, true);
                game.add.tween(this.objGameObjective.self.scale).to({x : 0, y : 0}, 200, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                     this.objBlackBG.visible = false;
                    this.objGameObjective.self.visible = false;
                }, this);
                break;
            case "Play" :
                 //Go To Game
                 nGameLevel = this.objGameObjective.nCurnLevel;
                 objAudioHandler.fadeOutBGM(true);
                 objGameModule.CallTransition(function(){
                    game.state.start('Game');
                 }, this);
                break;
            default :
                if(!this.fEnableInteract)    return;

                //Reset Flag
                this.onBGDrag = true;
                objGameModule.StopTweens(this.layerSelect);
                this.nStartY = -this.layerSelect.y + game.input.y;
                break;
        }
    },

    LevelSelect : function(id){
        if(!this.fEnableInteract)   return;

        //Play SFX
        objAudioHandler.playSFX('SFX_Click');

        //Black BG
        this.objBlackBG.alpha = 0;
        this.objBlackBG.visible = true;
        game.add.tween(this.objBlackBG).to({alpha : 0.5}, 200, Phaser.Easing.Linear.None, true);

        //Start Tweening
        this.objGameObjective.Reset(id);
        this.objGameObjective.self.visible = true;
        this.objGameObjective.self.scale.setTo(0.4, 0.4);
        game.add.tween(this.objGameObjective.self.scale).to({x : 1, y : 1}, 600, Phaser.Easing.Elastic.Out, true);
    },

    LevelFinished : function(star, level){
        //Set Flag      
        this.fEnableInteract = false;
        this.arrStageSelector[level].SetStar(star ,true);
    },

    LevelCall : function(name){
        switch(name){
            case "level-unlocked" :
                if(this.nCurnLevel == nGameLevel && this.nCurnLevel < 29) {
                    //Update Level
                    this.nCurnLevel += 1;

                    //Unlock Level
                    objSSLvStats[this.nCurnLevel] = 0;

                    //Tween Alpha
                    this.objStageUpdater.x = this.btnLevelCX[this.nCurnLevel] - 2;
                    this.objStageUpdater.y = this.btnLevelCY[this.nCurnLevel] - 34;

                    game.add.tween(this.objStageUpdater).to({alpha: 1}, 450, Phaser.Easing.Linear.None, true).onComplete.add(function () {
                        //Tween The Arrow
                        game.add.tween(this.objStageArrow).to({x: this.btnLevelCX[this.nCurnLevel] + 18, y: this.btnLevelCY[this.nCurnLevel] - 20}, 300, Phaser.Easing.Linear.None, true).onComplete.add(function () {
                            //Set Flag
                            this.fEnableInteract = true;
                        }, this);

                        //Alpha the Selector
                        this.arrStageSelector[this.nCurnLevel].Unlocked();
                        game.add.tween(this.objStageUpdater).to({alpha: 0}, 300, Phaser.Easing.Linear.None, true, 100);
                    }, this);
                } else {
                    this.fEnableInteract = true;
                }
                break;
            case "level-golden" :
                this.objStageUpdater.x = this.btnLevelCX[nGameLevel] - 2;
                this.objStageUpdater.y = this.btnLevelCY[nGameLevel] - 34;
                game.add.tween(this.objStageUpdater).to({alpha : 1} , 450, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                    //Alpha the Selector
                    objAudioHandler.playSFX('SFX_Clap');
                    this.arrStageSelector[nGameLevel].MakeGolden();
                    game.add.tween(this.objStageUpdater).to({alpha : 0} , 300, Phaser.Easing.Linear.None, true, 50).onComplete.add(function(){
                        this.LevelCall("level-unlocked");
                    }, this);
                }, this);
                break;
        }
    },

    AutoPageFocus : function(ctarget){
        var tmpNY = (game.world.height * 0.5) - ctarget;

        this.nCurrentBound = tmpNY;

        if(this.nCurrentBound > (this.nMaxBoundY - 50)){
            this.nCurrentBound = this.nMaxBoundY - 50;
        }
        else if(this.nCurrentBound < (this.nMinBoundY + 50)){
            this.nCurrentBound = this.nMinBoundY + 50;
        }

        //Reset Flag
        this.nDragStartY = this.nDragEndY = this.nCurrentBound;

        //Stop Tween First to avoid Tween Crash
        objGameModule.StopTweens(this.layerSelect);
        game.add.tween(this.layerSelect).to({y : this.nCurrentBound} , Math.round(Math.abs(this.layerSelect.y - this.nCurrentBound) * 3.0), Phaser.Easing.Quadratic.Out, true);
    },

    ReleaseHandler : function(sprite){
        if(!this.onBGDrag)  return;

        //Calculate Drag
        var tmpDragDistance = this.nDragEndY - this.nDragStartY;
        var tmpDragSlide = (tmpDragDistance / this.nDragCounter) * 10;
        if(tmpDragSlide > 100){
            tmpDragSlide = 100;
        }
        if (tmpDragSlide < -100){
            tmpDragSlide = -100;
        }

        //Tween Back the Position
        objGameModule.StopTweens(this.layerSelect);

        this.nCurrentBound += Math.round(tmpDragSlide);
        if(this.nCurrentBound > (this.nMaxBoundY - 50)){
            game.add.tween(this.layerSelect).to({y : this.nMaxBoundY - 50} , 200, Phaser.Easing.Quadratic.Out, true);
        }
        else if(this.nCurrentBound < (this.nMinBoundY + 50)){
            game.add.tween(this.layerSelect).to({y : this.nMinBoundY + 50} , 200, Phaser.Easing.Quadratic.Out, true);
        }
        else {
            game.add.tween(this.layerSelect).to({y : this.layerSelect.y + tmpDragSlide} , 300, Phaser.Easing.Quadratic.Out, true);
        }

        //Reset Flag
        this.onBGDrag = false;
        this.nDragCounter = 0;
        this.nDragStartY = this.nDragEndY = this.layerSelect.y;
    },

    shutdown : function(){
        //Destroy Other Game-Object
        //##a.Stage Select BG
        this.objStageSelectBG.destroy();
        this.objStageSelectBG = null;

        //##b.Stage Selector
        for(var tmpI = 0 ; tmpI < 30 ; tmpI++){
            this.arrStageSelector[tmpI].Destroy();
            this.arrStageSelector[tmpI] = null;
        }
        this.arrStageSelector = [];

        //##c.Stage Update
        objGameModule.StopTweens(this.objStageUpdater);
        this.objStageUpdater.destroy();
        this.objStageUpdater = null;

        //##d.Stage Arrow
        objGameModule.StopTweens(this.objStageArrow.scale);
        objGameModule.StopTweens(this.objStageArrow);
        this.objStageArrow.destroy();
        this.objStageArrow = null;

        //##e.Black BG
        objGameModule.StopTweens(this.objBlackBG);
        this.objBlackBG.events.onInputDown.remove(this.ClickHandler, this);
        this.objBlackBG.events.onInputUp.remove(this.ReleaseHandler, this);
        this.objBlackBG.destroy();
        this.objBlackBG = null;

        //##f.Objective Board
        objGameModule.StopTweens(this.objGameObjective.scale);
        this.objGameObjective.Destroy();
        this.objGameObjective = null;

        //Destroy Layer Group
        this.layerSelect.removeAll();
        this.layerSelect.destroy();
        this.layerSelect = null;

        this.layerUI.removeAll();
        this.layerUI.destroy();
        this.layerUI = null;

        //Clear Button
        objGameModule.DestroyAllButtons();
    }
};
/**
 * Created by Dedy Suwandi on 10/8/2014.
 */
Main.title = function(){
};

Main.title.prototype = {
    preload : function(){
        //1.Initialize Layer Group
        this.layerTitle   = game.add.group();
        this.layerUI      = game.add.group();

        //2.Initialize Other Game-Object and Centralize it
        //##a.Title BG
        this.objTitleBG = game.add.sprite(0, 0, 'obj-titlebg');
        this.layerTitle.add(this.objTitleBG);

        //##b.Title Text
        this.objTitleText = game.add.sprite(32, 70, 'atlas-title');
        this.objTitleText.frameName = 'obj-title.png';
        this.layerTitle.add(this.objTitleText);

        //##c.Title Play Button
        objGameModule.CreateButton(240, 580, 0.5, 0.5, this.layerTitle, 'atlas-title', 'btn-play.png'       , 'Play'            , this.ClickHandler, this);
        objGameModule.CreateButton(240, 670, 0.5, 0.5, this.layerTitle, 'atlas-title', 'btn-moregames.png'  , 'MoreGames'       , this.ClickHandler, this);
        objGameModule.CreateButton(  0, 725,   0,   1, this.layerTitle, 'atlas-title', 'btn-setting.png'    , 'ShowSetting'     , this.ClickHandler, this);
        objGameModule.CreateButton(480, 725,   1,   1, this.layerTitle, 'atlas-title', 'btn-credits.png'    , 'ShowCredits'     , this.ClickHandler, this);

        //##d.Black Layer For UI
        this.objBlackBG = game.add.sprite(0, 0, 'atlas-ingamestatic');
        this.objBlackBG.frameName = 'obj-black.jpg';
        this.objBlackBG.inputEnabled = true;
        this.objBlackBG.alpha = 0;
        this.objBlackBG.scale.setTo(game.world.width / 4, game.world.height / 4);
        this.objBlackBG.visible = false;
        this.layerUI.add(this.objBlackBG);

        //##e.Credits Board
        this.objCredits = new creditsboard(this.layerUI, this.ClickHandler, this);
        this.objCredits.x = 240;
        this.objCredits.y = 360;

        //##f.Settings Board
        this.objSetting = new settingboard(this.layerUI, this.ClickHandler, this);
        this.objSetting.x = 240;
        this.objSetting.y = 360;

        //##g.Sponsor
        if(sponsorLogo.image){
            objGameModule.CreateButton(10, 10, 0, 0, this.layerTitle, 'obj-sponsor', '', 'Sponsor', sponsorLogo.action, this).scale.setTo(0.7, 0.7);
        }

        //5.Play BGM
        if(!objAudioHandler.isBGMPlaying()){
            objAudioHandler.playBGM("BGM_mainmenu", true);
            objAudioHandler.fadeInBGM();
        }

        //Start State
        this.objBGTransition = game.add.graphics(0, 0);
        this.objBGTransition.beginFill(0x000000, 1);
        this.objBGTransition.drawRect(0, 0, game.width, game.height);
        this.objBGTransition.alpha = 1;
        this.objBGTransition.endFill();
        game.add.tween(this.objBGTransition).to({alpha : 0}, 500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            this.objBGTransition.destroy();
            this.objBGTransition = null;
        }, this);
    },

    ClickHandler : function(sprite){
        switch(sprite.name){
            case "Play"      :
                //Go To StageSelect
                objGameModule.CallTransition(function(){
                    if(objGameSave.lvStats[0] == 0){
                        nGameLevel = 0;
                        game.state.start('Game');
                    } else {
                        game.state.start('StageSelect');
                    }
                }, this);
                break;
            case "MoreGames" :
                urlMoreGames.action();
                      window.location.href=mobConfig.mainpage;
                break;
            case "ShowSetting"  :
                //Block The Screen
                this.objBlackBG.visible = true;
                this.objBlackBG.alpha = 0;

                //Tween Over The Black BG
                game.add.tween(this.objBlackBG).to({alpha : 0.5}, 200, Phaser.Easing.Linear.None, true);

                //Create and Show The Board
                this.objSetting.Show();

                break;
            case "ShowCredits"   :
                //Block The Screen
                this.objBlackBG.visible = true;
                this.objBlackBG.alpha = 0;

                //Tween Over The Black BG
                game.add.tween(this.objBlackBG).to({alpha : 0.5}, 200, Phaser.Easing.Linear.None, true);

                //Create and Show The Board
                this.objCredits.Show();
                break;
            case "HideCredits"   :
            case "HideSetting"   :
                //Tween Over The Black BG
                game.add.tween(this.objBlackBG).to({alpha : 0}, 200, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                    this.objBlackBG.visible = false;
                }, this);
                break;
        }
    },

    shutdown : function(){
        //Destroy Other Game-Object
        //##a.Title BG
        this.objTitleBG.destroy();
        this.objTitleBG = null;

        //##b.Title Text
        this.objTitleText.destroy();
        this.objTitleText = null;

        //##c.Black Layer For UI
        this.objBlackBG.destroy();
        this.objBlackBG = null;

        //##d.Credits Board
        this.objCredits.Destroy();
        this.objCredits = null;

        //##e.Settings Board
        this.objSetting.Destroy();
        this.objSetting = null;

        //##f.Title Play Button
        objGameModule.DestroyAllButtons();

        //Destroy Layer Group
        this.layerTitle.removeAll();
        this.layerTitle.destroy();
        this.layerTitle = null;

        this.layerUI.removeAll();
        this.layerUI.destroy();
        this.layerUI = null;
    }
};