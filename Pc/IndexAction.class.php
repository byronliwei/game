<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends CommonAction {

    //构造函数
    public function __construct() {
        parent::__construct();
        $this->checkParams();
    }

    private function checkParams(){
        //$param=$_SERVER["QUERY_STRING"];
        //$prefix=$param?"?":"&";
        $utm_source=array(
            'play'=>'play'
        );
        $info=$_GET['info'];

        //Version Track
        $version=$_GET['version'];
        $utm_version='';
        if($version=='new'){
            $utm_version='&version=new';
        }

        //Utm Track
        $utm=$_GET['utm'];
        $utm_str='';
        if($utm){
            $utm_str='&utm='.$utm;
            $utm_version.=$utm_str;
        }

        //$this->userTrafficTest();

        if($info==1||$info==2){
            //$uTestId=$_SESSION['user_test_id'];
            //$uTestId=$uTestId?$uTestId:1;
            $uTestId=1;
            $uTestId=$info;

            $utm_source['param']='?info='.$uTestId.$utm_version;
            $utm_source['_param']='&info='.$uTestId.$utm_version;
            $utm_source['play']='info';
            if($uTestId==2){
                //$utm_source['play']='play';
            }
        }
        $this->assign('utm_source',$utm_source);

        $domain=$this->getDomain();
        if(!strpos($domain,'gamev6.com')&&!strpos($domain,'localhost')){
        //if(!strpos($domain,'gamev6.com')){
            //!strpos($domain,'gamev6.com')&&!strpos($domain,'localhost')
            //$domain='http://www.gamev6.com';
        }
        //$this->assign('domain',$domain);
    }

    private function getDomain(){
        $url = (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443') ? 'https://' : 'http://';
        $url="http://";
        $url .= $_SERVER['HTTP_HOST'];
        return $url;
    }

    #Adwords流量分配测试
    private function userTrafficTest(){
        if(isset($_GET['test'])){
            if($_GET['test']==0){
                unset($_SESSION['user_test_id']);
            }else{
                $_SESSION['user_test_id']=$_GET['test'];
            }
        }
        if(!$_SESSION['user_test_id']){
            $_SESSION['user_test_id']=rand(1,2);
        }
    }

    public function index(){
        $param=$_SERVER["QUERY_STRING"];
        $param=$param?"?".$param.'&t=1':"?t=1";
        $f=$_GET['f'];

        $lan=$this->setLangSession();
        $param=str_replace('info=2', 'info=2', $param);
      
        // include COMMON_PATH.'Mobile_Detect.php';
        $detect = new Mobile_Detect();
      
        if ($detect->isMobile() || $detect->isTablet()){
            $r = $_SERVER['HTTP_HOST'];
            if(stristr($r,'hot')){
                header('Location:http://hot.gamev6.com/en'.$param);
                exit;
            }elseif(stristr($r,'s1')){
                header('Location:http://s1.gamev6.com/en'.$param);
                exit;
            }elseif(stristr($r,'s2')){
                header('Location:http://s2.gamev6.com/en'.$param);
                exit;
            }else{
                header('Location:http://www.gamev6.com/en'.$param);
                exit;
            }
        } else {
            $param=str_replace('info=1', 'info=2', $param);
            header('Location:http://free.gamev6.com/'.$lan.$param);
            exit;
        }
    }
    
    public function lanIndex(){
        $this->readLang();
        $this->gameList(100,1);
        $version=$_GET['version'];
        if($version=='new'){
            $this->display('Index:new_version/index');     
        }else{
            $this->display('Index:index');
        }
    }
    
    #For ufunnygames.com
    public function funnyIndex(){
        $lan=$this->readLang();

        $lang=strtolower($_SESSION['lang']);
        $lang=$lang?$lang:'en';

        $this->assign('domain','http://www.thehotgames.com');
        $this->assign('lan',$lan);
        $this->gameList(100,1);
        $this->display();
    }

    public function gameAppApi(){
        $type=$_GET['type'];
        
        $limit=rand(0,149).',18';
        $gameList=$this->gameList($limit);
        
        if($type=='play'){
            $name=$_GET['name'];
            $game=$this->getGameDetail($name);
            echo json_encode(array(
                    'gameList'=>$gameList,
                    'gameDetail'=>$game
                ));
        }else{
            echo json_encode($gameList);
        }
    }

    public function shortcut(){
        $seo_name=$_GET['n'];

        $Tb=M('list','game_');
        $game=$Tb->where('seo_name="'.$seo_name.'"')->select();
        $name=$game[0]['name'];
        $name=$name?$name:'TheHotGames';

        $url='http://www.gamev6.com/game/play/'.$seo_name.'.html?f=shortcut';
        /*$Shortcut = "[InternetShortcut]
        URL=http://blog.unvs.cn
        IDList=
        IconFile=http://www.gamev6.com/favicon.ico
        [{000214A0-0000-0000-C000-000000000046}]
        Prop3=19,2";*/
        $Shortcut="<html><head><meta http-equiv=\"refresh\" content=\"0; url=".$url."\"/><title>".$name."</title></head><body></body></html>";

        Header("Content-type: application/octet-stream");
        header("Content-Disposition: attachment; filename=".$name.".html;");
        echo $Shortcut;
    }
    
    public function lanCategory(){
        //分享无语言参数时，获取语言参数后跳转
        $lang=$_GET['lang'];
        
        
        
        /*if(!$lang&&!defined('SUBDOMAIN')){
            if(!$_SESSION['lang']){
                unset($_SESSION['lang']);
            }
            $lan=$this->setLangSession();
            $url =  'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
            header('Location:'.str_replace('/game/category','/'.$lan.'/game/category', $url));
            exit;
        }*/
    
        $catlan=$this->readLang();
        $this->category($_SESSION['lang']);
    }
    
    public function category($catlan=''){
        $lan=$_GET['lang'];
        $type=$_GET['type'];
        $version=$_GET['version'];
        
        if($catlan){
            $lan=$catlan;
        }
        
        $relid=$_GET['cata'];
        if($relid=='girl'){
            $relid='girls';
        }
        if(defined('CATEGORY')&&CATEGORY){//二级域名调用时指定分类目录
            $relid=CATEGORY;
        }

        $page=$_GET['page'];
        $new_version=$_GET['version'];

        if($type=='tag'){//获取对应Tag的游戏列表
            $list=$this->tagGameList(100,$page);
        }else{
            $list=$this->gameList(100,$page);
        }
        
        if($page){
            $this->assign('list',$list);
            if($new_version){
                $this->display('Index:new_version/cataPage');
            }else{
                $this->display('Index:cataPage');
            }
            exit;
        }

        $lan=$this->readLang();
        
        #重设Meta
        //$cata=explode('-',$relid);
        $cata=str_replace('-games', '', $relid);
        $cataDesc=$lan['nav'][$cata]?$lan['nav'][$cata]:ucfirst(str_replace(array('-','games'), ' ',$relid));
        $cataDesc=$cataDesc.' '.$lan['nav']['games'];
        
        $lan['index']=array(
            'title'=>$cataDesc.' - gamev6.com',
            'meta'=>array(
                'description'=>$cataDesc.','.$lan['index']['meta']['description'],
                'keywords'=>$cataDesc.','.$lan['index']['meta']['keywords']
            )
        );
        
        if(defined('META')&&META){//二级域名调用时指定分类目录
            $lan['index']=json_decode(META,true);
        }

        if($type=='tag'){//获取对应Tag的游戏列表
            $lan['index']['title']=strtoupper($lan['nav']['tag']).': '.$cataDesc.' - gamev6.com';
            $list=$this->tagGameList(100);
            $_cata=$lan['nav'][$cata];
            $this->assign('cataname',strtoupper($lan['nav']['tag']).' :&nbsp;&nbsp;'.($_cata?$_cata:$cata));
        }else{
            $this->gameList(100);
            $this->assign('cataname',$cataDesc);
        }

        //游戏排行榜
        if($relid=='top'){
            $lan['index']['title']=strtoupper($lan['nav']['top_games']).': '.$cataDesc.' - gamev6.com';
        }

        $this->getHotNewGame();
        $this->_getWebgame();

        $this->assign('lan',$lan);

        if($version=='new'){
            $this->display('Index:new_version/index');     
        }else{
            $this->display('index');
        }
    }

    private function checkTopGames(){
        $lang=$_GET['lang']?$_GET['lang']:$_SESSION['lang'];

        $Tb=M('game_release_list');
        $enCheck=$Tb->where('lang="en" AND lang_enable=1')->count();
        $_langCheck=$Tb->where('lang="'.$lang.'" AND lang_enable=1')->count();

        $this->assign('topgameCheck',$enCheck);
        return array($enCheck,$_langCheck);
    }

    public function tagIndex(){
        $lan=$this->readLang();
        $this->tagList();

        $lan['index']['title']=$lan['nav']['tag_list'].' - gamev6.com';

        $this->assign('lan',$lan);
        $this->display();
    }

    public function tagCataIndex(){
        $this->category();
    }
    
    private function tagList($gameId=''){
        $Tb=M('list','tag_');
        $tagList=$Tb
        ->order('seo_name ASC')
        ->select();

        if($gameId){
            $Tb2=M('game_tag');
            $tagNow=$Tb2->alias('p')
            ->join('tag_list AS q ON p.tag_id=q.id')
            ->where('p.game_id='.$gameId)
            ->select();
            //dump($tagNow);
        }

        $path=$_SERVER['DOCUMENT_ROOT'].'/Admin/game/Tpl/tagLang.json';
        $content=file_get_contents($path);
        $tagLang=json_decode($content,true);

        $this->assign('tagNow',$tagNow);
        $this->assign('tagList',$tagList);
        $this->assign('tagLang',$tagLang);
    }

    public function webgameLanIndex(){
        $this->webgameIndex();
    }

    public function webgameIndex(){
        $lan=$this->readLang();

        $lang=strtolower($_SESSION['lang']);
        $lang=$lang?$lang:'en';

        $name=WEBGAME_NAME!='WEBGAME_NAME'?WEBGAME_NAME:$_GET['n'];

        $game=$this->getGameDetail($name);

        $swf=json_decode($game['swf'],true);
        if(!$swf[$lang]){
            if($swf['en']){
               $url=$swf['en'];
            }else{
               $url=$swf['all'];
            }
        }else{
            $url=$swf[$lang];
        }
        $url=$url?$url:'http://media.goodgamestudios.com/games/ranch/';
        $game['url']=$url;

        #标题，meta信息处理
        $top_title = preg_replace('/\[\s{0,}#\s{0,}N\s{0,}\]/is',$game['name'],$lan['play']['title']);
        $lan['index']['title']=$top_title;

        $keywords=preg_replace('/\[\s{0,}#\s{0,}N\s{0,}\]/is',$game['name'],$lan['play']['meta']['keywords']);
        $description=$game['desc'];
        $this->assign ( 'meta', array(
                'description' => $description,
                'keywords' => $keywords
                ));
        $this->assign('domain','http://www.gamev6.com');
        $this->assign('lan',$lan);
        $this->assign('gameDetail',$game);
        $this->display('webgameIndex');
    }

    private function _getWebgame(){
        $webgame=array(
            'bigfarm'=>array('Big Farm','http://bigfarm.gamev6.com/'),
            'empire'=>array('Empire','http://empire.gamev6.com/'),
            'poker'=>array('Poker'),
            'barbarians'=>array('Barbarians'),
            'dreamfields'=>array('Dreamfields'),
            'khanwars'=>array('KhanWars'),
            'klondike'=>array('Klondike')
        );
        //dump($webgame);exit;
        $this->assign('webgame',$webgame);
    }
    

    public function getWebgame(){
        $Tb=M('list','game_');
        $lang=strtolower($_SESSION['lang']);
        $lang=$lang?$lang:'en';

        $webgame=$Tb
        ->where('sort="webgame" AND (pos !=-1) AND (swf like "%\"all\"%" OR swf like "%\"'.$lang.'\"%")')
        ->select();

        $_rstWebgame=array();
        foreach ($webgame as $key => $value) {
            //dump($value);exit;
            if($value['3d_type']=='direct'){
                $swf=json_decode($value['swf'],true);
                $url=$swf[$lang]?$swf[$lang]:$swf['all'];
                $webgame[$key]['url']=$url;
            }else{
                $webgame[$key]['url']='/'.$lang.'/webgame/'.$value['seo_name'].'.html';
            }
            
            //$pos=$value['pos'];
            //$_rstWebgame[$pos]=$value;
        }
        //dump($webgame);exit;
        $this->assign('webgameList',$webgame);
        return $webgame;
    }

    private function getHotNewGame($limit=1){
        $Tb=M('top100_list','game_'); 
        
        $list=$Tb->alias('p')
        ->join('game_list AS q ON p.game_id=q.id')
        ->where('p.hot=1 OR p.new=1')
        ->field('p.*,q.name,q.img,q.seo_name,q.sort')
        ->order('p.order DESC,p.id DESC')
        ->group('q.seo_name')
        ->limit($limit)
        ->select(); 
        shuffle($list);
        $this->assign('newHotGame',$list);
        return $list;
    }
    
    public function infoPage(){
        $this->readLang();
        $this->play('infoPage',12);
    }

    public function history(){
        $this->readLang();
        $this->display();
    }

    public function gameMore($return=false){
        $lan=$_GET['lang'];
        if(!$lan){
            $lan=$_SESSION['lang']?$_SESSION['lang']:"en";
        }
        
        $Tb=M('game_release_list');
        $vo=$Tb->where('lang=""')->select();
        
        $lan=$this->readLang();
        
        for($i=0,$len=count($vo);$i<$len;$i++){
            $release_alias=$vo[$i]['release_alias'];
            
            $alias=explode('-',$release_alias);
            $alias=$alias[0];
            $alias=$lan['nav'][$alias]?$lan['nav'][$alias]:str_replace(array('-','games'),array(' ',''),$release_alias);
            
            $vo[$i]['name']=ucfirst($alias.' '.$lan['nav']['game']);
        }
        
        if($return){
            return $vo;
        }else{
            $this->assign('cataList',$vo);
            $this->display();   
        }
    }
    
    public function gameSearch(){
        $this->gameMore();
    }
    
    public function gameList($limit='',$page='',$_cata){
        $relid=$_REQUEST['relid'];
        $cata=$_REQUEST['cata'];
        if($_cata){
            $cata=$_cata;
        }

        if(defined('CATEGORY')&&CATEGORY){//二级域名调用时指定分类目录
            $cata=CATEGORY;
        }    

        if(!$relid){
            $relid=C('REL');
        }
        if($page){
            $limit=$limit*($page-1).','.$limit;
        }

        if($cata=="top"){
            
            $check=$this->checkTopGames();//判断本语言是否有topgame，无则默认调用en
            $_langCheck=$check[1];

            $cata=$_langCheck?$_SESSION['lang']:'en';
        }

        if($cata){
            $Tb=M('game_release_list');
            $vo=$Tb->where('release_alias="'.$cata.'"')->limit(1)->select();
            $relid=$vo[0]['id'];
            $this->assign('cataTopic',$vo[0]['topic']);

            //获取专题模板
            $defaultPath='/Public/static_topic/'.$cata;
            $tplfile=$defaultPath.'/main.html';
            $iconFile=$defaultPath.'/icon.jpg';
            $ROOT=$_SERVER['DOCUMENT_ROOT'];

            if(file_exists($ROOT.$tplfile)){
                $this->assign('topicInclude','.'.$tplfile);
                $this->assign('topicPath',$defaultPath);
            }

            if(file_exists($ROOT.$iconFile)){
                $this->assign('ogimage',get_url('domain').$iconFile);
            }
        }
        
        $Tb=M('top100_list','game_'); 
        
        $list=$Tb->alias('p')
        ->join('game_list AS q ON p.game_id=q.id')
        ->where('p.rel_id='.$relid.' AND q.seo_name!=""')
        ->field('p.*,q.name,q.img,q.seo_name,q.sort')
        ->order('p.order_v6 DESC,p.id DESC')
        ->limit($limit)
        ->select();

        //判断分类中是否加入了webgame
        foreach ($list as $key => $value) {
            $_sort=$value['sort'];
            $_3d_type=$value['3d_type'];
            $_lang=strtolower($_SESSION['lang']);

            if($_sort=='webgame'){
                if($_3d_type=='direct'){
                    $swf=json_decode($value['swf'],true);
                    $url=$swf[$_lang]?$swf[$_lang]:$swf['all'];
                    $list[$key]['url']=$url;
                }else{
                    $list[$key]['url']='/'.$_lang.'/webgame/'.$value['seo_name'].'.html';
                }
            }
        }

        //if((!$page||$page==1)&&!$cata){
        //    $webgame=$this->getWebgame();
        //    foreach ($webgame as $key => $value) {
        //        $pos=$value['pos'];
        //        array_splice($list, $pos, 0, array($value));
        //    }
        //}

        $this->assign('gameList',$list);
        $this->assign('CATEGORY',$cata);
        return $list;
    }

    private function tagGameList($limit='',$page=''){
        $relid=$_REQUEST['relid'];
        $cata=$_REQUEST['cata'];

        if($page){
            $limit=$limit*($page-1).','.$limit;
        }

        $Tb=M('list','tag_');
        $tagId=$Tb->where('seo_name="'.$cata.'"')->select();
        $tagId=$tagId[0]['id'];

        $Tb2=M('tag','game_');
        $gameList=$Tb2
        ->alias('p')
        ->join('game_list AS q ON p.game_id=q.id')
        ->field('q.name,q.img,q.seo_name')
        ->where('p.tag_id='.$tagId)
        ->limit($limit)
        ->select();

        $this->assign('gameList',$gameList);
        return $gameList;
    }
    
    public function getAcceptLan(){ 
        preg_match_all('/([a-z]+)[,;]/is', strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']), $matches);
        preg_match_all('/([a-z-]+)[,;]/is', strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']), $matches1);
        $lanArr = $matches[1];
        
        $sepMatch=$matches1[1];
        if($sepMatch[0]){
            $sepLan=explode('-',$sepMatch[0]);
            if($sepLan[1])array_unshift($lanArr,$sepLan[1]);
        }

        $LANG=C('LANG');

        $len=count($lanArr);
        for($i=0;$i<$len;$i++){
            $data=$lanArr[$i];
            if(in_array($data, $LANG)){
                $lan=$data;
                break;
            }
        }
        if(!$lan){
            $lan='en';
        }
        return $lan;        
        
    }
    
    public function setLangSession(){
        $lang=$_GET['lang'];
        $LANG=C('LANG');
        
        if(in_array($lang, $LANG)){
            $_SESSION['lang']=$lang;
        }else{
        
            if(!$_SESSION['lang']){
                $_SESSION['lang']=$this->getAcceptLan();
            }
        }
        
        return $_SESSION['lang'];
    }
    
    public function readLang(){
        $this->setLangSession();
        
        $path=dirname(dirname(__FILE__));
        $dir=$path.'/Lang/';
        
        $jsonFile=$dir.$_SESSION['lang'].'.json';
        $content =  file_get_contents($jsonFile,0);
        $lan=json_decode($content,TRUE);

        #读取附加语言包
        $jsonExt=$path.'/Lang_ext/'.$_SESSION['lang'].'.json';

        if(file_exists($jsonExt)){
            $content=file_get_contents($jsonExt,0);
            $langArr=json_decode($content,true);
            if($langArr){
                $lan=array_merge ($lan,$langArr);
            }
        }
        
        $this->assign('lan',$lan);
        $this->assign('lang',$_SESSION['lang']);

        $this->checkTopGames();//检查topgame
        return $lan;
    }
    
    //读取附加语言包(“外挂”)
    static function readExtLang($langLib=array()){
    
        $jsonFile=realpath(BASE_LIB_PATH).'/Lang_ext/'.$lang.'.json';
    
        if(file_exists($jsonFile)){
            $content=file_get_contents($jsonFile);
            $langArr=json_decode($content,true);
            if($langArr){
                $langLib=array_merge ($langLib,$langArr);
            }
        }
        return $langLib;
    }    
 

    private function noRand($begin=0,$end=20,$limit=5){
        $rand_array=range($begin,$end);
        shuffle($rand_array);//调用现成的数组随机排列函数
        return array_slice($rand_array,0,$limit);//截取前$limit个 

    }

    private function _timeHandle($time){
        $dur=$time*60;

        if($dur < 3600){
          return floor($dur/60).' minutes ago';
        }else{
            if($dur < 86400){
                return floor($dur/3600).' hours ago';
            }else{
                return floor($dur/86400).' days ago';
            }
        }
    }

    private function _getComments(){
        $Tb=M('comment','game_');

        $len=$Tb->count();
        $num=rand(4,6);
        $list=$Tb->order('RAND()')->limit($num)->select();
        array_shift($list);

        $noRandArr=$this->noRand(1,322,$num);

        $timeRandArr=$this->noRand(80,4320,$num);
        sort($timeRandArr);

        foreach ($list as $key => $value) {
            $list[$key]['portnum']=$noRandArr[$key];
            $list[$key]['posttime']=$this->_timeHandle($timeRandArr[$key]);
        }

        $commentLan=array(
            'reply'=>array(
                'br'=>'Responder','es'=>'Responder','en'=>'Reply','fr'=>'R\u00e9pondre','pl'=>'odpowiada\u0107','tr'=>'cevap',
                'ru'=>'\u041e\u0434\u0433\u043e\u0432\u043e\u0440\u0438','cn'=>'回复','tw'=>'回覆'
            ),
            'like'=>array(
                'br'=>'Descurtir','es'=>'Me gusta','en'=>'Like','fr'=>'J\u2019aime','pl'=>'Jak','tr'=>'Gibi',
                'ru'=>'\u0421\u0432\u0438\u0452\u0430 \u043c\u0438 \u0441\u0435','cn'=>'赞','tw'=>'讚'
            ),
            'unlike'=>array(
                'br'=>'Curtir','es'=>'Ya no me gusta','en'=>'Unlike','fr'=>'Je n\u2019aime plus','pl'=>'Inaczej','tr'=>'Aksine',
                'ru'=>'\u041d\u0435 \u0441\u0432\u0438\u0452\u0430 \u043c\u0438 \u0441\u0435','cn'=>'取消赞','tw'=>'收回讚'
            ),
            'share'=>array(
                'br'=>'Compartilhe','es'=>'Comp\u00e1rtelo','en'=>'Share','fr'=>'Partagez-le','pl'=>'Pole\u0107','tr'=>'payla\u015f',
                'ru'=>'\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f','cn'=>'分享','tw'=>'分享'
            )
        );
        
        $lang=$_SESSION['lang'];$cLan=array();
        foreach ($commentLan as $key => $value) {
            $cLan[$key]= preg_replace("#\\\u([0-9a-f]+)#ie", "iconv('UCS-2BE', 'UTF-8', pack('H4', '\\1'))", $value[$lang]);
        }
        $this->assign('commentLan',$cLan);
        $this->assign('comments',$list);
    }

    /************###**********/
    public function play($tpl='',$relateNum=12){
        $name=(string)$_GET['n'];
        
        //分享无语言参数时，获取语言参数后跳转
        $lang=$_GET['lang'];
        /*if(!$lang){
            if(!$_SESSION['lang']){
                unset($_SESSION['lang']);
            }
            $lan=$this->setLangSession();
            $url =  'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
            header('Location:'.str_replace('/game','/'.$lan.'/game', $url));
            exit;
        }*/
        
        $lan=$this->readLang();

        $game=$this->getGameDetail($name);
        if(!$game['name']){
            R('Empty/page404');
            exit;
        }

        #标题，meta信息处理
        $top_title = preg_replace('/\[\s{0,}#\s{0,}N\s{0,}\]/is',$game['name'],$lan['play']['title']);
        $this->assign('title',$top_title);
        
        $keywords=preg_replace('/\[\s{0,}#\s{0,}N\s{0,}\]/is',$game['name'],$lan['play']['meta']['keywords']);
        $description=preg_replace('/\[\s{0,}#\s{0,}N\s{0,}\]/is',$game['name'],$lan['play']['meta']['description']);
        $description=preg_replace('/\w*?\.com/is',' gamev6.com ',$game['desc']).' - '.$description;
        $this->assign ( 'meta', array(
                'description' => $description,
                'keywords' => $keywords
                ));
        
        if($tpl){
            $lan['index']['title']="Game info: ".$top_title;
            $this->assign('lan',$lan);
        }
        //$game['seo_name']=$this->getSEOname($game['img']);
        
        $where=$game['sort']?'sort="'.$game['sort'].'"':'sort!="webgame"';
        $where1=$game['sort']?'sort="'.$game['sort'].'"':'sort="hot"';
        
        $this->assign('gameList',$this->randomGame($relateNum,$where));
        $this->randomGame($relateNum,$where);

        $this->assign('gameList1',$this->randomGame(9,$where1));
        $this->assign('gameDetail',$game);

        $ogimage=get_url('domain').'/Uploads/games/'.($game['sort']?$game['sort']:'images').'/'.$game['img'];
        $this->assign('ogimage',$ogimage);      
        
        $this->tagList($game['id']);
        $this->_getComments();
        $this->getAdschannels();//Get game Ads Channel
        $this->getHotNewGame(20);

        header('Content-Type: text/html; charset=utf-8');
        $this->display($tpl);
    }

    private function getAdschannels(){
        $channels=array('7874668681','3444469081','4921202284');
        $info=$_GET['info'];
        $info=$info?$info:0;
        $channelNow=$channels[$info];
        $this->assign('adsChannel',$channelNow);
    }
    
    private function getGameDetail($name=''){
        if(!$name){
            $name=(string)$_GET['n'];
        }
        
        $Tb=M('list','game_');
        $game=$Tb->where('seo_name="'.$name.'"')->select();

        $game=$game[0];
        if($game['origin']=="topgames.me"&&$game['3d_type']!='html5'){
            $game['swf']='http://213.174.151.10/'.$game['swf'];
        }elseif($game['origin']=="www.gahe.com"){
            $game['swf']='http://www.gahe.com/downloadgames/'.$game['swf'];
        }elseif($game['origin']=="www.flonga.com"){
            $game['swf']='http://cdn.flonga.com/games/swf/'.$game['swf'];
        }elseif($game['origin']=="softgames.com"){
            $game['swf']='http://games.softgames.de/'.$game['swf'].'/?p=gamev6.com';
        }
		$game['swf']=str_replace('libs.gamev6.com/','www.gamev6.com/GameLibs/',$game['swf']);
        if($game['width']>710){
            $game['height']=710*$game['height']/$game['width'];
            $game['width']=710;
        }

        preg_match('/.*\//is', $game['swf'],$match);
        $game['base']=$match[0];
        return $game;
    }
    
    
    public function getSEOname($img=''){
        $seoName=explode('.', $img);
        $seoName=$seoName[0];
        return $seoName;
    }

    public function randomGame($num='',$where=''){
        $Tb=M('list','game_');
        
        $len=$Tb->where($where)->count();

        $rand=rand(0, $len-$num);
        $list=$Tb   
        ->order('id DESC')->where($where)->limit($rand>=0?$rand:0,$num)->order("id desc")->select();

        if($len<$num){
            $list1=$Tb
            ->order('id DESC')->where('sort="hot"')->limit(0,$num-$len)->order("id desc")->select();
            $list=array_merge($list,$list1); 
        }

        shuffle($list);
        return $list;
    }
    
    public function site(){
        $Tb=M('list','game_');
        $list=$Tb   
        ->order('id DESC')->order("id desc")->select(); 
        
        $len=count($list);
        $this->assign('gameList',$list);
        $this->display();
    }
    
    public function sitemap(){
        $Tb=M('list','game_');
        $list=$Tb
        ->order('id DESC')->order("id desc")->select();
        
        $LANG=C('LANG');
        $len1=count($LANG);
        
        
        $mapindex='<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.google.com/schemas/sitemap/0.84">';
        
        $len2=count($list);
        
        for($i=0;$i<$len1;$i++){
            $lan=$LANG[$i];
            
            $xml='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';
            $xml.='<url><loc>http://www.gamev6.com</loc><lastmod>'.date("Y-m-d").'</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>';
            
            $mapindex.='<sitemap><loc>http://www.gamev6.com/site-map/sitemap_'.$lan.'.xml</loc><lastmod>'.date("Y-m-d").'</lastmod></sitemap>';
            for($j=0;$j<$len2;$j++){
                
                $seoName=$list[$j]['seo_name'];
                
                $url='http://www.gamev6.com/'.$lan.'/game/play/'.$seoName.'.html';
                
                if($j==0){
                    $xml.='<url><loc>http://www.gamev6.com/'.$lan.'</loc><lastmod>'.date("Y-m-d").'</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>';
                }
                $xml.='<url><loc>'.$url.'</loc><lastmod>'.date("Y-m-d",$list[$j]['time']).'</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>';
            }
            
            $xml.='</urlset>';
            $filename='./site-map/sitemap_'.$lan.'.xml';
            $result=file_put_contents($filename, preg_replace("/&/", "", $xml));

        }
        
        $mapindex.='</sitemapindex>';
        $filename='./sitemap.xml';
        $result=file_put_contents($filename, preg_replace("/&/", "", $mapindex));
        
        echo 'sitemap create success';
        exit;
    }
    
    public function sitemaphtml(){
        $lanArr=C('LANG');
        
        $str="<html><head><title>gamev6.com Language Sitemap</title></head><body><h1>gamev6.com Language Sitemap</h1><p><ul>";
        for($i=0,$len=count($lanArr);$i<$len;$i++){
            $lan=$lanArr[$i];
            $str.='<li><a href="http://www.gamev6.com/'.$lan.'" target="_blank">country language code: <b>'.$lan.'</b></a></li>';
        }
        echo $str.'</body></html>';
    }
    
    public function webgame(){
        $this->readLang();
        $this->display();
    }
    

    private function mobileInfoIndex(){

    }

    public function mobileGameIndex(){
        $URI=$_SERVER["REQUEST_URI"];
        $_URI=explode('?', $_SERVER["REQUEST_URI"]);
        $_URI=$_URI[0];

        //if()
        //echo md5($URI);
        $uriArr=explode('/', $_URI);
//dump($uriArr);exit;
        $gameName=explode('.html', $uriArr[3]);
        $gameName=$gameName[0];

        $uriArr[1]='en';

        $uriConfig=array(
            'lang'=>$uriArr[1],
            'cata'=>$uriArr[2],
            'name'=>$gameName
        );
        $this->readLang();

        //Header To Country Index
        if(!$uriConfig['lang']&&!$uriConfig['cata']){
            $this->index();
        }

        //Get The Tmp File
        $tmpPath='Html/Mobile-'.md5($URI).'.html';

        //$this->buildHtml($name,$_SERVER['DOCUMENT_ROOT'].'/', '', 'utf8');

        if(file_exists($tmpPath)){
            //echo file_get_contents($tmpPath);
            //exit;
        }

        //Index Page
        if($uriConfig['lang']&&!$uriConfig['cata']){
            $gameList=$this->gameList(100,1,'mobile-games');
            //dump($gameList);
            $content=$this->fetch('Mobile:index');

            $tmpPath='index.html';
            //file_put_contents($tmpPath, $content);
            echo $content;
        }

        //Info Page
        if($uriConfig['cata']=='info'){
            $game=$this->getGameDetail($name);
            $this->assign('gameDetail',$game);
            //dump($game);
            $relatedGame=$this->randomGame(8,'sort="logic" AND 3d_type="html5"');
            $this->assign('gameList',$relatedGame);
            //dump($relatedGame);
            //exit;
            $content=$this->fetch('Mobile:info');

            $tmpPath='game/info/'.$gameName.'.html';
            //file_put_contents($tmpPath, $content);
            echo $content;
        }

        //Play Page
        if($uriConfig['cata']=='play'){
            $game=$this->getGameDetail($name);
            //dump($game);
            $this->assign('gameDetail',$game);
            $content=$this->fetch('Mobile:play');

            $tmpPath='game/play/'.$gameName.'.html';
            //file_put_contents($tmpPath, $content);
            echo $content;
        }
        //dump($uriArr);
        //dump($uriConfig);

        exit;
    }
    
    public function tt(){
        $this->assign('file','./Public/static_topic/braindots-games/main.html');
        $this->display();
    }

    #Index SideLeft Data
    public function sideDataApi(){
        //Updata data: top game, Lucky game, Cata List
        
        function NoRand($begin=0,$end=20,$limit=5){
            $rand_array=range($begin,$end);
            shuffle($rand_array);
            $returnArr=array_slice($rand_array,0,$limit);
            asort($returnArr);
            return $returnArr;
        }

        $this->setTypeGame(NoRand(1,50,12),'en','top');
        $this->setTypeGame(NoRand(1,50,12),'hot-games','lucky');

        $cate=$this->gameMore(true);
        $cate=array_slice($cate,0,12);
        //dump($cate);
        $returnData=array('data'=>array());

        foreach ($cate as $key => $value) {

            array_push($returnData['data'], array(
                "name"=>$value['name'],
                "img"=>'/Public/static/images/more/'.$value['release_alias'].'.jpg',
                "url"=>'/game/category/'.$value['release_alias'].'.html',
                "date"=>date("Y/m/d",$value['time'])
            ));

        }

        $path=$_SERVER['DOCUMENT_ROOT'].'/DataExt/Game/';
        if(count($returnData['data'])>=12){
            file_put_contents($path.'cate.json', json_encode($returnData));
            echo "cate: API Data Publish Success!<br>";
        }


    }

    private function setTypeGame($gameIndex=array(),$cata='en',$type='top'){
        $path=$_SERVER['DOCUMENT_ROOT'].'/DataExt/Game/';
        
        $gameList=array();

        foreach ($gameIndex as $key => $value) {
            $game=$this->gameList(1,$value,$cata);
            array_push($gameList, $game[0]);
        }

        $returnData=array('data'=>array());

        foreach ($gameList as $key => $value) {

            array_push($returnData['data'], array(
                "name"=>$value['name'],
                "img"=>'http://image'.rand(1,5).'.gamev6.com/games/'.($value['sort']?$value['sort']:"images").'/'.$value['img'],
                "url"=>'http://www.gamev6.com/game/play/'.$value['seo_name'].'.html',
                "date"=>date("Y/m/d",$value['time'])
            ));

        }

        if(count($returnData['data'])>=12){
            file_put_contents($path.$type.'.json', json_encode($returnData));
            echo $type.": API Data Publish Success!<br>";
        }
    }

}
?>