
var scoreMJ2;
var MJ2photo;
var idFdbckMJ2="";
var idFigRep;
var idFigQuest;

function startMJ2(){

	scoreMJ2=0;
	MJ2photo=0;
	document.getElementById("MJ2jeu").style.visibility="visible";
	photoSuivante();
	

}

function mj2repBad(){ // s'execute si le joueur a cliqué sur la mauvaise partie de l'image
	document.getElementById("MJ2txt").style.visibility="hidden";
	document.getElementById("mj2badRep1").style.visibility="visible";
	
	document.getElementById(idFigQuest).style.visibility="hidden";
	
	document.getElementById(idFigRep).style.visibility="visible";
	
	idFdbckMJ2="mj2badRep"+MJ2photo; // pour indiquer quel feedback afficher; MJ2photo compte juste le numero d'étape dans ce mini-jeu
	
	if(document.getElementById(idFdbckMJ2)){
		document.getElementById(idFdbckMJ2).style.display="initial";
	}
	
	//idFdbckMJ5="textmj5" +numAct;
	//if(document.getElementById(idFdbckMJ5)){
	//	document.getElementById(idFdbckMJ5).style.display="initial";
	//	}
	document.getElementById("photoSuivante").style.visibility="visible";
}

function mj2repGood(){ // s'execute si le joueur a cliqué sur la bonne partie de l'image
	scoreMJ2=scoreMJ2+5;
	document.getElementById("scoreMJ2").innerText=scoreMJ2;
	document.getElementById("photoSuivante").style.visibility="visible";
}

function photoSuivante(){
	
	document.getElementById("photoSuivante").style.visibility="hidden"; // Attention il ya une fonction photoSuivante et un bouton photoSuivante qui execute cette fonction quand on clique dessus
	
	if(document.getElementById(idFdbckMJ2)){
		document.getElementById(idFdbckMJ2).style.display="none";
	}
	if(document.getElementById(idFigRep)){
		document.getElementById(idFigRep).style.visibility="hidden";
	}
	MJ2photo=MJ2photo+1;
		
	if(MJ2photo<=5) { // le nombre d'images total dans le jeu
		idFigQuest='MJ2fig'+ MJ2photo+ '_1';
		alert(idFigQuest);
		idFigRep='MJ2fig'+ MJ2photo+ '_2';
		document.getElementById(idFigQuest).style.visibility="visible";
		document.getElementById("MJ2txt").style.visibility="visible";
		
		
	}else{
		finMJ2();
	}
}

function finMJ2(){

}
