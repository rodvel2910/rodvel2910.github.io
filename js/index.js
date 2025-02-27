// var btns_nav = document.getElementsByClassName('btn-nav')
// var pestanas = document.getElementsByClassName('wrapper-pestana')
// for (var i = 0; i < btns_nav.length; i++) {
//     btns_nav[i].addEventListener('click', function () {
//         cambiarPestana(this, this.getAttribute('data-pestana'))
//     })
// }
// function cambiarPestana(btn, pestana) {
//     for (var i = 0; i < btns_nav.length; i++) {
//         btns_nav[i].classList.remove('active')
//     }
//     for (var i = 0; i < pestanas.length; i++) {
//         pestanas[i].classList.add('hide')
//     }
//     btn.classList.add('active')
//     document.getElementById('pestana_' + pestana).classList.remove('hide')
//     console.log('Pestaña recibida: ' + pestana)
// }
$(document).ready(function() {
    $('#titulo_saludo').addClass('rebote')
    setTimeout(() => {
        // $('#titulo_saludo').parent().addClass('d-none')
        $('#titulo_saludo').removeClass('rebote')
        $('#titulo_saludo').addClass('desvanecer')
    }, 2000)
})