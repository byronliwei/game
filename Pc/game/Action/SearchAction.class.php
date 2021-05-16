<?php
// 本类由系统自动生成，仅供测试用途
class SearchAction extends CommonAction {

	public function index(){

	}

    private function _getGameSort() {
        return array(
            "tank" => array("\u0627\u0644\u062f\u0628\u0627\u0628\u0627\u062a","tanques","\u5766\u514b","tanks","Tanks","\u0394\u03b5\u03be\u03b1\u03bc\u03b5\u03bd\u03ad\u03c2","Tanques","r\u00e9servoirs","Serbatoi","\u05d8\u05e0\u05e7\u05d9\u05dd","\u30bf\u30f3\u30af","\ud0f1\ud06c","zbiorniki","\u0442\u0430\u043d\u043a\u0438","Tankar","\u0e23\u0e16\u0e16\u0e31\u0e07","Tanklar","Xe t\u0103ng"),
            "puzzle" => array("\u0628\u0627\u0646\u0648\u0631\u0627\u0645\u0627","Jigsaw","\u62fc\u56fe","Puzzle","scie \u00e0 chantourner","sega","\u30b8\u30b0\u30bd\u30fc\u30d1\u30ba\u30eb","\ud37c\uc990","sticks\u00e5g","\u0e08\u0e34\u0e4a\u0e01\u0e0b\u0e2d\u0e27\u0e4c","\u62fc\u5716"),
            "physics" => array("\u0627\u0644\u0641\u064a\u0632\u064a\u0627\u0621","f\u00edsica","\u7269\u7406","fysik","Physik","\u03a6\u03c5\u03c3\u03b9\u03ba\u03ae","F\u00edsica","physique","fisica","\u05e4\u05d9\u05e1\u05d9\u05e7\u05d4","\u7269\u7406\u5b66","\ubb3c\ub9ac\ud559","natuurkunde","Fizyka","\u0424\u0438\u0437\u0438\u043a\u0430","\u0e1f\u0e34\u0e2a\u0e34\u0e01\u0e2a\u0e4c","Fizik","V\u1eadt l\u00fd"),
            "parking" => array("\u0648\u0642\u0648\u0641 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a","Estacionamento","\u505c\u8f66\u573a","parkering","Parkplatz","\u03a7\u03ce\u03c1\u03bf\u03c2 \u03c3\u03c4\u03ac\u03b8\u03bc\u03b5\u03c5\u03c3\u03b7\u03c2","Aparcamiento","parking","parcheggio","\u05d7\u05e0\u05d9\u05d9\u05d4 \u05d1\u05ea\u05e9\u05dc\u05d5\u05dd","\u99d0\u8eca\u5834","\uc8fc\ucc28","Parkeergelegenheid","\u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430","\u0e21\u0e35\u0e17\u0e35\u0e48\u0e08\u0e2d\u0e14\u0e23\u0e16","Otopark","\u505c\u8eca\u5834","B\u00e3i \u0111\u1ed7 xe"),
            "ninja" => array("\u0627\u0644\u0646\u064a\u0646\u062c\u0627","Ninja","\u5fcd\u8005","\ub2cc\uc790","\u0e19\u0e34\u0e19\u0e08\u0e32"),
            "multiplayer" => array("\u0645\u062a\u0639\u062f\u062f\u0629","Multiplayer","\u591a\u4eba","multiplayer","Multijugador","multijoueur","\u30de\u30eb\u30c1\u30d7\u30ec\u30a4","\uba40\ud2f0 \ud50c\ub808\uc774\uc5b4","\u041c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0435\u0435\u0440","Flera spelare","\u0e2b\u0e25\u0e32\u0e22","nhi\u1ec1u"),
            "maze" => array("\u0645\u062a\u0627\u0647\u0629","labirinto","\u8ff7\u5bab","Maze","Labyrinth","labyrinthe","\u05de\u05d1\u05d5\u05da","\u8ff7\u8def","\ubbf8\ub85c","labirynt","\u041b\u0430\u0431\u0438\u0440\u0438\u043d\u0442","\u0e40\u0e02\u0e32\u0e27\u0e07\u0e01\u0e15","Labirent","\u8ff7\u5bae","M\u00ea"),
            "matching" => array("\u0645\u0628\u0627\u0631\u0627\u0629","Jogo","\u5339\u914d","match","Spiel","Match","Partido","Partita","\u05d4\u05ea\u05d0\u05de\u05d4","\u30de\u30c3\u30c1","\uacbd\uae30","Mecz","\u043c\u0430\u0442\u0447","\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19","Ma\u00e7","tr\u1eadn \u0111\u1ea5u"),
            "logic" => array("\u0627\u0644\u0645\u0646\u0637\u0642","Logic","\u903b\u8f91","Logik","\u039b\u03bf\u03b3\u03b9\u03ba\u03ae","l\u00f3gica","logique","logica","\u05d4\u05d9\u05d2\u05d9\u05d5\u05df","\u30ed\u30b8\u30c3\u30af","\ub17c\ub9ac","logika","\u041b\u043e\u0433\u0438\u043a\u0430","logik","\u0e25\u0e2d\u0e08\u0e34\u0e01","mant\u0131k","\u908f\u8f2f","logic"),
            "life" => array("\u0627\u0644\u062d\u064a\u0627\u0629","vida","\u751f\u6d3b","livet","Leben","\u03b6\u03c9\u03ae","vie","vita","\u05d7\u05d9\u05d9\u05dd","\uc0dd\ud65c","leven","\u017cycie","\u0416\u0438\u0437\u043d\u044c","Livet","\u0e0a\u0e35\u0e27\u0e34\u0e15","Ya\u015fam","Cu\u1ed9c s\u1ed1ng"),
            "funny" => array("\u0645\u0636\u062d\u0643","engra\u00e7ado","\u641e\u7b11","Funny","lustig","\u0391\u03c3\u03c4\u03b5\u03af\u03b1","divertido","dr\u00f4le","divertente","\u05de\u05e6\u05d7\u05d9\u05e7","\u304a\u304b\u3057\u3044","\uc7ac\ubbf8","grappige","\u015bmieszne","\u0417\u0430\u0431\u0430\u0432\u043d\u044b\u0439","roliga","\u0e15\u0e25\u0e01","Komik","H\u00e0i h\u01b0\u1edbc"),
            "skill" => array("\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a","Skills","\u6280\u80fd","f\u00e6rdigheder","F\u00e4higkeiten","\u03b4\u03b5\u03be\u03b9\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2","habilidades","comp\u00e9tences","Abilit\u00e0","\u05db\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd","\u30b9\u30ad\u30eb","\uae30\uc220","vaardigheden","umiej\u0119tno\u015bci","\u041d\u0430\u0432\u044b\u043a\u0438","F\u00f6rm\u00e5ga","\u0e17\u0e31\u0e01\u0e29\u0e30","Becerileri","K\u1ef9 n\u0103ng"),
            "dress-up" => array("\u0627\u0644\u0644\u0628\u0627\u0633","Vestido","\u88c5\u626e","Kjole","Kleid","\u03c6\u03cc\u03c1\u03b5\u03bc\u03b1","vestido","robe","Dress","\u05e9\u05de\u05dc\u05d4","\u30c9\u30ec\u30b9","\ub4dc\ub808\uc2a4","jurk","sukienka","\u041f\u043b\u0430\u0442\u044c\u0435","Kl\u00e4nning","\u0e01\u0e32\u0e23\u0e41\u0e15\u0e48\u0e07\u0e01\u0e32\u0e22","elbise","\u88dd\u626e","\u0103n m\u1eb7c"),
            "cooking" => array("\u0627\u0644\u0637\u0628\u062e","cozinhar","\u70f9\u996a","madlavning","Kochen","\u039c\u03b1\u03b3\u03b5\u03b9\u03c1\u03b9\u03ba\u03ae","Cocinar","cuisson","cottura","\u05d1\u05d9\u05e9\u05d5\u05dc","\u30af\u30c3\u30ad\u30f3\u30b0","\uc694\ub9ac","koken","gotowanie","\u041a\u0443\u043b\u0438\u043d\u0430\u0440\u0438\u044f","Matlagning","\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e38\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23","pi\u015firme","\u70f9\u98ea","n\u1ea5u \u0103n"),
            "classic" => array("\u0627\u0644\u0643\u0644\u0627\u0633\u064a\u0643\u064a\u0629","cl\u00e1ssico","\u7ecf\u5178","Classic","Klassiker","cl\u00e1sico","classique","classico","\u05e7\u05dc\u05d0\u05e1\u05d9","\u30af\u30e9\u30b7\u30c3\u30af","\ud074\ub798\uc2dd","klasyczna","\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439","Klassiska","\u0e04\u0e25\u0e32\u0e2a\u0e2a\u0e34\u0e01","Klasik","\u7d93\u5178","c\u1ed5 \u0111i\u1ec3n"),
            "card" => array("\u0628\u0637\u0627\u0642\u0627\u062a","cart\u00f5es","\u5361\u724c","Cards","Karten","\u039a\u03ac\u03c1\u03c4\u03b5\u03c2","Tarjetas","cartes","Carte","\u05db\u05e8\u05d8\u05d9\u05e1\u05d9\u05dd","\u30ab\u30fc\u30c9","\uce74\ub4dc","kaarten","karty","\u043a\u0430\u0440\u0442\u044b","Kort","\u0e1a\u0e31\u0e15\u0e23","kartlar","th\u1ebb"),
            "board" => array("\u0627\u0644\u0634\u0637\u0631\u0646\u062c","Xadrez","\u68cb\u724c","skak","Schach","\u03a3\u03ba\u03ac\u03ba\u03b9","Ajedrez","\u00e9checs","scacchi","\u05e9\u05d7\u05de\u05d8","\u30c1\u30a7\u30b9","\uccb4\uc2a4","Schaken","szachy","\u0428\u0430\u0445\u043c\u0430\u0442\u044b","schack","\u0e2b\u0e21\u0e32\u0e01\u0e23\u0e38\u0e01","Satran\u00e7","T\u01b0\u1edbng"),
            "billiards" => array("\u0627\u0644\u0628\u0644\u064a\u0627\u0631\u062f\u0648","Bilhar","\u53f0\u7403","billard","Billard","\u039c\u03c0\u03b9\u03bb\u03b9\u03ac\u03c1\u03b4\u03bf","Billar","biliardo","\u05d1\u05d9\u05dc\u05d9\u05d0\u05e8\u05d3","\u30d3\u30ea\u30e4\u30fc\u30c9","\ub2f9\uad6c","biljart","bilard","\u0411\u0438\u043b\u044c\u044f\u0440\u0434","Biljard","\u0e1a\u0e34\u0e25\u0e40\u0e25\u0e35\u0e22\u0e14","Bilardo","Bi-a"),
            "bike" => array("\u0631\u0643\u0648\u0628 \u0627\u0644\u062f\u0631\u0627\u062c\u0627\u062a","Ciclismo","\u81ea\u884c\u8f66","Cykling","Radfahren","\u03a0\u03bf\u03b4\u03b7\u03bb\u03b1\u03c3\u03af\u03b1","cyclisme","ciclismo","\u05e8\u05db\u05d9\u05d1\u05d4 \u05e2\u05dc \u05d0\u05d5\u05e4\u05e0\u05d9\u05d9\u05dd","\u30b5\u30a4\u30af\u30ea\u30f3\u30b0","\uc0ac\uc774\ud074\ub9c1","Fietsen","jazda na rowerze","\u0412\u0435\u043b\u043e\u0441\u043f\u043e\u0440\u0442","Cykel","\u0e01\u0e32\u0e23\u0e02\u0e35\u0e48\u0e08\u0e31\u0e01\u0e23\u0e22\u0e32\u0e19","Bisiklet","\u81ea\u884c\u8eca","\u0111i xe \u0111\u1ea1p"),
            "basketball" => array("\u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629","basquete","\u7bee\u7403","basketball","Basketball","\u039c\u03c0\u03ac\u03c3\u03ba\u03b5\u03c4","Baloncesto","basket-ball","pallacanestro","\u05db\u05d3\u05d5\u05e8\u05e1\u05dc","\u30d0\u30b9\u30b1\u30c3\u30c8\u30dc\u30fc\u30eb","\ub18d\uad6c","basketbal","Koszyk\u00f3wka","\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b","Basket","\u0e1a\u0e32\u0e2a\u0e40\u0e01\u0e47\u0e15","Basketbol","\u7c43\u7403","B\u00f3ng r\u1ed5"),
            "action" => array("\u0627\u0644\u0639\u0645\u0644","a\u00e7\u00e3o","\u52a8\u4f5c","handling","Aktion","\u0394\u03c1\u03ac\u03c3\u03b7","Acci\u00f3n","action","azione","\u05e4\u05e2\u05d5\u05dc\u05d4","\u30a2\u30af\u30b7\u30e7\u30f3","\uc561\uc158","actie","Akcja","\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435","\u00c5tg\u00e4rd","\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23","Eylem","\u52d5\u4f5c","h\u00e0nh \u0111\u1ed9ng"),
            "racing" => array("\u0633\u0628\u0627\u0642","Corrida","\u8d5b\u8f66","Racing","Corse","\u05e8\u05d0\u05e1\u05d9\u05e0\u05d2","\u7af6\u99ac","\ub808\uc774\uc2f1","Wy\u015bcigi","\u0413\u043e\u043d\u043a\u0438","\u0e41\u0e02\u0e48\u0e07\u0e23\u0e16","Yar\u0131\u015f","\u8cfd\u8eca"),
            "car" => array("\u0633\u064a\u0627\u0631\u0629","carro","\u6c7d\u8f66","bil","Auto","\u0391\u03c5\u03c4\u03bf\u03ba\u03af\u03bd\u03b7\u03c4\u03bf","coche","voiture","auto","\u05e8\u05db\u05d1","\u30ab\u30fc","\uc790\ub3d9\ucc28","samoch\u00f3d","\u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439","Bil","\u0e23\u0e16\u0e22\u0e19\u0e15\u0e4c","araba","\u6c7d\u8eca","xe"),
            "hot" => array("\u0627\u0644\u0623\u0639\u0644\u0649","Top","\u70ed\u95e8","haut","top","\u05dc\u05de\u05e2\u05dc\u05d4","\u30c8\u30c3\u30d7","\ucd5c\uace0","Na g\u00f3r\u0119","\u0422\u043e\u043f","Topp","\u0e14\u0e49\u0e32\u0e19\u0e1a\u0e19","En","\u71b1\u9580","L\u00ean tr\u00ean"),
            "mario" => array("\u9a6c\u91cc\u5965"),
            'html5' => array("h5", "html"),
            'christmas'=>array("\u0639\u064a\u062f%20\u0627\u0644\u0645\u064a\u0644\u0627\u062f","Natal","\u5723\u8bde\u8282","V\ue1noce","Jul","Weihnachten","\u03a7\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd\u03b3\u03b5\u03bd\u03bd\u03b1","christmas","Navidad","No\uebl","\u05d7\u05d2%20\u05d4\u05de\u05d5\u05dc\u05d3","Natal","Natale","\u30af\u30ea\u30b9\u30de\u30b9","\ud06c\ub9ac\uc2a4\ub9c8\uc2a4","Kerstmis","Bo\u017ce%20Narodzenie","Natal","Cr\u0103ciun","\u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u043e","Christmas","\u8056\u8a95\u7bc0","Noel","\u0e04\u0e23\u0e34\u0e2a\u0e21\u0e32\u0e2a\u0e15\u0e4c","Gi\ue1ng%20sinh")
        );
    }

