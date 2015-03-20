
var scoreMJ2;

function startMJ4(){
	scoreMJ4=5;
	finMJ4();
}


function finMJ4(){
	scoreEtape=scoreMJ4;
	scoreChapitre=scoreChapitre+scoreMJ4;
	sauvegardeJoue();
	sauvegardeJoueur();
	document.getElementById("infoScoreChapitre").innerText=scoreChapitre;
	document.getElementById("feedbackFinalMJ").innerText="Bravo tu as fini ce Mini Jeu avec un score total de " + scoreMJ4 + ". Pour continuer le chapitre appuie sur le bouton";
	document.getElementById("feedbackFinalMJ").style.display="initial";
	document.getElementById("continuer").style.visibility="visible";
}