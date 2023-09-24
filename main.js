$(document).ready(function (){

    $('header button').click(function () {
        alert('expandir formulario')
    });

    $('form').on('submit', function (e) { // callback
        console.log("submit");
        e.preventDefault();
    });

});
