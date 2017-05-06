// var bigimage = document.querySelector(".page-goods__img");
// var smallimage = document.querySelector(".page-goods__smallimage");

$('.page-goods__smallimage').click(function() {
  $('.page-goods__img').attr('src', $(this).attr('rel'));
  $('.page-goods__smallimage').removeClass('active');
  $(this).addClass('active');
});
