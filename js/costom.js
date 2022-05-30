$(document).ready(function() {
    'use strict';

    $(window).load(function() {
        $(".preloader").delay(2000).fadeOut(700);
        
        $(".preloader").fadeOut(700);
        
    })
  

    $('.banner-slider').slick({
        arrows: true,
        autoplay: false,
        prevArrow:'.b-left-arrow',
        nextArrow:'.b-right-arrow',

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    prevArrow:'.b-left-arrow',
                    nextArrow:'.b-right-arrow',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    prevArrow:'.b-left-arrow',
                    nextArrow:'.b-right-arrow',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    prevArrow:'.b-left-arrow',
                    nextArrow:'.b-right-arrow',
                }
            },

        ],
    });




    $('#blog-bg .blog-slider').slick({
        arrows:true,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow:'.left-arrow',
        nextArrow:'.right-arrow',

        
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },

        ],
    });




    $('.testimonial-bg .test-slider1').slick({
        arrows:true,
        slidesToShow: 1,
        slidesToScroll:1,
        asNavFor: '.test-slider2',
        prevArrow:'.test-left-arrow',
        nextArrow:'.test-right-arrow',
    });

    $('.testimonial-bg .test-slider2').slick({
        arrows:false,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.test-slider1',
    });






    $('.brand-slider').slick({
        arrows:true,
        slidesToShow: 5,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow:'.leftarrow',
        nextArrow:'.rightarrow',

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    autoplay: false,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                    autoplay: false,
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                    autoplay: true,
                }
            },
        ],
    });


});


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

new WOW().init();


