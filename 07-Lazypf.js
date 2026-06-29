//combinar programacion 

const esPar=n=> n%2===0;
const multiplocinco=n=>n%5===0;
//Definimos la funtion 
function* filtrarNumeros(iterable, predicado){
for (let dato of iterable){
    if(predicado (dato)){
        yield dato;
    }
  }

}

function* generarNumeros(){
    let i=0;
    while (true) yield i++;
}
//Generar los numeros a traves de una veriable 
const numerosAleatorios=generarNumeros()
const generarPares=filtrarNumeros
(numerosAleatorios, multiplocinco);

console.log("primer numero par: ", generarPares .next().value)
console.log("primer numero par: ", generarPares .next().value)
console.log("primer numero par: ", generarPares .next().value)
console.log("primer numero par: ", generarPares .next().value)
