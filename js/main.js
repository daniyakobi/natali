$(document).ready(function() {
  $('.service__card').click(function() {
    var id = $(this).attr('data-modal'),
      content = $('.modal-service[data-modal="'+ id +'"]');
    content.addClass('modal-service--active');
    $('body').addClass('lock');
  });
  $('.modal-service__back').click(function() {
    $('.modal-service.modal-service--active').removeClass('modal-service--active');
    $('body').removeClass('lock');
  });
  $('.modal-service__button').click(function() {
    var id = $(this).attr('data-button'),
      content = $('.modal-service__masters[data-button="'+ id +'"]');
    content.addClass('modal-service__masters--active');
  });
  $('.modal-service__masters-close').click(function() {
    $('.modal-service__masters.modal-service__masters--active').removeClass('modal-service__masters--active');
  });
});