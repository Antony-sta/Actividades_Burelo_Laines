//Obtener turnos
function obtenerTurno(){
    let contador = 1;
    const turno =`${contador}`
    contador++;
    return turno;

}

//console.log(obtenerTurno())
//console.log(obtenerTurno())

function* obtenerTurnoY(){
    let contador = 1;
    while(true){
        yield `Turno ${contador}`;
        contador++;
    }
    
}

const cajero= obtenerTurnoY();
console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);

//procesador de palabras 
function procesarPalabras(frase){
    const palabras = frase.split("");
    const resultado=[];
    for(let palabra of palabras){
        console.log(`procesando completo: ${palabra}`);
        resultado.push(palabra.toUpperCase());
    

    }
    return resultado;
}
const palabrasEscritas=procesarPalabras ("programacion con JS");
console.log("resultado:", palabrasEscritas[0]);

function* procesarDatos (frase){
    const palabras = frase.split("");

    for(let palabra of palabras){
    console.log(`procesador de Datos ${palabra}`)
    yield palabra.toUpperCase();

    
    }
}

const textoLeido=procesarDatos("programacion con JS");
console.log("solo da la primera lectura");
console.log("Resultado", textoLeido.next().value);
console.log("solo da la segunda lectura");
console.log("Resultado", textoLeido.next().value);