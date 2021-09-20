<?php
if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
    die('{"success":"false"}');
}
$token='VLzyW9Tr2MBWtBLpbWqC';
echo ('{"token":"'.$token.'","success":"true"}');
?>