    private function _utf8_unicode($str) {
        $unicode = array();
        $values = array();
        $lookingFor = 1;

        for ($i = 0; $i < strlen( $str ); $i++ ) {
            $thisValue = ord( $str[ $i ] );
            if ( $thisValue < ord('A') ) {
                // exclude 0-9
                if ($thisValue >= ord('0') && $thisValue <= ord('9')) {
                     // number
                     $unicode[] = chr($thisValue);
                }
                else {
                     $unicode[] = '%'.dechex($thisValue);
                }
            } else {
                if ( $thisValue < 128) {
                    $unicode[] = $str[ $i ];
                } else {
                    if ( count( $values ) == 0 ) {
                        $lookingFor = ( $thisValue < 224 ) ? 2 : 3;
                    }
                    $values[] = $thisValue;
                    if ( count( $values ) == $lookingFor ) {
                        $number = ( $lookingFor == 3 ) ?
                            ( ( $values[0] % 16 ) * 4096 ) + ( ( $values[1] % 64 ) * 64 ) + ( $values[2] % 64 ):
                            ( ( $values[0] % 32 ) * 64 ) + ( $values[1] % 64 );
                        $number = dechex($number);
                        $unicode[] = (strlen($number)==3)?"\u0".$number:"\u".$number;
                        $values = array();
                        $lookingFor = 1;
                    } // if
                } // if
            }
        } // for
        return implode("",$unicode);
    }

