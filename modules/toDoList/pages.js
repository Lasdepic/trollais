import { addTask } from "./gestionnaire_De_Tache.js";
import { loadTasks } from "./localStorage.js";

export function bodyWeb() {
  const myBody = document.querySelector("body");
  // ------------------------------------------Mon HEADER----------------------------------------------------- //
  const myheader = document.querySelector("header");
  const divTitle = document.querySelector("div");
  const myTitle = document.querySelector("h1");
  const slogan = document.querySelector("p");
  const btnAdd = document.createElement("button");

  const userName = localStorage.getItem("userName");
  if (userName) {
    const userTitle = document.createElement("h2");
    userTitle.className = "tacheDe";
    userTitle.textContent = `La tâche de ${userName}`;
    userTitle.setAttribute("aria-label", `Liste des tâches de ${userName}`);
    myheader.appendChild(userTitle);
  }

  myheader.appendChild(btnAdd);

  btnAdd.innerHTML = 'Ajouter <ion-icon name="add-circle-outline"></ion-icon>';
  btnAdd.setAttribute("aria-label", "Ajouter une nouvelle tâche");

  const containerTask = document.querySelector(".container");
  const cardsTask = document.querySelector(".cardsTask");
  const ulList = document.querySelector(".listTask");

  btnAdd.className = "btnAdd";

  const todos = loadTasks();
  todos.forEach((tacheData) => {
    addTask(tacheData);
  });

  if (btnAdd && ulList) {
    btnAdd.addEventListener("click", () => addTask());
  }
}
