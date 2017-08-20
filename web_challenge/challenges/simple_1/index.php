<?php include('../../header.php'); ?>

<body>

<h1>CeSeNA Web Challenge - Challenge Simple 1</h1>

<p>Please, enter your authorization code before continuing.</p>

<form name="testform" action="." method="GET">
	<input type="text" name="code" value="" />
	<input type="button" name="button" value="Check" onClick="checkCode(this.form)" />
</form>

	<script>
		function checkCode(form) {
			var truecode = "5up3r53cr3t";
			var code = form.code.value;
			if(code === truecode) {
				alert("Authorized! :)");
				window.location = "authorize.php?code=" + truecode;
			} else {
				alert("Wrong code :( Please don't retry...");
			}
		}
	</script>	
</body>
</html>
