import { decreaseValue, increaseValue } from './contadores'

//Manipulacion de contadores
//--Boton para restar unidades al input
const decreaseValueBtn = document.querySelectorAll('.decreaseValue')
      decreaseValueBtn.forEach(btn => {
        btn.addEventListener('click', decreaseValue)
      })
//--Boton para sumar unidades al input
const increaseValueBtn = document.querySelectorAll('.increaseValue')
      increaseValueBtn.forEach(btn => {
        btn.addEventListener('click', increaseValue)
      })


//Oculta o muestra la personalizacion de rangos
const rangosBloque = document.querySelector('.desdeHastaTitle')
      rangosBloque.addEventListener('click',()=>{
        document.querySelector('#desdeHasta').classList.toggle('disabled')
      })

