<?php
// 本类由系统自动生成，仅供测试用途
class AppAction extends Action {
  //构造函数，验证Session
    public function __construct() {
        parent::__construct(); //一定要注意这一行，这一行是为了执行父类中的构造函数，否则运行是会出错的
        $this->CheckmSession();
    }
    
    private function CheckmSession(){
        if(!$_SESSION['name']){
            if(!(GROUP_NAME=='game'&&MODULE_NAME=="Index"&&ACTION_NAME=="index")){
            	$url=str_replace('.html', '', U('game/Index'));
        		$this->error('当前用户未登录或登录超时，请重新登录',$url);
            }
        }
    }
    
    public function index(){
    	//exit;
		//$this->buildHtml("index",'./',"");//名称 路径 模板文件
		$this->display('index');
    }
	
    //版本添加
    public function releaseAdd(){
        $type=$_POST['type'];
    	$data['release_alias']=trim($_POST['release-alias']);
    	$data['time']=(string)strtotime('+0 hours');
        $file=$_FILES["file"]["tmp_name"];

        if($file){
            $this->importTopgame();
            exit;
        }
    	
        if($type=='countryGame'){
            $data['release_alias']=$data['lang']=trim($_POST['country']);
        }

    	if(!$data['release_alias']){
			$this->error('版本别名不能为空！');
    	}
    	
    	$Tb=M('release_list','game_');
    	$checkRepeat=$Tb->where('release_alias="'.$data['release_alias'].'"')->count();
    	
    	if($checkRepeat>0){
    		$this->error('该版本“'.$data['release_alias'].'”已存在，请更换其它版本！');
    		exit;
    	}
    	
    	$vo=$Tb->add($data);
    	
    	if($vo!== false){
    		$this->success('版本添加成功！');
    	}else{
    		$this->error('Sorry,添加失败！Code:'.$Tb->getError());
    	}     
    }    
    
    //导入Topgame
    private function importTopgame(){
        $file=$_FILES["file"]["tmp_name"];
        $country=trim($_POST['country']);
        $content=file_get_contents($file);

        $topArr=explode(',', $content);
        if(count($topArr)<10){
            $this->error('游戏数量少于10个，请检查数据文件是否正确！');
        }
        
        $Tb=M('release_list','game_');
        $Tb1=M('top100_list','game_');
        $Tb2=M('list','game_');

        $relid=$Tb->where('release_alias="'.$country.'" AND lang="'.$country.'"')
        ->limit(0)->select();
        $relid=$relid[0]['id'];
        if(!relid){
            $this->error('当前语言没有排行榜版本！请先新建版本！');
        }

        $len=count($topArr);

        if($len>=300){
            $len=300;
        }
        foreach ($topArr as $key => $value) {
            if($len<0){continue;}//只保存top 300

            $check=$Tb2->where('seo_name="'.$value.'"')->limit(1)->select();
            if(count($check)<=0){continue;}
            $game_id=$check[0]['id'];

            $check2=$Tb1->where('rel_id='.$relid.' AND game_id='.$game_id)
            ->select();

            if(count($check2)<=0){
                $data['rel_id']=$relid;
                $data['game_id']=$game_id;
                $data['order']=$len;
                $data['time']=(string)strtotime('+0 hours');
                $vo=$Tb1->add($data);
                
            }else{
               $data['id']=$check2[0]['id'];
               $data['order']=$len; 
               $vo=$Tb1->save($data);
            }
            $len--;
        }

        if($vo!== false){
            $this->success('<b>'.$country.'</b>,榜单游戏导入成功！');
        }else{
            $this->error('Sorry,添加失败！Code:'.$Tb1->getError());
        }        

    }

