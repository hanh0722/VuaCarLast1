var click = document.querySelectorAll('.muabanoto_get a');

for (let i = 0; i < click.length; i++) {
    console.log(click[i]);
    click[i].onclick = function (){
        sessionStorage.setItem('click',click[i].innerHTML);
    }
    
};

var get_name = document.querySelector('.get_name');
get_name.innerHTML = sessionStorage.getItem('click');// gán click
var img_get = document.querySelectorAll('.img_get');
var price_get = document.querySelectorAll('.price_get');
var name_get  =document.querySelectorAll('.name_get');
var get_p = document.querySelector('.get_p');
var get_link = document.querySelector('.get_link');
get_p.innerHTML = sessionStorage.getItem('click');
get_link.innerHTML = sessionStorage.getItem('click');
// lấy dữ liệu qua các trang
const data = (name, img, price) =>{
    for (let i = 0; i < name.length; i++){
        img_get[i].src = img[i];
        name_get[i].innerHTML = name[i];
        price_get[i].innerHTML = price[i];
    }
}
if (get_name.innerHTML=='Honda CRV') {
    function hondaCRV(){
        var name = ['Siêu khuyến mại - Honda CRV 2021 giảm 80 triệu tiền mặt, phụ kiện, đủ màu giao ngay','Giá xe Honda CRV 2021 - ưu đãi dịp lễ 30/4 tiền mặt lên tới 100tr - hỗ trợ 50% phí trước bạ - sẵn xe giao ngay','Siêu khuyến mại Honda CRV 2021 - giá tốt nhất Hà Nội - giảm 100 triệu tiền mặt - tặng bảo hiểm thân vỏ, phụ kiện'];
        var img = ['../Img/hondaCRV/1.jpg','../Img/hondaCRV/2.jpg','../Img/hondaCRV/3.jpg'];
        var price = ['998 triệu','1 tỉ 118 tr','800 triệu'];
        data(name, img, price);
    }
    hondaCRV();
}
if(get_name.innerHTML=='Toyota Vios'){
    function TOYOTAVIOS() {
        var name = ['Toyota Tiền Giang - Toyota Vios 1.5G CVT 2021 nhiều ưu đãi hấp dẫn, giao ngay','Toyota Vios tặng bảo hiểm thân vỏ - góp chỉ từ 5.2tr tháng - xe có sẵn giao ngay','Cần bán Toyota Vios 1.5G năm 2016, 435 triệu'];
        var img = ['../Img/TOYOTAVIOS/1.jpg','../Img/TOYOTAVIOS/2.jpg','../Img/TOYOTAVIOS/3.jpg'];
        var price = ['998 triệu','1 tỉ 118 tr','800 triệu'];
        data(name, img, price);
    }
    TOYOTAVIOS();
}
if(get_name.innerHTML=='Toyota Fortuner'){
    function ToyotaFortuner() {
        var name = ['Chính chủ cần bán Toyota Fortuner sản xuất 2011, màu đỏ chính chủ, 447tr','Bán Toyota Fortuner sản xuất năm 2015, giá 710tr','Bán Toyota Fortuner Sportivo 2 cầu máy 2.7 số tự động đời T9/2012 màu trắng tuyệt đẹp mới 80%'];
        var img = ['../Img/ToyotaFortuner/1.jpg','../Img/ToyotaFortuner/2.jpeg','../Img/ToyotaFortuner/3.jpg'];
        var price = ['447 triệu','710 triệu','559 triệu'];
        data(name, img, price);
    }
    ToyotaFortuner();
}
if(sessionStorage.getItem('click')=='Ford Ranger'){
    function FordRanger() {
        var name = ['Bán Ford Ranger Wildtrak 2.0L 4x4 AT, năm sản xuất 2021, giá chỉ 900 triệu','Bán Ford Ranger XLS 2.2L 4x2 AT năm 2021 - Đủ màu giao ngay','Bán Ford Ranger Wildtrack đời mới 2021, cam kết giá tốt nhất khu vực miền Bắc, hỗ trợ vay ngân hàng lãi suất cực tốt'];
        var img = ['../Img/FordRanger/1.jpg','../Img/FordRanger/2.jpg','../Img/FordRanger/3.jpg'];
        var price = ['998 triệu','1 tỉ 118 tr','800 triệu'];
        data(name, img, price);
    }
    FordRanger();
}
if(sessionStorage.getItem('click')=='Acura'){
    function Acura() {
        var name = ['Cần bán xe Acura ZDX SX 2010, màu trắng giá 1 tỷ 130 triệu','Cần bán xe Acura MDX năm 2008 còn mới, 535 triệu','Cần bán gấp Acura MDX 2007, màu đen, xe nhập '];
        var img = ['../Img/Acura/1.jpg','../Img/Acura/2.jpg','../Img/Acura/3.jpg'];
        var price = ['1 tỉ 130 triệu','535 tr','550 triệu'];
        data(name, img, price);
    }
    Acura();
}


