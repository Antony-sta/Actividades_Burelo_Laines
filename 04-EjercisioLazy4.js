//Generador de la serie de Fibonacci.
function* serieFibonacciLazy(limite) {

let a = 0;
let b = 1;
let indice = 0;

while (indice < limite ) {
    yield a;
    [a, b] = [b, a + b];
    indice += 1;

}
}

const limite = 10;
const fibonacci = serieFibonacciLazy(limite)
for (const numero of fibonacci){
    console.log(numero);
}
 