<?php

function unzip_file($file, $destination){
	// 实例化对象
	$zip = new ZipArchive() ;
	//打开zip文档，如果打开失败返回提示信息
	if ($zip->open($file) !== TRUE) {
		return array(
			'status'=>false,
			'info'=>"无法打开压缩文件！(请检查压缩包)"
		);
	}
	//将压缩文件解压到指定的目录下
	$zip->extractTo($destination);
	//关闭zip文档
	$zip->close();
	return array(
		'status'=>true,
		'info'=>"文件成功解压！"
	);
}
//测试执行
$result=unzip_file("www.zip","./");
print_r($result);






?>