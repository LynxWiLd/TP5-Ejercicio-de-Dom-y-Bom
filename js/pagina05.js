let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo; // guardará el setInterval

function actualizarCronometro() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  // Formatear con ceros delante
  const formatoHoras = horas < 10 ? "0" + horas : horas;
  const formatoMinutos = minutos < 10 ? "0" + minutos : minutos;
  const formatoSegundos = segundos < 10 ? "0" + segundos : segundos;

  document.getElementById(
    "cronometro"
  ).textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

function iniciar() {
  // Evita que se inicie más de un intervalo
  if (!intervalo) {
    intervalo = setInterval(actualizarCronometro, 1000);
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function reiniciar() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById("cronometro").textContent = "00:00:00";
}
