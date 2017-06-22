$(document).ready(function() {
  $("#button").click(function() {
    $("#triangle-down").addClass("usenand");
    $("#triangle-up").addClass("usenand");
    $('content').addClass('krassInefade');
    $("#triangle-up").delay(1300).fadeOut();
    $("#title").fadeOut(300);
    $("#triangle-down").delay(1300).fadeOut();
    $("#button").addClass("toMenu");
    $("#button").text('+');
    setTimeout(function() {
      $("#button").attr("id", "menu");
    }, 1);
  });

  $("#menuClose, #menuContent, #menuContent a").click(function() {
    $("#menu").removeClass("menuTransition");
    $("#menuContent").fadeOut(200);
    $("#menu").text('+');
    $("#menu.toMenu").css('transition', '.3s ease-in-out');
  });

  $('a').click(function() {
    $('html, body').delay(100).animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
  });

});

$(document).on("click", "#menu", function() {
  $("#menu").addClass("menuTransition");
  $("#menuContent").delay(100).fadeIn(1);
  $("#menu").text(' ');
});