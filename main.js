const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'
const contato = [];
const numeroContato = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
// const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas = '';

form.addEventListener('submit', function(e) {

    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

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
        linha += `</tr>`;
        // linha = linha + 'outro conteudo'
        
        linhas += linha;
    
    }

    inputContato.value = ''
    inputNumeroContato.value = ''

}

function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal() {

    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    // console.log(media);
};