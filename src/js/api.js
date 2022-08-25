class Api {
    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes";
    static async listarClientes(){
        const clients = await fetch(Api.baseUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))
        return clients;
    }
    static async cadastrarCliente(body){
        const client = await fetch(Api.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
        return client;
    }
    static async pesquisarCliente(id) {
        const client = await fetch(`${Api.baseUrl}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))
        return client;
    }
    static async editarCliente(id, body) {
        const client = await fetch(`${Api.baseUrl}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
        return client;
    }
    static async deletarCliente(id) {
        const client = await fetch(`${Api.baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .catch(error => {
            console.log(`message: ${error}`)
        })
        return client;
    }
}
export {Api}