// const { argv, options } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs");
require("colors");

// Hasta qué número va a ir multiplicada la tabla
const n = 10;
// Argumento por consola qué tabla generar
const tabla = argv.b;
// Argumento por consola si muestra o no la tabla generada por pantalla
const l = argv.l;
// Argumento por consolo que define hasta dónde va la tabla
const h = argv.h;

// console.clear();

crearArchivo(tabla, h, l)
  .then((nombreArchivo) =>
    console.log(`Archivo ${nombreArchivo} creado exitosamente`.blue)
  )
  .catch((err) => console.log(err));

// Recibir parámetros desde consola
// console.clear;

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
