<?php
session_start();
ob_start();
define("APP_DEBUG",true);
header("Content-type: text/html; charset=utf-8");

//定义项目名称和路径
//define('APP_NAME', 'weekmovie');


//define('GROUP_NAME', 'weekmovie');
include './App/core/Common/Mobile_Detect.php';
$detect = new Mobile_Detect();
if ($detect->isMobile() || $detect->isTablet()){
	define('USER_DETECT', 'mobile');
	define('APP_PATH', './App/core/');
}else{
	define('USER_DETECT', 'pc');
	define('APP_PATH', './Pc/core/');
}
require 'ThinkPHP/ThinkPHP.php';
?>