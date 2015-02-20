<!DOCTYPE html>
<?php $thisPage="epicer";?>
	<html>
		<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="/css/style.css" /> 
		<link rel="stylesheet" href="/Epicer/css/jeu_style.css" />
		<link rel="stylesheet" href="/Epicer/css/modalDialog.css" />
		<title>  Jeu Epicer </title>
		<script src="/Epicer/js/jquery-1.11.2.js"> </script> 
		<script src="/Epicer/js/general.js"> </script>  
		<script src="/Epicer/js/appear.js"> </script>  
	 
		
		</head>

		<body>  <!--onload ="setUpJoueur()"-->

			<!-- les prochaines ligne de php servent à inclure le Header et la barre de navigation du site WEB-->

			<?php include ($_SERVER['DOCUMENT_ROOT']."/phpincludes/header1.php");
				  include($_SERVER['DOCUMENT_ROOT']."/phpincludes/nav1.php");
			?>
			
			<!-- on rentre dans l'onglet principal du jeu !!!!!!!!!!!!! -->
			<div id="frame" >
			
			<?php	
				
				$log_reussie=false;	 $nouv_compte_reussi=false; $pseudo_existant=false;
				$pseudo=""; $motPass=""; $scoreTotal=0;	$scoreActChap=0; $idEtape=0; $emplacementChap=0; $idChapitre=0;
				
				
				 // si l'utilisateur a cliqué sur le bouton "se connecter"
					
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
						$req = $bdd->prepare('SELECT joueur.pseudo ,joueur.motPass, joueur.idEtape, joueur.scoreTotal,chapitre.idChapitre, etape.emplacementChap
											  FROM joueur,etape,chapitre 
											  WHERE joueur.idEtape=etape.idEtape AND etape.idChapitre=chapitre.idChapitre AND joueur.pseudo= ?');
			
						$req->execute(array($_POST['pseudo']));
						
							$donnees = $req->fetch();
							
							if($donnees['pseudo']!=null){ // Si il a pu recuperer des donnés : 
								$pseudo_existant=true;
								
								if($donnees['motPass']==$_POST['mot_pass']){
									$log_reussie=true;
									
									$scoreTotal=$donnees['scoreTotal'];
									$idEtape=$donnees['idEtape'];
									$idChapitre=$donnees['idChapitre'];
									$emplacementChap=$donnees['emplacementChap'];
									$req->closeCursor();	
								}
							
							}
					}
						
					if ($_POST['action'] == 'Se connecter' AND $log_reussie==false) {
								echo "<div id =\"errCnxn\" class= \"error\"> Le pseudo n'est pas existant ou mot de passe incorrecte </div>"; //cette ligne affiche le message d'erreur
								include ($_SERVER['DOCUMENT_ROOT']."/Epicer/loginInclude.php");	 // cela remet la demande de login
					}		
					if(	$_POST['action'] == 'Creer nouveau joueur' AND $nouv_compte_reussi==false ){
								if(empty($_POST['pseudo']) OR empty($_POST['mot_pass'])){
									echo "<div id =\"errCnxn\" class= \"error\" > Vous n'aviez pas remplis un des champs  </div>"; //cette ligne affiche le message d'erreur
									include ($_SERVER['DOCUMENT_ROOT']."/Epicer/loginInclude.php");	 // cela remet la demande de login
								}else { 
									if($pseudo_existant==true ){
										echo "<div id =\"errCnxn\" class= \"error\"> Ce pseudo existe déjà, veuillez choisir un autre </div>"; //cette ligne affiche le message d'erreur
										include ($_SERVER['DOCUMENT_ROOT']."/Epicer/loginInclude.php");	 // cela remet la demande de login
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
						
							<div id = "imageAcceuil">
								<img src="/Epicer/images/accueil.jpg" />
								<img src="/Epicer/images/choixChapitre.jpg" />
							</div>
													
							<div id ="barreInfo"> 
							
								<div id = "infoJoueur"> 
								
									<div class="infoJoueur"> Joueur: <span id="infoPseudo" > <?php	echo $_POST['pseudo']; ?>  </span> </div>
									<div class="infoJoueur"> Score Total: <span id="infoScoreTotal"> <?php echo $scoreTotal; ?>  </span> </div>
									<div class="infoJoueur"> Etape: <span id ="infoEmplacementActuel"> <?php echo $emplacementChap; ?>  </span> </div>
									<div class="infoJoueur"> Chapitre: <span id ="infoChapActuel" ><?php echo $idChapitre; ?> </span></div>
									
									<!-- A partir d'ici les autres attriburs de la "barreInfo" sont toujour cachés et servent juste pour 
											la communication des données et la sauvegarde-->
									<div id ="infoEtapeActuelle"> <?php echo $idEtape; ?>  </div>     
									
								</div> 
								
								<input id="btnAccueil" type="submit" name="button" value="Accueil" onClick="accueil()"/> </input>
								
							</div>						
							
							<div id="espaceJeu">
							
							
							<input id="etapeSuivante" type="submit" name="button" value=">" onClick="etapeSuivante()"/> </input>
							<input id="etapePrecedente" type="submit" name="button" value="<" onClick="etapePrecedente()"/> </input>
								
								<!-- La page d'accueil: -->
								<div id ="accueil"> 
																
									<div id="reprendre" class ="acc bcWhite" onClick="reprendre()"> Reprendre </div>
									<div id="accederChapitre" class = "acc bcYellow" onClick= "choixChap()"> Acceder aux chapitres </div>
									<div id="tutoriel" class = "acc bcGreen" > Tutoriel </div>
									<div id="historiqueScore" class = "acc bcRed" > Historique </div>
									
								</div>
								
								<!-- La page de choix de chapitre : -->
								<div id="choixChapitre"> 
								
									<div id="chap1" class ="chap" onClick=start(1,0)> <h3>Chapitre I </h3> Temps estimé : 6 min  </div>
									<div id="chap2" class ="chap" > <h3>Chapitre II </h3> Temps estimé : 3 min  </div>
									<div id="chap3" class ="chap" > <h3>Chapitre III</h3>Temps estimé : 8 min  </div>
									<div id="chap4" class ="chap" > <h3>Chapitre IV </h3> Temps estimé : 5 min  </div>
								
								</div>
								
								<?php include ($_SERVER['DOCUMENT_ROOT']."/Epicer/textInclude.php"); ?>
								
								<div id="imagesChap"> </div>
								
								<!-- Dialogue de confirmation si le joueur decide de commencer le nouveau chapitre sans finir le precedent : -->
								<div id="attentionConfirme" class="modalDialog">
									<div>
										<h2>Attention</h2>
										<p>Si vous decidez de continuer vers le Choix de Chapitre alors l'avancement du dernier chapitre sera effacé </p>
										<p> Voulez vous continuer tout de même  ? </p> 
										<input id="confOui" class="btnConf" type="submit" name="button" value="Oui" onClick="miseEtapeNulle()"/> 
										<input  id="confNon" class="btnConf" type="submit" name="button" value="Non" onClick="nonConf()"/>
									</div>
								</div> 
								

								
							</div>
						
							
			<?php } ?>
			</div>    <!-- pour fermer la frame-->
			
				
		</body>
		
	</html>