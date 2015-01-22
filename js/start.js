function start(){
				
					document.getElementById("start").style.visibility="hidden";	
					document.getElementById("nextlvl").style.visibility="hidden";
					document.getElementById("lose").style.visibility="hidden";
					document.getElementById("restart").style.visibility="hidden";
					
					
					var total_points = 0;
					mode="play";
					roundWin=false;
					playTimeOut=false;
					
					switch (level){ 
						
					case 1 : 
						changeLevel(1);
						document.getElementById("3,22").innerHTML="To Level 2" ;
						marx=10;
						mary=2;
						placePers(marx,mary,'m1',1); 
						document.getElementById('m1').style.visibility="visible";
						//placeIc(350,450,'doc');
						//document.getElementById('doc').style.visibility="visible";	
						//putUsername();
						limit= 15;
						counttime(); 
						
					break; 
					
					case 2 : 
						changeLevel(2);
						document.getElementById("11,17").innerHTML="To Level 3" ;
						marx=10;
						mary=2;
						placePers(marx,mary,'m1',1); 
						document.getElementById('m1').style.visibility="visible";
						//placeIc(350,450,'doc');
						//document.getElementById('doc').style.visibility="visible";	
						limit= 15;
						counttime();
						
					break;
					
					default :0; 
	
					} 
				
				}