let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let element = document.createElement("div");
	element.innerHTML = "Hello World";
	element.style.background = "yellow";
	document.body.appendChild(element);	
});