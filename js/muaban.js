$(document).ready(function () {
    const swiper = new Swiper('.swiper-container6', {
        // Optional parameters
            direction: 'horizontal',
            loop: true,
            allowSlidePrev: true,
            scrollbar: true,
            allowSlideNext: true,
            allowTouchMove: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
        // Navigation arrows
        keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
            // navigation:{
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

// create table
const tableCost = () =>{
  const table = document.querySelectorAll(".cost-table");
  const array = [
    "Kho???n phi",
    "M???c ph?? ??? H?? N???i (?????ng)",
    "M???c ph?? ??? TPHCM (?????ng)",
    "M???c ph?? ??? Qu???ng Ninh, H???i Ph??ng, L??o Cai, Cao B???ng, L???ng S??n, S??n La, C???n Th?? (?????ng)",
    "M???c ph?? ??? H?? T??nh (?????ng)",
    "M???c ph?? ??? t???nh kh??c (?????ng)"
  ]
  const array1 = [
    "Gi?? Ni??m Y???t",
    "Ph?? tr?????c b???",
    "Ph?? ????ng ki???m",
    "Ph?? b???o tr?? ???????ng b???",
    "B???o hi???m v???t ch???t xe",
    "B???o hi???m tr??ch nhi???m d??n s???",
    "Ph?? bi???n s???",
    "T???ng"
  ]
  const array2 = [
    "Th??ng s???",
    "City 1.5",
    "City 1.5 TOP"
  ]
  const array3 = [
    "K??ch th?????c t???ng th??? D x R x C (mm)",
    "Chi???u d??i c?? s??? (mm)",
    "Kho???ng s??ng g???m xe (mm)",
    "B??n k??nh v??ng quay t???i thi???u (m)",
    "Tr???ng l?????ng kh??ng t???i (kg)",
    "Tr???ng l?????ng to??n t???i (kg)",
    "Dung t??ch khoang ch???a ????? (l??t)",
    "M??m xe",
    "L???p xe"
  ]
  table.forEach(items =>{
    for(let i = 0; i < 9; i++){
      const tr = document.createElement("tr");
      for(let j = 0; j < 6; j++){
        if(i === 0){
          const th = document.createElement("th");
          th.textContent = array[j];
          tr.appendChild(th);
        }
        else{
          const td = document.createElement("td");
          // change 1 into the number
          j === 0 ? td.textContent = array1[i-1] : td.textContent = 1;
          tr.appendChild(td);
        }
      }
      items.appendChild(tr);
    }
  })

  const table2 = document.querySelectorAll(".dimension");
  table2.forEach(items =>{
    for(let i = 0; i < array3.length + 1; i++){
      const tr = document.createElement("tr");
      if(i === 0){
        for(let j = 0; j < array2.length; j++){
          const th = document.createElement("th");
          th.textContent = array2[j];
          tr.appendChild(th);
        }
      }
      else if(i === 5){
        for(let a = 0; a < array2.length; a++){
          const td = document.createElement("td");
          a === 0 ? td.textContent = array3[i-1] : td.textContent = "1";
          tr.appendChild(td);
        }
      }
      else{
        for(let k = 0; k < array2.length - 1; k++){
          const td = document.createElement("td");
          if(k >= 1){
            td.setAttribute("colspan", 2);
          }
          k === 0 ? td.textContent = array3[i-1] : td.textContent = "1";
          tr.appendChild(td);
        }
      }
      items.appendChild(tr);
    }
  })
}
tableCost();