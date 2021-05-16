<?php
class EmptyAction extends Action {

	function page404(){
		header( "HTTP/1.1 404 Not Found" );
		
		$content=file_get_contents($_SERVER['DOCUMENT_ROOT'].'/404.html');
		echo $content;
		exit;
	}
	
	function __call($method,$params){
		$this->page404();
	}
	
}
