var express = require("express");
var router = express.Router();

var filmesController = require("../controllers/filmesController");

router.post("/cadastrar", function (req, res) {
    filmesController.cadastrarFilme(req, res);
})

router.get("/listar/:fkUsuario", function (req, res) {
    filmesController.listarFilmes(req, res);
});

module.exports = router;