$(document).ready(function () {
  $(".larger").click(function () {
    $("h1").toggleClass("big");
  });

  $(".smaller").click(function () {
    $("h1").toggleClass("small");
  });

  $(".border").click(function () {
    $("h1").toggleClass("bord");
  });
});
