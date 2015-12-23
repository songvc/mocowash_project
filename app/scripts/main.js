'use strict';

$(document).ready(function(){
	// Controller responsive off-canvas navbar
	$('.open-panel').click(function(){
		$('html').addClass('openNav');
	});

	$('.close-panel, #content').click(function(){
		$('html').removeClass('openNav');
	});

	// $(window).on('scroll', function() {
	// 	var scrollTop = $(this).scrollTop();
	// 	console.log(scrollTop);
	//
	// 	$('header').each(function() {
	// 		var topDistance = $(this).offset().top;
	//
	// 		if ( (topDistance+100) < scrollTop ) {
	// 		    alert( $(this).text() + ' was scrolled to the top' );
	// 		}
	// 	});
	// });

	// wiring buttons with modal
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
