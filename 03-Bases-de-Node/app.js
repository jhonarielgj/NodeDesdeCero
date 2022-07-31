const { crearArchivo } = require("./helpers/multiplicar.js");
const n = 10;
const tabla = 5;
let resultado = 0;

console.clear();

crearArchivo(tabla, n)
  .then((nombreArchivo) =>
    console.log(`Archivo ${nombreArchivo} creado exitosamente`)
  )
  .catch((err) => console.log(err));
