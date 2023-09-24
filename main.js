const form = document.getElementById('form-atividade');
const contato = [];
const numeroContato = [];
const table = document.getElementById('tabela');
const inputContato = document.getElementById('nome-contato');


let linhas = '';

form.addEventListener('submit', function(e) {

    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha () {

    const inputNumeroContato = document.getElementById('numero-contato');

    if (contato.includes(inputContato.value)) {
        alert(`O contato ${inputContato.value} já foi inserido.`)
    } else {
        contato.push(inputContato.value);
        numeroContato.push(parseFloat(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;
        
        linhas += linha;
    
    }

    inputContato.value = ''
    inputNumeroContato.value = ''

}

table.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('remove')) {
        handleRemoveItemClick(event);  // passa o evento para a função
    }
});

function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}