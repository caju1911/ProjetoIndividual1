var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarFilme(fkUsuario, nomeFilme, anoFilme, nomeDiretor, paisFilme, genero) {
    console.log("ACESSEI O FILMES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFilme():", nomeFilme, anoFilme, nomeDiretor, paisFilme, genero);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO filme (fkUsuario, nomeFilme, anoFilme, nomeDiretor, paisFilme, genero) VALUES (${fkUsuario}, '${nomeFilme}', ${anoFilme}, '${nomeDiretor}', '${paisFilme}', '${genero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarFilme
};