<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include '../PhpScripts/db.php';
echo($_SESSION['logedIn']);
// If the user is not logged in redirect to the login page...
// if (!isset($_SESSION['0Q9SCT0GXR9P7POTL3DQ'])) {
// 	header('Location: /admin');
// 	exit;
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="apple-touch-icon" sizes="57x57" href="../favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="../favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicons/favicon-16x16.png">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="adminPanel.css">
    <meta name="theme-color" content="#000000"/>
    <title>Panel Administracyjny Poradni</title>
</head>
<body>
<header>
    <img src="freseniusLogo_white.png" alt="logo"/>
</header>

<section>
    <h1>Do pobrania</h1>
    <p>
        Użyj poniższych przycisków aby pobrać dane zebrane na stronie, w formacie .csv (plik do otwarcia np. w Microsoft
        Excel).
    </p>
    <div class="download-container">
        <!--Get a list of labcodes and PESELS-->
        <form>
            <h2>Kody laboratoryjne</h2>
            <div class="input-with-label">
                <label for="powiatS">Wybierz powiat</label>
                <select name="powiatS" id="powiatS">
                    <?php
                        $REGIONS = query("SELECT powiat_id,powiat FROM powiaty",[]);
                        while ($row = $REGIONS->fetch(PDO::FETCH_ASSOC)) {
                            echo("<option value='".$row['powiat_id']."'>".iconv('iso-8859-2','utf-8',$row['powiat'])."</option>");
                        }
                    ?>
                    <option value="-1">wszystkie</option>
                </select>
            </div>
            <div>Ilośc kodów:&nbsp;
                <?php
                        $row = query_one_row("SELECT COUNT(PESEL) as codes FROM lab_codes",[]);
                        if(is_null($row) || !is_array($row)){ exit('0');}
                        echo($row['codes']);
                ?>
            </div>
            <button>Pobierz</button>
        </form>

        <!--Get survey data-->
        <form>
            <h2>Dane z ankiet</h2>
            <div>Wypełnionych ankiet: </div>
            <button>Pobierz</button>
        </form>
    </div>

</section>

</body>
</html>