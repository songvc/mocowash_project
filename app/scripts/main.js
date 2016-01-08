'use strict';

$(document).ready(function(){

	var $window 	= 	$(window);
	var	$html		 	= 	$('html');
	var $header 	= 	$('header');
	var $modal		= 	$('.modal');
	var $navlist	=		$('.nav-list');
	var $openpanel = $('.open-panel');

	// $openpanel.click(function(){
	// 	$html.addClass('openNav');
	// });
	//
	// $('.close-panel, #content').click(function(){
	// 	$html.removeClass('openNav');
	// });

	// wiring buttons with modal
	$('.btn').click(function(e){
		e.preventDefault();
		if ($modal.is(':visible')){
			$modal.hide();
		}else {
			$modal.show();
		}
	});

	$('.close').click(function(e){
		e.preventDefault();
		$modal.hide();
	});

	// $window.scroll(function(){
	// 	if ($window.scrollTop() > 10){
	// 		$header.css({
	// 			'background-color': 'white',
	// 			'box-shadow': '0 .125rem .25rem rgba(51,61,71,.4)',
	// 			'background-image': 'none'
	// 		});
	//
	// 		$navlist.css({
	// 				'color': 'black'
	// 		});
	//
	// 	} else {
	// 		$header.css({
	// 			'background-color': 'transparent',
	// 			'box-shadow': 'none',
	// 			'background-image': 'linear-gradient(to bottom,rgba(25,25,25,0.95),transparent)'
	// 		});
	//
	// 		$navlist.css({
	// 			'color': 'white'
	// 		});
	// 	}
	//
	// });



});
