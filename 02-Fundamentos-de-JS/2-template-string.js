// Los templates permiten agregar variables u operaciones cuando se encierra en ${} dentro de las `  `, adicionalmente espacios, enter, etc se van a ver tal cual

const NOMBRE = "Jhon";
const NOMBRE2 = "Ariel";

const NORMAL = NOMBRE + " " + NOMBRE2;

console.log(NORMAL);

const TEMPLATE = `Nombre completo ${NOMBRE} ${NOMBRE2}, se pueden hacer operaciones ${
  1 + 1
}`;

console.log("TEMPLATE: ", TEMPLATE); //TEMPLATE:  Nombre completo Jhon Ariel, se pueden hacer operaciones 2
