/* global document , $ , window*/
$(window).on('load' , function () {
        $('.loader').fadeOut(500,function(){
            $(this).remove();
        });

        $('body').addClass('over-y');
    })

$(document).ready(function () {
    
    'use strict';
    
//  news scroll function
    
    $('.nav-news .head-news .fa-chevron-down').click(function () {
        $('.nav-news .head-news .news-cont').scrollTop($('.nav-news .head-news .news-cont').scrollTop() + 25)
    })
    $('.nav-news .head-news .fa-chevron-up').click(function () {
        $('.nav-news .head-news .news-cont').scrollTop($('.nav-news .head-news .news-cont').scrollTop() - 25)
    })
    
    
//  date function
    
    var d = new Date();
    document.getElementById("demo").innerHTML = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    
    
    
//     toggler button animate
    var span = $('.navbar-toggl span'),
        overlay = $('.main-nav .overlay'),
        collapse = $('.navbar-collapse'),
        button = $('.navbar-toggl');
    
    button.click(function () {
        collapse.toggleClass('translate-right');
        overlay.toggleClass('translate-left');
        span.toggleClass('nav-toggler');
        $('.main-nav').toggleClass('zindex');
        
    });

    
    overlay.click(function () {
        collapse.toggleClass('translate-right');
        overlay.toggleClass('translate-left');
        span.toggleClass('nav-toggler');
        $('.main-nav').toggleClass('zindex');
    });
    
    
    
    
    
//    .shots button 
    
    
    
    
//    
//    
////    play video function
//    
//    
//    $('.video-block .frame').click(function () {
//        
//        if ($(this).find('video').hasClass('paused')) {
//            
//            $(this).find('video').get(0).play();
//            $(this).find('video').removeClass('paused').css('z-index', 1);
//            $(this).find('img').css('opacity', 0);
//            $(this).parents('.video-block').find('.info').css('top', 0)
//            
//        } else {
//            
//            $(this).find('video').get(0).pause()
//            $(this).find('video').addClass('paused').css('z-index', -1)
//            $(this).find('img').css('opacity', 1)
//            $(this).parents('.video-block').find('.info').css('top', -55)
//            
//        }
//        
//    })
//    
    
    
    /*************** owl function ******************/
    
    
//    main slider
    $('.slider-1').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: true,
        dots: false,
        autoWidth: false,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        dragEndSpeed: 2000,
        slidSpeed: 900,
        paginationSpeed: 900,
        navText: [
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    //    ebl slider
    $('.slider-2').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        nav: true,
        dots: false,
        autoWidth: false,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        dragEndSpeed: 2000,
        slidSpeed: 900,
        paginationSpeed: 900,
        navText: [
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
  
});
