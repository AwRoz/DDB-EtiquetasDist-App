import { decreaseValue, increaseValue } from './contadores'
import { addToQueueHandler, generarEtiquetas } from './handlers'

//Agregar documento a la cola
document.querySelector('#agregaDocumentosColaBtn')
.addEventListener('click',addToQueueHandler)

//Manipulacion de contadores
//--Boton para restar unidades al input
document.querySelectorAll('.decreaseValue')
.forEach(btn => {btn.addEventListener('click', decreaseValue)})

//--Boton para sumar unidades al input
document.querySelectorAll('.increaseValue')
.forEach(btn => {btn.addEventListener('click', increaseValue)})


//Oculta o muestra la personalizacion de rangos
document.querySelector('.desdeHastaTitle')
.addEventListener('click',()=>{
        document.querySelector('#desdeHasta').classList.toggle('disabled')
      })

document.querySelector('.generarEtiquetasBtn')
.addEventListener('click',generarEtiquetas)