<?php
return array(
	//'配置项'=>'配置值'
	'DEFAULT_CHARSET' => 'utf-8', // 默认输出编码
	//'APP_STATUS' => 'debug', //应用调试模式状态
	'TMPL_PARSE_STRING' => array (// 站点公共目录
				'__PUBLIC__' => __ROOT__ . '/Public' 
	),
	'AJAX_URL'=>'http://127.0.0.1',
	'APP'=>'top12',
	'REL'=>'44',

	'LANG'=> array(
			'ar','br','cn','de','el','en','es','fr','it','iw','ja','ko','nl','pl','pt','ru','sv','tw','tr','th','vi'
	),
		
		
	'HTML_CACHE_ON'=>false, // 开启静态缓存
	'HTML_PATH' => GROUP_NAME,//静态缓存文件目录，HTML_PATH可任意设置，此处设为当前项目下新建的html目录
    'HTML_FILE_SUFFIX'  =>  '.html', // 设置静态缓存后缀为.shtml
    'HTML_CACHE_RULES'=> array(
		'app:index'=>array('{:group}_{:module}_{:action}_{app}_{rel}_{mid}','3600'),
    ),
);
?>