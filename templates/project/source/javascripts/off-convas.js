// var $windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
// $('body').width($windowWidth);
// var OBC = (function (OBC, $) {

//   'use strict';

//   OBC.OffCanvasToggle = {
//     init: function (triggers) {
//       $(triggers).click(function (e) {
//         e.preventDefault();
//         OBC.OffCanvasToggle.toggleClasses(this);
//         OBC.OffCanvasToggle.toggleText(triggers);
//       });
//       return triggers;
//     },
//     toggleClasses: function (el) {

//       var dir = $(el).attr('href');
//       if (dir === '#right') {
//         $('body').toggleClass('show-right').removeClass('show-left');
//       }
//       return $('body').attr('class');
//     },
//     toggleText: function (triggers) {
//       var right = $(triggers).filter('[href="#right"]');
      
//       if ($('body').hasClass('show-right')) {
//         $('body').width($windowWidth).animate({ right: "+200" },300);
//       } else {
//         $('body').width($windowWidth).animate({ right: "+0" },300);
//       }
//     }
//   };

//   $(function () {
//     OBC.OffCanvasToggle.init($('.toggle'));
//   });

//   return OBC;

// }(OBC || {}, jQuery));


$(function() {

  var $windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
  var $media_size = 768;
  $('#sidr-wrapper-right').hide();
  $('.toggle').hide();
  if ($windowWidth < $media_size) {
    $('#sidr-wrapper-right').show();
    $('.toggle').show();
    $('.responsive-menus-sidr').hide();
  }

  //$('body').width($windowWidth);
  var OBC = (function (OBC, $) {

    'use strict';

    OBC.OffCanvasToggle = {
      init: function (triggers) {
        $(triggers).click(function (e) {
          e.preventDefault();
          OBC.OffCanvasToggle.toggleClasses(this);
        });
        return triggers;
      },

      toggleClasses: function (el) {

        var dir = $(el).attr('href');
        if (dir === '#right') {
          $('body').toggleClass('show-right').removeClass('show-left');
        }
        return $('body').attr('class');
      }
    };

    $(function () {
      OBC.OffCanvasToggle.init($('.toggle'));
    });

    return OBC;

  }(OBC || {}, jQuery));

  $(window).resize(function() {
    // Window width with legacy browsers.
    $windowWidth = document.documentElement.clientWidth || document.body.clientWidth;

      $media_size = 768;
      $('#sidr-wrapper-right').hide();
      $('.toggle').hide();
      if ($windowWidth < $media_size) {
        $('#sidr-wrapper-right').show();
        $('.responsive-menus-sidr').hide();
        $('#sidr-wrapper-right').show();
        $('.toggle').show();
      }
      else {
        $('#sidr-wrapper-right').hide();
        $('.responsive-menus-sidr').show();
      }

  });

});