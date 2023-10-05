<?php
$WebsiteRoot=$_SERVER['DOCUMENT_ROOT'];
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include 'db.php';

echo("CODE RESTORATION<br/>");
//codes list as sql string
$codes = "('VORLRNBRAH','VMDJWXMZIW','VDSTGYPZAW','VDZZLZZOQA','VDWVJCGOEA','VEAJQTCMAE','VAYAGLKGZG','VRUGYTKVEP','VPTYJINHRJ','VXOPYKMOSO','VHTPTWGWWA','VKYHPMKYEL','VDZUTWDOBZ','VVXFHHIWFZ','VIVWRNPCOA','VYZLLKPLSH','VKOYPHMNXU','VFXFTBYBGV','VJDTZGXJIZ','VZYBOUFJJE','VSMITESRLB','VHJIEYZGFV','VJTILMHEGX','VRJZJPBJOG','VAGDOMBSUW','VEWQLVLMWA','VCUTGDFBJA','VVCKXMPJOV','VTVETJGGGN','VENWHVMTZY','VFCKNKMVUO','VXTYUVYYEH','VFPHGJMMVY','VJAKJEAJUK','VBXGEHZTKZ','VBXRLDQYDL','VHFMFFIQKG','VNHFKXKXYX','VOVWSLNOFJ','VLYZTQLTKM','VFIWWILUUT','VPSXMMPGNJ','VEGPSVILJV','VNMJQFRXBQ','VOKCKKPWRE','VPOIQWQIAJ','VOYUNCRMMO','VRBPWSVLIL','VIIUVHQWJH','VVUJBZWGFO','VBXSUEEDYY','VCUPIIKZWJ','VLUJEIFEEY','VVSCCDHBDA','VHQPFICEAS','VJZLSNANVY','VXUHFMGTTI','VOYUWMDWDT','VVDBEZNFGQ','VOFZCNZXMA','VXPYLUHQLW','VDXPHFFDDZ','VFTEVUCHDI','VTNPXWYQQQ','VADSTZMNYP','VXQTTEGREF','VQBFWNWJZI','VYBBCMCKJE','VYMMQKIPZS','VVZOLNEYQL','VKZISBUQRE','VIOTXXWIZM','VNCFXFZLOI','VKGDUKYVIN','VEMQRDRVFQ','VUGUJWNZYR','VNTNNURVAV','VPYFAZXLNT','VWOIHQSDBR','VNGSZNMOLI','VZYJWGFSLD','VQGQMHKBIR','VOYJDSQXXD','VUAHLTRJOX','VQEBHPVPDT','VGCJQVJDYI','VWAMJZJWOY','VMSHZMARCJ','VZZNCBMHBM','VAJZJOILCS','VJJWSMLWOJ','VLWYNSCKVF','VPLOLHLYWC','VCDLXEANNB','VCRIXCKGZH','VFGKDOTTPP','VFPIUJJOJA','VTNQUUIPOC','VQOLZSHNBX','VWCSQHMDIK','VTWNFPCZRP','VQLCSTESYU','VUONENXBAU','VHABFQSOCK','VRDAFXKKPC','VCQUOBEDRR','VRJCTWRWUA','VGXNXILCDJ','VUFOZBIGDV','VEVGFAUIFB','VVDXKWELIQ','VVEPLMWVGJ','VBWJFXYUZF','VNFCANLCRX','VXKDUXRMIG','VLAOOQCARQ','VANSJJENIN','VJZESVBQEM','VNHEFGUFIG','VHKTPOMXVO','VXSFUFKZYS','VCKIOHTDUH','VHKBPEGWLC','VCTAYNMUVH','VGIUAEGZEW','VFHZZOGKGJ','VCAYHQTOOD','VSFZRHWQFU','VVHDOKPLWU','VURUCFKKDG','VGGWUWLNYD','VLZDPZUVGV','VMDOAEHOTJ','VPILWLBSKM','VIWJNTNKFX','VMQMULZPXA','VWDWILXXJW','VOLHRHFEOE','VFUIJIEPQC','VMNJLQPDXL','VBOHGZWUJQ','VHORXNZLJT','VUBCBHPAKH','VETVQFCAQU','VYEELSHJBM','VHXODTCTHN','VRXLOZUDTV','VIIBIEFSCI','VBIYZIYAYO','VVICRBTIFY','VYNQBQUIOG','VWQKPWJMXJ','VJQWFESTHX','VAXHIWBBRP','VDRJCZEZWQ','VXSMACYQDO','VTRSWYHDMS','VHNFQIUBAI','VLYTBFTQEL','VOHNIWSWYZ','VVGFPKZVIY','VIKNTSTKEJ','VDLEYJIIZU','VGULGGZSBW','VNWLSZKKND','VZBMPFUASY','VHLAAIVXCK','VRJPRAAJVB','VECORPINRE','VQIBZOGMYW','VVRHMNZGVT','VUXNPKGGEJ','VHRUGHHACW','VTYCNBJHHV','VYLDTHIEMC','VFWEOQYLGG','VMVBDXMALY','VBRUTDFVRL','VTTQMRHQON','VNNDEKASLI','VQSBNDDLMR','VVGYVIWWCT','VUANSWKBLB','VDENOXCXWM','VTTWMAQHQN','VXDYSBQVSQ','VKWHCHBNKL','VDOCNCETED','VSRJZMAWCA','VTJKNLIHYN','VRHOTQPBBD','VJHTEKGJPX','VFBCVLMRES','VJDKRCVAJP','VBJRQMLTXM','VETBSKBJLT','VLIRRALIJY','VBLVKZDQYH','VQTDBCVLSX','VFHVABONCQ','VLTTYCMTRH','VFJPUTPCRB','VAMPJRNUKE','VOBETLTUUW','VOLVLBZVNI','VZPPKHCBUP','VUMKNEGDEH','VECKLQETTM','VCLVIKMMKM','VKHCLNFWEG')";
//get all the people that were affected
$sql = "SET names 'utf8'";
$values = [];
$result = query_one_row($sql,$values);

$sql = "SELECT DISTINCT name, powiat_id FROM lab_codes WHERE code IN ".$codes;
$values = [];
$people = query($sql,$values);

while ($row = $people->fetch(PDO::FETCH_ASSOC)) {
    //remove their codes from lab_codes
    $sql = "DELETE FROM lab_codes WHERE name =:name";
    $values =  [':name' => $row['name']];
    $result= query($sql,$values) or die("CANNOT REMOVE");

    //generate new codes
    $sql= "SELECT id,code FROM codes_mlawa WHERE used lIKE 0 ORDER BY RAND() LIMIT 1";
    $values = [];
    $result= query_one_row($sql,$values);
    //update the value to indicate code was used
    $sql= "UPDATE codes_mlawa SET used=1 WHERE id=:code_id";
    $values = [':code_id' => $result['id']];
    query($sql,$values);
    $new_code=$result['code'];

    //save the code in database
    $sql = "SET names 'utf8'";
    $values = [];
    $result = query_one_row($sql,$values);

    //echo("<br>ADDING for ".$row['name']);
    $sql= "INSERT INTO lab_codes (name, code, powiat_id) VALUES (:name,:code,:powiat)";
    $values = [':name' => $row['name'],':code' => $new_code,':powiat' => $row['powiat_id']];
    $result= query($sql,$values) or die("CANNOT ADD");
    echo("<br>".$row['name'].";".$new_code);
}






?>