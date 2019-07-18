// 自行加入的JS請寫在這裡
$(function() {
    // $("aside menu").niceScroll({
    //     cursorwidth: "8px",
    //     cursoropacitymax:0.6,
    //     touchbehavior:true,
    //     smoothscroll: true
    // });
    // login forget
    $('.forget').click(function(event) {
        $('.login_block').animate({ 'left': '-100%' }, 400, 'easeOutQuint');
        $('.forget_block').animate({ 'left': '0' }, 400, 'easeOutQuint');
    });
    $('.back').click(function(event) {
        $('.login_block').animate({ 'left': '0%' }, 400, 'easeOutQuint');
        $('.forget_block').animate({ 'left': '100%' }, 400, 'easeOutQuint');
    });
    // menu
    var _menu = $('aside menu'),
        _menuItem = $('aside menu>ul>li').has('ul');
    _menuItem_2 = $('aside menu>ul>li>ul>li').has('ul');
    _menuItem.each(function(index, el) {
        $(this).children('ul').hide();
        $(this).children('a').append('<a href="javascript:;" class="toggle_btn"></a>');
        $(this).children('a').click(function(e) {
            $(this).parent('li').siblings().find('.toggle_btn').removeClass('open');
            $(this).parent('li').find('.toggle_btn').toggleClass('open');
            $(this).parent('li').siblings().find('ul').slideUp(600, 'easeOutQuint');
            $(this).next('ul').slideToggle(600, 'easeOutQuint');
            e.preventDefault();
        });
    });
    _menuItem_2.each(function(index, el) {
        $(this).hover(function() {
            $(this).children('ul').show();
        }, function() {
            $(this).children('ul').hide();
        });
    });
    // dropdown
    $('.dropdown-content').hide();
    $('.dropdown-btn').each(function(index, el) {
        $(this).click(function(e) {
            $(this).siblings('.dropdown-content').stop(true, true).slideToggle(400, 'easeOutQuint');
            e.preventDefault();
        });
    });
    // 
    $('.col_control').prepend('<div class="col_name"></div>');
    $('.col_control .col_name').each(function(index, el) {
        var col_name = $(this).parent().parent().parent().attr('class');
        $(this).html(col_name);
    });
    // library
    $('.library ul ul').hide();
   
    $('.library ul li:first ul').show();
    //  $('.library ul ul').niceScroll({
    //     cursorwidth: "8px",
    //     cursoropacitymax:0.6,
    //     touchbehavior:true,
    //     smoothscroll: true
    // });
    $('.library>.hy_block>ul>li>a').addClass('open');
    $('.library>.hy_block>ul>li:nth-child(2)>a').removeClass('open');
    $('.library').find('.hy_block>ul>li').each(function(index, el) {
        $(this).find('a').click(function(e) {
            $(this).parent().siblings('div').children('a').removeClass('open');
            $(this).toggleClass('open');
            $(this).parent().siblings().find('ul').stop(true, true).slideUp();
            $(this).siblings('ul').stop(true, true).slideToggle(400, 'easeOutQuint');
            e.preventDefault();
        });
    });
    //控制模組定位
    if($('.library').length>0){
       var libraryTop = $('.library').offset().top,
        libraryW = $('.library').width();
    $(window).bind("load resize scroll", function(event) {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= libraryTop - 50) {
            $('.library').css({
                position: 'fixed',
                top: '3em',
                right: '1em',
                width: libraryW
            });
        } else {
            $('.library').css({
                position: 'static'
            });
        }
    }); 
    }
    
});