<?php
    /*Cette fonction sert à rechercher dans la table joue de la base de données Joueur  toutes les etapes qui ont été jouées par un joueur (idJoueur).
	L'informaion du joueur provien d'un fichier JavaScripts*/
	
	//--connexion à la base de données --//
	try{
		$bdd = new PDO('mysql:host=localhost;dbname=joueur;charset=utf8', 'root', '');		//On crée la connection à la BDD
		$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e){
		echo "ERROR: " . $e->getMessage();													//On vérifie qu'il n'y ait pas d'erreurs de connexion
	}
	
	//--traitement des données reçues --//
	$idJoueurRecu=$_POST["donnees"];														//On capture les données reçues du fichier JavaScripts
	//echo "id joueur: ".$idJoueurRecu; //SUPPRIMER
		
		$req = $bdd->prepare('SELECT idJoue, idJoueur, idEtape
								FROM joue
								WHERE idJoueur= ?');										// Selection dans la base données de toutes les étapes jouées par le joueur	
		$req->execute(array($idJoueurRecu));												// execution de la commande				
		$infoRecu = $req->fetchALL();														// Array qui contient l'idJoue, idJoueur, idEtape afin d'avoir l'historique du jeu d'un joueur donné
		for ($i=0;$i<count($infoRecu);$i++){
			$infoRecu[$i][0]=(int)$infoRecu[$i][0];											// transformation de string à int du idJoue
			$infoRecu[$i][1]=(int)$infoRecu[$i][1];											// transformation de string à int du idJoueur
			$infoRecu[$i][2]=(int)$infoRecu[$i][2];											// transformation de string à int du idEtape
			$req = $bdd->prepare('SELECT idChapitre
								FROM etape
								WHERE idEtape= ?');											// Selection dans la base données du chapitre de chaque etape jouée par le joueur	
			$req->execute(array($infoRecu[$i][2]));											//execution de la commande
			$infoRecuChap = $req->fetch();													//Recuperation du chapitre
			$infoRecu[$i][3]=$infoRecuChap[0][0];											// On ajoute au array une 4ème colonne où est enregistré le idChapitre
			$infoRecu[$i][3]=(int)$infoRecu[$i][3];											// transformation de string à int du idChapitre
			//echo " ex: ".var_dump($infoRecu[$i][0]);			//SUPPRIMER
			//echo " ex1: ".var_dump($infoRecu[$i][1]);			//SUPPRIMER
			//echo " ex2: ".var_dump($infoRecu[$i][2]);			//SUPPRIMER
			//echo " ex3: ".var_dump($infoRecu[$i][3]);			//SUPPRIMER
		}
			//echo " ex: ".var_dump($infoRecu[0][0]);			//SUPPRIMER
			//echo " ex1: ".var_dump($infoRecu[0][1]);			//SUPPRIMER
			//echo " ex2: ".var_dump($infoRecu[0][2]);			//SUPPRIMER
			//echo " ex3: ".var_dump($infoRecu[0][3]);			//SUPPRIMER
		//echo " ex: ".var_dump($infoRecu[0][0]);	//SUPPRIMER
		// echo " taile: ".count($infoRecu); //SUPPRIMER
		//echo " ex3: ".var_dump($infoRecu); //SUPPRIMER
?>