function fibonacci(numero){
    let nums = [0,1]
    for(let i = 0; i<=numero-3; i++)
    {
        nums.push(nums[i]+nums[i+1])
    }
    console.log(nums)
}
fibonacci(10000)

/*
function fibonacci2(Fn){
parseInt(Fn)
var n1 = 1
var n2 = 0
var n3 = 0

var resposta = []
resposta.push(n2,n1)
if(Fn<=2)
{
    Fn = Fn - 1
    //Fn--
}else{
    contador = 3
    while(contador<=Fn){
        n=n1 + n2
        n2 = n1
        n1 = n
        resposta.push(n)
        contador++
    }
}
console.log(resposta)
}
fibonacci2(59)*/