    //版本添加游戏提交页
    public function releaseAddDia(){
 		$relid=$_POST['relid'];
 		$dataid=$_POST['dataId'];
 		if(!$relid||!$dataid){
 			$this->error('error,参数不全！(appid,relid,dataId必须)');
 		}

    	$Tb=M('top100_list','game_');
    	$len=count($dataid);
    	$repeatArr=array();
    	for($i=0;$i<$len;$i++){
    		$data['rel_id']=$relid;
    		$data['game_id']=$dataid[$i];
    		$data['time']=(string)strtotime('+0 hours');
    		
    		$check=$Tb->where('rel_id='.$relid.' AND game_id='.$data['game_id'])->count();
    		if($check>0){
    			$vo=$Tb->where('rel_id='.$relid.' AND game_id='.$data['game_id'])->save($data);
    			array_push($repeatArr,'rel_id='.$relid.'  dia_id='.$data['game_id']);
    		}else{
    			$vo=$Tb->add($data);
    		}
    	}
    	
    	if($vo!== false){
    		$returnStr='游戏入库成功！';
    		$this->assign("waitSecond","3");
    		//echo '<script type="text/javascript">setTimeout(function(){window.top.location.reload();},2900)</script>';
    		if(count($repeatArr)>0){
    			$returnStr.='<br><p style="font-size:14px;background:#f1f1f1;padding:10px;border:solid 1px #ccc;">以下游戏入库重复，已覆盖：<br>'.implode('<br>', $repeatArr).'</p><br>';
    		}
    		$this->success($returnStr);
    	}else{
    		$this->error('Sorry,添加失败！Code:'.$Tb->getError());
    	}
    }      
    
    //版本移除游戏
    public function releaseDiaDel(){
		
    	$type=$_POST['type'];
    	$dataId=$_POST['dataId'];
    	$delid=$_REQUEST['delid'];

    	if($type=='batch'){
    		$dataId=explode(',', $_POST['dataId']);
    	}else{
    		$dataId=array($delid);
    	}
    	
    	$len=count($dataId);
    	
    	$Tb=M('top100_list','game_');
    	for($i=0;$i<$len;$i++){
    		$delid=(int)$dataId[$i];
    		if($delid){
    			$vo=$Tb->where('id='.$delid)->delete();
    		}
    	}
		
    	if($type=='batch'){
			
			if($vo!== false){
				$this->ajaxReturn($vo,'',1);
			}else{
				$this->ajaxReturn('',$Tb->getError(),0);
			}
    		exit;
    	}
    	
		if($vo!== false){
			$this->success('移除成功！');
		}else{
			$this->error('Sorry,移除失败！Code:'.$Tb->getError());
		}
    	
    }    
    
    //版本内游戏排序
    public function releasePicOrder(){
    	$orderId=$_POST['orderId'];
    	$order=$_POST['order'];
    	$hot=$_POST['hot'];
    	$new=$_POST['new'];
        $new=$_POST['feature'];
    	$len=count($order);
    	
    	$Tb=M('top100_list','game_');
    	for($i=0;$i<$len;$i++){
    		$data['id']=(int)$orderId[$i];
    		$data['order']=(int)$order[$i];
    		$data['hot']=(int)$_POST['hot'][$i];
    		$data['new']=(int)$_POST['new'][$i];
            $data['feature']=(int)$_POST['feature'][$i];
    		$vo=$Tb->save($data);
    	}
    	
        if($vo!== false){
    		$returnStr='修改成功！';
    		$this->success($returnStr);
    	}else{
    		$this->error('Sorry,修改失败！Code:'.$Tb->getError());
    	}    
    }
        
    
    //采集Games
    public function gather($t=''){
    	$t=$_POST['sitename'];
    	
    	$_SESSION['sitename']=$_POST['sitename'];
    	$_SESSION['start']=(int)$_POST['start']?(int)$_POST['start']:1;
    	$_SESSION['end']=(int)$_POST['end']?(int)$_POST['end']:10;
    	$_SESSION['now']=$_SESSION['start'];
    	$_SESSION['error_count']=0;

		if(!$t){
			$this->error('Please Input Gather Site!');
		}
    	
    	if($t=='topgames.me'){
    		$this->gatherTopgames();
    	}else if($t=='www.a10.com'){
    		$_SESSION['a10']['start']=11;
    		$_SESSION['a10']['end']=16;
    		
    		$_SESSION['a10']['url']=array();
    		$_SESSION['a10']['img']=array();
    		$_SESSION['a10']['swf']=array();
    		$_SESSION['a10']['name']=array();
    		$_SESSION['a10']['description']=array();
    		
    		$this->gatherA10($_SESSION['a10']['start']);
    	}
    }
    
