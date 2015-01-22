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
	
			<!-- les prochaines ligne de php servent à inclure le Header et la barre de navigation du site WEB-->
			<?php include ($_SERVER['DOCUMENT_ROOT']."/phpincludes/header1.php");
				  include($_SERVER['DOCUMENT_ROOT']."/phpincludes/nav1.php");
			?>
			
			<!-- on rentre dans l'onglet principal du jeu !!!!!!!!!!!!! -->
			<div id="frame" >
			
			<?php	
				
				$log_reussie=false;	 $nouv_compte_reussi=false; $pseudo_existant=false;
				$pseudo=""; $motPass=""; $scoreTotal=0;	$scoreChapitre=0; $etape=0; $chapitre=0; $chapitresFaits="";
				
				
				 // si l'utilisateur a clické sur le bouton "se connecter"
					
					if(!empty($_POST['mot_pass']) AND !empty($_POST['pseudo'])){
						
						try
						{
							$bdd = new PDO('mysql:host=localhost;dbname=joueur;charset=utf8', 'root', ''); // a mettre les donnes du site lors de mise en ligne
						}
						catch(Exception $e)
						{
								die('Erreur : '.$e->getMessage());
						}

						// la requete
							$req = $bdd->prepare('SELECT * FROM joueur WHERE pseudo= ?');
							$req->execute(array($_POST['pseudo']));
							$donnees = $req->fetch();
							
							if($donnees['pseudo']!=null){ // Si il a pu recuperer des donnés : 
								$pseudo_existant=true;
								
								if($donnees['motPass']==$_POST['mot_pass']){
									$log_reussie=true;
									$scoreTotal=$donnees['scoreTotal'];
									$chapitresFaits=$donnees['chapitresFaits'];
									$req->closeCursor();	
								}
							
							}
					}
						
					if ($_POST['action'] == 'Se connecter' AND $log_reussie==false) {
								echo "<div id =\"errCnxn\" > Le pseudo n'est pas existant ou mot de passe incorrecte </div>"; //cette ligne affiche le message d'erreur
								include ($_SERVER['DOCUMENT_ROOT']."/Epicer/login.php");	 // cela remet la demande de login
					}		
					if(	$_POST['action'] == 'Creer nouveau joueur' AND $nouv_compte_reussi==false ){
								if(empty($_POST['pseudo']) OR empty($_POST['mot_pass'])){
									echo "<div id =\"errCnxn\" > Vous n'aviez pas remplis un des champs  </div>"; //cette ligne affiche le message d'erreur
									include ($_SERVER['DOCUMENT_ROOT']."/Epicer/login.php");	 // cela remet la demande de login
								}else { 
									if($pseudo_existant==true ){
										echo "<div id =\"errCnxn\" > Ce pseudo existe déjà, veuillez choisir un autre </div>"; //cette ligne affiche le message d'erreur
										include ($_SERVER['DOCUMENT_ROOT']."/Epicer/login.php");	 // cela remet la demande de login
									}else{
										// Insertion du message à l'aide d'une requête préparée
										$res = $bdd->prepare('INSERT INTO joueur (pseudo, motPass) VALUES(?, ?)');
										$res->execute(array($_POST['pseudo'], $_POST['mot_pass']));
										$nouv_compte_reussi=true;
										$log_reussie=true; // il faut cette ligne sinon au rehargement la demande de login reapparaîtera
									}
								}
					}	
								
			 
					if ($log_reussie==true OR $nouv_compte_reussi==true ){
					
				?> 		

							<script src="/Epicer/js/start.js"></script>
							<script src="/Epicer/js/general.js"></script>  
							
							
							<div id = "infoJoueur"> 
								<div id="joueur"> <?php	echo 'Joueur : '. ' ' . $_POST['pseudo']; ?>  </div>
								<div id="scoreTotal"> <?php echo 'Score Total : '. ' ' . $scoreTotal; ?>  </div>  
							</div> 
							
							<div id="menu" onClick= "pause()"> Menu </div> 
							
							<div id ="Accueil"> 
							
							<?php	if ($nouv_compte_reussi==false ){ 
							
										echo '<div id = "reprendre"> Reprendre </div>'; // L'option Reprendre, mais à revoir au niveau de codage									} 
									}
							?>
																				
								<div id="accederChapitre" onClick= "accdrChap()"> Acceder aux chapitres </div>
								<div id="tutoriel" onClick= "accdrTuto()"> Tutoriel </div>
								<div id="historiqueScore" onClick= "accdrHstrq()"> Historique </div>
								
							</div>
							
							
			<?php } ?>
		</body>
		
	</html>