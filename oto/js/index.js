$(document).ready(function () {
    $('.banner').hover(function () {
        $('.hover_banner').addClass('len');
            
        }, function () {
            $('.hover_banner').removeClass('len');
        }
    );
    $('.search_hover').slideUp();
    $('.search_to1').click(function (e) { 
        e.preventDefault();
        $(this).next().slideToggle();
    });
    
    var search_to1 = document.querySelector('.text1');
    var active = document.querySelectorAll('.ul_hover2 a');
    var text2 = document.querySelector('.text2');
    var active2 = document.querySelectorAll('.ul_hover3 a');
    for (let i = 0; i < active.length; i++) {
       active[i].onclick = function (e) {
           e.preventDefault();
           search_to1.innerHTML = active[i].innerHTML;
           $('.search_hover2').slideUp();
       }
    
    }
    for (let i = 0; i < active2.length; i++) {
        active2[i].onclick = function (e) {
            e.preventDefault();
            text2.innerHTML = active2[i].innerHTML;
            $('.search_hover3').slideUp();
        }
     
     }
     // swiper js
     const swiper = new Swiper('.swiper-container', {
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
                slidesPerView: 1,
                spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                slidesPerView: 1,
                spaceBetween: 20
                },
                // when window width is >= 640px
                640: {
                slidesPerView: 2,
                spaceBetween: 20
                },
                1000:{
                    slidesPerView: 3,
                    spaceBetween: 20
                }
                
  }
  
  
        // And if we need scrollbar
          });
            const swiper2 = new Swiper('.swiper-container2', {
            // Optional parameters
                direction: 'horizontal',
                loop: true,
                allowSlideNext: true,
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
                    spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                    },
                    1000:{
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }
            });
            const swiper3 = new Swiper('.swiper-container3', {
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
                        spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                        },
                        1000:{
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                })
});