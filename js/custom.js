$(function() {

    // portfolio venobox

    $('.venobox').venobox({
        spinner: 'three-bounce',
        spinColor: '#e5493a',
        arrowsColor: '#e5493a',
        closeColor: '#e5493a',
        bgcolor: '#e5493a',
    });

    // portfolio progress bar

    $('.circlechart').circlechart();

    // portfolio counter up

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // choose part verticle slider

    $('.verticle-main').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
        arrows: false,
        pauseOnHover: false,
        dots: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    vertical: false,
                    arrows: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    vertical: true,
                    arrows: false,
                    pauseOnHover: false,
                }
            },
        ]
    });

    // blog part slider

    $('.blog-main-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        arrows: false,
        pauseOnHover: false,
        dots: true,
    });

    // theme part slider

    $('.clear-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
        arrows: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true,
                    arrows: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true,
                    arrows: false,
                    pauseOnHover: false,
                }
            },
        ]
    });


    // brand part slider

    $('.brand-main').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        arrows: true,
        prevArrow: '.brand-icon1',
        nextArrow: '.brand-icon2',
        pauseOnHover: false,
        responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '.brand-icon1',
                    nextArrow: '.brand-icon2',
                    pauseOnHover: false,
                }
            },
        ]

    });

    //footer slider

    $('.footer-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
        arrows: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                vertical: true,
                arrows: false,
                pauseOnHover: false,
            }
        }, ]
    });

    // footer venobox

    $('.veno').venobox({
        spinner: 'three-bounce',
        spinColor: '#e5493a',
        bgcolor: '#e5493a',
    });

    // back to top part js

    $(function() {

        $('.back-top').click(function() {
            $('html,body').animate({ scrollTop: 0 }, 1500);
        })
    });

    $(window).scroll(function() {

        var move = $(this).scrollTop();

        if (move > 300) {
            $('.back-top').fadeIn(500);
        } else {
            $('.back-top').fadeOut(500);
        }
    });

    // preloader js

    $(window).on('load', function() {
        $('.preloader').delay(500).fadeOut(500);
    });

    // smooth sroll plugin

    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 108 });
    });


    //Scrool spy plugin

    $(window).on('scroll', function() {
        var scrollamount = $(this).scrollTop();
        scrollLink.each(function() {
            var scrolloffset = $(this.hash).offset().top - 110;

            if (scrollamount > scrolloffset) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    // Scroll Indicator

    window.onscroll = function() { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementsByClassName('bar')[0].style.width = scrolled + "%";
    }


    // navbar toggler js

    $('.navbar-toggler').on('click', function() {
        $('.fa-close').toggleClass('fa-bars');

    });
















});