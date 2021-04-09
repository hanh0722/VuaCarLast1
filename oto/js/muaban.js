$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
            direction: 'horizontal',
            loop: true,
            allowSlidePrev: true,
            scrollbar: true,
        // Navigation arrows
        keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
            // navigation: none,{
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                slidesPerView: 2,
                spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                slidesPerView: 2,
                spaceBetween: 10
                },
                // when window width is >= 640px
                640: {
                slidesPerView: 4,
                spaceBetween: 10
                },
                1000:{
                    slidesPerView: 9,
                    spaceBetween: 0
                }
                
  }
  
  
        // And if we need scrollbar
          });
          const swiper4 = new Swiper('.swiper-container4', {
            // Optional parameters
                direction: 'horizontal',
                loop: true,
                allowSlidePrev: true,
                scrollbar: true,
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
                    slidesPerView: 1,
                    spaceBetween: 10
                    },
                    // when window width is >= 480px
                    480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                    },
                    1000:{
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                    
      }
      
      
            // And if we need scrollbar
              });
});