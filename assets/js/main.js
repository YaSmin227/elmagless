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
// nice slsect
$(document).ready(function () {
  $('.nice-select').niceSelect();
});


// Toggle hide and show password
$(document).ready(function () {
  $(".show-hidePassword").click(function () {
    console.log('test');
    var passwordInput = $($(this).siblings(".password-input"));
    if (passwordInput.attr("type") == "password") {
      passwordInput.attr("type", "text");
      $(this).find(".fa-eye-slash").removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
      passwordInput.attr("type", "password");
      $(this).find(".fa-eye").removeClass("fa-eye").addClass("fa-eye-slash");
    }
  });
})

function auto_tab_input() {
  $(".code-inputs .form-control").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).nextAll(".code-inputs .form-control:enabled:first").focus();
    }
  });
}
function auto_backspace() {
  $(".code-inputs .form-control").keyup(function (e) {
    if (e.keyCode == 8) {
      if ($(this).prev().length > 0) {
        $(this).prev("input").focus();
      }
    }
  });
}
function on_Input_Func(input) {
  // console.log('done');
  if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
}
$(document).ready(function () {
  auto_tab_input();
  auto_backspace();
});

// Data Table
$(document).ready(function () {
  $('#example').dataTable();
});



// owl carousel
// $('.owl-carousel').owlCarousel({
//   rtl: true,
//   loop: true,
//   margin: 0,
//   dots: true,
//   arrow: true,
//   nav: true,
//   items: 1,
//   lazyLoad: true,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   autoplayTimeout: 5000,
//   autoplayHoverPause: true,
//   center: true,
// })

// owl carousel
// $('.owl-carousel').owlCarousel({
//   rtl: true,
//   loop: true,
//   margin: 0,
//   dots: true,
//   arrow: true,
//   nav: true,
//   items: 1,
//   lazyLoad: true,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   autoplayTimeout: 5000,
//   autoplayHoverPause: true,
//   center: true,
// })

// owl carousel
$('.owl-carousel').owlCarousel({
  rtl: true,
  loop: true,
  margin: 0,
  dots: true,
  arrow: true,
  nav: true,
  items: 1,
  center: true,
})


