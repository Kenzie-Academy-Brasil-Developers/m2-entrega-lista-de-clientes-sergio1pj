export class Render {
    static renderClientList(array) {
        const tagUl = document.createElement("ul");
        array.forEach(function(news){
        const tagLi = Render.renderCard(news);
        tagUl.append(tagLi);
        });
        tagUl.classList.add("container");
        return tagUl;
    }
    static renderCard(client) {
        const tagLi = document.createElement("li");
        tagLi.classList.add("card");
        tagLi.innerHTML = 
            `<h2>${client.nome.split(" ")[0]}</h2>
                <div>
                    <h3>Dados Pessoais</h3>
                    <p>email: ${client.email}</p>
                    <p>idade: ${client.idade}</p>
                    <p>cpf: ${client.cpf}</p>
                    <p>sexo:${client.sexo}</p>
                </div>
                <div>
                    <h3>Endereco</h3>
                    <p>cep: ${client.endereco.cep}</p>
                    <p>estado: ${client.endereco.estado}</p>
                    <p>cidade: ${client.endereco.cidade}</p>
                    <p>bairro: ${client.endereco.bairro}</p>
                    <p>rua: ${client.endereco.rua}</p>
                    <p>numero: ${client.endereco.rua}</p>
                </div>`
        return tagLi
    }
  }
  
  