(()=>{"use strict";function e(e){const t=e.target.parentNode.querySelector(".contadorInput");t.value&&t.value>0&&(t.value=parseInt(t.value)-1)}function t(e){const t=e.target.parentNode.querySelector(".contadorInput");t.value||(t.value=0),t.value>=0&&(t.value=parseInt(t.value)+1)}let n,o=null;document.querySelector("#agregaDocumentosColaBtn").addEventListener("click",(async function(){const e=document.querySelector(".colaDocumentos"),t=document.querySelector("#numeroDocumento"),c=document.querySelector('.docTypeOption input[type="radio"]:checked');if(t.value&&c){const r=await async function(e,t){try{return await async function(e){const t=await fetch(e);if(!t.ok)throw 404===t.status?(alert("Documento ingresado no existe"),new Error("Error en la peticion")):(alert("Error interno del servidor"),new Error("Error en la peticion"));return await t.json()}(`http://localhost:3000/documentos?documento=${e}&serie=${t}`)}catch(e){console.error("Error al obtener factura: ",e)}}(t.value,c.value);if(r)if(n=`${r[0][0]}-${r[0][8]}`,console.log(n,o),o&&o!==n)alert("Cliente y/o Direccion del documento ingresado no coincide con el de la cola");else{const r=function(e,t){const n=document.createElement("li");n.classList.add("documentoEnCola");const o=document.createElement("p");o.innerText=`${e}/${t}`;const c=document.createElement("span");return c.classList.add("deleteItemBtn"),c.setAttribute("onclick","deleteItemBtn(event)"),c.innerText="Eliminar",n.appendChild(o),n.appendChild(c),n}(c.value,t.value);e.appendChild(r),o=n}c.checked=!1,t.value="",t.focus()}})),document.querySelectorAll(".decreaseValue").forEach((t=>{t.addEventListener("click",e)})),document.querySelectorAll(".increaseValue").forEach((e=>{e.addEventListener("click",t)})),document.querySelector(".desdeHastaTitle").addEventListener("click",(()=>{document.querySelector("#desdeHasta").classList.toggle("disabled")}))})();