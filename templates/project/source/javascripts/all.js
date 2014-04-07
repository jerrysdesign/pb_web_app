// Menu change
$(window).scroll(function() {
  if(($(window).scrollTop()) > 140){
    $('#navigation').addClass('small');
    $('#gototop').css({
      opacity : 1
    });
  } else {
    $('#navigation').removeClass('small');
    $('#gototop').css({
      opacity : 0
    });
  }
});