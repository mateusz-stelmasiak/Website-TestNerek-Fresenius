<?php

function generateInviteMessage(){
    $link = "http://poradnianefrologiczna.pl/";
    $msg_title="Test zdrowia nerek";
    $msg_content = "<p>Zostałeś zaproszony do wzięcia udziału w internetowym teście zdrowia nerek!</p>
    <p>Nerki to filtr życia, który odpowiada za prawidłowe funkcjonowanie wszystkich głównych narządów.
    Choroby nerek przebiegają bardzo długo bezobjawowo i bardzo często są wykrywane dopiero gdy są one już zupełnie zniszczone.
    Życie chorego mogą wtedy uratować wyłącznie przeszczep lub dializa.
    Test nie zastępuje wizyty u lekarza, lecz może Ci pomóc uratować nerki.</p>
    <p>Aby wziąć udział w teście kliknij przycisk poniżej!</p>";

    $msg = '
    <html lang="pl-PL">
<head>
    <meta charset="utf-8"/>
</head>
<body>
<div style="background-color:#f8f8f8; height: 30"></div>
<div style="margin:0;padding:0!important;background-color:#f8f8f8" width="100%">
    <center style="width:100%">
        <div style="max-width:600px;margin:0 auto">
            <font face="Verdana"  >
                <table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="max-width:600px;width:100%;margin:auto;border-spacing:0!important;border-collapse:collapse!important;">

                    <tbody>
                    <tr>
                        <td align="right" valign="center" style="padding:10px 20px;background-color:#03379a; height:100px">
                            <img src="https://serwer1305496.home.pl/poradnia_nefrologiczna/freseniusLogo_white.png" style="width: 30%">
                        </td>
                    </tr>
                    <td height="10">&nbsp;</td>
                    <tr >
                        <td valign="top" style="padding: 10px 20px 0px 20px;" >
                            <h1 style="color:rgb(3,55,154); font-size: 22pt;margin-bottom: 0px;">'.$msg_title.'</h1>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top" style="padding:0px 20px;  text-align: justify; text-justify: inter-word;">
                            '.$msg_content.'
                        </td>
                    </tr>
                    <td height="30px">&nbsp;</td>

                    <tr>
                        <td align="center" valign="top" style="padding:20px 0">
                            <h2 style="color:rgb(3,55,154)">Kliknij aby przejść do testu</h2>
                            <a href="'.$link.'" style=" background-color: #dc5555;border-radius: 10px;color: white; padding: 15px 40px;text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px;cursor: pointer"><b>ROZPOCZNIJ TEST</b></a>
                        </td>
                    </tr>


                    <td height="250">&nbsp;</td>
                    <tr>
                        <td align="center" valign="top" style="padding:20px 0;background-color:#eeeeee ">
                            <font size="1.5" color="1f1f1f"> <i> Ta wiadomość została wysłana przez <br> Fresenius Nephrocare Polska S.A. (ul. Krzywa 13, 60-118 Poznań)</i></font>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </font>
        </div>
</div>
</center>
</div>
<div style="background-color:#f8f8f8; height: 30"></div>
</body>
</html>';
    return $msg;
}

