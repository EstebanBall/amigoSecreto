// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){

amigo = document.getElementById("amigo");

if (amigo.value == ""){ 
        alert ("Porfavor agrega algun nombre") 
}else { 

    Personas.push(amigo.value);

    console.log(amigo);

    console.log(Personas);

    amigo.value = "";

    mostrarlista(amigo.value);
}
}

function mostrarlista(){

lista = document.getElementById("listaAmigos");
lista.value = Personas[NumAmigos];
NumAmigos++;



}
let Personas = [];
let amigo;
let NumAmigos = 0;
let lista;


