//* slider
$(document).ready(function(){
  $('.happyclient__slider').slick({
    infinite: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  });
});
//* menu
let menu = document.querySelector('.header__menu');
let header = document.querySelector('.header__nav');
menu.addEventListener('click', () =>{
  menu.classList.toggle('active');
  header.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
})