const facturasEndpoint = 'http://localhost:3000/facturas'
const albaranesEndpoint = 'http://localhost:3000/albaranes'
const pedidosEndpoint = 'http://localhost:3000/pedidos'

async function fetchData(apiUrl){
    const res = await fetch(apiUrl)
    const data = await res.json()
    return data
}

async function getFacturas(documento,serieDoc){
    try{
        const factura = await fetchData(`${facturasEndpoint}?factura=${documento}&serie=${serieDoc}`)
        return factura

    }catch(err){
        console.error('Error al obtener factura: ', err)
    }
}

export { getFacturas }