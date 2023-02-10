let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let mySelect = document.querySelector("#mySelect");

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.value = countries[i];
    option.text = countries[i];
    mySelect.appendChild(option);
}

mySelect.addEventListener('change', (event) => {
    alert(mySelect.value);
});


/* PROBAR INTERNET
var sel = document.createElement('select');
sel.name = 'drop1';
sel.id = 'Select1';

var cars = [
  "volvo",
  "saab",
  "mercedes",
  "audi"
];

var options_str = "";

cars.forEach( function(car) {
  options_str += '<option value="' + car + '">' + car + '</option>';
});

sel.innerHTML = options_str;
document.body.appendChild(sel);
*/