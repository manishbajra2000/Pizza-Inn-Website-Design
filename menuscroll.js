
$(document).ready(function(){

	var headerHeight = $('.div1').outerHeight();
	$(".menuContainer").click(function(e){

		var linkHref = $(this).attr('href');
		


		
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}), 1000;

		e.preventDefault();
	});
});