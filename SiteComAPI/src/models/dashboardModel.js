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
    console.log("ACESSEI O DASHBOARD MODEL \n function listarPaises():", fkUsuario);

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

function listarDiretores(fkUsuario) {
    console.log("ACESSEI O DASHBOARD MODEL \n function listarDiretores():", fkUsuario);

    var instrucaoSql = `
    SELECT 
    nomeDiretor AS nome,
    COUNT(nomeDiretor) AS total
    FROM filme
    WHERE fkUsuario = ${fkUsuario}
    GROUP BY nomeDiretor;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function listarMeses(fkUsuario) {
    console.log("ACESSEI O DASHBOARD MODEL \n function listarMeses():", fkUsuario);

    var instrucaoSql = `
    SELECT
    MONTH(dataVisto) AS mes,
    COUNT(*) AS total
    FROM filme
    WHERE fkUsuario = 1
    AND YEAR(dataVisto) = YEAR(CURDATE())
    GROUP BY MONTH(dataVisto)
    ORDER BY MONTH(dataVisto);
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

function buscarMetas(fkUsuario){
    console.log ("ACESSEI O DASHBOARD MODEL \n buscarMetas", fkUsuario);

    var instrucaoSql = `
    SELECT
    metaMensal, metaAnual
    FROM meta
    WHERE fkUsuario = ${fkUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarMetaMensal(fkUsuario, metaMensal){
    console.log ("ACESSEI O DASHBOARD MODEL \n buscarMetas", fkUsuario);

    var instrucaoSql = `
    UPDATE meta SET metaMensal = ${metaMensal} WHERE fkUsuario = ${fkUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarMetaAnual(fkUsuario, metaAnual){
    console.log ("ACESSEI O DASHBOARD MODEL \n buscarMetas", fkUsuario);

    var instrucaoSql = `
    UPDATE meta SET metaMensal = ${metaAnual} WHERE fkUsuario = ${fkUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listarFilmes,
    listarGeneros,
    listarPaises,
    listarDiretores,
    listarMeses,
    listarKPIs,
    buscarMetas,
    atualizarMetaMensal,
    atualizarMetaAnual
};