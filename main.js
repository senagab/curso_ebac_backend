
$('#btn-cadastrar').on('click', function (e) {
    e.preventDefault();
    console.log('ola');

    const novaTarefa = $('#input-tarefa').val();
    const novoItem = $(`<li>${novaTarefa}</li>`);
    $(novoItem).appendTo('ul');

    console.log('item adicionado com sucesso!');
    $('#input-tarefa').val('');
});