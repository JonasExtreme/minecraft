function impar(){
    var numero = prompt("escreva um número")

    if (numero  % 2 == 0){
        alert('par')
    }
        
    else {
        alert('impar')
    }
}


function fat(){    
    var numero = prompt('insira um numero')
    var resultado = numero * (numero - 1)

if (numero == 0){
    alert('seu número é 1')
}
else { 
    alert("seu número é" +resultado)
}
}

S