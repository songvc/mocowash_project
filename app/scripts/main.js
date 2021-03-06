'use strict';

var websiteManager = (function(){

	function navBehavior() {
		var nav = document.querySelector('nav');
		var links = document.getElementsByClassName('link');
		var navlist = document.getElementById('navlist');
		var toggle = document.querySelector('.toggle');

		// fixed navbar animation
		function scrollHandler() {
			if (window.scrollY > 10){
				nav.classList.add('is-scrolled');
			} else {
				nav.classList.remove('is-scrolled');
			}
		}

		// toggle nav menu
		function toggleHandler(e){
			e.stopImmediatePropagation();
			e.preventDefault();
			toggle.parentNode.classList.toggle('is-open');
			if (!nav.classList.contains('is-scrolled')){
				nav.classList.add('is-scrolled');
			}
		}

		// close nav if link is clicked
		function navlistHandler(e) {
			if (e.target && e.target.nodeName === 'A') {
				navlist.parentNode.classList.remove('is-open');
			}
		}

		toggle.addEventListener('click', toggleHandler);
		window.addEventListener('scroll', scrollHandler);
		navlist.addEventListener('click', navlistHandler);
	}

	function serviceBehavior() {
		var serviceButtons = Array.prototype.slice.call(document.querySelectorAll('.service-bottom')); //convert nodelist to arrays
		// toggle for service & show price
		serviceButtons.forEach(function(button){
			button.addEventListener('click', function(e){
				var servicebox = this.previousElementSibling.previousElementSibling;
				if (servicebox.classList.contains('is-faded')) {
					servicebox.classList.remove('is-faded');
				} else {
					servicebox.classList.add('is-faded');
				}
			});
		});
	}

	function faqBehavior() {
		var MqM = 768;
		var	MqL = 1024;
		var $body = $('body');
		var body = document.querySelector('body');
		var faqTriggers = Array.prototype.slice.call(document.querySelectorAll('.cd-faq-trigger'));
		var	faqsContainer = $('.cd-faq-items');
		var	faqsCategoriesContainer = $('.cd-faq-categories');
		var	faqsCategories = faqsCategoriesContainer.find('a');
		var closePanelButton = document.querySelector('.cd-close-panel');
		// function updateCategoryPosition() {
		// 	var top = $('.cd-faq').offset().top;
		// 	var	height = $('.cd-faq').height() - $('.cd-faq-categories').height();
		// 	var	margin = 20;
		//
		// 	if( top - margin <= $window.scrollTop() && top - margin + height > $window.scrollTop() ) {
		// 		var leftValue = faqsCategoriesContainer.offset().left;
		// 		// var	widthValue = faqsCategoriesContainer.innerWidth;
		// 		faqsCategoriesContainer.addClass('is-fixed').css({
		// 			'left': leftValue,
		// 			'top': margin,
		// 			'-moz-transform': 'translateZ(0)',
		// 				'-webkit-transform': 'translateZ(0)',
		// 			'-ms-transform': 'translateZ(0)',
		// 			'-o-transform': 'translateZ(0)',
		// 			'transform': 'translateZ(0)'
		// 		});
		// 	} else if( top - margin + height <= $window.scrollTop()) {
		// 		var delta = top - margin + height - $window.scrollTop();
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
		// 		if ( ( topSection - 20 <= $window.scrollTop() ) && ( Math.round(actual.offset().top) + actual.height() + margin - 20 > $window.scrollTop() ) ) {
		// 			activeCategory.addClass('selected');
		// 		}else {
		// 			activeCategory.removeClass('selected');
		// 		}
		// 	});
		// }
		//
		// function updateCategory(){
		// 	updateCategoryPosition();
		// 	updateSelectedCategory();
		// }

		//select a faq section
		faqsCategories.on('click', function(event){
			event.preventDefault();
			var selectedHref = $(this).attr('href');
			var target = $(selectedHref);
			if( window.innerWidth < MqM) {
				faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
				closePanelButton.classList.add('move-left');
				body.classList.add('cd-overlay');
			} else {
				$('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200);
			}
		});

		//close faq lateral panel - mobile only
		function closePanel(e) {
			e.preventDefault();
			faqsContainer.removeClass('slide-in');
			closePanelButton.classList.remove('move-left');
			body.classList.remove('cd-overlay');
		}

		$body.bind('click touchstart', function(event){
			if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) {
				closePanel(event);
			}
		});

		faqsContainer.on('swiperight', function(event){
			closePanel(event);
		});

		//show faq content clicking on faqTrigger
		faqTriggers.forEach(function(trigger){
			trigger.addEventListener('click', function(event) {
				var content = this.nextElementSibling;
				var arrow = content.parentElement;
				$(this).next('.cd-faq-content').slideToggle(200);

				if (arrow.classList.contains('content-visible')) {
					arrow.classList.remove('content-visible');
				} else {
					arrow.classList.add('content-visible');
				}
			});
		});

		function resizeHandler() {
			if(window.innerWidth <= MqL) {
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
		}
		window.addEventListener('resize', resizeHandler);
	}

	function init() {
		navBehavior();
		serviceBehavior();
		faqBehavior();
	}

	var publicAPI = {
		init: init
	};

	return publicAPI;
})();


$(document).ready(websiteManager.init);
