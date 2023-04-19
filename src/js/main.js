// Slick Banner
$(".banner").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});
function activeSub() {
  let activeSub = $(".subItem");
  activeSub.on("click", function () {
    $(this).toggleClass("active");
    $(this).find(".subItem__list").toggle();
  });
}
$(".header__item-search").on("click", () => {
  $(".popup .popup__list-search").toggle();
});
$(".popup .popup__list-search-close-icon").on("click", () => {
  $(".popup .popup__list-search").toggle();
});
$(".header__item-user").on("click", () => {
  $(".popup .popup__list-user").toggle();
});
$(".popup .popup__list-like .popup__list-like-content-title-close").on(
  "click",
  () => {
    $(".popup .popup__list-like").toggle();
  }
);
$(".header__item-heart").on("click", () => {
  $(".popup .popup__list-like").addClass("active");
  $(".popup .popup__list-like").toggle();
});
(function () {
  activeSub();
  hoverImage();
})();
