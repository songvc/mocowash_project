$(document).ready(function(){
	$(".nav-menu-button").click(function(){
		$(".nav-menu").slideToggle(400, function(){
			$(this).toggleClass("nav-expanded").css("display","");
		});
	});
});