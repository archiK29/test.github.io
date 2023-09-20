$(function () {
  $(".header__burger").on("click", function () {
    $(".header__burger").toggleClass("active");
    $(".header__menu").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
  $("#example_id").ionRangeSlider();
});
