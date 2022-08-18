<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';

$name = $_REQUEST['name'];
echo($name);
//check if the person qualifies
$sql="UPDATE lab_codes SET name =:name WHERE code_id = 445";
/* Values array for PDO. */
$values = [':name' => $name];
$powiat_row = query_one_row($sql,$values);



?>

