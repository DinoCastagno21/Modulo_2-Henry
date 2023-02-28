"use strict";
const load = document.querySelector("img");
const buttom = document.querySelector("#search");
const veramigos = document.querySelector("#boton");
const lista = document.querySelector("#lista");
const inputBuscar = document.querySelector("#input");
const spanBuscar = document.querySelector("#amigo");
const borrarAmigo = document.querySelector("#delete");
const inpotBorrar = document.querySelector("#inputDelete");
const spanBorrar = document.querySelector("#success");
//mostrar amigos
const getFriends  = ()=> {
    lista.innerHTML = '';
    load.style.display = "flex";
    fetch("http://localhost:5000/amigos")
    .then(res => res.json())  
    .then(res => {
            load.style.display = "none";
            for(let i = 0; i < res.length;i++){
            let amigos = document.createElement("LI");
            lista.appendChild(amigos).innerHTML = res[i].name;
            }
    })
}


load.style.display = "none";
veramigos.addEventListener("click",getFriends)  

//buscar amigos 
buttom.addEventListener("click",()=>{
    let id = inputBuscar.value;
  fetch(`http://localhost:5000/amigos/${id}`)
    .then(res => res.json())  
    .then(res => {
        spanBuscar.innerHTML = res.name;
        inputBuscar.value = "";
        setTimeout(()=> spanBuscar.innerHTML = "",4000);
    })
    /* .catch(
        spanBuscar.innerHTML = "debe poner un id válido",
        inputBuscar.value = ""
    ) */
});

//eliminar amigo
borrarAmigo.addEventListener("click",()=> {
    let id = inpotBorrar.value;
    fetch(`http://localhost:5000/amigos/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(res => {  
    
        spanBorrar.innerHTML = `El amigo fue eliminado con éxito`;
        getFriends();
        inpotBorrar.value = "";
        setTimeout(()=> spanBorrar.innerHTML = "",4000);
        
    })
})



