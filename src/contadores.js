//obtains the parent of the clicked button
function decreaseValue(event){
    const parent = event.target.parentNode
    const input = parent.querySelector('.contadorInput')
    if(input.value){
        if(input.value > 0){
            input.value = parseInt(input.value) - 1
        }
    }
}


function increaseValue(event){
    const parent = event.target.parentNode
    const input = parent.querySelector('.contadorInput')
    if(!input.value){input.value = 0}
    if(input.value >= 0){
        input.value = parseInt(input.value) + 1
    }
}

export { decreaseValue, increaseValue }