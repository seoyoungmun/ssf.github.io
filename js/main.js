$('#navbot1').mouseenter(function(){
    $('.botmenu').stop().slideUp();
    $('.botmenu1').stop().slideDown();
});
$('.botmenu1').mouseleave(function(){
    $('.botmenu1').stop().slideUp();
});
$('#navbot2').mouseenter(function(){
    $('.botmenu').stop().slideUp();
    $('.botmenu2').stop().slideDown();
});
$('.botmenu2').mouseleave(function(){
    $('.botmenu2').stop().slideUp();
});
$('#navbot3').mouseenter(function(){
    $('.botmenu').stop().slideUp();
    $('.botmenu3').stop().slideDown();
});
$('.botmenu3').mouseleave(function(){
    $('.botmenu3').stop().slideUp();
});

/*
$('#nav_right_main_int').mouseenter(function(){
    $('.nav_right_main').animate({
       right:'225px'
    });
    $('.nav_right_sub').animate({
       right:'0'
    });
});
$('.nav_right_sub').mouseleave(function(){
    $('.nav_right_main').animate({
        right:'0'
    });
    $('.nav_right_sub').animate({
        right:'-225px'
    });
});
*/

$('.nav_right_main>li:not(.brand)').mouseenter(function(){
    $('.nav_right_main ul').css({'display':'none'});
    $('.nav_right_main>li').css({'background':'transparent'});
    $(this).next().css({'display':'block'});
    $(this).css({'background':'#355d25'});
    $('.nav_right').stop().animate({'right':0});
})
$('.nav_right').mouseleave(function(){
    $('.nav_right_main>li').css({'background':'transparent'});
    $('.nav_right').stop().animate({'right':'-225px'});
})

$('.familysite_menu').hide();
$('.familysite_btn').click(function(){
    $('.familysite_menu').toggle();
        return false;
})
          
$(window).scroll(function(){
    if($(document).scrollTop()>0){
        $('.nav_bottom').addClass('on');
    } else if($(document).scrollTop()==0){
        $('.nav_bottom').removeClass('on');
    }
})
