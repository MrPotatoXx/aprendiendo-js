const titulo = document.createElement('h1')
titulo.innerText = 'Insetar texto aqui'

const boton = document.createElement('button')
boton.innerText = 'click'


boton.addEventListener('click', function(){
    titulo.innerText = 'Otro texto'
})


document.body.append(titulo)
document.body.append(boton)

//Creando una funcion flecha

const mostrarTexto = () => 'Hola'
console.log(mostrarTexto())

const mostrarNumero = () =>  2
console.log(mostrarNumero())

const mostrarBooleano = () => true
console.log(mostrarBooleano())

const mostrarArreglo = () => ['Hola', 'Mundo']
console.log(mostrarArreglo())

const mostrarObjeto = () => ({nombre: 'Juan'})
console.log(mostrarObjeto())

//---



const boton2 = document.createElement('button')
boton2.innerText = 'autorizado'
boton2.style= 'background-color: #3e3e3e; color: white;'

const autorizado = true

boton2.addEventListener('click', () => {
    if(autorizado){
        alert('autorizado')
    }else{
        alert('no autorizado')
    }
} )
document.body.append(boton2)


