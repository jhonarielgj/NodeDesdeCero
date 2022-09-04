const { response } = require("express");

const usuariosGet = (req, res = response) => {
  res.json({
    msg: "GET al API - Solicitar - Controlador",
  });
};

const usuariosPost = (req, res = response) => {
  //   const body = req.body;
  const { nombre, edad } = req.body;
  res.json({
    msg: "POST al API - Nuevo recurso",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  res.json({
    msg: "PUT al API - Actualizar",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "PATCH al API",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "DELETE al API - Borrar",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
