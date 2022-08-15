// CONFIGURACIO DE OPCIONES DE YARGS
const argv = require("yargs");

argv
  .option("b", {
    // En este caso "b" y "base" serían lo mismo, el parámetro "b" tendría como alias "base". Entonces el comando "node app --base" y "node app -b" harian lo mismo
    alias: "base",
    // Tipo de dato que se esperaS
    type: "number",
    // Si es obligatorio se define con demanOption
    demandOption: true,
    // Muestra descrpción en el listado de modificadores
    describe: "Define la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    // demandOption: true,
    default: false,
    description:
      "Modifica si se muestra o no por pantalla la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    description: "Indica hasta dónde irá la tabla",
  })
  // Para validar el tipo de dato
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    } else {
      return true;
    }
  }).argv;

console.log("argv: ", argv.argv);
module.exports = argv;
