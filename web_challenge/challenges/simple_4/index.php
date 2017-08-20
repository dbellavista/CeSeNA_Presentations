<?php
	include('../../header.php');

	$headers = getallheaders();
	if(array_key_exists("Referer", $headers)) {
		$auth = $headers["Referer"] == "http://www.microsoft.com";
	} else {
		echo ("NO");
	}

?>

<body>

<h1>CeSeNA Web Challenge - Challenge Simple 4</h1>

<?php
	if($auth) {
?>
	<p>Congratz! You solved the level :)</p>

<?php
	} else {
?>
	<p>Sorry you are not authorized, we only accept users from microsoft.com!</p>
<?php
	}
?>
</body>
</html>
