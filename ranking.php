<?php
include_once "indexConnect.php";
	
//$nome = $_POST["name"];
//$pass = $_POST["pass"];

//$sql_cadastro = "INSERT INTO user (nome, senha) VALUES ('$nome', '$pass')";



$query = sprintf("SELECT * FROM ranking ORDER BY points DESC LIMIT 10");
$dados = mysqli_query($conn, $query) or die(mysqli_error());
$total = mysqli_num_rows($dados);
//echo ' total ' . $total . ' ';
$linha = mysqli_fetch_assoc($dados);
do{
	echo '<tr>';
	echo '<td>'.$linha['nome'] . '</td><td>' . $linha['level'] . '</td><td>' . $linha['points'].'</td>';
	echo '</tr>';
}while($linha = mysqli_fetch_assoc($dados));
	// fim do if
	
$linha_afactada = mysqli_affected_rows($conn);

/*
//echo 'ok';
if(mysqli_query($conn, $sql_cadastro)){
		echo'conectadoo';
}else{
	echo'nops ' . $sql_cadastro . mysqli_error($conn);
	//echo mysqli_error($conn);
}

*/


?>