<?php
    /*Cette fonction sert à sauvegarder dans la table Joue de la base de données Joueur  le score (scoreEtape) 
	obtenu par un joueur (idJoueur) dans une étape (idEtape). Los données à sauvegarder proviennent d'un fichier
	JavaScripts*/
	
	//--connexion à la base de données --//
	try{
		$bdd = new PDO('mysql:host=localhost;dbname=joueur;charset=utf8', 'root', '');		//On crée la connection à la BDD
		$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e){
		echo "ERROR: " . $e->getMessage();													//On vérifie qu'il n'y ait pas d'erreurs de connexion
	}
	
	//--traitement des données reçues --//
	$donneesRecus=$_POST["donnees"];														//On capture les données reçues du fichier JavaScripts
	list ($idJoueurRecu,$idEtapeRecu,$scoreEtapeRecu)=explode(",",$donneesRecus);			//On nomme les données reçues en faisant l'extraction de la chaine reçue de JavaScripts
	//echo "donnees recues: ".$_POST["donnees"];												//Démarche de validation des données reçues: à supprimer ces 4 lignes
	//echo "etape: ".$idEtapeRecu;
	//echo "ide joueur: ".$idJoueurRecu;
	//echo "score etape: ".$scoreEtapeRecu	;
    
	$res = $bdd->prepare('INSERT INTO joue (idEtape,idJoueur,scoreEtape) VALUES(?,?,?)');	//On crée l'instance pour envoyer les données à la BDD
	$res->execute(array($idEtapeRecu, $idJoueurRecu,$scoreEtapeRecu));						//On exécute l'envoi des données avec les informations reçues du fichier JavaScripts
?>
