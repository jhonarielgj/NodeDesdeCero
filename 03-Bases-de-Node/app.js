const { crearArchivo } = require("./helpers/multiplicar.js");
const { argv } = require("yargs").option("b", {
  alias: "base",
  type: "number",
});
const n = 10;
const tabla = 5;
let resultado = 0;

console.clear();

// crearArchivo(tabla, n)
//   .then((nombreArchivo) =>
//     console.log(`Archivo ${nombreArchivo} creado exitosamente`)
//   )
//   .catch((err) => console.log(err));

// Recibir parámetros desde consola
console.clear;

// En consola al ejecutar node app --table=5
// console.log(process.argv);
// Devuelve:
// [
//   "C:\\Program Files\\nodejs\\node.exe",
//   "C:\\xampp2022\\htdocs\\nodeJS\\NodeDesdeCero\\03-Bases-de-Node\\app",
//   "--tabla=5",
// ];

// Hay un paquete "yargs" para administrar mensajes desde la consola
console.log(argv);
// { _: [], tabla: 5, '$0': 'app' }
//  Si ejecutamos node app --help arroja
// Opciones:
//   --help     Muestra ayuda                                            [booleano]
//   --version  Muestra número de versión                                [booleano]
// Podemos usar node app --version
// Devuelve 1.0.0 que lo toma de package.json

// CONFIGURACIO DE OPCIONES DE YARGS
// con require("yargs")
//    .option("b", {
//        alias: "base",
//        type: "number",
//     });
