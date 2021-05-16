<?php
/*
 * Created on 2011-1-25
 *
 * To change the template for this generated file go to
 * 本图片处理类由天骄天下网络工作室：张洋编写
 * 图片处理类包括：生成验证码、生成缩略图、图片水印
 */



//=============== 生成图片验证码=================

/* 生成验证码类使用方法：
 * 1、实例化生成验证码对象：   $p=new verifycode(100,30,20);
 *    其中100是验证码图片的宽度，30是验证码图片的高度，20是验证码文字大小，可根据自己的需要进行更改；
 * 2、调用生成的验证码图片：    <img  src="verifycode.php?t=1000"  title="看不请验证码？点击更换一张" onclick="this.src='verifycode.php?t='+Math.random();">
 *    其中verifycode.php是实例化生成验证码对象的PHP文件（不要漏掉?t=,t后跟的数字可以随意）；
 *    onclick  操作是更换验证码操作，防止生成的验证码无法辨认，t后接的是生成的随机数，这个最好不要随意更改；
 * 3、获取生成的验证码，请打开session,验证码为$_SESSION['verifycode'];根据登陆用户提交的验证码与此进行比较；
 *    验证码输入不区分大小写；
 * 4、本类带有.TTF格式的FONT字体文件夹，请勿丢失或更换文件夹，否则可能不能生成验证码图片；
 *
 */

class verifycode{

 	private  $code_width; //验证码图片宽度
 	private  $code_height;//验证码图片高度
 	private  $code_size;  //验证码文字大小

function __construct($width,$height,$size){

	$this->code_width=$width;
	$this->code_height=$height;
	$this->code_size=$size;
	$this->createimagecode();
	}

function createimagecode(){

    if(@$_GET['t']){       //生成随机数
	    $rand="";
		for($i=0;$i<4;$i++){
		$rand.=dechex(rand(1,15));
	    }
    }else{
	$rand="sunsonworld";
    }
    $_SESSION['verifycode']=strtolower($rand);
    $img=imageCreate($this->code_width,$this->code_height);  //创建画布
    $img_bg=ImageColorAllocate($img,49,93,123);            //填充背景色
    $img_fcolor=ImageColorAllocate($img,243,243,243);          //字体颜色
    $line_color=ImageColorAllocate($img,51,153,204);         //干扰线颜色
    $border_color = ImageColorAllocate($img,49,93,123);//边框颜色

    imagerectangle($img, 0, 0,$this->code_width-1,$this->code_height-1, $border_color);       //创建边框

    for($i=0;$i<3;$i++){                                     //创建干扰线
       imageline($img,rand(2,98),rand(2,28),rand(5,85),rand(5,25),$line_color);
    }
    for($i=0;$i<80;$i++){                                   //创建干扰点
       imagesetpixel($img,rand(2,98),rand(2,28),$line_color);
    }

    $ttf_arr=array("Victorian LET.TTF","StencilStd.otf","Pump_Demi_Bold.TTF","TT0131M_.TTF");   //随机字体列表
    $ttf="font/".$ttf_arr[rand(0,3)];

    imagettftext($img,$this->code_size,rand(0,5),$this->code_width/10,$this->code_height-5,$img_fcolor,$ttf,$rand);   //写入文字
    header("Content-type:image/jpeg");

    imagejpeg($img);      //输出文字
    ImageDestroy($img);   //释放内存



}

}





//=============== 生成水印图片=================

/* 生成水印图片类使用方法：
 * 1、实例化该对象：   $p=new watermark("IMG0517A.jpg","sunsonworld.com",5,2);
 *    其中  IMG0517A.jpg代表图片地址及文件名，sunsonworld.com代表水印文字（只能是英文，暂不支持汉字），
 *    5代表水印文字大小（大小由1到五，请勿用其他数字，数字越大水印文字越大）,2代表文字颜色（此处为1则文字为白色，为2则文字为黑色）；
 * 2、只需要实例化该对象即可，不需要其他操作；
 * 3、水印图片只支持GIF、PNG、JPEG三种格式的图片，其他格式图片不支持水印；
 */

class  watermark{

