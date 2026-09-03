const API_KEY = "https://crudcrud.com/api/cc383276979e4ef683438881d90b09c4/tarefa"

const bodyCard = document.querySelector('.container-cards');

//Função para Criar os Card conforme são cadastrado
const getTask = async () =>  {
    // Recebemos uma promessa de resposta HTTP ex: 200
    const response = await fetch(API_KEY)
    //Guarda o Json transformado em um objeto javascripts
    .then(res => res.json())
    // Acessamos o objeto javascript
    .then((data) => {
        //limpeza do card antes de criar im novo, tinha um bug que ao cadastrar ele duplicava os cards
        bodyCard.innerHTML ='';
        // Trabalho um forEach para cada indice criar um card com o objeto
        data.forEach(task => {
            bodyCard.innerHTML += `
                <article class="card">
                    <header class="card-title">
                        <h2>${task.title}</h2>
                        <!--"atributo data-id" recebe o seu valor de _id da API para ser acessada pelo botão -->
                        <button class="clear" data-id="${task._id}" >Apagar</button>
                    </header>

                    <div class="card-body">
                        <p>${task.descricao}</p>
                    </div>
                </article>
            `;
        });

    });

    //captura o ID que vem da API, aguardando o click para deletar
    const btnId = document.querySelector('.clear') 
    btnId.addEventListener('click', (event) => {
        const id = event.currentTarget.dataset.id;
        deleteTask(id)
    })

};

//Limpeza dos Inputs
const clearInput = () => {
    const title = document.getElementById('title').value = "";
    const descricao = document.getElementById('task').value= "";
}




//Evento para cadastro das Tarefas
document.getElementById('adicionar').addEventListener('click', async (event) => {
    try {
        const title = document.getElementById('title').value;
        const descricao = document.getElementById('task').value;
    
        const response = await fetch(API_KEY, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title, 
                descricao: descricao 
            })
        })

        // pega o corpo da resposta do JSON.Stringify e transforma em javascript
        await response.json();
        // apos o cadastro limpa os Input
        clearInput()
        // e busca novamento o novo objeto cadastrado
        await getTask();

       

        if(!response.ok) {
            throw new Error('Erro ao cadastrar tarefa');
        }


    } catch (error) {
        console.error(error)
    }
        
})

//Função para deletar a tarefa
const deleteTask = async  (id) => {
    try {
        // recebemos o ID do evento de captura do btn "apagar" e adicionamos na URL da API com o methodo Delete
        const response = await fetch(`${API_KEY}/${id}`, {
            method: "DELETE"
        })

        if(!response.ok) {
            throw new Error('Erro ao apagar tarefa');
        }

        alert(`Tarefa ${id} apagada com sucesso`);
        await getTask()

    } catch (e) {
        console.error(error);
    }
}

//Carrega os cards que vem da API ao carregar a pagina
getTask()

