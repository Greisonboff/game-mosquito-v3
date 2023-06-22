<?php
include_once "indexConnect.php";

$nome = $_POST["name"];

//$query = sprintf("SELECT MAX(points) FROM `ranking` WHERE nome = '$nome'");
$query = sprintf("SELECT * FROM ranking WHERE nome = '$nome' ORDER BY points DESC LIMIT 1");
$dados = mysqli_query($conn, $query) or die(mysqli_error());
$total = mysqli_num_rows($dados);

$linha = mysqli_fetch_assoc($dados);
do{
	echo '{"nome":"'.$linha['nome'] . '","level":"' . $linha['level'] . '","points":"' . $linha['points'].'"}';
}while($linha = mysqli_fetch_assoc($dados));
?>