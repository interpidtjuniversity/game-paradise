/**
 * 静态变量
 */

var SCREEN_WIDTH = 512; //屏幕宽
var SCREEN_HEIGHT = 448;//屏幕高
//MENU_IMAGE.src = "http://www.005.tv/uploads/allimg/161009/1523215548-0.jpg";
//RESOURCE_IMAGE.src = "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180522/web.png";

/**************图片资源*****************/
var MENU_IMAGE = new Image();
MENU_IMAGE.src = "data:image/gif;base64,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"
var RESOURCE_IMAGE = new Image();
RESOURCE_IMAGE.src = "/img/tankAll.5a3797cb.gif";

/**************各个图块在图片中的位置*****************/
var POS = new Array();
POS["selectTank"] = [128,96];
POS["stageLevel"] = [396,96];
POS["num"] = [256,96];
POS["map"] = [0,96];
POS["home"] = [256,0];
POS["score"] = [0,112];
POS["player"] = [0,0];
POS["protected"] = [160,96];
POS["enemyBefore"] = [256,32];
POS["enemy1"] = [0,32];
POS["enemy2"] = [128,32];
POS["enemy3"] = [0,64];
POS["bullet"] = [80,96];
POS["tankBomb"] = [0,160];
POS["bulletBomb"] = [320,0];
POS["over"] = [384,64];
POS["prop"] = [256,110];

/**************声音资源*****************/
var START_AUDIO = new Audio("audio/start.mp3");
var BULLET_DESTROY_AUDIO = new Audio("audio/bulletCrack.mp3");
var TANK_DESTROY_AUDIO = new Audio("audio/tankCrack.mp3");
var PLAYER_DESTROY_AUDIO = new Audio("audio/playerCrack.mp3");
var MOVE_AUDIO = new Audio("audio/move.mp3");
var ATTACK_AUDIO = new Audio("audio/attack.mp3");
var PROP_AUDIO = new Audio("audio/prop.mp3");


/**************游戏状态*****************/
var GAME_STATE_MENU = 0;
var GAME_STATE_INIT = 1;
var GAME_STATE_START = 2;
var GAME_STATE_OVER = 3;
var GAME_STATE_WIN = 4;

/**************地图块*****************/
var WALL = 1;
var GRID = 2;
var GRASS = 3;
var WATER = 4;
var ICE = 5;
var HOME = 9;
var ANOTHREHOME = 8;

/**************坦克及子弹的四个方向*****************/
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

/**************坦克及子弹的四个方向*****************/
var ENEMY_LOCATION = [192,0,384]; //相对与主游戏区

/**************子弹类型*****************/
var BULLET_TYPE_PLAYER = 1;
var BULLET_TYPE_ENEMY = 2;
/**************爆炸类型****************/
var CRACK_TYPE_TANK = "tank";
var CRACK_TYPE_BULLET = "bullet";


export {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    MENU_IMAGE,
    RESOURCE_IMAGE,
    POS,
    START_AUDIO,
    BULLET_DESTROY_AUDIO,
    TANK_DESTROY_AUDIO,
    PLAYER_DESTROY_AUDIO,
    MOVE_AUDIO,
    ATTACK_AUDIO ,
    PROP_AUDIO,


    /**************游戏状态*****************/
    GAME_STATE_MENU,
    GAME_STATE_INIT ,
    GAME_STATE_START ,
    GAME_STATE_OVER ,
    GAME_STATE_WIN ,

    /**************地图块*****************/
    WALL,
    GRID,
    GRASS ,
    WATER ,
    ICE,
    HOME ,
    ANOTHREHOME,

    /**************坦克及子弹的四个方向*****************/
    UP,
    DOWN,
    LEFT ,
    RIGHT,

    /**************坦克及子弹的四个方向*****************/
    ENEMY_LOCATION, //相对与主游戏区

    /**************子弹类型*****************/
    BULLET_TYPE_PLAYER ,
    BULLET_TYPE_ENEMY,
    /**************爆炸类型****************/
    CRACK_TYPE_TANK,
    CRACK_TYPE_BULLET
}



