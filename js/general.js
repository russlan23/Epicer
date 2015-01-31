


// variables 
		var mode="";
		var pseudo="";
		var chapActuel;
		var tableChap = [];
	    var emplacementChap;
		var scoreTotal;
		
		
	// definition de variable joueur 

		function setUpJoueur(){	
			pseudo=document.getElementById("infoPseudo").innerText;
			scoreTotal=parseInt(document.getElementById("infoScoreTotal").innerText);
			emplacementChap=parseInt(document.getElementById("infoEmplacementActuel").innerText);
			chapActuel=parseInt(document.getElementById("infoChapActuel").innerText);
		
			accueil();
		}
	
	
		function miseAJour(){
		document.getElementById("joueur").innerHTML = joueur;
			
		}
		
		
		function choixChap(){
		document.getElementById("accueil").style.visibility="hidden";	
		document.getElementById("choixChapitre").style.visibility="visible";
		document.getElementById("btnAccueil").style.visibility="visible";	
		document.getElementById("espaceJeu").style.backgroundImage="url('/Epicer/images/choixChapitre.jpg')";  
		}
		
		function accueil(){
		// à gerer si le joueur a cliqué sur l'accueil en milieu du jeu 
		document.getElementById("accueil").style.visibility="visible";	
		document.getElementById("choixChapitre").style.visibility="hidden";
		document.getElementById("espaceJeu").style.backgroundImage= "url('/Epicer/images/accueil.jpg')";
		document.getElementById("etapeSuivante").style.visibility="hidden";
		document.getElementById("etapePrecedente").style.visibility="hidden";
		document.getElementById("btnAccueil").style.visibility="hidden";
		
		if(emplacementChap>0) {
		 document.getElementById("reprendre").style.visibility="visible";
		} 
		// rajouter la sauvegarde !
		}
		
		


	
    //la map Globale des chapitres :
	   
	   function changeChapitre (chp){

			switch(chp){
				case 0: tableChap = [0];  // l'accueil
					break;
				case 1: tableChap = [1,2,3,101,201,4,5,6,103,104,7];   // 1,2,3... sont les numéros d'image dans ce chapitre, quand >100 c'est un mini jeu
						chapActuel=1;
						document.getElementById("infoChapActuel").innerText=chapActuel;	
						
					break;
				case 2: tableChap =  [];
					break;
				case 3: tableChap =  [];
					break;
				case 4: tableChap =  [];
					break;
				default:
					tableChap = [0];
					break;
			}			
		} // fin du changeChap//
				
	
    // fonction de repère du joueur dans le chapitre :
    //	function setPosDansChptr(emplacementChap){  // emplacement Chap doit etre recupéré du BDD dans le site
		//	joueur.posDansChptr=emplacementChap;
	//	} //fin de setPosChaptr
		
		function etapeSuivante(){ // lorsque le joueur clique sur le bouton suivant
				
				if(emplacementChap<tableChap.length){
				
					if (tableChap[emplacementChap+1]<100){ // <100 pour dire que ce n'est pas un mini jeu
						emplacementChap=emplacementChap+1;
						imageFond="url('/Epicer/images/im" + tableChap[emplacementChap] + ".jpg')";
						document.getElementById("espaceJeu").style.backgroundImage=imageFond;	
						document.getElementById("infoEmplacementActuel").innerText= emplacementChap;	
					}
				}
		
		} 
		
		function etapePrecedente(){
		
			if(emplacementChap>0){
				if (tableChap[emplacementChap-1]<100){ // <100 pour dire que ce n'est pas un mini jeu
					emplacementChap=emplacementChap-1;
					
					imageFond="url('/Epicer/images/im" + tableChap[emplacementChap] + ".jpg')";
					document.getElementById("espaceJeu").style.backgroundImage=imageFond;	
					document.getElementById("infoEmplacementActuel").innerText= emplacementChap;
				}
			}
		}
	
		function reprendre(){
			var chapitre=chapActuel;
			var emplcmnt=emplacementChap;
			start(chapitre,emplcmnt);
		
		}
	
		function start(chapitre, emplcmnt){
			document.getElementById("choixChapitre").style.visibility="hidden";	
			document.getElementById("accueil").style.visibility="hidden";
			document.getElementById("reprendre").style.visibility="hidden";
			document.getElementById("btnAccueil").style.visibility="visible";
			//.... tous ce qui est à hide ou visible
			
			mode="play";
			emplacementChap=emplcmnt;
			changeChapitre(chapitre);
			var imageFond="url('/Epicer/images/im" + tableChap[emplacementChap] + ".jpg')";
		//	document.getElementById("espaceJeu").style.visibility="true";
			document.getElementById("espaceJeu").style.backgroundImage=imageFond;
			
			document.getElementById("etapeSuivante").style.visibility="visible";
			document.getElementById("etapePrecedente").style.visibility="visible";
			
			
			
					//gerer la fin du chapitre et revient vers l'accueil 
			}
		 // a revoir 
		
		
	// fonction de sauvegarde 
	
		function save(){
		// du code
		} // a faire 
		
		
	//

	
		