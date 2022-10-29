// GET - pegar/trazer/listar
// POST - subir/adicionar/enviar/criar
// PUT - atualizar/alterar/
// DELETE - apagar/deletar/destruir/remover/aniquilar



async function addContato() {
    let dados = input_nova_tarefa.value.split(" ")
    let nome = dados[0]
    let idade = dados[1]
    let chuchu = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            idade: idade
        })
    })
    console.log(chuchu)
    if (chuchu.ok) {
        console.log('adicionei')
        atualizarContatos()
    }
}

async function atualizar(identificador) {
    let nomeNovo = prompt("nome?")
    let idadeNovo = prompt("idade?")

    let res = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3/' + identificador, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nomeNovo,
            idade: idadeNovo
        })
    });
    if (res.ok) {
        alert('Atualizou')
        atualizarContatos()
    } else {
        alert('Erro ao atualizar')
    }
}

atualizarContatos();


async function atualizarContatos() {
    let resposta = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3')
    let body = await resposta.json()
    tarefas.innerHTML = "<ul>"
    body.forEach(pessoa => {
        tarefas.innerHTML +=
            `<li>${pessoa.nome} - ${pessoa.idade} 
            <button id="botaodelete" onclick="deletar(${pessoa.id})" class="btn btn-danger"></button>
            <button id="botaoeditar" onclick="atualizar(${pessoa.id})" class="btn btn-info"></button>
            <button id="botaofavor" onclick="favoritar(${pessoa.id})" class="btn btn-info"></button>
            
        </li>`
    });
    tarefas.innerHTML += "</ul>"
}

async function deletar(identificador) {
    let res = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3/' + identificador, {
        method: 'DELETE',
    });
    if (res.ok) {
        atualizarContatos();
        console.log("deletado")
    } else {
        console.log(res.statusText)
    }
}
document.onkeydown = function (evt) {//adiciona captura do teclado fisico
    evt = evt || window.evt
    if (evt.key === "Enter") {//se key é enter, chama metodo do enter (guess linha 212)
        addContato();
    } else if (evt.key === "Backspace") {//se key é backspace, chama backspace
        handleBackspace()
    } else {
        handleKeyboardOnClick(evt.key.toUpperCase())//ou passa tecla digitar maiuscula
    }
}

function deslogar() {
    var nm1 = "nulo";
    var ps1 = "nulo";
    localStorage.setItem("n1", nm1);
    localStorage.setItem("p1", ps1);
    if (ps1 == "nulo") {

        location.href = "login.html";

    }
}

function atualiza() {
    if ("nulo" == localStorage.getItem("n1")) {
        location.href = "login.html";
    }
}


// function favoritar() {
//     var nm2 = `${pessoa.nome}`;
//     localStorage.setItem(`${pessoa.nome}`, nm2);
//     console.log(`${pessoa.nome}`);
//     }

    // function favoritar() {
    //     var fvt =  `${pessoa.id}`;
    //     localStorage.setItem("favorito", fvt);

    //     }
    

