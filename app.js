// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById("amigo").value;
    if (nombreDeAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    if (listaAmigos.includes(nombreDeAmigo)) {
        alert("Este nombre ya ha sido incluido");
        return;
    } else {
        listaAmigos.push(nombreDeAmigo);
        limpiarInput();
    }

    mostrarAmigos();

}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = listaAmigos[i];
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    }
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let indice = Math.floor(Math.random()*listaAmigos.length);
    resultado.innerHTML = listaAmigos[indice];
}

