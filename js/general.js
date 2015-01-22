// variables 
				
				var marx;
				var mary ;
				var table = [Array(),Array()];
				var movement =0;
				var velocity = 8;
				var total_points = [0,-2,-2,-2,-2,-2,-2,-2];
				var lose = [0,-1,-1,-1,-1,-1,-1,0,0,0,0];
				var mode="pause";
				var limit =0;
				//var userName = prompt('Entrez votre prénom :');
				var level = 1; 
				var roundWin =false;
				
				
				document.getElementById("frame").style.backgroundImage= "url('/Epicer/images/accueil.jpg')";
								
				function changeLevel (lvl){

					if (lvl==1){
						table [0] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						table [1] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
						table [2] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
						table [3] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,3,0,0];
						table [4] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0];
						table [5] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0];
						table [6] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0];
						table [7] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0];
						table [8] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
						table [9] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2,0,0,0,0,0,0,0];
						table [10] = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
						table [11] = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
						table [12] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
					else if (lvl== 2){
						table [0] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						table [1] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
						table [2] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
						table [3] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
						table [4] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,2,0,0,0,0,0,0,0];
						table [5] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0];
						table [6] =  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
						table [7] =  [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0];
						table [8] =  [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						table [9] =  [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						table [10] = [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						table [11] = [0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,3,0,0,0,0,0,0,0];
						table [12] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}

					var intable="";
					for (y=0; y<=12; y++)
					{
						for (x=0; x<=24; x++)
						{
						intable = intable + "<div class='type"+table[y][x]+"' style='position:absolute; left: "+40*x+"px; top: "+40*y+"px;' id ='"+y+","+x+"'></div>";
						}
					}
					document.getElementById("table").innerHTML=intable;

				} 			
								
				function keydown(e){    // fonction qui explique quoi faire quand une touche de clavier est pressée dans <body>
					e.preventDefault();
					if (mode=="play" ){
						var side; 
						var maryy=mary;
						var marxx=marx;
						switch(e.keyCode) {
							case 39: maryy+=1; side = 1; //placePers(marx,mary,'m1',1);  // fleche droit
							break;
							case 38 :marxx-=1; side = 3; //placePers(marx,mary,'m1',3); // fleche haut
							break;
							case 37: maryy-=1; side = 2; //placePers(marx,mary,'m1',2); // fleche gauche
							break;
							case 40: marxx+=1; side = 3; //placePers(marx,mary,'m1',3); // fleche bas
							break;
							default: 0;
						}
						
						switch (table[marxx][maryy]) {
							case 0: placePers(marxx,maryy,'m1',side); mary=maryy; marx=marxx;
							break;
							case 1: 
							break;
							case 2: 
							break;
							case 3: stopSon('timeOut',1); alert("you win") ; roundWin=true; 
							break;
							default: 0;
							}
					}
				}		
			
				
					
				function pause(){
					mode="pause";
					document.getElementById("start").style.visibility="visible";
				}
				
				function lost(){
					mode="lose";
					document.getElementById("lose").style.visibility="visible";
					document.getElementById('m1').style.visibility="hidden";
				}
				
				function restart(){
					document.getElementById("rstrt").style.visibility="visible";
					document.getElementById("lose").style.visibility="hidden";
				}
				
				function nextLvl(){
					mode="roundwin";
					document.getElementById("nextlvl").style.visibility="visible";
					document.getElementById('m1').style.visibility="hidden";
					level=level+1;
				}
				
				function restart(){
					mode="restart";
					document.getElementById("restart").style.visibility="visible";
					document.getElementById('lose').style.visibility="hidden";
				}
				
			/*	function putUsername(){ 
				document.getElementById("player").innerHTML= "Player: "+ userName;
				}
				*/
			
				function placePers(x_pos, y_pos, id,cl) {
				  var d = document.getElementById(id);
				  d.style.position = "absolute";
				  d.setAttribute("class","move"+cl);
				  d.style.left = 40*y_pos+'px';
				  d.style.top = 40*x_pos+'px';
				}
				
				function placeIc(x_pos, y_pos, id) {
				  var d = document.getElementById(id);
				  d.style.position = "absolute";
				  d.style.left = y_pos+'px';
				  d.style.top = x_pos+'px';
				}
				
				 
				
				/* time countdown */ 
					var milisec = 0; 
					function counttime(){	
					
						if(mode=="play" && limit>=0){
							document.getElementById("time").innerHTML= "Time: "+limit+" . "+milisec;
							milisec--; 
							if(milisec<0){
								limit--;
								milisec=9;
							}
							if(limit<6 && roundWin==false && playTimeOut==false){
								playSon('timeOut', 1); 
								playTimeOut=true; 
							}
							if(limit<0){
								lost();
							}
							if(roundWin==true){
							nextLvl(); 
							}
						setTimeout(counttime,100);
						}
					}
				
				/* le lecteur du son */ 
					function playSon(idPlayer, timeSet) {
						var player = document.querySelector('#' + idPlayer);
						
						if (player.paused) {
						player.currentTime=timeSet;
							player.play();
							//control.textContent = 'Pause';   --> utilisé seulement pour changer le text du bouton control, qu'il n'y a pas ici
						} else {
							player.pause();	
							//control.textContent = 'Play';
						}
					}

					function stopSon(idPlayer,timeSet) {
						var player = document.querySelector('#' + idPlayer);
						
						player.currentTime =timeSet;
						player.pause();
					}
					
					function getMousePosition(event) {
						return {
							x: event.pageX,
							y: event.pageY
						};
					}