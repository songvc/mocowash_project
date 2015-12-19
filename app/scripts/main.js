$(document).ready(function(){

	// Controller responsive off-canvas navbar
	$(".open-panel").click(function(){
	  $("html").addClass("openNav");
	});

	$(".close-panel, #content").click(function(){
		$("html").removeClass("openNav");
	});

	$('.btn').click(function(e){
		if($('.modal').is(":visible")){
				 $('.modal').hide();
		} else{
				 $('.modal').show();
		}
	});

	$('.close').click(function(e){
		e.preventDefault();
		$('.modal').hide();
	})

	// Icon images
	// $(".btn").click(function(){
	// 	console.log("wow");
	//
	// });


	// var clock = new Vivus('icon-1', {
	// 	file: '../icons/clock.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });
	//
	// var water = new Vivus('icon-2', {
	// 	file: '../icons/water.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });
	//
	// var money = new Vivus('icon-3', {
	// 	file: '../icons/money.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });
	//
	// var icon4 = new Vivus('icon-4', {
	// 	file: '../icons/icon1.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });
	//
	// var icon5 = new Vivus('icon-5', {
	// 	file: '../icons/icon2.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });
	//
	// var icon6 = new Vivus('icon-6', {
	// 	file: '../icons/icon3.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });
	//
	// var icon7 = new Vivus('icon-7', {
	// 	file: '../icons/icon4.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });
	//
	// var icon8 = new Vivus('icon-8', {
	// 	file: '../icons/icon5.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });
	//
	// var icon9 = new Vivus('icon-9', {
	// 	file: '../icons/icon6.svg',
	// 	type: 'delayed',
	// 	duration: 100,
	// 	animTimingFunction: Vivus.EASE
	// });



	// water
	// 	.stop()
	// 	.reset()
	// 	.play(1)
	// money
	// 	.stop()
	// 	.reset()
	// 	.play(1)


});
