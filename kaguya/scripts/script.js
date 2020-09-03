'use strict';

$(function () {
  $('.toggle-btn').click(function () {
    $(this).toggleClass('toggle-open');
    $('.mobile-menu').toggleClass('active');
  });

  $('.mobile-menu').click(function () {
    $(this).toggleClass('active');
    $('.toggle-btn').toggleClass('toggle-open');
  });
  
  if (window.matchMedia('(min-width: 376px)').matches) {
    $('.update').hide()
    $('.news-item').mouseenter(
      function () {
        $(this).find('p').slideToggle("fast");
      }).mouseleave(
      function () {
        $(this).find('p').slideToggle("fast");
      }
    );
  }

  $('.submission-btn').click(function () {
    $(this).val("TRANSMISSION COMPLETED");
    $(this).addClass('animation');    
  })
});
