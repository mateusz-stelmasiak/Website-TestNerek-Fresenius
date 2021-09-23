<?php
session_start();
include 'db.php';

// Now we check if the data from the login form was submitted, isset() will check if the data exists.
if ( !isset($_POST['username'], $_POST['password']) ) {
	// Could not get the data that should have been sent.
	exit('Proszę podać hasło i nazwę użytkownika!');
}

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

//hash password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
//check if this person has not yet generated a code
$sql='SELECT id, password FROM accounts WHERE username = ?'.$username;
$db_password = mysqli_fetch_array(query($sql));

if ($db_password==""){
    exit('Niepoprawne hasło/użytkownik');
}

// Account exists, now we verify the password.
if ($db_password === $hashed_password) {
    // Create sessions so we know the user is logged in,
    //they basically act like cookies but remember the data on the server.
    session_regenerate_id();
    $_SESSION['0Q9SCT0GXR9P7POTL3DQ'] = TRUE;
    //$_SESSION['name'] = $username;
    header('Location: /0Q9SCT0GXR9P7POTL3DQ');
} else {
    echo('Niepoprawne hasło/użytkownik!');
}

?>
