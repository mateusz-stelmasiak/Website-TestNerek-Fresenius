<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'msgGenerator.php';
function is_valid_email($email) { return preg_match('/^(([^<>()[\]\\.,;:\s@"\']+(\.[^<>()[\]\\.,;:\s@"\']+)*)|("[^"\']+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\d\-]+\.)+[a-zA-Z]{2,}))$/', $email); }

$send_to = 'mateusz.stelmasiak@gmail.com';
$from_name=$_REQUEST['name'];
$from_email = $_REQUEST['email'];
$content = $_REQUEST['msg'];

//check if it is a valid mail also helps avoid SQL injections
if (!is_valid_email($from_email)) {
  die('{"feedback": "Niepoprawny adres email","success":"false"}');
}

$mail_title="Wiadomość od ".$from_name;
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

//generate message with template
$msg = generateContactMsg($from_name,$from_email,$content);

//send the actual email messgae
mail( "$send_to", $mail_title, $msg ,$headers) or die('{"feedback": "Błąd serwera: nie można wysłać maila, spróbuj ponownie!","success":"false"}');

echo ('{"feedback": "Twoja wiadomość została wysłana!","success":"true"}');
?>