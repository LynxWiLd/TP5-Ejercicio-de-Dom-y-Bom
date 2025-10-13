const btnCrear = document.getElementById("btnCrear");

btnCrear.addEventListener("click", function (event) {
  event.preventDefault();
  if (document.getElementById("nuevaTarea").value === "") {
    alert("⚠️ No podés añadir una tarea vacía");
  } else {
    alert("✅ Tarea añadida correctamente");
    document.getElementById("lista").innerHTML =
      `
        <li class="list-group-item d-flex justify-content-between align-items-center mb-2 border-bottom">
            ${document.getElementById("nuevaTarea").value}
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </li>
    ` + document.getElementById("lista").innerHTML;

    document.getElementById("nuevaTarea").value = "";

    const btnEliminar = document.querySelectorAll(".btn-danger");
    btnEliminar.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.target.parentElement.remove(); // Elimina el elemento padre (li)
        alert("🗑️ Tarea eliminada correctamente");
      });
    });
  }
});
