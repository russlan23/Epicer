progressBar = {
		
		init: function(){
			var that=this;
			countElmt =$('img').length;
			loadedElmt=0;
			imLoad=true;
			var $progressBarContainer = $('<div/>').attr('id','progress-bar-container');
			 $progressBarContainer.append($('<div/>').attr('id','progress-bar'));
			 $progressBarContainer.appendTo($('#espaceJeu'));
			
			$container=$('<div/>').attr('id','progress-bar-elements');
			$container.appendTo($('imagesChap'));
			
			$('img').each(function(){
				$('<img/>')
				.attr('src',$(this).attr('src'))
				.on('load error', function(){
					loadedElmt++;
					that.updateProgressBar();
					if(loadedElmt==countElmt-1){
						imLoaded=true;
						start(chapActuel, emplacementChap);
					}
				})
				.appendTo($container)
				;
			});
		
		},
		
		updateProgressBar : function(l,c){
			
			$('#progress-bar').stop().animate({
			'width':( loadedElmt/countElmt)*100 +'%'
			}, function(){
				if(loadedElmt==countElmt){
					setTimeout(function(){
						$('#progress-bar-container').animate({
							'top' : '-8px'
 						},function (){
							$('#progress-bar-container').remove();
							$('#progress-bar-elements').remove();
						});
					},750);
				}	
			});
		}
	};
	
	
	function updateImagesChap(chap){
			switch(chap){
			
				case 1: 	$('#imagesChap').append ('<img src ="/Epicer/images/im101.jpg"/>');
							$('#imagesChap').append ('<img src ="/Epicer/images/im102.jpg"/>');
							$('#imagesChap').append ("<img src ='/Epicer/images/im103.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im104.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im105.jpg'/>");
					break;
				case 2: 
					break;
				case 3: 
					break;
				case 4: 
							$('#imagesChap').append ('<img src ="/Epicer/images/im401.jpg"/>');
							$('#imagesChap').append ('<img src ="/Epicer/images/im402.jpg"/>');
							$('#imagesChap').append ("<img src ='/Epicer/images/im403.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im404.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im405.jpg'/>");
							$('#imagesChap').append ('<img src ="/Epicer/images/im406.jpg"/>');
							$('#imagesChap').append ('<img src ="/Epicer/images/im407.jpg"/>');
							$('#imagesChap').append ("<img src ='/Epicer/images/im408.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im409.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im410.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/im411.jpg'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj51.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj52.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj53.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj54.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj55.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj56.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj57.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj58.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj59.png'/>");
							$('#imagesChap').append ("<img src ='/Epicer/images/mj5/mj510.png'/>");
					break;
				default:
					break;
			}			
		}
	 
	 