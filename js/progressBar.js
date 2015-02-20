
progresBar = {
	countElmt: 0,
	loadedElmt:0,

	init: function(){
		var that = this;
		countElmt =$('img').length;
		
		
		var $progressBarContainer = $('<div/>').attr('id','progress-bar-container');
		 $progressBarContainer.append($('<div/>').attr('id','progress-bar'));
		 $progressBarContainer.appendTo($('#espaceJeu'));
		
			
		$container=$('<div/>').attr('id','progres-bar-elements');
		$container.appendTo($('#espaceJeu'));
		
		$('img').each(function(){
			$('<img/'>)
			.attr('src',$(this).attr('src'))
			.on('load error', function(){
				that.loadedElmt++;
				that.updateProgressBar();
			})
			.appendTo($container)
			;
		});
	
	}
	
	updateProgressBar : function(){
		$('#progress-bar').stop().animate({
		'width':( progresBar.loadedElmt/progresBar.countElmt)*100 +'%'
		});
	}
	
};

progresBar.init();

