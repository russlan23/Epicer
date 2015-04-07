
var scoreMJ4;
var MJ4photo;
var idFdbckMJ4="";
var id4FigRep;
var id4FigQuest;

function startMJ4(){

	scoreMJ4=0;
	MJ4photo=0;
	document.getElementById("MJ4jeu").style.display="initial";
	photoSuivanteMJ4();
	
}

function mj4repBad(){ // s'execute si le joueur a cliqué sur la mauvaise partie de l'image
 
	document.getElementById(idMJ4Txt).style.visibility="hidden";
	
	document.getElementById(id4FigQuest).style.visibility="hidden";
	
	document.getElementById(id4FigRep).style.visibility="visible";
	
	idFdbckMJ4="mj4badRep"+MJ4photo; // pour indiquer quel feedback afficher; MJ4photo compte juste le numero d'étape dans ce mini-jeu
	
	if(document.getElementById(idFdbckMJ4)){
		document.getElementById(idFdbckMJ4).style.display="initial";
	}
	
	document.getElementById("photoSuivanteMJ4").style.visibility="visible";
}

function mj4repGood(){ // s'execute si le joueur a cliqué sur la bonne partie de l'image
	scoreMJ4=scoreMJ4+5;
	document.getElementById("scoreMJ4").innerText=scoreMJ4;
	document.getElementById("photoSuivanteMJ4").style.visibility="visible";
	document.getElementById(idMJ4Txt).style.visibility="hidden";
	document.getElementById(id4FigQuest).style.visibility="hidden";
	
	idFdbckMJ4="mj4goodRep"+MJ4photo; // pour indiquer quel feedback afficher; MJ4photo compte juste le numero d'étape dans ce mini-jeu
	
	if(document.getElementById(idFdbckMJ4)){
		document.getElementById(idFdbckMJ4).style.display="initial";
	}
	document.getElementById(id4FigRep).style.visibility="visible";
}

function photoSuivanteMJ4(){ // Bouton utilisé après la réponse de chaque image pour passer à l'image suivant.
	
	document.getElementById("photoSuivanteMJ4").style.visibility="hidden"; // Attention il ya une fonction photoSuivanteMJ4 et un bouton photoSuivanteMJ4 qui execute cette fonction quand on clique dessus
	
	if(document.getElementById(idFdbckMJ4)){
		document.getElementById(idFdbckMJ4).style.display="none";
	}
	if(document.getElementById(id4FigRep)){
		document.getElementById(id4FigRep).style.visibility="hidden";
	}
	MJ4photo=MJ4photo+1;
		
	if(MJ4photo<=4) { // le nombre d'images total dans le jeu
		idMJ4Txt="MJ4txt"+MJ4photo;
		id4FigQuest='MJ4fig'+ MJ4photo+ '_1';
		id4FigRep='MJ4fig'+MJ4photo+'_2'; // à remplacer le 1 par '+ MJ4photo+ ' si on met d'autres photot comme exemples
		document.getElementById(id4FigQuest).style.visibility="visible";
		document.getElementById(idMJ4Txt).style.visibility="visible";
		document.getElementById("scoreMJ4").innerText=scoreMJ4;
		document.getElementById("infoScoreMJ4").style.visibility="visible";
		
	}else{
		finMJ4();
	}
}

function finMJ4(){
	scoreEtape=scoreMJ4;
	scoreChapitre=scoreChapitre+scoreMJ4;
	sauvegardeJoue();
	sauvegardeJoueur();
	document.getElementById("MJ4jeu").style.display="none";
	// validerEtoiles(); utiliser seulement si les étoiles sont en bon format n'ont pas de fond !
	document.getElementById("infoScoreMJ4").style.visibility="hidden";
	document.getElementById("infoScoreChapitre").innerText=scoreChapitre;
	document.getElementById("feedbackFinalMJ").innerText="Bravo tu as fini ce Mini Jeu avec un score total de " + scoreMJ4 + ". Pour continuer le chapitre appuie sur le bouton";
	document.getElementById("feedbackFinalMJ").style.display="initial";
	
	document.getElementById("continuer").style.visibility="visible";

}