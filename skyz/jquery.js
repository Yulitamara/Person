$(function () {
  $("#tabs").tabs();
});

$(function () {
  $(".link").click(function () {
    if ($(this).hasClass("active-link")) {
      return;
    }

    $(".link").removeClass("active-link");
    $(this).addClass("active-link");
  });
});
