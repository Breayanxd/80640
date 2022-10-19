function leer() {
    return document.getElementById("to-do").value
}
function agregar() {
    if(!buscar()){
        nodo = document.createElement("li")
        // texto = document.createTextNode("Hola")
        texto = document.createTextNode(leer())
        // console.log(texto)
        nodo.appendChild(texto)
        document.getElementById("lista").appendChild(nodo)
    }else{
        //window.alert("Error el elemento ya existe")
    }
}
function buscar() {
    band = false
    let listaToDo = document.getElementsByTagName("li")
    for(let index = 0; index < listaToDo.length; index++){
        if(leer()==listaToDo[index].textContent){
            window.alert("El elemento se encuentra en la lista")
            band = true
        }
    }
    return band
}

// function buscarForEach(){
//     document.getElementsByTagName("li")
// }

// function buscarForOf(){
//     listaToDo = document.getElementsByTagName("li")
//     for (const iterator of listaToDo) {
//         if(leer()==iterator.textContent)
//         window.alert("El elemento se encuentra en la lista")
//     }
// }


// function buscar() {
//     band = false
//     listaTodo = document.getElementsByTagName("li")
//     for (const tarea in listaToDo){
//         if(Object.hasOwnProperty.call(listaToDo, tarea)){
//             if(leer()==listaToDo[tarea].childNodes[0]){
//                 console.log("ya existe")
//                 band = true
//             }  
//         }
//     }
//     return band
// }

// function buscar(){
//     listaTodo = document.getElementsByTagName("li")
//     if(Object.hasOwnProperty.call(listaTodo, tarea)){
//         if(leer() == listaTodo[tarea].childNodes[0],valueOf()){
//             console.log("ya existe")
//         }
//     }
// }

