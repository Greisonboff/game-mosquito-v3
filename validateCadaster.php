<?php
include_once "indexConnect.php";

$nome = $_POST["name"];

$sql_login = "SELECT * FROM `user` WHERE nome = '$nome'";

$dados = mysqli_query($conn, $sql_login);
$total = mysqli_num_rows($dados);
echo $total;
?>