function mostrarInfo(id){

    let elemento = document.getElementById(id);

    if(elemento.style.display === "block"){
        elemento.style.display = "none";
    }
    else{
        elemento.style.display = "block";
    }

}
