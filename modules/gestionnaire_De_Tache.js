import { inputTasks, ul } from "./pages.js";

export function gestionnaireDeTache() {
  function addTask() {
    let nameTache = inputTasks.value;

    if (nameTache === "" || nameTache === null) {
      return;
    }

    let listeDeTache = document.createElement("li");
    listeDeTache.textContent = nameTache;

    // btn edit

    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
    editBtn.onclick = function () {
        const newName = prompt('Modifier le nom de la tâche :', listeDeTache.textContent)
        if ( newName !== null && newName !== ""){
            listeDeTache.firstChild.textContent = newName;
        }
    };

    listeDeTache.appendChild(editBtn);

    // btn suppr

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    deleteBtn.onclick = function () {
      listeDeTache.remove();
    };

    listeDeTache.appendChild(deleteBtn);
    deleteBtn.className = "deleteBtn";

    // Ajouter des tâches à la liste
    ul.appendChild(listeDeTache);

    // Vider l'input
    inputTasks.value = "";
  }

  // Event listener en dehors de la fonction addTask
  inputTasks.addEventListener("keypress", function (press) {
    if (press.key === "Enter") {
      addTask();
    }
  });
}
