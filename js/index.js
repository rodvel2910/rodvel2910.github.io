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
        // $('#titulo_saludo').addClass('d-none')
        $('#titulo_saludo').removeClass('rebote')
        $('#titulo_saludo').addClass('desvanecer')
        setTimeout(() => {
            $('#titulo_saludo').html('¡Bienvenido a mi portafolio!')
            $('#titulo_saludo').removeClass('desvanecer')
            $('#titulo_saludo').addClass('aparecer')
            setTimeout(() => {
                $('#titulo_saludo').removeClass('aparecer')
                $('#titulo_saludo').addClass('desvanecer')
                setTimeout(() => {
                    $('#wrapper_foto').css({
                        'bottom': '0',
                        'transform': 'translateY(-100%)'
                    })
                    setTimeout(() => {
                        $('#wrapper_foto').css({
                            'top': '-18px',
                            'transform': 'none',
                            'transition': 'none'
                        })
                        setTimeout(() => {
                            $('#wrapper_foto').css({
                                'transition': 'all .5s',
                            })
                            $('#wrapper_foto').css({
                                'box-shadow': '0 0 40px #D4AF37',
                            })
                            setTimeout(() => {
                                $('#wrapper_foto').css({
                                    'bottom': 'calc(100% - 350px)',
                                })
                                $('#wrapper_contenido').css({
                                    'bottom': 'calc(100% - 425px)'
                                })
                            }, 1000)
                        }, 500)
                    }, 1000)
                }, 500)
            }, 2000)
        }, 500)
    }, 2000)
})