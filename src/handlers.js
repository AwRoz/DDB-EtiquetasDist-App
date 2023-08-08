import { createItemQueue, assignClientToQueue, queueContainer } from './dynamicComponents'
import { getDocumento } from './libraApi'

let clienteDomicilio = null
let clienteColaID

//Event handler to add a new document to the queue
async function addToQueueHandler(){
    const colaContainer = document.querySelector('.colaContainer')
    const doc = document.querySelector('#numeroDocumento')
    const docType = document.querySelector('.docTypeOption input[type="radio"]:checked')
    
    if(doc.value && docType){
        //se hace peticion a la API para obtener el documento
        const documento = await getDocumento(doc.value,docType.value)
        //si el documento existe
        if(documento){
            //se crea un ID para el cliente/domicilio obtenido de la consulta a la API
            if (docType.value === 'PED'){
                clienteColaID = `${documento[0][1]}-${documento[0][6]}`
            }else{
                clienteColaID = `${documento[0][0]}-${documento[0][8]}`
            }
            console.log(clienteColaID,clienteDomicilio);
            //valida si no hay cliente asignado a la cola o si el cliente/domicilio coincide con el existente
            if(!clienteDomicilio || clienteDomicilio === clienteColaID){
                if(!clienteDomicilio){
                    const colaHeader = assignClientToQueue(documento[0],docType.value)
                    colaContainer.appendChild(colaHeader)

                    const listaDocsContainer = queueContainer()
                    colaContainer.appendChild(listaDocsContainer)
                }
                //se agega el nuevo documento a la cola
                const colaDocsContainer = document.querySelector('.colaDocumentos')
                const newDoc = createItemQueue(docType.value,doc.value)
                colaDocsContainer.appendChild(newDoc)
                //se asigna el cliente/domicilio a la cola
                clienteDomicilio = clienteColaID
            }else{
                alert(`Cliente y/o Direccion del documento ingresado no coincide con el de la cola`)
            }
        } 
        //set to default values
        docType.checked = false
        doc.value = ''
        doc.focus()
    }
}

async function generarEtiquetas(){
    console.log(`hola`);
}


export {addToQueueHandler, generarEtiquetas}