<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">	
		<meta charset="utf-8">
		<title>JS TEST</title>
		<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/vendor/simplex.bootstrap.min.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/coc.css">
	</head>
	<body>
		<div class="container">
			
			<div class="row">
				
				<div class="col-md-1">
					<div class="avatar-wrapper archer"></div>
				</div>

			</div>

			<div class="row">
				<div class="col-md-12">
					<h3>Kasernen</h3>
				</div>
			</div>
			<div class="row" id="barracks-controller">
				<div class="row">	
					<div class="col-md-2">
						<form role="form">
							<select class="form-control">
								<option>Level wählen</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							</select>		
						</form>	
					</div>
					<div class="col-md-1">
						<button type="button" class="btn btn-info full-width add-barracks">
							<span class="glyphicon glyphicon-plus"></span>
						</button>					
					</div>				
				</div>
				<div class="row" style="margin-top: 15px;">
					<div class="col-md-3">
						<table class="table">
							<tr>
								<td>Level 1</td>
								<td>Kaserne</td>
							</tr>
						</table>
					</div>
				</div>
			</div>


		</div>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/vendor/underscore.js"></script>

		<script type="text/javascript" src="js/Template.js"></script>
		<script type="text/javascript" src="js/avatar.js"></script>
		<script type="text/javascript" src="js/controllers/barracks-controller.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>
	</body>
</html>