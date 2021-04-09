$(document).ready(function () {
  const swiper7 = new Swiper('.swiper-container7', {
    // Optional parameters
        direction: 'horizontal',
        loop: true,
        allowSlidePrev: true,
        scrollbar: false,
    // Navigation arrows
    keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 2,
            spaceBetween: 0
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 2,
            spaceBetween: 0
            },
            // when window width is >= 640px
            640: {
            slidesPerView: 2,
            spaceBetween: 0
            },
            1000:{
                slidesPerView: 4,
                spaceBetween: 0
            }
        }
            
})
});