# Desafio_aula07

# Trabalho de Backend - Controle de Inventário (Aula 07)

## Descrição do Projeto
Este projeto é uma API simples criada para ajudar no controle de inventário e patrimônio de uma empresa. O sistema faz o CRUD completo (criar, listar, buscar por id, atualizar e deletar). Como ainda não usamos banco de dados nesta versão, as informações ficam salvas direto em um arquivo de texto local; para a minha entrega, eu nomeei meu arquivo como `dados.json`.

## Tecnologias Utilizadas
* Node.js
* Express
# Tutorial Novo Backend Node.js
## Passo a passo para iniciar um novo Projeto BackEnd
- 1 Criar uma **pasta**em sua Área de tabalho e abrir com o **VsCode**
- 2 Criar um arquivo `server.js` contendo:
```js
const express = require("express")
const cors = require("cors")

//Funções e códigos auxiliares, tipo: autoIncrement, totais, cálculos...

//Controllers CRUD [create, read, update, delete]
const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

//Configurações do servidor
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const porta = 3000

//Rotas REST [post, get, put, patch, delete]
app.get('/', rotaInicial)

//Porta de entrada do servidor e saída do console
app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})
```
- 3 Abrir o terminal `CTRL + '` tipo `CMD` ou `bash` e digitar os comandos para iniciar o projeto e instalar as dependencias **express** e **cors**
```bash
npm init -y
npm i express cors
```
- 4 Configurar o `package.json` alterando os campos:
    - "name":"nome_projeto",
    - "main":"server.js"
    - Adicionar o script:
        - "dev": "node --watch server.js"
```json
{
  "name": "nome_do_projeto",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "dev": "node --watch server.js",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "wellifabio",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.2.1"
  }
}
```
- 5 Executar o servidor
```bash
npm run dev
```
- Resultado
```bash
Servidor respondendo em: http://localhost:3000
```
- Segure o `CTRL` e clique no link que aparecerá:
- Resposta:
```text
"Back-end respondendo"
```
- 6 Crie o arquivo `.gitignore` contendo:
```text
node_modules
package-lock.json
```
## Agora desenvolva seus CRUDs e rotas ..
Mãos a obra ...

# Enviando para o github
- 1 Crie o repositório com o nome orientado pelo intrutor ou o que preferir
- 2 Copie o `código gerado de commit inicial` na tela principal e cole no **Terminal**
    - Pressione **Enter no terminal** para executar o último comando
- 3 Apenas o README.md é criado e enviado para o repositório
    - Envie os outros aquivos fazendo commit pelo VsCode
- 4 Continue codificando e fazendo commits aos poucos.


