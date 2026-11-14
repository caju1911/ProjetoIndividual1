var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listar/:fkUsuario", function (req, res) {
    dashboardController.listarFilmes(req, res);
});

router.get("/listarGeneros/:fkUsuario", function (req, res) {
    dashboardController.listarGeneros(req, res);
});

module.exports = router;