// Your code here
let addToDoElement = document.getElementById("addToDo");
let spanElement = document.querySelectorAll("span");

function borrarElementos (e) {
    e.target.closest("li").remove();    // BUSCO EL PADRE LI MAS CERCANO PARA PODER BORRARLO
}

// Create a new list item when clicking "Enter"
addToDoElement.addEventListener("keydown",(event)=> {
  if (event.key === "Enter" || event.keyCode === 13){

    let inputValue = addToDoElement.value;

    let li = document.createElement("li");

    document.querySelector("ul").appendChild(li);

    li.innerHTML = `<span><i class="fa fa-trash"></i></span>` + inputValue;

    let liSpanElement = li.querySelector("span");

    liSpanElement.addEventListener("click", borrarElementos);

    addToDoElement.value = "";

    return;
  }
})

// Click on a trashclose button to hide the current list item, LOS QUE YA EXISTEN POR DEFECTO, LES AÑADO
// EL ADDEVENTLISTENER PARA PODER ELIMINARLOS
for (let i = 0; i < spanElement.length; i++) {
  spanElement[i].addEventListener("click", borrarElementos);
};


/* PROBAR INTERNET
document.addEventListener('DOMContentLoaded', function () {
  $('div').on('click', '[data-fa-i2svg]', function () {
    alert('You clicked the icon itself');
  });
  });	
}
e.target.classList.contains("fa-search")
*/

/* OTRA FORMA INTERNET
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
*/


/* OTRA FORMA INTERNET 2
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

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function() {
      // let div = this.parentElement;
      // div.style.display = "none";
      close[i].parentElement.style.display = "none";
    })
  }

    for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function() {
      this.parentElement.remove(this);   // FUNCIONA
    })
*/