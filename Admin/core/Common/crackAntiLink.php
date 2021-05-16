<?php

//获取HOST信息
function getHost($url) {
    $result = preg_match('/^http:\/\/([\d|\w|\.]+)\//', $url, $matches);
    if (sizeof($matches) >= 2)  {
        return $matches[1];
    } else {
        return null;
    }
}

function getdomain($url) {
	$host = strtolower ( $url );
	
	if (strpos ( $host, '/' ) !== false) {
		$parse = @parse_url ( $host );
		$host = $parse ['host'];
	}
	
	$topleveldomaindb = array ('com', 'edu', 'gov', 'int', 'mil', 'net', 'org', 'biz', 'info', 'pro', 'name', 'museum', 'coop', 'aero', 'xxx', 'idv', 'mobi', 'cc', 'me' );
	$str = '';
	foreach ( $topleveldomaindb as $v ) {
		$str .= ($str ? '|' : '') . $v;
	}

	$matchstr = "[^\.]+\.(?:(" . $str . ")|\w{2}|((" . $str . ")\.\w{2}))$";
	if (preg_match ( "/" . $matchstr . "/ies", $host, $matchs )) {
		$domain = $matchs ['0'];
	} else {
		$domain = $host;
	}
	
	return $domain;
}

//输出IMG CURL()函数方法
function fetch_image($url,$timeout='') {
	if(!$timeout){
		$timeout=29;
	}
	
    $curl = curl_init($url); //初始化
    curl_setopt($curl, CURLOPT_HEADER, FALSE);
    curl_setopt($curl, CURLOPT_TIMEOUT, $timeout);#超时时间s
    //将结果输出到一个字符串中，而不是直接输出到浏览器
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
    //最重要的一步，手动指定Referer
    curl_setopt($curl, CURLOPT_REFERER, 'http://'.getdomain($url));
    $re = curl_exec($curl); //执行
    if (curl_errno($curl)) {
        return NULL;
    }
    return $re;
}


//输出IMG FILE()函数方法
function show_image($url){

	$pics=file($url);
	return implode('',$pics);
}

//输出IMG stream_context_create()方法
function getRemoteFile($url, $refer = '') {
    $option = array(
            'http' => array(
                'header' => "Referer:$refer;Host:movie.douban.com"
    			)
            );
    $context = stream_context_create($option);
    return file_get_contents($url, false, $context);
}

function save_file($savepath='',$fname='',$fcontent=''){
	file_put_contents( $savepath.$fname, $fcontent);
}

function checkFileExist($url,$path){
	
	
	
}

function getImage(){
	if (file_exists(get_filename($url))) { // cache hit!
		echo file_get_contents(get_filename($url));
		exit();
	} else { // save cache
		$filename = get_filename($url);
		file_put_contents( $filename, fetch_bbs_image($url) );
		echo file_get_contents($filename);
	}	
	
}


//header("Content-Type: image/jpeg");
//$url="http://img3.douban.com/view/photo/raw/public/p2155413227.jpg";
//echo fetch_image($url);
//echo getRemoteFile($url,'http://'.getdomain($url));
//echo fetch_image($url);
//phpinfo();
//header("Content-Type: image/jpeg");
//echo fetch_bbs_image($url);

?>