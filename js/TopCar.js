function TopCar (){
    return `
    <div class="top-car">
    <p class="title-content">Top xe ô tô nổi bật</p>
    <div class="box-top">
        <ul>
            <li><a href="">Huyndai Kona</a></li>
            <li><a href="">Mercedes C200</a></li>
            <li><a href="">Mercedes C200</a></li>
        </ul>
        <ul>
            <li><a href="">Toyota Rush</a></li>
            <li><a href="">Honda HRV</a></li>
            <li><a href="">Kia Sedona</a></li>
        </ul>
        <ul>
            <li><a href="">Fortuner 2017</a></li>
            <li><a href="">VinFast Fadil</a></li>
            <li><a href="">Camry 2010</a></li>
        </ul>
        <ul>
            <li><a href="">Mazda 3 2019</a></li>
            <li><a href="">Honda jazz 2017</a></li>
            <li><a href="">Xe bán tải</a></li>
        </ul>
    </div>
</div>
    `
}
const topCar = document.querySelector("#topCar");
topCar.innerHTML = TopCar();