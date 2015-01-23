<!DOCTYPE html>
<?php $thisPage="epicer";?>
	<html>
		<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="/css/style.css" /> 
		<link rel="stylesheet" href="/Epicer/css/epicer_style.css" />
		<title>  Jeu Epicer </title>
		</head>

		<body onkeydown="keydown(event)" onkeyup="keyup(event)" onkeypress = "keypress(event)">
	
			<!-- les prochaines ligne de php servent à inclure le Header et la barre de navigation du site -->
			<?php include ($_SERVER['DOCUMENT_ROOT']."/phpincludes/header1.php");
				  include($_SERVER['DOCUMENT_ROOT']."/phpincludes/nav1.php");
			?>
			
			<!-- on rentre dans l'onglet principal du jeu  -->
			<div id="frame" >	
			
			<?php	include ($_SERVER['DOCUMENT_ROOT']."/Epicer/login.php"); ?>
			
		</body>
		
	</html>