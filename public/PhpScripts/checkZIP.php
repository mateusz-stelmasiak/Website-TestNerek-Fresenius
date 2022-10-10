<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'db.php';
$ZIP = $_REQUEST['zip'];

$sql="SELECT powiat_id FROM lab_zips WHERE zip = :zip";
/* Values array for PDO. */
$values = [':zip' => $ZIP];
$result = query_one_row($sql,$values);

if (is_null($result) || !is_array($result)){
   die('{"success":"false"}');
}

//no longer in wieluń or minsk, mława, żuromin and nidzica:(
$closed_powiats = array(1,2,3,4,5) //all the powiats that are no longer in the event
if(in_array($result['powiat_id'] ,$closed_powiats)){
    die('{"powiat": -1,"success":"false"}');
}

die('{"powiat": "'.$result['powiat_id'].'","success":"true"}');
?>