 suma = (a,b=0) =>  a + b;

console.log(suma(3))

// si no le pasas una valor para que no de NAN le das 0 en los parametros

function resta (a,b){
    return a-b;
}

function multiplica (a,b){
    return a*b;
}

function operar (callback,a,b){
    return(callback(a,b))
}

console.log(operar(multiplica,3,5))
console.log(operar(suma,3,5))
console.log(operar(resta,3,5))