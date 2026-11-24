document.addEventListener('DOMContentLoaded', function () {
  const swiperEl = document.querySelector('.reviews-swiper');
  if (!swiperEl || typeof Swiper === 'undefined') return;

  new Swiper('.reviews-swiper', {
    loop: true,
    grabCursor: true,
    keyboard: { enabled: true },
    a11y: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.reviews-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      640: { slidesPerView: 2, spaceBetween: 24 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
    },
  });
});
