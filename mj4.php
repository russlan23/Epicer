	
	<div id="MJ4jeu">
	
		<!--Les messages explicatifs pour chaque image-->			
		<div id="MJ4txt1">Observe bien ces deux résultats d’IRM, ils représentent les cerveaux de
		deux patients. Trouve la différence entre ces deux résultats d’IRM. </div>		
		<div id="MJ4txt2">Observe bien ces deux résultats d’IRM, ils représentent les cerveaux de
		deux patients. Trouve la différence entre ces deux résultats d’IRM. </div>			
		<div id="MJ4txt3">Observe bien ces deux résultats d’IRM, ils représentent les cerveaux de 
		deux patients. Trouve la différence entre ces deux résultats d’IRM. </div>
		<div id="MJ4txt4">Observe bien ces deux résultats d’IRM, ils représentent les cerveaux de
		deux patients. Trouve la différence entre ces deux résultats d’IRM.  </div>
		
		<!--Coordonnées des images-->
		<div id="MJ4fig1_1" class="MJ4fig" >
			<img id="MJ4im1" src="/Epicer/images/mj4/mj4Fig1_1.png" alt="Mini jeu4" usemap="#bot1" >
				<map name="bot1">
					<area shape="rect" coords="0,0,297,116" alt="fig1"  onclick="mj4repBad()">
					<area shape="rect" coords="297,0,600,128" alt="fig1"  onclick="mj4repBad()">					
					<area shape="rect" coords="0,219,297,353" alt="fig1"  onclick="mj4repBad()">
					<area shape="rect" coords="128,116,297,350" alt="fig1"  onclick="mj4repGood()">
					
				</map>
		</div>	
		<div id="MJ4fig1_2" class="MJ4figRep">
			<img src="/Epicer/images/mj4/mj4Fig1_2.png" alt="Mini jeu4" >
		</div>
	Alterei até aqui	
		<div id="MJ4fig2_1" class="MJ4fig" >
			<img id="MJ4im2" src="/Epicer/images/mj4/mj4Fig2_1.png" alt="Mini jeu4" usemap="#bot2" >
				<map name="bot2">
					<area shape="rect" coords="0,0,272,350" alt="fig2"  onclick="mj2repBad()">
					<area shape="rect" coords="272,0,600,350" alt="fig2"  onclick="mj2repGood()">
				</map>
		</div>	
		
		
		<div id="MJ2fig2_2" class="MJ2figRep">
			<img src="/Epicer/images/mj2/mj2Fig2_2.png" alt="Mini jeu2" >
		</div>
		
		<div id="MJ2fig3_1" class="MJ2fig" >
			<img id="MJ2im3" src="/Epicer/images/mj2/mj2Fig3_1.png" alt="Mini jeu2" usemap="#bot3" >
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
		
		<div id="MJ2fig4_1" class="MJ2fig" >
			<img id="MJ2im4" src="/Epicer/images/mj2/mj2Fig4_1.png" alt="Mini jeu2" usemap="#bot4" >
				<map name="bot4">
					<area shape="rect" coords="0,0,206,343" alt="fig4"  onclick="mj2repBad()">
					<area shape="rect" coords="206,0,260,343" alt="fig4"  onclick="mj2repGood()">
					<area shape="rect" coords="260,0,302,343" alt="fig4"  onclick="mj2repBad()">
					<area shape="rect" coords="302,0,338,343" alt="fig4"  onclick="mj2repGood()">
					<area shape="rect" coords="338,0,400,343" alt="fig4"  onclick="mj2repBad()">
					<area shape="rect" coords="400,0,600,343" alt="fig4"  onclick="mj2repGood()">
					
				</map>
		
		</div>	
		<div id="MJ2fig4_2" class="MJ2figRep">
			<img src="/Epicer/images/mj2/mj2Fig3_2.png" alt="Mini jeu2" >
		</div>
		
		<!--Réponses bonnes et mauvaises-->		
		<div id= "mj2badRep1" class="txtMauvaiseRep"> Désolé, vous n'as pas choisis les battements du cœur de Paul. Ceci son 
			entouré en rouge ci-dessous. Ton cœur, comme celui de Paul, est un muscle et il bat lorsqu’un neurone lui en donne l’ordre. 
			Un message sous forme de décharge électrique passe alors dans les. A chaque battement les signaux font un « pic » qui correspond à un message pour le cœur. 
		</div>
		
		
		<div id= "mj2goodRep1" class="txtBonneRep"> Effectivement tu as trouvé un battement du cœur de Paul. Ton cœur, comme celui de Paul,
		est un muscle et il bat lorsqu’un neurone lui en donne l’ordre. Un message sous forme de décharge électrique passe alors dans les muscles .
		A chaque battement les signaux font un « pic » qui correspond à un message pour le cœur. 
		</div>
		
		<div id= "mj2badRep2" class="txtMauvaiseRep"> Désolé, tu n'as pas trouvé l'anomalie du patient, l'anomalie est entouré en rouge. Un premier pic marque le début d’une crise d’épilepsie, puis ce pic se 
		transforme en oscillations. Ces oscillations (les oscillations sont des « vagues ») régulières dans toutes les lignes provoquent une crise 
		de type absence, c’est-à-dire que la personne reste immobile pendant quelque instant (généralement 30s), elle ne fait rien et lorsque la crise
		se termine la personne ne se souvient plus de la crise. C’est comme si la crise n’avait pas existé pour la personne épileptique. </div>
		
		<div id= "mj2goodRep2" class="txtBonneRep"> Bonne réponse de l'image 2. </div>
		
		<div id= "mj2badRep3" class="txtMauvaiseRep"> Mauvaise réponse de l'image 3. </div>
		
		<div id= "mj2goodRep3" class="txtBonneRep"> Bonne réponse de l'image 3. </div>
		
		<div id= "mj2badRep4" class="txtMauvaiseRep"> Mauvaise réponse de l'image 4. </div>
		
		<div id= "mj2goodRep4" class="txtBonneRep"> Bonne réponse de l'image 4. </div>
		
		<div id="infoScoreMJ2">  Score: <span id ="scoreMJ2" > </span></div> 
				
		<input id="photoSuivante" class="clickble" type="submit" name="actvtSuivante" value=">" onClick="photoSuivante()"/> </input>	
		
	</div>
	






	
		
		
	
	

	
