$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});

$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});


let usersSwiper = new Swiper(".reviews-slider", {
    loop: true,
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 12,
    mousewheel: true,
    speed: 1200,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {

        '1020': {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 10,
            direction: "horizontal",
            mousewheel: false,
            slidesPerGroup: 1,
            autoplay: false,
        },
        '570': {
            slidesPerGroup: 1,

            slidesPerView: 1,
            spaceBetween: 10,
            direction: "horizontal",
            mousewheel: false,
            autoplay: false,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            direction: "horizontal",
            mousewheel: false,
            autoplay: false,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});


const sliderContainer = document.querySelector(".reviews-slider");

sliderContainer.addEventListener("mouseenter", () => {
    usersSwiper.autoplay.stop();
});

sliderContainer.addEventListener("mouseleave", () => {
    usersSwiper.autoplay.start();
});




let shadesSwiper = new Swiper(".shades-speech-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});