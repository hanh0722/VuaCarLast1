$(document).ready(function () {
    $('.baogia_item_lt1').click(function (e) { 
        e.preventDefault();
        $('.baogia_item_lt1').addClass('baogia_click');
        $('.baogia_item_lt2').removeClass('baogia_click');
        $('.baogia_item_lt3').removeClass('baogia_click');
        $('.uutien_lt').addClass('hien');
        $('.goitin_lt').removeClass('hien');
        $('.tinle_lt').removeClass('hien');
    });
    $('.baogia_item_lt2').click(function (e) { 
        e.preventDefault();
        $('.baogia_item_lt2').addClass('baogia_click');
        $('.baogia_item_lt3').removeClass('baogia_click');
        $('.baogia_item_lt1').removeClass('baogia_click');
        $('.uutien_lt').removeClass('hien');
        $('.goitin_lt').addClass('hien');
        $('.tinle_lt').removeClass('hien');
    });
    $('.baogia_item_lt3').click(function (e) { 
        e.preventDefault();
        $('.baogia_item_lt1').removeClass('baogia_click');
        $('.baogia_item_lt2').removeClass('baogia_click');
        $('.baogia_item_lt3').addClass('baogia_click');
        $('.uutien_lt').removeClass('hien');
        $('.goitin_lt').removeClass('hien');
        $('.tinle_lt').addClass('hien');
    });
    $('.baogia_mb .baogia_item_lt1').click(function (e) { 
        e.preventDefault();
        $('.uutien_mb').addClass('hien');
        $('.goitin_mb').removeClass('hien');
        $('.tinle_mb').removeClass('hien');
    });
    $('.baogia_mb .baogia_item_lt2').click(function (e) { 
        e.preventDefault();
        $('.uutien_mb').removeClass('hien');
        $('.goitin_mb').addClass('hien');
        $('.tinle_mb').removeClass('hien');
    });
    $('.baogia_mb .baogia_item_lt3').click(function (e) { 
        e.preventDefault();
        $('.uutien_mb').removeClass('hien');
        $('.goitin_mb').removeClass('hien');
        $('.tinle_mb').addClass('hien');
    });
    $('.goitin_hv').slideUp();
    $('.goitin_click_one').click(function (e) { 
        e.preventDefault();
        $(this).next().slideToggle();
    });
});
