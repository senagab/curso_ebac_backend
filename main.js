$(document).ready(function (){

    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#btn-cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) { // callback
        
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        console.log(enderecoNovaImagem);
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    ver imagem em tamanho real    
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn('5000');
        $('#endereco-imagem-nova').val(''); // reset input
    });

});
