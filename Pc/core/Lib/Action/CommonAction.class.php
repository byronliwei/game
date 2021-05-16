<?php
class CommonAction extends Action {
    public function ec(){
    	echo GROUP_NAME;
    	echo C('appkey');
    	echo 'Front Public Action!';
    }
  
}
?>