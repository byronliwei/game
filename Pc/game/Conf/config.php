<?php
return array(
	//'配置项'=>'配置值'
	'DEFAULT_CHARSET' => 'utf-8', // 默认输出编码
	//'APP_STATUS' => 'debug', //应用调试模式状态
	'TMPL_PARSE_STRING' => array (// 站点公共目录
				'__PUBLIC__' => __ROOT__ . '/Public' 
	),
	
	//应用相关
	'REL'=>'10',
	'REL_M' => '49',
	'AJAX_URL'=>'http://www.weekmovie.net',
	
	'URL_MODEL' => '2',
		
	'LANG'=> array(
		'ar','br','cn','cs','da','de','el','en','es','fr','he','id','it','ja','ko','nl','pl','pt','ro','ru','sv','tw','tr','th','vi'
	),
	
	'TMPL_CACHE_ON' =>false, //是否开启模板编译缓存 
	
	'HTML_CACHE_ON'=>false, // 开启静态缓存
	'HTML_PATH' => GROUP_NAME,//静态缓存文件目录，HTML_PATH可任意设置，此处设为当前项目下新建的html目录
    'HTML_FILE_SUFFIX'  =>  '.html', // 设置静态缓存后缀为.shtml
    'HTML_CACHE_RULES'=> array(
		'index:lanIndex'=>array('{lang}_{:group}_{:module}_{:action}_{info}','172800'),
		'index:infoPage'=>array('{lang}_{:group}_{:module}_{:action}_{n}_{info}','172800'),
		'index:category'=>array('{lang}_{:group}_{:module}_{:action}_{cata}_{page}_{info}','172800'),
		'index:gameMore'=>array('{lang}_{:group}_{:module}_{:action}_{info}','172800'),
		'index:history'=>array('{lang}_{:group}_{:module}_{:action}_{info}','172800'),
		'index:play'=>array('{lang}_{:group}_{:module}_{:action}_{n}_{info}','172800'),
		'index:tagCataIndex'=>array('{lang}_{:group}_{:module}_{:action}_{cata}_{page}_{n}_{info}','172800'),
		'search:searchdemo'=>array('{lang}_{:group}_{:module}_{:action}_{k}_{info}','172800'),
		'index:webgameIndex'=>array('{lang}_{:group}_{:module}_{:action}_{n}_{info}','172800'),
    ),
);
?>