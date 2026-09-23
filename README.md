# Desafio_aula07

# Trabalho de Backend - Controle de Inventário (Aula 07)

## Descrição do Projeto
Este projeto é uma API simples criada para ajudar no controle de inventário e patrimônio de uma empresa. O sistema faz o CRUD completo (criar, listar, buscar por id, atualizar e deletar). Como ainda não usamos banco de dados nesta versão, as informações ficam salvas direto em um arquivo chamado `inventario.json`.

## Tecnologias Utilizadas
* Node.js
* Express
* Módulo FS (nativo do Node para salvar arquivos)

## Como Instalar e Rodar o Projeto
1. Baixe os arquivos do projeto para o seu computador.
2. Abra o terminal (prompt de comando) dentro da pasta do projeto.
3. Instale o Express rodando o comando:
   ```bash
   npm install
   ```
4. Para ligar o servidor, rode o comando:
   ```bash
   npm start
   ```
5. O servidor vai rodar no endereço: `http://localhost:3000`.

---

## Rotas do Sistema e Exemplos de Teste

### 1. Criar um novo item
* **Método:** POST
* **Rota:** `/inventario`
* **O que mandar no corpo (JSON):**
```json
{
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": 3500.00,
  "patrimonio": "PAT-00125"
}
```
* **Resposta do servidor (Status 201):**
```json
{
  "id": 3,
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": 3500,
  "patrimonio": "PAT-00125"
}
```

### 2. Listar todos os itens
* **Método:** GET
* **Rota:** `/inventario`
* **Resposta do servidor (Status 200):**
```json
[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800,
    "patrimonio": "PAT-00126"
  }
]
```

### 3. Buscar um item pelo ID
* **Método:** GET
* **Rota:** `/inventario/1`
* **Resposta caso encontre (Status 200):**
```json
{
  "id": 1,
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-01",
  "valor": 3500,
  "patrimonio": "PAT-00125"
}
```
* **Resposta se o ID não existir (Status 404):**
```json
{
  "mensagem": "Item de patrimônio não encontrado."
}
```

### 4. Atualizar um item existente
* **Método:** PUT
* **Rota:** `/inventario/2`
* **O que mandar no corpo (JSON):**
```json
{
  "item": "Projetor Epson Novo",
  "local": "Sala 04",
  "dataRegistro": "2026-09-03",
  "valor": 3000.00,
  "patrimonio": "PAT-00126"
}
```
* **Resposta do servidor (Status 200):**
```json
{
  "id": 2,
  "item": "Projetor Epson Novo",
  "local": "Sala 04",
  "dataRegistro": "2026-09-03",
  "valor": 3000,
  "patrimonio": "PAT-00126"
}
```

### 5. Excluir um item
* **Método:** DELETE
* **Rota:** `/inventario/1`
* **Resposta do servidor (Status 200):**
```json
{
  "mensagem": "Item removido com sucesso do inventário."
}
```

---

## Evidências dos Testes Realizados

Para testar se tudo estava funcionando, usei uma ferramenta de testes de API (como Postman/Insomnia) e fiz os seguintes passos:

1. **Teste do POST:** Enviei os dados de um novo item e vi que ele foi salvo com sucesso dentro do arquivo `inventario.json`. O sistema também criou o ID automático certinho.
2. **Teste do GET geral:** Chamei a rota de listagem e ela mostrou na tela todos os dados que estavam gravados no arquivo JSON.
3. **Teste do GET por ID:** Busquei o ID 1 e ele trouxe os dados do Notebook. Depois tentei buscar um ID que não existe (como 999) e o sistema retornou o erro `404 Not Found` avisando que não achou o item.
4. **Teste do PUT:** Mudei o nome e o valor de um item, enviei a requisição e vi que no arquivo JSON os dados foram alterados, mas o ID continuou o mesmo.
5. **Teste do DELETE:** Deletei um item por ID e, ao listar todos os itens de novo, confirmei que ele sumiu do arquivo.
arquivo, o que foi comprovado ao executar uma nova chamada de listagem global `GET /inventario` logo em sequência.
