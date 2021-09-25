<?php
//DO NOT UPLOAD TO PRODUCTION!!
//Helper script to create admin account with hashed password in db
//use example, in browser
//[url]/createAccount.php?username=admin&password=vs%RFb7_~>{yA)yE
//DO NOT UPLOAD TO PRODUCTION!!
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'db.php';
$password = $_REQUEST['password'];
$username = $_REQUEST['username'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);
/* Insert query template. */
$query = 'INSERT INTO accounts (name, password) VALUES (:name, :passwd)';
/* Values array for PDO. */
$values = [':name' => $username, ':passwd' => $hashed_password];

$result=query($query,$values);
if(is_null($result)){
    die('Error, cannot create account!');
}

die('Account created!');
?>
