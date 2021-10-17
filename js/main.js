$(function () {
    // Убрать панель управление видео
    // $('[data-fancybox]').fancybox({
    //     youtube: {
    //         controls: 0,
    //         showinfo: 0
    //     }
    // });
    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev" type="button"><img src="images/arrow-left.svg" alt="Prew"></button>',
        nextArrow: '<button class="slick-btn slick-next" type="button"><img src="images/arrow-right.svg" alt="Next"></button>',
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false,
    });
});