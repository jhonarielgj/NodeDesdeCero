const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.argv.PORT || process.env.PORT;
    this.routes();
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send(`Servidor corriendo en puerto ${this.port}`);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}
