// Servidor con http, básico sin express
/*const http = require("http");

http
  .createServer((req, res) => {
    res.write("Servidor escuchando puerto 3000 del localhost");
    res.end();
  })
  .listen(3000);

console.log("Servidor escuchando puerto 3000 del localhost");*/

const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.set("view engine", "ejs");
// Servir contenido estático. Automáticamente buscará archivo index.html en la carpeta public
app.use(express.static("./public")); //Este inhabilita la ruta "/"

// Routes
app.get("/", (req, res) => {
  //   res.send("Home Page");
  res.render("home", {
    nombre: "Jhon A. Gómez J.",
    titulo: "Curso de NodeJS",
  });
});

app.get("/generic", (req, res) => {
  //   res.send("Home Page");
  res.render("generic", {
    nombre: "Jhon A. Gómez J.",
    titulo: "Curso de NodeJS",
  });
});

app.get("/elements", (req, res) => {
  //   res.send("Home Page");
  res.render("elements", {
    nombre: "Jhon A. Gómez J.",
    titulo: "Curso de NodeJS",
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo");
});

// app.get("/generic", (req, res) => {
//   //   res.send("404 | Error, página no encontrada");
//   res.sendFile(__dirname + "/public/generic.html");
// });

// app.get("/elements", (req, res) => {
//   //   res.send("404 | Error, página no encontrada");
//   res.sendFile(__dirname + "/public/elements.html");
// });

// Comodín para indicar todas las rutas que no están definidas
app.get("*", (req, res) => {
  //   res.send("404 | Error, página no encontrada");
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
