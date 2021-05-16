<?php
// 本类由系统自动生成，仅供测试用途
class AppAction extends Action {
	
    public function index(){
    	echo '11';
    }
   
    public function login(){
    	$type=$_GET['type'];
    	if($type=='logout'){
    		unset($_SESSION['user']);
    		header('Location:/');
    		exit;
    	}
    	
    	//facebook登陆
    	if($_POST['updated_time']){
    		$this->fbLogin();
    		exit;
    	}
    	
    	$data['uname']=$_POST['username'];
    	$data['psw']=$_POST['password'];
    	 
    	if($data['uname']){
    		$Tb=M('','user');
    		$info=$Tb->where('uname="'.$data['uname'].'"')->field('psw,uid,role,email')->select();
    
    		$psw=$info[0]['psw'];
    		if($data['psw']==$psw&&$psw!=''){

    			$_SESSION['user']=array(
    				'uname'=>$data['uname'],	
    				'uid'=>$info[0]['uid'],
    			);

    			$errorArr=array(
    				'msg'=>'Login success！',
    				'errorType'=>'username',
    				'uinfo'=>array(
    					'name'=>$data['uname'],
    					'email'=>$info[0]['email'],
    					'uid'=>$info[0]['uid']
    				),
    				'status'=>0
    			);
    			
    			die(json_encode($errorArr));
    		}else{
    			$errorArr=array(
    				'msg'=>'Username or password incorrect！',
    				'errorType'=>'username',
    				'status'=>1
    			);
    			die(json_encode($errorArr));
    		}
    	}

    }
    
    private function fbLogin(){
    	$data['type']='fb';
    	$data['uname']=$_POST['id'];
    	$data['email']=$_POST['email'];
    	$data['name']=$_POST['name'];
    	$data['time']=strtotime('+0 hours');
    	$data['uid']=uniqueId();
    	$data['ip']=getIp();
    	
    	$data['detail']=json_encode($_POST);
    	
    	$Tb=M('','user');
    	$check=$Tb->where('uname="'.$data['uname'].'"')->select(); 
    	if(count($check)>=1){
    		$check=$check[0];
    		$errorArr=array(
    			'msg'=>'Login success！',
    			'errorType'=>'username',
    			'uinfo'=>array(
    				'name'=>$check['name'],
    				'email'=>$check['email'],
    				'uid'=>$check['uid']	
    			),
    			'status'=>0
    		);
    		 
    		die(json_encode($errorArr));
    	}else{
    		
    		$vo=$Tb->add($data);

    		if($vo!==false){
    			$_SESSION['user']['uid']=$data['uid'];
    			$_SESSION['user']['uname']=$data['name'];
    			 
    			$errorArr=array(
    					'msg'=>'Register success！',
    					'errorType'=>'',
    					'uinfo'=>array(
    						'name'=>$data['name'],
    						'email'=>$data['email'],
    						'uid'=>$data['uid']
    					),
    					'status'=>0
    			);
    			die(json_encode($errorArr));
    		}else{
    			$errorArr=array(
    					'msg'=>'Register fail,please try again！',
    					'errorType'=>'email',
    					'status'=>1
    			);
    			die(json_encode($errorArr));
    		}
    	}
    	
    }
    
    public function logout(){
    	unset($_SESSION['user']);
    	$url=str_replace('.html', '', U('open/Index/login'));
    	$this->error('Logout Success！',$url);
    }
    
    public function register(){
        $data['uname']=strip_tags($_POST['username']);
    	$data['email']=$_POST['email'];
    	$data['psw']=$_POST['password'];
    	$data['time']=strtotime('+0 hours');
    	$data['uid']=uniqueId();
    	$data['ip']=getIp();
    	//dump($_REQUEST);exit;
    	
    	$errorArr=array();
    	
    	if($data['uname']){
    		$Tb=M('','user');
    		$check=$Tb->where('uname="'.$data['uname'].'"')->count();
    		if($check){
    			$errorArr=array(
    				'msg'=>'Username has been used！',
    				'errorType'=>'username',
    				'status'=>1
    			);
    			
    			die(json_encode($errorArr));
    		}
    		
    		if(!$data['uname']||!$data['email']||!$data['psw']){
    			$errorArr=array(
    				'msg'=>'Username/Password/Email cannot be empty！',
    				'errorType'=>'email',
    				'status'=>1
    			);
    			die(json_encode($errorArr));
    		}    		
    		
    		$vo=$Tb->add($data);
    		//dump($Tb->getLastSql());exit;
    		if($vo!==false){
    			$_SESSION['user']['uid']=$data['uid'];
    			$_SESSION['user']['uname']=$data['uname'];
    			
    			$errorArr=array(
    				'msg'=>'Register success！',
    				'errorType'=>'',
    				'uinfo'=>array(
    					'name'=>$data['uname'],
    					'email'=>$data['email'],
    					'uid'=>$data['uid']
    				),
    				'status'=>0
    			);
    			die(json_encode($errorArr));    			
    		}else{
    			$errorArr=array(
    				'msg'=>'Register fail,please try again！',
    				'errorType'=>'email',
    				'status'=>1
    			);  			
    			die(json_encode($errorArr));
    		}
    		exit;
    	}
    }    
    
    
    
    
    
}