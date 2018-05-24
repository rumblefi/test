$(function() {

//    burger
    $(".burger").on('click', function () {
       $(this).toggleClass('burger--close');
       $(".main-nav-wrapper").slideToggle('fast');
    });

//    плавный скролл
    $('[data-scrollTo').on('click', function (event) {
        var target = $($(this).attr('href')).offset().top;
        $("html,body").animate({
            scrollTop: target - $(".header").height()
        }, 'slow');
        return false;
    });

    //ANIMATE ON SCROLL https://github.com/michalsnik/aos
    AOS.init({
        once: true,
        duration: 800,
        disable: 'mobile',
        easing: 'ease-out',
    });


//    TO-top
    $(window).on('scroll', function () {
       if($(this).scrollTop() > $(this).height()) {
           $("#to-Top").fadeIn();
       }
       else{
           $("#to-Top").fadeOut();
       }
    });

    $("#to-Top").on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 'slow');
    });


});

