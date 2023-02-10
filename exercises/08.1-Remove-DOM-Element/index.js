// your code here
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector

let element = document.querySelector("#secondElement");
element.parentNode.removeChild(element);


/* SOLUCION DADA
let li = document.querySelector("#secondElement")
li.parentNode.removeChild(li)
*/