    public function jump($url=''){
    	echo '<script type="text/javascript">window.location.href="'.$url.'"</script>';
    	exit;
    }
    
    //采集a10.com
    public function gatherA10($page=1){
    	
    	if($_GET['page']){
    		$page=$_GET['page'];
    	}
    	
    	if($page>$_SESSION['a10']['end']){
    		echo '<a href="'.__URL__.'/gatherA10flash?page=1" target="_blank">Gather SWF</a><br>';
    		echo '<a href="'.__URL__.'/gatherA10img" target="_blank">Gather IMG</a>';
    		dump($_SESSION['a10']);
    		exit;
    	}
    	
    	$gatherUrl='http://www.a10.com/popular/'.$page.'?ajax=true&dev=Windows&r=8&c=9';
    	$html=snoopyHtml($gatherUrl);
    	if($html){
	    	preg_match_all('/<a href="(\/(\w*?)\-games\/[\w-]*?)" data-id="\d+">.*?<img src="(.*?)".*?alt="(.*?)".*?\/>/is',$html,$match);
	    	$urlArr=$match[1];
	    	$imgArr=$match[3];
	    	$nameArr=$match[4];
	    	$_SESSION['a10']['img']=array_merge($_SESSION['a10']['img'],$imgArr);
	    	$_SESSION['a10']['url']=array_merge($_SESSION['a10']['url'],$urlArr);
	    	$_SESSION['a10']['name']=array_merge($_SESSION['a10']['name'],$nameArr);
	    	
	    	echo 'Page '.$page.' gather success!<br>';
	    	$page++;
    	}else{
    		echo '<font style="color:red">Page '.$page.' gather fail!</font><br>';
    	}
    	ob_flush();
    	flush();
    	
    	$this->jump(__URL__."/gatherA10?page=".$page);
    }
    
    public function gatherA10img(){
    	$data=$_SESSION['a10']['img'];
    	for($i=0,$len=count($data);$i<$len;$i++){
    		$str.='<img src="'.$data[$i].'"/>';
    	};
    	echo $str;
    }
    
    public function gatherA10flash($page=1){

    	if($_GET['page']){
    		$page=$_GET['page'];
    	}
    	 
    	if($page>count($_SESSION['a10']['url'])){
    		echo '<a href="'.__URL__.'/saveA10data" target="_blank">Save Data</a>';
    		dump($_SESSION['a10']['swf']);
    		dump($_SESSION['a10']['name']);
    		dump($_SESSION['a10']['description']);
    		dump($_SESSION['a10']['url']);
    		
    		exit;
    	}
    	
    	$gatherUrl='http://www.a10.com'.$_SESSION['a10']['url'][$page-1];
    	$html=snoopyHtml($gatherUrl);
    	
    	//dump($html);exit;
    	if($html){
    		preg_match_all('/<meta property="game:url" content="(.{20,})">/i',$html,$match);
    		//dump($match);exit;
    		$swf=$match[1][0];
    		$_SESSION['a10']['swf'][$page-1]=$swf;
    		
    		preg_match_all('/<meta name="description" content="(.*?)">/i',$html,$match);
    		$description=$match[1][0];
    		$_SESSION['a10']['description'][$page-1]=$description;
    		echo 'Page '.$page.' gather success!<br>';
    		$page++;
    	}else{
    		echo '<font style="color:red">Page '.$page.' gather fail!</font><br>';
    	}
    	
    	$this->jump(__URL__."/gatherA10flash?page=".$page);
    }
    
