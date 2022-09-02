require("dotenv").config();
const Server = require("./models/server");

// Modo tradicional de crear el servidor en express

/*const express = require("express");
const app = express();
const PORT = process.argv.PORT || process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Servidor corriendo en puerto ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});*/

// Creación de servidor usando clases

const server = new Server();
console.log("server: ", server);

server.listen();
