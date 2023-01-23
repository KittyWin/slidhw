
 $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-for'
  });
  $('.slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    
    centerMode: true,
    focusOnSelect: true,
  });