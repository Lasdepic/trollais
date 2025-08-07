
// Déclaration des éléments à exporter
let inputTasks;
let ul;

export function addMain () {
    // Création des éléments pour la page
    const myBody = document.querySelector("body");
    const header = document.createElement("header");
    const headerLeft = document.createElement("div");
    const title = document.createElement("h1");
    const slogan = document.createElement("p");
    // ----------------------------------------------------------- Cards Tasks -------------------------------------------------------------------------------------------------------
    const container = document.createElement("div");
    const cardTasks = document.createElement("div");
    inputTasks = document.createElement("input");
    ul = document.createElement("ul");

    // ----------------------------------------------------------- BUTTON TOUTES, A FAIRE, TERMINEE -------------------------------------------------------------------------------------------------------
    const btnChekList = document.createElement("div");
    const btnAll = document.createElement("button");
    const btnToDo = document.createElement("button");
    const btnFinish = document.createElement("button");

    // ----------------------------------------------------------- HEADER -------------------------------------------------------------------------------------------------------
    myBody.appendChild(header);
    header.appendChild(headerLeft);
    headerLeft.appendChild(title);
    headerLeft.appendChild(slogan);
    // ----------------------------------------------------------- Cards Tasks -------------------------------------------------------------------------------------------------------
    myBody.appendChild(container);
    container.appendChild(cardTasks);
    cardTasks.appendChild(inputTasks);
    // ----------------------------------------------------------- BUTTON TOUTES, A FAIRE, TERMINEE -------------------------------------------------------------------------------------------------------
    cardTasks.appendChild(btnChekList);
    btnChekList.appendChild(btnAll);
    btnChekList.appendChild(btnToDo);
    btnChekList.appendChild(btnFinish);
    // ----------------------------------------------------------- Liste des tâches -------------------------------------------------------------------------------------------------------

    cardTasks.appendChild(ul);

    // ----------------------------------------------------------- CONTENU DES ELEMENTS -------------------------------------------------------------------------------------------------------
    title.textContent = "Trollais";
    slogan.textContent = "Votre Gestionnaire de tâche préféré";
    inputTasks.placeholder = "Entré le nom de votre tâche...";
    btnAll.textContent = "Global";
    btnToDo.textContent = "A faire";
    btnFinish.textContent = "Terminer";

    // ----------------------------------------------------------- CREATION DES CLASSES -------------------------------------------------------------------------------------------------------
    slogan.className = "slogan";
    headerLeft.className = "header-left";
    container.className = "container";
    cardTasks.className = "cardtasks";
    inputTasks.className = "inputTask";
    btnChekList.className = "btnChekList";
    btnAll.className = "btnCheck";
    btnToDo.className = "btnCheck";
    btnFinish.className = "btnCheck";
}

// Export des éléments nécessaires
export { inputTasks, ul };