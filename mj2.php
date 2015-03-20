
	<div id="MJ2jeu">
		<div id="MJ2txt">Trouver les battements du cœur de Paul. </div>
		<div id="MJ2fig1_1" class="MJ2fig" >
			<img id="MJ2im1" src="/Epicer/images/mj2/mj2Fig1_1.png" alt="Mini jeu2" usemap="#bot1" >
				<map name="bot1">
					<area shape="rect" coords="0,0,26,350" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="26,0,48,350" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="48,0,102,350" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="102,0,122,350" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="122,0,173,350" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="173,0,199,350" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="199,0,246,350" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="246,0,270,350" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="270,0,319,350" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="319,0,348,350" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="348,0,403,350" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="403,0,435,350" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="435,0,483,350" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="483,0,509,350" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="509,0,559,350" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="559,0,600,350" alt="fig1"  onclick="mj2repGood()">
				</map>
		</div>	
		<div id="MJ2fig1_2" class="MJ2figRep">
			<img src="/Epicer/images/mj2/mj2Fig1_2.png" alt="Mini jeu2" >
		</div>
		
		
		<div id= "mj2badRep1" class="txtMauvaiseRep"> Désolé, vous n'aviez pas choisis les battements du cœur de Paul. Ceci son 
			entouré en rouge ci-dessous. Ton cœur, comme celui de Paul, est un muscle et il bat lorsqu’un neurone lui en donne l’ordre. 
			Un message sous forme de décharge électrique passe alors dans les. A chaque battement les signaux font un « pic » qui correspond à un message pour le cœur. 
		</div>
		
		<div id="infoScoreMJ2">  Score: <span id ="scoreMJ2" > </div> 
				
		<input id="photoSuivante" class="clickble" type="submit" name="actvtSuivante" value=">" onClick="photoSuivante()"/> </input>	

		<div id="MJ2txt">Trouve l’anomalie chez ce patient. </div>
		<div id="MJ2fig2_1" class="MJ2fig" >
			<img id="MJ2im2" src="/Epicer/images/mj2/mj2Fig2_1.png" alt="Mini jeu2" usemap="#bot2" >
				<map name="bot2">
					<area shape="rect" coords="0,0,272,350" alt="fig2"  onclick="mj2repBad()">
					<area shape="rect" coords="272,0,600,350" alt="fig2"  onclick="mj2repGood()">
				</map>
		</div>	
		<div id="MJ2fig2_2" class="MJ2figRep">
			<img src="/Epicer/images/mj2/mj2Fig2_2.png" alt="Mini jeu2" >
		</div>	
		
		<div id= "mj2badRep2" class="txtMauvaiseRep"> Désolé, tu n'as pas trouvé l'anomalie du patient, l'anomalie est entouré en rouge. Un premier pic marque le début d’une crise d’épilepsie, puis ce pic se 
		transforme en oscillations. Ces oscillations (les oscillations sont des « vagues ») régulières dans toutes les lignes provoquent une crise 
		de type absence, c’est-à-dire que la personne reste immobile pendant quelque instant (généralement 30s), elle ne fait rien et lorsque la crise
		se termine la personne ne se souvient plus de la crise. C’est comme si la crise n’avait pas existé pour la personne épileptique. 
		</div>
		
		<div id="infoScoreMJ2">  Score: <span id ="scoreMJ2" > </div> 
				
		<input id="photoSuivante" class="clickble" type="submit" name="actvtSuivante" value=">" onClick="photoSuivante()"/> </input>
		
		<div id="MJ2txt">Voici une première mesure de l’EEG de Paul, voit tu des crises d’épilepsie ? </div>
		<div id="MJ2fig3_1" class="MJ2fig" >
			<img id="MJ2im1" src="/Epicer/images/mj2/mj2Fig3_1.png" alt="Mini jeu2" usemap="#bot3" >
				<map name="bot3">
					<area shape="rect" coords="0,0,74,354" alt="fig3"  onclick="mj2repBad()">
					<area shape="rect" coords="74,0,203,354" alt="fig3"  onclick="mj2repGood()">
					<area shape="rect" coords="203,0,342,354" alt="fig3"  onclick="mj2repBad()">
					<area shape="rect" coords="342,0,377,354" alt="fig3"  onclick="mj2repGood()">
					<area shape="rect" coords="377,0,548,354" alt="fig3"  onclick="mj2repBad()">
					<area shape="rect" coords="548,0,575,354" alt="fig3"  onclick="mj2repGood()">
					<area shape="rect" coords="575,0,600,354" alt="fig3"  onclick="mj2repBad()">
				</map>
		</div>	
		<div id="MJ2fig3_2" class="MJ2figRep">
			<img src="/Epicer/images/mj2/mj2Fig3_2.png" alt="Mini jeu2" >
		</div>
		
		
		<div id= "mj2badRep3" class="txtMauvaiseRep"> Et non ces pics ne sont pas des crises ! Nous avons tous de temps en temps des pics comme ceux que tu as montré
		dans le signaux qui passent dans notre cerveau, cela est normal et ne change absolument rien à ton comportement. Néanmoins c’est à partir de tels pics qu’une 
		crise d’épilepsie peut se déclencher mais ce n’est pas toujours le cas. 
		</div>
		
		<div id="infoScoreMJ2">  Score: <span id ="scoreMJ2" > </div> 
				
		<input id="photoSuivante" class="clickble" type="submit" name="actvtSuivante" value=">" onClick="photoSuivante()"/> </input>	
	
		<!--div id="MJ2txt">Voici une deuxième mesure de l’EEG de Paul, vois-tu des crises d’épilepsie ?  </div-->
		<div id="MJ2fig4_1" class="MJ2fig" >
			<img id="MJ2im1" src="/Epicer/images/mj2/mj2Fig4_1.png" alt="Mini jeu2" usemap="#bot4" >
				<map name="bot4">
					<area shape="rect" coords="0,0,206,343" alt="fig4"  onclick="mj2repBad()">
					<area shape="rect" coords="206,0,260,343" alt="fig4"  onclick="mj2repGood()">
					<area shape="rect" coords="260,0,302,343" alt="fig4"  onclick="mj2repBad()">
					<area shape="rect" coords="302,0,338,343" alt="fig4"  onclick="mj2repGood()">
					<area shape="rect" coords="338,0,400,343" alt="fig4"  onclick="mj2repBad()">
					<area shape="rect" coords="400,0,600,343" alt="fig4"  onclick="mj2repGood()">
					
				</map>
		</div>	
		<div id="MJ2fig1_2" class="MJ2figRep">
			<img src="/Epicer/images/mj2/mj2Fig4_2.png" alt="Mini jeu2" >
		</div>
		
		
		<div id= "mj2badRep4" class="txtMauvaiseRep"> Désolé, où tu as cliqué n'est pas une crise d’épilepsie. Paul a eu une crise d’épilepsie. 
		Elle a démarrée par un grand pic qui a été suivi par des oscillations sur toutes les lignes. C’est une crise généralisée, c’est à
		dire que tous les neurones de Paul sont surexcités et envoient beaucoup de messages dans tout le corps de Paul. C’est cela qui crée
		la contraction des muscles de Paul lors de ses crises comme tu l’as vu dans le CHAPITRE PRECEDENT 
		</div>
		
		<div id="infoScoreMJ2">  Score: <span id ="scoreMJ2" > </div> 
				
		<input id="photoSuivante" class="clickble" type="submit" name="actvtSuivante" value=">" onClick="photoSuivante()"/> </input>	
	</div>
	
	

	
