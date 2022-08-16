// definiendo un objeto

const usuario = {
    nombre: 'Pepito',
    apellido: 'Alvarez',
    edad: 20,
    Direccion:{
        pais: 'Dinamarca',
        ciudad: 'Copenhagen',
        calle: 'Calle Falsa',
        numero: '123'
    },
    amigos:['Juan','Pedro','Maria'],
    activo: true,
    enviarCorreo: function(){
        return 'Enviando correo...'
    }
}
//Llamar objeto usuario
console.log(usuario)
console.log(usuario.enviarCorreo())

function imprimirInfo(usuario ){
    return '<h2>Hola '+ usuario.nombre+'</h2>'
}
console.log(imprimirInfo(usuario))

document.body.innerHTML = imprimirInfo(usuario)