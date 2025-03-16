//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let filaSorteio = [];
let primeiroSorteado = null; // Para armazenar o primeiro sorteado

// Detecta tecla Enter no campo de entrada
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    inputNome.value = "";
    embaralharFila(); // Sempre que um nome novo é adicionado, reorganizamos a fila
}

function atualizarLista() {
    const listaNomes = document.getElementById("listaAmigos");
    listaNomes.innerHTML = "";
    
    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

function embaralharFila() {
    // Copia a lista de amigos e embaralha aleatoriamente
    filaSorteio = [...amigos].sort(() => Math.random() - 0.5);
    primeiroSorteado = null; // Reinicia o primeiro sorteado quando a fila é embaralhada
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes antes de sortear.");
        return;
    }
    
    if (filaSorteio.length === 0 && primeiroSorteado !== null) {
        document.getElementById("resultado").textContent = `Amigo secreto: ${primeiroSorteado}`;
        primeiroSorteado = null; // Reseta após o último sorteio
        return;
    }
    
    if (filaSorteio.length === 0) {
        alert("Todos os amigos já foram sorteados.");
        return;
    }
    
    const nomeSorteado = filaSorteio.shift(); // Remove o primeiro nome da fila
    if (primeiroSorteado === null) {
        primeiroSorteado = nomeSorteado; // Armazena o primeiro sorteado
    }
    document.getElementById("resultado").textContent = `Amigo secreto: ${nomeSorteado}`;
}
