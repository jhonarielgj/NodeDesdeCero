const express = require("express");
// Cors para proteger básica y restringir acceso a la aplicación
const cors = require("cors");
const { json } = require("express");

module.exports = class Server {
  constructor() {
    this.app = express();
    this.port = process.argv.PORT || process.env.PORT;
    this.userPath = "/api/users";
    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Define ubicación de un directorio público
    this.app.use(express.static("./public"));
  }

  routes() {
    // Me llevo las rutas para un archivo independiente
    this.app.use(this.userPath, require("../routes/user"));
    // this.app.get("/api", (req, res) => {
    //   res.json({
    //     msg: "GET al API - Solicitar",
    //   });
    // });
    // this.app.put("/api", (req, res) => {
    //   res.json({
    //     msg: "PUT al API - Actualizar",
    //   });
    // });
    // this.app.post("/api", (req, res) => {
    //   res.json({
    //     msg: "POST al API - Nuevo recurso",
    //   });
    // });
    // this.app.delete("/api", (req, res) => {
    //   res.json({
    //     msg: "DELETE al API - Borrar",
    //   });
    // });
    // this.app.patch("/api", (req, res) => {
    //   res.json({
    //     msg: "PATCH al API",
    //   });
    // });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
};
