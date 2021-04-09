const swiper = new Swiper('.swiper-container', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
const setChecked = (list, check) =>{
  for(let i = 0; i < list.length; i++){
    check[i] = false;
  }
}
// const border = () =>{
//   const check = [];
//   const bottom = document.querySelectorAll(".list-voucher-click li");
//   for(let i = 0; i < bottom.length; i++){
//       setChecked(bottom, check);
//       bottom[i].addEventListener("click", () =>{

//         check[i] = true;
//         bottom[i].classList.add("click-change-color");
//       })
//   }
// }
// border();

$(function() {
  $('.list-voucher-click li').click( function() {
    $(this).addClass('click-change-color').siblings().removeClass('click-change-color');
  });
});


