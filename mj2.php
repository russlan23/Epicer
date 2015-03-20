
	<div id="MJ2jeu">
		<div id="MJ2txt">Trouver les battements du cœur de Paul. </div>
		<div id="MJ2fig1_1" class="MJ2fig" >
			<img id="MJ2im1" src="/Epicer/images/mj2/mj2Fig1_1.png" alt="Mini jeu2" usemap="#bot1" >
				<map name="bot1">
					<area shape="rect" coords="0,0,35,499" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="35,0,65,499" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="65,0,141,499" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="141,0,172,499" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="172,0,246,499" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="246,0,277,499" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="277,0,352,499" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="352,0,385,499" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="385,0,462,499" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="462,0,492,499" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="492,0,585,499" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="585,0,616,499" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="616,0,694,499" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="694,0,721,499" alt="fig1"  onclick="mj2repGood()">
					<area shape="rect" coords="721,0,812,499" alt="fig1"  onclick="mj2repBad()">
					<area shape="rect" coords="812,0,858,499" alt="fig1"  onclick="mj2repGood()">
				</map>
		</div>	
		<div id="MJ2fig1_2" class="MJ2figRep">
			<img src="/Epicer/images/mj2/mj2Fig1_2.png" alt="Mini jeu2" >
		</div>
		
		<div id="MJ2fig2_1" class="MJ2fig" >
			<img id="MJ2im2" src="/Epicer/images/mj2/mj2Fig2_1.png" alt="Mini jeu2" usemap="#bot2" >
				<map name="bot2">
				<area shape="rect" coords="0,0,254,318" alt="fig2" onclick="mj2repBad()">
				<area shape="rect" coords="254,0,547,318" alt="fig2" onclick="mj2repGood()">
			</map>
		</div>

		
		<div id= "mj2badRep1" class="txtMauvaiseRep"> Désolé, vous n'as pas choisis les battements du cœur de Paul. Ceci son 
			entouré en rouge ci-dessous. Ton cœur, comme celui de Paul, est un muscle et il bat lorsqu’un neurone lui en donne l’ordre. 
			Un message sous forme de décharge électrique passe alors dans les. A chaque battement les signaux font un « pic » qui correspond à un message pour le cœur. 
		</div>
		
		
		<div id= "mj2goodRep1" class="txtBonneRep"> Effectivement tu as trouvé un battement du cœur de Paul. Ton cœur, comme celui de Paul,
		est un muscle et il bat lorsqu’un neurone lui en donne l’ordre. Un message sous forme de décharge électrique passe alors dans les muscles .
		A chaque battement les signaux font un « pic » qui correspond à un message pour le cœur. 
		</div>
		
		<div id= "mj2badRep2" class="txtMauvaiseRep"> Désolé, tu n'as pas choisis les battements du cœur de Paul. </div>
		
		<div id= "mj2goodRep2" class="txtBonneRep"> Effectivement tu as trouvé un battement du cœur de Paul. </div>
		
		
		<div id="infoScoreMJ2">  Score: <span id ="scoreMJ2" > </span></div> 
				
		<input id="photoSuivante" class="clickble" type="submit" name="actvtSuivante" value=">" onClick="photoSuivante()"/> </input>		
		
	</div>
	
	

	
