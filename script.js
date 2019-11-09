$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 4,
  	loop: true,
  	autoplay: true,
  	nav: true,
  	dots: false,
  	responsive: {
  		0:{
            items: 2,
            dots: true,
            nav: false
        },
        850:{
            items: 3,
            dots: true,
            nav: false
        },
        1200:{
            items: 4,
            nav: true
        }
  	}
  });
});