	private  $image_url;  //原图片的路径
 	private  $text;       //水印文字
 	private  $text_size;  //水印文字大小（1~5之间）
 	private  $text_color; //水印文字颜色

function  __construct($url,$text,$text_size,$text_color){
	$this->image_url=$url;
	$this->text=$text;
	$this->text_size=$text_size;
	$this->text_color=$text_color;
	$this->createwatermark();

}

function  createwatermark(){

	$image=$this->image_url;
	$image_size=GetImagesize($image);
	switch($image_size[2]){
		case  1:
		$watermark_img=@ImageCreateFromGIF($image);
		break;
		case  2:
		$watermark_img=@ImageCreateFromJPEG($image);
		break;
		case  3:
		$watermark_img=@ImageCreateFromPNG($image);
		break;
	}


   	$pos_x=$image_size[0]-strlen($this->text)*(4.5+$this->text_size);    //使水印文字位于图片右下角
   	$pos_y=$image_size[1]-(10+2*$this->text_size);

	$img_fcolor_white=ImageColorAllocate($watermark_img,255,255,255);    //字体颜色-白色
	$img_fcolor_black=ImageColorAllocate($watermark_img,51,51,51);          //字体颜色-黑色

	if($this->text_color==1){$img_fcolor=$img_fcolor_white;}else{$img_fcolor=$img_fcolor_black;}

    imagestring($watermark_img,$this->text_size,$pos_x,$pos_y,$this->text,$img_fcolor);//生成水印图片

    header("Content-type:image/jpeg");
    imagejpeg($watermark_img);
    ImageDestroy($watermark_img);   //释放内存


}

}






//================================生成缩略图================================

/*生成缩略图类使用方法：
 *
 * 1、实例化对象   $p=new image_resized("IMG0517A.jpg",$t,$s);
 *    其中  IMG0517A.jpg为图片地址；
 *    参数t如果为0，则表示图片按等比例缩放，参数s代表缩放比例，
 *    参数t如果不为零，则图像按给定长宽进行缩放，其中$t代表缩放后的宽度，$s代表缩放后的高度；
 * 2、只需要实例化该对象即可，不需要其他操作；
 * 3、缩放图片只支持GIF、PNG、JPEG三种格式的图片，其他格式图片不支持缩放；
 *
 */

class  image_resized{
	private  $image_url;     //原图片地址
	private  $new_width;     //缩略图宽度
	private  $height_ratio;  //缩略比率或新缩略图高度
	private  $savepath;		//图片存放的文件路径

function  __construct($image_url,$image_width,$height_ratio,$savepath,$dataType){
	$this->image_url=$image_url;
	$this->new_width=$image_width;
	$this->height_ratio=$height_ratio;
	$this->savepath=$savepath;
	$this->dataType=$dataType;
	$this->resize_image();
}

function resize_image(){
	$dataType=$this->dataType;
	$savepath=$this->savepath;
	$image=$this->image_url;
	
	if($dataType=="string"){
		$image_size="";
		$image_size=getimagesizefromstring($image);
		$source_img=@imagecreatefromstring($image);
	}else{
		$image_size=GetImagesize($image);
		
		switch($image_size[2]){
			case  1:
			$source_img=@ImageCreateFromGIF($image);
			break;
			case  2:
			$source_img=@ImageCreateFromJPEG($image);
			break;
			case  3:
			$source_img=@ImageCreateFromPNG($image);
			break;
		}
	}

	$source_ratio=$image_size[1]/$image_size[0];
	if($this->new_width==0||$this->height_ratio==0){
		$x=0;
        $y=0;
        if($this->new_width==0){
        	
        	if($this->height_ratio<20){
				$width=$image_size[0]/$this->height_ratio;
				$height=$image_size[1]/$this->height_ratio;
				$re_width=$image_size[0]/$this->height_ratio;
				$re_height=$image_size[1]/$this->height_ratio;
        	}else{
        		$ratio=$image_size[1]/$this->height_ratio;
				$width=$image_size[0]/$ratio;
				$height=$this->height_ratio;

				$re_width=$image_size[0]/$ratio;
				$re_height=$height;
        	}
        }else{
          $width=$this->new_width;
          $re_width=$width;
		  $height=($width/$image_size[0])*$image_size[1];
		  $re_height=$height;
        }
	}else{

		  $width=$this->new_width;
		  $height=$this->height_ratio;
		  if($image_size[0]>$image_size[1]){
		      $re_width=$this->new_width;
		      $re_height=($image_size[1]/$image_size[0])*$re_width;
		      $x=0;
              $y=($height-$re_height)/2;//垂直居中
		   }else{
		      $re_height=$this->height_ratio;
		      $re_width=($image_size[0]/$image_size[1])*$re_height;
              $x=($width-$re_width)/2;//水平居中
              $y=0;
		   }

	}

	
	$new_img=ImageCreateTrueColor($width,$height);

    $color = imagecolorAllocate($new_img,255,255,255);   //分配一个灰色
    imagefill($new_img,0,0,$color);

    imagecopyresampled($new_img,$source_img,$x,$y,0,0,$re_width,$re_height,$image_size[0],$image_size[1]);
	if($savepath){
		$p=ImageJPEG($new_img,$savepath,80);
    	ImageDestroy($new_img);
    	return;
	}else{
	    header("Content-type:image/jpeg");
	    ImageJPEG($new_img,NULL,100);
	    ImageDestroy($new_img);
	}
}



}



?>
