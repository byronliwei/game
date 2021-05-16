<?php
// 本类由系统自动生成，仅供测试用途
class CommonAction extends Action {
    public function index(){
    	echo 'Pulic Admin Action';
    }
    
    public function fileUpload($pathName='',$pathName=''){
    	import('ORG.Net.UploadFile');
    	$upload = new UploadFile();// 实例化上传类
    	$upload->maxSize  = 3145728 ;// 设置附件上传大小
    	$upload->allowExts  = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
    	$upload->savePath = $_SERVER['DOCUMENT_ROOT'].'/Uploads/'.$pathName.'/';// 设置附件上传目录
    	if(!$upload->upload()) {// 上传错误提示错误信息
    		return array('status'=>false,'info'=>$upload->getErrorMsg());
    		//$this->error($upload->getErrorMsg());
    	}else{// 上传成功 获取上传文件信息
    		$info =  $upload->getUploadFileInfo();
    		return array('status'=>true,'info'=>$info[0]);
    		//$this->success("图片上传成功！");
    	}
    }

}