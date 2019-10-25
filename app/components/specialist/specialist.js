$('.multiple-items').slick({
  draggable: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  nav: true,
  focusOnSelect: true,
  variableWidth: true,
  speed: 0,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});