$(document).ready(function (){

    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#btn-cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) { // callback
        console.log("submit");
        e.preventDefault();
    });

});
