
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
        speed: 900,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 1300,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
            },
        },
    });

    // ------ accordeon ------- //

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
        speed: 1400,
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

    baguetteBox.run('.gallery', {
        animation: 'fadeIn',
        noScrollbars: true
    });


});