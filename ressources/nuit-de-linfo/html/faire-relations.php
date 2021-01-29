<?php
session_start();
if(isset($_GET['argent'])&& $_GET['argent']=='Yes'){
	$_SESSION['argent'] = 'Yes';
}
if(isset($_GET['depression'])&& $_GET['depression']=='Yes'){
	$_SESSION['depression'] = 'Yes';
}
if(isset($_GET['famille'])&& $_GET['famille']=='Yes'){
	$_SESSION['famille'] = 'Yes';
}
header('location:convo.php');
?>
