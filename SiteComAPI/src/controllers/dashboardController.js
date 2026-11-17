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

    function listarPaises(req, res){
        var fkUsuario = req.params.fkUsuario;

        if (fkUsuario == undefined){
            res.status(400).send("O usuário está undefined!");
        } else {
            dashboardModel.listarPaises(fkUsuario)
            .then (
                function (resultado) {
                    res.json(resultado);
                }
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar os países! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }

        function listarDiretores(req, res){
        var fkUsuario = req.params.fkUsuario;

        if (fkUsuario == undefined){
            res.status(400).send("O usuário está undefined!");
        } else {
            dashboardModel.listarDiretores(fkUsuario)
            .then (
                function (resultado) {
                    res.json(resultado);
                }
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar os diretores! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }

        function listarMeses(req, res){
        var fkUsuario = req.params.fkUsuario;

        if (fkUsuario == undefined){
            res.status(400).send("O usuário está undefined!");
        } else {
            dashboardModel.listarMeses(fkUsuario)
            .then (
                function (resultado) {
                    res.json(resultado);
                }
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar os meses! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }

        function buscarMetas(req, res){
        var fkUsuario = req.params.fkUsuario;

        if (fkUsuario == undefined){
            res.status(400).send("O usuário está undefined!");
        } else {
            dashboardModel.buscarMetas(fkUsuario)
            .then (
                function (resultado) {
                    res.json(resultado);
                }
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar as metas! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }
        function atualizarMetaMensal(req, res){
        var fkUsuario = req.params.fkUsuario;
        var metaMensal = req.body.metaMensalServer;

        if (fkUsuario == undefined){
            res.status(400).send("O usuário está undefined!");
        } else if (metaMensal == undefined){
            res.status(400).send("A meta mensal está undefined!")
        } else {
            dashboardModel.atualizarMetaMensal(fkUsuario)
            .then (
                function (resultado) {
                    res.json(resultado);
                }
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar as metas! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }

    function atualizarMetaAnual(req, res){
        var fkUsuario = req.params.fkUsuario;
        var metaAnual = req.body.metaMensalServer;


        if (fkUsuario == undefined){
            res.status(400).send("O usuário está undefined!");
        } else if (metaAnual == undefined){
            res.status(400).send("A meta anual está undefined!")
        } else {
            dashboardModel.atualizarMetaAnual(fkUsuario)
            .then (
                function (resultado) {
                    res.json(resultado);
                }
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar as metas! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }




module.exports = {
    listarFilmes,
    listarGeneros,
    listarPaises,
    listarDiretores,
    listarMeses,
    listarKPIs,
    buscarMetas,
    atualizarMetaAnual,
    atualizarMetaMensal
}