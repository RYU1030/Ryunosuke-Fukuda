'use strict';

$(function () {
  // ページ遷移時のアニメーション
  $('main').hide().fadeIn(500);

  // ここからハンバーガーメニュー
  $('.toggle-btn').click(function () {
    $(this).toggleClass('toggle-open');
    $('.mobile-menu').toggleClass('active');
  });
  $('.mobile-menu').click(function () {
    $(this).toggleClass('active');
    $('.toggle-btn').toggleClass('toggle-open');
  });
  // ここまでハンバーガーメニュー
  
  // pc版NEWSページの画像ホバー時のアニメーション
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

  // 「SEND」をクリックすると「TRANSMISSION COMPLETED」にボタン文言を変更する
  $('.submission-btn').click(function () {
    $(this).val("TRANSMISSION COMPLETED");
    $(this).addClass('animation');    
  });
  // モバイル画面での制御
  $('.submission-btn-responsive').click(function () {
    $(this).val("TRANSMISSION COMPLETED");
    $(this).addClass('animation');    
  });
});
