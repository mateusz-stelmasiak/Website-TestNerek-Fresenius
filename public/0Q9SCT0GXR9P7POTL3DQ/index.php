<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include '../PhpScripts/db.php';

// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['SlOAlgiuDdxidSCDxqeD'])) {
	header('Location: /admin');
	exit;
}
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
    <title>Panel Administracyjny</title>
</head>
<body>
<header>
    <img src="freseniusLogo_white.png" alt="logo"/>
    <svg onclick="logOut()" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 viewBox="0 0 384.971 384.971">
            <g>
                <g id="Sign_Out">
                    <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
                        C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
                        C192.485,366.299,187.095,360.91,180.455,360.91z"/>
                    <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
                        c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
                        c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/>
                </g>
            </g>
    </svg>
</header>


<section>
    <h1>Dane witryny</h1>
    <p> Wypełnionych ankiet dzisiaj:&nbsp;<b><span id='todaySurveyCount'></span></b> </p>
    <p> Ogólnie wypełnionych ankiet:&nbsp;<b><span id='allSurveyCount'></span></b></p>
</section>

<section>
    <h1>Do pobrania</h1>
    <p>
        Użyj poniższych przycisków aby pobrać dane zebrane na stronie, w formacie .csv (plik do otwarcia np. w Microsoft
        Excel).
    </p>
    <div class="download-container">
        <!--Get a list of labcodes and PESELS-->
        <form action="PhpScripts/downloadCodes.php" method="post">
            <h2>Kody laboratoryjne</h2>
            <div class="input-with-label">
                <label for="powiatS">Wybierz powiat</label>
                <select name="powiatS" id="powiatS" onchange='updateCodeCount(this)'>
                    <?php
                        $REGIONS = query("SELECT powiat_id,powiat FROM powiaty",[]);
                        while ($row = $REGIONS->fetch(PDO::FETCH_ASSOC)) {
                    echo("<option value='".$row['powiat_id']."'>".iconv('iso-8859-2','utf-8',$row['powiat'])."</option>");
                    }
                    ?>
                    <option value="-1">wszystkie</option>
                </select>
            </div>

            <div>Liczba kodów:&nbsp;<span id='codeCount'></span></div>
            <button>Pobierz</button>
        </form>

        <!--Get survey data-->
        <form action="PhpScripts/downloadSurveyData.php" method="post">
            <h2>Dane z ankiet</h2>
            <div>Wypełnionych ankiet:&nbsp;<span id='downloadSurveyCount'></span> </div>
            <button>Pobierz</button>
        </form>
    </div>

</section>
</body>

<script type="application/javascript">
const fetchOptions={
    method: 'get',
    mode: "same-origin",
    credentials: "same-origin",
}

//populate code count after loading page
updateCodeCount(document.getElementById('powiatS'));
calculateAllSurveyCount();
calculateTodaySurveyCount();

async function updateCodeCount(selector) {
    let codeCountHTML = document.getElementById('codeCount');
    codeCountHTML.innerText = "loading..."
    const response = await fetch('./PhpScripts/countLabCodesFromRegion.php?region='+selector.value, fetchOptions);
    const respBody = await response.text();
    //inject into HTML element
    codeCountHTML.innerText = respBody.toString();
}

async function calculateAllSurveyCount() {
    let downloadSurveyCountHTML = document.getElementById('downloadSurveyCount');
    let allSurveyCountHTML = document.getElementById('allSurveyCount');
    downloadSurveyCountHTML.innerText = "loading...";
    allSurveyCountHTML.innerText = "loading..."
    const response = await fetch('./PhpScripts/countSurveyData.php', fetchOptions);
    const respBody = await response.text();
    //inject into HTML element
    downloadSurveyCountHTML.innerText = respBody.toString();
    allSurveyCountHTML.innerText = respBody.toString();
}

async function calculateTodaySurveyCount() {
    let surveyCountHTML = document.getElementById('todaySurveyCount');
    surveyCountHTML.innerText = "loading...";
    const response = await fetch('./PhpScripts/countSurveyData.php?today=true', fetchOptions);
    const respBody = await response.text();
    //inject into HTML element
    surveyCountHTML.innerText = respBody.toString();
}

async function logOut(){
 const response = await fetch('./PhpScripts/logOut.php', fetchOptions);
 window.location.reload(true);
}
</script>


</html>