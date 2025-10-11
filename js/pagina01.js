// Referencias a los elementos del DOM
const btnStart = document.getElementById("startRandom");
const inputNumero = document.getElementById("inputNumero");
const form = document.querySelector("form");

let numeroSecreto = null;
let intentos = 0;
let juegoActivo = false;

// 🎲 Función para generar número aleatorio entre 1 y 100
function generarNumero() {
  return Math.floor(Math.random() * 100) + 1;
}

// 🟡 Cuando el usuario hace clic en “Comenzar el juego”
btnStart.addEventListener("click", () => {
  numeroSecreto = generarNumero();
  intentos = 0;
  juegoActivo = true;
  inputNumero.value = "";
  inputNumero.focus();
  alert("🎯 El juego comenzó. Adivina el número entre 1 y 100.");
});

// 🔵 Cuando el usuario envía el formulario
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recargar la página

  if (!juegoActivo) {
    alert("Primero presioná 'Comenzar el juego' 😉");
    return;
  }

  const numeroUsuario = Number(inputNumero.value);

  // Validación de rango
  if (numeroUsuario < 1 || numeroUsuario > 100) {
    alert("⚠️ Ingresá un número entre 1 y 100.");
    return;
  }

  intentos++;

  // Comparación
  if (numeroUsuario === numeroSecreto) {
    alert(
      `🎉 ¡Acertaste! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.`
    );
    juegoActivo = false;
  } else if (numeroUsuario < numeroSecreto) {
    alert("🔼 El número secreto es mayor.");
  } else {
    alert("🔽 El número secreto es menor.");
  }

  inputNumero.value = "";
  inputNumero.focus(); // Mantener el foco en el input
});
