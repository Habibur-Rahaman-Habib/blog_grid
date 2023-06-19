// slick slider
$('.popular_slider').slick({
    dots: true,
    customPaging: function (slider, i) {
        return '<i class="fa-solid fa-circle"></i>';
    },
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1154,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 874,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 486,
            settings: {
                slidesToShow: 1
            }
        },
    ]

});