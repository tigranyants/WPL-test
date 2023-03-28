 //!! HEADER ONSCROLL CHANGE COLOR
 window.addEventListener("scroll", checkScroll);

 var header = document.getElementById("header");
 
 function checkScroll() {
   let scrollPos = window.scrollY;
 
   if (scrollPos > 0) {
     header.classList.add("active");
   } else {
     header.classList.remove("active");
   }
 }
 
 // !!


  // !!Video popup
  $('.play__icon').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});


// !!BURGER
$("#icon").click(function () {
    $(".header__nav").toggleClass("active");
    $("#icon").toggleClass("active");
    $("#body").toggleClass("active");
  });
//  !! 