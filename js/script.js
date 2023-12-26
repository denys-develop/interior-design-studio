// Slider Testimonials
const owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    center: true,
    nav:false,
    smartSpeed: 500,
    items: 1,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})


$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})



