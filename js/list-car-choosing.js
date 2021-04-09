function list1(){
    return `<div class="cost-car cost-car-2">
    <ul>
        <li><a href="">Ô tô</a></li>
        <li><a href="">Ô tô cũ</a></li>
        <li><a href="">Giá xe Kia</a></li>
        <li><a href="">Giá xe Toyota</a></li>
        <li><a href="">Bảng giá xe ô tô</a></li>
    </ul>
    <ul>
        <li><a href="">Giá xe Ford Ranger</a></li>
        <li><a href="">Giá xe Suzuki Vitara</a></li>
        <li><a href="">Xe Ford Everest</a></li>
        <li><a href="">Giá xe Ford Escape</a></li>
        <li><a href="">Giá xe Ford Ranger Wildtrak</a></li>
    </ul>
    <ul>
        <li><a href="">Xe Ford Explorer</a></li>
        <li><a href="">Giá xe Toyota Vios</a></li>
        <li><a href="">Giá xe Toyota Fortuner</a></li>
        <li><a href="">Xe Toyota Altis</a></li>
        <li><a href="">Giá xe Toyota Wigo</a></li>
    </ul>
    <ul>
        <li><a href="">Xe Kia Rio</a></li>
        <li><a href="">Xe Kia Sorento</a></li>
        <li><a href="">Xe Kia Morning</a></li>
        <li><a href="">Giá xe Kia Carens</a></li>
        <li><a href="">Xe Kia Cerato</a></li>
    </ul>
    <ul>
        <li><a href="">Giá xe Honda Accord 2018</a></li>
        <li><a href="">Xe Huyndai SantaFe</a></li>
    </ul>
</div>`
}
const id = document.querySelector("#list-cs");
id.innerHTML = list1();

function forYou(){
    return `<div class="only-for-you">
    <div class="content-only">
        <div class="img-only">
            <img src="https://img1.oto.com.vn/crop/115x85/2019/08/14/20190814161944-8377_wm.jpg" alt="">
        </div>
        <div class="text-only">
            <p><a href="">Mercedes G63 AMG 2021 Hà Nội. Giá tốt, giao xe ngay toàn quốc</a></p>
            <p>10 tỉ 700tr</p>
        </div>
    </div>
    <div class="content-only">
        <div class="img-only">
            <img src="https://img1.oto.com.vn/crop/115x85/2019/08/14/20190814161944-8377_wm.jpg" alt="">
        </div>
        <div class="text-only">
            <p><a href="">Mercedes G63 AMG 2021 Hà Nội. Giá tốt, giao xe ngay toàn quốc</a></p>
            <p>10 tỉ 700tr</p>
        </div>
    </div>
</div>
    `
}
const ForYouList = () =>{
    const id1 = document.querySelectorAll(".for-y");
    for(let i = 0; i < id1.length; i++){
        id1[i].innerHTML = forYou();
    }
}
ForYouList();
