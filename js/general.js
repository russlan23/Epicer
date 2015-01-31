// variables 
		var mode="";
		var chapActuel;
		var tableChap = [];
	    var emplacementChap;
		var scoreTotal;
		
			
	// definition de variable joueur 
	 var joueurConstr ={

			pseudo:"", 
			motPass:"",
			//gagnerPnts: function() {},
			scoreTotal:0,
			chapActl:1,
			socreActChap:0
			}
			
	  // a faire en sorte qu'il recupère les donnes du site qui les a recupéré de la BDD

	var joueur=Object.create(joueurConstr);
	joueur.pseudo="Jessie";

		
		
		
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
		// rajouter la sauvegarde !
		}
		
		
		
	/*	function reprendre(int chapitre, int ){
		//a ecrire :
		// changeChapitre (----);
		
		}

	*/
	
    //la map Globale des chapitres :
	   
	   function changeChapitre (chp){

			switch(chp){
				case 0: tableChap = [0];  // l'accueil
					break;
				case 1: tableChap = [1,2,3,101,102,4,5,6,103,104,7];   // 1,2,3... sont les numéros d'image dans ce chapitre, quand >100 c'est un mini jeu
						document.getElementById("chapActuel").innerHTML= "Chapitre Actuel :" + 1;	
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
					}
				}
		
		} 
		
		function etapePrecedente(){
		
			if(emplacementChap>0){
				if (tableChap[emplacementChap-1]<100){ // <100 pour dire que ce n'est pas un mini jeu
					emplacementChap=emplacementChap-1;
					
					imageFond="url('/Epicer/images/im" + tableChap[emplacementChap] + ".jpg')";
					document.getElementById("espaceJeu").style.backgroundImage=imageFond;	
				}
			}
		}
	
		function start(chapitre, emplcmnt){
			document.getElementById("choixChapitre").style.visibility="hidden";	
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
	
		