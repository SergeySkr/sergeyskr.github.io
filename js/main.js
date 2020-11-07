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

  $(".g_imgs").click(function(){

  	let id = $(this).attr('id');
  	var idNum = id[6];
  	switch(idNum){
  		case "1":
  			$(".link").attr("href", "https://www.instagram.com/anastasiiapushko/?hl=ru");
  		break;	
  		case "2":
  			$(".link").css("display", "none");
  		break;
  		case "3":
  			$(".link").attr("href", "https://www.instagram.com/sergey.skr2002/?hl=ru");
  		break;
  		case "4":
  			$(".link").attr("href", "https://www.instagram.com/anastasiiapushko/?hl=ru");
  		break;
  		case "5":
  			$(".link").attr("href", "https://www.instagram.com/sergey.skr2002/?hl=ru");
  		break;
  		case "6":
  			$(".link").attr("href", "https://www.instagram.com/sergey.skr2002/?hl=ru");
  		break;
  		case "7":
  			$(".link").attr("href", "https://instagram.com/blaisemorgan24?igshid=g0ga9d7tq0aq");
  		break;
  		case "8":
  			$(".link").attr("href", "https://www.instagram.com/anastasiiapushko/?hl=ru");
  		break;
  	}
  	//alert("../images/" + id + ".jpg");

  	$(".popUp-cover").css("display", "grid");
  	$(".before").css("background-image", "url('images/before_" + id + ".jpg')");
  	$(".after").css("background-image", "url('images/" + id + ".jpg')");

  });

  $(".popUp > .after > .close").click(function(){
  	$(".link").css("display", "grid");
  	$(".popUp-cover").css("display", "none");
  });

});