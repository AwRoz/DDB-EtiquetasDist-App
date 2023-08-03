import { createItemQueue } from './dynamicComponents'
import { getFacturas } from './libraApi'

//Event handler to add a new document to the queue
async function addToQueueHandler(){
    const colaContainer = document.querySelector('.colaDocumentos')
    const doc = document.querySelector('#numeroDocumento')
    const docType = document.querySelector('.docTypeOption input[type="radio"]:checked')
    if(doc.value && docType){
        const facturas = await getFacturas(doc.value,docType.value)
        if(facturas){
            const newDoc = createItemQueue(docType.value,doc.value)
            colaContainer.appendChild(newDoc)
        }
        docType.checked = false
        doc.value = ''
        doc.focus()
    }
}

export {addToQueueHandler}