<?php
return array(
	//'配置项'=>'配置值'
	'DEFAULT_MODULE' => 'Index', //默认模块
	'APP_GROUP_LIST' =>'game',
	'APP_GROUP_PATH' => '..',
	'APP_GROUP_MODE' => 1,
	'DEFAULT_GROUP' => 'game',	

	'DEFAULT_CHARSET' => 'utf-8', // 默认输出编码
	'APP_STATUS' => 'debug', //应用调试模式状态
	'TMPL_PARSE_STRING' => array (// 站点公共目录
				'__PUBLIC__' => __ROOT__ . '/Public' 
	),

    'DB_DSN' => 'mysql://root:123456@127.0.0.1:3306/thehotgame',//数据库配置
	
	'URL_HTML_SUFFIX'=>'',
	'URL_ROUTER_ON'   => false, //开启路由
	'URL_ROUTE_RULES' => array( //定义路由规则
			'news/:year/:month/:day' => array('News/archive', 'status=1'),
			'news/:id\d'             => 'News/read',
			'news/:name'             => 'News/read',
			'news/read/:id'          => '/news/:1',
			'admin' =>'App/releaseList',
	)
);
?>