<?php
session_start();
//If the user is not logged in redirect to the login page...
if (!isset($_SESSION['SlOAlgiuDdxidSCDxqeD'])) {
	exit('Odmowa dostępu!');;
}
include '../../PhpScripts/db.php';

$today = $_REQUEST['today'];

$sql="SELECT COUNT(responder_id) as num FROM responders";
$values=[];

if($today==True){
    $sql="SELECT COUNT(responder_id) as num FROM responders WHERE submition_time >= CURDATE()";
}

$row = query_one_row($sql,$values);
if(is_null($row) || !is_array($row)){ exit('0');}

exit($row['num']);
?>