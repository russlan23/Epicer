
var scoreMJ2;
var MJ2photo;
var idFdbckMJ2="";
var idFigRep;
var idFigQuest;

function startMJ2(){ 

	scoreMJ2=0;
	MJ2photo=0;
	document.getElementById("MJ2jeu").style.display="initial";
	photoSuivante();
	
}

function mj2repBad(){ // s'execute si le joueur a cliqué sur la mauvaise partie de l'image
 
	document.getElementById(idMJ2Txt).style.visibility="hidden";
	
	document.getElementById(idFigQuest).style.visibility="hidden";
	
	document.getElementById(idFigRep).style.visibility="visible";
	
	idFdbckMJ2="mj2badRep"+MJ2photo; // pour indiquer quel feedback afficher; MJ2photo compte juste le numero d'étape dans ce mini-jeu
	
	if(document.getElementById(idFdbckMJ2)){
		document.getElementById(idFdbckMJ2).style.display="initial";
	}
	
	document.getElementById("photoSuivante").style.visibility="visible";
}

function mj2repGood(){ // s'execute si le joueur a cliqué sur la bonne partie de l'image
	scoreMJ2=scoreMJ2+5;
	document.getElementById("scoreMJ2").innerText=scoreMJ2;
	document.getElementById("photoSuivante").style.visibility="visible";
	document.getElementById(idMJ2Txt).style.visibility="hidden";
	document.getElementById(idFigQuest).style.visibility="hidden";
	
	idFdbckMJ2="mj2goodRep"+MJ2photo; // pour indiquer quel feedback afficher; MJ2photo compte juste le numero d'étape dans ce mini-jeu
	
	if(document.getElementById(idFdbckMJ2)){
		document.getElementById(idFdbckMJ2).style.display="initial";
	}
	document.getElementById(idFigRep).style.visibility="visible";
}

function photoSuivante(){ // Bouton utilisé après la réponse de chaque image pour passer à l'image suivant.
	
	document.getElementById("photoSuivante").style.visibility="hidden"; // Attention il ya une fonction photoSuivante et un bouton photoSuivante qui execute cette fonction quand on clique dessus
	
	if(document.getElementById(idFdbckMJ2)){
		document.getElementById(idFdbckMJ2).style.display="none";
	}
	if(document.getElementById(idFigRep)){
		document.getElementById(idFigRep).style.visibility="hidden";
	}
	MJ2photo=MJ2photo+1;
		
	if(MJ2photo<=4) { // le nombre d'images total dans le jeu
		idMJ2Txt="MJ2txt"+MJ2photo;
		idFigQuest='MJ2fig'+ MJ2photo+ '_1';
		idFigRep='MJ2fig'+MJ2photo+'_2'; // à remplacer le 1 par '+ MJ2photo+ ' si on met d'autres photot comme exemples
		document.getElementById(idFigQuest).style.visibility="visible";
		document.getElementById(idMJ2Txt).style.visibility="visible";
		document.getElementById("scoreMJ2").innerText=scoreMJ2;
		document.getElementById("infoScoreMJ2").style.visibility="visible";
		
	}else{
		finMJ2();
	}
}

function finMJ2(){
	scoreEtape=scoreMJ2;
	scoreChapitre=scoreChapitre+scoreMJ2;
	sauvegardeJoue();
	sauvegardeJoueur();
	document.getElementById("MJ2jeu").style.display="none";
	// validerEtoiles(); utiliser seulement si les étoiles sont en bon format n'ont pas de fond !
	document.getElementById("infoScoreMJ2").style.visibility="hidden";
	document.getElementById("infoScoreChapitre").innerText=scoreChapitre;
	document.getElementById("feedbackFinalMJ").innerText="Bravo tu as fini ce Mini Jeu avec un score total de " + scoreMJ2 + ". Pour continuer le chapitre appuie sur le bouton";
	document.getElementById("feedbackFinalMJ").style.display="initial";
	
	document.getElementById("continuer").style.visibility="visible";

}