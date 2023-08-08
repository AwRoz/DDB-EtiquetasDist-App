function deleteItemBtn(event){
    parent = event.target.parentNode
    parent.remove()

    removeColaHeader()
  }


  function removeColaHeader(){
    if(document.querySelector('.colaDocumentos').children.length === 0){
      location.reload()
    }
  }

