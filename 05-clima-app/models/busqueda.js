const axios = require("axios");

class Busquedas {
  historial = ["Pereira", "Bogotá"];
  constructor() {}
  async ciudad(lugar = "") {
    try {
      // petición HTTP
      const resp = await axios.get("https://reqres.in/api/users?page=2");
      console.log("resp: ", resp.data);
      return []; //retornar los lugares
    } catch (error) {
      console.log("No se encontró información");
      return [];
    }
  }
}

module.exports = Busquedas;
