<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
include 'db.php';
include 'msgGenerator.php';
include 'sendSms.php';

//index in table is powiat_id
//1-wieluń 2-mińsk
$sms_messages = array(
    1 => " Centrum Dializ Fresenius, Szpitalna 16. Wtorek lub czwartek, 13.00-14.00.",
    2 => " Zabierz pobrany mocz, nie trzeba byc na czczo. Laboratorium ALAB, ul. Warszawska."
);
$mail_messages = array(
    1 => "<p>
           Bezpłatne badania można wykonać od 25 października do 31 grudnia 2021 w Centrum Dializ
           Fresenius przy ulicy Szpitalnej 16 w Wieluniu. Stacja będzie pobierać krew we wtorki i
           czwartki między godziną 13.00 a 14.00.
          </p>
          <p>
           Prosimy by zabrać ze sobą prawidłowo pobrany mocz. Na badaniach nie trzeba być na czczo.
          </p>
          <p>
           Dziękujemy za udział w Ogólnopolskim Teście Zdrowia Nerek.
          </p>",
    2 => " <p>
          Bezpłatne badania można wykonać od 3 listopada do 31 grudnia 2021 w laboratorium ALAB
          w Mińsku Mazowieckim, ul. Warszawska 141 lok U2. Laboratorium pobiera próbki od
          poniedziałku do piątku w godzinach 7:00-11:30, w soboty 8:00-12:30.
         </p>
         <p>
          Prosimy by zabrać ze sobą prawidłowo pobrany mocz. Na badaniach nie trzeba być na czczo.
         </p>
         <p>
          Dziękujemy za udział w Ogólnopolskim Teście Zdrowia Nerek.
         </p>"
);

$PESEL = $_REQUEST['PESEL'];
$email = $_REQUEST['email'];
$zip = $_REQUEST['zip'];
$phone =$_REQUEST['phone'];

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

//1-wieluń 2-mińsk
$powiat_id=intval($powiat_row['powiat_id']);

//generate pseudo-random 4 digit code
$new_code=rand(1000,9999);
//for minsk use one from already generated code base
if($powiat_id==2){
    $sql= "SELECT m_code_id,code FROM codes_minsk WHERE used lIKE 0 ORDER BY RAND() LIMIT 1";
    $values = [];
    $result= query_one_row($sql,$values);
    //update the value to indicate code was used
    $sql= "UPDATE codes_minsk SET used=1 WHERE m_code_id=:code_id";
    $values = [':code_id' => $result['m_code_id']];
    query($sql,$values);
    $new_code=$result['code'];
}

//save the code in database
$sql= "INSERT INTO lab_codes (PESEL, code, powiat_id) VALUES (:pesel,:code,:powiat)";
$values = [':pesel' => $PESEL,':code' => $new_code,':powiat' => $powiat_id];
$result= query($sql,$values);
if(is_null($result)){
    die('{"feedback": "Błąd serwera: nie można dodać do bazy danych, spróbuj ponownie!","success":"false"}');
}


//send email with code
if ($email){
    $mail_title="Twój kod na badanie nerek";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";
    $headers .= "From: PoradniaNefrologiczna <poradnia@poradnianefrologiczna.pl>\r\n";
    $msg= generateLabCodeMessage($new_code,$mail_messages[$powiat_id]);

    mail( "$email", $mail_title, $msg ,$headers) or die('{"feedback": "Błąd serwera: nie można wysłać maila, spróbuj ponownie!","success":"false"}');
}

//send sms
if ($phone){
    $msg_header= 'Twoj kod na badania nerek: '.$new_code.'.';
    $full_sms_msg= $msg_header.$sms_messages[$powiat_id];
    sendSms($phone,$full_sms_msg) or die('{"feedback": "Błąd serwera: nie można wysłać smsa, spróbuj ponownie!","success":"false"}');
}

die ('{"code":"'.$new_code.'","feedback": "","success":"true"}');
?>

