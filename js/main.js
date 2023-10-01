
$(document).ready(function() {
    $('#carrousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#campo-telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: { /* regras se aplicam aos inputs com propriedade nome*/
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: { /* edição da mensagem para nome */
            nome: 'Por favor insira seu nome'   
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function (){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text(); /* puxa conteudo do elemento */

        $('#campo-veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})