    public function catemerge() {
        $jsonFiles = array('en','ar','br','cn','da','de','el','es','fr','it','iw','ja','ko','nl','pl','pt','ru','sv','th','tr','tw','vi');
        $ret = array();
        for ($i=0; $i < count($jsonFiles); $i++) {
            $jsonData = json_decode(file_get_contents('./App/game/Lang_ext/'.$jsonFiles[$i] . '.json'), true);
            $jsonData=$jsonData['nav'];
            if ($i ==0) {
                $ret = $jsonData;
                foreach ($jsonData as $key => $value) {
                    $ret[$key] = array();
                }
            } else {
                foreach ($jsonData as $key => $value) {
                    $ret[$key][] = $value;
                }
            }
        }

        $uniqueRet = array();
        foreach ($ret as $k => $v) {
            $nv = array_unique($v);
            $uniqueRet[$k] = array();
            foreach ($nv as $key => $value) {
                $uniqueRet[$k][] = $value;
            }
        }

        file_put_contents('./catemerge.txt', json_encode($uniqueRet));
        var_dump($uniqueRet);
    }

    public function search(){
        $lan=R('game/Index/readLang');

        $keyword=trim(strip_tags($_GET['k']));
        if(!$_GET['k']){
            $keyword='funny';
        }
        if (isset($keyword) && $keyword !== '') {
            $query = $keyword;
            $utf8Query = $this -> _utf8_unicode($query);
            $sortArr = $this -> _getGameSort();
            $sqlFilter = array();
            if (array_key_exists($utf8Query, $sortArr)) {
                $sqlFilter = array('sort' => $query) ;
            } else {
                foreach ($sortArr as $k => $v) {
                    if (in_array($utf8Query, $v)) {
                        $sqlFilter = array('sort' => $k);
                        $isSynonym = true;
                        break;
                    }
                }
                if (!$isSynonym) {
                    $sqlFilter = array(
                        'sort' => array('like', '%'.$query.'%'),
                        'name' => array('like', '%'.$query.'%'),
                        'desc' => array('like', '%'.$query.'%'),
                        '_logic'=>'OR'
                    );
                }
            }
        }

        $Tb = M('list','game_');
        $searchRet = $Tb -> where($sqlFilter) -> limit(150) -> select();
        //dump($Tb->getLastSql());exit;
        $count = $Tb -> where($sqlFilter) -> count();
        
        for ($i=0, $j = count($searchRet); $i < $j; $i++) {
            $game = $searchRet[$i];
            $rets[] = array(
                'id' => intval($game['id']),
                'img' => $game['img'],
                'seo_name' => $game['seo_name'],
                'name' => $game['seo_name'],
                'sort' => $game['sort']
            );
        }

        if(!count($rets)){
            $rets=R('game/Index/randomGame',array('28','sort="" OR sort="hot"'));
        }

        $hotWords = array('mario','bigfarm','html5');

        $this -> assign('result', $rets);
        $this -> assign('count', $count);
        $this -> assign('hotwords', $hotWords);
        $this -> display('Pc/search');
    }

