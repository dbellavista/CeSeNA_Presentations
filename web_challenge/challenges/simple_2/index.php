<?php include('../../header.php'); ?>

<body>

<h1>CeSeNA Web Challenge - Challenge Simple 2</h1>

<p>Please, enter your authorization code before continuing.</p>

<form name="testform" action="." method="GET">
	<input type="text" name="code" value="" />
	<input type="button" name="button" value="Check" onClick="checkCode(this.form)" />
</form>

	<script>
		function checkCode(form) {
			var truecode = "\u0061\u006e\u0030\u0074\u0068\u0033\u0072\u0053\u0033\u0063\u0072\u0033\u0074";
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
