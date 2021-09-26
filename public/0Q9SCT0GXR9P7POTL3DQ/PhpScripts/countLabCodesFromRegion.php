<?php
session_start();
//If the user is not logged in redirect to the login page...
if (!isset($_SESSION['SlOAlgiuDdxidSCDxqeD'])) {
	exit('Odmowa dostępu!');;
}
include '../../PhpScripts/db.php';

$region = $_REQUEST['region'];

//all regions marked by region=-1
if($region==-1){
    $sql="SELECT COUNT(PESEL) as codes FROM lab_codes";
    $values=[];
}
//select from specified region
else{
    $sql="SELECT COUNT(PESEL) as codes FROM lab_codes WHERE powiat_id = :id";
    $values=[':id' => $region];
}

$row = query_one_row($sql,$values);
if(is_null($row) || !is_array($row)){ exit('0');}

exit($row['codes']);
?>