//Generar numeros primos con funcion imperativa 
const primoNumero=num =>{
    if (num<2) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0)return false;
    }
    return true; 
}
//Funcion Lazy
function* generarprimos(){
    let eval=2;
    while(true){
        if(primoNumero(eval)){
            yield eval;
        }
        eval++;
    }
}

const numerosprimos=generarprimos();

console.log("Primo 1:",numerosprimos.next().value);
console.log("primo 2:",numerosprimos.next().value);
console.log("primo 3:",numerosprimos.next().value);
console.log("primo 4:",numerosprimos.next().value);
console.log("primo 5:",numerosprimos.next().value);