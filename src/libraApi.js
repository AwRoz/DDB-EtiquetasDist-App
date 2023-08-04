const mainEndpoint = 'http://localhost:3000/documentos'

async function fetchData(apiUrl){
    const res = await fetch(apiUrl)
    if (!res.ok) {
        if (res.status === 404) {
            alert(`Documento ingresado no existe`)
            throw new Error('Error en la peticion')
        }else{
            alert(`Error interno del servidor`)
            throw new Error('Error en la peticion')
        }
    }
    const data = await res.json()
    return data
}

async function getDocumento(documento,serieDoc){
    try{
        const factura = await fetchData(`${mainEndpoint}?documento=${documento}&serie=${serieDoc}`)
        return factura

    }catch(err){
        console.error('Error al obtener factura: ', err)
    }
}

export { getDocumento}