//function to create a new element li which will be added to the queue
function createItemQueue(docType,docNumber){
    const newItem = document.createElement('li')
    newItem.classList.add('documentoEnCola')
    newItem.id = `${docType}/${docNumber}`

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
function assignClientToQueue(docData, serie){
    const colaHeader = document.createElement('div')
    colaHeader.classList.add('colaHeader')

    const nombreCliente = document.createElement('h2')
    nombreCliente.classList.add('nombreCliente')
    nombreCliente.innerText = (serie === 'PED' || serie === 'CON') ?  docData[2] : docData[1]  

    const domicilioEnvio = document.createElement('h3')
    domicilioEnvio.classList.add('domicilioEnvio')
    domicilioEnvio.classList.add('metaData')
    domicilioEnvio.innerText = (serie === 'PED' || serie === 'CON') ?  docData[7] : docData[9]

    const ciudadMunicipio = document.createElement('h3')
    ciudadMunicipio.classList.add('ciudadMunicipio')
    ciudadMunicipio.classList.add('metaData')
    ciudadMunicipio.innerText =  (serie === 'PED' || serie === 'CON') ? `${docData[8]}, ${docData[9]}` : `${docData[10]}, ${docData[11]}`

    colaHeader.appendChild(nombreCliente)
    colaHeader.appendChild(domicilioEnvio)
    colaHeader.appendChild(ciudadMunicipio)

    return colaHeader
}

//funcion para crear el contenedor de cada uno de los items de la cola
function queueContainer(){
    const container = document.createElement('ul')
    container.classList.add('colaDocumentos')
    return container
}

//generarEtiquetas
function generarEtiquetas(ids,headerData,neveras,cajas,liquidos){
    const etiquetasContainer = document.createElement('div')
    const docs = ids.join(', ')

    let tipo
    let total = parseInt(neveras) + parseInt(cajas) + parseInt(liquidos)
    let contador = 1

    for(let i = 1; i <= neveras; i++){
        tipo = 'Nevera'
        const nuevaEtiqueta = etiqueta(headerData,docs,tipo,contador,total)
        etiquetasContainer.innerHTML += nuevaEtiqueta
        contador += 1
    }
    for (let i = 1; i <= cajas; i++){
        tipo = 'Caja'
        const nuevaEtiqueta = etiqueta(headerData,docs,tipo,contador,total)
        etiquetasContainer.innerHTML += nuevaEtiqueta
        contador += 1
    }
    for (let i = 1; i <= liquidos; i++){
        tipo = 'Liquidos'
        const nuevaEtiqueta = etiqueta(headerData,docs,tipo,contador,total)
        etiquetasContainer.innerHTML += nuevaEtiqueta
        contador += 1
    }
    
    return etiquetasContainer
}


function etiqueta(header,docs,tipo,contador,total){
    return `
<div class="etiqueta">
    <section class="etiqueta__header">
        <div class="etiqueta__info">
            <h2 class="etiqueta__info__cliente nombreCliente">${header[0]}</h2>
            <p class="etiqueta__info__direccion metaData">${header[1]}</p>
            <p class="etiqueta__info__ciudad metaData">${header[2]}, ${header[3]}</p>
        </div>
        <span class="etiqueta__logoDdb"></span>
    </section>
    <section class="etiqueta__data">
        <h3>DOCUMENTOS:</h3>
        <p>${docs}</p>
    </section>
    <section class="etiqueta__cajas">
        <h1 class="nevera-caja">${tipo}</h1>
        <p>
            <span class="nevera-caja__desde">${contador}</span> de 
            <span class="nevera-caja__hasta">${total}</span>
        </p>
    </section>
</div>`
}

export {createItemQueue, assignClientToQueue, queueContainer, generarEtiquetas}
