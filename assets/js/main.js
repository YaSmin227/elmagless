// wow 

// new WOW().init();
// toggle active class on header
let menuBtn = document.querySelectorAll('.list-links .nav-item')
menuBtn.forEach((li) => {
  li.addEventListener("click", (e) => {
    menuBtn.forEach((el) => el.classList.remove("active"));
    li.classList.add("active");
  });
});

var wow = new WOW(
  {
    boxClass: 'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

$('#gallaryCarousel').owlCarousel({
  loop: true,
  margin: 32,
  autoplay: true,
  // slideTransition: 'linear',
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  nav: false,
  rtl: true,
  stagePadding: 0,
  stageMargin: 0,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    778: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1440: {
      items: 4,
      loop: false
    }
  }
})
$('#videosCarousel').owlCarousel({
  loop: true,
  margin: 32,
  responsiveClass: true,
  nav: false,
  rtl: true,
  stagePadding: 0,
  stageMargin: 0,
  dots: true,
  autoplay: true,
  // slideTransition: 'linear',
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    778: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1440: {
      items: 2,
      loop: false
    }
  }
})
$('#testimonialsCarousel').owlCarousel({
  loop: true,
  margin: 32,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  nav: false,
  rtl: true,
  stagePadding: 0,
  stageMargin: 0,
  dots: true,

  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1440: {
      items: 3,
      loop: false
    }
  }
})

//Owl Carousel
$(".all-banner-slide").owlCarousel({
  items: 1,
  smartSpeed: 1000,
  autoplay: true,
  lazyLoad: true,
  dots: false,
  autoplayTimeout: 3000
});


// toggle language
$('.language').on('click', function () {
  console.log('test');
  $(this).addClass('d-none')
  $(this).siblings().removeClass('d-none')
})

