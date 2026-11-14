var database = require("../database/config")


function listarFilmes(fkUsuario) {
    var instrucaoSql = `
        SELECT idFilme, nomeFilme, anoFilme, nomeDiretor, paisFilme, genero, dataVisto
        FROM filme
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarGeneros(fkUsuario) {
    console.log("ACESSEI O DASHBOARD MODEL \n function contarPorGenero():", fkUsuario);

    var instrucaoSql = `
        SELECT genero AS nome,
        COUNT(genero) AS total
        FROM filme
        WHERE fkUsuario = ${fkUsuario}
        GROUP BY genero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


module.exports = {
    listarFilmes,
    listarGeneros
};