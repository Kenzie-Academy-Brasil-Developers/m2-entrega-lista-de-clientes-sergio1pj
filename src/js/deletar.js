import { Api } from "./api.js";
const select = document.querySelector("select");
const buttonDelete = document.querySelector("#delete");
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
buttonDelete.addEventListener("click", async (e) => {
    e.preventDefault();
    const id = select.value;
    const client = await Api.deletarCliente(id);
    await renderSelect();
});
renderSelect();