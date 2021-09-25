<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
$ZIP = $_REQUEST['zip'];

$sql="SELECT powiat FROM lab_zips z JOIN powiaty p ON z.powiat_id = p.powiat_id WHERE z.zip = :zip";
/* Values array for PDO. */
$values = [':zip' => $ZIP];
$result = query_one_row($sql,$values);

if (is_null($result) || !is_array($result)){
   die('{"success":"false"}');
}

die('{"powiat": "'.$result['powiat'].'","success":"true"}');
?>