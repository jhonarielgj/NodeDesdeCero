// const { argv, options } = require("yargs");
const yargs = require("yargs");
const { boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar.js");
// CONFIGURACIO DE OPCIONES DE YARGS
const argv = require("yargs")
  .option("b", {
    // En este caso "b" y "base" serían lo mismo, el parámetro "b" tendría como alias "base". Entonces el comando "node app --base" y "node app -b" harian lo mismo
    alias: "base",
    // Tipo de dato que se espera
    type: "number",
    // Si es obligatorio se define con demanOption
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
  })
  // Para validar el tipo de dato
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    } else {
      return true;
    }
  }).argv;
const n = 10;
const tabla = argv.b;
const l = argv.l;

console.clear();

crearArchivo(tabla, n, l)
  .then((nombreArchivo) =>
    console.log(`Archivo ${nombreArchivo} creado exitosamente`)
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
