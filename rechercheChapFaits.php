<?php
    /*Cette fonction sert à rechercher dans la table joue de la base de données Joueur  toutes les etapes qui ont été jouées par un joueur (idJoueur).*/
	
	//--connexion à la base de données --//
	try{
		$bdd = new PDO('mysql:host=localhost;dbname=joueur;charset=utf8', 'root', '');		//On crée la connection à la BDD
		$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e){
		echo "ERROR: " . $e->getMessage();													//On vérifie qu'il n'y ait pas d'erreurs de connexion
	}
	
		$idJoueurRecu=$idJoueur;															//On capture les données l'id du joueur
		$chap1Fait=false;
		$chap2Fait=false;
		$chap3Fait=false;
		$chap4Fait=false;
		$req = $bdd->prepare('SELECT idEtape
								FROM joue
								WHERE idJoueur= ?');										// Selection dans la base données de toutes les étapes jouées par le joueur	
		$req->execute(array($idJoueurRecu));												// execution de la commande				
		$infoRecu = $req->fetchALL();														// Array qui contient idEtape afin d'avoir l'historique du jeu d'un joueur donné
		for ($i=0;$i<count($infoRecu);$i++){
			$infoRecu[$i][0]=(int)$infoRecu[$i][0];											// transformation de string à int du idEtape
			$req = $bdd->prepare('SELECT idChapitre
								FROM etape
								WHERE idEtape= ?');											// Selection dans la base données du chapitre de chaque etape jouée par le joueur	
			$req->execute(array($infoRecu[$i][0]));											//execution de la commande
			$infoRecuChap = $req->fetch();													//Recuperation du chapitre
			$infoRecu[$i][1]=$infoRecuChap[0][0];											// On ajoute au array une 4ème colonne où est enregistré le idChapitre
			$infoRecu[$i][1]=(int)$infoRecu[$i][1];											// transformation de string à int du idChapitre
			
			if ($infoRecu[$i][1]==1){
				$chap1Fait=true;
			}
			else if ($infoRecu[$i][1]==2){
				$chap2Fait=true;
			}
			else if ($infoRecu[$i][1]==3){
				$chap3Fait=true;
			}
			else if ($infoRecu[$i][1]==4){
				$chap4Fait=true;
			}
		}
		echo "<div id='chap1Fait'>". $chap1Fait . "</div>";
		echo "<div id='chap2Fait'>". $chap2Fait . "</div>";
		echo "<div id='chap3Fait'>". $chap3Fait . "</div>";
		echo "<div id='chap4Fait'>". $chap4Fait . "</div>";
?>