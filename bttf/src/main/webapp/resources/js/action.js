$(document).ready(function(){

	$('.navbar-nav .dropdown-menu').hide();

	$('.drop1').mouseover(function(){
		$('.dropdown-menu').slideDown(1200);

	});
	$('.dropdown-menu').mouseleave(function(){
		$('.dropdown-menu').slideUp(500);
	});
});

$(document).ready(function(){
	$('.navbar-nav .manager_dropdown').hide();
	
	$('.drop2').mouseover(function(){
		$('.manager_dropdown').slideDown(1200);

	});
	$('.manager_dropdown').mouseleave(function(){
		$('.manager_dropdown').slideUp(500);
	});

});






