$(document).ready(function () {
	
	$('#testimonial-slider').owlCarousel({
		items:1,
		itemsDesktop:[1000,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		pagination: false,
		navigation:false,
		slideSpeed:1500,
		autoPlay:true
	});
  $(".b").click(function () {
    $(this).toggleClass("b");
    $(this).toggleClass("b-selected");
  });
});

var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
  // options
  cellalign: 'right',
  pageDots: false,
  groupCells: '20%',
  selectedAttraction: 0.03,
  friction: 0.15,
  lazyLoad: true,
  initialIndex: 3,
  prevNextButtons: false,
  wrapAround: true
});

var flkty = new Flickity('.carousel', {
  // options
});


 $("#carousel-multiple").on("slide.bs.carousel", function (e) {
    var itemsPerSlide = parseInt($(this).attr('data-maximum-items-per-slide')),
      totalItems = $(".carousel-item", this).length,
      reserve = 1,//do not change
      $itemsContainer = $(".carousel-inner", this),
      it = (itemsPerSlide + reserve) - (totalItems - e.to);

    if (it > 0) {
      for (var i = 0; i < it; i++) {
        $(".carousel-item", this)
          .eq(e.direction == "left" ? i : 0)
          // append slides to the end/beginning
          .appendTo($itemsContainer);
      }
    }
  });
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar-button").style.visibility = "visible";
  } else {
	document.getElementById("navbar-button").style.visibility = "hidden";
  }
}