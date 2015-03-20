
var scoreMJ3;

function startMJ3(){
	scoreMJ3=5;
	finMJ3();
}


function finMJ3(){
	scoreEtape=scoreMJ3;
	scoreChapitre=scoreChapitre+scoreMJ3;
	sauvegardeJoue();
	sauvegardeJoueur();
	document.getElementById("infoScoreChapitre").innerText=scoreChapitre;
	document.getElementById("feedbackFinalMJ").innerText="Bravo tu as fini ce Mini Jeu avec un score total de " + scoreMJ3 + ". Pour continuer le chapitre appuie sur le bouton";
	document.getElementById("feedbackFinalMJ").style.display="initial";
	document.getElementById("continuer").style.visibility="visible";
}