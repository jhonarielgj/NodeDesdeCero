require("colors");
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busqueda");

const main = async () => {
  const busquedas = new Busquedas();
  let opt = "";
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const lugar = await leerInput("Ciudad: ");
        console.log("lugar: ", lugar);
        console.log("\nInformación de la Ciudad\n".green);
        break;
      case 2:
        console.log("Opción 2");
        break;
    }
    console.log("opt: ", opt);
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
