$(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
});

$('.go-top').on('click', function () {
    $("html, body").animate({
        scrollTop: "0"
    }, 1200);
});

Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: {
      display: {
        left: [
            ["infobar"],
        ],
        right: ["fullscreen","close" ],
      }
    }
  });

$(".animated-progress span").each(function () {
    $(this).animate(
    {
        width: $(this).attr("data-progress") + "%",
    },
    1000
    );
    $(this).text($(this).attr("data-progress") + "%");
});


let count = document.querySelectorAll(".count")
let arr = Array.from(count)

    arr.map(function(item){
    let startnumber = 0

    function counterup(){
    startnumber++
    item.innerHTML= startnumber
    
    if(startnumber == item.dataset.number){
        clearInterval(stop)
    }
    }

    let stop =setInterval(function(){
    counterup()
    },40)

});

$(".testimonial-wrapper").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});



const goToTopBtn = document.getElementById('goToTopBtn');

goToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


$(function() {
    $('.imgsItem').mouseenter(function() {
        console.log($(this).children('.alertimg').width()) //每项的宽度
        $(this).children('.alertimg').css('left', -$(this).children('.alertimg').width() / 2 +
            20) //根据每项的宽度，自定义left的距离
        $(this).children('.alertimg').addClass('alertimg_hover')
    }).mouseleave(function() {
        $(this).children('.alertimg').removeClass('alertimg_hover')
        $(this).siblings().children('.alertimg').removeClass('alertimg_hover')
    })
})



new WOW().init();

