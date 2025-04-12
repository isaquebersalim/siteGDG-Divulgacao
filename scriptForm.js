document.getElementById("inscricaoForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    
    if (nome === "" || email === "" || telefone === "") {
        alert("Preencha todos os campos.");
        return;
    }

    const idGerado = "GDG-" + Math.floor(1000 + Math.random() * 9000);
    document.getElementById("resultado").innerHTML = 
        `Olá, ${nome}! Seu ID de inscrição é <strong>${idGerado}</strong>. 
        Um email com seu ID foi enviado para ${email}.`;

    // Exibir contador e iniciar a contagem regressiva
    document.getElementById("timer").classList.remove("hidden");
    let tempo = 20;
    const contador = document.getElementById("contador");

    const intervalo = setInterval(() => {
        tempo--;
        contador.textContent = tempo;
        if (tempo === 0) {
            clearInterval(intervalo);
            window.location.href = "index.html"; // Redireciona para a página inicial
        }
    }, 1000);
});