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
    console.log("ACESSEI O DASHBOARD MODEL \n function listarGeneros():", fkUsuario);

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

function listarPaises(fkUsuario) {
    console.log("ACESSEI O DASHBOARD MODEL \n function listarGeneros():", fkUsuario);

    var instrucaoSql = `
       SELECT 
        paisFilme AS nome,
        COUNT(paisFilme) AS total
        FROM filme
        WHERE fkUsuario = ${fkUsuario}
        GROUP BY paisFilme;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function listarKPIs(fkUsuario){
    console.log ("ACESSEI O DASHBOARD MODEL \n listarKPIs", fkUsuario);

    var instrucaoSql = `
    SELECT
    COUNT(CASE 
    WHEN YEAR(dataVisto) = YEAR(CURDATE()) THEN 1 
    END) AS totalAno,
    COUNT(CASE 
    WHEN YEAR(dataVisto) = YEAR(CURDATE()) AND MONTH(dataVisto) = MONTH(CURDATE()) THEN 1 
    END) AS totalMes
    FROM filme
    WHERE fkUsuario = ${fkUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listarFilmes,
    listarGeneros,
    listarPaises,
    listarKPIs,
};