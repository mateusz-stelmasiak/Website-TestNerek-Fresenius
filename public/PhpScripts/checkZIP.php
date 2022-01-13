<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
$ZIP = $_REQUEST['zip'];

$sql="SELECT powiat_id FROM lab_zips WHERE zip = :zip";
/* Values array for PDO. */
$values = [':zip' => $ZIP];
$result = query_one_row($sql,$values);

if (is_null($result) || !is_array($result)){
   die('{"success":"false"}');
}

//no longer in wieluń or minsk
if($result['powiat_id'] ==1 || $result['powiat_id'] ==2){
die('{"powiat": -1,"success":"false"}');
}

die('{"powiat": "'.$result['powiat_id'].'","success":"true"}');
?>