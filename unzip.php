<?php

function unzip_file($file, $destination){
	// ʵ��������
	$zip = new ZipArchive() ;
	//��zip�ĵ��������ʧ�ܷ�����ʾ��Ϣ
	if ($zip->open($file) !== TRUE) {
		return array(
			'status'=>false,
			'info'=>"�޷���ѹ���ļ���(����ѹ����)"
		);
	}
	//��ѹ���ļ���ѹ��ָ����Ŀ¼��
	$zip->extractTo($destination);
	//�ر�zip�ĵ�
	$zip->close();
	return array(
		'status'=>true,
		'info'=>"�ļ��ɹ���ѹ��"
	);
}
//����ִ��
$result=unzip_file("www.zip","./");
print_r($result);






?>