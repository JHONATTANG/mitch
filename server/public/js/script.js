// FUNCION PARA MENU RESPONSIVE

document.addEventListener("DOMContentLoaded", () => {
  const toogleButton = document.querySelector(".navbar__toogle-btn");
  const mobileMenu = document.querySelector(".navbar__list-mobile");
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

// FUNCION DE CARGUE PARA SECTIONS

function loadSection(event, section){
  event.preventDefault();

//Realizar la peticion al servidor para obtener el contenido
fetch(`/section/${section}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Secci車n no encontrada');
    }
    return response.text();
  })
  .then(data => {
    console.log("Esta buscando el inner");
    document.getElementById('dynamicSection').innerHTML = data;
  })
  .catch(error => console.error('Error al cargar la seccion: ',error));
}
