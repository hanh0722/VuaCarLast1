$(document).ready(function() {
    $(window).scroll(function() {
        var pos_body = $('html,body').scrollTop();
        if (pos_body > 600) {
            $('.menu').addClass('co-dinh-menu');
           
        } else {
            $('.menu').removeClass('co-dinh-menu');
        }
        if (pos_body > 1200) {
            $('.back-to-top').addClass('hien-ra');
            
        } else {
            $('.back-to-top').removeClass('hien-ra');
            
        }
    });
    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
                scrollTop: 0
            },
            1000);
    });
});