// còn lại thì các e tự sửa nhé
if(sessionStorage.getItem('click')=='Audi'){
    function Audi() {
        var name = ['Audi A6 model 2016 - from mới - đèn sương cá cực đẹp','Bán ô tô Audi Q7 đời 2014, nhập khẩu nguyên chiếc','Bán xe Audi Q7 2.0 model 2017, giá thanh lý'];
        var img = ['../Img/audi/1.jpeg','../Img/audi/2.jpg','../Img/audi/3.jpg'];
        var price = ['1 tỉ 229 triệu','1 tỉ 600 tr','2 tỉ 350 triệu'];
        data(name, img, price);
    }
    Audi();
}
if(sessionStorage.getItem('click')=='BMW'){
    function BMW() {
        var name = ['Bán BMW X4 đời 2020, mới chạy 14.000km, giữ gìn như mới','BMW X3 2021 màu trắng, nhập khẩu nguyên chiếc, xe có sẵn giao ngay trong tháng','BMW Hải Phòng - BMW 7 Series 2021 sẵn, giao ngay toàn quốc, giá tốt nhất miền Bắc','BMW 420i GranCoupe - mẫu Sedan với thiết kế coupe thể thao đột phá, khuyến mãi hấp dẫn','BMW X3 2020 - Phiên bản nâng cấp option hoàn toàn mới','Cần bán gấp BMW 325i năm sản xuất 2003'];
        var img = ['../Img/bmw/1.jpg','../Img/bmw/2.jpeg','../Img/bmw/3.jpg','../Img/bmw/4.jpg','../Img/bmw/5.jpg','../Img/bmw/6.jpg'];
        var price = ['998 triệu','1 tỉ 118 tr','800 triệu'];
        data(name, img, price);
    }
    BMW();
}
if(sessionStorage.getItem('click')=='Chevrolet'){
    function Chevrolet() {
        var name = ['Cần bán Chevrolet Cruze sản xuất năm 2018, xe gia đình, 425 triệu','Bán Chevrolet Spark đời 2009','Cần bán Chevrolet Captiva năm 2009, số tự động, nhập khẩu, 295 triệu'];
        var img = ['../Img/Chevrolet/1.jpg','../Img/Chevrolet/2.jpg','../Img/Chevrolet/3.jpg'];
        var price = ['998 triệu','1 tỉ 118 tr','800 triệu'];
        data(name, img, price);
    }
    Chevrolet();
}
if(sessionStorage.getItem('click')=='Daewoo'){
    function Daewoo() {
        var name = ['Cần bán gấp Daewoo Lacetti năm 2010, nhập khẩu','GĐ cần bán xe Daewoo Gentra, không lỗi nhỏ giá hợp lý','Daewoo Magnus 2004 xe còn đẹp'];
        var img = ['../Img/Daewoo/1.jpg','../Img/Daewoo/2.jpg','../Img/Daewoo/3.jpg'];
        var price = ['168 triệu','150 triệu','125 triệu'];
        data(name, img, price);
    }
    Daewoo();
}
if(sessionStorage.getItem('click')=='Dongfeng (DFM)'){
    function Dongfeng() {
        var name = ['Bán Dongfeng Hoàng Huy 3 chân 2015 xe nhà chạy giữ gìn cực đẹp, lốp mới','Bán xe tải Dongfeng Hoàng Huy B180 9 tấn nhập khẩu thùng dài 7.5 - xe có sẵn, giao tận nhà - bỏ vốn ít nhận xe mới 100%','Bán xe Trường Giang 8 tấn thùng dài 8m sơn zin, lốp đẹp cả dàn'];
        var img = ['../Img/Dongfeng/1.jpg','../Img/Dongfeng/2.jpg','../Img/Dongfeng/3.jpg'];
        var price = ['750 triệu','910 triệu','485 triệu'];
        data(name, img, price);
    }
    Dongfeng();
}
if(sessionStorage.getItem('click')=='Honda'){
    function Honda() {
        var name = ['Cần bán Honda City năm 2018, giá 495tr', 'Cần bán xe Honda City Top sx 2018', 'Bán Honda City sản xuất 2016, giá tốt'];
        var img = ['../Img/Honda/honda1.jpg', '../Img/Honda/honda2.jpg', '../Img/Honda/honda3.jpg'];
        var price = ['495 triệu', '515 triệu', '400 triệu'];
        data(name, img, price);
    }
    Honda();
}
if(sessionStorage.getItem('click')=='Huyndai'){
    function Huyndai() {
        var name = ['[Hyundai Ngọc Hồi] Santa Fe 2021- Khuyến mãi 60 triệu - Sẵn xe giao ngay - Bảo hành xe 5 năm', 'Hyundai Accent 1.4 AT đặc biệt 2021, giá tốt nhất miền Bắc, tặng gói phụ kiện chính hãng, hỗ trợ trả góp 85%', 'Chính chủ bán Hyundai Universe 2012 tự động'];
        var img = ['../Img/Huyndai/1.jpg', '../Img/Huyndai/2.jpg', '../Img/Huyndai/3.jpg'];
        var price = ['981 triệu', '535 triệu', '1 tỉ 790 tr'];
        data(name, img, price);
    }
    Huyndai();
}
if(sessionStorage.getItem('click')=='Isuzu'){
    function Isuzu() {
        var name = ['Chính chủ bán Isuzu Hi lander năm sản xuất 2004, màu đen, nhập khẩu', 'Cần bán xe Isuzu Hi lander sản xuất 2004, giá tốt','Cần bán Isuzu Trooper năm 2003'];
        var img = ['../Img/isuzu/1.jpeg', '../Img/isuzu/2.jpg', '../Img/isuzu/3.jpg'];
        var price = ['200 triệu', '150 triệu', '125 triệu'];
        data(name, img, price);
    }
    Isuzu();
}

