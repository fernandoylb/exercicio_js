document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = "O formulário é válido! O número B é maior que o número A."
    } else {
        mensagem.textContent = "O formulário é inválido! O número B deve ser maior que o número A."
        mensagem.className = "erro";
    }
});