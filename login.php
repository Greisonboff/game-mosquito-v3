<?php
include_once "indexConnect.php";

$nome = $_POST["name"];
$pass = $_POST["pass"];

$sql_login = "SELECT * FROM `user` WHERE nome = '$nome' AND senha = '$pass'";

$dados = mysqli_query($conn, $sql_login);
$total = mysqli_num_rows($dados);
echo $total;
?>