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

console.log(usuario)