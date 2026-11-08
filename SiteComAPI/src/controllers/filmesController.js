var filmesModel = require("../models/filmesModel");


function cadastrarFilme(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var nomeFilme = req.body.nomeFilmeServer;
    var anoFilme = req.body.anoFilmeServer;
    var nomeDiretor = req.body.nomeDiretorServer;
    var paisFilme = req.body.paisFilmeServer;
    var genero = req.body.generoServer;

    if (fkUsuario == undefined) {
        res.status(400).send("O usuário não está logado!")
    }
    else if (nomeFilme == undefined) {
        res.status(400).send("O nome do filme está undefined!");
    } else if (anoFilme == undefined) {
        res.status(400).send("O ano do filme está undefined!");
    } else if (nomeDiretor == undefined) {
        res.status(400).send("O nome do diretor está undefined!");
    } else if (paisFilme == undefined) {
        res.status(400).send("O país do filme está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("O gênero do filme está undefined!")
    } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        filmesModel.cadastrarFilme(fkUsuario, nomeFilme, anoFilme, nomeDiretor, paisFilme, genero)
                            .then(
                                function (resultado) {
                                    res.json(resultado);
                                }
                            ).catch(
                                function (erro) {
                                    console.log(erro);
                                    console.log(
                                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                                        erro.sqlMessage
                                    );
                                    res.status(500).json(erro.sqlMessage);
                                }
                            );
                    }
                }

module.exports = {
    cadastrarFilme
}