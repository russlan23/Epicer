
var scoreMJ2;
var MJ2photo;

function startMJ2(){

	scoreMJ2=0;
	MJ2photo=0;
	document.getElementById("MJ2jeu").style.visibility="visible";
	document.getElementById("MJ2fig1_1").style.visibility="visible";
	document.getElementById("MJ2txt").style.visibility="visible";

}

function mj2repBad(){
	document.getElementById("MJ2txt").style.visibility="hidden";
	document.getElementById("txtMauvaiseRep").style.visibility="visible";
	document.getElementById("MJ2fig1_1").style.visibility="hidden";
	document.getElementById("MJ2fig1_2").style.visibility="visible";
	
	//idFdbckMJ5="textmj5" +numAct;
	//if(document.getElementById(idFdbckMJ5)){
	//	document.getElementById(idFdbckMJ5).style.display="initial";
	//	}
	document.getElementById("photoSuivante").style.visibility="visible";
}

function mj2repGood(){
	scoreMJ2=scoreMJ2+5;

}

/*function photoSuivante(){
	MJ2photo=MJ2photo+1;
	document.getElementById("photoSuivante").style.visibility="hidden";
	if(document.getElementById(idFdbckMJ5)){
		document.getElementById(idFdbckMJ5).style.display="none";
	}
	document.getElementById("repBonne").style.visibility="hidden";
	document.getElementById("repFausse").style.visibility="hidden";
	if(numAct<activites.length) {
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

*/
