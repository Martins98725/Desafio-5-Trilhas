# Desafio 5 do trilhas

Projeto é um CRUD padrão que tem destinos e atrativos



## Uso do Projeto

## Baixe
npx sequelize-cli db:migrate
npm install
npm install --save sequelize-cli

### Consultar todos os destinos ###

*Endpoint:* GET http://localhost:3333/api/cursos

*Descrição:* Recupera todos os dados dos destinos.
### Consultar destino expecifico ###

*Endpoint:* GET http://localhost:3333/api/destinos/id destino

*Descrição:* Recupera um destino expecifico atraves do seu id passado na URL.

### Cadastrar destino ###

*Endpoint:* POST http://localhost:3333/api/destinos

*Descrição:* Adiciona um destino.

### Deletar curso ###

*Endpoint:* DELETE http://localhost:3333/api/destinos/id do destinos

*Descrição:* Deleta o curso cujo o id foi passado na URL.

### Atualizar curso ###

*Endpoint:* PUT http://localhost:3333/api/destinos/id do destino

*Descrição:* Atualiza o curso cujo o id foi passado na URL.


### Consultar todos os atrativos ###

*Endpoint:* GET  http://localhost:3333/api/atrativos

*Descrição:* Recupera todos os dados dos atrativos.
### Consultar atrativo expecifico ###

*Endpoint:* GET http://localhost:3333/api/atrativos/id do atrativo

*Descrição:* Recupera um aluno expecifico atraves do seu id  passado na URL.

### Cadastrar atrativo ###

*Endpoint:* POST http://localhost:3333/api/atrativos/

*Descrição:* Adiciona um atrativo.

### Deletar atrativo ###

*Endpoint:* DELETE http://localhost:3333/api/atrativos/id do atrativo

*Descrição:* Deleta o atrativo cujo o id foi passado na URL.

### Atualizar atrativo ###

*Endpoint:* PUT http://localhost:3333/api/atrativos/id do atrativo

*Descrição:* Atualiza o atrativo cujo o id foi passado na URL.

**Corpo para requisição de POST para destinos** 
`{
    "nome": "exemplo",
    "descricao": "exemplo",
    "imagem_url": "/frontend/imagem exemplo"
}`

**Corpo para requisição de POST para atrativos** 
`{
    "nome":"exemplo",
    "tipo":"exemplo",
    "descricao":": exemplo",
    "imagem_url":"/frontend/imagem exemplo",
    "dicas":"aproveite e se divirta e tome bastante banho de cachoeira",
    "id_destino": id_destinos
}`