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
    "Khoản phi",
    "Mức phí ở Hà Nội (đồng)",
    "Mức phí ở TPHCM (đồng)",
    "Mức phí ở Quảng Ninh, Hải Phòng, Lào Cai, Cao Bằng, Lạng Sơn, Sơn La, Cần Thơ (đồng)",
    "Mức phí ở Hà Tĩnh (đồng)",
    "Mức phí ở tỉnh khác (đồng)"
  ]
  const array1 = [
    "Giá Niêm Yết",
    "Phí trước bạ",
    "Phí đăng kiểm",
    "Phí bảo trì đường bộ",
    "Bảo hiểm vật chất xe",
    "Bảo hiểm trách nhiệm dân sự",
    "Phí biển số",
    "Tổng"
  ]
  const array2 = [
    "Thông số",
    "City 1.5",
    "City 1.5 TOP"
  ]
  const array3 = [
    "Kích thước tổng thể D x R x C (mm)",
    "Chiều dài cơ sở (mm)",
    "Khoảng sáng gầm xe (mm)",
    "Bán kính vòng quay tối thiểu (m)",
    "Trọng lượng không tải (kg)",
    "Trọng lượng toàn tải (kg)",
    "Dung tích khoang chứa đồ (lít)",
    "Mâm xe",
    "Lốp xe"
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