USE contraplano;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE codigo_ativacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(20) UNIQUE
);

INSERT INTO codigo_ativacao (codigo) VALUES
('contra001'),
('contra002'),
('contra003');

CREATE TABLE filme (
    idFilme INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    CONSTRAINT fkUsuarioFilme FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    nomeFilme VARCHAR(100),
    anoFilme INT,
    nomeDiretor VARCHAR(80),
    paisFilme VARCHAR(50),
    genero VARCHAR(40),
    dataVisto DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE meta (
    idMeta INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT UNIQUE NOT NULL,
    metaMensal INT,
    metaAnual INT,
    CONSTRAINT fkUsuarioMeta FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT
genero AS nome,
COUNT(genero) AS total
FROM filme
WHERE fkUsuario = 1
GROUP BY genero;

SELECT 
paisFilme AS nome,
COUNT(paisFilme) AS total
FROM filme
WHERE fkUsuario = 1
GROUP BY paisFilme;

SELECT 
nomeDiretor AS nome,
COUNT(nomeDiretor) AS total
FROM filme
WHERE fkUsuario = 1
GROUP BY nomeDiretor;

SELECT
    COUNT(CASE 
    WHEN YEAR(dataVisto) = YEAR(CURDATE()) THEN 1 
    END) AS totalAno,
    COUNT(CASE 
    WHEN YEAR(dataVisto) = YEAR(CURDATE())
	AND MONTH(dataVisto) = MONTH(CURDATE()) THEN 1 
    END) AS totalMes
FROM filme
WHERE fkUsuario = 1;

SELECT
    MONTH(dataVisto) AS mes,
    COUNT(*) AS total
FROM filme
WHERE fkUsuario = 1
  AND YEAR(dataVisto) = YEAR(CURDATE())
GROUP BY MONTH(dataVisto)
ORDER BY MONTH(dataVisto);

