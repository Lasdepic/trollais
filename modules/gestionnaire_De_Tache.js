export function addTask() {
  const btnAdd = document.querySelector(".btnAdd");
  const ulList = document.querySelector(".listTask");

  if (btnAdd && ulList) {
    btnAdd.addEventListener("click", () => {
      const taskText = prompt("Donner la priorité de votre tâche :");
      if (taskText) {
        // Création de la liste
        const task = document.createElement("li");

        // -----------------------------------------------------DATE && HEURE-----------------------------------------------------------

        const delaiDate = document.createElement("input");
        delaiDate.type = "date";
        delaiDate.className = "delai";
        task.appendChild(delaiDate);

        const heureDelai = document.createElement("input");
        heureDelai.type = "time";
        heureDelai.className = "heure";
        task.appendChild(heureDelai);

        delaiDate.addEventListener("change", checkDateTime);
        heureDelai.addEventListener("change", checkDateTime);

        function checkDateTime() {
          if (delaiDate.value >= delaiDate && heureDelai.value >= heureDelai) {
            task.style.backgroundColor = "red";
            alert("Délai dépassé");
          } else {
            task.style.backgroundColor = "";
          }
        }

        // ------------------------------------------------------------------------------------------------------------------------------

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
          colorSelect.appendChild(option);
        }
        task.appendChild(colorSelect);

        colorSelect.addEventListener("change", (e) => {
          task.style.backgroundColor = e.target.value;
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
        });

        // Création du button delete dans le li
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML =
          '<ion-icon name="close-circle-outline"></ion-icon>';
        buttonGroup.appendChild(deleteBtn);
        deleteBtn.className = "deleteBtn";

        //suppr la list
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
              taskInto.appendChild(deleteBtnSubList);
              deleteBtnSubList.className = "deleteBtnSubList";

              // suppr la sousListe
              deleteBtnSubList.addEventListener("click", () => {
                subList.remove();
              });

              //   Creation du button change background color
              
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
                colorSelect.appendChild(option);
              }
              taskInto.appendChild(colorSelect);

              colorSelect.addEventListener("change", (e) => {
                taskInto.style.backgroundColor = e.target.value;
              });
            }
          });
        }
      }
    });
  }
}
