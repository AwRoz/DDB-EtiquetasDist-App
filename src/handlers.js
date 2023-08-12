import { createItemQueue, assignClientToQueue, queueContainer, generarEtiquetas } from './dynamicComponents'
import { getDocumento } from './libraApi'

let clienteDomicilio = null
let clienteColaID
let colaHeaderData = []

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
            if (docType.value === 'PED' || docType.value === 'CON'){
                clienteColaID = `${documento[0][1]}-${documento[0][6]}`
            }else{
                clienteColaID = `${documento[0][0]}-${documento[0][8]}`
            }
            //valida si no hay cliente asignado a la cola o si el cliente/domicilio coincide con el existente
            if(!clienteDomicilio || clienteDomicilio === clienteColaID){
                if(!clienteDomicilio){
                    const colaHeader = assignClientToQueue(documento[0],docType.value)
                    colaContainer.appendChild(colaHeader)
                    if(docType.value === 'PED' || docType.value === 'CON'){
                        colaHeaderData.push(documento[0][2])
                        colaHeaderData.push(documento[0][7])
                        colaHeaderData.push(documento[0][8])
                        colaHeaderData.push(documento[0][9])
                    }else{
                        colaHeaderData.push(documento[0][1])
                        colaHeaderData.push(documento[0][9])
                        colaHeaderData.push(documento[0][10])
                        colaHeaderData.push(documento[0][11])
                    }
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

//Alistar las etiquetas
async function alistarEtiquetas(){
    //get the list of documents in the queue
    const colaDocs = document.querySelectorAll('.documentoEnCola')
    const mainContainer = document.querySelector('.mainContainer')
    const btnContainer = document.querySelector('.generarEtiquetasBtnContainer')
    const etiquetasContainer = document.querySelector('.etiquetasContainer')
    const neveras = document.querySelector('#cantNeveras')
    const cajas = document.querySelector('#cantCajas')
    const body = document.body

    if(neveras.value != 0 || cajas.value != 0){
        let Ids = []
        colaDocs.forEach(doc => {Ids.push(doc.id)})
    
        mainContainer.classList.toggle('disabled')
        btnContainer.classList.toggle('disabled')

        let totalNeveras = neveras.value || 0
        let totalCajas = cajas.value || 0
        
        const etiquetas = generarEtiquetas(Ids,colaHeaderData,totalNeveras,totalCajas)
        etiquetasContainer.appendChild(etiquetas)
        
        window.print()

        etiquetasContainer.innerHTML = ''
        neveras.value = ''  
        cajas.value = ''
        mainContainer.classList.toggle('disabled')
        btnContainer.classList.toggle('disabled')
    }else{
        alert(`Debe seleccionar cantidad de neveras/cajas`)
    }
}




export {addToQueueHandler, alistarEtiquetas}