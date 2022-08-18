// Inquirer sirve para el manejo de opciones en consola
const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: list,
    name: "option",
    message: "Seleccione una opción: ",
    choices: [
      "1. Crear tarea",
      "2. Listar tareas",
      "3. Listar tareas completadas",
      "4. Listar tareas pendientes",
      "5. Completar tarea(s)",
      "6. Borrar tarea",
      "0. Salir",
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=========================".green);
  console.log("  Seleccione una opción".yellow);
  console.log("=========================".green);
  const opt = await inquirer.promt(menuOpts);
  return opt;
};

module.exports = {
  inquirerMenu,
};
