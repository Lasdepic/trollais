export function saveTasks() {
    const maListe = document.querySelector(".listTask");
    // localStorage.setItem('todos', JSON.stringify(maListe));
}

export function loadTasks() {
    const maListe = document.querySelector(".listTask");
    const data = localStorage.getItem('todos');
    if (data) {
        maListe = JSON.parse(data);
    }
}

export function deleteTasks() {
    localStorage.removeItem('todos');
}



