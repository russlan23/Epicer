		// variables 
		var mode="";
		var pseudo="";
		var chapActuel;
		var tableChap = [];
	    var emplacementChap;
		var scoreTotal;
		var scoreChapitre;
		var imageFond="";
		var idText;
		var imageCharge;
		var recherche;
		
		/*Nouvelles variables crées pour envoyer les infos à la BDD*/
		var idJoueur;
		var idEtape;
		var scoreEtape=0;
		var imLoad=false;
		var imLoaded=false;
	
	// definition de variable joueur 
	$(document).ready(function()
		{
		setUpJoueur();
	  });
		

			
		function setUpJoueur(){	
			pseudo=document.getElementById("infoPseudo").innerText;
			scoreTotal=parseInt(document.getElementById("infoScoreTotal").innerText);
			//scoreTotal=parseInt(document.getElementById("chapFaits").innerText);
			emplacementChap=parseInt(document.getElementById("infoEmplacementActuel").innerText);
			chapActuel=parseInt(document.getElementById("infoChapActuel").innerText);
			idJoueur=parseInt(document.getElementById("infoIdJoueur").innerText);
			idEtape=parseInt(document.getElementById("infoEtapeActuelle").innerText);
			scoreChapitre=parseInt(document.getElementById("infoScoreChapitre").innerText);
			accueil();
		}
	
		function miseAJour(){
		document.getElementById("joueur").innerHTML = joueur;
			
		}
		/*function recupererRechercheChapFaits(){	
			recherche=document.getElementById("rechercheChapitre").innerText;
		}*/
		
		function choixChap(){
		setUpJoueur();
		rechercheChapFaits();
		//recupererRechercheChapFaits();
		//sauvegardeJoueur ();
		//sauvegardeJoue (); // J'ai mis la sauvegarde ici comme une facon de voir si la sauvegarde marche ou pas
		
			if(emplacementChap>0){   // si on veut choisir un chapitre alors qu'on est au milieu d'un autre on fait apparaître une demande de 
									 // confirmation de la mise d'étape à 0
				 location.href='#attentionConfirme';  
			}
			document.getElementById("accueil").style.visibility="hidden";	
			document.getElementById("choixChapitre").style.visibility="visible";
			document.getElementById("btnAccueil").style.visibility="visible";	
			document.getElementById("espaceJeu").style.backgroundImage="url('/Epicer/images/choixChapitre.jpg')";  
			document.getElementById("reprendre").style.display="none";
			 
		}
		
		function miseEtapeNulle(){  // cette etape met l'étape à 0 si dans choixChap on confirme que l'on veut commencer un nouveau chapitre
			location.href='#';
			emplacementChap=0; 
			scoreChapitre=0;
			chapActuel=0;
			document.getElementById("infoChapActuel").innerText=chapActuel;	
			document.getElementById("infoScoreChapitre").innerText=scoreChapitre;	
			document.getElementById("infoEmplacementActuel").innerText= emplacementChap;
			
		}
		
		 
		function nonConf(){  // cette etape met l'étape à 0 si dans choixChap on confirme que l'on veut commencer un nouveau chapitre
			location.href='#';
			accueil();
		}
		
		function accueil(){
		// à gerer si le joueur a cliqué sur l'accueil en milieu du jeu 
			document.getElementById("accueil").style.visibility="visible";	
			document.getElementById("choixChapitre").style.visibility="hidden";
			document.getElementById("espaceJeu").style.backgroundImage= "url('/Epicer/images/accueil.jpg')";
			document.getElementById("etapeSuivante").style.visibility="hidden";
			document.getElementById("etapePrecedente").style.visibility="hidden";
			document.getElementById("btnAccueil").style.visibility="hidden";
			if(document.getElementById(idText)){
				document.getElementById(idText).style.display="none";
			}
			if(emplacementChap>0) {
			 document.getElementById("reprendre").style.display="";
			}else{
			 document.getElementById("reprendre").style.display="none";
			}
		// rajouter la sauvegarde !
		}
		
		


	
    //la map Globale des chapitres :
	   
	   function changeChapitre (chp){

			switch(chp){
				case 0: tableChap = [0];  // l'accueil
					break;
				case 1: tableChap = [100,101,102,103,1001,2001,104,105];   // 1,2,3... sont les numéros d'image dans ce chapitre, quand >100 c'est un mini jeu
						chapActuel=1;
					break;
				case 2: tableChap =  [];
						chapActuel=2;
					break;
				case 3: tableChap =  [];
						chapActuel=3;
					break;
				case 4: tableChap =  [];
						chapActuel=4;
					break;
				default:
					tableChap = [0];
					break;
			}

			document.getElementById("infoChapActuel").innerText=chapActuel;
		} // fin du changeChap//
				
	
    // fonction de repère du joueur dans le chapitre :
    //	function setPosDansChptr(emplacementChap){  // emplacement Chap doit etre recupéré du BDD dans le site
		//	joueur.posDansChptr=emplacementChap;
	//	} //fin de setPosChaptr
		
		function etapeSuivante(){ // lorsque le joueur clique sur le bouton suivant
						
				if(emplacementChap<tableChap.length-1){
				
					emplacementChap=emplacementChap+1;
					
					if(tableChap[emplacementChap]<1000){ // <100 pour dire que ce n'est pas un mini jeu
					
						if(tableChap[emplacementChap-1]>2000){
							document.getElementById("btnAccueil").style.visibility="visible";
							document.getElementById("etapeSuivante").style.visibility="visible";
							document.getElementById("etapePrecedente").style.visibility="visible";
							document.getElementById("continuer").style.visibility="hidden";
							document.getElementById("feedbackFinalMJ").style.display="none";
						}
						
						imageFond="url('/Epicer/images/im" + tableChap[emplacementChap] + ".jpg')";
						if(document.getElementById(idText)){
							document.getElementById(idText).style.display="none";
						}
							
						idText="text"+chapActuel+"_"+emplacementChap;
						
						if(document.getElementById(idText)){
							document.getElementById(idText).style.display="initial";
						}
						document.getElementById("espaceJeu").style.backgroundImage=imageFond;	
						document.getElementById("infoEmplacementActuel").innerText= emplacementChap;	
					}
					
					if (tableChap[emplacementChap]<2000 && tableChap[emplacementChap]>1000){
						if(document.getElementById(idText)){
								document.getElementById(idText).style.display="none";
						}
						showNotice(tableChap[emplacementChap]);
					}
				}
		
		} 
		
		function etapePrecedente(){
		
			if(emplacementChap>0){
			
				emplacementChap=emplacementChap-1;
				if (tableChap[emplacementChap]<1000){ // <100 pour dire que ce n'est pas un mini jeu
					
					imageFond="url('/Epicer/images/im" + tableChap[emplacementChap] + ".jpg')";
					if(document.getElementById(idText)){
							document.getElementById(idText).style.display="none";
					}	
						idText="text"+chapActuel+"_"+emplacementChap;
						
					if(document.getElementById(idText)){
							document.getElementById(idText).style.display="initial";
					}
					document.getElementById("espaceJeu").style.backgroundImage=imageFond;	
					document.getElementById("infoEmplacementActuel").innerText= emplacementChap;
				}
				
				if(tableChap[emplacementChap]>1000){
				 location.href='#confEtpPreced';  // si on revenir dans l'étape avant mini jeu 
				}
			}
		}
		
		function resterEtpe(){   //dans la cas ou après la fenetre de question de revenir en arrière d'un mini jeu le joueur decide de ne pas le faire 
			location.href="#";
		}
		function revenirEtpe(){  //dans la cas ou après la fenetre de question de revenir en arrière d'un mini jeu le joueur decide de revenir 
			emplacementChap=emplacementChap-1;
			etapePrecedente();
			location.href="#";
			
		}
	
		function reprendre(){
			var chapitre=chapActuel;
			var emplcmnt=emplacementChap;
			start(chapitre,emplcmnt);
		}
	
		function start(chapitre, emplcmnt){
		
			emplacementChap=emplcmnt;
			changeChapitre(chapitre);
			document.getElementById("choixChapitre").style.visibility="hidden";	
			document.getElementById("reprendre").style.display="none";
			document.getElementById("espaceJeu").style.backgroundImage="none";
			document.getElementById("btnAccueil").style.visibility="hidden";
			
			if (imLoad==false){
				updateImagesChap(chapitre);
				document.getElementById("imgesChargmnt").style.visibility="visible";
				progressBar.init(); 
			}
				
			if (imLoaded==true){
			
				document.getElementById("imgesChargmnt").style.visibility="hidden";
				document.getElementById("btnAccueil").style.visibility="visible";
				 // execute la bar de progression pour suivre combien d'images ont été telechargés
				  
				imageFond="url('/Epicer/images/im" + tableChap[emplacementChap] + ".jpg')";
				idText="text"+chapitre+"_"+emplacementChap;
				
				
				document.getElementById("espaceJeu").style.backgroundImage=imageFond;
				
				if(document.getElementById(idText)){
								document.getElementById(idText).style.display="initial";
						}
				
				document.getElementById("etapeSuivante").style.visibility="visible";
				document.getElementById("etapePrecedente").style.visibility="visible";
				imLoaded=false;
				imLoad=false;
			}
			
		}
			
					

		function showNotice(nNotice){
		
			// imageFond="url('/Epicer/images/im" + nNotice + ".jpg')";
			document.getElementById("espaceJeu").style.background="";
			document.getElementById("espaceJeu").style.backgroundColor="black";
			document.getElementById("etapeSuivante").style.visibility="hidden";
			document.getElementById("etapePrecedente").style.visibility="hidden";
			document.getElementById("strtMiniJeu").style.visibility="visible";
			
			document.getElementById("infoEmplacementActuel").innerText= emplacementChap;
		}
		
		function startMiniJeu(){   // la fonction generale qui suit le click "commencer" et qui commence le mini jeu en question
		
			document.getElementById("strtMiniJeu").style.visibility="hidden";
			
			emplacementChap=emplacementChap+1;
			
			document.getElementById("infoEmplacementActuel").innerText= emplacementChap;
			
			switch(tableChap[emplacementChap]){
					case 2001: 
						startMJ5();
						break;
					case 2002: 
						break;
					case 2003: 
						break;
					case 2004: 
						break;
					case 2005: 
						break;	
					default:
						break;
				}
		}		
		
		//gerer la fin du chapitre et revient vers l'accueil 
		
	 
	 
	 
	/* cette fonction permet de creer une instance qui nous permet d'utiliser AJAX pour l'envoi des données de JavaScripts à la BDD
	 Fonction prise de https://www.tutorielsenfolie.com/tutoriels-66-ajax-php-envoi-donnees.html */
	 
	function creerInstance(){
	  if(window.XMLHttpRequest){
		return new XMLHttpRequest();  /* Firefox, Opera, Google Chrome */
	  }else if(window.ActiveXObject){ /* Internet Explorer */
		var names = [
		  "Msxml2.XMLHTTP.6.0",
		  "Msxml2.XMLHTTP.3.0",
		  "Msxml2.XMLHTTP",
		  "Microsoft.XMLHTTP"
		];
		for(var i in names){
		  try{ return new ActiveXObject(names[i]); } /* On test les différentes versions */
		  catch(e){}
		}
		alert("Non supporte");
		return null; // non supporté
	  }
	}

	/*Cette fonction fait la preparation et l'envoi au fichier PHP des données du JOUE qui seront sauvegardées sur la BDD*/
	function sauvegardeJoue (){
	  var req =  creerInstance();
	  var donneesSauvegarder = new Array(3);						/*On créer l'array dans lequelle on va envoyer les données*/
	  donneesSauvegarder[0]=idJoueur;								/*On sauvegarde l'id du joueur dans l'array*/
	  donneesSauvegarder[1]=idEtape;								/*On sauvegarde l'id de l'étape dans l'array*/
	  donneesSauvegarder[2]=scoreEtape;								/*On sauvegarde le score de l'étape dans l'array*/
	  req.onreadystatechange = function(){
	  if(req.readyState == 4){ 		/* Si l'état = terminé */
		if(req.status == 200){		/* Si le statut = OK */
		  alert(req.responseText);  /* On affiche la réponse */
		}else{
		  alert("Error: returned status code " + req.status + " " + req.statusText);
		}
	  }
	}
		
	donneesSauvegarder = "donnees="+donneesSauvegarder ;			/*On dit au serveur que les données du formulaire doivent se trouver dans la variable « donnees »*/
	req.open("POST", "sauvegardeJoue.php", true);					/*On indique quel est le fichier PHP où seront envoyées les données*/
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); /* Pour la commande POST les données sont mises dans le corps du message et donc passées en argument dans la fonction send */
	req.send(donneesSauvegarder);									/*On envoi les données*/
	}

	/*Cette fonction fait la preparation et l'envoi au fichier PHP des données du JOUEUR qui seront sauvegardées sur la BDD*/
	function sauvegardeJoueur (){
	  var req =  creerInstance();
	  var donneesSauvegarder = new Array(4);						/*On créer l'array dans lequelle on va envoyer les données*/
	  donneesSauvegarder[0]=idJoueur;								/*On sauvegarde l'id du joueur dans l'array*/
	  donneesSauvegarder[1]=idEtape;								/*On sauvegarde l'id de l'étape dans l'array*/
	  donneesSauvegarder[2]=scoreTotal;								/*On sauvegarde le score dans l'array*/
	  donneesSauvegarder[3]=scoreChapitre;							/*On sauvegarde le score du chapitre actuel dans l'array*/
	  req.onreadystatechange = function(){
	  if(req.readyState == 4){ 		/* Si l'état = terminé */
		if(req.status == 200){		/* Si le statut = OK */
		  alert(req.responseText);  /* On affiche la réponse */
		}else{
		  alert("Error: returned status code " + req.status + " " + req.statusText);
		}
	  }
	}
		
	donneesSauvegarder = "donnees="+donneesSauvegarder ;			/*On dit au serveur que les données du formulaire doivent se trouver dans la variable « donnees »*/
	req.open("POST", "sauvegardeJoueur.php", true);					/*On indique quel est le fichier PHP où seront envoyées les données*/
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); /* Pour la commande POST les données sont mises dans le corps du message et donc passées en argument dans la fonction send */
	req.send(donneesSauvegarder);									/*On envoi les données*/
	}

	/*Cette fonction fait la preparation et l'envoi au fichier PHP des données du JOUEUR qui seront sauvegardées sur la BDD*/
	function rechercheChapFaits (){
	  var req =  creerInstance();
	  var donneesRecherche;						/*On créer l'array dans lequelle on va envoyer les données*/
	  donneesRecherche=idJoueur;								/*On sauvegarde l'id du joueur dans l'array*/
	  req.onreadystatechange = function(){
	  if(req.readyState == 4){ 		/* Si l'état = terminé */
		if(req.status == 200){		/* Si le statut = OK */
		  alert(req.responseText);  /* On affiche la réponse */
		}else{
		  alert("Error: returned status code " + req.status + " " + req.statusText);
		}
	  }
	}

	donneesRecherche = "donnees="+donneesRecherche ;			/*On dit au serveur que les données du formulaire doivent se trouver dans la variable « donnees »*/
	req.open("POST", "rechercheChapFaits.php", true);					/*On indique quel est le fichier PHP où seront envoyées les données*/
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); /* Pour la commande POST les données sont mises dans le corps du message et donc passées en argument dans la fonction send */
	req.send(donneesRecherche);									/*On envoi les données*/
	}
	
	