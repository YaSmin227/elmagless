// toggle active class on header
let menuBtn = document.querySelectorAll('.list-links .nav-item')
menuBtn.forEach((li) => {
  li.addEventListener("click", (e) => {
    menuBtn.forEach((el) => el.classList.remove("active"));
    li.classList.add("active");
  });
});


// 
window.onscroll = function () {
  var top = window.pageXOffset ? window.pageXOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
  var header = document.getElementById("main-header");
  if (top > 50) {
    header.style.position = "fixed";
    // header.style.height = "50px";
  } else {
    header.style.position = "relative";
    // header.style.height = "100px";
  }
}


// owl carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  items: 1,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
})


