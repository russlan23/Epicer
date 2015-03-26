
var imgActvt = new Image();
var nomActivite="";
var textNode;
var paraphAct;
var activites = [" " , "Athlétisme ?", "Professeur à l'école ?", "Peintre ?" , "Natation ?" , "Danse ?", "Football ?", "Pompier ?", "Pilote d'avion ?", "Plongée sous-marine", "Conducteur de transport en commun"  ];
var reponses= [true, true, true, true, true, true, true, false, false, false, false]; // attention de ne pas prendre en compte le premier qui correspond à l'espace vide
var numAct=0;
var scoreMJ5=0;
var idFdbckMJ5="";
var actNode;
var MJ5joue=false; 

function startMJ5(){
	document.getElementById("espaceJeu").style.backgroundColor="white";
	document.getElementById("espaceJeu").style.backgroundImage="none";
	document.getElementById("btnAccueil").style.visibility="hidden";
	if(scoreMJ5>0){
		numAct =0;
		scoreMJ5=0;
		idFdbckMJ5="";
		actSuiv();
	}else{
		actNode = document.createTextNode(activites[numAct]);
		actSuiv();
		document.getElementById("activite").appendChild(actNode);
		paraphAct=document.createElement("P");
		document.getElementById("activite").appendChild(paraphAct);
		document.getElementById("activite").appendChild(imgActvt);
	}
	document.getElementById("infoScoreMJ5").style.visibility="visible";
	document.getElementById("scoreMJ5").innerText=scoreMJ5;
	
}

function actSuiv(){
	numAct=numAct+1;
	document.getElementById("actvtSuivante").style.visibility="hidden";
	if(document.getElementById(idFdbckMJ5)){
		document.getElementById(idFdbckMJ5).style.display="none";
	}
	document.getElementById("repBonne").style.visibility="hidden";
	document.getElementById("repFausse").style.visibility="hidden";
	if(numAct<activites.length) {
		var nbQuestion=activites.length-1;
		document.getElementById("nbQuestion").innerText=" " + numAct + "/"+nbQuestion;
		document.getElementById("nbQuestion").style.visibility="visible";	
		document.getElementById("reponseOui").style.visibility="visible";
		document.getElementById("reponseNon").style.visibility="visible";
		document.getElementById("question").style.visibility="visible";
		document.getElementById("activite").style.visibility="visible";
		imgActvt.src='/Epicer/images/mj5/mj5'+ numAct+ '.png';
		actNode.nodeValue=activites[numAct];
		
	}else{
		finJeu();
	}
}


function finJeu(){
	document.getElementById("infoScoreMJ5").style.visibility="hidden";
	document.getElementById("feedbackFinalMJ").innerText="Bravo tu as fini ce Mini Jeu avec un score total de " + scoreMJ5 + ". Pour continuer le chapitre appuie sur le bouton";
	document.getElementById("feedbackFinalMJ").style.display="initial";
	document.getElementById("continuer").style.visibility="visible";
	scoreEtape=scoreMJ5;
	scoreChapitre=scoreChapitre+scoreMJ5;
	sauvegardeJoue();
	sauvegardeJoueur();
	validerEtoiles();
	document.getElementById("infoScoreChapitre").innerText=scoreChapitre;

}

function verifReponse(choix){
	
	document.getElementById("question").style.visibility="hidden";
	document.getElementById("activite").style.visibility="hidden";	
	document.getElementById("reponseOui").style.visibility="hidden";
	document.getElementById("reponseNon").style.visibility="hidden";
	
	if(choix==reponses[numAct]){
		document.getElementById("repBonne").style.visibility="visible";			
		scoreMJ5= scoreMJ5+5;
		document.getElementById("scoreMJ5").innerText=scoreMJ5;
		
	}else{
		document.getElementById("repFausse").style.visibility="visible";
	
	}
	idFdbckMJ5="textmj5" +numAct;
	if(document.getElementById(idFdbckMJ5)){
		document.getElementById(idFdbckMJ5).style.display="initial";
	}
	document.getElementById("actvtSuivante").style.visibility="visible";
	
}
	