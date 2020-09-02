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
});
