<?php
session_start();
include 'db.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//check if the data from the login form was submitted
//if (!isset($_POST['username'], $_POST['password'])) {
//	die('Proszę podać hasło i nazwę użytkownika!');
//}

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

//try and fetch password for given username from db
$sql= 'SELECT password FROM accounts WHERE name = :name';
/* Values array for PDO. */
$values = [':name' => $username];
$sqlResult = query_one_row($sql,$values);

//if no such username exists
if (is_null($sqlResult) || !is_array($sqlResult)){
     header('Location: /admin');
     die('Niepoprawne hasło/użytkownik!');
}

$db_password=$sqlResult['password'];

// Account exists, now we verify the password.
if (!password_verify($password, $db_password)) {
    header('Location: /admin');
    die('Niepoprawne hasło/użytkownik');
}

// Create sessions so we know the user is logged in,
session_regenerate_id();
$_SESSION['0Q9SCT0GXR9P7POTL3DQ'] = TRUE;
//redirect to admin panel
header('Location: /0Q9SCT0GXR9P7POTL3DQ');
?>
