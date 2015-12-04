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

	$('.instagram-lite').instagramLite({
    clientID: '4df48b15477149b5a4a0d60c9df64566',
    username: '_alexcampillo',
    limit: 6,
    urls: true
	});

});