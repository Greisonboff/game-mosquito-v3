<?php
include_once "indexConnect.php";

$nome = $_POST["name"];

$query = sprintf("SELECT * FROM user WHERE nome = '$nome'");
$dados = mysqli_query($conn, $query) or die(mysqli_error());
$total = mysqli_num_rows($dados);
//echo ' total ' . $total . ' ';
$linha = mysqli_fetch_assoc($dados);
do{
	
	// The message
	$message = "Hello " . $linha['nome'] . ' your password is: ' . $linha['senha'];

	// In case any of our lines are larger than 70 characters, we should use wordwrap()
	$message = wordwrap($message, 70, "\r\n");

	// Send
	mail($linha['email'] , 'Reset password', $message);
		
	
	
}while($linha = mysqli_fetch_assoc($dados));
	// fim do if
	
$linha_afactada = mysqli_affected_rows($conn);

?>