    public function searchdemo() {
    	$lan=R('game/Index/readLang');

		require_once './search/sdk/php/lib/XS.php';
		error_reporting(0);

		$keyword=$_GET['k'];
		if(!$_GET['k']){
			$keyword='mario';
		}

        $xs = new XS('thehotgames');
        $search = $xs -> search;
        if (isset($keyword) && $keyword !== '') {
            $query = $_GET['k'];
            $utf8Query = $this -> _utf8_unicode($query);
            $sortArr = $this -> _getGameSort();
            $sqlFilter = array();
            if (array_key_exists($utf8Query, $sortArr)) {
                $search -> setFuzzy() -> setQuery($query)-> addWeight('sort', $query);
                $sqlFilter = array('sort' => $query) ;
            } else {
                $isSynonym = false;
                foreach ($sortArr as $k => $v) {
                    if (in_array($utf8Query, $v)) {
                        $search -> setFuzzy() -> setQuery($k) -> addWeight('sort', $k);
                        $sqlFilter = array('sort' => $k);
                        $isSynonym = true;
                        break;
                    }
                }
                if (!$isSynonym) {
                    $search -> setFuzzy() -> setQuery($query) -> addWeight('sort', $query);
                    $sqlFilter = array(
                        'name' => array('like', '%'.$query.'%'),
                        'desc' => array('like', '%'.$query.'%'),
                        'sort' => array('like', '%'.$query.'%'),
                    );
                }
            }
            $search -> setLimit(150, 0);
            $rets = array();
            try {
                $docs = $search -> search();
                $count = $search -> count();
                if ($count == 0) {
                    throw new XSException("empty result", 1);
                }
                foreach($docs as $doc) {
                    $rets[] = array(
                        'id' => intval($doc -> id),
                        'img' => $doc -> img,
                        'seo_name' => $doc -> seo_name,
                        'name' => $doc -> name,
                        'sort'=>$doc -> sort
                    );
                }
            } catch (XSException $e) {
                //echo $e
                $m = M('list','game_');
                $searchRet = $m -> where($sqlFilter) -> limit(100) -> select();
                $count = $m -> where($sqlFilter) -> count();
                for ($i=0, $j = count($searchRet); $i < $j; $i++) {
                    $game = $searchRet[$i];
                    $rets[] = array(
                        'id' => intval($game['id']),
                        'img' => $game['img'],
                        'seo_name' => $game['seo_name'],
                        'name' => $game['seo_name'],
                        'sort' => $game['sort']
                    );
                }
            }

            if(!count($rets)){
                $rets=R('game/Index/randomGame',array('28','sort="" OR sort="hot"'));
            }
            $this -> assign('result', $rets);
            $this -> assign('count', $count);
        }
        $hotWords = array('mario','bigfarm','html5');
        try {
            $hots = $search-> getHotQuery(5);
            if (!empty($hots)) {
               $hotWords = array();
               foreach ($hots as $key => $value) {
                   $hotWords[] = $key;
               }
            }
        } catch(XSException $e) {
            //todo
        }
        $this -> assign('hotwords', $hotWords);
        $this -> display('Index/gameSearch');
    }

}
?>