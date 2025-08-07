import { inputTasks, ul } from "./pages.js";

export function gestionnaireDeTache() {
  function addTask() {
    let nameTache = inputTasks.value.trim();

    if (nameTache === "" || nameTache === null) {
      return;
    }

    let listeDeTache = document.createElement("li");
    listeDeTache.textContent = nameTache;

    // btn edit
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
    editBtn.className = "editBtn";
    editBtn.onclick = function () {
      const newName = prompt(
        "Modifier le nom de la tâche :",
        listeDeTache.firstChild.textContent
      );
      if (newName !== null && newName.trim() !== "") {
        listeDeTache.firstChild.textContent = newName.trim();
      }
    };

    // btn suppr
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function () {
      listeDeTache.remove();
    };

    // Ajouter les boutons à la tâche
    listeDeTache.appendChild(editBtn);
    listeDeTache.appendChild(deleteBtn);

    // Ajouter la tâche à la liste
    ul.appendChild(listeDeTache);

    // Vider l'input
    inputTasks.value = "";
  }

  // Event listener pour la touche Enter (une seule fois)
  inputTasks.addEventListener("keypress", function (press) {
    if (press.key === "Enter") {
      addTask();
    }
  });

  // Retourner la fonction addTask pour pouvoir l'utiliser ailleurs
  return { addTask };
}
