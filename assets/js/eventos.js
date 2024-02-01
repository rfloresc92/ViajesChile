
$(document).ready(function () {

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    $('#next').tooltip({
        title: 'Siguiente imagen',
        placement: 'auto'
    });

    $('#prev').tooltip({
        title: 'Imagen anterior',
        placement: 'auto'
    });

    $('#desid').on('click', function () {
        $('#dessec').toggle();
    });

    $('#enviar').on('click', function(){
        $('#miModal').modal('show');
    });

    $('#aceptar').on('click', function(){
        $('#miModal').modal('hide');
    });

});
