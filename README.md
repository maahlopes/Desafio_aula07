# Desafio_aula07

# Sistema de Controle de Inventário de Patrimônio - API REST

## Descrição do Projeto
Este projeto consiste em uma API REST desenvolvida como solução para o desafio da **Aula 07**. A aplicação auxilia uma empresa no controle de seu inventário de patrimônio, substituindo os registros manuais por um sistema automatizado de CRUD (Create, Read, Update e Delete). 

Para esta versão, os dados são armazenados e persistidos de forma síncrona em um arquivo local no formato JSON (`inventario.json`), simulando uma base de dados real e mantendo o estado das informações durante a execução da aplicação.

---

## Tecnologias Utilizadas
* **Node.js** (Ambiente de execução JavaScript)
* **Express.js** (Framework minimalista para gerenciamento de rotas e requisições HTTP)
* **FS (File System)** (Módulo nativo do Node para leitura e escrita de arquivos)
* **JavaScript (ES6+)**

---

## Instruções para Instalação e Execução

1. Certifique-se de possuir o **Node.js** instalado em seu ambiente de desenvolvimento.
2. Clone ou baixe os arquivos deste repositório para sua máquina local.
3. Abra o terminal na pasta raiz do projeto e instale as dependências executando:
   ```bash
   npm install
   ```
4. Inicie o servidor local rodando o comando:
   ```bash
   npm start
   ```
5. O terminal exibirá a mensagem indicando o sucesso da inicialização. A API estará pronta para receber requisições em: `http://localhost:3000`.

---

## Lista de Rotas Disponíveis e Exemplos

### 1. Criar um Item
* **Rota:** `POST /inventario`
* **Descrição:** Cadastra um novo item de patrimônio gerando um ID incremental automático.
* **Exemplo de Requisição (Body JSON):**
```json
{
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": 3500.00,
  "patrimonio": "PAT-00125"
}
```
* **Exemplo de Resposta (Status 21 Created):**
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

### 2. Listar Todos os Itens
* **Rota:** `GET /inventario`
* **Descrição:** Retorna a listagem de todos os patrimônios salvos no arquivo JSON.
* **Exemplo de Resposta (Status 200 OK):**
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

### 3. Consultar um Item Específico
* **Rota:** `GET /inventario/:id`
* **Descrição:** Retorna os dados completos de um item localizando-o pelo ID fornecido na URL.
* **Exemplo de Resposta - Sucesso (Status 200 OK):**
```json
{
  "id": 2,
  "item": "Projetor Epson",
  "local": "Sala 03",
  "dataRegistro": "2026-09-03",
  "valor": 2800,
  "patrimonio": "PAT-00126"
}
```
* **Exemplo de Resposta - Erro (Status 404 Not Found):**
```json
{
  "mensagem": "Item de patrimônio não encontrado."
}
```

### 4. Atualizar um Item
* **Rota:** `PUT /inventario/:id`
* **Descrição:** Substitui os dados de um item existente mantendo o ID original de seu registro.
* **Exemplo de Requisição (Body JSON):**
```json
{
  "item": "Projetor Epson - Lente 4K",
  "local": "Sala de Reuniões 02",
  "dataRegistro": "2026-09-03",
  "valor": 3100.00,
  "patrimonio": "PAT-00126"
}
```
* **Exemplo de Resposta (Status 200 OK):**
```json
{
  "id": 2,
  "item": "Projetor Epson - Lente 4K",
  "local": "Sala de Reuniões 02",
  "dataRegistro": "2026-09-03",
  "valor": 3100,
  "patrimonio": "PAT-00126"
}
```

### 5. Excluir um Item
* **Rota:** `DELETE /inventario/:id`
* **Descrição:** Remove de forma definitiva um registro de patrimônio da base de dados local.
* **Exemplo de Resposta (Status 200 OK):**
```json
{
  "mensagem": "Item removido com sucesso do inventário."
}
```

---

## Evidências dos Testes Realizados nas Rotas da API

Para comprovar a conformidade com os requisitos solicitados na atividade, foram efetuados testes locais de envio e recebimento de payloads através de ferramentas de cliente HTTP (Postman / Insomnia).

### Cenários de Validação Prática:

1. **Persistência de Dados em Arquivo:** Foi disparado um método `POST` para criação de um novo patrimônio. Validou-se que o módulo `fs` do Node executou a gravação do registro no arquivo físico `inventario.json`, incrementando o atributo `id` de forma automática e preservando as informações pós-reinicialização da aplicação.
2. **Consistência de Resposta HTTP:** Ao buscar por uma rota de identificador inexistente (`GET /inventario/999`), a aplicação respondeu de maneira adequada utilizando o status code `404 Not Found` associado a uma mensagem amigável em formato JSON, provando o tratamento correto de erros do fluxo lógico.
3. **Bloqueio de Payload Incompleto:** Realizou-se testes omitindo campos estruturais do payload na criação de registros. O backend barrou a gravação de dados corrompidos retornando o código `400 Bad Request` antes de interagir com o arquivo, garantindo que todos os atributos obrigatórios (`item`, `local`, `dataRegistro`, `valor` e `patrimonio`) permaneçam íntegros na base.
4. **Fluxo de Exclusão Física:** A chamada do método `DELETE` limpou com sucesso o objeto mapeado através do filtro por ID e salvou o estado atualizado do array no arquivo, o que foi comprovado ao executar uma nova chamada de listagem global `GET /inventario` logo em sequência.
