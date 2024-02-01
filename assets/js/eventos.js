
$(document).ready(function () {


    //Smooth Scroll
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

    //Tooltip para boton Siguiente en carousel
    $('#next').tooltip({
        title: 'Siguiente imagen',
        placement: 'auto'
    });

    //Tooltip para boton Anterior en carousel
    $('#prev').tooltip({
        title: 'Imagen anterior',
        placement: 'auto'
    });

    //Desaparece seccion destacados al hacer click en titulo (DESTACADOS)
    $('#desid').on('click', function () {
        $('#dessec').toggle();
    });

    //Modal para boton Enviar en seccion Contacto
    $('#enviar').on('click', function(){
        $('#miModal').modal('show');
    });

    //Funcion ocultar modal al boton Aceptar del Modal
    $('#aceptar').on('click', function(){
        $('#miModal').modal('hide');
    });
    
});
