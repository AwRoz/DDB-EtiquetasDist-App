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

//funcion para crear el header de la cola
function assignClientToQueue(docData){
    const colaHeader = document.createElement('div')
    colaHeader.classList.add('colaHeader')

    const nombreCliente = document.createElement('h2')
    nombreCliente.classList.add('nombreCliente')
    nombreCliente.innerText = docData[1]

    const domicilioEnvio = document.createElement('h3')
    domicilioEnvio.classList.add('domicilioEnvio')
    domicilioEnvio.classList.add('metaData')
    domicilioEnvio.innerText = docData[9]

    const ciudadMunicipio = document.createElement('h3')
    ciudadMunicipio.classList.add('ciudadMunicipio')
    ciudadMunicipio.classList.add('metaData')
    ciudadMunicipio.innerText = `${docData[10]}, ${docData[11]}`

    colaHeader.appendChild(nombreCliente)
    colaHeader.appendChild(domicilioEnvio)
    colaHeader.appendChild(ciudadMunicipio)

    return colaHeader
}

export {createItemQueue, assignClientToQueue}