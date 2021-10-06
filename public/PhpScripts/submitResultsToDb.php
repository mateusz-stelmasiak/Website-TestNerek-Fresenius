<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include 'db.php';

$answers = $_REQUEST['answers'];
$weight = $_REQUEST['weight'];
$height = $_REQUEST['height'];
$age = $_REQUEST['age'];

//insert responder into responders table first (used as foreign key in results array)
$sql = "INSERT INTO responders (age, weight, height, submition_time) VALUES (:age,:weight,:height,CURRENT_TIMESTAMP)";
$values=[':age'=>$age,':weight'=>$weight,':height'=>$height];
query($sql,$values);

//get responders ID
$responder_id=$pdo->lastInsertId();

//insert results
$answ_array = str_split($answers);
$sql = "INSERT INTO survey_results(responder_id,question_id,answer_id) VALUES(:r_id,:q_id,:a_id)";
$questionID=0;
foreach ($answ_array as $answer) {
 $values = [':r_id'=>$responder_id,':q_id' => $questionID,':a_id' => $answer];
 query($sql,$values);
 $questionID++;
}


?>