<?php
include_once 'crackAntiLink.php';
include_once 'class_image_edit.php';
include_once 'class_qqwry.php';
include('Snoopy.class.php');
include('phpQuery-onefile.php');

//删除空格
function atrim($str){
	$pre=array(" ","　","\t","\n","\r","\r\n");
	$after=array("","","","","","");
	return str_replace($pre,$after,$str);
}

function ntrim($str){
	$pre=array("\t","\n","\r","\r\n");
	$after=array("","","","");
	return str_replace($pre,$after,$str);
}


//判断URL是否有效
function checkUrl($url){
	if (!preg_match('/http:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&\+\%]*/is',$url)){
	      return false;
	}
	return true;
}

//获取host
function urlHost($url){
	$urlArr=parse_url($url);
	return $urlArr['scheme']."://".$urlArr['host'];
}

//array strip_tags
function arrStripTags($arr,$trim){
	foreach ($arr as $key => $value) {
		$arr[$key]=strip_tags($value);
		if($trim){
			$arr[$key]=atrim($arr[$key]);
		}
	}
	return $arr;
}

//生成文件
function createFile($filename,$data,$mode){
	if($mode){
		$result=file_put_contents($filename,$data,$mode);
	}else{
		$result=file_put_contents($filename,$data);
	}
	return $result;
}

//获取文件大小
function getFileSize($size) {
	$mod = 1024;
	$units = explode(' ','B KB MB GB TB PB');
	for ($i = 0; $size > $mod; $i++) {
		$size /= $mod;
	}
	return round($size, 2) . ' ' . $units[$i];
}

function returnFileSize($myfile){

	if (file_exists($myfile)){
		$filesize=filesize($myfile);
	}
	return getFileSize($filesize);
}



//函数make_dir()建立目录。判断要保存的图片文件目录是否存在，如果不存在则创建目录，并且将目录设置为可写权限。
function make_dir($path){
    if(!file_exists($path)){//不存在则建立
        $mk=@mkdir($path,0777); //权限
        @chmod($path,0777);
    }
    return true;
}

//函数read_filetext()取得图片内容。使用fopen打开图片文件，然后fread读取图片文件内容。
function read_filetext($filepath){
    $filepath=trim($filepath);
    $htmlfp=@fopen($filepath,"r");
    //远程
    if(strstr($filepath,"://")){
        while($data=@fread($htmlfp,500000)){
            $string.=$data;
        }
    }
    //本地
    else{
        $string=@fread($htmlfp,@filesize($filepath));
    }
    @fclose($htmlfp);
    return $string;
}

//函数write_filetext()写文件，将图片内容fputs写入文件中，即保存图片文件。
function write_filetext($filepath,$string){
    //$string=stripSlashes($string);
    $fp=@fopen($filepath,"w");
    @fputs($fp,$string);
    @fclose($fp);
}

//获取文件扩展名
/*PATHINFO_DIRNAME - 目录
PATHINFO_BASENAME - 文件名（含扩展名）
PATHINFO_EXTENSION - 扩展名
PATHINFO_FILENAME - 文件名（不含扩展名，PHP>5.2）
*/

function get_ext($filepath){
	$imgInfo=getimagesize($filepath);
	$extArr=array(
		'image/jpeg'=>'jpg',
		'image/png'=>'png',
		'image/gif'=>'gif'
	);
	return $extArr[$imgInfo['mime']];
}

//函数get_filename()获取图片名称，也可以自定义要保存的文件名。
function get_filename($filepath,$fname=''){
	if($fname){
		$fileName=$fname.'.'.get_ext($filepath);
	}else{
		$fileName=pathinfo($filepath, PATHINFO_FILENAME).'.'.get_ext($filepath);
	}
	return $fileName;
}

//获取有扩展名的图片名称
function get_imgname($filepath){
	$fileName=pathinfo($filepath, PATHINFO_BASENAME);
	return $fileName;
}

//获取有扩展名的图片的扩展名
function get_imgext($filepath){
	$ext=pathinfo($filepath, PATHINFO_EXTENSION);
	return $ext;
}


//然后将几个函数组合，在函数save_pic()中调用，最后返回保存后的图片路径。
function save_pic($url,$savepath='',$fname=''){
    //处理地址
    $url=trim($url);
    $url=str_replace(" ","%20",$url);
    //读文件
    $string=read_filetext($url);
    if(empty($string)){
        echo '读取不了文件';exit;
    }
    //文件名
    $filename = get_filename($url,$fname);
    //存放目录
    make_dir($savepath); //建立存放目录
    //文件地址
    $filepath = $savepath.$filename;
    //写文件
    write_filetext($filepath,$string);
    return $filepath;
}

function get_pic($cont,$path){
	$pattern_src = '/<[img|IMG].*?src=[\'|\"](.*?(?:[\.gif|\.jpg]))[\'|\"].*?[\/]?>/';
	$num = preg_match_all($pattern_src, $cont, $match_src);
	$pic_arr = $match_src[1]; //获得图片数组
	foreach ($pic_arr as $pic_item) { //循环取出每幅图的地址
		save_pic($pic_item,$path); //下载并保存图片
		echo "[OK]..!";
	}
}

//删除缓存文件
function cacheDel($filepath){
	if (file_exists($filepath)){
		$result=unlink ($filepath);
		return $result;
	}else{
		return 1;
	}
}

function snoopyHtml($url){
	$formvars["username"] = "admin";
	$formvars["pwd"] = "admin";
	$action = $url;
	//$formvars = array();
	$snoopy = new Snoopy;
	$snoopy->cookies["PHPSESSID"] = 'fc106b1918bd522cc863f36890e6fff7'; //伪装sessionid
	$snoopy->agent = "(compatible; MSIE 4.01; MSN 2.5; AOL 4.0; Windows 98)"; //伪装浏览器
	$snoopy->referer = 'http://'.getdomain($url); //伪装来源页地址 http_referer
	$snoopy->rawheaders["Pragma"] = "no-cache"; //cache 的http头信息
	$snoopy->rawheaders["X_FORWARDED_FOR"] = "127.0.0.101"; //伪装ip
	$snoopy->submit($action, $formvars);

	$html = $snoopy->results;
	return $html;
}

//我们采集太平洋电脑网上一篇关于手机报道内容页的图片
/*
$url = "http://gz.pconline.com.cn/321/3215791.html";

$content = file_get_contents($url);//获取网页内容
$preg = '#<div class="art_con">(.*)<div class="ivy620 ivy620Ex"></div>#iUs';
preg_match_all($preg, $content, $arr);
$cont = $arr[1][0];
get_pic($cont,'img/');
*/

function uniqueId(){
	$year_code = array('A','B','C','D','E','F','G','H','I','J');
	$order_sn = $year_code[intval(date('Y'))-2010].strtoupper(dechex(date('m'))).date('d').substr(time(),-5).substr(microtime(),2,5).sprintf('%02d',rand(0,99));
	return $order_sn;
}

function get_url($type=''){
	$url = (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443') ? 'https://' : 'http://';
	$url .= $_SERVER['HTTP_HOST'];
	if($type=='domain'){
		return $url;
	}

	$url .= isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : urlencode($_SERVER['PHP_SELF']) . '?' . urlencode($_SERVER['QUERY_STRING']);
	return $url;
}

?>