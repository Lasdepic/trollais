// -------------------------------------------------- Création d'un pseudoConnection------------------------------------------------------
const idBtnConnect = document.querySelector("#btnConnect");

export function connectTask() {
  idBtnConnect.addEventListener("click", () => {
    // création d'un environnement de connexion
    const container = document.querySelector(".container");
    const titleConnect = document.createElement("h2");
    const inputName = document.createElement("input");
    const passWord = document.createElement("input");
    const btnValidateConnect = document.createElement("button");
    const containerConnect = document.createElement("div");
    // --------------------------------------------------------------------
    container.appendChild(containerConnect);
    containerConnect.appendChild(titleConnect);
    containerConnect.appendChild(inputName);
    containerConnect.appendChild(passWord);
    container.appendChild(btnValidateConnect);
    // ---------------------------------------------------------------
    titleConnect.textContent = "Connexion";
    containerConnect.className = "containerConnexion";
    // ---------------------------------
    inputName.placeholder = "Nom :";
    inputName.type = "text";
    // --------------------------------
    passWord.placeholder = "Mot de passe";
    passWord.type = "password";
    //---------------------------------
    btnValidateConnect.textContent = "Valider";
    // Appel de la logique de validation avec les bons éléments
    validateConnect(passWord, inputName, btnValidateConnect);
  });
}

export function validateConnect(passWord, inputName, btnValidateConnect) {
  btnValidateConnect.addEventListener("click", () => {
    const validateName = inputName.value;
    const passWordValidate = passWord.value;
    if (validateName && passWordValidate) {
      localStorage.setItem('userName', validateName);
      window.location.href = "/pages/toDoList.html";
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });
}

// -------------------------------------------------------
