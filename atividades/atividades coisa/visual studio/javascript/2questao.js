function questao2(n1,n2,n3){
if(n1 == n2 && n1 == n3 && n2 == n3){
    return("Equilátero")
}
if(n1 == n2 || n1 == n3 || n2 == n3){
    return("Isósceles")
}
else{
    return("escaleno")
}
}
console.log(questao2(4,4,4))
