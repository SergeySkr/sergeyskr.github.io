$(document).ready(function(){

  if ($(window).width() >= '1280'){
       $('.slider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 3000,
  		dots: true,
  		centerMode: true,
  		centerPadding: '25%',
  		prevArrow: ".prev-arrow",
 		nextArrow: ".next-arrow",
	});
  }

  $(".links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});