    public function saveA10data(){
    	$dataArr=$_SESSION['a10'];
    	
    	for($i=0,$len=count($dataArr['name']);$i<$len;$i++){
	    	
	    	$data['name']=$dataArr['name'][$i];
	    	$data['swf']=$dataArr['swf'][$i];
	    	$img=explode('/', $dataArr['img'][$i]);
	    	$data['img']=$img[count($img)-1];
	    	$data['height']=500;
	    	$data['width']=700;
	    	$data['desc']=$dataArr['description'][$i];
	    	$data['origin']='www.a10.com';
	    	preg_match_all('/\/(.*?)-games\/.*?/i',$dataArr['url'][$i],$match);
	    	$data['sort']=$match[1][0];
	    	$data['time']=strtotime('+0 hours');
	
	    	//dump($data);exit;
	    	$Tb=M('list','game_');
	    	//检查重复
	    	$check=$Tb->where('name="'.$data['name'].'" AND swf="'.$data['swf'].'"')->count();
	    	if($check){
	    		echo 'Data repeat!Skip it now...<br>';
	    		ob_flush();
	    		flush();
	    	}else{
	    		if($data['name']&&$data['swf']){
		    		$vo=$Tb->add($data);
	    		}
	    	}
    		
    	}
    	
    	echo 'Data save success!';
    	ob_flush();
    	flush();
    }
    
    public function setSEOname(){
    	#return;
    	$Tb=M('list','game_');
    	$vo=$Tb->select();
    	for($i=0,$len=count($vo);$i<$len;$i++){
    		$dataNow=$vo[$i];
    		$name=strtolower($dataNow['name']);
    		
    		$find = array(": "," ",":","'","’",".","'");
    		$replace = array("-","-","-","-","","_","");
    		
    		$seo_name=str_replace($find,$replace,$name);
    		
    		$data['id']=$dataNow['id'];
    		$data['seo_name']=$seo_name;
    		
    		$Tb->save($data);
    		//echo 
    		
    		if($i>10){
    			//exit;
    		}
    		echo 'sucess!';
    	}
    	
    	
    }
    
