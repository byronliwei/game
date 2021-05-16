<?php 
$path=dirname(__FILE__).'/Lang_ext/';
$lanArr=array(
		'ar','br','cn','cs','da','de','el','en','es','fr','he','id','it','ja','ko','nl','pl','pt','ro','ru','sv','tw','tr','th','vi'
	);

$_arr=array();$_arr1=array();
foreach ($lanArr as $key => $value) {
	$content=file_get_contents($path.$value.'.json');
	$lan=json_decode($content,true);
	$_t=$lan['nav']['christmas'];
	if($_t){
		array_push($_arr, _utf8_unicode(trim($_t)));
		array_push($_arr1, $value);
	}
}

$str='"'.implode('","', $_arr).'"';

header('Content-Type: text/html; charset=utf-8');
//print_r($_arr);
//print_r($_arr1);
echo $str;



function _utf8_unicode($str) {
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
?>