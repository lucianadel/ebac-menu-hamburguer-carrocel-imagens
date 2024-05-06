// configuracao p / aparecer como slide-- >
$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    })

    $(".menu-hamburguer").click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
        }
    }
    })

})




