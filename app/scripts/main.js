$(document).ready(function(){

	// Controller responsive off-canvas navbar
	$(".open-panel").click(function(){
	  $("html").addClass("openNav");
	});

	$(".close-panel, #content").click(function(){
		$("html").removeClass("openNav");
	})

	// Controller for Fixed navbar when scrolling


});
