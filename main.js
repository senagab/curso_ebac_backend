const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'
const contato = [];
const numeroContato = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
// const notaMinima = parseFloat(prompt("Digite a nota mínima: "));
const removeImg = '<img class="remove" src="./images/remove-icon.png" alt="icone lixeira" />'
const btnRemove = document.getElementsByClassName('remove');
const table = document.getElementById('tabela');

// const img = document.getElementById('remove');

let linhas = '';

form.addEventListener('submit', function(e) {

    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha () {

    const inputContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contato.includes(inputContato.value)) {
        alert(`O contato ${inputContato.value} já foi inserido.`)
    } else {

        contato.push(inputContato.value);
        numeroContato.push(parseFloat(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        // linha += `<td>${inputNumeroContato.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        // ternario
        // if utilizando o input como parametro
        // o if com ?
        // e else como :
        linha += `<td>${removeImg}</td>`;
        linha += `</tr>`;
        // linha = linha + 'outro conteudo'
        
        linhas += linha;
    
    }

    inputContato.value = ''
    inputNumeroContato.value = ''

}

table.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('remove')) {
        handleRemoveItemClick();
    }
});

function handleRemoveItemClick() {
    console.log('Item clicked', inputContato.value);
}

function removeLinha() {

    console.log('Image inside a TD was clicked.');

}

function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}