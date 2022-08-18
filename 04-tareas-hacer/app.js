require("colors"); // podría poner sólo require("colors") cuando la constante es igual el nombre del paquete a importar
// const { mostrarMenu, pausa } = require("./helpers/mensajes");
// const { inquirerMenu } = require("./helpers/inquirer");
const { inquirerMenu } = require("./helpers/inquirer");
console.clear();

// const main = async () => {
//   console.log("Hola Mundo".yellow);

//   do {
//     opt = await mostrarMenu();
//     if (opt !== "0") await pausa();
//   } while (opt !== "0");
// };

// Cambio usando inquirer
const main = async () => {
  console.log("Hola Mundo".yellow);

  do {
    inquirerMenu;
  } while (opt !== "0");
};

main();
