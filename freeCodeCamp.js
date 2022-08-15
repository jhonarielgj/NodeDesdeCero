function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (producto == "taza") {
        resolve("Ordenando taza con logo.");
      } else {
        reject("Producto no disponible");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por su compra");
    }, 6000);
  });
}

ordenarProducto("tazas")
  .then((respuesta) => procesarPedido(respuesta))
  .then((respuestaProcesada) => console.log(respuestaProcesada))
  .catch((err) => console.log(err));

async function realizarPedido(producto) {
  try {
    console.log("Pedido recibido");
    const respuesta = await ordenarProducto(producto);
    console.log("respuesta: ", respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log("respuestaProcesada: ", respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido("taza");
