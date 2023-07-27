//Event handler to add a new document to the queue
function addToQueueHandler(){
    const colaContainer = document.querySelector('.colaDocumentos')
    const doc = document.querySelector('#numeroDocumento')
    const docType = document.querySelector('.docTypeOption input[type="radio"]:checked')
    if(doc.value && docType){
        const newDoc = createItemQueue(docType.value,doc.value)
        colaContainer.appendChild(newDoc)
        docType.checked = false
        doc.value = ''
        doc.focus()
    }
}

//function to create a new element li which will be added to the queue
function createItemQueue(docType,docNumber){
    const newItem = document.createElement('li')
    newItem.classList.add('documentoEnCola')

    const newTitle = document.createElement('p')
    newTitle.innerText = `${docType}/${docNumber}`

    const newDeleteBtn = document.createElement('span')
    newDeleteBtn.classList.add('deleteItemBtn')
    newDeleteBtn.setAttribute('onclick','deleteItemBtn(event)')
    newDeleteBtn.innerText = 'Eliminar' 

    newItem.appendChild(newTitle)
    newItem.appendChild(newDeleteBtn)

    return newItem
}

export { addToQueueHandler }