if(sessionStorage.getItem('click')=='Kia'){
    function Kia() {
        var name = ['Kia Hà Nội - Kia Cerato 2021 All New giao xe ngay, rinh xe ngay với 230 triệu, tặng 1 năm BHTV,...', 'Kia Soluto 2021, ưu đãi 30tr tiền mặt, vay tối đa 80%, trả góp chỉ từ 145tr, đủ màu, giao ngay','Kia Hà Nội - Kia Sorento All-New lăn bánh chỉ từ 216 triệu đồng, hỗ trợ ngân hàng 80%, tổng ưu...'];
        var img = ['../Img/kia/1.jpg', '../Img/kia/2.jpg', '../Img/kia/3.jpg'];
        var price = ['544 triệu', '369 triệu', '1 tỉ 79 tr'];
        data(name, img, price);
    }
    Kia();
}

if(sessionStorage.getItem('click')=='LandRover'){
    function LandRover() {
        var name = ['Bán LandRover Discovery LR4 đăng ký 2016', 'LandRover Discovery Sport Luxury cực sang trọng, full option không thiếu món gì, nhà trùm...','Cần bán lại xe LandRove HSE sản xuất 2014, đi giữ gìn 1 chủ từ đầu'];
        var img = ['../Img/landrover/1.jpg', '../Img/landrover/2.jpg', '../Img/landrover/3.jpg'];
        var price = ['2 tỉ 850 tr', '1 tỉ 720 tr', '2 tỉ 800 tr'];
        data(name, img, price);
    }
    LandRover();
}
if(sessionStorage.getItem('click')=='BMW 320i'){
    function BMW320i() {
        var name = ['Cần bán lại xe BMW 3-Series 320i 2008, màu bạc'];
        var img = ['../Img/bmw/8.jpg'];
        var price = ['335 triệu'];
        data(name, img, price);
    }
    BMW320i();
}
if(sessionStorage.getItem('click')=='Mercedes C200'){
    function MercedesC200() {
        var name = ['Mercedes C200 sx 2015 màu đen, nội thất kem, nguyên bản từ đầu đến cuối, lăn bánh 60.000 km...', 'Bán xe Mercedes C200 năm 2012, màu đen chính chủ, 595 triệu', 'Xe Mercedes C200 sản xuất năm 2012, màu đen'];
        var img = ['../Img/MercedesC200/1.jpg', '../Img/MercedesC200/2.jpg', '../Img/MercedesC200/3.jpg'];
        var price = ['985 triệu', '595 triệu', '545 triệu'];
        data(name, img, price);
    }
    MercedesC200();
}
if(sessionStorage.getItem('click')=='Mercedes C300'){
    function MercedesC300() {
        var name = ['Cần bán Mercedes C300 sản xuất năm 2020', 'Cần bán gấp Mercedes C300 đời 2019, màu đỏ còn mới', 'Bán ô tô Mercedes C300 2013, màu đen còn mới, giá tốt'];
        var img = ['../Img/MercedesC300/1.jpg', '../Img/MercedesC300/2.jpg', '../Img/MercedesC300/3.jpg'];
        var price = ['1 tỉ 969 tr', '1 tỉ 739 tr', '785 triệu'];
        data(name, img, price);
    }
    MercedesC300();
}
if(sessionStorage.getItem('click')=='Mercedes E200'){
    function MercedesE200() {
        var name = ['Bán Mercedes E200 sản xuất năm 2008', 'Bán ô tô Mercedes E200 đời 2013, màu bạc, 920tr', 'Cần bán xe Mercedes E200 năm 2018, màu đen, xe nhập'];
        var img = ['../Img/MercedesE200/1.jpg', '../Img/MercedesE200/2.jpg', '../Img/MercedesE200/3.jpg'];
        var price = ['355 triệu', '920 triệu', '1 tỉ 750 tr'];
        data(name, img, price);
    }
    MercedesE200();
}
if(sessionStorage.getItem('click')=='Lexus LX570'){
    function LexusLX570() {
        var name = ['Lexus LX 570 Super Sport, giá tốt, giao xe ngay', 'Lexus LX570 Super Sport sản xuất 2021, mới 100%, xe giao ngay giá tốt', 'Cần bán xe Lexus LX 570 năm 2018, màu vàng, nhập khẩu'];
        var img = ['../Img/lexus/1.jpg', '../Img/lexus/2.jpg', '../Img/lexus/3.jpg'];
        var price = ['9 tỉ 250 tr', '3 tỉ 650 tr', '9 tỉ 100 tr'];
        data(name, img, price);
    }
    LexusLX570();
}
if(sessionStorage.getItem('click')=='Lexus'){
    function lexus() {
        var name = ['Lexus RX300 giao ngay chính hãng 2021', '[Lexus Thăng Long] mua bán Lexus ES250 2021, giao ngay, chính hãng', 'Bán Lexus LX 570 2021 Super Sport MBS 4 ghế, LH Ms Hương xe sản xuất 2021 giá tốt, giao...'];
        var img = ['../Img/lexus/4.jpg', '../Img/lexus/5.jpg', '../Img/lexus/6.jpg'];
        var price = ['3 tỉ 180 tr', '2 tỉ 540 tr', '10 tỉ 99 tr'];
        data(name, img, price);
    }
    lexus();
}
if(sessionStorage.getItem('click')=='Mazda'){
    function Mazda() {
        var name = ['Mazda Biên Hòa - New Mazda 2 2021 nhập khẩu Thái Lan nguyên chiếc - tặng BHVC - hỗ trợ...', 'All New Mazda 3 ưu đãi 120tr, tặng 1 năm BHVC...', 'Bán xe Mazda 2 Hatchback, màu trắng'];
        var img = ['../Img/mazda/1.jpg', '../Img/mazda/2.jpg', '../Img/mazda/3.jpg'];
        var price = ['465 triệu', '659 triệu', '430 triệu'];
        data(name, img, price);
    }
    Mazda();
}
if(sessionStorage.getItem('click')=='Mercedes-Benz'){
    function MercedesBenz() {
        var name = ['Mercedes Benz GLC300 2021, giảm tiền mặt cực lớn, xe đủ màu giao ngay toàn miền Bắc', 'Mercedes-Benz GLC 200 4Matic 2021, giảm tiền mặt cực lớn, xe đủ màu giao ngay toàn miền...', 'Mercedes-Benz C180 AMG new 2021 - Xe đủ màu giao ngay toàn miền Bắc - Tặng 50% thuế...'];
        var img = ['../Img/MercedesBenz/1.jpg', '../Img/MercedesBenz/2.jpg', '../Img/MercedesBenz/3.jpg'];
        var price = ['2 tỉ 499 tr', '2 tỉ 99 tr', '1 tỉ 499 tr'];
        data(name, img, price);
    }
    MercedesBenz();
}
if(sessionStorage.getItem('click')=='Mitsubishi'){
    function Mitsubishi() {
        var name = ['Bán tải Mitsubishi Triton lăn bánh chỉ từ 160tr', 'Mitsubishi Hà Nội - Mitsubishi Attrage 2021 giảm 50% phí trước bạ hết tháng 3 + Phụ kiện hấp...', 'Mitsubishi Grandis 8 chỗ 2010, số tự động, mới 99%...'];
        var img = ['../Img/Mitsubishi/1.jpg', '../Img/Mitsubishi/2.jpg', '../Img/Mitsubishi/3.jpg'];
        var price = ['595 triệu', '375 triệu', '445 triệu'];
        data(name, img, price);
    }
    Mitsubishi();
}
if(sessionStorage.getItem('click')=='Nissan'){
    function Nissan() {
        var name = ['Chính chủ cần bán gấp xe gia đình Nissan Navara AT 2.5 EL, đk lần đầu 2018', 'Cần bán lại xe Nissan sản xuất năm 1991', 'Nissan Navara El A-IVI 2020 khuyến mãi 20tr tiền mặt, hỗ trợ ngân hàng 85%, giao xe tận nơi'];
        var img = ['../Img/Nissan/1.jpg', '../Img/Nissan/2.jpg', '../Img/Nissan/3.jpg'];
        var price = ['545 triệu', '75 triệu', '639 triệu'];
        data(name, img, price);
    }
    Nissan();
}
if(sessionStorage.getItem('click')=='Peugeot'){
    function Peugeot() {
        var name = ['Xe hơi Pháp Peugeot 3008 sản xuất 2021', 'Cần bán xe Peugeot 5008 năm 2021', '[Bình Dương] Peugeot 3008 2020 ưu đãi 80tr, vay tối đa 80%, trả góp chỉ từ 214tr, giao xe tận nhà'];
        var img = ['../Img/Peugeot/1.jpg', '../Img/Peugeot/2.jpg', '../Img/Peugeot/3.jpg'];
        var price = ['979 triệu', '1 tỉ 149 triệu', '979 triệu'];
        data(name, img, price);
    }
    Peugeot();
}
if(sessionStorage.getItem('click')=='Suzuki'){
    function Suzuki() {
        var name = ['Suzuki Long Biên - Suzuki XL7 phiên bản 2021, nhận xe chỉ với 73.5 tr, hỗ trợ bank 75%-80%, KM...', 'Bán xe Suzuki XL7 2021 khuyến mại ghế da, dán phim', 'Bán xe Suzuki XL 7 mới nhất năm sản xuất 2021, khuyến mãi 49tr tiền mặt giá chỉ còn 540...'];
        var img = ['../Img/Suzuki/1.jpg', '../Img/Suzuki/2.jpg', '../Img/Suzuki/3.jpg'];
        var price = ['550 triệu', '540 triệu', '540 triệu'];
        data(name, img, price);
    }
    Suzuki();
}
if(sessionStorage.getItem('click')=='Toyota'){
    function Toyota() {
        var name = ['Mua Xe Toyota Vios 2021 Chỉ Với 95 Triệu Đồng-Tặng Bảo Hiểm Thân Xe-Ưu Đãi Lớn-LH', 'Mua Xe Toyota Vios 2021-Chỉ Với 95Triệu Đồng-Tặng Bảo Hiểm Vật Chất-Ưu Đãi Lớn', 'Bán gấp Toyota Vios 2021, trả trước 140tr, xả kho giá tốt, tặng 1 năm bảo hiểm, giao ngay'];
        var img = ['../Img/Toyota/1.jpg', '../Img/Toyota/2.jpg', '../Img/Toyota/3.jpg'];
        var price = ['581 triệu', '581 triệu', '478 triệu'];
        data(name, img, price);
    }
    Toyota();
}
if(sessionStorage.getItem('click')=='VinFast'){
    function VinFast() {
        var name = ['Vinfast Phú Mỹ Hưng - Vinfast Lux SA2.0 đủ màu, lăn bánh chỉ với 184tr, thủ tục nhanh gọn, giá', '[Vinfast Miền Bắc] Lux A lăn bánh chỉ với 132 triệu đồng - ưu đãi hơn 300tr - hỗ trợ 100% thuế', 'Vinfast Quảng Ninh - Lux A, giảm tiền mặt lên đến 200tr, hỗ trợ vay lên đến 85 %. Giá tốt nhất tạ'];
        var img = ['../Img/VinFast/1.jpg', '../Img/VinFast/2.jpg', '../Img/VinFast/3.jpg'];
        var price = ['1 tỉ 226 tr', '881.7 triệu', '881.7 triệu'];
        data(name, img, price);
    }
    VinFast();
}
if(sessionStorage.getItem('click')=='Volkswagen'){
    function Volkswagen() {
        var name = ['Tiguan Elegance 2021 màu xanh Petro số lượng hiếm - Phiên bản mới khuyến mãi 100 triệu', 'Tiguan Luxury S 2021 màu xám ghi mới về chiếc duy nhất - Phiên bản cao cấp nhất', 'Khuyến mãi tháng 3/2021 Tiguan Luxury S 2021, màu xanh Petro độc lạ hiếm có'];
        var img = ['https://img1.oto.com.vn/crop/230x172/2021/03/11/20210311143153-9ec0_wm.jpg', 'https://img1.oto.com.vn/crop/230x172/2021/03/01/20210301131100-ec66_wm.jpg', 'https://img1.oto.com.vn/crop/230x172/2021/03/01/20210301132305-334c_wm.jpg'];
        var price = ['1 tỉ 699 tr', '1 tỉ 899 tr', '1 tỉ 899 tr'];
        data(name, img, price);
    }
    Volkswagen();
}
if(sessionStorage.getItem('click')=='Xe tải'){
    function XeTai() {
        var name = ['Xe tải JAC N900 9 tấn thùng dài 7m, đặt cọc giảm ngay 10tr ngày khai trương 01/04 2021', 'Xe tải Dongfeng 8 tấn thùng siêu dài 9,5m, khuyến mại lên tới 10tr trong tuần này', 'Công ty CPTĐ Thành Hưng cần thanh lý lô 20 xe tải nhẹ SYM'];
        var img = ['https://img1.oto.com.vn/crop/230x172/2021/03/22/20210322082912-c47f_wm.jpg', 'https://img1.oto.com.vn/crop/230x172/2021/04/05/20210405095444-6238_wm.jpg', 'https://img1.oto.com.vn/crop/230x172/2020/10/15/20201015155434-c6d1_wm.jpg'];
        var price = ['727 triệu', '960 triệu', '60 triệu'];
        data(name, img, price);
    }
    XeTai();
}

