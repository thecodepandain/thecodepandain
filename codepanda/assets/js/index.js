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