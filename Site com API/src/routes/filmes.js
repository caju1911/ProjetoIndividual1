var express = require("express");
var router = express.Router();

var filmesController = require("../controllers/filmesController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// ajustar essa parte aqui para ser cadastrar filme, retirar o autenticar pq n irei utilizar
router.post("/cadastrar", function (req, res) {
    filmesController.cadastrarFilme(req, res);
})

module.exports = router;