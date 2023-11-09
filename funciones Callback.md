# Funciones con variables por defecto

Al crear una función se define el número de variables que va a recibir. En una función con 2 variables, si solo paso 1 variable la otra tiene el valor por defecto.
function suma(a,b=8){
    return a+b;
}

console.log(suma(3,4))

// me devuelve 7

console.log(suma(3))

// me devuelve 11

# Funciones Callback

Pasa una función como uno de los parámetros de otra función.

function suma(a,b){
    return a+b;
}

suma = (a,b) => a + b;

function operar(callback(a,b)){
    return callback(a,b)
}

console.log(operar(suma(3,5)))