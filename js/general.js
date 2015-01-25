// variables 
				
		
		function choixChap(){
		document.getElementById("accueil").style.visibility="hidden";	
		document.getElementById("choixChapitre").style.visibility="visible";
		document.getElementById("btnAccueil").style.visibility="visible";	
		document.getElementById("espaceJeu").style.backgroundImage= "url('/Epicer/images/choixChapitre.jpg')";
		}
		
		function accueil(){
		document.getElementById("accueil").style.visibility="visible";	
		document.getElementById("choixChapitre").style.visibility="hidden";
		document.getElementById("espaceJeu").style.backgroundImage= "url('/Epicer/images/accueil.jpg')";
		// rajouter la sauvegarde !
		}
		
		
		function reprendre(){
		//a ecrire :
		// changeChapitre (----);
		
		}

	// definition de variable joueur 
	/*	var joueurConstr ={

			pseudo="", 
			motPass="",
			//gagnerPnts: function() {},
			scoreTotal=0;
			chaptrActl=1;
			socreActChap=0;
			
			
			}
			
	joueur.pseudo="Jessie";  // a faire en sorte qu'il recupère les donnes du site qui les a recupéré de la BDD

	var joueur=Object.create(joueurConstr);


	*/
 
    //la map Globale des chapitres :
	   var tableChap = [];
	   
	   function changeChapitre (chp){

			switch(chp){
				case 0: tableChap =  [0]; 
					Break;
				case 1: tableChap =  [0,1,2,101,102,3,4,5,103,104,6];  // 1,2,3... sont les numéros d'image dans ce chapitre, quand >100 c'est un mini jeu
					Break;
				case 2: tableChap =  [0,7,8,105,106,9,10,11 ];
					//do something
					Break;
				case 3: tableChap =  [0];
					//do something
					Break;
				case 4: tableChap =  [0];
					//do something
					Break;
				default:
					// do something
					Break;
			}			
		} // fin du changeChap//
				
	
    // fonction de repère du joueur dans le chapitre :
		function setPosDansChptr(emplacementChap){  // emplacement Chap doit etre recupéré du BDD dans le site
			joueur.posDansChptr=emplacementChap;
		} //fin de setPosChaptr
		
		
				
	// fontion start 
		var chapitre; 
		
		function start(){
			document.getElementById("choixChapitre").style.visibility="hidden";	
			//.... tous ce qui est à hide ou visible
			
			mode="play";
			
			switch (chapitre){ 
				
			case 1 : 
				changeChapitre (chapitre);
			
			break; 
			
			case 2 : 
				// des chose qui ce passent dans ce chapitre 
				
			break;
			
			default :0; 

			} 
		} // a revoir 
		
		
	// fonction de sauvegarde 
	
		function save(){
		// du code
		} // a faire 
		
		
	//
	
		