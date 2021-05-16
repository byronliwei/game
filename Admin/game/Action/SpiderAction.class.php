<?php
    class SpiderAction extends Action {
      //构造函数，验证Session
        public function __construct() {
            parent::__construct();
            $this -> _checkmSession();
        }

        private function _checkmSession(){

            if(!$_SESSION['name']){
                if(!(GROUP_NAME=='pics'&&MODULE_NAME=="Index"&&ACTION_NAME=="index")){
                    $url=str_replace('.html', '', U('pics/Index'));
                    $this->error('当前用户未登录或登录超时，请重新登录',$url);
                }
            }
        }

        public function index() {
            $this -> display();
        }

        public function gamesgames() {
            if (isset($_GET['add'])) {
                $pageIndex = intval($_GET['pi']);
                $pageSize = intval($_GET['ps']);

                $imgjsonfile = './Data/gamesgames/game_christmas_page_3.json';

                $imgData = file_get_contents($imgjsonfile);
                $imgAllJsonData = json_decode($imgData, true);
                $imgJsonData = array_slice($imgAllJsonData, $pageIndex * $pageSize, $pageSize);
                $ret = $this -> _saveGamesToDB('www.gamesgames.com', $imgJsonData);
                echo $ret;
            } else {
                $this -> assign('count', 2);
                $this -> display();
            }
        }

        public function goldhairgames() {
            //数据文件格式为html即可
            $filePath = './Data/goldhairgames/baby-barbie.html';
            $domain = 'http://baby-barbie.goldhairgames.com';
            $fileContent = file_get_contents($filePath);
            $doc = phpQuery::newDocumentHTML($fileContent);
            phpQuery::selectDocument($doc);
            $data = array(
                'name' => array(),
                'href' => array(),
                'img' => array(),
                'desc' => array(),
                'seo_name' => array()
            );
            foreach (pq('.contentpagetitle') as $t) {
                $data['name'][] = preg_replace('/[\r\n]\s+/', "", $t -> nodeValue);
                $href = $t -> getAttribute('href');
                $data['href'][] = $domain . $href;
                $data['seo_name'][] = array_pop(explode('/', $href));
            }
            foreach (pq('.contentpaneopen img') as $img) {
                $data['img'][] = $domain . $img -> getAttribute('src');
            }
            foreach (pq('.contentpaneopen p') as $desc) {
                if ($desc -> nodeValue) {
                    $data['desc'][] = $desc -> nodeValue;
                }
            }
            for ($i=0, $j = count($data['href']); $i < $j; $i++) {
                if ($this -> _isGameExist($data['seo_name'][$i])) {
                    echo $data['href'][$i] . ' exist<br/>';
                    continue;
                }
                $swfInfo = $this -> _getSwfSrcGoldhairgames($data['href'][$i]);
                if (empty($swfInfo)) {
                    echo $data['href'][$i] . ' 【failed】<br/>';
                    continue;
                }
                $img = 'ghg_' . array_pop(explode('/', $data['img'][$i]));
                $gameItem = array(
                    'name' => $data['name'][$i],
                    'img' => $img,
                    'desc' => $data['desc'][$i],
                    'swf' => $swfInfo['swf'],
                    'width' => $swfInfo['width'],
                    'height' => $swfInfo['height'],
                    'origin' => 'goldhairgames.com',
                    'hot' => '0',
                    'new' => '0',
                    'time' => time(),
                    'rate' => rand(93, 99),
                    'sort' => 'barbie',
                    'seo_name' => $data['seo_name'][$i],
                    '3d_type' => 'flash'
                );
                $ret = $this -> _saveGameItemToDB($gameItem);
                if ($ret !== 'success') {
                    echo $data['href'][$i] . ' 【' . $ret . '】<br/>';
                } else {
                    $imgpath = './Uploads/games/barbie/' . $gameItem['img'];
                    $this -> _savePicFromUrl($data['img'][$i], $imgpath);
                    echo $ret . '<br/>';
                    sleep(2);
                }
            }
        }

        public function herogamesworld(){
            //数据文件格式为html即可
            $filePath = './Data/herogamesworld/ben-10-games_2.html';
            $domain = '';
            $fileContent = file_get_contents($filePath);
            $doc = phpQuery::newDocumentHTML($fileContent);
            phpQuery::selectDocument($doc);
            $data = array(
                'name' => array(),
                'href' => array(),
                'img' => array(),
                'seo_name' => array()
            );
            foreach (pq('a') as $t) {
                $href = $t -> getAttribute('href');
                $data['href'][] = $domain . $href;
                $data['seo_name'][] = array_pop(explode('/', $href));
            }
            foreach (pq('img') as $img) {
                $data['img'][] = $domain . $img -> getAttribute('src');
                $data['name'][] = $img -> getAttribute('title');
            }
            for ($i=0, $j = count($data['href']); $i < $j; $i++) {
                if ($this -> _isGameExist($data['seo_name'][$i])) {
                    echo $data['href'][$i] . ' exist<br/>';
                    continue;
                }
                $swfInfo = $this -> _getSwfSrcHerogamesworld($data['href'][$i]);
                if (empty($swfInfo)) {
                    echo $data['href'][$i] . ' 【failed】<br/>';
                    continue;
                }
                $img = 'hgw_' . array_pop(explode('/', $data['img'][$i]));
                $gameItem = array(
                    'name' => $data['name'][$i],
                    'img' => $img,
                    'desc' => empty($swfInfo['desc'])? $data['name'][$i] : $swfInfo['desc'],
                    'swf' => $swfInfo['swf'],
                    'width' => $swfInfo['width'],
                    'height' => $swfInfo['height'],
                    'origin' => 'herogamesworld.com',
                    'hot' => '0',
                    'new' => '0',
                    'time' => time(),
                    'rate' => rand(93, 99),
                    'sort' => 'ben10',
                    'seo_name' => $data['seo_name'][$i],
                    '3d_type' => 'flash'
                );
                $ret = $this -> _saveGameItemToDB($gameItem);
                if ($ret !== 'success') {
                    echo $data['href'][$i] . ' 【' . $ret . '】<br/>';
                } else {
                    $imgpath = './Uploads/games/ben10/' . $gameItem['img'];
                    $this -> _savePicFromUrl($data['img'][$i], $imgpath);
                    echo $ret . '<br/>';
                    sleep(2);
                }
            }
        }

        public function gahe(){
            //数据文件格式为html即可
            $filePath = './Data/gahe/ben10.html';
            $domain = 'http://www.gahe.com';
            $fileContent = file_get_contents($filePath);
            $doc = phpQuery::newDocumentHTML($fileContent);
            phpQuery::selectDocument($doc);
            $data = array(
                'name' => array(),
                'href' => array(),
                'img' => array(),
                'seo_name' => array()
            );
            foreach (pq('a') as $t) {
                $href = $t -> getAttribute('href');
                $data['href'][] = $domain . $href;
                $data['seo_name'][] = array_pop(explode('/', $href));
            }
            foreach (pq('img') as $img) {
                $data['img'][] = $domain . $img -> getAttribute('src');
            }
            foreach (pq('.GameName') as $name) {
                $data['name'][] = $name -> nodeValue;
            }
            for ($i=0, $j = count($data['href']); $i < $j; $i++) {
                if ($this -> _isGameExist($data['seo_name'][$i])) {
                    echo $data['href'][$i] . ' exist<br/>';
                    continue;
                }
                $swfInfo = $this -> _getSwfSrcGahe($data['href'][$i]);
                if (empty($swfInfo)) {
                    echo $data['href'][$i] . ' 【failed】<br/>';
                    continue;
                }
                $img = array_pop(explode('/', $data['img'][$i]));
                $gameItem = array(
                    'name' => $data['name'][$i],
                    'img' => $img,
                    'desc' => empty($swfInfo['desc'])? $data['name'][$i] : $swfInfo['desc'],
                    'swf' => $swfInfo['swf'],
                    'width' => $swfInfo['width'],
                    'height' => $swfInfo['height'],
                    'origin' => 'gahe.com',
                    'hot' => '0',
                    'new' => '0',
                    'time' => time(),
                    'rate' => rand(93, 99),
                    'sort' => 'ben10',
                    'seo_name' => $data['seo_name'][$i],
                    '3d_type' => 'flash'
                );
                $ret = $this -> _saveGameItemToDB($gameItem);
                if ($ret !== 'success') {
                    echo $data['href'][$i] . ' 【' . $ret . '】<br/>';
                } else {
                    $imgpath = './Uploads/games/ben10/' . $gameItem['img'];
                    $this -> _savePicFromUrl($data['img'][$i], $imgpath);
                    echo $ret . '<br/>';
                    sleep(2);
                }
            }
        }

        public function gahespider(){
            //数据文件格式为html即可
            $filePath = './Data/gahe/spiderman.html';
            $domain = 'http://www.gahe.com';
            $fileContent = file_get_contents($filePath);
            $doc = phpQuery::newDocumentHTML($fileContent);
            phpQuery::selectDocument($doc);
            $data = array(
                'name' => array(),
                'href' => array(),
                'img' => array(),
                'seo_name' => array()
            );
            foreach (pq('a') as $t) {
                $href = $t -> getAttribute('href');
                $data['href'][] = $domain . $href;
                $data['seo_name'][] = array_pop(explode('/', $href));
            }
            foreach (pq('img') as $img) {
                $data['img'][] = $domain . $img -> getAttribute('src');
            }
            foreach (pq('.GameName') as $name) {
                $data['name'][] = $name -> nodeValue;
            }
            var_dump($data);
            exit();
            for ($i=0, $j = count($data['href']); $i < $j; $i++) {
                if ($this -> _isGameExist($data['seo_name'][$i])) {
                    echo $data['href'][$i] . ' exist<br/>';
                    continue;
                }
                $swfInfo = $this -> _getSwfSrcGahe($data['href'][$i]);
                if (empty($swfInfo)) {
                    echo $data['href'][$i] . ' 【failed】<br/>';
                    continue;
                }
                $img = array_pop(explode('/', $data['img'][$i]));
                $gameItem = array(
                    'name' => $data['name'][$i],
                    'img' => $img,
                    'desc' => empty($swfInfo['desc'])? $data['name'][$i] : $swfInfo['desc'],
                    'swf' => $swfInfo['swf'],
                    'width' => $swfInfo['width'],
                    'height' => $swfInfo['height'],
                    'origin' => 'gahe.com',
                    'hot' => '0',
                    'new' => '0',
                    'time' => time(),
                    'rate' => rand(93, 99),
                    'sort' => 'spiderman',
                    'seo_name' => $data['seo_name'][$i],
                    '3d_type' => 'flash'
                );
                $ret = $this -> _saveGameItemToDB($gameItem);
                if ($ret !== 'success') {
                    echo $data['href'][$i] . ' 【' . $ret . '】<br/>';
                } else {
                    $imgpath = './Uploads/games/spiderman/' . $gameItem['img'];
                    $this -> _savePicFromUrl($data['img'][$i], $imgpath);
                    echo $ret . '<br/>';
                    sleep(2);
                }
            }
        }

        private function _getSwfSrcGahe($href) {
            $ret = array();
            //$proxy = 'http://icon.mynewtab.net/httpproxy.php?url=' . urlencode($href);
            //$html = file_get_contents($proxy);
            $html = file_get_contents($href);
            if (empty($html)) {
                return $ret;
            }
            if (preg_match("/TheGame_swf='\s*(http:\/\/.*?\.swf)'/", $html, $matches)) {

                $ret['swf'] = $matches[1];

                if (preg_match("/OriGameWidth=(\d+)/", $html, $widths)) {
                    $ret['width'] = intval($widths[1]);
                } else {
                    $ret ['width'] = 800;
                }

                if (preg_match("/OriGameHeight=(\d+)/", $html, $heights)) {
                    $ret['height'] = intval($heights[1]);
                } else {
                    $ret ['height'] = 600;
                }

                if (preg_match("/game_description\">\n\s*(.*?)<br>/", $html, $descs)) {
                    $ret['desc'] = $descs[1];
                } else {
                    $ret ['desc'] = '';
                }
            }
            return $ret;
        }

        private function _getSwfSrcHerogamesworld($href) {
            $ret = array();
            //$proxy = 'http://icon.mynewtab.net/httpproxy.php?url=' . urlencode($href);
            //$html = file_get_contents($proxy);
            $html = file_get_contents($href);
            if (empty($html)) {
                return $ret;
            }
            if (preg_match("/iframe.*?src=\"\s*(http:\/\/.*?\.swf)\"/", $html, $matches)) {

                $ret['swf'] = $matches[1];

                if (preg_match("/iframe.*?width=\"(\d+)\"/", $html, $widths)) {
                    $ret['width'] = intval($widths[1]);
                } else {
                    $ret ['width'] = 800;
                }

                if (preg_match("/iframe.*?height=\"(\d+)\"/", $html, $heights)) {
                    $ret['height'] = intval($heights[1]);
                } else {
                    $ret ['height'] = 600;
                }

                if (preg_match("/gmply_desc_txt\">(.*?)<\/span>/", $html, $descs)) {
                    $ret['desc'] = $descs[1];
                } else {
                    $ret ['desc'] = '';
                }
            }
            return $ret;
        }

        private function _getSwfSrcGoldhairgames($href) {
            $ret = array();
            //$proxy = 'http://icon.mynewtab.net/httpproxy.php?url=' . urlencode($href);
            //$html = file_get_contents($proxy);
            $html = file_get_contents($href);
            if (empty($html)) {
                return $ret;
            }
            if (preg_match("/(http:\/\/.*?\.goldhairgames\.com.*?\.swf)/", $html, $matches)) {
                $ret['swf'] = $matches[1];
                if (preg_match("/flashvars.width = \"(\d+)\"/", $html, $widths)) {
                    $ret['width'] = intval($widths[1]);
                } else {
                    $ret ['width'] = 800;
                }

                if (preg_match("/flashvars.height = \"(\d+)\"/", $html, $heights)) {
                    $ret['height'] = intval($heights[1]);
                } else {
                    $ret ['height'] = 600;
                }
            }
            return $ret;
        }

        private function _isGameExist($seoname) {
            $Tb = M('list','game_');
            $where = array('seo_name' => $seoname);
            $isExit = $Tb -> where($where) -> count();
            return $isExit > 0;
        }

        private function _saveGameItemToDB($gameItem) {
            $ret = 'empty';
            if (!empty($gameItem)) {
                $Tb = M('list','game_');
                $where = array('seo_name' => $gameItem['seo_name']);
                $isExit = $Tb -> where($where) -> count();
                if ($isExit == 0) {
                    $ret = $Tb -> add($gameItem);
                    if ($ret == false) {
                        $ret = 'dbfail';
                    } else {
                        $ret = 'success';
                    }
                } else {
                    $ret = 'repeat';
                }
            }
            return $ret;
        }

        private function _savePicFromUrl($url, $path) {
            if (file_exists($path) && filesize($path) > 1024) {
                return true;
            }
            file_put_contents($path, file_get_contents($url));
            return true;
        }

        private function _getSmallPicPath($imgUrl) {
            $imgUrlArr = explode('/', $imgUrl);
            return array_pop($imgUrlArr);
        }

        private function _getSwfSrc($href) {
            $ret = array();
            $proxy = 'http://icon.mynewtab.net/httpproxy.php?url=' . urlencode($href);
            $html = file_get_contents($proxy);
            if (empty($html)) {
                return $ret;
            }
            if (preg_match("/ '(http:\/\/www8\.agame\.com.*?\.swf)/", $html, $matches)) {
                $ret['swf'] = $matches[1];
                if (preg_match("/width: '(\d+)px'/", $html, $widths)) {
                    $ret['width'] = intval($widths[1]);
                } else {
                    $ret ['width'] = 800;
                }

                if (preg_match("/height: '(\d+)px'/", $html, $heights)) {
                    $ret['height'] = intval($heights[1]);
                } else {
                    $ret ['height'] = 600;
                }

                if (preg_match("/description: \"(.*?)\"/", $html, $descs)) {
                    $ret['desc'] = $descs[1];
                }
            }
            return $ret;
        }

        //保存数据到数据库
        private function _saveGamesToDB($site, $imgJsonData) {
            $Tb = M('list','game_');
            $failCount = 0;
            $imgCount = count($imgJsonData);
            for ($i = 0; $i < $imgCount; $i++) {
                $imgItem = $imgJsonData[$i];

                $seo_name = array_pop(explode('/', $imgItem['href']));
                if (!strpos('christmas', $seo_name)) {
                    $seo_name = 'christmas-' . $seo_name;
                }

                $gameItem = array(
                    'name' => $imgItem['title'],
                    'img' => $this -> _getSmallPicPath($imgItem['src_th']),
                    'desc' => $imgItem['title'],
                    'swf' => '',
                    'width' => 0,
                    'height' => 0,
                    'origin' => $site,
                    'hot' => '0',
                    'new' => '0',
                    'time' => time(),
                    'rate' => rand(93, 99),
                    'sort' => 'christmas',
                    'seo_name' => $seo_name,
                    '3d_type' => 'flash'
                );

                if (!empty($gameItem)) {
                    $where = array('seo_name' => $gameItem['seo_name']);
                    $isExit = $Tb -> where($where) -> count();
                    if ($isExit == 0) {
                        $swfInfo = $this -> _getSwfSrc($imgItem['href']);

                        if (empty($swfInfo)) {
                            var_dump($imgItem['href']);
                            $failCount++;
                            continue;
                        }
                        $gameItem['swf'] = $swfInfo['swf'];
                        $gameItem['width'] = $swfInfo['width'];
                        $gameItem['height'] = $swfInfo['height'] ;
                        if (isset($swfInfo['desc']) && strlen($swfInfo['desc']) > 10) {
                            $gameItem['desc'] = $swfInfo['desc'];
                        }

                        $imgpath = './Uploads/games/christmas/' . $gameItem['img'];
                        $this -> _savePicFromUrl($imgItem['src_th'], $imgpath);
                        $ret = $Tb -> add($gameItem);
                        if ($ret == false) {
                            $failCount++;
                        }
                    } else {
                        //var_dump('亲，重复了：' . $imgItem['href']);
                        //$failCount++;
                    }
                }
            }
            return $failCount;
        }
    }
?>