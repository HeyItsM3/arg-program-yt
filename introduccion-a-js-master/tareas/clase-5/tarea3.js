//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
const $calcularHorasTotales = document.querySelector('#calcular')

$calcularHorasTotales.onclick = function () {
  const $horas = parseInt(document.querySelector('#horas').value)
  const $minutos = parseInt(document.querySelector('#minutos').value)
  const $segundos = parseInt(document.querySelector('#segundos').value)


  sumarHoras($horas, $minutos, $segundos)
}

function sumarHoras(horas, minutos, segundos) {
   document.querySelector( '#resultado1' ).innerHTML = horas +' horas';
   document.querySelector( '#resultado2' ).innerHTML = minutos +' minutos';
   document.querySelector( '#resultado3' ).innerHTML = segundos +' segundos';
}
