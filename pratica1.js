const botao = document.getElementById("btnMensagem");

if (!botao) {

} else {

    botao.addEventListener("click", function () {
        alert("Olá! O pão de queijo quentinho acaba de sair do forno");

        console.log("Botão de boas-vidas clicado.");
    });

 
}


 const botao1 = document.getElementById("Desconto");

    if (!botao1) {

    } else {
        botao1.addEventListener("click", function () {
            alert("Croissant de chocolate com 20% de desconto hoje");

            console.log("Botão de desconto");
        });

    }