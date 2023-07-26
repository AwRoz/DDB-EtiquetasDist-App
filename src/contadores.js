// --------Contador Component -------- //
function decreaseValue(inputId){
    const input = document.getElementById(inputId)
    if(input.value){
        if(input.value > 0){
            input.value = parseInt(input.value) - 1
        }
    }
}
function increaseValue(inputId){
    const input = document.getElementById(inputId)
    if(!input.value){input.value = 0}
    if(input.value >= 0){
        input.value = parseInt(input.value) + 1
    }
}
//oculta o muestra la personalizacion de rangos
function hideShowRangos(){
    const bloque = document.querySelector('#desdeHasta')
    bloque.classList.toggle('disabled')
}

function deleteItemQueue(itemId){
    console.log(itemId);
    document.getElementById(itemId).remove()
}

export { decreaseValue, increaseValue, hideShowRangos, deleteItemQueue }