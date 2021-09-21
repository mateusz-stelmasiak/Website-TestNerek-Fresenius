<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
$ZIP = $_REQUEST['zip'];


$sql="SELECT powiat FROM lab_zips z JOIN powiaty p ON z.powiat_id = p.powiat_id WHERE z.zip = '".$ZIP."'";
$powiat = mysqli_fetch_array(query($sql));
if ($powiat!=""){
    die('{"powiat": "'.$powiat[0].'","success":"true"}');
}

die('{"success":"false"}');
?>