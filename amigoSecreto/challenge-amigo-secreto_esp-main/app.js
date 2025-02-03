// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){

amigo = document.getElementById("amigo");

if (amigo.value == ""){ 
        alert ("Porfavor agrega algun nombre") 
}else { 

    Personas.push(amigo.value);

    mostrarlista(amigo.value);

    amigo.value = "";
}
}

function mostrarlista(amigo){
lista = document.getElementById("listaAmigos");
let nuevo = document.createElement("li");
nuevo.textContent = amigo;
lista.appendChild(nuevo);
}


function sortearAmigo() {

let numerox =  Math.floor(Math.random()*(Personas.length));

lista = document.getElementById("listaAmigos");
lista.style.display = "none";

let result = document.getElementById("resultado");
let resultx = document.createElement("li");
resultx.textContent = Personas[numerox];
result.appendChild(resultx);

}


let Personas = [];
let amigo;
let NumAmigos = 0;
let lista;



