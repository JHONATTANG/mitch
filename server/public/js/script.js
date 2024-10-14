console.log("Hola");
$('#nav__link__sub').hover(function() {
    $('.nav-items-1').toggleClass('navActive')
  })
console.log("Hola");


const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});



