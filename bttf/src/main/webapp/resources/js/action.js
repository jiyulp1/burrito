$(document).ready(function(){

	$('.navbar-nav .dropdown-menu').hide();

	$('.drop1').mouseover(function(){
		$('.dropdown-menu').slideDown();

	});
	$('.dropdown-menu').mouseleave(function(){
		$('.dropdown-menu').hide();
	});
});
