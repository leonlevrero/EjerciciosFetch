// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "https://dog.ceo/api/breeds/image/random"; // URL que contiene los datos que queremos mostrar (necesitamos acceder al campo "message")

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él
const btnAddImage = document.getElementById("btnAddImage"); // "Traemos" utilizando el DOM el botón de id "btnAddImage" para asociarle un "escuchador de eventos" para el "click" del usuario

// Escribe el código necesario para añadir el evento click al botón que permita agregar perros al div de id "container"
fetch(DATA_URL) // Se hace una petición al archivo JSON
.then(response => response.json()) // Se convierte el response en un objeto JSON
.then(data=> addImage(data.message)) // Se llama a la función que muestra los datos en el DOM
.catch(error => console.log(error)); // Se captura el error en caso de que no se pueda obtener la información


function addImage(imgURL) {
  btnAddImage.addEventListener("click", () => {
  container.innerHTML += `<img src="${imgURL}"/>`; // Se concatena cada imagen al innerHTML del contenedor
}
 );}



addImage(); // Se llama a la función que muestra los datos en el DOM para que se muestren al cargar la página