// configuracao p / aparecer como slide-- >
$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    })

    $(".menu-hamburguer").click(function () {
        $('nav').slideToggle();
    })
})