function generateLabCodeMessage($code,$msg_content){
    $msg_title="Twoje darmowe badanie nerek";

    $msg = '
    <html lang="pl-PL">
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
    <div style="background-color:#f8f8f8; height: 30"></div>
    <div style="margin:0;padding:0!important;background-color:#f8f8f8" width="100%">
        <center style="width:100%">
            <div style="max-width:600px;margin:0 auto">
                <font face="Verdana"  >
                    <table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="max-width:600px;width:100%;margin:auto;border-spacing:0!important;border-collapse:collapse!important;">
    
                        <tbody>
                        <tr>
                            <td align="right" valign="center" style="padding:10px 20px;background-color:#03379a; height:100px">
                                <img src="https://serwer1305496.home.pl/poradnia_nefrologiczna/freseniusLogo_white.png" style="width: 30%">
                            </td>
                        </tr>
                        <td height="10">&nbsp;</td>
                        <tr >
                            <td valign="top" style="padding: 10px 20px 0px 20px;" >
                                <h1 style="color:rgb(3,55,154); font-size: 22pt;margin-bottom: 0px;">'.$msg_title.'</h1>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" valign="top" style="padding:0px 20px;  text-align: justify; text-justify: inter-word;">
                                '.$msg_content.'
                            </td>
                        </tr>
                        <td height="30">&nbsp;</td>
                        <tr>
                            <td align="center" valign="top" style="padding:20px 0">
                                <h2 style="color:rgb(3,55,154)">Twój kod na badania nerek</h2>
                                <div style="font-size: 3rem; font-weight: bold;width: 30%;color: #dc5555; border: 1px rgba(3,55,154,0.5) solid;border-radius: 3%;padding: 0.5rem 8rem;">
                                    '.$code.'
                                </div>
                            </td>
                        </tr>
    
                        <td height="250">&nbsp;</td>
                        <tr>
                            <td align="center" valign="top" style="padding:20px 0;background-color:#eeeeee ">
                                <font size="1.5" color="1f1f1f"> <i> Ta wiadomość została wysłana przez <br>  Fresenius Nephrocare Polska S.A. (ul. Krzywa 13, 60-118 Poznań)</i></font>
                            </td>
                        </tr>
    
                        </tbody>
                    </table>
                </font>
            </div>
    </div>
    </center>
    </div>
    <div style="background-color:#f8f8f8; height: 30"></div>
    </body>
    </html>';
    return $msg;
}
function generateContactMsg($from_name,$from_email,$msg_content){
    $msg_title="Nowa wiadomość z formularza kontaktowego";

    $msg = '
    <html lang="pl-PL">
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
    <div style="background-color:#f8f8f8; height: 30"></div>
    <div style="margin:0;padding:0!important;background-color:#f8f8f8" width="100%">
        <center style="width:100%">
            <div style="max-width:600px;margin:0 auto">
                <font face="Verdana">
                    <table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff"
                           style="max-width:600px;width:100%;margin:auto;border-spacing:0!important;border-collapse:collapse!important;">

                        <tbody>
                        <tr>
                            <td align="right" valign="center"
                                style="padding:10px 20px;background-color:#03379a; height:100px">
                                <img src="https://serwer1305496.home.pl/poradnia_nefrologiczna/freseniusLogo_white.png"
                                     style="width: 30%">
                            </td>
                        </tr>
                        <td height="10">&nbsp;</td>
                        <tr>
                            <td valign="top" style="padding: 10px 20px 0px 20px;">
                                <h1 style="color:rgb(3,55,154); font-size: 22pt;margin-bottom: 0px;">'.$msg_title.'</h1>
                            </td>
                        </tr>
                        <td height="5">&nbsp;</td>
                        <tr>
                            <td align="left" valign="top"
                                style="padding:0px 20px;  text-align: justify; text-justify: inter-word;">
                                <span style="color:rgb(3,55,154);">Imię i nazwisko: </span>'.$from_name.'
                            </td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"
                                style="padding:0px 20px;  text-align: justify; text-justify: inter-word;">
                                <span style="color:rgb(3,55,154);">Adres email: </span>'.$from_email.'
                            </td>
                        </tr>
                        <td height="10">&nbsp;</td>
                        <tr>
                            <td align="left" valign="top"
                                style="padding:0px 20px;  text-align: justify; text-justify: inter-word;">
                                '.$msg_content.'
                            </td>
                        </tr>
                        <td height="30px">&nbsp;</td>


                        <td height="250">&nbsp;</td>
                        <tr>
                            <td align="center" valign="top" style="padding:20px 0;background-color:#eeeeee ">
                                <font size="1.5" color="1f1f1f"> <i> Ta wiadomość została wysłana przez <br> Fresenius
                                    Nephrocare Polska S.A. (ul. Krzywa 13, 60-118 Poznań)</i></font>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </font>
            </div>
    </div>
    </center>
    </div>
    <div style="background-color:#f8f8f8; height: 30"></div>
    </body>
    </html>';
    return $msg;
}

?>