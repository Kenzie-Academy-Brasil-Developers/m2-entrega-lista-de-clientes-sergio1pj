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
        .catch(error => console.log(error));
        return clients;
    }

    static async cadastrarCliente(body){
        const newClient = await fetch(Api.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error));
        return newClient;
    }

    static async editarCliente(id, data){

    }

    static async deletarCliente(id){

    }

}
  
export {Api}