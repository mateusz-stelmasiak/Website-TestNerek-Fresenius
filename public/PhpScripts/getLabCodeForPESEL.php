<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
$PESEL = $_REQUEST['PESEL'];

//check if this person has not yet generated a code
$sql="SELECT code FROM lab_codes WHERE PESEL = :pesel";
$values = [':pesel' => $PESEL];
$result = query_one_row($sql,$values);

if (is_null($result) || !is_array($result)){
   die('{"feedback": "Nie wygenrowano jeszcze dla Pana/Pani kodu!","success":"false"}');
}

die('{"code":"'.$result['code'].'","feedback": "Oto Pana/Pani kod!","success":"true"}');



?>