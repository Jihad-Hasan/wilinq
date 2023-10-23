

$('.owl-carousel1').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay: false,
  dots: true,
  video:true,
  nav: false,
        lazyLoad:true,
        center:true,
  responsive : {
    // breakpoint from 0 up
    0 : {
        items:1,
        nav: false,
        dots: true,
    },
   
    480 : {
        items:1,
          nav: false,
          dots: true,
    },
    // breakpoint from 768 up
    768 : {
        items:1,
        nav: false,
        dots: true,
    },
    800:{
        items:1,
        nav:false,
        dots: true,
    },
    1000:{
        items:3,
        nav:false,
        loop:true,
        margin:10,
    }
},
  navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

});
$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: false,
    dots: true,
    video:true,
    nav: false,
          lazyLoad:true,
          center:true,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1,
          nav: false,
          dots: true,
      },
     
      480 : {
          items:1,
            nav: false,
            dots: true,
      },
      // breakpoint from 768 up
      768 : {
          items:1,
          nav: false,
          dots: true,
      },
      800:{
          items:1,
          nav:false,
          dots: true,
      },
      1000:{
          items:3,
          nav:true,
          loop:true,
          margin:10,
      }
  },
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  
  });

  $('.author-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 3500
  });