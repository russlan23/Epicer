
var imgActvt = new Image();
var paraphActQuizz;
var questionQuizz = [];
var reponsesQuizz= []; // attention de ne pas prendre en compte le premier qui correspond à l'espace vide
var numActQuizz=0;
var scoreQuizz=0;
var idFdbckQuizz="";
var actNodeQuizz;
var quizz; 

function startQuizz(quiz){
	quizz=quiz;
	if (quizz==1){
		questionQuizz = [" " , "L’épilepsie est une pathologie répandue", "L’épilepsie est une maladie contagieuse. Une personne épileptique peut transmettre la maladie à une personne non-épileptique", "L’épilepsie est une forme de possession spirituelle" , "Les jeux-vidéo provoquent des crises d’épilepsie " , "L’épilepsie est une maladie héréditaire. On naît épileptique  ", "L’épilepsie affecte l’intelligence", "Les malades font fréquemment des crises ", "La convulsion est la seule forme de crise", "L’épilepsie peut toucher n’importe qui", "Certains facteurs facilitent l’apparition des crises", "On peut prévenir l’apparition d’une crise" ];
		reponsesQuizz= [true, true, false, false, true, false, false, false, false, true, true, false]; // attention de ne pas prendre en compte le premier qui correspond à l'espace vide
	}
	if (quizz==2){
		questionQuizz = [" " , "Toutes les crises d’épilepsie se manifestent de la même façon", "Une personne qui sent des odeurs désagréables alors qu’en réalité rien autour de lui ne dégage une telle odeur peut être épileptique", "Une personne épileptique peut devenir maman" , "Pour réaliser un IRM, le patient doit mettre des électrodes sur la tête" , "L’Electroencéphalogramme peut se dérouler sur trois jours de suite à la maison", "Une variation sur le relevé de l’Electroencéphalogramme signifie forcément une crise d’épilepsie", "Il est possible de conduire en voiture lorsque l’on est épileptique", "Il faut que mes amis me sortent de la classe si je fais une crise d’épilepsie", "Une personne épileptique peut envisager n’importe quel métier", "Il faut que je prévienne mes amis et mes professeurs de mon épilepsie si je suis épileptique"  ];
		reponsesQuizz= [true, false, true, true, false, true, false, true, false, false, true]; // attention de ne pas prendre en compte le premier qui correspond à l'espace vide
	}
	document.getElementById("espaceJeu").style.backgroundColor="white";
	document.getElementById("espaceJeu").style.backgroundImage="none";
	document.getElementById("btnAccueil").style.visibility="hidden";
	if(scoreQuizz>0){
		numActQuizz =0;
		scoreQuizz=0;
		idFdbckQuizz="";
		quesSuivQuizz();
	}else{
		actNodeQuizz = document.createTextNode(questionQuizz[numActQuizz]);
		quesSuivQuizz();
		document.getElementById("questionQuizz").appendChild(actNodeQuizz);
		paraphActQuizz=document.createElement("P");
		document.getElementById("questionQuizz").appendChild(paraphActQuizz);
		//document.getElementById("questionQuizz").appendChild(imgActvt);
	}
	document.getElementById("infoScoreQuizz").style.visibility="visible";
	document.getElementById("scoreQuizz").innerText=scoreQuizz;
}

function quesSuivQuizz(){
	numActQuizz=numActQuizz+1;
	document.getElementById("questionSuivanteQuizz").style.visibility="hidden";
	if(document.getElementById(idFdbckQuizz)){
		document.getElementById(idFdbckQuizz).style.display="none";
	}
	document.getElementById("repBonneQuizz").style.visibility="hidden";
	document.getElementById("repFausseQuizz").style.visibility="hidden";
	if(numActQuizz<questionQuizz.length) {
		var nbQuestion=questionQuizz.length-1;
		document.getElementById("nbQuestion").innerText=" " + numActQuizz + "/"+nbQuestion;
		document.getElementById("nbQuestion").style.visibility="visible";
		document.getElementById("reponseOuiQuizz").style.visibility="visible";
		document.getElementById("reponseNonQuizz").style.visibility="visible";
		//document.getElementById("question").style.visibility="visible";
		document.getElementById("questionQuizz").style.visibility="visible";
		//imgActvt.src='/Epicer/images/mj5/mj5'+ numActQuizz+ '.png';
		actNodeQuizz.nodeValue=questionQuizz[numActQuizz];
	}else{
		finQuizz();
	}
}


function finQuizz(){
	document.getElementById("infoScoreQuizz").style.visibility="hidden";
	document.getElementById("feedbackFinalQF").innerText="Bravo tu as fini ce quizz avec un score total de " + scoreQuizz + ". Pour continuer le chapitre appuie sur le bouton";
	document.getElementById("feedbackFinalQF").style.display="initial";
	document.getElementById("continuer").style.visibility="visible";
	scoreEtape=scoreQuizz;
	scoreChapitre=scoreChapitre+scoreQuizz;
	document.getElementById("infoScoreChapitre").innerText=scoreChapitre;
	validerEtoiles();
	sauvegardeJoue();
	sauvegardeJoueur();

}

function verifReponseQuizz(choix){
	
	//document.getElementById("question").style.visibility="hidden";
	document.getElementById("questionQuizz").style.visibility="hidden";	
	document.getElementById("reponseOuiQuizz").style.visibility="hidden";
	document.getElementById("reponseNonQuizz").style.visibility="hidden";
	
	if(choix==reponsesQuizz[numActQuizz]){
		document.getElementById("repBonneQuizz").style.visibility="visible";			
		scoreQuizz= scoreQuizz+10;
		document.getElementById("scoreQuizz").innerText=scoreQuizz;
		
	}else{
		document.getElementById("repFausseQuizz").style.visibility="visible";
	
	}
	if (quizz==1){
		idFdbckQuizz="textQuizzInitial" +numActQuizz;
		
	}
	if (quizz==2){
		idFdbckQuizz="textQuizzFinal" +numActQuizz;
	}	
	if(document.getElementById(idFdbckQuizz)){
		document.getElementById(idFdbckQuizz).style.display="initial";
	}
	document.getElementById("questionSuivanteQuizz").style.visibility="visible";
	
}

function validerEtoiles(){
	document.getElementById("nbQuestion").style.visibility="hidden";
	if (scoreQuizz<=40){
		document.getElementById("etoile1").style.visibility="visible";
	}
	if (scoreQuizz>40){
		document.getElementById("etoile2").style.visibility="visible";
	}
	if (scoreQuizz>80) {
		document.getElementById("etoile3").style.visibility="visible";
	}
}
	