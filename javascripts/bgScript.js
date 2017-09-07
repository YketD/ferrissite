$(function() {
	$('img').on('click', function() {
		$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
		$('#enlargeImageModal').modal('show');
	});
});

$(document).ready(function(){
	// $('.soon-logo-photo').attr('src', function(i,a){
    	// $(this).attr('src','images/soon.gif'	).removeClass('preload').attr('src',a);
	// });
	// $('.photo-logo').attr('src', function(i,a){
	// 	$(this).attr('src','images/photo.gif'	).removeClass('preload').attr('src',a);
	// });
	// $('.video-logo').attr('src', function(i,a){
	// 	$(this).attr('src','images/video.gif'	).removeClass('preload').attr('src',a);
	// });
	// $('.contact-logo').attr('src', function(i,a){
	// 	$(this).attr('src','images/contact.gif'	).removeClass('preload').attr('src',a);
	// });
	// $('.soon-video-logo').attr('src', function(i,a){
	// 	$(this).attr('src','images/soon1.gif'	).removeClass('preload').attr('src',a);
	// });
    $('.preload').attr('src', function(i,a){
        $(this).attr('src','').removeClass('preload').attr('src',a);
    });
	$('#start-menu, video').fadeIn(800);



});
var src;
