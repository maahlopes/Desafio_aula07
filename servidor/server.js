const express = require("express");
const cadastro = require("../dados.json");


//Mostrando os pedidos que estão no meju Json
//Estou chamando a função mostrarPedidos
const mostrarCadastro = (req, res) => {
    res.send(cadastro)
}

//Criando um novo pedido utilizando POST
const novoCadastro = (req, res) => {
    if (req.body){
        res.send ("Cadastro recebido");
       cadastro.push (req.body)
    }else {
        res.send("Erro ao fazer cadastro")
    }
}


//Excluindo um pedido, DELETE
const excluirCadastro = (req,res) => {
    const id = req.params.id;

    cadastro.forEach((item , indice) => {
        if (item.id == id){
            cadastro.splice(indice, 1)
        }
     });

     res.send("Cadastro excluido com sucesso!")
    };

    const alterarCadastro =  (req, res) => {
        const id = req.params.id;
        const dados = req.body;

        cadastro.forEach((cadastro) => {
            if (cadastro.id == id){
                cadastro.item = dados.item;
                cadastro.local = dados.local;
                cadastro.dataRegistro = dados.dataRegistro;
               cadastro.valor = dados.valor;
               cadastro.patrimonio = dados.patrimonio;
            }

        });
        res.send("Cadastro atualizado com sucesso!");
    } 

const app = express();
app.use(express.json())
app.use(express.urlencoded({extend: true}))
const porta = 3000;

app.get("/inventario", mostrarCadastro);
app.post("/inventario", novoCadastro);
app.delete("/inventario/:id", excluirCadastro);
app.put("/inventario/:id", alterarCadastro);

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}/inventario`);
});