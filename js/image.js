$('.page-goods__smallimage').click(function() {
  $('.page-goods__img').attr('src', $(this).attr('rel'));
  $('.page-goods__smallimage').removeClass('active');
  $(this).addClass('active');
});


$('.allforhome-card__img').click(function() {
  $(this).toggleClass('show');
});
