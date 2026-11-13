var database = require("../database/config")


function cadastrarFilme(fkUsuario, nomeFilme, anoFilme, nomeDiretor, paisFilme, genero) {
    console.log("ACESSEI O FILMES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFilme():", nomeFilme, anoFilme, nomeDiretor, paisFilme, genero);
    
    var instrucaoSql = `
        INSERT INTO filme (fkUsuario, nomeFilme, anoFilme, nomeDiretor, paisFilme, genero) VALUES (${fkUsuario}, '${nomeFilme}', ${anoFilme}, '${nomeDiretor}', '${paisFilme}', '${genero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarFilmes(fkUsuario) {
    var instrucaoSql = `
        SELECT idFilme, nomeFilme, anoFilme, nomeDiretor, paisFilme, genero, dataVisto
        FROM filme
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    cadastrarFilme,
    listarFilmes
};