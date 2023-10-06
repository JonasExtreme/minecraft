function invertString(i){
    var teste = i.split("")
    console.log(teste)
    var invertido = teste.reverse()
    console.log(invertido)
    var string = invertido.join("")

    console.log(string)
}

invertString("JavaScript")