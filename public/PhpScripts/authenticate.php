<?php
session_start();
include '../PhpScripts/db.php';

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
     header('Location: /admin?login=failed');
     die('Niepoprawne hasło/użytkownik!');
}

$db_password=$sqlResult['password'];

// Account exists, now we verify the password.
if (!password_verify($password, $db_password)) {
    header('Location: /admin?error=failed');
    die('Niepoprawne hasło/użytkownik');
}

// Create sessions so we know the user is logged in,
$_SESSION['SlOAlgiuDdxidSCDxqeD'] = TRUE;
$_SESSION['username'] = $username;
$_SESSION['start'] = time();
$_SESSION['expire'] = $_SESSION['start'] + (5 * 60);
//redirect to admin panel
header('Location: https://www.poradnianefrologiczna.pl/0Q9SCT0GXR9P7POTL3DQ/');
session_write_close();
exit();
?>
