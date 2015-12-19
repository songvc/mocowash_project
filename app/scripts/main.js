'use strict';

$(document).ready(function(){
	// Controller responsive off-canvas navbar
	$('.open-panel').click(function(){
		$('html').addClass('openNav');
	});

	$('.close-panel, #content').click(function(){
		$('html').removeClass('openNav');
	});

	$('.btn').click(function(e){
		e.preventDefault();
		if ($('.modal').is(':visible')){
			$('.modal').hide();
		}else {
			$('.modal').show();
		}
	});

	$('.close').click(function(e){
		e.preventDefault();
		$('.modal').hide();
	});


});
