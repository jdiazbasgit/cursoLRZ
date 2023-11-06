 suma=(a, b=0) =>  a + b;

function resta(a,b){
    return a-b
}

function multiplica(a,b){
    return a*b
}

 operar=(callback,a,b)=>{
    let c=a+b
    return callback(c,b)
}

console.log(operar(multiplica,3,5))
console.log(operar(suma,3,5))
console.log(operar(resta,3,5))
