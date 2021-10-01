<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
include 'msgGenerator.php';

$PESEL = $_REQUEST['PESEL'];
$email = $_REQUEST['email'];
$zip = $_REQUEST['zip'];

//check if this person has not yet generated a code
$sql="SELECT code FROM lab_codes WHERE PESEL = :pesel";
/* Values array for PDO. */
$values = [':pesel' => $PESEL];
$result = query_one_row($sql,$values);

if (!is_null($result) && is_array($result)){
    die('{"code":"'.$result['code'].'","feedback": "Wygenrowano już wcześniej dla Pana/Pani kod!","success":"true"}');
}

//check if the person qualifies
$sql="SELECT powiat_id FROM lab_zips WHERE zip = :zip";
/* Values array for PDO. */
$values = [':zip' => $zip];
$powiat_row = query_one_row($sql,$values);

if (is_null($powiat_row) || !is_array($powiat_row)){
   die('{"feedback": "Niestety nie prowadzimy badań w Pani/Pana rejonie!","success":"false"}');
}

$powiat_id=intval($powiat_row['powiat_id']);

//generate pseudo-random 4 digit code
$new_code=rand(1000,9999);

//save the code in database
$sql= "INSERT INTO lab_codes (PESEL, code, powiat_id) VALUES (:pesel,:code,:powiat)";
$values = [':pesel' => $PESEL,':code' => $new_code,':powiat' => $powiat_id];
$result= query($sql,$values);
if(is_null($result)){
    die('{"feedback": "Błąd serwera: nie można dodać do bazy danych, spróbuj ponownie!","success":"false"}');
}

//send email with code
$mail_title="Twój kod na badanie nerek";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: PoradniaNefrologiczna <poradnia@poradnianefrologiczna.pl>\r\n";

if ($email){
    $msg= generateLabCodeMessage($new_code,"unknown","unknown");
    mail( "$email", $mail_title, $msg ,$headers) or die('{"feedback": "Błąd serwera: nie można wysłać maila, spróbuj ponownie!","success":"false"}');
    die('{"code":"'.$new_code.'","feedback": "Kod do badań wysłano także na Pana/Pani email!","success":"true"}');
}

die ('{"code":"'.$new_code.'","feedback": "","success":"true"}');
?>

