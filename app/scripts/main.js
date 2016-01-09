'use strict';

$(document).ready(function(){

	var $window = $(window);
	var $nav = $('nav');
	var $modal = $('.modal');
	var $servicebox = $('.service-box');
	var $serviceprice = $('.service-price');
	var $pull = $('#pull');
	var	$menu = $('nav ul');
	// var	menuHeight = $menu.height();


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


	$pull.on('click', function(e) {
		e.preventDefault();
		$menu.slideToggle();
	});

	$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && $menu.is(':hidden')) {
      $menu.removeAttr('style');
    }
	});


	// toggle for service & show price
	$servicebox.click(function(e){
		e.preventDefault();
		$(this).addClass('hidden');
	});

	$serviceprice.click(function(e){
		e.preventDefault();
		// console.log("clicked" + $(this));
		// console.log($(this).prev());
		$(this).prev().removeClass("hidden");
	});

	// fixed navbar animation
	$window.scroll(function(){
		if ($window.scrollTop() > 10){
			$nav.css({
				'background-color': 'white',
				'box-shadow': '0 .125rem .25rem rgba(51,61,71,.4)',
				'background-image': 'none'
			});

			$nav.css({
					'color': 'black'
			});

		} else {
			$nav.css({
				'background-color': 'transparent',
				'box-shadow': 'none',
				'background-image': 'linear-gradient(to bottom,rgba(25,25,25,0.95),transparent)'
			});

			$nav.css({
				'color': 'white'
			});
		}

	});



});
