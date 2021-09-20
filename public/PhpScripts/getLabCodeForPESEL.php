<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
$PESEL = $_REQUEST['PESEL'];

//check if this person has not yet generated a code
$sql="SELECT code FROM lab_codes WHERE PESEL = ".$PESEL;
$labcode = mysqli_fetch_array(query($sql));
if ($labcode!=""){
    die('{"code":"'.$labcode[0].'","feedback": "Oto Pana/Pani kod!","success":"true"}');
}

die('{"feedback": "Nie wygenrowano jeszcze dla Pana/Pani kodu!","success":"false"}');
?>