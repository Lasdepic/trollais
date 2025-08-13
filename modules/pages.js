
export function bodyWeb() {
  const myBody = document.querySelector("body");

  // ------------------------------------------Mon HEADER----------------------------------------------------- //
  const myheader = document.createElement("header");
  const divTitle = document.createElement("div");
  const myTitle = document.createElement("h1");
  const slogan = document.createElement("p");
  const btnAdd = document.createElement("button");

  // Création des élements du header

  myBody.appendChild(myheader);
  myheader.appendChild(divTitle);
  divTitle.appendChild(myTitle);
  divTitle.appendChild(slogan);
  myheader.appendChild(btnAdd);

  // contenu dans les éléments

  myTitle.textContent = "Trollais";
  slogan.textContent = "Votre gestionnaire de tâche préféré";
  btnAdd.innerHTML = 'Ajouter <ion-icon name="add-circle-outline"></ion-icon>';

  // ------------------------------------------Mon BODY----------------------------------------------------- //
  const containerTask = document.createElement("div");
  const cardsTask = document.createElement("div");
  const ulList = document.createElement("ul");

  // Création des élements des div du body

  myBody.appendChild(containerTask);
  containerTask.appendChild(cardsTask);
  myBody.appendChild(ulList);

  // ------------------------------------------Ajout de class pour le css----------------------------------------------------- //
  // HEADER

  divTitle.className = "titleHeader";
  slogan.className = "slogan";
  btnAdd.className = "btnAdd";

  // BODY

  containerTask.className = "container";
  cardsTask.className = "cardsTask";
  ulList.className = "listTask";
}
