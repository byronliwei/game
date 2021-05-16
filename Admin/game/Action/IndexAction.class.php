<?php

// 本类由系统自动生成，仅供测试用途
class IndexAction extends CommonAction {
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
    	$name=$_POST['name'];
    	$pw=$_POST['password'];
    	if($_POST['name']){
	    	if($name!="admin"||$pw!="dream2017world"){
	    		session_unset();
	    		$this->error('用户名或密码错误！');
	    	}else{
	    		$_SESSION['name']=$name;
	    	 	header('Location: '.__APP__.'/Index/panel');
	    	 	exit;
	    	}
    	}
    	$this->display();
    }

    public function searchGame() {
        if (isset($_POST['key']) && !empty($_POST['key'])) {
            $key = $_POST['key'];

            $where = array (
                'name' => array('like', '%'.$key.'%'),
                'desc' => array('like', '%'.$key.'%'),
                '_logic' => 'or'
            );

            $this -> gameList('gameList', 200, $where);
        } else {
            $this -> redirect('gameList');
        }
    }


    //版本列表
    public function releaseList($_where=''){

    	import('ORG.Util.Page');// 导入分页类

    	$Tb=M('release_list','game_');

        $where=$_where?$_where:'lang=""';
    	$totalNum=$Tb->where($where)->count();
 		$page = new Page ( $totalNum,50);
		$releaseList=$Tb->where($where)->limit($page->firstRow.','.$page->listRows)->order("id desc")->select();
		$pagination = $page->show ();

		$this->assign ( "pagination", $pagination );
    	$this->assign('releaseList',$releaseList);
        $this->assign('pageLen',50);

        if(!$_where){
        	$this->display();
        }
    }

    //版本分配首页
    public function releaseDist($tmp='',$pageLen=100,$where=''){
    	import('ORG.Util.Page');// 导入分页类

        $relid=$_REQUEST['relid'];
    	$r=0.8;
        if (isset($_REQUEST['r'])) {
            $r = floatval($_REQUEST['r']);
        }

    	if(!$relid){
    		$this->error('参数错误！');
    	}

    	$Tb=M('top100_list','game_');

    	$totalNum=$Tb
    	->where('rel_id='.$relid)
    	->count();
 		$page = new Page ( $totalNum,$pageLen);

    	$vo=$Tb->alias('p')
    	->join('game_list AS q ON p.game_id=q.id')
    	->where('p.rel_id='.$relid)
    	->field('p.*,q.name,q.desc,q.img,q.sort,q.id as t,q.seo_name,q.origin')
    	->limit($page->firstRow.','.$page->listRows)
    	->order('p.order DESC,id DESC')
    	->select();

    	$pagination = $page->show ();

		$len=count($vo);
		for($i=0;$i<$len;$i++) {
            $thimgpath = empty($vo[$i]['sort']) ? 'images' : $vo[$i]['sort'];
            list($width, $height) = getimagesize('./Uploads/games/'.$thimgpath.'/'.$vo[$i]['img']);
            $vo[$i]['th_width'] = $width;
            $vo[$i]['th_height'] = $height;
            $min = min($width, $height);
            $max = max($width, $height);
            $resolution = $min / $max;
            if ($resolution < $r) {
                $vo[$i]['r'] = $resolution;
            }
		}

		$this->assign ( "pagination", $pagination );
    	$this->assign('topList',$vo);
        $this->assign('gameList',$vo);
        $this->assign('pageLen',$pageLen);

    	$this->display($tmp);
    }

    //版本对话添加
    public function releaseDicAdd(){
        $type=$_GET['type'];
        $where = array();
        if (isset($_POST['key']) && !empty($_POST['key'])) {
            $key = $_POST['key'];
            $where='name like "%'.$key.'%" OR seo_name like "%'.$key.'%"';
            // $where['name'] = array('like', '%'.$key.'%');
        }

    	if(!empty($type)){
            $where['sort'] = $type;
    	}
    	$this->gameList('releaseDicAdd',200,$where);
    }


    //版本专题开启/关闭
    public function topicSwitch(){
        $Tb=M('release_list','game_');
        $relid=$_GET['relid'];
        $type=$_GET['t'];

        $str=$type=='on'?'开启':'关闭';

        $data['topic']=$type=='on'?1:0;
        $data['id']=(int)$relid;

        $vo=$Tb->save($data);
        if($vo!== false){
            $returnStr='专题'.$str.'成功！';
            $this->success($returnStr);
        }else{
            $this->error('Sorry,专题'.$str.'失败！Code:'.$Tb->getError());
        }
    }

    //排行榜专题开启/关闭
    public function rankSwitch(){
        $Tb=M('release_list','game_');
        $relid=$_GET['relid'];
        $type=$_GET['t'];

        $str=$type=='on'?'开启':'关闭';

        $data['lang_enable']=$type=='on'?1:0;
        $data['id']=(int)$relid;

        $vo=$Tb->save($data);
        if($vo!== false){
            $returnStr='排行'.$str.'成功！';
            $this->success($returnStr);
        }else{
            $this->error('Sorry,排行'.$str.'失败！Code:'.$Tb->getError());
        }
    }    

    public function countryGame(){
        $this->releaseList($where='lang!=""');
        $this->display();
    }

    private function getCataList(){
        $Tb=M('release_list','game_');
        $vo=$Tb->where('lang=""')->select();
        $this->assign('cataList',$vo);
        return $vo;
    }

    private function getCataGameList($cataid=''){

    }

    public function gameList($tmp='',$pageLen='',$where=''){
    	import('ORG.Util.Page');// 导入分页类

    	$Tb=M('list','game_');

    	$pageLen=$pageLen?$pageLen:100;
    	$totalNum=$Tb->alias('p')
    	->where($where)
    	->count();

 		$page = new Page ( $totalNum,$pageLen);

    	$list=$Tb->alias('p')
    	->order('p.id DESC,p.time DESC')
    	->where($where)
        ->limit($page->firstRow.','.$page->listRows)
        ->select();

        $len=count($list);
        $r = 0.8;
        for($i=0;$i<$len;$i++) {
            $thimgpath = empty($list[$i]['sort']) ? 'images' : $list[$i]['sort'];
            list($width, $height) = getimagesize('./Uploads/games/'.$thimgpath.'/'.$list[$i]['img']);
            $list[$i]['th_width'] = $width;
            $list[$i]['th_height'] = $height;
            $min = min($width, $height);
            $max = max($width, $height);
            $resolution = $min / $max;
            if ($resolution < $r) {
                $list[$i]['r'] = $resolution;
            }
        }

    	$pagination = $page->show ();

    	$len=count($list);

		//print_r($list);
    	$this->assign('gameList',$list);
        $this->assign('pageLen',$pageLen);
    	$this->assign ( "pagination", $pagination );
    	$this->display($tmp);
    }

    public function getSEOname($img=''){
    	$seoName=explode('.', $img);
    	$seoName=$seoName[0];
    	return $seoName;
    }

    public function gameDel(){
    	$id=(int)$_GET['id'];

        $Tb=M();
        $query='DELETE t1,t2 FROM game_list AS t1,game_top100_list AS t2 WHERE t1.id=t2.game_id AND t1.id='.$id;
        $vo=$Tb->query($query);

    	if($vo!== false){
    		$returnStr='游戏删除成功！';
    		$this->success($returnStr);
    	}else{
    		$this->error('Sorry,游戏删除失败！Code:'.$Tb->getError());
    	}
    }

    public function gather(){
    	//$gatherUrl=$url.'/page/'.$i;
    	$gatherUrl='http://topgames.me/?a=play&id=53&pid=_hpl';
	    $html=snoopyHtml($gatherUrl);

        preg_match_all('/<div class="title">(.*?)<\/div>/is',$html,$match);
    	$title=$match[1][0];

    	preg_match_all('/<embed src="http:\/\/213.174.155.74:81\/(.*?)" height="(.*?)" width="(.*?)" quality="high".*?><\/embed>/is',$html,$match);
    	$swf=$match[1][0];
    	$img=str_replace('.swf', '.jpg', $swf);
    	$height=$match[2][0];
    	$width=$match[3][0];

    	preg_match_all('/<td class="gamedesc" align="left">(.*?)<\/td>/is',$html,$match);
    	$desc=trim(ntrim($match[1][0]));
    	dump($desc);
    	//dump($match);
    	//$title=$match[1][0];


	    echo '<img src="http://213.174.155.74:81/'.$img.'">';
		//echo 'admin cpanel';
    	//exit;
		//$this->buildHtml("index",'./',"");//名称 路径 模板文件
		//$this->display('index');
    }

    public function clearCache(){
    	$cachefile =$_SERVER['DOCUMENT_ROOT'].'/App/core/Html';
    	$this->deldir($cachefile,$_GET['lang'],$_GET['cata']);
    	echo '缓存清除成功！';
    	exit;
    }

    public function clearCacheCountry(){
    	$country=$_GET['country'];
    	$cachefile =$_SERVER['DOCUMENT_ROOT'].'/App/core/Html';
    	$this->deldir($cachefile,$country);
    	echo '缓存清除成功！';
    	exit;
    }


    private function  _delfile($fullpath,$file){
        unlink($fullpath);
        echo 'Del <b>'.$file.'</b> success<br>';
    }
    private function deldir($dir='',$lang='',$cata='') {
        if($lang=='all')$lang='';
        if($cata=='all')$cata='';
    	set_time_limit(0);//防止超时
    	echo '<b>Clear Cache Start...</b><br>';
    	ob_flush();
    	flush();
    	//先删除目录下的文件：
    	$dh=opendir($dir);
    	$i=0;$j=0;

    	while ($file=readdir($dh)) {
    		if($file!="." && $file!="..") {
    			$fullpath=$dir."/".$file;
    			if(!is_dir($fullpath)) {

                    $str_lang=$lang?$lang.'_game':'_';
                    $str_cata=$cata?'_'.$cata.'_':'_';

					if(strpos($file,$str_lang)>-1&&strpos($file,$str_cata)>-1){
						$this->_delfile($fullpath,$file);
						$j++;
					}
    			} else {
    				$this->deldir($fullpath,$lang,$cata='');
    			}
    			ob_flush();
    			flush();
    			$i++;
    		}
    	}
    	if($lang){
    		$str='Deleate Lang <b>'.$lang.'</b><br>';
    	}
    	echo 'Files number <b>'.$i.'</b><br>'.$str.'Delete number <b>'.$j.'</b><br>';
    	ob_flush();
    	flush();

    	closedir($dh);
    	ob_end_flush();
    	return;
    	//删除当前文件夹：
    	/*if(rmdir($dir)) {
    		return true;
    	} else {
    		return false;
    	}*/
    }

    public function userList(){
    	import('ORG.Util.Page');// 导入分页类
    	$QQWry=new QQWry;

    	$Tb=M('','user');
    	$userList=$Tb
    	->order('id DESC')
    	->select();

    	$len=count($userList);
    	for($i=0;$i<$len;$i++){
    		//定位IP
    		$ip=$userList[$i]['ip'];
    		if($ip){
    			$ipinfo = $QQWry->QQWry($ip);
    			$coutry=iconv('gb2312', 'utf-8',$QQWry->Country);
    			$local=iconv('gb2312', 'utf-8',$QQWry->Local);
    			$location=$coutry.'  '.$local;
    			$userList[$i]['location']=$location;
    		}
    	}


    	$this->assign('userList',$userList);
    	$this->display();
    }

    private function _gameDataValidate($gameData) {
        if (empty($gameData['name'])) {
            $this -> error('游戏名不能为空!');
        }

        if (empty($gameData['seo_name'])) {
            $this -> error('游戏别名不能为空!');
        }

        if (empty($gameData['desc'])) {
            $this -> error('游戏简介不能为空!');
        }

        if (empty($gameData['swf'])) {
            $this -> error('swf地址不能为空!');
        }

        if (empty($gameData['origin'])) {
            $this -> error('不源地址不能为空!');
        }

        if ($gameData['width'] < 200) {
            $this -> error('宽度不能小于200!');
        }

        if ($gameData['height'] < 200) {
            $this -> error('高度不能小于200!');
        }
    }

    public function gameAdd() {
        if ($_POST['type'] == 'save') {
            $gameData = array(
                'name' => $_POST['name'],
                'img' => $_POST['seo_name'],
                'desc' => $_POST['desc'],
                'swf' => $_POST['swf'],
                'width' => intval($_POST['width']),
                'height' => intval($_POST['height']),
                'origin' => $_POST['origin'],
                'seo_name' => $_POST['seo_name'],
                '3d_type' => $_POST['3d_type'],
                'hot' => 0,
                'new' => 0,
                'sort' => $_POST['rel_id'],
                'time' => time()
            );

            $this -> _gameDataValidate($gameData);

            //check image
            $imgname = $_FILES['img']['name'];

            if (empty($imgname)) {
                $this -> error('请添加图片');
            }

            if ($_FILES['img']['error'] > 0) {
                $this -> error('上传图片出错，错误状态：' . $_FILES['img']['error']);
            }

            if($_FILES['img']['type'] !== 'image/jpeg'
                && $_FILES['img']['type'] != 'image/pjpeg'
                && $_FILES['img']['type'] != 'image/gif'
                && $_FILES['img']['type'] != 'image/png') {
                $this -> error('只能上传jpeg、png或gif类型的图片');
            }

            if ($_FILES['img']['size'] > 30720) {
                $this -> error('只能上传小于30k的图片，当前图片大小为：' . $_FILES['img']['size']);
            }

            $imgext = pathinfo($imgname, PATHINFO_EXTENSION);

            $gameData['img'] = $gameData['img'] . '.' . $imgext;

            $savepath = "./Uploads/games/images/" . $gameData['img'];

            while (file_exists($savepath)) {
                $randstr = rand(100, 1000) . '_' . rand(100, 1000) . '_';
                $gameData['img'] = $randstr . $gameData['img'];
                $savepath = "./Uploads/games/images/" . $gameData['img'];
            }

            //add data to database
            $Tb_gamelist = M('list', 'game_');
            $gameid = $Tb_gamelist -> add($gameData);

            if ($gameid > 0) {
                move_uploaded_file($_FILES['img']['tmp_name'] , $savepath);
                $this -> success('游戏添加成功', 'gameAdd');
            } else {
                $this -> error('添加到数据库失败！');
            }
        } else {
            $this -> display();
        }
    }

    public function gameEdit(){
        $Tb=M('list','game_');
        if ($_POST['type'] == 'save') {
            $gameData = array(
                'id' => (int)$_POST['id'],
                'name' => $_POST['name'],
                'desc' => $_POST['desc'],
                'swf' => $_POST['swf'],
                'width' => intval($_POST['width']),
                'height' => intval($_POST['height']),
                'origin' => $_POST['origin'],
                '3d_type' => $_POST['3d_type'],
                'sort' => $_POST['sort']
            );

            $vo=$Tb->save($gameData);
            if($vo!== false){
                $this->success('游戏修改成功！');
            }else{
                $this->error('Sorry,游修改失败！Code:'.$Tb->getError());
            }

            exit;
        }

        $id=(int)$_GET['id'];
        $gameInfo=$Tb->where('id='.$id)->select();
        $gameInfo=$gameInfo[0];
        //dump($gameInfo);

        $this->assign('gameInfo',$gameInfo);
        $this->display();
    }

    public function checkGameAlias() {
        $name = $_POST['seo_name'];
        if (empty($name)) {
            return 'params error';
        }
        $Tb = M('list','game_');
        $where = array('seo_name' => $name);
        $check = $Tb -> where($where) -> count();
        echo $check;
    }

    public function gameUpload(){

    	#文件包解析
    	if($_POST['type']=='package'){
	    	include_once($_SERVER['DOCUMENT_ROOT'].'/Admin/core/Common/ExcelReader/reader.php');

	    	$excelPath=$_FILES["file"]["tmp_name"];
	    	$data = new Spreadsheet_Excel_Reader();

	    	// Set output Encoding.
	    	$data->setOutputEncoding('UTF-8');
	    	$data->read($excelPath);

	    	$gameArr=array();

	    	for ($i = 1; $i <= $data->sheets[0]['numRows']; $i++) {
	    		for ($j = 1; $j <= $data->sheets[0]['numCols']; $j++) {
	    			$gameArr[$i-1][$j]=$data->sheets[0]['cells'][$i][$j];

	    			//echo "\"".$data->sheets[0]['cells'][$i][$j]."\",";
	    		}
	    	}

	    	for($i=1,$len=count($gameArr);$i<$len;$i++){
	    		$data=$gameArr[$i];
	    		$gameList[$i-1]=array(
    				'name' => $data[1],
    				'img' => $data[3],
    				'desc' => $data[2],
    				'swf' => $data[4],
    				'width' => $data[5],
    				'height' => $data[6],
    				'origin' => $data[7],
    				'sort' => $data[8]?$data[8]:'hot'
	    		);

                $find = array(": "," ",":","'","’",".","'");
                $replace = array("-","-","-","-","","_","");
	    		$gameList[$i-1]['seo_name']=strtolower(str_replace($find,$replace,$data[1]));

	    		if($data[9]){
	    			$gameList[$i-1]['3d_type']=$data[9];
	    		}
	    	}

	    	$_SESSION['game_tmp']=$gameList;

	    	$this->assign('gameList',$gameList);
	    	$this->display('gameParse');
	    	//dump($gameList);
	    	exit;
    	}

    	#游戏入库
    	if($_GET['type']=='save'){

    		$gameList=$_SESSION['game_tmp'];
    		if(!gameList){
    			$this->error('没有解析到游戏数据！请重试！');
    		}

    		$gameIn=0;
    		$Tb=M('list','game_');
    		for($i=0,$len=count($gameList);$i<$len;$i++){
    			$data=$gameList[$i];
    			$data['time']=strtotime('+0 hours');

    			//检查重复
    			$where='name="'.$data['name'].'" AND swf="'.$data['swf'].'"';
    			$check=$Tb->where($where)->count();

    			if(count($check)){
    				$gameIn++;
	    			$vo=$Tb->add($data);
    			}else{
    				$data2['time']=strtotime('+0 hours');
    				$vo=$Tb->where($where)->save($data2);
    				dump($Tb->getLastSql());
    				echo '<b>'.$data['name'].'</b>重复，已跳过<br>';
    			}
    		}

    		if($vo!== false){
    			unset($_SESSION['game_tmp']);
    			$returnStr='游戏入库成功！';
    			echo '<br><br>入库：<b>'.$gameIn.'个</b><br>重复:<b>'.(count($gameList)-$gameIn).'个</b><br><br>';
    			echo $returnStr.'<br><h4><a href="/admin.php/Index/gameAdd">返回</a></h4>';
    			//$this->success($returnStr);
    		}else{
    			$this->error('Sorry,游戏入库失败！Code:'.$Tb->getError());
    		}
    		exit;
    	}

    	$this->display();
    }

    private function getTagList(){
        $Tb=M('list','tag_');
        $tagList=$Tb
        ->order('seo_name ASC')
        ->select();
        return  $tagList;
    }

    public function tagList($tpl=""){
        $tagList=$this->getTagList();

        $this->assign('tagList',$tagList);
        $this->display($tpl);
    }

    public function tagEdit(){
        $path=$_SERVER['DOCUMENT_ROOT'].'/Admin/game/Tpl/tagLang.json';
        $content=file_get_contents($path);
        $tagLang=json_decode($content,true);

        $tagList=$this->getTagList();

        $id=$_GET['id'];
        $Tb=M('tag','game_');
        $tagIn=$Tb
        ->where('game_id='.$id)
        ->select();
        foreach ($tagList as $key => $value) {

            foreach ($tagIn as $key1 => $value1) {
                if($value['id']==$value1['tag_id']){
                   $tagList[$key]['active']="true";
                }
            }
        }

        $this->assign('tagList',$tagList);
        $this->assign('tagLang',$tagLang);
        $this->display();
    }

    public function replaceImage() {
        $id=$_GET['id'];
        $Tb=M('list','game_');
        if (isset($_POST['id'])) {
            $gameid = $_POST['id'];
            $gameItem=$Tb
            ->where('id='.$gameid)
            ->find();

            $sort = empty($gameItem['sort']) ? 'images' : $gameItem['sort'];
            $savepath = './Uploads/games/' . $sort . '/' . $gameItem['img'];
            $imgext = pathinfo($savepath, PATHINFO_EXTENSION);

            $file = $_FILES['img'];

            function _imgCreateFrom($type,$path){
                switch($type){
                    case 'gif': $img = imagecreatefromgif($path); break;
                    case 'jpg': $img = imagecreatefromjpeg($path); break;
                    case 'png': $img = imagecreatefrompng($path); break;
                }

                return $img;
            }


            if($file){

                $tmpPath='./Uploads/_tmp/'.$file["name"];

                $src = $file['tmp_name'];

                $type = '';
                //echo $file['type'];exit;
                if($file['type'] === 'image/jpeg'
                    || $file['type'] === 'image/pjpeg') {
                    $type = 'jpg';
                } else if ($file['type'] === 'image/png') {
                    $type = 'png';
                } else if ($file['type'] === 'image/gif') {
                    $type = 'gif';
                } else {
                    echo "typeerror";
                }

                move_uploaded_file($src, $tmpPath);

                $im=_imgCreateFrom($type,$tmpPath);
                switch($imgext){
                    case 'gif':
                    imagegif($im, $savepath, 100);
                    break;
                    case 'jpg':
                    imagejpeg($im, $savepath, 100);
                    break;
                    case 'png':
                    imagepng($im, $savepath);
                    break;
                }

                unlink($tmpPath);
            }

            //如果是直接替换，输出成功即可
            if (isset($_POST['x'])) {
                $type=$imgext;
                $targ_w = $targ_h = 180;

                $img_r=_imgCreateFrom($imgext,$savepath);
                $dst_r = imagecreatetruecolor($targ_w, $targ_h);

                if($type == "gif" || $type == "png"){
                    imagecolortransparent($dst_r, imagecolorallocatealpha($dst_r, 0, 0, 0, 127));
                    imagealphablending($dst_r, false);
                    imagesavealpha($dst_r, true);
                }

                $copyret = imagecopyresampled(
                    $dst_r,
                    $img_r,
                    0,
                    0,
                    intval($_POST['x']),
                    intval($_POST['y']),
                    $targ_w,
                    $targ_h,
                    intval($_POST['w']),
                    intval($_POST['h'])
                );

                switch($imgext){
                    case 'gif':
                    imagegif($dst_r, $savepath, 100);
                    break;
                    case 'jpg':
                    imagejpeg($dst_r, $savepath, 100);
                    break;
                    case 'png':
                    imagepng($dst_r, $savepath);
                    break;
                }

                if ($copyret === false) {
                    echo 'image copy error';
                    exit();
                }
            }
            echo 'success';
        } else {
            $gameItem=$Tb
            ->where('id='.$id)
            ->find();
            $sort = empty($gameItem['sort']) ? 'images' : $gameItem['sort'];
            $imgpath = './Uploads/games/'.$sort.'/'.$gameItem['img'];
            if (file_exists($imgpath)) {
                list($width, $height) = getimagesize($imgpath);
                $gameItem['th_width'] = $width;
                $gameItem['th_height'] = $height;
            } else {
                $gameItem['th_width'] = 0;
                $gameItem['th_height'] = 0;
            }

            $this->assign('gameItem',$gameItem);
            $this->display();
        }
    }


    public function fileUpload($pathName=''){
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

    private function imgFileUp($file='',$path=''){
        import('ORG.Net.UploadFile');
        $upload = new UploadFile();// 实例化上传类
        $allowExt=array('image/png','image/jpg','image/jpeg','image/gif');
        
        if(!in_array($file['type'],$allowExt)){
            $this->error('文件格式错误！（仅支持png,jpg,gif）');
        }
        
        if($file['name']){
            $fileInfo=$this->fileUpload($path);
            if($fileInfo['status']){
                return $fileInfo['info']['savename'];
            }else{
                $this->error($fileInfo['info']);
            }
        }
    }

    public function webGame(){
        import('ORG.Util.Page');// 导入分页类

        $Tb=M('list','game_');

        $where='sort="webgame"';
        $pageLen=$pageLen?$pageLen:100;
        $totalNum=$Tb->alias('p')
        ->where($where)
        ->count();

        $page = new Page ( $totalNum,$pageLen);

        $list=$Tb->alias('p')
        ->order('p.id DESC,p.time DESC')
        ->where($where)
        ->limit($page->firstRow.','.$page->listRows)
        ->select();  

        foreach ($list as $key => $value) {
           $list[$key]['swf']= json_decode($value['swf'],true);
        }

        $this->assign('gameList',$list);
        $this->assign ( "pagination", $pagination );        
        $this->display();
    }

    public function webGameAdd(){
        $type=$_POST['type'];
        if($_POST){
            $Tb=M('list','game_');

            $img=$_FILES['img'];

            if($img['name']){
                $data['img']=$this->imgFileUp($img,'games/webgame');
            }else{
                if($type!='edit'){
                    $this->error('图片不能为空！');exit();
                }
            }

            $data['name']=$_POST['name'];
            if($type!='edit'){
                $data['seo_name']=strtolower($_POST['seo_name']);
            }
            $data['desc']=$_POST['desc'];
            $data['height']=$_POST['height'];
            $data['sort']='webgame';
            $data['3d_type']=$_POST['3d_type'];
            $data['pos']=$_POST['position'];
            $data['tpl']=(int)$_POST['tpl'];
            $data['time']=strtotime('+0 hours');

            $hot_new=$_POST['hot_new'];
            $data['hot']=$data['new']=0;
            if($hot_new=='hot'){
                $data['hot']=1;$data['new']=0;
            }elseif($hot_new=='new'){
                $data['hot']=0;$data['new']=1;
            }

            $urltype=$_POST['urltype'];
            if($urltype=='unite'){
                $_swfarr=array();
                $_swfarr['all']=trim($_POST['url']);
                $data['swf']=json_encode($_swfarr);
            }else{
                $lang=$_POST['lang'];
                $url=$_POST['langurl'];

                $_swfarr=array();
                foreach ($lang as $key => $value) {
                    if(!$value){
                        continue;
                    }
                    $_swfarr[$value]=trim($url[$key]);
                }

                $data['swf']=json_encode($_swfarr);
            }

            if($type=='edit'){
                $data['id']=(int)$_POST['id'];
                $vo=$Tb->save($data);
                $str="保存";
            }else{
                $str="入库";
                $vo=$Tb->add($data);
            }
            
            if($vo!== false){
                $this->success('游戏'.$str.'成功！');
            }else{
                $this->error('Sorry,游戏'.$str.'失败！Code:'.$Tb->getError());
            } 
            exit;
        }

        $this->display();
    }

    public function webGameEdit(){
        $id=(int)$_GET['id'];
        $Tb=M('list','game_');
        $gameDetail=$Tb
        ->where('id='.$id)
        ->select();
        $gameDetail=$gameDetail[0];
        $gameDetail['swf']=json_decode($gameDetail['swf'],true);

        $this->assign('gameDetail',$gameDetail);
        //dump($gameDetail); 
        $this->display('webGameAdd');
    }

    private function getExtGameList($cata='hot-games',$where='',$name='',$tag=''){

        $relid=$_REQUEST['relid'];

        $Tb=M('release_list','game_');
        $vo=$Tb->where('release_alias="'.$cata.'"')->limit(1)->select();
        $relid=$vo[0]['id'];

        if(!$relid){
            exit('Empty Relid!');
        }

        $Tb=M('top100_list','game_');


        $vo=$Tb->alias('p')
        ->join('game_list AS q ON p.game_id=q.id')
        ->where('p.rel_id='.$relid.' AND '.$where)
        ->field('p.*,q.name,q.img,q.sort,q.id as t,q.seo_name,q.origin')
        ->limit(0,20)
        ->order('p.order DESC,id DESC')
        ->select();

        $data=array();
        for($i=0,$len=count($vo);$i<$len;$i++){
            $_data=$vo[$i];
            $data[$i]=array(
                "sef"=>'http://www.thehotgames.com/game/play/'.$_data['seo_name'].'.html?info=1&utm=ext',
                "baslik"=>$_data['name'],
                "resim"=>'http://image'.rand(1,5).'.thehotgames.com/games/'.($_data['sort']?$_data['sort']:'images').'/'.$_data['img'],
                "tarih2"=>$_data['time']               
            );
        }
        $returnData=array(
            'name'=>$name,
            'tag'=>$tag,
            'data'=>$data
        );
        return array($vo,$returnData);     
    }

    public function ExtGameSet(){
        if($_GET['type']=='set'){
            $file=$_SERVER['DOCUMENT_ROOT'].'/DataExt/data.json';
            $file_new=$_SERVER['DOCUMENT_ROOT'].'/DataExt/Data/data.json';
            $content=$_SESSION['extData'];
            if($content){
                file_put_contents($file, $_SESSION['extData']);

                $new_content=str_replace(array('"sef":','"resim":','"baslik":'),array('"url":','"img":','"title":'),$content);
                echo $new_content;exit;
                file_put_contents($file_new, $new_content);
                echo 'Ext Data Set Success!';
                unset($_SESSION['extData']);
                exit;
            }
            echo 'Ext Data Set Fail!!';
            exit;
        }
        $game1=$this->getExtGameList('hot-games','(p.hot=1 OR p.new=1 OR p.feature=1)','Best Games','hot');
        $game2=$this->getExtGameList('car-games','(1=1)','Car Games','car');
        $game3=$this->getExtGameList('mario-games','(1=1)','Mario Games','mario');
        $game4=$this->getExtGameList('girls-games','(1=1)','Girl Games','girl');

        $data=array($game1[1],$game2[1],$game3[1],$game4[1]);
        $_SESSION['extData']=json_encode($data);
        echo '<a target="_blank" href="/admin.php/Index/ExtGameSet?type=set">生成JSON数据文件</a><br>';
        echo '<pre>';print_r($data);echo '</pre>';
        echo ($_SESSION['extData']);
    }

    public function ExtDataSet(){
        $extfile=$_SERVER['DOCUMENT_ROOT'].'/DataExt/Data/data_tmp.json';
        $data=file_get_contents($extfile);
        //echo $data;exit;

        $this->assign('data',$data);
        $sort=$this->getCataList();
        //dump($sort);exit;
        $this->display();
    }

    //版本对话添加
    public function ExtDataAdd(){
        $this->getCataList();
        $type=$_GET['type'];
        $where = array();
        if (isset($_POST['key']) && !empty($_POST['key'])) {
            $key = $_POST['key'];
            $where='name like "%'.$key.'%" OR seo_name like "%'.$key.'%"';
            // $where['name'] = array('like', '%'.$key.'%');
        }

        if(!empty($type)){
            $where['sort'] = $type;
        }

        if($_GET['relid']){
            $this->releaseDist('ExtDataAdd',100);
        }else{
            $this->gameList('ExtDataAdd',100,$where);
        }
    }

    public function saveExtPreviewData(){
        $extfile=$_SERVER['DOCUMENT_ROOT'].'/DataExt/Data/data_tmp.json';
        $data=json_encode($_POST['data']);
        if($data){
            file_put_contents($extfile, $data);
            echo 1;
        }else{
            echo 0;
        }
        exit;
    }

    public function publishNewVersion(){
        $extTmpfile=$_SERVER['DOCUMENT_ROOT'].'/DataExt/Data/data_tmp.json';
        $extTruefile=$_SERVER['DOCUMENT_ROOT'].'/DataExt/Data/data.json';
        $versionfile=$_SERVER['DOCUMENT_ROOT'].'/DataExt/Data/version.json';  

        $return=0;

        $data=file_get_contents($extTmpfile);
        if($_POST['data']==1&&$data){
            $result=file_put_contents($extTruefile, $data);
            if($result){
                $arr=array(
                    'version'=>date("Ymd",time())
                );
                file_put_contents($versionfile, json_encode($arr));
                $return=1;
            }
        }

        echo $return;
        exit;          
    }


}