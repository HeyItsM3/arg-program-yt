
const $mostrarDatos = document.querySelector('#mostrar-datos')

const $limpiarDatos = document.querySelector( '#limpiarDatos' )

$mostrarDatos.onclick = function() {

  const $nombreUsuario = document.querySelector('#nombre-usuario').value
  const $apellidoUsuario = document.querySelector('#apellido-usuario').value
  const $edadUsuario = document.querySelector('#edad-usuario').value

  saludarUsuario( $nombreUsuario )
  mostrarDatosUsuario( $nombreUsuario, $apellidoUsuario, $edadUsuario )

}


function saludarUsuario( nombre ) {
  return document.querySelector('h1').innerHTML = `Bienvenido, ${nombre}`
}

function mostrarDatosUsuario( nombre, apellido, edad ) {
  return document.querySelector( '#resultado' ).innerHTML = `nombre: ${nombre}<br>apellido: ${apellido}<br>edad: ${edad}`
}

$limpiarDatos.onclick = function() {
  document.querySelector( '#resultado' ).innerHTML = ''
}
