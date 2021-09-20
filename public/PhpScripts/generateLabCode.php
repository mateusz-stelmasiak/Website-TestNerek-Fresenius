<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
include 'msgGenerator.php';

$PESEL = $_REQUEST['PESEL'];
$email = $_REQUEST['email'];
$zip = $_REQUEST['zip'];

//check if this person has not yet generated a code
$sql="SELECT code FROM lab_codes WHERE PESEL = ".$PESEL;
$already_got_code = mysqli_fetch_array(query($sql));
if ($already_got_code!=""){
    die('{"code":"'.$already_got_code[0].'","feedback": "Wygenrowano już wcześniej dla Pana/Pani kod!","success":"true"}');
}

//check if the person qualifies
//if($zip)


//generate pseudo-random 4 digit code
$new_code=rand(1000,9999);

//save the code in database
$sql_insert="INSERT INTO lab_codes (PESEL, code, zip) VALUES ('".$PESEL."','".$new_code."','".$zip."')";
query($sql_insert) or die('{"feedback": "Błąd serwera: nie można dodać do bazy danych, spróbuj ponownie!","success":"false"}');

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

