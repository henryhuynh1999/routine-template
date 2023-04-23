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
$(".product-list").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  arrows: true,
  rows: 1,
  prevArrow: '<span type="button" class="slick-prev">&#129120;</span>',
  nextArrow: '<span type="button" class="slick-next">&#129122;</span>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        rows: 1,
        dots: false,
        arrows: false,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        rows: 1,
        dots: false,
        arrows: false,
        slidesPerRow: 1,
      },
    },
  ],
});

function activeSub() {
  let activeSub = $(".subItem");
  activeSub.on("click", function () {
    $(this).toggleClass("active");
    $(this).find(".subItem__list").toggle();
  });
}
activeSub();

// Modal ...
$(".header__item-search").on("click", () => {
  $(".popup .popup__list-search").toggleClass('active');
});
$(".popup .popup__list-search-close-icon").on("click", () => {
  $(".popup .popup__list-search").removeClass('active');
});
$(".header__item-user").on("click", () => {
  $(".popup .popup__list-user").toggleClass('active');
});
$(".header__item-heart").on("click", () => {
  $(".popup .popup__list-like").toggleClass('active');
});
$(".header__item-cart").on("click", () => {
  $(".popup .popup__list-cart").toggleClass('active');
});
$(".popup .popup__list-like .popup__list-like-content-title-close").on(
  "click",
  () => {
    $(".popup .popup__list-like").removeClass('active');
  }
);
$(".popup .popup__list-cart .popup__list-cart-content-title-close").on(
  "click",
  () => {
    $(".popup .popup__list-cart").removeClass('active');
  }
);
$(".header__left").hide();
// function header fixed
$(window).scroll(() => {
  if ($(this).scrollTop() > 300) {
    $(".header").addClass("active");
    if ($(window).width() > 768) {
      $(".header__left").show();
    }
    $(".header__logo-black").show();
    $(".header__right .header__item").css("color", "#000");
    $(".header__right .header__item-search-input").css(
      "border-bottom",
      "1px solid black"
    );
    $(".nav__mobile-line").addClass("active");
  } else {
    $(".header__left").hide();
    $(".header").removeClass("active");
    $(".header__logo-black").hide();
    $(".header__right .header__item").css("color", "#fff");
    $(".header__right .header__item-search-input").css(
      "border-bottom",
      "1px solid white"
    );
    $(".nav__mobile-line").removeClass("active");
  }
});
