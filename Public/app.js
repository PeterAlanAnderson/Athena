$(document).ready(function () {
  $('.carousel').carousel();
  $('.modal').modal();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    duration: 200
  });
   $('.sidenav').sidenav();
   $('.dropdown-trigger').dropdown();
});