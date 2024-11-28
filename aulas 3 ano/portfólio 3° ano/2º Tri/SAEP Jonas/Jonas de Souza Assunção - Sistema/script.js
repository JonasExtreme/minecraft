let idCounter = 1;

function criarTarefa() {
    const descricao = document.getElementById('descricao').value;
    const setor = document.getElementById('setor').value;
    const prioridade = document.getElementById('prioridade').value;
    const status = document.getElementById('status').value;
    const dataCadastro = new Date().toLocaleString();

    if (!descricao || !setor || !prioridade || !status) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const tarefa = {
        id: idCounter++,
        descricao,
        setor,
        prioridade,
        status,
        dataCadastro
    };

    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    alert("Tarefa criada com sucesso!");
    document.getElementById('descricao').value = '';
    document.getElementById('setor').value = '';
    document.getElementById('prioridade').value = 'Alta';
    document.getElementById('status').value = 'Em andamento';
}

function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const tableBody = document.querySelector('#taskTable tbody');

    tableBody.innerHTML = '';

    tarefas.forEach(tarefa => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tarefa.id}</td>
            <td>${tarefa.descricao}</td>
            <td>${tarefa.setor}</td>
            <td>${tarefa.prioridade}</td>
            <td>${tarefa.status}</td>
            <td>${tarefa.dataCadastro}</td>
        `;
        tableBody.appendChild(row);
    });
}

window.onload = carregarTarefas;