    //采集Topgames.me
    public function gatherTopgames(){
    	set_time_limit(0);//防止采集超时
    	
    	$_page=$_GET['page'];
    	if($_page){
    		$_SESSION['now']=$_page;
    	}
    	
    	$now=$_SESSION['now'];
    	$end=$_SESSION['end'];
    	
    	echo 'Gather Start...<br>';
		ob_flush();
    	flush();
    	
    	//$gatherUrl=$url.'/page/'.$i;
    	$gatherUrl='http://topgames.me/?a=play&id='.$now.'&pid=_hpl';
	    $html=snoopyHtml($gatherUrl);

	    if($html){
		   	echo 'Content get success,Match start...<br>';
			ob_flush();
	    	flush();
	    }else{
	    	if($_SESSION['error_count']>1){
	    		++$_SESSION['now'];
	    		$page=$_SESSION['now'];
	    		echo 'Content get fail <b>2</b> times...,Jump to next page...';
	    	}else{
		    	$_SESSION['error_count']=0;
		    	$page=$_SESSION['now'];
		    	echo 'Content get fail...,Reget Now';
	    	}
	    	
	    	ob_flush();
	    	flush();
	    	sleep(2);
	    	$this->jump(__URL__."/gatherTopgames?page=".$_SESSION['now']);
	    	exit;
	    }
	    
        preg_match_all('/<div class="title">(.*?)<\/div>/is',$html,$match);
    	$name=$match[1][0];

    	preg_match_all('/<embed src="http:\/\/213.174.155.74:81\/(.*?)" height="(.*?)" width="(.*?)" quality="high".*?><\/embed>/is',$html,$match);
    	$swf=$match[1][0];
    	$img=str_replace('.swf', '.jpg', $swf);
    	$height=$match[2][0];
    	$width=$match[3][0];
    	
    	preg_match_all('/<td class="gamedesc" align="left">(.*?)<\/td>/is',$html,$match);
    	$desc=trim(ntrim($match[1][0]));
    	
    	$data['name']=$name;
    	$data['swf']=$swf;
    	$data['img']=$img;
    	$data['height']=$height;
    	$data['width']=$width;
    	$data['desc']=$desc;
    	$data['origin']='topgames.me';
    	$data['time']=strtotime('+0 hours');
    	$path='http://213.174.155.74:81/'.$img;
    	
    	//dump($data);
    	//exit;
    	error_reporting(E_ALL); 
    	
    	$Tb=M('list','game_');
    	//检查重复
    	$check=$Tb->where('name="'.$name.'" AND swf="'.$swf.'"')->count();
    	if($check){
    		echo 'Data repeat!Skip it now...<br>';
	    	ob_flush();
	    	flush();
	    	$_SESSION['error_count']=0;
	    	++$_SESSION['now'];
	    	
	    	sleep(2);
	    	$this->jump(__URL__."/gatherTopgames?page=".$_SESSION['now']);
	    	exit;
    	}
    	
    	if($data['name']&&$data['swf']){
    		echo 'Content match success,save data now...<br>';
			ob_flush();
	    	flush();
	    	
    		$vo=$Tb->add($data);
    		
    	    if($vo!== false){
	    	    echo 'Data save success,get thumbnail now...<br>';
				ob_flush();
		    	flush();
		    	
    			$result=$this->getPic($img,$path);
    			
    			if(!$result){
    				$result=$this->getPic($img,$path);
    				if(!$result){
		    			echo '<font style="color:red">thumbnail get fail 2 times.</font>Please handle it manually later<br>';
						ob_flush();
				    	flush();    				
    				}
    			}
    			echo 'thumbnail get success.<br>';
    			echo '<b>Page '.$_SESSION['now'].' Gather Success!</b>';
				ob_flush();
		    	flush();
    		}
    	
    	}else{
    	    echo 'Content is empty!.<br>';
			ob_flush();
			flush();
    	}
    	
    	$_SESSION['now']+=1;
    	
    	if($_SESSION['now']>$_SESSION['end']){
    	    echo '<b>'.$_SESSION['start'].'-'.$_SESSION['end'].'</b> Content get success!.<br>Gather END!';
			ob_flush();
			flush();

    		sleep(2);
	    	$this->jump('/admin.php/Index/gameList');
    		exit;
    	}
    	ob_end_flush();

	    sleep(2);
	    $this->jump(__URL__."/gatherTopgames?page=".$_SESSION['now']);
	    exit;
    }

    //获取图片
    public function getPic($img='',$path=''){
    	$filepath='./Uploads/games/images/';
    	$ext=get_imgext($path);
    	$name=$img;
    	
    	$filename=$filepath.$name;

		$imgData=fetch_image($path,10);
		$result=file_put_contents($filename, $imgData);
		return $result;

    }

    public function tagAdd(){
        $data['name']=strtolower(trim($_POST['tagname']));

        if(!$data['name']){
            $this->error('Tag Name 不能为空！');
        }

        $find = array(": "," ",":","'","’",".","'");
        $replace = array("-","-","-","-","","_","");
        $data['seo_name']=strtolower(str_replace($find,$replace,$data['name']));
        $data['seo_name']=trim(str_replace('-games','',$data['seo_name'])).'-games';

        $data['time']=strtotime('+0 hours'); 

        $Tb=M('list','tag_');

        $check=$Tb->where('seo_name="'.$data['seo_name'].'"')->count();
        if($check){
            $this->error('Tag Name 已存在！请更换其它Tag Name.');
            exit;
        }

        $vo=$Tb->add($data);

        if($vo!== false){
            $returnStr='Tag添加成功！';
            $this->success($returnStr);
        }else{
            $this->error('Sorry,Tag 添加失败！Code:'.$Tb->getError());
        }            
    }

    public function tagJsonCreate(){
        $Tb=M('list','tag_');
        $vo=$Tb->select();
        $arr=array();
        for($i=0,$len=count($vo);$i<$len;$i++){
            $data=$vo[$i];
            $name=$data['name'];
            $seo_name=$data['seo_name'];
            $arr[$seo_name]=$name;  
        }
        ksort($arr);
        $file=$_SERVER['DOCUMENT_ROOT'].'/Admin/game/Tpl/tag.json';
        $jsonData=json_encode($arr);
        $result=file_put_contents($file,$jsonData);
        echo '<h3>'.$result.'</h3>';
        echo $jsonData;
    }
    
