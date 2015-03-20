
var scoreMJ1;

function startMJ1(){
	scoreMJ1=5;
	finMJ1();
}


function finMJ1(){
	scoreEtape=scoreMJ1;
	scoreChapitre=scoreChapitre+scoreMJ1;
	sauvegardeJoue();
	sauvegardeJoueur();
	document.getElementById("infoScoreChapitre").innerText=scoreChapitre;
	document.getElementById("feedbackFinalMJ").innerText="Bravo tu as fini ce Mini Jeu avec un score total de " + scoreMJ1 + ". Pour continuer le chapitre appuie sur le bouton";
	document.getElementById("feedbackFinalMJ").style.display="initial";
	document.getElementById("continuer").style.visibility="visible";
}