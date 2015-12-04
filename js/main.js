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

	$('a.gallery').featherlightGallery({
	    openSpeed: 300,
	    previousIcon: '&#9664;',     /* Code that is used as previous icon */
		nextIcon: '&#9654;',         /* Code that is used as next icon */
		galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
		galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
	});

	$('.instagram').on('willLoadInstagram', function(event, options) {
    console.log(options);
  });
  $('.instagram').on('didLoadInstagram', function(event, response) {
    console.log(response);
  });
  $('.instagram').instagram({
    userId: 1811534762,
    clientId: '4df48b15477149b5a4a0d60c9df64566',
    count: 6,
    accessToken: '009786d2069344bfa47379e7f0074820'
  });

});