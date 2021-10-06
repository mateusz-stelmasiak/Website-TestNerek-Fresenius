<?php
session_start();
//If the user is not logged in redirect to the login page...
if (!isset($_SESSION['SlOAlgiuDdxidSCDxqeD'])) {
	exit('Odmowa dostępu!');;
}
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include '../../PhpScripts/db.php';


//select all questions, they will be headers in the output file
$sql="SELECT question FROM survey_questions";
$values=[];
$db_result = query($sql,$values);

if(is_null($db_result)){
    exit();
}

//add selected quesitons to header list
$output_headers=array('nr','wiek','masa ciała','wzrost');
$additional_headers_amount=count($output_headers);
foreach($db_result as $header){
       $output_headers[]=iconv('iso-8859-2','utf-8',$header['question']);
}
$question_number= count($output_headers)-$additional_headers_amount;

//select all responses
$sql="SELECT DISTINCT
          r.responder_id,
          re.age,
          re.weight,
          re.height,
          r.question_id,
          a.answer
      FROM
          survey_results r
      INNER JOIN responders re ON
          re.responder_id = r.responder_id
      INNER JOIN surver_question_answers a ON
          a.answer_id = r.answer_id
      WHERE
          r.question_id = a.question_id
      ORDER BY
          r.responder_id,
          r.question_id";
$values=[];
$db_result = query($sql,$values);

$output= array();
$index=0;
$counter=$question_number;
$output_row=NULL;
while ($db_row = $db_result->fetch(PDO::FETCH_ASSOC)) {
       if($counter==$question_number){
            $counter=0;
            $index++;
            if($output_row!=NULL){
//                 echo('<br>NOWA LINIA');
//                 print_r($output_row);
                $output[]=$output_row;
            }
            $output_row= array($index);
            $output_row[]=$db_row['age'];
            $output_row[]=$db_row['weight'];
            $output_row[]=$db_row['height'];
       }

       $output_row[]=iconv('iso-8859-2','utf-8',$db_row['answer']);
//        echo('<br>NOWA DANA '.$db_row['answer'].' '.$db_row['responder_id']);
       $counter++;
}
$output[]=$output_row;
//
// echo('<br>OUTPUT');
// print_r($output);


header('Content-Type: text/csv; charset=iso-8859-2');
header('Content-Disposition: attachment; filename=wyniki_ankiet.csv');
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