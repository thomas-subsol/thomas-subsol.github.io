<?php
session_start();
if(isset($_POST["username"])){
	$_SESSION["username"]=$_POST["username"];
	$_SESSION["logged"]="1";
}
header('location:convo.php');
?>
