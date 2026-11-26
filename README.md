# *Contra*plano

> Um universo, diversos conteúdos.

![Banner](Documentacoes/Imagens/readme/banner.png)

**Contraplano** é um site individual de resenhas e diário de filmes: um espaço autoral para registrar o que assisto, publicar críticas no estilo de newsletter e acompanhar métricas sobre o próprio repertório em uma dashboard. Projeto do 1º semestre de **Análise e Desenvolvimento de Sistemas (ADS)** na **SPTech (São Paulo Tech School)**.[cite: 2]

![Logo](Documentacoes/Imagens/readme/cardlogo.png)

============================================================
[ SOBRE O PROJETO ]
============================================================

Na linguagem cinematográfica, o *contraplano* é o enquadramento que mostra o lado oposto ao do plano anterior. A proposta do projeto parte desse conceito: transformar o ato de assistir filmes — muitas vezes passivo e guiado por algoritmos — em um hábito consciente, registrado e analisado.[cite: 2, 3]

Com curadoria pessoal e registro 100% manual (sem importação automática do Letterboxd), o sistema permite:[cite: 3, 5]

* **Página inicial (`homepage.html`):** estrutura no estilo Substack/newsletter com destaque, cards de resenhas (*Cidade dos Sonhos* e *Marty Supreme*) e seção *"Sobre mim"* com carrossel de fotos e filmes favoritos.
* **Perfil e Dashboard (`dashboard.html`):** indicadores de consumo, metas mensal e anual e gráficos gerados a partir dos dados armazenados no banco.
* **Cadastro e Histórico (`historico.html`):** formulário manual para registrar nome, ano, diretor, país, gênero e data em que o filme foi visto, além da listagem completa do acervo pessoal.[cite: 2, 4, 9, 10]

------------------------------------------------------------
[ FUNCIONALIDADES E STATUS ]
------------------------------------------------------------

+------------+-------------------------------------------------------------------+------------------+
| Módulo     | Funcionalidade                                                    | Status           |
+------------+-------------------------------------------------------------------+------------------+
| Home       | Navbar, destaque, cards de resenhas e seção "Sobre mim"           | [OK] Concluído   |
| Acesso     | Cadastro de usuário com validação de código de ativação no servidor | [OK] Concluído   |
| Login      | Autenticação de usuário via banco de dados                        | [OK] Concluído   |
| Filmes     | Cadastro manual de filmes (nome, ano, diretor, país, gênero)       | [OK] Concluído   |
| Dashboard  | Indicadores (mês/ano) e gráficos por gênero, país, diretor e mês  | [OK] Concluído   |
| Metas      | Definição e atualização de metas mensal e anual                    | [OK] Concluído   |
| Histórico  | Listagem de filmes assistidos e remoção de registros              | [OK] Concluído   |
| Edição     | Edição de filmes já cadastrados e cálculo de progresso das metas   | [OK] Concluído    |
+------------+-------------------------------------------------------------------+------------------+[cite: 4, 5, 6, 8, 9, 10]

------------------------------------------------------------
[ ARQUITETURA E BANCO DE DADOS ]
------------------------------------------------------------

O sistema opera em **três camadas**, onde o front-end se comunica exclusivamente via requisições HTTP com a API (sem acesso direto ao banco):[cite: 6, 7]

+---------------+          HTTP          +-----------------------------------+          SQL          +-------------+
|  Front-end    | -------------------->  |  API (Node.js / Express)          | --------------------> |   MySQL     |
|  HTML/CSS/JS  | <--------------------  |  Rotas -> Controllers -> Models   | <-------------------- |  Tabelas    |
|  Chart.js     |                        +-----------------------------------+                       +-------------+
+---------------+[cite: 7]

### Tabelas Principais

* **`usuario`**: dados de cadastro e autenticação (`PK` referenciada pelas demais tabelas).
* **`codigo_ativacao`**: códigos reutilizáveis validados no back-end para criação de conta.
* **`filme`**: registro individual de obras (`idFilme`, `fkUsuario`, `nomeFilme`, `anoFilme`, `nomeDiretor`, `paisFilme`, `genero`, `dataVisto`).
* **`meta`**: controle `1:1` por usuário (`idMeta`, `fkUsuario`, `metaMensal`, `metaAnual`).[cite: 5, 7, 8]

------------------------------------------------------------
[ TECNOLOGIAS ]
------------------------------------------------------------

* **Front-end:** HTML5, CSS3 e JavaScript
* **Visualização de Dados:** Chart.js
* **Back-end:** Node.js e Express (arquitetura em Rotas, Controllers e Models)
* **Banco de Dados:** MySQL (modelado e testado no MySQL Workbench)
* **Design & Tipografia:** Figma (moodboard, KV e protótipo) e Google Fonts[cite: 7, 9, 10]

------------------------------------------------------------
[ IDENTIDADE VISUAL ]
------------------------------------------------------------

Desenvolvida no Figma a partir de referências de arte ASCII, estética editorial e espaço em branco:[cite: 9]

+---------------+--------------------------------+---------------------------------------------+
| Elemento      | Especificação                  | Uso no sistema                              |
+---------------+--------------------------------+---------------------------------------------+
| Azul profundo | `#364C84`                      | Fundo das páginas, botões e texto dos cards |
| Creme         | `#FFFDF5`                      | Cards, barra de navegação e texto azul      |
| Azul claro    | `#98B1EE`                      | Títulos "Sobre mim" e bolinhas do carrossel |
| Preto/Branco  | `#000000` / `#FFFFFF`          | Links da navbar e contrastes de apoio       |
| Verde-limão   | `#E7F1A8`                      | Destaque complementar da paleta (Figma)     |
| Tipografia    | Instrument Serif & Albert Sans | Serifada em itálico para títulos; texto corr|
| Logo          | Projetor vintage em ASCII     | Ícone arredondado com *Contra*plano        |
+---------------+--------------------------------+---------------------------------------------+[cite: 9, 10]

============================================================
[ AUTORA ]
============================================================

**Julia Carolina Brito dos Santos**
Estudante de Análise e Desenvolvimento de Sistemas (ADS) na **SPTech**[cite: 2]
[LinkedIn](https://www.linkedin.com/in/julia--carolina) | [GitHub](https://github.com/caju1911) | [Behance](https://www.behance.net/juliacarolina15)