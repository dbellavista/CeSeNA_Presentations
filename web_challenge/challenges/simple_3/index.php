<?php

$auth = false;

if(!isset($_COOKIE['authorized'])) {
	setcookie('authorized', '0');
} else {
	$auth = $_COOKIE['authorized'] === '1';
}

include('../../header.php');

?>

<body>

<h1>CeSeNA Web Challenge - Challenge Simple 3</h1>

<?php
	if($auth) {
?>
	<p>Congratz! You solved the level :)</p>
	<p>The key is: Sec</p>

<?php
	} else {
?>
	<p>Sorry you are not authorized!</p>
<?php
	}
?>
</body>
</html>
