function Footer (){
    return `
    <div class="footer-last">
        <div class="first-footer">
            <ul>
                <li>Hỗ trợ khách hàng</li>
                <li><a href="../html/QuyChehd.html">Quy định chính sách</a></li>
                <li><a href="dieukhoan.html">Điều khoản hoạt động salon</a></li>
                <li><a href="../html/CauHoiTG.html">Câu hỏi thường gặp</a></li>
                <li><a href="../html/hoTroKhachHang.html">Liên hệ</a></li>
            </ul>
            <ul>
                <li>Về chúng tôi</li>
                <li><a href="../html/introduction.html">Giới thiệu</a></li>
                <li><a href="../html/QuyChehd.html">Quy chế hoạt động</a></li>
            </ul>
            <ul>
                <li>Tin tức bán xe hơi</li>
                <li><a href="../html/baogia.html">Báo giá dịch vụ</a></li>
                <li><a href="../html/KhuyenMaiTuCacHang.html">Khuyến mại từ các hãng</a></li>
            </ul>
            <ul class="list-items-ft">
                <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                <li><a href=""><i class="fa fa-youtube" aria-hidden="true"></i> Youtube</a></li>
                <li><a href=""><i class="fa fa-users" aria-hidden="true"></i> Partner</a></li>
            </ul>
            <ul class="img-list">
                <img src="https://img1.oto.com.vn/Static/Images/v3/wap_v2.png" alt="">
                <img src="https://img1.oto.com.vn/Static/Images/v3/wap_v2.png" alt="">
                <img src="https://img1.oto.com.vn/Static/Images/v3/wap_v2.png" alt="">
            </ul>
        </div>
        <div class="second-footer">
            <div class="first-is">
                <p>Sàn giao dịch thương mại điện tử vuaxe.com</p>
                <p>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2021 Vuaxe.com.vn - NewgenMedia.com.vn</p>
                <div class="footer-1">
                    <div class="first-is">
                        <i class="fa fa-phone" aria-hidden="true"></i> 0965.131.633</p>
                    </div>
                    <div class="second-is">
                        <i class="fa fa-envelope" aria-hidden="true"></i> hotro@oto.com.vn
                    </div>
                    <div class="third-is">
                        <a href="skype:live:"><i class="fa fa-skype" aria-hidden="true"></i></a>
                    </div>
                </div>
                <p class="title-p">
                    <img src="https://img1.oto.com.vn/Static/Images/bct-dadangky.png" alt=""> Giấy phép ICP số 978/GP-TTĐT
                </p>
            </div>
            <div class="second-is"></div>
        </div>
        <div class="section">
            <p>Địa chỉ trụ sở chính</p>
            <p>169 Nguyễn Ngọc Vũ, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội.</p>
        </div>
    </div>
    `
}
const FT = document.querySelector("#footer");
FT.innerHTML = Footer();