<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include 'msgGenerator.php';

function is_valid_email($email) { return preg_match('/^(([^<>()[\]\\.,;:\s@"\']+(\.[^<>()[\]\\.,;:\s@"\']+)*)|("[^"\']+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\d\-]+\.)+[a-zA-Z]{2,}))$/', $email); }
function httpPost($url, $data)
{
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}

$send_to = 'kontakt@poradnianefrologiczna.pl';
$from_name=$_REQUEST['name'];
$from_email = $_REQUEST['email'];
$content = $_REQUEST['msg'];
$captcha=$_REQUEST['captcha'];

//verify captcha
$captcha_key='6LdXcrocAAAAAIsc5yFafARGDrwAfmVTP_0FTX8n';
$post_payload= [
    'secret' => $captcha_key,
    'response' => $captcha,
];
$google_api_url='https://www.google.com/recaptcha/api/siteverify';

$response=httpPost($google_api_url,$post_payload);
$response_obj=json_decode($response);
if(!$response_obj->{'success'}){
    exit ('{"feedback": "Niepoprawna captcha!","success":"false"}');
}


//check if it is a valid mail
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