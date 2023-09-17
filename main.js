const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'

let linhas = '';

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    // if utilizando o input como parametro
    // o if com ?
    // e else como :
    linha += `</tr>`;
    // linha = linha + 'outro conteudo'


    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''

    // alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);

});