function addContato(){
    console.log(1)
}

atualizarContatos();

async function atualizarContatos(){
    let resposta = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3')
    let body = await resposta.json()
    tarefas.innerHTML = "<ul>"
    body.forEach(pessoa => {
        tarefas.innerHTML +=  `<li>${pessoa.nome} - ${pessoa.idade} <button onclick="deletar(${pessoa.id})">Deletar</button></li>`
    });
    tarefas.innerHTML +=  "</ul>"
}

async function deletar(identificador){
    let res = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3/' + identificador, {
        method: 'DELETE',
    });
    if(res.ok){
        atualizarContatos();
    } else{
        console.log(res.statusText)
    }
}