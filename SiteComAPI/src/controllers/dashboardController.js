var dashboardModel = require("../models/dashboardModel");
  
  function listarFilmes(req, res) {
    var fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else {
        dashboardModel.listarFilmes(fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar os filmes! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

    function listarGeneros(req, res){
        var fkUsuario = req.params.fkUsuario;

        if (fkUsuario == undefined){
            res.status(400).send("O usuário está undefined!");
        } else {
            dashboardModel.listarGeneros(fkUsuario)
            .then (
                function (resultado) {
                    res.json(resultado);
                }
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar os gêneros! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }

    function listarKPIs (req, res){
        var fkUsuario = req.params.fkUsuario;

        if (fkUsuario == undefined){
            res.status(400).send("O usuário está undefined!");
        } else {
            dashboardModel.listarKPIs(fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar os KPIs! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}





module.exports = {
    listarFilmes,
    listarGeneros,
    listarKPIs
}