    public function tagEdit($id='',$dataId='',$type=''){

        $id=$id?$id:(int)$_POST['id'];
        $dataId=$dataId?$dataId:$_POST['dataId'];

        
        if(!$id||!$dataId){
            $this->error('id和dataId不能为空！');
        }

        $Tb=M('tag','game_');
        $tagList=$Tb
        ->where('game_id='.$id)
        ->select();

        $_arr=array();
        foreach ($tagList as $key => $value) {
            array_push($_arr, $value['tag_id']);
        }

        //删除之前无用的tag
        $vo=$Tb->where('game_id='.$id.' AND tag_id NOT IN('.implode(',', $dataId).')')->delete();

        foreach ($dataId as $key => $value) {
            $data['tag_id']=$value;
            $data['game_id']=$id;
            $data['time']=strtotime('+0 hours'); 

            if(in_array($data['tag_id'], $_arr)){//已存在的tag忽略
                continue;
            }

            $vo=$Tb->add($data);
        }

        if($vo!== false){
            $returnStr='Tag保存成功！';

            if($type){
                return 'true';
            }
            $this->success($returnStr);
        }else{
            if($type){
                return 'false';
            }
            $this->error('Sorry,Tag 保存失败！Code:'.$Tb->getError());
        } 
    }

    public function extractTag(){
        $Tb=M('list','game_');

        $gameList=$Tb
        ->field('id,name,desc,sort,3d_type')
        //->limit(100)
        ->select();

        $Tb2=M('list','tag_');
        $tagList=$Tb2->select();

        $_arrGame=array();

        foreach ($gameList as $key => $value) {
            set_time_limit(0);
            $arr[$key]=strtolower(implode(',',$value));
            $arr[$key]=preg_replace('/\s+/', ' ', $arr[$key]);

            $_tagIn=array();
            foreach ($tagList as $key2 => $value2) {

                $exp=explode(' ',$value2['name']);
                foreach ($exp as $key3 => $value3) {
                    if($value3=='up'||$value3=='man'){
                        continue;
                    }
                    $check=stristr($arr[$key], $value3);
                    if($check){
                        array_push($_tagIn, $value2['id']);
                        //echo $value['id'].'  '.$value2['id'].' ';
                        //echo '<b>'.(string)$result.'</b><br>';
                    }
                }
            }

            if(!count($_tagIn)){
                continue;
            }

            $result=$this->tagEdit($value['id'],$_tagIn,'add');
            echo '<b>'.(string)$result.'</b><br>';
            //dump($_tagIn);
            echo '<br>';
            unset($_tagIn);
        }
    }

    public function commentImport(){
//echo ord('9');exit;
        include_once($_SERVER['DOCUMENT_ROOT'].'/Admin/core/Common/ExcelReader/reader.php');

        $excelPath=$_SERVER['DOCUMENT_ROOT'].'/Data/comment.xls';
        $data = new Spreadsheet_Excel_Reader();

        // Set output Encoding.
        $data->setOutputEncoding('UTF-8');
        $data->read($excelPath);

        $gameArr=array();

        $sheet=$data->sheets[3];

        for ($i = 1; $i <= $sheet['numRows']; $i++) {
            for ($j = 1; $j <= $sheet['numCols']; $j++) {
                $gameArr[$i-1][$j]=$sheet['cells'][$i][$j];

                //echo "\"".$sheet['cells'][$i][$j]."\",";
            }
        }
        //exit;
        dump($gameArr);exit;

        $Tb=M('comment','game_');
        for($i=1,$len=count($gameArr);$i<$len;$i++){
            $data=$gameArr[$i];
            $gameList[$i-1]=array(
                'name' => $data[1],
                'comment' => $data[2],
                'lang' => 'br'
            );
            $data=$gameList[$i-1];

            $vo=$Tb->add($data);

        }

        echo $vo;
//dump($gameList);
        exit;
    }



}