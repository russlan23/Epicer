<!DOCTYPE html>
<?php $thisPage="epicer";?>
	<html>
		<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="/css/style.css" /> 
		<link rel="stylesheet" href="/Epicer/css/jeu_style.css" />
		<link rel="stylesheet" href="/Epicer/css/modalDialog.css" />
<<<<<<< Updated upstream
		<link rel="stylesheet" href="/Epicer/css/miniJeux_style.css" />
=======
		<link rel="stylesheet" type="text/css" href="/Epicer/css/point_rouge">
>>>>>>> Stashed changes
		<title>  Jeu Epicer </title>
		<script src="/Epicer/js/jquery-1.11.2.js"> </script> 
		<script src="/Epicer/js/general.js"> </script>   <!--le fichier des fonctions javascript principales-->
		<script src="/Epicer/js/progressBar.js"> </script>  
		<script src="/Epicer/js/miniJeu5.js"> </script>  
	 
		
		</head>

		<body>  

			<!-- 2 prochaines lignes de php servent à inclure le Header et la barre de navigation du site WEB-->
			<?php include ($_SERVER['DOCUMENT_ROOT']."/phpincludes/header1.php");
				  include($_SERVER['DOCUMENT_ROOT']."/phpincludes/nav1.php");
			?>
			
			<!-- Ici on rentre dans l'onglet principal du jeu -->
			<div id="frame" >
			
			<?php	
				//inititalisation des variables 
				$log_reussie=false;	 $nouv_compte_reussi=false; $pseudo_existant=false;
				$idJoueur=0;$pseudo=""; $motPass=""; $scoreTotal=0;	$scoreActChap=0; $idEtape=0; $emplacementChap=0; $idChapitre=0;
				
				
				 // Ici le code verifie sur quel bouton du login le joueur a cliqué et procède en fonction 
				 
				   //si l'utilisateur a cliqué sur le bouton "se connecter"
					if(!empty($_POST['mot_pass']) AND !empty($_POST['pseudo'])){   // si les deux données ont été remplis
						
						try
						{
							$bdd = new PDO('mysql:host=localhost;dbname=joueur;charset=utf8', 'root', ''); // a mettre les donnes du site web lors de mise en ligne
						}
						catch(Exception $e)
						{
								die('Erreur : '.$e->getMessage());
						}

						// la requete vers la base de donnée pour récuperer les donnés du joueur 
						$req = $bdd->prepare('SELECT joueur.idJoueur, joueur.pseudo ,joueur.motPass, joueur.idEtape, joueur.scoreTotal, joueur.scoreActChap, chapitre.idChapitre, etape.emplacementChap
											  FROM joueur,etape,chapitre 
											  WHERE joueur.idEtape=etape.idEtape AND etape.idChapitre=chapitre.idChapitre AND joueur.pseudo= ?');
			
						$req->execute(array($_POST['pseudo']));
						
							$donnees = $req->fetch();
							
							if($donnees['pseudo']!=null){ // Si il a pu recuperer des donnés : 
								$pseudo_existant=true;
								
								if($donnees['motPass']==$_POST['mot_pass']){
									$log_reussie=true; // si le mot de passe rempli est bon 
									// affectation des variables 
									$scoreTotal=$donnees['scoreTotal'];
									$idEtape=$donnees['idEtape'];
									$idChapitre=$donnees['idChapitre'];
									$emplacementChap=$donnees['emplacementChap'];
									$idJoueur=$donnees['idJoueur'];
									$scoreActChap=$donnees['scoreActChap'];
									$req->closeCursor();	
								}		
							}
					}
					//si mot de passe est faut 	
					if ($_POST['action'] == 'Se connecter' AND $log_reussie==false) { 
								echo "<div id =\"errCnxn\" class= \"error\"> Le pseudo n'est pas existant ou mot de passe incorrecte </div>"; //cette ligne affiche le message d'erreur
								include ($_SERVER['DOCUMENT_ROOT']."/Epicer/loginInclude.php");	 // cela remet la demande de login
					} // si l'utilisateur a cliqué sur le bouton " creer 
					if(	$_POST['action'] == 'Creer nouveau joueur' AND $nouv_compte_reussi==false ){
								// si une des données n'est pas remplie	alors s'affiche un message d'erreur
								if(empty($_POST['pseudo']) OR empty($_POST['mot_pass'])){
									echo "<div id =\"errCnxn\" class= \"error\" > Vous n'aviez pas remplis un des champs  </div>"; //cette ligne affiche le message d'erreur
									include ($_SERVER['DOCUMENT_ROOT']."/Epicer/loginInclude.php");	 // cela remet la demande de login
								}else { 
									// si le pseudo rentré existe déjà alors s'affiche un msg d'erreur
									if($pseudo_existant==true ){
										echo "<div id =\"errCnxn\" class= \"error\"> Ce pseudo existe déjà, veuillez choisir un autre </div>"; //cette ligne affiche le message d'erreur
										include ($_SERVER['DOCUMENT_ROOT']."/Epicer/loginInclude.php");	 // cela remet la demande de login
									}else{
										// Tout va bien , l'insertion du joueur dans la base de donnée
										$res = $bdd->prepare('INSERT INTO joueur (pseudo, motPass) VALUES(?, ?)');
										$res->execute(array($_POST['pseudo'], $_POST['mot_pass']));
										$nouv_compte_reussi=true;
										$log_reussie=true; // il faut cette ligne sinon au rehargement la demande de login reapparaîtera
									}
								}
					}	
								
			 
					if ($log_reussie==true OR $nouv_compte_reussi==true ){ // si le joueur s'est connécté ou a crée un nouveau compte avec succès
					
				?> 		
							<!--Ici s'affiche l'acceuil avec le fond correspondant-->
							<div id = "imageAcceuil">
								<img src="/Epicer/images/accueil.png" />
								<img src="/Epicer/images/choixChapitre.png" />
							</div>
							<!--C'est l'info qui s'affiche dans la barre à droite, tout au long du jeu-->						
							<div id ="barreInfo"> 
							
								<div id = "infoJoueur"> 
								
									<div class="infoJoueur"> Joueur: <span id="infoPseudo" > <?php	echo $_POST['pseudo']; ?>  </span> </div>
									<div class="infoJoueur"> Score Total: <span id="infoScoreTotal"> <?php echo $scoreTotal; ?>  </span> </div>
									<div class="infoJoueur"> Etape: <span id ="infoEmplacementActuel"> <?php echo $emplacementChap; ?>  </span> </div>
									<div class="infoJoueur"> Chapitre: <span id ="infoChapActuel" ><?php echo $idChapitre; ?> </span></div>
									<div class="infoJoueur"> Score au Chapitre: <span id ="infoScoreChapitre" ><?php echo $scoreActChap; ?>  </span></div> 
									
									<!-- A partir d'ici les autres attriburs de la "barreInfo" sont toujour cachés et servent juste pour 
											la communication des données et la sauvegarde-->
									<div id ="infoEtapeActuelle"> <?php echo $idEtape; ?>  </div>
									<div id ="infoIdJoueur"> <?php echo $idJoueur; ?>  </div>   
									
								</div> 
								
								<input id="btnAccueil"  class="clickble" type="submit" name="button" value="Accueil" onClick="accueil()"/> </input>
								
							</div>						
							
							<div id="espaceJeu">
							
							<div id="imgesChargmnt"> Veuillez patienter svp, les images du chapitre sont en cours de chargement </div>
							<input id="etapeSuivante" class="clickble" type="submit" name="button" value=">" onClick="etapeSuivante()"/> </input>
							<input id="etapePrecedente" class="clickble" type="submit" name="button" value="<" onClick="etapePrecedente()"/> </input>
							
							<input id="strtMiniJeu" class="clickble" type="submit" name="button" value="Commencer" onClick="startMiniJeu()"/> </input>
							<input id="continuer" class="clickble" type="submit" name="button" value="Continuer" onClick="etapeSuivante()"/> </input>
							
								
								<!-- La page d'accueil: -->
								<div id ="accueil"> 
																
									<div id="reprendre" class ="acc bcWhite clickble" onClick="reprendre()"> Reprendre </div>
									<div id="accederChapitre" class = "acc bcYellow clickble" onClick= "choixChap()"> Accéder aux chapitres </div>
									<div id="tutoriel" class = "acc bcGreen clickble" > Tutoriel </div>
									<div id="historiqueScore" class = "acc bcRed clickble" > Historique </div>
									
								</div>
								
								<!-- La page de choix de chapitre : -->
								<div id="choixChapitre"> 
								
									<div id="chap1" class ="chap clickble" onClick=start(1,0)> Chapitre I </br> Temps estimé: 11min  </div>
									<div id="chap2" class ="chap clickble" onClick=start(2,0)> Chapitre II </br> Temps estimé: 13min </div>
									<div id="chap3" class ="chap clickble" onClick=start(3,0)> Chapitre III </br> Temps estimé: 7min  </div>
									<div id="chap4" class ="chap clickble" onClick=start(4,0)> Chapitre IV </br>Temps estimé: 9min </div>
								
								</div>
								
								<?php include ($_SERVER['DOCUMENT_ROOT']."/Epicer/textInclude.php"); ?>
								
								
								
								<div id="imagesChap"> </div>
								
								<!-- Dialogue de confirmation si le joueur decide de commencer le nouveau chapitre sans finir le precedent : -->
								<div id="attentionConfirme" class="modalDialog">
									<div>
										<h2>Attention</h2>
										<p>Si vous décidez de continuer vers le Choix de Chapitre alors l'avancement du dernier chapitre sera effacé </p>
										<p> Voulez-vous continuer tout de même  ? </p> 
										<input id="confOui" class="btnConf clickble" type="submit" name="button" value="Oui" onClick="miseEtapeNulle()"/> 
										<input  id="confNon" class="btnConf clickble" type="submit" name="button" value="Non" onClick="nonConf()"/>
									</div>
								</div> 
								
								<div id="confEtpPreced" class="modalDialog">
									<div>
										<h2>Attention</h2>
										<p>Si vous décidez de revenir en arrière vous devrez refaire le Mini Jeu</p>
										<p> Voulez-vous continuer tout de même  ? </p> 
										<input id="confOui" class="btnConf clickble" type="submit" name="button" value="Oui" onClick="revenirEtpe()"/> 
										<input  id="confNon" class="btnConf clickble" type="submit" name="button" value="Non" onClick="resterEtpe()"/>
									</div>
								</div> 
								
								<div id="miniJeu5"> 
									<div id="question">Est-ce que cette activité est autorisée : </div>
									<div id="activite"> </div>
									<div id="reponseOui" class="reponse clickble" onClick="verifReponse(true)"> </div>
									<div id="reponseNon" class="reponse clickble" onClick="verifReponse(false)"> </div>
									<input id="actvtSuivante" class="clickble" type="submit" name="button" value=">" onClick="actSuiv()"/> </input>
									<div id="repBonne" class="repMJ5"> Tu as raison ! </div>
									<div id="repFausse" class="repMJ5"> Tu n'as pas raison ! </div>
									<div id="infoScoreMJ5">  Score: <span id ="scoreMJ5" > </div>
									
								</div>
								
								
							<!-- code php pour rechercher les chapitres faits -->	
							<?php include ($_SERVER['DOCUMENT_ROOT']."/Epicer/rechercheChapFaits.php"); ?>
							
							</div>
						
							
			<?php } ?>
			</div>    <!-- pour fermer la frame-->
			
				
		</body>
		
	</html>