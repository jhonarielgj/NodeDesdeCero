/* 
Estas son instrucciones no bloqueantes, por eso no se ejecutan en el mismo orden que se llaman, el resultado es
Inicio del programa
Fin del programa
Segundo Timeout
Tercer Timeout
Primer Timeout */

console.log("Inicio del programa");

setTimeout(() => {
  console.log("Primer Timeout");
}, 3000);

setTimeout(() => {
  console.log("Segundo Timeout");
}, 0);

setTimeout(() => {
  console.log("Tercer Timeout");
}, 0);

setTimeout(() => {
  console.log("Cuarto Timeout");
}, 2500);

console.log("Fin del programa");
