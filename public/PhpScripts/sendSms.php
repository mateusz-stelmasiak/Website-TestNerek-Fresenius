<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Smsapi\Client\Curl\SmsapiHttpClient;
use Smsapi\Client\SmsapiClient;
use Smsapi\Client\Service\SmsapiComService;
use Smsapi\Client\Feature\Sms\Bag\SendSmsBag;

require '../vendor/autoload.php';

$client = new SmsapiHttpClient();
$apiToken = 'ciSbp6LC5luN3D9oh4sNaDiorn1konzuHPA18svP';
$service = $client->smsapiPlService($apiToken);

function sendSms($number,$msg){
    global $service;
    $sms = SendSmsBag::withMessage($number, $msg);
    //$sms->from = 'e-poradnia';

    return $service->smsFeature()
        ->sendSms($sms);


}
?>