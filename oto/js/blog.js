$(document).ready(function () {
    var h3_click = document.querySelectorAll('.post-text h3 a');
    var img_post = document.querySelectorAll('.blog_img img');
    var post_text = document.querySelectorAll('.post_text');
    for (let i = 0; i < h3_click.length; i++) {
        h3_click[i].onclick = function () {
            sessionStorage.setItem("h3_text",h3_click[i].innerHTML);
            sessionStorage.setItem("img_post",img_post[i].src);
            sessionStorage.setItem("post_text",post_text[i].innerHTML);
        }
    }
    // comment
    var comment = document.querySelector('.input_comment');
    var name = document.querySelector('.input_name');
    var submit = document.querySelector('.submit');
    var email = document.querySelector('.input_email');
    var comment_new = document.querySelector('.comment_text');
    var name_member = document.querySelector('.name_member');
    submit.onclick = function (e) {
        if (((comment.value  != "") && (name.value  != "") && (email.value != ""))) {
            comment_new.innerHTML = comment.value;
            name_member.innerHTML = name.value;
            $('.comment_list_new').addClass('hien_comment');
            e.preventDefault();
        }
    }
});