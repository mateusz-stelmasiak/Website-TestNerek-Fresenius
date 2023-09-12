<?php
$servername = "home.pl";
$username = "";
$password = "9+********";
$dbname = "35059720_";

//Creating a DB connector (Pdo)
$pdo = NULL;
$connectionString = 'mysql:host=' . $servername . ';dbname=' . $dbname.';charset=utf8';

try
{
   $pdo = new PDO($connectionString, $username,  $password);
   /* Enable exceptions on errors. */
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e)
{
   die('{"feedback": "Nie można połączyć z bazą danych"}');
}

/* Executes a query, returns NULL on fail*/
function query($query,$values){
    //imports pdo object from outer scope
    global $pdo;
    try
    {
      $res = $pdo->prepare($query);
      $res->execute($values);
      return $res;
    }
    catch (PDOException $e)
    {
      return NULL;
    }
}

/* Executes a query returning only one row, returns NULL on fail*/
function query_one_row($query,$values){
    //imports pdo object from outer scope
    global $pdo;
    try
    {
      $res = $pdo->prepare($query);
      $res->execute($values);
      $row = $res->fetch(PDO::FETCH_ASSOC);
      return $row;
    }
    catch (PDOException $e)
    {
      return NULL;
    }
}

?>
