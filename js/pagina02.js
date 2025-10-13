class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añonacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añonacimiento = añonacimiento;
  }

  mostrarGeneracion() {
    const año = this.añonacimiento;
    let mensaje = "";

    if (año >= 1994 && año <= 2010) {
      mensaje = "Generación Z, el rasgo característico es la irreverencia";
    } else if (año >= 1981 && año <= 1993) {
      mensaje =
        "Generación Y (Millennials), el rasgo característico es la frustración";
    } else if (año >= 1969 && año <= 1980) {
      mensaje =
        "Generación X, el rasgo característico es la obsesión por el éxito";
    } else if (año >= 1949 && año <= 1968) {
      mensaje = "Baby Boom, el rasgo característico es la ambición";
    } else if (año >= 1930 && año <= 1948) {
      mensaje = "Silent Generation, el rasgo característico es la austeridad";
    } else {
      mensaje = "Año de nacimiento no válido";
    }

    document.getElementById("resultados").innerHTML = `
      <div class="alert alert-info mt-3">${mensaje}</div>
    `;
  }

  esMayorDeEdad() {
    const mensaje =
      this.edad >= 18 ? "Es mayor de edad ✅" : "Es menor de edad ❌";

    document.getElementById("resultados").innerHTML = `
      <div class="alert alert-warning mt-3">${mensaje}</div>
    `;
  }

  mostrarDatos() {
    document.getElementById("resultados").innerHTML = `
      <div class="card mt-3 p-3">
        <h5>Datos de la persona</h5>
        <p><strong>Nombre:</strong> ${this.nombre}</p>
        <p><strong>Edad:</strong> ${this.edad}</p>
        <p><strong>DNI:</strong> ${this.dni}</p>
        <p><strong>Sexo:</strong> ${this.sexo}</p>
        <p><strong>Peso:</strong> ${this.peso} kg</p>
        <p><strong>Altura:</strong> ${this.altura} m</p>
        <p><strong>Año de nacimiento:</strong> ${this.añonacimiento}</p>
      </div>
    `;
  }
}

// 🔹 Declaramos persona fuera para que sea accesible desde otros eventos
let persona = null;

// 🔹 Capturamos los elementos del DOM
const btnCrear = document.getElementById("btnCrear");
const generacion = document.getElementById("generacion");
const mayoMen = document.getElementById("mayoMen");

// 🔹 Evento para crear la persona
btnCrear.addEventListener("click", function (event) {
  event.preventDefault(); // Evita el envío del formulario y recarga de la página

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const añonacimiento = parseInt(
    document.getElementById("anioNacimiento").value
  );

  if (
    !nombre ||
    isNaN(edad) ||
    isNaN(peso) ||
    isNaN(altura) ||
    isNaN(añonacimiento)
  ) {
    alert("⚠️ Por favor, completá todos los campos correctamente.");
    return;
  }

  persona = new Persona(nombre, edad, dni, sexo, peso, altura, añonacimiento);
  persona.mostrarDatos();
});

// 🔹 Evento para mostrar la generación
generacion.addEventListener("click", function () {
  if (persona) {
    persona.mostrarGeneracion();
  } else {
    alert("⚠️ Primero debés crear una persona.");
  }
});

// 🔹 Evento para verificar si es mayor de edad
mayoMen.addEventListener("click", function () {
  if (persona) {
    persona.esMayorDeEdad();
  } else {
    alert("⚠️ Primero debés crear una persona.");
  }
});
