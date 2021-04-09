function Header(){
    return `
    <div class="pop-up-menu">
        <div class="choose">
            <p class="sign-in-1">Đăng nhập</p>
            <p class="sign-up-1">Đăng ký</p>
            <i class="fa fa-times fa-times-1" aria-hidden="true"></i>
        </div>
        <div class="container-sign">
            <div class="sign-in">
                <input type="text" name="email/tel" id="input1" placeholder="" required><br>
                <input type="password" name="password" placeholder="" required>
                <div class="button-center">
                    <button class="btn btn-warning btn-class">Đăng nhập</button>
                </div>
                <p class="text-center text-sign">Hoặc đăng nhập bằng</p>
                <div class="fb-gg">
                    <button class="btn btn-primary">Facebook</button>
                    <button class="btn btn-danger">Google</button>
                </div>
                <div class="forget">
                    <p><a href="../html/quenMk.html">Quên mật khẩu</a></p>
                    <p><a href="../html/hoTroKhachHang.html">Cần trợ giúp?</a></p>
                </div>
            </div>
            <div class="sign-up">
                <form method="GET">
                    <input type="text" placeholder="Email đăng nhập *" required>
                    <input type="text" placeholder="Họ và tên" required>
                    <input type="password" placeholder="Mật khẩu *" required>
                    <input type="text" placeholder="Nhập lại mật khẩu *" required>
                    <input type="tel" placeholder="Số điện thoại *" required maxlength="11">
                    <div class="box-search-country">
                        <div class="class-arrow">
                            <input type="text" id="myInput" placeholder="Địa chỉ thường trú *" required>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                        <ul id="myUL">
                        </ul>
                    </div>
                    <input type="text" placeholder="Số đăng ký kinh doanh">
                    <input type="text" placeholder="Số CMT">
                    <input type="text" placeholder="Mã số thuế">
                    <div class="center-button">
                        <input type="submit" value="Đăng ký" class="submit-btn">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="layout-black"></div>
    <div class="first-nav">
    <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
    <div class="logo">
        <a href="index.html"><img src="http://vuaxe.com.vn/Assets/VuaOTo/img/vuaxe.png" alt=""></a>
    </div>
    <div class="left-nav">
        <p><a href="tel:">Hotline: 0123.456.789</a></p>
        <p><a href="../html/baogia.html">Báo giá</a></p>
    </div>
    <div class="right-nav">
        <div class="input">
            <input class="form-control" type="text" placeholder="Tìm kiếm theo hãng xe, dòng xe">
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <div class="right">
            <p>Đăng ký</p>
            <span>|</span>
            <p>Đăng nhập</p>
        </div>
    </div>
    <div class="fa-fa-mobile">
        <i class="fa fa-search fa-new" aria-hidden="true"></i>
        <input class="form-control" type="text" placeholder = "Tìm kiếm theo hãng xe, dòng xe">
    </div>
</div>
<div class="second-nav">
    <div class="logo-nav">
        <a href="index.html"><img src="http://vuaxe.com.vn/Assets/VuaOTo/img/vuaxe.png" alt=""></a>
    </div>
    <ul class="right-pick">
    <i class="fa fa-times turnOff" aria-hidden="true"></i>
    <li class="sign-in-mobile"><a href="../html/login.html">Đăng nhập</a> | <a href="">Đăng ký</a></li>
        <li>
            <a href="muabanoto.html">Mua bán ô tô</a>
            <div class="information muaban_get">
                <div class="top-if">
                    <div class="first-if">
                        <p><a href="Honda-city.html">Honda City</a></p>
                        <p><a href="Honda-city.html">Honda CRV</a></p>
                        <p><a href="Honda-city.html">Toyota Vios</a></p>
                        <p><a href="Honda-city.html">Toyota Fortuner</a></p>
                        <p><a href="Honda-city.html">Ford Ranger</a></p>
                    </div>
                    
                    <div class="second-if">
                        <p><a href="Honda-city.html">Acura</a></p>
                        <p><a href="Honda-city.html">Audi</a></p>
                        <p><a href="Honda-city.html">BMW</a></p>
                        <p><a href="Honda-city.html">Chevrolet</a></p>
                        <p><a href="Honda-city.html">Daewoo</a></p>
                        <p><a href="Honda-city.html">Dongfeng (DFM)</a></p>
                        <p><a href="Honda-city.html">Ford</a></p>
                        <p><a href="Honda-city.html">Honda</a></p>
                        <p><a href="Honda-city.html">Huyndai</a></p>
                        <p><a href="Honda-city.html">Isuzu</a></p>
                        <p><a href="Honda-city.html">Kia</a></p>
                        <p><a href="Honda-city.html">LandRover</a></p>
                    </div>
                </div>
                <div class="bottom-if">
                    <div class="first-if">
                        <p><a href="Honda-city.html">BMW 320i</a></p>
                        <p><a href="Honda-city.html">Mercedes C200</a></p>
                        <p><a href="Honda-city.html">Mercedes C300</a></p>
                        <p><a href="Honda-city.html">Mercedes E200</a></p>
                        <p><a href="Honda-city.html">Lexus LX570</a></p>
                    </div>
                    <div class="second-if">
                        <p><a href="Honda-city.html">Lexus</a></p>
                        <p><a href="Honda-city.html">Mazda</a></p>
                        <p><a href="Honda-city.html">Mercedes-Benz</a></p>
                        <p><a href="Honda-city.html">Mitsubishi</a></p>
                        <p><a href="Honda-city.html">Nissan</a></p>
                        <p><a href="Honda-city.html">Peugeot</a></p>
                        <p><a href="Honda-city.html">Suzuki</a></p>
                        <p><a href="Honda-city.html">Toyota</a></p>
                        <p><a href="Honda-city.html">VinFast</a></p>
                        <p><a href="Honda-city.html">Volkswagen</a></p>
                        <p><a href="Honda-city.html">Xe tải</a></p>
                        <p><a href="Honda-city.html">Hãng xe khác</a></p>
                    </div>
                </div>
            </div>
        </li>
        <li class="mobile"><a href="">Bán xe ngay</a></li>
        <li>
            <a href="">Danh bạ</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information information2 infor-mobile">
                <div class="list-2">
                    <p><a href="contact.html">Danh bạ Showroom</a></p>
                    <p><a href="contact-nks.html">Danh bạ nhà kinh doanh xe</a></p>
                    <p><a href="contact-dt.html">Danh bạ đối tác</a></p>
                </div>
            </div>
        </li>
        <li>
            <a href="../html/bangGia.html">Giá xe ô tô</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile get_giaxe">
                <div class="first-list">
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Vinfast</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Mercedes</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Volvo</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Volkswagen</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Toyota</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Suzuki</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Subaru</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Porsche</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Peugeot</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Nissan</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Mitsubishi</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">MG</span></a></p>
                </div>
                <div class="second-list">
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Mazda</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Maserati</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Lexus</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">LandRover</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Kia</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Jeep</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Huyndai</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Honda</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Ford</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">BMW</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá xe <span class="get_banggia">Audi</span></a></p>
                    <p><a href="bangGiaVinFast.html">Giá bán <span class="get_banggia">xe tải</span></a></p>
                </div>
            </div>
        </li>
        <li>
            <a href="">Đánh giá xe</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information information4 infor-mobile">
                <div>
                    <p><a href="">Đánh giá xe Ford Explorer 2021</a></p>
                    <p><a href="">Đánh giá xe Honda City RS 2021</a></p>
                    <p><a href="">Đánh giá xe Kia Sorento 2021</a></p>
                    <p><a href="">Đánh giá xe Ford Ranger Wildtrak 2021</a></p>
                    <p><a href="">Đánh giá xe Ford Everest 2021</a></p>
                </div>
            </div>
        </li>
        <li>
            <a href="../html/kinhnghiem.html">Kinh nghiệm</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile infor-34">
                <div>
                    <p><a href="../html/kinhNghiemLaiXe.html">Kinh nghiệm lái xe</a></p>
                    <p><a href="../html/chamSocOto.html">Chăm sóc và bảo dưỡng ô tô</a></p>
                    <p><a href="../html/kinhNghiemMuaBan.html">Kinh nghiệm mua / bán xe</a></p>
                </div>
            </div>
        </li>
        <li>
            <a href="../html/tuVanXe.html">Tư vấn xe</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile infor-35">
                <div>
                    <p><a href="">Mua xe trả góp</a></p>
                    <p><a href="../html/tinTucPhapLuat.html">Tin tức pháp luật</a></p>
                    <p><a href="../html/baoHiemXe.html">Bảo hiểm xe</a></p>
                    <p><a href="../html/phongThuyXe.html">Phong thủy xe</a></p>
                </div>
            </div>
        </li>
        <li><a href="../html/wiki-oto.html">Otowiki</a></li>
        <li class="mobile">
            <a href="../html/news.html">Tin tức</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile">
                <div>
                    <p><a href="news.html" class="get_news">Thị trường ô tô</a></p>
                    <p><a href="news.html" class="get_news">An toàn giao thông</a></p>
                    <p><a href="news.html" class="get_news">Sự kiện</a></p>
                    <p><a href="news.html" class="get_news">Khuyến mãi</a></p>
                    <p><a href="../html/discount.html">Ưu đãi</a></p>
                    <p><a href="../html/hvoto.html">Học viện ô tô</a></p>
                    <p><a href="news.html" class="get_news">Công nghệ mới</a></p>
                    <p><a href="news.html" class="get_news">Khám phá</a></p>
                </div>
            </div>
        </li>
        <li class="mobile">
            <a href="">Thông tin xe</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile">
                <div>
                    <p><a href="">So sánh xe</a></p>
                    <p><a href="../html/xemoi.html">Xe mới</a></p>
                    <p><a href="../html/thongSoKiThuat.html">Thông số kỹ thuật</a></p>
                    <p><a href="">Xe sắp ra mắt tại VN</a></p>
                    <p><a href="">Xe bán chạy trong tháng</a></p>
                    <p><a href="../html/lichSuCacHang.html">Lịch sử các hãng xe</a></p>
                    <p><a href="../html/Video.html">Video</a></p>
                </div>
            </div>
        </li>
        <li class="mobile">
            <a href="">Chat với Oto.com.vn</a>
        </li>
        <li class="mobile"><a href="">Trợ giúp</a></li>
        <li class="mobile"><a href="tel:">Liên hệ</a></li>
        <li>
            ...
            <div class="information information-last">
                <div class="first-list first-list1">
                    <p class="header-class"><a href="../html/news.html">Tin tức</a></p>
                    <p><a href="news.html" class="get_news">Thị trường ô tô</a></p>
                    <p><a href="news.html" class="get_news">An toàn giao thông</a></p>
                    <p><a href="news.html" class="get_news">Sự kiện</a></p>
                    <p><a href="../html/KhuyenMaiTuCacHang.html">Khuyến mại</a></p>
                    <p><a href="../html/discount.html">Ưu đãi</a></p>
                    <p><a href="../html/hvoto.html">Học viện ô tô</a></p>
                    <p><a href="news.html" class="get_news">Công nghệ mới</a></p>
                    <p><a href="news.html" class="get_news">Khám phá</a></p>
                </div>
                <div class="second-list second-list1">
                    <p class="header-class">Thông tin xe</p>
                    <p><a href="">So sánh xe</a></p>
                    <p><a href="../html/xemoi.html">Xe mới</a></p>
                    <p><a href="../html/thongSoKiThuat.html">Thông số kỹ thuật</a></p>
                    <p><a href="">Xe sắp ra mắt tại VN</a></p>
                    <p><a href="">Xe bán chạy trong tháng</a></p>
                    <p><a href="../html/lichSuCacHang.html">Lịch sử các hãng xe</a></p>
                    <p><a href="../html/Video.html">Video</a></p>
                </div>
            </div>
        </li>
        <button class="btn btn-success"><a href="">Đăng tin</a></button>
    </ul>
    </div>
    <div class="layout"></div>
    `
}
const H1 = document.querySelector("#Header");
H1.innerHTML = Header();
