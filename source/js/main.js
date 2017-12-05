$(function () {
  'use strict';

  var $slider = $('.service-carusel');
  $slider.on('init', function () {
    mouseWheel($slider);
  }).slick({
    dots: false,
    arrows: false,
    infinite: false
  });

  function mouseWheel($slider) {
    $('.service-carusel').on('wheel', {
      $slider: $slider
    }, mouseWheelHandler);
  }

  function mouseWheelHandler(event) {
    var $slider = event.data.$slider;
    var delta = event.originalEvent.deltaY;
    if (delta > 0 && !$('.slick-slide:last-child').hasClass('slick-current')) {
      event.preventDefault();
      $slider.slick('slickNext');
    } else if (delta < 0 && !$('.slick-slide:first-child').hasClass('slick-current')) {
      event.preventDefault();
      $slider.slick('slickPrev');
    }
  }

});
