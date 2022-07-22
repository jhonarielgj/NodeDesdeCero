let contendor;
window.onload = cargar;

function cargar() {
  contendor = document.querySelector(".contenedor");
  console.log("contendor: ", contendor);
  contendor.insertAdjacentHTML(
    "beforeend",
    "<h3>Ya esto es desde JavaScript</h3>"
  );
}
