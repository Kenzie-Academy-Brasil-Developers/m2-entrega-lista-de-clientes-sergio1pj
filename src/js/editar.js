import { Api } from "./api.js";
const inputs = document.querySelectorAll("#form-data input");
const select = document.querySelector("select");
async function renderSelect() {
    select.innerHTML = "";
    const clients = await Api.listarClientes();
    clients.forEach(client => {
    const option = document.createElement("option");
    option.value = client.id;
    option.innerText = client.nome;
    select.appendChild(option);
    });
}
const buttonSearch = document.querySelector("#search");
buttonSearch.addEventListener("click", async (e) => {
    e.preventDefault();
    const id = select.value;
    const client = await Api.pesquisarCliente(id);
    inputs[0].value = client.nome;
    inputs[1].value = client.email;
    inputs[2].value = client.idade;
    inputs[3].value = client.cpf;
    inputs[4].value = client.sexo;
    inputs[5].value = client.endereco.cep;
    inputs[6].value = client.endereco.rua;
    inputs[7].value = client.endereco.numero;
    inputs[8].value = client.endereco.bairro;
    inputs[9].value = client.endereco.cidade;
    inputs[10].value = client.endereco.estado;
});
const buttonEdit = document.querySelector("#edit");
buttonEdit.addEventListener("click", async (e) => {
    e.preventDefault();
    const id = select.value;
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
    const client = await Api.editarCliente(id, data);
    console.log(client);
    await renderSelect();
});
await renderSelect();

