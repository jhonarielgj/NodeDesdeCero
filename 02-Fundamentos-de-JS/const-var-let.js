// var crea variables con ámbito global
// var hace cosas raras como que se puede usar antes de declararlas
var nombre = "Jhon";

if (true) {
  var nombre = "Ariel";
}

console.log(nombre); // Ariel

// let respeta el scope
let nombre2 = "Jhon";

if (true) {
  let nombre2 = "Ariel";
}

console.log(nombre2); //Jhon

// const respeta el scope
const nombre3 = "Jhon";

if (true) {
  const nombre3 = "Ariel";
}

console.log(nombre3); //Jhon
