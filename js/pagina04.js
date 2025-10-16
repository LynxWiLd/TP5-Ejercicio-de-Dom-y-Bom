//Reloj digital
function actualizarReloj() {
  const fecha = new Date(); // Obtener la fecha y hora actual
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  const ampm = horas >= 12 ? "PM" : "AM";
  const horaActual = `${horas}:${minutos}:${segundos} ${ampm}`;
  document.getElementById("reloj").textContent = horaActual;
  setTimeout(actualizarReloj, 1000);
}

//Fecha actual
function mostrarFecha() {
  const fecha = new Date();
  const opciones = { year: "numeric", month: "long", day: "numeric" };
  const fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);
  document.getElementById("fecha").textContent = fechaFormateada;
}

// Iniciar las funciónes al cargar la página
window.onload = function () {
  actualizarReloj();
  mostrarFecha();
};








// horas = horas % 12 || 12; // Convertir a formato 12 horas

//   horas = horas < 10 ? "0" + horas : horas; // Agregar cero delante si es menor a 10

//   minutos = minutos < 10 ? "0" + minutos : minutos; // Agregar cero delante si es menor a 10

//   segundos = segundos < 10 ? "0" + segundos : segundos; // Agregar cero delante si es menor a 10