'use strict';

$(function () {
  $('.toggle-btn').click(function () {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.mobile-menu').addClass('active');
      } else {
          $('.mobile-menu').removeClass('active');
      }
  });
});

$(function () {
  $('.mobile-menu').click(function () {
    $(this).toggleClass('active');
  });
});