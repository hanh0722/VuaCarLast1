var muaban_get_click = document.querySelectorAll('.muaban_get a');
var giaxe_get_click = document.querySelectorAll('.get_giaxe a');
var news_get_click = document.querySelectorAll('.get_news');
var giaxe_get_name = document.querySelectorAll('.get_banggia');
// lấy click
for (let i = 0; i < muaban_get_click.length; i++) {
    console.log(muaban_get_click[i]);
    muaban_get_click[i].onclick = function(){
        sessionStorage.setItem('muaban_get_click',muaban_get_click[i].innerText);
    }
}
for (let j = 0; j < giaxe_get_click.length; j++) {
    console.log(giaxe_get_click[j]);
    giaxe_get_click[j].onclick = function(){
        sessionStorage.setItem('giaxe_get_name',giaxe_get_name[j].innerText);
    }
}

for (let z = 0; z < news_get_click.length; z++) {
    console.log(news_get_click[z]);
    news_get_click[z].onclick = function(){
        sessionStorage.setItem('news_get_click',news_get_click[z].innerText);
    }
}



