var get_news_title = document.querySelector('.get_news_title');
get_news_title.innerHTML = sessionStorage.getItem('news_get_click');
var get_text_news = document.querySelectorAll('.get_text1');
var get_img_news = document.querySelectorAll('.img_get1');
const data = (img_get1,get_text) =>{
    for (let i = 0; i < img_get1.length; i++){
        get_img_news[i].src = img_get1[i];
        get_text_news[i].innerText = get_text[i];
    }
}
if (sessionStorage.getItem('news_get_click') == 'Thị trường ô tô') {
    function thitruong() {
        img_get1 = ['../Img/tintuc/thitruong/1.jpg','../Img/tintuc/thitruong/2.jpg','../Img/tintuc/thitruong/3.jpg','../Img/tintuc/thitruong/4.jpg','../Img/tintuc/thitruong/5.jpg','../Img/tintuc/thitruong/6.jpg','../Img/tintuc/thitruong/7.jpg'];
        get_text = ['Kia Seltos đi ngược xu hướng, tăng giá 10 triệu đồng tất cả các phiên bản','Toyota RAV4 XLE lăn bánh 7 năm bán lại vẫn dư tiền \'đập hộp\' Hyundai Tucson đời mới','Xe nhập khẩu dồn về Việt Nam trong tháng 3, dự báo bùng nổ đợt giảm giá sâu','Tin ô tô nổi bật nhất tuần từ ngày 29/4 đến 3/4/2021','Tranh thủ VinFast VF e34 áp dụng giá hấp dẫn, nhiều khách đặt mua cả tá','Dongfeng T5 Evo chốt giá gần 800 triệu, cắt nhiều option, khách Việt bị \'hụt hẫng\'','Toyota Fortuner 2021 độ nội thất phong cách “chủ tịch”, bị rao bán khi mới đi đăng ký được 3 tháng'];
        data(img_get1,get_text);
    }
    thitruong();
}
// sửa tiếp
if (sessionStorage.getItem('news_get_click') == 'An toàn giao thông') {
    function antoan() {
        img_get1 = ['../Img/tintuc/antoangt/1.png','../Img/tintuc/antoangt/2.jpg','../Img/tintuc/antoangt/3.jpg','../Img/tintuc/antoangt/4.jpg','../Img/tintuc/antoangt/5.jpg','../Img/tintuc/antoangt/6.jpg','../Img/tintuc/antoangt/7.jpg'];
        get_text = ['Đi ngược chiều, tài xế Vios \'nháy đèn\', thò đầu ra ngoài để bắt xe khác nhường đường','Video: Phẫn nộ tài xế phóng ngược chiều \'như bay\' trên cao tốc Láng- Hòa Lạc','Pha xử lý \'cồng kềnh\' của nữ tài xế, mất gần 6 phút để ghép xe ngang','Video: Chủ quan không kéo phanh tay, tài xế nhận được một bài học đáng nhớ','Video: Hành động đẹp của tài xế xe tải giúp cụ bà sang đường khiến CĐM cảm thấy \'ấm lòng\'','Dongfeng T5 Evo chốt giá gần 800 triệu, cắt nhiều option, khách Việt bị \'hụt hẫng\'','Video: Lái xe theo kiểu \'điền vào chỗ trống\', xe con bị xe tải lùi móp đầu '];
        data(img_get1,get_text);
    }
    antoan();
}
if (sessionStorage.getItem('news_get_click') == 'Sự kiện') {
    function sukien() {
        img_get1 = ['../Img/tintuc/tintuc/1.jpg','../Img/tintuc/tintuc/2.png','../Img/tintuc/tintuc/3.jpg','../Img/tintuc/tintuc/4.jpg','../Img/tintuc/tintuc/5.jpg','../Img/tintuc/tintuc/6.jpeg','../Img/tintuc/tintuc/7.jpg'];
        get_text = ['VinFast vận hành tuyến xe buýt điện thông minh đầu tiên, giao thông công cộng bước sang trang','Mitsubishi Experience Day sắp diễn ra tại HCM có gì hấp dẫn?','Ford Việt Nam nâng chế độ bảo hành cho Ford Transit lên 200.000 Km','Việt Nam \'lỡ hẹn\' Giải đua F1 mùa 2021 ','Kia Sorento được vinh danh là XE CỦA NĂM 2021 ','Minh nhựa \'nạp\' thêm Aston Martin V8 Vantage 15 tỷ màu độc đính kèm bộ body kit bắt mắt '];
        data(img_get1,get_text);
    }
    sukien();
}
if (sessionStorage.getItem('news_get_click') == 'Khuyến mại') {
    function khuyenmai() {
        img_get1 = ['../Img/tintuc/khuyenmai/1.png','../Img/tintuc/khuyenmai/2.jpg','../Img/tintuc/khuyenmai/3.jpg','../Img/tintuc/khuyenmai/4.jpg','../Img/tintuc/khuyenmai/5.jpg','../Img/tintuc/khuyenmai/6.jpg','../Img/tintuc/khuyenmai/7.jpg'];
        get_text = ['Đại lý ồ ạt giảm giá Honda HR-V lên đến 150 triệu đồng','Đại lý giảm giá kịch sàn Hyundai Santa Fe đến 120 triệu đồng, bản mới sắp ra mắt?','Mazda tung chương trình ưu đãi đặc biệt lên tới 120 triệu đồng mừng đại lễ 30/4','Suzuki Ciaz giảm giá 45 triệu đồng tăng lực cạnh tranh với Hyundai Accent','Tranh thủ VinFast VF e34 áp dụng giá hấp dẫn, nhiều khách đặt mua cả tá','Dongfeng T5 Evo chốt giá gần 800 triệu, cắt nhiều option, khách Việt bị \'hụt hẫng\'','Toyota Fortuner 2021 độ nội thất phong cách “chủ tịch”, bị rao bán khi mới đi đăng ký được 3 tháng'];
        data(img_get1,get_text);
    }
    khuyenmai();
}
if (sessionStorage.getItem('news_get_click') == 'Công nghệ mới') {
    function congnghemoi() {
        img_get1 = ['../Img/tintuc/congnghemoi/1.jpg','../Img/tintuc/congnghemoi/2.jpg','../Img/tintuc/congnghemoi/3.jpg','../Img/tintuc/congnghemoi/4.jpg','../Img/tintuc/congnghemoi/5.jpg','../Img/tintuc/congnghemoi/6.jpg','../Img/tintuc/congnghemoi/7.jpg'];
        get_text = ['Kia Seltos đi ngược xu hướng, tăng giá 10 triệu đồng tất cả các phiên bản','Toyota RAV4 XLE lăn bánh 7 năm bán lại vẫn dư tiền \'đập hộp\' Hyundai Tucson đời mới','Xe nhập khẩu dồn về Việt Nam trong tháng 3, dự báo bùng nổ đợt giảm giá sâu','Tin ô tô nổi bật nhất tuần từ ngày 29/4 đến 3/4/2021','Tranh thủ VinFast VF e34 áp dụng giá hấp dẫn, nhiều khách đặt mua cả tá','Dongfeng T5 Evo chốt giá gần 800 triệu, cắt nhiều option, khách Việt bị \'hụt hẫng\'','Toyota Fortuner 2021 độ nội thất phong cách “chủ tịch”, bị rao bán khi mới đi đăng ký được 3 tháng'];
        data(img_get1,get_text);
    }
    congnghemoi();
}
if (sessionStorage.getItem('news_get_click') == 'Khám phá') {
    function khampha() {
        img_get1 = ['../Img/tintuc/khampha/1.jpeg','../Img/tintuc/khampha/2.jpg','../Img/tintuc/khampha/3.jfif','../Img/tintuc/khampha/4.jpg','../Img/tintuc/khampha/5.jpg','../Img/tintuc/khampha/6.jpg','../Img/tintuc/khampha/7.jpg'];
        get_text = ['Kia Seltos đi ngược xu hướng, tăng giá 10 triệu đồng tất cả các phiên bản','Toyota RAV4 XLE lăn bánh 7 năm bán lại vẫn dư tiền \'đập hộp\' Hyundai Tucson đời mới','Xe nhập khẩu dồn về Việt Nam trong tháng 3, dự báo bùng nổ đợt giảm giá sâu','Tin ô tô nổi bật nhất tuần từ ngày 29/4 đến 3/4/2021','Tranh thủ VinFast VF e34 áp dụng giá hấp dẫn, nhiều khách đặt mua cả tá','Dongfeng T5 Evo chốt giá gần 800 triệu, cắt nhiều option, khách Việt bị \'hụt hẫng\'','Toyota Fortuner 2021 độ nội thất phong cách “chủ tịch”, bị rao bán khi mới đi đăng ký được 3 tháng'];
        data(img_get1,get_text);
    }
    khampha();
}

