$(document).ready(function() {

    $('#itens-lista').on('click', 'li', function() {

        const itemClicado = $(this).text();
        console.log('tarefa', itemClicado, 'concluida');
        
        
        $(this).toggleClass('clicked');
    });

    $('#btn-cadastrar').on('click', function (e) {
        e.preventDefault();
        // console.log('botao clicado');

        const novaTarefa = $('#input-tarefa').val(); // pega o conteúdo que foi escrito
        const novoItem = $(`<li class="item-lista">${novaTarefa}</li>`);
        $('#itens-lista').append(novoItem);

        console.log('item adicionado com sucesso!');

        // reset inputs
        $('#input-tarefa').val('');
    })

});