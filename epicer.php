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
			
				<form action="epicer2.php" method="POST">
					<p><label for= "pseudo"> Pseudo </label> : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type ="text" name="pseudo"id="pseudo"/> </p>    <!-- &nbsp; sont des espaces -->
					<p><label for="mot_pass"> Mot de passe </label> : <input type ="text" name="mot_pass" id="mot_pass"/>  </p>
					<p><input type ="submit" name="action" value ="Se connecter"/></p>
					<p><input type ="submit" name="action" value ="Creer nouveau joueur"/></p>
					
				</form>
			
		</body>
		
	</html>