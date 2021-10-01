<?php

declare(strict_types=1);

use Smsapi\Client\Curl\SmsapiHttpClient;
use Smsapi\Client\SmsapiClient;
use Smsapi\Client\Service\SmsapiComService;

require_once 'vendor/autoload.php';


$client = new SmsapiHttpClient();
$apiToken = 'ciSbp6LC5luN3D9oh4sNaDiorn1konzuHPA18svP';
$service = $client->smsapiPlService($apiToken);


function sendLabCode($number,$code){
    global $service;

    $message = "Twój kod do laboratorium: ".$code;
    $sms = SendSmsBag::withMessage($number,  $message);
    $sms->from = 'PoradniaNefrologiczna';

    $service->smsFeature()
        ->sendSms($sms);
}
?>