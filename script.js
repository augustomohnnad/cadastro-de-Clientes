const API_KEY = "https://crudcrud.com/api/b876b11413504aecba1b26be0b2001bc/Custommer"

const bodyCard = document.querySelector('.container-cards');

//Função para Criar os Card conforme são cadastrado
const getCustommers = async () =>  {
    // Recebemos uma promessa de resposta HTTP ex: 200
    const response = await fetch(API_KEY)
    //Guarda o Json transformado em um objeto javascripts
    .then(res => res.json())
    // Acessamos o objeto javascript
    .then((data) => {
        //limpeza do card antes de criar im novo, tinha um bug que ao cadastrar ele duplicava os cards
        bodyCard.innerHTML ='';
        // Trabalho um forEach para cada indice criar um card com o objeto
        data.forEach(custommer=> {
            bodyCard.innerHTML += `
                <article class="card">
                    <header class="card-title">
                        <h2>Nome: ${custommer.name}</h2>
                        <!--"atributo data-id" recebe o seu valor de _id da API para ser acessada pelo botão -->
                        <button class="clear" data-id="${custommer._id}" >Excluir</button>
                    </header>

                    <div class="card-body">
                        <p>E-mail: ${custommer.email}</p>
                    </div>
                </article>
            `;
        });

    });

    //captura o ID que vem da API, aguardando o click para deletar
    const btnId = document.querySelector('.clear') 
    btnId.addEventListener('click', (event) => {
        const id = event.currentTarget.dataset.id;
        deleteCustommer(id)
    })

};

//Limpeza dos Inputs
const clearInput = () => {
    const nameCustommer = document.getElementById('name').value = "";
    const email = document.getElementById('email').value= "";
}




//Evento para cadastro das Tarefas
document.getElementById('adicionar').addEventListener('click', async (event) => {
    try {
        const nameCustommer = document.getElementById('name').value;
        const email = document.getElementById('email').value;
    
        const response = await fetch(API_KEY, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameCustommer, 
                email: email 
            })
        })

        // pega o corpo da resposta do JSON.Stringify e transforma em javascript
        await response.json();
        // apos o cadastro limpa os Input
        clearInput()
        // e busca novamento o novo objeto cadastrado
        await getCustommers();

       

        if(!response.ok) {
            throw new Error('Erro ao cadastrar tarefa');
        }


    } catch (error) {
        console.error(error)
    }
        
})

//Função para deletar a tarefa
const deleteCustommer = async  (id) => {
    try {
        // recebemos o ID do evento de captura do btn "apagar" e adicionamos na URL da API com o methodo Delete
        const response = await fetch(`${API_KEY}/${id}`, {
            method: "DELETE"
        })

        if(!response.ok) {
            throw new Error('Erro ao apagar tarefa');
        }

        alert(`Tarefa ${id} apagada com sucesso`);
        await getCustommers()

    } catch (e) {
        console.error(error);
    }
}



