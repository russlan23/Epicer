progressBar = {
		
		init: function(){
			var that=this;
			countElmt =$('img').length;
			loadedElmt=0;
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
	 