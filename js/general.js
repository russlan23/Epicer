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
		
	
	// definition de variable joueur 
	
	$(document).ready(function()
		{
		setUpJoueur();
	  });
		

			
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
			location.href='#'
			emplacementChap=0; 
			scoreChapitre=0;
			chapActuel=0;
			document.getElementById("infoChapActuel").innerText=chapActuel;	
			document.getElementById("infoEmplacementActuel").innerText= emplacementChap;
			
		}
		
		 
		function nonConf(){  // cette etape met l'étape à 0 si dans choixChap on confirme que l'on veut commencer un nouveau chapitre
			location.href='#'
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
				case 1: tableChap = [1,2,3,4,5,101,201,6,7];   // 1,2,3... sont les numéros d'image dans ce chapitre, quand >100 c'est un mini jeu
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

						if(document.getElementById(idText)){
							document.getElementById(idText).style.display="none";;
						}
						
						idText="text"+chapActuel+"_"+emplacementChap;
						
						if(document.getElementById(idText)){
							document.getElementById(idText).style.display="initial";
						}
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
			}
		}
	
		function reprendre(){
			var chapitre=chapActuel;
			var emplcmnt=emplacementChap;
			start(chapitre,emplcmnt);
		}
	
		var chargement; 
		function start(chapitre, emplcmnt){
		
			imageCharge=false;
			
			updateImagesChap(chapitre);
			
			document.getElementById("choixChapitre").style.visibility="hidden";	
			document.getElementById("accueil").style.visibility="hidden";
			document.getElementById("reprendre").style.display="none";
			document.getElementById("btnAccueil").style.visibility="visible";
			progressBar.init(); 
			  // execute la bar de progression pour suivre combien d'images ont été telechargés
			 
				emplacementChap=emplcmnt;
				changeChapitre(chapitre);
				
				imageFond="url('/Epicer/images/im" + tableChap[emplacementChap] + ".jpg')";
				idText="text"+chapitre+"_"+emplacementChap;
				
				
				document.getElementById("espaceJeu").style.backgroundImage=imageFond;
				
				if(document.getElementById(idText)){
								document.getElementById(idText).style.display="initial";
						}
				
				document.getElementById("etapeSuivante").style.visibility="visible";
				document.getElementById("etapePrecedente").style.visibility="visible";
			
			
		}
			
					//gerer la fin du chapitre et revient vers l'accueil 

		
		
		
	// fonction de sauvegarde 
	
		function save(){
		// du code
		} // a faire 

		// fonction de chargement d'images
		function updateImagesChap(chap){
			switch(chap){
			
				case 1: 	$('#imagesChap').append ('<img src ="/Epicer/images/im1.jpg"/>');
							$('#imagesChap').append ('<img src ="/Epicer/images/im1.jpg"/>');
							$('#imagesChap').append ("<img src ='/Epicer/images/im3.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im4.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im5.jpg'/>");
					break;
				case 2: 
					break;
				case 3: 
					break;
				case 4: 
					break;
				default:
					break;
			}			
	
		
		} 
		
	
		
	progressBar = {
		
		init: function(){
			var that=this;
			countElmt =$('img').length;
			loadedElmt=0;
			var $progressBarContainer = $('<div/>').attr('id','progress-bar-container');
			 $progressBarContainer.append($('<div/>').attr('id','progress-bar'));
			 $progressBarContainer.appendTo($('#espaceJeu'));
			
			$container=$('<div/>').attr('id','progress-bar-elements');
			$container.appendTo($('imagesChap'));
			
			$('img').each(function(){
				$('<img/>')
				.attr('src',$(this).attr('src'))
				.on('load error', function(){
					loadedElmt++;
					that.updateProgressBar();
					
				})
				.appendTo($container)
				;
			});
		
		},
		
		updateProgressBar : function(l,c){
			
			$('#progress-bar').stop().animate({
			'width':( loadedElmt/countElmt)*100 +'%'
			}, function(){
				if(loadedElmt==countElmt){
					setTimeout(function(){
						$('#progress-bar-container').animate({
							'top' : '-8px'
 						},function (){
							$('#progress-bar-container').remove();
							$('#progress-bar-elements').remove();
						});
					},750);
				}	
			});
		}
	};
	 