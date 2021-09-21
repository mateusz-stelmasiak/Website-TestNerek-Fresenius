<?php
function query($sql)
{
    $servername = "serwer2131085.home.pl";
    $username = "35059720_testnerek";
    $password = "9+uphM}~m*B4_3zd";
    $dbname = "35059720_testnerek";
    //CREATE CONNECTION
    $conn = new mysqli($servername, $username, $password, $dbname) or die ('{"feedback": "Nie można połączyć z bazą danych"}');
    $result=$conn->query($sql);
    $conn->close();

    return $result;
}

?>