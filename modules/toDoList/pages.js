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

  // Affichage du nom d'utilisateur si présent
  const userName = localStorage.getItem("userName");
  if (userName) {
    const userTitle = document.createElement("h2");
    userTitle.className = "tacheDe";
    userTitle.textContent = `La tâche de ${userName}`;
    myheader.appendChild(userTitle);
  }

  // Création des élements du header
  myheader.appendChild(btnAdd);

  // contenu dans les éléments
  btnAdd.innerHTML = 'Ajouter <ion-icon name="add-circle-outline"></ion-icon>';

  // ------------------------------------------Mon BODY----------------------------------------------------- //
  const containerTask = document.querySelector(".container");
  const cardsTask = document.querySelector(".cardsTask");
  const ulList = document.querySelector(".listTask");

  // ------------------------------------------Ajout de class pour le css----------------------------------------------------- //
  // HEADER

  btnAdd.className = "btnAdd";

  // Charger les tâches depuis localStorage
  const todos = loadTasks();
  todos.forEach((tacheData) => {
    addTask(tacheData);
  });

  if (btnAdd && ulList) {
    btnAdd.addEventListener("click", () => addTask());
  }
}
