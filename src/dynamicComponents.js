function createItemQueue(docType,docNumber){
    const newItem = document.createElement('li')
    newItem.classList.add('documentoEnCola')

    const newTitle = document.createElement('p')
    newTitle.innerText = `${docType}/${docNumber}`

    const newDeleteBtn = document.createElement('span')
    newDeleteBtn.classList.add('deleteItemBtn')
    newDeleteBtn.innerText = 'Eliminar' 

    newItem.appendChild(newTitle)
    newItem.appendChild(newDeleteBtn)

    return newItem
}

export { createItemQueue }