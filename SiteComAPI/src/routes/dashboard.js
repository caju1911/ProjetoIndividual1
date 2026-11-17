var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listar/:fkUsuario", function (req, res) {
    dashboardController.listarFilmes(req, res);
});

router.get("/listarGeneros/:fkUsuario", function (req, res) {
    dashboardController.listarGeneros(req, res);
});

router.get("/listarPaises/:fkUsuario", function (req, res) {
    dashboardController.listarPaises(req, res);
});

router.get("/listarDiretores/:fkUsuario", function (req, res) {
    dashboardController.listarDiretores(req, res);
});

router.get("/listarMeses/:fkUsuario", function (req, res) {
    dashboardController.listarMeses(req, res);
});

router.get("/listarKPIs/:fkUsuario", function (req, res) {
    dashboardController.listarKPIs(req, res);
});

router.get("/buscarMetas/:fkUsuario", function (req, res) {
    dashboardController.buscarMetas(req, res);
});

router.post("/atualizarMetaMensal/:fkUsuario", function (req, res) {
    dashboardController.atualizarMetaMensal(req, res);
});

router.post("/atualizarMetaAnual/:fkUsuario", function (req, res) {
    dashboardController.atualizarMetaAnual(req, res);
});

module.exports = router;