# *Contra*plano

> Um universo, diversos conteúdos.

![Banner](Documentacoes/Imagens/readme/banner.png)

**Contraplano** é um site individual de resenhas e diário de filmes: um espaço autoral para registrar o que assisto, publicar críticas no estilo de newsletter e acompanhar métricas sobre o próprio repertório em uma dashboard. Projeto do 1º semestre de **Análise e Desenvolvimento de Sistemas (ADS)** na **SPTech (São Paulo Tech School)**.

```text
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
[ SOBRE O PROJETO ]
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
```

Na linguagem cinematográfica, o *contraplano* é o enquadramento que mostra o lado oposto ao do plano anterior. A proposta do projeto parte desse conceito: transformar o ato de assistir filmes — muitas vezes passivo e guiado por algoritmos — em um hábito consciente, registrado e analisado.

Com curadoria pessoal e registro 100% manual (sem importação automática do Letterboxd), o sistema permite:

- **Página inicial (`homepage.html`):** estrutura no estilo Substack/newsletter com destaque, cards de resenhas (*Cidade dos Sonhos* e *Marty Supreme*) e seção *"Sobre mim"* com carrossel de fotos e filmes favoritos.
- **Perfil e Dashboard (`dashboard.html`):** indicadores de consumo, metas mensal e anual e gráficos gerados a partir dos dados armazenados no banco. Cada gráfico possui uma página detalhada, para que seja possível visualizar o todo dos dados.
- **Cadastro e Histórico (`insercao.html, historicoFilmes.html`):** formulário manual para registrar nome, ano, diretor, país, gênero e data em que o filme foi visto, além da listagem completa do acervo pessoal. No histórico, é possível filtrar de acordo com o gênero.

```text
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
[ FUNCIONALIDADES E STATUS ]
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
```

```text
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
| Edição     | Edição de filmes já cadastrados e cálculo de progresso das metas   | [OK] Concluído   |
+------------+-------------------------------------------------------------------+------------------+
```

```text
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
[ ARQUITETURA E BANCO DE DADOS ]
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
```

O sistema opera em **três camadas**, onde o front-end se comunica exclusivamente via requisições HTTP com a API (sem acesso direto ao banco):

```text
+---------------+          HTTP          +-----------------------------------+          SQL          +-------------+
|  Front-end    | -------------------->  |  API (Node.js / Express)          | --------------------> |   MySQL     |
|  HTML/CSS/JS  | <--------------------  |  Rotas -> Controllers -> Models   | <-------------------- |  Tabelas    |
|  Chart.js     |                        +-----------------------------------+                       +-------------+
```

#### Tabelas Principais

- **`usuario`**: dados de cadastro e autenticação (`PK` referenciada pelas demais tabelas).
- **`codigo_ativacao`**: códigos reutilizáveis validados no back-end para criação de conta.
- **`filme`**: registro individual de obras (`idFilme`, `fkUsuario`, `nomeFilme`, `anoFilme`, `nomeDiretor`, `paisFilme`, `genero`, `dataVisto`).
- **`meta`**: controle `1:1` por usuário (`idMeta`, `fkUsuario`, `metaMensal`, `metaAnual`).

```text
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
[ TECNOLOGIAS ]
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
```

- **Front-end:** HTML5, CSS3 e JavaScript
- **Visualização de Dados:** Chart.js
- **Back-end:** Node.js e Express (arquitetura em Rotas, Controllers e Models)
- **Banco de Dados:** MySQL (modelado e testado no MySQL Workbench)
- **Design & Tipografia:** Figma (moodboard, KV e protótipo)

```text
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
[ IDENTIDADE VISUAL ]
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
```

Desenvolvida no Figma a partir de referências de arte ASCII, estética editorial e espaço em branco:

```text
+---------------+--------------------------------+-----------------------------------------------------------+
| Elemento      | Especificação                  | Uso no sistema                                            |
+---------------+--------------------------------+-----------------------------------------------------------+
| Azul profundo | #364C84                        | Fundo das páginas, botões e texto dos cards               |
| Creme         | #FFFDF5                        | Cards, barra de navegação e texto azul                    |
| Azul claro    | #98B1EE                        | Títulos "Sobre mim" e bolinhas do carrossel               |
| Preto/Branco  | #000000 / #FFFFFF              | Links da navbar e contrastes de apoio                     |
| Verde-limão   | #E7F1A8                        | Destaque complementar da paleta (Figma)                   |
| Tipografia    | Instrument Serif & Albert Sans | Serifada em itálico para títulos; texto corrido sem serifa|
| Logo          | Projetor vintage em ASCII      | Ícone arredondado com Contraplano                         |
+---------------+--------------------------------+-----------------------------------------------------------+
```

```text
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
[ AUTORA ]
.:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:..:+*+:.
```

**Julia Carolina Brito dos Santos**  
Estudante de Análise e Desenvolvimento de Sistemas (ADS) na **SPTech**  
[LinkedIn](https://www.linkedin.com/in/julia--carolina) | [GitHub](https://github.com/caju1911) | [Behance](https://www.behance.net/juliacarolina15)