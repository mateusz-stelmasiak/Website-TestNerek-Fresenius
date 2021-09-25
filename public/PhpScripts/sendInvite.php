<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
include 'msgGenerator.php';
function is_valid_email($email) { return preg_match('/^(([^<>()[\]\\.,;:\s@"\']+(\.[^<>()[\]\\.,;:\s@"\']+)*)|("[^"\']+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\d\-]+\.)+[a-zA-Z]{2,}))$/', $email); }

$send_to = $_REQUEST['email'];

//check if it is a valid mail also helps avoid SQL injections
if (!is_valid_email($send_to)) {
  die('{"feedback": "Niepoprawny adres email","success":"false"}');
}

//check if this person has not yet been invited today (spam avoidance)
$sql="SELECT email FROM sent_invites WHERE email = :send_to AND DATEDIFF(sent, CURRENT_DATE) = 0";
$values = [':send_to' => $send_to];
$result = query_one_row($sql,$values);

if (!is_null($result) && is_array($result)){
   die('{"feedback": "Wysłano już dzisiaj zaproszenie na ten adres. Spróbuj ponownie jutro!","success":"false"}');
}

$mail_title="Zaproszenie do testu zdrowia nerek";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: PoradniaNefrologiczna <poradnia@poradnianefrologiczna.pl>\r\n"; 
//$headers .= "Reply-To: poradnia@poradnianefrologiczna.pl\r\n"; 

//generate message with template
$msg = generateInviteMessage();

//send the actual email message
mail( "$send_to", $mail_title, $msg ,$headers) or die('{"feedback": "Błąd serwera: nie można wysłać maila, spróbuj ponownie!","success":"false"}');

//try to save into database, for spam detection later
$sql_insert="INSERT INTO sent_invites (email, sent) VALUES (:send_to,CURRENT_DATE)";
$values = [':send_to' => $send_to];
$result= query($sql_insert,$values);
if(is_null($result)){
    die('{"feedback": "Błąd serwera, spróbuj ponownie!","success":"false"}');
}

echo ('{"feedback": "Wysłano zaproszenie do '.$send_to.'!","success":"true"}');
?>