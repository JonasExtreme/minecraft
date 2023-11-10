let numero = 0
var limite = 50
var musica = document.getElementById("musica")

function botanumero(){
    if (numero < limite){
        numero++
        document.getElementById("contador").textContent = "Cliques: " + numero;
    }
    if (numero === limite){
        document.getElementById("imagem").src ="../super simpson gamer clicker/imagens/2-removebg-preview.png";
        imagemElement.style.width = "300px";
        imagemElement.style.height = "300px";
    }
}
function tocamusica(){
        var musica = document.getElementById("musica");
        musica.play();
}