$(document).ready(function(){

    $('#form-atividade').on('submit', function(e){
        e.preventDefault();
        const inputAtividade = $('#input-atividade').val();
        const novaAtividade = $('<li></li>').text(inputAtividade);
        $('#lista-atividade').append(novaAtividade);
        $('#input-atividade').val('')

        $('#lista-atividade').on('click', 'li', function() {
            $(this).css('text-decoration', 'line-through');
        });

    })
})
