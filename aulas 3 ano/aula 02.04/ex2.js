let nota, media, resultado, cont = 0, acumula = 0

while(cont < 3){
    nota = Number(prompt("digite um nº"))
    acumula += nota
    cont++
}
media = acumula / 3
if(media >= 7.0){
    resultado = "Aprovado"
}
else{
    if(media >= 3){
        resultado = "recuperacao"
    }
    else{
        resultado = "reprovado"
    }
}
alert(resultado)