$(document).ready(function(){
    $(".banner_carousel").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      navText:['<span><i class="fa-solid fa-angle-left"></i></span>', '<span><i class="fa-solid fa-angle-right"></i></span>'],

    });
  });

  $(document).ready(function(){
    $(".brand_carousel").owlCarousel({
      items:5,
      loop:true,
      nav:true,
      navText:['<span><i class="fa-solid fa-angle-left"></i></span>', '<span><i class="fa-solid fa-angle-right"></i></span>'],
     

      responsive:{
        0:{
          items:1,
          autoplay:true,
          autoplayTimeout:2000,
          smartSpeed:750,
        },
        576:{
          items:2,
        },
        768:{
          items:3,
        },
        992:{
          items:5,
        }
      }

      


      

    });
  });