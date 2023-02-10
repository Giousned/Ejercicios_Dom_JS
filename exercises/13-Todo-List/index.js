// Your code here

let addToDo = document.getElementById("addToDo");

let li = document.createElement("li");
li.innerHTML = `<span><i class="fa fa-trash"></i></span>${addToDo}`;
document.getElementById("ul").appendChild(li);


/* PROBAR DE INTERNET
var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
*/

/* OTRO 
const addForm = document.querySelector('.add');
 
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newToDo = addForm.add.value;
    console.log(newToDo);
});
*/