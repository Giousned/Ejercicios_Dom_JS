// Your code here
let spanElement = document.getElementsByTagName("span");
let close = document.getElementsByClassName("close");
let addToDoElement = document.getElementById("addToDo");


// Create a className "close" and append it to each list item
for (let i = 0; i < spanElement.length; i++) {
    spanElement[i].className = "close";
}

// Click on a close button to hide the current list item
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);


// Create a new list item when clicking "Enter"
addToDoElement.addEventListener("keypress", function(e) {
//your code here
		if (e.key === "Enter"){
			newElement();
		}
});

function newElement() {
  let li = document.createElement("li");

  let span = document.createElement("SPAN");
  span.innerHTML = `<i class="fa fa-trash"></i>`;
  span.className = "close";
  li.appendChild(span);
  
  let inputValue = document.getElementById("addToDo").value;
  let t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector("ul").appendChild(li);
    //    document.getElementById("myUl").appendChild(li); PONIENDO UNA ID="myUl" EN EL HTML 
  }
  document.getElementById("addToDo").value = "";

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}


/* PROBAR INTERNET
const addForm = document.querySelector('.add');
 
addForm.addEventListener('submit', e => {
	e.preventDefault();
	const newToDo = addForm.add.value;
	console.log(newToDo);
});

document.addEventListener('DOMContentLoaded', function () {
	$('div').on('click', '[data-fa-i2svg]', function () {
	  alert('You clicked the icon itself');
	});
  });	
}

for (let item of listLi){
	trashIcon.addEventListener("click", () => handleRemoveElement(item));
}
		deleteTask(item);
	parentNode.removeChild(e);

for (var i = 0; i <= lista.children.length -1; i++) {
	lista.children[i].addEventListener("click", function(){
		this.parentNode.removeChild(this);
	});
} e.target.classList.contains("fa-search")
*/

/* ESTO MEDIO FUNCIONA
let addToDo = document.getElementById("addToDo");
let ulElement = document.getElementById("myClass");
let trashIcon = document.getElementsByClassName("fa-trash");
let listLi = document.querySelectorAll("li");

function addTask () {
	let li = document.createElement("li");
		li.innerHTML = `<span><i class="fa fa-trash"></i></span>${addToDo.value}`;
		ulElement.appendChild(li);
}

addToDo.addEventListener("keypress", function(e) {
	//your code here
	if (e.key === "Enter"){
		addTask();
	}
});

function deleteTask () {
	for (let i = 0; i < listLi.length ; i++) {
		// trashIcon[i].childNodes[i].remove();
		listLi[i].remove();
	}
}

for (let i = 0; i < trashIcon.length ; i++) {
	trashIcon[i].addEventListener("click", deleteTask);
}
*/