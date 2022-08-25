import { Api } from "./api.js";
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
button.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = {
        "nome": inputs[0].value,
        "email": inputs[1].value,
        "sexo": inputs[4].value,
        "idade": parseInt(inputs[2].value),
        "cpf": parseInt(inputs[3].value),
        "endereco": {
            "estado": inputs[10].value,
            "cidade": inputs[9].value,
            "bairro": inputs[8].value,
            "numero": parseInt(inputs[7].value),
            "rua": inputs[6].value,
            "cep": parseInt(inputs[5].value)
        }
    }
    const client = await Api.cadastrarCliente(data);
    console.log(client);
});