export function addTask() {
  let tableauLocalStorage =  [
    {
      nomListe: "Liste",
      tache: ["Tache 1", "Tâche 2"],
    },
    {
      nomListe: "A faire",
      tache: ["Tache 1", "Tâche 2"],
    },
    {
      nomListe: "En progrès",
      tache: ["Tache 1", "Tâche 2"],
    },
    {
      nomListe: "A tester",
      tache: ["Tache 1", "Tâche 2"],
    },
    {
      nomListe: "Fini",
      tache: ["Tache 1", "Tâche 2"],
    },
  ];

  const btnAdd = document.querySelector(".btnAdd");
  const ulList = document.querySelector(".listTask");

  if (btnAdd && ulList) {
    btnAdd.addEventListener("click", () => {
      const taskText = prompt("Donner la priorité de votre tâche :");
      if (taskText) {

        // Création de la liste

        const task = document.createElement("li");
        task.textContent = taskText;
        ulList.appendChild(task);

        // Création button ajouter dans une liste dans la tâche

        const addlist = document.createElement("button");
        addlist.innerHTML = '<ion-icon name="add-circle-outline"></ion-icon>';
        task.appendChild(addlist);

        // Création du button modifier dans le li

        const editBtn = document.createElement("button");
        editBtn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
        task.appendChild(editBtn);

        // Création du button delete dans le li

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML =
          '<ion-icon name="close-circle-outline"></ion-icon>';
        task.appendChild(deleteBtn);
        deleteBtn.className = "deleteBtn";

        //surrp la list

        deleteBtn.addEventListener("click", () => {
          task.remove();
        });

        // Création d'une liste dans une liste

        if (addlist) {
          addlist.addEventListener("click", () => {
            const taskIntoName = prompt("donner le nom tâche :");

            if (taskIntoName) {
              const subList = document.createElement("ul");
              task.appendChild(subList);

              const taskInto = document.createElement("li");
              taskInto.textContent = taskIntoName;
              subList.appendChild(taskInto);

              //   creation du button de la sousliste

              const deleteBtnSubList = document.createElement("button");
              deleteBtnSubList.innerHTML =
                '<ion-icon name="close-circle-outline"></ion-icon>';
              taskInto.appendChild(deleteBtnSubList); // <-- Correction ici
              deleteBtnSubList.className = "deleteBtnSubList";

              // suppr la sousListe
              deleteBtnSubList.addEventListener("click", () => {
                taskInto.remove();
              });

              //   Creation du button change background color

              const colorBtn = document.createElement("input");
              colorBtn.innerHTML =
                '<ion-icon name="color-palette-outline"></ion-icon>';
              colorBtn.type = "color";
              subList.appendChild(colorBtn);
              colorBtn.addEventListener("input", (e) => {
                taskInto.style.backgroundColor = e.target.value;
              });
            }
          });
        }
      }
    });
  }
}
