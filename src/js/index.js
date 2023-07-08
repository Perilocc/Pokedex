/*Passo 1: Pegar o elemento do botão trocador de tema no html */
const BotaoAlterarTema = document.getElementById("botão_alterador_de_tema");
/*Passo 2: Pegar o elemento que representa o body*/
const body = document.querySelector("body");
const cartão_pokemon = document.querySelector("cartão_pokemon")
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

/*Passo 3: Colocar um aviso no tools da página para identificar quantas vezes a pessa clicou no botão*/
BotaoAlterarTema.addEventListener("click", () => {
    
    /*Passo 6: Remover a class do modo-escuro do body*/
    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    
    body.classList.toggle("modo-escuro");
    
    if(ModoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")
        /*Passo 7: Adicionar a imagem do sol ao clicar no botão*/
        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } 
    else {
    /*Passo 4: Adicionar classe modo-escuro no body*/
    body.classList.add("modo-escuro");
    /*Passo 5: Trocar a imagem do botão do sol para a lua*/
    ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
}});










