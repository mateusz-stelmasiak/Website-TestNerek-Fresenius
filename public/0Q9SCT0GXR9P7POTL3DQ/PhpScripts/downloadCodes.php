<?php
session_start();
//If the user is not logged in redirect to the login page...
if (!isset($_SESSION['SlOAlgiuDdxidSCDxqeD'])) {
	exit('Odmowa dostępu!');;
}
include '../../PhpScripts/db.php';

$region = $_REQUEST['powiatS'];

//all regions marked by region=-1
if($region==-1){
    $sql="SELECT l.name,l.code,p.powiat FROM lab_codes l JOIN powiaty p ON p.powiat_id=l.powiat_id";
    $values=[];
    $output_headers=array('nr','imie i nazwisko','kod','powiat');
}
//select from specified region
else{
    $sql="SELECT name,code FROM lab_codes WHERE powiat_id = :id";
    $values=[':id' => $region];
    $output_headers=array('nr','imie i nazwisko','kod');
}

$db_result = query($sql,$values);
if(is_null($db_result) || !is_array($db_result)){
    //handle empty?
}

$output= array();
$index=1;
while ($row = $db_result->fetch(PDO::FETCH_ASSOC)) {
    $new_row= array($index);
    foreach($row as $column){
        $new_row[]= $column;
    }

    $output[]= $new_row;
    $index=$index+1;
}



header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=kody_lab.csv');
$output_stream = fopen('php://output', 'w');
//set separator to ;
$delimiter=';';
fputcsv($output_stream, $output_headers,$delimiter);

if (count($output) > 0) {
    foreach ($output as $row) {
        fputcsv($output_stream,$row,$delimiter);
    }
}
?>