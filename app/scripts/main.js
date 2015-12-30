'use strict';

$(document).ready(function(){
	// Controller responsive off-canvas navbar

	var $window 	= $(window),
			$html		 	= $('html'),
	 		$header 	= $('header'),
			$modal		= $('.modal');

	$('.open-panel').click(function(){
		$html.addClass('openNav');
	});

	$('.close-panel, #content').click(function(){
		$html.removeClass('openNav');
	});

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


  $window.scroll(function(){
		// console.log("scrollTop:  "+$window.scrollTop());
		// console.log("height:  "+ $window.height());

	  if($window.scrollTop() > 10){
    	$header.css({
				"background-color":"white",
				"background-image":"none",

			})

			console.log($(".navlist"));
			$(".navlist").css({
					"color":"red"
			})

	  } else {
			$header.css({
				"background-color":"transparent",
				"background-image":"linear-gradient(to bottom,rgba(25,25,25,0.95),transparent)"
			})

			$(".navlist").css({
					"color":"white"
			})

		}

  })



});
