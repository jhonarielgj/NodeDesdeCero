const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
} = require("../controllers/user");

const router = Router();
// Se cambia la ruta "/api" de cada ruta por "/" ya que en la línea this.app.use("/api", require("../routes/user")); de user.js se define el path, que para este caso sería /api/users

// Para separar la lógica de las rutas de las acciones se genera un archivo /controler/user.js que contiene las funciones que se ejecutan con cada ruta

router.get("/", usuariosGet);

router.put("/", usuariosPut);

router.post("/", usuariosPost);

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
