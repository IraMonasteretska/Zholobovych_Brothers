
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
    Fancybox.bind('[data-fancybox="gallery"]', {
        infinite: false
    });


    //  slider product image
    var smallImage = new Swiper(".smallImage", {
        slidesPerView: 4,
        direction: "vertical"
    });
    var bigImage = new Swiper(".bigImage", {
        slidesPerView: 1,
        effect: "fade",
        thumbs: {
            swiper: smallImage,
        },
    });

    // product gallery popup
    $('.active-tab').on('click', function () {
        var classGallery = $(this).attr('data-imgcolor');
        Fancybox.bind(`[data-fancybox="${classGallery}"]`, {
            infinite: false
        });
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
        pattern = 0,
        amount = 0;

    $("input[name='material']").change(function () {
        material = $(this).data('price');
        console.log(material);
        $('#material-hide').val($(this).val());
        var nullId = $(this).attr('data-null');
        $(".input-field").removeClass('disabled');
        $('#' + nullId).parent('.input-field').addClass('disabled');
        summ();
    });

    $("input[name='color']").change(function () {
        console.log("click");
        color = $(this).data('price');
        console.log(color);
        summ();
    });

    $("input[name='pattern']").change(function () {
        pattern = $(this).data('price');
        console.log(pattern);
        $('#pattern-hide').val($(this).val());
        summ();
    });


    function summ() {
        material = Number(material);
        color = Number(color);
        pattern = Number(pattern);
        amount = Number($('.product__form-counter').find('input').val());
        $(".price p").text((material + color + pattern) * amount);
        $('#price-hide').val($('.price p'));
    }


    // send data to hidden inputs
    $('.product__form-btn').on('click', function () {
        $('#amount-hide').val($('.product__form-counter').find('input').val());

        $("input[name='color']:checked").each(function () {
            if ($(this).hasClass('izzyColor')) {
                $('#color-hide').val('RAL' + $('.colortext').val());
            } else {
                $('#color-hide').val($(this).val());
            }
        });

    });


    // change color product images

    $(".tab").first().addClass('active');
    $(".tab-item").first().addClass('active-tab');

    $('.tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.tab-item').removeClass('active-tab').hide();
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-tab').fadeIn(200);
        createSlider();
    });





    // create product slider classes
    function createSlider() {
    $(".product__img").each(function() {
    if($(this).hasClass("active-tab")){
        $(this).find(".small").addClass("smallImage");
        $(this).find(".big").addClass("bigImage");
    } else{
        $(this).find(".small").remove("smallImage");
        $(this).find(".big").remove("bigImage");
    }
    });
        console.log('create done');
    }
    createSlider();

});