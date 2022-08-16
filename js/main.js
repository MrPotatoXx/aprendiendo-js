const titulo = document.createElement('h1')
titulo.innerText = 'Insetar texto aqui'

const boton = document.createElement('button')
boton.innerText = 'click'


boton.addEventListener('click', function(){
    titulo.innerText = 'Otro texto'
})


document.body.append(titulo)
document.body.append(boton)

