// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
fetch(DATA_URL) // Se hace una petición al archivo JSON
  .then(response => response.json()) // Se convierte el response en un objeto JSON
  .then(data=> showData(data)) // Se llama a la función que muestra los datos en el DOM
  .catch(error => console.log(error)); // Se captura el error en caso de que no se pueda obtener la información


function showData(data) {
  // El for itera sobre los elementos del array
  for (const item of data.students) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}
showData(); // Se llama a la función que muestra los datos en el DOM para que se muestren al cargar la página
// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData
