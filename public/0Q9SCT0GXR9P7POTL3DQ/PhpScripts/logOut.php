<?php
session_start();
if (!isset($_SESSION['SlOAlgiuDdxidSCDxqeD'])) {
	exit('Odmowa dostępu!');;
}

unset($_SESSION['SlOAlgiuDdxidSCDxqeD']);
exit();
?>