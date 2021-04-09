$(document).ready(function () {
    var post_img = document.querySelector('.post_img img');
    var post_name = document.querySelector('.post_name a');
    var posttext = document.querySelector('.text');
    post_img.src = sessionStorage.getItem("img_post");
    post_name.innerHTML = sessionStorage.getItem("h3_text");
    posttext.innerHTML = sessionStorage.getItem("post_text");
});