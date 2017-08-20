<?php
	include('../../header.php');
?>

<body>

<h1>CeSeNA Web Challenge - Challenge Simple 5</h1>

<?php
	$a = $_GET['key'];
	if(!strcmp($a, "asdhisauhfiusahifuh839hf893hfuabnf9ah3ubqgt2")) {
?>
	<p>Congratz! You solved the level :)</p>

<?php
	} else {
?>
	<p>You'll never break our super secure system:</p>
	<p> if(!strcmp($_GET['key'], "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")) { </p>
	<p> echo("SOLVED"); </p>
	<p> } </p>
<?php
	}
?>
</body>
</html>
