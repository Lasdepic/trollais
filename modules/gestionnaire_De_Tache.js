import { saveTasks } from "./localStorage.js";

export function addTask(tacheData) {
  const ulList = document.querySelector(".listTask");
  
  let taskText;
  if (tacheData) {
    taskText = tacheData.name;
  } else {
    taskText = prompt("Donner la priorité de votre tâche :");
  }
  
  if (taskText) {
    // Création de la liste
    const task = document.createElement("li");

    // Restaure le fond
    if (tacheData && tacheData.backgroundColor) {
      task.style.backgroundColor = tacheData.backgroundColor;
    }

    // -----------------------------------------------------DATE && HEURE-----------------------------------------------------------

    const delaiDate = document.createElement("input");
    delaiDate.type = "date";
    delaiDate.className = "delai";
    delaiDate.value = tacheData ? tacheData.date : "";
    task.appendChild(delaiDate);

    const heureDelai = document.createElement("input");
    heureDelai.type = "time";
    heureDelai.className = "heure";
    heureDelai.value = tacheData ? tacheData.time : "";
    task.appendChild(heureDelai);

    delaiDate.addEventListener("change", () => {
      checkDateTime();
      saveTasks();
    });
    heureDelai.addEventListener("change", () => {
      checkDateTime();
      saveTasks();
    });

    function checkDateTime() {
      const now = new Date();
      const selectedDate = new Date(delaiDate.value + ' ' + heureDelai.value);
      
      if (selectedDate <= now) {
        task.style.backgroundColor = "red";
        alert("Délai dépassé");
      } else {
        task.style.backgroundColor = tacheData ? tacheData.backgroundColor : "";
      }
    }

    const colors = [
      { name: "Rouge", value: "#FC4444" },
      { name: "Vert", value: "#80D171" },
      { name: "Bleu", value: "#28B4FC" },
      { name: "Orange", value: "#FF9938" },
      { name: "Jaune", value: "#FFF957" },
      { name: "Violet", value: "#DA8DFC" },
    ];

    const colorSelect = document.createElement("select");

    for (let i = 0; i < colors.length; i++) {
      const option = document.createElement("option");
      option.value = colors[i].value;
      option.textContent = colors[i].name;
      if (tacheData && tacheData.colorSelect === colors[i].value) {
        option.selected = true;
      }
      colorSelect.appendChild(option);
    }
    task.appendChild(colorSelect);

    colorSelect.addEventListener("change", (element) => {
      task.style.backgroundColor = element.target.value;
      saveTasks();
    });

    // Créer le conteneur pour le nom et les boutons
    const taskHeader = document.createElement("div");
    taskHeader.className = "task-header";

    // Créer l'élément pour le nom de la tâche
    const taskName = document.createElement("span");
    taskName.className = "task-name";
    taskName.textContent = taskText;

    // Créer le groupe de boutons
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";

    task.appendChild(taskHeader);
    taskHeader.appendChild(taskName);
    taskHeader.appendChild(buttonGroup);
    ulList.appendChild(task);

    // Création button ajouter dans une liste dans la tâche
    const addlist = document.createElement("button");
    addlist.innerHTML = '<ion-icon name="add-circle-outline"></ion-icon>';
    buttonGroup.appendChild(addlist);

    // Création du button modifier dans le li
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
    buttonGroup.appendChild(editBtn);

    // Modifie le nom de la tâche
    editBtn.addEventListener("click", () => {
      const newText = prompt("Modifier la tâche :", taskName.textContent);
      if (newText) {
        taskName.textContent = newText;
      }
      saveTasks();
    });

    // Création du button delete dans le li
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    buttonGroup.appendChild(deleteBtn);
    deleteBtn.className = "deleteBtn";

    //suppr la list
    deleteBtn.addEventListener("click", () => {
      task.remove();
      saveTasks();
    });

    // Restaurer les sous-tâches si elles existent
    if (tacheData && tacheData.subTasks) {
      tacheData.subTasks.forEach(subTaskData => {
        createSubTask(task, subTaskData.name, subTaskData);
      });
    }

    // Fonction pour créer une sous-tâche (extraite pour réutilisation)
    function createSubTask(parentTask, subTaskName, subTaskData = null) {
      const subList = document.createElement("ul");
      parentTask.appendChild(subList);

      const taskInto = document.createElement("li");
      taskInto.textContent = subTaskName;
      subList.appendChild(taskInto);

      if (subTaskData && subTaskData.backgroundColor) {
        taskInto.style.backgroundColor = subTaskData.backgroundColor;
      }
      
      const deleteBtnSubList = document.createElement("button");
      deleteBtnSubList.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
      taskInto.appendChild(deleteBtnSubList);
      deleteBtnSubList.className = "deleteBtnSubList";

      deleteBtnSubList.addEventListener("click", () => {
        subList.remove();
        saveTasks();
      });

      const colors = [
        { name: "Bloqué", value: "#FF1E00" },
        { name: "Validé", value: "#008015" },
        { name: "En cour", value: "#2A3CC9" },
        { name: "Priorité", value: "#FF7000" },
        { name: "A traité", value: "#D9D918" },
        { name: "A tester", value: "#8C4CC2" },
      ];
      
      const colorSelect = document.createElement("select");

      for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option");
        option.value = colors[i].value;
        option.textContent = colors[i].name;
        if (subTaskData && subTaskData.colorSelect === colors[i].value) {
          option.selected = true;
        }
        colorSelect.appendChild(option);
      }
      subList.appendChild(colorSelect);

      colorSelect.addEventListener("change", (element) => {
        taskInto.style.backgroundColor = element.target.value;
        saveTasks();
      });
// Drag an drop // https://www.npmjs.com/package/sortablejs
      if (typeof Sortable !== "undefined") {
        new Sortable(subList, {
          group: "souslistes-partagees",
          animation: 150,
          swapThreshold: 0.65,
          ghostClass: "sortable-ghost",
          onEnd: () => saveTasks()
        });
      }
    }

    // Création d'une liste dans une liste
    if (addlist) {
      addlist.addEventListener("click", () => {
        const taskIntoName = prompt("donner le nom tâche :");
        if (taskIntoName) {
          createSubTask(task, taskIntoName);
          saveTasks();
        }
      });
    }

    // Sauvegarder après création si c'est une nouvelle tâche
    if (tacheData) {
      saveTasks();
    }
  }
}

// drag and drop //    https://www.npmjs.com/package/sortablejs
document.addEventListener("DOMContentLoaded", function () {
  let dragAndDrop = document.querySelector(".listTask");
  if (dragAndDrop) {
    new Sortable(dragAndDrop, { 
      animation: 150,
      onEnd: () => saveTasks()
    });
  }
});