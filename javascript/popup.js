function checkCookie() {
  if (document.cookie.indexOf("legal=true") !== 0) {
    $('#overlay').css("display", "block");
    $('#yesButton').click(function () {
      $('#overlay').css("display", "none");
      document.cookie = "legal=true";
    });
  }
}

checkCookie();

