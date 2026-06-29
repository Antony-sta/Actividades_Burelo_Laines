const deepFreeze = obj => {

    Object.getOwnPropertyNames(obj).filter(key => {
     const val = obj[key];

     if (val && typeof val === 'object' ) deepFreeze (val);
    });
    return Object.freeze(obj);
}

const aspirantes = [
{ nombre: 'Luis', examen: 90, entrevista: 80, estudioSocioeconomico: true },
{ nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },
{ nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false },
{ nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },
{ nombre: 'Iván', examen: 90, entrevista: 90, estudioSocioeconomico: true }
];

// inmutable transformacion con map 

const listaTransformada = Object.freeze(
    aspirantes.map(a => Object.freeze({
        ...a,
puntajeFinal: a.examen *0.70 + a.entrevista * 0.30
    } ))
);

const calificaparaBeca = a => a.puntajeFinal >= 85 && a.estudioSocioeconomico;

// funcion peresosa

function* generadorBecados (lista){
    for (const item of lista) {
        if(calificaparaBeca (item)) yield item;
    }
}

//Solo los primeros 2 becados 
const iter = generadorBecados (listaTransformada);
const primerosBecados = [];
for(let i =0; i<2; i++){
    const {value,done} = iter.next();
    if(done) 
        break;
    primerosBecados.push(value);

}

const promedio = primerosBecados.length
?primerosBecados.reduce((acc, b) => acc + b.puntajeFinal, 0) / primerosBecados.length
:0;

console.log ('Lista transformada',listaTransformada);
console.log ('primeros 2 becados', primerosBecados);
console.log('promedio de puntaje', promedio.toFixed(2));
