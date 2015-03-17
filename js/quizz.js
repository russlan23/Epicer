
var imgActvt = new Image();
var nomActivite="";
var textNode;
var paraphAct;
var questionQuizz = [];
var reponses= []; // attention de ne pas prendre en compte le premier qui correspond à l'espace vide
var numAct=0;
var scoreQuizz=0;
var idFdbckQuizz="";
var actNode;
var MJ5joue=false;
var Quizz; 

function startQuizz(quizz){
	Quizz=quizz;
	if (Quizz==1){
		questionQuizz = [" " , "L’épilepsie est une pathologie répandue", "L’épilepsie est une maladie contagieuse. Une personne épileptique peut transmettre la maladie à une personne non-épileptique", "L’épilepsie est une forme de possession spirituelle" , "Les jeux-vidéo provoquent des crises d’épilepsie " , "L’épilepsie est une maladie héréditaire. On naît épileptique  ", "L’épilepsie affecte l’intelligence", "Les malades font fréquemment des crises ", "La convulsion est la seule forme de crise", "L’épilepsie peut toucher n’importe qui", "Certains facteurs facilitent l’apparition des crises", "On peut prévenir l’apparition d’une crise" ];
		reponses= [true, true, false, false, true, false, false, false, false, true, true, false]; // attention de ne pas prendre en compte le premier qui correspond à l'espace vide
	}
	else if (Quizz==2){
		questionQuizz = [" " , "Toutes les crises d’épilepsie se manifestent de la même façon", "Une personne qui sent des odeurs désagréables alors qu’en réalité rien autour de lui ne dégage une telle odeur peut être épileptique", "Une personne épileptique peut devenir maman" , "Pour réaliser un IRM, le patient doit mettre des électrodes sur la tête" , "L’Electroencéphalogramme peut se dérouler sur trois jours de suite à la maison", "Une variation sur le relevé de l’Electroencéphalogramme signifie forcément une crise d’épilepsie", "Il est possible de conduire en voiture lorsque l’on est épileptique", "Il faut que mes amis me sortent de la classe si je fais une crise d’épilepsie", "Une personne épileptique peut envisager n’importe quel métier", "Il faut que je prévienne mes amis et mes professeurs de mon épilepsie si je suis épileptique"  ];
		reponses= [true, false, true, true, false, true, false, true, false, false, true]; // attention de ne pas prendre en compte le premier qui correspond à l'espace vide
	}
	document.getElementById("espaceJeu").style.backgroundColor="white";
	document.getElementById("espaceJeu").style.backgroundImage="none";
	document.getElementById("btnAccueil").style.visibility="hidden";
	if(scoreQuizz>0){
		numAct =0;
		scoreQuizz=0;
		idFdbckQuizz="";
		quesSuivQuizz();
	}else{
		actNode = document.createTextNode(questionQuizz[numAct]);
		quesSuivQuizz();
		document.getElementById("questionQuizz").appendChild(actNode);
		paraphAct=document.createElement("P");
		document.getElementById("questionQuizz").appendChild(paraphAct);
		//document.getElementById("questionQuizz").appendChild(imgActvt);
	}
	document.getElementById("infoScoreQuizz").style.visibility="visible";
	document.getElementById("scoreQuizz").innerText=scoreQuizz;
}

function quesSuivQuizz(){
	numAct=numAct+1;
	document.getElementById("questionSuivanteQuizz").style.visibility="hidden";
	if(document.getElementById(idFdbckQuizz)){
		document.getElementById(idFdbckQuizz).style.display="none";
	}
	document.getElementById("repBonneQuizz").style.visibility="hidden";
	document.getElementById("repFausseQuizz").style.visibility="hidden";
	if(numAct<questionQuizz.length) {
		document.getElementById("reponseOuiQuizz").style.visibility="visible";
		document.getElementById("reponseNonQuizz").style.visibility="visible";
		//document.getElementById("question").style.visibility="visible";
		document.getElementById("questionQuizz").style.visibility="visible";
		//imgActvt.src='/Epicer/images/mj5/mj5'+ numAct+ '.png';
		actNode.nodeValue=questionQuizz[numAct];
		
	}else{
		finChapitre();
	}
}


function finChapitre(){
	document.getElementById("infoScoreQuizz").style.visibility="hidden";
	document.getElementById("feedbackFinalQF").innerText="Bravo tu as fini ce quizz avec un score total de " + scoreQuizz + ". Pour continuer le chapitre appuie sur le bouton";
	document.getElementById("feedbackFinalQF").style.display="initial";
	document.getElementById("continuer").style.visibility="visible";
	scoreEtape=scoreQuizz;
	scoreChapitre=scoreChapitre+scoreQuizz;
	document.getElementById("infoScoreChapitre").innerText=scoreChapitre;
	validerEtoiles();

}

function verifReponseQuizz(choix){
	
	//document.getElementById("question").style.visibility="hidden";
	document.getElementById("questionQuizz").style.visibility="hidden";	
	document.getElementById("reponseOuiQuizz").style.visibility="hidden";
	document.getElementById("reponseNonQuizz").style.visibility="hidden";
	
	if(choix==reponses[numAct]){
		document.getElementById("repBonneQuizz").style.visibility="visible";			
		scoreQuizz= scoreQuizz+10;
		document.getElementById("scoreQuizz").innerText=scoreQuizz;
		
	}else{
		document.getElementById("repFausseQuizz").style.visibility="visible";
	
	}
	
	if (Quizz==1){
		idFdbckQuizz="textQuizzInitial" +numAct;
	}
	else if (Quizz==2){
		idFdbckQuizz="textQuizzFinal" +numAct;
	}	
	
	if(document.getElementById(idFdbckQuizz)){
		document.getElementById(idFdbckQuizz).style.display="initial";
	}
	document.getElementById("questionSuivanteQuizz").style.visibility="visible";
	
}

function validerEtoiles(){
		document.getElementById("etoile1").style.visibility="visible";
	if (scoreQuizz>40){
		document.getElementById("etoile2").style.visibility="visible";
	}
	if (scoreQuizz>80) {
		document.getElementById("etoile3").style.visibility="visible";
	}
}
	