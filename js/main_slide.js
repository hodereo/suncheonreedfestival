$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows: true,
        dots : false,
        autoplay : true,
        autoplaySpeed : 2000,
        pauseOnHover : false,
        fade:true
      });
})