<?php
function query($sql)
{
    $servername = "serwer1305496.home.pl";
    $username = "13748919_testnerek";
    $password = "9+uphM}~m*B4_3zd";
    $dbname = "13748919_testnerek";
    //CREATE CONNECTION
    $conn = new mysqli($servername, $username, $password, $dbname) or die ('{"feedback": "Nie można połączyć z bazą danych"}');
    $result=$conn->query($sql);
    $conn->close();

    return $result;
}

?>