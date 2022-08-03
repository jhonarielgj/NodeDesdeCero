// Necesito que estas tres funciones se ejecuten secuencialmente tarea1 -> tarea2 y tarea3
/*function tarea1() {
  setTimeout(() => {
    console.log("Finaliza Tarea 1");
  }, 2000);
}

function tarea2() {
  setTimeout(() => {
    console.log("Finaliza Tarea 2");
  }, 1000);
}

function tarea3() {
  setTimeout(() => {
    console.log("Finaliza Tarea 3");
  }, 2500);
}

tarea1();
tarea2();
tarea3();*/

// Usando callback y generando inicio de callback hell
/*const msj1 = "Finaliza tarea 1";
const msj2 = "Finaliza tarea 2";
const msj3 = "Finaliza tarea 3";

const tarea1 = (msj, callback) => {
  setTimeout(() => {
    console.log(msj);
    return callback(msj2, tarea3);
  }, 2000);
};

const tarea2 = (msj, callback) => {
  setTimeout(() => {
    console.log(msj);
    return callback(msj3);
  }, 1000);
};

const tarea3 = (msj) => {
  setTimeout(() => {
    console.log(msj);
  }, 2500);
};

tarea1(msj1, tarea2);*/

// Reemplazando Callbacks con Promesas
/*const msj1 = "Finaliza tarea 1";
const msj2 = "Finaliza tarea 2";
const msj3 = "Finaliza tarea 3";

const tarea1 = (msj) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msj) {
        console.log(msj);
        resolve(msj2);
      } else {
        reject("No hay msj1");
      }
    }, 2000);
  });
};

const tarea2 = (msj) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msj) {
        console.log(msj);
        resolve(msj3);
      } else {
        reject("No hay msj2");
      }
    }, 1000);
  });
};

const tarea3 = (msj) => {
  setTimeout(() => {
    try {
      console.log(msj);
    } catch (error) {
      throw "No hay msj3";
    }
  }, 2500);
};

tarea1(msj1).then(tarea2).then(tarea3);*/

// Reemplazando promesas con async await
const msj1 = "Finaliza tarea 1";
const msj2 = "Finaliza tarea 2";
const msj3 = "Finaliza tarea 3";

const tarea1 = (msj) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msj) {
        console.log(msj);
        resolve(msj2);
      } else {
        reject("No hay msj1");
      }
    }, 2000);
  });
};

const tarea2 = (msj) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msj) {
        console.log(msj);
        resolve(msj3);
      } else {
        reject("No hay msj2");
      }
    }, 1000);
  });
};

const tarea3 = (msj) => {
  setTimeout(() => {
    try {
      console.log(msj);
    } catch (error) {
      throw "No hay msj3";
    }
  }, 2500);
};

// tarea1(msj1).then(tarea2).then(tarea3);

const mostrarMensajes = async () => {
  try {
    await tarea1(msj1);
    await tarea2(msj2);
    await tarea3(msj3);
  } catch (error) {
    console.log(error);
  }
};

mostrarMensajes();
