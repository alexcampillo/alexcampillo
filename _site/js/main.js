$(document).ready(function() {
	// $('.btn-primary').on('click', function(e) {
	// 	e.preventDefault();
	// 	$('#footer').ScrollTo({
	// 		duration: 1000,
	// 		callback: function() {
	// 			$('.navbar').addClass('animated fadeOutUp')
	// 			$('#footer').addClass('animated shake')
	// 		}
	// 	});
	// });

	$(window).scroll(function() {
		if($(this).scrollTop() > 0) {
			$('.navbar').removeClass('animated fadeInDown').addClass('animated fadeOutUp');
			// $('.navbar');
		} if($(this).scrollTop() <= 0) {
			$('.navbar').removeClass('animated fadeOutUp').addClass('animated fadeInDown');
			// $('.navbar');
		}
	});

});