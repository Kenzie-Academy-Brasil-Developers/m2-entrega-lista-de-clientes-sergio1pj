import { Api } from "./api.js";
import { Render } from "./render.js";
const clients = await Api.listarClientes();
/*
const newClient = await Api.cadastrarCliente(
    {
        "nome": "Cliente",
        "email": "clienteTeste@gmail.com",
        "sexo": "Masculino",
        "idade": 20,
        "cpf": "12345678910",
        "endereco": {
            "estado": "PB",
            "cidade": "testerCity",
            "bairro": "bairrinho",
            "numero": "22",
            "rua": "Rua de Teste",
            "cep": "12345"
        }
    }
);
console.log(newClient);*/
const body = document.querySelector("body");
body.appendChild(Render.renderClientList(clients));