console.log("Hola");

///// CONTENIDO DE PRUEBA
/*$('#nav__link__sub').hover(function() {
    $('.nav-items-1').toggleClass('navActive')
  })
console.log("Hola");


const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});


*/

// FUNCION DE CARGUE PARA SECTIONS

function loadSection(event, section){ 
  console.log(`HolaFunction en seccion: ${section}`);
  //evitar cambiar url o recargar la página
  event.preventDefault();
  
  //Realizar la peticion al servidor para obtener el contenido
  fetch(`/section/${section}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Sección no encontrada');
      }
      return response.text();
    })
    .then(data => {
      console.log("Esta buscando el inner");
      document.getElementById('dynamicSection').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar la seccion: ',error));
}


// FUNCION PARA MENU RESPONSIVE

document.addEventListener("DOMContentLoaded", () =>{
  const toogleButton = document.querySelector(".navbar__toogle-btn");
  const mobileMenu = document.querySelector(".navbar__list-mobile");

  // si el menu esta oculto o vacio, lo muestre cambiando a flex, si esta visible lo cambie a none
  const toogleMenu = () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "none" || mobileMenu.style.display === ""
      ? "flex"
      : "none";
  };

  const hideMenuResize = () => {
    mobileMenu.style.display = "none"
  }

  toogleButton.addEventListener("click",toogleMenu);
  window.addEventListener("resize",hideMenuResize);
  window.addEventListener("load",hideMenuResize);

})


