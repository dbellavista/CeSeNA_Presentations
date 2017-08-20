<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to CeSeNA Web Challenge</title>
	</head>
<body>
<ul>
<?php
$dir = 'challenges';
if ($handle = opendir($dir)) {

	/* This is the correct way to loop over the directory. */
	while (false !== ($entry = readdir($handle))) {
		if(substr($entry, 0, 1) != '.') {
			echo "<li><a href='$dir/$entry/'>Level $entry</a></li>\n";
		}
	}

	closedir($handle);
}
?>
</ul>	
</body>
</html>
