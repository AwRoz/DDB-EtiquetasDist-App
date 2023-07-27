import { decreaseValue, increaseValue } from './contadores'

//Agregar documento a la cola
const colaContainer = document.querySelector('.colaDocumentos')
const addToQueueBtn = document.querySelector('#agregaDocumentosCola')
      addToQueueBtn.addEventListener('click',()=>{
        const documento = document.querySelector('#numeroDocumento')
        let tipoDocContainer
        let tipoDocValue
        const tipoDocs = document.querySelectorAll('.docTypeContainer input[type="radio"]')
              tipoDocs.forEach(item => {
                if(item.checked){
                  tipoDocValue = item.value
                  tipoDocContainer = item
                }
              })
        if(documento.value && tipoDocValue){
          const newDoc = document.createElement('li')
                newDoc.classList.add('documentoEnCola')
          const newTitle = document.createElement('p')
                newTitle.innerHTML = `${tipoDocValue}/${documento.value}`
          const newDeleteBtn = document.createElement('span')
                newDeleteBtn.classList.add('deleteItemBtn')
                newDeleteBtn.setAttribute('onclick', 'deleteItemBtn(event)')
                newDeleteBtn.innerHTML = 'Eliminar'
          newDoc.appendChild(newTitle)
          newDoc.appendChild(newDeleteBtn)
          colaContainer.appendChild(newDoc)
          
          documento.value = ''
          tipoDocContainer.checked = false
        }
      })


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

