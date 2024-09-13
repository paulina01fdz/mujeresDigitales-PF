const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-agregar");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const deleteAllBtn = document.querySelector(".btn-eliminar");
// Array para almacenar las tareas como objetos
let tareas = [];

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const textoTarea = input.value;

    if (textoTarea !== "") {
        const tarea = {
            texto: textoTarea,
            completado: false
        };

        // Añadir la nueva tarea al array de tareas
        tareas.push(tarea);

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = `${tarea.texto}`;

        li.appendChild(p);
        li.appendChild(addCheckBtn(li,tarea))
        li.appendChild(addDeleteBtn(li, tarea));

        ul.appendChild(li);
        input.value = "";
        empty.style.display = "none";
    }
});

function addCheckBtn(li, tarea) {
    const checkBtn = document.createElement("button");
    checkBtn.textContent = "✓"; 
    checkBtn.className = "btn-check";

    checkBtn.addEventListener("click", () => {
        // Marcar como completada la tarea
        tarea.completado = !tarea.completado;

        li.classList.toggle("completado");

        // Actualiza la lista de tareas en el array
        tareas = tareas.map(t => (t === tarea ? {...t, completado: tarea.completado} : t));
    });

    return checkBtn;
};

function addDeleteBtn(li, tarea) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", () => {
        ul.removeChild(li);

        // Eliminar la tarea del array de objetos
        tareas = tareas.filter(t => t !== tarea);

        if (ul.children.length === 0) {
            empty.style.display = "block";
        }
    });

    return deleteBtn;
}

// Eliminar todas las tareas
deleteAllBtn.addEventListener("click", () => {
    
    ul.innerHTML = ""
    tareas = [];
    empty.style.display = "block";//Muestra el mensaje que no hay tareas pendientes 
});