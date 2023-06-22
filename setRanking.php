<?php
include_once "indexConnect.php";
	
$nome = $_POST["name"];
$level = $_POST["level"];
$points = $_POST["points"];

$sql_cadastro = "INSERT INTO ranking (nome, level, points) VALUES ('$nome', '$level', '$points')";

if(mysqli_query($conn, $sql_cadastro)){
		echo'conectadoo ' . $sql_cadastro;
}else{
	echo'nops ' . $sql_cadastro . mysqli_error($conn);
}

?>