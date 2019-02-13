var hamburger = document.querySelector('.hamburger-button');
var mobileMenu = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', function (event) {
  event.preventDefault();
  mobileMenu.classList.toggle('show');
});

var mobile = window.matchMedia("screen and (min-width: 768px)");

mobile.addListener( function(mobile) {
  if (mobile.matches) {
    /* tutaj ekran jest mniejszy lub równy 768px*/
    mobileMenu.classList.remove('show')
  }
});

