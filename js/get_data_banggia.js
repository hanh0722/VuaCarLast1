var get_banggia_name = document.querySelectorAll('.get_banggia_name');

for (let j = 0; j < get_banggia_name.length; j++) {
    get_banggia_name[j].innerHTML = sessionStorage.getItem('giaxe_get_name');
}
var card_danhba = document.querySelectorAll('.card-danhba img');
var img_get_bg = document.querySelectorAll('.img-fluid');

const data1 = (img) =>{
    for (let i = 0; i < img.length; i++){
        img_get_bg[i].src = img[i];
    }
}


if(sessionStorage.getItem('giaxe_get_name') == 'VinFast'){
    function VinFast(){
       img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/23/mER5FXHc/anh-vin-8e39.jpg';
       img = ['../Img/giaxe/Vinfast/1.jpg','../Img/giaxe/Vinfast/2.jpg','../Img/giaxe/Vinfast/3.jpg','../Img/giaxe/Vinfast/4.jpg','../Img/giaxe/Vinfast/5.jpg'];
     data1(img);
    }
    VinFast();
 }
 if(sessionStorage.getItem('giaxe_get_name') == 'Mercedes'){
     function  Mercedes(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/09/mER5FXHc/mercedes-benz-3caf.png';
        img = ['../Img/giaxe/Mercedes/1.jpg','../Img/giaxe/Mercedes/2.jpg','../Img/giaxe/Mercedes/3.png','../Img/giaxe/Mercedes/4.jpg','../Img/giaxe/Mercedes/5.jpg'];
      data1(img);
     }
     Mercedes();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Volvo'){
     function  Volvo(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2020/12/22/mER5FXHc/anh-nen-2k-11-3-7a68.jpg';
        img = ['../Img/giaxe/volvo/1.jpg','../Img/giaxe/volvo/2.jpg','../Img/giaxe/volvo/3.jpg','../Img/giaxe/volvo/4.jpg','../Img/giaxe/volvo/5.jpg'];
      data1(img);
     }
     Volvo();
  }
 
 //  mai code tiếp
  if(sessionStorage.getItem('giaxe_get_name') == 'Volkswagen'){
     function Volkswagen(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2020/12/22/mER5FXHc/anh-nen-2k-11-3-7a68.jpg';
        img = ['../Img/giaxe/Volkswagen/1.jpg','../Img/giaxe/Volkswagen/2.jpg','../Img/giaxe/Volkswagen/3.jpg','../Img/giaxe/Volkswagen/4.jpg','../Img/giaxe/Volkswagen/5.jpg'];
      data1(img);
     }
     Volkswagen();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Toyota'){
     function Toyota(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/16/mER5FXHc/toyota-965c.jpg';
        img = ['../Img/giaxe/Toyota/1.jpg','../Img/giaxe/Toyota/2.jpg','../Img/giaxe/Toyota/3.jpg','../Img/giaxe/Toyota/4.jpg','../Img/giaxe/Toyota/5.jpg'];
      data1(img);
     }
     Toyota();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Suzuki'){
     function Suzuki(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/19/mER5FXHc/suzuki-9697.jpg';
        img = ['../Img/giaxe/Suzuki/1.png','../Img/giaxe/Suzuki/2.jpg','../Img/giaxe/Suzuki/3.jpg','../Img/giaxe/Suzuki/4.png','../Img/giaxe/Suzuki/5.png'];
      data1(img);
     }
     Suzuki();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Subaru'){
     function Subaru(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/26/mER5FXHc/suzbaru-2130.jpg';
        img = ['../Img/giaxe/Subaru/1.png','../Img/giaxe/Subaru/2.jpg','../Img/giaxe/Subaru/3.jpg','../Img/giaxe/Subaru/4.jpg','../Img/giaxe/Subaru/5.jpeg'];
      data1(img);
     }
     Subaru();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Porsche'){
     function Porsche(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/23/mER5FXHc/anh-vin-8e39.jpg';
        img = ['../Img/giaxe/Porsche/1.jpg','../Img/giaxe/Porsche/2.jpg','../Img/giaxe/Porsche/3.jpg','../Img/giaxe/Porsche/4.jpg','../Img/giaxe/Porsche/5.png'];
      data1(img);
     }
     Porsche();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Peugeot'){
     function Peugeot(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/22/mER5FXHc/peugeot-f09d.png';
        img = ['../Img/giaxe/Peugeot/1.jpg','../Img/giaxe/Peugeot/2.jpg','../Img/giaxe/Peugeot/3.jpg','../Img/giaxe/Peugeot/4.png','../Img/giaxe/Vinfast/5.jpg'];
      data1(img);
     }
     Peugeot();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Nissan'){
     function Nissan(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/22/mER5FXHc/nissan-new-cab0.jpg';
        img = ['../Img/giaxe/Nissan/1.jpg','../Img/giaxe/Nissan/2.jpg','../Img/giaxe/Nissan/3.jpg','../Img/giaxe/Nissan/4.jpg','../Img/giaxe/Nissan/5.png'];
      data1(img);
     }
     Nissan();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Mitsubishi'){
     function Mitsubishi(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/08/mER5FXHc/miy-1361.jpg';
        img = ['../Img/giaxe/Mitsubishi/1.jpg','../Img/giaxe/Mitsubishi/2.jpg','../Img/giaxe/Mitsubishi/3.jpg','../Img/giaxe/Mitsubishi/4.jpg','../Img/giaxe/Mitsubishi/5.jpg'];
      data1(img);
     }
     Mitsubishi();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Mazda'){
     function Mazda(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/16/mER5FXHc/mazda-0ee0.jpg';
        img = ['../Img/giaxe/Mazda/1.jpg','../Img/giaxe/Mazda/2.jpg','../Img/giaxe/Mazda/3.png','../Img/giaxe/Mazda/4.jpg','../Img/giaxe/Mazda/5.jpg'];
      data1(img);
     }
     Mazda();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Maserati'){
     function Maserati(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/02/26/mER5FXHc/maserati-87db.jpg';
        img = ['../Img/giaxe/Maserati/1.jpg','../Img/giaxe/Maserati/2.jpg','../Img/giaxe/Maserati/3.jpg','../Img/giaxe/Maserati/4.jpg','../Img/giaxe/Maserati/5.jpg'];
      data1(img);
     }
     Maserati();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Lexus'){
     function Lexus(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/02/26/mER5FXHc/logo-lexus-3487.jpg';
        img = ['../Img/giaxe/Lexus/1.jpg','../Img/giaxe/Lexus/2.jpg','../Img/giaxe/Lexus/3.png','../Img/giaxe/Lexus/4.jpg','../Img/giaxe/Lexus/5.jpg'];
      data1(img);
     }
     Lexus();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'LandRover'){
     function LandRover(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/12/mER5FXHc/logo-land-rover-e8b3.png';
        img = ['../Img/giaxe/LandRover/1.jpg','../Img/giaxe/LandRover/2.jpg','../Img/giaxe/LandRover/3.jpg','../Img/giaxe/LandRover/4.jpg','../Img/giaxe/LandRover/5.jpg'];
      data1(img);
     }
     LandRover();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Kia'){
     function Kia(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/01/mER5FXHc/kia-2ee3.jpg';
        img = ['../Img/giaxe/Kia/1.jpg','../Img/giaxe/Kia/2.jpg','../Img/giaxe/Kia/3.jpg','../Img/giaxe/Kia/4.jpg','../Img/giaxe/Kia/5.jpg'];
      data1(img);
     }
     Kia();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Jeep'){
     function Jeep(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/04/02/mER5FXHc/jeep-c862.jpg';
        img = ['../Img/giaxe/Jeep/1.jpg','../Img/giaxe/Jeep/2.jpg','../Img/giaxe/Jeep/3.jpg','../Img/giaxe/Jeep/4.jpg','../Img/giaxe/Jeep/5.jpg'];
      data1(img);
     }
     Jeep();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Huyndai'){
     function Huyndai(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/19/mER5FXHc/hyundai-quang-ninh-8e17.jpg';
        img = ['../Img/giaxe/Huyndai/1.jpg','../Img/giaxe/Huyndai/2.jpg','../Img/giaxe/Huyndai/3.jpg','../Img/giaxe/Huyndai/4.jpg','../Img/giaxe/Huyndai/5.jpg'];
      data1(img);
     }
     Huyndai();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Honda'){
     function Honda(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/23/mER5FXHc/anh-vin-8e39.jpg';
        img = ['../Img/giaxe/Honda/1.jpg','../Img/giaxe/Honda/2.jpg','../Img/giaxe/Honda/3.jpg','../Img/giaxe/Honda/4.jpg','../Img/giaxe/Honda/5.jpg'];
      data1(img);
     }
     Honda();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Ford'){
     function Ford(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/19/mER5FXHc/ford-12d6.jpg';
        img = ['../Img/giaxe/Ford/1.jpg','../Img/giaxe/Ford/2.png','../Img/giaxe/Ford/3.jpg','../Img/giaxe/Ford/4.jpg','../Img/giaxe/Ford/5.jpg'];
      data1(img);
     }
     Ford();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'BMW'){
     function BMW(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/30/mER5FXHc/photo-2021-01-09-16-28-04-f22a.jpg';
        img = ['../Img/giaxe/BMW/1.jpg','../Img/giaxe/BMW/2.jpg','../Img/giaxe/BMW/3.jpg','../Img/giaxe/BMW/4.jpg','../Img/giaxe/BMW/5.jpg'];
      data1(img);
     }
     BMW();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'Audi'){
     function Audi(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/23/mER5FXHc/anh-vin-8e39.jpg';
        img = ['../Img/giaxe/Audi/1.jpg','../Img/giaxe/Audi/2.jpg','../Img/giaxe/Audi/3.jpg','../Img/giaxe/Audi/4.jpg','../Img/giaxe/Audi/5.jpg'];
      data1(img);
     }
     Audi();
  }
  if(sessionStorage.getItem('giaxe_get_name') == 'xe tải'){
     function xetai(){
        img1 = 'https://img1.oto.com.vn/crop/85x85/2021/03/23/mER5FXHc/anh-vin-8e39.jpg';
        img = ['../Img/giaxe/xetai/1.jpg','../Img/giaxe/xetai/2.jpg','../Img/giaxe/xetai/3.jpg','../Img/giaxe/xetai/4.jpg','../Img/giaxe/xetai/5.jpg'];
      data1(img);
     }
     xetai();
  }
  for (let i = 0; i < card_danhba.length; i++) {
    card_danhba[i].src = img1;
    }
