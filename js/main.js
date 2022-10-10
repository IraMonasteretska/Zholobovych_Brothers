
$(document).ready(function () {

    // header menu active
    $('.header__menu-link').on('click', function () {
        $('.header__menu-link').removeClass('active');
        $(this).addClass('active');
    });

    // header bg
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.header').addClass('scrolling');
        } else {
            $('.header').removeClass('scrolling');
        }
    });

    // header mobile menu
    $('.burger__btn, .header__menu-link').on('click', function () {
        $('.burger__btn').toggleClass('active');
        $('.header__menu').toggleClass('active');
    });



    // heroimage slider
    var swiper = new Swiper(".heroimage__slider", {
        effect: "fade",
        autoplay: {
            delay: 800,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
            },
        },
    });

    // accordeon 

    $('.process__acordeon-header').click(function () {
        $(this).toggleClass('active');
        $(this).next('.process__acordeon-body').slideToggle();
    });

    // gallery slider

    var swiper = new Swiper(".gallery__slider-top", {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup: 2,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 800,
        },
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                spaceBetween: 10,
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
                spaceBetween: 15,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            992: {
                spaceBetween: 25,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1200: {
                spaceBetween: 32,
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        }
    });
    var swiper = new Swiper(".gallery__slider-bottom", {
        slidesPerView: 3,
        spaceBetween: 32,
        slidesPerGroup: 3,
        loop: true,
        speed: 1400,
        autoplay: {
            delay: 800,
        },
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                spaceBetween: 15,
            },
            992: {
                spaceBetween: 25,
            },
            1200: {
                spaceBetween: 32,
            }
        }
    });

    // gallery popup
    Fancybox.bind('[data-fancybox="gallery a"]', {
        infinite: false
    });

    //  slider product image
    var smallImage = new Swiper(".smallImage", {
        slidesPerView: 4,
        direction: "vertical"
    });
    var bigImage = new Swiper(".bigImage", {
        effect: "fade",
        thumbs: {
            swiper: smallImage,
        },
    });

    //  popup product card
    $('.popupbtn').on('click', function (e) {
        e.preventDefault();
        $('.popup').addClass('active');
    });
    $('.popup__close').on('click', function () {
        $('.popup').removeClass('active');
    });

    // counter
    $('.minus').click(function () {
        var $input = $('.product__form-counter').find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        summ();
        return false;
    });
    $('.plus').click(function () {
        var $input = $('.product__form-counter').find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        summ();
        return false;
    });


    // calculate 
    var material = 1000,
        color = 500,
        uzor = 0,
        amount = 0;

    $("input[name='material']").change(function () {
            material = $(this).data('price');
            if($(this).hasClass('uncommon')){
                $(".entry").addClass('disabled');
            } else {
                $(".entry").removeClass('disabled');
            }
        summ();
    });

    $("input[name='color']").change(function () {
            color = $(this).data('price');
        summ();
    });

    $("input[name='uzor']").change(function () {
            uzor = $(this).data('price');
        summ();
    });


    function summ() {
        material = Number(material);
        color = Number(color);
        uzor = Number(uzor);
        amount = Number($('.product__form-counter').find('input').val());
        $(".price p").text((material + color + uzor) * amount);
    }


});