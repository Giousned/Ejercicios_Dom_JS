// Your code here

let addToDo = document.getElementById("addToDo");
// let ulElement = document.getElementById("myClass");
let trashIcon = document.getElementsByClassName("fa-trash");

function addTask () {
			// let valorInput = addToDo.value;
	let li = document.createElement("li");
	li.innerHTML = `<span><i class="fa fa-trash"></i></span>${addToDo.value}`;
	document.querySelector("#myClass").appendChild(li);
			// document.ulElement.appendChild(li);
}

addToDo.addEventListener("keypress", function(e) {
	//your code here
	if (e.key === "Enter"){
		addTask();
	}
});

// function deleteTask (e) {
// 	
// }

trashIcon.addEventListener("click", function(e) {
	//your code here
	parentNode.removeChild(e);
});



	// for (var i = 0; i <= lista.children.length -1; i++) {
	// 	lista.children[i].addEventListener("click", function(){
	// 		this.parentNode.removeChild(this);
	// 	});
	// } e.target.classList.contains("fa-search")


// window.trashIcon.addEventListener("click", function() {
// 		this.parentNode.removeChild(this);
// });


/* PROBAR INTERNET
const addForm = document.querySelector('.add');
 
addForm.addEventListener('submit', e => {
	e.preventDefault();
	const newToDo = addForm.add.value;
	console.log(newToDo);
});


// document.addEventListener('DOMContentLoaded', function () {
// 	$('div').on('click', '[data-fa-i2svg]', function () {
// 	  alert('You clicked the icon itself');
// 	});
//   });
*/