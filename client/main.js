import { connectTask } from "./modules/Accueil/accueil.js";
import { bodyWeb } from "./modules/toDoList/pages.js";

if (window.location.pathname.includes("toDoList.html")) {
  bodyWeb();
}

connectTask()