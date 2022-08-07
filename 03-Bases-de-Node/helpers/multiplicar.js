const fs = require("fs");

// const crearArchivo = (tabla = 5, n) => {
//   let salida = "";
//   salida += `==================\n   Tabla del ${tabla}\n==================\n`;
//   for (let i = 1; i < n + 1; i++) {
//     resultado = tabla * i;
//     salida += `    ${tabla} * ${i} = ${resultado}\n`;
//   }
//   console.log(salida);
//   try {
//     fs.writeFileSync(`tabla${tabla}.txt`, salida);
//     console.log(`Archivo tabla${tabla}.txt creado`);
//   } catch (error) {
//     console.error("Se presentó un error en el proceso");
//   }
// };

// Convertido a promesa
/*const crearArchivo = (tabla = 5, n) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    salida += `==================\n   Tabla del ${tabla}\n==================\n`;
    for (let i = 1; i < n + 1; i++) {
      resultado = tabla * i;
      salida += `    ${tabla} * ${i} = ${resultado}\n`;
    }
    console.log(salida);
    try {
      fs.writeFileSync(`tabla${tabla}.txt`, salida);
      resolve(`tabla${tabla}.txt`);
    } catch (error) {
      reject("Se presentó un error en el proceso");
    }
  });
};*/

// Con async
const crearArchivo = async (tabla = 5, n, l) => {
  let salida = "";
  try {
    salida += `==================\n   Tabla del ${tabla}\n==================\n`;
    for (let i = 1; i < n + 1; i++) {
      resultado = tabla * i;
      salida += `    ${tabla} * ${i} = ${resultado}\n`;
    }
    if (l) {
      console.log(salida);
    }
    fs.writeFileSync(`tabla${tabla}.txt`, salida);
    return `tabla${tabla}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
