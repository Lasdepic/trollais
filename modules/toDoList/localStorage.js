export function saveTasks() {
  const maListe = document.querySelector(".listTask");
  const tasks = [];

  if (maListe) {
    const taskElements = maListe.querySelectorAll("li");

    taskElements.forEach((taskElement) => {
      const task = {
        name: taskElement.querySelector(".task-name")?.textContent || "",
        backgroundColor: taskElement.style.backgroundColor || "",
        date: taskElement.querySelector(".delai")?.value || "",
        time: taskElement.querySelector(".heure")?.value || "",
        colorSelect: taskElement.querySelector("select")?.value || "",
        subTasks: [],
      };

      // Récupérer les sous-tâches
      const subLists = taskElement.querySelectorAll("ul li");
      subLists.forEach((subTask) => {
        const subTaskData = {
          name: subTask.textContent.replace("×", ""), // Enlever le bouton delete du texte
          backgroundColor: subTask.style.backgroundColor || "",
          colorSelect: subTask.querySelector("select")?.value || "",
        };
        task.subTasks.push(subTaskData);
      });

      tasks.push(task);
    });
  }

  localStorage.setItem("todos", JSON.stringify(tasks));
}

export function loadTasks() {
  const data = localStorage.getItem("todos");
  if (data) {
    const tasks = JSON.parse(data);
    return tasks;
  }
  return [];
}

export function deleteTasks() {
  localStorage.removeItem("todos");
}
