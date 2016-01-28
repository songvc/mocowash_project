'use strict';

$(document).ready(function(){

	var $window = $(window);
	var $nav = $('nav');
	var $link = $('nav .link');
	var $toggle = $('.toggle');
	var $modal = $('.modal');
	var $servicebottom = $('.service-bottom');
	//update these values if you change these breakpoints in the style.css file (or _layout.scss if you use SASS)
	var MqM = 768;
	var	MqL = 1024;
	// var faqsSections = $('.cd-faq-group');
	var	faqTrigger = $('.cd-faq-trigger');
	var	faqsContainer = $('.cd-faq-items');
	var	faqsCategoriesContainer = $('.cd-faq-categories');
	var	faqsCategories = faqsCategoriesContainer.find('a');
	var	closeFaqsContainer = $('.cd-close-panel');

	// toggle nav menu
	$toggle.on('click', function(e) {
		e.preventDefault();
		$toggle.parent().toggleClass('active');
	});
	// close nav if link is clicked
	$link.on('click', function(e) {
		e.preventDefault();
		$toggle.parent().removeClass('active');
	});

	// smooth scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
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

	// toggle for service & show price
	$servicebottom.click(function(e){
		var $servicebox = $(this).siblings('.service-box');
		e.preventDefault();
		$servicebox.fadeToggle();
	});

	// fixed navbar animation
	$window.scroll(function(){

		if ($window.scrollTop() > 10){
			$nav.css({
				'background-color': 'white',
				'box-shadow': '0 .125rem .25rem rgba(51,61,71,.4)',
				'background-image': 'none'
			});
			$link.css({
				'color': 'black'
			});

		} else {
			$nav.css({
				'background-color': 'transparent',
				'box-shadow': 'none',
				'background-image': 'linear-gradient(to bottom,rgba(25,25,25,0.95),transparent)'
			});

			$link.css({
				'color': 'white'
			});
		}

	});

	function closePanel(e) {
		e.preventDefault();
		faqsContainer.removeClass('slide-in').find('li').show();
		closeFaqsContainer.removeClass('move-left');
		$('body').removeClass('cd-overlay');
	}

	// function updateCategoryPosition() {
	// 	var top = $('.cd-faq').offset().top;
	// 	var	height = $('.cd-faq').height() - $('.cd-faq-categories').height();
	// 	var	margin = 20;
	//
	// 	if( top - margin <= $(window).scrollTop() && top - margin + height > $(window).scrollTop() ) {
	// 		var leftValue = faqsCategoriesContainer.offset().left;
	// 		// var	widthValue = faqsCategoriesContainer.width();
	// 		faqsCategoriesContainer.addClass('is-fixed').css({
	// 			'left': leftValue,
	// 			'top': margin,
	// 			'-moz-transform': 'translateZ(0)',
	// 				'-webkit-transform': 'translateZ(0)',
	// 			'-ms-transform': 'translateZ(0)',
	// 			'-o-transform': 'translateZ(0)',
	// 			'transform': 'translateZ(0)'
	// 		});
	// 	} else if( top - margin + height <= $(window).scrollTop()) {
	// 		var delta = top - margin + height - $(window).scrollTop();
	// 		faqsCategoriesContainer.css({
	// 			'-moz-transform': 'translateZ(0) translateY(' + delta + 'px)',
	// 				'-webkit-transform': 'translateZ(0) translateY(' + delta + 'px)',
	// 			'-ms-transform': 'translateZ(0) translateY(' + delta + 'px)',
	// 			'-o-transform': 'translateZ(0) translateY(' + delta + 'px)',
	// 			'transform': 'translateZ(0) translateY(' + delta + 'px)'
	// 		});
	// 	} else {
	// 		faqsCategoriesContainer.removeClass('is-fixed').css({
	// 			'left': 0,
	// 			'top': 0
	// 		});
	// 	}
	// }
	//
	// function updateSelectedCategory() {
	// 	faqsSections.each(function(){
	// 		var actual = $(this);
	// 		var	margin = parseInt($('.cd-faq-title').eq(1).css('marginTop').replace('px', ''));
	// 		var	activeCategory = $('.cd-faq-categories a[href="#' + actual.attr('id') + '"]');
	// 		var	topSection = (activeCategory.parent('li').is(':first-child')) ? 0 : Math.round(actual.offset().top);
	//
	// 		if ( ( topSection - 20 <= $(window).scrollTop() ) && ( Math.round(actual.offset().top) + actual.height() + margin - 20 > $(window).scrollTop() ) ) {
	// 			activeCategory.addClass('selected');
	// 		}else {
	// 			activeCategory.removeClass('selected');
	// 		}
	// 	});
	// }

	// function updateCategory(){
	// 	updateCategoryPosition();
	// 	updateSelectedCategory();
	// }

	//select a faq section
	faqsCategories.on('click', function(event){
		event.preventDefault();
		var selectedHref = $(this).attr('href');
		var target = $(selectedHref);
		if( $(window).width() < MqM) {
			faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
			closeFaqsContainer.addClass('move-left');
			$('body').addClass('cd-overlay');
		} else {
					$('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200);
		}
	});

	//close faq lateral panel - mobile only
	$('body').bind('click touchstart', function(event){
		if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) {
			closePanel(event);
		}
	});
	faqsContainer.on('swiperight', function(event){
		closePanel(event);
	});

	//show faq content clicking on faqTrigger
	faqTrigger.on('click', function(event){
		event.preventDefault();
		$(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
	});

	//update category sidebar while scrolling
	// $(window).on('scroll', function(){
	// 	if ( $(window).width() > MqL ) {
	// 		(!window.requestAnimationFrame) ? updateCategory() : window.requestAnimationFrame(updateCategory);
	// 	}
	// });

	$(window).on('resize', function(){
		if($(window).width() <= MqL) {
			faqsCategoriesContainer.removeClass('is-fixed').css({
				'-moz-transform': 'translateY(0)',
					'-webkit-transform': 'translateY(0)',
				'-ms-transform': 'translateY(0)',
				'-o-transform': 'translateY(0)',
				'transform': 'translateY(0)'
			});
		}
		if( faqsCategoriesContainer.hasClass('is-fixed') ) {
			faqsCategoriesContainer.css({
				'left': faqsContainer.offset().left
			});
		}
	});

	//contact form
	if( $('.floating-labels').length > 0 ) floatLabels();

	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);
			});
		});
	}

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
	}

	//contact form

	var from,to, subject, text;
	$()


});
