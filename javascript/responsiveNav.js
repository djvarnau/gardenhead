var width = $(document).width();

$(window).resize(function() {
  width = $(document).width();
  if (width >= 805) {
    $('.navLink').css("display", "block");
  } else if (width < 805) {
    $('.navLink').css("display", "none");
  }
});

$('#menu').click(function() {
  if ($('#menu div').hasClass("downArrow")) {
    $('.navLink').slideDown();
    $('#menu div').toggleClass("downArrow");
    $('#menu div').toggleClass("upArrow");
  } else if ($('#menu div').hasClass("upArrow")) {
    $('.navLink').slideUp();
    $('#menu div').toggleClass("downArrow");
    $('#menu div').toggleClass("upArrow");
  }
});

