
/* -----------------------------------------------------
    01. Popup
----------------------------------------------------- */
// Popup with Slider
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
/* -----------------------------------------------------
    02. Progress Bar
----------------------------------------------------- */

$(".animated-progress span").each(function () {
    $(this).animate(
    {
        width: $(this).attr("data-progress") + "%",
    },
    1000
    );
    $(this).text($(this).attr("data-progress") + "%");
});
/* -----------------------------------------------------
    03. Counter
----------------------------------------------------- */

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
/* -----------------------------------------------------
    04. Testimonial Slider 
----------------------------------------------------- */
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
/* -----------------------------------------------------
    05. Wow js
----------------------------------------------------- */
new WOW().init();

