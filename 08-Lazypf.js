const llenadoTanque = Object.freeze([
    "01-Magna", "02-premium", "03-Magna",
    "04-premium", "05-premium"
]);
//Definir la regla o predicado
const esPrimum=id=>id.includes("premium");
// Definir la funcion 
function* filtrarTipo(iterable, predicado){
    for(let gasolina of iterable ){
         console.log("Analiza el arreglo: ", gasolina)
        if(predicado(gasolina)){
            yield gasolina;

        }
    }
}
//Definimos la consulta 
const bombadeCarga=filtrarTipo
(llenadoTanque,esPrimum);
//Mostrar en pantalla
const premium=bombadeCarga.next().value;
console.log("Tipo gas: ",premium);