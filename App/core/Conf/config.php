<?php
return array(
	//'配置项'=>'配置值'
	'DEFAULT_MODULE' => 'Index', //默认模块
	'APP_GROUP_LIST' =>'game',
	'APP_GROUP_PATH' => '..',
	'APP_GROUP_MODE' => 1,
	'DEFAULT_GROUP' => 'game',

	'group_user_db' => array( //各应用安装用户表
		'weekmovie'=>'user_list',
		'tenpic' => 'tenpic_user_list',
		'tarot' => 'tarot_user_list',
		'nima' => 'nima_user_list',
		'shop' => 'shop_user_list'
	),
	
	'URL_MODEL' => '2',
	
	'TMPL_CACHE_ON' =>false, //是否开启模板编译缓存 
	//'SHOW_PAGE_TRACE' =>true, //显示页面Trace信息 
	//'SHOW_ERROR_MSG' =>true, //是否显示错误信息 
	
	'DB_PREFIX' => '',
	// 'DB_DSN' => 'mysql://thehotgames:weekmovie2013@mysql.thehotgames.com:3306/gamev6',//数据库配置
	'DB_DSN' => 'mysql://root:123456@127.0.0.1:3306/thehotgame',//数据库配置
	'DATA_CACHE_TIME'=>1800,//查询数据缓存
	'DB_SQL_BUILD_CACHE' => false,//SQL解析缓存
	'DB_SQL_BUILD_LENGTH' => 30, // SQL缓存的队列长度

	'URL_ROUTER_ON'   => true, //开启路由
	'URL_ROUTE_RULES' => array( //定义路由规则
			'/user\/register/'=>'game/App/register',
			'/user\/login/'=>'game/App/login',
			'/([a-zA-Z\-0-9]{0,3})\/history(\.html)?/'=>'game/Index/history?lang=:1',
			'/([a-zA-Z\-0-9]{0,3})\/webgame\/([a-zA-Z\-0-9_]+)(\.html)?/'=>'game/Index/webgameIndex?lang=:1&n=:2',
			'/webgame\/([a-zA-Z\-0-9_]+)(\.html)?/'=>'game/Index/webgameLanIndex?n=:1',
			'/([a-zA-Z\-0-9]{0,3})\/webgame/'=>'game/Index/webgame?lang=:1',
			'/([a-zA-Z\-0-9]{0,3})\/?game\/more(\.html)?/'=>'game/Index/gameMore?lang=:1',
			'/([a-zA-Z\-0-9]{0,3})\/?game\/played(\.html)?/'=>'game/Index/gamePlayed?lang=:1',
			'/([a-zA-Z\-0-9]{0,3})\/?game\/search(\.html)?/'=>'game/Search/search?lang=:1',
			'/([a-zA-Z\-0-9]{2,3})\/?game\/category\/(top)(\.html)?/'=>'game/Index/category?lang=:1&cata=:2&type=topgame',
			'/([a-zA-Z\-0-9]{2,3})\/?game\/category\/([a-zA-Z\-0-9]+)(\.html)?/'=>'game/Index/category?lang=:1&cata=:2',
			'/([a-zA-Z\-0-9]{2,3})\/?game\/tag\/([a-zA-Z\-0-9]+)(\.html)?/'=>'game/Index/tagCataIndex?lang=:1&cata=:2&type=tag',
			'/([a-zA-Z\-0-9]{2,3})\/?game\/tag(\.html)?/'=>'game/Index/tagIndex?lang=:1&type=tag',
			'/game\/category\/([a-zA-Z\-0-9]+)(\.html)?/'=>'game/Index/lanCategory?cata=:1',
			'/([a-zA-Z\-0-9]{0,3})\/?game\/info\/([a-zA-Z\-0-9_]+)(\.html)?/'=>'game/Index/infoPage?lang=:1&n=:2',
			'/([a-zA-Z\-0-9]{0,3})\/?game\/play\/([a-zA-Z\-0-9_]+)(\.html)?/'=>'game/Index/play?lang=:1&n=:2',
			'/([a-zA-Z\-0-9]{0,3})\/?game\/shortcut\/([a-zA-Z\-0-9_]+)(\.html)?/'=>'game/Index/shortcut?lang=:1&n=:2',
			'/^[a-zA-Z]{2}$/'=>'game/Index/lanIndex?lang=:0',
			'sitemap-html'=>'game/Index/sitemaphtml',
			'sitemap'=>'game/Index/sitemap',
			'indexLoad'=>'game/Index/indexLoad'
	),
);
?>